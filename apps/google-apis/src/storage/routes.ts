import { createRoute, z } from '@hono/zod-openapi'

const BucketAccessControlSchema = z
  .object({
    bucket: z.string().exactOptional().openapi({ description: 'The name of the bucket.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain associated with the entity, if any.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address associated with the entity, if any.' }),
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entity holding the permission, in one of the following forms: \n- user-userId \n- user-email \n- group-groupId \n- group-email \n- domain-domain \n- project-team-projectId \n- allUsers \n- allAuthenticatedUsers Examples: \n- The user liz@example.com would be user-liz@example.com. \n- The group example@googlegroups.com would be group-example@googlegroups.com. \n- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.',
      }),
    entityId: z.string().exactOptional().openapi({ description: 'The ID for the entity, if any.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for the access-control entry.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the access-control entry.' }),
    kind: z
      .string()
      .default('storage#bucketAccessControl')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.',
      }),
    projectTeam: z
      .object({
        projectNumber: z.string().exactOptional().openapi({ description: 'The project number.' }),
        team: z.string().exactOptional().openapi({ description: 'The team.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The project team associated with the entity, if any.',
        required: [],
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The access permission for the entity.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to this access-control entry.' }),
  })
  .openapi({ description: 'An access-control entry.', required: [] })
  .openapi('BucketAccessControl')

const ObjectAccessControlSchema = z
  .object({
    bucket: z.string().exactOptional().openapi({ description: 'The name of the bucket.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain associated with the entity, if any.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address associated with the entity, if any.' }),
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entity holding the permission, in one of the following forms: \n- user-userId \n- user-email \n- group-groupId \n- group-email \n- domain-domain \n- project-team-projectId \n- allUsers \n- allAuthenticatedUsers Examples: \n- The user liz@example.com would be user-liz@example.com. \n- The group example@googlegroups.com would be group-example@googlegroups.com. \n- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.',
      }),
    entityId: z.string().exactOptional().openapi({ description: 'The ID for the entity, if any.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for the access-control entry.' }),
    generation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content generation of the object, if applied to an object.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the access-control entry.' }),
    kind: z
      .string()
      .default('storage#objectAccessControl')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For object access control entries, this is always storage#objectAccessControl.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the object, if applied to an object.' }),
    projectTeam: z
      .object({
        projectNumber: z.string().exactOptional().openapi({ description: 'The project number.' }),
        team: z.string().exactOptional().openapi({ description: 'The team.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The project team associated with the entity, if any.',
        required: [],
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The access permission for the entity.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to this access-control entry.' }),
  })
  .openapi({ description: 'An access-control entry.', required: [] })
  .openapi('ObjectAccessControl')

const BucketSchema = z
  .object({
    acl: z
      .array(BucketAccessControlSchema)
      .exactOptional()
      .openapi({ description: 'Access controls on the bucket.' }),
    autoclass: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not Autoclass is enabled on this bucket' }),
        toggleTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'A date and time in RFC 3339 format representing the instant at which "enabled" was last toggled.',
          }),
      })
      .exactOptional()
      .openapi({ description: "The bucket's Autoclass configuration.", required: [] }),
    billing: z
      .object({
        requesterPays: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'When set to true, Requester Pays is enabled for this bucket.' }),
      })
      .exactOptional()
      .openapi({ description: "The bucket's billing configuration.", required: [] }),
    cors: z
      .array(
        z
          .object({
            maxAgeSeconds: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.',
              }),
            method: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".',
              }),
            origin: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".',
              }),
            responseHeader: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "The bucket's Cross-Origin Resource Sharing (CORS) configuration." }),
    customPlacementConfig: z
      .object({
        dataLocations: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of regional locations in which data is placed.' }),
      })
      .exactOptional()
      .openapi({
        description: "The bucket's custom placement configuration for Custom Dual Regions.",
        required: [],
      }),
    defaultEventBasedHold: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.",
      }),
    defaultObjectAcl: z
      .array(ObjectAccessControlSchema)
      .exactOptional()
      .openapi({
        description: 'Default access controls to apply to new objects when no ACL is provided.',
      }),
    encryption: z
      .object({
        defaultKmsKeyName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Encryption configuration for a bucket.', required: [] }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for the bucket.' }),
    iamConfiguration: z
      .object({
        bucketPolicyOnly: z
          .object({
            enabled: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set, access is controlled only by bucket-level or above IAM policies.',
              }),
            lockedTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              "The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.",
            required: [],
          }),
        publicAccessPrevention: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The bucket's Public Access Prevention configuration. Currently, 'inherited' and 'enforced' are supported.",
          }),
        uniformBucketLevelAccess: z
          .object({
            enabled: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set, access is controlled only by bucket-level or above IAM policies.',
              }),
            lockedTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable.',
              }),
          })
          .exactOptional()
          .openapi({
            description: "The bucket's uniform bucket-level access configuration.",
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: "The bucket's IAM configuration.", required: [] }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the bucket. For buckets, the id and name properties are the same.',
      }),
    kind: z
      .string()
      .default('storage#bucket')
      .exactOptional()
      .openapi({
        description: 'The kind of item this is. For buckets, this is always storage#bucket.',
      }),
    labels: z
      .record(z.string(), z.string().openapi({ description: 'An individual label entry.' }))
      .exactOptional()
      .openapi({ description: 'User-provided labels, in key/value pairs.' }),
    lifecycle: z
      .object({
        rule: z
          .array(
            z
              .object({
                action: z
                  .object({
                    storageClass: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Target storage class. Required iff the type of the action is SetStorageClass.',
                      }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported.',
                      }),
                  })
                  .exactOptional()
                  .openapi({ description: 'The action to take.', required: [] }),
                condition: z
                  .object({
                    age: z
                      .int32()
                      .exactOptional()
                      .openapi({
                        description:
                          'Age of an object (in days). This condition is satisfied when an object reaches the specified age.',
                      }),
                    createdBefore: z.iso
                      .date()
                      .exactOptional()
                      .openapi({
                        description:
                          'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.',
                      }),
                    customTimeBefore: z.iso
                      .date()
                      .exactOptional()
                      .openapi({
                        description:
                          'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the custom time on an object is before this date in UTC.',
                      }),
                    daysSinceCustomTime: z
                      .int32()
                      .exactOptional()
                      .openapi({
                        description:
                          'Number of days elapsed since the user-specified timestamp set on an object. The condition is satisfied if the days elapsed is at least this number. If no custom timestamp is specified on an object, the condition does not apply.',
                      }),
                    daysSinceNoncurrentTime: z
                      .int32()
                      .exactOptional()
                      .openapi({
                        description:
                          "Number of days elapsed since the noncurrent timestamp of an object. The condition is satisfied if the days elapsed is at least this number. This condition is relevant only for versioned objects. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.",
                      }),
                    isLive: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.',
                      }),
                    matchesPattern: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released.',
                      }),
                    matchesPrefix: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'List of object name prefixes. This condition will be satisfied when at least one of the prefixes exactly matches the beginning of the object name.',
                      }),
                    matchesStorageClass: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.',
                      }),
                    matchesSuffix: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'List of object name suffixes. This condition will be satisfied when at least one of the suffixes exactly matches the end of the object name.',
                      }),
                    noncurrentTimeBefore: z.iso
                      .date()
                      .exactOptional()
                      .openapi({
                        description:
                          'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the noncurrent time on an object is before this date in UTC. This condition is relevant only for versioned objects.',
                      }),
                    numNewerVersions: z
                      .int32()
                      .exactOptional()
                      .openapi({
                        description:
                          'Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The condition(s) under which the action will be taken.',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "The bucket's lifecycle configuration. See lifecycle management for more information.",
        required: [],
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.",
      }),
    locationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the bucket location.' }),
    logging: z
      .object({
        logBucket: z
          .string()
          .exactOptional()
          .openapi({
            description: "The destination bucket where the current bucket's logs should be placed.",
          }),
        logObjectPrefix: z
          .string()
          .exactOptional()
          .openapi({ description: 'A prefix for log object names.' }),
      })
      .exactOptional()
      .openapi({
        description:
          "The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.",
        required: [],
      }),
    metageneration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The metadata generation of this bucket.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the bucket.' }),
    owner: z
      .object({
        entity: z
          .string()
          .exactOptional()
          .openapi({ description: 'The entity, in the form project-owner-projectId.' }),
        entityId: z.string().exactOptional().openapi({ description: 'The ID for the entity.' }),
      })
      .exactOptional()
      .openapi({
        description: "The owner of the bucket. This is always the project team's owner group.",
        required: [],
      }),
    projectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project number of the project the bucket belongs to.' }),
    retentionPolicy: z
      .object({
        effectiveTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format.',
          }),
        isLocked: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Once locked, an object retention policy cannot be modified.' }),
        retentionPeriod: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.",
        required: [],
      }),
    rpo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.',
      }),
    satisfiesPZS: z.boolean().exactOptional().openapi({ description: 'Reserved for future use.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this bucket.' }),
    storageClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.",
      }),
    timeCreated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation time of the bucket in RFC 3339 format.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The modification time of the bucket in RFC 3339 format.' }),
    versioning: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'While set to true, versioning is fully enabled for this bucket.',
          }),
      })
      .exactOptional()
      .openapi({ description: "The bucket's versioning configuration.", required: [] }),
    website: z
      .object({
        mainPageSuffix: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.",
          }),
        notFoundPage: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.",
        required: [],
      }),
  })
  .openapi({ description: 'A bucket.', required: [] })
  .openapi('Bucket')

const BucketAccessControlsSchema = z
  .object({
    items: z
      .array(BucketAccessControlSchema)
      .exactOptional()
      .openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#bucketAccessControls')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.',
      }),
  })
  .openapi({ description: 'An access-control list.', required: [] })
  .openapi('BucketAccessControls')

const BucketsSchema = z
  .object({
    items: z.array(BucketSchema).exactOptional().openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#buckets')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of buckets, this is always storage#buckets.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'A list of buckets.', required: [] })
  .openapi('Buckets')

const ChannelSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address where notifications are delivered for this channel.' }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A UUID or similar unique string that identifies this channel.' }),
    kind: z
      .string()
      .default('api#channel')
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".',
      }),
    params: z
      .record(z.string(), z.string().openapi({ description: 'Declares a new parameter by name.' }))
      .exactOptional()
      .openapi({
        description: 'Additional parameters controlling delivery channel behavior. Optional.',
      }),
    payload: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A Boolean value to indicate whether payload is wanted. Optional.' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.',
      }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'A version-specific identifier for the watched resource.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of delivery mechanism used for this channel.' }),
  })
  .openapi({
    description: 'An notification channel used to watch for resource changes.',
    required: [],
  })
  .openapi('Channel')

const ObjectSchema = z
  .object({
    acl: z
      .array(ObjectAccessControlSchema)
      .exactOptional()
      .openapi({ description: 'Access controls on the object.' }),
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the bucket containing this object.' }),
    cacheControl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.',
      }),
    componentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of underlying components that make up this object. Components are accumulated by compose operations.',
      }),
    contentDisposition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-Disposition of the object data.' }),
    contentEncoding: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-Encoding of the object data.' }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-Language of the object data.' }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.',
      }),
    crc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.',
      }),
    customTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A timestamp in RFC 3339 format specified by the user for an object.',
      }),
    customerEncryption: z
      .object({
        encryptionAlgorithm: z
          .string()
          .exactOptional()
          .openapi({ description: 'The encryption algorithm.' }),
        keySha256: z
          .string()
          .exactOptional()
          .openapi({ description: 'SHA256 hash value of the encryption key.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Metadata of customer-supplied encryption key, if the object is encrypted by such a key.',
        required: [],
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for the object.' }),
    eventBasedHold: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.",
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The content generation of this object. Used for object versioning.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the object, including the bucket name, object name, and generation number.',
      }),
    kind: z
      .string()
      .default('storage#object')
      .exactOptional()
      .openapi({
        description: 'The kind of item this is. For objects, this is always storage#object.',
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.',
      }),
    md5Hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.',
      }),
    mediaLink: z.string().exactOptional().openapi({ description: 'Media download link.' }),
    metadata: z
      .record(z.string(), z.string().openapi({ description: 'An individual metadata entry.' }))
      .exactOptional()
      .openapi({ description: 'User-provided metadata, in key/value pairs.' }),
    metageneration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the object. Required if not specified by URL parameter.',
      }),
    owner: z
      .object({
        entity: z
          .string()
          .exactOptional()
          .openapi({ description: 'The entity, in the form user-userId.' }),
        entityId: z.string().exactOptional().openapi({ description: 'The ID for the entity.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The owner of the object. This will always be the uploader of the object.',
        required: [],
      }),
    retentionExpirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).",
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'The link to this object.' }),
    size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-Length of the data in bytes.' }),
    storageClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'Storage class of the object.' }),
    temporaryHold: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.',
      }),
    timeCreated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation time of the object in RFC 3339 format.' }),
    timeDeleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.',
      }),
    timeStorageClassUpdated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.",
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.',
      }),
  })
  .openapi({ description: 'An object.', required: [] })
  .openapi('Object')

const ComposeRequestSchema = z
  .object({
    destination: ObjectSchema.exactOptional().openapi({
      description: 'Properties of the resulting object.',
    }),
    kind: z
      .string()
      .default('storage#composeRequest')
      .exactOptional()
      .openapi({ description: 'The kind of item this is.' }),
    sourceObjects: z
      .array(
        z
          .object({
            generation: z
              .string()
              .exactOptional()
              .openapi({ description: 'The generation of this object to use as the source.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The source object's name. All source objects must reside in the same bucket.",
              }),
            objectPreconditions: z
              .object({
                ifGenerationMatch: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Conditions that must be met for this operation to execute.',
                required: [],
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The list of source objects that will be concatenated into a single object.',
      }),
  })
  .openapi({ description: 'A Compose request.', required: [] })
  .openapi('ComposeRequest')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"',
    required: [],
  })
  .openapi('Expr')

const HmacKeyMetadataSchema = z
  .object({
    accessId: z.string().exactOptional().openapi({ description: 'The ID of the HMAC Key.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for the HMAC key.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the HMAC key, including the Project ID and the Access ID.',
      }),
    kind: z
      .string()
      .default('storage#hmacKeyMetadata')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Project ID owning the service account to which the key authenticates.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'The link to this resource.' }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: "The email address of the key's associated service account." }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.',
      }),
    timeCreated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation time of the HMAC key in RFC 3339 format.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last modification time of the HMAC key metadata in RFC 3339 format.',
      }),
  })
  .openapi({
    description: 'JSON template to produce a JSON-style HMAC Key metadata resource.',
    required: [],
  })
  .openapi('HmacKeyMetadata')

const HmacKeySchema = z
  .object({
    kind: z
      .string()
      .default('storage#hmacKey')
      .exactOptional()
      .openapi({
        description: 'The kind of item this is. For HMAC keys, this is always storage#hmacKey.',
      }),
    metadata: HmacKeyMetadataSchema.exactOptional().openapi({ description: 'Key metadata.' }),
    secret: z.string().exactOptional().openapi({ description: 'HMAC secret key material.' }),
  })
  .openapi({
    description: 'JSON template to produce a JSON-style HMAC Key resource for Create responses.',
    required: [],
  })
  .openapi('HmacKey')

const HmacKeysMetadataSchema = z
  .object({
    items: z
      .array(HmacKeyMetadataSchema)
      .exactOptional()
      .openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#hmacKeysMetadata')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'A list of hmacKeys.', required: [] })
  .openapi('HmacKeysMetadata')

const NotificationSchema = z
  .object({
    custom_attributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1 Entity tag for this subscription notification.' }),
    event_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If present, only send notifications about listed event types. If empty, sent notifications for all event types.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the notification.' }),
    kind: z
      .string()
      .default('storage#notification')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For notifications, this is always storage#notification.',
      }),
    object_name_prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, only apply this notification configuration to object names that begin with this prefix.',
      }),
    payload_format: z
      .string()
      .default('JSON_API_V1')
      .exactOptional()
      .openapi({ description: 'The desired content of the Payload.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical URL of this notification.' }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'",
      }),
  })
  .openapi({ description: 'A subscription to receive Google PubSub notifications.', required: [] })
  .openapi('Notification')

const NotificationsSchema = z
  .object({
    items: z
      .array(NotificationSchema)
      .exactOptional()
      .openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#notifications')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of notifications, this is always storage#notifications.',
      }),
  })
  .openapi({ description: 'A list of notification subscriptions.', required: [] })
  .openapi('Notifications')

const ObjectAccessControlsSchema = z
  .object({
    items: z
      .array(ObjectAccessControlSchema)
      .exactOptional()
      .openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#objectAccessControls')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.',
      }),
  })
  .openapi({ description: 'An access-control list.', required: [] })
  .openapi('ObjectAccessControls')

const ObjectsSchema = z
  .object({
    items: z.array(ObjectSchema).exactOptional().openapi({ description: 'The list of items.' }),
    kind: z
      .string()
      .default('storage#objects')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For lists of objects, this is always storage#objects.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    prefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.',
      }),
  })
  .openapi({ description: 'A list of objects.', required: [] })
  .openapi('Objects')

const PolicySchema = z
  .object({
    bindings: z
      .array(
        z
          .object({
            condition: ExprSchema.exactOptional().openapi({
              description:
                'The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.',
            }),
            members: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:  \n- allUsers — A special identifier that represents anyone on the internet; with or without a Google account.  \n- allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.  \n- user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.  \n- serviceAccount:emailid — An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .  \n- group:emailid — An email address that represents a Google group. For example, group:admins@example.com.  \n- domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.  \n- projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project  \n- projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project  \n- projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project',
              }),
            role: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.\nThe new IAM roles are:  \n- roles/storage.admin — Full control of Google Cloud Storage resources.  \n- roles/storage.objectViewer — Read-Only access to Google Cloud Storage objects.  \n- roles/storage.objectCreator — Access to create objects in Google Cloud Storage.  \n- roles/storage.objectAdmin — Full control of Google Cloud Storage objects.   The legacy IAM roles are:  \n- roles/storage.legacyObjectReader — Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.  \n- roles/storage.legacyObjectOwner — Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.  \n- roles/storage.legacyBucketReader — Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.  \n- roles/storage.legacyBucketWriter — Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the WRITER role.  \n- roles/storage.legacyBucketOwner — Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the OWNER role.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An association between a role, which comes with a set of permissions, and members who may assume that role.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP 1.1  Entity tag for the policy.' }),
    kind: z
      .string()
      .default('storage#policy')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.',
      }),
    version: z.int32().exactOptional().openapi({ description: 'The IAM policy format version.' }),
  })
  .openapi({ description: 'A bucket/object IAM policy.', required: [] })
  .openapi('Policy')

const RewriteResponseSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.',
      }),
    kind: z
      .string()
      .default('storage#rewriteResponse')
      .exactOptional()
      .openapi({ description: 'The kind of item this is.' }),
    objectSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total size of the object being copied in bytes. This property is always present in the response.',
      }),
    resource: ObjectSchema.exactOptional().openapi({
      description:
        'A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.',
    }),
    rewriteToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.',
      }),
    totalBytesRewritten: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.',
      }),
  })
  .openapi({ description: 'A rewrite response.', required: [] })
  .openapi('RewriteResponse')

const ServiceAccountSchema = z
  .object({
    email_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the notification.' }),
    kind: z
      .string()
      .default('storage#serviceAccount')
      .exactOptional()
      .openapi({
        description:
          'The kind of item this is. For notifications, this is always storage#notification.',
      }),
  })
  .openapi({ description: 'A subscription to receive Google PubSub notifications.', required: [] })
  .openapi('ServiceAccount')

const TestIamPermissionsResponseSchema = z
  .object({
    kind: z
      .string()
      .default('storage#testIamPermissionsResponse')
      .exactOptional()
      .openapi({ description: 'The kind of item this is.' }),
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets or objects. The supported permissions are as follows:  \n- storage.buckets.delete — Delete bucket.  \n- storage.buckets.get — Read bucket metadata.  \n- storage.buckets.getIamPolicy — Read bucket IAM policy.  \n- storage.buckets.create — Create bucket.  \n- storage.buckets.list — List buckets.  \n- storage.buckets.setIamPolicy — Update bucket IAM policy.  \n- storage.buckets.update — Update bucket metadata.  \n- storage.objects.delete — Delete object.  \n- storage.objects.get — Read object data and metadata.  \n- storage.objects.getIamPolicy — Read object IAM policy.  \n- storage.objects.create — Create object.  \n- storage.objects.list — List objects.  \n- storage.objects.setIamPolicy — Update object IAM policy.  \n- storage.objects.update — Update object metadata.',
      }),
  })
  .openapi({
    description: 'A storage.(buckets|objects).testIamPermissions response.',
    required: [],
  })
  .openapi('TestIamPermissionsResponse')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "media", "multipart", "resumable").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/devstorage.full_control':
          'Manage your data and permissions in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_only':
          'View your data in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_write':
          'Manage your data in Google Cloud Storage',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud Platform services',
        'https://www.googleapis.com/auth/devstorage.full_control':
          'Manage your data and permissions in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_only':
          'View your data in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_write':
          'Manage your data in Google Cloud Storage',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getBRoute = createRoute({
  method: 'get',
  path: '/b',
  tags: ['buckets'],
  description: 'Retrieves a list of buckets for a given project.',
  operationId: 'storage.buckets.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      project: z
        .string()
        .openapi({
          param: {
            description: 'A valid API project identifier.',
            in: 'query',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results to buckets whose names begin with this prefix.',
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to noAcl.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBRoute = createRoute({
  method: 'post',
  path: '/b',
  tags: ['buckets'],
  description: 'Creates a new bucket.',
  operationId: 'storage.buckets.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      project: z
        .string()
        .openapi({
          param: {
            description: 'A valid API project identifier.',
            in: 'query',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      predefinedAcl: z
        .enum(['authenticatedRead', 'private', 'projectPrivate', 'publicRead', 'publicReadWrite'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this bucket.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'private',
                'projectPrivate',
                'publicRead',
                'publicReadWrite',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      predefinedDefaultObjectAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of default object access controls to this bucket.',
            in: 'query',
            name: 'predefinedDefaultObjectAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}',
  tags: ['buckets'],
  description: 'Returns metadata for the specified bucket.',
  operationId: 'storage.buckets.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to noAcl.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const putBBucketRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}',
  tags: ['buckets'],
  description:
    'Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.',
  operationId: 'storage.buckets.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      predefinedAcl: z
        .enum(['authenticatedRead', 'private', 'projectPrivate', 'publicRead', 'publicReadWrite'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this bucket.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'private',
                'projectPrivate',
                'publicRead',
                'publicReadWrite',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      predefinedDefaultObjectAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of default object access controls to this bucket.',
            in: 'query',
            name: 'predefinedDefaultObjectAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteBBucketRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}',
  tags: ['buckets'],
  description: 'Permanently deletes an empty bucket.',
  operationId: 'storage.buckets.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only deletes the bucket if its metageneration matches this value.',
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only deletes the bucket if its metageneration does not match this value.',
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const patchBBucketRoute = createRoute({
  method: 'patch',
  path: '/b/{bucket}',
  tags: ['buckets'],
  description:
    'Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.',
  operationId: 'storage.buckets.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      predefinedAcl: z
        .enum(['authenticatedRead', 'private', 'projectPrivate', 'publicRead', 'publicReadWrite'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this bucket.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'private',
                'projectPrivate',
                'publicRead',
                'publicReadWrite',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      predefinedDefaultObjectAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of default object access controls to this bucket.',
            in: 'query',
            name: 'predefinedDefaultObjectAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketAclRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/acl',
  tags: ['bucketAccessControls'],
  description: 'Retrieves ACL entries on the specified bucket.',
  operationId: 'storage.bucketAccessControls.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketAccessControlsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const postBBucketAclRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/acl',
  tags: ['bucketAccessControls'],
  description: 'Creates a new ACL entry on the specified bucket.',
  operationId: 'storage.bucketAccessControls.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketAclEntityRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/acl/{entity}',
  tags: ['bucketAccessControls'],
  description: 'Returns the ACL entry for the specified entity on the specified bucket.',
  operationId: 'storage.bucketAccessControls.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const putBBucketAclEntityRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/acl/{entity}',
  tags: ['bucketAccessControls'],
  description: 'Updates an ACL entry on the specified bucket.',
  operationId: 'storage.bucketAccessControls.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteBBucketAclEntityRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}/acl/{entity}',
  tags: ['bucketAccessControls'],
  description:
    'Permanently deletes the ACL entry for the specified entity on the specified bucket.',
  operationId: 'storage.bucketAccessControls.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const patchBBucketAclEntityRoute = createRoute({
  method: 'patch',
  path: '/b/{bucket}/acl/{entity}',
  tags: ['bucketAccessControls'],
  description: 'Patches an ACL entry on the specified bucket.',
  operationId: 'storage.bucketAccessControls.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BucketAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketDefaultObjectAclRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/defaultObjectAcl',
  tags: ['defaultObjectAccessControls'],
  description: 'Retrieves default object ACL entries on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, only return default ACL listing if the bucket's current metageneration matches this value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If present, only return default ACL listing if the bucket's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const postBBucketDefaultObjectAclRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/defaultObjectAcl',
  tags: ['defaultObjectAccessControls'],
  description: 'Creates a new default object ACL entry on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketDefaultObjectAclEntityRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/defaultObjectAcl/{entity}',
  tags: ['defaultObjectAccessControls'],
  description:
    'Returns the default object ACL entry for the specified entity on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const putBBucketDefaultObjectAclEntityRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/defaultObjectAcl/{entity}',
  tags: ['defaultObjectAccessControls'],
  description: 'Updates a default object ACL entry on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteBBucketDefaultObjectAclEntityRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}/defaultObjectAcl/{entity}',
  tags: ['defaultObjectAccessControls'],
  description:
    'Permanently deletes the default object ACL entry for the specified entity on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const patchBBucketDefaultObjectAclEntityRoute = createRoute({
  method: 'patch',
  path: '/b/{bucket}/defaultObjectAcl/{entity}',
  tags: ['defaultObjectAccessControls'],
  description: 'Patches a default object ACL entry on the specified bucket.',
  operationId: 'storage.defaultObjectAccessControls.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketIamRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/iam',
  tags: ['buckets'],
  description: 'Returns an IAM policy for the specified bucket.',
  operationId: 'storage.buckets.getIamPolicy',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      optionsRequestedPolicyVersion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.",
            in: 'query',
            name: 'optionsRequestedPolicyVersion',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const putBBucketIamRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/iam',
  tags: ['buckets'],
  description: 'Updates an IAM policy for the specified bucket.',
  operationId: 'storage.buckets.setIamPolicy',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketIamTestPermissionsRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/iam/testPermissions',
  tags: ['buckets'],
  description:
    'Tests a set of permissions on the given bucket to see which, if any, are held by the caller.',
  operationId: 'storage.buckets.testIamPermissions',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      permissions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Permissions to test.',
            explode: true,
            in: 'query',
            name: 'permissions',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBBucketLockRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/lockRetentionPolicy',
  tags: ['buckets'],
  description: 'Locks retention policy on a bucket.',
  operationId: 'storage.buckets.lockRetentionPolicy',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      ifMetagenerationMatch: z
        .string()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether bucket's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketNotificationConfigsRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/notificationConfigs',
  tags: ['notifications'],
  description: 'Retrieves a list of notification subscriptions for a given bucket.',
  operationId: 'storage.notifications.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a Google Cloud Storage bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBBucketNotificationConfigsRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/notificationConfigs',
  tags: ['notifications'],
  description: 'Creates a notification subscription for a given bucket.',
  operationId: 'storage.notifications.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The parent bucket of the notification.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketNotificationConfigsNotificationRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/notificationConfigs/{notification}',
  tags: ['notifications'],
  description: 'View a notification configuration.',
  operationId: 'storage.notifications.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The parent bucket of the notification.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      notification: z
        .string()
        .openapi({
          param: {
            description: 'Notification ID',
            in: 'path',
            name: 'notification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const deleteBBucketNotificationConfigsNotificationRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}/notificationConfigs/{notification}',
  tags: ['notifications'],
  description: 'Permanently deletes a notification subscription.',
  operationId: 'storage.notifications.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The parent bucket of the notification.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      notification: z
        .string()
        .openapi({
          param: {
            description: 'ID of the notification to delete.',
            in: 'path',
            name: 'notification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketORoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o',
  tags: ['objects'],
  description: 'Retrieves a list of objects matching the criteria.',
  operationId: 'storage.objects.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      delimiter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.',
            in: 'query',
            name: 'delimiter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).',
            in: 'query',
            name: 'endOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeTrailingDelimiter: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.',
            in: 'query',
            name: 'includeTrailingDelimiter',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      matchGlob: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results to objects and prefixes that match this glob pattern.',
            in: 'query',
            name: 'matchGlob',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results to objects whose names begin with this prefix.',
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to noAcl.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      startOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).',
            in: 'query',
            name: 'startOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.',
            in: 'query',
            name: 'versions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which to look for objects.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBBucketORoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/o',
  tags: ['objects'],
  description: 'Stores a new object and metadata.',
  operationId: 'storage.objects.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      contentEncoding: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.',
            in: 'query',
            name: 'contentEncoding',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
            in: 'query',
            name: 'ifGenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      kmsKeyName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.",
            in: 'query',
            name: 'kmsKeyName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      predefinedAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this object.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description:
              "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.",
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: ObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBBucketOWatchRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/o/watch',
  tags: ['objects'],
  description: 'Watch for changes on all objects in a bucket.',
  operationId: 'storage.objects.watchAll',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      delimiter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.',
            in: 'query',
            name: 'delimiter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).',
            in: 'query',
            name: 'endOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeTrailingDelimiter: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.',
            in: 'query',
            name: 'includeTrailingDelimiter',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results to objects whose names begin with this prefix.',
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to noAcl.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      startOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).',
            in: 'query',
            name: 'startOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.',
            in: 'query',
            name: 'versions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which to look for objects.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketOObjectRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o/{object}',
  tags: ['objects'],
  description: 'Retrieves an object or its metadata.',
  operationId: 'storage.objects.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
            in: 'query',
            name: 'ifGenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to noAcl.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const putBBucketOObjectRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/o/{object}',
  tags: ['objects'],
  description: "Updates an object's metadata.",
  operationId: 'storage.objects.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
            in: 'query',
            name: 'ifGenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      predefinedAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this object.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteBBucketOObjectRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}/o/{object}',
  tags: ['objects'],
  description:
    'Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.',
  operationId: 'storage.objects.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
            in: 'query',
            name: 'ifGenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const patchBBucketOObjectRoute = createRoute({
  method: 'patch',
  path: '/b/{bucket}/o/{object}',
  tags: ['objects'],
  description: "Patches an object's metadata.",
  operationId: 'storage.objects.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifGenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
            in: 'query',
            name: 'ifGenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationNotMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
            in: 'query',
            name: 'ifMetagenerationNotMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      predefinedAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to this object.',
            in: 'query',
            name: 'predefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'noAcl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Set of properties to return. Defaults to full.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'noAcl'], type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request, for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketOObjectAclRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o/{object}/acl',
  tags: ['objectAccessControls'],
  description: 'Retrieves ACL entries on the specified object.',
  operationId: 'storage.objectAccessControls.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const postBBucketOObjectAclRoute = createRoute({
  method: 'post',
  path: '/b/{bucket}/o/{object}/acl',
  tags: ['objectAccessControls'],
  description: 'Creates a new ACL entry on the specified object.',
  operationId: 'storage.objectAccessControls.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketOObjectAclEntityRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o/{object}/acl/{entity}',
  tags: ['objectAccessControls'],
  description: 'Returns the ACL entry for the specified entity on the specified object.',
  operationId: 'storage.objectAccessControls.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const putBBucketOObjectAclEntityRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/o/{object}/acl/{entity}',
  tags: ['objectAccessControls'],
  description: 'Updates an ACL entry on the specified object.',
  operationId: 'storage.objectAccessControls.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteBBucketOObjectAclEntityRoute = createRoute({
  method: 'delete',
  path: '/b/{bucket}/o/{object}/acl/{entity}',
  tags: ['objectAccessControls'],
  description:
    'Permanently deletes the ACL entry for the specified entity on the specified object.',
  operationId: 'storage.objectAccessControls.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const patchBBucketOObjectAclEntityRoute = createRoute({
  method: 'patch',
  path: '/b/{bucket}/o/{object}/acl/{entity}',
  tags: ['objectAccessControls'],
  description: 'Patches an ACL entry on the specified object.',
  operationId: 'storage.objectAccessControls.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of a bucket.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObjectAccessControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectAccessControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getBBucketOObjectIamRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o/{object}/iam',
  tags: ['objects'],
  description: 'Returns an IAM policy for the specified object.',
  operationId: 'storage.objects.getIamPolicy',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const putBBucketOObjectIamRoute = createRoute({
  method: 'put',
  path: '/b/{bucket}/o/{object}/iam',
  tags: ['objects'],
  description: 'Updates an IAM policy for the specified object.',
  operationId: 'storage.objects.setIamPolicy',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getBBucketOObjectIamTestPermissionsRoute = createRoute({
  method: 'get',
  path: '/b/{bucket}/o/{object}/iam/testPermissions',
  tags: ['objects'],
  description:
    'Tests a set of permissions on the given object to see which, if any, are held by the caller.',
  operationId: 'storage.objects.testIamPermissions',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      permissions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Permissions to test.',
            explode: true,
            in: 'query',
            name: 'permissions',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      generation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If present, selects a specific revision of this object (as opposed to the latest version, the default).',
            in: 'query',
            name: 'generation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'Name of the bucket in which the object resides.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBDestinationBucketODestinationObjectComposeRoute = createRoute({
  method: 'post',
  path: '/b/{destinationBucket}/o/{destinationObject}/compose',
  tags: ['objects'],
  description: 'Concatenates a list of existing objects into a new object in the same bucket.',
  operationId: 'storage.objects.compose',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      destinationPredefinedAcl: z
        .enum([
          'authenticatedRead',
          'bucketOwnerFullControl',
          'bucketOwnerRead',
          'private',
          'projectPrivate',
          'publicRead',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply a predefined set of access controls to the destination object.',
            in: 'query',
            name: 'destinationPredefinedAcl',
            schema: {
              enum: [
                'authenticatedRead',
                'bucketOwnerFullControl',
                'bucketOwnerRead',
                'private',
                'projectPrivate',
                'publicRead',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      ifGenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
            in: 'query',
            name: 'ifGenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ifMetagenerationMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Makes the operation conditional on whether the object's current metageneration matches the given value.",
            in: 'query',
            name: 'ifMetagenerationMatch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      kmsKeyName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.",
            in: 'query',
            name: 'kmsKeyName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project to be billed for this request. Required for Requester Pays buckets.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      destinationBucket: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the bucket containing the source objects. The destination object is stored in this bucket.',
            in: 'path',
            name: 'destinationBucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destinationObject: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
            in: 'path',
            name: 'destinationObject',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ComposeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute =
  createRoute({
    method: 'post',
    path: '/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}',
    tags: ['objects'],
    description: 'Copies a source object to a destination object. Optionally overrides metadata.',
    operationId: 'storage.objects.copy',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        uploadType: UploadTypeParamsSchema,
        userIp: UserIpParamsSchema,
        destinationKmsKeyName: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.",
              in: 'query',
              name: 'destinationKmsKeyName',
              schema: { type: 'string' },
              required: false,
            },
          }),
        destinationPredefinedAcl: z
          .enum([
            'authenticatedRead',
            'bucketOwnerFullControl',
            'bucketOwnerRead',
            'private',
            'projectPrivate',
            'publicRead',
          ])
          .exactOptional()
          .openapi({
            param: {
              description: 'Apply a predefined set of access controls to the destination object.',
              in: 'query',
              name: 'destinationPredefinedAcl',
              schema: {
                enum: [
                  'authenticatedRead',
                  'bucketOwnerFullControl',
                  'bucketOwnerRead',
                  'private',
                  'projectPrivate',
                  'publicRead',
                ],
                type: 'string',
              },
              required: false,
            },
          }),
        ifGenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
              in: 'query',
              name: 'ifGenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifGenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
              in: 'query',
              name: 'ifGenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifMetagenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current metageneration matches the given value.",
              in: 'query',
              name: 'ifMetagenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifMetagenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current metageneration does not match the given value.",
              in: 'query',
              name: 'ifMetagenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceGenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current generation matches the given value.",
              in: 'query',
              name: 'ifSourceGenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceGenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current generation does not match the given value.",
              in: 'query',
              name: 'ifSourceGenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceMetagenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current metageneration matches the given value.",
              in: 'query',
              name: 'ifSourceMetagenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceMetagenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current metageneration does not match the given value.",
              in: 'query',
              name: 'ifSourceMetagenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        projection: z
          .enum(['full', 'noAcl'])
          .exactOptional()
          .openapi({
            param: {
              description:
                'Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.',
              in: 'query',
              name: 'projection',
              schema: { enum: ['full', 'noAcl'], type: 'string' },
              required: false,
            },
          }),
        sourceGeneration: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If present, selects a specific revision of the source object (as opposed to the latest version, the default).',
              in: 'query',
              name: 'sourceGeneration',
              schema: { type: 'string' },
              required: false,
            },
          }),
        userProject: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The project to be billed for this request. Required for Requester Pays buckets.',
              in: 'query',
              name: 'userProject',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        sourceBucket: z
          .string()
          .openapi({
            param: {
              description: 'Name of the bucket in which to find the source object.',
              in: 'path',
              name: 'sourceBucket',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceObject: z
          .string()
          .openapi({
            param: {
              description:
                'Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
              in: 'path',
              name: 'sourceObject',
              required: true,
              schema: { type: 'string' },
            },
          }),
        destinationBucket: z
          .string()
          .openapi({
            param: {
              description:
                "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
              in: 'path',
              name: 'destinationBucket',
              required: true,
              schema: { type: 'string' },
            },
          }),
        destinationObject: z
          .string()
          .openapi({
            param: {
              description:
                "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.",
              in: 'path',
              name: 'destinationObject',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ObjectSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ObjectSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
        Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
        Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
      },
    ],
  })

export const postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute =
  createRoute({
    method: 'post',
    path: '/b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}',
    tags: ['objects'],
    description: 'Rewrites a source object to a destination object. Optionally overrides metadata.',
    operationId: 'storage.objects.rewrite',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        uploadType: UploadTypeParamsSchema,
        userIp: UserIpParamsSchema,
        destinationKmsKeyName: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.",
              in: 'query',
              name: 'destinationKmsKeyName',
              schema: { type: 'string' },
              required: false,
            },
          }),
        destinationPredefinedAcl: z
          .enum([
            'authenticatedRead',
            'bucketOwnerFullControl',
            'bucketOwnerRead',
            'private',
            'projectPrivate',
            'publicRead',
          ])
          .exactOptional()
          .openapi({
            param: {
              description: 'Apply a predefined set of access controls to the destination object.',
              in: 'query',
              name: 'destinationPredefinedAcl',
              schema: {
                enum: [
                  'authenticatedRead',
                  'bucketOwnerFullControl',
                  'bucketOwnerRead',
                  'private',
                  'projectPrivate',
                  'publicRead',
                ],
                type: 'string',
              },
              required: false,
            },
          }),
        ifGenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.",
              in: 'query',
              name: 'ifGenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifGenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.",
              in: 'query',
              name: 'ifGenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifMetagenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current metageneration matches the given value.",
              in: 'query',
              name: 'ifMetagenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifMetagenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the destination object's current metageneration does not match the given value.",
              in: 'query',
              name: 'ifMetagenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceGenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current generation matches the given value.",
              in: 'query',
              name: 'ifSourceGenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceGenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current generation does not match the given value.",
              in: 'query',
              name: 'ifSourceGenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceMetagenerationMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current metageneration matches the given value.",
              in: 'query',
              name: 'ifSourceMetagenerationMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        ifSourceMetagenerationNotMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Makes the operation conditional on whether the source object's current metageneration does not match the given value.",
              in: 'query',
              name: 'ifSourceMetagenerationNotMatch',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxBytesRewrittenPerCall: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.",
              in: 'query',
              name: 'maxBytesRewrittenPerCall',
              schema: { type: 'string' },
              required: false,
            },
          }),
        projection: z
          .enum(['full', 'noAcl'])
          .exactOptional()
          .openapi({
            param: {
              description:
                'Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.',
              in: 'query',
              name: 'projection',
              schema: { enum: ['full', 'noAcl'], type: 'string' },
              required: false,
            },
          }),
        rewriteToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.",
              in: 'query',
              name: 'rewriteToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceGeneration: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If present, selects a specific revision of the source object (as opposed to the latest version, the default).',
              in: 'query',
              name: 'sourceGeneration',
              schema: { type: 'string' },
              required: false,
            },
          }),
        userProject: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The project to be billed for this request. Required for Requester Pays buckets.',
              in: 'query',
              name: 'userProject',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        sourceBucket: z
          .string()
          .openapi({
            param: {
              description: 'Name of the bucket in which to find the source object.',
              in: 'path',
              name: 'sourceBucket',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceObject: z
          .string()
          .openapi({
            param: {
              description:
                'Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.',
              in: 'path',
              name: 'sourceObject',
              required: true,
              schema: { type: 'string' },
            },
          }),
        destinationBucket: z
          .string()
          .openapi({
            param: {
              description:
                "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.",
              in: 'path',
              name: 'destinationBucket',
              required: true,
              schema: { type: 'string' },
            },
          }),
        destinationObject: z
          .string()
          .openapi({
            param: {
              description:
                "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
              in: 'path',
              name: 'destinationObject',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ObjectSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RewriteResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
        Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
        Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
      },
    ],
  })

export const postChannelsStopRoute = createRoute({
  method: 'post',
  path: '/channels/stop',
  tags: ['channels'],
  description: 'Stop watching resources through this channel',
  operationId: 'storage.channels.stop',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getProjectsProjectIdHmacKeysRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/hmacKeys',
  tags: ['projects'],
  description: 'Retrieves a list of HMAC keys matching the criteria.',
  operationId: 'storage.projects.hmacKeys.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceAccountEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If present, only keys for the given service account are returned.',
            in: 'query',
            name: 'serviceAccountEmail',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeletedKeys: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not to show keys in the DELETED state.',
            in: 'query',
            name: 'showDeletedKeys',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Name of the project in which to look for HMAC keys.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HmacKeysMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
  ],
})

export const postProjectsProjectIdHmacKeysRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/hmacKeys',
  tags: ['projects'],
  description: 'Creates a new HMAC key for the specified service account.',
  operationId: 'storage.projects.hmacKeys.create',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      serviceAccountEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email address of the service account.',
            in: 'query',
            name: 'serviceAccountEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID owning the service account.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HmacKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const getProjectsProjectIdHmacKeysAccessIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/hmacKeys/{accessId}',
  tags: ['projects'],
  description: "Retrieves an HMAC key's metadata",
  operationId: 'storage.projects.hmacKeys.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID owning the service account of the requested key.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accessId: z
        .string()
        .openapi({
          param: {
            description: 'Name of the HMAC key.',
            in: 'path',
            name: 'accessId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HmacKeyMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
  ],
})

export const putProjectsProjectIdHmacKeysAccessIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/hmacKeys/{accessId}',
  tags: ['projects'],
  description:
    'Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.',
  operationId: 'storage.projects.hmacKeys.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID owning the service account of the updated key.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accessId: z
        .string()
        .openapi({
          param: {
            description: 'Name of the HMAC key being updated.',
            in: 'path',
            name: 'accessId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HmacKeyMetadataSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HmacKeyMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
  ],
})

export const deleteProjectsProjectIdHmacKeysAccessIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/hmacKeys/{accessId}',
  tags: ['projects'],
  description: 'Deletes an HMAC key.',
  operationId: 'storage.projects.hmacKeys.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID owning the requested key',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accessId: z
        .string()
        .openapi({
          param: {
            description: 'Name of the HMAC key to be deleted.',
            in: 'path',
            name: 'accessId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getProjectsProjectIdServiceAccountRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/serviceAccount',
  tags: ['projects'],
  description: "Get the email address of this project's Google Cloud Storage service account.",
  operationId: 'storage.projects.serviceAccount.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      uploadType: UploadTypeParamsSchema,
      userIp: UserIpParamsSchema,
      userProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project to be billed for this request.',
            in: 'query',
            name: 'userProject',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})
