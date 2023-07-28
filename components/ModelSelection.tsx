"use client"
import useSWR from 'swr'
import Select from "react-select";

// Helper function
const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
// useSWR --> ("name", "function for fetching info")
const { data: models, isLoading } = useSWR('models', fetchModels)
// Request is cached for future uses; meaning lowers overall number of requests on app
const { data: model, mutate: setModal } = useSWR('model', {
    fallbackData: 'text-davinci-003'
})


  return (
    <div className='mt-2'>
        <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModal(e.value)}
        />
    </div>
  )
}

export default ModelSelection