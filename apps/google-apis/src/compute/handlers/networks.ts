import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalNetworksNetworkRoute,
  getProjectsProjectGlobalNetworksNetworkGetEffectiveFirewallsRoute,
  getProjectsProjectGlobalNetworksNetworkListPeeringRoutesRoute,
  getProjectsProjectGlobalNetworksNetworkRoute,
  getProjectsProjectGlobalNetworksRoute,
  patchProjectsProjectGlobalNetworksNetworkRoute,
  patchProjectsProjectGlobalNetworksNetworkUpdatePeeringRoute,
  postProjectsProjectGlobalNetworksNetworkAddPeeringRoute,
  postProjectsProjectGlobalNetworksNetworkRemovePeeringRoute,
  postProjectsProjectGlobalNetworksNetworkSwitchToCustomModeRoute,
  postProjectsProjectGlobalNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getProjectsProjectGlobalNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalNetworksNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalNetworksNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalNetworksNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalNetworksNetworkAddPeeringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalNetworksNetworkGetEffectiveFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalNetworksNetworkListPeeringRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalNetworksNetworkRemovePeeringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalNetworksNetworkSwitchToCustomModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalNetworksNetworkUpdatePeeringRoute, (c) => {
    throw new Error('Not implemented')
  })
