import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemIdRoute,
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemIdRoute,
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRoute,
  postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseRecipientHandler = app
  .openapi(postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
