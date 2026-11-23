import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  apiAppHandler,
  apiKeyHandler,
  bulkSendJobHandler,
  documentHandler,
  embeddedHandler,
  faxHandler,
  faxLineHandler,
  oauthHandler,
  reportHandler,
  signatureRequestHandler,
  teamHandler,
  templateHandler,
  unclaimedDraftHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeyHandler)
  .route('/', accountHandler)
  .route('/', apiAppHandler)
  .route('/', bulkSendJobHandler)
  .route('/', documentHandler)
  .route('/', embeddedHandler)
  .route('/', faxHandler)
  .route('/', faxLineHandler)
  .route('/', oauthHandler)
  .route('/', reportHandler)
  .route('/', signatureRequestHandler)
  .route('/', teamHandler)
  .route('/', templateHandler)
  .route('/', unclaimedDraftHandler)

export default app
