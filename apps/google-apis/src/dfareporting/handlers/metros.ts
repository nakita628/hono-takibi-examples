import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdMetrosRoute } from '../routes'

const app = new OpenAPIHono()

export const metrosHandler = app.openapi(getUserprofilesProfileIdMetrosRoute, (c) => {
  throw new Error('Not implemented')
})
