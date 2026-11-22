import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  agentHandler,
  billingHandler,
  crawlingHandler,
  developerHandler,
  extractionHandler,
  feedbackHandler,
  governmentHandler,
  interactHandler,
  mappingHandler,
  miscellaneousHandler,
  monitoringHandler,
  researchHandler,
  scrapingHandler,
  searchHandler,
  supportHandler,
  threatProtectionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', monitoringHandler)
  .route('/', scrapingHandler)
  .route('/', crawlingHandler)
  .route('/', mappingHandler)
  .route('/', extractionHandler)
  .route('/', agentHandler)
  .route('/', billingHandler)
  .route('/', miscellaneousHandler)
  .route('/', accountHandler)
  .route('/', searchHandler)
  .route('/', interactHandler)
  .route('/', supportHandler)
  .route('/', researchHandler)
  .route('/', developerHandler)
  .route('/', governmentHandler)
  .route('/', feedbackHandler)
  .route('/', threatProtectionHandler)

export default app
