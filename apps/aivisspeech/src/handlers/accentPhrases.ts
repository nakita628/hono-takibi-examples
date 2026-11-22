import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccentPhrasesRoute } from '../routes'

const app = new OpenAPIHono()

export const accentPhrasesHandler = app.openapi(postAccentPhrasesRoute, (c) => {
  throw new Error('Not implemented')
})
