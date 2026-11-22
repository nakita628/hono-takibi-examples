import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1QueryRoute, postRoute, postV1QueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryAPIHandler = app
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
