import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  accountstatusesHandler,
  accounttaxHandler,
  cssGroupIdHandler,
  datafeedsHandler,
  datafeedstatusesHandler,
  liasettingsHandler,
  localinventoryHandler,
  merchantIdHandler,
  posHandler,
  productsHandler,
  productstatusesHandler,
  regionalinventoryHandler,
  returnaddressHandler,
  returnpolicyHandler,
  shippingsettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', accountstatusesHandler)
  .route('/', accounttaxHandler)
  .route('/', datafeedsHandler)
  .route('/', datafeedstatusesHandler)
  .route('/', liasettingsHandler)
  .route('/', localinventoryHandler)
  .route('/', posHandler)
  .route('/', productsHandler)
  .route('/', productstatusesHandler)
  .route('/', regionalinventoryHandler)
  .route('/', returnaddressHandler)
  .route('/', returnpolicyHandler)
  .route('/', shippingsettingsHandler)
  .route('/', cssGroupIdHandler)
  .route('/', merchantIdHandler)

export default app
