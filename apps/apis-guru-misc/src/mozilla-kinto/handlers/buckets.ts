import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
  getBucketsBidCollectionsCidChangesetRoute,
  getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute,
  getBucketsBucketIdCollectionsCollectionIdRecordsRoute,
  getBucketsBucketIdCollectionsIdRoute,
  getBucketsBucketIdCollectionsRoute,
  getBucketsBucketIdGroupsIdRoute,
  getBucketsBucketIdGroupsRoute,
  getBucketsIdRoute,
  getBucketsMonitorCollectionsChangesRecordsRoute,
  getBucketsRoute,
  postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(getBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsMonitorCollectionsChangesRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBidCollectionsCidChangesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsCollectionIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
