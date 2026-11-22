import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberBlockOrdersNumberBlockOrderIdRoute,
  getNumberBlockOrdersRoute,
  postNumberBlockOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberBlockOrdersHandler = app
  .openapi(getNumberBlockOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberBlockOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberBlockOrdersNumberBlockOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
