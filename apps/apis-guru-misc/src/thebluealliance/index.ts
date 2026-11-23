import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistrictDistrictKeyEventsKeysRoute,
  getDistrictDistrictKeyEventsRoute,
  getDistrictDistrictKeyEventsSimpleRoute,
  getDistrictDistrictKeyRankingsRoute,
  getDistrictDistrictKeyTeamsKeysRoute,
  getDistrictDistrictKeyTeamsRoute,
  getDistrictDistrictKeyTeamsSimpleRoute,
  getDistrictsYearRoute,
  getEventEventKeyAlliancesRoute,
  getEventEventKeyAwardsRoute,
  getEventEventKeyDistrictPointsRoute,
  getEventEventKeyInsightsRoute,
  getEventEventKeyMatchesKeysRoute,
  getEventEventKeyMatchesRoute,
  getEventEventKeyMatchesSimpleRoute,
  getEventEventKeyMatchesTimeseriesRoute,
  getEventEventKeyOprsRoute,
  getEventEventKeyPredictionsRoute,
  getEventEventKeyRankingsRoute,
  getEventEventKeyRoute,
  getEventEventKeySimpleRoute,
  getEventEventKeyTeamsKeysRoute,
  getEventEventKeyTeamsRoute,
  getEventEventKeyTeamsSimpleRoute,
  getEventEventKeyTeamsStatusesRoute,
  getEventsYearKeysRoute,
  getEventsYearRoute,
  getEventsYearSimpleRoute,
  getMatchMatchKeyRoute,
  getMatchMatchKeySimpleRoute,
  getMatchMatchKeyTimeseriesRoute,
  getMatchMatchKeyZebraMotionworksRoute,
  getStatusRoute,
  getTeamsPageNumKeysRoute,
  getTeamsPageNumRoute,
  getTeamsPageNumSimpleRoute,
  getTeamsYearPageNumKeysRoute,
  getTeamsYearPageNumRoute,
  getTeamsYearPageNumSimpleRoute,
  getTeamTeamKeyAwardsRoute,
  getTeamTeamKeyAwardsYearRoute,
  getTeamTeamKeyDistrictsRoute,
  getTeamTeamKeyEventEventKeyAwardsRoute,
  getTeamTeamKeyEventEventKeyMatchesKeysRoute,
  getTeamTeamKeyEventEventKeyMatchesRoute,
  getTeamTeamKeyEventEventKeyMatchesSimpleRoute,
  getTeamTeamKeyEventEventKeyStatusRoute,
  getTeamTeamKeyEventsKeysRoute,
  getTeamTeamKeyEventsRoute,
  getTeamTeamKeyEventsSimpleRoute,
  getTeamTeamKeyEventsYearKeysRoute,
  getTeamTeamKeyEventsYearRoute,
  getTeamTeamKeyEventsYearSimpleRoute,
  getTeamTeamKeyEventsYearStatusesRoute,
  getTeamTeamKeyMatchesYearKeysRoute,
  getTeamTeamKeyMatchesYearRoute,
  getTeamTeamKeyMatchesYearSimpleRoute,
  getTeamTeamKeyMediaTagMediaTagRoute,
  getTeamTeamKeyMediaTagMediaTagYearRoute,
  getTeamTeamKeyMediaYearRoute,
  getTeamTeamKeyRobotsRoute,
  getTeamTeamKeyRoute,
  getTeamTeamKeySimpleRoute,
  getTeamTeamKeySocialMediaRoute,
  getTeamTeamKeyYearsParticipatedRoute,
} from './routes'
import {
  getDistrictDistrictKeyEventsKeysRouteHandler,
  getDistrictDistrictKeyEventsRouteHandler,
  getDistrictDistrictKeyEventsSimpleRouteHandler,
  getDistrictDistrictKeyRankingsRouteHandler,
  getDistrictDistrictKeyTeamsKeysRouteHandler,
  getDistrictDistrictKeyTeamsRouteHandler,
  getDistrictDistrictKeyTeamsSimpleRouteHandler,
  getDistrictsYearRouteHandler,
  getEventEventKeyAlliancesRouteHandler,
  getEventEventKeyAwardsRouteHandler,
  getEventEventKeyDistrictPointsRouteHandler,
  getEventEventKeyInsightsRouteHandler,
  getEventEventKeyMatchesKeysRouteHandler,
  getEventEventKeyMatchesRouteHandler,
  getEventEventKeyMatchesSimpleRouteHandler,
  getEventEventKeyMatchesTimeseriesRouteHandler,
  getEventEventKeyOprsRouteHandler,
  getEventEventKeyPredictionsRouteHandler,
  getEventEventKeyRankingsRouteHandler,
  getEventEventKeyRouteHandler,
  getEventEventKeySimpleRouteHandler,
  getEventEventKeyTeamsKeysRouteHandler,
  getEventEventKeyTeamsRouteHandler,
  getEventEventKeyTeamsSimpleRouteHandler,
  getEventEventKeyTeamsStatusesRouteHandler,
  getEventsYearKeysRouteHandler,
  getEventsYearRouteHandler,
  getEventsYearSimpleRouteHandler,
  getMatchMatchKeyRouteHandler,
  getMatchMatchKeySimpleRouteHandler,
  getMatchMatchKeyTimeseriesRouteHandler,
  getMatchMatchKeyZebraMotionworksRouteHandler,
  getStatusRouteHandler,
  getTeamsPageNumKeysRouteHandler,
  getTeamsPageNumRouteHandler,
  getTeamsPageNumSimpleRouteHandler,
  getTeamsYearPageNumKeysRouteHandler,
  getTeamsYearPageNumRouteHandler,
  getTeamsYearPageNumSimpleRouteHandler,
  getTeamTeamKeyAwardsRouteHandler,
  getTeamTeamKeyAwardsYearRouteHandler,
  getTeamTeamKeyDistrictsRouteHandler,
  getTeamTeamKeyEventEventKeyAwardsRouteHandler,
  getTeamTeamKeyEventEventKeyMatchesKeysRouteHandler,
  getTeamTeamKeyEventEventKeyMatchesRouteHandler,
  getTeamTeamKeyEventEventKeyMatchesSimpleRouteHandler,
  getTeamTeamKeyEventEventKeyStatusRouteHandler,
  getTeamTeamKeyEventsKeysRouteHandler,
  getTeamTeamKeyEventsRouteHandler,
  getTeamTeamKeyEventsSimpleRouteHandler,
  getTeamTeamKeyEventsYearKeysRouteHandler,
  getTeamTeamKeyEventsYearRouteHandler,
  getTeamTeamKeyEventsYearSimpleRouteHandler,
  getTeamTeamKeyEventsYearStatusesRouteHandler,
  getTeamTeamKeyMatchesYearKeysRouteHandler,
  getTeamTeamKeyMatchesYearRouteHandler,
  getTeamTeamKeyMatchesYearSimpleRouteHandler,
  getTeamTeamKeyMediaTagMediaTagRouteHandler,
  getTeamTeamKeyMediaTagMediaTagYearRouteHandler,
  getTeamTeamKeyMediaYearRouteHandler,
  getTeamTeamKeyRobotsRouteHandler,
  getTeamTeamKeyRouteHandler,
  getTeamTeamKeySimpleRouteHandler,
  getTeamTeamKeySocialMediaRouteHandler,
  getTeamTeamKeyYearsParticipatedRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDistrictDistrictKeyEventsRoute, getDistrictDistrictKeyEventsRouteHandler)
  .openapi(getDistrictDistrictKeyEventsKeysRoute, getDistrictDistrictKeyEventsKeysRouteHandler)
  .openapi(getDistrictDistrictKeyEventsSimpleRoute, getDistrictDistrictKeyEventsSimpleRouteHandler)
  .openapi(getDistrictDistrictKeyRankingsRoute, getDistrictDistrictKeyRankingsRouteHandler)
  .openapi(getDistrictDistrictKeyTeamsRoute, getDistrictDistrictKeyTeamsRouteHandler)
  .openapi(getDistrictDistrictKeyTeamsKeysRoute, getDistrictDistrictKeyTeamsKeysRouteHandler)
  .openapi(getDistrictDistrictKeyTeamsSimpleRoute, getDistrictDistrictKeyTeamsSimpleRouteHandler)
  .openapi(getDistrictsYearRoute, getDistrictsYearRouteHandler)
  .openapi(getEventEventKeyRoute, getEventEventKeyRouteHandler)
  .openapi(getEventEventKeyAlliancesRoute, getEventEventKeyAlliancesRouteHandler)
  .openapi(getEventEventKeyAwardsRoute, getEventEventKeyAwardsRouteHandler)
  .openapi(getEventEventKeyDistrictPointsRoute, getEventEventKeyDistrictPointsRouteHandler)
  .openapi(getEventEventKeyInsightsRoute, getEventEventKeyInsightsRouteHandler)
  .openapi(getEventEventKeyMatchesRoute, getEventEventKeyMatchesRouteHandler)
  .openapi(getEventEventKeyMatchesKeysRoute, getEventEventKeyMatchesKeysRouteHandler)
  .openapi(getEventEventKeyMatchesSimpleRoute, getEventEventKeyMatchesSimpleRouteHandler)
  .openapi(getEventEventKeyMatchesTimeseriesRoute, getEventEventKeyMatchesTimeseriesRouteHandler)
  .openapi(getEventEventKeyOprsRoute, getEventEventKeyOprsRouteHandler)
  .openapi(getEventEventKeyPredictionsRoute, getEventEventKeyPredictionsRouteHandler)
  .openapi(getEventEventKeyRankingsRoute, getEventEventKeyRankingsRouteHandler)
  .openapi(getEventEventKeySimpleRoute, getEventEventKeySimpleRouteHandler)
  .openapi(getEventEventKeyTeamsRoute, getEventEventKeyTeamsRouteHandler)
  .openapi(getEventEventKeyTeamsKeysRoute, getEventEventKeyTeamsKeysRouteHandler)
  .openapi(getEventEventKeyTeamsSimpleRoute, getEventEventKeyTeamsSimpleRouteHandler)
  .openapi(getEventEventKeyTeamsStatusesRoute, getEventEventKeyTeamsStatusesRouteHandler)
  .openapi(getEventsYearRoute, getEventsYearRouteHandler)
  .openapi(getEventsYearKeysRoute, getEventsYearKeysRouteHandler)
  .openapi(getEventsYearSimpleRoute, getEventsYearSimpleRouteHandler)
  .openapi(getMatchMatchKeyRoute, getMatchMatchKeyRouteHandler)
  .openapi(getMatchMatchKeySimpleRoute, getMatchMatchKeySimpleRouteHandler)
  .openapi(getMatchMatchKeyTimeseriesRoute, getMatchMatchKeyTimeseriesRouteHandler)
  .openapi(getMatchMatchKeyZebraMotionworksRoute, getMatchMatchKeyZebraMotionworksRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getTeamTeamKeyRoute, getTeamTeamKeyRouteHandler)
  .openapi(getTeamTeamKeyAwardsRoute, getTeamTeamKeyAwardsRouteHandler)
  .openapi(getTeamTeamKeyAwardsYearRoute, getTeamTeamKeyAwardsYearRouteHandler)
  .openapi(getTeamTeamKeyDistrictsRoute, getTeamTeamKeyDistrictsRouteHandler)
  .openapi(getTeamTeamKeyEventEventKeyAwardsRoute, getTeamTeamKeyEventEventKeyAwardsRouteHandler)
  .openapi(getTeamTeamKeyEventEventKeyMatchesRoute, getTeamTeamKeyEventEventKeyMatchesRouteHandler)
  .openapi(
    getTeamTeamKeyEventEventKeyMatchesKeysRoute,
    getTeamTeamKeyEventEventKeyMatchesKeysRouteHandler,
  )
  .openapi(
    getTeamTeamKeyEventEventKeyMatchesSimpleRoute,
    getTeamTeamKeyEventEventKeyMatchesSimpleRouteHandler,
  )
  .openapi(getTeamTeamKeyEventEventKeyStatusRoute, getTeamTeamKeyEventEventKeyStatusRouteHandler)
  .openapi(getTeamTeamKeyEventsRoute, getTeamTeamKeyEventsRouteHandler)
  .openapi(getTeamTeamKeyEventsKeysRoute, getTeamTeamKeyEventsKeysRouteHandler)
  .openapi(getTeamTeamKeyEventsSimpleRoute, getTeamTeamKeyEventsSimpleRouteHandler)
  .openapi(getTeamTeamKeyEventsYearRoute, getTeamTeamKeyEventsYearRouteHandler)
  .openapi(getTeamTeamKeyEventsYearKeysRoute, getTeamTeamKeyEventsYearKeysRouteHandler)
  .openapi(getTeamTeamKeyEventsYearSimpleRoute, getTeamTeamKeyEventsYearSimpleRouteHandler)
  .openapi(getTeamTeamKeyEventsYearStatusesRoute, getTeamTeamKeyEventsYearStatusesRouteHandler)
  .openapi(getTeamTeamKeyMatchesYearRoute, getTeamTeamKeyMatchesYearRouteHandler)
  .openapi(getTeamTeamKeyMatchesYearKeysRoute, getTeamTeamKeyMatchesYearKeysRouteHandler)
  .openapi(getTeamTeamKeyMatchesYearSimpleRoute, getTeamTeamKeyMatchesYearSimpleRouteHandler)
  .openapi(getTeamTeamKeyMediaTagMediaTagRoute, getTeamTeamKeyMediaTagMediaTagRouteHandler)
  .openapi(getTeamTeamKeyMediaTagMediaTagYearRoute, getTeamTeamKeyMediaTagMediaTagYearRouteHandler)
  .openapi(getTeamTeamKeyMediaYearRoute, getTeamTeamKeyMediaYearRouteHandler)
  .openapi(getTeamTeamKeyRobotsRoute, getTeamTeamKeyRobotsRouteHandler)
  .openapi(getTeamTeamKeySimpleRoute, getTeamTeamKeySimpleRouteHandler)
  .openapi(getTeamTeamKeySocialMediaRoute, getTeamTeamKeySocialMediaRouteHandler)
  .openapi(getTeamTeamKeyYearsParticipatedRoute, getTeamTeamKeyYearsParticipatedRouteHandler)
  .openapi(getTeamsPageNumRoute, getTeamsPageNumRouteHandler)
  .openapi(getTeamsPageNumKeysRoute, getTeamsPageNumKeysRouteHandler)
  .openapi(getTeamsPageNumSimpleRoute, getTeamsPageNumSimpleRouteHandler)
  .openapi(getTeamsYearPageNumRoute, getTeamsYearPageNumRouteHandler)
  .openapi(getTeamsYearPageNumKeysRoute, getTeamsYearPageNumKeysRouteHandler)
  .openapi(getTeamsYearPageNumSimpleRoute, getTeamsYearPageNumSimpleRouteHandler)

export default app
