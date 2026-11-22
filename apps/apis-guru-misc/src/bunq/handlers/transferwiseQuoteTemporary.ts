import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDTransferwiseQuoteTemporaryItemIdRoute,
  postUserUserIDTransferwiseQuoteTemporaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseQuoteTemporaryHandler = app
  .openapi(postUserUserIDTransferwiseQuoteTemporaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDTransferwiseQuoteTemporaryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
