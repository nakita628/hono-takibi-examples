import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUnstableFleetSchedulesIdRoute,
  getApiUnstableFleetAgentsAgentKeyTracersRoute,
  getApiUnstableFleetTracersRoute,
  getApiV2FleetAgentsAgentKeyRoute,
  getApiV2FleetAgentsRoute,
  getApiV2FleetAgentVersionsRoute,
  getApiV2FleetDeploymentsDeploymentIdRoute,
  getApiV2FleetDeploymentsRoute,
  getApiV2FleetSchedulesIdRoute,
  getApiV2FleetSchedulesRoute,
  patchApiUnstableFleetSchedulesIdRoute,
  postApiUnstableFleetSchedulesIdTriggerRoute,
  postApiUnstableFleetSchedulesRoute,
  postApiV2FleetDeploymentsConfigureRoute,
  postApiV2FleetDeploymentsDeploymentIdCancelRoute,
  postApiV2FleetDeploymentsUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fleetAutomationHandler = app
  .openapi(getApiUnstableFleetAgentsAgentKeyTracersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUnstableFleetSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUnstableFleetSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUnstableFleetSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUnstableFleetSchedulesIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUnstableFleetTracersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetAgentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetAgentsAgentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FleetDeploymentsConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FleetDeploymentsUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FleetDeploymentsDeploymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FleetSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
