import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegionsIdRoute,
  getRegionsIdRoute,
  getRegionsRoute,
  patchRegionsIdRoute,
  postRegionsIdRegenerateProxyApiKeyRoute,
  postRegionsIdRegenerateSnapshotManagerCredentialsRoute,
  postRegionsIdRegenerateSshGatewayApiKeyRoute,
  postRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegionsIdRegenerateProxyApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegionsIdRegenerateSshGatewayApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegionsIdRegenerateSnapshotManagerCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
