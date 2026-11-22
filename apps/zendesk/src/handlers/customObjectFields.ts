import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  getApiV2CustomObjectsCustomObjectKeyFieldsRoute,
  getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRoute,
  patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  postApiV2CustomObjectsCustomObjectKeyFieldsRoute,
  putApiV2CustomObjectsCustomObjectKeyFieldsReorderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectFieldsHandler = app
  .openapi(getApiV2CustomObjectsCustomObjectKeyFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
