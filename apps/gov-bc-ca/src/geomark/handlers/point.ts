import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeomarksGeomarkIdPointFileFormatExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const pointHandler = app.openapi(getGeomarksGeomarkIdPointFileFormatExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
