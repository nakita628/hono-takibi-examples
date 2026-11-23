import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterpriseConnectionsEnterpriseConnectionIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  getEnterpriseConnectionsRoute,
  patchEnterpriseConnectionsEnterpriseConnectionIdRoute,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  postEnterpriseConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseConnectionsHandler = app
  .openapi(getEnterpriseConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseConnectionsEnterpriseConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterpriseConnectionsEnterpriseConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterpriseConnectionsEnterpriseConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
