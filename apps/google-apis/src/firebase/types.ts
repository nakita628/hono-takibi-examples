type ProjectInfo = {
  displayName?: string | undefined
  locationId?: string | undefined
  project?: string | undefined
}
type ListAvailableProjectsResponse = {
  nextPageToken?: string | undefined
  projectInfo?: ProjectInfo[] | undefined
}
type DefaultResources = {
  hostingSite?: string | undefined
  locationId?: string | undefined
  realtimeDatabaseInstance?: string | undefined
  storageBucket?: string | undefined
}
type FirebaseProject = {
  annotations?: { [x: string]: string } | undefined
  displayName?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  projectNumber?: string | undefined
  resources?: DefaultResources | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED' | undefined
}
type ListFirebaseProjectsResponse = {
  nextPageToken?: string | undefined
  results?: FirebaseProject[] | undefined
}
type Empty = { [x: string]: unknown }
type WebAppConfig = {
  apiKey?: string | undefined
  appId?: string | undefined
  authDomain?: string | undefined
  databaseURL?: string | undefined
  locationId?: string | undefined
  measurementId?: string | undefined
  messagingSenderId?: string | undefined
  projectId?: string | undefined
  storageBucket?: string | undefined
}
type WebApp = {
  apiKeyId?: string | undefined
  appId?: string | undefined
  appUrls?: string[] | undefined
  displayName?: string | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED' | undefined
  webId?: string | undefined
}
type RemoveWebAppRequest = {
  allowMissing?: boolean | undefined
  etag?: string | undefined
  immediate?: boolean | undefined
  validateOnly?: boolean | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UndeleteWebAppRequest = { etag?: string | undefined; validateOnly?: boolean | undefined }
type AndroidApp = {
  apiKeyId?: string | undefined
  appId?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  name?: string | undefined
  packageName?: string | undefined
  projectId?: string | undefined
  sha1Hashes?: string[] | undefined
  sha256Hashes?: string[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED' | undefined
}
type ListAndroidAppsResponse = {
  apps?: AndroidApp[] | undefined
  nextPageToken?: string | undefined
}
type Location = {
  features?:
    | ('LOCATION_FEATURE_UNSPECIFIED' | 'FIRESTORE' | 'DEFAULT_STORAGE' | 'FUNCTIONS')[]
    | undefined
  locationId?: string | undefined
  type?: 'LOCATION_TYPE_UNSPECIFIED' | 'REGIONAL' | 'MULTI_REGIONAL' | undefined
}
type ListAvailableLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type FinalizeDefaultLocationRequest = { locationId?: string | undefined }
type IosApp = {
  apiKeyId?: string | undefined
  appId?: string | undefined
  appStoreId?: string | undefined
  bundleId?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED' | undefined
  teamId?: string | undefined
}
type ListIosAppsResponse = { apps?: IosApp[] | undefined; nextPageToken?: string | undefined }
type ShaCertificate = {
  certType?: 'SHA_CERTIFICATE_TYPE_UNSPECIFIED' | 'SHA_1' | 'SHA_256' | undefined
  name?: string | undefined
  shaHash?: string | undefined
}
type ListShaCertificatesResponse = { certificates?: ShaCertificate[] | undefined }
type ListWebAppsResponse = { apps?: WebApp[] | undefined; nextPageToken?: string | undefined }
type AddGoogleAnalyticsRequest = {
  analyticsAccountId?: string | undefined
  analyticsPropertyId?: string | undefined
}
type RemoveAnalyticsRequest = { analyticsPropertyId?: string | undefined }
type FirebaseAppInfo = {
  apiKeyId?: string | undefined
  appId?: string | undefined
  displayName?: string | undefined
  expireTime?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  platform?: 'PLATFORM_UNSPECIFIED' | 'IOS' | 'ANDROID' | 'WEB' | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED' | undefined
}
type SearchFirebaseAppsResponse = {
  apps?: FirebaseAppInfo[] | undefined
  nextPageToken?: string | undefined
}
type AddFirebaseRequest = { locationId?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/availableProjects': {
      $get: {
        input: {
          query: {
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
        output: ListAvailableProjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListFirebaseProjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
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
        output: WebAppConfig
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
        } & { json: WebApp }
        output: WebApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:remove': {
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
        } & { json: RemoveWebAppRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:undelete': {
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
        } & { json: UndeleteWebAppRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/androidApps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListAndroidAppsResponse
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
        } & { json: AndroidApp }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/availableLocations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListAvailableLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/defaultLocation:finalize': {
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
        } & { json: FinalizeDefaultLocationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/iosApps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListIosAppsResponse
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
        } & { json: IosApp }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/sha': {
      $get: {
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
        }
        output: ListShaCertificatesResponse
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
        } & { json: ShaCertificate }
        output: ShaCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/webApps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListWebAppsResponse
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
        } & { json: WebApp }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:addGoogleAnalytics': {
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
        } & { json: AddGoogleAnalyticsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:removeAnalytics': {
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
        } & { json: RemoveAnalyticsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:searchApps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: SearchFirebaseAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:project:addFirebase': {
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: AddFirebaseRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
