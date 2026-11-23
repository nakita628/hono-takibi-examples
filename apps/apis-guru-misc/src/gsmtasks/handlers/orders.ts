import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersIdIndexRoute,
  getOrdersIndexRoute,
  patchOrdersIdIndexRoute,
  postOrdersIndexRoute,
  putOrdersIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrdersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrdersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
