import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const boundingBoxHandler = app.openapi(
  getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
