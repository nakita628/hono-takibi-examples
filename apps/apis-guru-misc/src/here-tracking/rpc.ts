import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAliasesV2(
  args: InferRequestType<typeof client.aliases.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2.$get(args, options))
}

export async function getAliasesV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.aliases.v2.health.$get(undefined, options))
}

export async function getAliasesV2TrackingId(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2.trackingId.$get(args, options))
}

export async function getAliasesV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.aliases.v2.version.$get(undefined, options))
}

export async function getAliasesV2TrackingId2(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2[':trackingId'].$get(args, options))
}

export async function deleteAliasesV2TrackingId2(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2[':trackingId'].$delete(args, options))
}

export async function putAliasesV2TrackingIdBatch(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2[':trackingId'].batch.$put(args, options))
}

export async function getAliasesV2TrackingIdType(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2[':trackingId'][':type'].$get(args, options))
}

export async function deleteAliasesV2TrackingIdType(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.v2[':trackingId'][':type'].$delete(args, options))
}

export async function putAliasesV2TrackingIdTypeExternalId(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.aliases.v2[':trackingId'][':type'][':externalId'].$put(args, options),
  )
}

export async function deleteAliasesV2TrackingIdTypeExternalId(
  args: InferRequestType<
    (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.aliases.v2[':trackingId'][':type'][':externalId'].$delete(args, options),
  )
}

export async function putAssociationsV3DevicesBatchUpdate(
  args: InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3.devices.batchUpdate.$put(args, options))
}

export async function postAssociationsV3DevicesTrackingIdBatchCreate(
  args: InferRequestType<
    (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3.devices[':trackingId'].batchCreate.$post(args, options),
  )
}

export async function postAssociationsV3DevicesTrackingIdBatchDelete(
  args: InferRequestType<
    (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3.devices[':trackingId'].batchDelete.$post(args, options),
  )
}

export async function getAssociationsV3GeofencesGeofenceId(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3.geofences[':geofenceId'].$get(args, options))
}

export async function getAssociationsV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.associations.v3.health.$get(undefined, options))
}

export async function getAssociationsV3RulesRuleId(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3.rules[':ruleId'].$get(args, options))
}

export async function getAssociationsV3SensorsSensorRuleId(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3.sensors[':sensorRuleId'].$get(args, options))
}

export async function getAssociationsV3Version(options?: ClientRequestOptions) {
  return await parseResponse(client.associations.v3.version.$get(undefined, options))
}

export async function getAssociationsV3TrackingIdGeofences(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3[':trackingId'].geofences.$get(args, options))
}

export async function putAssociationsV3TrackingIdGeofencesGeofenceId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].geofences[':geofenceId'].$put(args, options),
  )
}

export async function deleteAssociationsV3TrackingIdGeofencesGeofenceId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].geofences[':geofenceId'].$delete(args, options),
  )
}

export async function getAssociationsV3TrackingIdRules(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3[':trackingId'].rules.$get(args, options))
}

export async function putAssociationsV3TrackingIdRulesRuleId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].rules[':ruleId'].$put(args, options),
  )
}

export async function deleteAssociationsV3TrackingIdRulesRuleId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].rules[':ruleId'].$delete(args, options),
  )
}

export async function getAssociationsV3TrackingIdSensors(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.v3[':trackingId'].sensors.$get(args, options))
}

export async function putAssociationsV3TrackingIdSensorsSensorRuleId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$put(args, options),
  )
}

export async function deleteAssociationsV3TrackingIdSensorsSensorRuleId(
  args: InferRequestType<
    (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$delete(args, options),
  )
}

export async function getBulkjobsV4DeviceUploads(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulkjobs.v4.deviceUploads.$get(args, options))
}

export async function postBulkjobsV4DeviceUploads(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulkjobs.v4.deviceUploads.$post(args, options))
}

export async function patchBulkjobsV4DeviceUploadsJobId(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].$patch(args, options))
}

export async function getBulkjobsV4DeviceUploadsJobIdResults(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(args, options))
}

export async function getBulkjobsV4DeviceUploadsJobIdStatus(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(args, options))
}

export async function getBulkjobsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.bulkjobs.v4.health.$get(undefined, options))
}

export async function getBulkjobsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.bulkjobs.v4.version.$get(undefined, options))
}

export async function postC2cV4Callback(
  args: InferRequestType<typeof client.c2c.v4.callback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.callback.$post(args, options))
}

export async function getC2cV4Connectors(
  args: InferRequestType<typeof client.c2c.v4.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.connectors.$get(args, options))
}

export async function postC2cV4Connectors(
  args: InferRequestType<typeof client.c2c.v4.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.connectors.$post(args, options))
}

export async function getC2cV4ConnectorsExtDevicesExternalDeviceId(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(args, options),
  )
}

export async function getC2cV4ConnectorsConnectorId(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.connectors[':connectorId'].$get(args, options))
}

export async function putC2cV4ConnectorsConnectorId(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.connectors[':connectorId'].$put(args, options))
}

export async function deleteC2cV4ConnectorsConnectorId(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.connectors[':connectorId'].$delete(args, options))
}

export async function getC2cV4ConnectorsConnectorIdExtDevices(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(args, options),
  )
}

export async function postC2cV4ConnectorsConnectorIdExtDevices(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.c2c.v4.connectors[':connectorId']['ext-devices'].$post(args, options),
  )
}

export async function deleteC2cV4ConnectorsConnectorIdExtDevicesBatch(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.c2c.v4.connectors[':connectorId']['ext-devices-batch'].$delete(args, options),
  )
}

export async function deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceId(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.c2c.v4.connectors[':connectorId']['ext-devices'][':externalDeviceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getC2cV4Drivers(
  args: InferRequestType<typeof client.c2c.v4.drivers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.drivers.$get(args, options))
}

export async function postC2cV4DriversDriverIdVerify(
  args: InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c2c.v4.drivers[':driverId'].verify.$post(args, options))
}

export async function getC2cV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.c2c.v4.health.$get(undefined, options))
}

export async function getC2cV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.c2c.v4.version.$get(undefined, options))
}

export async function getDeviceAssociationsV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client['device-associations'].v2.health.$get(undefined, options))
}

export async function getDeviceAssociationsV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client['device-associations'].v2.version.$get(undefined, options))
}

export async function getDeviceAssociationsV2TrackingIdGeofences(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['device-associations'].v2[':trackingId'].geofences.$get(args, options),
  )
}

export async function getEventsV3(
  args: InferRequestType<typeof client.events.v3.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.v3.$get(args, options))
}

export async function getEventsV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.events.v3.health.$get(undefined, options))
}

export async function getEventsV3Statuses(
  args: InferRequestType<typeof client.events.v3.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.v3.statuses.$get(args, options))
}

export async function getEventsV3StatusesDeviceCounts(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.v3.statuses.deviceCounts.$get(args, options))
}

export async function getEventsV3Version(options?: ClientRequestOptions) {
  return await parseResponse(client.events.v3.version.$get(undefined, options))
}

export async function getEventsV3TrackingId(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.v3[':trackingId'].$get(args, options))
}

export async function getGeofenceAssociationsV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client['geofence-associations'].v2.health.$get(undefined, options))
}

export async function getGeofenceAssociationsV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client['geofence-associations'].v2.version.$get(undefined, options))
}

export async function getGeofenceAssociationsV2GeofenceIdDevices(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['geofence-associations'].v2[':geofenceId'].devices.$get(args, options),
  )
}

export async function putGeofenceAssociationsV2GeofenceIdTrackingId(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['geofence-associations'].v2[':geofenceId'][':trackingId'].$put(args, options),
  )
}

export async function deleteGeofenceAssociationsV2GeofenceIdTrackingId(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['geofence-associations'].v2[':geofenceId'][':trackingId'].$delete(args, options),
  )
}

export async function getGeofencesV2(
  args: InferRequestType<typeof client.geofences.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2.$get(args, options))
}

export async function postGeofencesV2(
  args: InferRequestType<typeof client.geofences.v2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2.$post(args, options))
}

export async function deleteGeofencesV2(
  args: InferRequestType<typeof client.geofences.v2.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2.$delete(args, options))
}

export async function getGeofencesV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.geofences.v2.health.$get(undefined, options))
}

export async function postGeofencesV2TrainingTest(
  args: InferRequestType<typeof client.geofences.v2.trainingTest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2.trainingTest.$post(args, options))
}

export async function getGeofencesV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.geofences.v2.version.$get(undefined, options))
}

export async function getGeofencesV2GeofenceId(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2[':geofenceId'].$get(args, options))
}

export async function putGeofencesV2GeofenceId(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2[':geofenceId'].$put(args, options))
}

export async function deleteGeofencesV2GeofenceId(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2[':geofenceId'].$delete(args, options))
}

export async function postGeofencesV2GeofenceIdPoiTraining(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.v2[':geofenceId'].poiTraining.$post(args, options))
}

export async function getLabelsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.labels.v4.health.$get(undefined, options))
}

export async function getLabelsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.labels.v4.version.$get(undefined, options))
}

export async function getLabelsV4ResourceType(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.v4[':resourceType'].$get(args, options))
}

export async function getLabelsV4ResourceTypeKeys(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.v4[':resourceType'].keys.$get(args, options))
}

export async function getLabelsV4ResourceTypeKeysKeyValues(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'].keys[':key'].values.$get(args, options),
  )
}

export async function getLabelsV4ResourceTypeResourceId(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.v4[':resourceType'][':resourceId'].$get(args, options))
}

export async function deleteLabelsV4ResourceTypeResourceId(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'][':resourceId'].$delete(args, options),
  )
}

export async function putLabelsV4ResourceTypeResourceIdBatch(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'][':resourceId'].batch.$put(args, options),
  )
}

export async function deleteLabelsV4ResourceTypeResourceIdKey(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'][':resourceId'][':key'].$delete(args, options),
  )
}

export async function putLabelsV4ResourceTypeResourceIdKeyValue(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$put(args, options),
  )
}

export async function deleteLabelsV4ResourceTypeResourceIdKeyValue(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$delete(args, options),
  )
}

export async function postLargedataV4(
  args: InferRequestType<typeof client.largedata.v4.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4.$post(args, options))
}

export async function getLargedataV4DevicesTrackingIdMetadata(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.largedata.v4.devices[':trackingId'].metadata.$get(args, options),
  )
}

export async function getLargedataV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.largedata.v4.health.$get(undefined, options))
}

export async function getLargedataV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.largedata.v4.version.$get(undefined, options))
}

export async function postLargedataV4DataId(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4[':dataId'].$post(args, options))
}

export async function deleteLargedataV4DataId(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4[':dataId'].$delete(args, options))
}

export async function getLargedataV4DataIdData(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4[':dataId'].data.$get(args, options))
}

export async function getLargedataV4DataIdMetadata(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4[':dataId'].metadata.$get(args, options))
}

export async function getLargedataV4DataIdParts(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.largedata.v4[':dataId'].parts.$get(args, options))
}

export async function putLargedataV4DataIdPartsPartNumber(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.largedata.v4[':dataId'].parts[':partNumber'].$put(args, options),
  )
}

export async function getLocationsV4(
  args: InferRequestType<typeof client.locations.v4.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4.$get(args, options))
}

export async function postLocationsV4(
  args: InferRequestType<typeof client.locations.v4.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4.$post(args, options))
}

export async function deleteLocationsV4(
  args: InferRequestType<typeof client.locations.v4.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4.$delete(args, options))
}

export async function getLocationsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.locations.v4.health.$get(undefined, options))
}

export async function getLocationsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.locations.v4.version.$get(undefined, options))
}

export async function getLocationsV4LocationId(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4[':locationId'].$get(args, options))
}

export async function putLocationsV4LocationId(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4[':locationId'].$put(args, options))
}

export async function deleteLocationsV4LocationId(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.v4[':locationId'].$delete(args, options))
}

export async function postMetadataV2DevicesBatch(
  args: InferRequestType<typeof client.metadata.v2.devices.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.devices.batch.$post(args, options))
}

export async function getMetadataV2DevicesTrackingId(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.devices[':trackingId'].$get(args, options))
}

export async function putMetadataV2DevicesTrackingId(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.devices[':trackingId'].$put(args, options))
}

export async function deleteMetadataV2DevicesTrackingId(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.devices[':trackingId'].$delete(args, options))
}

export async function postMetadataV2GeofencesBatch(
  args: InferRequestType<typeof client.metadata.v2.geofences.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.geofences.batch.$post(args, options))
}

export async function getMetadataV2GeofencesGeofenceId(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.geofences[':geofenceId'].$get(args, options))
}

export async function putMetadataV2GeofencesGeofenceId(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.geofences[':geofenceId'].$put(args, options))
}

export async function deleteMetadataV2GeofencesGeofenceId(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.geofences[':geofenceId'].$delete(args, options))
}

export async function getMetadataV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.metadata.v2.health.$get(undefined, options))
}

export async function postMetadataV2SensorRulesBatch(
  args: InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.sensorRules.batch.$post(args, options))
}

export async function getMetadataV2SensorRulesSensorRuleId(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$get(args, options))
}

export async function putMetadataV2SensorRulesSensorRuleId(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$put(args, options))
}

export async function deleteMetadataV2SensorRulesSensorRuleId(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$delete(args, options))
}

export async function getMetadataV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.metadata.v2.version.$get(undefined, options))
}

export async function getNotificationsV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.v3.health.$get(undefined, options))
}

export async function getNotificationsV3RegistrationChannelId(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.v3.registration[':channelId'].$get(args, options))
}

export async function putNotificationsV3RegistrationChannelId(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.v3.registration[':channelId'].$put(args, options))
}

export async function deleteNotificationsV3RegistrationChannelId(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.v3.registration[':channelId'].$delete(args, options),
  )
}

export async function getNotificationsV3Registrations(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.v3.registrations.$get(args, options))
}

export async function postNotificationsV3Registrations(
  args: InferRequestType<typeof client.notifications.v3.registrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.v3.registrations.$post(args, options))
}

export async function deleteNotificationsV3Registrations(
  args: InferRequestType<typeof client.notifications.v3.registrations.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.v3.registrations.$delete(args, options))
}

export async function getNotificationsV3Version(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.v3.version.$get(undefined, options))
}

export async function getRegistryV2DevicesDeviceOrExternalId(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$get(args, options))
}

export async function putRegistryV2DevicesDeviceOrExternalId(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$put(args, options))
}

export async function deleteRegistryV2DevicesDeviceOrExternalId(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registry.v2.devices[':deviceOrExternalId'].$delete(args, options),
  )
}

export async function getRegistryV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.registry.v2.health.$get(undefined, options))
}

export async function getRegistryV2Licenses(
  args: InferRequestType<typeof client.registry.v2.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2.licenses.$get(args, options))
}

export async function getRegistryV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.registry.v2.version.$get(undefined, options))
}

export async function getRegistryV2AppIdDevices(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':appId'].devices.$get(args, options))
}

export async function postRegistryV2AppIdDevices(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':appId'].devices.$post(args, options))
}

export async function getRegistryV2AppIdLicenseCount(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':appId'].licenseCount.$get(args, options))
}

export async function postRegistryV2AppIdOneDevice(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':appId']['one-device'].$post(args, options))
}

export async function getRegistryV2JobIdResults(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':jobId'].results.$get(args, options))
}

export async function getRegistryV2JobIdStatus(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':jobId'].status.$get(args, options))
}

export async function getRegistryV2TrackingId(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':trackingId'].$get(args, options))
}

export async function deleteRegistryV2TrackingId(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registry.v2[':trackingId'].$delete(args, options))
}

export async function postRegistryV4ResourcesResourceTypeFind(
  args: InferRequestType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registry.v4.resources[':resourceType'].find.$post(args, options),
  )
}

export async function postReportsV4(
  args: InferRequestType<typeof client.reports.v4.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.v4.$post(args, options))
}

export async function getReportsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.v4.health.$get(undefined, options))
}

export async function getReportsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.v4.version.$get(undefined, options))
}

export async function getReportsV4ReportId(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.v4[':reportId'].$get(args, options))
}

export async function getRulesV4(
  args: InferRequestType<typeof client.rules.v4.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4.$get(args, options))
}

export async function postRulesV4(
  args: InferRequestType<typeof client.rules.v4.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4.$post(args, options))
}

export async function deleteRulesV4(
  args: InferRequestType<typeof client.rules.v4.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4.$delete(args, options))
}

export async function getRulesV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.rules.v4.health.$get(undefined, options))
}

export async function getRulesV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.rules.v4.version.$get(undefined, options))
}

export async function getRulesV4RuleId(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4[':ruleId'].$get(args, options))
}

export async function putRulesV4RuleId(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4[':ruleId'].$put(args, options))
}

export async function deleteRulesV4RuleId(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.v4[':ruleId'].$delete(args, options))
}

export async function getSensorsV3(
  args: InferRequestType<typeof client.sensors.v3.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3.$get(args, options))
}

export async function postSensorsV3(
  args: InferRequestType<typeof client.sensors.v3.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3.$post(args, options))
}

export async function deleteSensorsV3(
  args: InferRequestType<typeof client.sensors.v3.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3.$delete(args, options))
}

export async function getSensorsV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.sensors.v3.health.$get(undefined, options))
}

export async function getSensorsV3Version(options?: ClientRequestOptions) {
  return await parseResponse(client.sensors.v3.version.$get(undefined, options))
}

export async function getSensorsV3SensorRuleId(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3[':sensorRuleId'].$get(args, options))
}

export async function putSensorsV3SensorRuleId(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3[':sensorRuleId'].$put(args, options))
}

export async function deleteSensorsV3SensorRuleId(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sensors.v3[':sensorRuleId'].$delete(args, options))
}

export async function postShadowsV2Batch(
  args: InferRequestType<typeof client.shadows.v2.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v2.batch.$post(args, options))
}

export async function getShadowsV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.shadows.v2.health.$get(undefined, options))
}

export async function getShadowsV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.shadows.v2.version.$get(undefined, options))
}

export async function getShadowsV2TrackingId(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v2[':trackingId'].$get(args, options))
}

export async function putShadowsV2TrackingId(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v2[':trackingId'].$put(args, options))
}

export async function deleteShadowsV2TrackingId(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v2[':trackingId'].$delete(args, options))
}

export async function getShadowsV2TrackingIdState(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v2[':trackingId'][':state'].$get(args, options))
}

export async function getShadowsV2TrackingIdStateSelector(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shadows.v2[':trackingId'][':state'][':selector'].$get(args, options),
  )
}

export async function getShadowsV4(
  args: InferRequestType<typeof client.shadows.v4.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shadows.v4.$get(args, options))
}

export async function postShipmentReportsV4(
  args: InferRequestType<(typeof client)['shipment-reports']['v4']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipment-reports'].v4.$post(args, options))
}

export async function getShipmentReportsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client['shipment-reports'].v4.health.$get(undefined, options))
}

export async function getShipmentReportsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client['shipment-reports'].v4.version.$get(undefined, options))
}

export async function getShipmentReportsV4ShipmentReportIdStatus(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['shipment-reports'].v4[':shipmentReportId'].status.$get(args, options),
  )
}

export async function getShipmentReportsV4ShipmentReportIdSummary(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['shipment-reports'].v4[':shipmentReportId'].summary.$get(args, options),
  )
}

export async function getShipmentReportsV4ShipmentReportIdMetric(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(args, options),
  )
}

export async function getShipmentsV4(
  args: InferRequestType<typeof client.shipments.v4.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.$get(args, options))
}

export async function postShipmentsV4(
  args: InferRequestType<typeof client.shipments.v4.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.$post(args, options))
}

export async function deleteShipmentsV4(
  args: InferRequestType<typeof client.shipments.v4.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.$delete(args, options))
}

export async function getShipmentsV4Health(options?: ClientRequestOptions) {
  return await parseResponse(client.shipments.v4.health.$get(undefined, options))
}

export async function getShipmentsV4Plans(
  args: InferRequestType<typeof client.shipments.v4.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans.$get(args, options))
}

export async function postShipmentsV4Plans(
  args: InferRequestType<typeof client.shipments.v4.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans.$post(args, options))
}

export async function deleteShipmentsV4Plans(
  args: InferRequestType<typeof client.shipments.v4.plans.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans.$delete(args, options))
}

export async function getShipmentsV4PlansShipmentPlanId(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$get(args, options))
}

export async function deleteShipmentsV4PlansShipmentPlanId(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$delete(args, options))
}

export async function patchShipmentsV4PlansShipmentPlanId(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$patch(args, options))
}

export async function getShipmentsV4PlansShipmentPlanIdSegmentPlanId(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(args, options),
  )
}

export async function patchShipmentsV4PlansShipmentPlanIdSegmentPlanId(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$patch(args, options),
  )
}

export async function getShipmentsV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.shipments.v4.version.$get(undefined, options))
}

export async function getShipmentsV4ShipmentId(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':shipmentId'].$get(args, options))
}

export async function deleteShipmentsV4ShipmentId(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':shipmentId'].$delete(args, options))
}

export async function patchShipmentsV4ShipmentId(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':shipmentId'].$patch(args, options))
}

export async function getShipmentsV4ShipmentIdSegmentId(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$get(args, options))
}

export async function patchShipmentsV4ShipmentIdSegmentId(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$patch(args, options))
}

export async function getShipmentsV4TrackingIdSegments(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipments.v4[':trackingId'].segments.$get(args, options))
}

export async function getTracesV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.traces.v2.health.$get(undefined, options))
}

export async function getTracesV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.traces.v2.version.$get(undefined, options))
}

export async function getTracesV2TrackingId(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traces.v2[':trackingId'].$get(args, options))
}

export async function deleteTracesV2TrackingId(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traces.v2[':trackingId'].$delete(args, options))
}

export async function getTransitionsV2DevicesTrackingId(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions.v2.devices[':trackingId'].$get(args, options))
}

export async function getTransitionsV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.transitions.v2.health.$get(undefined, options))
}

export async function getTransitionsV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.transitions.v2.version.$get(undefined, options))
}

export async function getUsersV2Devices(
  args: InferRequestType<typeof client.users.v2.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.v2.devices.$get(args, options))
}

export async function getUsersV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.users.v2.health.$get(undefined, options))
}

export async function postUsersV2Login(
  args: InferRequestType<typeof client.users.v2.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.v2.login.$post(args, options))
}

export async function postUsersV2Refresh(
  args: InferRequestType<typeof client.users.v2.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.v2.refresh.$post(args, options))
}

export async function postUsersV2TokenExchange(
  args: InferRequestType<typeof client.users.v2.tokenExchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.v2.tokenExchange.$post(args, options))
}

export async function getUsersV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.users.v2.version.$get(undefined, options))
}

export async function postV2Index(
  args: InferRequestType<typeof client.v2.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.index.$post(args, options))
}

export async function getV2Health(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.health.$get(undefined, options))
}

export async function getV2Timestamp(
  args: InferRequestType<typeof client.v2.timestamp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.timestamp.$get(args, options))
}

export async function postV2Token(
  args: InferRequestType<typeof client.v2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.token.$post(args, options))
}

export async function getV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.version.$get(undefined, options))
}

export async function postV3Index(
  args: InferRequestType<typeof client.v3.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.index.$post(args, options))
}

export async function postV3Batch(
  args: InferRequestType<typeof client.v3.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.batch.$post(args, options))
}

export async function getV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.health.$get(undefined, options))
}

export async function getV3Version(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.version.$get(undefined, options))
}
