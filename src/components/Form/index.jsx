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
            doc.text("PROTOCOLO DE ANTEDIMENTO", 63, 34);
            doc.text(`Nome da pessoa: ${data.nome} `, 25, 50);
            doc.text(`__________________________________`, 70, 51);
            doc.text(`Nome da empresa: ${data.empresa} `, 25, 60);
            doc.text(`__________________________________`, 73, 61);
            doc.text(`Data: ${data.data} `, 25, 75);
            doc.text(`__________`, 38, 76);
            doc.text(`Numero do protocolo: ${data.servico}${data.data} `, 95, 75);
            doc.text(`__________`, 150, 76);
            doc.text(`Observações: ${data.obs}  `, 25, 100);
            

            // doc.addImage('./timbre2023.png',0 , 0, 100, 100)
            const imgBaixo = new Image();
            imgBaixo.src = './timbre-baixo.png'
            

            const img = new Image();
            img.src = './timbre2023.png';
            
            // Esperar o carregamento completo da imagem

            img.onload = function () {
           

            // Adicionar a imagem ao documento PDF
            doc.addImage(img, 'JPEG', 10, 3, 230, 22);
            doc.addImage(imgBaixo, 'JPEG', 0, 125, 210, 20);
           

            doc.save("protocolo.pdf");
        }
          

            // Carregue a imagem do cabeçalho
           

            
                        
 
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
                    <label htmlFor="servico">Tipo de serviço:</label>
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
                    <input type="date" {...register('data')} id='datas'/>
                </section>
              
            </div>

            <div className='inputs'>
                <section>
                    <label htmlFor="obs">Observações:</label>
                    <textarea name="" id="obs" cols="30" rows="8" {...register('obs')}></textarea>
                </section>
            </div>
            
            <div className='inputs'>
                <section>
                   <button>Gerar protocolo</button>
                </section>
            </div>
            <div className='inputs'>
                    <section>
                        <img src="./logo.png" alt="logomarca" id='logo'/>
                    </section>
            </div>

            </form>


        </div>
        
    )
}