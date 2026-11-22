import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataStudioDataSource202609DatasourceIdRoute,
  getDataStudioDataSource202609DatasourceIdRoute,
  putDataStudioDataSource202609DatasourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataStudioDataSource202609DatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
