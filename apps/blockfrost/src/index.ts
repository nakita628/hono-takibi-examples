import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cardanoAccountsHandler,
  cardanoAddressesHandler,
  cardanoAssetsHandler,
  cardanoBlocksHandler,
  cardanoEpochsHandler,
  cardanoGovernanceHandler,
  cardanoLedgerHandler,
  cardanoMempoolHandler,
  cardanoMetadataHandler,
  cardanoNetworkHandler,
  cardanoPoolsHandler,
  cardanoScriptsHandler,
  cardanoTransactionsHandler,
  cardanoUtilitiesHandler,
  healthHandler,
  ipfsAddHandler,
  ipfsGatewayHandler,
  ipfsPinsHandler,
  metricsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', cardanoBlocksHandler)
  .route('/', cardanoLedgerHandler)
  .route('/', cardanoGovernanceHandler)
  .route('/', cardanoEpochsHandler)
  .route('/', cardanoTransactionsHandler)
  .route('/', cardanoAccountsHandler)
  .route('/', cardanoMempoolHandler)
  .route('/', cardanoMetadataHandler)
  .route('/', cardanoAddressesHandler)
  .route('/', cardanoPoolsHandler)
  .route('/', cardanoAssetsHandler)
  .route('/', cardanoScriptsHandler)
  .route('/', cardanoUtilitiesHandler)
  .route('/', ipfsAddHandler)
  .route('/', ipfsGatewayHandler)
  .route('/', ipfsPinsHandler)
  .route('/', metricsHandler)
  .route('/', cardanoNetworkHandler)

export default app
