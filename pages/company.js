import Image from "next/image"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Latest from "../components/Latest"
import TeamCard from "../components/TeamCard"
import Head from 'next/head'
import Navbar from "../components/Navbar"
import {HiOutlineChatAlt} from 'react-icons/hi'
function company() {
    return (
        <div>
      


 
           <Navbar  />
            <Banner source="https://i.ibb.co/HBRghmK/dataiku-site-dataiku-compagny-1920x1080.png"  text="Qui Somme nous?" font={"text-3xl"}  size="cover" color={"text-blue-900"} />

            <h3 className="font-bold text-blue-900 text-5xl mb-20 mt-32 mx-auto w-7/12 " >Notre Histoire</h3>

            <div className=" flex w-8/12 mx-auto justify-evenly  mt-6 ">
                <div className="w-83 mx-14  ">
                    <p className="text-gray-500 flex mb-12">  Fondée en 2020 par deux jeunes ingénieurs,
                        Newgen est un fournisseur de services <br /> technologiques basé
                        à Casablanca.
                    </p>
                    <p className=" text-gray-500 flex mb-12">  Notre mission est daccompagner nos clients dans leurs ambitions de transformation <br /> numérique en leur fournissant à la fois des services commerciaux et technologiques. </p>


                    <p className="text-gray-500 flex mb-12"> Nos employés bénéficient dune culture fondée sur linnovation et lengagement.
                    </p>
                   
                </div>

                

                <div className="  hidden lg:flex relative   z-0 mr-32 ">
                    <Image src="https://i.ibb.co/4T7Pb91/002872-REA02.jpg" className="  rounded-lg" width={500} height={500} />
                </div>
                

                
                <div className=" fixed top-[87%] mr-5 z-40 md:left[83%] left-[85%] lg:left-[95%]  cursor-pointer  bg-blue-600 hover:bg-blue-900 rounded-full h-16 w-16 grid place-items-center text-4xl m  text-white  ">
                <a href="https://newgen.ma/devis_web"> <HiOutlineChatAlt  className="animate-bounce" /></a>
            
           
              </div>


                 
               

                

                
            </div>

            <div className="flex  justify-evenly w-full p-5  mt-24 " style={{ background: "#f5f8fa" }}>

                <div className="w-5/12 relative  lg:left-64 ">
                    <h3 className="font-bold  text-5xl mb-20  mx-auto w-7/12 " >Notre Vision</h3>




                </div>

                <div className="w-83 mx-14 text-lg"  >
                    <p className=" text-gray-500 flex mb-12">  Nous visons excellence et aspirons à devenir la référence en matière de <br /> développement informatique, de gestion de projets et de conseils IT.
                    </p>
                    <p className="text-gray-500 flex mb-12">  Nous avons à cœur d’analyser ensemble, avec vous, vos besoins et de mettre tout <br /> en œuvre pour développer des solution qui répondent en tout point à ceux-ci. </p>



                </div>
            </div>

            <h3 className="font-bold text-blue-900 text-5xl mb-20 mt-32 mx-auto w-10/12  lg:px-20 " >Notre Equipe</h3>

            
               <div className="md:flex md:justify-end mx-auto mb-20 md:w-full md:relative md:left-32  lg:w-10/12  w-8/12   ">
                      <div className=" w-11/12 md:mr-10 ">
                      <TeamCard  name="Hajar Etakafi" post=" responsable du développement commercial" desc="Hajar Etakafi, passionnée par les ventes et par une négociation naturelle. Compétente dans la vente de logiciels, la gestion des ventes, les opérations de marketing et la constitution d'équipes.
                    Elle dirige la croissance de nos canaux de commercialisation."  image="https://i.ibb.co/jTgF5Ng/HAJAR-PHOTO.jpg"/>
                    
                      </div>

                      <div className=" w-11/12  ">
                      <TeamCard name="Abdelhakim Jebabra"  image="https://ajebabra.netlify.app/Me.jpg"  post="Devéloppeur Web " desc="Étudiant en informatique a EMI (Ecole Mohammadia des ingénieurs). Je suis développeur web et mes technologies préférées sont Next js  et Express js !" />

                      </div>
                   
                   
                  
                   
               </div>
               
          


            <br />
            <Latest/>
            <Footer/>



            
        </div>
    )
}

export default company
