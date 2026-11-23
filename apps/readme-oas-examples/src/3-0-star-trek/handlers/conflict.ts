import { OpenAPIHono } from '@hono/zod-openapi'
import { getConflictRoute, getConflictSearchRoute, postConflictSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const conflictHandler = app
  .openapi(getConflictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConflictSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConflictSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
