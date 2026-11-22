import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVpnIkePoliciesIdIndexRoute,
  deleteApiVpnIkePoliciesIndexRoute,
  deleteApiVpnIkeProposalsIdIndexRoute,
  deleteApiVpnIkeProposalsIndexRoute,
  deleteApiVpnIpsecPoliciesIdIndexRoute,
  deleteApiVpnIpsecPoliciesIndexRoute,
  deleteApiVpnIpsecProfilesIdIndexRoute,
  deleteApiVpnIpsecProfilesIndexRoute,
  deleteApiVpnIpsecProposalsIdIndexRoute,
  deleteApiVpnIpsecProposalsIndexRoute,
  deleteApiVpnL2vpnsIdIndexRoute,
  deleteApiVpnL2vpnsIndexRoute,
  deleteApiVpnL2vpnTerminationsIdIndexRoute,
  deleteApiVpnL2vpnTerminationsIndexRoute,
  deleteApiVpnTunnelGroupsIdIndexRoute,
  deleteApiVpnTunnelGroupsIndexRoute,
  deleteApiVpnTunnelsIdIndexRoute,
  deleteApiVpnTunnelsIndexRoute,
  deleteApiVpnTunnelTerminationsIdIndexRoute,
  deleteApiVpnTunnelTerminationsIndexRoute,
  getApiVpnIkePoliciesIdIndexRoute,
  getApiVpnIkePoliciesIndexRoute,
  getApiVpnIkeProposalsIdIndexRoute,
  getApiVpnIkeProposalsIndexRoute,
  getApiVpnIpsecPoliciesIdIndexRoute,
  getApiVpnIpsecPoliciesIndexRoute,
  getApiVpnIpsecProfilesIdIndexRoute,
  getApiVpnIpsecProfilesIndexRoute,
  getApiVpnIpsecProposalsIdIndexRoute,
  getApiVpnIpsecProposalsIndexRoute,
  getApiVpnL2vpnsIdIndexRoute,
  getApiVpnL2vpnsIndexRoute,
  getApiVpnL2vpnTerminationsIdIndexRoute,
  getApiVpnL2vpnTerminationsIndexRoute,
  getApiVpnTunnelGroupsIdIndexRoute,
  getApiVpnTunnelGroupsIndexRoute,
  getApiVpnTunnelsIdIndexRoute,
  getApiVpnTunnelsIndexRoute,
  getApiVpnTunnelTerminationsIdIndexRoute,
  getApiVpnTunnelTerminationsIndexRoute,
  patchApiVpnIkePoliciesIdIndexRoute,
  patchApiVpnIkePoliciesIndexRoute,
  patchApiVpnIkeProposalsIdIndexRoute,
  patchApiVpnIkeProposalsIndexRoute,
  patchApiVpnIpsecPoliciesIdIndexRoute,
  patchApiVpnIpsecPoliciesIndexRoute,
  patchApiVpnIpsecProfilesIdIndexRoute,
  patchApiVpnIpsecProfilesIndexRoute,
  patchApiVpnIpsecProposalsIdIndexRoute,
  patchApiVpnIpsecProposalsIndexRoute,
  patchApiVpnL2vpnsIdIndexRoute,
  patchApiVpnL2vpnsIndexRoute,
  patchApiVpnL2vpnTerminationsIdIndexRoute,
  patchApiVpnL2vpnTerminationsIndexRoute,
  patchApiVpnTunnelGroupsIdIndexRoute,
  patchApiVpnTunnelGroupsIndexRoute,
  patchApiVpnTunnelsIdIndexRoute,
  patchApiVpnTunnelsIndexRoute,
  patchApiVpnTunnelTerminationsIdIndexRoute,
  patchApiVpnTunnelTerminationsIndexRoute,
  postApiVpnIkePoliciesIndexRoute,
  postApiVpnIkeProposalsIndexRoute,
  postApiVpnIpsecPoliciesIndexRoute,
  postApiVpnIpsecProfilesIndexRoute,
  postApiVpnIpsecProposalsIndexRoute,
  postApiVpnL2vpnsIndexRoute,
  postApiVpnL2vpnTerminationsIndexRoute,
  postApiVpnTunnelGroupsIndexRoute,
  postApiVpnTunnelsIndexRoute,
  postApiVpnTunnelTerminationsIndexRoute,
  putApiVpnIkePoliciesIdIndexRoute,
  putApiVpnIkePoliciesIndexRoute,
  putApiVpnIkeProposalsIdIndexRoute,
  putApiVpnIkeProposalsIndexRoute,
  putApiVpnIpsecPoliciesIdIndexRoute,
  putApiVpnIpsecPoliciesIndexRoute,
  putApiVpnIpsecProfilesIdIndexRoute,
  putApiVpnIpsecProfilesIndexRoute,
  putApiVpnIpsecProposalsIdIndexRoute,
  putApiVpnIpsecProposalsIndexRoute,
  putApiVpnL2vpnsIdIndexRoute,
  putApiVpnL2vpnsIndexRoute,
  putApiVpnL2vpnTerminationsIdIndexRoute,
  putApiVpnL2vpnTerminationsIndexRoute,
  putApiVpnTunnelGroupsIdIndexRoute,
  putApiVpnTunnelGroupsIndexRoute,
  putApiVpnTunnelsIdIndexRoute,
  putApiVpnTunnelsIndexRoute,
  putApiVpnTunnelTerminationsIdIndexRoute,
  putApiVpnTunnelTerminationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpnHandler = app
  .openapi(getApiVpnIkePoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnIkePoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIkePoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIkePoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIkePoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIkePoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIkePoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIkePoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIkePoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIkeProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnIkeProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIkeProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIkeProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIkeProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIkeProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIkeProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIkeProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIkeProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnIpsecPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnIpsecProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnIpsecProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecProposalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnIpsecProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnIpsecProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnIpsecProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnIpsecProposalsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnTunnelGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnTunnelTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVpnTunnelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVpnTunnelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVpnTunnelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVpnTunnelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVpnTunnelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
