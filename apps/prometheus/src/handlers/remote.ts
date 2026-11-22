import { OpenAPIHono } from '@hono/zod-openapi'
import { postReadRoute, postWriteRoute } from '../routes'

const app = new OpenAPIHono()

export const remoteHandler = app
  .openapi(postReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
