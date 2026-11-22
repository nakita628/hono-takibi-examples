import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1WantedMissingIdRoute, getApiV1WantedMissingRoute } from '../routes'

const app = new OpenAPIHono()

export const missingHandler = app
  .openapi(getApiV1WantedMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedMissingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
