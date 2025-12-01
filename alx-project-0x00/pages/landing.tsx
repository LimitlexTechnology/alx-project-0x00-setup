import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="mt-4 grid gap-3">
        <div className="flex gap-3 items-center">
          <Button title="Small / rounded-sm" styles="border px-2 py-1 text-sm bg-blue-500 text-white rounded-sm" />
          <Button title="Small / rounded-md" styles="border px-2 py-1 text-sm bg-blue-500 text-white rounded-md" />
          <Button title="Small / rounded-full" styles="border px-2 py-1 text-sm bg-blue-500 text-white rounded-full" />
        </div>
        <div className="flex gap-3 items-center">
          <Button title="Medium / rounded-sm" styles="border px-3 py-2 text-base bg-blue-500 text-white rounded-sm" />
          <Button title="Medium / rounded-md" styles="border px-3 py-2 text-base bg-blue-500 text-white rounded-md" />
          <Button title="Medium / rounded-full" styles="border px-3 py-2 text-base bg-blue-500 text-white rounded-full" />
        </div>
        <div className="flex gap-3 items-center">
          <Button title="Large / rounded-sm" styles="border px-4 py-3 text-lg bg-blue-500 text-white rounded-sm" />
          <Button title="Large / rounded-md" styles="border px-4 py-3 text-lg bg-blue-500 text-white rounded-md" />
          <Button title="Large / rounded-full" styles="border px-4 py-3 text-lg bg-blue-500 text-white rounded-full" />
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Landing
