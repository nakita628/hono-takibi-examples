import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferItemIdRoute,
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRoute,
  postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseTransferHandler = app
  .openapi(postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
