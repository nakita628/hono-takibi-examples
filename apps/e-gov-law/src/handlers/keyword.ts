import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeywordRoute } from '../routes'

const app = new OpenAPIHono()

export const keywordHandler = app.openapi(getKeywordRoute, (c) => {
  throw new Error('Not implemented')
})
