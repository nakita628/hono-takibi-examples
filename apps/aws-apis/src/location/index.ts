import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGeofencingV0CollectionsCollectionNameRoute,
  deleteMapsV0MapsMapNameRoute,
  deleteMetadataV0KeysKeyNameRoute,
  deletePlacesV0IndexesIndexNameRoute,
  deleteRoutesV0CalculatorsCalculatorNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRoute,
  deleteTrackingV0TrackersTrackerNameRoute,
  getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
  getGeofencingV0CollectionsCollectionNameRoute,
  getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRoute,
  getMapsV0MapsMapNameRoute,
  getMapsV0MapsMapNameSpritesFileNameRoute,
  getMapsV0MapsMapNameStyleDescriptorRoute,
  getMapsV0MapsMapNameTilesZXYRoute,
  getMetadataV0KeysKeyNameRoute,
  getPlacesV0IndexesIndexNamePlacesPlaceIdRoute,
  getPlacesV0IndexesIndexNameRoute,
  getRoutesV0CalculatorsCalculatorNameRoute,
  getTagsResourceArnRoute,
  getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRoute,
  getTrackingV0TrackersTrackerNameRoute,
  patchGeofencingV0CollectionsCollectionNameRoute,
  patchMapsV0MapsMapNameRoute,
  patchMetadataV0KeysKeyNameRoute,
  patchPlacesV0IndexesIndexNameRoute,
  patchRoutesV0CalculatorsCalculatorNameRoute,
  patchTrackingV0TrackersTrackerNameRoute,
  postGeofencingV0CollectionsCollectionNameDeleteGeofencesRoute,
  postGeofencingV0CollectionsCollectionNameListGeofencesRoute,
  postGeofencingV0CollectionsCollectionNamePositionsRoute,
  postGeofencingV0CollectionsCollectionNamePutGeofencesRoute,
  postGeofencingV0CollectionsRoute,
  postGeofencingV0ListCollectionsRoute,
  postMapsV0ListMapsRoute,
  postMapsV0MapsRoute,
  postMetadataV0KeysRoute,
  postMetadataV0ListKeysRoute,
  postPlacesV0IndexesIndexNameSearchPositionRoute,
  postPlacesV0IndexesIndexNameSearchSuggestionsRoute,
  postPlacesV0IndexesIndexNameSearchTextRoute,
  postPlacesV0IndexesRoute,
  postPlacesV0ListIndexesRoute,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRoute,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteRoute,
  postRoutesV0CalculatorsRoute,
  postRoutesV0ListCalculatorsRoute,
  postTagsResourceArnRoute,
  postTrackingV0ListTrackersRoute,
  postTrackingV0TrackersRoute,
  postTrackingV0TrackersTrackerNameConsumersRoute,
  postTrackingV0TrackersTrackerNameDeletePositionsRoute,
  postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRoute,
  postTrackingV0TrackersTrackerNameGetPositionsRoute,
  postTrackingV0TrackersTrackerNameListConsumersRoute,
  postTrackingV0TrackersTrackerNameListPositionsRoute,
  postTrackingV0TrackersTrackerNamePositionsRoute,
  putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
} from './routes'
import {
  deleteGeofencingV0CollectionsCollectionNameRouteHandler,
  deleteMapsV0MapsMapNameRouteHandler,
  deleteMetadataV0KeysKeyNameRouteHandler,
  deletePlacesV0IndexesIndexNameRouteHandler,
  deleteRoutesV0CalculatorsCalculatorNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRouteHandler,
  deleteTrackingV0TrackersTrackerNameRouteHandler,
  getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRouteHandler,
  getGeofencingV0CollectionsCollectionNameRouteHandler,
  getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRouteHandler,
  getMapsV0MapsMapNameRouteHandler,
  getMapsV0MapsMapNameSpritesFileNameRouteHandler,
  getMapsV0MapsMapNameStyleDescriptorRouteHandler,
  getMapsV0MapsMapNameTilesZXYRouteHandler,
  getMetadataV0KeysKeyNameRouteHandler,
  getPlacesV0IndexesIndexNamePlacesPlaceIdRouteHandler,
  getPlacesV0IndexesIndexNameRouteHandler,
  getRoutesV0CalculatorsCalculatorNameRouteHandler,
  getTagsResourceArnRouteHandler,
  getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRouteHandler,
  getTrackingV0TrackersTrackerNameRouteHandler,
  patchGeofencingV0CollectionsCollectionNameRouteHandler,
  patchMapsV0MapsMapNameRouteHandler,
  patchMetadataV0KeysKeyNameRouteHandler,
  patchPlacesV0IndexesIndexNameRouteHandler,
  patchRoutesV0CalculatorsCalculatorNameRouteHandler,
  patchTrackingV0TrackersTrackerNameRouteHandler,
  postGeofencingV0CollectionsCollectionNameDeleteGeofencesRouteHandler,
  postGeofencingV0CollectionsCollectionNameListGeofencesRouteHandler,
  postGeofencingV0CollectionsCollectionNamePositionsRouteHandler,
  postGeofencingV0CollectionsCollectionNamePutGeofencesRouteHandler,
  postGeofencingV0CollectionsRouteHandler,
  postGeofencingV0ListCollectionsRouteHandler,
  postMapsV0ListMapsRouteHandler,
  postMapsV0MapsRouteHandler,
  postMetadataV0KeysRouteHandler,
  postMetadataV0ListKeysRouteHandler,
  postPlacesV0IndexesIndexNameSearchPositionRouteHandler,
  postPlacesV0IndexesIndexNameSearchSuggestionsRouteHandler,
  postPlacesV0IndexesIndexNameSearchTextRouteHandler,
  postPlacesV0IndexesRouteHandler,
  postPlacesV0ListIndexesRouteHandler,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRouteHandler,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteRouteHandler,
  postRoutesV0CalculatorsRouteHandler,
  postRoutesV0ListCalculatorsRouteHandler,
  postTagsResourceArnRouteHandler,
  postTrackingV0ListTrackersRouteHandler,
  postTrackingV0TrackersRouteHandler,
  postTrackingV0TrackersTrackerNameConsumersRouteHandler,
  postTrackingV0TrackersTrackerNameDeletePositionsRouteHandler,
  postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRouteHandler,
  postTrackingV0TrackersTrackerNameGetPositionsRouteHandler,
  postTrackingV0TrackersTrackerNameListConsumersRouteHandler,
  postTrackingV0TrackersTrackerNameListPositionsRouteHandler,
  postTrackingV0TrackersTrackerNamePositionsRouteHandler,
  putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postTrackingV0TrackersTrackerNameConsumersRoute,
    postTrackingV0TrackersTrackerNameConsumersRouteHandler,
  )
  .openapi(
    postTrackingV0TrackersTrackerNameDeletePositionsRoute,
    postTrackingV0TrackersTrackerNameDeletePositionsRouteHandler,
  )
  .openapi(
    postGeofencingV0CollectionsCollectionNameDeleteGeofencesRoute,
    postGeofencingV0CollectionsCollectionNameDeleteGeofencesRouteHandler,
  )
  .openapi(
    postGeofencingV0CollectionsCollectionNamePositionsRoute,
    postGeofencingV0CollectionsCollectionNamePositionsRouteHandler,
  )
  .openapi(
    postTrackingV0TrackersTrackerNameGetPositionsRoute,
    postTrackingV0TrackersTrackerNameGetPositionsRouteHandler,
  )
  .openapi(
    postGeofencingV0CollectionsCollectionNamePutGeofencesRoute,
    postGeofencingV0CollectionsCollectionNamePutGeofencesRouteHandler,
  )
  .openapi(
    postTrackingV0TrackersTrackerNamePositionsRoute,
    postTrackingV0TrackersTrackerNamePositionsRouteHandler,
  )
  .openapi(
    postRoutesV0CalculatorsCalculatorNameCalculateRouteRoute,
    postRoutesV0CalculatorsCalculatorNameCalculateRouteRouteHandler,
  )
  .openapi(
    postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRoute,
    postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRouteHandler,
  )
  .openapi(postGeofencingV0CollectionsRoute, postGeofencingV0CollectionsRouteHandler)
  .openapi(postMetadataV0KeysRoute, postMetadataV0KeysRouteHandler)
  .openapi(postMapsV0MapsRoute, postMapsV0MapsRouteHandler)
  .openapi(postPlacesV0IndexesRoute, postPlacesV0IndexesRouteHandler)
  .openapi(postRoutesV0CalculatorsRoute, postRoutesV0CalculatorsRouteHandler)
  .openapi(postTrackingV0TrackersRoute, postTrackingV0TrackersRouteHandler)
  .openapi(
    deleteGeofencingV0CollectionsCollectionNameRoute,
    deleteGeofencingV0CollectionsCollectionNameRouteHandler,
  )
  .openapi(
    getGeofencingV0CollectionsCollectionNameRoute,
    getGeofencingV0CollectionsCollectionNameRouteHandler,
  )
  .openapi(
    patchGeofencingV0CollectionsCollectionNameRoute,
    patchGeofencingV0CollectionsCollectionNameRouteHandler,
  )
  .openapi(deleteMetadataV0KeysKeyNameRoute, deleteMetadataV0KeysKeyNameRouteHandler)
  .openapi(getMetadataV0KeysKeyNameRoute, getMetadataV0KeysKeyNameRouteHandler)
  .openapi(patchMetadataV0KeysKeyNameRoute, patchMetadataV0KeysKeyNameRouteHandler)
  .openapi(deleteMapsV0MapsMapNameRoute, deleteMapsV0MapsMapNameRouteHandler)
  .openapi(getMapsV0MapsMapNameRoute, getMapsV0MapsMapNameRouteHandler)
  .openapi(patchMapsV0MapsMapNameRoute, patchMapsV0MapsMapNameRouteHandler)
  .openapi(deletePlacesV0IndexesIndexNameRoute, deletePlacesV0IndexesIndexNameRouteHandler)
  .openapi(getPlacesV0IndexesIndexNameRoute, getPlacesV0IndexesIndexNameRouteHandler)
  .openapi(patchPlacesV0IndexesIndexNameRoute, patchPlacesV0IndexesIndexNameRouteHandler)
  .openapi(
    deleteRoutesV0CalculatorsCalculatorNameRoute,
    deleteRoutesV0CalculatorsCalculatorNameRouteHandler,
  )
  .openapi(
    getRoutesV0CalculatorsCalculatorNameRoute,
    getRoutesV0CalculatorsCalculatorNameRouteHandler,
  )
  .openapi(
    patchRoutesV0CalculatorsCalculatorNameRoute,
    patchRoutesV0CalculatorsCalculatorNameRouteHandler,
  )
  .openapi(
    deleteTrackingV0TrackersTrackerNameRoute,
    deleteTrackingV0TrackersTrackerNameRouteHandler,
  )
  .openapi(getTrackingV0TrackersTrackerNameRoute, getTrackingV0TrackersTrackerNameRouteHandler)
  .openapi(patchTrackingV0TrackersTrackerNameRoute, patchTrackingV0TrackersTrackerNameRouteHandler)
  .openapi(
    deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRoute,
    deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRouteHandler,
  )
  .openapi(
    getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRoute,
    getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRouteHandler,
  )
  .openapi(
    postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRoute,
    postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRouteHandler,
  )
  .openapi(
    getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
    getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRouteHandler,
  )
  .openapi(
    putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
    putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRouteHandler,
  )
  .openapi(
    getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRoute,
    getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRouteHandler,
  )
  .openapi(
    getMapsV0MapsMapNameSpritesFileNameRoute,
    getMapsV0MapsMapNameSpritesFileNameRouteHandler,
  )
  .openapi(
    getMapsV0MapsMapNameStyleDescriptorRoute,
    getMapsV0MapsMapNameStyleDescriptorRouteHandler,
  )
  .openapi(getMapsV0MapsMapNameTilesZXYRoute, getMapsV0MapsMapNameTilesZXYRouteHandler)
  .openapi(
    getPlacesV0IndexesIndexNamePlacesPlaceIdRoute,
    getPlacesV0IndexesIndexNamePlacesPlaceIdRouteHandler,
  )
  .openapi(
    postTrackingV0TrackersTrackerNameListPositionsRoute,
    postTrackingV0TrackersTrackerNameListPositionsRouteHandler,
  )
  .openapi(postGeofencingV0ListCollectionsRoute, postGeofencingV0ListCollectionsRouteHandler)
  .openapi(
    postGeofencingV0CollectionsCollectionNameListGeofencesRoute,
    postGeofencingV0CollectionsCollectionNameListGeofencesRouteHandler,
  )
  .openapi(postMetadataV0ListKeysRoute, postMetadataV0ListKeysRouteHandler)
  .openapi(postMapsV0ListMapsRoute, postMapsV0ListMapsRouteHandler)
  .openapi(postPlacesV0ListIndexesRoute, postPlacesV0ListIndexesRouteHandler)
  .openapi(postRoutesV0ListCalculatorsRoute, postRoutesV0ListCalculatorsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postTrackingV0TrackersTrackerNameListConsumersRoute,
    postTrackingV0TrackersTrackerNameListConsumersRouteHandler,
  )
  .openapi(postTrackingV0ListTrackersRoute, postTrackingV0ListTrackersRouteHandler)
  .openapi(
    postPlacesV0IndexesIndexNameSearchPositionRoute,
    postPlacesV0IndexesIndexNameSearchPositionRouteHandler,
  )
  .openapi(
    postPlacesV0IndexesIndexNameSearchSuggestionsRoute,
    postPlacesV0IndexesIndexNameSearchSuggestionsRouteHandler,
  )
  .openapi(
    postPlacesV0IndexesIndexNameSearchTextRoute,
    postPlacesV0IndexesIndexNameSearchTextRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
