import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLkeClustersClusterIdControlPlaneAclRoute,
  getApiVersionLkeClustersClusterIdControlPlaneAclRoute,
  putApiVersionLkeClustersClusterIdControlPlaneAclRoute,
} from '../routes'

const app = new OpenAPIHono()

export const controlPlaneACLHandler = app
  .openapi(getApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
