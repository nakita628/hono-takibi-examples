import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2TerminalsPairingCodesPairingCodeIdRoute,
  getV2TerminalsPairingCodesPairingCodeIdRoute,
  getV2TerminalsPairingCodesRoute,
  getV2TerminalsRoute,
  getV2TerminalsTerminalIdRoute,
  postV2TerminalsPairingCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalsAPIHandler = app
  .openapi(getV2TerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsTerminalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TerminalsPairingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsPairingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TerminalsPairingCodesPairingCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TerminalsPairingCodesPairingCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
