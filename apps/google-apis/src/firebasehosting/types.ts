type Empty = { [x: string]: unknown }
type Header = {
  glob?: string | undefined
  headers?: { [x: string]: string } | undefined
  regex?: string | undefined
}
type I18nConfig = { root?: string | undefined }
type Redirect = {
  glob?: string | undefined
  location?: string | undefined
  regex?: string | undefined
  statusCode?: number | undefined
}
type CloudRunRewrite = { region?: string | undefined; serviceId?: string | undefined }
type Rewrite = {
  dynamicLinks?: boolean | undefined
  function?: string | undefined
  functionRegion?: string | undefined
  glob?: string | undefined
  path?: string | undefined
  regex?: string | undefined
  run?: CloudRunRewrite | undefined
}
type ServingConfig = {
  appAssociation?: 'AUTO' | 'NONE' | undefined
  cleanUrls?: boolean | undefined
  headers?: Header[] | undefined
  i18n?: I18nConfig | undefined
  redirects?: Redirect[] | undefined
  rewrites?: Rewrite[] | undefined
  trailingSlashBehavior?: 'TRAILING_SLASH_BEHAVIOR_UNSPECIFIED' | 'ADD' | 'REMOVE' | undefined
}
type ActingUser = { email?: string | undefined; imageUrl?: string | undefined }
type Version = {
  config?: ServingConfig | undefined
  createTime?: string | undefined
  createUser?: ActingUser | undefined
  deleteTime?: string | undefined
  deleteUser?: ActingUser | undefined
  fileCount?: string | undefined
  finalizeTime?: string | undefined
  finalizeUser?: ActingUser | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  status?:
    | 'VERSION_STATUS_UNSPECIFIED'
    | 'CREATED'
    | 'FINALIZED'
    | 'DELETED'
    | 'ABANDONED'
    | 'EXPIRED'
    | 'CLONING'
    | undefined
  versionBytes?: string | undefined
}
type DomainRedirect = {
  domainName?: string | undefined
  type?: 'REDIRECT_TYPE_UNSPECIFIED' | 'MOVED_PERMANENTLY' | undefined
}
type CertDnsChallenge = { domainName?: string | undefined; token?: string | undefined }
type CertHttpChallenge = { path?: string | undefined; token?: string | undefined }
type DomainProvisioning = {
  certChallengeDiscoveredTxt?: string[] | undefined
  certChallengeDns?: CertDnsChallenge | undefined
  certChallengeHttp?: CertHttpChallenge | undefined
  certStatus?:
    | 'CERT_STATUS_UNSPECIFIED'
    | 'CERT_PENDING'
    | 'CERT_MISSING'
    | 'CERT_PROCESSING'
    | 'CERT_PROPAGATING'
    | 'CERT_ACTIVE'
    | 'CERT_ERROR'
    | undefined
  discoveredIps?: string[] | undefined
  dnsFetchTime?: string | undefined
  dnsStatus?:
    | 'DNS_STATUS_UNSPECIFIED'
    | 'DNS_PENDING'
    | 'DNS_MISSING'
    | 'DNS_PARTIAL_MATCH'
    | 'DNS_MATCH'
    | 'DNS_EXTRANEOUS_MATCH'
    | undefined
  expectedIps?: string[] | undefined
}
type Domain = {
  domainName?: string | undefined
  domainRedirect?: DomainRedirect | undefined
  provisioning?: DomainProvisioning | undefined
  site?: string | undefined
  status?:
    | 'DOMAIN_STATUS_UNSPECIFIED'
    | 'DOMAIN_CHANGE_PENDING'
    | 'DOMAIN_ACTIVE'
    | 'DOMAIN_VERIFICATION_REQUIRED'
    | 'DOMAIN_VERIFICATION_LOST'
    | undefined
  updateTime?: string | undefined
}
type Release = {
  message?: string | undefined
  name?: string | undefined
  releaseTime?: string | undefined
  releaseUser?: ActingUser | undefined
  type?: 'TYPE_UNSPECIFIED' | 'DEPLOY' | 'ROLLBACK' | 'SITE_DISABLE' | undefined
  version?: Version | undefined
}
type Channel = {
  createTime?: string | undefined
  expireTime?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  release?: Release | undefined
  retainedReleaseCount?: number | undefined
  ttl?: string | undefined
  updateTime?: string | undefined
  url?: string | undefined
}
type ListChannelsResponse = { channels?: Channel[] | undefined; nextPageToken?: string | undefined }
type ListDomainsResponse = { domains?: Domain[] | undefined; nextPageToken?: string | undefined }
type VersionFile = {
  hash?: string | undefined
  path?: string | undefined
  status?: 'STATUS_UNSPECIFIED' | 'EXPECTED' | 'ACTIVE' | undefined
}
type ListVersionFilesResponse = {
  files?: VersionFile[] | undefined
  nextPageToken?: string | undefined
}
type ListReleasesResponse = { nextPageToken?: string | undefined; releases?: Release[] | undefined }
type Site = {
  appId?: string | undefined
  defaultUrl?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'DEFAULT_SITE' | 'USER_SITE' | undefined
}
type ListSitesResponse = { nextPageToken?: string | undefined; sites?: Site[] | undefined }
type ListVersionsResponse = { nextPageToken?: string | undefined; versions?: Version[] | undefined }
type PathFilter = { regexes?: string[] | undefined }
type CloneVersionRequest = {
  exclude?: PathFilter | undefined
  finalize?: boolean | undefined
  include?: PathFilter | undefined
  sourceVersion?: string | undefined
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
type PopulateVersionFilesRequest = { files?: { [x: string]: string } | undefined }
type PopulateVersionFilesResponse = {
  uploadRequiredHashes?: string[] | undefined
  uploadUrl?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: Version
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
        } & { json: Version }
        output: Version
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: Domain }
        output: Domain
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/channels': {
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            channelId?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/domains': {
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
        output: ListDomainsResponse
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
        } & { json: Domain }
        output: Domain
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/files': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            status?: 'STATUS_UNSPECIFIED' | 'EXPECTED' | 'ACTIVE' | undefined
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
        output: ListVersionFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/releases': {
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
        output: ListReleasesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            versionName?: string | undefined
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
        } & { json: Release }
        output: Release
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/sites': {
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
        output: ListSitesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            siteId?: string | undefined
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
        } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/versions': {
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
        output: ListVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            sizeBytes?: string | undefined
            versionId?: string | undefined
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
        } & { json: Version }
        output: Version
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/versions:clone': {
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
        } & { json: CloneVersionRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:populateFiles': {
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
        } & { json: PopulateVersionFilesRequest }
        output: PopulateVersionFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
