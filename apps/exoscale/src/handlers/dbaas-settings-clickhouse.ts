import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsClickhouseRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsClickhouseHandler = app.openapi(getDbaasSettingsClickhouseRoute, (c) => {
  throw new Error('Not implemented')
})
