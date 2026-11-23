import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsMysqlRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsMysqlHandler = app.openapi(getDbaasSettingsMysqlRoute, (c) => {
  throw new Error('Not implemented')
})
