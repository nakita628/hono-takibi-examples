import { OpenAPIHono } from '@hono/zod-openapi'
import { getArchivesExportRoute, postArchivesImportRoute } from '../routes'

const app = new OpenAPIHono()

export const archivesHandler = app
  .openapi(getArchivesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArchivesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
