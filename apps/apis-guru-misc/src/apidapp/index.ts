import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accountHandler,
  blockchainHandler,
  blockHandler,
  contractHandler,
  echoHandler,
  erc20Handler,
  keyHandler,
  transactionHandler,
  versionHandler,
  walletHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', accountHandler)
  .route('/', blockHandler)
  .route('/', blockchainHandler)
  .route('/', contractHandler)
  .route('/', echoHandler)
  .route('/', erc20Handler)
  .route('/', keyHandler)
  .route('/', transactionHandler)
  .route('/', versionHandler)
  .route('/', walletHandler)

export default app
