import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdRoute,
  getNetworksNetworkIdAirMarshalRoute,
  getNetworksNetworkIdRoute,
  getNetworksNetworkIdSiteToSiteVpnRoute,
  getNetworksNetworkIdTrafficRoute,
  getOrganizationsOrganizationIdNetworksRoute,
  postNetworksNetworkIdBindRoute,
  postNetworksNetworkIdSplitRoute,
  postNetworksNetworkIdUnbindRoute,
  postOrganizationsOrganizationIdNetworksCombineRoute,
  postOrganizationsOrganizationIdNetworksRoute,
  putNetworksNetworkIdRoute,
  putNetworksNetworkIdSiteToSiteVpnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(deleteNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAirMarshalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdBindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdUnbindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksCombineRoute, (c) => {
    throw new Error('Not implemented')
  })
