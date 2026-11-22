import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiSpaceSpaceKeyThemeRoute,
  getWikiRestApiSettingsThemeRoute,
  getWikiRestApiSettingsThemeSelectedRoute,
  getWikiRestApiSettingsThemeThemeKeyRoute,
  getWikiRestApiSpaceSpaceKeyThemeRoute,
  putWikiRestApiSpaceSpaceKeyThemeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(getWikiRestApiSettingsThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsThemeSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsThemeThemeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
