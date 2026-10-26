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
