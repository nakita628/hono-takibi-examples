import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInboundAchTransferReturnsInboundAchTransferReturnIdRoute,
  getInboundAchTransferReturnsRoute,
  postInboundAchTransferReturnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundAchTransferReturnsHandler = app
  .openapi(getInboundAchTransferReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundAchTransferReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboundAchTransferReturnsInboundAchTransferReturnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
