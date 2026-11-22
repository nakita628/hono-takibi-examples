import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
  postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseRecipientRequirementHandler = app
  .openapi(
    postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
