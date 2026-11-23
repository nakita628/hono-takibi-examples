import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeywordKeywordIdRoute } from '../routes'

const app = new OpenAPIHono()

export const keywordHandler = app.openapi(getKeywordKeywordIdRoute, (c) => {
  throw new Error('Not implemented')
})
