import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReferenceSecFilingsFilingIdFilesFileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceSecFilingFileHandler = app.openapi(
  getV1ReferenceSecFilingsFilingIdFilesFileIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
