import { OpenAPIHono } from '@hono/zod-openapi'
import { getTailnetTailnetSettingsRoute, patchTailnetTailnetSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const tailnetSettingsHandler = app
  .openapi(getTailnetTailnetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
