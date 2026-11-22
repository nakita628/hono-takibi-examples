import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdSettingsItemInsightsRoute,
  deleteUsersUserIdSettingsRoute,
  deleteUsersUserIdSettingsShiftPreferencesRoute,
  deleteUsersUserIdSettingsStorageQuotaRoute,
  deleteUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  deleteUsersUserIdSettingsStorageRoute,
  deleteUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  deleteUsersUserIdSettingsWindowsWindowsSettingIdRoute,
  deleteUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  deleteUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
  getUsersUserIdSettingsExchangeRoute,
  getUsersUserIdSettingsItemInsightsRoute,
  getUsersUserIdSettingsRoute,
  getUsersUserIdSettingsShiftPreferencesRoute,
  getUsersUserIdSettingsStorageQuotaRoute,
  getUsersUserIdSettingsStorageQuotaServicesCountRoute,
  getUsersUserIdSettingsStorageQuotaServicesRoute,
  getUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  getUsersUserIdSettingsStorageRoute,
  getUsersUserIdSettingsWindowsCountRoute,
  getUsersUserIdSettingsWindowsRoute,
  getUsersUserIdSettingsWindowsWindowsSettingIdInstancesCountRoute,
  getUsersUserIdSettingsWindowsWindowsSettingIdInstancesRoute,
  getUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  getUsersUserIdSettingsWindowsWindowsSettingIdRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesCountRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesCountRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
  getUsersUserIdSettingsWorkHoursAndLocationsRoute,
  patchUsersUserIdSettingsItemInsightsRoute,
  patchUsersUserIdSettingsRoute,
  patchUsersUserIdSettingsShiftPreferencesRoute,
  patchUsersUserIdSettingsStorageQuotaRoute,
  patchUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  patchUsersUserIdSettingsStorageRoute,
  patchUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  patchUsersUserIdSettingsWindowsWindowsSettingIdRoute,
  patchUsersUserIdSettingsWorkHoursAndLocationsRoute,
  postUsersUserIdSettingsStorageQuotaServicesRoute,
  postUsersUserIdSettingsWindowsRoute,
  postUsersUserIdSettingsWindowsWindowsSettingIdInstancesRoute,
  postUsersUserIdSettingsWorkHoursAndLocationsOccurrencesRoute,
  postUsersUserIdSettingsWorkHoursAndLocationsOccurrencesSetCurrentLocationRoute,
  postUsersUserIdSettingsWorkHoursAndLocationsRecurrencesRoute,
  putUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  putUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserSettingsHandler = app
  .openapi(getUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsStorageQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsStorageQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdSettingsStorageQuotaServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWindowsWindowsSettingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsWindowsWindowsSettingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdSettingsWindowsWindowsSettingIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWindowsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsWorkHoursAndLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsWorkHoursAndLocationsOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsOccurrencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsWorkHoursAndLocationsOccurrencesSetCurrentLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsWorkHoursAndLocationsRecurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdSettingsWorkHoursAndLocationsRecurrencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
