import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataStudioDataSource202609DatasourceIdRoute,
  getDataStudioDataSource202609DatasourceIdRoute,
  postDataStudioDataSource202609Route,
  putDataStudioDataSource202609DatasourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataStudioHandler = app
  .openapi(postDataStudioDataSource202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
