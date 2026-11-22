import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefClaimTokenRoute,
  deleteV1ProjectsRefNetworkBansRoute,
  deleteV1ProjectsRefRoute,
  getV1OrganizationsSlugProjectsRoute,
  getV1ProjectsAvailableRegionsRoute,
  getV1ProjectsRefClaimTokenRoute,
  getV1ProjectsRefConfigDiskAutoscaleRoute,
  getV1ProjectsRefConfigDiskRoute,
  getV1ProjectsRefConfigDiskUtilRoute,
  getV1ProjectsRefHealthRoute,
  getV1ProjectsRefNetworkRestrictionsRoute,
  getV1ProjectsRefRestoreRoute,
  getV1ProjectsRefRoute,
  getV1ProjectsRefUpgradeEligibilityRoute,
  getV1ProjectsRefUpgradeStatusRoute,
  getV1ProjectsRoute,
  patchV1ProjectsRefNetworkRestrictionsRoute,
  patchV1ProjectsRefRoute,
  postV1ProjectsRefClaimTokenRoute,
  postV1ProjectsRefConfigDiskRoute,
  postV1ProjectsRefNetworkBansRetrieveEnrichedRoute,
  postV1ProjectsRefNetworkBansRetrieveRoute,
  postV1ProjectsRefNetworkRestrictionsApplyRoute,
  postV1ProjectsRefNetworkRestrictionsReviewRoute,
  postV1ProjectsRefPauseRoute,
  postV1ProjectsRefRestartRoute,
  postV1ProjectsRefRestoreCancelRoute,
  postV1ProjectsRefRestoreRoute,
  postV1ProjectsRefUpgradeRoute,
  postV1ProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsAvailableRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkBansRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkBansRetrieveEnrichedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefNetworkBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefNetworkRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefNetworkRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkRestrictionsApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkRestrictionsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefUpgradeEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefUpgradeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestoreCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskUtilRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskAutoscaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
