import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationGetShippingLabelActionGetShippingLabelRoute,
  postOperationGetShippingLabelActionGetShippingLabelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationGetShippingLabelActionGetShippingLabelHandler = app
  .openapi(getOperationGetShippingLabelActionGetShippingLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationGetShippingLabelActionGetShippingLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
