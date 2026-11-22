import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppStoreReviewAttachmentsIdRoute,
  getV1AppStoreReviewAttachmentsIdRoute,
  patchV1AppStoreReviewAttachmentsIdRoute,
  postV1AppStoreReviewAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreReviewAttachmentsHandler = app
  .openapi(postV1AppStoreReviewAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
