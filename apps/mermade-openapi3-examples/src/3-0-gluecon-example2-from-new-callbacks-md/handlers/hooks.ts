import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteHooksIdRoute, postHooksRoute } from '../routes'

const app = new OpenAPIHono()

export const hooksHandler = app
  .openapi(postHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
