import React, { useState, useContext } from 'react';
import Web3 from '../../connection/web3';
import Web3Context from '../../store/web3-context';
/*
import { FaBitcoin } from 'react-icons/fa';
import Countdown from 'react-countdown';
import Web3Context from '../../store/web3-context';
import TokenContext from '../../store/token-context';
import UserContext from '../../store/user-context';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { usePopperTooltip } from 'react-popper-tooltip';
import { TiCancel } from 'react-icons/ti';
import { precision } from '../../helpers/utils';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
*/
import 'react-datepicker/dist/react-datepicker.css';
import web3 from '../../connection/web3';
// import AOS from 'aos';

// import MetaMaskLoader from '../general/MetaMaskLoader';

function TokenExchangeForm() {

    const [amount_bnb, setAmountBNB] = useState();
    const [amount_asixmusic, setAmountASIXMUSIC] = useState();
    const web3Ctx = useContext(Web3Context);

    const handleAmountBNBChange = (e) => {
        setAmountBNB(e.target.value);
        setAmountASIXMUSIC(e.target.value * 1000);
    };
    const handleBuyButtonSubmit = async (e) => {
        const accounts = await web3Ctx.loadAccount(web3);
        const networkId = await web3Ctx.loadNetworkId(web3);
        const networkData = require('../../contracts/AsixTokenV3.json').networks[networkId];
        
        if(networkData) {
            const test = new Web3.eth.Contract(require('../../contracts/AsixTokenV3.json').abi, networkData.address);
        }
    }

    return (
        <>
            <div className='card shadow-lg px-3 pt-3' data-aos='fade-up' data-aos-delay='400'>
                <div className='card-body p-lg-5'>
                    <label className='form-label'>1 BNB = 10000 ASIXMUSIC</label>
                    <div className='col-lg-12 mt-1'>
                        <input
                            type='text'
                            className="form-control"
                            placeholder='BNB'
                            value = {amount_bnb || ""}
                            onChange={handleAmountBNBChange}
                        />
                    </div>
                    <div className='col-lg-12 mt-4'>
                        <input
                            type='text'
                            className="form-control"
                            placeholder='ASIXMUSIC'
                            value = {amount_asixmusic || ""}
                            readOnly
                        />
                    </div>
                    <div className='col-lg-12 text-center mt-4'>
                        <button
                            type='button'
                            className="btn btn-primary"
                            onClick={handleBuyButtonSubmit}
                            disabled={!amount_asixmusic || Number(amount_asixmusic) === 0}
                        >
                            BUY
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TokenExchangeForm;
