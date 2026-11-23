import { OpenAPIHono } from '@hono/zod-openapi'
import { getChangesRoute, getChangesStartPageTokenRoute, postChangesWatchRoute } from '../routes'

const app = new OpenAPIHono()

export const changesHandler = app
  .openapi(getChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangesStartPageTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangesWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
