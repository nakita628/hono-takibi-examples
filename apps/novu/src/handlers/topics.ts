import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2TopicsTopicKeyRoute,
  deleteV2TopicsTopicKeySubscriptionsRoute,
  getV1TopicsTopicKeySubscribersExternalSubscriberIdRoute,
  getV2TopicsRoute,
  getV2TopicsTopicKeyRoute,
  getV2TopicsTopicKeySubscriptionsIdentifierRoute,
  getV2TopicsTopicKeySubscriptionsRoute,
  patchV2TopicsTopicKeyRoute,
  patchV2TopicsTopicKeySubscriptionsIdentifierRoute,
  postV2TopicsRoute,
  postV2TopicsTopicKeySubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app
  .openapi(getV1TopicsTopicKeySubscribersExternalSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsTopicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsTopicKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsTopicKeySubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TopicsTopicKeySubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
