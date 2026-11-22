import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdRoute,
  deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRoute,
  getApiV1OrgsOrgIdRoute,
  postApiV1OrgsOrgIdCloneRoute,
  postApiV1OrgsOrgIdSettingJuniperLinkAccountsRoute,
  postApiV1OrgsRoute,
  putApiV1OrgsOrgIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(postApiV1OrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingJuniperLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
