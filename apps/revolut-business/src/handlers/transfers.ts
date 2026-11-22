import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransferReasonsRoute,
  postPayFieldsRoute,
  postPayIndicativeQuoteRoute,
  postPayRoute,
  postTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(postPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayIndicativeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransferReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
