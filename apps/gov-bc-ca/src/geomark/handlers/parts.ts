import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeomarksGeomarkIdPartsFileFormatExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const partsHandler = app.openapi(getGeomarksGeomarkIdPartsFileFormatExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
