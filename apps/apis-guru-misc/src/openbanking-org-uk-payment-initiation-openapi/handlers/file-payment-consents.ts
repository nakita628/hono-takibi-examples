import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilePaymentConsentsConsentIdFileRoute,
  getFilePaymentConsentsConsentIdRoute,
  postFilePaymentConsentsConsentIdFileRoute,
  postFilePaymentConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filePaymentConsentsHandler = app
  .openapi(postFilePaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentConsentsConsentIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilePaymentConsentsConsentIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
