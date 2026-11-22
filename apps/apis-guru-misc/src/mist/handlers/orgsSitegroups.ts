import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
  getApiV1OrgsOrgIdSitegroupsRoute,
  getApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
  postApiV1OrgsOrgIdSitegroupsRoute,
  putApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSitegroupsHandler = app
  .openapi(getApiV1OrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
