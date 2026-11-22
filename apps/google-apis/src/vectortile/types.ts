type TileCoordinates = { x?: number | undefined; y?: number | undefined; zoom?: number | undefined }
type Row = { altitudeDiffs?: number[] | undefined }
type FirstDerivativeElevationGrid = {
  altitudeMultiplier?: number | undefined
  rows?: Row[] | undefined
}
type SecondDerivativeElevationGrid = {
  altitudeMultiplier?: number | undefined
  columnCount?: number | undefined
  encodedData?: string | undefined
  rowCount?: number | undefined
}
type TerrainTile = {
  coordinates?: TileCoordinates | undefined
  firstDerivative?: FirstDerivativeElevationGrid | undefined
  name?: string | undefined
  secondDerivative?: SecondDerivativeElevationGrid | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            altitudePrecisionCentimeters?: number | undefined
            'clientInfo.apiClient'?: string | undefined
            'clientInfo.applicationId'?: string | undefined
            'clientInfo.applicationVersion'?: string | undefined
            'clientInfo.deviceModel'?: string | undefined
            'clientInfo.operatingSystem'?: string | undefined
            'clientInfo.platform'?:
              | 'PLATFORM_UNSPECIFIED'
              | 'EDITOR'
              | 'MAC_OS'
              | 'WINDOWS'
              | 'LINUX'
              | 'ANDROID'
              | 'IOS'
              | 'WEB_GL'
              | undefined
            'clientInfo.userId'?: string | undefined
            maxElevationResolutionCells?: number | undefined
            minElevationResolutionCells?: number | undefined
            terrainFormats?:
              | ('TERRAIN_FORMAT_UNKNOWN' | 'FIRST_DERIVATIVE' | 'SECOND_DERIVATIVE')[]
              | undefined
            enableModeledVolumes?: boolean | undefined
            enablePoliticalFeatures?: boolean | undefined
            enablePrivateRoads?: boolean | undefined
            enableUnclippedBuildings?: boolean | undefined
            languageCode?: string | undefined
            regionCode?: string | undefined
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
        }
        output: TerrainTile
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
