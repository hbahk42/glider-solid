import { For } from "solid-js";

const generateRandomNumber = () => Math.floor(Math.random() * 500);

const trends = [
  {
    category: "Sports",
    content: "Some team won somthing!",
    glideCount: generateRandomNumber()
  },
  {
    category: "Finance",
    content: "Bitcoin down again!",
    glideCount: generateRandomNumber()
  },
  {
    category: "PC & Games",
    content: "New Eincode game out!",
    glideCount: generateRandomNumber()
  },
  {
    category: "Economy",
    content: "It's goin well...",
    glideCount: generateRandomNumber()
  },
  {
    category: "Celebrities",
    content: "Some useless news!",
    glideCount: generateRandomNumber()
  },
  {
    category: "Movies",
    content: "Peter Jackson as the director of new Lotr.",
    glideCount: generateRandomNumber()
  }
]

const TrendsSidebar = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>

      <For each={trends}>
        {
          (trend) =>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
              <div class="flex-it">
                <span class="text-gray-400 text-sm">
                  {trend.content}
                </span>
                <span class="text-lg font-bold">{trend.category}</span>
                <span class="text-gray-400 text-sm">{trend.glideCount} glides</span>
              </div>
            </div>
        }
      </For>

    </div>
  );
};

export default TrendsSidebar;
