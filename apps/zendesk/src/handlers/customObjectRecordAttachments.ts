import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute,
  putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectRecordAttachmentsHandler = app
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
