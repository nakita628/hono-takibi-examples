import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThemesBackgroundFillsIdRoute,
  getThemesChildObjectsIdRoute,
  getThemesColorsIdRoute,
  getThemesCustomColorsIdRoute,
  getThemesDetailsIdRoute,
  getThemesEffectMapIdRoute,
  getThemesFillsIdRoute,
  getThemesFontsIdRoute,
  getThemesIdRoute,
  getThemesIntensityIdRoute,
  getThemesIntensityRoute,
  getThemesIntensityTypeIdTypeIdRoute,
  getThemesLineMapIdRoute,
  getThemesOpenOfficeXmlIdRoute,
  getThemesSvgIdRoute,
  putThemesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(getThemesBackgroundFillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesColorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesCustomColorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesEffectMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesFillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesFontsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIntensityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIntensityTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIntensityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesLineMapIdRoute, (c) => {
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
