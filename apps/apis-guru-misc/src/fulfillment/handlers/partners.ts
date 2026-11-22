import { OpenAPIHono } from '@hono/zod-openapi'
import { putOrdersIdShipRoute, putOrdersIdStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const partnersHandler = app
  .openapi(putOrdersIdShipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
