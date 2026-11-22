import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePayConnectorsNameRoute,
  getPayConnectorsNameRoute,
  getPayConnectorsRoute,
  patchPayConnectorsNameRoute,
  postPayConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payConnectorsHandler = app
  .openapi(getPayConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePayConnectorsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayConnectorsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPayConnectorsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
