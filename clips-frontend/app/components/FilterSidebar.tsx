"use client";

import { useState } from "react";

interface FilterState {
  activeFilters: string[];
  aiSuggestions: string[];
  aspectRatios: string[];
  captionStyles: string[];
  viralityScores: string[];
}

const FILTER_CONFIG = {
  activeFilters: ["All Clips", "Starred", "Trending", "Recent"],
  aiSuggestions: ["High Potential", "Medium Potential", "Low Potential", "Needs Review"],
  aspectRatios: ["16:9", "9:16", "1:1", "4:5"],
  captionStyles: ["Bold", "Italic", "Sans-serif", "Script"],
};

const VIRALITY_SCORES = ["90-100", "80-89", "70-79", "Under 70"];

export default function FilterSidebar() {
  const [filters, setFilters] = useState<FilterState>({
    activeFilters: ["All Clips"],
    aiSuggestions: [],
    aspectRatios: [],
    captionStyles: [],
    viralityScores: [],
  });

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = Array.isArray(prev[category]) ? prev[category] : [];
      const isSelected = current.includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  const NavigationItem = ({
    label,
    count,
    isActive,
  }: {
    label: string;
    count?: number;
    isActive: boolean;
  }) => (
    <button className="w-full text-left py-2 px-3 rounded-lg transition-all duration-200 group flex items-center justify-between hover:bg-white/5">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-[#22C55E]" : "text-white/70 group-hover:text-white/90"
        }`}
      >
        {label}
      </span>
      {isActive && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          className="text-[#22C55E]"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {count !== undefined && !isActive && (
        <span className="text-xs text-white/40">{count}</span>
      )}
    </button>
  );

  const CheckboxGroup = ({
    title,
    items,
    category,
    selectedItems,
  }: {
    title: string;
    items: string[];
    category: keyof FilterState;
    selectedItems: string[];
  }) => (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-3">
        {title}
      </h3>
      <div className="space-y-2 px-2">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item);
          return (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors duration-150 group"
            >
              <div
                className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isSelected
                    ? "bg-[#22C55E] border-[#22C55E]"
                    : "border-2 border-white/20 group-hover:border-white/40"
                }`}
              >
                {isSelected && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm transition-colors duration-200 ${
                  isSelected ? "text-white font-medium" : "text-white/70 group-hover:text-white/90"
                }`}
              >
                {item}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <aside className="sticky top-0 h-screen w-80 overflow-y-auto border-r border-white/5 bg-gradient-to-b from-[#121212] to-[#0f0f0f] py-8">
      {/* Header */}
      <div className="px-6 mb-8">
        <h2 className="text-base font-bold text-white mb-1">Curation Tools</h2>
        <p className="text-xs text-white/40">Filter and refine your clips</p>
      </div>

      {/* Navigation Filters */}
      <div className="space-y-6 px-3">
        {/* Active Filters Section */}
        <div>
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-3 mb-3">
            Active Filters
          </h3>
          <div className="space-y-1">
            {FILTER_CONFIG.activeFilters.map((filter) => (
              <NavigationItem
                key={filter}
                label={filter}
                isActive={filters.activeFilters.includes(filter)}
              />
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* AI Suggestions Section */}
        <div>
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-3 mb-3">
            AI Suggestions
          </h3>
          <div className="space-y-1">
            {FILTER_CONFIG.aiSuggestions.map((suggestion) => (
              <NavigationItem
                key={suggestion}
                label={suggestion}
                isActive={filters.aiSuggestions.includes(suggestion)}
              />
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Checkboxes Section with Aspect Ratio and Caption Styles */}
        <CheckboxGroup
          title="Aspect Ratio"
          items={FILTER_CONFIG.aspectRatios}
          category="aspectRatios"
          selectedItems={filters.aspectRatios}
        />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <CheckboxGroup
          title="Caption Styles"
          items={FILTER_CONFIG.captionStyles}
          category="captionStyles"
          selectedItems={filters.captionStyles}
        />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Virality Score Section */}
        <div>
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
            <span>✨ Virality Score</span>
          </h3>
          <CheckboxGroup
            title=""
            items={VIRALITY_SCORES}
            category="viralityScores"
            selectedItems={filters.viralityScores}
          />
        </div>
      </div>

      {/* Footer with Clear All */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5 bg-gradient-to-t from-[#050505] to-transparent">
        <button
          onClick={() =>
            setFilters({
              activeFilters: ["All Clips"],
              aiSuggestions: [],
              aspectRatios: [],
              captionStyles: [],
              viralityScores: [],
            })
          }
          className="w-full text-sm font-medium text-white/60 hover:text-white/90 py-2 px-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
