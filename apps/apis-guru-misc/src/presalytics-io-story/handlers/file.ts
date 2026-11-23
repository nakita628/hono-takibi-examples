import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileJsonRoute, postFileRoute } from '../routes'

const app = new OpenAPIHono()

export const fileHandler = app
  .openapi(postFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
