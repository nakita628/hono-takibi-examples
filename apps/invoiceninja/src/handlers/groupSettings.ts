import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1GroupSettingsIdRoute,
  getApiV1GroupSettingsCreateRoute,
  getApiV1GroupSettingsIdEditRoute,
  getApiV1GroupSettingsIdRoute,
  getApiV1GroupSettingsRoute,
  postApiV1GroupSettingsBulkRoute,
  postApiV1GroupSettingsIdUploadRoute,
  postApiV1GroupSettingsRoute,
  putApiV1GroupSettingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSettingsHandler = app
  .openapi(getApiV1GroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GroupSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupSettingsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupSettingsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
