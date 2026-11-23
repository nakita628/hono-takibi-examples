import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServicesServiceIdRoute,
  getApiV1ActionsServiceIdActionIdHelpRoute,
  getApiV1ActionsServiceIdActionIdRoute,
  getApiV1ActionsServiceIdRoute,
  getApiV1LoginRoute,
  getApiV1LogoutRoute,
  getApiV1ServicesRoute,
  getApiV1ServicesServiceIdRoute,
  postApiV1ActionsServiceIdActionIdExecRoute,
  postApiV1ServicesRoute,
} from './routes'
import {
  deleteApiV1ServicesServiceIdRouteHandler,
  getApiV1ActionsServiceIdActionIdHelpRouteHandler,
  getApiV1ActionsServiceIdActionIdRouteHandler,
  getApiV1ActionsServiceIdRouteHandler,
  getApiV1LoginRouteHandler,
  getApiV1LogoutRouteHandler,
  getApiV1ServicesRouteHandler,
  getApiV1ServicesServiceIdRouteHandler,
  postApiV1ActionsServiceIdActionIdExecRouteHandler,
  postApiV1ServicesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1ActionsServiceIdRoute, getApiV1ActionsServiceIdRouteHandler)
  .openapi(getApiV1ActionsServiceIdActionIdRoute, getApiV1ActionsServiceIdActionIdRouteHandler)
  .openapi(
    postApiV1ActionsServiceIdActionIdExecRoute,
    postApiV1ActionsServiceIdActionIdExecRouteHandler,
  )
  .openapi(
    getApiV1ActionsServiceIdActionIdHelpRoute,
    getApiV1ActionsServiceIdActionIdHelpRouteHandler,
  )
  .openapi(getApiV1LoginRoute, getApiV1LoginRouteHandler)
  .openapi(getApiV1LogoutRoute, getApiV1LogoutRouteHandler)
  .openapi(getApiV1ServicesRoute, getApiV1ServicesRouteHandler)
  .openapi(postApiV1ServicesRoute, postApiV1ServicesRouteHandler)
  .openapi(deleteApiV1ServicesServiceIdRoute, deleteApiV1ServicesServiceIdRouteHandler)
  .openapi(getApiV1ServicesServiceIdRoute, getApiV1ServicesServiceIdRouteHandler)

export default app
