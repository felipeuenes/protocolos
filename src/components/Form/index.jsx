import './style.css'
import { jsPDF } from "jspdf";
import { useForm } from 'react-hook-form'
// import { Input, Form } from 'antd';

// import { Select } from 'antd';
// import { Option } from 'antd/es/mentions';

export function Formu(){

    const { register, handleSubmit } = useForm()

   

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dateAtual = dia + '/' + mes + '/' + ano;
    console.log(dateAtual);
    let dataProtocolo = dia + mes + ano;

   
    return(
        <div className='formulario'>
            <h1>Protocolos</h1>
    <form onSubmit={handleSubmit((data) => {

            console.log(data)

            const hoje = new Date()
            hoje.getHours()
            // console.log(hoje.getHours());          
            
            console.log(data.servico);

            const doc = new jsPDF();
            doc.text("PROTOCOLO DE ANTEDIMENTO", 63, 34);
            doc.text(`Nome da pessoa: ${data.nome} `, 25, 50);
            doc.text(`___________________________________`, 70, 51);
            doc.text(`Nome da empresa: ${data.empresa} `, 25, 60);
            doc.text(`__________________________________`, 73, 61);
            doc.text(`Refere-se a: ${data.refere}`, 25, 70);
            doc.text(`________________________________________`, 55, 71);
            doc.text(`Data: ${dateAtual} `, 25, 80);
            doc.text(`__________`, 38, 81);
            doc.text(`Número do protocolo: ${data.servico}${dataProtocolo}${hoje.getHours()}${hoje.getMinutes()}`, 75, 80);
            doc.text(`________________`, 130, 81);
            doc.text(`Observações: ${data.obs}  `, 25, 100);
            doc.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, 0, 150)
            doc.text(`VIA DO CLIENTE`, 80, 190);
            doc.text(`Assinatura:`, 52, 213);
            doc.text(`___________________________`, 25, 206);
            doc.text(`Numero do protocolo:`, 130, 204);
            doc.text(`${data.servico}${dataProtocolo}${hoje.getHours()}${hoje.getMinutes()}`, 135, 210);
            

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
            doc.addImage(imgBaixo, 'JPEG', 0, 230, 210, 20);

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
                        <option value="150">Visitas em geral</option>
                        <option value="250">Prestação de serviços</option>
                        <option value="350">Assinamento de documento no ambiente interno</option>
                        <option value="450">Consultorias; Mentorias; Visitas da Gerente do Empreenda Mais</option>
                        <option value="550">Acompanhamento de especialistas ou parceiros - mentorias ou consultorias</option>
                        <option value="650">Palestras; oficinas; outros</option>
                    </select>

        {/* <Select
                // mode="multiple"
                style={{ width: '100%' }}
                placeholder="Selecione os valores"
                {...register('servicos')}>
                <Option value="150">Visitas em geral</Option>


                <Option value="250">Atendimento para prestação de serviço</Option>
                <Option value="350">Assinamento de documento no ambiente interno</Option>
                <Option value="450">Consultorias; Mentorias; Visitas da Gerente do Empreenda Mais</Option>
      </Select> */}
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
            {/* <div className='inputs'>
                    <section>
                        <img src="./logo.png" alt="logomarca" id='logo'/>
                    </section>
            </div> */}

            </form>


        </div>
        
    )
}