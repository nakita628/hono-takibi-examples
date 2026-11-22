import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute,
  getV1AppStoreReviewDetailsIdRoute,
  patchV1AppStoreReviewDetailsIdRoute,
  postV1AppStoreReviewDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreReviewDetailsHandler = app
  .openapi(postV1AppStoreReviewDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
