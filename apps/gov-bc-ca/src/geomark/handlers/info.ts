import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeomarksGeomarkIdFileFormatExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app.openapi(getGeomarksGeomarkIdFileFormatExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
