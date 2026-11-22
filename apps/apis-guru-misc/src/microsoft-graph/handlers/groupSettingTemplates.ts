import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupSettingTemplatesCountRoute } from '../routes'

const app = new OpenAPIHono()

export const groupSettingTemplatesHandler = app.openapi(getGroupSettingTemplatesCountRoute, (c) => {
  throw new Error('Not implemented')
})
