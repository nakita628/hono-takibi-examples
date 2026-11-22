import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteChangesRoute, deleteExportsRoute, getChangesRoute, getExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const trackingChangesHandler = app
  .openapi(deleteChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
