import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteChangesRoute, getChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const changesHandler = app
  .openapi(deleteChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
