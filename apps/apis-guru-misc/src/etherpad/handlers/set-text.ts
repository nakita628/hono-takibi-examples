import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetTextRoute, postSetTextRoute } from '../routes'

const app = new OpenAPIHono()

export const setTextHandler = app
  .openapi(getSetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
