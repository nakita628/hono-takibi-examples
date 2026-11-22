import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectType(
  args: InferRequestType<
    (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analystData.add[':analystType'][':analystObjectUUID'][':analystObjectType'].$post(
      args,
      options,
    ),
  )
}

export async function postAnalystDataEditAnalystTypeAnalystDataID(
  args: InferRequestType<
    (typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analystData.edit[':analystType'][':analystDataID'].$post(args, options),
  )
}

export async function deleteAnalystDataDeleteAnalystTypeAnalystDataID(
  args: InferRequestType<
    (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analystData.delete[':analystType'][':analystDataID'].$delete(args, options),
  )
}

export async function getAnalystDataIndexAnalystType(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analystData.index[':analystType'].$get(args, options))
}

export async function getAnalystDataViewAnalystTypeAnalystDataID(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analystData.view[':analystType'][':analystDataID'].$get(args, options),
  )
}

export async function postAnalystDataIndexMinimal(
  args: InferRequestType<typeof client.analystData.indexMinimal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analystData.indexMinimal.$post(args, options))
}

export async function postAttributesRestSearch(
  args: InferRequestType<typeof client.attributes.restSearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.restSearch.$post(args, options))
}

export async function postAttributesAddEventId(
  args: InferRequestType<(typeof client.attributes.add)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.add[':eventId'].$post(args, options))
}

export async function putAttributesEditAttributeId(
  args: InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.edit[':attributeId'].$put(args, options))
}

export async function deleteAttributesDeleteAttributeId(
  args: InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.delete[':attributeId'].$delete(args, options))
}

export async function postAttributesRestoreAttributeId(
  args: InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.restore[':attributeId'].$post(args, options))
}

export async function postAttributesAddTagAttributeIdTagIdLocalLocal(
  args: InferRequestType<
    (typeof client.attributes.addTag)[':attributeId'][':tagId']['local::local']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attributes.addTag[':attributeId'][':tagId']['local::local'].$post(args, options),
  )
}

export async function postAttributesRemoveTagAttributeIdTagId(
  args: InferRequestType<(typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attributes.removeTag[':attributeId'][':tagId'].$post(args, options),
  )
}

export async function getAttributes(options?: ClientRequestOptions) {
  return await parseResponse(client.attributes.$get(undefined, options))
}

export async function getAttributesViewAttributeId(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.view[':attributeId'].$get(args, options))
}

export async function getAttributesGetAttributeByB64ValueBase64Value(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attributes.getAttributeByB64Value[':base64Value'].$get(args, options),
  )
}

export async function getAttributesAttributeStatisticsContextPercentage(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attributes.attributeStatistics[':context'][':percentage'].$get(args, options),
  )
}

export async function getAttributesDescribeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.attributes.describeTypes.$get(undefined, options))
}

export async function postAttributesEnrichAttributeId(
  args: InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.enrich[':attributeId'].$post(args, options))
}

export async function postCollectionsAdd(
  args: InferRequestType<typeof client.collections.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.add.$post(args, options))
}

export async function postCollectionsEditCollectionId(
  args: InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.edit[':collectionId'].$post(args, options))
}

export async function deleteCollectionsDeleteCollectionId(
  args: InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.delete[':collectionId'].$delete(args, options))
}

export async function getCollectionsViewCollectionId(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.view[':collectionId'].$get(args, options))
}

export async function postCollectionsIndexFilter(
  args: InferRequestType<(typeof client.collections.index)[':filter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.index[':filter'].$post(args, options))
}

export async function getEventReportsViewEventReportId(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventReports.view[':eventReportId'].$get(args, options))
}

export async function postEventReportsAddEventId(
  args: InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventReports.add[':eventId'].$post(args, options))
}

export async function postEventReportsEditEventReportId(
  args: InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventReports.edit[':eventReportId'].$post(args, options))
}

export async function postEventReportsDeleteEventReportId(
  args: InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventReports.delete[':eventReportId'].$post(args, options))
}

export async function postEventReportsDeleteEventReportIdHardDelete(
  args: InferRequestType<
    (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eventReports.delete[':eventReportId'][':hardDelete'].$post(args, options),
  )
}

export async function postEventReportsRestoreEventReportId(
  args: InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventReports.restore[':eventReportId'].$post(args, options))
}

export async function getEventReportsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.eventReports.index.$get(undefined, options))
}

export async function postEventReportsImportReportFromUrlEventId(
  args: InferRequestType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eventReports.importReportFromUrl[':eventId'].$post(args, options),
  )
}

export async function postEventsRestSearch(
  args: InferRequestType<typeof client.events.restSearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.restSearch.$post(args, options))
}

export async function postEventsAdd(
  args: InferRequestType<typeof client.events.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.add.$post(args, options))
}

export async function putEventsEditEventId(
  args: InferRequestType<(typeof client.events.edit)[':eventId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.edit[':eventId'].$put(args, options))
}

export async function deleteEventsDeleteEventId(
  args: InferRequestType<(typeof client.events.delete)[':eventId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.delete[':eventId'].$delete(args, options))
}

export async function getEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.events.$get(undefined, options))
}

export async function postEventsIndex(
  args: InferRequestType<typeof client.events.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.index.$post(args, options))
}

export async function getEventsViewEventId(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.view[':eventId'].$get(args, options))
}

export async function postEventsPublishEventId(
  args: InferRequestType<(typeof client.events.publish)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.publish[':eventId'].$post(args, options))
}

export async function postEventsUnpublishEventId(
  args: InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.unpublish[':eventId'].$post(args, options))
}

export async function postEventsAddTagEventIdTagIdLocalLocal(
  args: InferRequestType<
    (typeof client.events.addTag)[':eventId'][':tagId']['local::local']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events.addTag[':eventId'][':tagId']['local::local'].$post(args, options),
  )
}

export async function postEventsRemoveTagEventIdTagId(
  args: InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.removeTag[':eventId'][':tagId'].$post(args, options))
}

export async function postEventsEnrichEventEventId(
  args: InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.enrichEvent[':eventId'].$post(args, options))
}

export async function getGalaxies(options?: ClientRequestOptions) {
  return await parseResponse(client.galaxies.$get(undefined, options))
}

export async function postGalaxies(
  args: InferRequestType<typeof client.galaxies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxies.$post(args, options))
}

export async function getGalaxiesViewGalaxyId(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxies.view[':galaxyId'].$get(args, options))
}

export async function postGalaxiesUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.galaxies.update.$post(undefined, options))
}

export async function deleteGalaxiesDeleteGalaxyId(
  args: InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxies.delete[':galaxyId'].$delete(args, options))
}

export async function postGalaxiesImport(
  args: InferRequestType<typeof client.galaxies.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxies.import.$post(args, options))
}

export async function postGalaxiesExportGalaxyId(
  args: InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxies.export[':galaxyId'].$post(args, options))
}

export async function postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocal(
  args: InferRequestType<
    (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local::local']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.galaxies.attachCluster[':attachTargetId'][':attachTargetType']['local::local'].$post(
      args,
      options,
    ),
  )
}

export async function postGalaxyClustersAddGalaxyId(
  args: InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.add[':galaxyId'].$post(args, options))
}

export async function putGalaxyClustersEditGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.edit[':galaxyClusterId'].$put(args, options))
}

export async function getGalaxyClustersIndexGalaxyId(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.index[':galaxyId'].$get(args, options))
}

export async function postGalaxyClustersIndexGalaxyId(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.index[':galaxyId'].$post(args, options))
}

export async function getGalaxyClustersViewGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.view[':galaxyClusterId'].$get(args, options))
}

export async function postGalaxyClustersPublishGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.galaxy_clusters.publish[':galaxyClusterId'].$post(args, options),
  )
}

export async function postGalaxyClustersUnpublishGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.galaxy_clusters.unpublish[':galaxyClusterId'].$post(args, options),
  )
}

export async function postGalaxyClustersDeleteGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.galaxy_clusters.delete[':galaxyClusterId'].$post(args, options))
}

export async function postGalaxyClustersRestoreGalaxyClusterId(
  args: InferRequestType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.galaxy_clusters.restore[':galaxyClusterId'].$post(args, options),
  )
}

export async function postUsersInitiatePasswordResetUserIdFirstTimeReset(
  args: InferRequestType<
    (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users.initiatePasswordReset[':userId'][':firstTimeReset'].$post(args, options),
  )
}

export async function postAdminUsersAdd(
  args: InferRequestType<typeof client.admin.users.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.add.$post(args, options))
}

export async function putAdminUsersEditUserId(
  args: InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.edit[':userId'].$put(args, options))
}

export async function deleteAdminUsersDeleteUserId(
  args: InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.delete[':userId'].$delete(args, options))
}

export async function getAdminUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.users.$get(undefined, options))
}

export async function getAdminUsersViewUserId(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.view[':userId'].$get(args, options))
}

export async function deleteUsersTotpDeleteUserId(
  args: InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.totp_delete[':userId'].$delete(args, options))
}

export async function postAdminOrganisationsAdd(
  args: InferRequestType<typeof client.admin.organisations.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.organisations.add.$post(args, options))
}

export async function putAdminOrganisationsEditOrganisationId(
  args: InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.organisations.edit[':organisationId'].$put(args, options))
}

export async function deleteAdminOrganisationsDeleteOrganisationId(
  args: InferRequestType<(typeof client.admin.organisations.delete)[':organisationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.organisations.delete[':organisationId'].$delete(args, options),
  )
}

export async function postAdminLogs(
  args: InferRequestType<typeof client.admin.logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.logs.$post(args, options))
}

export async function getOrganisations(options?: ClientRequestOptions) {
  return await parseResponse(client.organisations.$get(undefined, options))
}

export async function getOrganisationsViewOrganisationId(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations.view[':organisationId'].$get(args, options))
}

export async function postServersAdd(
  args: InferRequestType<typeof client.servers.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.add.$post(args, options))
}

export async function putServersEditServerId(
  args: InferRequestType<(typeof client.servers.edit)[':serverId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.edit[':serverId'].$put(args, options))
}

export async function postServersDeleteServerId(
  args: InferRequestType<(typeof client.servers.delete)[':serverId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.delete[':serverId'].$post(args, options))
}

export async function getServers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.$get(undefined, options))
}

export async function getServersPullServerIdPullTechnique(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.pull[':serverId'][':pullTechnique'].$get(args, options))
}

export async function getServersPushServerIdPushTechnique(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.push[':serverId'][':pushTechnique'].$get(args, options))
}

export async function getServersGetVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.getVersion.$get(undefined, options))
}

export async function getServersGetPyMISPVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.getPyMISPVersion.$get(undefined, options))
}

export async function getServersServerSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.serverSettings.$get(undefined, options))
}

export async function getServersGetWorkers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.getWorkers.$get(undefined, options))
}

export async function postServersStartWorkerWorkerType(
  args: InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.startWorker[':workerType'].$post(args, options))
}

export async function postServersStopWorkerWorkerPid(
  args: InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.stopWorker[':workerPid'].$post(args, options))
}

export async function postServersKillAllWorkers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.killAllWorkers.$post(undefined, options))
}

export async function postServersRestartWorkers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.restartWorkers.$post(undefined, options))
}

export async function postServersRestartDeadWorkers(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.restartDeadWorkers.$post(undefined, options))
}

export async function postServersUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.update.$post(undefined, options))
}

export async function postServersUpdateJSON(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.updateJSON.$post(undefined, options))
}

export async function postServersCache(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.cache.$post(undefined, options))
}

export async function postServersCreateSync(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.createSync.$post(undefined, options))
}

export async function getServersGetInstanceUUID(options?: ClientRequestOptions) {
  return await parseResponse(client.servers.getInstanceUUID.$get(undefined, options))
}

export async function getServersGetSettingSettingName(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.getSetting[':settingName'].$get(args, options))
}

export async function postServersServerSettingsEditSettingName(
  args: InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.serverSettingsEdit[':settingName'].$post(args, options))
}

export async function postServersImport(
  args: InferRequestType<typeof client.servers.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.import.$post(args, options))
}

export async function postSharingGroupsAdd(
  args: InferRequestType<typeof client.sharing_groups.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sharing_groups.add.$post(args, options))
}

export async function postSharingGroupsEditSharingGroupId(
  args: InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sharing_groups.edit[':sharingGroupId'].$post(args, options))
}

export async function deleteSharingGroupsDeleteSharingGroupId(
  args: InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sharing_groups.delete[':sharingGroupId'].$delete(args, options))
}

export async function getSharingGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.sharing_groups.$get(undefined, options))
}

export async function getSharingGroupsViewSharingGroupId(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sharing_groups.view[':sharingGroupId'].$get(args, options))
}

export async function postSharingGroupsAddOrgSharingGroupIdOrganisationId(
  args: InferRequestType<
    (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_groups.addOrg[':sharingGroupId'][':organisationId'].$post(args, options),
  )
}

export async function postSharingGroupsRemoveOrgSharingGroupIdOrganisationId(
  args: InferRequestType<
    (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_groups.removeOrg[':sharingGroupId'][':organisationId'].$post(args, options),
  )
}

export async function postSharingGroupsAddServerSharingGroupIdServerId(
  args: InferRequestType<
    (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_groups.addServer[':sharingGroupId'][':serverId'].$post(args, options),
  )
}

export async function postSharingGroupsRemoveServerSharingGroupServerIdServerId(
  args: InferRequestType<
    (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_groups.removeServer[':sharingGroupServerId'][':serverId'].$post(args, options),
  )
}

export async function postSharingGroupBlueprintsAdd(
  args: InferRequestType<typeof client.sharing_group_blueprints.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sharing_group_blueprints.add.$post(args, options))
}

export async function deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.delete[':sharingGroupBlueprintId'].$delete(args, options),
  )
}

export async function postSharingGroupBlueprintsDetachSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.detach[':sharingGroupBlueprintId'].$post(args, options),
  )
}

export async function postSharingGroupBlueprintsEditSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.edit[':sharingGroupBlueprintId'].$post(args, options),
  )
}

export async function postSharingGroupBlueprintsExecuteSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.execute[':sharingGroupBlueprintId'].$post(args, options),
  )
}

export async function getSharingGroupBlueprintsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.sharing_group_blueprints.index.$get(undefined, options))
}

export async function getSharingGroupBlueprintsViewSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.view[':sharingGroupBlueprintId'].$get(args, options),
  )
}

export async function getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintId(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sharing_group_blueprints.viewOrgs[':sharingGroupBlueprintId'].$get(args, options),
  )
}

export async function getFeeds(options?: ClientRequestOptions) {
  return await parseResponse(client.feeds.$get(undefined, options))
}

export async function getFeedsViewFeedId(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.view[':feedId'].$get(args, options))
}

export async function postFeedsAdd(
  args: InferRequestType<typeof client.feeds.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.add.$post(args, options))
}

export async function putFeedsEditFeedId(
  args: InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.edit[':feedId'].$put(args, options))
}

export async function postFeedsEnableFeedId(
  args: InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.enable[':feedId'].$post(args, options))
}

export async function postFeedsDisableFeedId(
  args: InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.disable[':feedId'].$post(args, options))
}

export async function postFeedsCacheFeedsCacheFeedsScope(
  args: InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.cacheFeeds[':cacheFeedsScope'].$post(args, options))
}

export async function postFeedsFetchFromFeedFeedId(
  args: InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.fetchFromFeed[':feedId'].$post(args, options))
}

export async function postFeedsFetchFromAllFeeds(options?: ClientRequestOptions) {
  return await parseResponse(client.feeds.fetchFromAllFeeds.$post(undefined, options))
}

export async function getWarninglists(options?: ClientRequestOptions) {
  return await parseResponse(client.warninglists.$get(undefined, options))
}

export async function postWarninglists(
  args: InferRequestType<typeof client.warninglists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.warninglists.$post(args, options))
}

export async function postWarninglistsToggleEnable(
  args: InferRequestType<typeof client.warninglists.toggleEnable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.warninglists.toggleEnable.$post(args, options))
}

export async function getWarninglistsViewWarninglistId(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.warninglists.view[':warninglistId'].$get(args, options))
}

export async function postWarninglistsCheckValue(
  args: InferRequestType<typeof client.warninglists.checkValue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.warninglists.checkValue.$post(args, options))
}

export async function postWarninglistsUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.warninglists.update.$post(undefined, options))
}

export async function getNoticelists(options?: ClientRequestOptions) {
  return await parseResponse(client.noticelists.$get(undefined, options))
}

export async function getNoticelistsViewNoticelistId(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.noticelists.view[':noticelistId'].$get(args, options))
}

export async function postNoticelistsToggleEnableNoticelistId(
  args: InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.noticelists.toggleEnable[':noticelistId'].$post(args, options))
}

export async function postNoticelistsUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.noticelists.update.$post(undefined, options))
}

export async function postObjectsRestsearch(
  args: InferRequestType<typeof client.objects.restsearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.restsearch.$post(args, options))
}

export async function postObjectsAddEventIdObjectTemplateId(
  args: InferRequestType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.objects.add[':eventId'][':objectTemplateId'].$post(args, options),
  )
}

export async function getObjectsViewObjectId(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.view[':objectId'].$get(args, options))
}

export async function deleteObjectsDeleteObjectIdHardDelete(
  args: InferRequestType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.objects.delete[':objectId'][':hardDelete'].$delete(args, options),
  )
}

export async function getSightingsIndexEventId(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sightings.index[':eventId'].$get(args, options))
}

export async function postSightingsAdd(
  args: InferRequestType<typeof client.sightings.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sightings.add.$post(args, options))
}

export async function postSightingsAddAttributeId(
  args: InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sightings.add[':attributeId'].$post(args, options))
}

export async function postSightingsDeleteSightingId(
  args: InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sightings.delete[':sightingId'].$post(args, options))
}

export async function getTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tags.$get(undefined, options))
}

export async function getTagsViewTagId(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.view[':tagId'].$get(args, options))
}

export async function postTagsAdd(
  args: InferRequestType<typeof client.tags.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.add.$post(args, options))
}

export async function postTagsDeleteTagId(
  args: InferRequestType<(typeof client.tags.delete)[':tagId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.delete[':tagId'].$post(args, options))
}

export async function postTagsEditTagId(
  args: InferRequestType<(typeof client.tags.edit)[':tagId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.edit[':tagId'].$post(args, options))
}

export async function getTagsSearchTagSearchTerm(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.search[':tagSearchTerm'].$get(args, options))
}

export async function getAuthKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.auth_keys.$get(undefined, options))
}

export async function postAuthKeys(
  args: InferRequestType<typeof client.auth_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth_keys.$post(args, options))
}

export async function postAuthKeysAddUserId(
  args: InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth_keys.add[':userId'].$post(args, options))
}

export async function getAuthKeysViewAuthKeyId(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth_keys.view[':authKeyId'].$get(args, options))
}

export async function postAuthKeysEditAuthKeyId(
  args: InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth_keys.edit[':authKeyId'].$post(args, options))
}

export async function deleteAuthKeysDeleteAuthKeyId(
  args: InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth_keys.delete[':authKeyId'].$delete(args, options))
}

export async function getUserSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.user_settings.$get(undefined, options))
}

export async function postUserSettings(
  args: InferRequestType<typeof client.user_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_settings.$post(args, options))
}

export async function getUserSettingsViewUserSettingId(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_settings.view[':userSettingId'].$get(args, options))
}

export async function postUserSettingsSetSettingUserIdUserSettingName(
  args: InferRequestType<
    (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_settings.setSetting[':userId'][':userSettingName'].$post(args, options),
  )
}

export async function getUserSettingsGetSettingUserIdUserSettingName(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_settings.getSetting[':userId'][':userSettingName'].$get(args, options),
  )
}

export async function deleteUserSettingsDeleteUserSettingId(
  args: InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_settings.delete[':userSettingId'].$delete(args, options))
}

export async function getTaxonomies(options?: ClientRequestOptions) {
  return await parseResponse(client.taxonomies.$get(undefined, options))
}

export async function getTaxonomiesViewTaxonomyId(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies.view[':taxonomyId'].$get(args, options))
}

export async function postTaxonomiesEnableTaxonomyId(
  args: InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies.enable[':taxonomyId'].$post(args, options))
}

export async function postTaxonomiesDisableTaxonomyId(
  args: InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies.disable[':taxonomyId'].$post(args, options))
}

export async function postTaxonomiesUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.taxonomies.update.$post(undefined, options))
}

export async function getTaxonomiesTaxonomyTagsTaxonomyId(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies.taxonomy_tags[':taxonomyId'].$get(args, options))
}

export async function getTaxonomiesExportTaxonomyId(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies.export[':taxonomyId'].$get(args, options))
}
