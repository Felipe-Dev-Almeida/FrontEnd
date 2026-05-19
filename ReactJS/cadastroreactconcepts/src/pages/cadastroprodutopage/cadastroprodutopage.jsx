import "./cadastroprodutopage.css"

export const CadastroProdutoPage = () => {
    
    return (
        <section className="cadastro-produto">

            <h1 className="titulo">Cadastro de Produto</h1>

            <form className="form-produto">

                <input
                    type="text"
                    placeholder="Nome do produto"
                />

                <div className="input-preco">



                    <input
                        type="number"
                        placeholder="0,00"
                    />

                </div>


                <textarea
                    placeholder="Descrição do produto"
                ></textarea>

                <input
                    type="file"
                    accept="image/*"
                />

                <div className="botoes">
                    <button type="submit">
                        Cadastrar
                    </button>

                    <button type="reset">
                        Limpar
                    </button>


                </div>

            </form>

        </section>
    )
}