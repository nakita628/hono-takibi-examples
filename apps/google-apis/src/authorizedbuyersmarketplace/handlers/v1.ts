import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentAuctionPackagesRoute,
  getV1ParentClientsRoute,
  getV1ParentDealsRoute,
  getV1ParentFinalizedDealsRoute,
  getV1ParentProposalsRoute,
  getV1ParentPublisherProfilesRoute,
  getV1ParentUsersRoute,
  patchV1NameRoute,
  postV1AuctionPackageSubscribeClientsRoute,
  postV1AuctionPackageUnsubscribeClientsRoute,
  postV1BuyerProposalsSendRfpRoute,
  postV1DealAddCreativeRoute,
  postV1DealSetReadyToServeRoute,
  postV1NameAcceptRoute,
  postV1NameActivateRoute,
  postV1NameDeactivateRoute,
  postV1NamePauseRoute,
  postV1NameResumeRoute,
  postV1NameSubscribeRoute,
  postV1NameUnsubscribeRoute,
  postV1ParentClientsRoute,
  postV1ParentDealsBatchUpdateRoute,
  postV1ParentUsersRoute,
  postV1ProposalAddNoteRoute,
  postV1ProposalCancelNegotiationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AuctionPackageSubscribeClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuctionPackageUnsubscribeClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuyerProposalsSendRfpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DealAddCreativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DealSetReadyToServeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAuctionPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDealsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentFinalizedDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPublisherProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProposalAddNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProposalCancelNegotiationRoute, (c) => {
    throw new Error('Not implemented')
  })
