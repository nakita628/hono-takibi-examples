import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ClientSettingsGlobalRoute,
  deleteApiV1ClientSettingsUserRoute,
  getApiV1ClientSettingsGlobalListRoute,
  getApiV1ClientSettingsUserListRoute,
  patchApiV1ClientSettingsGlobalRoute,
  patchApiV1ClientSettingsUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientSettingsHandler = app
  .openapi(deleteApiV1ClientSettingsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ClientSettingsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientSettingsGlobalListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ClientSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientSettingsUserListRoute, (c) => {
    throw new Error('Not implemented')
  })
