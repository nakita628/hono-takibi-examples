import { OpenAPIHono } from '@hono/zod-openapi'
import { getRenderIdRoute, postRenderRoute } from '../routes'

const app = new OpenAPIHono()

export const editHandler = app
  .openapi(postRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
