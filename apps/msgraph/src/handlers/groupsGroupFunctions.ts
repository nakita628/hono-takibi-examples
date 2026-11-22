import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsDeltaRoute,
  getGroupsGroupIdSitesSiteIdGetByPathPathPathGetActivitiesByIntervalRoute,
  getGroupsGroupIdSitesSiteIdGetByPathPathPathGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getGroupsGroupIdSitesSiteIdGetByPathPathPathGetApplicableContentTypesForListListIdListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsGroupFunctionsHandler = app
  .openapi(getGroupsGroupIdSitesSiteIdGetByPathPathPathGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdGetByPathPathPathGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdGetByPathPathPathGetApplicableContentTypesForListListIdListIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
