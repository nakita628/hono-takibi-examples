import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdSettingsEnoteConfigurationRoute,
  getV21AccountsAccountIdSettingsEnoteConfigurationRoute,
  putV21AccountsAccountIdSettingsEnoteConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eNoteConfigurationsHandler = app
  .openapi(deleteV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
