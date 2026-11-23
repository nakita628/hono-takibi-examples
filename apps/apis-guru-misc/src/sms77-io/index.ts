import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalyticsRoute,
  getBalanceRoute,
  getContactsRoute,
  getHooksRoute,
  getPricingRoute,
  getStatusRoute,
  postContactsRoute,
  postHooksRoute,
  postLookupCnamRoute,
  postLookupFormatRoute,
  postLookupHlrRoute,
  postLookupMnpRoute,
  postLookupRoute,
  postSmsRoute,
  postValidateForVoiceRoute,
  postVoiceRoute,
} from './routes'
import {
  getAnalyticsRouteHandler,
  getBalanceRouteHandler,
  getContactsRouteHandler,
  getHooksRouteHandler,
  getPricingRouteHandler,
  getStatusRouteHandler,
  postContactsRouteHandler,
  postHooksRouteHandler,
  postLookupCnamRouteHandler,
  postLookupFormatRouteHandler,
  postLookupHlrRouteHandler,
  postLookupMnpRouteHandler,
  postLookupRouteHandler,
  postSmsRouteHandler,
  postValidateForVoiceRouteHandler,
  postVoiceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnalyticsRoute, getAnalyticsRouteHandler)
  .openapi(getBalanceRoute, getBalanceRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(getHooksRoute, getHooksRouteHandler)
  .openapi(postHooksRoute, postHooksRouteHandler)
  .openapi(postLookupRoute, postLookupRouteHandler)
  .openapi(postLookupCnamRoute, postLookupCnamRouteHandler)
  .openapi(postLookupFormatRoute, postLookupFormatRouteHandler)
  .openapi(postLookupHlrRoute, postLookupHlrRouteHandler)
  .openapi(postLookupMnpRoute, postLookupMnpRouteHandler)
  .openapi(getPricingRoute, getPricingRouteHandler)
  .openapi(postSmsRoute, postSmsRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(postValidateForVoiceRoute, postValidateForVoiceRouteHandler)
  .openapi(postVoiceRoute, postVoiceRouteHandler)

export default app
