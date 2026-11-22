import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesDeltaRoute,
  getSitesGetAllSitesRoute,
  getSitesSiteIdGetActivitiesByIntervalRoute,
  getSitesSiteIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSitesSiteIdGetApplicableContentTypesForListListIdListIdRoute,
  getSitesSiteIdGetByPathPathPathGetActivitiesByIntervalRoute,
  getSitesSiteIdGetByPathPathPathGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSitesSiteIdGetByPathPathPathGetApplicableContentTypesForListListIdListIdRoute,
  getSitesSiteIdGetByPathPathPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSiteFunctionsHandler = app
  .openapi(getSitesSiteIdGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdGetApplicableContentTypesForListListIdListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdGetByPathPathPathGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdGetByPathPathPathGetApplicableContentTypesForListListIdListIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesGetAllSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
