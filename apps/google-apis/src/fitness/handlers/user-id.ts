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
} from '../routes'

const app = new OpenAPIHono()

export const userIdHandler = app
  .openapi(getUserIdDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdDataSourcesDataSourceIdDataPointChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserIdDataSourcesDataSourceIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdDatasetAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
