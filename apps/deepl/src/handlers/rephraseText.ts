import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2WriteRephraseRoute } from '../routes'

const app = new OpenAPIHono()

export const rephraseTextHandler = app.openapi(postV2WriteRephraseRoute, (c) => {
  throw new Error('Not implemented')
})
