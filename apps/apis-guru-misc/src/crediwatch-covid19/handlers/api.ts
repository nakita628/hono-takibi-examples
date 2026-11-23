import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatusCallRoute,
  getApiV1StatusSkuRoute,
  getApiV1VerifyNameRoute,
  getApiV1VerifyPhoneRoute,
  getApiV1VerifySkuRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1StatusCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VerifyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VerifyPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VerifySkuRoute, (c) => {
    throw new Error('Not implemented')
  })
