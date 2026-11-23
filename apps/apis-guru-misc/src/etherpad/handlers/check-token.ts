import { OpenAPIHono } from '@hono/zod-openapi'
import { getCheckTokenRoute, postCheckTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const checkTokenHandler = app
  .openapi(getCheckTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
