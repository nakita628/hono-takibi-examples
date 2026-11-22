import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdCreatedByUserMailboxSettingsRoute,
  getSitesSiteIdCreatedByUserRoute,
  getSitesSiteIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdCreatedByUserServiceProvisioningErrorsRoute,
  getSitesSiteIdGetByPathPathPathCreatedByUserRoute,
  getSitesSiteIdGetByPathPathPathLastModifiedByUserRoute,
  getSitesSiteIdLastModifiedByUserMailboxSettingsRoute,
  getSitesSiteIdLastModifiedByUserRoute,
  getSitesSiteIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdLastModifiedByUserServiceProvisioningErrorsRoute,
  patchSitesSiteIdCreatedByUserMailboxSettingsRoute,
  patchSitesSiteIdLastModifiedByUserMailboxSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesUserHandler = app
  .openapi(getSitesSiteIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLastModifiedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
