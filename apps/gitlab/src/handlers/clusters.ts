import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminClustersClusterIdRoute,
  deleteApiV4GroupsIdClustersClusterIdRoute,
  deleteApiV4ProjectsIdClustersClusterIdRoute,
  getApiV4AdminClustersClusterIdRoute,
  getApiV4AdminClustersRoute,
  getApiV4DiscoverCertBasedClustersRoute,
  getApiV4GroupsIdClustersClusterIdRoute,
  getApiV4GroupsIdClustersRoute,
  getApiV4ProjectsIdClustersClusterIdRoute,
  getApiV4ProjectsIdClustersRoute,
  postApiV4AdminClustersAddRoute,
  postApiV4GroupsIdClustersUserRoute,
  postApiV4ProjectsIdClustersUserRoute,
  putApiV4AdminClustersClusterIdRoute,
  putApiV4GroupsIdClustersClusterIdRoute,
  putApiV4ProjectsIdClustersClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(getApiV4ProjectsIdClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdClustersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdClustersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4DiscoverCertBasedClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminClustersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
