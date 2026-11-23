import { OpenAPIHono } from '@hono/zod-openapi'
import { getAbbreviationJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const abbreviationJsonHandler = app.openapi(getAbbreviationJsonRoute, (c) => {
  throw new Error('Not implemented')
})
