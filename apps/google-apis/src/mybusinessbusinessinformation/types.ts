type AttributeValueMetadata = {
  displayName?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type AttributeMetadata = {
  deprecated?: boolean | undefined
  displayName?: string | undefined
  groupDisplayName?: string | undefined
  parent?: string | undefined
  repeatable?: boolean | undefined
  valueMetadata?: AttributeValueMetadata[] | undefined
  valueType?:
    | 'ATTRIBUTE_VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'ENUM'
    | 'URL'
    | 'REPEATED_ENUM'
    | undefined
}
type ListAttributeMetadataResponse = {
  attributeMetadata?: AttributeMetadata[] | undefined
  nextPageToken?: string | undefined
}
type MoreHoursType = {
  displayName?: string | undefined
  hoursTypeId?: string | undefined
  localizedDisplayName?: string | undefined
}
type ServiceType = { displayName?: string | undefined; serviceTypeId?: string | undefined }
type Category = {
  displayName?: string | undefined
  moreHoursTypes?: MoreHoursType[] | undefined
  name?: string | undefined
  serviceTypes?: ServiceType[] | undefined
}
type ListCategoriesResponse = {
  categories?: Category[] | undefined
  nextPageToken?: string | undefined
}
type BatchGetCategoriesResponse = { categories?: Category[] | undefined }
type ChainName = { displayName?: string | undefined; languageCode?: string | undefined }
type ChainUri = { uri?: string | undefined }
type Chain = {
  chainNames?: ChainName[] | undefined
  locationCount?: number | undefined
  name?: string | undefined
  websites?: ChainUri[] | undefined
}
type SearchChainsResponse = { chains?: Chain[] | undefined }
type AdWordsLocationExtensions = { adPhone?: string | undefined }
type Categories = {
  additionalCategories?: Category[] | undefined
  primaryCategory?: Category | undefined
}
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type Metadata = {
  canDelete?: boolean | undefined
  canHaveBusinessCalls?: boolean | undefined
  canHaveFoodMenus?: boolean | undefined
  canModifyServiceList?: boolean | undefined
  canOperateHealthData?: boolean | undefined
  canOperateLocalPost?: boolean | undefined
  canOperateLodgingData?: boolean | undefined
  duplicateLocation?: string | undefined
  hasGoogleUpdated?: boolean | undefined
  hasPendingEdits?: boolean | undefined
  hasVoiceOfMerchant?: boolean | undefined
  mapsUri?: string | undefined
  newReviewUri?: string | undefined
  placeId?: string | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type TimePeriod = {
  closeDay?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  closeTime?: TimeOfDay | undefined
  openDay?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  openTime?: TimeOfDay | undefined
}
type MoreHours = { hoursTypeId?: string | undefined; periods?: TimePeriod[] | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type OpenInfo = {
  canReopen?: boolean | undefined
  openingDate?: Date | undefined
  status?:
    | 'OPEN_FOR_BUSINESS_UNSPECIFIED'
    | 'OPEN'
    | 'CLOSED_PERMANENTLY'
    | 'CLOSED_TEMPORARILY'
    | undefined
}
type PhoneNumbers = { additionalPhones?: string[] | undefined; primaryPhone?: string | undefined }
type Profile = { description?: string | undefined }
type BusinessHours = { periods?: TimePeriod[] | undefined }
type RelevantLocation = {
  placeId?: string | undefined
  relationType?:
    | 'RELATION_TYPE_UNSPECIFIED'
    | 'DEPARTMENT_OF'
    | 'INDEPENDENT_ESTABLISHMENT_IN'
    | undefined
}
type RelationshipData = {
  childrenLocations?: RelevantLocation[] | undefined
  parentChain?: string | undefined
  parentLocation?: RelevantLocation | undefined
}
type PlaceInfo = { placeId?: string | undefined; placeName?: string | undefined }
type Places = { placeInfos?: PlaceInfo[] | undefined }
type ServiceAreaBusiness = {
  businessType?:
    | 'BUSINESS_TYPE_UNSPECIFIED'
    | 'CUSTOMER_LOCATION_ONLY'
    | 'CUSTOMER_AND_BUSINESS_LOCATION'
    | undefined
  places?: Places | undefined
  regionCode?: string | undefined
}
type Label = {
  description?: string | undefined
  displayName?: string | undefined
  languageCode?: string | undefined
}
type FreeFormServiceItem = { category?: string | undefined; label?: Label | undefined }
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type StructuredServiceItem = {
  description?: string | undefined
  serviceTypeId?: string | undefined
}
type ServiceItem = {
  freeFormServiceItem?: FreeFormServiceItem | undefined
  price?: Money | undefined
  structuredServiceItem?: StructuredServiceItem | undefined
}
type SpecialHourPeriod = {
  closeTime?: TimeOfDay | undefined
  closed?: boolean | undefined
  endDate?: Date | undefined
  openTime?: TimeOfDay | undefined
  startDate?: Date | undefined
}
type SpecialHours = { specialHourPeriods?: SpecialHourPeriod[] | undefined }
type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type Location = {
  adWordsLocationExtensions?: AdWordsLocationExtensions | undefined
  categories?: Categories | undefined
  labels?: string[] | undefined
  languageCode?: string | undefined
  latlng?: LatLng | undefined
  metadata?: Metadata | undefined
  moreHours?: MoreHours[] | undefined
  name?: string | undefined
  openInfo?: OpenInfo | undefined
  phoneNumbers?: PhoneNumbers | undefined
  profile?: Profile | undefined
  regularHours?: BusinessHours | undefined
  relationshipData?: RelationshipData | undefined
  serviceArea?: ServiceAreaBusiness | undefined
  serviceItems?: ServiceItem[] | undefined
  specialHours?: SpecialHours | undefined
  storeCode?: string | undefined
  storefrontAddress?: PostalAddress | undefined
  title?: string | undefined
  websiteUri?: string | undefined
}
type SearchGoogleLocationsRequest = {
  location?: Location | undefined
  pageSize?: number | undefined
  query?: string | undefined
}
type GoogleLocation = {
  location?: Location | undefined
  name?: string | undefined
  requestAdminRightsUri?: string | undefined
}
type SearchGoogleLocationsResponse = { googleLocations?: GoogleLocation[] | undefined }
type Empty = { [x: string]: unknown }
type RepeatedEnumAttributeValue = {
  setValues?: string[] | undefined
  unsetValues?: string[] | undefined
}
type UriAttributeValue = { uri?: string | undefined }
type Attribute = {
  name?: string | undefined
  repeatedEnumValue?: RepeatedEnumAttributeValue | undefined
  uriValues?: UriAttributeValue[] | undefined
  valueType?:
    | 'ATTRIBUTE_VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'ENUM'
    | 'URL'
    | 'REPEATED_ENUM'
    | undefined
  values?: { [x: string]: unknown }[] | undefined
}
type Attributes = { attributes?: Attribute[] | undefined; name?: string | undefined }
type AssociateLocationRequest = { placeId?: string | undefined }
type ClearLocationAssociationRequest = { [x: string]: unknown }
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/attributes': {
      $get: {
        input: {
          query: {
            categoryName?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            parent?: string | undefined
            regionCode?: string | undefined
            showAll?: boolean | undefined
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
        output: ListAttributeMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/categories': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            regionCode?: string | undefined
            view?: 'CATEGORY_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/categories:batchGet': {
      $get: {
        input: {
          query: {
            languageCode?: string | undefined
            names?: string[] | undefined
            regionCode?: string | undefined
            view?: 'CATEGORY_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: BatchGetCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/chains:search': {
      $get: {
        input: {
          query: {
            chainName?: string | undefined
            pageSize?: number | undefined
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
        output: SearchChainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/googleLocations:search': {
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
        } & { json: SearchGoogleLocationsRequest }
        output: SearchGoogleLocationsResponse
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
        output: Attributes
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            attributeMask?: string | undefined
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
        } & { json: Attributes }
        output: Attributes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:associate': {
      $post: {
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
        } & { json: AssociateLocationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:clearLocationAssociation': {
      $post: {
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
        } & { json: ClearLocationAssociationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getGoogleUpdated': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
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
        output: Attributes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/locations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: Location }
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
