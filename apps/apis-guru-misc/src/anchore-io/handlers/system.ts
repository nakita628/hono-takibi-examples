import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSystemFeedsFeedGroupRoute,
  deleteSystemFeedsFeedRoute,
  deleteSystemServicesServicenameHostidRoute,
  getStatusRoute,
  getSystemErrorCodesRoute,
  getSystemFeedsRoute,
  getSystemPolicySpecRoute,
  getSystemRoute,
  getSystemServicesRoute,
  getSystemServicesServicenameHostidRoute,
  getSystemServicesServicenameRoute,
  postSystemFeedsRoute,
  postSystemWebhooksWebhookTypeTestRoute,
  putSystemFeedsFeedGroupRoute,
  putSystemFeedsFeedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemErrorCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSystemFeedsFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemFeedsFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSystemFeedsFeedGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemFeedsFeedGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemPolicySpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemServicesServicenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSystemServicesServicenameHostidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemServicesServicenameHostidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemWebhooksWebhookTypeTestRoute, (c) => {
    throw new Error('Not implemented')
  })
