import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexPhpAppsThemingBackgroundCustomRoute,
  deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute,
  getIndexPhpAppsThemingBackgroundRoute,
  getIndexPhpAppsThemingFaviconAppRoute,
  getIndexPhpAppsThemingIconAppRoute,
  getIndexPhpAppsThemingImageKeyRoute,
  getIndexPhpAppsThemingImgAppImageRoute,
  getIndexPhpAppsThemingManifestAppRoute,
  getIndexPhpAppsThemingThemeThemeIdCssRoute,
  postIndexPhpAppsThemingBackgroundTypeRoute,
  putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute,
} from './routes'
import {
  deleteIndexPhpAppsThemingBackgroundCustomRouteHandler,
  deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRouteHandler,
  getIndexPhpAppsThemingBackgroundRouteHandler,
  getIndexPhpAppsThemingFaviconAppRouteHandler,
  getIndexPhpAppsThemingIconAppRouteHandler,
  getIndexPhpAppsThemingImageKeyRouteHandler,
  getIndexPhpAppsThemingImgAppImageRouteHandler,
  getIndexPhpAppsThemingManifestAppRouteHandler,
  getIndexPhpAppsThemingThemeThemeIdCssRouteHandler,
  postIndexPhpAppsThemingBackgroundTypeRouteHandler,
  putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getIndexPhpAppsThemingThemeThemeIdCssRoute,
    getIndexPhpAppsThemingThemeThemeIdCssRouteHandler,
  )
  .openapi(getIndexPhpAppsThemingImageKeyRoute, getIndexPhpAppsThemingImageKeyRouteHandler)
  .openapi(getIndexPhpAppsThemingManifestAppRoute, getIndexPhpAppsThemingManifestAppRouteHandler)
  .openapi(getIndexPhpAppsThemingFaviconAppRoute, getIndexPhpAppsThemingFaviconAppRouteHandler)
  .openapi(getIndexPhpAppsThemingIconAppRoute, getIndexPhpAppsThemingIconAppRouteHandler)
  .openapi(getIndexPhpAppsThemingImgAppImageRoute, getIndexPhpAppsThemingImgAppImageRouteHandler)
  .openapi(getIndexPhpAppsThemingBackgroundRoute, getIndexPhpAppsThemingBackgroundRouteHandler)
  .openapi(
    postIndexPhpAppsThemingBackgroundTypeRoute,
    postIndexPhpAppsThemingBackgroundTypeRouteHandler,
  )
  .openapi(
    deleteIndexPhpAppsThemingBackgroundCustomRoute,
    deleteIndexPhpAppsThemingBackgroundCustomRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute,
    putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute,
    deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRouteHandler,
  )

export default app
