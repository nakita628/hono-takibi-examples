import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ThemeIndexRoute,
  deleteApiV1ThemePkRoute,
  deleteApiV1ThemeUnsetSystemDarkRoute,
  deleteApiV1ThemeUnsetSystemDefaultRoute,
  getApiV1ThemeExportIndexRoute,
  getApiV1ThemeIndexRoute,
  getApiV1ThemeInfoRoute,
  getApiV1ThemePkRoute,
  getApiV1ThemeRelatedColumnNameRoute,
  getApiV1ThemeSystemRoute,
  postApiV1ThemeImportIndexRoute,
  postApiV1ThemeIndexRoute,
  putApiV1ThemePkRoute,
  putApiV1ThemePkSetSystemDarkRoute,
  putApiV1ThemePkSetSystemDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(deleteApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ThemeImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemeUnsetSystemDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemeUnsetSystemDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkSetSystemDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkSetSystemDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
