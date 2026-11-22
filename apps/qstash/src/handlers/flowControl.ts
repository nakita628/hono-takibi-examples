import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2FlowControlFlowControlKeyRoute,
  getV2FlowControlRoute,
  getV2GlobalParallelismRoute,
  postV2FlowControlFlowControlKeyPauseRoute,
  postV2FlowControlFlowControlKeyPinRoute,
  postV2FlowControlFlowControlKeyResetRateRoute,
  postV2FlowControlFlowControlKeyResumeRoute,
  postV2FlowControlFlowControlKeyUnpinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowControlHandler = app
  .openapi(getV2FlowControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FlowControlFlowControlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FlowControlFlowControlKeyResetRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlobalParallelismRoute, (c) => {
    throw new Error('Not implemented')
  })
