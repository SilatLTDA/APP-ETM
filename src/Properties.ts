//productor.comercial@foxtelecolombia.com
//Foxtc018
import { ENV } from '@app/env';

export class Properties {
    static get publicKey() {
        return 'U2FsdGVkX1+oic7V0jANGL8Ib1C20NIRqhyH53ZSxt0=';
    }
    static get baseUrl(): string {
        switch (ENV.production) {
            case 'qa':
                return '';
            case 'staging':
                return 'http://168.195.202.4:80';    
                //return 'http://192.168.1.40:19899';
            case 'prod':
                return 'http://168.195.202.4';
                //return 'http://app.estudiostelemexico.com';
                
            default:
                //return 'http://app.estudiostelemexico.com';
                return 'http://168.195.202.4';
                //return 'http://189.206.225.36';
                //return 'http://190.217.118.237';
        }
    }
}
