import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeSettingsItemInsightsRoute,
  deleteMeSettingsRoute,
  deleteMeSettingsShiftPreferencesRoute,
  deleteMeSettingsStorageQuotaRoute,
  deleteMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  deleteMeSettingsStorageRoute,
  deleteMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  deleteMeSettingsWindowsWindowsSettingIdRoute,
  deleteMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  deleteMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
  getMeSettingsExchangeRoute,
  getMeSettingsItemInsightsRoute,
  getMeSettingsRoute,
  getMeSettingsShiftPreferencesRoute,
  getMeSettingsStorageQuotaRoute,
  getMeSettingsStorageQuotaServicesCountRoute,
  getMeSettingsStorageQuotaServicesRoute,
  getMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  getMeSettingsStorageRoute,
  getMeSettingsWindowsCountRoute,
  getMeSettingsWindowsRoute,
  getMeSettingsWindowsWindowsSettingIdInstancesCountRoute,
  getMeSettingsWindowsWindowsSettingIdInstancesRoute,
  getMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  getMeSettingsWindowsWindowsSettingIdRoute,
  getMeSettingsWorkHoursAndLocationsOccurrencesCountRoute,
  getMeSettingsWorkHoursAndLocationsOccurrencesRoute,
  getMeSettingsWorkHoursAndLocationsOccurrencesViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  getMeSettingsWorkHoursAndLocationsRecurrencesCountRoute,
  getMeSettingsWorkHoursAndLocationsRecurrencesRoute,
  getMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
  getMeSettingsWorkHoursAndLocationsRoute,
  patchMeSettingsItemInsightsRoute,
  patchMeSettingsRoute,
  patchMeSettingsShiftPreferencesRoute,
  patchMeSettingsStorageQuotaRoute,
  patchMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  patchMeSettingsStorageRoute,
  patchMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute,
  patchMeSettingsWindowsWindowsSettingIdRoute,
  patchMeSettingsWorkHoursAndLocationsRoute,
  postMeSettingsStorageQuotaServicesRoute,
  postMeSettingsWindowsRoute,
  postMeSettingsWindowsWindowsSettingIdInstancesRoute,
  postMeSettingsWorkHoursAndLocationsOccurrencesRoute,
  postMeSettingsWorkHoursAndLocationsOccurrencesSetCurrentLocationRoute,
  postMeSettingsWorkHoursAndLocationsRecurrencesRoute,
  putMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute,
  putMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserSettingsHandler = app
  .openapi(getMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsStorageQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsStorageQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsStorageQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsStorageQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsStorageQuotaServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsWindowsWindowsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsWindowsSettingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsWindowsWindowsSettingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsWindowsWindowsSettingIdInstancesWindowsSettingInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsWindowsSettingIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWindowsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsWorkHoursAndLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeSettingsWorkHoursAndLocationsOccurrencesViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeSettingsWorkHoursAndLocationsOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsWorkHoursAndLocationsOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsWorkHoursAndLocationsOccurrencesWorkPlanOccurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsOccurrencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsWorkHoursAndLocationsOccurrencesSetCurrentLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsRecurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSettingsWorkHoursAndLocationsRecurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsWorkHoursAndLocationsRecurrencesWorkPlanRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsWorkHoursAndLocationsRecurrencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
