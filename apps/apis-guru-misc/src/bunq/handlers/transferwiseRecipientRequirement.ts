import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
  postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferwiseRecipientRequirementHandler = app
  .openapi(
    getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
