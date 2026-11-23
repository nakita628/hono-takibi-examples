import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  accountstatusesHandler,
  accounttaxHandler,
  datafeedsHandler,
  datafeedstatusesHandler,
  liasettingsHandler,
  merchantIdHandler,
  ordersHandler,
  posHandler,
  productsHandler,
  productstatusesHandler,
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
  .route('/', ordersHandler)
  .route('/', posHandler)
  .route('/', productsHandler)
  .route('/', productstatusesHandler)
  .route('/', shippingsettingsHandler)
  .route('/', merchantIdHandler)

export default app
