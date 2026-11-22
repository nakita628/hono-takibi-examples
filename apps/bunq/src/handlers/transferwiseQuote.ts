import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDTransferwiseQuoteItemIdRoute,
  postUserUserIDTransferwiseQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseQuoteHandler = app
  .openapi(postUserUserIDTransferwiseQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDTransferwiseQuoteItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
