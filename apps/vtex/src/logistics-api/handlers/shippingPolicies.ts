import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtShippingPoliciesIdRoute,
  getApiLogisticsPvtShippingPoliciesIdRoute,
  getApiLogisticsPvtShippingPoliciesRoute,
  postApiLogisticsPvtShippingPoliciesRoute,
  putApiLogisticsPvtShippingPoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingPoliciesHandler = app
  .openapi(getApiLogisticsPvtShippingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtShippingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
