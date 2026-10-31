import { createRoute, z } from '@hono/zod-openapi'

const FormatComplexitySchema = z
  .object({
    lodHint: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0).',
      }),
    triangleCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The estimated number of triangles.' }),
  })
  .openapi({ description: 'Information on the complexity of this Format.', required: [] })
  .openapi('FormatComplexity')

const FileSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).',
      }),
    relativePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL where the file data can be retrieved.' }),
  })
  .openapi({
    description: 'Represents a file in Poly, which can be a root, resource, or thumbnail file.',
    required: [],
  })
  .openapi('File')

const FormatSchema = z
  .object({
    formatComplexity: FormatComplexitySchema.exactOptional().openapi({
      description: 'Complexity stats about this representation of the asset.',
    }),
    formatType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.',
      }),
    resources: z
      .array(FileSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs.',
      }),
    root: FileSchema.exactOptional().openapi({
      description:
        'The root of the file hierarchy. This will always be populated. For some format_types - such as `TILT`, which are self-contained - this is all of the data. Other types - such as `OBJ` - often reference other data elements. These are contained in the resources field.',
    }),
  })
  .openapi({
    description:
      'The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.',
    required: [],
  })
  .openapi('Format')

const QuaternionSchema = z
  .object({
    w: z.float64().exactOptional().openapi({ description: 'The scalar component.' }),
    x: z.float64().exactOptional().openapi({ description: 'The x component.' }),
    y: z.float64().exactOptional().openapi({ description: 'The y component.' }),
    z: z.float64().exactOptional().openapi({ description: 'The z component.' }),
  })
  .openapi({
    description:
      'A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.',
    required: [],
  })
  .openapi('Quaternion')

const PresentationParamsSchema = z
  .object({
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A background color which could be used for displaying the 3D asset in a 'thumbnail' or 'palette' style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red.",
      }),
    colorSpace: z
      .enum(['UNKNOWN', 'LINEAR', 'GAMMA'])
      .exactOptional()
      .openapi({
        description:
          "The materials' diffuse/albedo color. This does not apply to vertex colors or texture maps.",
      }),
    orientingRotation: QuaternionSchema.exactOptional().openapi({
      description:
        'A rotation that should be applied to the object root to make it upright. More precisely, this quaternion transforms from "object space" (the space in which the object is defined) to "presentation space", a coordinate system where +Y is up, +X is right, -Z is forward. For example, if the object is the Eiffel Tower, in its local coordinate system the object might be laid out such that the base of the tower is on the YZ plane and the tip of the tower is towards positive X. In this case this quaternion would specify a rotation (of 90 degrees about the Z axis) such that in the presentation space the base of the tower is aligned with the XZ plane, and the tip of the tower lies towards +Y. This rotation is unrelated to the object\'s pose in the web preview, which is just a camera position setting and is *not* reflected in this rotation. Please note: this is applicable only to the gLTF.',
    }),
  })
  .openapi({
    description:
      'Hints for displaying the asset, based on information available when the asset was uploaded.',
    required: [],
  })
  .openapi('PresentationParams')

const RemixInfoSchema = z
  .object({
    sourceAsset: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Resource ids for the sources of this remix, of the form: `assets/{ASSET_ID}`',
      }),
  })
  .openapi({
    description:
      'Info about the sources of this asset (i.e. assets that were remixed to create this asset).',
    required: [],
  })
  .openapi('RemixInfo')

const AssetSchema = z
  .object({
    authorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing).",
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The human-readable description, set by the asset's author." }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The human-readable name, set by the asset's author." }),
    formats: z
      .array(FormatSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Formats where each format describes one representation of the asset.',
      }),
    isCurated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this asset has been curated by the Poly team.' }),
    license: z
      .enum(['UNKNOWN', 'CREATIVE_COMMONS_BY', 'ALL_RIGHTS_RESERVED'])
      .exactOptional()
      .openapi({
        description:
          'The license under which the author has made the asset available for use, if any.',
      }),
    metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON).",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the asset in the form: `assets/{ASSET_ID}`.',
      }),
    presentationParams: PresentationParamsSchema.exactOptional().openapi({
      description:
        'Hints for displaying the asset. Note that these parameters are not immutable; the author of an asset may change them post-publication.',
    }),
    remixInfo: RemixInfoSchema.exactOptional().openapi({
      description: 'The remix info for the asset.',
    }),
    thumbnail: FileSchema.exactOptional().openapi({
      description: 'The thumbnail image for the asset.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated.',
      }),
    visibility: z
      .enum(['VISIBILITY_UNSPECIFIED', 'PRIVATE', 'UNLISTED', 'PUBLIC'])
      .exactOptional()
      .openapi({ description: 'The visibility of the asset and who can access it.' }),
  })
  .openapi({
    description:
      'Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.',
    required: [],
  })
  .openapi('Asset')

const ImageErrorSchema = z
  .object({
    code: z
      .enum(['CODE_UNSPECIFIED', 'INVALID_IMAGE', 'IMAGE_TOO_BIG', 'WRONG_IMAGE_TYPE'])
      .exactOptional()
      .openapi({
        description: 'The type of image error encountered. Optional for older image errors.',
      }),
    filePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file path in the import of the image that was rejected.' }),
  })
  .openapi({ description: 'A message resulting from reading an image file.', required: [] })
  .openapi('ImageError')

const ObjParseErrorSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'INCONSISTENT_VERTEX_REFS',
        'INVALID_COMMAND',
        'INVALID_NUMBER',
        'INVALID_VERTEX_REF',
        'MISSING_GEOMETRIC_VERTEX',
        'MISSING_TOKEN',
        'TOO_FEW_DIMENSIONS',
        'TOO_FEW_VERTICES',
        'TOO_MANY_DIMENSIONS',
        'UNSUPPORTED_COMMAND',
        'UNUSED_TOKENS',
        'VERTEX_NOT_FOUND',
        'NUMBER_OUT_OF_RANGE',
        'INVALID_VALUE',
        'INVALID_TEXTURE_OPTION',
        'TOO_MANY_PROBLEMS',
        'MISSING_FILE_NAME',
        'FILE_NOT_FOUND',
        'UNKNOWN_MATERIAL',
        'NO_MATERIAL_DEFINED',
        'INVALID_SMOOTHING_GROUP',
        'MISSING_VERTEX_COLORS',
        'FILE_SUBSTITUTION',
        'LINE_TOO_LONG',
        'INVALID_FILE_PATH',
      ])
      .exactOptional()
      .openapi({ description: 'The type of problem found (required).' }),
    endIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ending character index at which the problem was found.' }),
    filePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file path in which the problem was found.' }),
    line: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation.',
      }),
    lineNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Line number at which the problem was found.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The starting character index at which the problem was found.' }),
  })
  .openapi({ description: 'Details of an error resulting from parsing an OBJ file', required: [] })
  .openapi('ObjParseError')

const AssetImportMessageSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'NO_IMPORTABLE_FILE',
        'EMPTY_MODEL',
        'OBJ_PARSE_ERROR',
        'EXPIRED',
        'IMAGE_ERROR',
        'EXTRA_FILES_WITH_ARCHIVE',
        'DEFAULT_MATERIALS',
        'FATAL_ERROR',
        'INVALID_ELEMENT_TYPE',
      ])
      .exactOptional()
      .openapi({ description: 'The code associated with this message.' }),
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional file path. Only present for those error codes that specify it.',
      }),
    imageError: ImageErrorSchema.exactOptional().openapi({
      description: 'An optional image error. Only present for INVALID_IMAGE_FILE.',
    }),
    objParseError: ObjParseErrorSchema.exactOptional().openapi({
      description: 'An optional OBJ parse error. Only present for OBJ_PARSE_ERROR.',
    }),
  })
  .openapi({ description: 'A message generated by the asset import process.', required: [] })
  .openapi('AssetImportMessage')

const ListAssetsResponseSchema = z
  .object({
    assets: z
      .array(AssetSchema)
      .exactOptional()
      .openapi({
        description: 'A list of assets that match the criteria specified in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of assets in the list, without pagination.' }),
  })
  .openapi({ description: 'A response message from a request to list.', required: [] })
  .openapi('ListAssetsResponse')

const ListLikedAssetsResponseSchema = z
  .object({
    assets: z
      .array(AssetSchema)
      .exactOptional()
      .openapi({
        description: 'A list of assets that match the criteria specified in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of assets in the list, without pagination.' }),
  })
  .openapi({ description: 'A response message from a request to list.', required: [] })
  .openapi('ListLikedAssetsResponse')

const UserAssetSchema = z
  .object({ asset: AssetSchema.exactOptional().openapi({ description: 'An Asset.' }) })
  .openapi({ description: "Data about the user's asset.", required: [] })
  .openapi('UserAsset')

const ListUserAssetsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of assets in the list, without pagination.' }),
    userAssets: z
      .array(UserAssetSchema)
      .exactOptional()
      .openapi({ description: 'A list of UserAssets matching the request.' }),
  })
  .openapi({ description: 'A response message from a request to list.', required: [] })
  .openapi('ListUserAssetsResponse')

const StartAssetImportResponseSchema = z
  .object({
    assetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong.',
      }),
    assetImportId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the asset import.' }),
    assetImportMessages: z
      .array(AssetImportMessageSchema)
      .exactOptional()
      .openapi({
        description:
          'The message from the asset import. This will contain any warnings (or - in the case of failure - errors) that occurred during import.',
      }),
    publishUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The publish URL for the asset.' }),
  })
  .openapi({
    description:
      'A response message from a request to startImport. This is returned in the response field of the Operation.',
    required: [],
  })
  .openapi('StartAssetImportResponse')

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

export const getV1AssetsRoute = createRoute({
  method: 'get',
  path: '/v1/assets',
  tags: ['assets'],
  description:
    'Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.',
  operationId: 'poly.assets.list',
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
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      curated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only assets that have been curated by the Poly team.',
            in: 'query',
            name: 'curated',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.',
            in: 'query',
            name: 'keywords',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxComplexity: z
        .enum(['COMPLEXITY_UNSPECIFIED', 'COMPLEX', 'MEDIUM', 'SIMPLE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.',
            in: 'query',
            name: 'maxComplexity',
            schema: {
              enum: ['COMPLEXITY_UNSPECIFIED', 'COMPLEX', 'MEDIUM', 'SIMPLE'],
              type: 'string',
            },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.',
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
            description:
              'Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAssetsResponseSchema } },
    },
  },
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['assets'],
  description:
    'Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.',
  operationId: 'poly.assets.get',
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
            description: "Required. An asset's name in the form `assets/{ASSET_ID}`.",
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
      content: { 'application/json': { schema: AssetSchema } },
    },
  },
})

export const getV1NameAssetsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/assets',
  tags: ['users'],
  description:
    "Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.",
  operationId: 'poly.users.assets.list',
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
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.',
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
            description:
              'Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      visibility: z
        .enum(['VISIBILITY_UNSPECIFIED', 'PUBLISHED', 'PRIVATE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.',
            in: 'query',
            name: 'visibility',
            schema: { enum: ['VISIBILITY_UNSPECIFIED', 'PUBLISHED', 'PRIVATE'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.",
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
      content: { 'application/json': { schema: ListUserAssetsResponseSchema } },
    },
  },
})

export const getV1NameLikedassetsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/likedassets',
  tags: ['users'],
  description:
    "Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.",
  operationId: 'poly.users.likedassets.list',
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
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.",
            in: 'query',
            name: 'orderBy',
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
            description:
              'The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.',
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
            description:
              'Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.',
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
            description:
              "A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.",
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
      content: { 'application/json': { schema: ListLikedAssetsResponseSchema } },
    },
  },
})
