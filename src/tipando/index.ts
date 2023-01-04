import { frota } from "./frota"
type Carro = {
  marca:string,
   modelo:string,
   ano:number}

function buscarCarrosPorMarca(frota:Carro[], marca:string):Carro[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota,"Toyota"))