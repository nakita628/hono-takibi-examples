import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1TinVerificationBasicCheckRoute,
  getApiV1TinVerificationComprehensiveCheckRoute,
  getApiV1TinVerificationNameLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1TinVerificationHandler = app
  .openapi(getApiV1TinVerificationBasicCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TinVerificationComprehensiveCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TinVerificationNameLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
