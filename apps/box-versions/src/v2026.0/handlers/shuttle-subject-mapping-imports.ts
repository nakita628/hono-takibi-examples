import { OpenAPIHono } from '@hono/zod-openapi'
import { postShuttleSubjectMappingImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttleSubjectMappingImportsHandler = app.openapi(
  postShuttleSubjectMappingImportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
