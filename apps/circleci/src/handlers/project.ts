import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectSlugCheckoutKeyFingerprintRoute,
  deleteProjectProjectSlugEnvvarNameRoute,
  deleteProjectProjectSlugRoute,
  getProjectProjectSlugCheckoutKeyFingerprintRoute,
  getProjectProjectSlugCheckoutKeyRoute,
  getProjectProjectSlugEnvvarNameRoute,
  getProjectProjectSlugEnvvarRoute,
  getProjectProjectSlugRoute,
  getProjectProviderOrganizationProjectSettingsRoute,
  patchProjectProviderOrganizationProjectSettingsRoute,
  postOrganizationOrgSlugOrIdProjectRoute,
  postProjectProjectSlugCheckoutKeyRoute,
  postProjectProjectSlugEnvvarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(postOrganizationOrgSlugOrIdProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSlugCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSlugEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProviderOrganizationProjectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProviderOrganizationProjectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
