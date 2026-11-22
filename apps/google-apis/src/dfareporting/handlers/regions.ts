import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app.openapi(getUserprofilesProfileIdRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
