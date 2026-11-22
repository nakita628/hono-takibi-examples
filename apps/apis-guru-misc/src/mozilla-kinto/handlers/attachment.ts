import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
  postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentHandler = app
  .openapi(deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
