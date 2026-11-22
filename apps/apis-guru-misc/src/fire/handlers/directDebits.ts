import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DirectdebitsDirectDebitUuidRoute,
  getV1DirectdebitsRoute,
  getV1MandatesMandateUuidRoute,
  getV1MandatesRoute,
  postV1DirectdebitsDirectDebitUuidRejectRoute,
  postV1MandatesMandateUuidActivateRoute,
  postV1MandatesMandateUuidCancelRoute,
  postV1MandatesMandateUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directDebitsHandler = app
  .openapi(getV1DirectdebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectdebitsDirectDebitUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DirectdebitsDirectDebitUuidRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MandatesMandateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
