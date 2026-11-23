import { OpenAPIHono } from '@hono/zod-openapi'
import { getLanguagesTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const languagesHandler = app.openapi(getLanguagesTypeRoute, (c) => {
  throw new Error('Not implemented')
})
