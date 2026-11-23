import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  billinginfoHandler,
  creativesHandler,
  performancereportHandler,
  pretargetingconfigsHandler,
  privateauctionHandler,
  productsHandler,
  proposalsHandler,
  publisherHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', billinginfoHandler)
  .route('/', creativesHandler)
  .route('/', performancereportHandler)
  .route('/', pretargetingconfigsHandler)
  .route('/', privateauctionHandler)
  .route('/', productsHandler)
  .route('/', proposalsHandler)
  .route('/', publisherHandler)

export default app
