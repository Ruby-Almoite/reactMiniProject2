import './Content.css';

const Content = () => {

    const nametest ='Peter';
    const handleNameChanges =() => {
      const names = ['bob','juan', 'peter'];
      const int =Math.floor ( Math.random () *3);
      return names [int];
    }

    return (

         <main>
            <p classname ='mysample'>
                Hello {handleNameChanges ()} !
            </p>
         </main>


    )
}

export default Content;