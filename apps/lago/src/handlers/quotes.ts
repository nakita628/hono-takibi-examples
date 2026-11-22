import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuotesLagoIdRoute,
  getQuotesLagoIdVersionsRoute,
  getQuotesRoute,
  getQuoteVersionsLagoIdRoute,
  postQuoteVersionsLagoIdApproveRoute,
  postQuoteVersionsLagoIdCloneRoute,
  postQuoteVersionsLagoIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesLagoIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
