import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreatePadRoute, postCreatePadRoute } from '../routes'

const app = new OpenAPIHono()

export const createPadHandler = app
  .openapi(getCreatePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreatePadRoute, (c) => {
    throw new Error('Not implemented')
  })
