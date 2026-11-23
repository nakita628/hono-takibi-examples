import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSetupV1BusinessusersIdRoute,
  deleteSetupV1CalendarsBlockIdRoute,
  deleteSetupV1CalendarsIdRoute,
  deleteSetupV1CompaniesDomainsIdRoute,
  deleteSetupV1CompaniesEmailTemplatesMasterRoute,
  deleteSetupV1CompaniesRegionsIdRoute,
  deleteSetupV1LocationsIdDeleteallimagesRoute,
  deleteSetupV1LocationsIdDeleteimageRoute,
  deleteSetupV1LocationsIdEmailTemplatesMasterRoute,
  deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
  deleteSetupV1LocationsIdGoogleServiceAccountRoute,
  deleteSetupV1LocationsIdRoute,
  deleteSetupV1LocationsIdServicesRoute,
  deleteSetupV1LocationsServicesIdRoute,
  deleteSetupV1ResourcegroupsIdRoute,
  deleteSetupV1ResourcesAllocationsIdRoute,
  deleteSetupV1ResourcesBlockIdRoute,
  deleteSetupV1ResourcesIdDeleteimageRoute,
  deleteSetupV1ResourcesIdRoute,
  deleteSetupV1ResourcesIdServicesRoute,
  deleteSetupV1ServicegroupsIdRoute,
  deleteSetupV1ServicesAllocationsIdRoute,
  deleteSetupV1ServicesBlockIdRoute,
  deleteSetupV1ServicesCalendarIdRoute,
  deleteSetupV1ServicesIdDeleteimageRoute,
  deleteSetupV1ServicesIdRoute,
  getSetupV1AppointmentsIdRoute,
  getSetupV1AppointmentsRoute,
  getSetupV1BusinessusersEmailCompaniesRoute,
  getSetupV1BusinessusersIdRoute,
  getSetupV1BusinessusersPermissionsRoute,
  getSetupV1BusinessusersRoute,
  getSetupV1CalendarsBlocksIdRoute,
  getSetupV1CalendarsIdBlocksRoute,
  getSetupV1CalendarsIdRoute,
  getSetupV1CalendarsIdServicesRoute,
  getSetupV1CalendarsRoute,
  getSetupV1CompaniesDomainsIdRoute,
  getSetupV1CompaniesDomainsRoute,
  getSetupV1CompaniesEmailTemplatesMasterRoute,
  getSetupV1CompaniesEmailTemplatesRoute,
  getSetupV1CompaniesEmailTemplatesTemplateNameRoute,
  getSetupV1CompaniesRegionsIdRoute,
  getSetupV1CompaniesRegionsRoute,
  getSetupV1CompaniesRoute,
  getSetupV1CompaniesTimezonesDateRoute,
  getSetupV1CustomersIdPrivacyRoute,
  getSetupV1CustomersIdRoute,
  getSetupV1CustomersRoute,
  getSetupV1LocationsIdAppointmentremindersRoute,
  getSetupV1LocationsIdEmailTemplatesMasterRoute,
  getSetupV1LocationsIdEmailTemplatesRoute,
  getSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
  getSetupV1LocationsIdRoute,
  getSetupV1LocationsIdServicesRoute,
  getSetupV1LocationsRoute,
  getSetupV1LocationsServicesIdRoute,
  getSetupV1ResourcegroupsIdRoute,
  getSetupV1ResourcegroupsRoute,
  getSetupV1ResourcesAllocationsIdRoute,
  getSetupV1ResourcesBlocksIdRoute,
  getSetupV1ResourcesIdAllocationsRoute,
  getSetupV1ResourcesIdAvailabilityRoute,
  getSetupV1ResourcesIdBlocksRoute,
  getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute,
  getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute,
  getSetupV1ResourcesIdRoute,
  getSetupV1ResourcesRoute,
  getSetupV1ResourcesTimezonesRoute,
  getSetupV1ServicegroupsIdRoute,
  getSetupV1ServicegroupsRoute,
  getSetupV1ServicesAllocationsIdRoute,
  getSetupV1ServicesBlocksIdRoute,
  getSetupV1ServicesIdAllocationsRoute,
  getSetupV1ServicesIdAvailabilityRoute,
  getSetupV1ServicesIdBlocksRoute,
  getSetupV1ServicesIdCalendarRoute,
  getSetupV1ServicesIdResourcesRoute,
  getSetupV1ServicesIdRoute,
  getSetupV1ServicesRoute,
  postSetupV1BusinessusersRoute,
  postSetupV1CalendarsIdBlockRoute,
  postSetupV1CalendarsRoute,
  postSetupV1CompaniesDomainsRoute,
  postSetupV1CompaniesEmailTemplatesMasterRoute,
  postSetupV1CompaniesRegionsRoute,
  postSetupV1CompaniesRoute,
  postSetupV1LocationsBulkRoute,
  postSetupV1LocationsIdEmailTemplatesMasterRoute,
  postSetupV1LocationsIdEmailTemplatesRoute,
  postSetupV1LocationsIdGoogleServiceAccountRoute,
  postSetupV1LocationsIdServicesRoute,
  postSetupV1LocationsIdUploadimageRoute,
  postSetupV1LocationsRoute,
  postSetupV1ResourcegroupsRoute,
  postSetupV1ResourcesBulkRoute,
  postSetupV1ResourcesIdAllocationsRoute,
  postSetupV1ResourcesIdBlockRoute,
  postSetupV1ResourcesIdServicesRoute,
  postSetupV1ResourcesIdUploadimageRoute,
  postSetupV1ResourcesRoute,
  postSetupV1ServicegroupsRoute,
  postSetupV1ServicesCalendarRoute,
  postSetupV1ServicesIdAllocationsBulkRoute,
  postSetupV1ServicesIdAllocationsRoute,
  postSetupV1ServicesIdBlockRoute,
  postSetupV1ServicesIdUploadimageRoute,
  postSetupV1ServicesRoute,
  putSetupV1AppointmentsIdReassignResourceResourceIdRoute,
  putSetupV1BusinessusersIdRoute,
  putSetupV1CalendarsBlockIdRoute,
  putSetupV1CalendarsIdRecoverRoute,
  putSetupV1CalendarsIdRoute,
  putSetupV1CompaniesDomainsIdRoute,
  putSetupV1CompaniesRegionsIdRoute,
  putSetupV1CompaniesRoute,
  putSetupV1LocationsIdAppointmentremindersRoute,
  putSetupV1LocationsIdHolidaysHolidayIdClosedRoute,
  putSetupV1LocationsIdRecoverRoute,
  putSetupV1LocationsIdRoute,
  putSetupV1LocationsIdSettingsScopeSettingsScopeRoute,
  putSetupV1ResourcegroupsIdRecoverRoute,
  putSetupV1ResourcegroupsIdRoute,
  putSetupV1ResourcesAllocationsIdRoute,
  putSetupV1ResourcesBlockIdRoute,
  putSetupV1ResourcesBulkRoute,
  putSetupV1ResourcesIdAvailabilityRoute,
  putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute,
  putSetupV1ResourcesIdRecoverRoute,
  putSetupV1ResourcesIdRoute,
  putSetupV1ResourcesIdServicesRoute,
  putSetupV1ServicegroupsIdRecoverRoute,
  putSetupV1ServicegroupsIdRoute,
  putSetupV1ServicesAllocationsIdRoute,
  putSetupV1ServicesBlockIdRoute,
  putSetupV1ServicesIdAvailabilityRoute,
  putSetupV1ServicesIdRecoverRoute,
  putSetupV1ServicesIdRoute,
} from '../routes'

export const getSetupV1AppointmentsRouteHandler: RouteHandler<
  typeof getSetupV1AppointmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1AppointmentsIdRouteHandler: RouteHandler<
  typeof getSetupV1AppointmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1AppointmentsIdReassignResourceResourceIdRouteHandler: RouteHandler<
  typeof putSetupV1AppointmentsIdReassignResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1BusinessusersRouteHandler: RouteHandler<
  typeof getSetupV1BusinessusersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1BusinessusersRouteHandler: RouteHandler<
  typeof postSetupV1BusinessusersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1BusinessusersPermissionsRouteHandler: RouteHandler<
  typeof getSetupV1BusinessusersPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1BusinessusersEmailCompaniesRouteHandler: RouteHandler<
  typeof getSetupV1BusinessusersEmailCompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1BusinessusersIdRouteHandler: RouteHandler<
  typeof deleteSetupV1BusinessusersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1BusinessusersIdRouteHandler: RouteHandler<
  typeof getSetupV1BusinessusersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1BusinessusersIdRouteHandler: RouteHandler<
  typeof putSetupV1BusinessusersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CalendarsRouteHandler: RouteHandler<
  typeof getSetupV1CalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CalendarsRouteHandler: RouteHandler<
  typeof postSetupV1CalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1CalendarsBlockIdRouteHandler: RouteHandler<
  typeof deleteSetupV1CalendarsBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CalendarsBlockIdRouteHandler: RouteHandler<
  typeof putSetupV1CalendarsBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CalendarsBlocksIdRouteHandler: RouteHandler<
  typeof getSetupV1CalendarsBlocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1CalendarsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1CalendarsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CalendarsIdRouteHandler: RouteHandler<
  typeof getSetupV1CalendarsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CalendarsIdRouteHandler: RouteHandler<
  typeof putSetupV1CalendarsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CalendarsIdBlockRouteHandler: RouteHandler<
  typeof postSetupV1CalendarsIdBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CalendarsIdBlocksRouteHandler: RouteHandler<
  typeof getSetupV1CalendarsIdBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CalendarsIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1CalendarsIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CalendarsIdServicesRouteHandler: RouteHandler<
  typeof getSetupV1CalendarsIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CompaniesRouteHandler: RouteHandler<
  typeof postSetupV1CompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CompaniesRouteHandler: RouteHandler<
  typeof putSetupV1CompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesDomainsRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CompaniesDomainsRouteHandler: RouteHandler<
  typeof postSetupV1CompaniesDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1CompaniesDomainsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1CompaniesDomainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesDomainsIdRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesDomainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CompaniesDomainsIdRouteHandler: RouteHandler<
  typeof putSetupV1CompaniesDomainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesEmailTemplatesRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesEmailTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1CompaniesEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof deleteSetupV1CompaniesEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CompaniesEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof postSetupV1CompaniesEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesEmailTemplatesTemplateNameRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesEmailTemplatesTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesRegionsRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1CompaniesRegionsRouteHandler: RouteHandler<
  typeof postSetupV1CompaniesRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1CompaniesRegionsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1CompaniesRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesRegionsIdRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1CompaniesRegionsIdRouteHandler: RouteHandler<
  typeof putSetupV1CompaniesRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CompaniesTimezonesDateRouteHandler: RouteHandler<
  typeof getSetupV1CompaniesTimezonesDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CustomersRouteHandler: RouteHandler<
  typeof getSetupV1CustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CustomersIdRouteHandler: RouteHandler<
  typeof getSetupV1CustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1CustomersIdPrivacyRouteHandler: RouteHandler<
  typeof getSetupV1CustomersIdPrivacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsRouteHandler: RouteHandler<
  typeof getSetupV1LocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsRouteHandler: RouteHandler<
  typeof postSetupV1LocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsBulkRouteHandler: RouteHandler<
  typeof postSetupV1LocationsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsServicesIdRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsServicesIdRouteHandler: RouteHandler<
  typeof getSetupV1LocationsServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1LocationsIdRouteHandler: RouteHandler<
  typeof putSetupV1LocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdAppointmentremindersRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdAppointmentremindersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1LocationsIdAppointmentremindersRouteHandler: RouteHandler<
  typeof putSetupV1LocationsIdAppointmentremindersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdDeleteallimagesRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdDeleteallimagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdDeleteimageRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdDeleteimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdEmailTemplatesRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdEmailTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsIdEmailTemplatesRouteHandler: RouteHandler<
  typeof postSetupV1LocationsIdEmailTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsIdEmailTemplatesMasterRouteHandler: RouteHandler<
  typeof postSetupV1LocationsIdEmailTemplatesMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdEmailTemplatesTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdGoogleServiceAccountRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdGoogleServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsIdGoogleServiceAccountRouteHandler: RouteHandler<
  typeof postSetupV1LocationsIdGoogleServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1LocationsIdHolidaysHolidayIdClosedRouteHandler: RouteHandler<
  typeof putSetupV1LocationsIdHolidaysHolidayIdClosedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1LocationsIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1LocationsIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1LocationsIdServicesRouteHandler: RouteHandler<
  typeof deleteSetupV1LocationsIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1LocationsIdServicesRouteHandler: RouteHandler<
  typeof getSetupV1LocationsIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsIdServicesRouteHandler: RouteHandler<
  typeof postSetupV1LocationsIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1LocationsIdSettingsScopeSettingsScopeRouteHandler: RouteHandler<
  typeof putSetupV1LocationsIdSettingsScopeSettingsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1LocationsIdUploadimageRouteHandler: RouteHandler<
  typeof postSetupV1LocationsIdUploadimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcegroupsRouteHandler: RouteHandler<
  typeof getSetupV1ResourcegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcegroupsRouteHandler: RouteHandler<
  typeof postSetupV1ResourcegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcegroupsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcegroupsIdRouteHandler: RouteHandler<
  typeof getSetupV1ResourcegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcegroupsIdRouteHandler: RouteHandler<
  typeof putSetupV1ResourcegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcegroupsIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1ResourcegroupsIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcesAllocationsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesAllocationsIdRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesAllocationsIdRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcesBlockIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcesBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesBlockIdRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesBlocksIdRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesBlocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesBulkRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesBulkRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesTimezonesRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesTimezonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcesIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesIdRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdAllocationsRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesIdAllocationsRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesIdAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdAvailabilityRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesIdAvailabilityRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesIdAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesIdBlockRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesIdBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdBlocksRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRouteHandler: RouteHandler<
  typeof getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcesIdDeleteimageRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcesIdDeleteimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesIdReassignAppointmentsResourceIdRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ResourcesIdServicesRouteHandler: RouteHandler<
  typeof deleteSetupV1ResourcesIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesIdServicesRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ResourcesIdServicesRouteHandler: RouteHandler<
  typeof putSetupV1ResourcesIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ResourcesIdUploadimageRouteHandler: RouteHandler<
  typeof postSetupV1ResourcesIdUploadimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicegroupsRouteHandler: RouteHandler<
  typeof getSetupV1ServicegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicegroupsRouteHandler: RouteHandler<
  typeof postSetupV1ServicegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicegroupsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicegroupsIdRouteHandler: RouteHandler<
  typeof getSetupV1ServicegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicegroupsIdRouteHandler: RouteHandler<
  typeof putSetupV1ServicegroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicegroupsIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1ServicegroupsIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesRouteHandler: RouteHandler<typeof getSetupV1ServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesRouteHandler: RouteHandler<
  typeof postSetupV1ServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicesAllocationsIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesAllocationsIdRouteHandler: RouteHandler<
  typeof getSetupV1ServicesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicesAllocationsIdRouteHandler: RouteHandler<
  typeof putSetupV1ServicesAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicesBlockIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicesBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicesBlockIdRouteHandler: RouteHandler<
  typeof putSetupV1ServicesBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesBlocksIdRouteHandler: RouteHandler<
  typeof getSetupV1ServicesBlocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesCalendarRouteHandler: RouteHandler<
  typeof postSetupV1ServicesCalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicesCalendarIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicesCalendarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicesIdRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicesIdRouteHandler: RouteHandler<
  typeof putSetupV1ServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdAllocationsRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesIdAllocationsRouteHandler: RouteHandler<
  typeof postSetupV1ServicesIdAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesIdAllocationsBulkRouteHandler: RouteHandler<
  typeof postSetupV1ServicesIdAllocationsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdAvailabilityRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicesIdAvailabilityRouteHandler: RouteHandler<
  typeof putSetupV1ServicesIdAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesIdBlockRouteHandler: RouteHandler<
  typeof postSetupV1ServicesIdBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdBlocksRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdCalendarRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdCalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSetupV1ServicesIdDeleteimageRouteHandler: RouteHandler<
  typeof deleteSetupV1ServicesIdDeleteimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSetupV1ServicesIdRecoverRouteHandler: RouteHandler<
  typeof putSetupV1ServicesIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetupV1ServicesIdResourcesRouteHandler: RouteHandler<
  typeof getSetupV1ServicesIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupV1ServicesIdUploadimageRouteHandler: RouteHandler<
  typeof postSetupV1ServicesIdUploadimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
