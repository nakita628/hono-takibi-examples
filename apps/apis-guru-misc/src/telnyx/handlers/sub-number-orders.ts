import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subNumberOrdersHandler = app
  .openapi(getSubNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
