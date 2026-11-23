import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta1NameRoute,
  getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdRoute,
  getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute,
  getV2beta1AccountsAccountIdClientsClientAccountIdRoute,
  getV2beta1AccountsAccountIdClientsClientAccountIdUsersRoute,
  getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute,
  getV2beta1AccountsAccountIdClientsRoute,
  getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRoute,
  getV2beta1AccountsAccountIdCreativesCreativeIdRoute,
  getV2beta1AccountsAccountIdCreativesRoute,
  getV2beta1AccountsAccountIdFinalizedProposalsRoute,
  getV2beta1AccountsAccountIdProductsProductIdRoute,
  getV2beta1AccountsAccountIdProductsRoute,
  getV2beta1AccountsAccountIdProposalsProposalIdRoute,
  getV2beta1AccountsAccountIdProposalsRoute,
  getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdRoute,
  getV2beta1AccountsAccountIdPublisherProfilesRoute,
  getV2beta1FilterSetNameBidMetricsRoute,
  getV2beta1FilterSetNameBidResponseErrorsRoute,
  getV2beta1FilterSetNameBidResponsesWithoutBidsRoute,
  getV2beta1FilterSetNameFilteredBidRequestsRoute,
  getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesRoute,
  getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsRoute,
  getV2beta1FilterSetNameFilteredBidsRoute,
  getV2beta1FilterSetNameImpressionMetricsRoute,
  getV2beta1FilterSetNameLosingBidsRoute,
  getV2beta1FilterSetNameNonBillableWinningBidsRoute,
  getV2beta1NameRoute,
  getV2beta1OwnerNameFilterSetsRoute,
  postV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute,
  postV2beta1AccountsAccountIdClientsRoute,
  postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddRoute,
  postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveRoute,
  postV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingRoute,
  postV2beta1AccountsAccountIdCreativesCreativeIdWatchRoute,
  postV2beta1AccountsAccountIdCreativesRoute,
  postV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseRoute,
  postV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdAcceptRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdAddNoteRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdPauseRoute,
  postV2beta1AccountsAccountIdProposalsProposalIdResumeRoute,
  postV2beta1AccountsAccountIdProposalsRoute,
  postV2beta1OwnerNameFilterSetsRoute,
  putV2beta1AccountsAccountIdClientsClientAccountIdRoute,
  putV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute,
  putV2beta1AccountsAccountIdCreativesCreativeIdRoute,
  putV2beta1AccountsAccountIdProposalsProposalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2beta1Handler = app
  .openapi(getV2beta1AccountsAccountIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdClientsClientAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2beta1AccountsAccountIdClientsClientAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdClientsClientAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdCreativesCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2beta1AccountsAccountIdCreativesCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdCreativesCreativeIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdFinalizedProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2beta1AccountsAccountIdProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdAddNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1AccountsAccountIdProposalsProposalIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdPublisherProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameBidMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameBidResponseErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameBidResponsesWithoutBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameImpressionMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameLosingBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameNonBillableWinningBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1OwnerNameFilterSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1OwnerNameFilterSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
