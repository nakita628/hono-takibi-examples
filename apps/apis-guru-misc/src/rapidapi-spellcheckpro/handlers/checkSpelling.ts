import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckSpellingRoute } from '../routes'

const app = new OpenAPIHono()

export const checkSpellingHandler = app.openapi(postCheckSpellingRoute, (c) => {
  throw new Error('Not implemented')
})
