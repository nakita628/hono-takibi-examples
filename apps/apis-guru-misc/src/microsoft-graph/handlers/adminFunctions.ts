import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdMicrosoftGraphIncidentReportRoute,
  getAdminServiceAnnouncementIssuesServiceHealthIssueIdMicrosoftGraphIncidentReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminFunctionsHandler = app
  .openapi(
    getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdMicrosoftGraphIncidentReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminServiceAnnouncementIssuesServiceHealthIssueIdMicrosoftGraphIncidentReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
