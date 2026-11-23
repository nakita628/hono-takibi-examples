import { OpenAPIHono } from '@hono/zod-openapi'
import { patchDiscriminatorWithNoMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const discriminatorWithNoMappingHandler = app.openapi(
  patchDiscriminatorWithNoMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
