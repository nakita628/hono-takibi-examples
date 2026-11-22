import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectsCollectionIdRoute,
  deleteV1ObjectsCollectionObjectIdPreferencesIdRoute,
  getV1ObjectsCollectionIdRoute,
  getV1ObjectsCollectionObjectIdPreferencesIdRoute,
  getV1ObjectsCollectionObjectIdPreferencesRoute,
  getV1ObjectsCollectionRoute,
  postV1ObjectsCollectionBulkDeleteRoute,
  postV1ObjectsCollectionBulkSetRoute,
  postV1ObjectsCollectionBulkSubscriptionsAddRoute,
  postV1ObjectsCollectionBulkSubscriptionsDeleteRoute,
  postV1SchedulesBulkCreateRoute,
  putV1ObjectsCollectionIdRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app
  .openapi(deleteV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulesBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSubscriptionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
