import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderTaskRoute, getOrderTaskTaskIdRoute, postOrderTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const orderTaskHandler = app
  .openapi(getOrderTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderTaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
