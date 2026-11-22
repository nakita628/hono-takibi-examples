import { OpenAPIHono } from '@hono/zod-openapi'
import { getHooksRoute, postHooksRoute } from '../routes'

const app = new OpenAPIHono()

export const hooksHandler = app
  .openapi(getHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
