import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ConnectBalanceTransfersBalanceTransferIdRoute,
  getV2ConnectBalanceTransfersRoute,
  postV2ConnectBalanceTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceTransfersAPIHandler = app
  .openapi(postV2ConnectBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectBalanceTransfersBalanceTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
