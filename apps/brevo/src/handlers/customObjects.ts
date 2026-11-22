import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getObjectsObjectTypeAssociatedRecordsRoute,
  getObjectsObjectTypeRecordsRoute,
  postObjectsObjectTypeBatchDeleteRoute,
  postObjectsObjectTypeBatchUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectsHandler = app
  .openapi(postObjectsObjectTypeBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsObjectTypeRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsObjectTypeBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsObjectTypeAssociatedRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
