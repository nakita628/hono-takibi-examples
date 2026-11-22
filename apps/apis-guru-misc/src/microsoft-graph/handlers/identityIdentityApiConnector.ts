import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityApiConnectorsIdentityApiConnectorIdRoute,
  getIdentityApiConnectorsIdentityApiConnectorIdRoute,
  getIdentityApiConnectorsRoute,
  patchIdentityApiConnectorsIdentityApiConnectorIdRoute,
  postIdentityApiConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityIdentityApiConnectorHandler = app
  .openapi(getIdentityApiConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityApiConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityApiConnectorsIdentityApiConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityApiConnectorsIdentityApiConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityApiConnectorsIdentityApiConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
