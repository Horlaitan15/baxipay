'use strict'

import MobileAirtime from "./src/endpoints/vtu";
import Biller from "./src/endpoints/biller";
import Verify from "./src/endpoints/verify"
import Cable from "./src/endpoints/cable";
import Data from "./src/endpoints/data";


/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface BaxiPayInterface {
    apiKey: string;
    apiSecret: string
    vtu: MobileAirtime
}
/**
 * @class Baxipay - parent class for all categories of baxipay
 */
class BaxiPay implements BaxiPayInterface {
    public apiKey;
    public apiSecret;
    public vtu;
    public biller
    public account
    public cable
    public data

    constructor (apiKey: string) {
        this.apiKey = apiKey;
        this.vtu = new MobileAirtime(apiKey)
        this.biller = new Biller(apiKey)
        this.account = new Verify(apiKey)
        this.cable = new Cable(apiKey)
        this.data = new Data(apiKey)
    }
}

export default BaxiPay;