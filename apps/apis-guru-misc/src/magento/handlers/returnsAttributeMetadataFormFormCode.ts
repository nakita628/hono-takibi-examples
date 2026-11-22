import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsAttributeMetadataFormFormCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsAttributeMetadataFormFormCodeHandler = app.openapi(
  getV1ReturnsAttributeMetadataFormFormCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
