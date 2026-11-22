import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdAssetsAssetIdRoute,
  getApiV1OrgsOrgIdAssetsAssetIdRoute,
  getApiV1OrgsOrgIdAssetsRoute,
  getApiV1OrgsOrgIdStatsAssetsCountRoute,
  getApiV1OrgsOrgIdStatsAssetsSearchRoute,
  postApiV1OrgsOrgIdAssetsImportRoute,
  postApiV1OrgsOrgIdAssetsRoute,
  putApiV1OrgsOrgIdAssetsAssetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAssetsHandler = app
  .openapi(getApiV1OrgsOrgIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
