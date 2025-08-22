import { useCallback, useState } from "react";
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
  const [prompts, setPrompts] = useState([getRandomPrompt(promptGroup)]);
  const [count, setCount] = useState(1);

  const onCountChange = useCallback(
    (value: number) => {
      const newPrompts = [...prompts];
      while (newPrompts.length !== value) {
        if (value > newPrompts.length) {
          newPrompts.push(getRandomPrompt(promptGroup));
        } else {
          newPrompts.pop();
        }
      }
      setCount(value);
      setPrompts(newPrompts);
    },
    [promptGroup, prompts]
  );

  return (
    <>
      <Background />
      <div className="h-[100vh] w-[100vw] flex items-center justify-center ">
        <div className="sm:mx-12 w-full md:w-2/3 rounded-xl shadow-xl bg-white px-4 md:px-20 py-16">
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl lg:text-5xl text-center font-light pb-16">
                8BMT Prompt Generator!
              </h1>
              <div className="flex justify-between items-center lg:w-2/3 space-x-2 sm:space-x-4">
                <select
                  value={promptGroup}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md lg:text-lg xl:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-3/4 p-2.5"
                  onChange={(e) => setPromptGroup(e.target.value as PromptType)}
                >
                  <option value="all">All Prompts</option>
                  <option value="thematic">Thematic Prompts</option>
                  <option value="musical">Musical Elements</option>
                  <option value="genre">Genre/Ensemble Prompts</option>
                  <option value="arrangement">Arrangement Prompts</option>
                </select>
                <input
                  type="number"
                  min={1}
                  value={count}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 xl:w-20 w-14 h-full"
                  onChange={(e) => onCountChange(Number(e.target.value ?? "0"))}
                />
                <button
                  onClick={() =>
                    setPrompts(
                      new Array(count)
                        .fill(null)
                        .map((_) => getRandomPrompt(promptGroup))
                    )
                  }
                  className="inline-block bg-[#E935EC] rounded-xl font-medium h-full mx-auto px-4 py-3"
                >
                  Generate!
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <PromptView prompt={prompts[0]} />
            </div>
            <div className="text-center text-black/70 italic">
              &copy;{" "}
              <a
                href="https://github.com/ItayElf/8BMT-prompts"
                className="text-[#E935EC]"
              >
                ItayElf
              </a>{" "}
              for creating the website and{" "}
              <a
                href="https://www.youtube.com/c/8bitmusictheory"
                className="text-[#E935EC]"
              >
                8-bit Music Theory
              </a>{" "}
              for the prompts
              <br />
              The website was last updated on 22/08/2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
