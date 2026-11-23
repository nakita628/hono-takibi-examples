import { OpenAPIHono } from '@hono/zod-openapi'
import { postTranslateFileRoute } from '../routes'

const app = new OpenAPIHono()

export const translateFileHandler = app.openapi(postTranslateFileRoute, (c) => {
  throw new Error('Not implemented')
})
