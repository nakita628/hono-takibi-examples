import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ageUsdHandler,
  babelFeeControllerHandler,
  babelFeeNewOfferControllerHandler,
  boxConsolidationControllerHandler,
  paymentPortalHandler,
  peerDetectionHandler,
  tokenBurnControllerHandler,
  tokenPricesHandler,
  tokenVerificationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ageUsdHandler)
  .route('/', babelFeeControllerHandler)
  .route('/', babelFeeNewOfferControllerHandler)
  .route('/', boxConsolidationControllerHandler)
  .route('/', tokenBurnControllerHandler)
  .route('/', paymentPortalHandler)
  .route('/', peerDetectionHandler)
  .route('/', tokenVerificationHandler)
  .route('/', tokenPricesHandler)

export default app
