import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsBlogSettings202609SettingsBlogIdRoute,
  getCmsBlogSettings202609SettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCmsBlogSettings202609SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogSettings202609SettingsBlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
