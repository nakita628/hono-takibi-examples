import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3I18nRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const i18nRegionsHandler = app.openapi(getYoutubeV3I18nRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
