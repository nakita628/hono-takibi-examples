import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterPeerPeerIdRoute,
  getClusterRoute,
  getClusterTelemetryRoute,
  getCollectionsCollectionNameClusterRoute,
  getCollectionsCollectionNameShardsRoute,
  postClusterRecoverRoute,
  postCollectionsCollectionNameClusterRoute,
  postCollectionsCollectionNameShardsDeleteRoute,
  putCollectionsCollectionNameShardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distributedHandler = app
  .openapi(putCollectionsCollectionNameShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterPeerPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
