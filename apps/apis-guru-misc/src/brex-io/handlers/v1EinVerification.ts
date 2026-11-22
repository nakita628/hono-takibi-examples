import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1EinVerificationBasicCheckRoute,
  getApiV1EinVerificationComprehensiveCheckRoute,
  getApiV1EinVerificationLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1EinVerificationHandler = app
  .openapi(getApiV1EinVerificationBasicCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EinVerificationComprehensiveCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EinVerificationLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
