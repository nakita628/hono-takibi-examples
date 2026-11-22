import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advertisersHandler,
  combinedAudiencesHandler,
  customBiddingAlgorithmsHandler,
  customListsHandler,
  firstAndThirdPartyAudiencesHandler,
  floodlightGroupsHandler,
  googleAudiencesHandler,
  guaranteedOrdersHandler,
  inventorySourceGroupsHandler,
  inventorySourcesHandler,
  mediaHandler,
  partnersHandler,
  sdfdownloadtasksHandler,
  targetingTypesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mediaHandler)
  .route('/', advertisersHandler)
  .route('/', combinedAudiencesHandler)
  .route('/', customBiddingAlgorithmsHandler)
  .route('/', customListsHandler)
  .route('/', firstAndThirdPartyAudiencesHandler)
  .route('/', floodlightGroupsHandler)
  .route('/', googleAudiencesHandler)
  .route('/', guaranteedOrdersHandler)
  .route('/', inventorySourceGroupsHandler)
  .route('/', inventorySourcesHandler)
  .route('/', partnersHandler)
  .route('/', sdfdownloadtasksHandler)
  .route('/', targetingTypesHandler)
  .route('/', usersHandler)

export default app
