import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLocationBrowseLocationTypeLocationNameRoute,
  getApiLocationConstituencyIdElectionResultElectionIdRoute,
  getApiLocationConstituencyIdElectionResultLatestRoute,
  getApiLocationConstituencyIdElectionResultsRoute,
  getApiLocationConstituencyIdGeometryRoute,
  getApiLocationConstituencyIdRepresentationsRoute,
  getApiLocationConstituencyIdRoute,
  getApiLocationConstituencyIdSynopsisRoute,
  getApiLocationConstituencySearchRoute,
  getApiLordsInterestsRegisterRoute,
  getApiLordsInterestsStaffRoute,
  getApiMembersHistoryRoute,
  getApiMembersIdBiographyRoute,
  getApiMembersIdContactRoute,
  getApiMembersIdContributionSummaryRoute,
  getApiMembersIdEdmsRoute,
  getApiMembersIdExperienceRoute,
  getApiMembersIdFocusRoute,
  getApiMembersIdLatestElectionResultRoute,
  getApiMembersIdPortraitRoute,
  getApiMembersIdPortraitUrlRoute,
  getApiMembersIdRegisteredInterestsRoute,
  getApiMembersIdRoute,
  getApiMembersIdStaffRoute,
  getApiMembersIdSynopsisRoute,
  getApiMembersIdThumbnailRoute,
  getApiMembersIdThumbnailUrlRoute,
  getApiMembersIdVotingRoute,
  getApiMembersIdWrittenQuestionsRoute,
  getApiMembersSearchHistoricalRoute,
  getApiMembersSearchRoute,
  getApiPartiesGetActiveHouseRoute,
  getApiPartiesLordsByTypeForDateRoute,
  getApiPartiesStateOfThePartiesHouseForDateRoute,
  getApiPostsDepartmentsTypeRoute,
  getApiPostsGovernmentPostsRoute,
  getApiPostsOppositionPostsRoute,
  getApiPostsSpeakerAndDeputiesForDateRoute,
  getApiPostsSpokespersonsRoute,
  getApiReferenceAnsweringBodiesRoute,
  getApiReferenceDepartmentsIdLogoRoute,
  getApiReferenceDepartmentsRoute,
  getApiReferencePolicyInterestsRoute,
} from './routes'
import {
  getApiLocationBrowseLocationTypeLocationNameRouteHandler,
  getApiLocationConstituencyIdElectionResultElectionIdRouteHandler,
  getApiLocationConstituencyIdElectionResultLatestRouteHandler,
  getApiLocationConstituencyIdElectionResultsRouteHandler,
  getApiLocationConstituencyIdGeometryRouteHandler,
  getApiLocationConstituencyIdRepresentationsRouteHandler,
  getApiLocationConstituencyIdRouteHandler,
  getApiLocationConstituencyIdSynopsisRouteHandler,
  getApiLocationConstituencySearchRouteHandler,
  getApiLordsInterestsRegisterRouteHandler,
  getApiLordsInterestsStaffRouteHandler,
  getApiMembersHistoryRouteHandler,
  getApiMembersIdBiographyRouteHandler,
  getApiMembersIdContactRouteHandler,
  getApiMembersIdContributionSummaryRouteHandler,
  getApiMembersIdEdmsRouteHandler,
  getApiMembersIdExperienceRouteHandler,
  getApiMembersIdFocusRouteHandler,
  getApiMembersIdLatestElectionResultRouteHandler,
  getApiMembersIdPortraitRouteHandler,
  getApiMembersIdPortraitUrlRouteHandler,
  getApiMembersIdRegisteredInterestsRouteHandler,
  getApiMembersIdRouteHandler,
  getApiMembersIdStaffRouteHandler,
  getApiMembersIdSynopsisRouteHandler,
  getApiMembersIdThumbnailRouteHandler,
  getApiMembersIdThumbnailUrlRouteHandler,
  getApiMembersIdVotingRouteHandler,
  getApiMembersIdWrittenQuestionsRouteHandler,
  getApiMembersSearchHistoricalRouteHandler,
  getApiMembersSearchRouteHandler,
  getApiPartiesGetActiveHouseRouteHandler,
  getApiPartiesLordsByTypeForDateRouteHandler,
  getApiPartiesStateOfThePartiesHouseForDateRouteHandler,
  getApiPostsDepartmentsTypeRouteHandler,
  getApiPostsGovernmentPostsRouteHandler,
  getApiPostsOppositionPostsRouteHandler,
  getApiPostsSpeakerAndDeputiesForDateRouteHandler,
  getApiPostsSpokespersonsRouteHandler,
  getApiReferenceAnsweringBodiesRouteHandler,
  getApiReferenceDepartmentsIdLogoRouteHandler,
  getApiReferenceDepartmentsRouteHandler,
  getApiReferencePolicyInterestsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiLocationBrowseLocationTypeLocationNameRoute,
    getApiLocationBrowseLocationTypeLocationNameRouteHandler,
  )
  .openapi(getApiLocationConstituencySearchRoute, getApiLocationConstituencySearchRouteHandler)
  .openapi(getApiLocationConstituencyIdRoute, getApiLocationConstituencyIdRouteHandler)
  .openapi(
    getApiLocationConstituencyIdElectionResultLatestRoute,
    getApiLocationConstituencyIdElectionResultLatestRouteHandler,
  )
  .openapi(
    getApiLocationConstituencyIdElectionResultElectionIdRoute,
    getApiLocationConstituencyIdElectionResultElectionIdRouteHandler,
  )
  .openapi(
    getApiLocationConstituencyIdElectionResultsRoute,
    getApiLocationConstituencyIdElectionResultsRouteHandler,
  )
  .openapi(
    getApiLocationConstituencyIdGeometryRoute,
    getApiLocationConstituencyIdGeometryRouteHandler,
  )
  .openapi(
    getApiLocationConstituencyIdRepresentationsRoute,
    getApiLocationConstituencyIdRepresentationsRouteHandler,
  )
  .openapi(
    getApiLocationConstituencyIdSynopsisRoute,
    getApiLocationConstituencyIdSynopsisRouteHandler,
  )
  .openapi(getApiLordsInterestsRegisterRoute, getApiLordsInterestsRegisterRouteHandler)
  .openapi(getApiLordsInterestsStaffRoute, getApiLordsInterestsStaffRouteHandler)
  .openapi(getApiMembersHistoryRoute, getApiMembersHistoryRouteHandler)
  .openapi(getApiMembersSearchRoute, getApiMembersSearchRouteHandler)
  .openapi(getApiMembersSearchHistoricalRoute, getApiMembersSearchHistoricalRouteHandler)
  .openapi(getApiMembersIdRoute, getApiMembersIdRouteHandler)
  .openapi(getApiMembersIdBiographyRoute, getApiMembersIdBiographyRouteHandler)
  .openapi(getApiMembersIdContactRoute, getApiMembersIdContactRouteHandler)
  .openapi(getApiMembersIdContributionSummaryRoute, getApiMembersIdContributionSummaryRouteHandler)
  .openapi(getApiMembersIdEdmsRoute, getApiMembersIdEdmsRouteHandler)
  .openapi(getApiMembersIdExperienceRoute, getApiMembersIdExperienceRouteHandler)
  .openapi(getApiMembersIdFocusRoute, getApiMembersIdFocusRouteHandler)
  .openapi(
    getApiMembersIdLatestElectionResultRoute,
    getApiMembersIdLatestElectionResultRouteHandler,
  )
  .openapi(getApiMembersIdPortraitRoute, getApiMembersIdPortraitRouteHandler)
  .openapi(getApiMembersIdPortraitUrlRoute, getApiMembersIdPortraitUrlRouteHandler)
  .openapi(getApiMembersIdRegisteredInterestsRoute, getApiMembersIdRegisteredInterestsRouteHandler)
  .openapi(getApiMembersIdStaffRoute, getApiMembersIdStaffRouteHandler)
  .openapi(getApiMembersIdSynopsisRoute, getApiMembersIdSynopsisRouteHandler)
  .openapi(getApiMembersIdThumbnailRoute, getApiMembersIdThumbnailRouteHandler)
  .openapi(getApiMembersIdThumbnailUrlRoute, getApiMembersIdThumbnailUrlRouteHandler)
  .openapi(getApiMembersIdVotingRoute, getApiMembersIdVotingRouteHandler)
  .openapi(getApiMembersIdWrittenQuestionsRoute, getApiMembersIdWrittenQuestionsRouteHandler)
  .openapi(getApiPartiesGetActiveHouseRoute, getApiPartiesGetActiveHouseRouteHandler)
  .openapi(getApiPartiesLordsByTypeForDateRoute, getApiPartiesLordsByTypeForDateRouteHandler)
  .openapi(
    getApiPartiesStateOfThePartiesHouseForDateRoute,
    getApiPartiesStateOfThePartiesHouseForDateRouteHandler,
  )
  .openapi(getApiPostsDepartmentsTypeRoute, getApiPostsDepartmentsTypeRouteHandler)
  .openapi(getApiPostsGovernmentPostsRoute, getApiPostsGovernmentPostsRouteHandler)
  .openapi(getApiPostsOppositionPostsRoute, getApiPostsOppositionPostsRouteHandler)
  .openapi(
    getApiPostsSpeakerAndDeputiesForDateRoute,
    getApiPostsSpeakerAndDeputiesForDateRouteHandler,
  )
  .openapi(getApiPostsSpokespersonsRoute, getApiPostsSpokespersonsRouteHandler)
  .openapi(getApiReferenceAnsweringBodiesRoute, getApiReferenceAnsweringBodiesRouteHandler)
  .openapi(getApiReferenceDepartmentsRoute, getApiReferenceDepartmentsRouteHandler)
  .openapi(getApiReferenceDepartmentsIdLogoRoute, getApiReferenceDepartmentsIdLogoRouteHandler)
  .openapi(getApiReferencePolicyInterestsRoute, getApiReferencePolicyInterestsRouteHandler)

export default app
