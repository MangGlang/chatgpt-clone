
import { MoonIcon, ExclamationTriangleIcon, EyeIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <MoonIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">&quot;Explain something to me&quot;</p>
            <p className="infoText">&quot;What is the difference between a cat and a dog?&quot;</p>
            <p className="infoText">&quot;How bright is a full moon?&quot;</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the chatGPT Model to use</p>
            <p className="infoText">Messages are stored in Firebase&apos;s Firestore</p>
            <p className="infoText">Hot Toast Notifications when chatGPT is thinking!</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <EyeIcon className="h-6 w-6" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;