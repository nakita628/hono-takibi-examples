import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudWebriskV1RawHashesSchema = z
  .object({
    prefixSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). In practice this is almost always 4, except in exceptional circumstances.',
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
      'The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.',
    required: [],
  })
  .openapi('GoogleCloudWebriskV1RawHashes')

const GoogleCloudWebriskV1RiceDeltaEncodingSchema = z
  .object({
    encodedData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encoded deltas that are encoded using the Golomb-Rice coder.' }),
    entryCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.',
      }),
    firstValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.",
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
  .openapi('GoogleCloudWebriskV1RiceDeltaEncoding')

const GoogleCloudWebriskV1ThreatEntryAdditionsSchema = z
  .object({
    rawHashes: z
      .array(GoogleCloudWebriskV1RawHashesSchema)
      .exactOptional()
      .openapi({
        description:
          'The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes.',
      }),
    riceHashes: GoogleCloudWebriskV1RiceDeltaEncodingSchema.exactOptional().openapi({
      description:
        'The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data.',
    }),
  })
  .openapi({
    description:
      'Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.',
    required: [],
  })
  .openapi('GoogleCloudWebriskV1ThreatEntryAdditions')

const GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksumSchema = z
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
  .openapi('GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum')

const GoogleCloudWebriskV1RawIndicesSchema = z
  .object({
    indices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description: 'The indices to remove from a lexicographically-sorted local list.',
      }),
  })
  .openapi({ description: 'A set of raw indices to remove from a local list.', required: [] })
  .openapi('GoogleCloudWebriskV1RawIndices')

const GoogleCloudWebriskV1ThreatEntryRemovalsSchema = z
  .object({
    rawIndices: GoogleCloudWebriskV1RawIndicesSchema.exactOptional().openapi({
      description: 'The raw removal indices for a local list.',
    }),
    riceIndices: GoogleCloudWebriskV1RiceDeltaEncodingSchema.exactOptional().openapi({
      description:
        'The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data.',
    }),
  })
  .openapi({
    description: 'Contains the set of entries to remove from a local database.',
    required: [],
  })
  .openapi('GoogleCloudWebriskV1ThreatEntryRemovals')

const GoogleCloudWebriskV1ComputeThreatListDiffResponseSchema = z
  .object({
    additions: GoogleCloudWebriskV1ThreatEntryAdditionsSchema.exactOptional().openapi({
      description: "A set of entries to add to a local threat type's list.",
    }),
    checksum:
      GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksumSchema.exactOptional().openapi({
        description:
          "The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided diff. If the client state doesn't match the expected state, the client must discard this diff and retry later.",
      }),
    newVersionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as 'version_token'. A separate version token should be stored and used for each threatList.",
      }),
    recommendedNextDiff: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want.',
      }),
    removals: GoogleCloudWebriskV1ThreatEntryRemovalsSchema.exactOptional().openapi({
      description:
        "A set of entries to remove from a local threat type's list. This field may be empty.",
    }),
    responseType: z
      .enum(['RESPONSE_TYPE_UNSPECIFIED', 'DIFF', 'RESET'])
      .exactOptional()
      .openapi({
        description:
          'The type of response. This may indicate that an action must be taken by the client when the response is received.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudWebriskV1ComputeThreatListDiffResponse')

const GoogleCloudWebriskV1SearchHashesResponseThreatHashSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.',
      }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.',
      }),
    threatTypes: z
      .array(
        z.enum([
          'THREAT_TYPE_UNSPECIFIED',
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'The ThreatList this threat belongs to. This must contain at least one entry.',
      }),
  })
  .openapi({ description: 'Contains threat information on a matching hash.', required: [] })
  .openapi('GoogleCloudWebriskV1SearchHashesResponseThreatHash')

const GoogleCloudWebriskV1SearchHashesResponseSchema = z
  .object({
    negativeExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For requested entities that did not match the threat list, how long to cache the response until.',
      }),
    threats: z
      .array(GoogleCloudWebriskV1SearchHashesResponseThreatHashSchema)
      .exactOptional()
      .openapi({
        description:
          'The full hashes that matched the requested prefixes. The hash will be populated in the key.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudWebriskV1SearchHashesResponse')

const GoogleCloudWebriskV1SearchUrisResponseThreatUriSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.',
      }),
    threatTypes: z
      .array(
        z.enum([
          'THREAT_TYPE_UNSPECIFIED',
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The ThreatList this threat belongs to.' }),
  })
  .openapi({ description: 'Contains threat information on a matching uri.', required: [] })
  .openapi('GoogleCloudWebriskV1SearchUrisResponseThreatUri')

const GoogleCloudWebriskV1SearchUrisResponseSchema = z
  .object({
    threat: GoogleCloudWebriskV1SearchUrisResponseThreatUriSchema.exactOptional().openapi({
      description: 'The threat list matches. This might be empty if the URI is on no list.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudWebriskV1SearchUrisResponse')

const GoogleCloudWebriskV1SubmissionSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The URI that is being reported for malicious content to be analyzed.',
      }),
  })
  .openapi({ description: 'Wraps a URI that might be displaying malicious content.', required: [] })
  .openapi('GoogleCloudWebriskV1Submission')

const GoogleLongrunningCancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('GoogleLongrunningCancelOperationRequest')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Contains a `SubmitUriMetadata` object.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Matches the `/v1/{project-name}/operations/{operation-id}` pattern.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1HashesSearchRoute = createRoute({
  method: 'get',
  path: '/v1/hashes:search',
  tags: ['hashes'],
  description:
    'Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.',
  operationId: 'webrisk.hashes.search',
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
      hashPrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. For JSON requests, this field is base64-encoded. Note that if this parameter is provided by a URI, it must be encoded using the web safe base64 variant (RFC 4648).',
            in: 'query',
            name: 'hashPrefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      threatTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'THREAT_TYPE_UNSPECIFIED',
              'MALWARE',
              'SOCIAL_ENGINEERING',
              'UNWANTED_SOFTWARE',
              'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ThreatLists to search in. Multiple ThreatLists may be specified.',
            explode: true,
            in: 'query',
            name: 'threatTypes',
            schema: {
              items: {
                enum: [
                  'THREAT_TYPE_UNSPECIFIED',
                  'MALWARE',
                  'SOCIAL_ENGINEERING',
                  'UNWANTED_SOFTWARE',
                  'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudWebriskV1SearchHashesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ThreatListsComputeDiffRoute = createRoute({
  method: 'get',
  path: '/v1/threatLists:computeDiff',
  tags: ['threatLists'],
  description:
    'Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.',
  operationId: 'webrisk.threatLists.computeDiff',
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
      'constraints.maxDatabaseEntries': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.',
            in: 'query',
            name: 'constraints.maxDatabaseEntries',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'constraints.maxDiffEntries': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set.',
            in: 'query',
            name: 'constraints.maxDiffEntries',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'constraints.supportedCompressions': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['COMPRESSION_TYPE_UNSPECIFIED', 'RAW', 'RICE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The compression types supported by the client.',
            explode: true,
            in: 'query',
            name: 'constraints.supportedCompressions',
            schema: {
              items: { enum: ['COMPRESSION_TYPE_UNSPECIFIED', 'RAW', 'RICE'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      threatType: z
        .enum([
          'THREAT_TYPE_UNSPECIFIED',
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType.',
            in: 'query',
            name: 'threatType',
            schema: {
              enum: [
                'THREAT_TYPE_UNSPECIFIED',
                'MALWARE',
                'SOCIAL_ENGINEERING',
                'UNWANTED_SOFTWARE',
                'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      versionToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned.',
            in: 'query',
            name: 'versionToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudWebriskV1ComputeThreatListDiffResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1UrisSearchRoute = createRoute({
  method: 'get',
  path: '/v1/uris:search',
  tags: ['uris'],
  description:
    'This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.',
  operationId: 'webrisk.uris.search',
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
      threatTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'THREAT_TYPE_UNSPECIFIED',
              'MALWARE',
              'SOCIAL_ENGINEERING',
              'UNWANTED_SOFTWARE',
              'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ThreatLists to search in. Multiple ThreatLists may be specified.',
            explode: true,
            in: 'query',
            name: 'threatTypes',
            schema: {
              items: {
                enum: [
                  'THREAT_TYPE_UNSPECIFIED',
                  'MALWARE',
                  'SOCIAL_ENGINEERING',
                  'UNWANTED_SOFTWARE',
                  'SOCIAL_ENGINEERING_EXTENDED_COVERAGE',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The URI to be checked for matches.',
            in: 'query',
            name: 'uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudWebriskV1SearchUrisResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'webrisk.projects.operations.get',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'webrisk.projects.operations.delete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be deleted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'webrisk.projects.operations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'webrisk.projects.operations.cancel',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningCancelOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
})

export const postV1ParentSubmissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/submissions',
  tags: ['projects'],
  description:
    "Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.",
  operationId: 'webrisk.projects.submissions.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project that is making the submission. This string is in the format "projects/{project_number}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudWebriskV1SubmissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudWebriskV1SubmissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
