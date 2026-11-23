import { OpenAPIHono } from '@hono/zod-openapi'
import { getLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const languagesHandler = app.openapi(getLanguagesRoute, (c) => {
  throw new Error('Not implemented')
})
