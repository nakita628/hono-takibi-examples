import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1WebBackendCheckUpdatesRoute,
  postV1WebBackendConnectionsCreateRoute,
  postV1WebBackendConnectionsGetRoute,
  postV1WebBackendConnectionsListRoute,
  postV1WebBackendConnectionsUpdateRoute,
  postV1WebBackendGeographiesListRoute,
  postV1WebBackendStateGetTypeRoute,
  postV1WebBackendWorkspaceStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webBackendHandler = app
  .openapi(postV1WebBackendCheckUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendGeographiesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendStateGetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendWorkspaceStateRoute, (c) => {
    throw new Error('Not implemented')
  })
