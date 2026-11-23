import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliverySlipsIdRoute,
  getDeliverySlipsRoute,
  getDeliverySlipsTemplatesRoute,
  postDeliverySlipsRoute,
  putDeliverySlipsIdCancelRoute,
  putDeliverySlipsIdRoute,
  putDeliverySlipsIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deliverySlipsHandler = app
  .openapi(getDeliverySlipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeliverySlipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeliverySlipsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeliverySlipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliverySlipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliverySlipsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliverySlipsIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
