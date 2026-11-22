import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ExtrafileRoute } from '../routes'

const app = new OpenAPIHono()

export const extraFileHandler = app.openapi(getApiV3ExtrafileRoute, (c) => {
  throw new Error('Not implemented')
})
