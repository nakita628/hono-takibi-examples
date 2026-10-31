import { createRoute, z } from '@hono/zod-openapi'

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const GoogleSecuritySafebrowsingV4ChecksumSchema = z
  .object({
    sha256: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.',
      }),
  })
  .openapi({ description: "The expected state of a client's local database.", required: [] })
  .openapi('GoogleSecuritySafebrowsingV4Checksum')

const GoogleSecuritySafebrowsingV4ClientInfoSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.',
      }),
    clientVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the client implementation.' }),
  })
  .openapi({
    description: 'The client metadata associated with Safe Browsing API requests.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ClientInfo')

const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSchema =
  z
    .object({
      deviceLocation: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "A client's physical location, expressed as a ISO 31166-1 alpha-2 region code.",
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Requests the lists for a specific language. Expects ISO 639 alpha-2 format.',
        }),
      maxDatabaseEntries: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.',
        }),
      maxUpdateEntries: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set.',
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format.",
        }),
      supportedCompressions: z
        .array(z.enum(['COMPRESSION_TYPE_UNSPECIFIED', 'RAW', 'RICE']))
        .exactOptional()
        .openapi({ description: 'The compression types supported by the client.' }),
    })
    .openapi({ description: 'The constraints for this update.', required: [] })
    .openapi(
      'GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints',
    )

const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestSchema = z
  .object({
    constraints:
      GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSchema.exactOptional().openapi(
        { description: 'The constraints associated with this request.' },
      ),
    platformType: z
      .enum([
        'PLATFORM_TYPE_UNSPECIFIED',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'OSX',
        'IOS',
        'ANY_PLATFORM',
        'ALL_PLATFORMS',
        'CHROME',
      ])
      .exactOptional()
      .openapi({ description: 'The type of platform at risk by entries present in the list.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current state of the client for the requested list (the encrypted client state that was received from the last successful list update).',
      }),
    threatEntryType: z
      .enum([
        'THREAT_ENTRY_TYPE_UNSPECIFIED',
        'URL',
        'EXECUTABLE',
        'IP_RANGE',
        'CHROME_EXTENSION',
        'FILENAME',
        'CERT',
      ])
      .exactOptional()
      .openapi({ description: 'The types of entries present in the list.' }),
    threatType: z
      .enum([
        'THREAT_TYPE_UNSPECIFIED',
        'MALWARE',
        'SOCIAL_ENGINEERING',
        'UNWANTED_SOFTWARE',
        'POTENTIALLY_HARMFUL_APPLICATION',
        'SOCIAL_ENGINEERING_INTERNAL',
        'API_ABUSE',
        'MALICIOUS_BINARY',
        'CSD_WHITELIST',
        'CSD_DOWNLOAD_WHITELIST',
        'CLIENT_INCIDENT',
        'CLIENT_INCIDENT_WHITELIST',
        'APK_MALWARE_OFFLINE',
        'SUBRESOURCE_FILTER',
        'SUSPICIOUS',
        'TRICK_TO_BILL',
        'HIGH_CONFIDENCE_ALLOWLIST',
        'ACCURACY_TIPS',
      ])
      .exactOptional()
      .openapi({ description: 'The type of threat posed by entries present in the list.' }),
  })
  .openapi({ description: 'A single list update request.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest')

const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestSchema = z
  .object({
    client: GoogleSecuritySafebrowsingV4ClientInfoSchema.exactOptional().openapi({
      description: 'The client metadata.',
    }),
    listUpdateRequests: z
      .array(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestSchema)
      .exactOptional()
      .openapi({ description: 'The requested threat list updates.' }),
  })
  .openapi({
    description:
      'Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest')

const GoogleSecuritySafebrowsingV4RawHashesSchema = z
  .object({
    prefixSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).',
      }),
    rawHashes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.',
      }),
  })
  .openapi({
    description:
      'The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4RawHashes')

const GoogleSecuritySafebrowsingV4RawIndicesSchema = z
  .object({
    indices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description: 'The indices to remove from a lexicographically-sorted local list.',
      }),
  })
  .openapi({ description: 'A set of raw indices to remove from a local list.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4RawIndices')

const GoogleSecuritySafebrowsingV4RiceDeltaEncodingSchema = z
  .object({
    encodedData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encoded deltas that are encoded using the Golomb-Rice coder.' }),
    firstValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.",
      }),
    numEntries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.',
      }),
    riceParameter: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero.',
      }),
  })
  .openapi({
    description:
      'The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4RiceDeltaEncoding')

const GoogleSecuritySafebrowsingV4ThreatEntrySetSchema = z
  .object({
    compressionType: z
      .enum(['COMPRESSION_TYPE_UNSPECIFIED', 'RAW', 'RICE'])
      .exactOptional()
      .openapi({ description: 'The compression type for the entries in this set.' }),
    rawHashes: GoogleSecuritySafebrowsingV4RawHashesSchema.exactOptional().openapi({
      description: 'The raw SHA256-formatted entries.',
    }),
    rawIndices: GoogleSecuritySafebrowsingV4RawIndicesSchema.exactOptional().openapi({
      description: 'The raw removal indices for a local list.',
    }),
    riceHashes: GoogleSecuritySafebrowsingV4RiceDeltaEncodingSchema.exactOptional().openapi({
      description:
        'The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data.',
    }),
    riceIndices: GoogleSecuritySafebrowsingV4RiceDeltaEncodingSchema.exactOptional().openapi({
      description:
        'The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data.',
    }),
  })
  .openapi({
    description: "A set of threats that should be added or removed from a client's local database.",
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatEntrySet')

const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseSchema = z
  .object({
    additions: z
      .array(GoogleSecuritySafebrowsingV4ThreatEntrySetSchema)
      .exactOptional()
      .openapi({
        description:
          "A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response.",
      }),
    checksum: GoogleSecuritySafebrowsingV4ChecksumSchema.exactOptional().openapi({
      description:
        "The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided update. If the client state doesn't match the expected state, the client must disregard this update and retry later.",
    }),
    newClientState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new client state, in encrypted format. Opaque to clients.' }),
    platformType: z
      .enum([
        'PLATFORM_TYPE_UNSPECIFIED',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'OSX',
        'IOS',
        'ANY_PLATFORM',
        'ALL_PLATFORMS',
        'CHROME',
      ])
      .exactOptional()
      .openapi({ description: 'The platform type for which data is returned.' }),
    removals: z
      .array(GoogleSecuritySafebrowsingV4ThreatEntrySetSchema)
      .exactOptional()
      .openapi({
        description:
          "A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet.",
      }),
    responseType: z
      .enum(['RESPONSE_TYPE_UNSPECIFIED', 'PARTIAL_UPDATE', 'FULL_UPDATE'])
      .exactOptional()
      .openapi({
        description:
          'The type of response. This may indicate that an action is required by the client when the response is received.',
      }),
    threatEntryType: z
      .enum([
        'THREAT_ENTRY_TYPE_UNSPECIFIED',
        'URL',
        'EXECUTABLE',
        'IP_RANGE',
        'CHROME_EXTENSION',
        'FILENAME',
        'CERT',
      ])
      .exactOptional()
      .openapi({ description: 'The format of the threats.' }),
    threatType: z
      .enum([
        'THREAT_TYPE_UNSPECIFIED',
        'MALWARE',
        'SOCIAL_ENGINEERING',
        'UNWANTED_SOFTWARE',
        'POTENTIALLY_HARMFUL_APPLICATION',
        'SOCIAL_ENGINEERING_INTERNAL',
        'API_ABUSE',
        'MALICIOUS_BINARY',
        'CSD_WHITELIST',
        'CSD_DOWNLOAD_WHITELIST',
        'CLIENT_INCIDENT',
        'CLIENT_INCIDENT_WHITELIST',
        'APK_MALWARE_OFFLINE',
        'SUBRESOURCE_FILTER',
        'SUSPICIOUS',
        'TRICK_TO_BILL',
        'HIGH_CONFIDENCE_ALLOWLIST',
        'ACCURACY_TIPS',
      ])
      .exactOptional()
      .openapi({ description: 'The threat type for which data is returned.' }),
  })
  .openapi({ description: 'An update to an individual list.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse')

const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseSchema = z
  .object({
    listUpdateResponses: z
      .array(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list.',
      }),
    minimumWaitDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse')

const GoogleSecuritySafebrowsingV4ThreatEntrySchema = z
  .object({
    digest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded.',
      }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.',
      }),
    url: z.string().exactOptional().openapi({ description: 'A URL.' }),
  })
  .openapi({
    description:
      'An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatEntry')

const GoogleSecuritySafebrowsingV4ThreatInfoSchema = z
  .object({
    platformTypes: z
      .array(
        z.enum([
          'PLATFORM_TYPE_UNSPECIFIED',
          'WINDOWS',
          'LINUX',
          'ANDROID',
          'OSX',
          'IOS',
          'ANY_PLATFORM',
          'ALL_PLATFORMS',
          'CHROME',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The platform types to be checked.' }),
    threatEntries: z
      .array(GoogleSecuritySafebrowsingV4ThreatEntrySchema)
      .exactOptional()
      .openapi({ description: 'The threat entries to be checked.' }),
    threatEntryTypes: z
      .array(
        z.enum([
          'THREAT_ENTRY_TYPE_UNSPECIFIED',
          'URL',
          'EXECUTABLE',
          'IP_RANGE',
          'CHROME_EXTENSION',
          'FILENAME',
          'CERT',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The entry types to be checked.' }),
    threatTypes: z
      .array(
        z.enum([
          'THREAT_TYPE_UNSPECIFIED',
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'POTENTIALLY_HARMFUL_APPLICATION',
          'SOCIAL_ENGINEERING_INTERNAL',
          'API_ABUSE',
          'MALICIOUS_BINARY',
          'CSD_WHITELIST',
          'CSD_DOWNLOAD_WHITELIST',
          'CLIENT_INCIDENT',
          'CLIENT_INCIDENT_WHITELIST',
          'APK_MALWARE_OFFLINE',
          'SUBRESOURCE_FILTER',
          'SUSPICIOUS',
          'TRICK_TO_BILL',
          'HIGH_CONFIDENCE_ALLOWLIST',
          'ACCURACY_TIPS',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The threat types to be checked.' }),
  })
  .openapi({
    description:
      'The information regarding one or more threats that a client submits when checking for matches in threat lists.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatInfo')

const GoogleSecuritySafebrowsingV4FindFullHashesRequestSchema = z
  .object({
    apiClient: GoogleSecuritySafebrowsingV4ClientInfoSchema.exactOptional().openapi({
      description:
        "Client metadata associated with callers of higher-level APIs built on top of the client's implementation.",
    }),
    client: GoogleSecuritySafebrowsingV4ClientInfoSchema.exactOptional().openapi({
      description: 'The client metadata.',
    }),
    clientStates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "The current client states for each of the client's local threat lists.",
      }),
    threatInfo: GoogleSecuritySafebrowsingV4ThreatInfoSchema.exactOptional().openapi({
      description: 'The lists and hashes to be checked.',
    }),
  })
  .openapi({
    description: 'Request to return full hashes matched by the provided hash prefixes.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4FindFullHashesRequest')

const GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntrySchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The metadata entry key. For JSON requests, the key is base64-encoded.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The metadata entry value. For JSON requests, the value is base64-encoded.',
      }),
  })
  .openapi({ description: 'A single metadata entry.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry')

const GoogleSecuritySafebrowsingV4ThreatEntryMetadataSchema = z
  .object({
    entries: z
      .array(GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntrySchema)
      .exactOptional()
      .openapi({ description: 'The metadata entries.' }),
  })
  .openapi({
    description:
      'The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatEntryMetadata')

const GoogleSecuritySafebrowsingV4ThreatMatchSchema = z
  .object({
    cacheDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives.',
      }),
    platformType: z
      .enum([
        'PLATFORM_TYPE_UNSPECIFIED',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'OSX',
        'IOS',
        'ANY_PLATFORM',
        'ALL_PLATFORMS',
        'CHROME',
      ])
      .exactOptional()
      .openapi({ description: 'The platform type matching this threat.' }),
    threat: GoogleSecuritySafebrowsingV4ThreatEntrySchema.exactOptional().openapi({
      description: 'The threat matching this threat.',
    }),
    threatEntryMetadata:
      GoogleSecuritySafebrowsingV4ThreatEntryMetadataSchema.exactOptional().openapi({
        description: 'Optional metadata associated with this threat.',
      }),
    threatEntryType: z
      .enum([
        'THREAT_ENTRY_TYPE_UNSPECIFIED',
        'URL',
        'EXECUTABLE',
        'IP_RANGE',
        'CHROME_EXTENSION',
        'FILENAME',
        'CERT',
      ])
      .exactOptional()
      .openapi({ description: 'The threat entry type matching this threat.' }),
    threatType: z
      .enum([
        'THREAT_TYPE_UNSPECIFIED',
        'MALWARE',
        'SOCIAL_ENGINEERING',
        'UNWANTED_SOFTWARE',
        'POTENTIALLY_HARMFUL_APPLICATION',
        'SOCIAL_ENGINEERING_INTERNAL',
        'API_ABUSE',
        'MALICIOUS_BINARY',
        'CSD_WHITELIST',
        'CSD_DOWNLOAD_WHITELIST',
        'CLIENT_INCIDENT',
        'CLIENT_INCIDENT_WHITELIST',
        'APK_MALWARE_OFFLINE',
        'SUBRESOURCE_FILTER',
        'SUSPICIOUS',
        'TRICK_TO_BILL',
        'HIGH_CONFIDENCE_ALLOWLIST',
        'ACCURACY_TIPS',
      ])
      .exactOptional()
      .openapi({ description: 'The threat type matching this threat.' }),
  })
  .openapi({
    description: 'A match when checking a threat entry in the Safe Browsing threat lists.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatMatch')

const GoogleSecuritySafebrowsingV4FindFullHashesResponseSchema = z
  .object({
    matches: z
      .array(GoogleSecuritySafebrowsingV4ThreatMatchSchema)
      .exactOptional()
      .openapi({ description: 'The full hashes that matched the requested prefixes.' }),
    minimumWaitDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want.',
      }),
    negativeCacheDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For requested entities that did not match the threat list, how long to cache the response.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FindFullHashesResponse')

const GoogleSecuritySafebrowsingV4FindThreatMatchesRequestSchema = z
  .object({
    client: GoogleSecuritySafebrowsingV4ClientInfoSchema.exactOptional().openapi({
      description: 'The client metadata.',
    }),
    threatInfo: GoogleSecuritySafebrowsingV4ThreatInfoSchema.exactOptional().openapi({
      description: 'The lists and entries to be checked for matches.',
    }),
  })
  .openapi({ description: 'Request to check entries against lists.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FindThreatMatchesRequest')

const GoogleSecuritySafebrowsingV4FindThreatMatchesResponseSchema = z
  .object({
    matches: z
      .array(GoogleSecuritySafebrowsingV4ThreatMatchSchema)
      .exactOptional()
      .openapi({ description: 'The threat list matches.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSecuritySafebrowsingV4FindThreatMatchesResponse')

const GoogleSecuritySafebrowsingV4ThreatListDescriptorSchema = z
  .object({
    platformType: z
      .enum([
        'PLATFORM_TYPE_UNSPECIFIED',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'OSX',
        'IOS',
        'ANY_PLATFORM',
        'ALL_PLATFORMS',
        'CHROME',
      ])
      .exactOptional()
      .openapi({ description: "The platform type targeted by the list's entries." }),
    threatEntryType: z
      .enum([
        'THREAT_ENTRY_TYPE_UNSPECIFIED',
        'URL',
        'EXECUTABLE',
        'IP_RANGE',
        'CHROME_EXTENSION',
        'FILENAME',
        'CERT',
      ])
      .exactOptional()
      .openapi({ description: 'The entry types contained in the list.' }),
    threatType: z
      .enum([
        'THREAT_TYPE_UNSPECIFIED',
        'MALWARE',
        'SOCIAL_ENGINEERING',
        'UNWANTED_SOFTWARE',
        'POTENTIALLY_HARMFUL_APPLICATION',
        'SOCIAL_ENGINEERING_INTERNAL',
        'API_ABUSE',
        'MALICIOUS_BINARY',
        'CSD_WHITELIST',
        'CSD_DOWNLOAD_WHITELIST',
        'CLIENT_INCIDENT',
        'CLIENT_INCIDENT_WHITELIST',
        'APK_MALWARE_OFFLINE',
        'SUBRESOURCE_FILTER',
        'SUSPICIOUS',
        'TRICK_TO_BILL',
        'HIGH_CONFIDENCE_ALLOWLIST',
        'ACCURACY_TIPS',
      ])
      .exactOptional()
      .openapi({ description: "The threat type posed by the list's entries." }),
  })
  .openapi({
    description:
      'Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.',
    required: [],
  })
  .openapi('GoogleSecuritySafebrowsingV4ThreatListDescriptor')

const GoogleSecuritySafebrowsingV4ListThreatListsResponseSchema = z
  .object({
    threatLists: z
      .array(GoogleSecuritySafebrowsingV4ThreatListDescriptorSchema)
      .exactOptional()
      .openapi({ description: 'The lists available for download by the client.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSecuritySafebrowsingV4ListThreatListsResponse')

const GoogleSecuritySafebrowsingV4ThreatHitThreatSourceSchema = z
  .object({
    referrer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Referrer of the resource. Only set if the referrer is available.' }),
    remoteIp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The remote IP of the resource in ASCII format. Either IPv4 or IPv6.',
      }),
    type: z
      .enum([
        'THREAT_SOURCE_TYPE_UNSPECIFIED',
        'MATCHING_URL',
        'TAB_URL',
        'TAB_REDIRECT',
        'TAB_RESOURCE',
      ])
      .exactOptional()
      .openapi({ description: 'The type of source reported.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the resource.' }),
  })
  .openapi({ description: 'A single resource related to a threat hit.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4ThreatHitThreatSource')

const GoogleSecuritySafebrowsingV4ThreatHitUserInfoSchema = z
  .object({
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: "The UN M.49 region code associated with the user's location." }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique user identifier defined by the client.' }),
  })
  .openapi({ description: 'Details about the user that encountered the threat.', required: [] })
  .openapi('GoogleSecuritySafebrowsingV4ThreatHitUserInfo')

const GoogleSecuritySafebrowsingV4ThreatHitSchema = z
  .object({
    clientInfo: GoogleSecuritySafebrowsingV4ClientInfoSchema.exactOptional().openapi({
      description: 'Client-reported identification.',
    }),
    entry: GoogleSecuritySafebrowsingV4ThreatEntrySchema.exactOptional().openapi({
      description:
        'The threat entry responsible for the hit. Full hash should be reported for hash-based hits.',
    }),
    platformType: z
      .enum([
        'PLATFORM_TYPE_UNSPECIFIED',
        'WINDOWS',
        'LINUX',
        'ANDROID',
        'OSX',
        'IOS',
        'ANY_PLATFORM',
        'ALL_PLATFORMS',
        'CHROME',
      ])
      .exactOptional()
      .openapi({ description: 'The platform type reported.' }),
    resources: z
      .array(GoogleSecuritySafebrowsingV4ThreatHitThreatSourceSchema)
      .exactOptional()
      .openapi({ description: 'The resources related to the threat hit.' }),
    threatType: z
      .enum([
        'THREAT_TYPE_UNSPECIFIED',
        'MALWARE',
        'SOCIAL_ENGINEERING',
        'UNWANTED_SOFTWARE',
        'POTENTIALLY_HARMFUL_APPLICATION',
        'SOCIAL_ENGINEERING_INTERNAL',
        'API_ABUSE',
        'MALICIOUS_BINARY',
        'CSD_WHITELIST',
        'CSD_DOWNLOAD_WHITELIST',
        'CLIENT_INCIDENT',
        'CLIENT_INCIDENT_WHITELIST',
        'APK_MALWARE_OFFLINE',
        'SUBRESOURCE_FILTER',
        'SUSPICIOUS',
        'TRICK_TO_BILL',
        'HIGH_CONFIDENCE_ALLOWLIST',
        'ACCURACY_TIPS',
      ])
      .exactOptional()
      .openapi({ description: 'The threat type reported.' }),
    userInfo: GoogleSecuritySafebrowsingV4ThreatHitUserInfoSchema.exactOptional().openapi({
      description: 'Details about the user that encountered the threat.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSecuritySafebrowsingV4ThreatHit')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
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
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
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
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const getV4EncodedFullHashesEncodedRequestRoute = createRoute({
  method: 'get',
  path: '/v4/encodedFullHashes/{encodedRequest}',
  tags: ['encodedFullHashes'],
  operationId: 'safebrowsing.encodedFullHashes.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.',
            in: 'query',
            name: 'clientId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version of the client implementation.',
            in: 'query',
            name: 'clientVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      encodedRequest: z
        .string()
        .openapi({
          param: {
            description: 'A serialized FindFullHashesRequest proto.',
            in: 'path',
            name: 'encodedRequest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4FindFullHashesResponseSchema },
      },
    },
  },
})

export const getV4EncodedUpdatesEncodedRequestRoute = createRoute({
  method: 'get',
  path: '/v4/encodedUpdates/{encodedRequest}',
  tags: ['encodedUpdates'],
  operationId: 'safebrowsing.encodedUpdates.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A client ID that uniquely identifies the client implementation of the Safe Browsing API.',
            in: 'query',
            name: 'clientId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version of the client implementation.',
            in: 'query',
            name: 'clientVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      encodedRequest: z
        .string()
        .openapi({
          param: {
            description: 'A serialized FetchThreatListUpdatesRequest proto.',
            in: 'path',
            name: 'encodedRequest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseSchema,
        },
      },
    },
  },
})

export const postV4FullHashesFindRoute = createRoute({
  method: 'post',
  path: '/v4/fullHashes:find',
  tags: ['fullHashes'],
  description: 'Finds the full hashes that match the requested hash prefixes.',
  operationId: 'safebrowsing.fullHashes.find',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4FindFullHashesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4FindFullHashesResponseSchema },
      },
    },
  },
})

export const postV4ThreatHitsRoute = createRoute({
  method: 'post',
  path: '/v4/threatHits',
  tags: ['threatHits'],
  description:
    'Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.',
  operationId: 'safebrowsing.threatHits.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: GoogleSecuritySafebrowsingV4ThreatHitSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
})

export const postV4ThreatListUpdatesFetchRoute = createRoute({
  method: 'post',
  path: '/v4/threatListUpdates:fetch',
  tags: ['threatListUpdates'],
  description:
    'Fetches the most recent threat list updates. A client can request updates for multiple lists at once.',
  operationId: 'safebrowsing.threatListUpdates.fetch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseSchema,
        },
      },
    },
  },
})

export const getV4ThreatListsRoute = createRoute({
  method: 'get',
  path: '/v4/threatLists',
  tags: ['threatLists'],
  description: 'Lists the Safe Browsing threat lists available for download.',
  operationId: 'safebrowsing.threatLists.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4ListThreatListsResponseSchema },
      },
    },
  },
})

export const postV4ThreatMatchesFindRoute = createRoute({
  method: 'post',
  path: '/v4/threatMatches:find',
  tags: ['threatMatches'],
  description: 'Finds the threat entries that match the Safe Browsing lists.',
  operationId: 'safebrowsing.threatMatches.find',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4FindThreatMatchesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleSecuritySafebrowsingV4FindThreatMatchesResponseSchema },
      },
    },
  },
})
