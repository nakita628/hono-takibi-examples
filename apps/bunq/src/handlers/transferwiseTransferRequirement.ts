import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRequirementRoute } from '../routes'

const app = new OpenAPIHono()

export const transferwiseTransferRequirementHandler = app.openapi(
  postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRequirementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
