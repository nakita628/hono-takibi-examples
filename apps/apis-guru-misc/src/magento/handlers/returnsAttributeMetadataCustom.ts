import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsAttributeMetadataCustomRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsAttributeMetadataCustomHandler = app.openapi(
  getV1ReturnsAttributeMetadataCustomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
