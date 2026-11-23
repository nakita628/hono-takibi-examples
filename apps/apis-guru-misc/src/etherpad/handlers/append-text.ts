import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppendTextRoute, postAppendTextRoute } from '../routes'

const app = new OpenAPIHono()

export const appendTextHandler = app
  .openapi(getAppendTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppendTextRoute, (c) => {
    throw new Error('Not implemented')
  })
