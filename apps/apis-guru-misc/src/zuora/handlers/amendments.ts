import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectAmendmentIdRoute,
  getV1AmendmentsAmendmentKeyRoute,
  getV1AmendmentsSubscriptionsSubscriptionIdRoute,
  getV1ObjectAmendmentIdRoute,
  putV1ObjectAmendmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amendmentsHandler = app
  .openapi(getV1AmendmentsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AmendmentsAmendmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
