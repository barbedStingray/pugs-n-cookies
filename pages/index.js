import Page from '@/components/page';
import Phoebe from '@/components/phoebe';
import Chandler from '@/components/chandler';


export default function Home() {
    return (
        <Page>
                <div id='title-div'>
                    <h1 className='pugsNcookies'>Pugs N' Cookies!</h1>
                    <div className='paperTwo'></div>
                    <div className='paperOne' ></div>
                    <div className='paperThree' ></div>
                </div>

                <div id='pug-div'>
                    <Phoebe />
                    <Chandler />
                </div>
        </Page>
    )
}