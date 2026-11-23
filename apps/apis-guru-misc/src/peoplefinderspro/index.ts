import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAddressAutocompleteRoute,
  postContactEnrichRoute,
  postEmailEnrichRoute,
  postIdentityVerifyIdRoute,
  postPhoneEnrichRoute,
} from './routes'
import {
  postAddressAutocompleteRouteHandler,
  postContactEnrichRouteHandler,
  postEmailEnrichRouteHandler,
  postIdentityVerifyIdRouteHandler,
  postPhoneEnrichRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAddressAutocompleteRoute, postAddressAutocompleteRouteHandler)
  .openapi(postContactEnrichRoute, postContactEnrichRouteHandler)
  .openapi(postEmailEnrichRoute, postEmailEnrichRouteHandler)
  .openapi(postIdentityVerifyIdRoute, postIdentityVerifyIdRouteHandler)
  .openapi(postPhoneEnrichRoute, postPhoneEnrichRouteHandler)

export default app
