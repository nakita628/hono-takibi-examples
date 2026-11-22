import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPartPartNumberRoute, getApiPartRoute } from '../routes'

const app = new OpenAPIHono()

export const partHandler = app
  .openapi(getApiPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartPartNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
