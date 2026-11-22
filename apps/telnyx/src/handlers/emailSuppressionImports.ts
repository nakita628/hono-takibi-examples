import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailBlocksImportIdRoute, postEmailBlocksImportRoute } from '../routes'

const app = new OpenAPIHono()

export const emailSuppressionImportsHandler = app
  .openapi(postEmailBlocksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailBlocksImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
