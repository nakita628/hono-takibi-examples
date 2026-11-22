import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addShortlinkHandler,
  addSubaccountHandler,
  campagneHandler,
  comptageHandler,
  creditHandler,
  delListeNoireHandler,
  editSubaccountHandler,
  getListeNoireHandler,
  hlrHandler,
  repertoireHandler,
  setListeNoireHandler,
  smsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', campagneHandler)
  .route('/', comptageHandler)
  .route('/', creditHandler)
  .route('/', delListeNoireHandler)
  .route('/', getListeNoireHandler)
  .route('/', hlrHandler)
  .route('/', repertoireHandler)
  .route('/', setListeNoireHandler)
  .route('/', addShortlinkHandler)
  .route('/', smsHandler)
  .route('/', addSubaccountHandler)
  .route('/', editSubaccountHandler)

export default app
