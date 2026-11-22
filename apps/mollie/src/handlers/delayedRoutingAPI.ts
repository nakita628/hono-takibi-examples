import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsPaymentIdRoutesRoute,
  getV2PaymentsPaymentIdRoutesRouteIdRoute,
  postV2PaymentsPaymentIdRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const delayedRoutingAPIHandler = app
  .openapi(postV2PaymentsPaymentIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
