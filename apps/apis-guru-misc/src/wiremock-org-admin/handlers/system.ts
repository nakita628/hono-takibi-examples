import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminResetRoute, postAdminSettingsRoute, postAdminShutdownRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(postAdminResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
