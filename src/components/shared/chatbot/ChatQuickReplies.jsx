import { useLang } from "@i18n/useLang.js";

const QUICK_REPLY_KEYS = ["chat.quick.who", "chat.quick.projects", "chat.quick.contact"];

export default function ChatQuickReplies({ onSelect, disabled }) {
  const { t } = useLang();

  return (
    <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
      {QUICK_REPLY_KEYS.map((key) => (
        <button
          key={key}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(t(key))}
          className="rounded-full border border-accent/40 px-3 py-1.5 text-xs text-accent transition-colors hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t(key)}
        </button>
      ))}
    </div>
  );
}
