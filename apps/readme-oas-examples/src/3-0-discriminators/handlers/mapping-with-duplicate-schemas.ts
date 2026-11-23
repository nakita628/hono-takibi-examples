import { OpenAPIHono } from '@hono/zod-openapi'
import { patchMappingWithDuplicateSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingWithDuplicateSchemasHandler = app.openapi(
  patchMappingWithDuplicateSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
