import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdSettingsGroupSettingIdRoute,
  getGroupsGroupIdSettingsGroupSettingIdRoute,
  getGroupsGroupIdSettingsRoute,
  patchGroupsGroupIdSettingsGroupSettingIdRoute,
  postGroupsGroupIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsGroupSettingHandler = app
  .openapi(getGroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdSettingsGroupSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
