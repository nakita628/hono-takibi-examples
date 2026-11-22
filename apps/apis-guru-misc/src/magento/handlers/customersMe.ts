import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersMeRoute, putV1CustomersMeRoute } from '../routes'

const app = new OpenAPIHono()

export const customersMeHandler = app
  .openapi(getV1CustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
