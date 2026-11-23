import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliveriesIdRoute,
  getDeliveriesRoute,
  patchDeliveriesIdRoute,
  postDeliveriesIdCancellationRoute,
  postDeliveriesRoute,
  putDeliveriesIdAcceptanceStatusRoute,
  putDeliveriesIdDeliveryStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deliveriesHandler = app
  .openapi(getDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeliveriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeliveriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeliveriesIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveriesIdDeliveryStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveriesIdAcceptanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
