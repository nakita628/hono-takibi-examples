import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCredentialConnectionsIdRoute,
  getCredentialConnectionsIdRoute,
  getCredentialConnectionsRoute,
  patchCredentialConnectionsIdRoute,
  postCredentialConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialConnectionsHandler = app
  .openapi(getCredentialConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCredentialConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCredentialConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCredentialConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCredentialConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
