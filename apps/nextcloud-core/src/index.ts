import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appPasswordHandler,
  autoCompleteHandler,
  avatarHandler,
  clientFlowLoginV2Handler,
  collaborationResourcesHandler,
  csrfTokenHandler,
  guestAvatarHandler,
  hoverCardHandler,
  loginHandler,
  navigationHandler,
  ocmHandler,
  ocsHandler,
  previewHandler,
  profileApiHandler,
  referenceApiHandler,
  referenceHandler,
  statusPhpHandler,
  taskProcessingApiHandler,
  teamsApiHandler,
  textProcessingApiHandler,
  textToImageApiHandler,
  translationApiHandler,
  twoFactorApiHandler,
  unifiedSearchHandler,
  wipeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appPasswordHandler)
  .route('/', autoCompleteHandler)
  .route('/', collaborationResourcesHandler)
  .route('/', hoverCardHandler)
  .route('/', navigationHandler)
  .route('/', ocsHandler)
  .route('/', profileApiHandler)
  .route('/', referenceApiHandler)
  .route('/', taskProcessingApiHandler)
  .route('/', teamsApiHandler)
  .route('/', textProcessingApiHandler)
  .route('/', textToImageApiHandler)
  .route('/', translationApiHandler)
  .route('/', unifiedSearchHandler)
  .route('/', avatarHandler)
  .route('/', csrfTokenHandler)
  .route('/', clientFlowLoginV2Handler)
  .route('/', guestAvatarHandler)
  .route('/', loginHandler)
  .route('/', ocmHandler)
  .route('/', previewHandler)
  .route('/', referenceHandler)
  .route('/', wipeHandler)
  .route('/', statusPhpHandler)
  .route('/', twoFactorApiHandler)

export default app
