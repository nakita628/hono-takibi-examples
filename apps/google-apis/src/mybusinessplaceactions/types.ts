type PlaceActionTypeMetadata = {
  displayName?: string | undefined
  placeActionType?:
    | 'PLACE_ACTION_TYPE_UNSPECIFIED'
    | 'APPOINTMENT'
    | 'ONLINE_APPOINTMENT'
    | 'DINING_RESERVATION'
    | 'FOOD_ORDERING'
    | 'FOOD_DELIVERY'
    | 'FOOD_TAKEOUT'
    | 'SHOP_ONLINE'
    | undefined
}
type ListPlaceActionTypeMetadataResponse = {
  nextPageToken?: string | undefined
  placeActionTypeMetadata?: PlaceActionTypeMetadata[] | undefined
}
type Empty = { [x: string]: unknown }
type PlaceActionLink = {
  createTime?: string | undefined
  isEditable?: boolean | undefined
  isPreferred?: boolean | undefined
  name?: string | undefined
  placeActionType?:
    | 'PLACE_ACTION_TYPE_UNSPECIFIED'
    | 'APPOINTMENT'
    | 'ONLINE_APPOINTMENT'
    | 'DINING_RESERVATION'
    | 'FOOD_ORDERING'
    | 'FOOD_DELIVERY'
    | 'FOOD_TAKEOUT'
    | 'SHOP_ONLINE'
    | undefined
  providerType?: 'PROVIDER_TYPE_UNSPECIFIED' | 'MERCHANT' | 'AGGREGATOR_3P' | undefined
  updateTime?: string | undefined
  uri?: string | undefined
}
type ListPlaceActionLinksResponse = {
  nextPageToken?: string | undefined
  placeActionLinks?: PlaceActionLink[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/placeActionTypeMetadata': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListPlaceActionTypeMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: PlaceActionLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: PlaceActionLink }
        output: PlaceActionLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/placeActionLinks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListPlaceActionLinksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: PlaceActionLink }
        output: PlaceActionLink
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
