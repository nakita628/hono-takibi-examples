import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObjectStorageBucketsClusterIdBucketRoute,
  deleteObjectStorageBucketsClusterIdBucketSslRoute,
  deleteObjectStorageKeysKeyIdRoute,
  getObjectStorageBucketsClusterIdBucketObjectAclRoute,
  getObjectStorageBucketsClusterIdBucketObjectListRoute,
  getObjectStorageBucketsClusterIdBucketRoute,
  getObjectStorageBucketsClusterIdBucketSslRoute,
  getObjectStorageBucketsClusterIdRoute,
  getObjectStorageBucketsRoute,
  getObjectStorageClustersClusterIdRoute,
  getObjectStorageClustersRoute,
  getObjectStorageKeysKeyIdRoute,
  getObjectStorageKeysRoute,
  getObjectStorageTransferRoute,
  postObjectStorageBucketsClusterIdBucketAccessRoute,
  postObjectStorageBucketsClusterIdBucketObjectUrlRoute,
  postObjectStorageBucketsClusterIdBucketSslRoute,
  postObjectStorageBucketsRoute,
  postObjectStorageCancelRoute,
  postObjectStorageKeysRoute,
  putObjectStorageBucketsClusterIdBucketAccessRoute,
  putObjectStorageBucketsClusterIdBucketObjectAclRoute,
  putObjectStorageKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectStorageHandler = app
  .openapi(getObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageBucketsClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectStorageBucketsClusterIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageBucketsClusterIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageBucketsClusterIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putObjectStorageBucketsClusterIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageBucketsClusterIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putObjectStorageBucketsClusterIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageBucketsClusterIdBucketObjectListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageBucketsClusterIdBucketObjectUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectStorageBucketsClusterIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageBucketsClusterIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageBucketsClusterIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectStorageTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
