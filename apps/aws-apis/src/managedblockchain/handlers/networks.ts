import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdMembersMemberIdRoute,
  deleteNetworksNetworkIdNodesNodeIdRoute,
  getNetworksNetworkIdMembersMemberIdRoute,
  getNetworksNetworkIdMembersRoute,
  getNetworksNetworkIdNodesNodeIdRoute,
  getNetworksNetworkIdNodesRoute,
  getNetworksNetworkIdProposalsProposalIdRoute,
  getNetworksNetworkIdProposalsProposalIdVotesRoute,
  getNetworksNetworkIdProposalsRoute,
  getNetworksNetworkIdRoute,
  getNetworksRoute,
  patchNetworksNetworkIdMembersMemberIdRoute,
  patchNetworksNetworkIdNodesNodeIdRoute,
  postNetworksNetworkIdMembersRoute,
  postNetworksNetworkIdNodesRoute,
  postNetworksNetworkIdProposalsProposalIdVotesRoute,
  postNetworksNetworkIdProposalsRoute,
  postNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(postNetworksNetworkIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworksNetworkIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworksNetworkIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdProposalsProposalIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdProposalsProposalIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
