import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsDeviceConfigurationDeviceActivityRoute,
  getReportsDeviceConfigurationUserActivityRoute,
  getReportsGetEmailActivityCountsPeriodPeriodRoute,
  getReportsGetEmailActivityUserCountsPeriodPeriodRoute,
  getReportsGetEmailActivityUserDetailDateDateRoute,
  getReportsGetEmailActivityUserDetailPeriodPeriodRoute,
  getReportsGetEmailAppUsageAppsUserCountsPeriodPeriodRoute,
  getReportsGetEmailAppUsageUserCountsPeriodPeriodRoute,
  getReportsGetEmailAppUsageUserDetailDateDateRoute,
  getReportsGetEmailAppUsageUserDetailPeriodPeriodRoute,
  getReportsGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute,
  getReportsGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsGetM365AppPlatformUserCountsPeriodPeriodRoute,
  getReportsGetM365AppUserCountsPeriodPeriodRoute,
  getReportsGetM365AppUserDetailDateDateRoute,
  getReportsGetM365AppUserDetailPeriodPeriodRoute,
  getReportsGetMailboxUsageDetailPeriodPeriodRoute,
  getReportsGetMailboxUsageMailboxCountsPeriodPeriodRoute,
  getReportsGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute,
  getReportsGetMailboxUsageStoragePeriodPeriodRoute,
  getReportsGetOffice365ActivationCountsRoute,
  getReportsGetOffice365ActivationsUserCountsRoute,
  getReportsGetOffice365ActivationsUserDetailRoute,
  getReportsGetOffice365ActiveUserCountsPeriodPeriodRoute,
  getReportsGetOffice365ActiveUserDetailDateDateRoute,
  getReportsGetOffice365ActiveUserDetailPeriodPeriodRoute,
  getReportsGetOffice365GroupsActivityCountsPeriodPeriodRoute,
  getReportsGetOffice365GroupsActivityDetailDateDateRoute,
  getReportsGetOffice365GroupsActivityDetailPeriodPeriodRoute,
  getReportsGetOffice365GroupsActivityFileCountsPeriodPeriodRoute,
  getReportsGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute,
  getReportsGetOffice365GroupsActivityStoragePeriodPeriodRoute,
  getReportsGetOffice365ServicesUserCountsPeriodPeriodRoute,
  getReportsGetOneDriveActivityFileCountsPeriodPeriodRoute,
  getReportsGetOneDriveActivityUserCountsPeriodPeriodRoute,
  getReportsGetOneDriveActivityUserDetailDateDateRoute,
  getReportsGetOneDriveActivityUserDetailPeriodPeriodRoute,
  getReportsGetOneDriveUsageAccountCountsPeriodPeriodRoute,
  getReportsGetOneDriveUsageAccountDetailDateDateRoute,
  getReportsGetOneDriveUsageAccountDetailPeriodPeriodRoute,
  getReportsGetOneDriveUsageFileCountsPeriodPeriodRoute,
  getReportsGetOneDriveUsageStoragePeriodPeriodRoute,
  getReportsGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsGetRelyingPartyDetailedSummaryPeriodPeriodRoute,
  getReportsGetSharePointActivityFileCountsPeriodPeriodRoute,
  getReportsGetSharePointActivityPagesPeriodPeriodRoute,
  getReportsGetSharePointActivityUserCountsPeriodPeriodRoute,
  getReportsGetSharePointActivityUserDetailDateDateRoute,
  getReportsGetSharePointActivityUserDetailPeriodPeriodRoute,
  getReportsGetSharePointSiteUsageDetailDateDateRoute,
  getReportsGetSharePointSiteUsageDetailPeriodPeriodRoute,
  getReportsGetSharePointSiteUsageFileCountsPeriodPeriodRoute,
  getReportsGetSharePointSiteUsagePagesPeriodPeriodRoute,
  getReportsGetSharePointSiteUsageSiteCountsPeriodPeriodRoute,
  getReportsGetSharePointSiteUsageStoragePeriodPeriodRoute,
  getReportsGetSkypeForBusinessActivityCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessActivityUserDetailDateDateRoute,
  getReportsGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute,
  getReportsGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute,
  getReportsGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute,
  getReportsGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute,
  getReportsGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsGetTeamsDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsGetTeamsDeviceUsageUserDetailDateDateRoute,
  getReportsGetTeamsDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsGetTeamsTeamActivityCountsPeriodPeriodRoute,
  getReportsGetTeamsTeamActivityDetailDateDateRoute,
  getReportsGetTeamsTeamActivityDetailPeriodPeriodRoute,
  getReportsGetTeamsTeamActivityDistributionCountsPeriodPeriodRoute,
  getReportsGetTeamsTeamCountsPeriodPeriodRoute,
  getReportsGetTeamsUserActivityCountsPeriodPeriodRoute,
  getReportsGetTeamsUserActivityUserCountsPeriodPeriodRoute,
  getReportsGetTeamsUserActivityUserDetailDateDateRoute,
  getReportsGetTeamsUserActivityUserDetailPeriodPeriodRoute,
  getReportsGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsGetYammerActivityCountsPeriodPeriodRoute,
  getReportsGetYammerActivityUserCountsPeriodPeriodRoute,
  getReportsGetYammerActivityUserDetailDateDateRoute,
  getReportsGetYammerActivityUserDetailPeriodPeriodRoute,
  getReportsGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsGetYammerDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsGetYammerDeviceUsageUserDetailDateDateRoute,
  getReportsGetYammerDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsGetYammerGroupsActivityCountsPeriodPeriodRoute,
  getReportsGetYammerGroupsActivityDetailDateDateRoute,
  getReportsGetYammerGroupsActivityDetailPeriodPeriodRoute,
  getReportsGetYammerGroupsActivityGroupCountsPeriodPeriodRoute,
  getReportsManagedDeviceEnrollmentFailureDetailsRoute,
  getReportsManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute,
  getReportsManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute,
  getReportsManagedDeviceEnrollmentTopFailuresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsReportRootFunctionsHandler = app
  .openapi(getReportsDeviceConfigurationDeviceActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDeviceConfigurationUserActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailAppUsageAppsUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailAppUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailAppUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailAppUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsGetM365AppPlatformUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetM365AppUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetM365AppUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetM365AppUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetMailboxUsageDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetMailboxUsageMailboxCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetMailboxUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActivationCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActivationsUserCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActivationsUserDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActiveUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActiveUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ActiveUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365GroupsActivityStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOffice365ServicesUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveUsageAccountCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveUsageAccountDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveUsageAccountDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveUsageFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetOneDriveUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsGetRelyingPartyDetailedSummaryPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointActivityPagesPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsageDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsageDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsageFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsagePagesPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsageSiteCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSharePointSiteUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsDeviceUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsDeviceUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsTeamActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsTeamActivityDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsTeamActivityDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsTeamActivityDistributionCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsTeamCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsUserActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsUserActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsUserActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetTeamsUserActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsGetYammerActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerDeviceUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerDeviceUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerGroupsActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerGroupsActivityDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerGroupsActivityDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsGetYammerGroupsActivityGroupCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsManagedDeviceEnrollmentFailureDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsManagedDeviceEnrollmentTopFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
