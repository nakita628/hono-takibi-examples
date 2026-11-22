import { OpenAPIHono } from '@hono/zod-openapi'
import {
  affiliateSearchHandler,
  artistsHandler,
  assetChangesHandler,
  assetLicensingHandler,
  assetManagementHandler,
  boardsHandler,
  collectionsHandler,
  countriesHandler,
  customersHandler,
  downloadsHandler,
  eventsHandler,
  imagesHandler,
  ordersHandler,
  productsHandler,
  purchasesHandler,
  searchHandler,
  usageHandler,
  videosHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', affiliateSearchHandler)
  .route('/', artistsHandler)
  .route('/', assetChangesHandler)
  .route('/', assetLicensingHandler)
  .route('/', assetManagementHandler)
  .route('/', boardsHandler)
  .route('/', collectionsHandler)
  .route('/', countriesHandler)
  .route('/', customersHandler)
  .route('/', downloadsHandler)
  .route('/', eventsHandler)
  .route('/', imagesHandler)
  .route('/', ordersHandler)
  .route('/', productsHandler)
  .route('/', purchasesHandler)
  .route('/', searchHandler)
  .route('/', usageHandler)
  .route('/', videosHandler)

export default app
