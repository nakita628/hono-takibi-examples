import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransformsRoute, postTransformsRoute } from '../routes'

const app = new OpenAPIHono()

export const transformsHandler = app
  .openapi(getTransformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformsRoute, (c) => {
    throw new Error('Not implemented')
  })
