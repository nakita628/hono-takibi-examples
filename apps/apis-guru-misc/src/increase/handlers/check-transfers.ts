import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckTransfersCheckTransferIdRoute,
  getCheckTransfersRoute,
  postCheckTransfersCheckTransferIdApproveRoute,
  postCheckTransfersCheckTransferIdCancelRoute,
  postCheckTransfersCheckTransferIdStopPaymentRoute,
  postCheckTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checkTransfersHandler = app
  .openapi(getCheckTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckTransfersCheckTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTransfersCheckTransferIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTransfersCheckTransferIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTransfersCheckTransferIdStopPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
