import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TransfersRoute,
  getV2TransfersTransferIdRoute,
  postV2TransfersRoute,
  postV2TransfersTransferIdExecuteRoute,
  postV2TransfersTransferIdTravelRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(postV2TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TransfersTransferIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TransfersTransferIdTravelRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
