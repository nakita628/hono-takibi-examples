import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdSitesCountRoute,
  getApiV1OrgsOrgIdSitesRoute,
  getApiV1OrgsOrgIdSitesSearchRoute,
  postApiV1OrgsOrgIdSitesRoute,
  postApiV1OrgsOrgIdSitesSiteNameMapsImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSitesHandler = app
  .openapi(getApiV1OrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitesSiteNameMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
