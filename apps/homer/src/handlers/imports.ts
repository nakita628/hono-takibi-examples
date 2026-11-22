import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportsPcapRoute } from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app.openapi(postImportsPcapRoute, (c) => {
  throw new Error('Not implemented')
})
