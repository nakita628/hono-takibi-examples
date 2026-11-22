import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CustomerDisputesIdRoute,
  getV1CustomerDisputesRoute,
  patchV1CustomerDisputesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getV1CustomerDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CustomerDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
