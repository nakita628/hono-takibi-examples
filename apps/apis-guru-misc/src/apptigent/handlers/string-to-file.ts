import { OpenAPIHono } from '@hono/zod-openapi'
import { postStringToFileRoute } from '../routes'

const app = new OpenAPIHono()

export const stringToFileHandler = app.openapi(postStringToFileRoute, (c) => {
  throw new Error('Not implemented')
})
