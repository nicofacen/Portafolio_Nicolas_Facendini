import PanelSection from "@components/side_menu/PanelSection";
import ProjectResultCard from "@components/side_menu/ProjectResultCard";
import { projects } from "@data/projects.js";
import { useLang } from "@i18n/useLang.js";
import { useMemo, useState } from "react";

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export default function SearchPanel() {
  const { t } = useLang();
  const [searchTerm, setSearchTerm] = useState("");

  const results = useMemo(() => {
    const term = normalize(searchTerm.trim());
    if (!term) return [];

    return projects.filter((project) => {
      const haystack = normalize(
        [
          project.title,
          project.description,
          project.descriptionEn ?? "",
          ...(project.technologies ?? []),
        ].join(" ")
      );
      return haystack.includes(term);
    });
  }, [searchTerm]);

  const resultsLabel =
    results.length === 1
      ? t("search.resultOne", { term: searchTerm })
      : t("search.resultMany", { count: results.length, term: searchTerm });

  return (
    <PanelSection>
      <div className="px-3">
        <h2 className="font-bold text-sm tracking-wide text-accent mb-3">{t("search.title")}</h2>

        {/* Search Input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder={t("search.placeholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-secondary text-primaryText px-3 py-2 text-xs rounded border border-gray-700 focus:border-accent focus:outline-none"
          />
        </div>

        {/* Search Results */}
        <div className="mt-4">
          {!searchTerm.trim() && (
            <p className="text-gray-500 text-xs italic">{t("search.hint")}</p>
          )}

          {searchTerm.trim() && (
            <p className="text-gray-500 text-xs mb-2">
              {results.length > 0
                ? resultsLabel
                : t("search.noResults", { term: searchTerm })}
            </p>
          )}

          {results.length > 0 && (
            <div className="flex flex-col gap-2">
              {results.map((project) => (
                <ProjectResultCard key={project.title} project={project} />
              ))}
            </div>
          )}

          {searchTerm.trim() && results.length === 0 && (
            <p className="text-gray-600 text-xs">{t("search.tryAnother")}</p>
          )}
        </div>
      </div>
    </PanelSection>
  );
}
