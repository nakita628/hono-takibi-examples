import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bookshelvesHandler,
  cloudloadingHandler,
  dictionaryHandler,
  familysharingHandler,
  layersHandler,
  myconfigHandler,
  mylibraryHandler,
  notificationHandler,
  onboardingHandler,
  personalizedstreamHandler,
  promoofferHandler,
  seriesHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cloudloadingHandler)
  .route('/', dictionaryHandler)
  .route('/', familysharingHandler)
  .route('/', myconfigHandler)
  .route('/', mylibraryHandler)
  .route('/', notificationHandler)
  .route('/', onboardingHandler)
  .route('/', personalizedstreamHandler)
  .route('/', promoofferHandler)
  .route('/', seriesHandler)
  .route('/', bookshelvesHandler)
  .route('/', volumesHandler)
  .route('/', layersHandler)

export default app
