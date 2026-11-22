import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReferenceSecFilingsFilingIdFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceSecFilingFilesHandler = app.openapi(
  getV1ReferenceSecFilingsFilingIdFilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
