import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSetupV1Appointments(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.appointments.$get(args, options))
}

export async function getSetupV1AppointmentsId(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.appointments[':id'].$get(args, options))
}

export async function putSetupV1AppointmentsIdReassignResourceResourceId(
  args: InferRequestType<
    (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.appointments[':id'].reassign.resource[':resourceId'].$put(args, options),
  )
}

export async function getSetupV1Businessusers(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers.$get(args, options))
}

export async function postSetupV1Businessusers(
  args: InferRequestType<typeof client.setup.v1.businessusers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers.$post(args, options))
}

export async function getSetupV1BusinessusersPermissions(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers.permissions.$get(args, options))
}

export async function getSetupV1BusinessusersEmailCompanies(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers[':email'].companies.$get(args, options))
}

export async function getSetupV1BusinessusersId(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers[':id'].$get(args, options))
}

export async function putSetupV1BusinessusersId(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers[':id'].$put(args, options))
}

export async function deleteSetupV1BusinessusersId(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.businessusers[':id'].$delete(args, options))
}

export async function getSetupV1Calendars(
  args: InferRequestType<typeof client.setup.v1.calendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars.$get(args, options))
}

export async function postSetupV1Calendars(
  args: InferRequestType<typeof client.setup.v1.calendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars.$post(args, options))
}

export async function putSetupV1CalendarsBlockId(
  args: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars.block[':id'].$put(args, options))
}

export async function deleteSetupV1CalendarsBlockId(
  args: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars.block[':id'].$delete(args, options))
}

export async function getSetupV1CalendarsBlocksId(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars.blocks[':id'].$get(args, options))
}

export async function getSetupV1CalendarsId(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].$get(args, options))
}

export async function putSetupV1CalendarsId(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].$put(args, options))
}

export async function deleteSetupV1CalendarsId(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].$delete(args, options))
}

export async function postSetupV1CalendarsIdBlock(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].block.$post(args, options))
}

export async function getSetupV1CalendarsIdBlocks(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].blocks.$get(args, options))
}

export async function putSetupV1CalendarsIdRecover(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].recover.$put(args, options))
}

export async function getSetupV1CalendarsIdServices(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.calendars[':id'].services.$get(args, options))
}

export async function getSetupV1Companies(options?: ClientRequestOptions) {
  return await parseResponse(client.setup.v1.companies.$get(undefined, options))
}

export async function putSetupV1Companies(
  args: InferRequestType<typeof client.setup.v1.companies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.$put(args, options))
}

export async function postSetupV1Companies(
  args: InferRequestType<typeof client.setup.v1.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.$post(args, options))
}

export async function getSetupV1CompaniesDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.setup.v1.companies.domains.$get(undefined, options))
}

export async function postSetupV1CompaniesDomains(
  args: InferRequestType<typeof client.setup.v1.companies.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.domains.$post(args, options))
}

export async function getSetupV1CompaniesDomainsId(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.domains[':id'].$get(args, options))
}

export async function putSetupV1CompaniesDomainsId(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.domains[':id'].$put(args, options))
}

export async function deleteSetupV1CompaniesDomainsId(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.domains[':id'].$delete(args, options))
}

export async function getSetupV1CompaniesEmailTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.setup.v1.companies.email.templates.$get(undefined, options))
}

export async function getSetupV1CompaniesEmailTemplatesMaster(options?: ClientRequestOptions) {
  return await parseResponse(
    client.setup.v1.companies.email.templates.master.$get(undefined, options),
  )
}

export async function postSetupV1CompaniesEmailTemplatesMaster(
  args: InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.email.templates.master.$post(args, options))
}

export async function deleteSetupV1CompaniesEmailTemplatesMaster(options?: ClientRequestOptions) {
  return await parseResponse(
    client.setup.v1.companies.email.templates.master.$delete(undefined, options),
  )
}

export async function getSetupV1CompaniesEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.companies.email.templates[':templateName'].$get(args, options),
  )
}

export async function getSetupV1CompaniesRegions(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.regions.$get(args, options))
}

export async function postSetupV1CompaniesRegions(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.regions.$post(args, options))
}

export async function getSetupV1CompaniesRegionsId(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.regions[':id'].$get(args, options))
}

export async function putSetupV1CompaniesRegionsId(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.regions[':id'].$put(args, options))
}

export async function deleteSetupV1CompaniesRegionsId(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.regions[':id'].$delete(args, options))
}

export async function getSetupV1CompaniesTimezonesDate(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.companies.timezones[':date'].$get(args, options))
}

export async function getSetupV1Customers(
  args: InferRequestType<typeof client.setup.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.customers.$get(args, options))
}

export async function getSetupV1CustomersId(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.customers[':id'].$get(args, options))
}

export async function getSetupV1CustomersIdPrivacy(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.customers[':id'].privacy.$get(args, options))
}

export async function getSetupV1Locations(
  args: InferRequestType<typeof client.setup.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations.$get(args, options))
}

export async function postSetupV1Locations(
  args: InferRequestType<typeof client.setup.v1.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations.$post(args, options))
}

export async function postSetupV1LocationsBulk(
  args: InferRequestType<typeof client.setup.v1.locations.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations.bulk.$post(args, options))
}

export async function getSetupV1LocationsServicesId(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations.services[':id'].$get(args, options))
}

export async function deleteSetupV1LocationsServicesId(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations.services[':id'].$delete(args, options))
}

export async function getSetupV1LocationsId(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].$get(args, options))
}

export async function putSetupV1LocationsId(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].$put(args, options))
}

export async function deleteSetupV1LocationsId(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].$delete(args, options))
}

export async function getSetupV1LocationsIdAppointmentreminders(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].appointmentreminders.$get(args, options),
  )
}

export async function putSetupV1LocationsIdAppointmentreminders(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].appointmentreminders.$put(args, options),
  )
}

export async function deleteSetupV1LocationsIdDeleteallimages(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].deleteallimages.$delete(args, options),
  )
}

export async function deleteSetupV1LocationsIdDeleteimage(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].deleteimage.$delete(args, options))
}

export async function getSetupV1LocationsIdEmailTemplates(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].email.templates.$get(args, options))
}

export async function postSetupV1LocationsIdEmailTemplates(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].email.templates.$post(args, options))
}

export async function getSetupV1LocationsIdEmailTemplatesMaster(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].email.templates.master.$get(args, options),
  )
}

export async function postSetupV1LocationsIdEmailTemplatesMaster(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].email.templates.master.$post(args, options),
  )
}

export async function deleteSetupV1LocationsIdEmailTemplatesMaster(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].email.templates.master.$delete(args, options),
  )
}

export async function getSetupV1LocationsIdEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].email.templates[':templateName'].$get(args, options),
  )
}

export async function deleteSetupV1LocationsIdEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].email.templates[':templateName'].$delete(args, options),
  )
}

export async function postSetupV1LocationsIdGoogleServiceAccount(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].google.service.account.$post(args, options),
  )
}

export async function deleteSetupV1LocationsIdGoogleServiceAccount(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].google.service.account.$delete(args, options),
  )
}

export async function putSetupV1LocationsIdHolidaysHolidayIdClosed(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].holidays[':holidayId'][':closed'].$put(args, options),
  )
}

export async function putSetupV1LocationsIdRecover(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].recover.$put(args, options))
}

export async function getSetupV1LocationsIdServices(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].services.$get(args, options))
}

export async function postSetupV1LocationsIdServices(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].services.$post(args, options))
}

export async function deleteSetupV1LocationsIdServices(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].services.$delete(args, options))
}

export async function putSetupV1LocationsIdSettingsScopeSettingsScope(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.locations[':id'].settings.scope[':settingsScope'].$put(args, options),
  )
}

export async function postSetupV1LocationsIdUploadimage(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.locations[':id'].uploadimage.$post(args, options))
}

export async function getSetupV1Resourcegroups(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups.$get(args, options))
}

export async function postSetupV1Resourcegroups(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups.$post(args, options))
}

export async function getSetupV1ResourcegroupsId(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups[':id'].$get(args, options))
}

export async function putSetupV1ResourcegroupsId(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups[':id'].$put(args, options))
}

export async function deleteSetupV1ResourcegroupsId(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups[':id'].$delete(args, options))
}

export async function putSetupV1ResourcegroupsIdRecover(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resourcegroups[':id'].recover.$put(args, options))
}

export async function getSetupV1Resources(
  args: InferRequestType<typeof client.setup.v1.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.$get(args, options))
}

export async function postSetupV1Resources(
  args: InferRequestType<typeof client.setup.v1.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.$post(args, options))
}

export async function getSetupV1ResourcesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.allocations[':id'].$get(args, options))
}

export async function putSetupV1ResourcesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.allocations[':id'].$put(args, options))
}

export async function deleteSetupV1ResourcesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.allocations[':id'].$delete(args, options))
}

export async function putSetupV1ResourcesBlockId(
  args: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.block[':id'].$put(args, options))
}

export async function deleteSetupV1ResourcesBlockId(
  args: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.block[':id'].$delete(args, options))
}

export async function getSetupV1ResourcesBlocksId(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.blocks[':id'].$get(args, options))
}

export async function putSetupV1ResourcesBulk(
  args: InferRequestType<typeof client.setup.v1.resources.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.bulk.$put(args, options))
}

export async function postSetupV1ResourcesBulk(
  args: InferRequestType<typeof client.setup.v1.resources.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources.bulk.$post(args, options))
}

export async function getSetupV1ResourcesTimezones(options?: ClientRequestOptions) {
  return await parseResponse(client.setup.v1.resources.timezones.$get(undefined, options))
}

export async function getSetupV1ResourcesId(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].$get(args, options))
}

export async function putSetupV1ResourcesId(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].$put(args, options))
}

export async function deleteSetupV1ResourcesId(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].$delete(args, options))
}

export async function getSetupV1ResourcesIdAllocations(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].allocations.$get(args, options))
}

export async function postSetupV1ResourcesIdAllocations(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].allocations.$post(args, options))
}

export async function getSetupV1ResourcesIdAvailability(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].availability.$get(args, options))
}

export async function putSetupV1ResourcesIdAvailability(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].availability.$put(args, options))
}

export async function postSetupV1ResourcesIdBlock(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].block.$post(args, options))
}

export async function getSetupV1ResourcesIdBlocks(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].blocks.$get(args, options))
}

export async function getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(
      args,
      options,
    ),
  )
}

export async function getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(
      args,
      options,
    ),
  )
}

export async function deleteSetupV1ResourcesIdDeleteimage(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].deleteimage.$delete(args, options))
}

export async function putSetupV1ResourcesIdReassignAppointmentsResourceId(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.setup.v1.resources[':id'].reassign.appointments[':resourceId'].$put(args, options),
  )
}

export async function putSetupV1ResourcesIdRecover(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].recover.$put(args, options))
}

export async function putSetupV1ResourcesIdServices(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].services.$put(args, options))
}

export async function postSetupV1ResourcesIdServices(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].services.$post(args, options))
}

export async function deleteSetupV1ResourcesIdServices(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].services.$delete(args, options))
}

export async function postSetupV1ResourcesIdUploadimage(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.resources[':id'].uploadimage.$post(args, options))
}

export async function getSetupV1Servicegroups(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups.$get(args, options))
}

export async function postSetupV1Servicegroups(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups.$post(args, options))
}

export async function getSetupV1ServicegroupsId(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups[':id'].$get(args, options))
}

export async function putSetupV1ServicegroupsId(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups[':id'].$put(args, options))
}

export async function deleteSetupV1ServicegroupsId(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups[':id'].$delete(args, options))
}

export async function putSetupV1ServicegroupsIdRecover(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.servicegroups[':id'].recover.$put(args, options))
}

export async function getSetupV1Services(
  args: InferRequestType<typeof client.setup.v1.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.$get(args, options))
}

export async function postSetupV1Services(
  args: InferRequestType<typeof client.setup.v1.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.$post(args, options))
}

export async function getSetupV1ServicesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.allocations[':id'].$get(args, options))
}

export async function putSetupV1ServicesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.allocations[':id'].$put(args, options))
}

export async function deleteSetupV1ServicesAllocationsId(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.allocations[':id'].$delete(args, options))
}

export async function putSetupV1ServicesBlockId(
  args: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.block[':id'].$put(args, options))
}

export async function deleteSetupV1ServicesBlockId(
  args: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.block[':id'].$delete(args, options))
}

export async function getSetupV1ServicesBlocksId(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.blocks[':id'].$get(args, options))
}

export async function postSetupV1ServicesCalendar(
  args: InferRequestType<typeof client.setup.v1.services.calendar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.calendar.$post(args, options))
}

export async function deleteSetupV1ServicesCalendarId(
  args: InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services.calendar[':id'].$delete(args, options))
}

export async function getSetupV1ServicesId(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].$get(args, options))
}

export async function putSetupV1ServicesId(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].$put(args, options))
}

export async function deleteSetupV1ServicesId(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].$delete(args, options))
}

export async function getSetupV1ServicesIdAllocations(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].allocations.$get(args, options))
}

export async function postSetupV1ServicesIdAllocations(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].allocations.$post(args, options))
}

export async function postSetupV1ServicesIdAllocationsBulk(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].allocations.bulk.$post(args, options))
}

export async function getSetupV1ServicesIdAvailability(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].availability.$get(args, options))
}

export async function putSetupV1ServicesIdAvailability(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].availability.$put(args, options))
}

export async function postSetupV1ServicesIdBlock(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].block.$post(args, options))
}

export async function getSetupV1ServicesIdBlocks(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].blocks.$get(args, options))
}

export async function getSetupV1ServicesIdCalendar(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].calendar.$get(args, options))
}

export async function deleteSetupV1ServicesIdDeleteimage(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].deleteimage.$delete(args, options))
}

export async function putSetupV1ServicesIdRecover(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].recover.$put(args, options))
}

export async function getSetupV1ServicesIdResources(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].resources.$get(args, options))
}

export async function postSetupV1ServicesIdUploadimage(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.v1.services[':id'].uploadimage.$post(args, options))
}
