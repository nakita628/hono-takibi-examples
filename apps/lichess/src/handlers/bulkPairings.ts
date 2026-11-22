import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiBulkPairingIdRoute,
  getApiBulkPairingIdGamesRoute,
  getApiBulkPairingIdRoute,
  getApiBulkPairingRoute,
  postApiBulkPairingIdStartClocksRoute,
  postApiBulkPairingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkPairingsHandler = app
  .openapi(getApiBulkPairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkPairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBulkPairingIdStartClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkPairingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiBulkPairingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkPairingIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
