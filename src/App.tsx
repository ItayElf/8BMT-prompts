import { useState } from "react";
import {
  ALL_PROMPTS,
  ARRANGEMENT_PROMPTS,
  GENRE_PROMPTS,
  MUSICAL_PROMPTS,
  THEMATIC_PROMPTS,
} from "./data";
import PromptView from "./promptView";
import { Background } from "./background";

type PromptType = "all" | "thematic" | "musical" | "genre" | "arrangement";

const getPromptPool = (groupType: PromptType) => {
  switch (groupType) {
    case "all":
      return ALL_PROMPTS;
    case "thematic":
      return THEMATIC_PROMPTS;
    case "musical":
      return MUSICAL_PROMPTS;
    case "genre":
      return GENRE_PROMPTS;
    case "arrangement":
      return ARRANGEMENT_PROMPTS;
  }
};

const getRandomPrompt = (groupType: PromptType) => {
  const pool = getPromptPool(groupType);
  return pool[Math.floor(Math.random() * pool.length)];
};

export default function App() {
  const [promptGroup, setPromptGroup] = useState<PromptType>("all");
  const [prompt, setPrompt] = useState(getRandomPrompt(promptGroup));

  return (
    <>
      <Background />
      <div className="h-[100vh] w-[100vw] flex items-center justify-center ">
        <div className="w-2/3 rounded-xl shadow-xl bg-white px-20 py-16">
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl text-center font-light pb-16">
                8BMT Prompt Generator!
              </h1>
              <div className="flex justify-between items-center w-2/3">
                <select
                  value={promptGroup}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-3/4 p-2.5"
                  onChange={(e) => setPromptGroup(e.target.value as PromptType)}
                >
                  <option value="all">All Prompts</option>
                  <option value="thematic">Thematic Prompts</option>
                  <option value="musical">Musical Elements</option>
                  <option value="genre">Genre/Ensemble Prompts</option>
                  <option value="arrangement">Arrangement Prompts</option>
                </select>
                <button
                  onClick={() => setPrompt(getRandomPrompt(promptGroup))}
                  className="inline-block bg-[#E935EC] rounded-xl font-medium h-full mx-auto px-4 py-3"
                >
                  Generate!
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <PromptView prompt={prompt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
