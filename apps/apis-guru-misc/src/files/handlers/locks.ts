import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteLocksPathRoute, getLocksPathRoute, postLocksPathRoute } from '../routes'

const app = new OpenAPIHono()

export const locksHandler = app
  .openapi(deleteLocksPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocksPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocksPathRoute, (c) => {
    throw new Error('Not implemented')
  })
