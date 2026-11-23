import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberSearchRoute,
  postNumberBuyRoute,
  postNumberCancelRoute,
  postNumberUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberHandler = app
  .openapi(postNumberBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
