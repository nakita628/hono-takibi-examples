import { createRoute, z } from '@hono/zod-openapi'

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

const AutomateWorkflowReferenceSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The identifier for the Automate workflow instance.',
        example: '545',
      }),
    type: z.literal('workflow').openapi({ description: 'The object type.', example: 'workflow' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name for the Automate workflow.',
        example: 'Contract approval workflow',
      }),
  })
  .openapi({
    description: 'A reference to an Automate workflow.',
    required: ['id', 'type'],
    title: 'Automate Workflow Reference',
  })
  .openapi('AutomateWorkflowReference')

const AutomateWorkflowActionSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The identifier for the Automate action.', example: '981' }),
    type: z
      .literal('workflow_action')
      .openapi({
        description: 'The object type for this workflow action wrapper.',
        example: 'workflow_action',
      }),
    action_type: z
      .literal('run_workflow')
      .openapi({
        description: 'The type that defines the behavior of this action.',
        example: 'run_workflow',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable description of the workflow action.',
        example: 'Runs workflow execution for selected files',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the action was created.',
        example: '2026-04-01T10:00:00.000Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the action was last updated.',
        example: '2026-04-02T11:00:00.000Z',
      }),
    created_by: UserMiniSchema.and(
      z.any().openapi({ description: 'The user that created the action.' }),
    ).exactOptional(),
    updated_by: UserMiniSchema.and(
      z.any().openapi({ description: 'The user that last updated the action.' }),
    ).exactOptional(),
    workflow: AutomateWorkflowReferenceSchema,
  })
  .openapi({
    description: 'An Automate action that can start a workflow.',
    required: ['id', 'type', 'action_type', 'workflow'],
    title: 'Automate Workflow Action',
  })
  .openapi('AutomateWorkflowAction')

const AutomateWorkflowsSchema = z
  .object({
    entries: z
      .array(AutomateWorkflowActionSchema)
      .exactOptional()
      .openapi({ description: 'Workflow actions available for manual start.' }),
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
    description: 'A list of Automate workflow actions.',
    title: 'Automate Workflow Actions',
    'x-box-resource-id': 'automate_workflows_v2026.0',
  })
  .openapi('AutomateWorkflows')

const AutomateWorkflowStartRequestSchema = z
  .object({
    workflow_action_id: z
      .string()
      .openapi({
        description: 'The callable action ID used to trigger the selected workflow.',
        example: '981',
      }),
    file_ids: z
      .array(z.string().openapi({ example: '123' }))
      .min(1)
      .openapi({
        description: 'The files to process with the selected workflow.',
        example: ['123'],
      }),
  })
  .openapi({
    description: 'Request body to start an Automate workflow.',
    required: ['workflow_action_id', 'file_ids'],
    title: 'Automate Workflow Start Request',
  })
  .openapi('AutomateWorkflowStartRequest')

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
    'x-box-resource-id': 'client_error_v2026.0',
    required: [],
  })
  .openapi('ClientError')

const DocumentFailuresSchema = z
  .object({
    errors: z
      .array(z.string())
      .openapi({
        description: 'A list of errors that occurred during the document job.',
        example: ['The source file could not be processed.'],
      }),
    warnings: z
      .array(z.string())
      .openapi({
        description: 'A list of warnings that occurred during the document job.',
        example: ['Some pages were skipped because they were blank.'],
      }),
  })
  .openapi({
    description: 'Errors and warnings that occurred during a document job.',
    required: ['errors', 'warnings'],
    title: 'Document failures',
  })
  .openapi('DocumentFailures')

const FileReferenceSchema = z
  .object({
    type: z
      .literal('file')
      .openapi({ description: 'The value will always be `file`.', example: 'file' }),
    id: z.string().openapi({ description: 'ID of the file.', example: '42037322' }),
  })
  .openapi({ description: 'File reference.', required: ['type', 'id'], title: 'File reference' })
  .openapi('FileReference')

const DocumentSplitPageRangeSchema = z
  .strictObject({
    start: z
      .int32()
      .min(1)
      .openapi({ description: 'The first page (inclusive) included in this slice.', example: 1 }),
    end: z
      .int32()
      .min(1)
      .openapi({ description: 'The last page (inclusive) included in this slice.', example: 10 }),
  })
  .openapi({
    description: 'An inclusive page range used to define one slice of a manual Document Split job.',
    required: ['start', 'end'],
    title: 'Document Split page range',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageRange')

const DocumentSplitCreateRequestManualSchema = z
  .object({
    split_type: z
      .literal('manual')
      .exactOptional()
      .openapi({
        description: 'Discriminator. Must be `manual` for this variant.',
        example: 'manual',
      }),
    version: z
      .literal('v_1')
      .exactOptional()
      .openapi({
        description:
          'The version of the manual split input format. Omitted or `v_1` is the\nlegacy `split_definition` format. Existing clients may omit this field.',
        example: 'v_1',
      }),
    split_definition: z
      .array(DocumentSplitPageRangeSchema)
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Page ranges that define the split. Each entry produces one output file\ncontaining the inclusive page range `[start, end]`.',
        example: [
          { start: 1, end: 5 },
          { start: 6, end: 14 },
        ],
      }),
  })
  .openapi({ required: [] })
  .refine(
    (val) =>
      !z
        .union([
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'prompt')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['prompt'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'page_selection')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['page_selection'] }),
        ])
        .safeParse(val).success,
  )
  .openapi({
    description:
      'Validation rules for creating a Document Split job using caller-supplied page\nranges.',
    required: ['split_type', 'split_definition'],
    title: 'Document Split manual create request',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateRequestManual')

const DocumentSplitPageSelectionSinglePageSchema = z
  .strictObject({
    type: z
      .literal('single_page')
      .openapi({
        description: 'Discriminator. Must be `single_page` for this variant.',
        example: 'single_page',
      }),
    page: z.int32().min(1).openapi({ description: 'A single page number to include.', example: 4 }),
  })
  .openapi({
    description: 'A page selection segment that includes a single page from the source\ndocument.',
    required: ['type', 'page'],
    title: 'Document Split page selection single page',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageSelectionSinglePage')

const DocumentSplitPageSelectionPageRangeSchema = z
  .strictObject({
    type: z
      .literal('page_range')
      .openapi({
        description: 'Discriminator. Must be `page_range` for this variant.',
        example: 'page_range',
      }),
    start: z
      .int32()
      .min(1)
      .openapi({ description: 'The first page (inclusive) included in this segment.', example: 6 }),
    end: z
      .int32()
      .min(1)
      .openapi({ description: 'The last page (inclusive) included in this segment.', example: 8 }),
  })
  .openapi({
    description:
      'A page selection segment that includes an inclusive page range from the\nsource document.',
    required: ['type', 'start', 'end'],
    title: 'Document Split page selection page range',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageSelectionPageRange')

const DocumentSplitPageSelectionSegmentSchema = z
  .xor([DocumentSplitPageSelectionSinglePageSchema, DocumentSplitPageSelectionPageRangeSchema])
  .openapi({
    description:
      'A single page segment within a page selection item. The `type` field\nidentifies whether the segment is a single page or an inclusive page range.',
    title: 'Document Split page selection segment',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageSelectionSegment')

const DocumentSplitPageSelectionItemSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Optional name for the output file (without extension). When omitted the\nsystem generates a sequential name based on the source file name.',
        example: 'exhibits',
      }),
    segments: z
      .array(DocumentSplitPageSelectionSegmentSchema)
      .min(1)
      .openapi({
        description:
          'An ordered list of page segments to include in this output file. Each\nsegment specifies either a single page or a contiguous page range.',
        example: [
          { type: 'single_page', page: 4 },
          { type: 'page_range', start: 6, end: 8 },
        ],
      }),
  })
  .openapi({
    description:
      'A single output file definition within a page selection request. Each item\nproduces one PDF containing the pages specified by its segments array.',
    required: ['segments'],
    title: 'Document Split page selection item',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageSelectionItem')

const DocumentSplitPageSelectionSchema = z
  .array(DocumentSplitPageSelectionItemSchema)
  .min(1)
  .openapi({
    description:
      'Defines a non-sequential page selection for a Document Split job. Each item\nin the array produces one output PDF assembled from the declared page\nsegments.',
    example: [
      {
        name: 'exhibits',
        segments: [
          { type: 'single_page', page: 4 },
          { type: 'single_page', page: 8 },
          { type: 'page_range', start: 6, end: 8 },
        ],
      },
    ],
    title: 'Document Split page selection',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitPageSelection')

const DocumentSplitCreateRequestPageSelectionSchema = z
  .object({
    split_type: z
      .literal('page_selection')
      .exactOptional()
      .openapi({
        description: 'Discriminator. Must be `page_selection` for this variant.',
        example: 'page_selection',
      }),
    version: z
      .literal('v_2')
      .exactOptional()
      .openapi({
        description:
          'The version of the page selection input format. Optional. When provided\nmust be `v_2`.',
        example: 'v_2',
      }),
    page_selection: DocumentSplitPageSelectionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .refine(
    (val) =>
      !z
        .union([
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'prompt')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['prompt'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'split_definition')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['split_definition'] }),
        ])
        .safeParse(val).success,
  )
  .openapi({
    description:
      'Validation rules for creating a Document Split job using non-linear page\nselections. Each item produces one output file from the declared page\nsegments.',
    required: ['split_type', 'page_selection'],
    title: 'Document Split page selection create request',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateRequestPageSelection')

const DocumentSplitCreateRequestSmartSchema = z
  .object({
    split_type: z
      .literal('smart')
      .exactOptional()
      .openapi({
        description: 'Discriminator. Must be `smart` for this variant.',
        example: 'smart',
      }),
    prompt: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'A natural language prompt that guides automatic page range detection.',
        example: 'Split this contract into one file per signed section.',
      }),
  })
  .openapi({ required: [] })
  .refine(
    (val) =>
      !z
        .union([
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'split_definition')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['split_definition'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'page_selection')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['page_selection'] }),
        ])
        .safeParse(val).success,
  )
  .openapi({
    description:
      'Validation rules for creating a Document Split job using Box-generated page\nranges guided by a caller-supplied prompt.',
    required: ['split_type', 'prompt'],
    title: 'Document Split smart create request',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateRequestSmart')

const DocumentSplitCreateRequestTypeSchema = z
  .xor([
    DocumentSplitCreateRequestManualSchema,
    DocumentSplitCreateRequestPageSelectionSchema,
    DocumentSplitCreateRequestSmartSchema,
  ])
  .openapi({
    description: 'Validation rules for the supported Document Split create request types.',
    title: 'Document Split create request type',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateRequestType')

const DocumentSplitOutputSchema = z
  .object({
    generated_files: z
      .array(FileReferenceSchema)
      .exactOptional()
      .openapi({ description: 'References to the files that were created by the split.' }),
    split_definition: z
      .array(DocumentSplitPageRangeSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The page ranges that Box produced for a `smart` split. Each entry\ncorresponds to one generated file with the inclusive page range\n`[start, end]`. Omitted or `null` for `manual` splits, where the\ncaller-supplied ranges are available in `split_input.split_definition`.\nOmitted for `page_selection` splits, where the caller-supplied page\nlayout is available in `split_input.page_selection`.',
        example: [
          { start: 1, end: 10 },
          { start: 11, end: 25 },
        ],
      }),
  })
  .openapi({
    description: 'The set of files produced by a completed Document Split job.',
    title: 'Document Split output',
    'x-box-resource-id': 'document_split_output_v2026.0',
    'x-box-tag': 'document_split',
    required: [],
  })
  .openapi('DocumentSplitOutput')

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

const EnterpriseReferenceSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this enterprise.', example: '1910967' }),
    type: z
      .literal('enterprise')
      .openapi({ description: 'The value will always be `enterprise`.', example: 'enterprise' }),
  })
  .openapi({
    description: 'A reference to an enterprise, used when\nnested within another resource.',
    required: ['type', 'id'],
    title: 'Enterprise reference',
  })
  .openapi('EnterpriseReference')

const DocumentSplitFailuresSchema = DocumentFailuresSchema.openapi({
  description: 'Errors and warnings that occurred during a Document Split job.',
  title: 'Document Split failures',
  'x-box-resource-id': 'document_split_failures_v2026.0',
  'x-box-tag': 'document_split',
}).openapi('DocumentSplitFailures')

const DocumentSplitSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the Document Split job.',
        example: '1748426',
      }),
    type: z
      .literal('document_split')
      .openapi({
        description: 'The value will always be `document_split`.',
        example: 'document_split',
      }),
    source_file: FileReferenceSchema.and(z.any().openapi({ description: 'The file to split.' })),
    status: z
      .enum(['submitted', 'completed', 'failed', 'completed_with_error'])
      .openapi({
        description: 'The current state of the Document Split job.',
        example: 'submitted',
      }),
    split_input: DocumentSplitCreateRequestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The caller-supplied input that was used to perform the split. The\nshape mirrors the request: for a `manual` split, `split_input`\ncontains `split_type` and `split_definition`; for a `page_selection`\nsplit, `split_input` contains `split_type` and `page_selection`; for\na `smart` split, `split_input` contains `split_type` and the\ncaller-supplied `prompt`. For smart splits, the page ranges that Box\nproduced are exposed under `output.split_definition`.',
        }),
    ),
    output: z
      .xor([
        DocumentSplitOutputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The result of the Document Split job. `null` until the job has produced\noutput.',
      }),
    destination_folder: FolderReferenceSchema.and(
      z.any().openapi({ description: 'The folder that received the generated files.' }),
    ),
    input_source: z
      .enum(['api', 'box', 'relay', 'salesforce'])
      .openapi({
        description: 'The system that initiated the request, used for analytics and\ntraceability.',
        example: 'api',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the Document Split job was created.',
        example: '2023-10-26T15:30:00Z',
      }),
    created_by: UserMiniSchema.and(
      z.any().openapi({ description: 'The user who created the Document Split job.' }),
    ).exactOptional(),
    enterprise: EnterpriseReferenceSchema.and(
      z.any().openapi({ description: 'The enterprise that owns the Document Split job.' }),
    ).exactOptional(),
    failures: z
      .xor([
        DocumentSplitFailuresSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Errors and warnings that occurred during the document split. `null` when\nno failures were recorded.',
      }),
    external_id: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'An optional identifier supplied by the caller when the Document Split\njob was created. Returned for correlation only. It is not a Box\nresource ID, is not required to be unique, and cannot be used to\nlook up the job.',
        example: 'invoice-48291',
      }),
  })
  .openapi({
    description:
      'A standard representation of a Document Split job. The job represents a\nrequest to split a paginated source document into multiple files based on\neither a manual set of page ranges, a non-linear page selection, or a\nsmart prompt-driven analysis.',
    required: [
      'id',
      'type',
      'source_file',
      'destination_folder',
      'status',
      'split_input',
      'input_source',
    ],
    title: 'Document Split',
    'x-box-resource-id': 'document_split_v2026.0',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplit')

const DocumentSplitCreateRequestSchema = z
  .object({
    source_file_id: z
      .string()
      .openapi({ description: 'The ID of the source file to split.', example: '12345' }),
    destination_folder_id: z
      .string()
      .openapi({
        description: 'The ID of the folder where the resulting files will be uploaded.',
        example: '14047816008',
      }),
    input_source: z
      .enum(['api', 'box', 'relay', 'salesforce'])
      .openapi({
        description: 'The system that initiated the request, used for analytics and\ntraceability.',
        example: 'api',
      }),
    split_input: DocumentSplitCreateRequestTypeSchema,
    external_id: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'An optional identifier supplied by the caller for this Document Split job.\nThe value is returned on job responses for correlation only. It is not\na Box resource ID, is not required to be unique, and cannot be used to\nlook up the job.',
        example: 'invoice-48291',
      }),
  })
  .openapi({
    description:
      'The request body for creating a Document Split job. The `split_input`\nproperty carries the caller-supplied input that determines how the split\nis performed.',
    required: ['source_file_id', 'destination_folder_id', 'input_source', 'split_input'],
    title: 'Document Split create request',
    'x-box-resource-id': 'document_split_create_request_v2026.0',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateRequest')

const DocumentSplitCreateResponseSchema = z
  .object({
    type: z
      .literal('document_split')
      .openapi({
        description: 'The value will always be `document_split`.',
        example: 'document_split',
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the created Document Split job.',
        example: '1748426',
      }),
  })
  .openapi({
    description:
      'A reference to a newly created Document Split job. Returned when a Document\nSplit job is accepted for asynchronous processing. Clients can poll the\nfull job representation using this ID.',
    required: ['type', 'id'],
    title: 'Document Split create response',
    'x-box-resource-id': 'document_split_create_response_v2026.0',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplitCreateResponse')

const DocumentSplitsSchema = z
  .object({
    entries: z
      .array(DocumentSplitSchema)
      .exactOptional()
      .openapi({ description: 'A list of Document Split jobs.' }),
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
    description: 'A paginated list of Document Split jobs.',
    title: 'Document Splits',
    'x-box-resource-id': 'document_splits_v2026.0',
    'x-box-tag': 'document_split',
  })
  .openapi('DocumentSplits')

const NotesConvertRequestBodySchema = z
  .strictObject({
    content: z
      .string()
      .max(1048576)
      .openapi({
        description:
          'The content to convert to a note. See the `content_format` field for supported formats.',
        example: '# My note\\n\\nHello from Markdown.',
      }),
    content_format: z
      .literal('markdown')
      .openapi({ description: 'Format of the content to convert.', example: 'markdown' }),
    parent: FolderReferenceSchema,
    name: z
      .string()
      .min(1)
      .max(247)
      .openapi({
        description:
          'The name for the created note. The `.boxnote` extension is appended automatically.',
        example: 'Quarterly plan',
      }),
  })
  .openapi({
    description: 'Request body for converting source content into a Box Note file.',
    required: ['content', 'content_format', 'parent', 'name'],
    title: 'Notes convert request body',
    'x-box-tag': 'notes',
  })
  .openapi('NotesConvertRequestBody')

const NotesConvertResponseSchema = z
  .strictObject({
    type: z
      .literal('file')
      .openapi({
        description: 'The Box resource type; always `file` for a Box file.',
        example: 'file',
      }),
    id: z
      .string()
      .openapi({
        description: 'Box file ID of the created `.boxnote` file.',
        example: '1234567890',
      }),
  })
  .openapi({
    description: 'Identifies the created Box Note file.',
    required: ['type', 'id'],
    title: 'Notes convert response',
    'x-box-resource-id': 'notes_convert_created_file_v2026.0',
    'x-box-tag': 'notes',
  })
  .openapi('NotesConvertResponse')

const QueryAncestorReferenceSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the ancestor entity.', example: '789' }),
    type: z
      .string()
      .openapi({
        description: 'The type of the ancestor entity. Possible value: folder.',
        example: 'folder',
      }),
  })
  .openapi({
    description:
      'A reference to an ancestor entity used to restrict query results to that\nentity and its recursive descendants.',
    required: ['id', 'type'],
    title: 'Query ancestor reference',
    'x-box-tag': 'query',
  })
  .openapi('QueryAncestorReference')

const QueryInsightMetricResultSchema = z
  .strictObject({
    type: z.string().openapi({ description: 'The metric type that was computed.', example: 'sum' }),
    values: z
      .record(z.string(), z.number())
      .openapi({
        description:
          'The computed metric result(s), keyed by the metric function (for example\n`sum`, `avg`, `min`, `max`, or `count`).',
        example: { sum: 50 },
      }),
  })
  .openapi({
    description:
      'The computed result for a single metric, including the metric type and its\ncomputed value(s).',
    required: ['type', 'values'],
    title: 'Query insight metric result',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsightMetricResult')

const QueryInsightEntrySchema = z
  .strictObject({
    key: z
      .array(z.string().openapi({ example: 'ContractType1' }))
      .openapi({
        description:
          'The grouping key values associated with the entry. Contains one value per\n`group_by` field for `group` entries, and is empty for `overall` and\n`other` entries.',
        example: ['ContractType1'],
      }),
    type: z
      .enum(['group', 'overall', 'other'])
      .openapi({
        description:
          'The type of insight entry, indicating how the associated metrics are\naggregated.',
        example: 'group',
      }),
    metrics: z
      .record(z.string(), QueryInsightMetricResultSchema)
      .openapi({
        description:
          'A map of metric aliases to their computed results. For `other` entries, the\ncount is reported under the `totalCountBeyondTopGroups` key.',
        example: {
          totalContractValue: { type: 'sum', values: { sum: 180000 } },
          countContractType: { type: 'count', values: { count: 245 } },
        },
      }),
  })
  .openapi({
    description:
      'A single computed insight entry, containing its grouping keys (if applicable)\nand the computed metrics.',
    required: ['key', 'type', 'metrics'],
    title: 'Query insight entry',
    'x-box-resource-id': 'query_insight_entry_v2026.0',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsightEntry')

const QueryInsightsSchema = z
  .strictObject({
    insights: z
      .array(QueryInsightEntrySchema)
      .openapi({
        description:
          'The list of computed insight entries. Each entry corresponds to a group,\nthe overall dataset, or the aggregate of groups outside the top results.',
      }),
  })
  .openapi({
    description: 'The computed results of an insights request, as a list of insight entries.',
    example: {
      insights: [
        {
          key: ['ContractType1'],
          type: 'group',
          metrics: {
            totalContractValue: { type: 'sum', values: { sum: 180000 } },
            countContractType: { type: 'count', values: { count: 245 } },
          },
        },
        {
          key: ['ContractType4'],
          type: 'group',
          metrics: {
            totalContractValue: { type: 'sum', values: { sum: 100000 } },
            countContractType: { type: 'count', values: { count: 185 } },
          },
        },
        {
          key: ['ContractType2'],
          type: 'group',
          metrics: {
            totalContractValue: { type: 'sum', values: { sum: 200000 } },
            countContractType: { type: 'count', values: { count: 150 } },
          },
        },
        {
          key: [],
          type: 'other',
          metrics: { totalCountBeyondTopGroups: { type: 'count', values: { count: 165 } } },
        },
      ],
    },
    required: ['insights'],
    title: 'Query insights',
    'x-box-resource-id': 'query_insights_v2026.0',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsights')

const QueryInsightsGroupBySchema = z
  .strictObject({
    field: z
      .string()
      .openapi({
        description:
          'The fully qualified field name to group by. Supports metadata and item\nproperties.',
        example: 'enterprise_12345678:sales:contractType',
      }),
    bucket_limit: z
      .int32()
      .min(1)
      .max(10)
      .default(5)
      .exactOptional()
      .openapi({
        description: 'The maximum number of buckets to return for the grouping. Defaults to `5`.',
        example: 3,
      }),
  })
  .openapi({
    description:
      'Defines a single grouping criterion for an insights request. Currently only a\nsingle grouping field is supported.',
    required: ['field'],
    title: 'Query insights group by',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsightsGroupBy')

const QueryInsightsMetricDefinitionSchema = z
  .strictObject({
    type: z
      .enum(['sum', 'avg', 'min', 'max', 'count'])
      .openapi({ description: 'The aggregation function to apply.', example: 'sum' }),
    field: z
      .string()
      .openapi({
        description: 'The fully qualified field name on which the metric is computed.',
        example: 'enterprise_12345678:sales:contractValue',
      }),
  })
  .openapi({
    description:
      'Defines a single metric to compute, including the aggregation function and the\nfield it is applied to.',
    required: ['type', 'field'],
    title: 'Query insights metric definition',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsightsMetricDefinition')

const QueryInsightsRequestBodySchema = z
  .strictObject({
    query: z
      .strictObject({
        predicate: z
          .string()
          .openapi({
            description:
              'A logical expression used to filter the dataset prior to metric\ncomputation, similar to an SQL `WHERE` clause. May include\nnamed parameters referenced as `:placeholder`.',
            example:
              'EXISTS(:templateArg) AND box:item:created_at >= :dateArg1 AND box:item:created_at < :dateArg2',
          }),
        params: z
          .record(z.string(), z.any())
          .exactOptional()
          .openapi({
            description:
              'A map of placeholder names (without the `:` prefix) to their values.\nRequired only when the predicate contains parameter placeholders. The\ntype of each value must match the type of the field it is compared to.',
            example: {
              templateArg: 'enterprise_12345678:sales',
              dateArg1: '2025-06-01T00:00:00-07:00',
              dateArg2: '2025-07-01T00:00:00-07:00',
            },
          }),
        ancestors: z
          .array(QueryAncestorReferenceSchema)
          .exactOptional()
          .openapi({
            description:
              'Restricts results to items contained within any of the specified\nancestors. The user must have access to every listed ancestor. When\nomitted, insights are computed across all accessible items.',
          }),
        group_by: z
          .array(QueryInsightsGroupBySchema)
          .exactOptional()
          .openapi({
            description:
              'Defines how data is grouped for insights computation. Currently only a\nsingle grouping field is supported.',
          }),
      })
      .openapi({
        description:
          'The filtering and grouping definition. Filters are applied first, followed\nby grouping, before metrics are computed.',
        required: ['predicate'],
      }),
    metrics: z
      .record(z.string(), QueryInsightsMetricDefinitionSchema)
      .refine((val) => Object.keys(val).length <= 10)
      .openapi({
        description:
          'A map of user-defined metric aliases to their definitions. A maximum of 10\nmetrics may be defined. Each alias must be a unique, non-empty string of up\nto 256 characters, containing only letters, digits, `_`, `-`, or `.`, and\nmust not start with a digit, `_`, `-`, or `.`. May be empty to request\nonly a total count.',
        example: {
          totalContractValue: { type: 'sum', field: 'enterprise_12345678:sales:contractValue' },
          countContractType: { type: 'count', field: 'enterprise_12345678:sales:contractType' },
        },
      }),
  })
  .openapi({
    description:
      'Request body describing the filtering, grouping, and metrics for an insights\ncomputation.',
    example: {
      query: {
        predicate:
          'EXISTS(:templateArg) AND box:item:created_at >= :dateArg1 AND box:item:created_at < :dateArg2',
        params: {
          templateArg: 'enterprise_12345678:sales',
          dateArg1: '2025-06-01T00:00:00-07:00',
          dateArg2: '2025-07-01T00:00:00-07:00',
        },
        ancestors: [{ id: '123', type: 'folder' }],
        group_by: [{ field: 'enterprise_12345678:sales:contractType', bucket_limit: 3 }],
      },
      metrics: {
        totalContractValue: { type: 'sum', field: 'enterprise_12345678:sales:contractValue' },
        countContractType: { type: 'count', field: 'enterprise_12345678:sales:contractType' },
      },
    },
    required: ['query', 'metrics'],
    title: 'Query insights request body',
    'x-box-tag': 'query',
  })
  .openapi('QueryInsightsRequestBody')

const QueryOrderBySchema = z
  .strictObject({
    field_key: z
      .string()
      .openapi({
        description: 'The fully qualified field key to sort by.',
        example: 'enterprise_12345678:book:purchasePrice',
      }),
    direction: z
      .enum(['asc', 'desc'])
      .openapi({ description: 'The direction in which results are ordered.', example: 'asc' }),
  })
  .openapi({
    description:
      'A single sorting criterion applied to the query result set. Multiple criteria\nare applied sequentially in the order specified.',
    required: ['field_key', 'direction'],
    title: 'Query order by',
    'x-box-tag': 'query',
  })
  .openapi('QueryOrderBy')

const QueryRequestBodySchema = z
  .strictObject({
    query: z
      .strictObject({
        predicate: z
          .string()
          .openapi({
            description:
              'A logical expression used to filter the dataset, similar to an SQL\n`WHERE` clause. May include named parameters referenced as\n`:placeholder`.',
            example: 'enterprise_12345678:book:purchasePrice >= :price AND box:item:name = :name',
          }),
        params: z
          .record(z.string(), z.any())
          .exactOptional()
          .openapi({
            description:
              'A map of placeholder names (without the `:` prefix) to their values.\nRequired only when the predicate contains parameter placeholders. The\ntype of each value must match the type of the field it is compared to.',
            example: { price: 100, name: 'The Hobbit' },
          }),
        ancestors: z
          .array(QueryAncestorReferenceSchema)
          .exactOptional()
          .openapi({
            description:
              'Restricts results to the specified ancestor entities and their\nrecursive descendants. The user must have read access to every listed\nancestor.',
          }),
      })
      .openapi({
        description:
          'The query definition, including the filtering predicate and its optional\nparameters and ancestor restrictions.',
        required: ['predicate'],
      }),
    order_by: z
      .array(QueryOrderBySchema)
      .exactOptional()
      .openapi({
        description:
          'The sorting criteria for the result set. Entries are applied sequentially\nto define multi-level sorting.',
      }),
    limit: z
      .int32()
      .min(0)
      .max(100)
      .default(50)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of results to return. Defaults to `50` when not\nprovided.',
        example: 1,
      }),
    fields: z
      .array(z.string().openapi({ example: 'box:item:name' }))
      .exactOptional()
      .openapi({
        description:
          'Controls which additional fields are included in each result entry. Each\nvalue must be one of: a fully qualified item field key (for example\n`box:item:name`), a metadata template key to hydrate the full template (for\nexample `enterprise_12345678:project`), or a specific metadata template\nfield key to hydrate a single field from the template (for example\n`enterprise_12345678:project:name`). When omitted, entries include only the\nitem type and identifier.',
        example: ['box:item:name', 'enterprise_12345678:book'],
      }),
    marker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque token returned from a previous response, used to continue\nretrieval. When provided, all other request parameters must exactly match\nthose of the original request.',
        example: 'xppy0jjG1kBRSc7NBBSgQmBz1Gk6VaQdg5Vyb+Ob0iA=',
      }),
  })
  .openapi({
    description:
      'Request body describing the query to run, including the filtering predicate,\noptional sorting, pagination, and the fields to return for each result.',
    example: {
      query: {
        predicate: 'enterprise_12345678:book:purchasePrice >= :price AND box:item:name = :name',
        params: { price: 100, name: 'The Hobbit' },
        ancestors: [{ id: '789', type: 'folder' }],
      },
      order_by: [{ field_key: 'enterprise_12345678:book:purchasePrice', direction: 'asc' }],
      limit: 1,
      fields: ['box:item:name', 'enterprise_12345678:book'],
    },
    required: ['query'],
    title: 'Query request body',
    'x-box-tag': 'query',
  })
  .openapi('QueryRequestBody')

const QueryResultEntrySchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the matching item.', example: '12345' }),
    type: z.string().openapi({ description: 'The type of the matching item.', example: 'file' }),
  })
  .catchall(z.any())
  .openapi({
    description:
      'A single item matching the query. Always includes the item `type` and `id`.\nIf a `fields` parameter was specified in the request, then additional item\nand/or metadata fields will be provided.',
    required: ['id', 'type'],
    title: 'Query result entry',
    'x-box-resource-id': 'query_result_entry_v2026.0',
    'x-box-tag': 'query',
  })
  .openapi('QueryResultEntry')

const QueryResultsSchema = z
  .strictObject({
    entries: z
      .array(QueryResultEntrySchema)
      .openapi({ description: 'The list of items matching the query predicate.' }),
    next_marker: z
      .string()
      .nullable()
      .openapi({
        description:
          'The marker for the start of the next page of results. When `null`, there\nare no further results available.',
        example: 'xppy0jjG1kBRSc7NBBSgQmBz1Gk6VaQdg5Vyb+Ob0iA=',
      }),
    limit: z
      .int32()
      .openapi({
        description:
          'The limit that was used for this request. This will be the same as the limit query \nparameter unless that value exceeded the maximum value allowed.',
        example: 50,
      }),
  })
  .openapi({
    description:
      'A paginated list of items matching the query, using milestone-based marker\npagination.',
    example: {
      entries: [
        {
          id: '12345',
          type: 'file',
          box: { item: { name: 'My Form' } },
          enterprise_12345678: {
            book: {
              $parent: 'file_12345',
              $scope: 'enterprise_12345678',
              $template: 'book',
              $version: 4,
              isbn: '1871263670',
              purchasePrice: 234.57,
              publicationYear: '1937',
            },
          },
        },
      ],
      next_marker: 'xppy0jjG1kBRSc7NBBSgQmBz1Gk6VaQdg5Vyb+Ob0iA=',
      limit: 1,
    },
    required: ['entries', 'next_marker', 'limit'],
    title: 'Query results',
    'x-box-resource-id': 'query_results_v2026.0',
    'x-box-tag': 'query',
  })
  .openapi('QueryResults')

const ShuttleAgentCredentialsSchema = z
  .object({
    registration_token: z
      .string()
      .openapi({
        description:
          'The installation token to paste into the Windows agent installer to\nregister the agent.',
        example: 'eyJhbGciOi...',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the registration token expires and can no longer be used.',
        example: '2026-03-16T12:00:00Z',
      }),
  })
  .openapi({
    description:
      'The installation credentials issued for a Windows shuttle system. The\nregistration token is pasted into the Windows agent installer to register\nthe agent with its system.',
    required: ['registration_token', 'expires_at'],
    title: 'Shuttle agent credentials',
    'x-box-resource-id': 'shuttle_agent_credentials_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleAgentCredentials')

const ShuttleSubjectRoleSchema = z
  .enum(['owner', 'creator', 'updater', 'namespace_account', 'sharee', 'account_holder', 'unknown'])
  .openapi({
    description: 'A role a source subject holds on the source system.',
    example: 'owner',
    title: 'Shuttle subject role',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubjectRole')

const ShuttleSubjectSchema = z
  .object({
    type: z
      .enum(['user', 'group'])
      .openapi({ description: 'Whether this subject is a user or a group.', example: 'user' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The platform-native identifier of the subject. `null` when the system\ndoes not provide one.',
        example: 'sp-user-001',
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email address of the subject. `null` when unknown.',
        example: 'user@example.com',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display name of the subject. `null` when unknown.',
        example: 'Jane Doe',
      }),
    roles: z
      .array(ShuttleSubjectRoleSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Roles this subject holds on the source. `null` when no roles are known.',
        example: ['owner'],
      }),
  })
  .openapi({
    description: 'A subject discovered on the source migration system, such as a user or\ngroup.',
    required: ['type'],
    title: 'Shuttle subject',
    'x-box-resource-id': 'shuttle_subject_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubject')

const ShuttleTargetSubjectSchema = z
  .object({
    type: z
      .enum(['user', 'group'])
      .openapi({ description: 'Whether the Box target is a user or a group.', example: 'user' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The Box user or group ID. `null` when the mapping was not created\nthrough this API and is identified by email (user) or name (group)\ninstead. Skip is represented by `target: null`, not a missing `id`.\nCreate and update always send `id`.',
        example: '12345678',
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email address of the target. `null` when unknown.',
        example: 'user@example.com',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display name of the target. `null` when unknown.',
        example: 'Jane Doe',
      }),
  })
  .openapi({
    description: 'A Box user or group that a source subject is mapped to.',
    required: ['type'],
    title: 'Shuttle target subject',
    'x-box-resource-id': 'shuttle_target_subject_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleTargetSubject')

const ShuttleDiscoveredSubjectSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the discovered subject.',
        example: '6a315c0754833bfc5df067bf',
      }),
    type: z
      .literal('shuttle_discovered_subject')
      .openapi({
        description: 'The value will always be `shuttle_discovered_subject`.',
        example: 'shuttle_discovered_subject',
      }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this subject belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    revision: z
      .int32()
      .openapi({
        description: 'The scan revision this discovered subject belongs to.',
        example: 3,
      }),
    source: ShuttleSubjectSchema.and(
      z.any().openapi({ description: 'The source subject as discovered.' }),
    ),
    suggested_target: z
      .xor([
        ShuttleTargetSubjectSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'A suggested Box target inferred during the scan. `null` when no\nsuggestion was made.',
        example: { type: 'user', id: '12345678', email: 'user@example.com', name: 'Jane Doe' },
      }),
  })
  .openapi({
    description:
      'A subject discovered on the source system during a scan, with an optional\nsuggested Box target.',
    required: ['id', 'type', 'job_id', 'revision', 'source'],
    title: 'Shuttle discovered subject',
    'x-box-resource-id': 'shuttle_discovered_subject_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleDiscoveredSubject')

const ShuttleDiscoveredSubjectsSchema = z
  .object({
    entries: z
      .array(ShuttleDiscoveredSubjectSchema)
      .openapi({ description: 'A list of discovered subjects.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of subjects discovered on the source system.',
    title: 'Shuttle discovered subjects',
    'x-box-resource-id': 'shuttle_discovered_subjects_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleDiscoveredSubjects')

const ShuttleJobPermissionConflictStrategySchema = z
  .enum([
    'preserve_structure_restrict_sharing',
    'preserve_structure_expand_sharing',
    'preserve_sharing_modify_structure',
    'warn_permissions_conflicts',
  ])
  .openapi({
    description: 'The strategy used to resolve permission conflicts.',
    example: 'preserve_structure_restrict_sharing',
    title: 'Shuttle job permission conflict strategy',
    'x-box-resource-id': 'shuttle_job_permission_conflict_strategy_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobPermissionConflictStrategy')

const ShuttleJobSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle job.',
        example: '6a3ba68e810d9156194530a1',
      }),
    type: z
      .literal('shuttle_job')
      .openapi({ description: 'The value will always be `shuttle_job`.', example: 'shuttle_job' }),
    name: z
      .string()
      .openapi({
        description: 'The human-readable name of the shuttle job.',
        example: 'Q4 SharePoint to Box',
      }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional free-form comment describing the shuttle job.',
        example: 'Migrating the finance department archives.',
      }),
    job_type: z
      .enum(['transfer', 'analysis'])
      .openapi({ description: 'The type of work the shuttle job performs.', example: 'transfer' }),
    state: z
      .string()
      .openapi({
        description:
          'The current state of the shuttle job. This is an open string whose set\nof values is expected to grow; the currently documented values include\n`created`, `started`, `stopped`, `completed`, `failed`, `invalid`, and\n`unknown`. Clients should treat any value they do not recognize as\n`unknown`.',
        example: 'created',
      }),
    mapping_state: z
      .string()
      .openapi({
        description:
          'The current mapping-preparation state of the job. This is an open string\nwhose set of values is expected to grow; the currently documented values\ninclude `awaiting_path_mapping`, `importing_paths`,\n`paths_import_rejected`, `paths_invalid`, `paths_ready`,\n`scanning_source`, `source_scan_failed`, `source_scan_out_of_date`,\n`awaiting_subject_mapping`, `importing_subjects`,\n`subjects_import_rejected`, `mapping_complete`, `building_map`,\n`map_build_failed`, `map_out_of_date`, and `ready`.\n`paths_import_rejected` means the last path-mapping spreadsheet was\nrejected or failed and the path mappings have not been changed since;\nit clears on the next import or the next manual path-mapping change.\n`subjects_import_rejected` means the last subject-mapping spreadsheet\nwas rejected or failed and the subject mappings have not been changed\nsince; it clears on the next import or the next manual subject-mapping\nchange.',
        example: 'awaiting_path_mapping',
      }),
    source_system: z
      .object({
        type: z
          .literal('shuttle_system')
          .openapi({
            description: 'The value will always be `shuttle_system`.',
            example: 'shuttle_system',
          }),
        id: z
          .string()
          .openapi({
            description: 'The unique identifier for the source system.',
            example: '6a3ba68e810d9156194530a1',
          }),
        name: z
          .string()
          .openapi({
            description: 'The human-readable name of the source system.',
            example: 'SharePoint',
          }),
      })
      .openapi({
        description: 'The source system the shuttle job migrates content from.',
        required: ['type', 'id', 'name'],
        'x-box-tag': 'shuttle',
      }),
    account_mapping: z
      .object({
        is_enabled: z
          .boolean()
          .openapi({
            description: 'Whether account mapping is enabled for the shuttle job.',
            example: true,
          }),
        permission_conflict_strategy: z
          .xor([
            ShuttleJobPermissionConflictStrategySchema,
            z
              .strictObject({})
              .nullable()
              .openapi({
                title: 'OpenAPI 3.0 null schema type',
                description: 'The definition for a null schema type in OpenAPI `3.0`.',
              }),
          ])
          .exactOptional()
          .openapi({
            description: 'The strategy used to resolve permission conflicts. `null` when\nunset.',
            example: 'preserve_structure_restrict_sharing',
          }),
        are_external_shares_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether external shares are mapped during the migration.',
            example: false,
          }),
        are_permissions_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether permissions are mapped during the migration.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The account mapping configuration that controls how source identities\nand permissions are translated into Box.',
        required: ['is_enabled'],
        'x-box-tag': 'shuttle',
      }),
    tags: z
      .array(
        z
          .string()
          .openapi({ description: 'A single tag associated with the shuttle job.', example: 'q4' }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of free-form tags associated with the shuttle job.',
        example: ['q4', 'hr'],
      }),
    settings: z
      .object({
        bandwidth_limit_bytes_per_sec: z
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
            description:
              'The maximum transfer bandwidth in bytes per second. `null` when\nunlimited.',
            example: 10485760,
          }),
        are_deletions_mirrored: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether deletions in the source system are mirrored in Box.',
            example: false,
          }),
        are_file_versions_synced: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether prior file versions are synced during the migration.',
            example: true,
          }),
        max_file_versions: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The maximum number of file versions to sync. `null` when unlimited.',
            example: 10,
          }),
        is_overwrite_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether existing files in Box are overwritten.',
            example: false,
          }),
        are_completed_mappings_skipped_on_rerun: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether mappings that already completed successfully are skipped when\nthe job is rerun.',
            example: true,
          }),
        is_content_scanning_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether migrated content is scanned during the migration. Applies\nonly when the source system supports content scanning; ignored\notherwise.',
            example: false,
          }),
        include_shared_source_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the source are included in the migration.\nApplies only when the source system supports shared folders; ignored\notherwise.',
            example: true,
          }),
        include_shared_destination_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the destination are included in the\nmigration. Applies only when the destination system supports shared\nfolders; ignored otherwise.',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The tunable settings that control how the shuttle job runs.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
  })
  .openapi({
    description:
      'A standard representation of a shuttle job. A shuttle job describes a\nmigration of content from a source system into Box, including its current\nstate, mapping-preparation state, and mapping configuration.',
    required: ['id', 'type', 'name', 'job_type', 'state', 'mapping_state', 'source_system'],
    title: 'Shuttle job',
    'x-box-resource-id': 'shuttle_job_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJob')

const ShuttleJobCreateRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .openapi({
        description: 'The human-readable name of the shuttle job.',
        example: 'Q4 SharePoint to Box',
      }),
    job_type: z
      .enum(['transfer', 'analysis'])
      .openapi({ description: 'The type of work the shuttle job performs.', example: 'transfer' }),
    source_system_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the source system to migrate from.',
        example: '6a3ba68e810d9156194530a1',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional free-form comment describing the shuttle job.',
        example: 'Migrating the finance department archives.',
      }),
    tags: z
      .array(
        z
          .string()
          .openapi({ description: 'A single tag associated with the shuttle job.', example: 'q4' }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of free-form tags associated with the shuttle job.',
        example: ['q4', 'hr'],
      }),
    account_mapping: z
      .object({
        is_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether account mapping is enabled for the shuttle job. Defaults to\n`false` when `account_mapping` is omitted on create.',
            example: true,
          }),
        permission_conflict_strategy: z
          .xor([
            ShuttleJobPermissionConflictStrategySchema,
            z
              .strictObject({})
              .nullable()
              .openapi({
                title: 'OpenAPI 3.0 null schema type',
                description: 'The definition for a null schema type in OpenAPI `3.0`.',
              }),
          ])
          .exactOptional()
          .openapi({
            description: 'The strategy used to resolve permission conflicts. `null` when\nunset.',
            example: 'preserve_structure_restrict_sharing',
          }),
        are_external_shares_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether external shares are mapped during the migration.',
            example: false,
          }),
        are_permissions_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether permissions are mapped during the migration.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The account mapping configuration that controls how source identities\nand permissions are translated into Box. When this object is omitted,\nthe job is created with `is_enabled` set to `false`.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
    settings: z
      .object({
        bandwidth_limit_bytes_per_sec: z
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
            description:
              'The maximum transfer bandwidth in bytes per second. `null` when\nunlimited.',
            example: 10485760,
          }),
        are_deletions_mirrored: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether deletions in the source system are mirrored in Box.',
            example: false,
          }),
        are_file_versions_synced: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether prior file versions are synced during the migration.',
            example: true,
          }),
        max_file_versions: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The maximum number of file versions to sync. `null` when unlimited.',
            example: 10,
          }),
        is_overwrite_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether existing files in Box are overwritten.',
            example: false,
          }),
        are_completed_mappings_skipped_on_rerun: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether mappings that already completed successfully are skipped when\nthe job is rerun.',
            example: true,
          }),
        is_content_scanning_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether migrated content is scanned during the migration. Applies\nonly when the source system supports content scanning; ignored\notherwise.',
            example: false,
          }),
        include_shared_source_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the source are included in the migration.\nApplies only when the source system supports shared folders; ignored\notherwise.',
            example: true,
          }),
        include_shared_destination_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the destination are included in the\nmigration. Applies only when the destination system supports shared\nfolders; ignored otherwise.',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The tunable settings that control how the shuttle job runs.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
  })
  .openapi({
    description: 'The request body used to create a new shuttle job.',
    required: ['name', 'job_type', 'source_system_id'],
    title: 'Shuttle job create request',
    'x-box-resource-id': 'shuttle_job_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobCreateRequest')

const ShuttleJobsSchema = z
  .object({
    entries: z.array(ShuttleJobSchema).openapi({ description: 'A list of shuttle jobs.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle jobs.',
    title: 'Shuttle jobs',
    'x-box-resource-id': 'shuttle_jobs_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobs')

const ShuttleJobScheduleTriggerByTimeSchema = z
  .object({
    type: z
      .literal('by_time')
      .openapi({ description: 'The value will always be `by_time`.', example: 'by_time' }),
    start_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/)
      .openapi({
        description:
          'The local wall-clock time when the schedule should first start a\nrun, without an offset or `Z` suffix. Combined with `time_zone` to\ndetermine the instant, including DST.',
        example: '2026-03-16T09:00:00',
      }),
    time_zone: z
      .string()
      .openapi({
        description:
          'The IANA time zone that gives `start_at` its calendar meaning (for\nexample `America/Los_Angeles`). Recurrence and DST transitions are\nevaluated in this zone.',
        example: 'America/Los_Angeles',
      }),
    repeat: z
      .enum(['none', 'daily', 'weekly', 'weekdays', 'weekends'])
      .openapi({
        description: 'How often the schedule repeats after `start_at`.',
        example: 'daily',
      }),
  })
  .openapi({
    description:
      'A time-based trigger that starts the schedule at a wall-clock time and\noptionally repeats.',
    required: ['type', 'start_at', 'time_zone', 'repeat'],
    title: 'Shuttle job schedule trigger by time',
    'x-box-resource-id': 'shuttle_job_schedule_trigger_by_time_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobScheduleTriggerByTime')

const ShuttleJobScheduleTriggerByJobSchema = z
  .object({
    type: z
      .literal('by_job')
      .openapi({ description: 'The value will always be `by_job`.', example: 'by_job' }),
    triggered_by_job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job whose run starts this\nschedule.',
        example: '8d2ca68e810d9156194530c3',
      }),
    last_run_condition: z
      .enum(['always', 'on_success', 'on_finish'])
      .openapi({
        description:
          'When this schedule should start a run relative to the last run of\nthe triggering job.',
        example: 'on_success',
      }),
  })
  .openapi({
    description:
      "A job-based trigger that starts this schedule after another shuttle\njob's run meets a condition.",
    required: ['type', 'triggered_by_job_id', 'last_run_condition'],
    title: 'Shuttle job schedule trigger by job',
    'x-box-resource-id': 'shuttle_job_schedule_trigger_by_job_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobScheduleTriggerByJob')

const ShuttleJobScheduleTriggerSchema = z
  .xor([ShuttleJobScheduleTriggerByTimeSchema, ShuttleJobScheduleTriggerByJobSchema])
  .openapi({
    description:
      'When a shuttle job schedule should start a run. Exactly one trigger\nvariant is present, discriminated by `type`.',
    title: 'Shuttle job schedule trigger',
    'x-box-resource-id': 'shuttle_job_schedule_trigger_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobScheduleTrigger')

const ShuttleJobScheduleSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle job schedule.',
        example: '7c1ba68e810d9156194530b2',
      }),
    type: z
      .literal('shuttle_job_schedule')
      .openapi({
        description: 'The value will always be `shuttle_job_schedule`.',
        example: 'shuttle_job_schedule',
      }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this schedule belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    state: z
      .enum(['enabled', 'paused'])
      .openapi({ description: 'Whether the schedule is active.', example: 'enabled' }),
    run_mode: z
      .enum(['transfer', 'simulation', 'analysis'])
      .openapi({
        description:
          'The kind of run the schedule starts. `scan` is not a valid schedule\nrun mode.',
        example: 'transfer',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional human-readable description of the schedule.',
        example: 'Nightly finance share replay.',
      }),
    last_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When the schedule last attempted to start a run. `null` when the\nschedule has never started a run.',
        example: '2026-03-16T09:00:12Z',
      }),
    trigger: ShuttleJobScheduleTriggerSchema,
  })
  .openapi({
    description:
      "A schedule that starts runs of a shuttle job. A schedule is either\ntime-based or triggered by another job's run. Schedules cannot start a\nrun in `scan` mode.",
    required: ['id', 'type', 'job_id', 'state', 'run_mode', 'trigger'],
    title: 'Shuttle job schedule',
    'x-box-resource-id': 'shuttle_job_schedule_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobSchedule')

const ShuttleJobScheduleCreateRequestSchema = z
  .object({
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this schedule belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    run_mode: z
      .enum(['transfer', 'simulation', 'analysis'])
      .openapi({
        description:
          'The kind of run the schedule starts. `scan` is not a valid schedule\nrun mode.',
        example: 'transfer',
      }),
    state: z
      .enum(['enabled', 'paused'])
      .default('enabled')
      .exactOptional()
      .openapi({
        description: 'Whether the schedule is active. When omitted, defaults to `enabled`.',
        example: 'enabled',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional human-readable description of the schedule.',
        example: 'Nightly finance share replay.',
      }),
    trigger: ShuttleJobScheduleTriggerSchema,
  })
  .openapi({
    description: 'The request body used to create a shuttle job schedule.',
    required: ['job_id', 'run_mode', 'trigger'],
    title: 'Shuttle job schedule create request',
    'x-box-resource-id': 'shuttle_job_schedule_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobScheduleCreateRequest')

const ShuttleJobSchedulesSchema = z
  .object({
    entries: z
      .array(ShuttleJobScheduleSchema)
      .openapi({ description: 'A list of shuttle job schedules.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle job schedules.',
    title: 'Shuttle job schedules',
    'x-box-resource-id': 'shuttle_job_schedules_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleJobSchedules')

const ShuttleJobScheduleUpdateRequestSchema = z
  .object({
    state: z
      .enum(['enabled', 'paused'])
      .exactOptional()
      .openapi({ description: 'Whether the schedule is active.', example: 'paused' }),
    run_mode: z
      .enum(['transfer', 'simulation', 'analysis'])
      .exactOptional()
      .openapi({
        description:
          'The kind of run the schedule starts. `scan` is not a valid schedule\nrun mode.',
        example: 'simulation',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional human-readable description of the schedule.',
        example: 'Nightly finance share replay.',
      }),
    trigger: ShuttleJobScheduleTriggerSchema.exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The request body used to update an existing shuttle job schedule. Only\nthe fields supplied in the request body are changed.',
    title: 'Shuttle job schedule update request',
    'x-box-resource-id': 'shuttle_job_schedule_update_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttleJobScheduleUpdateRequest')

const ShuttleJobStartRequestSchema = z
  .object({
    mode: z
      .enum(['transfer', 'simulation', 'scan', 'analysis'])
      .exactOptional()
      .openapi({
        description: 'The run mode. Defaults to simulation when omitted.',
        example: 'simulation',
      }),
  })
  .openapi({
    description: 'The request body used to start a shuttle job.',
    title: 'Shuttle job start request',
    'x-box-resource-id': 'shuttle_job_start_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttleJobStartRequest')

const ShuttleJobUpdateRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The human-readable name of the shuttle job.',
        example: 'Q4 SharePoint to Box',
      }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An optional free-form comment describing the shuttle job.',
        example: 'Migrating the finance department archives.',
      }),
    tags: z
      .array(
        z
          .string()
          .openapi({ description: 'A single tag associated with the shuttle job.', example: 'q4' }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of free-form tags associated with the shuttle job.',
        example: ['q4', 'hr'],
      }),
    account_mapping: z
      .object({
        is_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether account mapping is enabled for the shuttle job.',
            example: true,
          }),
        permission_conflict_strategy: z
          .xor([
            ShuttleJobPermissionConflictStrategySchema,
            z
              .strictObject({})
              .nullable()
              .openapi({
                title: 'OpenAPI 3.0 null schema type',
                description: 'The definition for a null schema type in OpenAPI `3.0`.',
              }),
          ])
          .exactOptional()
          .openapi({
            description: 'The strategy used to resolve permission conflicts. `null` when\nunset.',
            example: 'preserve_structure_restrict_sharing',
          }),
        are_external_shares_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether external shares are mapped during the migration.',
            example: false,
          }),
        are_permissions_mapped: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether permissions are mapped during the migration.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The account mapping configuration that controls how source identities\nand permissions are translated into Box.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
    settings: z
      .object({
        bandwidth_limit_bytes_per_sec: z
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
            description:
              'The maximum transfer bandwidth in bytes per second. `null` when\nunlimited.',
            example: 10485760,
          }),
        are_deletions_mirrored: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether deletions in the source system are mirrored in Box.',
            example: false,
          }),
        are_file_versions_synced: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether prior file versions are synced during the migration.',
            example: true,
          }),
        max_file_versions: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The maximum number of file versions to sync. `null` when unlimited.',
            example: 10,
          }),
        is_overwrite_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether existing files in Box are overwritten.',
            example: false,
          }),
        are_completed_mappings_skipped_on_rerun: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether mappings that already completed successfully are skipped when\nthe job is rerun.',
            example: true,
          }),
        is_content_scanning_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether migrated content is scanned during the migration. Applies\nonly when the source system supports content scanning; ignored\notherwise.',
            example: false,
          }),
        include_shared_source_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the source are included in the migration.\nApplies only when the source system supports shared folders; ignored\notherwise.',
            example: true,
          }),
        include_shared_destination_folders: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether shared folders on the destination are included in the\nmigration. Applies only when the destination system supports shared\nfolders; ignored otherwise.',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The tunable settings that control how the shuttle job runs.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The request body used to update an existing shuttle job. Only the fields\nsupplied in the request body are changed.',
    title: 'Shuttle job update request',
    'x-box-resource-id': 'shuttle_job_update_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttleJobUpdateRequest')

const ShuttleMappingErrorSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the mapping error.',
        example: '6a3ba7c02ea17bc9461eeacf',
      }),
    type: z
      .literal('shuttle_mapping_error')
      .openapi({
        description: 'The value will always be `shuttle_mapping_error`.',
        example: 'shuttle_mapping_error',
      }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this error belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    revision: z
      .int32()
      .min(0)
      .openapi({ description: 'The mapping revision this error belongs to.', example: 3 }),
    category: z
      .string()
      .openapi({
        description:
          'The category of mapping work that produced the error. This is an open\nstring whose set of values can grow.',
        example: 'path',
      }),
    path: z
      .string()
      .openapi({
        description: 'The path or subject that the mapping error refers to.',
        example: '/Shared Documents/Projects',
      }),
    messages: z
      .array(z.string().openapi({ example: 'The source path could not be resolved.' }))
      .min(1)
      .openapi({
        description: 'Human-readable messages describing the mapping error.',
        example: ['The source path could not be resolved.'],
      }),
  })
  .openapi({
    description:
      'A problem encountered while preparing path, subject, or permission\nmappings for a shuttle job.',
    required: ['id', 'type', 'job_id', 'revision', 'category', 'path', 'messages'],
    title: 'Shuttle mapping error',
    'x-box-resource-id': 'shuttle_mapping_error_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleMappingError')

const ShuttleMappingErrorsSchema = z
  .object({
    entries: z
      .array(ShuttleMappingErrorSchema)
      .openapi({ description: 'A list of shuttle mapping errors.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle mapping errors.',
    title: 'Shuttle mapping errors',
    'x-box-resource-id': 'shuttle_mapping_errors_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleMappingErrors')

const ShuttlePathEntryAccountScopeSchema = z
  .object({
    type: z
      .literal('account')
      .openapi({ description: 'The value will always be `account`.', example: 'account' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The platform-native identifier of the account that owns this entry.\n`null` when the system does not provide one. This is not the path\nentry `id`. Maps to `account.id` on an account-scoped path mapping\nlocation.',
        example: '123456',
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The email of the account that owns this entry. This is a\nsystem-native identifier and is not always an RFC 5322 address.\n`null` when unknown. Maps to `account.email` on an account-scoped\npath mapping location.',
        example: 'user@example.com',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The display name of the account that owns this entry. `null` when\nunknown. Maps to `account.name` on an account-scoped path mapping\nlocation.',
        example: 'Jane Doe',
      }),
  })
  .openapi({
    description:
      'The mapping scope of a path entry that lives under a user or service\naccount. `type` is the discriminator. The remaining fields are the\naccount itself, flattened onto this object — they are not a nested\n`account` wrapper. `id` here is the account identifier, not the path\nentry `id`. Copy these fields onto `account` when creating an\naccount-scoped path mapping.',
    required: ['type'],
    title: 'Shuttle path entry account scope',
    'x-box-resource-id': 'shuttle_path_entry_account_scope_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathEntryAccountScope')

const ShuttlePathEntrySharedSpaceScopeSchema = z
  .object({
    type: z
      .literal('shared_space')
      .openapi({
        description: 'The value will always be `shared_space`.',
        example: 'shared_space',
      }),
    space: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The display name of the shared container this entry belongs to.\n`null` when the system has a single implicit container. Maps to\n`space` on a shared-space path mapping location.',
        example: 'HR Team Site',
      }),
  })
  .openapi({
    description:
      'The mapping scope of a path entry that lives under a shared container\nsuch as a site, team drive, bucket, or file share. `type` is the\ndiscriminator. Copy `space` onto a shared-space path mapping location\nwhen creating a mapping from this row.',
    required: ['type'],
    title: 'Shuttle path entry shared space scope',
    'x-box-resource-id': 'shuttle_path_entry_shared_space_scope_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathEntrySharedSpaceScope')

const ShuttlePathEntryScopeSchema = z
  .xor([ShuttlePathEntryAccountScopeSchema, ShuttlePathEntrySharedSpaceScopeSchema])
  .openapi({
    description:
      'Which mapping namespace this path entry belongs to. Discriminated by\n`type`: `account` flattens the owning account onto the object;\n`shared_space` carries the shared container name. File versus folder\nis not part of scope. Use `is_directory` on the path entry.',
    title: 'Shuttle path entry scope',
    'x-box-resource-id': 'shuttle_path_entry_scope_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathEntryScope')

const ShuttlePathEntrySchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier of this browse row. This is not the account\nidentifier; when `scope.type` is `account`, the account identifier is\n`scope.id`.',
        example: '6a3ba7c02ea17bc9461eeacf',
      }),
    type: z
      .literal('shuttle_path_entry')
      .openapi({
        description: 'The value will always be `shuttle_path_entry`.',
        example: 'shuttle_path_entry',
      }),
    name: z
      .string()
      .openapi({ description: 'The display name of the path entry.', example: 'Projects' }),
    path: z
      .string()
      .openapi({
        description: 'The human-readable path of the entry.',
        example: '/Shared Documents/Projects',
      }),
    path_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The system-native identifier of the path. `null` when the selected\nsystem does not provide one. Maps to `path_id` on a path mapping\nlocation.',
        example: '01ABCDEF23456789',
      }),
    parent_path: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The human-readable path of the parent entry, or `null` for a root\nentry.',
        example: '/Shared Documents',
      }),
    scope: ShuttlePathEntryScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mapping namespace of this entry. Exactly one variant is\npresent, discriminated by `type`. An `account` scope is the\nowning account flattened onto the object. A `shared_space`\nscope carries the container name. Whether the entry is a file\nor a folder is indicated by `is_directory`, not by `scope`.',
        }),
    ).openapi({ example: { type: 'shared_space', space: 'HR Team Site' } }),
    is_directory: z
      .boolean()
      .openapi({
        description:
          'Whether the entry is a directory (`true`) or a single file\n(`false`). Maps to `is_directory` on a path mapping location.',
        example: true,
      }),
    can_map: z
      .boolean()
      .openapi({
        description: 'Whether the entry can be selected in a path mapping.',
        example: true,
      }),
  })
  .openapi({
    description:
      'A browsable entry on the source or target system used to build shuttle\npath mappings. Shared fields describe the node. `scope` is a\ndiscriminated object that identifies the mapping namespace so a path\nmapping can be created from this row without extra browse state.',
    required: ['id', 'type', 'name', 'path', 'scope', 'is_directory', 'can_map'],
    title: 'Shuttle path entry',
    'x-box-resource-id': 'shuttle_path_entry_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathEntry')

const ShuttlePathEntriesSchema = z
  .object({
    entries: z
      .array(ShuttlePathEntrySchema)
      .openapi({ description: 'A list of shuttle path entries.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle path entries.',
    title: 'Shuttle path entries',
    'x-box-resource-id': 'shuttle_path_entries_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathEntries')

const ShuttlePathMappingAccountSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The platform-native identifier of the account. `null` when the system\ndoes not provide one.',
        example: '123456',
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email address of the account. `null` when unknown.',
        example: 'admin@company.box.com',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display name of the account. `null` when unknown.',
        example: 'Box Admin',
      }),
  })
  .openapi({
    description: 'The account that owns an account-scoped path mapping location.',
    title: 'Shuttle path mapping account',
    'x-box-resource-id': 'shuttle_path_mapping_account_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttlePathMappingAccount')

const ShuttlePathMappingAccountLocationSchema = z
  .object({
    type: z
      .literal('account')
      .openapi({ description: 'The value will always be `account`.', example: 'account' }),
    path: z
      .string()
      .openapi({
        description: 'The human-readable path relative to the account root.',
        example: '/HR Migration',
      }),
    path_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The stable identifier of the location. `null` when the system does not\nprovide one.',
        example: '1234567890',
      }),
    account: ShuttlePathMappingAccountSchema.and(
      z.any().openapi({ description: 'The account that owns this location.' }),
    ).exactOptional(),
    is_directory: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the location is a directory. `null` when unknown.',
        example: true,
      }),
  })
  .openapi({
    description: 'A path mapping location scoped to a user or service account.',
    required: ['type', 'path'],
    title: 'Shuttle path mapping account location',
    'x-box-resource-id': 'shuttle_path_mapping_account_location_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingAccountLocation')

const ShuttlePathMappingSharedSpaceLocationSchema = z
  .object({
    type: z
      .literal('shared_space')
      .openapi({
        description: 'The value will always be `shared_space`.',
        example: 'shared_space',
      }),
    space: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The display name of the shared container. `null` when the system has a\nsingle implicit container.',
        example: 'HR Team Site',
      }),
    path: z
      .string()
      .openapi({
        description: 'The human-readable path relative to the shared container.',
        example: '/Shared Documents',
      }),
    path_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The stable identifier of the location. `null` when the system does not\nprovide one.',
        example: 'sp-folder-001',
      }),
    is_directory: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the location is a directory. `null` when unknown.',
        example: true,
      }),
  })
  .openapi({
    description:
      'A path mapping location scoped to a shared container such as a site, team\ndrive, bucket, or file share.',
    required: ['type', 'path'],
    title: 'Shuttle path mapping shared space location',
    'x-box-resource-id': 'shuttle_path_mapping_shared_space_location_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingSharedSpaceLocation')

const ShuttlePathMappingLocationSchema = z
  .xor([ShuttlePathMappingAccountLocationSchema, ShuttlePathMappingSharedSpaceLocationSchema])
  .openapi({
    description: 'One side of a path mapping. The object shape is determined by `type`.',
    title: 'Shuttle path mapping location',
    'x-box-resource-id': 'shuttle_path_mapping_location_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingLocation')

const ShuttlePathMappingSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle path mapping.',
        example: '6a3ba7a24ea17bc9461eeacd',
      }),
    type: z
      .literal('shuttle_path_mapping')
      .openapi({
        description: 'The value will always be `shuttle_path_mapping`.',
        example: 'shuttle_path_mapping',
      }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this mapping belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    is_path_skipped: z
      .boolean()
      .openapi({
        description: 'Whether this source path is skipped during the migration.',
        example: false,
      }),
    source: ShuttlePathMappingLocationSchema.and(
      z.any().openapi({ description: 'The source location being mapped.' }),
    ),
    target: z
      .xor([
        ShuttlePathMappingLocationSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The destination location. `null` when the source path is skipped or\nthe job has no destination, such as an analysis job.',
        example: {
          type: 'account',
          path: '/HR Migration',
          path_id: '1234567890',
          account: { id: '123456', email: 'admin@company.box.com', name: 'Box Admin' },
          is_directory: true,
        },
      }),
  })
  .openapi({
    description:
      'A standard representation of a shuttle path mapping. A path mapping\nconnects a source location on the migrated system to a destination in Box,\nor marks the source path as skipped.',
    required: ['id', 'type', 'job_id', 'is_path_skipped', 'source'],
    title: 'Shuttle path mapping',
    'x-box-resource-id': 'shuttle_path_mapping_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMapping')

const ShuttlePathMappingAccountInputSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The platform-native identifier of the account.',
        example: '123456',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the account.',
        example: 'admin@company.box.com',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The account that owns an account-scoped path mapping location. Provide at\nleast one of `id` or `email`.',
    title: 'Shuttle path mapping account input',
    'x-box-resource-id': 'shuttle_path_mapping_account_input_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttlePathMappingAccountInput')

const ShuttlePathMappingAccountLocationInputSchema = z
  .object({
    type: z
      .literal('account')
      .openapi({ description: 'The value will always be `account`.', example: 'account' }),
    path: z
      .string()
      .min(1)
      .openapi({
        description: 'The human-readable path relative to the account root.',
        example: '/Shared Documents',
      }),
    path_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional stable identifier of the location, when obtained from\nbrowsing.',
        example: 'sp-folder-001',
      }),
    account: ShuttlePathMappingAccountInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account that owns this location. Provide at least one of `id`\nor `email`.',
        }),
    ),
    is_directory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the location is a directory. When set, the destination must be\nthe same kind of object.',
        example: true,
      }),
  })
  .openapi({
    description:
      'An account-scoped source location supplied when creating or updating a path\nmapping.',
    required: ['type', 'path', 'account'],
    title: 'Shuttle path mapping account location input',
    'x-box-resource-id': 'shuttle_path_mapping_account_location_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingAccountLocationInput')

const ShuttlePathMappingAccountLocationTargetInputSchema = z
  .object({
    type: z
      .literal('account')
      .openapi({ description: 'The value will always be `account`.', example: 'account' }),
    path: z
      .string()
      .min(1)
      .openapi({
        description: 'The human-readable path relative to the account root.',
        example: '/HR Migration',
      }),
    path_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional stable identifier of the location, when obtained from\nbrowsing.',
        example: '1234567890',
      }),
    account: ShuttlePathMappingAccountInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account that owns this location. Provide at least one of `id`\nor `email`.',
        }),
    ),
  })
  .openapi({
    description:
      'An account-scoped destination location supplied when creating or updating a\npath mapping.',
    required: ['type', 'path', 'account'],
    title: 'Shuttle path mapping account location target input',
    'x-box-resource-id': 'shuttle_path_mapping_account_location_target_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingAccountLocationTargetInput')

const ShuttlePathMappingSharedSpaceLocationInputSchema = z
  .object({
    type: z
      .literal('shared_space')
      .openapi({
        description: 'The value will always be `shared_space`.',
        example: 'shared_space',
      }),
    space: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the shared container. Required for systems with\nmultiple containers.',
        example: 'HR Team Site',
      }),
    path: z
      .string()
      .min(1)
      .openapi({
        description: 'The human-readable path relative to the shared container.',
        example: '/Shared Documents',
      }),
    path_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional stable identifier of the location, when obtained from\nbrowsing.',
        example: 'sp-folder-001',
      }),
    is_directory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the location is a directory. When set, the destination must be\nthe same kind of object.',
        example: true,
      }),
  })
  .openapi({
    description:
      'A shared-container source location supplied when creating or updating a\npath mapping.',
    required: ['type', 'path'],
    title: 'Shuttle path mapping shared space location input',
    'x-box-resource-id': 'shuttle_path_mapping_shared_space_location_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingSharedSpaceLocationInput')

const ShuttlePathMappingLocationInputSchema = z
  .xor([
    ShuttlePathMappingAccountLocationInputSchema,
    ShuttlePathMappingSharedSpaceLocationInputSchema,
  ])
  .openapi({
    description:
      'A source location supplied when creating or updating a path mapping. The\nobject shape is determined by `type`.',
    title: 'Shuttle path mapping location input',
    'x-box-resource-id': 'shuttle_path_mapping_location_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingLocationInput')

const ShuttlePathMappingSharedSpaceLocationTargetInputSchema = z
  .object({
    type: z
      .literal('shared_space')
      .openapi({
        description: 'The value will always be `shared_space`.',
        example: 'shared_space',
      }),
    space: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the shared container. Required for systems with\nmultiple containers.',
        example: 'HR Team Site',
      }),
    path: z
      .string()
      .min(1)
      .openapi({
        description: 'The human-readable path relative to the shared container.',
        example: '/HR Migration',
      }),
    path_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional stable identifier of the location, when obtained from\nbrowsing.',
        example: '1234567890',
      }),
  })
  .openapi({
    description:
      'A shared-container destination location supplied when creating or updating\na path mapping.',
    required: ['type', 'path'],
    title: 'Shuttle path mapping shared space location target input',
    'x-box-resource-id': 'shuttle_path_mapping_shared_space_location_target_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingSharedSpaceLocationTargetInput')

const ShuttlePathMappingTargetLocationInputSchema = z
  .xor([
    ShuttlePathMappingAccountLocationTargetInputSchema,
    ShuttlePathMappingSharedSpaceLocationTargetInputSchema,
  ])
  .openapi({
    description:
      'A destination location supplied when creating or updating a path mapping.\nThe object shape is determined by `type`. Destination input does not\ninclude `is_directory`; that flag is taken from the source.',
    title: 'Shuttle path mapping target location input',
    'x-box-resource-id': 'shuttle_path_mapping_target_location_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingTargetLocationInput')

const ShuttlePathMappingCreateRequestSchema = z
  .object({
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this mapping belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    is_path_skipped: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this source path should be skipped during the migration.\nDefaults to `false`.',
        example: false,
      }),
    source: ShuttlePathMappingLocationInputSchema.and(
      z.any().openapi({ description: 'The source location to migrate from.' }),
    ),
    target: z
      .xor([
        ShuttlePathMappingTargetLocationInputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The destination location to migrate to. Omit or set to `null` when the\nsource path is skipped.',
        example: {
          type: 'account',
          path: '/HR Migration',
          account: { email: 'admin@company.box.com' },
        },
      }),
  })
  .openapi({
    description: 'The request body used to create a new shuttle path mapping.',
    required: ['job_id', 'source'],
    title: 'Shuttle path mapping create request',
    'x-box-resource-id': 'shuttle_path_mapping_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingCreateRequest')

const ShuttlePathMappingImportCreateRequestSchema = z
  .object({
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job whose path mappings are\nreplaced.',
        example: '6a3ba68e810d9156194530a1',
      }),
    file_id: z
      .string()
      .openapi({
        description:
          'The unique identifier of the Box file holding the mapping workbook. The\nfile is read as the calling user, so it must live somewhere that user can\ndownload from.',
        example: '12345678901',
      }),
  })
  .openapi({
    description:
      "The request body used to import a shuttle job's path mappings from a\nspreadsheet already stored in Box.",
    required: ['job_id', 'file_id'],
    title: 'Shuttle path mapping import create request',
    'x-box-resource-id': 'shuttle_path_mapping_import_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappingImportCreateRequest')

const ShuttlePathMappingsSchema = z
  .object({
    entries: z
      .array(ShuttlePathMappingSchema)
      .openapi({ description: 'A list of shuttle path mappings.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle path mappings.',
    title: 'Shuttle path mappings',
    'x-box-resource-id': 'shuttle_path_mappings_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttlePathMappings')

const ShuttlePathMappingUpdateRequestSchema = z
  .object({
    is_path_skipped: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this source path should be skipped during the migration.',
        example: true,
      }),
    source: ShuttlePathMappingLocationInputSchema.and(
      z.any().openapi({ description: 'The source location to migrate from.' }),
    ).exactOptional(),
    target: z
      .xor([
        ShuttlePathMappingTargetLocationInputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The destination location to migrate to. Set to `null` to clear the\ndestination, for example when skipping the source path.',
        example: {
          type: 'account',
          path: '/HR Migration',
          account: { email: 'admin@company.box.com' },
        },
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The request body used to update an existing shuttle path mapping. Only the\nfields supplied in the request body are changed. `job_id`, `id`, and `type`\nare immutable.',
    title: 'Shuttle path mapping update request',
    'x-box-resource-id': 'shuttle_path_mapping_update_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttlePathMappingUpdateRequest')

const ShuttleReportOutputSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the generated Box file or folder.',
        example: '12345678',
      }),
    type: z
      .enum(['file', 'folder'])
      .openapi({
        description: 'The Box object type of the generated file or folder.',
        example: 'file',
      }),
  })
  .openapi({
    description: 'A reference to the generated Box file or folder.',
    required: ['id', 'type'],
    title: 'Shuttle report output',
    'x-box-resource-id': 'shuttle_report_output_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleReportOutput')

const ShuttleReportSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle report.',
        example: '6a3ba8d14f2c91e8370b4d12',
      }),
    type: z
      .literal('shuttle_report')
      .openapi({
        description: 'The value will always be `shuttle_report`.',
        example: 'shuttle_report',
      }),
    run_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle run this report was generated\nfor.',
        example: '6a3ba68e810d9156194530a1:42',
      }),
    status: z
      .string()
      .openapi({
        description:
          'The generation status of the report. This is an open string whose set\nof values is expected to grow; the currently documented values include\n`pending`, `processing`, `complete`, `failed`, `canceled`, and\n`unknown`. Keep polling `pending` and `processing`. Stop on\n`complete`, `failed`, `canceled`, and `unknown`. Treat any value that\nis not recognized the same as `unknown`: do not fail parsing, and do\nnot keep polling.',
        example: 'complete',
      }),
    format: z
      .enum(['xlsx', 'csv'])
      .openapi({ description: 'The output file format of the report.', example: 'xlsx' }),
    sections: z
      .array(
        z
          .string()
          .openapi({ description: 'A section included in the report.', example: 'event_log' }),
      )
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The sections included in the report. Echoes the sections requested on\ncreate. This is an open list whose set of values is expected to grow;\nthe currently documented values include `files_and_folders`,\n`event_log`, `transfer_overview`, `source_users`, `target_users`,\n`source_collaborators`, `target_collaborators`,\n`source_collaborations`, and `target_collaborations`. Omitted on\nolder reports that have no stored section list. New reports always\ninclude this field.',
        example: ['event_log', 'transfer_overview'],
      }),
    users_scope: z
      .enum(['migrated', 'all'])
      .exactOptional()
      .openapi({
        description: 'Which users are included in user-related report sections.',
        example: 'migrated',
      }),
    output: z
      .xor([
        ShuttleReportOutputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .openapi({
        description:
          'The generated Box file or folder. Always present; `null` until\n`status` is `complete`.',
        example: { id: '12345678', type: 'file' },
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When report generation was requested.',
        example: '2026-03-15T06:35:00Z',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'When report generation finished. Always present; `null` while\ngeneration is still in progress.',
        example: '2026-03-15T06:36:12Z',
      }),
  })
  .openapi({
    description:
      'A report generated asynchronously for a shuttle job run. Keep polling\nwhile `status` is `pending` or `processing`. Stop when `status` is\n`complete`, `failed`, `canceled`, or `unknown`. The generated Box file\nor folder is `null` until generation finishes.',
    required: ['id', 'type', 'run_id', 'status', 'format', 'output', 'completed_at'],
    title: 'Shuttle report',
    'x-box-resource-id': 'shuttle_report_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleReport')

const ShuttleReportCreateRequestSchema = z
  .object({
    run_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle run to generate a report for.',
        example: '6a3ba68e810d9156194530a1:42',
      }),
    format: z
      .enum(['xlsx', 'csv'])
      .openapi({ description: 'The output file format of the report.', example: 'xlsx' }),
    sections: z
      .array(
        z
          .string()
          .openapi({ description: 'A section to include in the report.', example: 'event_log' }),
      )
      .min(1)
      .openapi({
        description:
          "The sections to include in the report. Must be a non-empty subset of\nthe run's `available_report_sections`. This is an open list whose set\nof values is expected to grow; the currently documented values include\n`files_and_folders`, `event_log`, `transfer_overview`, `source_users`,\n`target_users`, `source_collaborators`, `target_collaborators`,\n`source_collaborations`, and `target_collaborations`.",
        example: ['event_log', 'transfer_overview'],
      }),
    users_scope: z
      .enum(['migrated', 'all'])
      .default('migrated')
      .exactOptional()
      .openapi({
        description:
          'Which users to include in user-related report sections. Defaults to\n`migrated` when omitted.',
        example: 'migrated',
      }),
  })
  .openapi({
    description:
      'The request body used to generate a report for a shuttle run. Generation\nis asynchronous: the created report is returned immediately in `pending`\nor `processing` status. Poll `GET /shuttle_reports/{shuttle_report_id}`\nwhile `status` is `pending` or `processing`. Stop when `status` is\n`complete`, `failed`, `canceled`, or `unknown`. Repeating this request\nwith the same parameters reuses the existing report instead of creating\na duplicate.',
    required: ['run_id', 'format', 'sections'],
    title: 'Shuttle report create request',
    'x-box-resource-id': 'shuttle_report_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleReportCreateRequest')

const ShuttleReportsSchema = z
  .object({
    entries: z.array(ShuttleReportSchema).openapi({ description: 'A list of shuttle reports.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle reports.',
    title: 'Shuttle reports',
    'x-box-resource-id': 'shuttle_reports_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleReports')

const ShuttleRunSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the shuttle run, in the form\n`{job_id}:{run_number}`.',
        example: '6a3ba68e810d9156194530a1:42',
      }),
    type: z
      .literal('shuttle_run')
      .openapi({ description: 'The value will always be `shuttle_run`.', example: 'shuttle_run' }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this run belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    run_mode: z
      .string()
      .openapi({
        description:
          'The mode the run was started in. This is an open string whose set of\nvalues is expected to grow; the currently documented values include\n`transfer`, `simulation`, `analysis`, `scan`, and `unknown`. Clients\nshould treat any value they do not recognize as `unknown`.',
        example: 'transfer',
      }),
    state: z
      .string()
      .openapi({
        description:
          'The current state of the shuttle run. This is an open string whose set\nof values is expected to grow; the currently documented values include\n`running`, `stopping`, `completed`, `completed_with_errors`, `stopped`,\n`failed`, `timed_out`, and `unknown`. Clients should treat any value\nthey do not recognize as `unknown`.',
        example: 'completed',
      }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the run started.', example: '2026-03-15T02:00:00Z' }),
    ended_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'When the run ended. `null` while the run is still in progress.',
        example: '2026-03-15T06:30:00Z',
      }),
    duration_seconds: z
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
        description:
          'Total duration of the run in seconds. `null` while the run is still in\nprogress.',
        example: 16200,
      }),
    stats: z
      .object({
        bytes_sent: z
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
            description: 'Bytes transferred during the run.',
            example: 1073741824,
          }),
        files_sent: z
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
            description: 'Files transferred during the run.',
            example: 4200,
          }),
        folders_created: z
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
            description: 'Folders created on the destination during the run.',
            example: 350,
          }),
        is_estimated: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether these figures are estimates rather than final counts.',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Transfer statistics collected during the run.',
        'x-box-tag': 'shuttle',
        required: [],
      }),
    created_by: z
      .xor([
        UserBaseSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The user who started the run. `null` for schedule- or system-initiated\nruns.',
        example: { id: '11446498', type: 'user' },
      }),
    available_report_sections: z
      .array(
        z
          .string()
          .openapi({
            description: 'A report section available for this run.',
            example: 'event_log',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Report sections that can be requested for this run. This is an open\nlist whose set of values is expected to grow; the currently documented\nvalues include `files_and_folders`, `event_log`, `transfer_overview`,\n`source_users`, `target_users`, `source_collaborators`,\n`target_collaborators`, `source_collaborations`, and\n`target_collaborations`.',
        example: ['event_log', 'files_and_folders'],
      }),
  })
  .openapi({
    description:
      'A historical instance of a shuttle job run. A run is created each time\na job is started. Run IDs have the form `{job_id}:{run_number}`.',
    required: ['id', 'type', 'job_id', 'run_mode', 'state'],
    title: 'Shuttle run',
    'x-box-resource-id': 'shuttle_run_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleRun')

const ShuttleRunsSchema = z
  .object({
    entries: z.array(ShuttleRunSchema).openapi({ description: 'A list of shuttle runs.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle runs.',
    title: 'Shuttle runs',
    'x-box-resource-id': 'shuttle_runs_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleRuns')

const ShuttleSubjectMappingSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle subject mapping.',
        example: '6a3ba7b12ea17bc9461eeace',
      }),
    type: z
      .literal('shuttle_subject_mapping')
      .openapi({
        description: 'The value will always be `shuttle_subject_mapping`.',
        example: 'shuttle_subject_mapping',
      }),
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this mapping belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    discovered_subject_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the discovered subject this mapping applies to.\n`null` for legacy mappings created before this field was tracked.',
        example: '6a3ba7c02ea17bc9461eeacf',
      }),
    revision: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The discovery-requirements revision this mapping was resolved against.\n`null` for legacy mappings.',
        example: 3,
      }),
    is_subject_skipped: z
      .boolean()
      .openapi({
        description: 'Whether this subject is skipped during the migration.',
        example: false,
      }),
    source: ShuttleSubjectSchema.and(
      z.any().openapi({ description: 'The source subject being mapped.' }),
    ),
    target: z
      .xor([
        ShuttleTargetSubjectSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The Box target subject. `null` when the subject is skipped or not yet\nassigned.',
        example: {
          type: 'user',
          id: '12345678',
          email: 'jane.doe@company.box.com',
          name: 'Jane Doe',
        },
      }),
  })
  .openapi({
    description:
      'A standard representation of a shuttle subject mapping. A subject mapping\nconnects a discovered source subject to a Box user or group, or marks the\nsubject as skipped.',
    required: ['id', 'type', 'job_id', 'is_subject_skipped', 'source'],
    title: 'Shuttle subject mapping',
    'x-box-resource-id': 'shuttle_subject_mapping_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubjectMapping')

const ShuttleTargetSubjectInputSchema = z
  .object({
    type: z
      .enum(['user', 'group'])
      .openapi({ description: 'Whether the Box target is a user or a group.', example: 'user' }),
    id: z
      .string()
      .openapi({ description: 'The identifier of the target Box subject.', example: '12345678' }),
  })
  .openapi({
    description: 'A Box user or group to map a source subject to.',
    required: ['type', 'id'],
    title: 'Shuttle target subject input',
    'x-box-resource-id': 'shuttle_target_subject_input_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleTargetSubjectInput')

const ShuttleSubjectMappingCreateRequestSchema = z
  .object({
    job_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the shuttle job this mapping belongs to.',
        example: '6a3ba68e810d9156194530a1',
      }),
    discovered_subject_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the discovered subject to map.',
        example: '6a3ba7c02ea17bc9461eeacf',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The discovery-requirements revision to resolve against. Omit to use the\nlatest revision.',
        example: 3,
      }),
    is_subject_skipped: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this subject should be skipped during the migration. Defaults\nto `false`.',
        example: false,
      }),
    target: z
      .xor([
        ShuttleTargetSubjectInputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The Box target to map to. Omit or set to `null` when the subject is\nskipped.',
        example: { type: 'user', id: '12345678' },
      }),
  })
  .openapi({
    description: 'The request body used to create a new shuttle subject mapping.',
    required: ['job_id', 'discovered_subject_id'],
    title: 'Shuttle subject mapping create request',
    'x-box-resource-id': 'shuttle_subject_mapping_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubjectMappingCreateRequest')

const ShuttleSubjectMappingImportCreateRequestSchema = z
  .object({
    job_id: z
      .string()
      .openapi({
        description:
          'The unique identifier of the shuttle job whose subject mappings are\nreplaced.',
        example: '6a3ba68e810d9156194530a1',
      }),
    file_id: z
      .string()
      .openapi({
        description:
          'The unique identifier of the Box file holding the mapping workbook. The\nfile is read as the calling user, so it must live somewhere that user can\ndownload from.',
        example: '12345678901',
      }),
  })
  .openapi({
    description:
      "The request body used to import a shuttle job's subject mappings from a\nspreadsheet already stored in Box.",
    required: ['job_id', 'file_id'],
    title: 'Shuttle subject mapping import create request',
    'x-box-resource-id': 'shuttle_subject_mapping_import_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubjectMappingImportCreateRequest')

const ShuttleSubjectMappingsSchema = z
  .object({
    entries: z
      .array(ShuttleSubjectMappingSchema)
      .openapi({ description: 'A list of shuttle subject mappings.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle subject mappings.',
    title: 'Shuttle subject mappings',
    'x-box-resource-id': 'shuttle_subject_mappings_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSubjectMappings')

const ShuttleSubjectMappingUpdateRequestSchema = z
  .object({
    is_subject_skipped: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this subject should be skipped during the migration.',
        example: true,
      }),
    target: z
      .xor([
        ShuttleTargetSubjectInputSchema,
        z
          .strictObject({})
          .nullable()
          .openapi({
            title: 'OpenAPI 3.0 null schema type',
            description: 'The definition for a null schema type in OpenAPI `3.0`.',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The Box target to map to. Set to `null` only for a skipped subject.\nSetting it to `null` while the mapping is active fails validation.\nUpdating `is_subject_skipped` alone preserves the existing target.',
        example: { type: 'user', id: '12345678' },
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The request body used to update an existing shuttle subject mapping. Only\nthe fields supplied in the request body are changed. `job_id`, `id`,\n`type`, `source`, `discovered_subject_id`, and `revision` are immutable.',
    title: 'Shuttle subject mapping update request',
    'x-box-resource-id': 'shuttle_subject_mapping_update_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttleSubjectMappingUpdateRequest')

const ShuttleSystemSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the shuttle system.',
        example: '6a315c0754833bfc5df067bf',
      }),
    type: z
      .literal('shuttle_system')
      .openapi({
        description: 'The value will always be `shuttle_system`.',
        example: 'shuttle_system',
      }),
    name: z
      .string()
      .openapi({ description: 'The display name of the shuttle system.', example: 'BoxProd' }),
    system_type: z
      .string()
      .openapi({
        description:
          'Identifies the kind of source or destination this system represents, for\nexample `box`, `windows`, `sharepoint`, or `amazon_s3`. New system types\nare added over time, so clients must tolerate values they do not\nrecognize rather than treating this as a fixed set.',
        example: 'box',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A server-computed display label for the system.',
        example: 'Box (Production)',
      }),
    state: z
      .enum(['connected', 'disconnected', 'unknown'])
      .openapi({
        description: 'The current connection state of the shuttle system.',
        example: 'connected',
      }),
  })
  .openapi({
    description:
      'A standard representation of a shuttle system. A shuttle system describes a\nsource or destination that Shuttle can migrate content to or from, along\nwith its current connection state.',
    required: ['id', 'type', 'name', 'system_type', 'state'],
    title: 'Shuttle system',
    'x-box-resource-id': 'shuttle_system_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSystem')

const ShuttleSystemCreateRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .openapi({
        description: 'The display name for the new shuttle system.',
        example: 'NYC File Server',
      }),
    system_type: z
      .literal('windows')
      .openapi({
        description:
          'The public system type identifier for the new shuttle system. Only\n`windows` is currently supported through the public API.',
        example: 'windows',
      }),
  })
  .openapi({
    description:
      'The request body for creating a shuttle system. Only Windows agent systems\ncan be created through the public API, so `system_type` must be `windows`.',
    required: ['name', 'system_type'],
    title: 'Shuttle system create request',
    'x-box-resource-id': 'shuttle_system_create_request_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSystemCreateRequest')

const ShuttleSystemsSchema = z
  .object({
    entries: z.array(ShuttleSystemSchema).openapi({ description: 'A list of shuttle systems.' }),
  })
  .openapi({ required: ['entries'] })
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
      }),
  )
  .openapi({
    description: 'A paginated list of shuttle systems.',
    title: 'Shuttle systems',
    'x-box-resource-id': 'shuttle_systems_v2026.0',
    'x-box-tag': 'shuttle',
  })
  .openapi('ShuttleSystems')

const ShuttleSystemUpdateRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The updated display name for the shuttle system.',
        example: 'NYC File Server (Primary)',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The request body for updating a shuttle system. Only the fields supplied are\nchanged.',
    title: 'Shuttle system update request',
    'x-box-resource-id': 'shuttle_system_update_request_v2026.0',
    'x-box-tag': 'shuttle',
    required: [],
  })
  .openapi('ShuttleSystemUpdateRequest')

const BoxVersionHeaderParamsSchema = z
  .literal('2026.0')
  .openapi({
    param: {
      name: 'box-version',
      in: 'header',
      description: 'Version header.',
      allowEmptyValue: false,
      required: true,
      schema: { type: 'string', enum: ['2026.0'] },
      example: '2026.0',
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

export const getAutomateWorkflowsRoute = createRoute({
  method: 'get',
  path: '/automate_workflows',
  tags: ['Automate Workflows'],
  summary: 'List Automate workflows defined as callable actions',
  description:
    'Returns workflow actions from Automate for a folder, using the\n`WORKFLOW` action category.',
  operationId: 'get_automate_workflows_v2026.0',
  request: {
    query: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            name: 'folder_id',
            in: 'query',
            description:
              'The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.',
            required: true,
            schema: { type: 'string', nullable: false },
            example: '12345',
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
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns workflow actions that can be manually started.',
      content: { 'application/json': { schema: AutomateWorkflowsSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postAutomateWorkflowsWorkflowIdStartRoute = createRoute({
  method: 'post',
  path: '/automate_workflows/{workflow_id}/start',
  tags: ['Automate Workflows'],
  summary: 'Start Automate workflow',
  description: 'Starts an Automate workflow manually by using a workflow action ID and file IDs.',
  operationId: 'post_automate_workflows_id_start_v2026.0',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            name: 'workflow_id',
            in: 'path',
            description: 'The ID of the workflow.',
            required: true,
            schema: { type: 'string' },
            example: '12345',
          },
        }),
    }),
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: AutomateWorkflowStartRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Starts the workflow.' },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postNotesConvertRoute = createRoute({
  method: 'post',
  path: '/notes/convert',
  tags: ['Convert to Box Note'],
  summary: 'Convert content to Box Note',
  description:
    'Creates a Box Note (`.boxnote` file) from supported source content. See the `content_format` field for supported formats.',
  operationId: 'post_notes_convert_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: NotesConvertRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The note was created successfully.',
      content: { 'application/json': { schema: NotesConvertResponseSchema } },
    },
    400: {
      description:
        'Returned when the request body is malformed, fails schema validation, or\nrequired fields are missing. A missing or unknown parent folder is not\nindicated with this status (see `404`).',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have permission to create\na file in the parent folder.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the parent folder does not exist, or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when a preflight check fails (for example, a name conflict).',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    413: {
      description: 'Returned when the request payload is too large.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    422: {
      description: 'Returned when the content could not be converted to a note.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    501: {
      description:
        'Returned when this operation is not implemented or not yet available on\nthe server (for example, while routing to the Notes service is still being\nenabled).',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'Returned when an unexpected client error occurs.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocumentSplitsRoute = createRoute({
  method: 'get',
  path: '/document_splits',
  tags: ['Document Split'],
  summary: 'List Document Split jobs',
  description:
    'Returns a paginated list of Document Split jobs accessible to the\nauthenticated user.',
  operationId: 'get_document_splits_v2026.0',
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
      description: 'Returns a paginated list of Document Split jobs.',
      content: { 'application/json': { schema: DocumentSplitsSchema } },
    },
    400: {
      description: 'Returned when the user has passed in a malformed `marker` or `limit`\nvalue.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have access to the\nDocument Generation feature.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postDocumentSplitsRoute = createRoute({
  method: 'post',
  path: '/document_splits',
  tags: ['Document Split'],
  summary: 'Create Document Split job',
  description:
    'Initiates a Document Split job for the supplied source file. The job runs\nasynchronously; clients can poll the returned job ID to track progress.\n\nAll split-specific input lives under `split_input`. When\n`split_input.split_type` is `manual`, provide\n`split_input.split_definition` (continuous page ranges; `version` may be\nomitted or `v_1`). When `split_input.split_type` is `page_selection`,\nprovide `split_input.page_selection` (non-linear page segments; `version`\nmay be omitted or `v_2`). `split_input.prompt` must not be provided for\neither of those variants. When `split_input.split_type` is `smart`,\n`split_input.prompt` is required and neither\n`split_input.split_definition` nor `split_input.page_selection` must be\nprovided.',
  operationId: 'post_document_splits_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: DocumentSplitCreateRequestSchema,
          examples: {
            manual: {
              summary: 'Manual split request',
              value: {
                source_file_id: '12345',
                destination_folder_id: '14047816008',
                input_source: 'api',
                split_input: {
                  split_type: 'manual',
                  split_definition: [
                    { start: 1, end: 5 },
                    { start: 6, end: 14 },
                  ],
                },
              },
            },
            page_selection: {
              summary: 'Page selection split request',
              value: {
                source_file_id: '12345',
                destination_folder_id: '14047816008',
                input_source: 'api',
                split_input: {
                  split_type: 'page_selection',
                  version: 'v_2',
                  page_selection: [
                    {
                      name: 'exhibits',
                      segments: [
                        { type: 'single_page', page: 4 },
                        { type: 'single_page', page: 8 },
                        { type: 'single_page', page: 12 },
                      ],
                    },
                    {
                      name: 'signatures',
                      segments: [
                        { type: 'page_range', start: 6, end: 8 },
                        { type: 'single_page', page: 15 },
                      ],
                    },
                  ],
                },
              },
            },
            smart: {
              summary: 'Smart split request',
              value: {
                source_file_id: '12345',
                destination_folder_id: '14047816008',
                input_source: 'api',
                split_input: {
                  split_type: 'smart',
                  prompt: 'Split this contract into one file per signed section.',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The Document Split job was accepted for processing. Returns a reference\nto the newly created job.',
      content: { 'application/json': { schema: DocumentSplitCreateResponseSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have access to the\nDocument Generation feature.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the source file or destination folder cannot be found\nor the user does not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getDocumentSplitsDocumentSplitIdRoute = createRoute({
  method: 'get',
  path: '/document_splits/{document_split_id}',
  tags: ['Document Split'],
  summary: 'Get Document Split job by ID',
  description:
    'Returns details for a single Document Split job identified by its ID,\nincluding the current status, the input definition, and any output files\nproduced by the job.',
  operationId: 'get_document_splits_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      document_split_id: z
        .string()
        .openapi({
          param: {
            name: 'document_split_id',
            in: 'path',
            description: 'The unique identifier for the Document Split job.',
            required: true,
            schema: { type: 'string' },
            example: '1748426',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Document Split job.',
      content: { 'application/json': { schema: DocumentSplitSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user does not have access to the\nDocument Generation feature.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the Document Split job is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['Query'],
  summary: 'Box Query',
  description:
    'Runs a query to discover Box items using a logical predicate, similar to a SQL\nWHERE clause. The predicate can filter across multiple metadata templates and\nitem fields in a single request. Results can be sorted, paginated with markers,\nand shaped with fields so each entry includes additional item or metadata\nattributes.\n\nThis is the item-retrieval endpoint in the Query API (version 2026.0). Unlike\nthe [Metadata Query API](https://developer.box.com/reference/post-metadata-queries-execute-read),\nit is not limited to a single metadata template or to files and folders. For\ntotals and grouped metrics over the same predicates, use\n[Query Insights](https://developer.box.com/reference/v2026.0/post-query-insights)\ninstead of paging through every matching item.\n\nFor predicate syntax, parameters, examples, pagination behavior, and error\ncodes, see the\n[Box Query guide](https://developer.box.com/guides/query/box-query). For shared\nresponse schemas, including Query results and result entries, see\n[Query resources](https://developer.box.com/reference/v2026.0/query-resources).',
  operationId: 'post_query_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: QueryRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns a paginated list of items matching the query.',
      content: { 'application/json': { schema: QueryResultsSchema } },
    },
    400: {
      description:
        'Returned when the query could not be parsed, the request body fails schema\nvalidation, a referenced scope is not valid, or an unexpected JSON type was\nprovided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header is\nmissing, not valid, or expired.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the query matched too many items, or too many inaccessible\nitems, to be processed.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when a referenced metadata template or item does not exist, or the\nuser does not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the enterprise exceeds the allowed request rate.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs while processing the query.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postQueryInsightsRoute = createRoute({
  method: 'post',
  path: '/query_insights',
  tags: ['Query'],
  summary: 'Create insights for Box items',
  description:
    'Computes aggregated metrics over Box items matching a query predicate.\nFilters are applied first, followed by optional grouping, after which the\nrequested metrics (such as `sum`, `avg`, `min`, `max`, and `count`) are\ncomputed for each resulting group or over the entire filtered dataset.',
  operationId: 'post_query_insights_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: QueryInsightsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the computed insight entries.',
      content: { 'application/json': { schema: QueryInsightsSchema } },
    },
    400: {
      description:
        'Returned when the query could not be parsed, the request body fails schema\nvalidation, or an unexpected JSON type was provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header is\nmissing, not valid, or expired.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description: 'Returned when the query is restricted for this enterprise or scope.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when a referenced metadata template does not exist, or the user\ndoes not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the enterprise exceeds the allowed request rate.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    500: {
      description: 'Returned when an unexpected server error occurs while computing insights.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleSystemsRoute = createRoute({
  method: 'get',
  path: '/shuttle_systems',
  tags: ['Shuttle'],
  summary: 'List shuttle systems',
  description: 'Returns a paginated list of shuttle systems accessible to the\nauthenticated user.',
  operationId: 'get_shuttle_systems_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle systems.',
      content: { 'application/json': { schema: ShuttleSystemsSchema } },
    },
    400: {
      description: 'Returned when the user has passed in a malformed `marker` or `limit`\nvalue.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleSystemsRoute = createRoute({
  method: 'post',
  path: '/shuttle_systems',
  tags: ['Shuttle'],
  summary: 'Create shuttle system',
  description:
    'Creates a new shuttle system. Only Windows agent systems can be created\nthrough the public API; other system types must be configured through the\nShuttle application.',
  operationId: 'post_shuttle_systems_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleSystemCreateRequestSchema,
          examples: {
            windows: {
              summary: 'Create a Windows agent system',
              value: { name: 'NYC File Server', system_type: 'windows' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created shuttle system.',
      content: { 'application/json': { schema: ShuttleSystemSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleSystemsShuttleSystemIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_systems/{shuttle_system_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle system by ID',
  description:
    'Returns details for a single shuttle system identified by its ID,\nincluding its type and connection state.',
  operationId: 'get_shuttle_systems_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_system_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_system_id',
            in: 'path',
            description: 'The unique identifier for the shuttle system.',
            required: true,
            schema: { type: 'string' },
            example: '6a315c0754833bfc5df067bf',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle system.',
      content: { 'application/json': { schema: ShuttleSystemSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle system is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShuttleSystemsShuttleSystemIdRoute = createRoute({
  method: 'put',
  path: '/shuttle_systems/{shuttle_system_id}',
  tags: ['Shuttle'],
  summary: 'Update shuttle system',
  description:
    'Updates the mutable properties of an existing shuttle system identified by\nits ID. Only the fields supplied in the request body are changed.',
  operationId: 'put_shuttle_systems_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_system_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_system_id',
            in: 'path',
            description: 'The unique identifier for the shuttle system.',
            required: true,
            schema: { type: 'string' },
            example: '6a315c0754833bfc5df067bf',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleSystemUpdateRequestSchema,
          examples: {
            rename: {
              summary: 'Rename a shuttle system',
              value: { name: 'NYC File Server (Primary)' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated shuttle system.',
      content: { 'application/json': { schema: ShuttleSystemSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed, empty, or fails\nvalidation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle system is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShuttleSystemsShuttleSystemIdRoute = createRoute({
  method: 'delete',
  path: '/shuttle_systems/{shuttle_system_id}',
  tags: ['Shuttle'],
  summary: 'Delete shuttle system',
  description:
    'Permanently deletes the shuttle system identified by its ID. This does not\naffect content that has already been migrated.',
  operationId: 'delete_shuttle_systems_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_system_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_system_id',
            in: 'path',
            description: 'The unique identifier for the shuttle system.',
            required: true,
            schema: { type: 'string' },
            example: '6a315c0754833bfc5df067bf',
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returns an empty response when the shuttle system was successfully\ndeleted.',
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle system is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute = createRoute({
  method: 'post',
  path: '/shuttle_systems/{shuttle_system_id}/issue_registration_token',
  tags: ['Shuttle'],
  summary: 'Issue registration token for Windows system',
  description:
    'Issues a new installation token for the Windows shuttle system identified\nby its ID. Paste the returned token into the Windows agent installer to\nregister the agent with this system.',
  operationId: 'post_shuttle_systems_id_issue_registration_token_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_system_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_system_id',
            in: 'path',
            description: 'The unique identifier for the shuttle system.',
            required: true,
            schema: { type: 'string' },
            example: '6a315c0754833bfc5df067bf',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the agent installation credentials for the Windows system.',
      content: { 'application/json': { schema: ShuttleAgentCredentialsSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle system is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleJobsRoute = createRoute({
  method: 'get',
  path: '/shuttle_jobs',
  tags: ['Shuttle'],
  summary: 'List shuttle jobs',
  description: 'Returns a paginated list of shuttle jobs accessible to the authenticated\nuser.',
  operationId: 'get_shuttle_jobs_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle jobs.',
      content: { 'application/json': { schema: ShuttleJobsSchema } },
    },
    400: {
      description: 'Returned when the user has passed in a malformed `marker` or `limit`\nvalue.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleJobsRoute = createRoute({
  method: 'post',
  path: '/shuttle_jobs',
  tags: ['Shuttle'],
  summary: 'Create shuttle job',
  description:
    'Creates a new shuttle job that describes a migration from the given source\nsystem into Box.',
  operationId: 'post_shuttle_jobs_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleJobCreateRequestSchema,
          examples: {
            transfer: {
              summary: 'Create a transfer job',
              value: {
                name: 'Q4 SharePoint to Box',
                job_type: 'transfer',
                source_system_id: '6a3ba68e810d9156194530a1',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created shuttle job.',
      content: { 'application/json': { schema: ShuttleJobSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the referenced source system cannot be found or the user\ndoes not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleJobsShuttleJobIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_jobs/{shuttle_job_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle job by ID',
  description:
    'Returns details for a single shuttle job identified by its ID, including\nits current state, mapping-preparation state, and configured source system.',
  operationId: 'get_shuttle_jobs_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle job.',
      content: { 'application/json': { schema: ShuttleJobSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShuttleJobsShuttleJobIdRoute = createRoute({
  method: 'put',
  path: '/shuttle_jobs/{shuttle_job_id}',
  tags: ['Shuttle'],
  summary: 'Update shuttle job',
  description:
    'Updates the mutable properties of an existing shuttle job identified by its\nID. Only the fields supplied in the request body are changed.',
  operationId: 'put_shuttle_jobs_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleJobUpdateRequestSchema,
          examples: {
            rename: {
              summary: 'Rename a shuttle job',
              value: { name: 'Q4 SharePoint to Box (Primary)' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated shuttle job.',
      content: { 'application/json': { schema: ShuttleJobSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed, empty, or fails\nvalidation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShuttleJobsShuttleJobIdRoute = createRoute({
  method: 'delete',
  path: '/shuttle_jobs/{shuttle_job_id}',
  tags: ['Shuttle'],
  summary: 'Delete shuttle job',
  description:
    'Permanently deletes the shuttle job identified by its ID. This does not\naffect content that has already been migrated.',
  operationId: 'delete_shuttle_jobs_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returns an empty response when the shuttle job was successfully deleted.',
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleJobsShuttleJobIdStartRoute = createRoute({
  method: 'post',
  path: '/shuttle_jobs/{shuttle_job_id}/start',
  tags: ['Shuttle'],
  summary: 'Start shuttle job',
  description:
    'Starts the job in the given mode. When no body is provided the job runs in\nsimulation mode.',
  operationId: 'post_shuttle_jobs_id_start_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleJobStartRequestSchema,
          examples: {
            simulation: { summary: 'Start a simulation run', value: { mode: 'simulation' } },
          },
        },
      },
    },
  },
  responses: {
    202: { description: 'The shuttle job was accepted and is being started.' },
    400: {
      description: 'Returned when the request body is malformed or fails validation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description:
        'Returned when the job is not ready or is in a state that does not allow\nstarting.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleJobsShuttleJobIdStopRoute = createRoute({
  method: 'post',
  path: '/shuttle_jobs/{shuttle_job_id}/stop',
  tags: ['Shuttle'],
  summary: 'Stop shuttle job',
  description:
    'Stops a running shuttle job identified by its ID. Any work already in\nprogress is allowed to finish before the job transitions to a stopped\nstate.',
  operationId: 'post_shuttle_jobs_id_stop_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'The shuttle job was accepted and is being stopped.' },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when the job is not in a running state and cannot be stopped.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleJobsShuttleJobIdPrepareMigrationRoute = createRoute({
  method: 'post',
  path: '/shuttle_jobs/{shuttle_job_id}/prepare_migration',
  tags: ['Shuttle'],
  summary: 'Prepare migration',
  description:
    'Validates the configured account and path mappings before a transfer. Only\nrelevant when account mapping is enabled.',
  operationId: 'post_shuttle_jobs_id_prepare_migration_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'The migration preparation was accepted and is being processed.' },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description:
        'Returned when the job is not in a state that allows migration\npreparation, or account mapping is not enabled.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleRunsRoute = createRoute({
  method: 'get',
  path: '/shuttle_runs',
  tags: ['Shuttle'],
  summary: 'List shuttle runs',
  description: 'Returns a paginated list of runs for the shuttle job identified by\n`job_id`.',
  operationId: 'get_shuttle_runs_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose runs to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle runs.',
      content: { 'application/json': { schema: ShuttleRunsSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleRunsShuttleRunIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_runs/{shuttle_run_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle run by ID',
  description:
    'Returns details for a single shuttle run identified by its ID, including\nits mode, state, timing, and transfer statistics.',
  operationId: 'get_shuttle_runs_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_run_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_run_id',
            in: 'path',
            description:
              'The unique identifier for the shuttle run, in the form\n`{job_id}:{run_number}`.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1:42',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle run.',
      content: { 'application/json': { schema: ShuttleRunSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle run is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleJobSchedulesRoute = createRoute({
  method: 'get',
  path: '/shuttle_job_schedules',
  tags: ['Shuttle'],
  summary: 'List shuttle job schedules',
  description: 'Returns a paginated list of schedules for the shuttle job identified by\n`job_id`.',
  operationId: 'get_shuttle_job_schedules_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose schedules to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle job schedules.',
      content: { 'application/json': { schema: ShuttleJobSchedulesSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleJobSchedulesRoute = createRoute({
  method: 'post',
  path: '/shuttle_job_schedules',
  tags: ['Shuttle'],
  summary: 'Create shuttle job schedule',
  description:
    "Creates a schedule that starts runs of the shuttle job identified by\n`job_id`. The schedule starts a run either at a wall-clock time or after\nanother job's run meets a condition. Schedules cannot start a run in\n`scan` mode.",
  operationId: 'post_shuttle_job_schedules_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleJobScheduleCreateRequestSchema,
          examples: {
            by_time: {
              summary: 'Create a daily time-based schedule',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                run_mode: 'transfer',
                state: 'enabled',
                description: 'Nightly finance share replay.',
                trigger: {
                  type: 'by_time',
                  start_at: '2026-03-16T09:00:00',
                  time_zone: 'America/Los_Angeles',
                  repeat: 'daily',
                },
              },
            },
            by_job: {
              summary: 'Create a job-triggered schedule',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                run_mode: 'analysis',
                trigger: {
                  type: 'by_job',
                  triggered_by_job_id: '8d2ca68e810d9156194530c3',
                  last_run_condition: 'on_success',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created shuttle job schedule.',
      content: { 'application/json': { schema: ShuttleJobScheduleSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when a referenced shuttle job cannot be found or the user\ndoes not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleJobSchedulesShuttleJobScheduleIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_job_schedules/{shuttle_job_schedule_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle job schedule',
  description: 'Retrieves the shuttle job schedule identified by its ID.',
  operationId: 'get_shuttle_job_schedules_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_schedule_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_schedule_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job schedule.',
            required: true,
            schema: { type: 'string' },
            example: '7c1ba68e810d9156194530b2',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle job schedule.',
      content: { 'application/json': { schema: ShuttleJobScheduleSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job schedule is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShuttleJobSchedulesShuttleJobScheduleIdRoute = createRoute({
  method: 'put',
  path: '/shuttle_job_schedules/{shuttle_job_schedule_id}',
  tags: ['Shuttle'],
  summary: 'Update shuttle job schedule',
  description:
    'Updates the mutable properties of an existing shuttle job schedule\nidentified by its ID. Only the fields supplied in the request body are\nchanged. The owning job cannot be changed.',
  operationId: 'put_shuttle_job_schedules_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_schedule_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_schedule_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job schedule.',
            required: true,
            schema: { type: 'string' },
            example: '7c1ba68e810d9156194530b2',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleJobScheduleUpdateRequestSchema,
          examples: {
            pause: { summary: 'Pause a schedule', value: { state: 'paused' } },
            replace_trigger: {
              summary: 'Replace the trigger with a weekly time-based schedule',
              value: {
                trigger: {
                  type: 'by_time',
                  start_at: '2026-03-16T09:00:00',
                  time_zone: 'America/Los_Angeles',
                  repeat: 'weekly',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated shuttle job schedule.',
      content: { 'application/json': { schema: ShuttleJobScheduleSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed, empty, or fails\nvalidation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job schedule is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShuttleJobSchedulesShuttleJobScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/shuttle_job_schedules/{shuttle_job_schedule_id}',
  tags: ['Shuttle'],
  summary: 'Delete shuttle job schedule',
  description:
    'Permanently deletes the shuttle job schedule identified by its ID. This\ndoes not affect runs that have already started.',
  operationId: 'delete_shuttle_job_schedules_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_job_schedule_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_job_schedule_id',
            in: 'path',
            description: 'The unique identifier for the shuttle job schedule.',
            required: true,
            schema: { type: 'string' },
            example: '7c1ba68e810d9156194530b2',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Returns an empty response when the shuttle job schedule was\nsuccessfully deleted.',
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job schedule is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttlePathMappingsRoute = createRoute({
  method: 'get',
  path: '/shuttle_path_mappings',
  tags: ['Shuttle'],
  summary: 'List shuttle path mappings',
  description:
    'Returns a paginated list of path mappings for the shuttle job identified\nby `job_id`.',
  operationId: 'get_shuttle_path_mappings_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose path mappings to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle path mappings.',
      content: { 'application/json': { schema: ShuttlePathMappingsSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttlePathMappingsRoute = createRoute({
  method: 'post',
  path: '/shuttle_path_mappings',
  tags: ['Shuttle'],
  summary: 'Create shuttle path mapping',
  description:
    'Creates a path mapping that connects a source location on the migrated\nsystem to a destination in Box for the given shuttle job.',
  operationId: 'post_shuttle_path_mappings_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttlePathMappingCreateRequestSchema,
          examples: {
            shared_space_to_account: {
              summary: 'Map a shared space path to a Box account folder',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                source: {
                  type: 'shared_space',
                  space: 'HR Team Site',
                  path: '/Shared Documents',
                  path_id: 'sp-folder-001',
                  is_directory: true,
                },
                target: {
                  type: 'account',
                  path: '/HR Migration',
                  path_id: '1234567890',
                  account: { email: 'admin@company.box.com' },
                },
              },
            },
            skip_path: {
              summary: 'Skip a source path',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                is_path_skipped: true,
                source: {
                  type: 'shared_space',
                  space: 'HR Team Site',
                  path: '/Archive',
                  is_directory: true,
                },
                target: null,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created shuttle path mapping.',
      content: { 'application/json': { schema: ShuttlePathMappingSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the referenced shuttle job cannot be found or the user\ndoes not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttlePathMappingsShuttlePathMappingIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_path_mappings/{shuttle_path_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle path mapping by ID',
  description:
    'Returns details for a single shuttle path mapping identified by its ID,\nincluding the source location and destination, if any.',
  operationId: 'get_shuttle_path_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_path_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_path_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle path mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7a24ea17bc9461eeacd',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle path mapping.',
      content: { 'application/json': { schema: ShuttlePathMappingSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle path mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShuttlePathMappingsShuttlePathMappingIdRoute = createRoute({
  method: 'put',
  path: '/shuttle_path_mappings/{shuttle_path_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Update shuttle path mapping',
  description:
    'Updates the mutable properties of an existing shuttle path mapping\nidentified by its ID. Only the fields supplied in the request body are\nchanged.',
  operationId: 'put_shuttle_path_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_path_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_path_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle path mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7a24ea17bc9461eeacd',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttlePathMappingUpdateRequestSchema,
          examples: {
            skip_path: {
              summary: 'Skip a mapped path and clear the destination',
              value: { is_path_skipped: true, target: null },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated shuttle path mapping.',
      content: { 'application/json': { schema: ShuttlePathMappingSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed, empty, or fails\nvalidation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle path mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShuttlePathMappingsShuttlePathMappingIdRoute = createRoute({
  method: 'delete',
  path: '/shuttle_path_mappings/{shuttle_path_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Delete shuttle path mapping',
  description:
    'Permanently deletes the shuttle path mapping identified by its ID. This\ndoes not affect content that has already been migrated.',
  operationId: 'delete_shuttle_path_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_path_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_path_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle path mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7a24ea17bc9461eeacd',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Returns an empty response when the shuttle path mapping was\nsuccessfully deleted.',
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle path mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttlePathMappingImportsRoute = createRoute({
  method: 'post',
  path: '/shuttle_path_mapping_imports',
  tags: ['Shuttle'],
  summary: 'Create shuttle path mapping import',
  description:
    "Accepts a spreadsheet of path mappings, already stored in Box, and replaces\nthe job's path mappings.\nA file that is not a mapping workbook, or that exceeds the size or row\nlimits (10 MiB Box download limit; 100,000 mapping rows), returns `400`\nsynchronously and leaves the job unchanged.\nAn accepted import always replaces every path mapping on the job. When all\nrows are valid the workbook is deployed in full. When any row is invalid\nthe job ends with no path mappings and `mapping_state` becomes\n`paths_import_rejected` until the next import or the next manual\npath-mapping change. Row problems are listed by\n`GET /shuttle_mapping_errors?job_id=…` with category `path_import`, messages\nof the form `Row N: …`, at most 500 entries plus one overflow entry.\nValidation and deployment are asynchronous after acceptance. Poll\n`GET /shuttle_jobs/{shuttle_job_id}` while `mapping_state` is\n`importing_paths`. Only one import may be in flight per job.",
  operationId: 'post_shuttle_path_mapping_imports_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttlePathMappingImportCreateRequestSchema,
          examples: {
            workbook: {
              summary: 'Import path mappings from a Box file',
              value: { job_id: '6a3ba68e810d9156194530a1', file_id: '12345678901' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The import was accepted. Validation and deployment continue\nasynchronously. Poll `GET /shuttle_jobs/{shuttle_job_id}` until\n`mapping_state` is no longer `importing_paths`. A rejected import ends\nwith `mapping_state` `paths_import_rejected` and an empty path-mapping\nlist; a successful import moves on to a later mapping-preparation state\nsuch as `paths_ready` or `ready`.',
    },
    400: {
      description:
        "Returned when the request body is malformed or fails request validation,\nor when the referenced file cannot be accepted as a mapping workbook\n(for example it is not a spreadsheet, has no mapping sheets, or exceeds\nthe size or row limits). Nothing is stored and the job's path mappings\nare unchanged. Row-level mapping errors are not returned here; after a\n`202` they finish asynchronously as `paths_import_rejected` and appear\non `GET /shuttle_mapping_errors`.",
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found, or the referenced file does\nnot exist or cannot be read by the authenticated user.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when an import is already in progress for the shuttle job.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleSubjectMappingImportsRoute = createRoute({
  method: 'post',
  path: '/shuttle_subject_mapping_imports',
  tags: ['Shuttle'],
  summary: 'Create shuttle subject mapping import',
  description:
    "Accepts a spreadsheet of subject (user and group) mappings, already stored\nin Box, and replaces the job's subject mappings.\nA file that is not a subject-mapping workbook, or that exceeds the size or\nrow limits (10 MiB Box download limit; 50,000 mapping rows), returns `400`\nsynchronously and leaves the job unchanged.\nAn accepted import always replaces every subject mapping on the job. When\nall rows are valid the workbook is deployed in full. When any row is\ninvalid the job ends with no subject mappings and `mapping_state` becomes\n`subjects_import_rejected` until the next import or the next manual\nsubject-mapping change. Row problems are listed by\n`GET /shuttle_mapping_errors?job_id=…` with category `subject_import`,\nmessages of the form `Row N: …`, at most 500 entries plus one overflow\nentry.\nValidation and deployment are asynchronous after acceptance. Poll\n`GET /shuttle_jobs/{shuttle_job_id}` while `mapping_state` is\n`importing_subjects`. Only one import may be in flight per job. The job\nmust map subjects (`account_mapping` enabled) and its source scan must be\nfinished; otherwise the request returns `409`.\n\nExpected workbook format (API clients cannot download the UI template):\nsheets `Users` and/or `Groups` (a sheet named `Subjects` is also accepted).\nColumns are `Source User <Key>`, `Target User <Key>`, `Skip` on `Users`,\nand `Source Group <Key>`, `Target Group <Key>`, `Skip` on `Groups`, where\n`<Key>` is the primary identifier for that role and system:\n- Users: `Email` for most systems; `ID` for `SharePoint` (2007/2010/2013);\n  `Name` for Windows (`windows_union`, stored as the user id).\n- Groups: `Name` for most systems; `Email` for Google Drive admin groups.\nSource rows for a template can be taken from\n`GET /shuttle_discovered_subjects`.",
  operationId: 'post_shuttle_subject_mapping_imports_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleSubjectMappingImportCreateRequestSchema,
          examples: {
            workbook: {
              summary: 'Import subject mappings from a Box file',
              value: { job_id: '6a3ba68e810d9156194530a1', file_id: '12345678901' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The import was accepted. Validation and deployment continue\nasynchronously. Poll `GET /shuttle_jobs/{shuttle_job_id}` until\n`mapping_state` is no longer `importing_subjects`. A rejected import\nends with `mapping_state` `subjects_import_rejected` and an empty\nsubject-mapping list; a successful import moves on to a later\nmapping-preparation state such as `mapping_complete` or `ready`.',
    },
    400: {
      description:
        "Returned when the request body is malformed or fails request validation,\nor when the referenced file cannot be accepted as a subject-mapping\nworkbook (for example it is not a spreadsheet, has none of the `Users`,\n`Groups`, or `Subjects` sheets, or exceeds the size or row limits).\nNothing is stored and the job's subject mappings are unchanged.\nRow-level mapping errors are not returned here; after a `202` they\nfinish asynchronously as `subjects_import_rejected` and appear on\n`GET /shuttle_mapping_errors`.",
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found, or the referenced file does\nnot exist or cannot be read by the authenticated user.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description:
        'Returned when an import is already in progress for the shuttle job, the\njob does not map subjects, or the source scan has not finished (or is\nout of date relative to the current path mappings).',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleSubjectMappingsRoute = createRoute({
  method: 'get',
  path: '/shuttle_subject_mappings',
  tags: ['Shuttle'],
  summary: 'List shuttle subject mappings',
  description:
    'Returns a paginated list of subject mappings for the shuttle job identified\nby `job_id`.',
  operationId: 'get_shuttle_subject_mappings_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose subject mappings to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle subject mappings.',
      content: { 'application/json': { schema: ShuttleSubjectMappingsSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleSubjectMappingsRoute = createRoute({
  method: 'post',
  path: '/shuttle_subject_mappings',
  tags: ['Shuttle'],
  summary: 'Create shuttle subject mapping',
  description:
    'Creates a subject mapping that connects a discovered source subject to a\nBox user or group for the given shuttle job.',
  operationId: 'post_shuttle_subject_mappings_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleSubjectMappingCreateRequestSchema,
          examples: {
            map_user: {
              summary: 'Map a discovered user to a Box user',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                discovered_subject_id: '6a3ba7c02ea17bc9461eeacf',
                target: { type: 'user', id: '12345678' },
              },
            },
            skip_subject: {
              summary: 'Skip a discovered subject',
              value: {
                job_id: '6a3ba68e810d9156194530a1',
                discovered_subject_id: '6a3ba7c02ea17bc9461eeacf',
                is_subject_skipped: true,
                target: null,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created shuttle subject mapping.',
      content: { 'application/json': { schema: ShuttleSubjectMappingSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed or required fields are\nmissing.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the referenced shuttle job or discovered subject cannot\nbe found or the user does not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description:
        'Returned when the provided revision does not match the current\ndiscovery-requirements revision.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleSubjectMappingsShuttleSubjectMappingIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_subject_mappings/{shuttle_subject_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle subject mapping by ID',
  description:
    'Returns details for a single shuttle subject mapping identified by its ID,\nincluding the source subject and Box target, if any.',
  operationId: 'get_shuttle_subject_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_subject_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_subject_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle subject mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7b12ea17bc9461eeace',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle subject mapping.',
      content: { 'application/json': { schema: ShuttleSubjectMappingSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle subject mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const putShuttleSubjectMappingsShuttleSubjectMappingIdRoute = createRoute({
  method: 'put',
  path: '/shuttle_subject_mappings/{shuttle_subject_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Update shuttle subject mapping',
  description:
    'Updates the mutable properties of an existing shuttle subject mapping\nidentified by its ID. Only the fields supplied in the request body are\nchanged.',
  operationId: 'put_shuttle_subject_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_subject_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_subject_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle subject mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7b12ea17bc9461eeace',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleSubjectMappingUpdateRequestSchema,
          examples: {
            skip_subject: { summary: 'Skip a mapped subject', value: { is_subject_skipped: true } },
            remap_subject: {
              summary: 'Map a subject to a Box user',
              value: { is_subject_skipped: false, target: { type: 'user', id: '12345678' } },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated shuttle subject mapping.',
      content: { 'application/json': { schema: ShuttleSubjectMappingSchema } },
    },
    400: {
      description: 'Returned when the request body is malformed, empty, or fails\nvalidation.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle subject mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute = createRoute({
  method: 'delete',
  path: '/shuttle_subject_mappings/{shuttle_subject_mapping_id}',
  tags: ['Shuttle'],
  summary: 'Delete shuttle subject mapping',
  description: 'Permanently deletes the shuttle subject mapping identified by its ID.',
  operationId: 'delete_shuttle_subject_mappings_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_subject_mapping_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_subject_mapping_id',
            in: 'path',
            description: 'The unique identifier for the shuttle subject mapping.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba7b12ea17bc9461eeace',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Returns an empty response when the shuttle subject mapping was\nsuccessfully deleted.',
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle subject mapping is not found or the user does\nnot have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleDiscoveredSubjectsRoute = createRoute({
  method: 'get',
  path: '/shuttle_discovered_subjects',
  tags: ['Shuttle'],
  summary: 'List shuttle discovered subjects',
  description:
    'Returns a paginated list of subjects discovered on the source system for\nthe shuttle job identified by `job_id`.',
  operationId: 'get_shuttle_discovered_subjects_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description:
              'The unique identifier of the shuttle job whose discovered subjects to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of discovered subjects.',
      content: { 'application/json': { schema: ShuttleDiscoveredSubjectsSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttlePathEntriesRoute = createRoute({
  method: 'get',
  path: '/shuttle_path_entries',
  tags: ['Shuttle'],
  summary: 'List shuttle path entries',
  description:
    'Returns a paginated list of source or target path entries for a shuttle\njob. Call with only `job_id` and `side` to list the roots, then browse one\nlevel at a time using `path`, `path_id`, or both. Each entry includes\n`path`, `path_id`, `is_directory`, and a `scope` object (`account` or\n`shared_space`) so a mapping can be created from that row without extra\nbrowse state. Valid values depend on the selected system.',
  operationId: 'get_shuttle_path_entries_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose path entries to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
          },
        }),
      side: z
        .enum(['source', 'target'])
        .openapi({
          param: {
            name: 'side',
            in: 'query',
            description: 'The side of the migration to browse.',
            required: true,
            schema: { type: 'string', enum: ['source', 'target'] },
            example: 'source',
          },
        }),
      path: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description:
              'The human-readable parent path whose children are returned. This can\nbe used with or without `path_id`. Omit both, or pass `/` as `path`,\nto list root entries.',
            required: false,
            schema: { type: 'string', minLength: 1 },
            example: '/Shared Documents/Projects',
          },
        }),
      path_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path_id',
            in: 'query',
            description:
              'The `path_id` value of the parent entry whose children are\nreturned. This can be used with or without `path`. It distinguishes\npaths with identical names on systems that support stable identifiers.',
            required: false,
            schema: { type: 'string' },
            example: '01ABCDEF23456789',
          },
        }),
      account_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'account_email',
            in: 'query',
            description:
              'The email of the account whose path entries are returned. This is a\nsystem-native identifier and is not always an RFC 5322 address.',
            required: false,
            schema: { type: 'string' },
            example: 'user@example.com',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle path entries.',
      content: { 'application/json': { schema: ShuttlePathEntriesSchema } },
    },
    400: {
      description:
        'Returned when a required parameter is missing, a parameter is\nmalformed, or the selected system cannot browse the supplied\ncombination of `path` and `path_id`.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleMappingErrorsRoute = createRoute({
  method: 'get',
  path: '/shuttle_mapping_errors',
  tags: ['Shuttle'],
  summary: 'List shuttle mapping errors',
  description:
    'Returns a paginated list of mapping errors for a shuttle job. Only the latest\nrecord for each error is returned. The revision field identifies the mapping\nrevision in which that error was generated.',
  operationId: 'get_shuttle_mapping_errors_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'query',
            description: 'The unique identifier of the shuttle job whose mapping errors to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle mapping errors.',
      content: { 'application/json': { schema: ShuttleMappingErrorsSchema } },
    },
    400: {
      description:
        'Returned when `job_id` is missing or the user has passed in a malformed\n`marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle job is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleReportsRoute = createRoute({
  method: 'get',
  path: '/shuttle_reports',
  tags: ['Shuttle'],
  summary: 'List shuttle reports',
  description:
    'Returns a paginated list of reports generated for the shuttle run\nidentified by `run_id`.',
  operationId: 'get_shuttle_reports_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    query: z.object({
      run_id: z
        .string()
        .openapi({
          param: {
            name: 'run_id',
            in: 'query',
            description: 'The unique identifier of the shuttle run whose reports to list.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba68e810d9156194530a1:42',
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
  },
  responses: {
    200: {
      description: 'Returns a paginated list of shuttle reports.',
      content: { 'application/json': { schema: ShuttleReportsSchema } },
    },
    400: {
      description:
        'Returned when `run_id` is missing or the user has passed in a\nmalformed `marker` or `limit` value.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle run is not found or the user does not have\naccess to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const postShuttleReportsRoute = createRoute({
  method: 'post',
  path: '/shuttle_reports',
  tags: ['Shuttle'],
  summary: 'Create shuttle report',
  description:
    'Requests asynchronous generation of a report for a shuttle run. The\nreport is returned immediately in `pending` or `processing` status.\nPoll `GET /shuttle_reports/{shuttle_report_id}` while `status` is\n`pending` or `processing`. Stop when `status` is `complete`, `failed`,\n`canceled`, or `unknown`. Repeating this request with the same\nparameters reuses the existing report instead of creating a duplicate.',
  operationId: 'post_shuttle_reports_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ShuttleReportCreateRequestSchema,
          examples: {
            xlsx_event_log: {
              summary: 'Generate an Excel event log and transfer overview',
              value: {
                run_id: '6a3ba68e810d9156194530a1:42',
                format: 'xlsx',
                sections: ['event_log', 'transfer_overview'],
                users_scope: 'migrated',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The report was accepted for generation. Returns the shuttle report;\ngeneration continues asynchronously. Repeating this request with the\nsame parameters reuses the existing report instead of creating a\nduplicate.',
      content: { 'application/json': { schema: ShuttleReportSchema } },
    },
    400: {
      description:
        "Returned when the request body is malformed, required fields are\nmissing, or `sections` is not a subset of the run's\n`available_report_sections`.",
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the referenced shuttle run cannot be found or the user\ndoes not have access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    409: {
      description: 'Returned when a report cannot be generated for the run in its current\nstate.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})

export const getShuttleReportsShuttleReportIdRoute = createRoute({
  method: 'get',
  path: '/shuttle_reports/{shuttle_report_id}',
  tags: ['Shuttle'],
  summary: 'Get shuttle report by ID',
  description:
    'Returns details for a single shuttle report identified by its ID,\nincluding generation status and, once generation finishes, the Box\noutput reference.',
  operationId: 'get_shuttle_reports_id_v2026.0',
  request: {
    headers: z.object({ 'box-version': BoxVersionHeaderParamsSchema }),
    params: z.object({
      shuttle_report_id: z
        .string()
        .openapi({
          param: {
            name: 'shuttle_report_id',
            in: 'path',
            description: 'The unique identifier for the shuttle report.',
            required: true,
            schema: { type: 'string' },
            example: '6a3ba8d14f2c91e8370b4d12',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the shuttle report.',
      content: { 'application/json': { schema: ShuttleReportSchema } },
    },
    401: {
      description:
        'Returned when the access token provided in the `Authorization` header\nis not recognized or not provided.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    403: {
      description:
        'Returned when the authenticated user is not an admin or co-admin with\npermission to manage enterprise properties.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    404: {
      description:
        'Returned when the shuttle report is not found or the user does not\nhave access to it.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    429: {
      description: 'Returned when the user has sent too many requests in a given amount of\ntime.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
    default: {
      description: 'An unexpected client error.',
      content: { 'application/json': { schema: ClientErrorSchema } },
    },
  },
})
