import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3I18nLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const i18nLanguagesHandler = app.openapi(getYoutubeV3I18nLanguagesRoute, (c) => {
  throw new Error('Not implemented')
})
