import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessorsAccessorIdRoute,
  deleteInvitationsInvitationIdRoute,
  deleteNetworksNetworkIdMembersMemberIdRoute,
  deleteNetworksNetworkIdNodesNodeIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAccessorsAccessorIdRoute,
  getAccessorsRoute,
  getInvitationsRoute,
  getNetworksNetworkIdMembersMemberIdRoute,
  getNetworksNetworkIdMembersRoute,
  getNetworksNetworkIdNodesNodeIdRoute,
  getNetworksNetworkIdNodesRoute,
  getNetworksNetworkIdProposalsProposalIdRoute,
  getNetworksNetworkIdProposalsProposalIdVotesRoute,
  getNetworksNetworkIdProposalsRoute,
  getNetworksNetworkIdRoute,
  getNetworksRoute,
  getTagsResourceArnRoute,
  patchNetworksNetworkIdMembersMemberIdRoute,
  patchNetworksNetworkIdNodesNodeIdRoute,
  postAccessorsRoute,
  postNetworksNetworkIdMembersRoute,
  postNetworksNetworkIdNodesRoute,
  postNetworksNetworkIdProposalsProposalIdVotesRoute,
  postNetworksNetworkIdProposalsRoute,
  postNetworksRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteAccessorsAccessorIdRouteHandler,
  deleteInvitationsInvitationIdRouteHandler,
  deleteNetworksNetworkIdMembersMemberIdRouteHandler,
  deleteNetworksNetworkIdNodesNodeIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAccessorsAccessorIdRouteHandler,
  getAccessorsRouteHandler,
  getInvitationsRouteHandler,
  getNetworksNetworkIdMembersMemberIdRouteHandler,
  getNetworksNetworkIdMembersRouteHandler,
  getNetworksNetworkIdNodesNodeIdRouteHandler,
  getNetworksNetworkIdNodesRouteHandler,
  getNetworksNetworkIdProposalsProposalIdRouteHandler,
  getNetworksNetworkIdProposalsProposalIdVotesRouteHandler,
  getNetworksNetworkIdProposalsRouteHandler,
  getNetworksNetworkIdRouteHandler,
  getNetworksRouteHandler,
  getTagsResourceArnRouteHandler,
  patchNetworksNetworkIdMembersMemberIdRouteHandler,
  patchNetworksNetworkIdNodesNodeIdRouteHandler,
  postAccessorsRouteHandler,
  postNetworksNetworkIdMembersRouteHandler,
  postNetworksNetworkIdNodesRouteHandler,
  postNetworksNetworkIdProposalsProposalIdVotesRouteHandler,
  postNetworksNetworkIdProposalsRouteHandler,
  postNetworksRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccessorsRoute, postAccessorsRouteHandler)
  .openapi(getAccessorsRoute, getAccessorsRouteHandler)
  .openapi(postNetworksNetworkIdMembersRoute, postNetworksNetworkIdMembersRouteHandler)
  .openapi(getNetworksNetworkIdMembersRoute, getNetworksNetworkIdMembersRouteHandler)
  .openapi(postNetworksRoute, postNetworksRouteHandler)
  .openapi(getNetworksRoute, getNetworksRouteHandler)
  .openapi(postNetworksNetworkIdNodesRoute, postNetworksNetworkIdNodesRouteHandler)
  .openapi(getNetworksNetworkIdNodesRoute, getNetworksNetworkIdNodesRouteHandler)
  .openapi(postNetworksNetworkIdProposalsRoute, postNetworksNetworkIdProposalsRouteHandler)
  .openapi(getNetworksNetworkIdProposalsRoute, getNetworksNetworkIdProposalsRouteHandler)
  .openapi(deleteAccessorsAccessorIdRoute, deleteAccessorsAccessorIdRouteHandler)
  .openapi(getAccessorsAccessorIdRoute, getAccessorsAccessorIdRouteHandler)
  .openapi(
    deleteNetworksNetworkIdMembersMemberIdRoute,
    deleteNetworksNetworkIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getNetworksNetworkIdMembersMemberIdRoute,
    getNetworksNetworkIdMembersMemberIdRouteHandler,
  )
  .openapi(
    patchNetworksNetworkIdMembersMemberIdRoute,
    patchNetworksNetworkIdMembersMemberIdRouteHandler,
  )
  .openapi(deleteNetworksNetworkIdNodesNodeIdRoute, deleteNetworksNetworkIdNodesNodeIdRouteHandler)
  .openapi(getNetworksNetworkIdNodesNodeIdRoute, getNetworksNetworkIdNodesNodeIdRouteHandler)
  .openapi(patchNetworksNetworkIdNodesNodeIdRoute, patchNetworksNetworkIdNodesNodeIdRouteHandler)
  .openapi(getNetworksNetworkIdRoute, getNetworksNetworkIdRouteHandler)
  .openapi(
    getNetworksNetworkIdProposalsProposalIdRoute,
    getNetworksNetworkIdProposalsProposalIdRouteHandler,
  )
  .openapi(getInvitationsRoute, getInvitationsRouteHandler)
  .openapi(
    getNetworksNetworkIdProposalsProposalIdVotesRoute,
    getNetworksNetworkIdProposalsProposalIdVotesRouteHandler,
  )
  .openapi(
    postNetworksNetworkIdProposalsProposalIdVotesRoute,
    postNetworksNetworkIdProposalsProposalIdVotesRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteInvitationsInvitationIdRoute, deleteInvitationsInvitationIdRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
