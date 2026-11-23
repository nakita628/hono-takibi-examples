import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksV1ListsTasklistTasksTaskRoute,
  deleteTasksV1UsersMeListsTasklistRoute,
  getTasksV1ListsTasklistTasksRoute,
  getTasksV1ListsTasklistTasksTaskRoute,
  getTasksV1UsersMeListsRoute,
  getTasksV1UsersMeListsTasklistRoute,
  patchTasksV1ListsTasklistTasksTaskRoute,
  patchTasksV1UsersMeListsTasklistRoute,
  postTasksV1ListsTasklistClearRoute,
  postTasksV1ListsTasklistTasksRoute,
  postTasksV1ListsTasklistTasksTaskMoveRoute,
  postTasksV1UsersMeListsRoute,
  putTasksV1ListsTasklistTasksTaskRoute,
  putTasksV1UsersMeListsTasklistRoute,
} from './routes'
import {
  deleteTasksV1ListsTasklistTasksTaskRouteHandler,
  deleteTasksV1UsersMeListsTasklistRouteHandler,
  getTasksV1ListsTasklistTasksRouteHandler,
  getTasksV1ListsTasklistTasksTaskRouteHandler,
  getTasksV1UsersMeListsRouteHandler,
  getTasksV1UsersMeListsTasklistRouteHandler,
  patchTasksV1ListsTasklistTasksTaskRouteHandler,
  patchTasksV1UsersMeListsTasklistRouteHandler,
  postTasksV1ListsTasklistClearRouteHandler,
  postTasksV1ListsTasklistTasksRouteHandler,
  postTasksV1ListsTasklistTasksTaskMoveRouteHandler,
  postTasksV1UsersMeListsRouteHandler,
  putTasksV1ListsTasklistTasksTaskRouteHandler,
  putTasksV1UsersMeListsTasklistRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postTasksV1ListsTasklistClearRoute, postTasksV1ListsTasklistClearRouteHandler)
  .openapi(getTasksV1ListsTasklistTasksRoute, getTasksV1ListsTasklistTasksRouteHandler)
  .openapi(postTasksV1ListsTasklistTasksRoute, postTasksV1ListsTasklistTasksRouteHandler)
  .openapi(
    deleteTasksV1ListsTasklistTasksTaskRoute,
    deleteTasksV1ListsTasklistTasksTaskRouteHandler,
  )
  .openapi(getTasksV1ListsTasklistTasksTaskRoute, getTasksV1ListsTasklistTasksTaskRouteHandler)
  .openapi(patchTasksV1ListsTasklistTasksTaskRoute, patchTasksV1ListsTasklistTasksTaskRouteHandler)
  .openapi(putTasksV1ListsTasklistTasksTaskRoute, putTasksV1ListsTasklistTasksTaskRouteHandler)
  .openapi(
    postTasksV1ListsTasklistTasksTaskMoveRoute,
    postTasksV1ListsTasklistTasksTaskMoveRouteHandler,
  )
  .openapi(getTasksV1UsersMeListsRoute, getTasksV1UsersMeListsRouteHandler)
  .openapi(postTasksV1UsersMeListsRoute, postTasksV1UsersMeListsRouteHandler)
  .openapi(deleteTasksV1UsersMeListsTasklistRoute, deleteTasksV1UsersMeListsTasklistRouteHandler)
  .openapi(getTasksV1UsersMeListsTasklistRoute, getTasksV1UsersMeListsTasklistRouteHandler)
  .openapi(patchTasksV1UsersMeListsTasklistRoute, patchTasksV1UsersMeListsTasklistRouteHandler)
  .openapi(putTasksV1UsersMeListsTasklistRoute, putTasksV1UsersMeListsTasklistRouteHandler)

export default app
