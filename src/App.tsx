import { useState } from "react";
import { ALL_PROMPTS } from "./data";

type PromptType = "all" | "thematic" | "musical" | "genre" | "arrangement";

export default function App() {
  const [promptGroup, setPromptGroup] = useState<PromptType>("all");

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#E935EC]">
      <div className="container rounded-xl shadow-xl bg-white p-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-light pb-16">
            8BMT Prompt Generator!
          </h1>
          <div className="w-1/3">
            <select
              value={promptGroup}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setPromptGroup(e.target.value as PromptType)}
            >
              <option value="all">All Prompts</option>
              <option value="thematic">Thematic Prompts</option>
              <option value="musical">Musical Elements</option>
              <option value="genre">Genre/Ensemble Prompts</option>
              <option value="arrangement">Arrangement Prompts</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
