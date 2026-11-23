import { OpenAPIHono } from '@hono/zod-openapi'
import { getRequestJobIdRoute, postRequestMatchIdRoute } from '../routes'

const app = new OpenAPIHono()

export const requestHandler = app
  .openapi(getRequestJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
