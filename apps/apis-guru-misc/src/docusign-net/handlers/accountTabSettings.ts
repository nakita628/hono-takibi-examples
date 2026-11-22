import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdSettingsTabsRoute,
  putV21AccountsAccountIdSettingsTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountTabSettingsHandler = app
  .openapi(getV21AccountsAccountIdSettingsTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
