import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimCardOrdersIdRoute, getSimCardOrdersRoute, postSimCardOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const simCardOrdersHandler = app
  .openapi(getSimCardOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
