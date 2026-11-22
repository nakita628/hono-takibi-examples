import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionDatabasesEnginesEngineIdRoute,
  getApiVersionDatabasesEnginesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enginesHandler = app
  .openapi(getApiVersionDatabasesEnginesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesEnginesEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
