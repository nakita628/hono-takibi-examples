import { OpenAPIHono } from '@hono/zod-openapi'
import { get2AccountRoute, post2AccountRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(get2AccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2AccountRoute, (c) => {
    throw new Error('Not implemented')
  })
