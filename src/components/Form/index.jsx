import './style.css'
import { jsPDF } from "jspdf";
import { useForm } from 'react-hook-form'



export function Form(){

    const { register, handleSubmit } = useForm();


    return(
        <div className='formulario'>
            <h1>Protocolos</h1>
    <form onSubmit={handleSubmit((data) => {
            console.log(data)

            const doc = new jsPDF();
            doc.text("Protocolo de atendimento", 70, 30);
            doc.text(`Nome da pessoa: ${data.nome} `, 30, 50);
            doc.text(`__________________________________`, 75, 51);
            doc.text(`Nome da empresa: ${data.empresa} `, 30, 60);
            doc.text(`__________________________________`, 78, 61);
            doc.text(`Data: ${data.data} `, 30, 75);
            doc.text(`__________`, 43, 76);
            doc.text(`Numero do protocolo: ${data.servico}${data.data} `, 95, 75);
            doc.text(`__________`, 150, 76);
            doc.text(`Observações: ${data.obs}  `, 30, 100);
            doc.save("protocolo.pdf");


            // Carregue a imagem do cabeçalho
           

            const imageData = "";

            doc.addImage(imageData, 'PNG', 0, 0, 320, 50);

                        
 
            console.log(data);
})}>

    
            <div className='inputs'>
                <section>
                    <label htmlFor="nome">Nome da pessoa:</label>
                    <input type="text" {...register('nome')}/>
                </section>
            </div>

            <div className='inputs'>
                <section>
                    <label htmlFor="empresa">Nome da empresa:</label>
                    <input type="text" {...register('empresa')}/>
                </section>
            </div>

            <div className='inputs'>
                <section>
                    <label htmlFor="servico">Tipo de serviço</label>
                    <select name="" id="servico" {...register('servico')}>
                        <option value="320">Atendimento com contadora</option>
                        <option value="450">Atendimento abertura de MEI</option>
                        <option value="410">Atendimento diversos</option>
                    </select>
                </section>
            </div>

            <div className='inputs'>
                <section>
                    <label htmlFor="data">Data:</label>
                    <input type="date" {...register('data')}/>
                </section>
              
            </div>

            <div className='inputs'>
                <section>
                    <label htmlFor="obs">Observações:</label>
                    <textarea name="" id="obs" cols="30" rows="10" {...register('obs')}></textarea>
                </section>
            </div>
            
            <div className='inputs'>
                <section>
                   <button>Gerar protocolo</button>
                </section>
            </div>

            </form>


        </div>
    )
}