import Page from '@/components/page';
import { GiDogHouse } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";



export default function Cookies() {

    const cookiePhotos = [
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/141335582_492796068788138_3610757469222165575_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=reX3nQIx-fEAX97toxn&_nc_ht=scontent-ord5-2.xx&oh=00_AfCqP6n4TNuEa2BnTy7Z-JLpjGpdGUAJS7wZModxj6xJRw&oe=65DEAD12' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/140306068_492794408788304_4044683501651188705_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=uKwlEKonIicAX80pPe3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDBbwlInws5eOijT-o8YgDTzhgWffuEgwPOoqoUVnX9Bw&oe=65DEB247' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/140616793_492793875455024_1230526384831839733_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=vSwsg-Ww-IMAX_i4PdE&_nc_ht=scontent-ord5-2.xx&oh=00_AfC_y58mwWXrjaSGA8beWKSiEyCoJtz0OVbThOmTpS3qIA&oe=65DEA7B9' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/273549395_822227062511702_6006229014564406763_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=889wSEk7Tx0AX9-GpDL&_nc_oc=AQkwwit25wmvHscSUxs3ZaZLouIeODHAsWUupsRDeaMlI8ItmxVPQT6EI-No7yKnr6pcSU9W2HO6BX0LK4p7o3_x&_nc_ht=scontent-ord5-1.xx&oh=00_AfBX_RqeBOZGYIbS7QKE8HWKr7mWfT1Bxz-oDMlTecpldA&oe=65BBD277' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/71821565_121878062546609_775019731802390528_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=300f58&_nc_ohc=_TWhctmJ5c0AX_y0pR4&_nc_ht=scontent-ord5-2.xx&oh=00_AfAKt05-pSRYrZjp-2EcqTBxocNho-LxUqXHTyiwrWqQHA&oe=65DEAFAA' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/273990454_822205749180500_7001597137273575812_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=IzZCmTSTTeUAX9batwV&_nc_ht=scontent-ord5-2.xx&oh=00_AfClP90jythBxqs8vn7JOr7J3GIU9IGH0gmSX1JKGZ_9vA&oe=65BC7E46' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/289648847_921998005867940_5746714327647291465_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QXRB9gIJ-48AX9mfsfm&_nc_ht=scontent-ord5-2.xx&oh=00_AfBELsiOSRw3KUNxoMoAo1qQEiRwIwPlT7aEp9sF6cpnNw&oe=65BCD918' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/274867562_835656177835457_7537971743355950749_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=aByWnDi15EIAX8CK30W&_nc_ht=scontent-ord5-2.xx&oh=00_AfDPBASzdESoYAH_I5_4qITgjeNsf5xaIJxfXoAZuFWQIA&oe=65BCE12E' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/273002706_816197969781278_3641849990452022973_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GW_G938HCFkAX_ixyb9&_nc_ht=scontent-ord5-1.xx&oh=00_AfAXKP1oP2JI0vgB5KYdqH6IMnbHL0mHJa-nrQQABPZKOw&oe=65BBE721' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/271971761_806343270766748_199701886785736811_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6LIZMUxexXMAX-roZbs&_nc_ht=scontent-ord5-2.xx&oh=00_AfBDnamJUDTxXlyyNUJfAcVEgzR1zvqpJSaq2iKtNceQ8Q&oe=65BBD532' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/272128644_806343240766751_7733507849355487954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=nlgKgHtpwzsAX9xGsSx&_nc_ht=scontent-ord5-1.xx&oh=00_AfDzzS2VAnG8Q3zZubqbcslLPYl-i_rIQwScddp9235cYg&oe=65BB92E6' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/269443988_787289032672172_8830628446643105133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6esfi0mKXd0AX_K7dYi&_nc_ht=scontent-ord5-2.xx&oh=00_AfCL9ODOx_auLG-r7vi-l930kcAzEdHf6gH8gF7ju87QYg&oe=65BB5345' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/115909455_347201800014233_9095367307147520364_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=0YFXqlkQjNsAX9oHrTX&_nc_oc=AQkKS4R34xBZwf_Fogb33ylWtidgyt6F9ZE2stnRk_YC-PFZ4S7o8kZ9HaF2cJSI6RhMyyh-ijLCfwQeLBWpNlfI&_nc_ht=scontent-ord5-2.xx&oh=00_AfBIO9qYloF87DgLKbghUyL2Oc9lyZ1YbT1ExFoBcAEanw&oe=65DEB1C0' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/123841291_432999851434427_5438362679474316215_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=gZ8WZcYVz9UAX9HopZF&_nc_ht=scontent-ord5-2.xx&oh=00_AfCtXPMVhoawcnxgIjfWBh7X1bHrG3Cc34Mb_zYISNcyAg&oe=65DECAAB' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/140208199_492794965454915_743198734142153729_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=JSbR92SzcpEAX9Bvolq&_nc_oc=AQnYmqjPY64_ArIo7mfkd4tw2o5B_8DcY6fyEJmcDvpeqoaiXA-3mOGg2MkhGyY14dBDtVvsuRE7oiEG75Utsj-9&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTwk8J875kEc1rqJMOCwWcIf4F90JDWB7g7dTC_45iGQ&oe=65DEA260' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/91013205_250061336394947_2897031870095032320_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=GuFAk4-Ua3MAX9IYenM&_nc_ht=scontent-ord5-2.xx&oh=00_AfCV1Zhh7bhRetiiA8QZlAowNbebwzDYv03TL9293pFuHw&oe=65DECABD' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/126057075_446772200057192_2352409981311553687_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=daBUVDV6YzsAX96bOjo&_nc_ht=scontent-ord5-2.xx&oh=00_AfA2lXYvKewd0YUlV38kGPhH2IWhbDPBZDLjNpGxUHdm3w&oe=65DEC337' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/86296055_216221609778920_8864369743650357248_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=1F3gFWeIc9YAX_AGwmy&_nc_ht=scontent-ord5-1.xx&oh=00_AfBRnpWJwV4Pk8pFnTLZmHuL81Ca7EQyxAQZ9RfozJ3nOg&oe=65DEAFDC' },
        { cookieImage: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/81045690_179873563413725_7533841462929129472_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=-GL-pJheGqkAX8uEv_n&_nc_oc=AQnzhWHdOjXEV-O_iXVL9T6YF0cUaT8qnqe93QlEVoMi52qgjues3vrfAqVYhvLju90xCds0PWMuVUXp5aEcpAf8&_nc_ht=scontent-ord5-1.xx&oh=00_AfCqP-svSTnNUteWSWwWf0vCz82qlkORwglijtK7ncYTyA&oe=65DEA14C' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/83753219_198291704905244_3465916046685241344_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=4zUyXaNRBxkAX_mBUcW&_nc_ht=scontent-ord5-2.xx&oh=00_AfAbXGa4jB8QEnnCf4oKiMXhcJlrQUq_kAC_xiutO8xSdw&oe=65DEAF7B' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/84333692_207284970672584_1312007058890948608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=OhPX5Qxzan4AX-G6i7Z&_nc_ht=scontent-ord5-2.xx&oh=00_AfA9Ql6Uuzxpr2i86eyTjOso84UBZyjibrtx5PbG2Ibzkw&oe=65DEC4D1' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/75125117_148853449849070_6364444231846592512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Mr5hijBs63AAX_gm0FG&_nc_ht=scontent-ord5-2.xx&oh=00_AfAnIOasb-GPrgta5p8k0GJRYNnkDygvDAWYVW3_Rbko9Q&oe=65DEA713' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/72058495_131692578231824_1700844286582456320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=UQkZXRj2O6IAX9O3RmY&_nc_ht=scontent-ord5-2.xx&oh=00_AfAV5LxrQqmak2pzJNIB74u_cmcoKxeiqe74h_M3ePp3Tg&oe=65DEBDF9' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/72672629_123535705714178_4746591800188207104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=_fubptbQCJIAX_dyk54&_nc_ht=scontent-ord5-2.xx&oh=00_AfCCdZaDOw4Y-jeBBZ_cfPXI99fw9eFW93qlQYWHFfL-aw&oe=65DEA6BE' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/71566217_123617859039296_7467124746623123456_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=2TDjxDeRi8cAX_7Yl0y&_nc_ht=scontent-ord5-2.xx&oh=00_AfBtyGL1oL99I8vbLItA5n01viH3SHMagzh2gqnZtyICZA&oe=65DEC47D' },
        { cookieImage: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/97335364_290275492373531_552653022732222464_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Y-AzrEINPQsAX9rCKo9&_nc_ht=scontent-ord5-2.xx&oh=00_AfBDT0yIL4W6WvpWx22JiCr2z-fRJW6mxLM3-UgnFDO4Xg&oe=65DECBAB' }        
    ];


    return (
        <Page>
            <div id='cookie-div'>

                <div>
                    <h2 className='page-title'>Cookies</h2>
                </div>

                <GiDogHouse className='homeCookie' />

                <div id='cookie-map'>
                    {cookiePhotos.map((cookie) =>
                        <img className='cookieDisplay' src={cookie.cookieImage} />
                    )}
                </div>


                <BiSolidDog className='homeCookie' />

            </div>
        </Page>
    )
}