import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrandingBackgroundImageRoute,
  getBrandingBannerLogoRoute,
  getBrandingRoute,
  getBrandingSquareLogoRoute,
  patchBrandingRoute,
  putBrandingBackgroundImageRoute,
  putBrandingBannerLogoRoute,
  putBrandingSquareLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandingOrganizationalBrandingHandler = app
  .openapi(getBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingBackgroundImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrandingBackgroundImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrandingBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrandingSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
