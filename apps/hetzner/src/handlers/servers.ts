import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServersIdRoute,
  getServersActionsIdRoute,
  getServersActionsRoute,
  getServersIdActionsActionIdRoute,
  getServersIdActionsRoute,
  getServersIdMetricsRoute,
  getServersIdRoute,
  getServersRoute,
  postServersIdActionsAddToPlacementGroupRoute,
  postServersIdActionsAttachIsoRoute,
  postServersIdActionsAttachToNetworkRoute,
  postServersIdActionsChangeAliasIpsRoute,
  postServersIdActionsChangeDnsPtrRoute,
  postServersIdActionsChangeProtectionRoute,
  postServersIdActionsChangeTypeRoute,
  postServersIdActionsCreateImageRoute,
  postServersIdActionsDetachFromNetworkRoute,
  postServersIdActionsDetachIsoRoute,
  postServersIdActionsDisableBackupRoute,
  postServersIdActionsDisableRescueRoute,
  postServersIdActionsEnableBackupRoute,
  postServersIdActionsEnableRescueRoute,
  postServersIdActionsPoweroffRoute,
  postServersIdActionsPoweronRoute,
  postServersIdActionsRebootRoute,
  postServersIdActionsRebuildRoute,
  postServersIdActionsRemoveFromPlacementGroupRoute,
  postServersIdActionsRequestConsoleRoute,
  postServersIdActionsResetPasswordRoute,
  postServersIdActionsResetRoute,
  postServersIdActionsShutdownRoute,
  postServersRoute,
  putServersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serversHandler = app
  .openapi(getServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsAddToPlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsAttachIsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsAttachToNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsChangeAliasIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsChangeDnsPtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsChangeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsCreateImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsDetachFromNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsDetachIsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsDisableBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsDisableRescueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsEnableBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsEnableRescueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsPoweroffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsPoweronRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsRemoveFromPlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsRequestConsoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersIdActionsShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
