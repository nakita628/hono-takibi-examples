import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdditionsRoute, getChangesRoute, getDeletionsRoute, getIncidentsRoute } from '../routes'

const app = new OpenAPIHono()

export const incidentsHandler = app
  .openapi(getAdditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
