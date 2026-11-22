import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
  getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
  getApiV1OrgsOrgIdAssetfiltersRoute,
  postApiV1OrgsOrgIdAssetfiltersRoute,
  putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAssetFiltersHandler = app
  .openapi(getApiV1OrgsOrgIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
