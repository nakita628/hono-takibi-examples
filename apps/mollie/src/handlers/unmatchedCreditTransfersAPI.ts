import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UnmatchedCreditTransfersRoute,
  getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute,
  postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unmatchedCreditTransfersAPIHandler = app
  .openapi(getV2UnmatchedCreditTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
