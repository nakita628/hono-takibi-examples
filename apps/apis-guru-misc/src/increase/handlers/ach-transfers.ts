import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAchTransfersAchTransferIdRoute,
  getAchTransfersRoute,
  postAchTransfersAchTransferIdApproveRoute,
  postAchTransfersAchTransferIdCancelRoute,
  postAchTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achTransfersHandler = app
  .openapi(getAchTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAchTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAchTransfersAchTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAchTransfersAchTransferIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAchTransfersAchTransferIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
