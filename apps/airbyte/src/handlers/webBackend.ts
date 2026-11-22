import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WebBackendConfigRoute,
  postV1WebBackendCheckUpdatesRoute,
  postV1WebBackendConnectionsCreateRoute,
  postV1WebBackendConnectionsGetRoute,
  postV1WebBackendConnectionsListRoute,
  postV1WebBackendConnectionsStatusCountsRoute,
  postV1WebBackendConnectionsUpdateRoute,
  postV1WebBackendDescribeCronExpressionRoute,
  postV1WebBackendMappersValidateRoute,
  postV1WebBackendStateGetTypeRoute,
  postV1WebBackendWorkspaceStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webBackendHandler = app
  .openapi(postV1WebBackendCheckUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendMappersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsStatusCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendDescribeCronExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendStateGetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendWorkspaceStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebBackendConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
