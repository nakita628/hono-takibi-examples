import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallsInfoRoute,
  postCallsAddRoute,
  postCallsEndRoute,
  postCallsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(postCallsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
