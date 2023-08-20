import { Cat } from "../data/types.ts"

export function Product(props: Cat) {
  const { id, price, name, photo } = props

  return (
    <div className="border rounded shadow-sm px-3 py-2 col-sm-2 my-2" id={id}>
      <div className="card">
        <a href={`/cats/${id}`}>
          <img src={`${photo}`} alt={name} />
        </a>
        <div className="my-2 flex justify-between items-center">
          <h5 className="text-2xl">{name}</h5>
          <p className="text-lg">${price}</p>
        </div>
        <button className="mb-1 px-2 py-1 bg-red-400 rounded text-white">加到購物車</button>
      </div>
    </div>
  )
}
