import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsThanosRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsThanosHandler = app.openapi(getDbaasSettingsThanosRoute, (c) => {
  throw new Error('Not implemented')
})
