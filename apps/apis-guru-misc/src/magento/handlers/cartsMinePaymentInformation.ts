import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsMinePaymentInformationRoute,
  postV1CartsMinePaymentInformationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsMinePaymentInformationHandler = app
  .openapi(getV1CartsMinePaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMinePaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
