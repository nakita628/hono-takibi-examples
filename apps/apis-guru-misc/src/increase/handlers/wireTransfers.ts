import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWireTransfersRoute,
  getWireTransfersWireTransferIdRoute,
  postWireTransfersRoute,
  postWireTransfersWireTransferIdApproveRoute,
  postWireTransfersWireTransferIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wireTransfersHandler = app
  .openapi(getWireTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireTransfersWireTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireTransfersWireTransferIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireTransfersWireTransferIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
