import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlertGroupingSettingsIdRoute,
  getAlertGroupingSettingsIdRoute,
  getAlertGroupingSettingsRoute,
  postAlertGroupingSettingsRoute,
  putAlertGroupingSettingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertGroupingSettingsHandler = app
  .openapi(getAlertGroupingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertGroupingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertGroupingSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlertGroupingSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAlertGroupingSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
