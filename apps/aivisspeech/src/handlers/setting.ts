import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingRoute, postSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const settingHandler = app
  .openapi(getSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
