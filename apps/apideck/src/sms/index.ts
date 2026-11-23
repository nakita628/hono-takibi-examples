import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsMessagesIdRoute,
  getSmsMessagesIdRoute,
  getSmsMessagesRoute,
  patchSmsMessagesIdRoute,
  postSmsMessagesRoute,
} from './routes'
import {
  deleteSmsMessagesIdRouteHandler,
  getSmsMessagesIdRouteHandler,
  getSmsMessagesRouteHandler,
  patchSmsMessagesIdRouteHandler,
  postSmsMessagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSmsMessagesRoute, getSmsMessagesRouteHandler)
  .openapi(postSmsMessagesRoute, postSmsMessagesRouteHandler)
  .openapi(deleteSmsMessagesIdRoute, deleteSmsMessagesIdRouteHandler)
  .openapi(getSmsMessagesIdRoute, getSmsMessagesIdRouteHandler)
  .openapi(patchSmsMessagesIdRoute, patchSmsMessagesIdRouteHandler)

export default app
