import { OpenAPIHono } from '@hono/zod-openapi'
import { getLangLangRoute } from '../routes'

const app = new OpenAPIHono()

export const langHandler = app.openapi(getLangLangRoute, (c) => {
  throw new Error('Not implemented')
})
