import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsAttributeMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsAttributeMetadataHandler = app.openapi(
  getV1ReturnsAttributeMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
