import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountRegisterSenderRoute, postAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(postAccountRegisterSenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
