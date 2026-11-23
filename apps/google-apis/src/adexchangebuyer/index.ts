import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePretargetingconfigsAccountIdConfigIdRoute,
  getAccountsIdRoute,
  getAccountsRoute,
  getBillinginfoAccountIdBillingIdRoute,
  getBillinginfoAccountIdRoute,
  getBillinginfoRoute,
  getCreativesAccountIdBuyerCreativeIdListDealsRoute,
  getCreativesAccountIdBuyerCreativeIdRoute,
  getCreativesRoute,
  getPerformancereportRoute,
  getPretargetingconfigsAccountIdConfigIdRoute,
  getPretargetingconfigsAccountIdRoute,
  getProductsProductIdRoute,
  getProductsSearchRoute,
  getProposalsProposalIdDealsRoute,
  getProposalsProposalIdNotesRoute,
  getProposalsProposalIdRoute,
  getProposalsSearchRoute,
  getPublisherAccountIdProfilesRoute,
  patchAccountsIdRoute,
  patchBillinginfoAccountIdBillingIdRoute,
  patchPretargetingconfigsAccountIdConfigIdRoute,
  patchProposalsProposalIdRevisionNumberUpdateActionRoute,
  postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute,
  postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute,
  postCreativesRoute,
  postPretargetingconfigsAccountIdRoute,
  postPrivateauctionPrivateAuctionIdUpdateproposalRoute,
  postProposalsInsertRoute,
  postProposalsProposalIdDealsDeleteRoute,
  postProposalsProposalIdDealsInsertRoute,
  postProposalsProposalIdDealsUpdateRoute,
  postProposalsProposalIdNotesInsertRoute,
  postProposalsProposalIdSetupcompleteRoute,
  putAccountsIdRoute,
  putBillinginfoAccountIdBillingIdRoute,
  putPretargetingconfigsAccountIdConfigIdRoute,
  putProposalsProposalIdRevisionNumberUpdateActionRoute,
} from './routes'
import {
  deletePretargetingconfigsAccountIdConfigIdRouteHandler,
  getAccountsIdRouteHandler,
  getAccountsRouteHandler,
  getBillinginfoAccountIdBillingIdRouteHandler,
  getBillinginfoAccountIdRouteHandler,
  getBillinginfoRouteHandler,
  getCreativesAccountIdBuyerCreativeIdListDealsRouteHandler,
  getCreativesAccountIdBuyerCreativeIdRouteHandler,
  getCreativesRouteHandler,
  getPerformancereportRouteHandler,
  getPretargetingconfigsAccountIdConfigIdRouteHandler,
  getPretargetingconfigsAccountIdRouteHandler,
  getProductsProductIdRouteHandler,
  getProductsSearchRouteHandler,
  getProposalsProposalIdDealsRouteHandler,
  getProposalsProposalIdNotesRouteHandler,
  getProposalsProposalIdRouteHandler,
  getProposalsSearchRouteHandler,
  getPublisherAccountIdProfilesRouteHandler,
  patchAccountsIdRouteHandler,
  patchBillinginfoAccountIdBillingIdRouteHandler,
  patchPretargetingconfigsAccountIdConfigIdRouteHandler,
  patchProposalsProposalIdRevisionNumberUpdateActionRouteHandler,
  postCreativesAccountIdBuyerCreativeIdAddDealDealIdRouteHandler,
  postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRouteHandler,
  postCreativesRouteHandler,
  postPretargetingconfigsAccountIdRouteHandler,
  postPrivateauctionPrivateAuctionIdUpdateproposalRouteHandler,
  postProposalsInsertRouteHandler,
  postProposalsProposalIdDealsDeleteRouteHandler,
  postProposalsProposalIdDealsInsertRouteHandler,
  postProposalsProposalIdDealsUpdateRouteHandler,
  postProposalsProposalIdNotesInsertRouteHandler,
  postProposalsProposalIdSetupcompleteRouteHandler,
  putAccountsIdRouteHandler,
  putBillinginfoAccountIdBillingIdRouteHandler,
  putPretargetingconfigsAccountIdConfigIdRouteHandler,
  putProposalsProposalIdRevisionNumberUpdateActionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsIdRoute, getAccountsIdRouteHandler)
  .openapi(patchAccountsIdRoute, patchAccountsIdRouteHandler)
  .openapi(putAccountsIdRoute, putAccountsIdRouteHandler)
  .openapi(getBillinginfoRoute, getBillinginfoRouteHandler)
  .openapi(getBillinginfoAccountIdRoute, getBillinginfoAccountIdRouteHandler)
  .openapi(getBillinginfoAccountIdBillingIdRoute, getBillinginfoAccountIdBillingIdRouteHandler)
  .openapi(patchBillinginfoAccountIdBillingIdRoute, patchBillinginfoAccountIdBillingIdRouteHandler)
  .openapi(putBillinginfoAccountIdBillingIdRoute, putBillinginfoAccountIdBillingIdRouteHandler)
  .openapi(getCreativesRoute, getCreativesRouteHandler)
  .openapi(postCreativesRoute, postCreativesRouteHandler)
  .openapi(
    getCreativesAccountIdBuyerCreativeIdRoute,
    getCreativesAccountIdBuyerCreativeIdRouteHandler,
  )
  .openapi(
    postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute,
    postCreativesAccountIdBuyerCreativeIdAddDealDealIdRouteHandler,
  )
  .openapi(
    getCreativesAccountIdBuyerCreativeIdListDealsRoute,
    getCreativesAccountIdBuyerCreativeIdListDealsRouteHandler,
  )
  .openapi(
    postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute,
    postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRouteHandler,
  )
  .openapi(getPerformancereportRoute, getPerformancereportRouteHandler)
  .openapi(getPretargetingconfigsAccountIdRoute, getPretargetingconfigsAccountIdRouteHandler)
  .openapi(postPretargetingconfigsAccountIdRoute, postPretargetingconfigsAccountIdRouteHandler)
  .openapi(
    deletePretargetingconfigsAccountIdConfigIdRoute,
    deletePretargetingconfigsAccountIdConfigIdRouteHandler,
  )
  .openapi(
    getPretargetingconfigsAccountIdConfigIdRoute,
    getPretargetingconfigsAccountIdConfigIdRouteHandler,
  )
  .openapi(
    patchPretargetingconfigsAccountIdConfigIdRoute,
    patchPretargetingconfigsAccountIdConfigIdRouteHandler,
  )
  .openapi(
    putPretargetingconfigsAccountIdConfigIdRoute,
    putPretargetingconfigsAccountIdConfigIdRouteHandler,
  )
  .openapi(
    postPrivateauctionPrivateAuctionIdUpdateproposalRoute,
    postPrivateauctionPrivateAuctionIdUpdateproposalRouteHandler,
  )
  .openapi(getProductsSearchRoute, getProductsSearchRouteHandler)
  .openapi(getProductsProductIdRoute, getProductsProductIdRouteHandler)
  .openapi(postProposalsInsertRoute, postProposalsInsertRouteHandler)
  .openapi(getProposalsSearchRoute, getProposalsSearchRouteHandler)
  .openapi(getProposalsProposalIdRoute, getProposalsProposalIdRouteHandler)
  .openapi(getProposalsProposalIdDealsRoute, getProposalsProposalIdDealsRouteHandler)
  .openapi(postProposalsProposalIdDealsDeleteRoute, postProposalsProposalIdDealsDeleteRouteHandler)
  .openapi(postProposalsProposalIdDealsInsertRoute, postProposalsProposalIdDealsInsertRouteHandler)
  .openapi(postProposalsProposalIdDealsUpdateRoute, postProposalsProposalIdDealsUpdateRouteHandler)
  .openapi(getProposalsProposalIdNotesRoute, getProposalsProposalIdNotesRouteHandler)
  .openapi(postProposalsProposalIdNotesInsertRoute, postProposalsProposalIdNotesInsertRouteHandler)
  .openapi(
    postProposalsProposalIdSetupcompleteRoute,
    postProposalsProposalIdSetupcompleteRouteHandler,
  )
  .openapi(
    patchProposalsProposalIdRevisionNumberUpdateActionRoute,
    patchProposalsProposalIdRevisionNumberUpdateActionRouteHandler,
  )
  .openapi(
    putProposalsProposalIdRevisionNumberUpdateActionRoute,
    putProposalsProposalIdRevisionNumberUpdateActionRouteHandler,
  )
  .openapi(getPublisherAccountIdProfilesRoute, getPublisherAccountIdProfilesRouteHandler)

export default app
