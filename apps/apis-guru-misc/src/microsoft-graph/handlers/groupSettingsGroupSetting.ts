import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupSettingsGroupSettingIdRoute,
  getGroupSettingsGroupSettingIdRoute,
  getGroupSettingsRoute,
  patchGroupSettingsGroupSettingIdRoute,
  postGroupSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSettingsGroupSettingHandler = app
  .openapi(getGroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
