import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessSettingsWhitelistRoute,
  deleteAccessSettingsWhitelistRuleIdRoute,
  getAccessSettingsActivityRoute,
  getAccessSettingsWhitelistRoute,
  getAccessSettingsWhitelistRuleIdRoute,
  postAccessSettingsWhitelistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessSettingsHandler = app
  .openapi(getAccessSettingsActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessSettingsWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessSettingsWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessSettingsWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessSettingsWhitelistRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessSettingsWhitelistRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
