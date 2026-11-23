import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountDomainwhitelistWhitelistIdRoute,
  deleteAccountGuestsGuestIdRoute,
  deleteAccountIpblacklistBlacklistIdRoute,
  deleteConversionsConversionIdRoute,
  deleteDatapointsBatchRoute,
  deleteDatapointsIdRoute,
  deleteDomainsIdRoute,
  deleteGroupsIdRoute,
  deleteRetargetingIdRoute,
  deleteTagsTagIdDatapointsRoute,
  deleteTagsTagIdGroupsRoute,
  deleteTagsTagIdRoute,
  getAccountDomainwhitelistRoute,
  getAccountGuestsCountRoute,
  getAccountGuestsGuestIdPermissionsCountRoute,
  getAccountGuestsGuestIdPermissionsRoute,
  getAccountGuestsGuestIdRoute,
  getAccountGuestsRoute,
  getAccountIpblacklistRoute,
  getAccountPlanRoute,
  getAccountRoute,
  getAggregatedListRoute,
  getAggregatedRoute,
  getAggregatedSummaryConversionsRoute,
  getAggregatedSummaryDatapointsRoute,
  getAggregatedSummaryGroupsRoute,
  getClickstreamRoute,
  getConversionsAggregatedListRoute,
  getConversionsConversionIdAggregatedListRoute,
  getConversionsConversionIdAggregatedRoute,
  getConversionsConversionIdDatapointsCountRoute,
  getConversionsConversionIdDatapointsRoute,
  getConversionsConversionIdHitsRoute,
  getConversionsConversionIdRoute,
  getConversionsCountRoute,
  getConversionsRoute,
  getDatapointsAggregatedListRoute,
  getDatapointsAggregatedRoute,
  getDatapointsCountRoute,
  getDatapointsIdAggregatedListRoute,
  getDatapointsIdAggregatedRoute,
  getDatapointsIdHitsRoute,
  getDatapointsIdRoute,
  getDatapointsRoute,
  getDomainsCountRoute,
  getDomainsIdRoute,
  getDomainsRoute,
  getGroupsAggregatedListRoute,
  getGroupsAggregatedRoute,
  getGroupsCountRoute,
  getGroupsIdAggregatedListRoute,
  getGroupsIdAggregatedRoute,
  getGroupsIdAggregatedSummaryRoute,
  getGroupsIdDatapointsCountRoute,
  getGroupsIdDatapointsRoute,
  getGroupsIdHitsRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  getHitsRoute,
  getMePlanRoute,
  getMeRoute,
  getRetargetingCountRoute,
  getRetargetingIdDatapointsCountRoute,
  getRetargetingIdDatapointsRoute,
  getRetargetingIdRoute,
  getRetargetingRoute,
  getTagsCountRoute,
  getTagsRoute,
  getTagsTagIdDatapointsCountRoute,
  getTagsTagIdDatapointsRoute,
  getTagsTagIdGroupsCountRoute,
  getTagsTagIdGroupsRoute,
  getTagsTagIdRoute,
  postAccountDomainwhitelistRoute,
  postAccountGuestsGuestIdRoute,
  postAccountGuestsGuestIdTypePermissionsPatchRoute,
  postAccountGuestsRoute,
  postAccountIpblacklistRoute,
  postAccountRoute,
  postConversionsConversionIdRoute,
  postConversionsRoute,
  postDatapointsBatchRoute,
  postDatapointsIdRoute,
  postDatapointsRoute,
  postDomainsIdRoute,
  postDomainsRoute,
  postGroupsIdDatapointsRoute,
  postGroupsIdRoute,
  postGroupsRoute,
  postRetargetingIdRoute,
  postRetargetingRoute,
  postTagsRoute,
  putAccountGuestsGuestIdTypePermissionsPatchRoute,
  putConversionsConversionIdDatapointsBatchPatchRoute,
  putConversionsConversionIdDatapointsPatchRoute,
  putConversionsConversionIdNotesRoute,
  putDatapointsBatchRoute,
  putDatapointsIdFavouriteRoute,
  putDatapointsIdNotesRoute,
  putGroupsIdFavouriteRoute,
  putGroupsIdNotesRoute,
  putTagsTagIdDatapointsPatchRoute,
  putTagsTagIdGroupsPatchRoute,
  putTagsTagIdNameRoute,
} from './routes'
import {
  deleteAccountDomainwhitelistWhitelistIdRouteHandler,
  deleteAccountGuestsGuestIdRouteHandler,
  deleteAccountIpblacklistBlacklistIdRouteHandler,
  deleteConversionsConversionIdRouteHandler,
  deleteDatapointsBatchRouteHandler,
  deleteDatapointsIdRouteHandler,
  deleteDomainsIdRouteHandler,
  deleteGroupsIdRouteHandler,
  deleteRetargetingIdRouteHandler,
  deleteTagsTagIdDatapointsRouteHandler,
  deleteTagsTagIdGroupsRouteHandler,
  deleteTagsTagIdRouteHandler,
  getAccountDomainwhitelistRouteHandler,
  getAccountGuestsCountRouteHandler,
  getAccountGuestsGuestIdPermissionsCountRouteHandler,
  getAccountGuestsGuestIdPermissionsRouteHandler,
  getAccountGuestsGuestIdRouteHandler,
  getAccountGuestsRouteHandler,
  getAccountIpblacklistRouteHandler,
  getAccountPlanRouteHandler,
  getAccountRouteHandler,
  getAggregatedListRouteHandler,
  getAggregatedRouteHandler,
  getAggregatedSummaryConversionsRouteHandler,
  getAggregatedSummaryDatapointsRouteHandler,
  getAggregatedSummaryGroupsRouteHandler,
  getClickstreamRouteHandler,
  getConversionsAggregatedListRouteHandler,
  getConversionsConversionIdAggregatedListRouteHandler,
  getConversionsConversionIdAggregatedRouteHandler,
  getConversionsConversionIdDatapointsCountRouteHandler,
  getConversionsConversionIdDatapointsRouteHandler,
  getConversionsConversionIdHitsRouteHandler,
  getConversionsConversionIdRouteHandler,
  getConversionsCountRouteHandler,
  getConversionsRouteHandler,
  getDatapointsAggregatedListRouteHandler,
  getDatapointsAggregatedRouteHandler,
  getDatapointsCountRouteHandler,
  getDatapointsIdAggregatedListRouteHandler,
  getDatapointsIdAggregatedRouteHandler,
  getDatapointsIdHitsRouteHandler,
  getDatapointsIdRouteHandler,
  getDatapointsRouteHandler,
  getDomainsCountRouteHandler,
  getDomainsIdRouteHandler,
  getDomainsRouteHandler,
  getGroupsAggregatedListRouteHandler,
  getGroupsAggregatedRouteHandler,
  getGroupsCountRouteHandler,
  getGroupsIdAggregatedListRouteHandler,
  getGroupsIdAggregatedRouteHandler,
  getGroupsIdAggregatedSummaryRouteHandler,
  getGroupsIdDatapointsCountRouteHandler,
  getGroupsIdDatapointsRouteHandler,
  getGroupsIdHitsRouteHandler,
  getGroupsIdRouteHandler,
  getGroupsRouteHandler,
  getHitsRouteHandler,
  getMePlanRouteHandler,
  getMeRouteHandler,
  getRetargetingCountRouteHandler,
  getRetargetingIdDatapointsCountRouteHandler,
  getRetargetingIdDatapointsRouteHandler,
  getRetargetingIdRouteHandler,
  getRetargetingRouteHandler,
  getTagsCountRouteHandler,
  getTagsRouteHandler,
  getTagsTagIdDatapointsCountRouteHandler,
  getTagsTagIdDatapointsRouteHandler,
  getTagsTagIdGroupsCountRouteHandler,
  getTagsTagIdGroupsRouteHandler,
  getTagsTagIdRouteHandler,
  postAccountDomainwhitelistRouteHandler,
  postAccountGuestsGuestIdRouteHandler,
  postAccountGuestsGuestIdTypePermissionsPatchRouteHandler,
  postAccountGuestsRouteHandler,
  postAccountIpblacklistRouteHandler,
  postAccountRouteHandler,
  postConversionsConversionIdRouteHandler,
  postConversionsRouteHandler,
  postDatapointsBatchRouteHandler,
  postDatapointsIdRouteHandler,
  postDatapointsRouteHandler,
  postDomainsIdRouteHandler,
  postDomainsRouteHandler,
  postGroupsIdDatapointsRouteHandler,
  postGroupsIdRouteHandler,
  postGroupsRouteHandler,
  postRetargetingIdRouteHandler,
  postRetargetingRouteHandler,
  postTagsRouteHandler,
  putAccountGuestsGuestIdTypePermissionsPatchRouteHandler,
  putConversionsConversionIdDatapointsBatchPatchRouteHandler,
  putConversionsConversionIdDatapointsPatchRouteHandler,
  putConversionsConversionIdNotesRouteHandler,
  putDatapointsBatchRouteHandler,
  putDatapointsIdFavouriteRouteHandler,
  putDatapointsIdNotesRouteHandler,
  putGroupsIdFavouriteRouteHandler,
  putGroupsIdNotesRouteHandler,
  putTagsTagIdDatapointsPatchRouteHandler,
  putTagsTagIdGroupsPatchRouteHandler,
  putTagsTagIdNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(postAccountRoute, postAccountRouteHandler)
  .openapi(getAccountDomainwhitelistRoute, getAccountDomainwhitelistRouteHandler)
  .openapi(postAccountDomainwhitelistRoute, postAccountDomainwhitelistRouteHandler)
  .openapi(
    deleteAccountDomainwhitelistWhitelistIdRoute,
    deleteAccountDomainwhitelistWhitelistIdRouteHandler,
  )
  .openapi(getAccountGuestsRoute, getAccountGuestsRouteHandler)
  .openapi(postAccountGuestsRoute, postAccountGuestsRouteHandler)
  .openapi(getAccountGuestsCountRoute, getAccountGuestsCountRouteHandler)
  .openapi(deleteAccountGuestsGuestIdRoute, deleteAccountGuestsGuestIdRouteHandler)
  .openapi(getAccountGuestsGuestIdRoute, getAccountGuestsGuestIdRouteHandler)
  .openapi(postAccountGuestsGuestIdRoute, postAccountGuestsGuestIdRouteHandler)
  .openapi(getAccountGuestsGuestIdPermissionsRoute, getAccountGuestsGuestIdPermissionsRouteHandler)
  .openapi(
    getAccountGuestsGuestIdPermissionsCountRoute,
    getAccountGuestsGuestIdPermissionsCountRouteHandler,
  )
  .openapi(
    postAccountGuestsGuestIdTypePermissionsPatchRoute,
    postAccountGuestsGuestIdTypePermissionsPatchRouteHandler,
  )
  .openapi(
    putAccountGuestsGuestIdTypePermissionsPatchRoute,
    putAccountGuestsGuestIdTypePermissionsPatchRouteHandler,
  )
  .openapi(getAccountIpblacklistRoute, getAccountIpblacklistRouteHandler)
  .openapi(postAccountIpblacklistRoute, postAccountIpblacklistRouteHandler)
  .openapi(
    deleteAccountIpblacklistBlacklistIdRoute,
    deleteAccountIpblacklistBlacklistIdRouteHandler,
  )
  .openapi(getAccountPlanRoute, getAccountPlanRouteHandler)
  .openapi(getAggregatedRoute, getAggregatedRouteHandler)
  .openapi(getAggregatedListRoute, getAggregatedListRouteHandler)
  .openapi(getAggregatedSummaryConversionsRoute, getAggregatedSummaryConversionsRouteHandler)
  .openapi(getAggregatedSummaryDatapointsRoute, getAggregatedSummaryDatapointsRouteHandler)
  .openapi(getAggregatedSummaryGroupsRoute, getAggregatedSummaryGroupsRouteHandler)
  .openapi(getClickstreamRoute, getClickstreamRouteHandler)
  .openapi(getConversionsRoute, getConversionsRouteHandler)
  .openapi(postConversionsRoute, postConversionsRouteHandler)
  .openapi(getConversionsAggregatedListRoute, getConversionsAggregatedListRouteHandler)
  .openapi(getConversionsCountRoute, getConversionsCountRouteHandler)
  .openapi(deleteConversionsConversionIdRoute, deleteConversionsConversionIdRouteHandler)
  .openapi(getConversionsConversionIdRoute, getConversionsConversionIdRouteHandler)
  .openapi(postConversionsConversionIdRoute, postConversionsConversionIdRouteHandler)
  .openapi(
    getConversionsConversionIdAggregatedRoute,
    getConversionsConversionIdAggregatedRouteHandler,
  )
  .openapi(
    getConversionsConversionIdAggregatedListRoute,
    getConversionsConversionIdAggregatedListRouteHandler,
  )
  .openapi(
    getConversionsConversionIdDatapointsRoute,
    getConversionsConversionIdDatapointsRouteHandler,
  )
  .openapi(
    putConversionsConversionIdDatapointsBatchPatchRoute,
    putConversionsConversionIdDatapointsBatchPatchRouteHandler,
  )
  .openapi(
    getConversionsConversionIdDatapointsCountRoute,
    getConversionsConversionIdDatapointsCountRouteHandler,
  )
  .openapi(
    putConversionsConversionIdDatapointsPatchRoute,
    putConversionsConversionIdDatapointsPatchRouteHandler,
  )
  .openapi(getConversionsConversionIdHitsRoute, getConversionsConversionIdHitsRouteHandler)
  .openapi(putConversionsConversionIdNotesRoute, putConversionsConversionIdNotesRouteHandler)
  .openapi(getDatapointsRoute, getDatapointsRouteHandler)
  .openapi(postDatapointsRoute, postDatapointsRouteHandler)
  .openapi(getDatapointsAggregatedRoute, getDatapointsAggregatedRouteHandler)
  .openapi(getDatapointsAggregatedListRoute, getDatapointsAggregatedListRouteHandler)
  .openapi(deleteDatapointsBatchRoute, deleteDatapointsBatchRouteHandler)
  .openapi(postDatapointsBatchRoute, postDatapointsBatchRouteHandler)
  .openapi(putDatapointsBatchRoute, putDatapointsBatchRouteHandler)
  .openapi(getDatapointsCountRoute, getDatapointsCountRouteHandler)
  .openapi(deleteDatapointsIdRoute, deleteDatapointsIdRouteHandler)
  .openapi(getDatapointsIdRoute, getDatapointsIdRouteHandler)
  .openapi(postDatapointsIdRoute, postDatapointsIdRouteHandler)
  .openapi(getDatapointsIdAggregatedRoute, getDatapointsIdAggregatedRouteHandler)
  .openapi(getDatapointsIdAggregatedListRoute, getDatapointsIdAggregatedListRouteHandler)
  .openapi(putDatapointsIdFavouriteRoute, putDatapointsIdFavouriteRouteHandler)
  .openapi(getDatapointsIdHitsRoute, getDatapointsIdHitsRouteHandler)
  .openapi(putDatapointsIdNotesRoute, putDatapointsIdNotesRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(getDomainsCountRoute, getDomainsCountRouteHandler)
  .openapi(deleteDomainsIdRoute, deleteDomainsIdRouteHandler)
  .openapi(getDomainsIdRoute, getDomainsIdRouteHandler)
  .openapi(postDomainsIdRoute, postDomainsIdRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(getGroupsAggregatedRoute, getGroupsAggregatedRouteHandler)
  .openapi(getGroupsAggregatedListRoute, getGroupsAggregatedListRouteHandler)
  .openapi(getGroupsCountRoute, getGroupsCountRouteHandler)
  .openapi(deleteGroupsIdRoute, deleteGroupsIdRouteHandler)
  .openapi(getGroupsIdRoute, getGroupsIdRouteHandler)
  .openapi(postGroupsIdRoute, postGroupsIdRouteHandler)
  .openapi(getGroupsIdAggregatedRoute, getGroupsIdAggregatedRouteHandler)
  .openapi(getGroupsIdAggregatedListRoute, getGroupsIdAggregatedListRouteHandler)
  .openapi(getGroupsIdAggregatedSummaryRoute, getGroupsIdAggregatedSummaryRouteHandler)
  .openapi(getGroupsIdDatapointsRoute, getGroupsIdDatapointsRouteHandler)
  .openapi(postGroupsIdDatapointsRoute, postGroupsIdDatapointsRouteHandler)
  .openapi(getGroupsIdDatapointsCountRoute, getGroupsIdDatapointsCountRouteHandler)
  .openapi(putGroupsIdFavouriteRoute, putGroupsIdFavouriteRouteHandler)
  .openapi(getGroupsIdHitsRoute, getGroupsIdHitsRouteHandler)
  .openapi(putGroupsIdNotesRoute, putGroupsIdNotesRouteHandler)
  .openapi(getHitsRoute, getHitsRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMePlanRoute, getMePlanRouteHandler)
  .openapi(getRetargetingRoute, getRetargetingRouteHandler)
  .openapi(postRetargetingRoute, postRetargetingRouteHandler)
  .openapi(getRetargetingCountRoute, getRetargetingCountRouteHandler)
  .openapi(deleteRetargetingIdRoute, deleteRetargetingIdRouteHandler)
  .openapi(getRetargetingIdRoute, getRetargetingIdRouteHandler)
  .openapi(postRetargetingIdRoute, postRetargetingIdRouteHandler)
  .openapi(getRetargetingIdDatapointsRoute, getRetargetingIdDatapointsRouteHandler)
  .openapi(getRetargetingIdDatapointsCountRoute, getRetargetingIdDatapointsCountRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(getTagsCountRoute, getTagsCountRouteHandler)
  .openapi(deleteTagsTagIdRoute, deleteTagsTagIdRouteHandler)
  .openapi(getTagsTagIdRoute, getTagsTagIdRouteHandler)
  .openapi(deleteTagsTagIdDatapointsRoute, deleteTagsTagIdDatapointsRouteHandler)
  .openapi(getTagsTagIdDatapointsRoute, getTagsTagIdDatapointsRouteHandler)
  .openapi(getTagsTagIdDatapointsCountRoute, getTagsTagIdDatapointsCountRouteHandler)
  .openapi(putTagsTagIdDatapointsPatchRoute, putTagsTagIdDatapointsPatchRouteHandler)
  .openapi(deleteTagsTagIdGroupsRoute, deleteTagsTagIdGroupsRouteHandler)
  .openapi(getTagsTagIdGroupsRoute, getTagsTagIdGroupsRouteHandler)
  .openapi(getTagsTagIdGroupsCountRoute, getTagsTagIdGroupsCountRouteHandler)
  .openapi(putTagsTagIdGroupsPatchRoute, putTagsTagIdGroupsPatchRouteHandler)
  .openapi(putTagsTagIdNameRoute, putTagsTagIdNameRouteHandler)

export default app
