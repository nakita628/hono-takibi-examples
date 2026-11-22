import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute,
  getBrandingLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
  getBrandingLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute,
  getBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute,
  getBrandingLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute,
  getBrandingLocalizationsRoute,
  patchBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute,
  postBrandingLocalizationsRoute,
  putBrandingLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
  putBrandingLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute,
  putBrandingLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandingOrganizationalBrandingLocalizationHandler = app
  .openapi(getBrandingLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBrandingLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getBrandingLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBrandingLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getBrandingLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrandingLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrandingLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
