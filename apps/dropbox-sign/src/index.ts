import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  apiAppHandler,
  apiKeysHandler,
  bulkSendJobHandler,
  documentHandler,
  embeddedHandler,
  faxHandler,
  faxLineHandler,
  oAuthHandler,
  reportHandler,
  signatureRequestHandler,
  teamHandler,
  templateHandler,
  unclaimedDraftHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeysHandler)
  .route('/', accountHandler)
  .route('/', apiAppHandler)
  .route('/', bulkSendJobHandler)
  .route('/', documentHandler)
  .route('/', embeddedHandler)
  .route('/', faxHandler)
  .route('/', faxLineHandler)
  .route('/', oAuthHandler)
  .route('/', reportHandler)
  .route('/', signatureRequestHandler)
  .route('/', teamHandler)
  .route('/', templateHandler)
  .route('/', unclaimedDraftHandler)

export default app
