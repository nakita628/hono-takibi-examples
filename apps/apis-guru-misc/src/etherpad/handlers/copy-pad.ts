import { OpenAPIHono } from '@hono/zod-openapi'
import { getCopyPadRoute, postCopyPadRoute } from '../routes'

const app = new OpenAPIHono()

export const copyPadHandler = app
  .openapi(getCopyPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCopyPadRoute, (c) => {
    throw new Error('Not implemented')
  })
