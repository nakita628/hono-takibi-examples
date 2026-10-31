import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    files: z
      .object({
        windows_compatible_filenames: z.boolean(),
        $comment: z.string().nullable(),
        bigfilechunking: z.boolean(),
        blacklisted_files: z.array(z.object({})),
        forbidden_filenames: z.array(z.string()),
        forbidden_filename_basenames: z.array(z.string()),
        forbidden_filename_characters: z.array(z.string()),
        forbidden_filename_extensions: z.array(z.string()),
        chunked_upload: z
          .object({
            max_size: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            max_parallel_count: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          })
          .openapi({ required: ['max_size', 'max_parallel_count'] }),
        file_conversions: z.array(
          z
            .object({
              from: z.string(),
              to: z.string(),
              extension: z.string(),
              displayName: z.string(),
            })
            .openapi({ required: ['from', 'to', 'extension', 'displayName'] }),
        ),
        directEditing: z
          .object({ url: z.string(), etag: z.string(), supportsFileId: z.boolean() })
          .openapi({ required: ['url', 'etag', 'supportsFileId'] }),
      })
      .openapi({
        required: [
          'windows_compatible_filenames',
          '$comment',
          'bigfilechunking',
          'blacklisted_files',
          'forbidden_filenames',
          'forbidden_filename_basenames',
          'forbidden_filename_characters',
          'forbidden_filename_extensions',
          'chunked_upload',
          'file_conversions',
          'directEditing',
        ],
      }),
  })
  .openapi({ required: ['files'] })
  .openapi('Capabilities')

const FolderTreeSchema = z
  .array(
    z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        basename: z.string(),
        displayName: z.string().exactOptional(),
        children: z.array(z.object({})),
      })
      .openapi({ required: ['id', 'basename', 'children'] }),
  )
  .openapi('FolderTree')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const TemplateFieldSchema = z
  .object({
    index: z.string(),
    type: z.string(),
    alias: z.string().nullable(),
    tag: z.string().nullable(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    content: z.string().exactOptional(),
    checked: z.boolean().exactOptional(),
  })
  .openapi({ required: ['index', 'type', 'alias', 'tag', 'id'] })
  .openapi('TemplateField')

const TemplateSchema = z
  .object({
    templateType: z.string(),
    templateId: z.string(),
    basename: z.string(),
    etag: z.string(),
    fileid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    filename: z.string(),
    lastmod: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    mime: z.string(),
    size: z.union([
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      z.float64(),
    ]),
    type: z.string(),
    hasPreview: z.boolean(),
    previewUrl: z.string().nullable(),
    fields: z.array(TemplateFieldSchema),
  })
  .openapi({
    required: [
      'templateType',
      'templateId',
      'basename',
      'etag',
      'fileid',
      'filename',
      'lastmod',
      'mime',
      'size',
      'type',
      'hasPreview',
      'previewUrl',
      'fields',
    ],
  })
  .openapi('Template')

const TemplateFileSchema = z
  .object({
    basename: z.string(),
    etag: z.string(),
    fileid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    filename: z.string().nullable(),
    lastmod: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    mime: z.string(),
    size: z.union([
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      z.float64(),
    ]),
    type: z.string(),
    hasPreview: z.boolean(),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'basename',
      'etag',
      'fileid',
      'filename',
      'lastmod',
      'mime',
      'size',
      'type',
      'hasPreview',
      'permissions',
    ],
  })
  .openapi('TemplateFile')

const TemplateFileCreatorSchema = z
  .object({
    app: z.string(),
    label: z.string(),
    extension: z.string(),
    iconClass: z.string().nullable(),
    iconSvgInline: z.string().nullable(),
    mimetypes: z.array(z.string()),
    ratio: z.float64().nullable(),
    actionLabel: z.string(),
  })
  .openapi({
    required: [
      'app',
      'label',
      'extension',
      'iconClass',
      'iconSvgInline',
      'mimetypes',
      'ratio',
      'actionLabel',
    ],
  })
  .openapi('TemplateFileCreator')

const TemplateFileCreatorWithTemplatesSchema = TemplateFileCreatorSchema.and(
  z.object({ templates: z.array(TemplateSchema) }).openapi({ required: ['templates'] }),
).openapi('TemplateFileCreatorWithTemplates')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/files/api/v1/thumbnail/{x}/{y}/{file}',
  tags: ['api'],
  summary: 'Gets a thumbnail of the specified file',
  operationId: 'api-get-thumbnail',
  request: {
    params: z.object({
      x: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'x',
            in: 'path',
            description: 'Width of the thumbnail',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      y: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'y',
            in: 'path',
            description: 'Height of the thumbnail',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      file: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'file',
            in: 'path',
            description: 'URL-encoded filename',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Thumbnail returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: {
      description: 'Getting thumbnail is not possible',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesApiV1DirectEditingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files/api/v1/directEditing',
  tags: ['direct_editing'],
  summary: 'Get the direct editing capabilities',
  operationId: 'direct_editing-info',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Direct editing capabilities returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      editors: z.record(
                        z.string(),
                        z
                          .object({
                            id: z.string(),
                            name: z.string(),
                            mimetypes: z.array(z.string()),
                            optionalMimetypes: z.array(z.string()),
                            secure: z.boolean(),
                          })
                          .openapi({
                            required: ['id', 'name', 'mimetypes', 'optionalMimetypes', 'secure'],
                          }),
                      ),
                      creators: z.record(
                        z.string(),
                        z
                          .object({
                            id: z.string(),
                            editor: z.string(),
                            name: z.string(),
                            extension: z.string(),
                            templates: z.boolean(),
                            mimetypes: z.array(z.string()),
                          })
                          .openapi({
                            required: [
                              'id',
                              'editor',
                              'name',
                              'extension',
                              'templates',
                              'mimetypes',
                            ],
                          }),
                      ),
                    })
                    .openapi({ required: ['editors', 'creators'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files/api/v1/directEditing/templates/{editorId}/{creatorId}',
  tags: ['direct_editing'],
  summary: 'Get the templates for direct editing',
  operationId: 'direct_editing-templates',
  request: {
    params: z.object({
      editorId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'editorId',
            in: 'path',
            description: 'ID of the editor',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      creatorId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'creatorId',
            in: 'path',
            description: 'ID of the creator',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Templates returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      templates: z.record(
                        z.string(),
                        z
                          .object({
                            id: z.string(),
                            title: z.string(),
                            preview: z.string().nullable(),
                            extension: z.string(),
                            mimetype: z.string(),
                          })
                          .openapi({
                            required: ['id', 'title', 'preview', 'extension', 'mimetype'],
                          }),
                      ),
                    })
                    .openapi({ required: ['templates'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1DirectEditingOpenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/directEditing/open',
  tags: ['direct_editing'],
  summary: 'Open a file for direct editing',
  operationId: 'direct_editing-open',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              path: z.string().min(1).openapi({ description: 'Path of the file' }),
              editorId: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the editor' }),
              fileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description: 'ID of the file',
                }),
            })
            .openapi({ required: ['path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'URL for direct editing returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ url: z.string() }).openapi({ required: ['url'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Opening file is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1DirectEditingCreateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/directEditing/create',
  tags: ['direct_editing'],
  summary: 'Create a file for direct editing',
  operationId: 'direct_editing-create',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              path: z.string().min(1).openapi({ description: 'Path of the file' }),
              editorId: z.string().min(1).openapi({ description: 'ID of the editor' }),
              creatorId: z.string().min(1).openapi({ description: 'ID of the creator' }),
              templateId: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the template' }),
            })
            .openapi({ required: ['path', 'editorId', 'creatorId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'URL for direct editing returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ url: z.string() }).openapi({ required: ['url'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Opening file is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesApiV1TemplatesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files/api/v1/templates',
  tags: ['template'],
  summary: 'List the available templates',
  operationId: 'template-list',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Available templates returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(TemplateFileCreatorWithTemplatesSchema),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files/api/v1/templates/fields/{fileId}',
  tags: ['template'],
  summary: 'List the fields for the template specified by the given file ID',
  operationId: 'template-list-template-fields',
  request: {
    params: z.object({
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'File ID of the template',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Fields returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), TemplateFieldSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/templates/create',
  tags: ['template'],
  summary: 'Create a template',
  operationId: 'template-create',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filePath: z.string().openapi({ description: 'Path of the file' }),
              templatePath: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Name of the template' }),
              templateType: z
                .string()
                .default('user')
                .exactOptional()
                .openapi({ description: 'Type of the template' }),
              templateFields: z
                .array(TemplateFieldSchema)
                .default([])
                .exactOptional()
                .openapi({ description: 'Fields of the template' }),
            })
            .openapi({ required: ['filePath'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Template created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: TemplateFileSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Creating template is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1TemplatesPathRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/templates/path',
  tags: ['template'],
  summary: 'Initialize the template directory',
  operationId: 'template-path',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              templatePath: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Path of the template directory' }),
              copySystemTemplates: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Whether to copy the system templates to the template directory',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Template directory initialized successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      template_path: z.string(),
                      templates: z.array(TemplateFileCreatorSchema),
                    })
                    .openapi({ required: ['template_path', 'templates'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Initializing the template directory is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1TransferownershipRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/transferownership',
  tags: ['transfer_ownership'],
  summary: 'Transfer the ownership to another user',
  operationId: 'transfer_ownership-transfer',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recipient: z.string().openapi({ description: 'Username of the recipient' }),
              path: z.string().openapi({ description: 'Path of the file' }),
            })
            .openapi({ required: ['recipient', 'path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ownership transferred successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Transferring ownership is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Transferring ownership is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/transferownership/{id}',
  tags: ['transfer_ownership'],
  summary: 'Accept an ownership transfer',
  operationId: 'transfer_ownership-accept',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the ownership transfer',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ownership transfer accepted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Accepting ownership transfer is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Ownership transfer not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/files/api/v1/transferownership/{id}',
  tags: ['transfer_ownership'],
  summary: 'Reject an ownership transfer',
  operationId: 'transfer_ownership-reject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the ownership transfer',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ownership transfer rejected successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Rejecting ownership transfer is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Ownership transfer not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/openlocaleditor',
  tags: ['open_local_editor'],
  summary: 'Create a local editor',
  operationId: 'open_local_editor-create',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ path: z.string().min(1).openapi({ description: 'Path of the file' }) })
            .openapi({ required: ['path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Local editor returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      userId: z.string().nullable(),
                      pathHash: z.string(),
                      expirationTime: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                      token: z.string(),
                    })
                    .openapi({ required: ['userId', 'pathHash', 'expirationTime', 'token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/openlocaleditor/{token}',
  tags: ['open_local_editor'],
  summary: 'Validate a local editor',
  operationId: 'open_local_editor-validate',
  request: {
    params: z.object({
      token: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the local editor',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ path: z.string().min(1).openapi({ description: 'Path of the file' }) })
            .openapi({ required: ['path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Local editor validated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      userId: z.string(),
                      pathHash: z.string(),
                      expirationTime: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                      token: z.string(),
                    })
                    .openapi({ required: ['userId', 'pathHash', 'expirationTime', 'token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Local editor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesApiV1FolderTreeRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files/api/v1/folder-tree',
  tags: ['api'],
  summary: 'Returns the folder tree of the user',
  operationId: 'api-get-folder-tree',
  request: {
    query: z.object({
      path: z
        .string()
        .default('/')
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'The path relative to the user folder',
            schema: { type: 'string', default: '/' },
            required: false,
          },
        }),
      depth: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'depth',
            in: 'query',
            description: 'The depth of the tree',
            schema: { type: 'integer', format: 'int64', default: 1 },
            required: false,
          },
        }),
      withParents: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'withParents',
            in: 'query',
            description: 'Whether to include parent folders in the response',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Folder tree returned successfully',
      content: { 'application/json': { schema: FolderTreeSchema } },
    },
    400: {
      description: 'Invalid folder path',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    404: {
      description: 'Folder not found',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1ConvertRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/convert',
  tags: ['conversion_api'],
  summary: 'Converts a file from one MIME type to another',
  operationId: 'conversion_api-convert',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileId: z
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
                  description: 'ID of the file to be converted',
                }),
              targetMimeType: z
                .string()
                .openapi({ description: 'The MIME type to which you want to convert the file' }),
              destination: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'The target path of the converted file. Written to a temporary file if left empty',
                }),
            })
            .openapi({ required: ['fileId', 'targetMimeType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'File was converted and written to the destination or temporary file',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      path: z.string(),
                      fileId: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: ['path', 'fileId'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The file to be converted was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesApiV1OpenedRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files/api/v1/opened',
  tags: ['opened'],
  summary: 'Report that the current user opened a file or folder',
  description:
    'Clients call this when the user actually opens a node, not when they read its content (sync, previews, downloads). Apps can listen to it to know what the user works with. It is for statistics only: clients send it when they choose to, so it must not be relied on for access or auditing.',
  operationId: 'opened-opened',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileId: z
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
                  description: 'ID of the opened file or folder',
                }),
            })
            .openapi({ required: ['fileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Open reported',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The file or folder was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
