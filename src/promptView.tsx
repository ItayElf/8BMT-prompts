import { Prompt } from "./data";

interface Props {
  prompt: Prompt;
}

function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export default function PromptView({ prompt }: Props) {
  return (
    <div className="">
      <div className="bg-[#E935EC]/50 shadow-xl rounded-xl p-4 py-8 text-center">
        <h2 className="font-medium text-2xl lg:text-3xl">
          {toTitleCase(prompt.title)}
        </h2>
        <div className="text-black/80 italic pb-8">
          {prompt.week.replaceAll("wk", "week")}
        </div>
        <div className="text-lg lg:text-xl">
          {toTitleCase(prompt.description)}
        </div>
      </div>
    </div>
  );
}
