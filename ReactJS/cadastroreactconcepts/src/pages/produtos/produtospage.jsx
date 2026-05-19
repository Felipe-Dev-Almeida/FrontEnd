import { useEffect, useState } from "react";
import "./produtospage.css";
import imagemProduto from "/images/favicon.svg"

export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([])

    // states
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("hero.png");

    useEffect(() => {
        const getDados = async () => {
            try {
                const retornoAPI = await fetch("http://localhost:3000/produtos");
                const dados = await retornoAPI.json();
                // console.log(dados);
                setListaProdutos(dados); // Guarda os dados no state
            } catch (error) {
                console.log(error);
            }
        };
       getDados()
    }, []);

    const cadastrar = async (e) => {
        e.preventDefault() // Não deixa o formulário ser postado
        // Validar os dados
        if (
            titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) 
        ) {
            alert("Preencha todos os campos corretamente");
            return false;
        }

        // Cadastrar na api
        const objProduto = {
            titulo : titulo,
            descricao : descricao,
            preco : preco,
            imagem : imagem
        }
       
        const retornoAPI = await fetch ("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objProduto),
            headers: {
                "content-Type" : "aplication/json; charset=UTF=8"
            }
        })
        const produtoCadastrado = await retornoAPI.jspn()
        console.log(produtoCadastrado);
        setListaProdutos([...listaProdutos, produtoCadastrado])

        // Chamar a listagem novamente

        // Ou então, jogar o novo cadastro na listaProdutos
    };

    const deletar = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setListaProdutos(listaProdutos.filter(produto => produto.id !== id));
    }
  } catch (error) {
    console.log(error);
  }

  if(retornoAPI.status == 200 && retornoAPI.statusText == "OK"){
    alert("Produto apagado com sucesso!");
    setListaProdutos(novaLista);
  }else{
    alert("Erro ao cadastrar o produto");
  }

  } catch (error) {}
};
    return (
        <>
            <section className="container__produtos">
                <form className="formulario__cds" onSubmit={cadastrar}>

                    <h1>Cadastrar Produto</h1>

                    <div className="campo">
                        <label>Nome do produto</label>

                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            onChange={(e) => {
                                setTitulo(e.target.value)
                            }}
                        />
                    </div>

                    <div className="campo">
                        <label>Descrição</label>

                        <textarea
                            placeholder="Descrição do produto"
                            onChange={(e) => {
                                setDescricao(e.target.value)
                            }}
                        ></textarea>
                    </div>

                    <div className="campo">
                        <label>Preço</label>

                        <input
                            type="number"
                            placeholder="R$"
                            onChange={(e) => {
                                setPreco(e.target.value)
                            }}
                        />
                    </div>
                    
                    <div className="campo">
                        <label>Imagens do produto</label>

                        <label className="upload__imagem">
                            Clique aqui para adicionar as imagens do produto

                            <input
                                type="file"
                                multiple
                                onChange={(e) => {
                                setImagem(e.target.value)
                            }}
                            />
                        </label>
                    </div>

                    <button>
                        Cadastrar
                    </button>

                </form>
            </section>

            <section className="produtos__cadastrados">
                    
                        <div className="linha__pdt">
                            {listaProdutos.map((p) => {
                                return (
                                    <article className="produto__cartao" key={p.id}>
                                        <img src={imagemProduto} alt={p.titulo} />

                                        <div className="produto__infos">
                                            <h3>{p.titulo}</h3>
                                            <p>{p.descricao}</p>
                                            <span>{p.preco}</span>
                                            <a href="" onClick={(e)=>{
                                                e.preventDefault()
                                                deletar(p.id)
                                            }}>Apagar</a>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    
            </section>
        </>
    );

