import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataStudioDataSource202609DatasourceIdRoute,
  getDataStudioDataSource202609DatasourceIdRoute,
  postDataStudioDataSource202609Route,
  putDataStudioDataSource202609DatasourceIdRoute,
} from './routes'
import {
  deleteDataStudioDataSource202609DatasourceIdRouteHandler,
  getDataStudioDataSource202609DatasourceIdRouteHandler,
  postDataStudioDataSource202609RouteHandler,
  putDataStudioDataSource202609DatasourceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDataStudioDataSource202609Route, postDataStudioDataSource202609RouteHandler)
  .openapi(
    getDataStudioDataSource202609DatasourceIdRoute,
    getDataStudioDataSource202609DatasourceIdRouteHandler,
  )
  .openapi(
    putDataStudioDataSource202609DatasourceIdRoute,
    putDataStudioDataSource202609DatasourceIdRouteHandler,
  )
  .openapi(
    deleteDataStudioDataSource202609DatasourceIdRoute,
    deleteDataStudioDataSource202609DatasourceIdRouteHandler,
  )

export default app
