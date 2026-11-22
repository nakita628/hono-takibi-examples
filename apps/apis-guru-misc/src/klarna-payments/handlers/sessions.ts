import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentsV1SessionsSessionIdRoute,
  postPaymentsV1SessionsRoute,
  postPaymentsV1SessionsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(postPaymentsV1SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsV1SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
