import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsRefPostgrestRoute, patchV1ProjectsRefPostgrestRoute } from '../routes'

const app = new OpenAPIHono()

export const restHandler = app
  .openapi(getV1ProjectsRefPostgrestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefPostgrestRoute, (c) => {
    throw new Error('Not implemented')
  })
