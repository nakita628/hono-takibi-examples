import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsMineSelectedPaymentMethodRoute,
  putV1CartsMineSelectedPaymentMethodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsMineSelectedPaymentMethodHandler = app
  .openapi(getV1CartsMineSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
