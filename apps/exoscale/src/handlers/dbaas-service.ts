import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDbaasServiceNameRoute, getDbaasServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasServiceHandler = app
  .openapi(getDbaasServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
