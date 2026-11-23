import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataRetentionSettingsLevelIdRoute,
  getDataRetentionSettingsLevelIdRoute,
  getDataRetentionSettingsRoute,
  patchDataRetentionSettingsLevelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataRetentionSettingsHandler = app
  .openapi(getDataRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataRetentionSettingsLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataRetentionSettingsLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataRetentionSettingsLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
