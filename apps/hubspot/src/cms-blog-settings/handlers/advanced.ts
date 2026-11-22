import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRoute,
  getCmsBlogSettings202609SettingsBlogIdRevisionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(getCmsBlogSettings202609SettingsBlogIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
