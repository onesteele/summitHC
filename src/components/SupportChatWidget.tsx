import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/support-chat`;

/** Open the support chat from anywhere (e.g. the Help Center's center button). */
export const openSupportChat = () => {
  window.dispatchEvent(new CustomEvent("summit:open-chat"));
};

/** Animated "typing" indicator (three bouncing dots). */
const TypingDots = () => (
  <span className="inline-flex items-center gap-1 py-0.5" aria-label="typing">
    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50 animate-bounce [animation-delay:-0.3s]" />
    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50 animate-bounce [animation-delay:-0.15s]" />
    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50 animate-bounce" />
  </span>
);

const Avatar = ({ size = "sm" }: { size?: "sm" | "lg" }) => (
  <div
    className={`${size === "lg" ? "h-10 w-10 text-base" : "h-7 w-7 text-xs"} shrink-0 rounded-full grid place-items-center font-semibold text-white bg-gradient-to-br from-amber-400 to-amber-700`}
  >
    M
  </div>
);

const SupportChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Mia, Summit's support assistant. How can I help today — accounts, deposits, withdrawals, verification or the platform?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Allow other parts of the app to open the chat (Help Center "Chat" buttons).
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("summit:open-chat", handler);
    return () => window.removeEventListener("summit:open-chat", handler);
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        setMessages((p) => [
          ...p,
          { role: "assistant", content: err?.error || "Sorry, I'm having trouble right now." },
        ]);
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      setMessages((p) => [...p, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              setMessages((p) =>
                p.map((m, i) => (i === p.length - 1 ? { ...m, content: acc } : m))
              );
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Connection error — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const waitingForReply = loading && messages[messages.length - 1]?.role === "user";

  return (
    <>
      {/* Floating launcher */}
      <button
        aria-label="Open support chat"
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-5 right-5 z-[100] h-14 w-14 rounded-full grid place-items-center text-neutral-950 bg-gradient-to-br from-amber-400 to-amber-600 shadow-xl shadow-amber-900/30 transition-transform hover:scale-105 ${open ? "max-sm:hidden" : ""}`}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Messenger panel */}
      <div
        role="dialog"
        aria-label="Support chat"
        aria-hidden={!open}
        className={`fixed z-[100] flex flex-col overflow-hidden bg-card shadow-2xl origin-bottom-right transition-all duration-300 ease-out motion-reduce:transition-none inset-x-0 top-0 h-[100dvh] w-full rounded-none sm:left-auto sm:top-auto sm:bottom-24 sm:right-5 sm:h-[72vh] sm:max-h-[620px] sm:w-[92vw] sm:max-w-[380px] sm:rounded-2xl sm:border sm:border-border ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
          {/* Gradient header */}
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-neutral-900 px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full grid place-items-center font-semibold text-base bg-white/15 backdrop-blur">
                    M
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-amber-600" />
                </div>
                <div>
                  <span className="text-base font-semibold leading-none">Mia</span>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-white/90">

                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active now
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/80 hover:text-white p-1 -mr-1 -mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Conversation */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-background">
            {messages.map((m, i) =>
              m.role === "assistant" ? (
                <div key={i} className="flex items-end gap-2 justify-start">
                  <Avatar />
                  <div className="max-w-[78%] px-3.5 py-2.5 rounded-2xl rounded-bl-md text-sm leading-relaxed whitespace-pre-wrap bg-secondary text-foreground shadow-sm">
                    {m.content ? m.content : loading && i === messages.length - 1 ? <TypingDots /> : ""}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[78%] px-3.5 py-2.5 rounded-2xl rounded-br-md text-sm leading-relaxed whitespace-pre-wrap bg-amber-500 text-neutral-950 shadow-sm">
                    {m.content}
                  </div>
                </div>
              )
            )}

            {waitingForReply && (
              <div className="flex items-end gap-2 justify-start">
                <Avatar />
                <div className="px-3.5 py-3 rounded-2xl rounded-bl-md bg-secondary text-foreground shadow-sm">
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-border px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-card">
            <div className="flex items-end gap-2 rounded-xl border border-border bg-background px-3 py-2 transition-colors focus-within:border-amber-500/60">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={1}
                placeholder="Write a reply…"
                className="flex-1 resize-none bg-transparent text-sm outline-none max-h-28 placeholder:text-muted-foreground py-1"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="h-8 w-8 grid place-items-center rounded-full bg-amber-500 text-neutral-950 transition disabled:opacity-40 hover:bg-amber-400"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-[10px] text-muted-foreground mt-2 text-center">
            Not Investment Advice
            </div>
          </div>
        </div>
    </>
  );
};

export default SupportChatWidget;
