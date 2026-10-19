import { faq, faqText } from "@data/chatFaq.js";
import { useLang } from "@i18n/useLang.js";

export default function ChatQuickReplies({ onSelect, disabled }) {
  const { lang, t } = useLang();

  return (
    <div className="border-t border-white/5 px-4 py-3">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-primaryText/50">
        {t("chat.pick")}
      </p>
      <div className="flex flex-wrap gap-2">
        {faq.map((item) => (
          <button
            key={item.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(item.id)}
            className="rounded-full border border-accent/40 px-3 py-1.5 text-xs text-accent transition-colors hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {faqText(item.id, "q", lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
