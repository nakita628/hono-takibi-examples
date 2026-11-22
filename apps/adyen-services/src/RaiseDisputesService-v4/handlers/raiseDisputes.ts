import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDisputesIdRoute,
  getDisputesRoute,
  patchDisputesIdRoute,
  postDisputesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const raiseDisputesHandler = app
  .openapi(getDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
