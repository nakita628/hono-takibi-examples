import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsMicrosoftGraphDeviceConfigurationDeviceActivityRoute,
  getReportsMicrosoftGraphDeviceConfigurationUserActivityRoute,
  getReportsMicrosoftGraphGetEmailActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetEmailActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailAppUsageAppsUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailAppUsageUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailAppUsageUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetEmailAppUsageUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsMicrosoftGraphGetM365AppPlatformUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetM365AppUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetM365AppUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetM365AppUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetMailboxUsageDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetMailboxUsageMailboxCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetMailboxUsageStoragePeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365ActivationCountsRoute,
  getReportsMicrosoftGraphGetOffice365ActivationsUserCountsRoute,
  getReportsMicrosoftGraphGetOffice365ActivationsUserDetailRoute,
  getReportsMicrosoftGraphGetOffice365ActiveUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365ActiveUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetOffice365ActiveUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityDetailDateDateRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityFileCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365GroupsActivityStoragePeriodPeriodRoute,
  getReportsMicrosoftGraphGetOffice365ServicesUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveActivityFileCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetOneDriveActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveUsageAccountCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveUsageAccountDetailDateDateRoute,
  getReportsMicrosoftGraphGetOneDriveUsageAccountDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveUsageFileCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetOneDriveUsageStoragePeriodPeriodRoute,
  getReportsMicrosoftGraphGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsMicrosoftGraphGetSharePointActivityFileCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointActivityPagesPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetSharePointActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsageDetailDateDateRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsageDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsageFileCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsagePagesPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsageSiteCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSharePointSiteUsageStoragePeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsUserActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsUserActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetTeamsUserActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetTeamsUserActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getReportsMicrosoftGraphGetYammerActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerActivityUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerActivityUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetYammerActivityUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerDeviceUsageUserCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailDateDateRoute,
  getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerGroupsActivityCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerGroupsActivityDetailDateDateRoute,
  getReportsMicrosoftGraphGetYammerGroupsActivityDetailPeriodPeriodRoute,
  getReportsMicrosoftGraphGetYammerGroupsActivityGroupCountsPeriodPeriodRoute,
  getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsRoute,
  getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute,
  getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute,
  getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationRepeatOffendersRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationSimulationUserCoverageRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationTrainingUserCoverageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsFunctionsHandler = app
  .openapi(getReportsMicrosoftGraphDeviceConfigurationDeviceActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphDeviceConfigurationUserActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailAppUsageAppsUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailAppUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailAppUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailAppUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetM365AppPlatformUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetM365AppUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetM365AppUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetM365AppUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetMailboxUsageDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetMailboxUsageMailboxCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetMailboxUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActivationCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActivationsUserCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActivationsUserDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActiveUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActiveUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ActiveUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365GroupsActivityStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOffice365ServicesUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveUsageAccountCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveUsageAccountDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveUsageAccountDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveUsageFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetOneDriveUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetSharePointActivityFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointActivityPagesPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsageDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsageDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsageFileCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsagePagesPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsageSiteCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSharePointSiteUsageStoragePeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSkypeForBusinessActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getReportsMicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetTeamsDeviceUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsUserActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsUserActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsUserActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetTeamsUserActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetYammerActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerActivityUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerActivityUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerActivityUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphGetYammerDeviceUsageUserCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerGroupsActivityCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerGroupsActivityDetailDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerGroupsActivityDetailPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphGetYammerGroupsActivityGroupCountsPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityMicrosoftGraphGetAttackSimulationRepeatOffendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityMicrosoftGraphGetAttackSimulationSimulationUserCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityMicrosoftGraphGetAttackSimulationTrainingUserCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
