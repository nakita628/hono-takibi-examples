import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsAuthenticationMethodsRoute,
  deleteReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  deleteReportsPartnersBillingAggregatedUsageBilledRoute,
  deleteReportsPartnersBillingAggregatedUsageRoute,
  deleteReportsPartnersBillingManifestsManifestIdRoute,
  deleteReportsPartnersBillingOperationsOperationIdRoute,
  deleteReportsPartnersBillingReconciliationBilledRoute,
  deleteReportsPartnersBillingReconciliationRoute,
  deleteReportsPartnersBillingReconciliationUnbilledRoute,
  deleteReportsPartnersBillingRoute,
  deleteReportsPartnersBillingUsageBilledRoute,
  deleteReportsPartnersBillingUsageRoute,
  deleteReportsPartnersBillingUsageUnbilledRoute,
  deleteReportsPartnersRoute,
  deleteReportsSecurityRoute,
  getReportsAuthenticationMethodsRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsCountRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  getReportsAuthenticationMethodsUsersRegisteredByFeatureIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
  getReportsAuthenticationMethodsUsersRegisteredByFeatureRoute,
  getReportsAuthenticationMethodsUsersRegisteredByMethodIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
  getReportsAuthenticationMethodsUsersRegisteredByMethodRoute,
  getReportsDailyPrintUsageByPrinterCountRoute,
  getReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsDailyPrintUsageByPrinterRoute,
  getReportsDailyPrintUsageByUserCountRoute,
  getReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsDailyPrintUsageByUserRoute,
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
  getReportsMonthlyPrintUsageByPrinterCountRoute,
  getReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  getReportsMonthlyPrintUsageByPrinterRoute,
  getReportsMonthlyPrintUsageByUserCountRoute,
  getReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  getReportsMonthlyPrintUsageByUserRoute,
  getReportsPartnersBillingAggregatedUsageBilledRoute,
  getReportsPartnersBillingAggregatedUsageRoute,
  getReportsPartnersBillingManifestsCountRoute,
  getReportsPartnersBillingManifestsManifestIdRoute,
  getReportsPartnersBillingManifestsRoute,
  getReportsPartnersBillingOperationsCountRoute,
  getReportsPartnersBillingOperationsOperationIdRoute,
  getReportsPartnersBillingOperationsRoute,
  getReportsPartnersBillingReconciliationBilledRoute,
  getReportsPartnersBillingReconciliationRoute,
  getReportsPartnersBillingReconciliationUnbilledRoute,
  getReportsPartnersBillingRoute,
  getReportsPartnersBillingUsageBilledRoute,
  getReportsPartnersBillingUsageRoute,
  getReportsPartnersBillingUsageUnbilledRoute,
  getReportsPartnersRoute,
  getReportsRoute,
  getReportsSecurityGetAttackSimulationRepeatOffendersRoute,
  getReportsSecurityGetAttackSimulationSimulationUserCoverageRoute,
  getReportsSecurityGetAttackSimulationTrainingUserCoverageRoute,
  getReportsSecurityRoute,
  patchReportsAuthenticationMethodsRoute,
  patchReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  patchReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  patchReportsDailyPrintUsageByUserPrintUsageByUserIdRoute,
  patchReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute,
  patchReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute,
  patchReportsPartnersBillingAggregatedUsageBilledRoute,
  patchReportsPartnersBillingAggregatedUsageRoute,
  patchReportsPartnersBillingManifestsManifestIdRoute,
  patchReportsPartnersBillingOperationsOperationIdRoute,
  patchReportsPartnersBillingReconciliationBilledRoute,
  patchReportsPartnersBillingReconciliationRoute,
  patchReportsPartnersBillingReconciliationUnbilledRoute,
  patchReportsPartnersBillingRoute,
  patchReportsPartnersBillingUsageBilledRoute,
  patchReportsPartnersBillingUsageRoute,
  patchReportsPartnersBillingUsageUnbilledRoute,
  patchReportsPartnersRoute,
  patchReportsRoute,
  patchReportsSecurityRoute,
  postReportsAuthenticationMethodsUserRegistrationDetailsRoute,
  postReportsDailyPrintUsageByPrinterRoute,
  postReportsDailyPrintUsageByUserRoute,
  postReportsMonthlyPrintUsageByPrinterRoute,
  postReportsMonthlyPrintUsageByUserRoute,
  postReportsPartnersBillingAggregatedUsageBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingManifestsRoute,
  postReportsPartnersBillingOperationsRoute,
  postReportsPartnersBillingReconciliationBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingReconciliationUnbilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingUsageBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingUsageUnbilledMicrosoftGraphPartnersBillingExportRoute,
} from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsRouteHandler: RouteHandler<typeof patchReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsAuthenticationMethodsRouteHandler: RouteHandler<
  typeof patchReportsAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsAuthenticationMethodsRouteHandler: RouteHandler<
  typeof deleteReportsAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUsersRegisteredByFeatureRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUsersRegisteredByFeatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUsersRegisteredByFeatureIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUsersRegisteredByFeatureIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUsersRegisteredByMethodRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUsersRegisteredByMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUsersRegisteredByMethodIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUsersRegisteredByMethodIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUserRegistrationDetailsRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUserRegistrationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsAuthenticationMethodsUserRegistrationDetailsRouteHandler: RouteHandler<
  typeof postReportsAuthenticationMethodsUserRegistrationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRouteHandler: RouteHandler<
  typeof patchReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRouteHandler: RouteHandler<
  typeof deleteReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAuthenticationMethodsUserRegistrationDetailsCountRouteHandler: RouteHandler<
  typeof getReportsAuthenticationMethodsUserRegistrationDetailsCountRoute
> = async (c) => {
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

export const deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof deleteReportsDailyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByPrinterCountRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByPrinterCountRoute
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

export const deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof deleteReportsDailyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDailyPrintUsageByUserCountRouteHandler: RouteHandler<
  typeof getReportsDailyPrintUsageByUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDeviceConfigurationDeviceActivityRouteHandler: RouteHandler<
  typeof getReportsDeviceConfigurationDeviceActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDeviceConfigurationUserActivityRouteHandler: RouteHandler<
  typeof getReportsDeviceConfigurationUserActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetEmailActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailAppUsageAppsUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailAppUsageAppsUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailAppUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailAppUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailAppUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetEmailAppUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailAppUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailAppUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetEmailAppUsageVersionsUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetEmailAppUsageVersionsUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsGetGroupArchivedPrintJobsGroupIdGroupIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetM365AppPlatformUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetM365AppPlatformUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetM365AppUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetM365AppUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetM365AppUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetM365AppUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetM365AppUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetM365AppUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetMailboxUsageDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetMailboxUsageDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetMailboxUsageMailboxCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetMailboxUsageMailboxCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetMailboxUsageQuotaStatusMailboxCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetMailboxUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetMailboxUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActivationCountsRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActivationCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActivationsUserCountsRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActivationsUserCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActivationsUserDetailRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActivationsUserDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActiveUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActiveUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActiveUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActiveUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ActiveUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ActiveUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityGroupCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityGroupCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365GroupsActivityStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365GroupsActivityStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOffice365ServicesUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOffice365ServicesUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveUsageAccountCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveUsageAccountCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveUsageAccountDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveUsageAccountDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveUsageAccountDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveUsageAccountDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveUsageFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveUsageFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetOneDriveUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetOneDriveUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsGetPrinterArchivedPrintJobsPrinterIdPrinterIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetRelyingPartyDetailedSummaryPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetRelyingPartyDetailedSummaryPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointActivityFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointActivityFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointActivityPagesPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointActivityPagesPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetSharePointActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsageDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsageDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsageDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsageDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsageFileCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsageFileCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsagePagesPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsagePagesPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsageSiteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsageSiteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSharePointSiteUsageStoragePeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSharePointSiteUsageStoragePeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessOrganizerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessOrganizerActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessOrganizerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessParticipantActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessParticipantActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessParticipantActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessPeerToPeerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessPeerToPeerActivityMinuteCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetSkypeForBusinessPeerToPeerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetTeamsDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsTeamActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsTeamActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsTeamActivityDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetTeamsTeamActivityDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsTeamActivityDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsTeamActivityDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsTeamActivityDistributionCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsTeamActivityDistributionCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsTeamCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsTeamCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsUserActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsUserActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsUserActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsUserActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsUserActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetTeamsUserActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetTeamsUserActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetTeamsUserActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getReportsGetUserArchivedPrintJobsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerActivityUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerActivityUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerActivityUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetYammerActivityUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerActivityUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerActivityUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerDeviceUsageDistributionUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerDeviceUsageUserCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerDeviceUsageUserCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerDeviceUsageUserDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetYammerDeviceUsageUserDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerDeviceUsageUserDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerDeviceUsageUserDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerGroupsActivityCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerGroupsActivityCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerGroupsActivityDetailDateDateRouteHandler: RouteHandler<
  typeof getReportsGetYammerGroupsActivityDetailDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerGroupsActivityDetailPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerGroupsActivityDetailPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsGetYammerGroupsActivityGroupCountsPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsGetYammerGroupsActivityGroupCountsPeriodPeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsManagedDeviceEnrollmentFailureDetailsRouteHandler: RouteHandler<
  typeof getReportsManagedDeviceEnrollmentFailureDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRouteHandler: RouteHandler<
  typeof getReportsManagedDeviceEnrollmentFailureDetailsSkipSkipTopTopFilterFilterSkipTokenSkipTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsManagedDeviceEnrollmentTopFailuresRouteHandler: RouteHandler<
  typeof getReportsManagedDeviceEnrollmentTopFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsManagedDeviceEnrollmentTopFailuresPeriodPeriodRouteHandler: RouteHandler<
  typeof getReportsManagedDeviceEnrollmentTopFailuresPeriodPeriodRoute
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

export const deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRouteHandler: RouteHandler<
  typeof deleteReportsMonthlyPrintUsageByPrinterPrintUsageByPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByPrinterCountRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByPrinterCountRoute
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

export const deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRouteHandler: RouteHandler<
  typeof deleteReportsMonthlyPrintUsageByUserPrintUsageByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsMonthlyPrintUsageByUserCountRouteHandler: RouteHandler<
  typeof getReportsMonthlyPrintUsageByUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersRouteHandler: RouteHandler<typeof getReportsPartnersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersRouteHandler: RouteHandler<
  typeof patchReportsPartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersRouteHandler: RouteHandler<
  typeof deleteReportsPartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingAggregatedUsageRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingAggregatedUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingAggregatedUsageRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingAggregatedUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingAggregatedUsageRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingAggregatedUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingAggregatedUsageBilledRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingAggregatedUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingAggregatedUsageBilledRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingAggregatedUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingAggregatedUsageBilledRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingAggregatedUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingAggregatedUsageBilledMicrosoftGraphPartnersBillingExportRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingAggregatedUsageBilledMicrosoftGraphPartnersBillingExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingManifestsRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingManifestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingManifestsRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingManifestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingManifestsManifestIdRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingManifestsManifestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingManifestsManifestIdRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingManifestsManifestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingManifestsManifestIdRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingManifestsManifestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingManifestsCountRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingManifestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingOperationsRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingOperationsRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingOperationsOperationIdRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingOperationsOperationIdRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingOperationsOperationIdRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingOperationsCountRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingReconciliationRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingReconciliationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingReconciliationRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingReconciliationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingReconciliationRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingReconciliationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingReconciliationBilledRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingReconciliationBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingReconciliationBilledRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingReconciliationBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingReconciliationBilledRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingReconciliationBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingReconciliationBilledMicrosoftGraphPartnersBillingExportRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingReconciliationBilledMicrosoftGraphPartnersBillingExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingReconciliationUnbilledRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingReconciliationUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingReconciliationUnbilledRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingReconciliationUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingReconciliationUnbilledRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingReconciliationUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingReconciliationUnbilledMicrosoftGraphPartnersBillingExportRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingReconciliationUnbilledMicrosoftGraphPartnersBillingExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingUsageRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingUsageRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingUsageRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingUsageBilledRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingUsageBilledRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingUsageBilledRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingUsageBilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingUsageBilledMicrosoftGraphPartnersBillingExportRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingUsageBilledMicrosoftGraphPartnersBillingExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsPartnersBillingUsageUnbilledRouteHandler: RouteHandler<
  typeof getReportsPartnersBillingUsageUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReportsPartnersBillingUsageUnbilledRouteHandler: RouteHandler<
  typeof patchReportsPartnersBillingUsageUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsPartnersBillingUsageUnbilledRouteHandler: RouteHandler<
  typeof deleteReportsPartnersBillingUsageUnbilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsPartnersBillingUsageUnbilledMicrosoftGraphPartnersBillingExportRouteHandler: RouteHandler<
  typeof postReportsPartnersBillingUsageUnbilledMicrosoftGraphPartnersBillingExportRoute
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

export const deleteReportsSecurityRouteHandler: RouteHandler<
  typeof deleteReportsSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityGetAttackSimulationRepeatOffendersRouteHandler: RouteHandler<
  typeof getReportsSecurityGetAttackSimulationRepeatOffendersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityGetAttackSimulationSimulationUserCoverageRouteHandler: RouteHandler<
  typeof getReportsSecurityGetAttackSimulationSimulationUserCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSecurityGetAttackSimulationTrainingUserCoverageRouteHandler: RouteHandler<
  typeof getReportsSecurityGetAttackSimulationTrainingUserCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
