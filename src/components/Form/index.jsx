import './style.css'
import { jsPDF } from "jspdf";
import { useForm } from 'react-hook-form'



export function Form(){

    const { register, handleSubmit } = useForm()

   



   
    return(
        <div className='formulario'>
            <h1>Protocolos</h1>
    <form onSubmit={handleSubmit((data) => {
            console.log(data)

            const hoje = new Date()
            hoje.getHours()
            console.log(hoje.getHours());
            
        

            const doc = new jsPDF();
            doc.text("PROTOCOLO DE ANTEDIMENTO", 63, 34);
            doc.text(`Nome da pessoa: ${data.nome} `, 25, 50);
            doc.text(`___________________________________`, 70, 51);
            doc.text(`Nome da empresa: ${data.empresa} `, 25, 60);
            doc.text(`__________________________________`, 73, 61);
            doc.text(`Refere-se a: ${data.refere}`, 25, 70);
            doc.text(`________________________________________`, 55, 71);
            doc.text(`Data: ${data.data} `, 25, 80);
            doc.text(`__________`, 38, 81);
            doc.text(`Numero do protocolo: ${data.servico}${data.data}${hoje.getHours()}${hoje.getMinutes()}`, 95, 80);
            doc.text(`__________`, 150, 81);
            doc.text(`Observações: ${data.obs}  `, 25, 100);
            doc.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, 0, 150)
            doc.text(`VIA DO CLIENTE`, 80, 190);
            doc.text(`Assinatura:`, 52, 213);
            doc.text(`___________________________`, 25, 206);
            doc.text(`Numero do protocolo:`, 130, 204);
            doc.text(`${data.servico}${data.data} `, 135, 210);
            

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
            
            doc.addImage(img, 'JPEG', 10, 150, 230, 22);
            doc.addImage(imgBaixo, 'JPEG', 0, 220, 210, 20);

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
                    <label htmlFor="refere">Refere-se a:</label>
                    <input type="text" {...register('refere')}/>
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