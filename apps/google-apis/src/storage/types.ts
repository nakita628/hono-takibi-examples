type BucketAccessControl = {
  bucket?: string | undefined
  domain?: string | undefined
  email?: string | undefined
  entity?: string | undefined
  entityId?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  projectTeam?: { projectNumber?: string | undefined; team?: string | undefined } | undefined
  role?: string | undefined
  selfLink?: string | undefined
}
type ObjectAccessControl = {
  bucket?: string | undefined
  domain?: string | undefined
  email?: string | undefined
  entity?: string | undefined
  entityId?: string | undefined
  etag?: string | undefined
  generation?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  object?: string | undefined
  projectTeam?: { projectNumber?: string | undefined; team?: string | undefined } | undefined
  role?: string | undefined
  selfLink?: string | undefined
}
type Bucket = {
  acl?: BucketAccessControl[] | undefined
  autoclass?: { enabled?: boolean | undefined; toggleTime?: string | undefined } | undefined
  billing?: { requesterPays?: boolean | undefined } | undefined
  cors?:
    | {
        maxAgeSeconds?: number | undefined
        method?: string[] | undefined
        origin?: string[] | undefined
        responseHeader?: string[] | undefined
      }[]
    | undefined
  customPlacementConfig?: { dataLocations?: string[] | undefined } | undefined
  defaultEventBasedHold?: boolean | undefined
  defaultObjectAcl?: ObjectAccessControl[] | undefined
  encryption?: { defaultKmsKeyName?: string | undefined } | undefined
  etag?: string | undefined
  iamConfiguration?:
    | {
        bucketPolicyOnly?:
          | { enabled?: boolean | undefined; lockedTime?: string | undefined }
          | undefined
        publicAccessPrevention?: string | undefined
        uniformBucketLevelAccess?:
          | { enabled?: boolean | undefined; lockedTime?: string | undefined }
          | undefined
      }
    | undefined
  id?: string | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  lifecycle?:
    | {
        rule?:
          | {
              action?: { storageClass?: string | undefined; type?: string | undefined } | undefined
              condition?:
                | {
                    age?: number | undefined
                    createdBefore?: string | undefined
                    customTimeBefore?: string | undefined
                    daysSinceCustomTime?: number | undefined
                    daysSinceNoncurrentTime?: number | undefined
                    isLive?: boolean | undefined
                    matchesPattern?: string | undefined
                    matchesPrefix?: string[] | undefined
                    matchesStorageClass?: string[] | undefined
                    matchesSuffix?: string[] | undefined
                    noncurrentTimeBefore?: string | undefined
                    numNewerVersions?: number | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
  location?: string | undefined
  locationType?: string | undefined
  logging?: { logBucket?: string | undefined; logObjectPrefix?: string | undefined } | undefined
  metageneration?: string | undefined
  name?: string | undefined
  owner?: { entity?: string | undefined; entityId?: string | undefined } | undefined
  projectNumber?: string | undefined
  retentionPolicy?:
    | {
        effectiveTime?: string | undefined
        isLocked?: boolean | undefined
        retentionPeriod?: string | undefined
      }
    | undefined
  rpo?: string | undefined
  satisfiesPZS?: boolean | undefined
  selfLink?: string | undefined
  storageClass?: string | undefined
  timeCreated?: string | undefined
  updated?: string | undefined
  versioning?: { enabled?: boolean | undefined } | undefined
  website?: { mainPageSuffix?: string | undefined; notFoundPage?: string | undefined } | undefined
}
type Buckets = {
  items?: Bucket[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type BucketAccessControls = { items?: BucketAccessControl[] | undefined; kind?: string | undefined }
type ObjectAccessControls = { items?: ObjectAccessControl[] | undefined; kind?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Policy = {
  bindings?:
    | { condition?: Expr | undefined; members?: string[] | undefined; role?: string | undefined }[]
    | undefined
  etag?: string | undefined
  kind?: string | undefined
  resourceId?: string | undefined
  version?: number | undefined
}
type TestIamPermissionsResponse = { kind?: string | undefined; permissions?: string[] | undefined }
type Notification = {
  custom_attributes?: { [x: string]: string } | undefined
  etag?: string | undefined
  event_types?: string[] | undefined
  id?: string | undefined
  kind?: string | undefined
  object_name_prefix?: string | undefined
  payload_format?: string | undefined
  selfLink?: string | undefined
  topic?: string | undefined
}
type Notifications = { items?: Notification[] | undefined; kind?: string | undefined }
type Object = {
  acl?: ObjectAccessControl[] | undefined
  bucket?: string | undefined
  cacheControl?: string | undefined
  componentCount?: number | undefined
  contentDisposition?: string | undefined
  contentEncoding?: string | undefined
  contentLanguage?: string | undefined
  contentType?: string | undefined
  crc32c?: string | undefined
  customTime?: string | undefined
  customerEncryption?:
    | { encryptionAlgorithm?: string | undefined; keySha256?: string | undefined }
    | undefined
  etag?: string | undefined
  eventBasedHold?: boolean | undefined
  generation?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  kmsKeyName?: string | undefined
  md5Hash?: string | undefined
  mediaLink?: string | undefined
  metadata?: { [x: string]: string } | undefined
  metageneration?: string | undefined
  name?: string | undefined
  owner?: { entity?: string | undefined; entityId?: string | undefined } | undefined
  retentionExpirationTime?: string | undefined
  selfLink?: string | undefined
  size?: string | undefined
  storageClass?: string | undefined
  temporaryHold?: boolean | undefined
  timeCreated?: string | undefined
  timeDeleted?: string | undefined
  timeStorageClassUpdated?: string | undefined
  updated?: string | undefined
}
type Objects = {
  items?: Object[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  prefixes?: string[] | undefined
}
type Channel = {
  address?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  params?: { [x: string]: string } | undefined
  payload?: boolean | undefined
  resourceId?: string | undefined
  resourceUri?: string | undefined
  token?: string | undefined
  type?: string | undefined
}
type ComposeRequest = {
  destination?: Object | undefined
  kind?: string | undefined
  sourceObjects?:
    | {
        generation?: string | undefined
        name?: string | undefined
        objectPreconditions?: { ifGenerationMatch?: string | undefined } | undefined
      }[]
    | undefined
}
type RewriteResponse = {
  done?: boolean | undefined
  kind?: string | undefined
  objectSize?: string | undefined
  resource?: Object | undefined
  rewriteToken?: string | undefined
  totalBytesRewritten?: string | undefined
}
type HmacKeyMetadata = {
  accessId?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  projectId?: string | undefined
  selfLink?: string | undefined
  serviceAccountEmail?: string | undefined
  state?: string | undefined
  timeCreated?: string | undefined
  updated?: string | undefined
}
type HmacKeysMetadata = {
  items?: HmacKeyMetadata[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type HmacKey = {
  kind?: string | undefined
  metadata?: HmacKeyMetadata | undefined
  secret?: string | undefined
}
type ServiceAccount = { email_address?: string | undefined; kind?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/b': {
      $get: {
        input: {
          query: {
            project: string
            maxResults?: number | undefined
            pageToken?: string | undefined
            prefix?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Buckets
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            project: string
            predefinedAcl?:
              | 'authenticatedRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | 'publicReadWrite'
              | undefined
            predefinedDefaultObjectAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Bucket }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket': {
      $delete: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            predefinedAcl?:
              | 'authenticatedRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | 'publicReadWrite'
              | undefined
            predefinedDefaultObjectAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Bucket }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            predefinedAcl?:
              | 'authenticatedRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | 'publicReadWrite'
              | undefined
            predefinedDefaultObjectAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Bucket }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/acl': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: BucketAccessControls
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: BucketAccessControl }
        output: BucketAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/acl/:entity': {
      $delete: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: BucketAccessControl
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: BucketAccessControl }
        output: BucketAccessControl
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: BucketAccessControl }
        output: BucketAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/defaultObjectAcl': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ObjectAccessControls
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/defaultObjectAcl/:entity': {
      $delete: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string; entity: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/iam': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            optionsRequestedPolicyVersion?: number | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Policy }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/iam/testPermissions': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            permissions: string[]
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/lockRetentionPolicy': {
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            ifMetagenerationMatch: string
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/notificationConfigs': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Notifications
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Notification }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/notificationConfigs/:notification': {
      $delete: {
        input: { param: { bucket: string; notification: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string; notification: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o': {
      $get: {
        input: { param: { bucket: string } } & {
          query: {
            delimiter?: string | undefined
            endOffset?: string | undefined
            includeTrailingDelimiter?: boolean | undefined
            matchGlob?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            prefix?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            startOffset?: string | undefined
            userProject?: string | undefined
            versions?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Objects
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            contentEncoding?: string | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            kmsKeyName?: string | undefined
            name?: string | undefined
            predefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Object }
        output: Object
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/watch': {
      $post: {
        input: { param: { bucket: string } } & {
          query: {
            delimiter?: string | undefined
            endOffset?: string | undefined
            includeTrailingDelimiter?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            prefix?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            startOffset?: string | undefined
            userProject?: string | undefined
            versions?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/:object': {
      $delete: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Object
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            predefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Object }
        output: Object
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            predefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            projection?: 'full' | 'noAcl' | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Object }
        output: Object
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/:object/acl': {
      $get: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ObjectAccessControls
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/:object/acl/:entity': {
      $delete: {
        input: { param: { bucket: string; object: string; entity: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { bucket: string; object: string; entity: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { bucket: string; object: string; entity: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string; object: string; entity: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ObjectAccessControl }
        output: ObjectAccessControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/:object/iam': {
      $get: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Policy }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:bucket/o/:object/iam/testPermissions': {
      $get: {
        input: { param: { bucket: string; object: string } } & {
          query: {
            permissions: string[]
            generation?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:destinationBucket/o/:destinationObject/compose': {
      $post: {
        input: { param: { destinationBucket: string; destinationObject: string } } & {
          query: {
            destinationPredefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            ifGenerationMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            kmsKeyName?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ComposeRequest }
        output: Object
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:sourceBucket/o/:sourceObject/copyTo/b/:destinationBucket/o/:destinationObject': {
      $post: {
        input: {
          param: {
            sourceBucket: string
            sourceObject: string
            destinationBucket: string
            destinationObject: string
          }
        } & {
          query: {
            destinationKmsKeyName?: string | undefined
            destinationPredefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            ifSourceGenerationMatch?: string | undefined
            ifSourceGenerationNotMatch?: string | undefined
            ifSourceMetagenerationMatch?: string | undefined
            ifSourceMetagenerationNotMatch?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            sourceGeneration?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Object }
        output: Object
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/b/:sourceBucket/o/:sourceObject/rewriteTo/b/:destinationBucket/o/:destinationObject': {
      $post: {
        input: {
          param: {
            sourceBucket: string
            sourceObject: string
            destinationBucket: string
            destinationObject: string
          }
        } & {
          query: {
            destinationKmsKeyName?: string | undefined
            destinationPredefinedAcl?:
              | 'authenticatedRead'
              | 'bucketOwnerFullControl'
              | 'bucketOwnerRead'
              | 'private'
              | 'projectPrivate'
              | 'publicRead'
              | undefined
            ifGenerationMatch?: string | undefined
            ifGenerationNotMatch?: string | undefined
            ifMetagenerationMatch?: string | undefined
            ifMetagenerationNotMatch?: string | undefined
            ifSourceGenerationMatch?: string | undefined
            ifSourceGenerationNotMatch?: string | undefined
            ifSourceMetagenerationMatch?: string | undefined
            ifSourceMetagenerationNotMatch?: string | undefined
            maxBytesRewrittenPerCall?: string | undefined
            projection?: 'full' | 'noAcl' | undefined
            rewriteToken?: string | undefined
            sourceGeneration?: string | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Object }
        output: RewriteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/stop': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/projects/:projectId/hmacKeys': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            serviceAccountEmail?: string | undefined
            showDeletedKeys?: boolean | undefined
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: HmacKeysMetadata
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            serviceAccountEmail: string
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: HmacKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/hmacKeys/:accessId': {
      $delete: {
        input: { param: { projectId: string; accessId: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { projectId: string; accessId: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: HmacKeyMetadata
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; accessId: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        } & { json: HmacKeyMetadata }
        output: HmacKeyMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/serviceAccount': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            userProject?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            uploadType?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ServiceAccount
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
