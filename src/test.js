
import FormulaAnalysis from "./index"

const fml = {
  sum(a,b){
    return a+b
  }
}
var formulaAnalysis = new FormulaAnalysis(fml)

const ao = {
  a:10,
  b:5
}
var res = formulaAnalysis.analysis("sum(a,b)",ao)
console.log(res)