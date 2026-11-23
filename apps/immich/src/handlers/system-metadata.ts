import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemMetadataAdminOnboardingRoute,
  getSystemMetadataReverseGeocodingStateRoute,
  getSystemMetadataVersionCheckStateRoute,
  postSystemMetadataAdminOnboardingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemMetadataHandler = app
  .openapi(getSystemMetadataAdminOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemMetadataAdminOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemMetadataReverseGeocodingStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemMetadataVersionCheckStateRoute, (c) => {
    throw new Error('Not implemented')
  })
