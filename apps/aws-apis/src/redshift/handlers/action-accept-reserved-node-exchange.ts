import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptReservedNodeExchangeRoute,
  postActionAcceptReservedNodeExchangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAcceptReservedNodeExchangeHandler = app
  .openapi(getActionAcceptReservedNodeExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptReservedNodeExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
