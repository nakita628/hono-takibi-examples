import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accountsHandler,
  addressesHandler,
  assetsHandler,
  blocksHandler,
  epochsHandler,
  genesisHandler,
  governanceHandler,
  healthHandler,
  ipfsHandler,
  mempoolHandler,
  metadataHandler,
  metricsHandler,
  networkHandler,
  poolsHandler,
  scriptsHandler,
  txHandler,
  txsHandler,
  utilsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', healthHandler)
  .route('/', blocksHandler)
  .route('/', genesisHandler)
  .route('/', governanceHandler)
  .route('/', epochsHandler)
  .route('/', txsHandler)
  .route('/', txHandler)
  .route('/', accountsHandler)
  .route('/', mempoolHandler)
  .route('/', metadataHandler)
  .route('/', addressesHandler)
  .route('/', poolsHandler)
  .route('/', assetsHandler)
  .route('/', scriptsHandler)
  .route('/', utilsHandler)
  .route('/', ipfsHandler)
  .route('/', metricsHandler)
  .route('/', networkHandler)

export default app
