import Page from '@/components/page';
import Phoebe from '@/components/phoebe';
import Chandler from '@/components/chandler';


export default function Home() {
    return (
        <Page>
            {/* THIS IS YOUR HOME PAGE */}
            <div id='home-div'>


                <div id='title-div'>
                    <h1 className='pugsNcookies'>Pugs</h1>
                    <h1 className='pugsNcookies'>N'</h1>
                    <h1 className='pugsNcookies'>Cookies!</h1>
                    {/* <div className='paperTwo'></div>
                    <div className='paperOne' ></div>
                    <div className='paperThree' ></div> */}
                </div>


                {/* <div id='pug-div'>
                    <Phoebe />
                    <Chandler />
                </div> */}


            </div>
        </Page>
    )
}