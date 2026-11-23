import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
  deleteUserIdDataSourcesDataSourceIdRoute,
  deleteUserIdSessionsSessionIdRoute,
  getUserIdDataSourcesDataSourceIdDataPointChangesRoute,
  getUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
  getUserIdDataSourcesDataSourceIdRoute,
  getUserIdDataSourcesRoute,
  getUserIdSessionsRoute,
  patchUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
  postUserIdDatasetAggregateRoute,
  postUserIdDataSourcesRoute,
  putUserIdDataSourcesDataSourceIdRoute,
  putUserIdSessionsSessionIdRoute,
} from './routes'
import {
  deleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  deleteUserIdDataSourcesDataSourceIdRouteHandler,
  deleteUserIdSessionsSessionIdRouteHandler,
  getUserIdDataSourcesDataSourceIdDataPointChangesRouteHandler,
  getUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  getUserIdDataSourcesDataSourceIdRouteHandler,
  getUserIdDataSourcesRouteHandler,
  getUserIdSessionsRouteHandler,
  patchUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  postUserIdDatasetAggregateRouteHandler,
  postUserIdDataSourcesRouteHandler,
  putUserIdDataSourcesDataSourceIdRouteHandler,
  putUserIdSessionsSessionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUserIdDataSourcesRoute, getUserIdDataSourcesRouteHandler)
  .openapi(postUserIdDataSourcesRoute, postUserIdDataSourcesRouteHandler)
  .openapi(
    deleteUserIdDataSourcesDataSourceIdRoute,
    deleteUserIdDataSourcesDataSourceIdRouteHandler,
  )
  .openapi(getUserIdDataSourcesDataSourceIdRoute, getUserIdDataSourcesDataSourceIdRouteHandler)
  .openapi(putUserIdDataSourcesDataSourceIdRoute, putUserIdDataSourcesDataSourceIdRouteHandler)
  .openapi(
    getUserIdDataSourcesDataSourceIdDataPointChangesRoute,
    getUserIdDataSourcesDataSourceIdDataPointChangesRouteHandler,
  )
  .openapi(
    deleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
    deleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    getUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
    getUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    patchUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute,
    patchUserIdDataSourcesDataSourceIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(postUserIdDatasetAggregateRoute, postUserIdDatasetAggregateRouteHandler)
  .openapi(getUserIdSessionsRoute, getUserIdSessionsRouteHandler)
  .openapi(deleteUserIdSessionsSessionIdRoute, deleteUserIdSessionsSessionIdRouteHandler)
  .openapi(putUserIdSessionsSessionIdRoute, putUserIdSessionsSessionIdRouteHandler)

export default app
