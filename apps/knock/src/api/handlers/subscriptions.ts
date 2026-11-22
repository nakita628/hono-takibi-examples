import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectsCollectionObjectIdSubscriptionsRoute,
  getV1ObjectsCollectionObjectIdSubscriptionsRoute,
  getV1UsersUserIdSubscriptionsRoute,
  postV1ObjectsCollectionObjectIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getV1UsersUserIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
