import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionDatabasesTypesRoute, getApiVersionDatabasesTypesTypeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const typesHandler = app
  .openapi(getApiVersionDatabasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
