import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransfersIdRoute,
  getTransfersRoute,
  postTransfersApproveRoute,
  postTransfersCancelRoute,
  postTransfersRoute,
  postTransfersTransferIdReturnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(getTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransfersApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransfersCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransfersTransferIdReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
