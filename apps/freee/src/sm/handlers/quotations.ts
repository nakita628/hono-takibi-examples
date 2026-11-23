import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuotationsIdRoute,
  getQuotationsRoute,
  patchQuotationsIdRoute,
  postQuotationsIdCancellationRoute,
  postQuotationsRoute,
  putQuotationsIdQuotationStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotationsHandler = app
  .openapi(getQuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchQuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotationsIdQuotationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotationsIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
