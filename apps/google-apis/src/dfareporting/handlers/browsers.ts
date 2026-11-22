import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdBrowsersRoute } from '../routes'

const app = new OpenAPIHono()

export const browsersHandler = app.openapi(getUserprofilesProfileIdBrowsersRoute, (c) => {
  throw new Error('Not implemented')
})
