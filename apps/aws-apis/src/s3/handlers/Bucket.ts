import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketKeyRoute,
  deleteBucketKeyTaggingRoute,
  deleteBucketKeyUploadIdRoute,
  deleteBucketRoute,
  getBucketKeyAclRoute,
  getBucketKeyAttributesXAmzObjectAttributesRoute,
  getBucketKeyLegalHoldRoute,
  getBucketKeyRetentionRoute,
  getBucketKeyRoute,
  getBucketKeyTaggingRoute,
  getBucketKeyTorrentRoute,
  getBucketKeyUploadIdRoute,
  getBucketRoute,
  headBucketKeyRoute,
  headBucketRoute,
  postBucketKeyRestoreRoute,
  postBucketKeySelectSelectType2Route,
  postBucketKeyUploadIdRoute,
  postBucketKeyUploadsRoute,
  putBucketKeyAclRoute,
  putBucketKeyLegalHoldRoute,
  putBucketKeyPartNumberUploadIdRoute,
  putBucketKeyRetentionRoute,
  putBucketKeyRoute,
  putBucketKeyTaggingRoute,
  putBucketKeyXAmzCopySourcePartNumberUploadIdRoute,
  putBucketKeyXAmzCopySourceRoute,
  putBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const BucketHandler = app
  .openapi(deleteBucketKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyXAmzCopySourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketKeyUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headBucketKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketKeyTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyAttributesXAmzObjectAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyLegalHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyLegalHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketKeyTorrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketKeyRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketKeySelectSelectType2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyPartNumberUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketKeyXAmzCopySourcePartNumberUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
