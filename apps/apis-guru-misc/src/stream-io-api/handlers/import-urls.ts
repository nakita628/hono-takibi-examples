import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportUrlsRoute } from '../routes'

const app = new OpenAPIHono()

export const importUrlsHandler = app.openapi(postImportUrlsRoute, (c) => {
  throw new Error('Not implemented')
})
