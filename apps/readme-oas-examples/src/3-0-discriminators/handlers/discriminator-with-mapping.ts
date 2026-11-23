import { OpenAPIHono } from '@hono/zod-openapi'
import { patchDiscriminatorWithMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const discriminatorWithMappingHandler = app.openapi(
  patchDiscriminatorWithMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
