import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  patchNumberOrdersNumberOrderIdRoute,
  postNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberOrdersHandler = app
  .openapi(getNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
