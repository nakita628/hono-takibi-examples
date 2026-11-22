import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PlaceActionTypeMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const placeActionTypeMetadataHandler = app.openapi(
  getV1PlaceActionTypeMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
