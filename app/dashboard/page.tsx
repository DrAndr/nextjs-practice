import Counter from './components/Counter'

export default function Page() {
    const data = { title: 'Dashboard Page', counter: 0 }

    return (
        <div>
            <h1>{data.title}</h1>
            <Counter initialValue={data.counter} />
        </div>
    )
}