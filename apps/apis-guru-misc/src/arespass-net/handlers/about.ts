import { OpenAPIHono } from '@hono/zod-openapi'
import { getAboutRoute } from '../routes'

const app = new OpenAPIHono()

export const aboutHandler = app.openapi(getAboutRoute, (c) => {
  throw new Error('Not implemented')
})
