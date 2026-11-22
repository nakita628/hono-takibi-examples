import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocalizationsOrganizationalBrandingLocalizationIdRoute,
  getLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
  getLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute,
  getLocalizationsOrganizationalBrandingLocalizationIdRoute,
  getLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute,
  getLocalizationsRoute,
  patchLocalizationsOrganizationalBrandingLocalizationIdRoute,
  postLocalizationsRoute,
  putLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute,
  putLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute,
  putLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localizationsOrganizationalBrandingLocalizationHandler = app
  .openapi(getLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLocalizationsOrganizationalBrandingLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocalizationsOrganizationalBrandingLocalizationIdBackgroundImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocalizationsOrganizationalBrandingLocalizationIdBannerLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocalizationsOrganizationalBrandingLocalizationIdSquareLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
