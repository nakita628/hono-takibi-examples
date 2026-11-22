import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  deleteV1UsersUserIdChannelDataChannelIdRoute,
  getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  getV1UsersUserIdChannelDataChannelIdRoute,
  putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  putV1UsersUserIdChannelDataChannelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelDataHandler = app
  .openapi(deleteV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
