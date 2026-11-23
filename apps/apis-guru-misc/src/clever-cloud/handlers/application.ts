import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplicationAppIdEnvironmentRoute, putApplicationAppIdEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApplicationAppIdEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationAppIdEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
