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
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAuctionPackagesRouteHandler,
  getV1ParentClientsRouteHandler,
  getV1ParentDealsRouteHandler,
  getV1ParentFinalizedDealsRouteHandler,
  getV1ParentProposalsRouteHandler,
  getV1ParentPublisherProfilesRouteHandler,
  getV1ParentUsersRouteHandler,
  patchV1NameRouteHandler,
  postV1AuctionPackageSubscribeClientsRouteHandler,
  postV1AuctionPackageUnsubscribeClientsRouteHandler,
  postV1BuyerProposalsSendRfpRouteHandler,
  postV1DealAddCreativeRouteHandler,
  postV1DealSetReadyToServeRouteHandler,
  postV1NameAcceptRouteHandler,
  postV1NameActivateRouteHandler,
  postV1NameDeactivateRouteHandler,
  postV1NamePauseRouteHandler,
  postV1NameResumeRouteHandler,
  postV1NameSubscribeRouteHandler,
  postV1NameUnsubscribeRouteHandler,
  postV1ParentClientsRouteHandler,
  postV1ParentDealsBatchUpdateRouteHandler,
  postV1ParentUsersRouteHandler,
  postV1ProposalAddNoteRouteHandler,
  postV1ProposalCancelNegotiationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1AuctionPackageSubscribeClientsRoute,
    postV1AuctionPackageSubscribeClientsRouteHandler,
  )
  .openapi(
    postV1AuctionPackageUnsubscribeClientsRoute,
    postV1AuctionPackageUnsubscribeClientsRouteHandler,
  )
  .openapi(postV1BuyerProposalsSendRfpRoute, postV1BuyerProposalsSendRfpRouteHandler)
  .openapi(postV1DealAddCreativeRoute, postV1DealAddCreativeRouteHandler)
  .openapi(postV1DealSetReadyToServeRoute, postV1DealSetReadyToServeRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameAcceptRoute, postV1NameAcceptRouteHandler)
  .openapi(postV1NameActivateRoute, postV1NameActivateRouteHandler)
  .openapi(postV1NameDeactivateRoute, postV1NameDeactivateRouteHandler)
  .openapi(postV1NamePauseRoute, postV1NamePauseRouteHandler)
  .openapi(postV1NameResumeRoute, postV1NameResumeRouteHandler)
  .openapi(postV1NameSubscribeRoute, postV1NameSubscribeRouteHandler)
  .openapi(postV1NameUnsubscribeRoute, postV1NameUnsubscribeRouteHandler)
  .openapi(getV1ParentAuctionPackagesRoute, getV1ParentAuctionPackagesRouteHandler)
  .openapi(getV1ParentClientsRoute, getV1ParentClientsRouteHandler)
  .openapi(postV1ParentClientsRoute, postV1ParentClientsRouteHandler)
  .openapi(getV1ParentDealsRoute, getV1ParentDealsRouteHandler)
  .openapi(postV1ParentDealsBatchUpdateRoute, postV1ParentDealsBatchUpdateRouteHandler)
  .openapi(getV1ParentFinalizedDealsRoute, getV1ParentFinalizedDealsRouteHandler)
  .openapi(getV1ParentProposalsRoute, getV1ParentProposalsRouteHandler)
  .openapi(getV1ParentPublisherProfilesRoute, getV1ParentPublisherProfilesRouteHandler)
  .openapi(getV1ParentUsersRoute, getV1ParentUsersRouteHandler)
  .openapi(postV1ParentUsersRoute, postV1ParentUsersRouteHandler)
  .openapi(postV1ProposalAddNoteRoute, postV1ProposalAddNoteRouteHandler)
  .openapi(postV1ProposalCancelNegotiationRoute, postV1ProposalCancelNegotiationRouteHandler)

export default app
