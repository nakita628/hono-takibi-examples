import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDefaultStreamsRoute, postDefaultStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultStreamsHandler = app
  .openapi(postDefaultStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDefaultStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
