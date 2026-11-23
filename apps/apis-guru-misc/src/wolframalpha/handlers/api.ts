import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CloudPluginRoute, getApiV1LlmApiRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1CloudPluginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LlmApiRoute, (c) => {
    throw new Error('Not implemented')
  })
