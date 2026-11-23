import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsOpensearchRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsOpensearchHandler = app.openapi(getDbaasSettingsOpensearchRoute, (c) => {
  throw new Error('Not implemented')
})
