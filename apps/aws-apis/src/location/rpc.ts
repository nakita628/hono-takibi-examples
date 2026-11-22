import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTrackingV0TrackersTrackerNameConsumers(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName'].consumers.$post(args, options),
  )
}

export async function postTrackingV0TrackersTrackerNameDeletePositions(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName']['delete-positions'].$post(args, options),
  )
}

export async function postGeofencingV0CollectionsCollectionNameDeleteGeofences(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName']['delete-geofences'].$post(args, options),
  )
}

export async function postGeofencingV0CollectionsCollectionNamePositions(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].positions.$post(args, options),
  )
}

export async function postTrackingV0TrackersTrackerNameGetPositions(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName']['get-positions'].$post(args, options),
  )
}

export async function postGeofencingV0CollectionsCollectionNamePutGeofences(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName']['put-geofences'].$post(args, options),
  )
}

export async function postTrackingV0TrackersTrackerNamePositions(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName'].positions.$post(args, options),
  )
}

export async function postRoutesV0CalculatorsCalculatorNameCalculateRoute(
  args: InferRequestType<
    (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes.v0.calculators[':CalculatorName'].calculate.route.$post(args, options),
  )
}

export async function postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrix(
  args: InferRequestType<
    (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes.v0.calculators[':CalculatorName'].calculate['route-matrix'].$post(args, options),
  )
}

export async function postGeofencingV0Collections(
  args: InferRequestType<typeof client.geofencing.v0.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofencing.v0.collections.$post(args, options))
}

export async function postMetadataV0Keys(
  args: InferRequestType<typeof client.metadata.v0.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v0.keys.$post(args, options))
}

export async function postMapsV0Maps(
  args: InferRequestType<typeof client.maps.v0.maps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.v0.maps.$post(args, options))
}

export async function postPlacesV0Indexes(
  args: InferRequestType<typeof client.places.v0.indexes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.v0.indexes.$post(args, options))
}

export async function postRoutesV0Calculators(
  args: InferRequestType<typeof client.routes.v0.calculators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.v0.calculators.$post(args, options))
}

export async function postTrackingV0Trackers(
  args: InferRequestType<typeof client.tracking.v0.trackers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.v0.trackers.$post(args, options))
}

export async function getGeofencingV0CollectionsCollectionName(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].$get(args, options),
  )
}

export async function deleteGeofencingV0CollectionsCollectionName(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].$delete(args, options),
  )
}

export async function patchGeofencingV0CollectionsCollectionName(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].$patch(args, options),
  )
}

export async function getMetadataV0KeysKeyName(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v0.keys[':KeyName'].$get(args, options))
}

export async function deleteMetadataV0KeysKeyName(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v0.keys[':KeyName'].$delete(args, options))
}

export async function patchMetadataV0KeysKeyName(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v0.keys[':KeyName'].$patch(args, options))
}

export async function getMapsV0MapsMapName(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.v0.maps[':MapName'].$get(args, options))
}

export async function deleteMapsV0MapsMapName(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.v0.maps[':MapName'].$delete(args, options))
}

export async function patchMapsV0MapsMapName(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.v0.maps[':MapName'].$patch(args, options))
}

export async function getPlacesV0IndexesIndexName(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.v0.indexes[':IndexName'].$get(args, options))
}

export async function deletePlacesV0IndexesIndexName(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.v0.indexes[':IndexName'].$delete(args, options))
}

export async function patchPlacesV0IndexesIndexName(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.v0.indexes[':IndexName'].$patch(args, options))
}

export async function getRoutesV0CalculatorsCalculatorName(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.v0.calculators[':CalculatorName'].$get(args, options))
}

export async function deleteRoutesV0CalculatorsCalculatorName(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.v0.calculators[':CalculatorName'].$delete(args, options))
}

export async function patchRoutesV0CalculatorsCalculatorName(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.v0.calculators[':CalculatorName'].$patch(args, options))
}

export async function getTrackingV0TrackersTrackerName(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.v0.trackers[':TrackerName'].$get(args, options))
}

export async function deleteTrackingV0TrackersTrackerName(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.v0.trackers[':TrackerName'].$delete(args, options))
}

export async function patchTrackingV0TrackersTrackerName(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.v0.trackers[':TrackerName'].$patch(args, options))
}

export async function deleteTrackingV0TrackersTrackerNameConsumersConsumerArn(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName'].consumers[':ConsumerArn'].$delete(args, options),
  )
}

export async function getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatest(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId'].positions.latest.$get(
      args,
      options,
    ),
  )
}

export async function postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositions(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId']['list-positions'].$post(
      args,
      options,
    ),
  )
}

export async function getGeofencingV0CollectionsCollectionNameGeofencesGeofenceId(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$get(
      args,
      options,
    ),
  )
}

export async function putGeofencingV0CollectionsCollectionNameGeofencesGeofenceId(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$put(
      args,
      options,
    ),
  )
}

export async function getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRange(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.maps.v0.maps[':MapName'].glyphs[':FontStack'][':FontUnicodeRange'].$get(args, options),
  )
}

export async function getMapsV0MapsMapNameSpritesFileName(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.maps.v0.maps[':MapName'].sprites[':FileName'].$get(args, options),
  )
}

export async function getMapsV0MapsMapNameStyleDescriptor(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.maps.v0.maps[':MapName']['style-descriptor'].$get(args, options),
  )
}

export async function getMapsV0MapsMapNameTilesZXY(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.maps.v0.maps[':MapName'].tiles[':Z'][':X'][':Y'].$get(args, options),
  )
}

export async function getPlacesV0IndexesIndexNamePlacesPlaceId(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.places.v0.indexes[':IndexName'].places[':PlaceId'].$get(args, options),
  )
}

export async function postTrackingV0TrackersTrackerNameListPositions(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName']['list-positions'].$post(args, options),
  )
}

export async function postGeofencingV0ListCollections(
  args: InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofencing.v0['list-collections'].$post(args, options))
}

export async function postGeofencingV0CollectionsCollectionNameListGeofences(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geofencing.v0.collections[':CollectionName']['list-geofences'].$post(args, options),
  )
}

export async function postMetadataV0ListKeys(
  args: InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.v0['list-keys'].$post(args, options))
}

export async function postMapsV0ListMaps(
  args: InferRequestType<(typeof client.maps.v0)['list-maps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maps.v0['list-maps'].$post(args, options))
}

export async function postPlacesV0ListIndexes(
  args: InferRequestType<(typeof client.places.v0)['list-indexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.v0['list-indexes'].$post(args, options))
}

export async function postRoutesV0ListCalculators(
  args: InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.v0['list-calculators'].$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postTrackingV0TrackersTrackerNameListConsumers(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tracking.v0.trackers[':TrackerName']['list-consumers'].$post(args, options),
  )
}

export async function postTrackingV0ListTrackers(
  args: InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking.v0['list-trackers'].$post(args, options))
}

export async function postPlacesV0IndexesIndexNameSearchPosition(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.places.v0.indexes[':IndexName'].search.position.$post(args, options),
  )
}

export async function postPlacesV0IndexesIndexNameSearchSuggestions(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.places.v0.indexes[':IndexName'].search.suggestions.$post(args, options),
  )
}

export async function postPlacesV0IndexesIndexNameSearchText(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.places.v0.indexes[':IndexName'].search.text.$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}
