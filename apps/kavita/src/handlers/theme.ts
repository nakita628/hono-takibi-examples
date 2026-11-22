import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiThemeRoute,
  getApiThemeBrowseRoute,
  getApiThemeDownloadContentRoute,
  getApiThemeRoute,
  postApiThemeDownloadThemeRoute,
  postApiThemeUpdateDefaultRoute,
  postApiThemeUploadThemeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themeHandler = app
  .openapi(getApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeUpdateDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeDownloadContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeDownloadThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeUploadThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
