import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute,
  deleteApiV1OrgsOrgIdSettingAppNameLinkRoute,
  getApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute,
  getApiV1OrgsOrgIdSettingAppNameLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsOAuthHandler = app
  .openapi(deleteApiV1OrgsOrgIdSettingAppNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSettingAppNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
