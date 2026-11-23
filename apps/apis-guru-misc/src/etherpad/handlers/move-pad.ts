import { OpenAPIHono } from '@hono/zod-openapi'
import { getMovePadRoute, postMovePadRoute } from '../routes'

const app = new OpenAPIHono()

export const movePadHandler = app
  .openapi(getMovePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMovePadRoute, (c) => {
    throw new Error('Not implemented')
  })
