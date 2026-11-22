import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdRoute, putV1CartsCartIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdHandler = app
  .openapi(getV1CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
