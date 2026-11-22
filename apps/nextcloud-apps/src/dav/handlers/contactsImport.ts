import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpContactsImportRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsImportHandler = app.openapi(postOcsV2PhpContactsImportRoute, (c) => {
  throw new Error('Not implemented')
})
