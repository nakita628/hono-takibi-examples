import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSuperfundsRoute,
  getSuperfundsSuperFundIDRoute,
  postSuperfundsRoute,
  postSuperfundsSuperFundIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const superfundsHandler = app
  .openapi(getSuperfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperfundsSuperFundIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperfundsSuperFundIDRoute, (c) => {
    throw new Error('Not implemented')
  })
