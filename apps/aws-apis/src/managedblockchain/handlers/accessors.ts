import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessorsAccessorIdRoute,
  getAccessorsAccessorIdRoute,
  getAccessorsRoute,
  postAccessorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessorsHandler = app
  .openapi(postAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessorsAccessorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessorsAccessorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
