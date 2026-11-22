import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameReviewsRoute,
  postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(getAndroidpublisherV3ApplicationsPackageNameReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
