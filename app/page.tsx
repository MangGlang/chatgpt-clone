import { MoonIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <MoonIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a cat and a dog?</p>
            <p className="infoText">"How bright is a full moon?"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;