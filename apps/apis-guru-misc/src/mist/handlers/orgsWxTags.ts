import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdWxtagsWxtagIdRoute,
  getApiV1OrgsOrgIdWxtagsAppsRoute,
  getApiV1OrgsOrgIdWxtagsRoute,
  getApiV1OrgsOrgIdWxtagsWxtagIdClientsRoute,
  getApiV1OrgsOrgIdWxtagsWxtagIdRoute,
  postApiV1OrgsOrgIdWxtagsRoute,
  putApiV1OrgsOrgIdWxtagsWxtagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsWxTagsHandler = app
  .openapi(getApiV1OrgsOrgIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsWxtagIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
