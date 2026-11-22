import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersClusterIdAclsRoute,
  getClustersClusterIdAclsRoute,
  postClustersClusterIdAclsBatchRoute,
  postClustersClusterIdAclsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aclv3Handler = app
  .openapi(postClustersClusterIdAclsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
