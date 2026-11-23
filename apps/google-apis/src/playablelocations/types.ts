type GoogleMapsUnityClientInfo = {
  apiClient?: string | undefined
  applicationId?: string | undefined
  applicationVersion?: string | undefined
  deviceModel?: string | undefined
  languageCode?: string | undefined
  operatingSystem?: string | undefined
  operatingSystemBuild?: string | undefined
  platform?:
    | 'PLATFORM_UNSPECIFIED'
    | 'EDITOR'
    | 'MAC_OS'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'IOS'
    | 'WEB_GL'
    | undefined
}
type GoogleMapsPlayablelocationsV3Impression = {
  gameObjectType?: number | undefined
  impressionType?: 'IMPRESSION_TYPE_UNSPECIFIED' | 'PRESENTED' | 'INTERACTED' | undefined
  locationName?: string | undefined
}
type GoogleMapsPlayablelocationsV3LogImpressionsRequest = {
  clientInfo?: GoogleMapsUnityClientInfo | undefined
  impressions?: GoogleMapsPlayablelocationsV3Impression[] | undefined
  requestId?: string | undefined
}
type GoogleMapsPlayablelocationsV3LogImpressionsResponse = { [x: string]: unknown }
type GoogleMapsPlayablelocationsV3PlayerReport = {
  languageCode?: string | undefined
  locationName?: string | undefined
  reasonDetails?: string | undefined
  reasons?:
    | (
        | 'BAD_LOCATION_REASON_UNSPECIFIED'
        | 'OTHER'
        | 'NOT_PEDESTRIAN_ACCESSIBLE'
        | 'NOT_OPEN_TO_PUBLIC'
        | 'PERMANENTLY_CLOSED'
        | 'TEMPORARILY_INACCESSIBLE'
      )[]
    | undefined
}
type GoogleMapsPlayablelocationsV3LogPlayerReportsRequest = {
  clientInfo?: GoogleMapsUnityClientInfo | undefined
  playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[] | undefined
  requestId?: string | undefined
}
type GoogleMapsPlayablelocationsV3LogPlayerReportsResponse = { [x: string]: unknown }
type GoogleMapsPlayablelocationsV3SampleAreaFilter = { s2CellId?: string | undefined }
type GoogleMapsPlayablelocationsV3SampleSpacingOptions = {
  minSpacingMeters?: number | undefined
  pointType?: 'POINT_TYPE_UNSPECIFIED' | 'CENTER_POINT' | 'SNAPPED_POINT' | undefined
}
type GoogleMapsPlayablelocationsV3SampleFilter = {
  includedTypes?: string[] | undefined
  maxLocationCount?: number | undefined
  spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions | undefined
}
type GoogleMapsPlayablelocationsV3SampleCriterion = {
  fieldsToReturn?: string | undefined
  filter?: GoogleMapsPlayablelocationsV3SampleFilter | undefined
  gameObjectType?: number | undefined
}
type GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest = {
  areaFilter?: GoogleMapsPlayablelocationsV3SampleAreaFilter | undefined
  criteria?: GoogleMapsPlayablelocationsV3SampleCriterion[] | undefined
}
type GoogleTypeLatLng = { latitude?: number | undefined; longitude?: number | undefined }
type GoogleMapsPlayablelocationsV3SamplePlayableLocation = {
  centerPoint?: GoogleTypeLatLng | undefined
  name?: string | undefined
  placeId?: string | undefined
  plusCode?: string | undefined
  snappedPoint?: GoogleTypeLatLng | undefined
  types?: string[] | undefined
}
type GoogleMapsPlayablelocationsV3SamplePlayableLocationList = {
  locations?: GoogleMapsPlayablelocationsV3SamplePlayableLocation[] | undefined
}
type GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse = {
  locationsPerGameObjectType?:
    | { [x: string]: GoogleMapsPlayablelocationsV3SamplePlayableLocationList }
    | undefined
  ttl?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3:logImpressions': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleMapsPlayablelocationsV3LogImpressionsRequest }
        output: GoogleMapsPlayablelocationsV3LogImpressionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3:logPlayerReports': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleMapsPlayablelocationsV3LogPlayerReportsRequest }
        output: GoogleMapsPlayablelocationsV3LogPlayerReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3:samplePlayableLocations': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest }
        output: GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
