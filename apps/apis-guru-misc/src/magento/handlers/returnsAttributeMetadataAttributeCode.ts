import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsAttributeMetadataAttributeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsAttributeMetadataAttributeCodeHandler = app.openapi(
  getV1ReturnsAttributeMetadataAttributeCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
