import { OpenAPIHono } from '@hono/zod-openapi'
import {
  campagneHandler,
  comptageHandler,
  creditHandler,
  dellistenoireHandler,
  getlistenoireHandler,
  hlrHandler,
  repertoireHandler,
  setlistenoireHandler,
  shortlinkHandler,
  smsHandler,
  smsmultiHandler,
  subaccountHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', campagneHandler)
  .route('/', comptageHandler)
  .route('/', creditHandler)
  .route('/', dellistenoireHandler)
  .route('/', getlistenoireHandler)
  .route('/', hlrHandler)
  .route('/', repertoireHandler)
  .route('/', setlistenoireHandler)
  .route('/', shortlinkHandler)
  .route('/', smsHandler)
  .route('/', smsmultiHandler)
  .route('/', subaccountHandler)

export default app
