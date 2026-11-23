import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuoteVersionsLagoIdRoute,
  postQuoteVersionsLagoIdApproveRoute,
  postQuoteVersionsLagoIdCloneRoute,
  postQuoteVersionsLagoIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteVersionsHandler = app
  .openapi(getQuoteVersionsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteVersionsLagoIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteVersionsLagoIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuoteVersionsLagoIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
