import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAppstoreV1ApplicationChargesJsonRoute,
  postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationChargeHandler = app
  .openapi(postAppstoreV1ApplicationChargesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
