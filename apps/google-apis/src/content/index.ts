import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  accountstatusesHandler,
  accounttaxHandler,
  buyongoogleprogramsHandler,
  collectionsHandler,
  collectionstatusesHandler,
  conversionsourcesHandler,
  cssesHandler,
  datafeedsHandler,
  datafeedstatusesHandler,
  freelistingsprogramHandler,
  liasettingsHandler,
  localinventoryHandler,
  orderinvoicesHandler,
  orderreportsHandler,
  orderreturnsHandler,
  ordersHandler,
  ordertrackingsignalsHandler,
  posHandler,
  productdeliverytimeHandler,
  productsHandler,
  productstatusesHandler,
  promotionsHandler,
  pubsubnotificationsettingsHandler,
  quotasHandler,
  recommendationsHandler,
  regionalinventoryHandler,
  regionsHandler,
  reportsHandler,
  repricingrulesHandler,
  returnaddressHandler,
  returnpolicyHandler,
  returnpolicyonlineHandler,
  settlementreportsHandler,
  settlementtransactionsHandler,
  shippingsettingsHandler,
  shoppingadsprogramHandler,
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
  .route('/', cssesHandler)
  .route('/', buyongoogleprogramsHandler)
  .route('/', collectionsHandler)
  .route('/', collectionstatusesHandler)
  .route('/', conversionsourcesHandler)
  .route('/', freelistingsprogramHandler)
  .route('/', orderinvoicesHandler)
  .route('/', orderreportsHandler)
  .route('/', orderreturnsHandler)
  .route('/', ordersHandler)
  .route('/', ordertrackingsignalsHandler)
  .route('/', productdeliverytimeHandler)
  .route('/', promotionsHandler)
  .route('/', pubsubnotificationsettingsHandler)
  .route('/', quotasHandler)
  .route('/', recommendationsHandler)
  .route('/', regionsHandler)
  .route('/', reportsHandler)
  .route('/', repricingrulesHandler)
  .route('/', returnpolicyonlineHandler)
  .route('/', settlementreportsHandler)
  .route('/', settlementtransactionsHandler)
  .route('/', shoppingadsprogramHandler)

export default app
