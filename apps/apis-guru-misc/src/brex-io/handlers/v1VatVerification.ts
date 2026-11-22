import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1VatVerificationBasicCheckCountryRoute,
  postApiV1VatVerificationComprehensiveCheckCountryRoute,
  postApiV1VatVerificationLeveltwoCheckCountryRoute,
  postApiV1VatVerificationLookupCountryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1VatVerificationHandler = app
  .openapi(postApiV1VatVerificationBasicCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationComprehensiveCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationLeveltwoCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationLookupCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
