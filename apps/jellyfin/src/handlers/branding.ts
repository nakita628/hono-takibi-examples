import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBrandingSplashscreenRoute,
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
  getBrandingSplashscreenRoute,
  postBrandingSplashscreenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandingHandler = app
  .openapi(getBrandingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingCssCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
