import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotesNoteIdRoute,
  getNotesRoute,
  getTasksRoute,
  getTasksTaskIdRoute,
  postNotesRoute,
  postTasksRoute,
  postTasksTaskIdCommentsRoute,
  putTasksTaskIdRoute,
} from './routes'
import {
  getNotesNoteIdRouteHandler,
  getNotesRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIdRouteHandler,
  postNotesRouteHandler,
  postTasksRouteHandler,
  postTasksTaskIdCommentsRouteHandler,
  putTasksTaskIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getNotesRoute, getNotesRouteHandler)
  .openapi(postNotesRoute, postNotesRouteHandler)
  .openapi(getNotesNoteIdRoute, getNotesNoteIdRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(putTasksTaskIdRoute, putTasksTaskIdRouteHandler)
  .openapi(postTasksTaskIdCommentsRoute, postTasksTaskIdCommentsRouteHandler)

export default app
