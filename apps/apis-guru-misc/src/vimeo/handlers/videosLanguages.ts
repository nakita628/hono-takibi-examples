import { OpenAPIHono } from '@hono/zod-openapi'
import { getLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const videosLanguagesHandler = app.openapi(getLanguagesRoute, (c) => {
  throw new Error('Not implemented')
})
