import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientsClientIdRoute,
  getClientsRoute,
  postClientsClientIdRevokeRoute,
  postClientsVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsClientIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
