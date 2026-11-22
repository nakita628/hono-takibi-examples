import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerTypesIdRoute, getServerTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const serverTypesHandler = app
  .openapi(getServerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
