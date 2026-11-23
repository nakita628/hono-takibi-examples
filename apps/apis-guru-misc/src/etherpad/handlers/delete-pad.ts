import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeletePadRoute, postDeletePadRoute } from '../routes'

const app = new OpenAPIHono()

export const deletePadHandler = app
  .openapi(getDeletePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeletePadRoute, (c) => {
    throw new Error('Not implemented')
  })
