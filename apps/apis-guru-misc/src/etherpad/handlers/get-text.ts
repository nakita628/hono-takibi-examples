import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetTextRoute, postGetTextRoute } from '../routes'

const app = new OpenAPIHono()

export const getTextHandler = app
  .openapi(getGetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
