import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const setupHandler = app
  .openapi(getSetupV1AppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1AppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1AppointmentsIdReassignResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1BusinessusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersEmailCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CalendarsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CalendarsIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesTimezonesDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CustomersIdPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdAppointmentremindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdAppointmentremindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdDeleteallimagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdGoogleServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdGoogleServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdHolidaysHolidayIdClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdSettingsScopeSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcegroupsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesTimezonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicegroupsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdAllocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })
