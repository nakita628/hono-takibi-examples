import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3WantedMissingIdRoute, getApiV3WantedMissingRoute } from '../routes'

const app = new OpenAPIHono()

export const missingHandler = app
  .openapi(getApiV3WantedMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedMissingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
