import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsGrafanaRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsGrafanaHandler = app.openapi(getDbaasSettingsGrafanaRoute, (c) => {
  throw new Error('Not implemented')
})
