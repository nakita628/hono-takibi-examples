import { createRoute, z } from '@hono/zod-openapi'

const ArchiveSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier that represents an archive.',
        example: '12345',
      }),
    type: z
      .literal('archive')
      .openapi({ description: 'The value is always `archive`.', example: 'archive' }),
    name: z
      .string()
      .min(1)
      .max(100)
      .openapi({
        description:
          'The name of the archive.\n\nThe following restrictions to the archive name apply: names containing\nnon-printable ASCII characters, forward and backward slashes\n(`/`, `\\`), names with trailing spaces, and names `.` and `..` are\nnot allowed.',
        example: 'Archive',
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
        description: 'The size of the archive in bytes.',
        example: 123456789,
      }),
    description: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The description of the archive.',
        example: 'This is an archive for important documents.',
      }),
    owned_by: z
      .object({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier that represents a user who owns the archive.',
            example: '12345',
          }),
        type: z.string().openapi({ description: 'The value is always `user`.', example: 'user' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The part of an archive API response that describes the user who owns the archive.',
        example: { id: '12345', type: 'user' },
        required: ['id', 'type'],
      }),
  })
  .openapi({
    description:
      'An archive is a folder dedicated to storing content that is\nredundant, outdated, or trivial. Content in an archive is not accessible to its\nowner and collaborators.\nTo use this feature, you must request GCM scope for your Box application.',
    required: ['id', 'type', 'name', 'size'],
    title: 'Archive',
    'x-box-resource-id': 'archive_v2025.0',
    'x-box-tag': 'archives',
  })
  .openapi('Archive')

const ArchivesSchema = z
  .object({
    entries: z
      .array(ArchiveSchema)
      .exactOptional()
      .openapi({ description: 'A list in which each entry represents an archive object.' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A list of archives.',
    title: 'Archives',
    'x-box-resource-id': 'archives_v2025.0',
    'x-box-tag': 'archives',
  })
  .openapi('Archives')

const ClientErrorSchema = z
  .object({
    type: z
      .literal('error')
      .exactOptional()
      .openapi({ description: 'The value will always be `error`.', example: 'error' }),
    status: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The HTTP status of the response.', example: 400 }),
    code: z
      .enum([
        'created',
        'accepted',
        'no_content',
        'redirect',
        'not_modified',
        'bad_request',
        'unauthorized',
        'forbidden',
        'not_found',
        'method_not_allowed',
        'conflict',
        'precondition_failed',
        'too_many_requests',
        'internal_server_error',
        'unavailable',
        'item_name_invalid',
        'insufficient_scope',
      ])
      .exactOptional()
      .openapi({ description: 'A Box-specific error code.', example: 'item_name_invalid' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short message describing the error.',
        example: 'Method Not Allowed',
      }),
    context_info: z
      .record(z.string(), z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A free-form object that contains additional context\nabout the error. The possible fields are defined on\na per-endpoint basis. `message` is only one example.',
        example: { message: 'Something went wrong' },
      }),
    help_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL that links to more information about why this error occurred.',
        example: 'https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/',
      }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this response, which can be used\nwhen contacting Box support.',
        example: 'abcdef123456',
      }),
  })
  .openapi({
    description: 'A generic error.',
    title: 'Client error',
    'x-box-resource-id': 'client_error_v2025.0',
    required: [],
  })
  .openapi('ClientError')

const CollaborationPermissionsSchema = z
  .object({
    is_co_owner_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The co-owner role is enabled for collaboration.', example: true }),
    is_editor_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The editor role is enabled for collaboration.', example: true }),
    is_previewer_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The previewer role is enabled for collaboration.', example: true }),
    is_previewer_uploader_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The previewer uploader role is enabled for collaboration.',
        example: true,
      }),
    is_uploader_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The uploader role is enabled for collaboration.', example: true }),
    is_viewer_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The viewer role is enabled for collaboration.', example: true }),
    is_viewer_uploader_role_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The viewer uploader role is enabled for collaboration.',
        example: true,
      }),
  })
  .openapi({
    description: 'The collaboration permissions.',
    title: 'Collaboration permissions',
    required: [],
  })
  .openapi('CollaborationPermissions')

const CustomSessionDurationGroupItemSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Group ID (numerical).', example: '1234' }),
    name: z.string().exactOptional().openapi({ description: 'Group Name.', example: 'Group Name' }),
  })
  .openapi({
    description: 'A custom session duration group item.',
    title: 'Custom session duration group item',
    required: [],
  })
  .openapi('CustomSessionDurationGroupItem')

const DocGenBatchBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier that represents a Box Doc Gen batch.',
        example: '12345',
      }),
    type: z
      .literal('docgen_batch')
      .openapi({
        description: 'The value will always be `docgen_batch`.',
        example: 'docgen_batch',
      }),
  })
  .openapi({
    description:
      'The basic representation of a Box Doc Gen batch object. A Box Doc Gen batch contains one or more Box Doc Gen jobs.',
    required: ['id', 'type'],
    title: 'Box Doc Gen batch (Base)',
    'x-box-resource-id': 'docgen_batch_v2025.0--base',
    'x-box-tag': 'docgen',
    'x-box-variant': 'base',
    'x-box-variants': ['base'],
  })
  .openapi('DocGenBatchBase')

const FileReferenceSchema = z
  .object({
    type: z
      .literal('file')
      .openapi({ description: 'The value will always be `file`.', example: 'file' }),
    id: z.string().openapi({ description: 'ID of the object.', example: '42037322' }),
  })
  .openapi({ description: 'File reference.', required: ['type', 'id'], title: 'File reference' })
  .openapi('FileReference')

const FileVersionBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier that represent a file version.',
        example: '12345',
      }),
    type: z
      .literal('file_version')
      .openapi({
        description: 'The value will always be `file_version`.',
        example: 'file_version',
      }),
  })
  .openapi({
    description:
      'The bare basic representation of a file version, the minimal\namount of fields returned when using the `fields` query\nparameter.',
    required: ['id', 'type'],
    title: 'File version (Base)',
  })
  .openapi('FileVersionBase')

const DocGenDocumentGenerationDataSchema = z
  .object({
    generated_file_name: z
      .string()
      .openapi({ description: 'File name of the output file.', example: 'New_Template' }),
    user_input: z.record(z.string(), z.any()).openapi({ example: { name: 'Aaron Levie' } }),
    external_id: z
      .string()
      .max(36)
      .exactOptional()
      .openapi({
        description:
          'An optional identifier supplied by the caller for this Box Doc Gen job.\nThe value is returned on job responses for correlation only. It is not\na Box resource ID, is not required to be unique, and cannot be used to\nlook up the job.',
        example: '111222_externalID',
      }),
  })
  .openapi({
    description: 'The schema for for creating a Box Doc Gen job request.',
    required: ['generated_file_name', 'user_input'],
    title: 'Document generation data',
  })
  .openapi('DocGenDocumentGenerationData')

const DocGenBatchCreateRequestSchema = z
  .object({
    file: FileReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'A Box Doc Gen template that is used to generate the document.' }),
    ),
    file_version: FileVersionBaseSchema.and(
      z.any().openapi({ description: 'File version of a template.' }),
    ).exactOptional(),
    input_source: z
      .string()
      .openapi({
        description:
          'Source of input. The value has to be `api` for all the API-based document generation requests.',
        example: 'api',
      }),
    destination_folder: z
      .object({
        type: z
          .literal('folder')
          .openapi({ description: 'The value will always be `folder`.', example: 'folder' }),
        id: z.string().openapi({ description: 'ID of the folder.', example: '42037322' }),
      })
      .openapi({
        title: 'Folder reference',
        description: 'Folder reference.',
        required: ['type', 'id'],
      })
      .and(z.any().openapi({ description: 'Destination folder for the generated files.' })),
    output_type: z.string().openapi({ description: 'Type of the output file.', example: 'docx' }),
    document_generation_data: z.array(DocGenDocumentGenerationDataSchema),
  })
  .openapi({
    description: 'The schema for creating a Box Doc Gen job batch request.',
    required: [
      'file',
      'input_source',
      'destination_folder',
      'output_type',
      'document_generation_data',
    ],
    title: 'Create batch request',
  })
  .openapi('DocGenBatchCreateRequest')

const DocGenJobBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier that represent a Box Doc Gen job.',
        example: '12345',
      }),
    type: z
      .literal('docgen_job')
      .openapi({ description: 'The value will always be `docgen_job`.', example: 'docgen_job' }),
  })
  .openapi({
    description: 'The basic representation of a Box Doc Gen job.',
    required: ['id', 'type'],
    title: 'Box Doc Gen job (Base)',
    'x-box-resource-id': 'docgen_job_v2025.0--base',
    'x-box-tag': 'docgen',
    'x-box-variant': 'base',
    'x-box-variants': ['base', 'standard', 'full'],
  })
  .openapi('DocGenJobBase')

const DocGenJobSchema = DocGenJobBaseSchema.and(
  z
    .object({
      external_id: z
        .string()
        .max(36)
        .exactOptional()
        .openapi({
          description:
            'An optional identifier supplied by the caller when the Box Doc Gen\njob was created. Returned for correlation only. It is not a Box\nresource ID, is not required to be unique, and cannot be used to\nlook up the job.',
          example: '111222_externalID',
        }),
      batch: DocGenBatchBaseSchema.and(
        z.any().openapi({ description: 'Box Doc Gen batch that the job belongs to.' }),
      ).exactOptional(),
      template_file: FileReferenceSchema.and(
        z.any().openapi({ description: 'Box Doc Gen template used in the job.' }),
      ).exactOptional(),
      template_file_version: FileVersionBaseSchema.and(
        z.any().openapi({ description: 'File version of a template.' }),
      ).exactOptional(),
      output_file: z
        .xor([
          FileReferenceSchema,
          z
            .strictObject({})
            .nullable()
            .openapi({
              title: 'OpenAPI 3.0 null schema type',
              description: 'The definition for a null schema type in OpenAPI `3.0`.',
            }),
        ])
        .and(
          z
            .any()
            .openapi({
              description:
                'The output file of the job. This property is `null` until the job is completed.',
            }),
        )
        .exactOptional(),
      output_file_version: z
        .xor([
          FileVersionBaseSchema,
          z
            .strictObject({})
            .nullable()
            .openapi({
              title: 'OpenAPI 3.0 null schema type',
              description: 'The definition for a null schema type in OpenAPI `3.0`.',
            }),
        ])
        .and(
          z
            .any()
            .openapi({
              description:
                'File version of the output file. This property is `null` until the job is completed.',
            }),
        )
        .exactOptional(),
      status: z
        .enum(['submitted', 'completed', 'failed', 'completed_with_error', 'pending'])
        .exactOptional()
        .openapi({ description: 'Status of the job.', example: 'completed' }),
      output_type: z
        .string()
        .exactOptional()
        .openapi({ description: 'Type of the generated file.', example: 'docx' }),
      failures: z
        .object({
          errors: z
            .array(z.string())
            .openapi({
              description: 'A list of errors that occurred during document generation.',
              example: ["The tag 'customer_name' was not provided in the input data."],
            }),
          warnings: z
            .array(z.string())
            .openapi({
              description: 'A list of warnings that occurred during document generation.',
              example: ["The tag 'optional_field' was provided but not used in the template."],
            }),
        })
        .nullable()
        .exactOptional()
        .openapi({
          description: 'Errors and warnings that occurred during document generation.',
          required: ['errors', 'warnings'],
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A standard representation of a Box Doc Gen job.',
    required: ['id', 'batch', 'template_file', 'template_file_version', 'status', 'output_type'],
    title: 'Box Doc Gen job',
    'x-box-resource-id': 'docgen_job_v2025.0',
    'x-box-tag': 'docgen',
    'x-box-variant': 'standard',
    'x-box-variants': ['base', 'standard', 'full'],
  })
  .openapi('DocGenJob')

const UserBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this user.', example: '11446498' }),
    type: z
      .literal('user')
      .openapi({ description: 'The value will always be `user`.', example: 'user' }),
  })
  .openapi({
    description: 'A mini representation of a user, used when\nnested within another resource.',
    required: ['type', 'id'],
    title: 'User (Base)',
  })
  .openapi('UserBase')

const EnterpriseReferenceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for this enterprise.', example: '1910967' }),
    type: z
      .literal('enterprise')
      .exactOptional()
      .openapi({ description: 'The value will always be `enterprise`.', example: 'enterprise' }),
  })
  .openapi({
    description: 'A reference to an enterprise, used when\nnested within another resource.',
    title: 'Enterprise reference',
    required: [],
  })
  .openapi('EnterpriseReference')

const DocGenJobFullSchema = DocGenJobSchema.and(
  z
    .object({
      created_at: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Time of job creation.',
          example: '2022-05-11T10:56:11-07:00',
          readOnly: true,
        }),
      created_by: UserBaseSchema.and(
        z.any().openapi({ description: 'User who created the job.' }),
      ).exactOptional(),
      enterprise: EnterpriseReferenceSchema.and(
        z.any().openapi({ description: 'ID of the enterprise.' }),
      ).exactOptional(),
      source: z
        .string()
        .exactOptional()
        .openapi({ description: 'Source of the request.', example: 'api', readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A full representation of a Box Doc Gen job.',
    required: [
      'id',
      'batch',
      'created_by',
      'enterprise',
      'template_file',
      'template_file_version',
      'output_type',
      'source',
      'status',
    ],
    title: 'Box Doc Gen job (Full)',
    'x-box-resource-id': 'docgen_job_v2025.0--full',
    'x-box-tag': 'docgen',
    'x-box-variant': 'full',
    'x-box-variants': ['base', 'standard', 'full'],
  })
  .openapi('DocGenJobFull')

const DocGenJobsSchema = z
  .object({
    limit: z
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
        type: 'integer',
        format: 'int64',
        description:
          'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
        example: 1000,
      }),
    next_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the next page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
      }),
    prev_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the previous page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih',
      }),
  })
  .openapi({
    description: 'The part of an API response that describes marker\nbased pagination.',
    required: [],
  })
  .and(
    z
      .object({
        entries: z.array(DocGenJobSchema).exactOptional().openapi({ description: 'List of jobs.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'A list of Box Doc Gen jobs with a standard set of parameters.',
    title: 'Box Doc Gen jobs',
    'x-box-resource-id': 'docgen_jobs_v2025.0',
    'x-box-tag': 'docgen',
    'x-box-variant': 'base',
    'x-box-variants': ['standard', 'full'],
  })
  .openapi('DocGenJobs')

const DocGenJobsFullSchema = z
  .object({
    limit: z
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
        type: 'integer',
        format: 'int64',
        description:
          'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
        example: 1000,
      }),
    next_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the next page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
      }),
    prev_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the previous page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih',
      }),
  })
  .openapi({
    description: 'The part of an API response that describes marker\nbased pagination.',
    required: [],
  })
  .and(
    z
      .object({
        entries: z
          .array(DocGenJobFullSchema)
          .exactOptional()
          .openapi({ description: 'List of jobs.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'A list of Box Doc Gen jobs with a full set of parameters.',
    title: 'Box Doc Gen jobs (Full)',
    'x-box-resource-id': 'docgen_jobs_v2025.0--full',
    'x-box-tag': 'docgen',
    'x-box-variant': 'full',
    'x-box-variants': ['standard', 'full'],
  })
  .openapi('DocGenJobsFull')

const DocGenTagSchema = z
  .object({
    tag_content: z
      .string()
      .openapi({
        description: 'The content of the tag.',
        example: '{{item.name}}',
        readOnly: true,
      }),
    tag_type: z
      .enum(['text', 'arithmetic', 'conditional', 'for-loop', 'table-loop', 'image'])
      .openapi({ description: 'Type of the tag.', example: 'text', readOnly: true }),
    json_paths: z
      .array(z.string().openapi({ readOnly: true, example: 'products.name' }))
      .openapi({
        description: 'List of the paths.',
        example: ['products', 'products.name'],
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A Box Doc Gen template tag object.',
    required: ['tag_content', 'tag_type', 'json_paths'],
    title: 'Box Doc Gen template tag',
    'x-box-resource-id': 'docgen_tag_v2025.0',
    'x-box-sanitized': true,
    'x-box-tag': 'docgen_template',
  })
  .openapi('DocGenTag')

const DocGenTagsSchema = z
  .object({
    limit: z
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
        type: 'integer',
        format: 'int64',
        description:
          'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
        example: 1000,
      }),
    next_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the next page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
      }),
    prev_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the previous page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih',
      }),
  })
  .openapi({
    description: 'The part of an API response that describes marker\nbased pagination.',
    required: [],
  })
  .and(
    z
      .object({
        entries: z.array(DocGenTagSchema).exactOptional().openapi({ description: 'List of tags.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'A list of Box Doc Gen tags.',
    title: 'Box Doc Gen tags',
    'x-box-resource-id': 'docgen_tags_v2025.0',
    'x-box-tag': 'docgen_template',
  })
  .openapi('DocGenTags')

const DocGenTagsProcessingMessageSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'A message informing the user that document tags are still being processed.',
        example: 'Processing tags for this file.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A message informing the user that document tags are still being processed.',
    required: ['message'],
    title: 'Box Doc Gen tags processing message',
    'x-box-resource-id': 'docgen_tags_processing_message_v2025.0',
    'x-box-tag': 'docgen_template',
  })
  .openapi('DocGenTagsProcessingMessage')

const DocGenTemplateBaseSchema = z
  .object({
    file: FileReferenceSchema.and(
      z.any().openapi({ description: 'Enable the file to generate a document from.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A base representation of a Box Doc Gen template, used when\nnested within another resource.',
    title: 'Box Doc Gen template (Base)',
    'x-box-resource-id': 'docgen_template_v2025.0--base',
    'x-box-variant': 'base',
    'x-box-variants': ['base', 'standard'],
    required: [],
  })
  .openapi('DocGenTemplateBase')

const DocGenTemplateSchema = DocGenTemplateBaseSchema.and(
  z
    .object({
      file_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The name of the template.', example: 'Official contract' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A Box Doc Gen template object.',
    title: 'Box Doc Gen template',
    'x-box-resource-id': 'docgen_template_v2025.0',
    'x-box-tag': 'docgen_template',
    'x-box-variant': 'standard',
    'x-box-variants': ['base', 'standard'],
  })
  .openapi('DocGenTemplate')

const DocGenTemplateCreateRequestSchema = z
  .object({
    file: FileReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Marks the file as a Box Doc Gen template to generate the document from.',
        }),
    ),
  })
  .openapi({
    description: 'The schema for marking document as Box Doc Gen template.',
    required: ['file'],
    title: 'Mark file as Box Doc Gen template',
  })
  .openapi('DocGenTemplateCreateRequest')

const DocGenTemplatesSchema = z
  .object({
    limit: z
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
        type: 'integer',
        format: 'int64',
        description:
          'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
        example: 1000,
      }),
    next_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the next page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
      }),
    prev_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marker for the start of the previous page of results.',
        example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih',
      }),
  })
  .openapi({
    description: 'The part of an API response that describes marker\nbased pagination.',
    required: [],
  })
  .and(
    z
      .object({
        entries: z
          .array(DocGenTemplateSchema)
          .exactOptional()
          .openapi({ description: 'A list of templates.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'List of Box Doc Gen templates.',
    title: 'Box Doc Gen templates',
    'x-box-resource-id': 'docgen_templates_v2025.0',
    'x-box-tag': 'docgen_template',
  })
  .openapi('DocGenTemplates')

const EnterpriseConfigurationItemSchema = z
  .object({
    is_used: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether a configuration is used for a given enterprise.',
        example: true,
      }),
  })
  .openapi({
    description: 'The basic data included in each enterprise configuration response object.',
    title: 'Enterprise configuration item',
    required: [],
  })
  .openapi('EnterpriseConfigurationItem')

const EnterpriseConfigurationItemBooleanSchema = EnterpriseConfigurationItemSchema.and(
  z
    .object({
      value: z
        .boolean()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The value of the enterprise configuration as a boolean.',
          example: true,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'An enterprise configuration item with a boolean type value.',
    title: 'Enterprise configuration item with boolean value',
  })
  .openapi('EnterpriseConfigurationItemBoolean')

const EnterpriseConfigurationItemStringSchema = EnterpriseConfigurationItemSchema.and(
  z
    .object({
      value: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The value of the enterprise configuration as a string.',
          example: 'value of configuration',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'An enterprise configuration item with a string type value.',
    title: 'Enterprise configuration item with string value',
  })
  .openapi('EnterpriseConfigurationItemString')

const EnterpriseConfigurationItemIntegerSchema = EnterpriseConfigurationItemSchema.and(
  z
    .object({
      value: z
        .int()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The value of the enterprise configuration as an integer.',
          example: 1234,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'An enterprise configuration item with a integer type value.',
    title: 'Enterprise configuration item with integer value',
  })
  .openapi('EnterpriseConfigurationItemInteger')

const ExternalCollabSecuritySettingsSchema = z
  .object({
    denylist_domains: z
      .array(z.string().openapi({ example: 'example.com' }))
      .exactOptional()
      .openapi({
        description:
          'List of domains that are not allowed for external collaboration. Applies if state is `denylist`.',
        example: ['example.com'],
      }),
    denylist_emails: z
      .array(z.string().openapi({ example: 'spam@example.com' }))
      .exactOptional()
      .openapi({
        description:
          'List of email addresses that are not allowed for external collaboration. Applies if state is `denylist`.',
        example: ['spam@example.com'],
      }),
    allowlist_domains: z
      .array(z.string().openapi({ example: 'example.com' }))
      .exactOptional()
      .openapi({
        description:
          'List of domains that are allowed for external collaboration. Applies if state is `allowlist`.',
        example: ['example.com'],
      }),
    allowlist_emails: z
      .array(z.string().openapi({ example: 'mail@example.com' }))
      .exactOptional()
      .openapi({
        description:
          'List of email addresses that are allowed for external collaboration. Applies if state is `allowlist`.',
        example: ['mail@example.com'],
      }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The state of the external collaboration security settings. Possible values include `enabled`, `disabled`, `allowlist`, and `denylist`.',
        example: 'enabled',
      }),
    scheduled_status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The status of the scheduling to apply external collaboration security settings. Possible values include `in_progress`, `scheduled`, `completed`, `failed`, and `scheduled_immediate`.',
        example: 'inprogress',
      }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Scheduled at.', example: '2012-12-12T10:53:43-08:00' }),
    factor_type_settings: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Factor type for the external collaborators authentication. Possible values include `totp`, `any`, or `unknown`.',
        example: 'totp',
      }),
  })
  .openapi({
    description: 'External collaboration security settings.',
    title: 'External collab security settings',
    required: [],
  })
  .openapi('ExternalCollabSecuritySettings')

const KeysafeSettingsSchema = z
  .object({
    keysafe_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether KeySafe addon is enabled for the enterprise.',
        example: true,
      }),
    cloud_provider: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The cloud provider.', example: '' }),
    key_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The key ID.', example: '1234' }),
    account_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The account ID.', example: '1234' }),
    location_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The location ID.', example: '1234' }),
    project_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The project ID.', example: '1234' }),
    keyring_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The key ring ID.', example: '1234' }),
  })
  .openapi({ description: 'The KeySafe settings.', title: 'KeySafe settings', required: [] })
  .openapi('KeysafeSettings')

const EnterpriseConfigurationSecuritySchema = z
  .object({
    is_managed_user_signup_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Determines if users are allowed to sign up on their own.' }),
    ).exactOptional(),
    is_managed_user_signup_notification_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Determines if users must sign up with your corporate email.' }),
    ).exactOptional(),
    is_managed_user_signup_corporate_email_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'When enabled, admin are emailed when new users are added.' }),
    ).exactOptional(),
    is_new_user_notification_daily_digest_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Depends on `is_managed_user_signup_corporate_email_enabled`. A true value represents `In daily summary emails`. A false value represents `Immediately`.',
        }),
    ).exactOptional(),
    is_managed_user_email_change_disabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When enabled, prevents users from changing their primary email address.',
        }),
    ).exactOptional(),
    is_multi_factor_auth_required: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if multi-factor authentication is required for all managed users.',
        }),
    ).exactOptional(),
    is_weak_password_prevention_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When enabled, prevents common words / email address to be used in a password.',
        }),
    ).exactOptional(),
    is_password_leak_detection_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables exposed password detection.' }),
    ).exactOptional(),
    last_password_reset_at: EnterpriseConfigurationItemSchema.and(
      z
        .object({
          value: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({
              description: 'When an enterprise password reset was last applied.',
              example: '2012-12-12T10:53:43-08:00',
            }),
        })
        .openapi({ required: [] }),
    ).exactOptional(),
    is_password_request_notification_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When enabled, admins are notified when users request a forget password email.',
        }),
    ).exactOptional(),
    is_password_change_notification_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When enabled, admins are notified when users change passwords in Settings.',
        }),
    ).exactOptional(),
    is_strong_password_for_ext_collab_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Requires strong passwords for External Collaborators.' }),
    ).exactOptional(),
    is_managed_user_migration_disabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Disables users from being migrated in or out of the enterprise.',
        }),
    ).exactOptional(),
    join_link: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Join url for self sign up. Depends on `is_managed_user_signup_enabled`. Applies if `join_url` is not used.',
        }),
    ).exactOptional(),
    join_url: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Join url for self sign up. Depends on `is_managed_user_signup_enabled`. Applies if `join_link` is not used.',
        }),
    ).exactOptional(),
    failed_login_attempts_to_trigger_admin_notification:
      EnterpriseConfigurationItemIntegerSchema.and(
        z
          .any()
          .openapi({
            description: 'Number of failed login attempts before the primary admin is notified.',
          }),
      ).exactOptional(),
    password_min_length: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'Minimum number of characters required for passwords.' }),
    ).exactOptional(),
    password_min_uppercase_characters: EnterpriseConfigurationItemIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Minimum number of upper case characters required in passwords.' }),
    ).exactOptional(),
    password_min_numeric_characters: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'Minimum number of numbers required in passwords.' }),
    ).exactOptional(),
    password_min_special_characters: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'Minimum number of symbols required in passwords.' }),
    ).exactOptional(),
    password_reset_frequency: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if users must reset their passwords every specified time period.',
        }),
    ).exactOptional(),
    previous_password_reuse_limit: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({ description: 'Number of previous passwords users are prevented from using.' }),
    ).exactOptional(),
    session_duration: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value indicating time from the last activity a user can remain logged in without activity before being logged out.',
        }),
    ).exactOptional(),
    external_collab_multi_factor_auth_settings: EnterpriseConfigurationItemSchema.and(
      z
        .any()
        .openapi({ description: 'External Collaborators multi-factor authentication settings.' }),
    )
      .and(
        z
          .object({
            value: z
              .xor([
                ExternalCollabSecuritySettingsSchema,
                z
                  .strictObject({})
                  .nullable()
                  .openapi({
                    title: 'OpenAPI 3.0 null schema type',
                    description: 'The definition for a null schema type in OpenAPI `3.0`.',
                  }),
              ])
              .and(z.any().openapi({ description: 'External collab security settings.' }))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    keysafe: EnterpriseConfigurationItemSchema.and(
      z
        .object({
          value: z
            .xor([
              KeysafeSettingsSchema,
              z
                .strictObject({})
                .nullable()
                .openapi({
                  title: 'OpenAPI 3.0 null schema type',
                  description: 'The definition for a null schema type in OpenAPI `3.0`.',
                }),
            ])
            .and(z.any().openapi({ description: 'Keysafe settings.' }))
            .exactOptional(),
        })
        .openapi({ required: [] }),
    ).exactOptional(),
    is_custom_session_duration_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables custom session duration for select users.' }),
    ).exactOptional(),
    custom_session_duration_value: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value indicating duration users from specified groups can remain logged in without activity before being logged out.',
        }),
    ).exactOptional(),
    custom_session_duration_groups: EnterpriseConfigurationItemSchema.and(
      z.any().openapi({ description: 'Groups for custom session duration.' }),
    )
      .and(
        z
          .object({ value: z.array(CustomSessionDurationGroupItemSchema).exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    multi_factor_auth_type: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Managed Users multi-factor authentication requirement method type.',
        }),
    ).exactOptional(),
    enforced_mfa_frequency: EnterpriseConfigurationItemSchema.and(
      z
        .any()
        .openapi({
          description:
            'Managed Users multi-factor authentication frequency. The default authentication frequency is set to 30 days, with authentication time calculated from the most recent successful MFA login.',
        }),
    )
      .and(
        z
          .object({
            value: z
              .object({
                days: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Number of days before the user is required to authenticate again.',
                    example: 30,
                  }),
                hours: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Number of hours before the user is required to authenticate again.',
                    example: 24,
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'The enterprise configuration for the security category.',
    title: 'Enterprise configuration security',
    'x-box-resource-id': 'enterprise_configuration_security_v2025.0',
    'x-box-tag': 'enterprise_configurations',
    required: [],
  })
  .openapi('EnterpriseConfigurationSecurity')

const UserOrGroupReferenceSchema = z
  .object({
    type: z
      .enum(['user', 'group'])
      .exactOptional()
      .openapi({ description: 'The type `user` or `group`.', example: 'user' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user or group.', example: '12345' }),
  })
  .openapi({
    description: 'A reference to a user or group.',
    title: 'User or Group Reference',
    required: [],
  })
  .openapi('UserOrGroupReference')

const EnterpriseFeatureSettingSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The identifier of the enterprise feature setting.',
        example: 'eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=',
      }),
    feature: z
      .object({
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The identifier of the feature.', example: 'canvas' }),
      })
      .exactOptional()
      .openapi({ description: 'The feature.', required: [] }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The state of the feature.', example: 'enabled' }),
    can_configure: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the feature can be configured.', example: true }),
    is_configured: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the feature is configured.', example: true }),
    allowlist: z
      .array(UserOrGroupReferenceSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Enterprise feature setting is enabled for only this set of users and groups.',
      }),
    denylist: z
      .array(UserOrGroupReferenceSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enterprise feature setting is enabled for everyone except this set of users and groups.',
      }),
  })
  .openapi({
    description: 'An enterprise feature setting.',
    title: 'Enterprise feature setting',
    required: [],
  })
  .openapi('EnterpriseFeatureSetting')

const EnterpriseFeatureSettingsItemSchema = EnterpriseConfigurationItemSchema.and(
  z.any().openapi({ description: 'The enterprise feature settings.' }),
)
  .and(
    z.object({ value: EnterpriseFeatureSettingSchema.exactOptional() }).openapi({ required: [] }),
  )
  .openapi({
    description: 'An enterprise feature settings item.',
    title: 'Enterprise feature settings item',
  })
  .openapi('EnterpriseFeatureSettingsItem')

const SharedLinkPermissionsSchema = z
  .object({
    shared_links_option: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The selected option for shared links permissions.',
        example: 'settings_shared_link_preview',
      }),
    default_shared_link_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The default shared link type.',
        example: 'settings_default_shared_link_preview',
      }),
    notes_shared_link_option: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The selected option for notes shared links permissions.',
        example: 'settings_notes_option_to_edit',
      }),
    default_notes_shared_link_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The default notes shared link type.',
        example: 'settings_default_notes_shared_link_to_edit',
      }),
  })
  .openapi({
    description: 'The shared link permissions for the enterprise.',
    title: 'Shared link permissions',
    required: [],
  })
  .openapi('SharedLinkPermissions')

const ListUserSchema = z
  .object({
    id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the user.', example: 1234 }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the user.', example: 'John Doe' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The email of the user.', example: 'johndoe@box.com' }),
  })
  .openapi({ description: 'A user in allowlist or denylist.', title: 'List user', required: [] })
  .openapi('ListUser')

const EnterpriseConfigurationContentAndSharingSchema = z
  .object({
    enterprise_feature_settings: z.array(EnterpriseFeatureSettingsItemSchema).exactOptional(),
    sharing_item_type: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The selected option for the type of items that sharing is enable for.',
        }),
    ).exactOptional(),
    shared_link_company_definition: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of the company for shared links (such as `enterprise_id`, `users_with_email_domain`).',
        }),
    ).exactOptional(),
    shared_link_access: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'The selected option for who has access to shared links.' }),
    ).exactOptional(),
    shared_link_default_access: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'The selected option for the access level of shared links.' }),
    ).exactOptional(),
    shared_link_default_permissions_selected: EnterpriseConfigurationItemSchema.and(
      z.any().openapi({ description: 'The permissions selected for shared links for each type.' }),
    )
      .and(
        z.object({ value: SharedLinkPermissionsSchema.exactOptional() }).openapi({ required: [] }),
      )
      .exactOptional(),
    is_open_custom_urls_disabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Disables custom shared link URLs for public access.' }),
    ).exactOptional(),
    is_custom_domain_hidden_in_shared_link: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Hides the custom domain in shared links.' }),
    ).exactOptional(),
    collaboration_permissions: EnterpriseConfigurationItemSchema.and(
      z.object({ value: CollaborationPermissionsSchema.exactOptional() }).openapi({ required: [] }),
    ).exactOptional(),
    default_collaboration_role: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'The current default collaboration role.' }),
    ).exactOptional(),
    is_invite_privilege_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Restrict invites to only admin, folder owners, and co-owners.' }),
    ).exactOptional(),
    collaboration_restrictions: EnterpriseConfigurationItemSchema.and(
      z.any().openapi({ description: 'The collaboration restrictions for the enterprise.' }),
    )
      .and(
        z
          .object({
            value: z
              .array(
                z
                  .string()
                  .openapi({
                    description:
                      'The collaboration restriction. Possible values: `internal`, `external`.',
                    example: 'internal',
                  }),
              )
              .exactOptional()
              .openapi({ example: ['internal'] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    is_collaborator_invite_links_disabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Disables users to invite collaborators using invite links.' }),
    ).exactOptional(),
    is_invite_group_collaborator_disabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Disables users to invite group collaborators.' }),
    ).exactOptional(),
    is_ownership_transfer_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Prevents ownership transfer to external users.' }),
    ).exactOptional(),
    external_collaboration_status: EnterpriseConfigurationItemSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external collaboration status.\nPossible values: `enable_external_collaboration`, `limit_collaboration_to_allowlisted_domains`, `limit_collaboration_to_users_within_enterprise`.',
        }),
    )
      .and(
        z
          .object({
            value: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The external collaboration status.',
                example: 'enable_external_collaboration',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    external_collaboration_allowlist_users: EnterpriseConfigurationItemSchema.and(
      z.any().openapi({ description: 'The external collaboration allowlist users.' }),
    )
      .and(z.object({ value: z.array(ListUserSchema).exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    is_watermarking_enterprise_feature_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables watermarking enterprise feature.' }),
    ).exactOptional(),
    is_root_content_creation_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only admins can create and delete first-level folders, files, and bookmarks.',
        }),
    ).exactOptional(),
    is_tag_creation_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Only selected users can create tags.' }),
    ).exactOptional(),
    tag_creation_restriction: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'The selected option for tag creation restriction.' }),
    ).exactOptional(),
    is_email_uploads_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables email uploads.' }),
    ).exactOptional(),
    is_custom_settings_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables custom settings.' }),
    ).exactOptional(),
    is_forms_login_required: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Require uploaders to log in with a Box account for Forms.' }),
    ).exactOptional(),
    is_forms_branding_default_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Company brand color and logo defaults to Logo for use on Brand Color for Forms.',
        }),
    ).exactOptional(),
    is_cc_free_trial_active: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Indicates if the enterprise is on a free trial.' }),
    ).exactOptional(),
    is_file_request_editors_allowed: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates if editors are allowed for file requests feature.' }),
    ).exactOptional(),
    is_file_request_branding_default_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Company brand color and logo defaults to Logo for use on Brand Color for File Requests.',
        }),
    ).exactOptional(),
    is_file_request_login_required: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Require uploaders to log in with a Box account for File Requests.',
        }),
    ).exactOptional(),
    is_shared_links_expiration_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables shared links expiration.' }),
    ).exactOptional(),
    shared_links_expiration_days: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'The expiration time for shared links.' }),
    ).exactOptional(),
    is_public_shared_links_expiration_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables public shared links expiration.' }),
    ).exactOptional(),
    public_shared_links_expiration_days: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'The expiration time for public shared links.' }),
    ).exactOptional(),
    shared_expiration_target: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The selected option of types for applying shared link expiration.',
        }),
    ).exactOptional(),
    is_shared_links_expiration_notification_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables shared links expiration notification.' }),
    ).exactOptional(),
    shared_links_expiration_notification_days: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'The number of days before expiration to notify users.' }),
    ).exactOptional(),
    is_shared_links_expiration_notification_prevented: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Prevents users from disabling shared links expiration notification.',
        }),
    ).exactOptional(),
    is_auto_delete_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables auto delete.' }),
    ).exactOptional(),
    auto_delete_days: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'The number of days before auto delete.' }),
    ).exactOptional(),
    is_auto_delete_expiration_modification_prevented: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Prevents users from modifying auto delete expiration.' }),
    ).exactOptional(),
    auto_delete_target: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'The selected option of types for applying auto delete.' }),
    ).exactOptional(),
    is_collaboration_expiration_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables collaboration expiration.' }),
    ).exactOptional(),
    collaboration_expiration_days: EnterpriseConfigurationItemIntegerSchema.and(
      z.any().openapi({ description: 'The number of days before collaboration expiration.' }),
    ).exactOptional(),
    is_collaboration_expiration_modification_prevented:
      EnterpriseConfigurationItemBooleanSchema.and(
        z.any().openapi({ description: 'Prevents users from modifying collaboration expiration.' }),
      ).exactOptional(),
    is_collaboration_expiration_notification_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Enables collaboration expiration notification.' }),
    ).exactOptional(),
    collaboration_expiration_target: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The selected option of types for applying collaboration expiration.',
        }),
    ).exactOptional(),
    trash_auto_clear_time: EnterpriseConfigurationItemIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The time before items are permanently deleted from the trash in seconds.',
        }),
    ).exactOptional(),
    permanent_deletion_access: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({ description: 'The selected option for who can delete items from the trash.' }),
    ).exactOptional(),
    permanent_deletion_allowlist_users: EnterpriseConfigurationItemSchema.and(
      z
        .any()
        .openapi({
          description: 'The allowlist users for permanently deleting items from the trash.',
        }),
    )
      .and(z.object({ value: z.array(ListUserSchema).exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({
    description: 'The enterprise configuration for the content and sharing category.',
    title: 'Enterprise configuration content and sharing',
    'x-box-resource-id': 'enterprise_configuration_content_and_sharing_v2025.0',
    'x-box-tag': 'enterprise_configurations',
    required: [],
  })
  .openapi('EnterpriseConfigurationContentAndSharing')

const UserTrackingCodeSchema = z
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'The ID of the user tracking code.',
        example: 1234,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the user tracking code.', example: 'Employee ID' }),
  })
  .openapi({ description: 'A user tracking code.', title: 'User tracking code', required: [] })
  .openapi('UserTrackingCode')

const EnterpriseConfigurationUserSettingsSchema = z
  .object({
    enterprise_feature_settings: z.array(EnterpriseFeatureSettingsItemSchema).exactOptional(),
    user_invites_expiration_time_frame: EnterpriseConfigurationItemStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the time frame for any unaccepted invitation to your Box enterprise account to expire.',
        }),
    )
      .and(z.any().openapi({ example: { is_used: true, value: '7 days' } }))
      .exactOptional(),
    is_username_change_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if users are restricted from changing their username in Account Settings.',
        }),
    ).exactOptional(),
    is_box_sync_restricted_for_new_users: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Determines if Box Sync is restricted for new users.' }),
    ).exactOptional(),
    is_view_all_users_enabled_for_new_users: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if new users can see all managed users in their contacts when inviting collaborators.',
        }),
    ).exactOptional(),
    is_device_limit_exemption_enabled_for_new_users: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if new users are exempt from the maximum number of devices specified in the Device Protection settings.',
        }),
    ).exactOptional(),
    is_external_collaboration_restricted_for_new_users:
      EnterpriseConfigurationItemBooleanSchema.and(
        z
          .any()
          .openapi({
            description:
              'Determines if new users will not be allowed to create folders that can have external collaborators.',
          }),
      ).exactOptional(),
    is_unlimited_storage_enabled_for_new_users: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Determines if new users are given unlimited storage.' }),
    ).exactOptional(),
    new_user_default_storage_limit: EnterpriseConfigurationItemIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the default storage limit for new users. Does not apply if `is_unlimited_storage_enabled_for_new_users` is true.',
        }),
    ).exactOptional(),
    new_user_default_timezone: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'Determines the default timezone for new users.' }),
    )
      .and(
        z.any().openapi({ example: { is_used: true, value: 'GMT-05:00 America\\/Chicago CDT' } }),
      )
      .exactOptional(),
    new_user_default_language: EnterpriseConfigurationItemStringSchema.and(
      z.any().openapi({ description: 'Determines the default language for new users.' }),
    )
      .and(z.any().openapi({ example: { is_used: true, value: 'English (US)' } }))
      .exactOptional(),
    is_enterprise_sso_required: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Value indicating if SSO is required for all users.' }),
    ).exactOptional(),
    is_enterprise_sso_in_testing: EnterpriseConfigurationItemBooleanSchema.and(
      z.any().openapi({ description: 'Value indicating if SSO is in testing mode for all users.' }),
    ).exactOptional(),
    is_sso_auto_add_groups_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if any new groups received for a user upon login through SSO but not present in the enterprise will be auto added to the enterprise.',
        }),
    ).exactOptional(),
    is_sso_auto_add_user_to_groups_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if a user will be added to enterprise groups received upon user login through SSO.',
        }),
    ).exactOptional(),
    is_sso_auto_remove_user_from_groups_enabled: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if a user will be removed from enterprise groups upon user login through SSO.',
        }),
    ).exactOptional(),
    user_tracking_codes: EnterpriseConfigurationItemSchema.and(
      z
        .any()
        .openapi({
          description:
            'Properties that are assigned as additional values to users, like employee ID or region.',
        }),
    )
      .and(
        z
          .object({ value: z.array(UserTrackingCodeSchema).exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    number_of_user_tracking_codes_remaining: EnterpriseConfigurationItemIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The remaining number of `user_tracking_codes` that can be created.',
        }),
    ).exactOptional(),
    is_instant_login_restricted: EnterpriseConfigurationItemBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines if users are restricted from granting (limited) access for Box Support for troubleshooting.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The enterprise configuration for the user settings category.',
    title: 'Enterprise configuration user settings',
    'x-box-resource-id': 'enterprise_configuration_user_settings_v2025.0',
    'x-box-tag': 'enterprise_configurations',
    required: [],
  })
  .openapi('EnterpriseConfigurationUserSettings')

const ShieldRuleItemSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the shield rule.', example: '1234567890' }),
    type: z
      .literal('shield_rule')
      .exactOptional()
      .openapi({ description: 'The value will always be `shield_rule`.', example: 'shield_rule' }),
    rule_category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category of the shield rule.', example: 'Malicious Content' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the shield rule.', example: 'Block malicious files' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the shield rule.',
        example: 'Blocks files identified as malicious content',
      }),
    priority: z
      .enum(['informational', 'low', 'medium', 'high', 'critical'])
      .exactOptional()
      .openapi({ description: 'The priority level of the shield rule.', example: 'high' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the shield rule was created.',
        example: '2012-12-12T10:53:43-08:00',
      }),
    modified_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the shield rule was last modified.',
        example: '2012-12-12T10:53:43-08:00',
      }),
  })
  .openapi({ description: 'A Shield rule item.', title: 'Shield rule item', required: [] })
  .openapi('ShieldRuleItem')

const EnterpriseConfigurationShieldSchema = z
  .object({
    shield_rules: z
      .array(ShieldRuleItemSchema)
      .exactOptional()
      .openapi({ description: 'The shield rules configuration for the enterprise.' }),
  })
  .openapi({
    description: 'The enterprise configuration for the shield category.',
    title: 'Enterprise configuration shield',
    'x-box-resource-id': 'enterprise_configuration_shield_v2025.0',
    'x-box-tag': 'enterprise_configurations',
    required: [],
  })
  .openapi('EnterpriseConfigurationShield')

const EnterpriseConfigurationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the enterprise configuration which is the ID of the enterprise.',
        example: '11446498',
      }),
    type: z
      .literal('enterprise_configuration')
      .exactOptional()
      .openapi({
        description: 'The value will always be `enterprise_configuration`.',
        example: 'enterprise_configuration',
      }),
    security: z
      .xor([
        EnterpriseConfigurationSecuritySchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .and(
        z
          .any()
          .openapi({ description: 'The enterprise configurations for the security category.' }),
      )
      .exactOptional(),
    content_and_sharing: z
      .xor([
        EnterpriseConfigurationContentAndSharingSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .and(
        z
          .any()
          .openapi({
            description: 'The enterprise configurations for the content and sharing category.',
          }),
      )
      .exactOptional(),
    user_settings: z
      .xor([
        EnterpriseConfigurationUserSettingsSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .and(
        z
          .any()
          .openapi({
            description: 'The enterprise configurations for the user settings category.',
          }),
      )
      .exactOptional(),
    shield: z
      .xor([
        EnterpriseConfigurationShieldSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .and(
        z
          .any()
          .openapi({
            description:
              'The enterprise configurations for the shield category. If shield is turned off for given enterprise, the response will be 404.',
          }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'The enterprise configuration for a given enterprise.',
    title: 'Enterprise configuration',
    'x-box-resource-id': 'enterprise_configuration_v2025.0',
    'x-box-tag': 'enterprise_configurations',
    required: [],
  })
  .openapi('EnterpriseConfiguration')

const ExternalUserDeletionResultSchema = z
  .object({
    user_id: z.string().openapi({ description: 'The ID of the external user.', example: '12345' }),
    status: z
      .int()
      .openapi({
        description: "HTTP status code for a specific user's deletion request.",
        example: 202,
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deletion request status details. This property is only present when the deletion request is not successful.',
      }),
  })
  .openapi({
    description: 'Result of a single external user deletion request.',
    required: ['user_id', 'status'],
    title: 'External User Deletion Result',
  })
  .openapi('ExternalUserDeletionResult')

const UserReferenceSchema = z
  .object({
    type: z
      .literal('user')
      .openapi({ description: 'The value is always `user`.', example: 'user' }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the user.', example: '12345' }),
  })
  .openapi({ description: 'User reference.', required: ['type', 'id'], title: 'User reference' })
  .openapi('UserReference')

const ExternalUsersSubmitDeleteJobRequestSchema = z
  .object({
    external_users: z
      .array(UserReferenceSchema)
      .openapi({ description: 'List of external users to delete.' }),
  })
  .openapi({
    description: 'Request to submit a job to delete external users from the current enterprise.',
    required: ['external_users'],
    title: 'External Users Submit Delete Job Request',
  })
  .openapi('ExternalUsersSubmitDeleteJobRequest')

const ExternalUsersSubmitDeleteJobResponseSchema = z
  .object({
    entries: z
      .array(ExternalUserDeletionResultSchema)
      .openapi({ description: 'Array of results of each external user deletion request.' }),
  })
  .openapi({
    description:
      'Multi-status response containing the result for each external user deletion request.',
    required: ['entries'],
    title: 'External Users Submit Delete Job Response',
    'x-box-resource-id': 'external_users_submit_delete_job_response_v2025.0',
    'x-box-tag': 'external_users',
  })
  .openapi('ExternalUsersSubmitDeleteJobResponse')

const FolderReferenceSchema = z
  .object({
    type: z
      .literal('folder')
      .openapi({ description: 'The value will always be `folder`.', example: 'folder' }),
    id: z.string().openapi({ description: 'ID of the folder.', example: '42037322' }),
  })
  .openapi({
    description: 'Folder reference.',
    required: ['type', 'id'],
    title: 'Folder reference',
  })
  .openapi('FolderReference')

const GroupBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this object.', example: '11446498' }),
    type: z
      .literal('group')
      .openapi({ description: 'The value will always be `group`.', example: 'group' }),
  })
  .openapi({
    description: 'A base representation of a group.',
    required: ['id', 'type'],
    title: 'Group (Base)',
  })
  .openapi('GroupBase')

const GroupMiniSchema = GroupBaseSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the group.', example: 'Support' }),
      group_type: z
        .enum(['managed_group', 'all_users_group'])
        .exactOptional()
        .openapi({ description: 'The type of the group.', example: 'managed_group' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Mini representation of a group, including id and name of\ngroup.',
    title: 'Group (Mini)',
  })
  .openapi('GroupMini')

const HubBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier that represent a Box Hub.\n\nThe ID for any Box Hub can be determined\nby visiting a Box Hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
        example: '12345',
      }),
    type: z
      .literal('hubs')
      .openapi({ description: 'The value will always be `hubs`.', example: 'hubs' }),
  })
  .openapi({
    description: 'The bare basic representation of a Box Hub.',
    required: ['id', 'type'],
    title: 'Box Hub (Base)',
    'x-box-resource-id': 'hub_v2025.0--base',
    'x-box-tag': 'hubs',
    'x-box-variant': 'base',
    'x-box-variants': ['base', 'standard'],
  })
  .openapi('HubBase')

const UserMiniSchema = UserBaseSchema.and(
  z
    .object({
      name: z
        .string()
        .max(50)
        .exactOptional()
        .openapi({ description: 'The display name of this user.', example: 'Aaron Levie' }),
      login: z
        .email()
        .exactOptional()
        .openapi({
          description: 'The primary email address of this user.',
          example: 'ceo@example.com',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A mini representation of a user, as can be returned when nested within other\nresources.',
    title: 'User (Mini)',
  })
  .openapi('UserMini')

const HubSchema = HubBaseSchema.and(
  z
    .object({
      title: z
        .string()
        .exactOptional()
        .openapi({ description: 'The title given to the Box Hub.', example: 'Contracts' }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The description of the Box Hub. First 200 characters are returned.',
          example: 'All the contracts for the company.',
        }),
      created_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date and time when the folder was created. This value may\nbe `null` for some folders such as the root folder or the trash\nfolder.',
          example: '2012-12-12T10:53:43Z',
        }),
      updated_at: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'The date and time when the Box Hub was last updated.',
          example: '2012-12-12T10:53:43Z',
        }),
      created_by: UserMiniSchema.and(
        z.any().openapi({ description: 'The user who created this Box Hub.' }),
      ).exactOptional(),
      updated_by: UserMiniSchema.and(
        z.any().openapi({ description: 'The user who last modified this Box Hub.' }),
      ).exactOptional(),
      view_count: z
        .int32()
        .exactOptional()
        .openapi({ description: 'The number of views for the Box Hub.', example: 506 }),
      is_ai_enabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if AI features are enabled for the Box Hub.',
          example: true,
        }),
      is_collaboration_restricted_to_enterprise: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if collaboration is restricted to the enterprise.',
          example: true,
        }),
      can_non_owners_invite: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if non-owners can invite others to the Box Hub.',
          example: true,
        }),
      can_shared_link_be_created: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if a shared link can be created for the Box Hub.',
          example: true,
        }),
      can_public_shared_link_be_created: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Indicates if a public shared link can be created for the Box Hub.',
          example: true,
        }),
      copy_hub_access: z
        .enum(['all', 'company', 'none'])
        .exactOptional()
        .openapi({
          description:
            'Specifies who is allowed to copy the Box Hub.\n\n* `all` - Any user with access to the Hub can copy it.\n* `company` - Only users within the same enterprise as the Hub can copy it.\n* `none` - No one can copy the Hub.',
          example: 'company',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A standard representation of a Box Hub, as returned from any\nBox Hubs API endpoints by default.',
    title: 'Box Hub',
    'x-box-resource-id': 'hub_v2025.0',
    'x-box-tag': 'hubs',
    'x-box-variant': 'standard',
  })
  .openapi('Hub')

const HubCollaborationUserSchema = UserBaseSchema.and(
  z
    .object({
      name: z
        .string()
        .max(50)
        .exactOptional()
        .openapi({
          description:
            'The display name of this user. If the collaboration status is `pending`, an empty string is returned.',
          example: 'Aaron Levie',
        }),
      login: z
        .email()
        .exactOptional()
        .openapi({
          description:
            'The primary email address of this user. If the collaboration status is `pending`, an empty string is returned.',
          example: 'ceo@example.com',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A mini representation of a user, can be returned only when\nthe status is `pending`.',
    title: 'Box Hub Collaboration User',
  })
  .openapi('HubCollaborationUser')

const HubAccessGranteeSchema = z
  .xor([HubCollaborationUserSchema, GroupMiniSchema])
  .openapi({
    description: 'The user or group that is granted access.',
    title: 'Box Hub Accessible By',
  })
  .openapi('HubAccessGrantee')

const HubDocumentBlockSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this block.',
        example: 'c9588f08-22d7-4d17-8ca9-f1e61c98c0bd',
      }),
    parent_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the parent block. Null for direct children of the page.',
        example: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
      }),
  })
  .openapi({
    description: 'Base block in the Box Hub Document.',
    required: ['id'],
    title: 'Box Hub Document Block',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubDocumentBlock')

const HubCalloutBoxTextBlockSchema = HubDocumentBlockSchema.and(
  z
    .object({
      type: z
        .literal('callout_box')
        .exactOptional()
        .openapi({
          description: 'The type of this block. The value is always `callout_box`.',
          example: 'callout_box',
        }),
      fragment: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Text content of the block. Includes rich text formatting.',
          example: 'This is the callout box',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A callout box block in the Box Hub Document.',
    required: ['id', 'type', 'fragment'],
    title: 'Box Hub Callout Box Text Block',
    'x-box-resource-id': 'hub_callout_box_text_block_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubCalloutBoxTextBlock')

const TermsOfServiceBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this terms of service.',
        example: '11446498',
      }),
    type: z
      .literal('terms_of_service')
      .openapi({
        description: 'The value will always be `terms_of_service`.',
        example: 'terms_of_service',
      }),
  })
  .openapi({
    description: 'The root-level record that is supposed to represent a\nsingle Terms of Service.',
    required: ['id', 'type'],
    title: 'Terms of service (Base)',
  })
  .openapi('TermsOfServiceBase')

const HubCollaborationSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this collaboration.',
        example: '12345678',
      }),
    type: z
      .literal('hub_collaboration')
      .openapi({
        description: 'The value will always be `hub_collaboration`.',
        example: 'hub_collaboration',
      }),
    hub: HubBaseSchema.exactOptional(),
    accessible_by: HubAccessGranteeSchema.exactOptional(),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The level of access granted to a Box Hub.\nPossible values are `editor`, `viewer`, and `co-owner`.',
        example: 'editor',
      }),
    status: z
      .enum(['accepted', 'pending', 'rejected'])
      .exactOptional()
      .openapi({
        description:
          'The status of the collaboration invitation. If the status\nis `pending`, `login` and `name` return an empty string.',
        example: 'accepted',
      }),
    acceptance_requirements_status: z
      .object({
        terms_of_service_requirement: z
          .object({
            is_accepted: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not the terms of service have been accepted.  The\nfield is `null` when there is no terms of service required.',
                example: true,
              }),
            terms_of_service: TermsOfServiceBaseSchema.and(
              z
                .any()
                .openapi({
                  description:
                    'The terms of service that must be accepted before the\ncollaboration can be accepted. The field is `null` when\nthere is no terms of service required.',
                }),
            ).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        strong_password_requirement: z
          .object({
            enterprise_has_strong_password_required_for_external_users: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not the enterprise that owns the content requires\na strong password to collaborate on the content, or enforces\nan exposed password detection for the external collaborators.',
                example: true,
              }),
            user_has_strong_password: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not the user has a strong and not exposed password set\nfor their account. The field is `null` when a strong password is\nnot required.',
                example: true,
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        two_factor_authentication_requirement: z
          .object({
            enterprise_has_two_factor_auth_enabled: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not the enterprise that owns the content requires\ntwo-factor authentication to be enabled in order to\ncollaborate on the content.',
                example: true,
              }),
            user_has_two_factor_authentication_enabled: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not the user has two-factor authentication\nenabled. The field is `null` when two-factor\nauthentication is not required.',
                example: true,
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'A Box Hub collaboration object grants a user or group access \nto a Box Hub with permissions defined by a specific role.',
    required: ['id', 'type'],
    title: 'Box Hub Collaboration',
    'x-box-resource-id': 'hub_collaboration_v2025.0',
    'x-box-tag': 'hub_collaborations',
  })
  .openapi('HubCollaboration')

const HubCollaborationCreateRequestSchema = z
  .object({
    hub: z
      .object({
        type: z
          .literal('hubs')
          .openapi({ description: 'The value will always be `hubs`.', example: 'hubs' }),
        id: z.string().openapi({ description: 'ID of the object.', example: '42037322' }),
      })
      .openapi({
        description: 'Box Hubs reference.',
        required: ['type', 'id'],
        title: 'Box Hubs reference',
      }),
    accessible_by: z
      .object({
        type: z
          .string()
          .openapi({
            description:
              'The type of collaborator to invite.\nPossible values are `user` or `group`.',
            example: 'user',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the user or group.\n\nAlternatively, use `login` to specify a user by email\naddress.',
            example: '23522323',
          }),
        login: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The email address of the user who gets access to the item.\n\nAlternatively, use `id` to specify a user by user ID.',
            example: 'john@example.com',
          }),
      })
      .openapi({
        description: 'The user or group who gets access to the item.',
        required: ['type'],
      }),
    role: z
      .string()
      .openapi({
        description:
          'The level of access granted to a Box Hub.\nPossible values are `editor`, `viewer`, and `co-owner`.',
        example: 'editor',
      }),
  })
  .openapi({
    description: 'Request body for creating a new Box Hub collaboration.',
    required: ['hub', 'accessible_by', 'role'],
    title: 'Box Hub Collaboration Create Request',
  })
  .openapi('HubCollaborationCreateRequest')

const HubCollaborationsSchema = z
  .object({
    entries: z
      .array(HubCollaborationSchema)
      .exactOptional()
      .openapi({ description: 'A list of Box Hub collaborations.' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A list of Box Hub collaborations.',
    title: 'Box Hub Collaborations',
    'x-box-resource-id': 'hub_collaborations_v2025.0',
    'x-box-tag': 'hub_collaborations',
  })
  .openapi('HubCollaborations')

const HubCollaborationUpdateRequestSchema = z
  .object({
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The level of access granted to a Box Hub.\nPossible values are `editor`, `viewer`, and `co-owner`.',
        example: 'editor',
      }),
  })
  .openapi({
    description: 'Request body for updating an existing Box Hub collaboration.',
    title: 'Box Hub Collaboration Update Request',
    required: [],
  })
  .openapi('HubCollaborationUpdateRequest')

const HubCopyRequestSchema = z
  .object({
    title: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Title of the Box Hub. It cannot be empty and should be less than 50 characters.',
        example: 'Hub Title',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the Box Hub.',
        example: 'This is a description of the Box Hub.',
      }),
    include_items: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the items which the user has Editor or Owner access to in the original Box Hub will be copied to the new Box Hub.\nDefaults to false.',
        example: true,
      }),
  })
  .openapi({
    description: 'Request schema for copying a Box Hub.',
    title: 'Box Hub Copy Request',
    required: [],
  })
  .openapi('HubCopyRequest')

const HubCreateRequestSchema = z
  .object({
    title: z
      .string()
      .max(50)
      .openapi({
        description:
          'Title of the Box Hub. It cannot be empty and should be less than 50 characters.',
        example: 'Hub Title',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the Box Hub.',
        example: 'This is a description of the Box Hub.',
      }),
  })
  .openapi({
    description: 'Request schema for creating a new Box Hub.',
    required: ['title'],
    title: 'Box Hub Create Request',
  })
  .openapi('HubCreateRequest')

const HubDividerBlockSchema = HubDocumentBlockSchema.and(
  z
    .object({
      type: z
        .literal('divider')
        .exactOptional()
        .openapi({
          description: 'The type of this block. The value is always `divider`.',
          example: 'divider',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A divider block in the Box Hub Document.',
    required: ['id', 'type'],
    title: 'Box Hub Divider Block',
    'x-box-resource-id': 'hub_divider_block_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubDividerBlock')

const HubParagraphTextBlockSchema = HubDocumentBlockSchema.and(
  z
    .object({
      type: z
        .literal('paragraph')
        .exactOptional()
        .openapi({
          description: 'The type of this block. The value is always `paragraph`.',
          example: 'paragraph',
        }),
      fragment: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Text content of the block. Includes rich text formatting.',
          example: 'This is the paragraph',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A paragraph block in the Box Hub Document.',
    required: ['id', 'type', 'fragment'],
    title: 'Box Hub Paragraph Text Block',
    'x-box-resource-id': 'hub_paragraph_text_block_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubParagraphTextBlock')

const HubSectionTitleTextBlockSchema = HubDocumentBlockSchema.and(
  z
    .object({
      type: z
        .literal('section_title')
        .exactOptional()
        .openapi({
          description: 'The type of this block. The value is always `section_title`.',
          example: 'section_title',
        }),
      fragment: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Text content of the block. Includes rich text formatting.',
          example: 'This is the section title',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A section title block in the Box Hub Document.',
    required: ['id', 'type', 'fragment'],
    title: 'Box Hub Section Title Text Block',
    'x-box-resource-id': 'hub_section_title_text_block_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubSectionTitleTextBlock')

const HubItemListBlockSchema = HubDocumentBlockSchema.and(
  z
    .object({
      type: z
        .literal('item_list')
        .exactOptional()
        .openapi({
          description: 'The type of this block. The value is always `item_list`.',
          example: 'item_list',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'An item list block in the Box Hub Document.',
    required: ['id', 'type'],
    title: 'Box Hub Item List Block',
    'x-box-resource-id': 'hub_item_list_block_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubItemListBlock')

const HubDocumentBlockEntrySchema = z
  .xor([
    HubParagraphTextBlockSchema,
    HubSectionTitleTextBlockSchema,
    HubCalloutBoxTextBlockSchema,
    HubItemListBlockSchema,
    HubDividerBlockSchema,
  ])
  .openapi({
    description:
      'A single block in a Hub Document Blocks list.\nText-bearing block types (`paragraph`, `section_title`, `callout_box`)\ninclude a `fragment` property with rich text content.',
    title: 'Box Hub Document Block Entry',
  })
  .openapi('HubDocumentBlockEntry')

const HubDocumentBlocksSchema = z
  .object({
    entries: z
      .array(HubDocumentBlockEntrySchema)
      .openapi({ description: 'Ordered list of blocks.' }),
    type: z
      .literal('document_blocks')
      .openapi({
        description: 'The value will always be `document_blocks`.',
        example: 'document_blocks',
      }),
  })
  .openapi({ required: ['entries', 'type'] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A list of Hub Document blocks.',
    title: 'Box Hub Document Blocks',
    'x-box-resource-id': 'hub_document_blocks_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubDocumentBlocks')

const HubDocumentPageSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this page.',
        example: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
      }),
    type: z
      .string()
      .openapi({
        description: 'The type of this resource. The value is always `page`.',
        example: 'page',
      }),
    parent_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the parent page. Null for root-level pages.',
        example: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
      }),
    title_fragment: z
      .string()
      .openapi({
        description: 'The title text of the page. Includes rich text formatting.',
        example: 'This is the home page title',
      }),
  })
  .openapi({
    description: 'A Page in the Box Hub Document.',
    required: ['id', 'type', 'title_fragment'],
    title: 'Box Hub Document Page',
    'x-box-resource-id': 'hub_document_page_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubDocumentPage')

const HubDocumentPagesSchema = z
  .object({
    entries: z.array(HubDocumentPageSchema).openapi({ description: 'Ordered list of pages.' }),
    type: z
      .literal('document_pages')
      .openapi({
        description: 'The value will always be `document_pages`.',
        example: 'document_pages',
      }),
  })
  .openapi({ required: ['entries', 'type'] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A list of Hub Document Pages.',
    title: 'Box Hub Document Pages',
    'x-box-resource-id': 'hub_document_pages_v2025.0',
    'x-box-tag': 'hub_document',
  })
  .openapi('HubDocumentPages')

const HubItemSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this item.', example: '12345678' }),
    type: z
      .enum(['file', 'folder', 'web_link'])
      .openapi({ description: 'The type of the item.', example: 'file' }),
    name: z.string().openapi({ description: 'The name of the item.', example: 'My File' }),
  })
  .openapi({
    description: 'A Box Hub Item is a Box Item that is referenced in a Box Hub.',
    required: ['id', 'type', 'name'],
    title: 'Box Hub Item',
    'x-box-resource-id': 'hub_item_v2025.0',
    'x-box-tag': 'hub_items',
  })
  .openapi('HubItem')

const WeblinkReferenceSchema = z
  .object({
    type: z
      .literal('web_link')
      .openapi({ description: 'The value will always be `web_link`.', example: 'web_link' }),
    id: z.string().openapi({ description: 'ID of the web link.', example: '42037322' }),
  })
  .openapi({
    description: 'Web link reference.',
    required: ['type', 'id'],
    title: 'Web link reference',
  })
  .openapi('WeblinkReference')

const HubItemReferenceSchema = z
  .xor([FileReferenceSchema, FolderReferenceSchema, WeblinkReferenceSchema])
  .openapi({
    description: 'Reference to an item that can be added to a Box Hub.',
    title: 'Box Hub Item Reference',
  })
  .openapi('HubItemReference')

const HubItemOperationSchema = z
  .object({
    action: z
      .enum(['add', 'remove'])
      .openapi({
        description: 'The action to perform on a Box Hub item.',
        example: 'add',
        title: 'Box Hub Action',
      }),
    item: HubItemReferenceSchema,
    parent_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the parent block to add the item to. Must be an Item List block. If not provided, the item will be added to the first page's first Item List block.",
        example: 'c9588f08-22d7-4d17-8ca9-f1e61c98c0bd',
      }),
  })
  .openapi({
    description: 'An operation to perform on a Box Hub item.',
    required: ['action', 'item'],
    title: 'Box Hub Item Operation',
  })
  .openapi('HubItemOperation')

const HubItemOperationResultSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'The action performed on the item.', example: 'add' }),
    item: HubItemReferenceSchema.exactOptional(),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the parent block the item was added to.',
        example: '721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status code of the operation.', example: 200 }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error message if the operation failed.',
        example: 'Item not found',
      }),
  })
  .openapi({
    description: 'Result of a Box Hub item operation.',
    title: 'Box Hub Item Operation Result',
    required: [],
  })
  .openapi('HubItemOperationResult')

const HubItemsSchema = z
  .object({
    entries: z
      .array(HubItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of Box Hub items.' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A list of Box Hub items.',
    title: 'Box Hub Items',
    'x-box-resource-id': 'hub_items_v2025.0',
    'x-box-tag': 'hub_items',
  })
  .openapi('HubItems')

const HubItemsManageRequestSchema = z
  .object({
    operations: z
      .array(HubItemOperationSchema)
      .exactOptional()
      .openapi({ description: 'List of operations to perform on Box Hub items.' }),
  })
  .openapi({
    description: 'Request schema for managing Box Hub items.',
    title: 'Box Hub Items Manage Request',
    required: [],
  })
  .openapi('HubItemsManageRequest')

const HubItemsManageResponseSchema = z
  .object({
    operations: z
      .array(HubItemOperationResultSchema)
      .openapi({ description: 'List of operations performed on Box Hub items.' }),
  })
  .openapi({
    description: 'Response schema for the status of Box Hub items management operations.',
    required: ['operations'],
    title: 'Box Hub Items Manage Response',
    'x-box-resource-id': 'hub_items_manage_response_v2025.0',
    'x-box-tag': 'hub_items',
  })
  .openapi('HubItemsManageResponse')

const HubsSchema = z
  .object({
    entries: z.array(HubSchema).exactOptional().openapi({ description: 'A list of hubs.' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        limit: z
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
            type: 'integer',
            format: 'int64',
            description:
              'The limit that was used for these entries. This will be the same as the\n`limit` query parameter unless that value exceeded the maximum value\nallowed. The maximum value varies by API.',
            example: 1000,
          }),
        next_marker: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The marker for the start of the next page of results.',
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          }),
      })
      .openapi({
        description: 'The part of an API response that describes marker\nbased pagination.',
        required: [],
      }),
  )
  .openapi({
    description: 'A paginated list of hubs.',
    title: 'Box Hubs',
    'x-box-resource-id': 'hubs_v2025.0',
    'x-box-tag': 'hubs',
  })
  .openapi('Hubs')

const HubUpdateRequestSchema = z
  .object({
    title: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Title of the Box Hub. It cannot be empty and should be less than 50 characters.',
        example: 'Hub Title',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the Box Hub.',
        example: 'This is a description of the Box Hub.',
      }),
    is_ai_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if AI features are enabled for the Box Hub.',
        example: true,
      }),
    is_collaboration_restricted_to_enterprise: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if collaboration is restricted to the enterprise.',
        example: true,
      }),
    can_non_owners_invite: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if non-owners can invite others to the Box Hub.',
        example: true,
      }),
    can_shared_link_be_created: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if a shared link can be created for the Box Hub.',
        example: true,
      }),
    can_public_shared_link_be_created: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if a public shared link can be created for the Box Hub.',
        example: true,
      }),
    copy_hub_access: z
      .enum(['all', 'company', 'none'])
      .exactOptional()
      .openapi({
        description:
          'Specifies who is allowed to copy the Box Hub.\n\n* `all` - Any user with access to the Hub can copy it.\n* `company` - Only users within the same enterprise as the Hub can copy it.\n* `none` - No one can copy the Hub.',
        example: 'company',
      }),
  })
  .openapi({
    description: 'Request schema for updating an existing Box Hub.',
    title: 'Box Hub Update Request',
    required: [],
  })
  .openapi('HubUpdateRequest')

const ShieldListContentCountrySchema = z
  .object({
    type: z
      .literal('country')
      .openapi({ description: 'The type of content in the shield list.', example: 'country' }),
    country_codes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of country codes values.', example: ['US', 'PL'] }),
  })
  .openapi({
    description: 'Representation of content of a Shield List that contains countries data.',
    required: ['type', 'country_codes'],
    title: 'Shield List Content (Country)',
    'x-box-resource-id': 'shield_list_content__country_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListContentCountry')

const ShieldListContentDomainSchema = z
  .object({
    type: z
      .literal('domain')
      .openapi({ description: 'The type of content in the shield list.', example: 'domain' }),
    domains: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of domain.', example: ['box.com', 'example.com'] }),
  })
  .openapi({
    description: 'Representation of content of a Shield List that contains domains data.',
    required: ['type', 'domains'],
    title: 'Shield List Content (Domain)',
    'x-box-resource-id': 'shield_list_content__domains_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListContentDomain')

const ShieldListContentEmailSchema = z
  .object({
    type: z
      .literal('email')
      .openapi({ description: 'The type of content in the shield list.', example: 'email' }),
    email_addresses: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'List of emails.',
        example: ['example1@box.com', 'example2@gmail.com'],
      }),
  })
  .openapi({
    description: 'Representation of content of a Shield List that contains email addresses data.',
    required: ['type', 'email_addresses'],
    title: 'Shield List Content (Email)',
    'x-box-resource-id': 'shield_list_content__email_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListContentEmail')

const ShieldListContentIpSchema = z
  .object({
    type: z
      .literal('ip')
      .openapi({ description: 'The type of content in the shield list.', example: 'ip' }),
    ip_addresses: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'List of ip addresses and CIDRs.',
        example: ['127.0.0.1', '80.12.12.12/24'],
      }),
  })
  .openapi({
    description: 'Representation of content of a Shield List that contains ip addresses data.',
    required: ['type', 'ip_addresses'],
    title: 'Shield List Content (IP)',
    'x-box-resource-id': 'shield_list_content__ip_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListContentIp')

const ShieldListContentIntegrationSchema = z
  .object({
    type: z
      .literal('integration')
      .openapi({ description: 'The type of content in the shield list.', example: 'integration' }),
    integrations: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the integration.',
                example: '505e40b5-5d04-446a-9268-72a0ccc13669',
              }),
          })
          .openapi({ required: [] }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of integration.' }),
  })
  .openapi({
    description: 'Representation of content of a Shield List that contains integrations data.',
    required: ['type', 'integrations'],
    title: 'Shield List Content (Integration)',
    'x-box-resource-id': 'shield_list_content__integration_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListContentIntegration')

const ShieldListContentSchema = z
  .xor([
    ShieldListContentCountrySchema,
    ShieldListContentDomainSchema,
    ShieldListContentEmailSchema,
    ShieldListContentIpSchema,
    ShieldListContentIntegrationSchema,
  ])
  .openapi({
    description: 'Representation of content of a Shield List.',
    title: 'Shield List Content',
  })
  .openapi('ShieldListContent')

const ShieldListSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the shield list.',
        example: '90fb0e17-c332-40ed-b4f9-fa8908fbbb24',
      }),
    type: z.string().openapi({ description: 'Type of the object.', example: 'shield_list' }),
    name: z
      .string()
      .openapi({ description: 'Name of the shield list.', example: 'Shield List Name' }),
    enterprise: EnterpriseReferenceSchema.and(
      z.any().openapi({ description: 'Enterprise for which this list belongs to.' }),
    ),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of Shield List.',
        example: 'A list of things that are shielded',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'ISO date time string when this shield list object was created.',
        example: '2025-01-13T15:31:01.896Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'ISO date time string when this shield list object was updated.',
        example: '2025-01-13T15:31:01.896Z',
      }),
    content: ShieldListContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of elements in this Shield List and includes the elements themselves.',
        }),
    ),
  })
  .openapi({
    description: 'A standard representation of a Shield List.',
    required: ['id', 'type', 'name', 'content', 'enterprise', 'created_at', 'updated_at'],
    title: 'Shield List',
    'x-box-resource-id': 'shield_list_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldList')

const ShieldListMiniSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique global identifier for this list.',
        example: '12345678-1234-1234-1234-123456789012',
      }),
    type: z
      .literal('shield_list')
      .openapi({ description: 'The type of object.', example: 'shield_list' }),
    name: z.string().openapi({ description: 'Name of Shield List.', example: 'My Shield List' }),
    content: z
      .object({
        type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The type of content in the shield list.',
            example: 'country_code',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'A mini representation of a Shield List.',
    required: ['id', 'type', 'name', 'content'],
    title: 'Shield List (Mini)',
    'x-box-resource-id': 'shield_list_v2025.0--mini',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListMini')

const ShieldListContentRequestSchema = z
  .xor([
    ShieldListContentCountrySchema,
    ShieldListContentDomainSchema,
    ShieldListContentEmailSchema,
    ShieldListContentIpSchema,
  ])
  .openapi({
    description: 'Representation of content of a Shield List.',
    title: 'Shield List Content for requests',
  })
  .openapi('ShieldListContentRequest')

const ShieldListsSchema = z
  .object({
    entries: z
      .array(ShieldListMiniSchema)
      .exactOptional()
      .openapi({ description: 'A list of shield list objects.' }),
  })
  .openapi({ required: [] })
  .openapi({
    description: 'List of Shield List objects.',
    title: 'List of Shield Lists',
    'x-box-resource-id': 'shield_lists_v2025.0',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldLists')

const ShieldListsCreateSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the shield list.', example: 'My Shield List' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of Shield List.',
        example: 'A list of things that are shielded',
      }),
    content: ShieldListContentRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of elements in this Shield List and includes the elements themselves.\nIt is not possible to update Integration Shield Lists by Public API.',
        }),
    ),
  })
  .openapi({
    description: 'The schema for Shield List create request.',
    required: ['name', 'content'],
    title: 'Create Shield List create request',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListsCreate')

const ShieldListsUpdateSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the shield list.', example: 'My Shield List' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of Shield List.',
        example: 'A list of things that are shielded',
      }),
    content: ShieldListContentRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of elements in this Shield List and includes the elements themselves.\nIt is not possible to update Integration Shield Lists by Public API.',
        }),
    ),
  })
  .openapi({
    description: 'The schema for Shield List update request.',
    required: ['name', 'content'],
    title: 'Create Shield List update request',
    'x-box-tag': 'shield_lists',
  })
  .openapi('ShieldListsUpdate')

const BoxVersionHeaderParamsSchema = z
  .literal('2025.0')
  .openapi({
    param: {
      name: 'box-version',
      in: 'header',
      description: 'Version header.',
      allowEmptyValue: false,
      required: true,
      schema: { type: 'string', enum: ['2025.0'] },
      example: '2025.0',
    },
  })

const OAuth2SecuritySecurityScheme = {
  type: 'oauth2',
  description: 'The access token received from the authorization server in the OAuth 2.0 flow.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://account.box.com/api/oauth2/authorize',
      tokenUrl: 'https://api.box.com/oauth2/token',
      scopes: {
        root_readonly: 'Read all files and folders stored in Box',
        root_readwrite: 'Read and write all files and folders stored in Box',
        manage_app_users: 'Provision and manage app users',
        manage_managed_users: 'Provision and manage managed users',
        manage_groups: "Manage an enterprise's groups",
        manage_webhook: 'Create webhooks programmatically through the API',
        manage_enterprise_properties: 'Manage enterprise properties',
        manage_data_retention: 'Manage data retention polices',
        manage_legal_hold: 'Manage Legal Holds',
      },
    },
  },
}

export const getDocgenTemplatesRoute = createRoute({
  method: 'get',
  path: '/docgen_templates',
  tags: ['Box Doc Gen templates'],
  summary: 'List Box Doc Gen templates',
  description: 'Lists Box Doc Gen templates on which the user is a collaborator.',
  operationId: 'get_docgen_templates_v2025.0',
  request: {
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a collection of templates.',
      content: { 'application/json': { schema: DocGenTemplatesSchema } },
    },
    400: {
      description: 'Returned if the user has passed in a malformed marker or limit value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postDocgenTemplatesRoute = createRoute({
  method: 'post',
  path: '/docgen_templates',
  tags: ['Box Doc Gen templates'],
  summary: 'Create Box Doc Gen template',
  description: 'Marks a file as a Box Doc Gen template.',
  operationId: 'post_docgen_templates_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      description: 'Marks the provided file as a Box Doc Gen template.',
      content: { 'application/json': { schema: DocGenTemplateCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The file which has now been marked as a Box Doc Gen template.',
      content: { 'application/json': { schema: DocGenTemplateBaseSchema } },
    },
    400: {
      description:
        'The server cannot or will not process the request due to an apparent client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/docgen_templates/{template_id}',
  tags: ['Box Doc Gen templates'],
  summary: 'Get Box Doc Gen template by ID',
  description: 'Lists details of a specific Box Doc Gen template.',
  operationId: 'get_docgen_templates_id_v2025.0',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'The ID of a Box Doc Gen template.',
            required: true,
            schema: { type: 'string' },
            example: 123,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a template.',
      content: { 'application/json': { schema: DocGenTemplateSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the template is not found or the user does not\nhave access to the associated template.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteDocgenTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/docgen_templates/{template_id}',
  tags: ['Box Doc Gen templates'],
  summary: 'Delete Box Doc Gen template',
  description: 'Unmarks file as Box Doc Gen template.',
  operationId: 'delete_docgen_templates_id_v2025.0',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'ID of the file which will no longer be marked as a Box Doc Gen template.',
            required: true,
            schema: { type: 'string' },
            example: '123',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    204: {
      description:
        'Returns an empty response when a file is no longer marked as a Box Doc Gen template.',
    },
    400: {
      description:
        'The server cannot or will not process the request due to an apparent client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the template is not found or the user does not\nhave access to the associated template.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenTemplatesTemplateIdTagsRoute = createRoute({
  method: 'get',
  path: '/docgen_templates/{template_id}/tags',
  tags: ['Box Doc Gen templates'],
  summary: 'List all Box Doc Gen template tags in template',
  description: 'Lists all tags in a Box Doc Gen template.',
  operationId: 'get_docgen_templates_id_tags_v2025.0',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'ID of template.',
            required: true,
            schema: { type: 'string' },
            example: 123,
          },
        }),
    }),
    query: z.object({
      template_version_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'template_version_id',
            in: 'query',
            description: 'Id of template version.',
            required: false,
            schema: { type: 'string' },
            example: 123,
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of document generation template tags.',
      content: { 'application/json': { schema: DocGenTagsSchema } },
    },
    202: {
      description: 'Processing tags for the file.',
      content: { 'application/json': { schema: DocGenTagsProcessingMessageSchema } },
    },
    400: {
      description: 'Returned if the user has passed in a malformed marker or limit value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description: 'The requested resource could not be found but may be available in the future.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/docgen_jobs/{job_id}',
  tags: ['Box Doc Gen'],
  summary: 'Get Box Doc Gen job by ID',
  description: 'Get details of the Box Doc Gen job.',
  operationId: 'get_docgen_jobs_id_v2025.0',
  request: {
    params: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            description: 'Box Doc Gen job ID.',
            required: true,
            schema: { type: 'string' },
            example: 123,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Details of the Box Doc Gen job.',
      content: { 'application/json': { schema: DocGenJobSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the job is not found or the user does not\nhave access to the associated job.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenJobsRoute = createRoute({
  method: 'get',
  path: '/docgen_jobs',
  tags: ['Box Doc Gen'],
  summary: 'List all Box Doc Gen jobs',
  description: 'Lists all Box Doc Gen jobs for a user.',
  operationId: 'get_docgen_jobs_v2025.0',
  request: {
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of Box Doc Gen jobs.',
      content: { 'application/json': { schema: DocGenJobsFullSchema } },
    },
    400: {
      description: 'Returned if the user has passed in a malformed marker or limit value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenTemplateJobsTemplateIdRoute = createRoute({
  method: 'get',
  path: '/docgen_template_jobs/{template_id}',
  tags: ['Box Doc Gen templates'],
  summary: 'Get list of all Box Doc Gen jobs for template',
  description: 'Lists the users jobs which use this template.',
  operationId: 'get_docgen_template_jobs_id_v2025.0',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'Id of template to fetch jobs for.',
            required: true,
            schema: { type: 'string' },
            example: 123,
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'A single Box Doc Gen template.',
      content: { 'application/json': { schema: DocGenJobsSchema } },
    },
    400: {
      description: 'Returned if the user has passed in a malformed marker or limit value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the template is not found or the user does not\nhave access to the associated template.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocgenBatchJobsBatchIdRoute = createRoute({
  method: 'get',
  path: '/docgen_batch_jobs/{batch_id}',
  tags: ['Box Doc Gen'],
  summary: 'Get Box Doc Gen jobs by batch ID',
  description: 'Lists Box Doc Gen jobs in a batch.',
  operationId: 'get_docgen_batch_jobs_id_v2025.0',
  request: {
    params: z.object({
      batch_id: z
        .string()
        .openapi({
          param: {
            name: 'batch_id',
            in: 'path',
            description: 'Box Doc Gen batch ID.',
            required: true,
            schema: { type: 'string' },
            example: 123,
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a list of Box Doc Gen jobs in a Box Doc Gen batch.',
      content: { 'application/json': { schema: DocGenJobsSchema } },
    },
    400: {
      description: 'Returned if the user has passed in a malformed marker or limit value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the batch is not found or the user does not\nhave access to the associated batch.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postDocgenBatchesRoute = createRoute({
  method: 'post',
  path: '/docgen_batches',
  tags: ['Box Doc Gen'],
  summary: 'Generate document using Box Doc Gen template',
  description: 'Generates a document using a Box Doc Gen template.',
  operationId: 'post_docgen_batches_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: DocGenBatchCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'The created Batch ID.',
      content: { 'application/json': { schema: DocGenBatchBaseSchema } },
    },
    403: {
      description: 'The client does not have access rights to the content or resource requested.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    413: {
      description: 'The request payload exceeds the maximum allowed size.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'The user has sent too many requests in a given amount of time.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected condition was encountered on the server.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getEnterpriseConfigurationsEnterpriseIdRoute = createRoute({
  method: 'get',
  path: '/enterprise_configurations/{enterprise_id}',
  summary: 'Get enterprise configuration',
  description: 'Retrieves the configuration for an enterprise.',
  operationId: 'get_enterprise_configurations_id_v2025.0',
  request: {
    params: z.object({
      enterprise_id: z
        .string()
        .openapi({
          param: {
            name: 'enterprise_id',
            in: 'path',
            description: 'The ID of the enterprise.',
            required: true,
            schema: { type: 'string' },
            example: '3442311',
          },
        }),
    }),
    query: z.object({
      categories: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'categories',
            in: 'query',
            description:
              'A comma-separated list of the enterprise configuration categories.\nAllowed values: `security`, `content_and_sharing`, `user_settings`, `shield`.',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['security', 'content_and_sharing', 'user_settings', 'shield'],
            explode: false,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the enterprise configuration.',
      content: { 'application/json': { schema: EnterpriseConfigurationSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubsRoute = createRoute({
  method: 'get',
  path: '/hubs',
  tags: ['Box Hubs'],
  summary: 'List all Box Hubs',
  description: 'Retrieves all Box Hubs for requesting user.',
  operationId: 'get_hubs_v2025.0',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The query string to search for Box Hubs.',
            required: false,
            schema: { type: 'string' },
            example: 'Box',
          },
        }),
      scope: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            description:
              'The scope of the Box Hubs to retrieve. Possible values include `editable`,\n`view_only`, and `all`. Default is `all`.',
            required: false,
            schema: { type: 'string', default: 'all' },
            example: 'all',
          },
        }),
      sort: z
        .string()
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'The field to sort results by. \nPossible values include `name`, `updated_at`,\n`last_accessed_at`, `view_count`, and `relevance`.\nDefault is `relevance`.',
            required: false,
            schema: { type: 'string', default: 'relevance' },
            example: 'name',
          },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description:
              'The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.',
            required: false,
            schema: { type: 'string', enum: ['ASC', 'DESC'] },
            example: 'ASC',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns all Box Hubs for the given user or enterprise.',
      content: { 'application/json': { schema: HubsSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postHubsRoute = createRoute({
  method: 'post',
  path: '/hubs',
  tags: ['Box Hubs'],
  summary: 'Create Box Hub',
  description: 'Creates a new Box Hub.',
  operationId: 'post_hubs_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: HubCreateRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Returns a new Hub object.',
      content: { 'application/json': { schema: HubSchema } },
    },
    400: {
      description: 'Returned if any of the request parameters are not valid.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returns an error when the user does not have the\nright permissions to create a Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getEnterpriseHubsRoute = createRoute({
  method: 'get',
  path: '/enterprise_hubs',
  tags: ['Box Hubs'],
  summary: 'List all Box Hubs for requesting enterprise',
  description:
    'Retrieves all Box Hubs for a given enterprise.\n\nAdmins or Hub Co-admins of an enterprise\nwith GCM scope can make this call.',
  operationId: 'get_enterprise_hubs_v2025.0',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The query string to search for Box Hubs.',
            required: false,
            schema: { type: 'string' },
            example: 'Box',
          },
        }),
      sort: z
        .string()
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'The field to sort results by.\nPossible values include `name`, `updated_at`,\n`last_accessed_at`, `view_count`, and `relevance`.\nDefault is `relevance`.',
            required: false,
            schema: { type: 'string', default: 'relevance' },
            example: 'name',
          },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description:
              'The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.',
            required: false,
            schema: { type: 'string', enum: ['ASC', 'DESC'] },
            example: 'ASC',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns all Box Hubs for the given user or enterprise.',
      content: { 'application/json': { schema: HubsSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubsHubIdRoute = createRoute({
  method: 'get',
  path: '/hubs/{hub_id}',
  tags: ['Box Hubs'],
  summary: 'Get Box Hub information by ID',
  description: 'Retrieves details for a Box Hub by its ID.',
  operationId: 'get_hubs_id_v2025.0',
  request: {
    params: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'path',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a hub object.',
      content: { 'application/json': { schema: HubSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the hub is not found, or the user does not\nhave access to the hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putHubsHubIdRoute = createRoute({
  method: 'put',
  path: '/hubs/{hub_id}',
  tags: ['Box Hubs'],
  summary: 'Update Box Hub information by ID',
  description: 'Updates a Box Hub. Can be used to change title, description, or Box Hub settings.',
  operationId: 'put_hubs_id_v2025.0',
  request: {
    params: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'path',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: HubUpdateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns a Hub object.',
      content: { 'application/json': { schema: HubSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Hub is not found, or the user does not\nhave access to the Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteHubsHubIdRoute = createRoute({
  method: 'delete',
  path: '/hubs/{hub_id}',
  tags: ['Box Hubs'],
  summary: 'Delete Box Hub',
  description: 'Deletes a single Box Hub.',
  operationId: 'delete_hubs_id_v2025.0',
  request: {
    params: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'path',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    204: { description: 'A blank response is returned if the hub was\nsuccessfully deleted.' },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the hub is not found or has already been deleted, or the user\ndoes not have access to the hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postHubsHubIdCopyRoute = createRoute({
  method: 'post',
  path: '/hubs/{hub_id}/copy',
  tags: ['Box Hubs'],
  summary: 'Copy Box Hub',
  description: 'Creates a copy of a Box Hub.\n\nThe original Box Hub will not be modified.',
  operationId: 'post_hubs_id_copy_v2025.0',
  request: {
    params: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'path',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: HubCopyRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Returns a new Hub object.',
      content: { 'application/json': { schema: HubSchema } },
    },
    403: {
      description:
        'Returns an error when the user does not have the\nright permissions to create a Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubCollaborationsRoute = createRoute({
  method: 'get',
  path: '/hub_collaborations',
  tags: ['Box Hub Collaborations'],
  summary: 'Get Box Hub collaborations',
  description: 'Retrieves all collaborations for a Box Hub.',
  operationId: 'get_hub_collaborations_v2025.0',
  request: {
    query: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'query',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Retrieves the collaborations associated with the specified Box Hub.',
      content: { 'application/json': { schema: HubCollaborationsSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Box Hub is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postHubCollaborationsRoute = createRoute({
  method: 'post',
  path: '/hub_collaborations',
  tags: ['Box Hub Collaborations'],
  summary: 'Create Box Hub collaboration',
  description:
    'Adds a collaboration for a single user or a single group to a Box Hub.\n\nCollaborations can be created using email address, user IDs, or group IDs.',
  operationId: 'post_hub_collaborations_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: HubCollaborationCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns a new Box Hub collaboration object.',
      content: { 'application/json': { schema: HubCollaborationSchema } },
    },
    403: {
      description:
        'Returns an error when the user does not have the\nright permissions to create the collaboration.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubCollaborationsHubCollaborationIdRoute = createRoute({
  method: 'get',
  path: '/hub_collaborations/{hub_collaboration_id}',
  tags: ['Box Hub Collaborations'],
  summary: 'Get Box Hub collaboration by collaboration ID',
  description: 'Retrieves details for a Box Hub collaboration by collaboration ID.',
  operationId: 'get_hub_collaborations_id_v2025.0',
  request: {
    params: z.object({
      hub_collaboration_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_collaboration_id',
            in: 'path',
            description: 'The ID of the hub collaboration.',
            required: true,
            schema: { type: 'string' },
            example: '1234',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a Box Hub collaboration object.',
      content: { 'application/json': { schema: HubCollaborationSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Box Hub is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putHubCollaborationsHubCollaborationIdRoute = createRoute({
  method: 'put',
  path: '/hub_collaborations/{hub_collaboration_id}',
  tags: ['Box Hub Collaborations'],
  summary: 'Update Box Hub collaboration',
  description: 'Updates a Box Hub collaboration.\nCan be used to change the Box Hub role.',
  operationId: 'put_hub_collaborations_id_v2025.0',
  request: {
    params: z.object({
      hub_collaboration_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_collaboration_id',
            in: 'path',
            description: 'The ID of the hub collaboration.',
            required: true,
            schema: { type: 'string' },
            example: '1234',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: HubCollaborationUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns an updated Box Hub collaboration object.',
      content: { 'application/json': { schema: HubCollaborationSchema } },
    },
    403: {
      description:
        'Returns an error if the authenticated user does not have the right\npermissions to update the collaboration.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteHubCollaborationsHubCollaborationIdRoute = createRoute({
  method: 'delete',
  path: '/hub_collaborations/{hub_collaboration_id}',
  tags: ['Box Hub Collaborations'],
  summary: 'Remove Box Hub collaboration',
  description: 'Deletes a single Box Hub collaboration.',
  operationId: 'delete_hub_collaborations_id_v2025.0',
  request: {
    params: z.object({
      hub_collaboration_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_collaboration_id',
            in: 'path',
            description: 'The ID of the hub collaboration.',
            required: true,
            schema: { type: 'string' },
            example: '1234',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    204: {
      description:
        'A blank response is returned if the Box Hub collaboration was\nsuccessfully deleted.',
    },
    404: {
      description:
        'Returns an error if the Box Hub collaboration could not be found,\nor the authenticated user does not have access to the Box Hub collaboration.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubItemsRoute = createRoute({
  method: 'get',
  path: '/hub_items',
  tags: ['Box Hub Items'],
  summary: 'Get Box Hub items',
  description: 'Retrieves all items associated with a Box Hub.',
  operationId: 'get_hub_items_v2025.0',
  request: {
    query: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'query',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
      parent_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parent_id',
            in: 'query',
            description:
              'The unique identifier of an item list block within the Box Hub.\n\nWhen provided, the response will only include items that belong\nto the specified item list, allowing you to filter results to\nitems on a specific page or section.',
            required: false,
            schema: { type: 'string' },
            example: '721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Retrieves the items associated with the specified Box Hub.',
      content: { 'application/json': { schema: HubItemsSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Box Hub is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postHubsHubIdManageItemsRoute = createRoute({
  method: 'post',
  path: '/hubs/{hub_id}/manage_items',
  tags: ['Box Hub Items'],
  summary: 'Manage Box Hub items',
  description: 'Adds and/or removes Box Hub items from a Box Hub.',
  operationId: 'post_hubs_id_manage_items_v2025.0',
  request: {
    params: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'path',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: HubItemsManageRequestSchema } },
      required: true,
    },
  },
  responses: {
    207: {
      description: 'Retrieves the status of all the operations.',
      content: { 'application/json': { schema: HubItemsManageResponseSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Box Hub is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubDocumentPagesRoute = createRoute({
  method: 'get',
  path: '/hub_document_pages',
  tags: ['Box Hub Document'],
  summary: 'List Hub Document Pages',
  description:
    'Retrieves a list of Hub Document Pages for the specified hub.\nIncludes both root-level pages and sub pages.',
  operationId: 'get_hub_document_pages_v2025.0',
  request: {
    query: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'query',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Returns a Hub Document Pages response whose `entries` array contains root-level pages and sub pages. Includes pagination when more results are available.',
      content: {
        'application/json': {
          schema: HubDocumentPagesSchema,
          examples: {
            pages: {
              summary: 'Pages (root and sub pages)',
              value: {
                entries: [
                  {
                    id: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
                    type: 'page',
                    title_fragment: 'This is the home page title !!',
                  },
                  {
                    id: 'df6be226-6a40-429e-afd3-0e9ea73f1990',
                    type: 'page',
                    parent_id: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
                    title_fragment: 'This is the second page title !!',
                  },
                ],
                type: 'document_pages',
                limit: 1000,
                next_marker: null,
              },
            },
            with_pagination: {
              summary: 'With next page marker',
              value: {
                entries: [
                  {
                    id: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
                    type: 'page',
                    title_fragment: 'This is the home page title !!',
                  },
                ],
                type: 'document_pages',
                limit: 1,
                next_marker: 'df6be226-6a40-429e-afd3-0e9ea73f1990',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Returned when the access token provided in the Authorization header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the Box Hub is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getHubDocumentBlocksRoute = createRoute({
  method: 'get',
  path: '/hub_document_blocks',
  tags: ['Box Hub Document'],
  summary: 'List Hub Document blocks for page',
  description:
    'Retrieves a sorted list of all Hub Document Blocks on a specified page in the hub document, excluding items.\nBlocks are hierarchically organized by their `parent_id`.\nBlocks are sorted in order based on user specification in the user interface.\nThe response will only include content blocks that belong to the specified page. This will not include sub pages or sub page content blocks.',
  operationId: 'get_hub_document_blocks_v2025.0',
  request: {
    query: z.object({
      hub_id: z
        .string()
        .openapi({
          param: {
            name: 'hub_id',
            in: 'query',
            description:
              'The unique identifier that represent a hub.\n\nThe ID for any hub can be determined\nby visiting this hub in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/hubs/123`\nthe `hub_id` is `123`.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
      page_id: z
        .string()
        .openapi({
          param: {
            name: 'page_id',
            in: 'query',
            description: 'The unique identifier of a page within the Box Hub.',
            required: true,
            schema: { type: 'string' },
            example: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Returns a Hub Document Blocks response whose `entries` array contains all content blocks of the specified page, except for items.\nTo retrieve items, use the `GET /hub_items` endpoint.',
      content: {
        'application/json': {
          schema: HubDocumentBlocksSchema,
          examples: {
            blocks: {
              summary: 'Blocks for a page',
              value: {
                entries: [
                  {
                    id: 'c9588f08-22d7-4d17-8ca9-f1e61c98c0bd',
                    type: 'section_title',
                    parent_id: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
                    fragment: 'This is the section title',
                  },
                  {
                    id: '721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e',
                    type: 'item_list',
                    parent_id: 'd97f7c26-0d9b-42a1-a00d-6e6db9619e0f',
                  },
                ],
                type: 'document_blocks',
                limit: 1000,
                next_marker: null,
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Returned when the access token provided in the Authorization header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned if the hub or page is not found, or the user does not\nhave access to the Box Hub.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShieldListsRoute = createRoute({
  method: 'get',
  path: '/shield_lists',
  tags: ['Shield lists'],
  summary: 'Get all shield lists in enterprise',
  description: 'Retrieves all shield lists in the enterprise.',
  operationId: 'get_shield_lists_v2025.0',
  request: { headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the list of shield list objects.',
      content: { 'application/json': { schema: ShieldListsSchema } },
    },
  },
})

export const postShieldListsRoute = createRoute({
  method: 'post',
  path: '/shield_lists',
  tags: ['Shield lists'],
  summary: 'Create shield list',
  description: 'Creates a shield list.',
  operationId: 'post_shield_lists_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: ShieldListsCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the shield list object.',
      content: { 'application/json': { schema: ShieldListSchema } },
    },
    409: {
      description: 'The shield list with this name already exists.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShieldListsShieldListIdRoute = createRoute({
  method: 'get',
  path: '/shield_lists/{shield_list_id}',
  tags: ['Shield lists'],
  summary: 'Get single shield list by shield list id',
  description: 'Retrieves a single shield list by its ID.',
  operationId: 'get_shield_lists_id_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shield_list_id: z
        .string()
        .openapi({
          param: {
            name: 'shield_list_id',
            in: 'path',
            description:
              'The unique identifier that represents a shield list.\nThe ID for any Shield List can be determined by the response from the endpoint\nfetching all shield lists for the enterprise.',
            required: true,
            schema: { type: 'string' },
            example: '90fb0e17-c332-40ed-b4f9-fa8908fbbb24 ',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shield list object.',
      content: { 'application/json': { schema: ShieldListSchema } },
    },
    404: {
      description: 'The shield list was not found.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShieldListsShieldListIdRoute = createRoute({
  method: 'put',
  path: '/shield_lists/{shield_list_id}',
  tags: ['Shield lists'],
  summary: 'Update shield list',
  description: 'Updates a shield list.',
  operationId: 'put_shield_lists_id_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shield_list_id: z
        .string()
        .openapi({
          param: {
            name: 'shield_list_id',
            in: 'path',
            description:
              'The unique identifier that represents a shield list.\nThe ID for any Shield List can be determined by the response from the endpoint\nfetching all shield lists for the enterprise.',
            required: true,
            schema: { type: 'string' },
            example: '90fb0e17-c332-40ed-b4f9-fa8908fbbb24 ',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ShieldListsUpdateSchema } } },
  },
  responses: {
    200: {
      description: 'Returns the shield list object.',
      content: { 'application/json': { schema: ShieldListSchema } },
    },
    404: {
      description: 'The shield list was not found.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'The shield list with this name already exists.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShieldListsShieldListIdRoute = createRoute({
  method: 'delete',
  path: '/shield_lists/{shield_list_id}',
  tags: ['Shield lists'],
  summary: 'Delete single shield list by shield list id',
  description: 'Delete a single shield list by its ID.',
  operationId: 'delete_shield_lists_id_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shield_list_id: z
        .string()
        .openapi({
          param: {
            name: 'shield_list_id',
            in: 'path',
            description:
              'The unique identifier that represents a shield list.\nThe ID for any Shield List can be determined by the response from the endpoint\nfetching all shield lists for the enterprise.',
            required: true,
            schema: { type: 'string' },
            example: '90fb0e17-c332-40ed-b4f9-fa8908fbbb24 ',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Shield List correctly removed. No content in response.' },
    400: {
      description: 'The shield list is assigned to some rules and cannot be removed.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description: 'The shield list was not found.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getArchivesRoute = createRoute({
  method: 'get',
  path: '/archives',
  tags: ['Archives'],
  summary: 'List archives',
  description:
    'Retrieves archives for an enterprise.\n\nTo learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).',
  operationId: 'get_archives_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per page.',
            required: false,
            schema: { type: 'integer', format: 'int64', maximum: 1000 },
            example: 1000,
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            description:
              'Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.',
            required: false,
            schema: { type: 'string' },
            example: 'JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of archives in the enterprise.',
      content: { 'application/json': { schema: ArchivesSchema } },
    },
    400: {
      description: 'Returned when some of the parameters are missing or not valid.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have the right\npermissions to list archives.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'Returned when an unexpected client error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postArchivesRoute = createRoute({
  method: 'post',
  path: '/archives',
  tags: ['Archives'],
  summary: 'Create archive',
  description:
    'Creates an archive.\n\nTo learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).',
  operationId: 'post_archives_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the archive.', example: 'Some Archive' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The description of the archive.',
                  example: 'This is an archive for important documents.',
                }),
              storage_policy_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the storage policy that the archive is assigned to.',
                  example: '100001',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns a new archive object.',
      content: { 'application/json': { schema: ArchiveSchema } },
    },
    400: {
      description: 'Returned when some of the parameters are missing or not valid.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have the right\npermissions to create an archive.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when an archive with the given name already exists.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'Returned when an unexpected client error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putArchivesArchiveIdRoute = createRoute({
  method: 'put',
  path: '/archives/{archive_id}',
  tags: ['Archives'],
  summary: 'Update archive',
  description:
    'Updates an archive.\n\nTo learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).',
  operationId: 'put_archives_id_v2025.0',
  request: {
    params: z.object({
      archive_id: z
        .string()
        .openapi({
          param: {
            name: 'archive_id',
            in: 'path',
            description: 'The ID of the archive.',
            required: true,
            schema: { type: 'string' },
            example: '982312',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the archive.', example: 'Some Archive' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The description of the archive.',
                  example: 'This is an archive for important documents.',
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
      description: 'Returns the updated archive object.',
      content: { 'application/json': { schema: ArchiveSchema } },
    },
    400: {
      description: 'Returned when some of the parameters are not valid.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have the right\npermissions to update the archive.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description: 'Returned when the archive is not found.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when an archive with the given name already exists.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'Returned when an unexpected client error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteArchivesArchiveIdRoute = createRoute({
  method: 'delete',
  path: '/archives/{archive_id}',
  tags: ['Archives'],
  summary: 'Delete archive',
  description:
    'Permanently deletes an archive.\n\nTo learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).\n\n<Danger>\nThis endpoint is currently unavailable. Please contact support for assistance.\n</Danger>',
  operationId: 'delete_archives_id_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      archive_id: z
        .string()
        .openapi({
          param: {
            name: 'archive_id',
            in: 'path',
            description: 'The ID of the archive.',
            required: true,
            schema: { type: 'string' },
            example: '982312',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returns an empty response when the archive has been deleted.' },
    400: {
      description: 'Returns an error if the archive is not empty.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returns an error if the user does not have the right\npermissions to delete the archive.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description: 'Returns an error if the archive is not found.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'An unexpected server error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postExternalUsersSubmitDeleteJobRoute = createRoute({
  method: 'post',
  path: '/external_users/submit_delete_job',
  tags: ['External Users'],
  summary: 'Submit job to delete external users',
  description:
    'Delete external users from current user enterprise. This will remove each\nexternal user from all invited collaborations within the current enterprise.',
  operationId: 'post_external_users_submit_delete_job_v2025.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: ExternalUsersSubmitDeleteJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    207: {
      description:
        'Multi-status response containing the result for each external user deletion request.',
      content: { 'application/json': { schema: ExternalUsersSubmitDeleteJobResponseSchema } },
    },
    404: {
      description:
        'Returns an error if the listed external users are not found, or the authenticated\nuser does not have the right permissions to delete external users.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})
