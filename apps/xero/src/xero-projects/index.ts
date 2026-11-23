import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdTasksTaskIdRoute,
  deleteProjectsProjectIdTimeTimeEntryIdRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdTasksRoute,
  getProjectsProjectIdTasksTaskIdRoute,
  getProjectsProjectIdTimeRoute,
  getProjectsProjectIdTimeTimeEntryIdRoute,
  getProjectsRoute,
  getProjectsUsersRoute,
  patchProjectsProjectIdRoute,
  postProjectsProjectIdTasksRoute,
  postProjectsProjectIdTimeRoute,
  postProjectsRoute,
  putProjectsProjectIdRoute,
  putProjectsProjectIdTasksTaskIdRoute,
  putProjectsProjectIdTimeTimeEntryIdRoute,
} from './routes'
import {
  deleteProjectsProjectIdTasksTaskIdRouteHandler,
  deleteProjectsProjectIdTimeTimeEntryIdRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsProjectIdTasksRouteHandler,
  getProjectsProjectIdTasksTaskIdRouteHandler,
  getProjectsProjectIdTimeRouteHandler,
  getProjectsProjectIdTimeTimeEntryIdRouteHandler,
  getProjectsRouteHandler,
  getProjectsUsersRouteHandler,
  patchProjectsProjectIdRouteHandler,
  postProjectsProjectIdTasksRouteHandler,
  postProjectsProjectIdTimeRouteHandler,
  postProjectsRouteHandler,
  putProjectsProjectIdRouteHandler,
  putProjectsProjectIdTasksTaskIdRouteHandler,
  putProjectsProjectIdTimeTimeEntryIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(putProjectsProjectIdRoute, putProjectsProjectIdRouteHandler)
  .openapi(patchProjectsProjectIdRoute, patchProjectsProjectIdRouteHandler)
  .openapi(getProjectsUsersRoute, getProjectsUsersRouteHandler)
  .openapi(getProjectsProjectIdTasksRoute, getProjectsProjectIdTasksRouteHandler)
  .openapi(postProjectsProjectIdTasksRoute, postProjectsProjectIdTasksRouteHandler)
  .openapi(getProjectsProjectIdTasksTaskIdRoute, getProjectsProjectIdTasksTaskIdRouteHandler)
  .openapi(putProjectsProjectIdTasksTaskIdRoute, putProjectsProjectIdTasksTaskIdRouteHandler)
  .openapi(deleteProjectsProjectIdTasksTaskIdRoute, deleteProjectsProjectIdTasksTaskIdRouteHandler)
  .openapi(getProjectsProjectIdTimeRoute, getProjectsProjectIdTimeRouteHandler)
  .openapi(postProjectsProjectIdTimeRoute, postProjectsProjectIdTimeRouteHandler)
  .openapi(
    getProjectsProjectIdTimeTimeEntryIdRoute,
    getProjectsProjectIdTimeTimeEntryIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdTimeTimeEntryIdRoute,
    putProjectsProjectIdTimeTimeEntryIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdTimeTimeEntryIdRoute,
    deleteProjectsProjectIdTimeTimeEntryIdRouteHandler,
  )

export default app
