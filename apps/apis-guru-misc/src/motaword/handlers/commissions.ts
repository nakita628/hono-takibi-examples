import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommissionsRoute, postCommissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const commissionsHandler = app
  .openapi(getCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
