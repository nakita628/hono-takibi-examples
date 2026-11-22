import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualAccountSettingsRoute, postApiVirtualAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualAccountSettingHandler = app
  .openapi(getApiVirtualAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
