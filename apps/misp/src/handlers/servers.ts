import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServersGetInstanceUUIDRoute,
  getServersGetPyMISPVersionRoute,
  getServersGetSettingSettingNameRoute,
  getServersGetVersionRoute,
  getServersGetWorkersRoute,
  getServersPullServerIdPullTechniqueRoute,
  getServersPushServerIdPushTechniqueRoute,
  getServersRoute,
  getServersServerSettingsRoute,
  postServersAddRoute,
  postServersCacheRoute,
  postServersCreateSyncRoute,
  postServersDeleteServerIdRoute,
  postServersImportRoute,
  postServersKillAllWorkersRoute,
  postServersRestartDeadWorkersRoute,
  postServersRestartWorkersRoute,
  postServersServerSettingsEditSettingNameRoute,
  postServersStartWorkerWorkerTypeRoute,
  postServersStopWorkerWorkerPidRoute,
  postServersUpdateJSONRoute,
  postServersUpdateRoute,
  putServersEditServerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serversHandler = app
  .openapi(postServersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServersEditServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersDeleteServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersPullServerIdPullTechniqueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersPushServerIdPushTechniqueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersGetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersGetPyMISPVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersServerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersGetWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersStartWorkerWorkerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersStopWorkerWorkerPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersKillAllWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersRestartWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersRestartDeadWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersUpdateJSONRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersCreateSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersGetInstanceUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersGetSettingSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersServerSettingsEditSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersImportRoute, (c) => {
    throw new Error('Not implemented')
  })
