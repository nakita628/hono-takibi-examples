import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessengerExternalIdRoute,
  deleteProviderExternalIdApplicationsApplicationIdRoute,
  getMessengerExternalIdRoute,
  getRoute,
  getViberServiceMsgExternalIdRoute,
  getWhatsappExternalIdRoute,
  patchMessengerExternalIdRoute,
  postMessengerRoute,
  postProviderExternalIdApplicationsRoute,
} from './routes'
import {
  deleteMessengerExternalIdRouteHandler,
  deleteProviderExternalIdApplicationsApplicationIdRouteHandler,
  getMessengerExternalIdRouteHandler,
  getRouteHandler,
  getViberServiceMsgExternalIdRouteHandler,
  getWhatsappExternalIdRouteHandler,
  patchMessengerExternalIdRouteHandler,
  postMessengerRouteHandler,
  postProviderExternalIdApplicationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postMessengerRoute, postMessengerRouteHandler)
  .openapi(deleteMessengerExternalIdRoute, deleteMessengerExternalIdRouteHandler)
  .openapi(getMessengerExternalIdRoute, getMessengerExternalIdRouteHandler)
  .openapi(patchMessengerExternalIdRoute, patchMessengerExternalIdRouteHandler)
  .openapi(getViberServiceMsgExternalIdRoute, getViberServiceMsgExternalIdRouteHandler)
  .openapi(getWhatsappExternalIdRoute, getWhatsappExternalIdRouteHandler)
  .openapi(postProviderExternalIdApplicationsRoute, postProviderExternalIdApplicationsRouteHandler)
  .openapi(
    deleteProviderExternalIdApplicationsApplicationIdRoute,
    deleteProviderExternalIdApplicationsApplicationIdRouteHandler,
  )

export default app
