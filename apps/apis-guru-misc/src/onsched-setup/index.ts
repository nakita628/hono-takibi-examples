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
} from './routes'
import {
  deleteSetupV1BusinessusersIdRouteHandler,
  deleteSetupV1CalendarsBlockIdRouteHandler,
  deleteSetupV1CalendarsIdRouteHandler,
  deleteSetupV1CompaniesDomainsIdRouteHandler,
  deleteSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  deleteSetupV1CompaniesRegionsIdRouteHandler,
  deleteSetupV1LocationsIdDeleteallimagesRouteHandler,
  deleteSetupV1LocationsIdDeleteimageRouteHandler,
  deleteSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  deleteSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler,
  deleteSetupV1LocationsIdGoogleServiceAccountRouteHandler,
  deleteSetupV1LocationsIdRouteHandler,
  deleteSetupV1LocationsIdServicesRouteHandler,
  deleteSetupV1LocationsServicesIdRouteHandler,
  deleteSetupV1ResourcegroupsIdRouteHandler,
  deleteSetupV1ResourcesAllocationsIdRouteHandler,
  deleteSetupV1ResourcesBlockIdRouteHandler,
  deleteSetupV1ResourcesIdDeleteimageRouteHandler,
  deleteSetupV1ResourcesIdRouteHandler,
  deleteSetupV1ResourcesIdServicesRouteHandler,
  deleteSetupV1ServicegroupsIdRouteHandler,
  deleteSetupV1ServicesAllocationsIdRouteHandler,
  deleteSetupV1ServicesBlockIdRouteHandler,
  deleteSetupV1ServicesCalendarIdRouteHandler,
  deleteSetupV1ServicesIdDeleteimageRouteHandler,
  deleteSetupV1ServicesIdRouteHandler,
  getSetupV1AppointmentsIdRouteHandler,
  getSetupV1AppointmentsRouteHandler,
  getSetupV1BusinessusersEmailCompaniesRouteHandler,
  getSetupV1BusinessusersIdRouteHandler,
  getSetupV1BusinessusersPermissionsRouteHandler,
  getSetupV1BusinessusersRouteHandler,
  getSetupV1CalendarsBlocksIdRouteHandler,
  getSetupV1CalendarsIdBlocksRouteHandler,
  getSetupV1CalendarsIdRouteHandler,
  getSetupV1CalendarsIdServicesRouteHandler,
  getSetupV1CalendarsRouteHandler,
  getSetupV1CompaniesDomainsIdRouteHandler,
  getSetupV1CompaniesDomainsRouteHandler,
  getSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  getSetupV1CompaniesEmailTemplatesRouteHandler,
  getSetupV1CompaniesEmailTemplatesTemplateNameRouteHandler,
  getSetupV1CompaniesRegionsIdRouteHandler,
  getSetupV1CompaniesRegionsRouteHandler,
  getSetupV1CompaniesRouteHandler,
  getSetupV1CompaniesTimezonesDateRouteHandler,
  getSetupV1CustomersIdPrivacyRouteHandler,
  getSetupV1CustomersIdRouteHandler,
  getSetupV1CustomersRouteHandler,
  getSetupV1LocationsIdAppointmentremindersRouteHandler,
  getSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  getSetupV1LocationsIdEmailTemplatesRouteHandler,
  getSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler,
  getSetupV1LocationsIdRouteHandler,
  getSetupV1LocationsIdServicesRouteHandler,
  getSetupV1LocationsRouteHandler,
  getSetupV1LocationsServicesIdRouteHandler,
  getSetupV1ResourcegroupsIdRouteHandler,
  getSetupV1ResourcegroupsRouteHandler,
  getSetupV1ResourcesAllocationsIdRouteHandler,
  getSetupV1ResourcesBlocksIdRouteHandler,
  getSetupV1ResourcesIdAllocationsRouteHandler,
  getSetupV1ResourcesIdAvailabilityRouteHandler,
  getSetupV1ResourcesIdBlocksRouteHandler,
  getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRouteHandler,
  getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRouteHandler,
  getSetupV1ResourcesIdRouteHandler,
  getSetupV1ResourcesRouteHandler,
  getSetupV1ResourcesTimezonesRouteHandler,
  getSetupV1ServicegroupsIdRouteHandler,
  getSetupV1ServicegroupsRouteHandler,
  getSetupV1ServicesAllocationsIdRouteHandler,
  getSetupV1ServicesBlocksIdRouteHandler,
  getSetupV1ServicesIdAllocationsRouteHandler,
  getSetupV1ServicesIdAvailabilityRouteHandler,
  getSetupV1ServicesIdBlocksRouteHandler,
  getSetupV1ServicesIdCalendarRouteHandler,
  getSetupV1ServicesIdResourcesRouteHandler,
  getSetupV1ServicesIdRouteHandler,
  getSetupV1ServicesRouteHandler,
  postSetupV1BusinessusersRouteHandler,
  postSetupV1CalendarsIdBlockRouteHandler,
  postSetupV1CalendarsRouteHandler,
  postSetupV1CompaniesDomainsRouteHandler,
  postSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  postSetupV1CompaniesRegionsRouteHandler,
  postSetupV1CompaniesRouteHandler,
  postSetupV1LocationsBulkRouteHandler,
  postSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  postSetupV1LocationsIdEmailTemplatesRouteHandler,
  postSetupV1LocationsIdGoogleServiceAccountRouteHandler,
  postSetupV1LocationsIdServicesRouteHandler,
  postSetupV1LocationsIdUploadimageRouteHandler,
  postSetupV1LocationsRouteHandler,
  postSetupV1ResourcegroupsRouteHandler,
  postSetupV1ResourcesBulkRouteHandler,
  postSetupV1ResourcesIdAllocationsRouteHandler,
  postSetupV1ResourcesIdBlockRouteHandler,
  postSetupV1ResourcesIdServicesRouteHandler,
  postSetupV1ResourcesIdUploadimageRouteHandler,
  postSetupV1ResourcesRouteHandler,
  postSetupV1ServicegroupsRouteHandler,
  postSetupV1ServicesCalendarRouteHandler,
  postSetupV1ServicesIdAllocationsBulkRouteHandler,
  postSetupV1ServicesIdAllocationsRouteHandler,
  postSetupV1ServicesIdBlockRouteHandler,
  postSetupV1ServicesIdUploadimageRouteHandler,
  postSetupV1ServicesRouteHandler,
  putSetupV1AppointmentsIdReassignResourceResourceIdRouteHandler,
  putSetupV1BusinessusersIdRouteHandler,
  putSetupV1CalendarsBlockIdRouteHandler,
  putSetupV1CalendarsIdRecoverRouteHandler,
  putSetupV1CalendarsIdRouteHandler,
  putSetupV1CompaniesDomainsIdRouteHandler,
  putSetupV1CompaniesRegionsIdRouteHandler,
  putSetupV1CompaniesRouteHandler,
  putSetupV1LocationsIdAppointmentremindersRouteHandler,
  putSetupV1LocationsIdHolidaysHolidayIdClosedRouteHandler,
  putSetupV1LocationsIdRecoverRouteHandler,
  putSetupV1LocationsIdRouteHandler,
  putSetupV1LocationsIdSettingsScopeSettingsScopeRouteHandler,
  putSetupV1ResourcegroupsIdRecoverRouteHandler,
  putSetupV1ResourcegroupsIdRouteHandler,
  putSetupV1ResourcesAllocationsIdRouteHandler,
  putSetupV1ResourcesBlockIdRouteHandler,
  putSetupV1ResourcesBulkRouteHandler,
  putSetupV1ResourcesIdAvailabilityRouteHandler,
  putSetupV1ResourcesIdReassignAppointmentsResourceIdRouteHandler,
  putSetupV1ResourcesIdRecoverRouteHandler,
  putSetupV1ResourcesIdRouteHandler,
  putSetupV1ResourcesIdServicesRouteHandler,
  putSetupV1ServicegroupsIdRecoverRouteHandler,
  putSetupV1ServicegroupsIdRouteHandler,
  putSetupV1ServicesAllocationsIdRouteHandler,
  putSetupV1ServicesBlockIdRouteHandler,
  putSetupV1ServicesIdAvailabilityRouteHandler,
  putSetupV1ServicesIdRecoverRouteHandler,
  putSetupV1ServicesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSetupV1AppointmentsRoute, getSetupV1AppointmentsRouteHandler)
  .openapi(getSetupV1AppointmentsIdRoute, getSetupV1AppointmentsIdRouteHandler)
  .openapi(
    putSetupV1AppointmentsIdReassignResourceResourceIdRoute,
    putSetupV1AppointmentsIdReassignResourceResourceIdRouteHandler,
  )
  .openapi(getSetupV1BusinessusersRoute, getSetupV1BusinessusersRouteHandler)
  .openapi(postSetupV1BusinessusersRoute, postSetupV1BusinessusersRouteHandler)
  .openapi(getSetupV1BusinessusersPermissionsRoute, getSetupV1BusinessusersPermissionsRouteHandler)
  .openapi(
    getSetupV1BusinessusersEmailCompaniesRoute,
    getSetupV1BusinessusersEmailCompaniesRouteHandler,
  )
  .openapi(deleteSetupV1BusinessusersIdRoute, deleteSetupV1BusinessusersIdRouteHandler)
  .openapi(getSetupV1BusinessusersIdRoute, getSetupV1BusinessusersIdRouteHandler)
  .openapi(putSetupV1BusinessusersIdRoute, putSetupV1BusinessusersIdRouteHandler)
  .openapi(getSetupV1CalendarsRoute, getSetupV1CalendarsRouteHandler)
  .openapi(postSetupV1CalendarsRoute, postSetupV1CalendarsRouteHandler)
  .openapi(deleteSetupV1CalendarsBlockIdRoute, deleteSetupV1CalendarsBlockIdRouteHandler)
  .openapi(putSetupV1CalendarsBlockIdRoute, putSetupV1CalendarsBlockIdRouteHandler)
  .openapi(getSetupV1CalendarsBlocksIdRoute, getSetupV1CalendarsBlocksIdRouteHandler)
  .openapi(deleteSetupV1CalendarsIdRoute, deleteSetupV1CalendarsIdRouteHandler)
  .openapi(getSetupV1CalendarsIdRoute, getSetupV1CalendarsIdRouteHandler)
  .openapi(putSetupV1CalendarsIdRoute, putSetupV1CalendarsIdRouteHandler)
  .openapi(postSetupV1CalendarsIdBlockRoute, postSetupV1CalendarsIdBlockRouteHandler)
  .openapi(getSetupV1CalendarsIdBlocksRoute, getSetupV1CalendarsIdBlocksRouteHandler)
  .openapi(putSetupV1CalendarsIdRecoverRoute, putSetupV1CalendarsIdRecoverRouteHandler)
  .openapi(getSetupV1CalendarsIdServicesRoute, getSetupV1CalendarsIdServicesRouteHandler)
  .openapi(getSetupV1CompaniesRoute, getSetupV1CompaniesRouteHandler)
  .openapi(postSetupV1CompaniesRoute, postSetupV1CompaniesRouteHandler)
  .openapi(putSetupV1CompaniesRoute, putSetupV1CompaniesRouteHandler)
  .openapi(getSetupV1CompaniesDomainsRoute, getSetupV1CompaniesDomainsRouteHandler)
  .openapi(postSetupV1CompaniesDomainsRoute, postSetupV1CompaniesDomainsRouteHandler)
  .openapi(deleteSetupV1CompaniesDomainsIdRoute, deleteSetupV1CompaniesDomainsIdRouteHandler)
  .openapi(getSetupV1CompaniesDomainsIdRoute, getSetupV1CompaniesDomainsIdRouteHandler)
  .openapi(putSetupV1CompaniesDomainsIdRoute, putSetupV1CompaniesDomainsIdRouteHandler)
  .openapi(getSetupV1CompaniesEmailTemplatesRoute, getSetupV1CompaniesEmailTemplatesRouteHandler)
  .openapi(
    deleteSetupV1CompaniesEmailTemplatesMasterRoute,
    deleteSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    getSetupV1CompaniesEmailTemplatesMasterRoute,
    getSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    postSetupV1CompaniesEmailTemplatesMasterRoute,
    postSetupV1CompaniesEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    getSetupV1CompaniesEmailTemplatesTemplateNameRoute,
    getSetupV1CompaniesEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(getSetupV1CompaniesRegionsRoute, getSetupV1CompaniesRegionsRouteHandler)
  .openapi(postSetupV1CompaniesRegionsRoute, postSetupV1CompaniesRegionsRouteHandler)
  .openapi(deleteSetupV1CompaniesRegionsIdRoute, deleteSetupV1CompaniesRegionsIdRouteHandler)
  .openapi(getSetupV1CompaniesRegionsIdRoute, getSetupV1CompaniesRegionsIdRouteHandler)
  .openapi(putSetupV1CompaniesRegionsIdRoute, putSetupV1CompaniesRegionsIdRouteHandler)
  .openapi(getSetupV1CompaniesTimezonesDateRoute, getSetupV1CompaniesTimezonesDateRouteHandler)
  .openapi(getSetupV1CustomersRoute, getSetupV1CustomersRouteHandler)
  .openapi(getSetupV1CustomersIdRoute, getSetupV1CustomersIdRouteHandler)
  .openapi(getSetupV1CustomersIdPrivacyRoute, getSetupV1CustomersIdPrivacyRouteHandler)
  .openapi(getSetupV1LocationsRoute, getSetupV1LocationsRouteHandler)
  .openapi(postSetupV1LocationsRoute, postSetupV1LocationsRouteHandler)
  .openapi(postSetupV1LocationsBulkRoute, postSetupV1LocationsBulkRouteHandler)
  .openapi(deleteSetupV1LocationsServicesIdRoute, deleteSetupV1LocationsServicesIdRouteHandler)
  .openapi(getSetupV1LocationsServicesIdRoute, getSetupV1LocationsServicesIdRouteHandler)
  .openapi(deleteSetupV1LocationsIdRoute, deleteSetupV1LocationsIdRouteHandler)
  .openapi(getSetupV1LocationsIdRoute, getSetupV1LocationsIdRouteHandler)
  .openapi(putSetupV1LocationsIdRoute, putSetupV1LocationsIdRouteHandler)
  .openapi(
    getSetupV1LocationsIdAppointmentremindersRoute,
    getSetupV1LocationsIdAppointmentremindersRouteHandler,
  )
  .openapi(
    putSetupV1LocationsIdAppointmentremindersRoute,
    putSetupV1LocationsIdAppointmentremindersRouteHandler,
  )
  .openapi(
    deleteSetupV1LocationsIdDeleteallimagesRoute,
    deleteSetupV1LocationsIdDeleteallimagesRouteHandler,
  )
  .openapi(
    deleteSetupV1LocationsIdDeleteimageRoute,
    deleteSetupV1LocationsIdDeleteimageRouteHandler,
  )
  .openapi(
    getSetupV1LocationsIdEmailTemplatesRoute,
    getSetupV1LocationsIdEmailTemplatesRouteHandler,
  )
  .openapi(
    postSetupV1LocationsIdEmailTemplatesRoute,
    postSetupV1LocationsIdEmailTemplatesRouteHandler,
  )
  .openapi(
    deleteSetupV1LocationsIdEmailTemplatesMasterRoute,
    deleteSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    getSetupV1LocationsIdEmailTemplatesMasterRoute,
    getSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    postSetupV1LocationsIdEmailTemplatesMasterRoute,
    postSetupV1LocationsIdEmailTemplatesMasterRouteHandler,
  )
  .openapi(
    deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
    deleteSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    getSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
    getSetupV1LocationsIdEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    deleteSetupV1LocationsIdGoogleServiceAccountRoute,
    deleteSetupV1LocationsIdGoogleServiceAccountRouteHandler,
  )
  .openapi(
    postSetupV1LocationsIdGoogleServiceAccountRoute,
    postSetupV1LocationsIdGoogleServiceAccountRouteHandler,
  )
  .openapi(
    putSetupV1LocationsIdHolidaysHolidayIdClosedRoute,
    putSetupV1LocationsIdHolidaysHolidayIdClosedRouteHandler,
  )
  .openapi(putSetupV1LocationsIdRecoverRoute, putSetupV1LocationsIdRecoverRouteHandler)
  .openapi(deleteSetupV1LocationsIdServicesRoute, deleteSetupV1LocationsIdServicesRouteHandler)
  .openapi(getSetupV1LocationsIdServicesRoute, getSetupV1LocationsIdServicesRouteHandler)
  .openapi(postSetupV1LocationsIdServicesRoute, postSetupV1LocationsIdServicesRouteHandler)
  .openapi(
    putSetupV1LocationsIdSettingsScopeSettingsScopeRoute,
    putSetupV1LocationsIdSettingsScopeSettingsScopeRouteHandler,
  )
  .openapi(postSetupV1LocationsIdUploadimageRoute, postSetupV1LocationsIdUploadimageRouteHandler)
  .openapi(getSetupV1ResourcegroupsRoute, getSetupV1ResourcegroupsRouteHandler)
  .openapi(postSetupV1ResourcegroupsRoute, postSetupV1ResourcegroupsRouteHandler)
  .openapi(deleteSetupV1ResourcegroupsIdRoute, deleteSetupV1ResourcegroupsIdRouteHandler)
  .openapi(getSetupV1ResourcegroupsIdRoute, getSetupV1ResourcegroupsIdRouteHandler)
  .openapi(putSetupV1ResourcegroupsIdRoute, putSetupV1ResourcegroupsIdRouteHandler)
  .openapi(putSetupV1ResourcegroupsIdRecoverRoute, putSetupV1ResourcegroupsIdRecoverRouteHandler)
  .openapi(getSetupV1ResourcesRoute, getSetupV1ResourcesRouteHandler)
  .openapi(postSetupV1ResourcesRoute, postSetupV1ResourcesRouteHandler)
  .openapi(
    deleteSetupV1ResourcesAllocationsIdRoute,
    deleteSetupV1ResourcesAllocationsIdRouteHandler,
  )
  .openapi(getSetupV1ResourcesAllocationsIdRoute, getSetupV1ResourcesAllocationsIdRouteHandler)
  .openapi(putSetupV1ResourcesAllocationsIdRoute, putSetupV1ResourcesAllocationsIdRouteHandler)
  .openapi(deleteSetupV1ResourcesBlockIdRoute, deleteSetupV1ResourcesBlockIdRouteHandler)
  .openapi(putSetupV1ResourcesBlockIdRoute, putSetupV1ResourcesBlockIdRouteHandler)
  .openapi(getSetupV1ResourcesBlocksIdRoute, getSetupV1ResourcesBlocksIdRouteHandler)
  .openapi(postSetupV1ResourcesBulkRoute, postSetupV1ResourcesBulkRouteHandler)
  .openapi(putSetupV1ResourcesBulkRoute, putSetupV1ResourcesBulkRouteHandler)
  .openapi(getSetupV1ResourcesTimezonesRoute, getSetupV1ResourcesTimezonesRouteHandler)
  .openapi(deleteSetupV1ResourcesIdRoute, deleteSetupV1ResourcesIdRouteHandler)
  .openapi(getSetupV1ResourcesIdRoute, getSetupV1ResourcesIdRouteHandler)
  .openapi(putSetupV1ResourcesIdRoute, putSetupV1ResourcesIdRouteHandler)
  .openapi(getSetupV1ResourcesIdAllocationsRoute, getSetupV1ResourcesIdAllocationsRouteHandler)
  .openapi(postSetupV1ResourcesIdAllocationsRoute, postSetupV1ResourcesIdAllocationsRouteHandler)
  .openapi(getSetupV1ResourcesIdAvailabilityRoute, getSetupV1ResourcesIdAvailabilityRouteHandler)
  .openapi(putSetupV1ResourcesIdAvailabilityRoute, putSetupV1ResourcesIdAvailabilityRouteHandler)
  .openapi(postSetupV1ResourcesIdBlockRoute, postSetupV1ResourcesIdBlockRouteHandler)
  .openapi(getSetupV1ResourcesIdBlocksRoute, getSetupV1ResourcesIdBlocksRouteHandler)
  .openapi(
    getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute,
    getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRouteHandler,
  )
  .openapi(
    getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute,
    getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRouteHandler,
  )
  .openapi(
    deleteSetupV1ResourcesIdDeleteimageRoute,
    deleteSetupV1ResourcesIdDeleteimageRouteHandler,
  )
  .openapi(
    putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute,
    putSetupV1ResourcesIdReassignAppointmentsResourceIdRouteHandler,
  )
  .openapi(putSetupV1ResourcesIdRecoverRoute, putSetupV1ResourcesIdRecoverRouteHandler)
  .openapi(deleteSetupV1ResourcesIdServicesRoute, deleteSetupV1ResourcesIdServicesRouteHandler)
  .openapi(postSetupV1ResourcesIdServicesRoute, postSetupV1ResourcesIdServicesRouteHandler)
  .openapi(putSetupV1ResourcesIdServicesRoute, putSetupV1ResourcesIdServicesRouteHandler)
  .openapi(postSetupV1ResourcesIdUploadimageRoute, postSetupV1ResourcesIdUploadimageRouteHandler)
  .openapi(getSetupV1ServicegroupsRoute, getSetupV1ServicegroupsRouteHandler)
  .openapi(postSetupV1ServicegroupsRoute, postSetupV1ServicegroupsRouteHandler)
  .openapi(deleteSetupV1ServicegroupsIdRoute, deleteSetupV1ServicegroupsIdRouteHandler)
  .openapi(getSetupV1ServicegroupsIdRoute, getSetupV1ServicegroupsIdRouteHandler)
  .openapi(putSetupV1ServicegroupsIdRoute, putSetupV1ServicegroupsIdRouteHandler)
  .openapi(putSetupV1ServicegroupsIdRecoverRoute, putSetupV1ServicegroupsIdRecoverRouteHandler)
  .openapi(getSetupV1ServicesRoute, getSetupV1ServicesRouteHandler)
  .openapi(postSetupV1ServicesRoute, postSetupV1ServicesRouteHandler)
  .openapi(deleteSetupV1ServicesAllocationsIdRoute, deleteSetupV1ServicesAllocationsIdRouteHandler)
  .openapi(getSetupV1ServicesAllocationsIdRoute, getSetupV1ServicesAllocationsIdRouteHandler)
  .openapi(putSetupV1ServicesAllocationsIdRoute, putSetupV1ServicesAllocationsIdRouteHandler)
  .openapi(deleteSetupV1ServicesBlockIdRoute, deleteSetupV1ServicesBlockIdRouteHandler)
  .openapi(putSetupV1ServicesBlockIdRoute, putSetupV1ServicesBlockIdRouteHandler)
  .openapi(getSetupV1ServicesBlocksIdRoute, getSetupV1ServicesBlocksIdRouteHandler)
  .openapi(postSetupV1ServicesCalendarRoute, postSetupV1ServicesCalendarRouteHandler)
  .openapi(deleteSetupV1ServicesCalendarIdRoute, deleteSetupV1ServicesCalendarIdRouteHandler)
  .openapi(deleteSetupV1ServicesIdRoute, deleteSetupV1ServicesIdRouteHandler)
  .openapi(getSetupV1ServicesIdRoute, getSetupV1ServicesIdRouteHandler)
  .openapi(putSetupV1ServicesIdRoute, putSetupV1ServicesIdRouteHandler)
  .openapi(getSetupV1ServicesIdAllocationsRoute, getSetupV1ServicesIdAllocationsRouteHandler)
  .openapi(postSetupV1ServicesIdAllocationsRoute, postSetupV1ServicesIdAllocationsRouteHandler)
  .openapi(
    postSetupV1ServicesIdAllocationsBulkRoute,
    postSetupV1ServicesIdAllocationsBulkRouteHandler,
  )
  .openapi(getSetupV1ServicesIdAvailabilityRoute, getSetupV1ServicesIdAvailabilityRouteHandler)
  .openapi(putSetupV1ServicesIdAvailabilityRoute, putSetupV1ServicesIdAvailabilityRouteHandler)
  .openapi(postSetupV1ServicesIdBlockRoute, postSetupV1ServicesIdBlockRouteHandler)
  .openapi(getSetupV1ServicesIdBlocksRoute, getSetupV1ServicesIdBlocksRouteHandler)
  .openapi(getSetupV1ServicesIdCalendarRoute, getSetupV1ServicesIdCalendarRouteHandler)
  .openapi(deleteSetupV1ServicesIdDeleteimageRoute, deleteSetupV1ServicesIdDeleteimageRouteHandler)
  .openapi(putSetupV1ServicesIdRecoverRoute, putSetupV1ServicesIdRecoverRouteHandler)
  .openapi(getSetupV1ServicesIdResourcesRoute, getSetupV1ServicesIdResourcesRouteHandler)
  .openapi(postSetupV1ServicesIdUploadimageRoute, postSetupV1ServicesIdUploadimageRouteHandler)

export default app
