import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1ConstAlarmDefs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.alarm_defs.$get(undefined, options))
}

export async function getApiV1ConstApChannels(
  args: InferRequestType<typeof client.api.v1.const.ap_channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.const.ap_channels.$get(args, options))
}

export async function getApiV1ConstApLedStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.ap_led_status.$get(undefined, options))
}

export async function getApiV1ConstApplications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.applications.$get(undefined, options))
}

export async function getApiV1ConstCallEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.call_events.$get(undefined, options))
}

export async function getApiV1ConstClientEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.client_events.$get(undefined, options))
}

export async function getApiV1ConstCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.countries.$get(undefined, options))
}

export async function getApiV1ConstDefaultGatewayConfig(
  args: InferRequestType<typeof client.api.v1.const.default_gateway_config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.const.default_gateway_config.$get(args, options))
}

export async function getApiV1ConstDeviceEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.device_events.$get(undefined, options))
}

export async function getApiV1ConstDeviceModels(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.device_models.$get(undefined, options))
}

export async function getApiV1ConstInsightMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.insight_metrics.$get(undefined, options))
}

export async function getApiV1ConstLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.languages.$get(undefined, options))
}

export async function getApiV1ConstMxedgeEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.mxedge_events.$get(undefined, options))
}

export async function getApiV1ConstMxedgeModels(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.mxedge_models.$get(undefined, options))
}

export async function getApiV1ConstSystemEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.system_events.$get(undefined, options))
}

export async function getApiV1ConstTrafficTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.const.traffic_types.$get(undefined, options))
}

export async function getApiV1InstallerOrgsOrgIdAlarmtemplates(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['alarmtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].alarmtemplates.$get(args, options),
  )
}

export async function getApiV1InstallerOrgsOrgIdDeviceprofiles(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['deviceprofiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].deviceprofiles.$get(args, options),
  )
}

export async function getApiV1InstallerOrgsOrgIdDevices(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.installer.orgs[':org_id'].devices.$get(args, options))
}

export async function postApiV1InstallerOrgsOrgIdDevices(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.installer.orgs[':org_id'].devices.$post(args, options))
}

export async function putApiV1InstallerOrgsOrgIdDevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'].$put(args, options),
  )
}

export async function deleteApiV1InstallerOrgsOrgIdDevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'].$delete(args, options),
  )
}

export async function postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocate(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac']['locate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'].locate.$post(args, options),
  )
}

export async function postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocate(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac']['unlocate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'].unlocate.$post(args, options),
  )
}

export async function postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageName(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac'][':image_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'][':image_name'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageName(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['devices'][':device_mac'][':image_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].devices[':device_mac'][':image_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1InstallerOrgsOrgIdRftemplates(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['rftemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].rftemplates.$get(args, options),
  )
}

export async function getApiV1InstallerOrgsOrgIdSecpolicies(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['secpolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].secpolicies.$get(args, options),
  )
}

export async function getApiV1InstallerOrgsOrgIdSitegroups(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['sitegroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.installer.orgs[':org_id'].sitegroups.$get(args, options))
}

export async function getApiV1InstallerOrgsOrgIdSites(
  args: InferRequestType<(typeof client.api.v1.installer.orgs)[':org_id']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.installer.orgs[':org_id'].sites.$get(args, options))
}

export async function putApiV1InstallerOrgsOrgIdSitesSiteName(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].$put(args, options),
  )
}

export async function getApiV1InstallerOrgsOrgIdSitesSiteNameMaps(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['maps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].maps.$get(args, options),
  )
}

export async function postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImport(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['maps']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].maps.import.$post(args, options),
  )
}

export async function putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapId(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['maps'][':map_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].maps[':map_id'].$put(args, options),
  )
}

export async function postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapId(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['maps'][':map_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].maps[':map_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapId(
  args: InferRequestType<
    (typeof client.api.v1.installer.orgs)[':org_id']['sites'][':site_name']['maps'][':map_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.orgs[':org_id'].sites[':site_name'].maps[':map_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1InstallerSitesSiteNameOptimize(
  args: InferRequestType<(typeof client.api.v1.installer.sites)[':site_name']['optimize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.installer.sites[':site_name'].optimize.$get(args, options),
  )
}

export async function postApiV1InviteVerifyToken(
  args: InferRequestType<(typeof client.api.v1.invite.verify)[':token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invite.verify[':token'].$post(args, options))
}

export async function postApiV1Login(
  args: InferRequestType<typeof client.api.v1.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.$post(args, options))
}

export async function postApiV1LoginLookup(
  args: InferRequestType<typeof client.api.v1.login.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.lookup.$post(args, options))
}

export async function getApiV1LoginOauthProvider(
  args: InferRequestType<(typeof client.api.v1.login.oauth)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.oauth[':provider'].$get(args, options))
}

export async function postApiV1LoginOauthProvider(
  args: InferRequestType<(typeof client.api.v1.login.oauth)[':provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.oauth[':provider'].$post(args, options))
}

export async function deleteApiV1LoginOauthProvider(
  args: InferRequestType<(typeof client.api.v1.login.oauth)[':provider']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.oauth[':provider'].$delete(args, options))
}

export async function postApiV1LoginTwoFactor(
  args: InferRequestType<typeof client.api.v1.login.two_factor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.two_factor.$post(args, options))
}

export async function postApiV1Logout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.logout.$post(undefined, options))
}

export async function postApiV1MobileVerifySecret(
  args: InferRequestType<(typeof client.api.v1.mobile.verify)[':secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.mobile.verify[':secret'].$post(args, options))
}

export async function postApiV1Msps(
  args: InferRequestType<typeof client.api.v1.msps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps.$post(args, options))
}

export async function getApiV1MspsMspId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].$get(args, options))
}

export async function putApiV1MspsMspId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].$put(args, options))
}

export async function deleteApiV1MspsMspId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].$delete(args, options))
}

export async function getApiV1MspsMspIdAdmins(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].admins.$get(args, options))
}

export async function getApiV1MspsMspIdAdminsAdminId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['admins'][':admin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].admins[':admin_id'].$get(args, options))
}

export async function putApiV1MspsMspIdAdminsAdminId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['admins'][':admin_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].admins[':admin_id'].$put(args, options))
}

export async function deleteApiV1MspsMspIdAdminsAdminId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['admins'][':admin_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].admins[':admin_id'].$delete(args, options),
  )
}

export async function postApiV1MspsMspIdClaim(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].claim.$post(args, options))
}

export async function getApiV1MspsMspIdInsightsMetric(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['insights'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].insights[':metric'].$get(args, options))
}

export async function getApiV1MspsMspIdInventoryDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['inventory'][':device_mac']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].inventory[':device_mac'].$get(args, options),
  )
}

export async function postApiV1MspsMspIdInvites(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].invites.$post(args, options))
}

export async function putApiV1MspsMspIdInvitesInviteId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['invites'][':invite_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].invites[':invite_id'].$put(args, options),
  )
}

export async function deleteApiV1MspsMspIdInvitesInviteId(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['invites'][':invite_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].invites[':invite_id'].$delete(args, options),
  )
}

export async function getApiV1MspsMspIdLicenses(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].licenses.$get(args, options))
}

export async function putApiV1MspsMspIdLicenses(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['licenses']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].licenses.$put(args, options))
}

export async function postApiV1MspsMspIdLogo(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].logo.$post(args, options))
}

export async function deleteApiV1MspsMspIdLogo(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].logo.$delete(args, options))
}

export async function getApiV1MspsMspIdLogs(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].logs.$get(args, options))
}

export async function getApiV1MspsMspIdLogsCount(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['logs']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].logs.count.$get(args, options))
}

export async function getApiV1MspsMspIdOrggroups(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orggroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orggroups.$get(args, options))
}

export async function postApiV1MspsMspIdOrggroups(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orggroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orggroups.$post(args, options))
}

export async function getApiV1MspsMspIdOrggroupsOrggroupId(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['orggroups'][':orggroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].orggroups[':orggroup_id'].$get(args, options),
  )
}

export async function putApiV1MspsMspIdOrggroupsOrggroupId(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['orggroups'][':orggroup_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].orggroups[':orggroup_id'].$put(args, options),
  )
}

export async function deleteApiV1MspsMspIdOrggroupsOrggroupId(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['orggroups'][':orggroup_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].orggroups[':orggroup_id'].$delete(args, options),
  )
}

export async function getApiV1MspsMspIdOrgs(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orgs.$get(args, options))
}

export async function putApiV1MspsMspIdOrgs(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orgs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orgs.$put(args, options))
}

export async function postApiV1MspsMspIdOrgs(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orgs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orgs.$post(args, options))
}

export async function getApiV1MspsMspIdOrgsSearch(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orgs']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orgs.search.$get(args, options))
}

export async function getApiV1MspsMspIdOrgsOrgId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['orgs'][':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].orgs[':org_id'].$get(args, options))
}

export async function getApiV1MspsMspIdSearch(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].search.$get(args, options))
}

export async function getApiV1MspsMspIdSsoroles(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssoroles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssoroles.$get(args, options))
}

export async function postApiV1MspsMspIdSsoroles(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssoroles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssoroles.$post(args, options))
}

export async function putApiV1MspsMspIdSsorolesSsoroleId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssoroles'][':ssorole_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].ssoroles[':ssorole_id'].$put(args, options),
  )
}

export async function deleteApiV1MspsMspIdSsorolesSsoroleId(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['ssoroles'][':ssorole_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].ssoroles[':ssorole_id'].$delete(args, options),
  )
}

export async function getApiV1MspsMspIdSsos(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssos.$get(args, options))
}

export async function postApiV1MspsMspIdSsos(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssos.$post(args, options))
}

export async function putApiV1MspsMspIdSsosSsoId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssos'][':sso_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssos[':sso_id'].$put(args, options))
}

export async function deleteApiV1MspsMspIdSsosSsoId(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['ssos'][':sso_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].ssos[':sso_id'].$delete(args, options))
}

export async function getApiV1MspsMspIdSsosSsoIdFailures(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['ssos'][':sso_id']['failures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].ssos[':sso_id'].failures.$get(args, options),
  )
}

export async function getApiV1MspsMspIdSsosSsoIdMetadata(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['ssos'][':sso_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].ssos[':sso_id'].metadata.$get(args, options),
  )
}

export async function getApiV1MspsMspIdSsosSsoIdMetadataXml(
  args: InferRequestType<
    (typeof client.api.v1.msps)[':msp_id']['ssos'][':sso_id']['metadata.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.msps[':msp_id'].ssos[':sso_id']['metadata.xml'].$get(args, options),
  )
}

export async function getApiV1MspsMspIdStatsLicenses(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['stats']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].stats.licenses.$get(args, options))
}

export async function getApiV1MspsMspIdStatsOrgs(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['stats']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].stats.orgs.$get(args, options))
}

export async function getApiV1MspsMspIdTickets(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].tickets.$get(args, options))
}

export async function getApiV1MspsMspIdTicketsCount(
  args: InferRequestType<(typeof client.api.v1.msps)[':msp_id']['tickets']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.msps[':msp_id'].tickets.count.$get(args, options))
}

export async function postApiV1Orgs(
  args: InferRequestType<typeof client.api.v1.orgs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs.$post(args, options))
}

export async function getApiV1OrgsOrgId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].$get(args, options))
}

export async function putApiV1OrgsOrgId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].$delete(args, options))
}

export async function getApiV1OrgsOrgId128routersRegisterCmd(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['128routers']['register_cmd']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id']['128routers'].register_cmd.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdAdmins(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].admins.$get(args, options))
}

export async function putApiV1OrgsOrgIdAdminsAdminId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['admins'][':admin_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].admins[':admin_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdAdminsAdminId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['admins'][':admin_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].admins[':admin_id'].$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdAlarmsAck(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['ack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.ack.$post(args, options))
}

export async function postApiV1OrgsOrgIdAlarmsAckAll(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['ack_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.ack_all.$post(args, options))
}

export async function getApiV1OrgsOrgIdAlarmsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdAlarmsSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.search.$get(args, options))
}

export async function postApiV1OrgsOrgIdAlarmsUnack(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['unack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.unack.$post(args, options))
}

export async function postApiV1OrgsOrgIdAlarmsUnackAll(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarms']['unack_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarms.unack_all.$post(args, options))
}

export async function postApiV1OrgsOrgIdAlarmsAlarmIdAck(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['alarms'][':alarm_id']['ack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].alarms[':alarm_id'].ack.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdAlarmtemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarmtemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarmtemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdAlarmtemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['alarmtemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].alarmtemplates.$post(args, options))
}

export async function postApiV1OrgsOrgIdAlarmtemplatesSuppress(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['alarmtemplates']['suppress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].alarmtemplates.suppress.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['alarmtemplates'][':alarmtemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].alarmtemplates[':alarmtemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['alarmtemplates'][':alarmtemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].alarmtemplates[':alarmtemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['alarmtemplates'][':alarmtemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].alarmtemplates[':alarmtemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdApitokens(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['apitokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].apitokens.$get(args, options))
}

export async function postApiV1OrgsOrgIdApitokens(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['apitokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].apitokens.$post(args, options))
}

export async function getApiV1OrgsOrgIdApitokensApitokenId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['apitokens'][':apitoken_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].apitokens[':apitoken_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdApitokensApitokenId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['apitokens'][':apitoken_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].apitokens[':apitoken_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdApitokensApitokenId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['apitokens'][':apitoken_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].apitokens[':apitoken_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdAptemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['aptemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].aptemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdAptemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['aptemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].aptemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdAptemplatesAptemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['aptemplates'][':aptemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].aptemplates[':aptemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdAptemplatesAptemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['aptemplates'][':aptemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].aptemplates[':aptemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdAptemplatesAptemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['aptemplates'][':aptemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].aptemplates[':aptemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdAssetfilters(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assetfilters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assetfilters.$get(args, options))
}

export async function postApiV1OrgsOrgIdAssetfilters(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assetfilters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assetfilters.$post(args, options))
}

export async function getApiV1OrgsOrgIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['assetfilters'][':assetfilter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].assetfilters[':assetfilter_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['assetfilters'][':assetfilter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].assetfilters[':assetfilter_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['assetfilters'][':assetfilter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].assetfilters[':assetfilter_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdAssets(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assets.$get(args, options))
}

export async function postApiV1OrgsOrgIdAssets(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assets.$post(args, options))
}

export async function postApiV1OrgsOrgIdAssetsImport(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assets.import.$post(args, options))
}

export async function getApiV1OrgsOrgIdAssetsAssetId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets'][':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assets[':asset_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdAssetsAssetId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets'][':asset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].assets[':asset_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdAssetsAssetId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['assets'][':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].assets[':asset_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdCallEventsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['call']['events']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].call.events.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdCallEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['call']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].call.events.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdCert(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['cert']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].cert.$get(args, options))
}

export async function postApiV1OrgsOrgIdCertRegenerate(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['cert']['regenerate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].cert.regenerate.$post(args, options))
}

export async function postApiV1OrgsOrgIdClaim(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].claim.$post(args, options))
}

export async function getApiV1OrgsOrgIdClientsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['clients']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].clients.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdClientsEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['clients']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].clients.events.search.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdClientsSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['clients']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].clients.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdClientsSessionsCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['clients']['sessions']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].clients.sessions.count.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdClientsSessionsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['clients']['sessions']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].clients.sessions.search.$get(args, options),
  )
}

export async function postApiV1OrgsOrgIdClone(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].clone.$post(args, options))
}

export async function getApiV1OrgsOrgIdCrl(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['crl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].crl.$get(args, options))
}

export async function postApiV1OrgsOrgIdCrlTruncate(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['crl']['truncate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].crl.truncate.$post(args, options))
}

export async function getApiV1OrgsOrgIdDeviceprofiles(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['deviceprofiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].deviceprofiles.$get(args, options))
}

export async function postApiV1OrgsOrgIdDeviceprofiles(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['deviceprofiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].deviceprofiles.$post(args, options))
}

export async function getApiV1OrgsOrgIdDeviceprofilesDeviceprofileId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['deviceprofiles'][':deviceprofile_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].deviceprofiles[':deviceprofile_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdDeviceprofilesDeviceprofileId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['deviceprofiles'][':deviceprofile_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].deviceprofiles[':deviceprofile_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['deviceprofiles'][':deviceprofile_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].deviceprofiles[':deviceprofile_id'].$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssign(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['deviceprofiles'][':deviceprofile_id']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].deviceprofiles[':deviceprofile_id'].assign.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassign(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['deviceprofiles'][':deviceprofile_id']['unassign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].deviceprofiles[':deviceprofile_id'].unassign.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdDevices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.$get(args, options))
}

export async function getApiV1OrgsOrgIdDevicesCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdDevicesEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['devices']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.events.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdDevicesEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['devices']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].devices.events.search.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdDevicesLastConfigCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['devices']['last_config']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].devices.last_config.count.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdDevicesLastConfigSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['devices']['last_config']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].devices.last_config.search.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdDevicesRadioMacs(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['radio_macs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.radio_macs.$get(args, options))
}

export async function getApiV1OrgsOrgIdDevicesSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdDevicesUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['upgrade']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.upgrade.$get(args, options))
}

export async function postApiV1OrgsOrgIdDevicesUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['devices']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].devices.upgrade.$post(args, options))
}

export async function getApiV1OrgsOrgIdDevicesUpgradeUpgradeId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['devices']['upgrade'][':upgrade_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].devices.upgrade[':upgrade_id'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdEvpnTopologies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['evpn_topologies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].evpn_topologies.$get(args, options))
}

export async function postApiV1OrgsOrgIdEvpnTopologies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['evpn_topologies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].evpn_topologies.$post(args, options))
}

export async function getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['evpn_topologies'][':evpn_topology_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].evpn_topologies[':evpn_topology_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['evpn_topologies'][':evpn_topology_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].evpn_topologies[':evpn_topology_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['evpn_topologies'][':evpn_topology_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].evpn_topologies[':evpn_topology_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdGatewaytemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['gatewaytemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].gatewaytemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdGatewaytemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['gatewaytemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].gatewaytemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['gatewaytemplates'][':gatewaytemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].gatewaytemplates[':gatewaytemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['gatewaytemplates'][':gatewaytemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].gatewaytemplates[':gatewaytemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['gatewaytemplates'][':gatewaytemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].gatewaytemplates[':gatewaytemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdGuests(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].guests.$get(args, options))
}

export async function getApiV1OrgsOrgIdGuestsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].guests.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdGuestsSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].guests.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdGuestsGuestMac(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests'][':guest_mac']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].guests[':guest_mac'].$get(args, options))
}

export async function putApiV1OrgsOrgIdGuestsGuestMac(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests'][':guest_mac']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].guests[':guest_mac'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdGuestsGuestMac(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['guests'][':guest_mac']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].guests[':guest_mac'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdInsightsSitesSle(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['insights']['sites-sle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].insights['sites-sle'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdInsightsMetric(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['insights'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].insights[':metric'].$get(args, options))
}

export async function getApiV1OrgsOrgIdInventory(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].inventory.$get(args, options))
}

export async function putApiV1OrgsOrgIdInventory(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['inventory']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].inventory.$put(args, options))
}

export async function postApiV1OrgsOrgIdInventory(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['inventory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].inventory.$post(args, options))
}

export async function postApiV1OrgsOrgIdInventoryReevaluateAutoAssignment(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['inventory']['reevaluate_auto_assignment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].inventory.reevaluate_auto_assignment.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdInventoryReplace(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['inventory']['replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].inventory.replace.$post(args, options))
}

export async function postApiV1OrgsOrgIdInvites(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].invites.$post(args, options))
}

export async function putApiV1OrgsOrgIdInvitesInviteId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['invites'][':invite_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].invites[':invite_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdInvitesInviteId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['invites'][':invite_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].invites[':invite_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdJsiDevices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['jsi']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].jsi.devices.$get(args, options))
}

export async function getApiV1OrgsOrgIdJsiDevicesOutboundSshCmd(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['jsi']['devices']['outbound_ssh_cmd']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].jsi.devices.outbound_ssh_cmd.$get(args, options),
  )
}

export async function postApiV1OrgsOrgIdJsiDevicesDeviceMacShell(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['jsi']['devices'][':device_mac']['shell']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].jsi.devices[':device_mac'].shell.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgrade(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['jsi']['devices'][':device_mac']['upgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].jsi.devices[':device_mac'].upgrade.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdJsiInventory(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['jsi']['inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].jsi.inventory.$get(args, options))
}

export async function getApiV1OrgsOrgIdJunosRegisterCmd(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['junos']['register_cmd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].junos.register_cmd.$get(args, options))
}

export async function getApiV1OrgsOrgIdLicenses(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].licenses.$get(args, options))
}

export async function putApiV1OrgsOrgIdLicenses(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['licenses']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].licenses.$put(args, options))
}

export async function getApiV1OrgsOrgIdLicensesUsages(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['licenses']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].licenses.usages.$get(args, options))
}

export async function getApiV1OrgsOrgIdLogs(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].logs.$get(args, options))
}

export async function getApiV1OrgsOrgIdLogsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['logs']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].logs.count.$get(args, options))
}

export async function postApiV1OrgsOrgIdMapsImport(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['maps']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].maps.import.$post(args, options))
}

export async function getApiV1OrgsOrgIdMxclusters(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxclusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxclusters.$get(args, options))
}

export async function postApiV1OrgsOrgIdMxclusters(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxclusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxclusters.$post(args, options))
}

export async function getApiV1OrgsOrgIdMxclustersMxclusterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxclusters'][':mxcluster_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxclusters[':mxcluster_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdMxclustersMxclusterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxclusters'][':mxcluster_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxclusters[':mxcluster_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdMxclustersMxclusterId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxclusters'][':mxcluster_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxclusters[':mxcluster_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdMxedges(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.$get(args, options))
}

export async function postApiV1OrgsOrgIdMxedges(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.$post(args, options))
}

export async function postApiV1OrgsOrgIdMxedgesAssign(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.assign.$post(args, options))
}

export async function postApiV1OrgsOrgIdMxedgesClaim(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.claim.$post(args, options))
}

export async function postApiV1OrgsOrgIdMxedgesUnassign(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.unassign.$post(args, options))
}

export async function getApiV1OrgsOrgIdMxedgesUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['upgrade']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.upgrade.$get(args, options))
}

export async function postApiV1OrgsOrgIdMxedgesUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.upgrade.$post(args, options))
}

export async function getApiV1OrgsOrgIdMxedgesUpgradeUpgradeId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges']['upgrade'][':upgrade_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges.upgrade[':upgrade_id'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdMxedgesVersion(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxedges.version.$get(args, options))
}

export async function getApiV1OrgsOrgIdMxedgesMxedgeId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdMxedgesMxedgeId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdMxedgesMxedgeId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdRestart(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].restart.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePort(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['services']['tunterm']['bounce_port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].services.tunterm.bounce_port.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameAction(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['services'][':name'][':action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].services[':name'][':action'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdSupport(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['support']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].support.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdUnregister(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['unregister']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].unregister.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdMxedgesMxedgeIdUpgrade(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxedges'][':mxedge_id']['upgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxedges[':mxedge_id'].upgrade.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdMxtunnels(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxtunnels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxtunnels.$get(args, options))
}

export async function postApiV1OrgsOrgIdMxtunnels(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['mxtunnels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].mxtunnels.$post(args, options))
}

export async function getApiV1OrgsOrgIdMxtunnelsMxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxtunnels'][':mxtunnel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxtunnels[':mxtunnel_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdMxtunnelsMxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxtunnels'][':mxtunnel_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxtunnels[':mxtunnel_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdMxtunnelsMxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['mxtunnels'][':mxtunnel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].mxtunnels[':mxtunnel_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdNacrules(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nacrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].nacrules.$get(args, options))
}

export async function postApiV1OrgsOrgIdNacrules(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nacrules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].nacrules.$post(args, options))
}

export async function getApiV1OrgsOrgIdNacrulesNacruleId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nacrules'][':nacrule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nacrules[':nacrule_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdNacrulesNacruleId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nacrules'][':nacrule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nacrules[':nacrule_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdNacrulesNacruleId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['nacrules'][':nacrule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nacrules[':nacrule_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdNactags(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nactags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].nactags.$get(args, options))
}

export async function postApiV1OrgsOrgIdNactags(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nactags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].nactags.$post(args, options))
}

export async function getApiV1OrgsOrgIdNactagsNactagId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nactags'][':nactag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nactags[':nactag_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdNactagsNactagId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['nactags'][':nactag_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nactags[':nactag_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdNactagsNactagId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['nactags'][':nactag_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].nactags[':nactag_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdNetworks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].networks.$get(args, options))
}

export async function postApiV1OrgsOrgIdNetworks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].networks.$post(args, options))
}

export async function getApiV1OrgsOrgIdNetworksNetworkId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networks'][':network_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networks[':network_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdNetworksNetworkId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networks'][':network_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networks[':network_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdNetworksNetworkId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['networks'][':network_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networks[':network_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdNetworktemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networktemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].networktemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdNetworktemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['networktemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].networktemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdNetworktemplatesNetworktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['networktemplates'][':networktemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networktemplates[':networktemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdNetworktemplatesNetworktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['networktemplates'][':networktemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networktemplates[':networktemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['networktemplates'][':networktemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].networktemplates[':networktemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdOcdevicesOutboundSshCmd(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ocdevices']['outbound_ssh_cmd']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ocdevices.outbound_ssh_cmd.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdOtherdevices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['otherdevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].otherdevices.$get(args, options))
}

export async function putApiV1OrgsOrgIdOtherdevices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['otherdevices']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].otherdevices.$put(args, options))
}

export async function getApiV1OrgsOrgIdOtherdevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['otherdevices'][':device_mac']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].otherdevices[':device_mac'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdOtherdevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['otherdevices'][':device_mac']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].otherdevices[':device_mac'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdOtherdevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['otherdevices'][':device_mac']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].otherdevices[':device_mac'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdPmaDashboards(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['pma']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].pma.dashboards.$get(args, options))
}

export async function getApiV1OrgsOrgIdPskportals(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['pskportals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].pskportals.$get(args, options))
}

export async function postApiV1OrgsOrgIdPskportals(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['pskportals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].pskportals.$post(args, options))
}

export async function getApiV1OrgsOrgIdPskportalsPskportalId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['pskportals'][':pskportal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].pskportals[':pskportal_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdPskportalsPskportalId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['pskportals'][':pskportal_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].pskportals[':pskportal_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdPskportalsPskportalId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['pskportals'][':pskportal_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].pskportals[':pskportal_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdPsks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks.$get(args, options))
}

export async function putApiV1OrgsOrgIdPsks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks.$put(args, options))
}

export async function postApiV1OrgsOrgIdPsks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks.$post(args, options))
}

export async function postApiV1OrgsOrgIdPsksImport(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks.import.$post(args, options))
}

export async function getApiV1OrgsOrgIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks'][':psk_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks[':psk_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks'][':psk_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks[':psk_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['psks'][':psk_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].psks[':psk_id'].$delete(args, options))
}

export async function postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphrase(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['psks'][':psk_id']['delete_old_passphrase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].psks[':psk_id'].delete_old_passphrase.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdRftemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['rftemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].rftemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdRftemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['rftemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].rftemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdRftemplatesRftemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['rftemplates'][':rftemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].rftemplates[':rftemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdRftemplatesRftemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['rftemplates'][':rftemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].rftemplates[':rftemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdRftemplatesRftemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['rftemplates'][':rftemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].rftemplates[':rftemplate_id'].$delete(args, options),
  )
}

export async function putApiV1OrgsOrgIdSdkclientsSdkclientId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkclients'][':sdkclient_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkclients[':sdkclient_id'].$put(args, options),
  )
}

export async function getApiV1OrgsOrgIdSdkinvites(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sdkinvites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sdkinvites.$get(args, options))
}

export async function postApiV1OrgsOrgIdSdkinvites(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sdkinvites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sdkinvites.$post(args, options))
}

export async function getApiV1OrgsOrgIdSdkinvitesSdkinviteId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSdkinvitesSdkinviteId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSdkinvitesSdkinviteId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmail(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].email.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcode(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['qrcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].qrcode.$get(args, options),
  )
}

export async function postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSms(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdkinvites'][':sdkinvite_id']['sms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdkinvites[':sdkinvite_id'].sms.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdSdktemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sdktemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sdktemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdSdktemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sdktemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sdktemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdSdktemplatesSdktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdktemplates'][':sdktemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdktemplates[':sdktemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSdktemplatesSdktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdktemplates'][':sdktemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdktemplates[':sdktemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSdktemplatesSdktemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sdktemplates'][':sdktemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sdktemplates[':sdktemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSecpolicies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['secpolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].secpolicies.$get(args, options))
}

export async function postApiV1OrgsOrgIdSecpolicies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['secpolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].secpolicies.$post(args, options))
}

export async function getApiV1OrgsOrgIdSecpoliciesSecpolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['secpolicies'][':secpolicy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].secpolicies[':secpolicy_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSecpoliciesSecpolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['secpolicies'][':secpolicy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].secpolicies[':secpolicy_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSecpoliciesSecpolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['secpolicies'][':secpolicy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].secpolicies[':secpolicy_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdServicepolicies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['servicepolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].servicepolicies.$get(args, options))
}

export async function postApiV1OrgsOrgIdServicepolicies(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['servicepolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].servicepolicies.$post(args, options))
}

export async function getApiV1OrgsOrgIdServicepoliciesServicepolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['servicepolicies'][':servicepolicy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].servicepolicies[':servicepolicy_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdServicepoliciesServicepolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['servicepolicies'][':servicepolicy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].servicepolicies[':servicepolicy_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdServicepoliciesServicepolicyId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['servicepolicies'][':servicepolicy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].servicepolicies[':servicepolicy_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdServices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].services.$get(args, options))
}

export async function postApiV1OrgsOrgIdServices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].services.$post(args, options))
}

export async function getApiV1OrgsOrgIdServicesServiceId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['services'][':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].services[':service_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdServicesServiceId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['services'][':service_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].services[':service_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdServicesServiceId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['services'][':service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].services[':service_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSetting(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].setting.$get(args, options))
}

export async function putApiV1OrgsOrgIdSetting(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['setting']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].setting.$put(args, options))
}

export async function postApiV1OrgsOrgIdSettingBlacklist(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['setting']['blacklist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].setting.blacklist.$post(args, options))
}

export async function deleteApiV1OrgsOrgIdSettingBlacklist(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['setting']['blacklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].setting.blacklist.$delete(args, options))
}

export async function postApiV1OrgsOrgIdSettingCradlepointSetup(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['cradlepoint']['setup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.cradlepoint.setup.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdSettingCradlepointSync(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['cradlepoint']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.cradlepoint.sync.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdSettingJuniperLinkAccounts(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['juniper']['link_accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.juniper.link_accounts.$post(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSettingJuniperLinkedAccount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['juniper']['linked_account']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.juniper.linked_account.$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdSettingPcapBucketSetup(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['pcap_bucket']['setup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.pcap_bucket.setup.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdSettingPcapBucketVerify(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['pcap_bucket']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.pcap_bucket.verify.$post(args, options),
  )
}

export async function postApiV1OrgsOrgIdSettingZscalerSetup(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting']['zscaler']['setup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting.zscaler.setup.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdSettingAppNameLink(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting'][':app_name']['link']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting[':app_name'].link.$get(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSettingAppNameLink(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting'][':app_name']['link']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting[':app_name'].link.$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSettingAppNameLinkAccounts(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting'][':app_name']['link_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting[':app_name'].link_accounts.$get(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSettingAppNameLinkAccounts(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['setting'][':app_name']['link_accounts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].setting[':app_name'].link_accounts.$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSitegroups(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sitegroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sitegroups.$get(args, options))
}

export async function postApiV1OrgsOrgIdSitegroups(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sitegroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sitegroups.$post(args, options))
}

export async function getApiV1OrgsOrgIdSitegroupsSitegroupId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitegroups'][':sitegroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitegroups[':sitegroup_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSitegroupsSitegroupId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitegroups'][':sitegroup_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitegroups[':sitegroup_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSitegroupsSitegroupId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitegroups'][':sitegroup_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitegroups[':sitegroup_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSites(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sites.$get(args, options))
}

export async function postApiV1OrgsOrgIdSites(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sites.$post(args, options))
}

export async function getApiV1OrgsOrgIdSitesCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sites']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sites.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdSitesSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sites']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sites.search.$get(args, options))
}

export async function postApiV1OrgsOrgIdSitesSiteNameMapsImport(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sites'][':site_name']['maps']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sites[':site_name'].maps.import.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdSitetemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sitetemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sitetemplates.$get(args, options))
}

export async function postApiV1OrgsOrgIdSitetemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['sitetemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].sitetemplates.$post(args, options))
}

export async function getApiV1OrgsOrgIdSitetemplatesSitetemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitetemplates'][':sitetemplate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitetemplates[':sitetemplate_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSitetemplatesSitetemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitetemplates'][':sitetemplate_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitetemplates[':sitetemplate_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSitetemplatesSitetemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['sitetemplates'][':sitetemplate_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].sitetemplates[':sitetemplate_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsoroles(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssoroles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssoroles.$get(args, options))
}

export async function postApiV1OrgsOrgIdSsoroles(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssoroles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssoroles.$post(args, options))
}

export async function getApiV1OrgsOrgIdSsorolesSsoroleId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssoroles'][':ssorole_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssoroles[':ssorole_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdSsorolesSsoroleId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssoroles'][':ssorole_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssoroles[':ssorole_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdSsorolesSsoroleId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ssoroles'][':ssorole_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssoroles[':ssorole_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsos(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssos.$get(args, options))
}

export async function postApiV1OrgsOrgIdSsos(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssos.$post(args, options))
}

export async function getApiV1OrgsOrgIdSsosSsoId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssos[':sso_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdSsosSsoId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssos[':sso_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdSsosSsoId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssos[':sso_id'].$delete(args, options))
}

export async function getApiV1OrgsOrgIdSsosSsoIdFailures(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['failures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssos[':sso_id'].failures.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsosSsoIdMetadata(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssos[':sso_id'].metadata.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsosSsoIdMetadataXml(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ssos'][':sso_id']['metadata.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssos[':sso_id']['metadata.xml'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsrUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssr']['upgrade']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssr.upgrade.$get(args, options))
}

export async function postApiV1OrgsOrgIdSsrUpgrade(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssr']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssr.upgrade.$post(args, options))
}

export async function postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['ssr']['upgrade'][':upgrade_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].ssr.upgrade[':upgrade_id'].cancel.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdSsrVersions(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['ssr']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].ssr.versions.$get(args, options))
}

export async function getApiV1OrgsOrgIdStats(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsAssets(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['stats']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.assets.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsAssetsCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['assets']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.assets.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsAssetsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['assets']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.assets.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsBgpPeersCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['bgp_peers']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.bgp_peers.count.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsBgpPeersSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['bgp_peers']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.bgp_peers.search.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsDevices(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['stats']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.devices.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsMxedges(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['stats']['mxedges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.mxedges.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsMxedgesMxedgeId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['mxedges'][':mxedge_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.mxedges[':mxedge_id'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsOtherdevicesDeviceMac(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['otherdevices'][':device_mac']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.otherdevices[':device_mac'].$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsPortsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['ports']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.ports.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsSwitchPortsCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['switch_ports']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.switch_ports.count.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsTunnelsCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['tunnels']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.tunnels.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsTunnelsSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['tunnels']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].stats.tunnels.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdStatsVpnPeersCount(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['vpn_peers']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.vpn_peers.count.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdStatsVpnPeersSearch(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['stats']['vpn_peers']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].stats.vpn_peers.search.$get(args, options),
  )
}

export async function postApiV1OrgsOrgIdSubscriptions(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].subscriptions.$post(args, options))
}

export async function deleteApiV1OrgsOrgIdSubscriptions(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['subscriptions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].subscriptions.$delete(args, options))
}

export async function getApiV1OrgsOrgIdTemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].templates.$get(args, options))
}

export async function postApiV1OrgsOrgIdTemplates(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].templates.$post(args, options))
}

export async function getApiV1OrgsOrgIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['templates'][':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].templates[':template_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['templates'][':template_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].templates[':template_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['templates'][':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].templates[':template_id'].$delete(args, options),
  )
}

export async function postApiV1OrgsOrgIdTemplatesTemplateIdClone(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['templates'][':template_id']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].templates[':template_id'].clone.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdTickets(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].tickets.$get(args, options))
}

export async function postApiV1OrgsOrgIdTickets(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['tickets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].tickets.$post(args, options))
}

export async function getApiV1OrgsOrgIdTicketsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['tickets']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].tickets.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdTicketsTicketId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['tickets'][':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].tickets[':ticket_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdTicketsTicketId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['tickets'][':ticket_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].tickets[':ticket_id'].$put(args, options),
  )
}

export async function postApiV1OrgsOrgIdTicketsTicketIdComments(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['tickets'][':ticket_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].tickets[':ticket_id'].comments.$post(args, options),
  )
}

export async function getApiV1OrgsOrgIdTroubleshoot(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['troubleshoot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].troubleshoot.$get(args, options))
}

export async function getApiV1OrgsOrgIdVpns(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['vpns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].vpns.$get(args, options))
}

export async function postApiV1OrgsOrgIdVpns(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['vpns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].vpns.$post(args, options))
}

export async function getApiV1OrgsOrgIdVpnsVpnId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['vpns'][':vpn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].vpns[':vpn_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdVpnsVpnId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['vpns'][':vpn_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].vpns[':vpn_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdVpnsVpnId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['vpns'][':vpn_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].vpns[':vpn_id'].$delete(args, options))
}

export async function getApiV1OrgsOrgIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].webhooks.$get(args, options))
}

export async function postApiV1OrgsOrgIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].webhooks.$post(args, options))
}

export async function getApiV1OrgsOrgIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['webhooks'][':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].webhooks[':webhook_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['webhooks'][':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].webhooks[':webhook_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['webhooks'][':webhook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].webhooks[':webhook_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdWiredClientsCount(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wired_clients']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wired_clients.count.$get(args, options))
}

export async function getApiV1OrgsOrgIdWiredClientsSearch(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wired_clients']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wired_clients.search.$get(args, options))
}

export async function getApiV1OrgsOrgIdWlans(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans.$get(args, options))
}

export async function postApiV1OrgsOrgIdWlans(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans.$post(args, options))
}

export async function getApiV1OrgsOrgIdWlansDerived(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans.derived.$get(args, options))
}

export async function getApiV1OrgsOrgIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans[':wlan_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans[':wlan_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wlans[':wlan_id'].$delete(args, options))
}

export async function postApiV1OrgsOrgIdWlansWlanIdPortalImage(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['portal_image']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wlans[':wlan_id'].portal_image.$post(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdWlansWlanIdPortalImage(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['portal_image']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wlans[':wlan_id'].portal_image.$delete(args, options),
  )
}

export async function putApiV1OrgsOrgIdWlansWlanIdPortalTemplate(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wlans'][':wlan_id']['portal_template']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wlans[':wlan_id'].portal_template.$put(args, options),
  )
}

export async function getApiV1OrgsOrgIdWxrules(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxrules.$get(args, options))
}

export async function postApiV1OrgsOrgIdWxrules(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxrules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxrules.$post(args, options))
}

export async function getApiV1OrgsOrgIdWxrulesDerived(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxrules']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxrules.derived.$get(args, options))
}

export async function getApiV1OrgsOrgIdWxrulesWxrulesId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxrules'][':wxrules_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxrules[':wxrules_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdWxrulesWxrulesId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxrules'][':wxrules_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxrules[':wxrules_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdWxrulesWxrulesId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wxrules'][':wxrules_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxrules[':wxrules_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdWxtags(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtags.$get(args, options))
}

export async function postApiV1OrgsOrgIdWxtags(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtags.$post(args, options))
}

export async function getApiV1OrgsOrgIdWxtagsApps(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtags.apps.$get(args, options))
}

export async function getApiV1OrgsOrgIdWxtagsWxtagId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags'][':wxtag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtags[':wxtag_id'].$get(args, options))
}

export async function putApiV1OrgsOrgIdWxtagsWxtagId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags'][':wxtag_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtags[':wxtag_id'].$put(args, options))
}

export async function deleteApiV1OrgsOrgIdWxtagsWxtagId(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtags'][':wxtag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxtags[':wxtag_id'].$delete(args, options),
  )
}

export async function getApiV1OrgsOrgIdWxtagsWxtagIdClients(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wxtags'][':wxtag_id']['clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxtags[':wxtag_id'].clients.$get(args, options),
  )
}

export async function getApiV1OrgsOrgIdWxtunnels(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtunnels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtunnels.$get(args, options))
}

export async function postApiV1OrgsOrgIdWxtunnels(
  args: InferRequestType<(typeof client.api.v1.orgs)[':org_id']['wxtunnels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.orgs[':org_id'].wxtunnels.$post(args, options))
}

export async function getApiV1OrgsOrgIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wxtunnels'][':wxtunnel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxtunnels[':wxtunnel_id'].$get(args, options),
  )
}

export async function putApiV1OrgsOrgIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wxtunnels'][':wxtunnel_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxtunnels[':wxtunnel_id'].$put(args, options),
  )
}

export async function deleteApiV1OrgsOrgIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.orgs)[':org_id']['wxtunnels'][':wxtunnel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.orgs[':org_id'].wxtunnels[':wxtunnel_id'].$delete(args, options),
  )
}

export async function postApiV1Recover(
  args: InferRequestType<typeof client.api.v1.recover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recover.$post(args, options))
}

export async function postApiV1RecoverVerifyToken(
  args: InferRequestType<(typeof client.api.v1.recover.verify)[':token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recover.verify[':token'].$post(args, options))
}

export async function postApiV1Register(
  args: InferRequestType<typeof client.api.v1.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.register.$post(args, options))
}

export async function postApiV1RegisterVerifyToken(
  args: InferRequestType<(typeof client.api.v1.register.verify)[':token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.register.verify[':token'].$post(args, options))
}

export async function getApiV1Self(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.self.$get(undefined, options))
}

export async function putApiV1Self(
  args: InferRequestType<typeof client.api.v1.self.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.$put(args, options))
}

export async function deleteApiV1Self(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.self.$delete(undefined, options))
}

export async function getApiV1SelfApitokens(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.self.apitokens.$get(undefined, options))
}

export async function postApiV1SelfApitokens(
  args: InferRequestType<typeof client.api.v1.self.apitokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.apitokens.$post(args, options))
}

export async function deleteApiV1SelfApitokensApitokenId(
  args: InferRequestType<(typeof client.api.v1.self.apitokens)[':apitoken_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.apitokens[':apitoken_id'].$delete(args, options))
}

export async function getApiV1SelfLogs(
  args: InferRequestType<typeof client.api.v1.self.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.logs.$get(args, options))
}

export async function getApiV1SelfOauthProvider(
  args: InferRequestType<(typeof client.api.v1.self.oauth)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.oauth[':provider'].$get(args, options))
}

export async function postApiV1SelfOauthProvider(
  args: InferRequestType<(typeof client.api.v1.self.oauth)[':provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.oauth[':provider'].$post(args, options))
}

export async function getApiV1SelfSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.self.subscriptions.$get(undefined, options))
}

export async function getApiV1SelfTwoFactorToken(
  args: InferRequestType<typeof client.api.v1.self.two_factor.token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.two_factor.token.$get(args, options))
}

export async function postApiV1SelfTwoFactorVerify(
  args: InferRequestType<typeof client.api.v1.self.two_factor.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.two_factor.verify.$post(args, options))
}

export async function postApiV1SelfUpdate(
  args: InferRequestType<typeof client.api.v1.self.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.update.$post(args, options))
}

export async function getApiV1SelfUpdateVerifyToken(
  args: InferRequestType<(typeof client.api.v1.self.update.verify)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.self.update.verify[':token'].$get(args, options))
}

export async function getApiV1SitesSiteId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].$get(args, options))
}

export async function putApiV1SitesSiteId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].$put(args, options))
}

export async function deleteApiV1SitesSiteId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].$delete(args, options))
}

export async function postApiV1SitesSiteIdAlarmsAck(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['ack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.ack.$post(args, options))
}

export async function postApiV1SitesSiteIdAlarmsAckAll(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['ack_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.ack_all.$post(args, options))
}

export async function getApiV1SitesSiteIdAlarmsCount(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.count.$get(args, options))
}

export async function getApiV1SitesSiteIdAlarmsSearch(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.search.$get(args, options))
}

export async function postApiV1SitesSiteIdAlarmsUnack(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['unack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.unack.$post(args, options))
}

export async function postApiV1SitesSiteIdAlarmsUnackAll(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['alarms']['unack_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].alarms.unack_all.$post(args, options))
}

export async function postApiV1SitesSiteIdAlarmsAlarmIdAck(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['alarms'][':alarm_id']['ack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].alarms[':alarm_id'].ack.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdAlarmsAlarmIdUnack(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['alarms'][':alarm_id']['unack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].alarms[':alarm_id'].unack.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdAnomalyClientClientMacMetric(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['anomaly']['client'][':client_mac'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].anomaly.client[':client_mac'][':metric'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetric(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['anomaly']['device'][':device_mac'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].anomaly.device[':device_mac'][':metric'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdAnomalyMetric(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['anomaly'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].anomaly[':metric'].$get(args, options))
}

export async function getApiV1SitesSiteIdApps(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].apps.$get(args, options))
}

export async function getApiV1SitesSiteIdAssetfilters(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assetfilters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].assetfilters.$get(args, options))
}

export async function postApiV1SitesSiteIdAssetfilters(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assetfilters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].assetfilters.$post(args, options))
}

export async function getApiV1SitesSiteIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['assetfilters'][':assetfilter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assetfilters[':assetfilter_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['assetfilters'][':assetfilter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assetfilters[':assetfilter_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdAssetfiltersAssetfilterId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['assetfilters'][':assetfilter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assetfilters[':assetfilter_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdAssets(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].assets.$get(args, options))
}

export async function postApiV1SitesSiteIdAssets(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].assets.$post(args, options))
}

export async function postApiV1SitesSiteIdAssetsImport(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assets']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].assets.import.$post(args, options))
}

export async function getApiV1SitesSiteIdAssetsAssetId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assets[':asset_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdAssetsAssetId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['assets'][':asset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assets[':asset_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdAssetsAssetId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['assets'][':asset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].assets[':asset_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdBeacons(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['beacons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].beacons.$get(args, options))
}

export async function postApiV1SitesSiteIdBeacons(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['beacons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].beacons.$post(args, options))
}

export async function getApiV1SitesSiteIdBeaconsBeaconId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['beacons'][':beacon_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].beacons[':beacon_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdBeaconsBeaconId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['beacons'][':beacon_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].beacons[':beacon_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdBeaconsBeaconId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['beacons'][':beacon_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].beacons[':beacon_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdCallEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['call']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].call.events.count.$get(args, options))
}

export async function getApiV1SitesSiteIdCallEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['call']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].call.events.search.$get(args, options))
}

export async function getApiV1SitesSiteIdClientsCount(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['clients']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].clients.count.$get(args, options))
}

export async function postApiV1SitesSiteIdClientsDisconnect(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['disconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.disconnect.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdClientsEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.events.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdClientsEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.events.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdClientsSearch(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['clients']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].clients.search.$get(args, options))
}

export async function getApiV1SitesSiteIdClientsSessionsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['sessions']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.sessions.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdClientsSessionsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['sessions']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.sessions.search.$get(args, options),
  )
}

export async function postApiV1SitesSiteIdClientsUnauthorize(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients']['unauthorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients.unauthorize.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdClientsClientMacDisconnect(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients'][':client_mac']['disconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients[':client_mac'].disconnect.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdClientsClientMacEvents(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients'][':client_mac']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients[':client_mac'].events.$get(args, options),
  )
}

export async function postApiV1SitesSiteIdClientsClientMacUnauthorize(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['clients'][':client_mac']['unauthorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].clients[':client_mac'].unauthorize.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdDevices(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.$get(args, options))
}

export async function postApiV1SitesSiteIdDevices(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.$post(args, options))
}

export async function getApiV1SitesSiteIdDevicesApChannels(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['ap_channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.ap_channels.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesConfigHistoryCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['config_history']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.config_history.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesConfigHistorySearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['config_history']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.config_history.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesCount(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.count.$get(args, options))
}

export async function getApiV1SitesSiteIdDevicesEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.events.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.events.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesExport(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.export.$get(args, options))
}

export async function postApiV1SitesSiteIdDevicesImport(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.import.$post(args, options))
}

export async function getApiV1SitesSiteIdDevicesLastConfigCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['last_config']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.last_config.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesLastConfigSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['last_config']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.last_config.search.$get(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesReprovision(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['reprovision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.reprovision.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesResetRadioConfig(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['reset_radio_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.reset_radio_config.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesRestart(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.restart.$post(args, options))
}

export async function getApiV1SitesSiteIdDevicesSearch(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.search.$get(args, options))
}

export async function getApiV1SitesSiteIdDevicesUpgrade(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['upgrade']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.upgrade.$get(args, options))
}

export async function postApiV1SitesSiteIdDevicesUpgrade(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.upgrade.$post(args, options))
}

export async function getApiV1SitesSiteIdDevicesUpgradeUpgradeId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['upgrade'][':upgrade_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.upgrade[':upgrade_id'].$get(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices']['upgrade'][':upgrade_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices.upgrade[':upgrade_id'].cancel.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesVersions(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.versions.$get(args, options))
}

export async function postApiV1SitesSiteIdDevicesZerioze(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices']['zerioze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].devices.zerioze.$post(args, options))
}

export async function getApiV1SitesSiteIdDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdArp(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['arp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].arp.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdBouncePort(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['bounce_port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].bounce_port.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdCableTest(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['cable_test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].cable_test.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServer(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['check_radius_server']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].check_radius_server.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdClearArp(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['clear_arp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].clear_arp.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdClearBgp(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['clear_bgp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].clear_bgp.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdClearBpduError(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['clear_bpdu_error']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].clear_bpdu_error.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdClearMacs(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['clear_macs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].clear_macs.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesDeviceIdConfigCmd(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['config_cmd']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].config_cmd.$get(args, options),
  )
}

export async function putApiV1SitesSiteIdDevicesDeviceIdHa(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['ha']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].ha.$put(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdHa(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['ha']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].ha.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdDevicesDeviceIdHa(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['ha']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].ha.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdImageImageNumber(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['image:image_number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id']['image:image_number'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumber(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['image:image_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id']['image:image_number'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdDevicesDeviceIdIot(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['iot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].iot.$get(args, options),
  )
}

export async function putApiV1SitesSiteIdDevicesDeviceIdIot(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['iot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].iot.$put(args, options),
  )
}

export async function putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfig(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['local_port_config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].local_port_config.$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfig(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['local_port_config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].local_port_config.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdLocate(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['locate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].locate.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdPing(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['ping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].ping.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdPollStats(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['poll_stats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].poll_stats.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcp(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['release_dhcp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].release_dhcp.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPassword(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['request_ztp_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].request_ztp_password.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdResolveDns(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['resolve_dns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].resolve_dns.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdRestart(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].restart.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdServicePing(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['service_ping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].service_ping.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdShowRoute(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['show_route']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].show_route.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdShowSession(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['show_session']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].show_session.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdSnapshot(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['snapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].snapshot.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdSupport(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['support']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].support.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdSyntheticTest(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['synthetic_test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].synthetic_test.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdTraceroute(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['traceroute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].traceroute.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdUnlocate(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['unlocate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].unlocate.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdUpgrade(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['upgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].upgrade.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdDevicesDeviceIdVc(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['vc']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].vc.$get(args, options),
  )
}

export async function putApiV1SitesSiteIdDevicesDeviceIdVc(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['vc']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].vc.$put(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdVc(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['vc']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].vc.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdDevicesDeviceIdVc(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['vc']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].vc.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdDevicesDeviceIdVcVcPort(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['devices'][':device_id']['vc']['vc_port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].devices[':device_id'].vc.vc_port.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdEventsFastRoam(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['events']['fast_roam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].events.fast_roam.$get(args, options))
}

export async function getApiV1SitesSiteIdEventsInterference(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['events']['interference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].events.interference.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdEventsSystemCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['events']['system']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].events.system.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdEventsSystemSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['events']['system']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].events.system.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdEvpnTopologies(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['evpn_topologies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].evpn_topologies.$get(args, options))
}

export async function postApiV1SitesSiteIdEvpnTopologies(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['evpn_topologies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].evpn_topologies.$post(args, options))
}

export async function getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['evpn_topologies'][':evpn_topology_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].evpn_topologies[':evpn_topology_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['evpn_topologies'][':evpn_topology_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].evpn_topologies[':evpn_topology_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['evpn_topologies'][':evpn_topology_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].evpn_topologies[':evpn_topology_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdGuests(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['guests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].guests.$get(args, options))
}

export async function getApiV1SitesSiteIdGuestsCount(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['guests']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].guests.count.$get(args, options))
}

export async function getApiV1SitesSiteIdGuestsSearch(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['guests']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].guests.search.$get(args, options))
}

export async function getApiV1SitesSiteIdGuestsGuestMac(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['guests'][':guest_mac']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].guests[':guest_mac'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdGuestsGuestMac(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['guests'][':guest_mac']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].guests[':guest_mac'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdGuestsGuestMac(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['guests'][':guest_mac']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].guests[':guest_mac'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdInsightsClientClientMacMetric(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['insights']['client'][':client_mac'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].insights.client[':client_mac'][':metric'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdInsightsDeviceDeviceMacMetric(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['insights']['device'][':device_mac'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].insights.device[':device_mac'][':metric'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdInsightsRogues(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['insights']['rogues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].insights.rogues.$get(args, options))
}

export async function getApiV1SitesSiteIdInsightsRoguesClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['insights']['rogues']['clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].insights.rogues.clients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdInsightsMetric(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['insights'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].insights[':metric'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdLicensesUsages(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['licenses']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].licenses.usages.$get(args, options))
}

export async function getApiV1SitesSiteIdLocationCoverage(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['location']['coverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].location.coverage.$get(args, options))
}

export async function getApiV1SitesSiteIdLocationMlCurrent(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['current']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.current.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdLocationMlDefaults(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.defaults.$get(args, options),
  )
}

export async function putApiV1SitesSiteIdLocationMlDeviceDeviceId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['device'][':device_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.device[':device_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdLocationMlDeviceDeviceId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['device'][':device_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.device[':device_id'].$delete(args, options),
  )
}

export async function putApiV1SitesSiteIdLocationMlMapMapId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['map'][':map_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.map[':map_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdLocationMlMapMapId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['map'][':map_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.map[':map_id'].$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdLocationMlResetMapMapId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['reset']['map'][':map_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.reset.map[':map_id'].$post(args, options),
  )
}

export async function getApiV1SitesSiteIdLocationMlUpdates(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['location']['ml']['updates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].location.ml.updates.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdMaps(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps.$get(args, options))
}

export async function postApiV1SitesSiteIdMaps(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps.$post(args, options))
}

export async function postApiV1SitesSiteIdMapsImport(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps.import.$post(args, options))
}

export async function getApiV1SitesSiteIdMapsMapId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps[':map_id'].$get(args, options))
}

export async function putApiV1SitesSiteIdMapsMapId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps[':map_id'].$put(args, options))
}

export async function deleteApiV1SitesSiteIdMapsMapId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].maps[':map_id'].$delete(args, options))
}

export async function postApiV1SitesSiteIdMapsMapIdAutoOrient(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['auto_orient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].auto_orient.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdMapsMapIdAutoOrient(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['auto_orient']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].auto_orient.$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdMapsMapIdAutoPlacement(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['auto_placement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].auto_placement.$get(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdAutoPlacement(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['auto_placement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].auto_placement.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdMapsMapIdAutoPlacement(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['auto_placement']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].auto_placement.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdClearAutoOrient(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['clear_auto_orient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].clear_auto_orient.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdClearAutoplacement(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['clear_autoplacement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].clear_autoplacement.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdImage(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['image']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].image.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdMapsMapIdImage(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['image']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].image.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdReplace(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].replace.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdRevertAutoOrient(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['revert_auto_orient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].revert_auto_orient.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdRevertAutoplacement(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['revert_autoplacement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].revert_autoplacement.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdSetMap(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['set_map']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].set_map.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMapsMapIdWayfindingImport(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['maps'][':map_id']['wayfinding']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].maps[':map_id'].wayfinding.import.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdMxedges(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['mxedges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].mxedges.$get(args, options))
}

export async function postApiV1SitesSiteIdMxedges(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['mxedges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].mxedges.$post(args, options))
}

export async function getApiV1SitesSiteIdMxedgesMxedgeId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['mxedges'][':mxedge_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].mxedges[':mxedge_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdMxedgesMxedgeId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['mxedges'][':mxedge_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].mxedges[':mxedge_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdMxedgesMxedgeId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['mxedges'][':mxedge_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].mxedges[':mxedge_id'].$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdMxedgesMxedgeIdSupport(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['mxedges'][':mxedge_id']['support']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].mxedges[':mxedge_id'].support.$post(args, options),
  )
}

export async function postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptAps(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['mxtunnels'][':mxtunnel_id']['preempt_aps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].mxtunnels[':mxtunnel_id'].preempt_aps.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdOtherdevices(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['otherdevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].otherdevices.$get(args, options))
}

export async function getApiV1SitesSiteIdPcaps(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['pcaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].pcaps.$get(args, options))
}

export async function getApiV1SitesSiteIdPcapsCapture(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['pcaps']['capture']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].pcaps.capture.$get(args, options))
}

export async function postApiV1SitesSiteIdPcapsCapture(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['pcaps']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].pcaps.capture.$post(args, options))
}

export async function deleteApiV1SitesSiteIdPcapsCapture(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['pcaps']['capture']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].pcaps.capture.$delete(args, options))
}

export async function getApiV1SitesSiteIdPsks(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks.$get(args, options))
}

export async function putApiV1SitesSiteIdPsks(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks.$put(args, options))
}

export async function postApiV1SitesSiteIdPsks(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks.$post(args, options))
}

export async function postApiV1SitesSiteIdPsksImport(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks.import.$post(args, options))
}

export async function getApiV1SitesSiteIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks'][':psk_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks[':psk_id'].$get(args, options))
}

export async function putApiV1SitesSiteIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks'][':psk_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks[':psk_id'].$put(args, options))
}

export async function deleteApiV1SitesSiteIdPsksPskId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['psks'][':psk_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].psks[':psk_id'].$delete(args, options))
}

export async function getApiV1SitesSiteIdRfdiags(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rfdiags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rfdiags.$get(args, options))
}

export async function postApiV1SitesSiteIdRfdiags(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rfdiags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rfdiags.$post(args, options))
}

export async function getApiV1SitesSiteIdRfdiagsRfdiagId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rfdiags'][':rfdiag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rfdiags[':rfdiag_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdRfdiagsRfdiagId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rfdiags'][':rfdiag_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rfdiags[':rfdiag_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdRfdiagsRfdiagId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rfdiags'][':rfdiag_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rfdiags[':rfdiag_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdRfdiagsRfdiagIdDownload(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rfdiags'][':rfdiag_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rfdiags[':rfdiag_id'].download.$get(args, options),
  )
}

export async function postApiV1SitesSiteIdRfdiagsRfdiagIdStop(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rfdiags'][':rfdiag_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rfdiags[':rfdiag_id'].stop.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdRoguesEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rogues']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rogues.events.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdRoguesEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rogues']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rogues.events.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdRoguesRogueBssid(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rogues'][':rogue_bssid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rogues[':rogue_bssid'].$get(args, options),
  )
}

export async function postApiV1SitesSiteIdRoguesRogueBssidDeauthClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rogues'][':rogue_bssid']['deauth_clients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rogues[':rogue_bssid'].deauth_clients.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdRrmCurrent(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rrm']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rrm.current.$get(args, options))
}

export async function getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBand(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rrm']['current']['devices'][':device_id']['band'][':band']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rrm.current.devices[':device_id'].band[':band'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdRrmEvents(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rrm']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rrm.events.$get(args, options))
}

export async function postApiV1SitesSiteIdRrmOptimize(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rrm']['optimize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rrm.optimize.$post(args, options))
}

export async function getApiV1SitesSiteIdRssizones(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rssizones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rssizones.$get(args, options))
}

export async function postApiV1SitesSiteIdRssizones(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['rssizones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].rssizones.$post(args, options))
}

export async function getApiV1SitesSiteIdRssizonesRssizoneId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rssizones'][':rssizone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rssizones[':rssizone_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdRssizonesRssizoneId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rssizones'][':rssizone_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rssizones[':rssizone_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdRssizonesRssizoneId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['rssizones'][':rssizone_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].rssizones[':rssizone_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdSetting(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].setting.$get(args, options))
}

export async function putApiV1SitesSiteIdSetting(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['setting']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].setting.$put(args, options))
}

export async function postApiV1SitesSiteIdSettingBlacklist(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['setting']['blacklist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].setting.blacklist.$post(args, options))
}

export async function deleteApiV1SitesSiteIdSettingBlacklist(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['setting']['blacklist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].setting.blacklist.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdSettingWatchedStation(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['setting']['watched_station']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].setting.watched_station.$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdSettingWatchedStation(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['setting']['watched_station']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].setting.watched_station.$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdSettingWhitelist(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['setting']['whitelist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].setting.whitelist.$post(args, options))
}

export async function deleteApiV1SitesSiteIdSettingWhitelist(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['setting']['whitelist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].setting.whitelist.$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdSkyatpEventsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['skyatp']['events']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].skyatp.events.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSkyatpEventsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['skyatp']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].skyatp.events.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifierClassifierSummary(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['classifier'][':classifier']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].classifier[
      ':classifier'
    ].summary.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifiers(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['classifiers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].classifiers.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricHistogram(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['histogram']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].histogram.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactSummary(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impact-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impact-summary'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApplications(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-applications'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedAps(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-aps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-aps'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedChassis(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-chassis']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-chassis'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-clients'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedGateways(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-gateways']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-gateways'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedInterfaces(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-interfaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-interfaces'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedSwitches(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-switches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-switches'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedUsers(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['impacted-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'][
      'impacted-users'
    ].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricSummary(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].summary.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetricMetricThreshold(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['threshold']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].threshold.$get(
      args,
      options,
    ),
  )
}

export async function putApiV1SitesSiteIdSleScopeScopeIdMetricMetricThreshold(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['threshold']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].threshold.$put(
      args,
      options,
    ),
  )
}

export async function postApiV1SitesSiteIdSleScopeScopeIdMetricMetricThreshold(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metric'][':metric']['threshold']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metric[':metric'].threshold.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1SitesSiteIdSleScopeScopeIdMetrics(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['sle'][':scope'][':scope_id']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].sle[':scope'][':scope_id'].metrics.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdSsrUpgradeUpgradeId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['ssr']['upgrade'][':upgrade_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].ssr.upgrade[':upgrade_id'].$get(args, options),
  )
}

export async function postApiV1SitesSiteIdSsrDeviceIdUpgrade(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['ssr'][':device_id']['upgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].ssr[':device_id'].upgrade.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdStats(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsAppsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['apps']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.apps.count.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsAssets(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.assets.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsAssetsAssetId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['assets']['asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.assets.asset_id.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsAssetsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['assets']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.assets.count.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsAssetsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['assets']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.assets.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsBeacons(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['beacons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.beacons.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsBgpPeersCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['bgp_peers']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.bgp_peers.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsBgpPeersSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['bgp_peers']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.bgp_peers.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsCallsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['calls']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.calls.count.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsCallsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['calls']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.calls.search.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsClients(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.clients.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsClientsClientMac(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['clients'][':client_mac']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.clients[':client_mac'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDevices(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.devices.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsDevicesDeviceId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['devices'][':device_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.devices[':device_id'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDevicesDeviceIdClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['devices'][':device_id']['clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.devices[':device_id'].clients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDiscoveredAssets(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['discovered_assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.discovered_assets.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['discovered_switch_metrics']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.discovered_switch_metrics.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDiscoveredSwitchesCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['discovered_switches']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.discovered_switches.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDiscoveredSwitchesMetrics(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['discovered_switches']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.discovered_switches.metrics.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsDiscoveredSwitchesSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['discovered_switches']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.discovered_switches.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsFilteredAssets(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['filtered_assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.filtered_assets.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsGatewaysMetrics(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['gateways']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.gateways.metrics.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsMapsMapIdClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['maps'][':map_id']['clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.maps[':map_id'].clients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssets(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['maps'][':map_id']['discovered_assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.maps[':map_id'].discovered_assets.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsMapsMapIdSdkclients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['maps'][':map_id']['sdkclients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.maps[':map_id'].sdkclients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['maps'][':map_id']['unconnected_clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.maps[':map_id'].unconnected_clients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsMxedges(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['mxedges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.mxedges.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsMxedgesMxedgeId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['mxedges'][':mxedge_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.mxedges[':mxedge_id'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsPortsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['ports']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.ports.count.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsPortsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['ports']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.ports.search.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsSdkclientsSdkclientId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['sdkclients'][':sdkclient_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.sdkclients[':sdkclient_id'].$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsSwitchPortsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['switch_ports']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.switch_ports.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsSwitchPortsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['switch_ports']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.switch_ports.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsSwitchesMetrics(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats']['switches']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats.switches.metrics.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdStatsWxrules(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['wxrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.wxrules.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsZones(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['stats']['zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].stats.zones.$get(args, options))
}

export async function getApiV1SitesSiteIdStatsZoneTypeZoneId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['stats'][':zone_type'][':zone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].stats[':zone_type'][':zone_id'].$get(args, options),
  )
}

export async function postApiV1SitesSiteIdSubscriptions(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].subscriptions.$post(args, options))
}

export async function deleteApiV1SitesSiteIdSubscriptions(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['subscriptions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].subscriptions.$delete(args, options))
}

export async function getApiV1SitesSiteIdSyntheticTest(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['synthetic_test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].synthetic_test.$get(args, options))
}

export async function postApiV1SitesSiteIdSyntheticTest(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['synthetic_test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].synthetic_test.$post(args, options))
}

export async function getApiV1SitesSiteIdUisettings(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['uisettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].uisettings.$get(args, options))
}

export async function postApiV1SitesSiteIdUisettings(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['uisettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].uisettings.$post(args, options))
}

export async function getApiV1SitesSiteIdUisettingsDerived(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['uisettings']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].uisettings.derived.$get(args, options))
}

export async function getApiV1SitesSiteIdUisettingsUisettingId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['uisettings'][':uisetting_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].uisettings[':uisetting_id'].$get(args, options),
  )
}

export async function postApiV1SitesSiteIdUisettingsUisettingId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['uisettings'][':uisetting_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].uisettings[':uisetting_id'].$post(args, options),
  )
}

export async function deleteApiV1SitesSiteIdUisettingsUisettingId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['uisettings'][':uisetting_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].uisettings[':uisetting_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdVbeacons(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['vbeacons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].vbeacons.$get(args, options))
}

export async function postApiV1SitesSiteIdVbeacons(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['vbeacons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].vbeacons.$post(args, options))
}

export async function getApiV1SitesSiteIdVbeaconsVbeaconId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['vbeacons'][':vbeacon_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].vbeacons[':vbeacon_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdVbeaconsVbeaconId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['vbeacons'][':vbeacon_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].vbeacons[':vbeacon_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdVbeaconsVbeaconId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['vbeacons'][':vbeacon_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].vbeacons[':vbeacon_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].webhooks.$get(args, options))
}

export async function postApiV1SitesSiteIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].webhooks.$post(args, options))
}

export async function getApiV1SitesSiteIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['webhooks'][':webhook_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].webhooks[':webhook_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['webhooks'][':webhook_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].webhooks[':webhook_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['webhooks'][':webhook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].webhooks[':webhook_id'].$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdWebhooksWebhookIdPing(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['webhooks'][':webhook_id']['ping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].webhooks[':webhook_id'].ping.$post(args, options),
  )
}

export async function getApiV1SitesSiteIdWiredClientsCount(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wired_clients']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wired_clients.count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdWiredClientsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wired_clients']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wired_clients.search.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdWlans(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wlans.$get(args, options))
}

export async function postApiV1SitesSiteIdWlans(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wlans.$post(args, options))
}

export async function getApiV1SitesSiteIdWlansDerived(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wlans.derived.$get(args, options))
}

export async function getApiV1SitesSiteIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans'][':wlan_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wlans[':wlan_id'].$get(args, options))
}

export async function putApiV1SitesSiteIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans'][':wlan_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wlans[':wlan_id'].$put(args, options))
}

export async function deleteApiV1SitesSiteIdWlansWlanId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wlans'][':wlan_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wlans[':wlan_id'].$delete(args, options),
  )
}

export async function postApiV1SitesSiteIdWlansWlanIdPortalImage(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wlans'][':wlan_id']['portal_image']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wlans[':wlan_id'].portal_image.$post(args, options),
  )
}

export async function putApiV1SitesSiteIdWlansWlanIdPortalTemplate(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wlans'][':wlan_id']['portal_template']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wlans[':wlan_id'].portal_template.$put(args, options),
  )
}

export async function getApiV1SitesSiteIdWxrules(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxrules.$get(args, options))
}

export async function postApiV1SitesSiteIdWxrules(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxrules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxrules.$post(args, options))
}

export async function getApiV1SitesSiteIdWxrulesDerived(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxrules']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxrules.derived.$get(args, options))
}

export async function getApiV1SitesSiteIdWxrulesWxrulesId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxrules'][':wxrules_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxrules[':wxrules_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdWxrulesWxrulesId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxrules'][':wxrules_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxrules[':wxrules_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdWxrulesWxrulesId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxrules'][':wxrules_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxrules[':wxrules_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdWxtags(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxtags.$get(args, options))
}

export async function postApiV1SitesSiteIdWxtags(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxtags.$post(args, options))
}

export async function getApiV1SitesSiteIdWxtagsApps(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtags']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxtags.apps.$get(args, options))
}

export async function getApiV1SitesSiteIdWxtagsWxtagId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtags'][':wxtag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtags[':wxtag_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdWxtagsWxtagId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtags'][':wxtag_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtags[':wxtag_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdWxtagsWxtagId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxtags'][':wxtag_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtags[':wxtag_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdWxtagsWxtagIdClients(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxtags'][':wxtag_id']['clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtags[':wxtag_id'].clients.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdWxtunnels(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtunnels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxtunnels.$get(args, options))
}

export async function postApiV1SitesSiteIdWxtunnels(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['wxtunnels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].wxtunnels.$post(args, options))
}

export async function getApiV1SitesSiteIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxtunnels'][':wxtunnel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtunnels[':wxtunnel_id'].$get(args, options),
  )
}

export async function putApiV1SitesSiteIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxtunnels'][':wxtunnel_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtunnels[':wxtunnel_id'].$put(args, options),
  )
}

export async function deleteApiV1SitesSiteIdWxtunnelsWxtunnelId(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id']['wxtunnels'][':wxtunnel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].wxtunnels[':wxtunnel_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdZones(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].zones.$get(args, options))
}

export async function postApiV1SitesSiteIdZones(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['zones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].zones.$post(args, options))
}

export async function getApiV1SitesSiteIdZonesZoneId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['zones'][':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].zones[':zone_id'].$get(args, options))
}

export async function putApiV1SitesSiteIdZonesZoneId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['zones'][':zone_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].zones[':zone_id'].$put(args, options))
}

export async function deleteApiV1SitesSiteIdZonesZoneId(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['zones'][':zone_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'].zones[':zone_id'].$delete(args, options),
  )
}

export async function getApiV1SitesSiteIdZoneTypeCount(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id'][':zone_type']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'][':zone_type'].count.$get(args, options),
  )
}

export async function getApiV1SitesSiteIdZoneTypeVisitsSearch(
  args: InferRequestType<
    (typeof client.api.v1.sites)[':site_id'][':zone_type']['visits']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.sites[':site_id'][':zone_type'].visits.search.$get(args, options),
  )
}

export async function getApiV1UtilsTestTelstra(
  args: InferRequestType<typeof client.api.v1.utils.test_telstra.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.utils.test_telstra.$get(args, options))
}

export async function postApiV1UtilsTestTwilio(
  args: InferRequestType<typeof client.api.v1.utils.test_twilio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.utils.test_twilio.$post(args, options))
}

export async function postWebhookExampleAlarm(
  args: InferRequestType<typeof client.webhook_example._alarm_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._alarm_.$post(args, options))
}

export async function postWebhookExampleAssetRaw(
  args: InferRequestType<typeof client.webhook_example._asset_raw_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._asset_raw_.$post(args, options))
}

export async function postWebhookExampleAudit(
  args: InferRequestType<typeof client.webhook_example._audit_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._audit_.$post(args, options))
}

export async function postWebhookExampleClientJoin(
  args: InferRequestType<typeof client.webhook_example._client_join_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._client_join_.$post(args, options))
}

export async function postWebhookExampleClientSessions(
  args: InferRequestType<typeof client.webhook_example._client_sessions_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._client_sessions_.$post(args, options))
}

export async function postWebhookExampleDeviceEvents(
  args: InferRequestType<typeof client.webhook_example._device_events_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._device_events_.$post(args, options))
}

export async function postWebhookExampleDeviceUpdowns(
  args: InferRequestType<typeof client.webhook_example._device_updowns_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._device_updowns_.$post(args, options))
}

export async function postWebhookExampleDiscoveredRawRssi(
  args: InferRequestType<typeof client.webhook_example._discovered_raw_rssi_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._discovered_raw_rssi_.$post(args, options))
}

export async function postWebhookExampleLocation(
  args: InferRequestType<typeof client.webhook_example._location_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._location_.$post(args, options))
}

export async function postWebhookExampleOccupancyAlerts(
  args: InferRequestType<typeof client.webhook_example._occupancy_alerts_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._occupancy_alerts_.$post(args, options))
}

export async function postWebhookExamplePing(
  args: InferRequestType<typeof client.webhook_example._ping_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._ping_.$post(args, options))
}

export async function postWebhookExampleSdkclientScanData(
  args: InferRequestType<typeof client.webhook_example._sdkclient_scan_data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._sdkclient_scan_data.$post(args, options))
}

export async function postWebhookExampleZone(
  args: InferRequestType<typeof client.webhook_example._zone_.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_example._zone_.$post(args, options))
}
