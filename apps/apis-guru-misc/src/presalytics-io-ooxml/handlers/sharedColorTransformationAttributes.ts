import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedColorTransformationAttributesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedColorTransformationAttributesHandler = app.openapi(
  getSharedColorTransformationAttributesIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
