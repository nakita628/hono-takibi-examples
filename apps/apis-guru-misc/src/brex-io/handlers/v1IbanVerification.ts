import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1IbanVerificationCheckIbanRoute,
  postApiV1IbanVerificationComprehensiveCheckIbanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1IbanVerificationHandler = app
  .openapi(postApiV1IbanVerificationCheckIbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IbanVerificationComprehensiveCheckIbanRoute, (c) => {
    throw new Error('Not implemented')
  })
