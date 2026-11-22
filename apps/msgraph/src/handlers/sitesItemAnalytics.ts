import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
  deleteSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute,
  deleteSitesSiteIdAnalyticsRoute,
  deleteSitesSiteIdGetByPathPathPathAnalyticsRoute,
  getSitesSiteIdAnalyticsAllTimeRoute,
  getSitesSiteIdAnalyticsItemActivityStatsCountRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesCountRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemContentRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesRoute,
  getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute,
  getSitesSiteIdAnalyticsItemActivityStatsRoute,
  getSitesSiteIdAnalyticsLastSevenDaysRoute,
  getSitesSiteIdAnalyticsRoute,
  getSitesSiteIdGetByPathPathPathAnalyticsRoute,
  patchSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
  patchSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute,
  patchSitesSiteIdAnalyticsRoute,
  patchSitesSiteIdGetByPathPathPathAnalyticsRoute,
  postSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesRoute,
  postSitesSiteIdAnalyticsItemActivityStatsRoute,
  putSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesItemAnalyticsHandler = app
  .openapi(getSitesSiteIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsAllTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsItemActivityStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAnalyticsItemActivityStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesItemActivityIdDriveItemContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsItemActivityStatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAnalyticsLastSevenDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdGetByPathPathPathAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdGetByPathPathPathAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
