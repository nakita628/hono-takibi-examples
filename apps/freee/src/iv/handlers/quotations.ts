import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuotationsIdRoute,
  getQuotationsRoute,
  getQuotationsTemplatesRoute,
  postQuotationsRoute,
  putQuotationsIdCancelRoute,
  putQuotationsIdRoute,
  putQuotationsIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotationsHandler = app
  .openapi(getQuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotationsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotationsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotationsIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
