import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrandingThemesBrandingThemeIDPaymentServicesRoute,
  getBrandingThemesBrandingThemeIDRoute,
  getBrandingThemesRoute,
  postBrandingThemesBrandingThemeIDPaymentServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandingThemesHandler = app
  .openapi(getBrandingThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingThemesBrandingThemeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingThemesBrandingThemeIDPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingThemesBrandingThemeIDPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
