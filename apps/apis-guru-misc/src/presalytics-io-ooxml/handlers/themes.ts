import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThemesChildObjectsIdRoute,
  getThemesDetailsIdRoute,
  getThemesIdRoute,
  getThemesOpenOfficeXmlIdRoute,
  getThemesSvgIdRoute,
  putThemesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(getThemesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThemesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
