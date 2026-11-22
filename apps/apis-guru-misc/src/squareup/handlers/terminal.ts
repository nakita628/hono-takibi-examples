import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TerminalsCheckoutsCheckoutIdRoute,
  getV2TerminalsRefundsTerminalRefundIdRoute,
  postV2TerminalsCheckoutsCheckoutIdCancelRoute,
  postV2TerminalsCheckoutsRoute,
  postV2TerminalsCheckoutsSearchRoute,
  postV2TerminalsRefundsRoute,
  postV2TerminalsRefundsSearchRoute,
  postV2TerminalsRefundsTerminalRefundIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalHandler = app
  .openapi(postV2TerminalsCheckoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsCheckoutsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsCheckoutsCheckoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsCheckoutsCheckoutIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsRefundsTerminalRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsRefundsTerminalRefundIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
