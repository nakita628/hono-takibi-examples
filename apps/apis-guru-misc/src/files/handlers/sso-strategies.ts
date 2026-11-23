import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSsoStrategiesIdRoute,
  getSsoStrategiesRoute,
  postSsoStrategiesIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoStrategiesHandler = app
  .openapi(getSsoStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoStrategiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoStrategiesIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
