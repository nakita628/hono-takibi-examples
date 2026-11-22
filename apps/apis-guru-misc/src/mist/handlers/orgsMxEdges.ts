import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
  getApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
  getApiV1OrgsOrgIdMxedgesRoute,
  getApiV1OrgsOrgIdMxedgesUpgradeRoute,
  getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRoute,
  getApiV1OrgsOrgIdMxedgesVersionRoute,
  postApiV1OrgsOrgIdMxedgesAssignRoute,
  postApiV1OrgsOrgIdMxedgesClaimRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRoute,
  postApiV1OrgsOrgIdMxedgesRoute,
  postApiV1OrgsOrgIdMxedgesUnassignRoute,
  postApiV1OrgsOrgIdMxedgesUpgradeRoute,
  putApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsMxEdgesHandler = app
  .openapi(getApiV1OrgsOrgIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
