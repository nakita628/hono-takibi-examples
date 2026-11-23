import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsPgRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsPgHandler = app.openapi(getDbaasSettingsPgRoute, (c) => {
  throw new Error('Not implemented')
})
