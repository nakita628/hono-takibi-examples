import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatacentersIdRoute, getDatacentersRoute } from '../routes'

const app = new OpenAPIHono()

export const datacentersHandler = app
  .openapi(getDatacentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatacentersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
