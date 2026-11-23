import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  deleteReportsSecurityRoute,
  getReportsDailyPrintUsageByPrinterCountRoute,
  getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsDailyPrintUsageByPrinterRoute,
  getReportsDailyPrintUsageByUserCountRoute,
  getReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsDailyPrintUsageByUserRoute,
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
  getReportsMonthlyPrintUsageByPrinterCountRoute,
  getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsMonthlyPrintUsageByPrinterRoute,
  getReportsMonthlyPrintUsageByUserCountRoute,
  getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsMonthlyPrintUsageByUserRoute,
  getReportsRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationRepeatOffendersRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationSimulationUserCoverageRoute,
  getReportsSecurityMicrosoftGraphGetAttackSimulationTrainingUserCoverageRoute,
  getReportsSecurityRoute,
  patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  patchReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  patchReportsRoute,
  patchReportsSecurityRoute,
  postReportsDailyPrintUsageByPrinterRoute,
  postReportsDailyPrintUsageByUserRoute,
  postReportsMonthlyPrintUsageByPrinterRoute,
  postReportsMonthlyPrintUsageByUserRoute,
} from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsRouteHandler: RouteHandler<typeof patchReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByPrinterRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByPrinterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsDailyPrintUsageByPrinterRouteHandler: RouteHandler<
  typeof postReportsDailyPrintUsageByPrinterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByPrinterCountRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByPrinterCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByUserRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsDailyPrintUsageByUserRouteHandler: RouteHandler<
  typeof postReportsDailyPrintUsageByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByUserCountRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsDailyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof patchReportsDailyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphDeviceConfigurationDeviceActivityRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphDeviceConfigurationDeviceActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphDeviceConfigurationUserActivityRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphDeviceConfigurationUserActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailAppUsageAppsUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailAppUsageAppsUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailAppUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailAppUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailAppUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailAppUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailAppUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailAppUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetEmailAppUsageVersionsUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetM365AppPlatformUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetM365AppPlatformUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetM365AppUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetM365AppUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetM365AppUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetM365AppUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetM365AppUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetM365AppUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetMailboxUsageDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetMailboxUsageDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetMailboxUsageMailboxCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetMailboxUsageMailboxCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetMailboxUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetMailboxUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActivationCountsRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActivationCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActivationsUserCountsRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActivationsUserCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActivationsUserDetailRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActivationsUserDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActiveUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActiveUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActiveUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActiveUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ActiveUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ActiveUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityGroupCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365GroupsActivityStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365GroupsActivityStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOffice365ServicesUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOffice365ServicesUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveUsageAccountCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveUsageAccountCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveUsageAccountDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveUsageAccountDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveUsageAccountDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveUsageAccountDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveUsageFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveUsageFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetOneDriveUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetOneDriveUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointActivityPagesPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointActivityPagesPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsageDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsageDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsageDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsageDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsageFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsageFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsagePagesPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsagePagesPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsageSiteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsageSiteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSharePointSiteUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSharePointSiteUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsUserActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsUserActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsUserActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsUserActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsUserActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsUserActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetTeamsUserActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetTeamsUserActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerGroupsActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerGroupsActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerGroupsActivityDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerGroupsActivityDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerGroupsActivityDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerGroupsActivityDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphGetYammerGroupsActivityGroupCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphGetYammerGroupsActivityGroupCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsMicrosoftGraphManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByPrinterRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByPrinterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsMonthlyPrintUsageByPrinterRouteHandler: RouteHandler<
  typeof postReportsMonthlyPrintUsageByPrinterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByPrinterCountRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByPrinterCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByUserRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsMonthlyPrintUsageByUserRouteHandler: RouteHandler<
  typeof postReportsMonthlyPrintUsageByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByUserCountRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsSecurityRouteHandler: RouteHandler<
  typeof deleteReportsSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityRouteHandler: RouteHandler<typeof getReportsSecurityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReportsSecurityRouteHandler: RouteHandler<
  typeof patchReportsSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityMicrosoftGraphGetAttackSimulationRepeatOffendersRouteHandler: RouteHandler<
  typeof getReportsSecurityMicrosoftGraphGetAttackSimulationRepeatOffendersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityMicrosoftGraphGetAttackSimulationSimulationUserCoverageRouteHandler: RouteHandler<
  typeof getReportsSecurityMicrosoftGraphGetAttackSimulationSimulationUserCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityMicrosoftGraphGetAttackSimulationTrainingUserCoverageRouteHandler: RouteHandler<
  typeof getReportsSecurityMicrosoftGraphGetAttackSimulationTrainingUserCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
