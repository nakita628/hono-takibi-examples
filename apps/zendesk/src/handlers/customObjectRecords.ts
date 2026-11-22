import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsCountRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRoute,
  getApiV2CustomObjectsLimitsRecordLimitRoute,
  getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute,
  postApiV2CustomObjectsCustomObjectKeyJobsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute,
  putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectRecordsHandler = app
  .openapi(postApiV2CustomObjectsCustomObjectKeyJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsLimitsRecordLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
