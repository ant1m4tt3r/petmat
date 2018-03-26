import React, { Component } from "react";
import MaskedInput from "react-text-mask";
// import math from "mathjs";

class CPF extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      showButton: false,
      result: ""
    };
  }

  dotProduct(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.error(arr1, arr2);
      throw Error("Ambos arrays devem ter as mesmas dimensões");
    }

    let intern = 0;
    for (let i = 0; i < arr1.length; i++) {
      intern += arr1[i] * arr2[i];
    }
    return intern;
  }

  formatResult(cpf, first, second) {
    let result = "";
    cpf.map((el, i) => {
      if (i % 3 === 0 && i !== 0 && i !== cpf.length - 1) result += ".";
      result += el;
    });
    result += "-";
    result += first;
    result += second;

    return result;
  }

  calcCPF() {
    let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let cpf = this.state.value.split("");

    // Produto interno entre o vetor de pesos e os números do CPF.
    const firstIntern = this.dotProduct(weights, cpf);

    // O primeiro dígito verificador é o resto da divisão do produto interno por 11.
    const firstRemainder = firstIntern % 11;

    // Se o resto da divisão for igual a 10, o primeiro dígito será 0.
    const firstDigit = firstRemainder === 10 ? 0 : firstRemainder;

    // Acrescento o primeiro dígito encontrado no fim do vetor CPF e 0 ao início do vetor de pesos.
    cpf.push(firstDigit);
    weights.unshift(0);

    // Produto interno entre o vetor de pesos modificado e os números do CPF com o primeiro dígito verificador.
    const secondIntern = this.dotProduct(weights, cpf);

    // O segundo dígito verificador é o resto da divisão do segundo produto interno por 11.
    const secondRemainder = secondIntern % 11;

    // Se o resto da divisão for igual a 10, o segundo dígito será 0.
    const secondDigit = secondRemainder === 10 ? 0 : secondRemainder;

    cpf.pop();

    const result = this.formatResult(cpf, firstDigit, secondDigit);

    this.setState({
      result: "O seu CPF é: " + result
    });
  }

  valueChange(e) {
    let val = e.target.value || "";
    val = val.replace(/\./g, "").replace(/_/g, "");

    this.setState(
      {
        value: val,
        showButton: false,
        result: ""
      },
      () => {
        if (val.length === 9) {
          this.calcCPF();
        }
      }
    );
  }

  render() {
    return (
      <div>
        <h2>CPF</h2>
        <div className="input-group-lg">
          <MaskedInput
            value={this.value}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/
            ]}
            className="form-control input"
            guide={true}
            placeholder="Digite o seu CPF"
            id="input-cpf"
            type="text"
            onChange={this.valueChange.bind(this)}
          />
        </div>
        <div className="h2 heading result text-center">
          {this.state.result ? this.state.result : ""}
        </div>
      </div>
    );
  }
}

export default CPF;
