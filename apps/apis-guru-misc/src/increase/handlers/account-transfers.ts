import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountTransfersAccountTransferIdRoute,
  getAccountTransfersRoute,
  postAccountTransfersAccountTransferIdApproveRoute,
  postAccountTransfersAccountTransferIdCancelRoute,
  postAccountTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountTransfersHandler = app
  .openapi(getAccountTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTransfersAccountTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTransfersAccountTransferIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTransfersAccountTransferIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
