import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInventoryTaskRoute,
  getInventoryTaskTaskIdRoute,
  postInventoryTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryTaskHandler = app
  .openapi(getInventoryTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInventoryTaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
