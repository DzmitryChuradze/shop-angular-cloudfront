import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://d7ex9hfhu6.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://d7ex9hfhu6.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
