import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocalizationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const localizationsHandler = app.openapi(getLocalizationsCountRoute, (c) => {
  throw new Error('Not implemented')
})
