import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransferInstrumentsIdRoute,
  getTransferInstrumentsIdRoute,
  patchTransferInstrumentsIdRoute,
  postTransferInstrumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferInstrumentsHandler = app
  .openapi(postTransferInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransferInstrumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransferInstrumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransferInstrumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
