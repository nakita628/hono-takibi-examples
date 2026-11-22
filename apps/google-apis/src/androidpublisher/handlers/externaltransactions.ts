import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3NameRoute,
  postAndroidpublisherV3NameRefundRoute,
  postAndroidpublisherV3ParentExternalTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externaltransactionsHandler = app
  .openapi(getAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3NameRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ParentExternalTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
