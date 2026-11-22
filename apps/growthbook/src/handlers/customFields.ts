import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CustomFieldsIdRoute,
  getV1CustomFieldsIdRoute,
  getV1CustomFieldsRoute,
  postV1CustomFieldsRoute,
  putV1CustomFieldsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldsHandler = app
  .openapi(postV1CustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
