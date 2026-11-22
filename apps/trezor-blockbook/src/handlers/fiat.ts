import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2MultiTickersIndexRoute,
  getApiV2TickersIndexRoute,
  getApiV2TickersListIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fiatHandler = app
  .openapi(getApiV2TickersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MultiTickersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TickersListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
