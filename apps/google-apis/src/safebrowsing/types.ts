type GoogleSecuritySafebrowsingV4ThreatEntry = {
  digest?: string | undefined
  hash?: string | undefined
  url?: string | undefined
}
type GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry = {
  key?: string | undefined
  value?: string | undefined
}
type GoogleSecuritySafebrowsingV4ThreatEntryMetadata = {
  entries?: GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[] | undefined
}
type GoogleSecuritySafebrowsingV4ThreatMatch = {
  cacheDuration?: string | undefined
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'OSX'
    | 'IOS'
    | 'ANY_PLATFORM'
    | 'ALL_PLATFORMS'
    | 'CHROME'
    | undefined
  threat?: GoogleSecuritySafebrowsingV4ThreatEntry | undefined
  threatEntryMetadata?: GoogleSecuritySafebrowsingV4ThreatEntryMetadata | undefined
  threatEntryType?:
    | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
    | 'URL'
    | 'EXECUTABLE'
    | 'IP_RANGE'
    | 'CHROME_EXTENSION'
    | 'FILENAME'
    | 'CERT'
    | undefined
  threatType?:
    | 'THREAT_TYPE_UNSPECIFIED'
    | 'MALWARE'
    | 'SOCIAL_ENGINEERING'
    | 'UNWANTED_SOFTWARE'
    | 'POTENTIALLY_HARMFUL_APPLICATION'
    | 'SOCIAL_ENGINEERING_INTERNAL'
    | 'API_ABUSE'
    | 'MALICIOUS_BINARY'
    | 'CSD_WHITELIST'
    | 'CSD_DOWNLOAD_WHITELIST'
    | 'CLIENT_INCIDENT'
    | 'CLIENT_INCIDENT_WHITELIST'
    | 'APK_MALWARE_OFFLINE'
    | 'SUBRESOURCE_FILTER'
    | 'SUSPICIOUS'
    | 'TRICK_TO_BILL'
    | 'HIGH_CONFIDENCE_ALLOWLIST'
    | 'ACCURACY_TIPS'
    | undefined
}
type GoogleSecuritySafebrowsingV4FindFullHashesResponse = {
  matches?: GoogleSecuritySafebrowsingV4ThreatMatch[] | undefined
  minimumWaitDuration?: string | undefined
  negativeCacheDuration?: string | undefined
}
type GoogleSecuritySafebrowsingV4RawHashes = {
  prefixSize?: number | undefined
  rawHashes?: string | undefined
}
type GoogleSecuritySafebrowsingV4RawIndices = { indices?: number[] | undefined }
type GoogleSecuritySafebrowsingV4RiceDeltaEncoding = {
  encodedData?: string | undefined
  firstValue?: string | undefined
  numEntries?: number | undefined
  riceParameter?: number | undefined
}
type GoogleSecuritySafebrowsingV4ThreatEntrySet = {
  compressionType?: 'COMPRESSION_TYPE_UNSPECIFIED' | 'RAW' | 'RICE' | undefined
  rawHashes?: GoogleSecuritySafebrowsingV4RawHashes | undefined
  rawIndices?: GoogleSecuritySafebrowsingV4RawIndices | undefined
  riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding | undefined
  riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding | undefined
}
type GoogleSecuritySafebrowsingV4Checksum = { sha256?: string | undefined }
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse = {
  additions?: GoogleSecuritySafebrowsingV4ThreatEntrySet[] | undefined
  checksum?: GoogleSecuritySafebrowsingV4Checksum | undefined
  newClientState?: string | undefined
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'OSX'
    | 'IOS'
    | 'ANY_PLATFORM'
    | 'ALL_PLATFORMS'
    | 'CHROME'
    | undefined
  removals?: GoogleSecuritySafebrowsingV4ThreatEntrySet[] | undefined
  responseType?: 'RESPONSE_TYPE_UNSPECIFIED' | 'PARTIAL_UPDATE' | 'FULL_UPDATE' | undefined
  threatEntryType?:
    | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
    | 'URL'
    | 'EXECUTABLE'
    | 'IP_RANGE'
    | 'CHROME_EXTENSION'
    | 'FILENAME'
    | 'CERT'
    | undefined
  threatType?:
    | 'THREAT_TYPE_UNSPECIFIED'
    | 'MALWARE'
    | 'SOCIAL_ENGINEERING'
    | 'UNWANTED_SOFTWARE'
    | 'POTENTIALLY_HARMFUL_APPLICATION'
    | 'SOCIAL_ENGINEERING_INTERNAL'
    | 'API_ABUSE'
    | 'MALICIOUS_BINARY'
    | 'CSD_WHITELIST'
    | 'CSD_DOWNLOAD_WHITELIST'
    | 'CLIENT_INCIDENT'
    | 'CLIENT_INCIDENT_WHITELIST'
    | 'APK_MALWARE_OFFLINE'
    | 'SUBRESOURCE_FILTER'
    | 'SUSPICIOUS'
    | 'TRICK_TO_BILL'
    | 'HIGH_CONFIDENCE_ALLOWLIST'
    | 'ACCURACY_TIPS'
    | undefined
}
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse = {
  listUpdateResponses?:
    | GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[]
    | undefined
  minimumWaitDuration?: string | undefined
}
type GoogleSecuritySafebrowsingV4ClientInfo = {
  clientId?: string | undefined
  clientVersion?: string | undefined
}
type GoogleSecuritySafebrowsingV4ThreatInfo = {
  platformTypes?:
    | (
        | 'PLATFORM_TYPE_UNSPECIFIED'
        | 'WINDOWS'
        | 'LINUX'
        | 'ANDROID'
        | 'OSX'
        | 'IOS'
        | 'ANY_PLATFORM'
        | 'ALL_PLATFORMS'
        | 'CHROME'
      )[]
    | undefined
  threatEntries?: GoogleSecuritySafebrowsingV4ThreatEntry[] | undefined
  threatEntryTypes?:
    | (
        | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
        | 'URL'
        | 'EXECUTABLE'
        | 'IP_RANGE'
        | 'CHROME_EXTENSION'
        | 'FILENAME'
        | 'CERT'
      )[]
    | undefined
  threatTypes?:
    | (
        | 'THREAT_TYPE_UNSPECIFIED'
        | 'MALWARE'
        | 'SOCIAL_ENGINEERING'
        | 'UNWANTED_SOFTWARE'
        | 'POTENTIALLY_HARMFUL_APPLICATION'
        | 'SOCIAL_ENGINEERING_INTERNAL'
        | 'API_ABUSE'
        | 'MALICIOUS_BINARY'
        | 'CSD_WHITELIST'
        | 'CSD_DOWNLOAD_WHITELIST'
        | 'CLIENT_INCIDENT'
        | 'CLIENT_INCIDENT_WHITELIST'
        | 'APK_MALWARE_OFFLINE'
        | 'SUBRESOURCE_FILTER'
        | 'SUSPICIOUS'
        | 'TRICK_TO_BILL'
        | 'HIGH_CONFIDENCE_ALLOWLIST'
        | 'ACCURACY_TIPS'
      )[]
    | undefined
}
type GoogleSecuritySafebrowsingV4FindFullHashesRequest = {
  apiClient?: GoogleSecuritySafebrowsingV4ClientInfo | undefined
  client?: GoogleSecuritySafebrowsingV4ClientInfo | undefined
  clientStates?: string[] | undefined
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo | undefined
}
type GoogleSecuritySafebrowsingV4ThreatHitThreatSource = {
  referrer?: string | undefined
  remoteIp?: string | undefined
  type?:
    | 'THREAT_SOURCE_TYPE_UNSPECIFIED'
    | 'MATCHING_URL'
    | 'TAB_URL'
    | 'TAB_REDIRECT'
    | 'TAB_RESOURCE'
    | undefined
  url?: string | undefined
}
type GoogleSecuritySafebrowsingV4ThreatHitUserInfo = {
  regionCode?: string | undefined
  userId?: string | undefined
}
type GoogleSecuritySafebrowsingV4ThreatHit = {
  clientInfo?: GoogleSecuritySafebrowsingV4ClientInfo | undefined
  entry?: GoogleSecuritySafebrowsingV4ThreatEntry | undefined
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'OSX'
    | 'IOS'
    | 'ANY_PLATFORM'
    | 'ALL_PLATFORMS'
    | 'CHROME'
    | undefined
  resources?: GoogleSecuritySafebrowsingV4ThreatHitThreatSource[] | undefined
  threatType?:
    | 'THREAT_TYPE_UNSPECIFIED'
    | 'MALWARE'
    | 'SOCIAL_ENGINEERING'
    | 'UNWANTED_SOFTWARE'
    | 'POTENTIALLY_HARMFUL_APPLICATION'
    | 'SOCIAL_ENGINEERING_INTERNAL'
    | 'API_ABUSE'
    | 'MALICIOUS_BINARY'
    | 'CSD_WHITELIST'
    | 'CSD_DOWNLOAD_WHITELIST'
    | 'CLIENT_INCIDENT'
    | 'CLIENT_INCIDENT_WHITELIST'
    | 'APK_MALWARE_OFFLINE'
    | 'SUBRESOURCE_FILTER'
    | 'SUSPICIOUS'
    | 'TRICK_TO_BILL'
    | 'HIGH_CONFIDENCE_ALLOWLIST'
    | 'ACCURACY_TIPS'
    | undefined
  userInfo?: GoogleSecuritySafebrowsingV4ThreatHitUserInfo | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints = {
  deviceLocation?: string | undefined
  language?: string | undefined
  maxDatabaseEntries?: number | undefined
  maxUpdateEntries?: number | undefined
  region?: string | undefined
  supportedCompressions?: ('COMPRESSION_TYPE_UNSPECIFIED' | 'RAW' | 'RICE')[] | undefined
}
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest = {
  constraints?:
    | GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints
    | undefined
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'OSX'
    | 'IOS'
    | 'ANY_PLATFORM'
    | 'ALL_PLATFORMS'
    | 'CHROME'
    | undefined
  state?: string | undefined
  threatEntryType?:
    | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
    | 'URL'
    | 'EXECUTABLE'
    | 'IP_RANGE'
    | 'CHROME_EXTENSION'
    | 'FILENAME'
    | 'CERT'
    | undefined
  threatType?:
    | 'THREAT_TYPE_UNSPECIFIED'
    | 'MALWARE'
    | 'SOCIAL_ENGINEERING'
    | 'UNWANTED_SOFTWARE'
    | 'POTENTIALLY_HARMFUL_APPLICATION'
    | 'SOCIAL_ENGINEERING_INTERNAL'
    | 'API_ABUSE'
    | 'MALICIOUS_BINARY'
    | 'CSD_WHITELIST'
    | 'CSD_DOWNLOAD_WHITELIST'
    | 'CLIENT_INCIDENT'
    | 'CLIENT_INCIDENT_WHITELIST'
    | 'APK_MALWARE_OFFLINE'
    | 'SUBRESOURCE_FILTER'
    | 'SUSPICIOUS'
    | 'TRICK_TO_BILL'
    | 'HIGH_CONFIDENCE_ALLOWLIST'
    | 'ACCURACY_TIPS'
    | undefined
}
type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest = {
  client?: GoogleSecuritySafebrowsingV4ClientInfo | undefined
  listUpdateRequests?:
    | GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[]
    | undefined
}
type GoogleSecuritySafebrowsingV4ThreatListDescriptor = {
  platformType?:
    | 'PLATFORM_TYPE_UNSPECIFIED'
    | 'WINDOWS'
    | 'LINUX'
    | 'ANDROID'
    | 'OSX'
    | 'IOS'
    | 'ANY_PLATFORM'
    | 'ALL_PLATFORMS'
    | 'CHROME'
    | undefined
  threatEntryType?:
    | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
    | 'URL'
    | 'EXECUTABLE'
    | 'IP_RANGE'
    | 'CHROME_EXTENSION'
    | 'FILENAME'
    | 'CERT'
    | undefined
  threatType?:
    | 'THREAT_TYPE_UNSPECIFIED'
    | 'MALWARE'
    | 'SOCIAL_ENGINEERING'
    | 'UNWANTED_SOFTWARE'
    | 'POTENTIALLY_HARMFUL_APPLICATION'
    | 'SOCIAL_ENGINEERING_INTERNAL'
    | 'API_ABUSE'
    | 'MALICIOUS_BINARY'
    | 'CSD_WHITELIST'
    | 'CSD_DOWNLOAD_WHITELIST'
    | 'CLIENT_INCIDENT'
    | 'CLIENT_INCIDENT_WHITELIST'
    | 'APK_MALWARE_OFFLINE'
    | 'SUBRESOURCE_FILTER'
    | 'SUSPICIOUS'
    | 'TRICK_TO_BILL'
    | 'HIGH_CONFIDENCE_ALLOWLIST'
    | 'ACCURACY_TIPS'
    | undefined
}
type GoogleSecuritySafebrowsingV4ListThreatListsResponse = {
  threatLists?: GoogleSecuritySafebrowsingV4ThreatListDescriptor[] | undefined
}
type GoogleSecuritySafebrowsingV4FindThreatMatchesRequest = {
  client?: GoogleSecuritySafebrowsingV4ClientInfo | undefined
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo | undefined
}
type GoogleSecuritySafebrowsingV4FindThreatMatchesResponse = {
  matches?: GoogleSecuritySafebrowsingV4ThreatMatch[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/encodedFullHashes/:encodedRequest': {
      $get: {
        input: { param: { encodedRequest: string } } & {
          query: {
            clientId?: string | undefined
            clientVersion?: string | undefined
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
        output: GoogleSecuritySafebrowsingV4FindFullHashesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/encodedUpdates/:encodedRequest': {
      $get: {
        input: { param: { encodedRequest: string } } & {
          query: {
            clientId?: string | undefined
            clientVersion?: string | undefined
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
        output: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/fullHashes:find': {
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
        } & { json: GoogleSecuritySafebrowsingV4FindFullHashesRequest }
        output: GoogleSecuritySafebrowsingV4FindFullHashesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/threatHits': {
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
        } & { json: GoogleSecuritySafebrowsingV4ThreatHit }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/threatListUpdates:fetch': {
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
        } & { json: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest }
        output: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/threatLists': {
      $get: {
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
        }
        output: GoogleSecuritySafebrowsingV4ListThreatListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/threatMatches:find': {
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
        } & { json: GoogleSecuritySafebrowsingV4FindThreatMatchesRequest }
        output: GoogleSecuritySafebrowsingV4FindThreatMatchesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
