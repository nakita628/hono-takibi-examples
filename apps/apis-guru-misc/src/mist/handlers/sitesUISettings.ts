import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdUisettingsUisettingIdRoute,
  getApiV1SitesSiteIdUisettingsDerivedRoute,
  getApiV1SitesSiteIdUisettingsRoute,
  getApiV1SitesSiteIdUisettingsUisettingIdRoute,
  postApiV1SitesSiteIdUisettingsRoute,
  postApiV1SitesSiteIdUisettingsUisettingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesUISettingsHandler = app
  .openapi(getApiV1SitesSiteIdUisettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdUisettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdUisettingsDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
