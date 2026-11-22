import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLedgersIdRoute,
  getApiLedgersIdRoute,
  getApiLedgersRoute,
  patchApiLedgersIdRoute,
  postApiLedgersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerHandler = app
  .openapi(getApiLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
