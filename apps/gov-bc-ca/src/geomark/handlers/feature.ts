import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeomarksGeomarkIdFeatureFileFormatExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const featureHandler = app.openapi(
  getGeomarksGeomarkIdFeatureFileFormatExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
