import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConfirmThirdPartyRoute,
  postDeclineThirdPartyRoute,
  postPayoutRoute,
  postStoreDetailAndSubmitThirdPartyRoute,
  postStoreDetailRoute,
  postSubmitThirdPartyRoute,
} from './routes'
import {
  postConfirmThirdPartyRouteHandler,
  postDeclineThirdPartyRouteHandler,
  postPayoutRouteHandler,
  postStoreDetailAndSubmitThirdPartyRouteHandler,
  postStoreDetailRouteHandler,
  postSubmitThirdPartyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postConfirmThirdPartyRoute, postConfirmThirdPartyRouteHandler)
  .openapi(postDeclineThirdPartyRoute, postDeclineThirdPartyRouteHandler)
  .openapi(postPayoutRoute, postPayoutRouteHandler)
  .openapi(postStoreDetailRoute, postStoreDetailRouteHandler)
  .openapi(postStoreDetailAndSubmitThirdPartyRoute, postStoreDetailAndSubmitThirdPartyRouteHandler)
  .openapi(postSubmitThirdPartyRoute, postSubmitThirdPartyRouteHandler)

export default app
