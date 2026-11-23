import { OpenAPIHono } from '@hono/zod-openapi'
import { getFrontendSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const frontendHandler = app.openapi(getFrontendSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
