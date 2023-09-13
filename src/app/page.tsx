import Counter from "@/components/Counter/Counter"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter defaultValue={0} description="My Counter" defaultCountInterval={1}/>
    </main>
  )
}
