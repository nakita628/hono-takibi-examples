import { OpenAPIHono } from '@hono/zod-openapi'
import { getAbbreviationShaRoute } from '../routes'

const app = new OpenAPIHono()

export const abbreviationShaHandler = app.openapi(getAbbreviationShaRoute, (c) => {
  throw new Error('Not implemented')
})
