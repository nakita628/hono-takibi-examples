import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1QueryRoute, postV1StreamQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryServiceHandler = app
  .openapi(postV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
