import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiGetProfileRoute, getApiRequestTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiGetProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
