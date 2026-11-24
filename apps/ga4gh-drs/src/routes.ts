import { createRoute, z } from '@hono/zod-openapi'

type ItemsType = { name: string; id?: string; drs_uri?: string[]; contents?: ItemsType[] }

const ItemsSchema: z.ZodType<ItemsType> = z
  .lazy(() =>
    z
      .object({
        name: z
          .string()
          .openapi({
            description:
              'A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.',
          }),
        drs_uri: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.',
            example: 'drs://drs.example.org/314159',
          }),
        contents: z
          .array(ItemsSchema)
          .exactOptional()
          .openapi({
            description:
              'If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  .openapi('Items')

const BasicAuthSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    'A valid authorization token must be passed in the \'Authorization\' header,\ne.g. "Basic ${token_string}"\n',
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'A valid authorization token must be passed in the \'Authorization\' header, e.g. "Bearer ${token_string}"',
}

const PassportAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  'x-in': 'body',
  bearerFormat: 'JWT',
  description:
    'A valid GA4GH Passport must be passed in the body of an HTTP POST request as a tokens[] array.',
}

export const getServiceInfoRoute = createRoute({
  method: 'get',
  path: '/service-info',
  tags: ['Service Info'],
  summary: 'Retrieve information about this service',
  description:
    'Returns information about the DRS service along with stats pertaning to total object count and cumulative size in bytes.\n\nExtends the\n[v1.0.0 GA4GH Service Info specification](https://github.com/ga4gh-discovery/ga4gh-service-info)\nas the standardized format for GA4GH web services to self-describe.\n\nAccording to the \n[service-info type registry](https://github.com/ga4gh/TASC/blob/master/service-info/ga4gh-service-info.json)\nmaintained by the [Technical Alignment Sub Committee (TASC)](https://github.com/ga4gh/TASC),\na DRS service MUST have:\n  * a `type.group` value of `org.ga4gh`\n  * a `type.artifact` value of `drs`\n\ne.g.\n```\n{\n    "id": "com.example.drs",\n    "description": "Serves data according to DRS specification",\n    ...\n    "type": {\n        "group": "org.ga4gh",\n        "artifact": "drs",\n        "version": "1.5"\n    }\n    ...\n    "drs":{\n      "maxBulkRequestLength": 200,\n      "stats": {\n        "objectCount": 774560,\n        "totalObjectSize": 4018437188907752\n      }\n    }\n}\n```\n\nSee the [Service Registry Appendix](#tag/GA4GH-Service-Registry) for more information on how to register a DRS service with a service registry.',
  operationId: 'GetServiceInfo',
  responses: {
    200: {
      description: 'Retrieve info about the DRS service',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique ID of this service. Reverse domain name notation is recommended, though not required. The identifier should attempt to be globally unique so it can be used in downstream aggregator services e.g. Service Registry.',
                  example: 'org.ga4gh.myservice',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Name of this service. Should be human readable.',
                  example: 'My project',
                }),
              type: z
                .object({
                  group: z
                    .string()
                    .openapi({
                      description:
                        "Namespace in reverse domain name format. Use `org.ga4gh` for implementations compliant with official GA4GH specifications. For services with custom APIs not standardized by GA4GH, or implementations diverging from official GA4GH specifications, use a different namespace (e.g. your organization's reverse domain name).",
                      example: 'org.ga4gh',
                    }),
                  artifact: z
                    .string()
                    .openapi({
                      description:
                        'Name of the API or GA4GH specification implemented. Official GA4GH types should be assigned as part of standards approval process. Custom artifacts are supported.',
                      example: 'beacon',
                    }),
                  version: z
                    .string()
                    .openapi({
                      description:
                        'Version of the API or specification. GA4GH specifications use semantic versioning.',
                      example: '1.0.0',
                    }),
                })
                .openapi({
                  description: 'Type of a GA4GH service',
                  required: ['group', 'artifact', 'version'],
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Description of the service. Should be human readable and provide information about the service.',
                  example: 'This service provides...',
                }),
              organization: z
                .object({
                  name: z
                    .string()
                    .openapi({
                      description: 'Name of the organization responsible for the service',
                      example: 'My organization',
                    }),
                  url: z
                    .url()
                    .openapi({
                      description: 'URL of the website of the organization (RFC 3986 format)',
                      example: 'https://example.com',
                    }),
                })
                .openapi({
                  description: 'Organization providing the service',
                  required: ['name', 'url'],
                }),
              contactUrl: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'URL of the contact for the provider of this service, e.g. a link to a contact form (RFC 3986 format), or an email (RFC 2368 format).',
                  example: 'mailto:support@example.com',
                }),
              documentationUrl: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'URL of the documentation of this service (RFC 3986 format). This should help someone learn how to use your service, including any specifics required to access data, e.g. authentication.',
                  example: 'https://docs.myservice.example.com',
                }),
              createdAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp describing when the service was first deployed and available (RFC 3339 format)',
                  example: '2019-06-04T12:58:19Z',
                }),
              updatedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp describing when the service was last updated (RFC 3339 format)',
                  example: '2019-06-04T12:58:19Z',
                }),
              environment: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Environment the service is running in. Use this to distinguish between production, development and testing/staging deployments. Suggested values are prod, test, dev, staging. However this is advised and not enforced.',
                  example: 'test',
                }),
              version: z
                .string()
                .openapi({
                  description:
                    'Version of the service being described. Semantic versioning is recommended, but other identifiers, such as dates or commit hashes, are also allowed. The version should be changed whenever the service is updated.',
                  example: '1.0.0',
                }),
            })
            .openapi({
              description: 'GA4GH service',
              required: ['id', 'name', 'type', 'organization', 'version'],
            })
            .and(
              z
                .object({
                  maxBulkRequestLength: z
                    .int()
                    .openapi({
                      description:
                        'DEPRECATED - In 2.0 this will move to under the drs section of service info and not at the root level. The max length the bulk request endpoints can handle (>= 1) before generating a 413 error e.g. how long can the arrays bulk_object_ids and bulk_object_access_ids be for this server.',
                    }),
                  type: z
                    .object({ artifact: z.literal('drs').openapi({ example: 'drs' }) })
                    .openapi({ required: ['artifact'] }),
                  drs: z
                    .object({
                      maxBulkRequestLength: z
                        .int()
                        .openapi({
                          description:
                            'The max length the bulk request endpoints can handle (>= 1) before generating a 413 error e.g. how long can the arrays bulk_object_ids and bulk_object_access_ids be for this server.',
                        }),
                      objectCount: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'The total number of objects in this DRS service.',
                        }),
                      totalObjectSize: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The total size of all objects in this DRS service in bytes.  As a general best practice, file bytes are counted for each unique file and not cloud mirrors or other redundant copies.',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: ['maxBulkRequestLength'] }),
                })
                .openapi({ required: ['type', 'maxBulkRequestLength'] }),
            ),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
})

export const getObjectsObjectIdRoute = createRoute({
  method: 'get',
  path: '/objects/{object_id}',
  tags: ['Objects'],
  summary: 'Get info about a DrsObject.',
  description:
    'Returns object metadata, and a list of access methods that can be used to fetch object bytes.',
  operationId: 'GetObject',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_id',
            required: true,
            description: '`DrsObject` identifier',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            example: false,
            description:
              'If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.\nIf true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.\nIf the object_id refers to a blob, then the query parameter is ignored.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The `DrsObject` was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'An identifier unique to this `DrsObject`' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string that can be used to name a `DrsObject`.\nThis string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                }),
              self_uri: z
                .string()
                .openapi({
                  description:
                    'A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.\nThe intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.',
                  example: 'drs://drs.example.org/314159',
                }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'For blobs, the blob size in bytes.\nFor bundles, the cumulative size, in bytes, of items in the `contents` field.',
                }),
              created_time: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'Timestamp of content creation in RFC3339.\n(This is the creation time of the underlying content, not of the JSON object.)',
                }),
              updated_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)',
                }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string representing a version.\n(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)',
                }),
              mime_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string providing the mime-type of the `DrsObject`.',
                  example: 'application/json',
                }),
              checksums: z
                .array(
                  z
                    .object({
                      checksum: z
                        .string()
                        .openapi({ description: 'The hex-string encoded checksum for the data' }),
                      type: z
                        .string()
                        .openapi({
                          description:
                            "The digest method used to create the checksum.\nThe value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].\nGA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.",
                          example: 'sha-256',
                        }),
                    })
                    .openapi({ required: ['checksum', 'type'] }),
                )
                .min(1)
                .openapi({
                  description:
                    'The checksum of the `DrsObject`. At least one checksum must be provided.\nFor blobs, the checksum is computed over the bytes in the blob.\nFor bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.\nFor example, if a bundle contains blobs with the following checksums:\nmd5(blob1) = 72794b6d\nmd5(blob2) = 5e089d29\nThen the checksum of the bundle is:\nmd5( concat( sort( md5(blob1), md5(blob2) ) ) )\n= md5( concat( sort( 72794b6d, 5e089d29 ) ) )\n= md5( concat( 5e089d29, 72794b6d ) )\n= md5( 5e089d2972794b6d )\n= f7a29a04',
                }),
              access_methods: z
                .array(
                  z
                    .object({
                      type: z
                        .enum(['s3', 'gs', 'ftp', 'gsiftp', 'globus', 'htsget', 'https', 'file'])
                        .openapi({ description: 'Type of the access method.' }),
                      access_url: z
                        .object({
                          url: z
                            .string()
                            .openapi({
                              description:
                                'A fully resolvable URL that can be used to fetch the actual object bytes.',
                            }),
                          headers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                              example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                            }),
                        })
                        .openapi({ required: ['url'] })
                        .exactOptional()
                        .openapi({
                          description:
                            'An `AccessURL` that can be used to fetch the actual object bytes. Note that at least one of `access_url` and `access_id` must be provided.',
                        }),
                      access_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.',
                        }),
                      cloud: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.',
                          example: 'aws, gcp, or azure',
                        }),
                      region: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the region in the cloud service provider that the object belongs to.',
                          example: 'us-east-1',
                        }),
                      available: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.',
                          example: true,
                        }),
                      authorizations: z
                        .object({
                          drs_object_id: z.string().exactOptional(),
                          supported_types: z
                            .array(z.enum(['None', 'BasicAuth', 'BearerAuth', 'PassportAuth']))
                            .exactOptional()
                            .openapi({
                              description:
                                'An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.',
                            }),
                          passport_auth_issuers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.",
                            }),
                          bearer_auth_issuers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional()
                        .openapi({
                          description:
                            'When `access_id` is provided, `authorizations` provides information about how to authorize the `/access` method.',
                        }),
                    })
                    .openapi({ required: ['type'] }),
                )
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The list of access methods that can be used to fetch the `DrsObject`.\nRequired for single blobs; optional for bundles.',
                }),
              contents: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description:
                            'A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.',
                        }),
                      drs_uri: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.',
                          example: 'drs://drs.example.org/314159',
                        }),
                      contents: z
                        .array(ItemsSchema)
                        .exactOptional()
                        .openapi({
                          description:
                            'If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.',
                        }),
                    })
                    .openapi({ required: ['name'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If not set, this `DrsObject` is a single blob.\nIf set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A human readable description of the `DrsObject`.' }),
              aliases: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.',
                }),
            })
            .openapi({ required: ['id', 'self_uri', 'size', 'created_time', 'checksums'] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `DrsObject` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
})

export const postObjectsObjectIdRoute = createRoute({
  method: 'post',
  path: '/objects/{object_id}',
  tags: ['Objects'],
  summary: "Get info about a DrsObject through POST'ing a Passport.",
  description:
    'Returns object metadata, and a list of access methods that can be used to fetch object bytes.\nMethod is a POST to accommodate a JWT GA4GH Passport sent in the formData in order to authorize access.',
  operationId: 'PostObject',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_id',
            required: true,
            description: '`DrsObject` identifier',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expand: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.\nIf true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.\nIf the object_id refers to a blob, then the query parameter is ignored.',
                }),
              passports: z
                .array(
                  z
                    .string()
                    .openapi({
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM',
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The `DrsObject` was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'An identifier unique to this `DrsObject`' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string that can be used to name a `DrsObject`.\nThis string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                }),
              self_uri: z
                .string()
                .openapi({
                  description:
                    'A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.\nThe intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.',
                  example: 'drs://drs.example.org/314159',
                }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'For blobs, the blob size in bytes.\nFor bundles, the cumulative size, in bytes, of items in the `contents` field.',
                }),
              created_time: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'Timestamp of content creation in RFC3339.\n(This is the creation time of the underlying content, not of the JSON object.)',
                }),
              updated_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)',
                }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string representing a version.\n(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)',
                }),
              mime_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string providing the mime-type of the `DrsObject`.',
                  example: 'application/json',
                }),
              checksums: z
                .array(
                  z
                    .object({
                      checksum: z
                        .string()
                        .openapi({ description: 'The hex-string encoded checksum for the data' }),
                      type: z
                        .string()
                        .openapi({
                          description:
                            "The digest method used to create the checksum.\nThe value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].\nGA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.",
                          example: 'sha-256',
                        }),
                    })
                    .openapi({ required: ['checksum', 'type'] }),
                )
                .min(1)
                .openapi({
                  description:
                    'The checksum of the `DrsObject`. At least one checksum must be provided.\nFor blobs, the checksum is computed over the bytes in the blob.\nFor bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.\nFor example, if a bundle contains blobs with the following checksums:\nmd5(blob1) = 72794b6d\nmd5(blob2) = 5e089d29\nThen the checksum of the bundle is:\nmd5( concat( sort( md5(blob1), md5(blob2) ) ) )\n= md5( concat( sort( 72794b6d, 5e089d29 ) ) )\n= md5( concat( 5e089d29, 72794b6d ) )\n= md5( 5e089d2972794b6d )\n= f7a29a04',
                }),
              access_methods: z
                .array(
                  z
                    .object({
                      type: z
                        .enum(['s3', 'gs', 'ftp', 'gsiftp', 'globus', 'htsget', 'https', 'file'])
                        .openapi({ description: 'Type of the access method.' }),
                      access_url: z
                        .object({
                          url: z
                            .string()
                            .openapi({
                              description:
                                'A fully resolvable URL that can be used to fetch the actual object bytes.',
                            }),
                          headers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                              example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                            }),
                        })
                        .openapi({ required: ['url'] })
                        .exactOptional()
                        .openapi({
                          description:
                            'An `AccessURL` that can be used to fetch the actual object bytes. Note that at least one of `access_url` and `access_id` must be provided.',
                        }),
                      access_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.',
                        }),
                      cloud: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.',
                          example: 'aws, gcp, or azure',
                        }),
                      region: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the region in the cloud service provider that the object belongs to.',
                          example: 'us-east-1',
                        }),
                      available: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.',
                          example: true,
                        }),
                      authorizations: z
                        .object({
                          drs_object_id: z.string().exactOptional(),
                          supported_types: z
                            .array(z.enum(['None', 'BasicAuth', 'BearerAuth', 'PassportAuth']))
                            .exactOptional()
                            .openapi({
                              description:
                                'An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.',
                            }),
                          passport_auth_issuers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.",
                            }),
                          bearer_auth_issuers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional()
                        .openapi({
                          description:
                            'When `access_id` is provided, `authorizations` provides information about how to authorize the `/access` method.',
                        }),
                    })
                    .openapi({ required: ['type'] }),
                )
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The list of access methods that can be used to fetch the `DrsObject`.\nRequired for single blobs; optional for bundles.',
                }),
              contents: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description:
                            'A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.',
                        }),
                      drs_uri: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.',
                          example: 'drs://drs.example.org/314159',
                        }),
                      contents: z
                        .array(ItemsSchema)
                        .exactOptional()
                        .openapi({
                          description:
                            'If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.',
                        }),
                    })
                    .openapi({ required: ['name'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If not set, this `DrsObject` is a single blob.\nIf set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A human readable description of the `DrsObject`.' }),
              aliases: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.',
                }),
            })
            .openapi({ required: ['id', 'self_uri', 'size', 'created_time', 'checksums'] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `AccessURL` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{ PassportAuth: [] }],
})

export const optionsObjectsObjectIdRoute = createRoute({
  method: 'options',
  path: '/objects/{object_id}',
  tags: ['Objects'],
  summary: 'Get Authorization info about a DrsObject.',
  description:
    'Returns a list of `Authorizations` that can be used to determine how to authorize requests to `GetObject` or `PostObject`.',
  operationId: 'OptionsObject',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_id',
            required: true,
            description: '`DrsObject` identifier',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '`Authorizations` were found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              drs_object_id: z.string().exactOptional(),
              supported_types: z
                .array(z.enum(['None', 'BasicAuth', 'BearerAuth', 'PassportAuth']))
                .exactOptional()
                .openapi({
                  description:
                    'An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.',
                }),
              passport_auth_issuers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.",
                }),
              bearer_auth_issuers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    204: { description: '`Authorizations` are not supported for this object. Default to `None`.' },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `DrsObject` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    405: { description: '`Authorizations` are not supported for this object. Default to `None`.' },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{}],
})

export const postObjectsRoute = createRoute({
  method: 'post',
  path: '/objects',
  tags: ['Objects'],
  summary: 'Get info about multiple DrsObjects with an optional Passport(s).',
  description:
    "Returns an array of object metadata, and a list of access methods that can be used to fetch objects' bytes.  Currently this is limited to use passports (one or more) or a single bearer token, so make sure your bulk request is for objects that all use the same passports/token.",
  operationId: 'GetBulkObjects',
  request: {
    query: z.object({
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            example: false,
            description:
              'If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.\nIf true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.\nIf the object_id refers to a blob, then the query parameter is ignored.',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              passports: z
                .array(
                  z
                    .string()
                    .openapi({
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM',
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.',
                }),
              bulk_object_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'An array of ObjectIDs.' }),
            })
            .openapi({
              description: 'The object that contains the DRS object IDs array',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The `DrsObjects` were found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              summary: z
                .object({
                  requested: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of items requested.' }),
                  resolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects resolved.' }),
                  unresolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects not resolved.' }),
                })
                .exactOptional()
                .openapi({ description: 'A summary of what was resolved.', required: [] }),
              unresolved_drs_objects: z
                .array(
                  z
                    .object({
                      error_code: z.int().exactOptional(),
                      object_ids: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Error codes for each unresolved drs objects.' }),
              resolved_drs_object: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .openapi({ description: 'An identifier unique to this `DrsObject`' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A string that can be used to name a `DrsObject`.\nThis string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                        }),
                      self_uri: z
                        .string()
                        .openapi({
                          description:
                            'A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.\nThe intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.',
                          example: 'drs://drs.example.org/314159',
                        }),
                      size: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          description:
                            'For blobs, the blob size in bytes.\nFor bundles, the cumulative size, in bytes, of items in the `contents` field.',
                        }),
                      created_time: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'Timestamp of content creation in RFC3339.\n(This is the creation time of the underlying content, not of the JSON object.)',
                        }),
                      updated_time: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)',
                        }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A string representing a version.\n(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)',
                        }),
                      mime_type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A string providing the mime-type of the `DrsObject`.',
                          example: 'application/json',
                        }),
                      checksums: z
                        .array(
                          z
                            .object({
                              checksum: z
                                .string()
                                .openapi({
                                  description: 'The hex-string encoded checksum for the data',
                                }),
                              type: z
                                .string()
                                .openapi({
                                  description:
                                    "The digest method used to create the checksum.\nThe value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].\nGA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.",
                                  example: 'sha-256',
                                }),
                            })
                            .openapi({ required: ['checksum', 'type'] }),
                        )
                        .min(1)
                        .openapi({
                          description:
                            'The checksum of the `DrsObject`. At least one checksum must be provided.\nFor blobs, the checksum is computed over the bytes in the blob.\nFor bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.\nFor example, if a bundle contains blobs with the following checksums:\nmd5(blob1) = 72794b6d\nmd5(blob2) = 5e089d29\nThen the checksum of the bundle is:\nmd5( concat( sort( md5(blob1), md5(blob2) ) ) )\n= md5( concat( sort( 72794b6d, 5e089d29 ) ) )\n= md5( concat( 5e089d29, 72794b6d ) )\n= md5( 5e089d2972794b6d )\n= f7a29a04',
                        }),
                      access_methods: z
                        .array(
                          z
                            .object({
                              type: z
                                .enum([
                                  's3',
                                  'gs',
                                  'ftp',
                                  'gsiftp',
                                  'globus',
                                  'htsget',
                                  'https',
                                  'file',
                                ])
                                .openapi({ description: 'Type of the access method.' }),
                              access_url: z
                                .object({
                                  url: z
                                    .string()
                                    .openapi({
                                      description:
                                        'A fully resolvable URL that can be used to fetch the actual object bytes.',
                                    }),
                                  headers: z
                                    .array(z.string())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                                      example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                                    }),
                                })
                                .openapi({ required: ['url'] })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'An `AccessURL` that can be used to fetch the actual object bytes. Note that at least one of `access_url` and `access_id` must be provided.',
                                }),
                              access_id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.',
                                }),
                              cloud: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.',
                                  example: 'aws, gcp, or azure',
                                }),
                              region: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Name of the region in the cloud service provider that the object belongs to.',
                                  example: 'us-east-1',
                                }),
                              available: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.',
                                  example: true,
                                }),
                              authorizations: z
                                .object({
                                  drs_object_id: z.string().exactOptional(),
                                  supported_types: z
                                    .array(
                                      z.enum(['None', 'BasicAuth', 'BearerAuth', 'PassportAuth']),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.',
                                    }),
                                  passport_auth_issuers: z
                                    .array(z.string())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        "If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.",
                                    }),
                                  bearer_auth_issuers: z
                                    .array(z.string())
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.',
                                    }),
                                })
                                .openapi({ required: [] })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'When `access_id` is provided, `authorizations` provides information about how to authorize the `/access` method.',
                                }),
                            })
                            .openapi({ required: ['type'] }),
                        )
                        .min(1)
                        .exactOptional()
                        .openapi({
                          description:
                            'The list of access methods that can be used to fetch the `DrsObject`.\nRequired for single blobs; optional for bundles.',
                        }),
                      contents: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description:
                                    'A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].',
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.',
                                }),
                              drs_uri: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.',
                                  example: 'drs://drs.example.org/314159',
                                }),
                              contents: z
                                .array(ItemsSchema)
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.',
                                }),
                            })
                            .openapi({ required: ['name'] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'If not set, this `DrsObject` is a single blob.\nIf set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).',
                        }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A human readable description of the `DrsObject`.',
                        }),
                      aliases: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.',
                        }),
                    })
                    .openapi({ required: ['id', 'self_uri', 'size', 'created_time', 'checksums'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `DrsObject` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    413: {
      description: 'The bulk request is too large.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{ PassportAuth: [] }],
})

export const optionsObjectsRoute = createRoute({
  method: 'options',
  path: '/objects',
  tags: ['Objects'],
  summary: 'Get Authorization info about multiple DrsObjects.',
  description:
    'Returns a structure that contains for each DrsObjects a list of `Authorizations` that can be used to determine how to authorize requests to `GetObject` or `PostObject` (or bulk equivalents).',
  operationId: 'OptionsBulkObject',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bulk_object_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'An array of ObjectIDs.' }),
            })
            .openapi({
              description: 'The object that contains the DRS object IDs array',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '`Authorizations` were found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              summary: z
                .object({
                  requested: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of items requested.' }),
                  resolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects resolved.' }),
                  unresolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects not resolved.' }),
                })
                .exactOptional()
                .openapi({ description: 'A summary of what was resolved.', required: [] }),
              unresolved_drs_objects: z
                .array(
                  z
                    .object({
                      error_code: z.int().exactOptional(),
                      object_ids: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Error codes for each unresolved drs objects.' }),
              resolved_drs_object: z
                .array(
                  z
                    .object({
                      drs_object_id: z.string().exactOptional(),
                      supported_types: z
                        .array(z.enum(['None', 'BasicAuth', 'BearerAuth', 'PassportAuth']))
                        .exactOptional()
                        .openapi({
                          description:
                            'An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.',
                        }),
                      passport_auth_issuers: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            "If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.",
                        }),
                      bearer_auth_issuers: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    204: { description: '`Authorizations` are not supported for this object. Default to `None`.' },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `DrsObject` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    405: { description: '`Authorizations` are not supported for this object. Default to `None`.' },
    413: {
      description: 'The bulk request is too large.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{}],
})

export const getObjectsObjectIdAccessAccessIdRoute = createRoute({
  method: 'get',
  path: '/objects/{object_id}/access/{access_id}',
  tags: ['Objects'],
  summary: 'Get a URL for fetching bytes',
  description:
    'Returns a URL that can be used to fetch the bytes of a `DrsObject`.\nThis method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).',
  operationId: 'GetAccessURL',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_id',
            required: true,
            description: '`DrsObject` identifier',
            schema: { type: 'string' },
          },
        }),
      access_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'access_id',
            required: true,
            description: 'An `access_id` from the `access_methods` list of a `DrsObject`',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The `AccessURL` was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .openapi({
                  description:
                    'A fully resolvable URL that can be used to fetch the actual object bytes.',
                }),
              headers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                  example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `AccessURL` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
})

export const postObjectsObjectIdAccessAccessIdRoute = createRoute({
  method: 'post',
  path: '/objects/{object_id}/access/{access_id}',
  tags: ['Objects'],
  summary: "Get a URL for fetching bytes through POST'ing a Passport",
  description:
    'Returns a URL that can be used to fetch the bytes of a `DrsObject`.\nThis method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).\nMethod is a POST to accommodate a JWT GA4GH Passport sent in the formData in order to authorize access.',
  operationId: 'PostAccessURL',
  request: {
    params: z.object({
      object_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_id',
            required: true,
            description: '`DrsObject` identifier',
            schema: { type: 'string' },
          },
        }),
      access_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'access_id',
            required: true,
            description: 'An `access_id` from the `access_methods` list of a `DrsObject`',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              passports: z
                .array(
                  z
                    .string()
                    .openapi({
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM',
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The `AccessURL` was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .openapi({
                  description:
                    'A fully resolvable URL that can be used to fetch the actual object bytes.',
                }),
              headers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                  example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `AccessURL` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{ PassportAuth: [] }],
})

export const postObjectsAccessRoute = createRoute({
  method: 'post',
  path: '/objects/access',
  tags: ['Objects'],
  summary: 'Get URLs for fetching bytes from multiple objects with an optional Passport(s).',
  description:
    'Returns an array of URL objects that can be used to fetch the bytes of multiple `DrsObject`s.\nThis method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).\nCurrently this is limited to use passports (one or more) or a single bearer token, so make sure your bulk request is for objects that all use the same passports/token.',
  operationId: 'GetBulkAccessURL',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              passports: z.array(z.string()).exactOptional(),
              bulk_object_access_ids: z
                .array(
                  z
                    .object({
                      bulk_object_id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'DRS object ID' }),
                      bulk_access_ids: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'DRS object access ID' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              description: 'The object that contains object_id/access_id tuples',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The `AccessURL` was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              summary: z
                .object({
                  requested: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of items requested.' }),
                  resolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects resolved.' }),
                  unresolved: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of objects not resolved.' }),
                })
                .exactOptional()
                .openapi({ description: 'A summary of what was resolved.', required: [] }),
              unresolved_drs_objects: z
                .array(
                  z
                    .object({
                      error_code: z.int().exactOptional(),
                      object_ids: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Error codes for each unresolved drs objects.' }),
              resolved_drs_object_access_urls: z
                .array(
                  z
                    .object({
                      drs_object_id: z.string().exactOptional(),
                      drs_access_id: z.string().exactOptional(),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'A fully resolvable URL that can be used to fetch the actual object bytes.',
                        }),
                      headers: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.',
                          example: 'Authorization: Basic Z2E0Z2g6ZHJz',
                        }),
                    })
                    .openapi({ required: ['url'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description:
        'The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.\n',
      headers: z.object({
        'Retry-After': z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            description:
              'Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.\n',
            param: { required: false },
            type: 'integer',
            format: 'int64',
          }),
      }),
    },
    400: {
      description: 'The request is malformed.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    403: {
      description: 'The requester is not authorized to perform this action.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    404: {
      description: "The requested `AccessURL` wasn't found.",
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    413: {
      description: 'The bulk request is too large.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
    500: {
      description: 'An unexpected error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              msg: z.string().exactOptional().openapi({ description: 'A detailed error message.' }),
              status_code: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The integer representing the HTTP status code (e.g. 200, 404).',
                }),
            })
            .openapi({
              description: 'An object that can optionally include information about the error.',
              required: [],
            }),
        },
      },
    },
  },
  security: [{ PassportAuth: [] }],
})
