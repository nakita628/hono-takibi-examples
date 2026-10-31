import { createRoute, z } from '@hono/zod-openapi'

const AssetSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the asset was created' }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Display name of the asset. Mirrors name for backwards compatibility.',
      }),
    hash: z
      .string()
      .regex(/^blake3:[a-f0-9]{64}$/)
      .exactOptional()
      .openapi({ description: 'Blake3 hash of the asset content.' }),
    id: z.uuid().openapi({ description: 'Unique identifier for the asset' }),
    is_immutable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this asset is immutable (cannot be modified or deleted)' }),
    job_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the job that created this asset, if available' }),
    last_access_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the asset was last accessed' }),
    loader_path: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The bare value a loader widget consumes for this asset. For models it is the path inside the category folder (e.g. "flux.safetensors" for "models/checkpoints/flux.safetensors"), which is what the model resolver matches. For input/output/temp it is the content hash, because those assets are fetched by hash rather than staged by name — that is the value LoadImage-style widgets must carry. Clients add the "[output]"/"[temp]" annotation from the asset\'s own type, so it is never included here. Null when no such value can be derived.',
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'System-managed metadata from download sources (HuggingFace, CivitAI, etc.) - read-only, not user-modifiable',
        readOnly: true,
      }),
    mime_type: z.string().exactOptional().openapi({ description: 'MIME type of the asset' }),
    name: z.string().openapi({ description: 'Name of the asset file' }),
    preview_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the preview asset if available' }),
    preview_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL for asset preview/thumbnail' }),
    short_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Durable, owner-gated short link to this asset's content (relative `/api/s/{id}` path). Stable across the underlying signed URL's expiry — resolving it re-mints a fresh signed URL on every request — so it is safe to persist or share into chat, unlike `preview_url`. Only the minting user can resolve it. Omitted when the short-link surface is disabled or the asset has no resolvable content hash.",
        'x-runtime': ['cloud'],
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Size of the asset in bytes' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags associated with the asset' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the asset was last updated' }),
    user_metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Custom user metadata for the asset' }),
  })
  .openapi({
    description: 'Represents a user-owned asset (image, video, or other generated output).',
    required: ['id', 'name', 'created_at', 'updated_at'],
  })
  .openapi('Asset')

const AssetCreatedSchema = AssetSchema.and(
  z
    .object({
      created_new: z
        .boolean()
        .openapi({
          description: 'Whether this was a new asset creation (true) or returned existing (false)',
        }),
    })
    .openapi({ required: ['created_new'] }),
)
  .openapi({ description: 'Response returned when a new asset is successfully created.' })
  .openapi('AssetCreated')

const AssetInfoSchema = z
  .object({
    id: z.string().openapi({ description: 'Asset identifier.' }),
    in_library: z.boolean().openapi({ description: 'Whether the caller already owns this asset.' }),
    model: z.boolean().openapi({ description: 'Whether this asset is a model.' }),
    name: z.string(),
    preview_url: z.string().openapi({ description: 'Signed URL for previewing the asset.' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether this is a public (platform-provided) asset.' }),
    storage_url: z.string(),
  })
  .openapi({
    description: 'Lightweight asset reference used in workflow publishing payloads.',
    required: ['id', 'name', 'preview_url', 'storage_url', 'model', 'public', 'in_library'],
  })
  .openapi('AssetInfo')

const AssetTagHistogramResponseSchema = z
  .object({
    tag_counts: z
      .record(z.string(), z.int())
      .openapi({
        description: 'Map of tag names to their occurrence counts on matching assets',
        example: { checkpoint: 32, lora: 193, vae: 6 },
      }),
  })
  .openapi({
    description: 'Histogram of tag counts used for refining asset search results.',
    required: ['tag_counts'],
  })
  .openapi('AssetTagHistogramResponse')

const AssetUpdatedSchema = z
  .object({
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Display name of the asset. Mirrors name for backwards compatibility.',
      }),
    hash: z
      .string()
      .regex(/^blake3:[a-f0-9]{64}$/)
      .exactOptional()
      .openapi({ description: 'Blake3 hash of the asset content.' }),
    id: z.uuid().openapi({ description: 'Asset ID' }),
    job_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the job that created this asset, if available' }),
    loader_path: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The bare value a loader widget consumes for this asset. For models it is the path inside the category folder (e.g. "flux.safetensors" for "models/checkpoints/flux.safetensors"), which is what the model resolver matches. For input/output/temp it is the content hash, because those assets are fetched by hash rather than staged by name — that is the value LoadImage-style widgets must carry. Clients add the "[output]"/"[temp]" annotation from the asset\'s own type, so it is never included here. Null when no such value can be derived.',
      }),
    mime_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated MIME type of the asset' }),
    name: z.string().exactOptional().openapi({ description: 'Updated name of the asset' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags associated with the asset' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the update' }),
    user_metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Updated custom metadata' }),
  })
  .openapi({
    description: 'Response returned when an existing asset is successfully updated.',
    required: ['id', 'updated_at'],
  })
  .openapi('AssetUpdated')

const ChurnkeyAuthResponseSchema = z
  .object({
    auth_hash: z
      .string()
      .openapi({ description: 'Hex-encoded HMAC-SHA256(customer_id, CHURNKEY_HMAC_SECRET)' }),
    customer_id: z.string().openapi({ description: 'Stripe customer ID for the workspace' }),
    mode: z
      .enum(['live', 'test', 'sandbox'])
      .openapi({ description: 'Churnkey environment matching the configured app' }),
  })
  .openapi({
    description:
      "Credentials the Churnkey embed requires to launch the cancel flow.\n`auth_hash` is hex-encoded HMAC-SHA256 of `customer_id` signed with the\nserver's CHURNKEY_HMAC_SECRET; it is bound to that single customer ID\nand must not be reused for other customers.\n",
    required: ['customer_id', 'auth_hash', 'mode'],
  })
  .openapi('ChurnkeyAuthResponse')

const CreateWorkflowRequestSchema = z
  .object({
    default_view: z
      .enum(['workflow', 'app'])
      .exactOptional()
      .openapi({ description: 'Default view mode' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the workflow' }),
    forked_from_workflow_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the source workflow if forked' }),
    forked_from_workflow_version_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the source workflow version if forked' }),
    name: z.string().exactOptional().openapi({ description: 'Display name for the workflow' }),
    workflow_json: z.looseObject({}).openapi({ description: 'The ComfyUI workflow JSON' }),
  })
  .openapi({
    description: 'Request body for creating a new saved workflow.',
    required: ['workflow_json'],
  })
  .openapi('CreateWorkflowRequest')

const CreateWorkflowVersionRequestSchema = z
  .object({
    base_version: z
      .int()
      .openapi({
        description: 'The version number this change is based on (for optimistic concurrency)',
      }),
    workflow_json: z.looseObject({}).openapi({ description: 'The updated ComfyUI workflow JSON' }),
  })
  .openapi({
    description: 'Request body for creating a new version of a saved workflow.',
    required: ['base_version', 'workflow_json'],
  })
  .openapi('CreateWorkflowVersionRequest')

const DeployToCloudErrorSchema = z
  .object({
    error: z.enum([
      'offline',
      'multiple_credentials',
      'invalid_api_key_format',
      'invalid_body',
      'missing_credentials',
      'unauthorized',
      'too_large',
      'too_many_bundles',
      'builder_rejected',
      'builder_unavailable',
      'builder_busy',
    ]),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable detail, present for invalid_body and builder_rejected.',
      }),
  })
  .openapi({
    description:
      "Error body of local ComfyUI's /api/deploy/* routes. Branch on `error`, never on `message`.",
    required: ['error'],
  })
  .openapi('DeployToCloudError')

const ErrorResponseSchema = z
  .object({
    code: z.string(),
    details: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Optional open object carrying structured, machine-readable context about the error (e.g. offending field names, validation specifics). Absent for most errors; consumers must not assume any particular shape.',
      }),
    message: z.string(),
  })
  .openapi({
    description: 'Standard error response with a machine-readable code and human-readable message.',
    required: ['code', 'message'],
  })
  .openapi('ErrorResponse')

const ExecutionErrorSchema = z
  .object({
    current_inputs: z
      .looseObject({})
      .openapi({ description: 'Input values at time of failure (empty object if not available)' }),
    current_outputs: z
      .looseObject({})
      .openapi({ description: 'Output values at time of failure (empty object if not available)' }),
    exception_message: z.string().openapi({ description: 'Human-readable error message' }),
    exception_type: z
      .string()
      .openapi({ description: 'Python exception type (e.g., "RuntimeError")' }),
    node_id: z.string().openapi({ description: 'ID of the node that failed' }),
    node_type: z.string().openapi({ description: 'Type name of the node (e.g., "KSampler")' }),
    traceback: z
      .array(z.string())
      .openapi({ description: 'Array of traceback lines (empty array if not available)' }),
  })
  .openapi({
    description: 'Detailed execution error information from ComfyUI',
    required: [
      'node_id',
      'node_type',
      'exception_message',
      'exception_type',
      'traceback',
      'current_inputs',
      'current_outputs',
    ],
  })
  .openapi('ExecutionError')

const FeedbackRequestSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The feedback content or message' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Additional metadata about the feedback' }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .exactOptional()
      .openapi({ description: "User's rating of ComfyUI Cloud experience (1-5 stars)" }),
    type: z
      .enum(['missing_nodes', 'general', 'missing_models'])
      .openapi({ description: 'Type of feedback being submitted' }),
  })
  .openapi({ description: 'Request to submit user feedback', required: ['type'] })
  .openapi('FeedbackRequest')

const FeedbackResponseSchema = z
  .object({})
  .openapi({ description: 'Response after submitting feedback' })
  .openapi('FeedbackResponse')

const ForkWorkflowRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name for the forked workflow' }),
    source_version: z.int().openapi({ description: 'Version number to fork from' }),
  })
  .openapi({
    description: "Request body for forking an existing workflow into the user's account.",
    required: ['source_version'],
  })
  .openapi('ForkWorkflowRequest')

const GetUserDataResponseFullFileSchema = z
  .object({
    modified: z
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
        description: 'UNIX timestamp of the last modification in milliseconds.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'File name or path relative to the user directory.' }),
    size: z.int().exactOptional().openapi({ description: 'File size in bytes.' }),
  })
  .openapi({ description: 'Individual file entry within a full user data response.', required: [] })
  .openapi('GetUserDataResponseFullFile')

const GetUserDataResponseFullSchema = z
  .array(GetUserDataResponseFullFileSchema)
  .openapi({
    description:
      'List of user data file entries (each with path, size, and modification time) returned when full_info=true.',
  })
  .openapi('GetUserDataResponseFull')

const GlobalSubgraphDataSchema = z
  .object({
    data: z.string().openapi({ description: 'The full subgraph JSON data as a string' }),
    info: z
      .object({
        node_pack: z
          .string()
          .openapi({ description: 'The node pack/module that provides this subgraph' }),
      })
      .openapi({
        description: 'Additional information about the subgraph',
        required: ['node_pack'],
      }),
    name: z.string().openapi({ description: 'Display name of the subgraph blueprint' }),
    source: z
      .string()
      .openapi({
        description:
          'Source type of the subgraph - "templates" for workflow templates or "custom_node" for custom node subgraphs',
      }),
  })
  .openapi({
    description: 'Full data for a global subgraph blueprint',
    required: ['source', 'name', 'info', 'data'],
  })
  .openapi('GlobalSubgraphData')

const GlobalSubgraphInfoSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full subgraph JSON data (may be empty in list view)' }),
    info: z
      .object({
        node_pack: z
          .string()
          .openapi({ description: 'The node pack/module that provides this subgraph' }),
      })
      .openapi({
        description: 'Additional information about the subgraph',
        required: ['node_pack'],
      }),
    name: z.string().openapi({ description: 'Display name of the subgraph blueprint' }),
    source: z
      .string()
      .openapi({
        description:
          'Source type of the subgraph - "templates" for workflow templates or "custom_node" for custom node subgraphs',
      }),
  })
  .openapi({
    description: 'Metadata for a global subgraph blueprint (without full data)',
    required: ['source', 'name', 'info'],
  })
  .openapi('GlobalSubgraphInfo')

const HistoryDetailEntrySchema = z
  .object({
    meta: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata about the execution and nodes' }),
    outputs: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Output data from execution (generated images, files, etc.)' }),
    prompt: z
      .object({
        extra_data: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'Additional execution data' }),
        outputs_to_execute: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Output nodes to execute' }),
        priority: z.float64().exactOptional().openapi({ description: 'Execution priority' }),
        prompt: z.looseObject({}).exactOptional().openapi({ description: 'The workflow nodes' }),
        prompt_id: z.string().exactOptional().openapi({ description: 'The prompt ID' }),
      })
      .exactOptional()
      .openapi({ description: 'Full prompt execution data', required: [] }),
    status: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Execution status and timeline information' }),
  })
  .openapi({ description: 'History entry with full prompt data', required: [] })
  .openapi('HistoryDetailEntry')

const HistoryDetailResponseSchema = z
  .record(z.string(), HistoryDetailEntrySchema)
  .openapi({
    description:
      'Detailed execution history response for a specific prompt.\nReturns a dictionary with prompt_id as key and full history data as value.\n',
  })
  .openapi('HistoryDetailResponse')

const HistoryEntrySchema = z
  .object({
    create_time: z
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
        description: 'Job creation timestamp (Unix timestamp in milliseconds)',
      }),
    meta: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata about the execution and nodes' }),
    outputs: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Output data from execution (generated images, files, etc.)' }),
    prompt: z
      .object({
        extra_data: z
          .looseObject({})
          .exactOptional()
          .openapi({
            description: 'Additional execution data (workflow removed from extra_pnginfo)',
          }),
        priority: z.float64().exactOptional().openapi({ description: 'Execution priority' }),
        prompt_id: z.string().exactOptional().openapi({ description: 'The prompt ID' }),
      })
      .exactOptional()
      .openapi({
        description: 'Filtered prompt execution data (lightweight format)',
        required: [],
      }),
    prompt_id: z.string().openapi({ description: 'Unique identifier for this prompt execution' }),
    status: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Execution status and timeline information' }),
    workflow_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'UUID identifying the workflow graph definition' }),
  })
  .openapi({
    description: 'History entry with prompt_id and execution data',
    required: ['prompt_id'],
  })
  .openapi('HistoryEntry')

const HistoryManageRequestSchema = z
  .strictObject({
    clear: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, clear all history for the authenticated user' }),
    delete: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of job IDs to delete from history' }),
  })
  .openapi({ description: 'Request to manage history operations', required: [] })
  .openapi('HistoryManageRequest')

const HistoryResponseSchema = z
  .object({
    history: z
      .array(HistoryEntrySchema)
      .openapi({ description: 'Array of history entries ordered by creation time (newest first)' }),
  })
  .openapi({
    description:
      'Execution history response with history array.\nReturns an object with a "history" key containing an array of history entries.\nEach entry includes prompt_id as a property along with execution data.\n',
    required: ['history'],
  })
  .openapi('HistoryResponse')

const JobOutputAssetSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the asset was created' }),
    hash: z
      .string()
      .regex(/^blake3:[a-f0-9]{64}$/)
      .exactOptional()
      .openapi({ description: 'Blake3 hash of the asset content.' }),
    id: z.uuid().openapi({ description: 'Unique identifier for the asset' }),
    mime_type: z.string().exactOptional().openapi({ description: 'MIME type of the asset' }),
    name: z.string().openapi({ description: 'Name of the asset file' }),
    node_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the workflow node that produced this asset, if known' }),
    output_index: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Zero-based index of this asset within the node's output slot, if known",
      }),
    output_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Output slot key under the producing node (e.g. "images"), if known',
      }),
    preview_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Relative URL for asset preview/thumbnail' }),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Size of the asset in bytes' }),
  })
  .openapi({
    description:
      "An asset produced by a job, enriched with the per-output node context\n(`node_id`, `output_key`, `output_index`) correlated from the job's\nexecution outputs by content hash. The node-context fields are null\nwhen the asset cannot be matched to an output entry.\n",
    required: ['id', 'name', 'created_at'],
  })
  .openapi('JobOutputAsset')

const PaginationInfoSchema = z
  .object({
    has_more: z
      .boolean()
      .openapi({ description: 'Whether more items are available beyond this page' }),
    limit: z.int().min(1).openapi({ description: 'Items per page' }),
    next_cursor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque cursor for the next page. Pass this value as the `after`\nquery parameter on the next request. Empty or absent when there\nare no more results.\n',
      }),
    offset: z
      .int()
      .min(0)
      .openapi({
        deprecated: true,
        description: 'Current offset (0-based). Deprecated: use cursor-based pagination.',
      }),
    total: z
      .int()
      .min(0)
      .openapi({
        description:
          'Total number of items matching filters (may be 0 when using cursor pagination)',
      }),
  })
  .openapi({
    description:
      'Pagination metadata included in list responses. Supports both legacy\noffset/limit pagination and cursor-based pagination. When cursor-based\npagination is used, `next_cursor` is the primary pagination token and\n`offset`/`total` may be zero.\n',
    required: ['offset', 'limit', 'total', 'has_more'],
  })
  .openapi('PaginationInfo')

const JobAssetsResponseSchema = z
  .object({
    assets: z
      .array(JobOutputAssetSchema)
      .openapi({
        description:
          "The job's output assets for the requested page (empty when the job produced none)",
      }),
    job_id: z.uuid().openapi({ description: 'ID of the job these assets belong to' }),
    pagination: PaginationInfoSchema,
  })
  .openapi({
    description: 'Paginated list of the assets produced by a single job.',
    required: ['job_id', 'assets', 'pagination'],
  })
  .openapi('JobAssetsResponse')

const JobCancelResponseSchema = z
  .object({
    cancelled: z
      .boolean()
      .openapi({
        description:
          'True when a cancel event was successfully dispatched by this call.\nFalse when the job was already in a terminal or cancelling state,\nin which case the call is a no-op (still 200 — idempotent).\n',
      }),
  })
  .openapi({
    description:
      'Response for POST /api/jobs/{job_id}/cancel. Returned on both fresh cancels and idempotent no-ops.',
    required: ['cancelled'],
  })
  .openapi('JobCancelResponse')

const JobDetailResponseSchema = z
  .object({
    create_time: z
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
        description: 'Job creation timestamp (Unix timestamp in milliseconds)',
      }),
    execution_end_time: z
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
          'Workflow execution completion timestamp (Unix milliseconds, only present for terminal states)',
      }),
    execution_error: ExecutionErrorSchema.exactOptional().openapi({
      description:
        'Detailed execution error from ComfyUI (only for failed jobs with structured error data)',
    }),
    execution_meta: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Node-level execution metadata (only for terminal states)' }),
    execution_start_time: z
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
          'Workflow execution start timestamp (Unix milliseconds, only present once execution has started)',
      }),
    execution_status: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'ComfyUI execution status and timeline (only for terminal states)' }),
    id: z.uuid().openapi({ description: 'Unique job identifier' }),
    outputs: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Full outputs object from ComfyUI (only for terminal states)' }),
    outputs_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of output files (omitted for non-terminal states)' }),
    preview_output: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Primary preview output (only for terminal states)' }),
    previewable_outputs_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Count of outputs classified as previewable media types (images, video, audio, 3D, text) — a subset of outputs_count (omitted for non-terminal states)',
      }),
    status: z
      .enum(['pending', 'in_progress', 'completed', 'failed', 'cancelled'])
      .openapi({ description: 'User-friendly job status' }),
    update_time: z
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
        description: 'Last update timestamp (Unix timestamp in milliseconds)',
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ID of the user that owns this job (see the `workspace_id`\ndescription above for why this is always the caller's own id\non a successful response).\n",
      }),
    workflow: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Full ComfyUI workflow (10-100KB, omitted if not available).\n\nSensitive credentials are redacted before the response is returned:\n`extra_data.api_key_comfy_org`, when present, is replaced with the\nliteral string `"[REDACTED]"`. The field is preserved (not removed)\nso existence checks still pass, but the value is not usable.\n',
      }),
    workflow_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'UUID identifying the workflow graph definition' }),
    workflow_version_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "UUID of the cloud workflow version this job is pinned to, if the\nsubmission carried one (see PromptRequest's workflow_version_id).\nAbsent for jobs submitted without that association, including\nevery job submitted through the public API v2 today.\n",
      }),
    workspace_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ID of the workspace that owns this job. A successful (200)\nresponse from this operation is only ever returned for the\ncaller's own job (see this operation's ownership-scoped\nquery), so this is always the caller's own workspace —\nconsumers that also need to correlate this job to its\nlive-progress broadcast channel (workspace+user scoped; see\nthe internal common/gateways/broadcast package) can use this\nvalue directly rather than resolving their own identity a\nsecond way.\n",
      }),
  })
  .openapi({
    description: 'Full job details including workflow and outputs',
    required: ['id', 'status', 'create_time', 'update_time'],
  })
  .openapi('JobDetailResponse')

const JobEntrySchema = z
  .object({
    create_time: z
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
        description: 'Job creation timestamp (Unix timestamp in milliseconds)',
      }),
    execution_end_time: z
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
          'Workflow execution completion timestamp (Unix milliseconds, only present for terminal states)',
      }),
    execution_error: ExecutionErrorSchema.exactOptional().openapi({
      description:
        'Detailed execution error from ComfyUI (only for failed jobs with structured error data)',
    }),
    execution_start_time: z
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
          'Workflow execution start timestamp (Unix milliseconds, only present for terminal states)',
      }),
    id: z.uuid().openapi({ description: 'Unique job identifier' }),
    outputs_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of output files (omitted for non-terminal states)' }),
    preview_output: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Primary preview output (only present for terminal states)' }),
    previewable_outputs_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Count of outputs classified as previewable media types (images, video, audio, 3D, text) — a subset of outputs_count (omitted for non-terminal states)',
      }),
    status: z
      .enum(['pending', 'in_progress', 'completed', 'failed', 'cancelled'])
      .openapi({ description: 'User-friendly job status' }),
    workflow_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'UUID identifying the workflow graph definition' }),
  })
  .openapi({
    description: 'Lightweight job data for list views (workflow and full outputs excluded)',
    required: ['id', 'status', 'create_time'],
  })
  .openapi('JobEntry')

const JobStatusResponseSchema = z
  .object({
    assigned_inference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The inference instance assigned to this job (if any)' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the job was created' }),
    error_message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Error message if the job failed' }),
    id: z.uuid().openapi({ description: 'The job ID' }),
    last_state_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the job status was last changed' }),
    status: z
      .enum(['waiting_to_dispatch', 'pending', 'in_progress', 'completed', 'error', 'cancelled'])
      .openapi({ description: 'Current job status' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the job was last updated' }),
  })
  .openapi({
    description: 'Job status information',
    required: ['id', 'status', 'created_at', 'updated_at'],
  })
  .openapi('JobStatusResponse')

const JobsCancelRequestSchema = z
  .strictObject({
    job_ids: z
      .array(z.uuid())
      .min(1)
      .max(100)
      .openapi({ description: 'Job identifiers (UUIDs) to cancel.' }),
  })
  .openapi({ description: 'Request to cancel multiple jobs by ID.', required: ['job_ids'] })
  .openapi('JobsCancelRequest')

const JobsCancelResponseSchema = z
  .object({
    cancelled: z
      .array(z.string())
      .openapi({
        description:
          'Job IDs for which a cancel event was successfully dispatched by this\ncall. Jobs already in a terminal or cancelling state are idempotently\nskipped and will not appear here.\n',
      }),
  })
  .openapi({ description: 'Response for POST /api/jobs/cancel.', required: ['cancelled'] })
  .openapi('JobsCancelResponse')

const JobsListResponseSchema = z
  .object({
    jobs: z
      .array(JobEntrySchema)
      .openapi({ description: 'Array of jobs ordered by specified sort field' }),
    pagination: PaginationInfoSchema,
  })
  .openapi({
    description: 'Paginated list of jobs for the authenticated user.',
    required: ['jobs', 'pagination'],
  })
  .openapi('JobsListResponse')

const ListAssetsResponseSchema = z
  .object({
    assets: z.array(AssetSchema).openapi({ description: 'List of assets matching the query' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Whether more assets are available beyond this page' }),
    next_cursor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque cursor to pass as the `after` query parameter to fetch the\nnext page. Omitted from the response when there are no more results.\n',
      }),
    total: z.int().openapi({ description: 'Total number of assets matching the filters' }),
  })
  .openapi({
    description: 'Paginated list of assets belonging to the authenticated user.',
    required: ['assets', 'total', 'has_more'],
  })
  .openapi('ListAssetsResponse')

const TagInfoSchema = z
  .object({
    count: z.int().openapi({ description: 'Number of assets using this tag' }),
    name: z.string().openapi({ description: 'Tag name' }),
  })
  .openapi({
    description: 'Metadata for a single tag that can be applied to assets.',
    required: ['name', 'count'],
  })
  .openapi('TagInfo')

const ListTagsResponseSchema = z
  .object({
    has_more: z.boolean().openapi({ description: 'Whether more tags are available' }),
    tags: z.array(TagInfoSchema).openapi({ description: 'List of tags' }),
    total: z.int().openapi({ description: 'Total number of tags' }),
  })
  .openapi({
    description: 'Paginated list of available asset tags.',
    required: ['tags', 'total', 'has_more'],
  })
  .openapi('ListTagsResponse')

const ModelFileSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The filename of the model', example: 'model.safetensors' }),
    pathIndex: z
      .int()
      .openapi({ description: 'Index of the path where this model is located', example: 0 }),
  })
  .openapi({
    description: 'Represents a model file with metadata',
    required: ['name', 'pathIndex'],
  })
  .openapi('ModelFile')

const ModelFolderSchema = z
  .object({
    folders: z
      .array(z.string())
      .openapi({
        description: 'List of paths where models of this type are stored',
        example: ['checkpoints'],
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the model folder', example: 'checkpoints' }),
  })
  .openapi({ description: 'Represents a folder containing models', required: ['name', 'folders'] })
  .openapi('ModelFolder')

const NodeInfoSchema = z
  .object({
    api_node: z.boolean().exactOptional().openapi({ description: 'Whether this is an API node' }),
    category: z.string().exactOptional().openapi({ description: 'Category of the node' }),
    deprecated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the node is deprecated' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the node' }),
    display_name: z.string().exactOptional().openapi({ description: 'Display name of the node' }),
    experimental: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the node is experimental' }),
    input: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Input specifications for the node' }),
    input_order: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'Order of inputs for display' }),
    name: z.string().exactOptional().openapi({ description: 'Internal name of the node' }),
    output: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output types of the node' }),
    output_is_list: z
      .array(z.boolean())
      .exactOptional()
      .openapi({ description: 'Whether each output is a list' }),
    output_name: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Names of the outputs' }),
    output_node: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this is an output node' }),
    output_tooltips: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tooltips for outputs' }),
    python_module: z
      .string()
      .exactOptional()
      .openapi({ description: 'Python module implementing the node' }),
  })
  .openapi({
    description: 'Metadata describing a single ComfyUI node type and its inputs/outputs.',
    required: [],
  })
  .openapi('NodeInfo')

const PromptErrorResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Error response for ComfyUI prompt execution.' })
  .openapi('PromptErrorResponse')

const PromptInfoSchema = z
  .object({
    exec_info: z
      .object({
        queue_remaining: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of items remaining in the queue' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'Metadata about the currently running and queued prompts.',
    required: [],
  })
  .openapi('PromptInfo')

const PromptRequestSchema = z
  .object({
    extra_data: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Extra data to be associated with the prompt' }),
    front: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, adds the prompt to the front of the queue' }),
    number: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Priority number for the queue (lower numbers have higher priority)',
      }),
    partial_execution_targets: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of node names to execute' }),
    prompt: z.looseObject({}).openapi({ description: 'The workflow graph to execute' }),
    workflow_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID identifying the cloud workflow entity to associate with this job',
      }),
    workflow_metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key/values echoed on the json websocket messages of this prompt that carry a `prompt_id`, so a client can tell which of its open workflows a message belongs to. Messages without a `prompt_id`, such as `status`, do not carry it, because a single socket serves every open workflow and such a message has no one owner. The server does not interpret the contents. Limited to 256 bytes serialised; a larger or non-object value is ignored. When this field is omitted, the server falls back to `{workflow_id: extra_data.extra_pnginfo.workflow.id}` if the submitted workflow carries an id, so a client that sends only the workflow gets the same messages. Note the `workflow_id` key a client typically sends here is the graph id from `extra_pnginfo.workflow.id`, which is not the same thing as the `workflow_id` field above.',
      }),
    workflow_version_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'UUID identifying the workflow version to associate with this job' }),
  })
  .openapi({
    description: 'Request body for submitting a ComfyUI workflow prompt for execution.',
    required: ['prompt'],
  })
  .openapi('PromptRequest')

const PromptResponseSchema = z
  .object({
    node_errors: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Any errors in the nodes of the prompt' }),
    number: z.number().exactOptional().openapi({ description: 'Priority number in the queue' }),
    prompt_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the prompt execution' }),
  })
  .openapi({
    description: 'Response returned after successfully queuing a workflow prompt.',
    required: [],
  })
  .openapi('PromptResponse')

const PublishWorkflowAssetsRequestSchema = z
  .object({
    asset_ids: z
      .array(z.string())
      .openapi({ description: 'IDs of assets (inputs and models) to snapshot.' }),
  })
  .openapi({
    description: 'Request body for publishing workflow assets to the Hub.',
    required: ['asset_ids'],
  })
  .openapi('PublishWorkflowAssetsRequest')

const PublishedWorkflowDetailSchema = z
  .object({
    assets: z
      .array(AssetInfoSchema)
      .openapi({ description: 'Published assets with their library status for the caller.' }),
    listed: z.boolean(),
    name: z.string().openapi({ description: 'Human-readable workflow name.' }),
    publish_time: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    share_id: z.string(),
    workflow_id: z.string(),
    workflow_json: z
      .looseObject({})
      .openapi({ description: 'The workflow JSON content at publish time.' }),
  })
  .openapi({
    description: 'Full detail of a publicly published workflow on the Hub.',
    required: ['share_id', 'workflow_id', 'name', 'listed', 'workflow_json', 'assets'],
  })
  .openapi('PublishedWorkflowDetail')

const QueueInfoSchema = z
  .object({
    queue_pending: z
      .array(
        z
          .array(z.any())
          .length(5)
          .openapi({
            description:
              'Queue item tuple format: [job_number, prompt_id, workflow_json, output_node_ids, metadata]\n- [0] job_number (integer): Position in queue (1-based)\n- [1] prompt_id (string): Job UUID\n- [2] workflow_json (object): Full ComfyUI workflow\n- [3] output_node_ids (array): Node IDs to return results from\n- [4] metadata (object): Contains {create_time: <milliseconds>}\n',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Array of pending job items (ordered by creation time, oldest first)',
      }),
    queue_running: z
      .array(
        z
          .array(z.any())
          .length(5)
          .openapi({
            description:
              'Queue item tuple format: [job_number, prompt_id, workflow_json, output_node_ids, metadata]\n- [0] job_number (integer): Position in queue (1-based)\n- [1] prompt_id (string): Job UUID\n- [2] workflow_json (object): Full ComfyUI workflow\n- [3] output_node_ids (array): Node IDs to return results from\n- [4] metadata (object): Contains {create_time: <milliseconds>}\n',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Array of currently running job items' }),
  })
  .openapi({ description: 'Queue information with pending and running jobs', required: [] })
  .openapi('QueueInfo')

const QueueManageRequestSchema = z
  .strictObject({
    clear: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, clear all pending jobs from the queue' }),
    delete: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of job IDs to cancel; pending and running jobs transition to cancelled',
      }),
  })
  .openapi({ description: 'Request to manage queue operations', required: [] })
  .openapi('QueueManageRequest')

const QueueManageResponseSchema = z
  .object({
    cleared: z.boolean().exactOptional().openapi({ description: 'Whether the queue was cleared' }),
    deleted: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of job IDs that were successfully cancelled' }),
  })
  .openapi({
    description: 'Response after a queue management action (delete or clear).',
    required: [],
  })
  .openapi('QueueManageResponse')

const SystemStatsResponseSchema = z
  .object({
    devices: z.array(
      z
        .object({
          name: z.string().openapi({ description: 'Device name' }),
          type: z.string().openapi({ description: 'Device type' }),
          vram_free: z.number().exactOptional().openapi({ description: 'Free VRAM in bytes' }),
          vram_total: z.number().exactOptional().openapi({ description: 'Total VRAM in bytes' }),
        })
        .openapi({ required: ['name', 'type'] }),
    ),
    system: z
      .object({
        argv: z.array(z.string()).openapi({ description: 'Command line arguments' }),
        cloud_version: z
          .string()
          .exactOptional()
          .openapi({ description: 'Cloud ingest service version (commit hash)' }),
        comfyui_frontend_version: z
          .string()
          .exactOptional()
          .openapi({ description: 'ComfyUI frontend version (commit hash or tag)' }),
        comfyui_version: z.string().openapi({ description: 'ComfyUI version' }),
        deploy_environment: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'How this ComfyUI instance is deployed (e.g. cloud, local-git, local-portable, local-desktop)',
          }),
        embedded_python: z.boolean().openapi({ description: 'Whether using embedded Python' }),
        os: z.string().openapi({ description: 'Operating system' }),
        python_version: z.string().openapi({ description: 'Python version' }),
        pytorch_version: z.string().openapi({ description: 'PyTorch version' }),
        ram_free: z.number().openapi({ description: 'Free RAM in bytes' }),
        ram_total: z.number().openapi({ description: 'Total RAM in bytes' }),
        workflow_templates_version: z
          .string()
          .exactOptional()
          .openapi({ description: 'Workflow templates version' }),
      })
      .openapi({
        required: [
          'os',
          'python_version',
          'embedded_python',
          'comfyui_version',
          'pytorch_version',
          'argv',
          'ram_total',
          'ram_free',
        ],
      }),
  })
  .openapi({ description: 'System statistics response', required: ['system', 'devices'] })
  .openapi('SystemStatsResponse')

const TagsModificationResponseSchema = z
  .object({
    added: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags that were successfully added (for add operation)' }),
    already_present: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags that were already present (for add operation)' }),
    not_present: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags that were not present (for remove operation)' }),
    removed: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags that were successfully removed (for remove operation)' }),
    total_tags: z
      .array(z.string())
      .openapi({ description: 'All tags on the asset after the operation' }),
  })
  .openapi({
    description: 'Response after adding, updating, or removing tags on an asset.',
    required: ['total_tags'],
  })
  .openapi('TagsModificationResponse')

const TaskEntrySchema = z
  .object({
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When task completed or failed (null if not finished)' }),
    create_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Task creation timestamp' }),
    id: z.uuid().openapi({ description: 'Unique task identifier' }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When task execution started (null if not started)' }),
    status: z
      .enum(['created', 'running', 'completed', 'failed'])
      .openapi({ description: 'Current task status' }),
    task_name: z.string().openapi({ description: 'Task type name (e.g., model_upload)' }),
  })
  .openapi({
    description: 'Task data for list views',
    required: ['id', 'task_name', 'status', 'create_time'],
  })
  .openapi('TaskEntry')

const TaskResponseSchema = z
  .object({
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When task completed or failed (null if not finished)' }),
    create_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Task creation timestamp' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message on failure (null if not failed)' }),
    id: z.uuid().openapi({ description: 'Unique task identifier' }),
    idempotency_key: z
      .string()
      .openapi({ description: 'Caller-provided key for idempotent task creation' }),
    payload: z.looseObject({}).openapi({ description: 'Task input data' }),
    result: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Task output data (null if not completed)' }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When task execution started (null if not started)' }),
    status: z
      .enum(['created', 'running', 'completed', 'failed'])
      .openapi({ description: 'Current task status' }),
    task_name: z.string().openapi({ description: 'Task type name (e.g., model_upload)' }),
    update_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Task last update timestamp' }),
  })
  .openapi({
    description: 'Full task details including payload and result',
    required: [
      'id',
      'idempotency_key',
      'task_name',
      'payload',
      'status',
      'create_time',
      'update_time',
    ],
  })
  .openapi('TaskResponse')

const TasksListResponseSchema = z
  .object({
    pagination: PaginationInfoSchema,
    tasks: z
      .array(TaskEntrySchema)
      .openapi({ description: 'Array of tasks ordered by create_time' }),
  })
  .openapi({
    description: 'Paginated list of background tasks for the authenticated user.',
    required: ['tasks', 'pagination'],
  })
  .openapi('TasksListResponse')

const UpdateWorkflowRequestSchema = z
  .object({
    default_view: z
      .enum(['workflow', 'app'])
      .exactOptional()
      .openapi({ description: 'New default view mode' }),
    description: z.string().exactOptional().openapi({ description: 'New description' }),
    name: z.string().exactOptional().openapi({ description: 'New display name' }),
  })
  .openapi({ description: 'Request body for updating an existing saved workflow.', required: [] })
  .openapi('UpdateWorkflowRequest')

const UserDataResponseFullSchema = z
  .object({
    modified: z
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
        description: 'UNIX timestamp of the last modification in milliseconds.',
      }),
    path: z.string().exactOptional(),
    size: z.int().exactOptional(),
  })
  .openapi({
    description: 'User data listing entry with file metadata (path, size, modification time).',
    required: [],
  })
  .openapi('UserDataResponseFull')

const UserResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'Firebase UID of the authenticated user' }),
    status: z
      .string()
      .openapi({ description: 'User status (always "active" for authenticated users)' }),
  })
  .openapi({ description: 'User information response', required: ['id', 'status'] })
  .openapi('UserResponse')

const WorkflowForkedFromSchema = z
  .object({
    workflow_id: z.string().exactOptional(),
    workflow_version_id: z.string().exactOptional(),
  })
  .openapi({
    description: 'Reference to the parent workflow from which this workflow was forked.',
    required: [],
  })
  .openapi('WorkflowForkedFrom')

const WorkflowResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    created_by: z.string(),
    default_view: z.enum(['workflow', 'app']).exactOptional(),
    description: z.string().exactOptional(),
    forked_from: WorkflowForkedFromSchema.exactOptional(),
    id: z.string(),
    latest_version: z.int(),
    name: z.string().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Full workflow entity including metadata and version history.',
    required: ['id', 'latest_version', 'created_by', 'created_at', 'updated_at'],
  })
  .openapi('WorkflowResponse')

const WorkflowListResponseSchema = z
  .object({ data: z.array(WorkflowResponseSchema), pagination: PaginationInfoSchema })
  .openapi({ description: 'Paginated list of saved workflows.', required: ['data', 'pagination'] })
  .openapi('WorkflowListResponse')

const WorkflowPublishInfoSchema = z
  .object({
    assets: z
      .array(AssetInfoSchema)
      .openapi({ description: 'Published assets (inputs and models).' }),
    listed: z.boolean(),
    publish_time: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    share_id: z.string(),
    workflow_id: z.string(),
  })
  .openapi({
    description: 'Publishing metadata for a workflow shared to the Hub.',
    required: ['workflow_id', 'share_id', 'listed', 'assets'],
  })
  .openapi('WorkflowPublishInfo')

const WorkflowVersionContentResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    created_by: z.string(),
    dependency_asset_ids: z.array(z.string()).exactOptional(),
    id: z.string(),
    version: z.int(),
    workflow_json: z.looseObject({}),
  })
  .openapi({
    description: 'Full workflow version including the serialized workflow JSON.',
    required: ['id', 'version', 'workflow_json', 'created_by', 'created_at'],
  })
  .openapi('WorkflowVersionContentResponse')

const WorkflowVersionResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    created_by: z.string(),
    id: z.string(),
    latest_version: z.int(),
    version: z.int(),
  })
  .openapi({
    description: 'Metadata for a single workflow version.',
    required: ['id', 'version', 'latest_version', 'created_by', 'created_at'],
  })
  .openapi('WorkflowVersionResponse')

const ApiKeyAuthSecurityScheme = {
  description:
    "API key authentication. Keys are prefixed with 'comfyui-' and can be\ngenerated from user account settings. Example: 'comfyui-abc123...'\n",
  in: 'header',
  name: 'X-API-Key',
  type: 'apiKey',
}

const BearerAuthSecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'Firebase JWT token authentication. Obtain a token by authenticating\nwith Firebase and pass it in the Authorization header.\n',
  scheme: 'bearer',
  type: 'http',
}

const CookieAuthSecurityScheme = {
  description:
    'Session cookie authentication. Set automatically after successful\nlogin via the /api/auth/session endpoint.\n',
  in: 'cookie',
  name: 'session',
  type: 'apiKey',
}

export const getApiAssetsRoute = createRoute({
  method: 'get',
  path: '/api/assets',
  tags: ['file'],
  summary: 'List user assets',
  description:
    'Retrieves a paginated list of assets belonging to the authenticated user.\nSupports filtering by tags, name, metadata, and sorting options.\n',
  operationId: 'listAssets',
  request: {
    query: z.object({
      include_tags: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Deprecated alias for `tags_all`, kept permanently for existing\ncallers. Filter assets that have ALL of these tags. Combining it\nwith `tags_all`, or exceeding 100 tags (counted after removing\nempty values and duplicates), returns 400 `INVALID_TAG_FILTER`.\n',
            explode: false,
            in: 'query',
            name: 'include_tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      exclude_tags: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Deprecated alias for `tags_none`, kept permanently for existing\ncallers. Exclude assets that have ANY of these tags. Combining it\nwith `tags_none`, or exceeding 100 tags (counted after removing\nempty values and duplicates), returns 400 `INVALID_TAG_FILTER`.\n',
            explode: false,
            in: 'query',
            name: 'exclude_tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_all: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter assets that have ALL of these tags. Tag values are opaque\nbyte-strings compared exactly and case-sensitively; unknown tags\nare not an error — they simply match nothing. Replaces the\ndeprecated `include_tags`. Sending both spellings, listing the\nsame tag here and in `tags_none`, or exceeding 100 tags per list\n(counted after removing empty values and duplicates) returns 400\n`INVALID_TAG_FILTER`.\n',
            explode: false,
            in: 'query',
            name: 'tags_all',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_any: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter assets that have AT LEAST ONE of these tags. Combines with\n`tags_all`/`tags_none` by intersection (`tags_none` always wins;\noverlap with `tags_none` is allowed and leaves a dead term).\nSupplying a positive tag filter (`tags_any`, `tags_all`, or\n`include_tags`) replaces the default category filter that is\notherwise applied. Lists over 100 tags (counted after removing\nempty values and duplicates) return 400 `INVALID_TAG_FILTER`.\n',
            explode: false,
            in: 'query',
            name: 'tags_any',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_none: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude assets that have ANY of these tags. Replaces the\ndeprecated `exclude_tags`. Sending both spellings, or exceeding\n100 tags per list (counted after removing empty values and\nduplicates), returns 400 `INVALID_TAG_FILTER`.\n',
            explode: false,
            in: 'query',
            name: 'tags_none',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      name_contains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter assets where name contains this substring (case-insensitive)',
            in: 'query',
            name: 'name_contains',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of assets to return (1-500)',
            in: 'query',
            name: 'limit',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of assets to skip for pagination',
            in: 'query',
            name: 'offset',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['name', 'created_at', 'updated_at', 'size', 'last_access_time'])
        .default('created_at')
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'created_at',
              enum: ['name', 'created_at', 'updated_at', 'size', 'last_access_time'],
              type: 'string',
            },
            required: false,
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'order',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      include_public: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include public/shared assets in results',
            in: 'query',
            name: 'include_public',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter assets by content hash, in the canonical `blake3:<hex>`\nform. Matches regardless of which of this asset store's two\ninternal hash storage formats the matching row was written\nunder (the canonical form used by from-hash-created references,\nor the raw `<hex>.<ext>`/bare `<hex>` storage key used by direct\nuploads) — both represent the same content hash.\n",
            in: 'query',
            name: 'hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Opaque cursor for keyset pagination. Pass the `next_cursor` value\nfrom the previous response to fetch the next page. When provided,\n`offset` is ignored. Cursor pagination is only supported with\n`sort` values `created_at`, `updated_at`, `name`, or `size`;\nrequests combining `after` with other sort fields return 400.\nThe cursor must have been minted under the same `sort` value used\nin the follow-up request.\n',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Assets returned',
      content: { 'application/json': { schema: ListAssetsResponseSchema } },
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiAssetsRoute = createRoute({
  method: 'post',
  path: '/api/assets',
  tags: ['file'],
  summary: 'Create a new asset',
  description:
    'Creates a new asset from a direct file upload (multipart/form-data) with associated metadata.\n\nIf an asset with the same hash already exists, returns the existing asset.\n',
  operationId: 'createAsset',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The asset file to upload',
                }),
              hash: z
                .string()
                .regex(/^(blake3|sha256):[a-f0-9]{64}$/)
                .exactOptional()
                .openapi({ description: 'Content hash of the file.' }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Optional asset ID for idempotent creation. If provided and asset exists, returns existing asset.',
                }),
              mime_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'MIME type of the asset (e.g., "image/png", "video/mp4")',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Display name for the asset' }),
              preview_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Optional preview asset ID. If not provided, images will use their own ID as preview.',
                }),
              tags: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON-encoded array of freeform tag strings, e.g. \'["models","checkpoint"]\'. Common types include "models", "input", "output", and "temp", but any tag can be used in any order.',
                }),
              user_metadata: z
                .string()
                .exactOptional()
                .openapi({ description: 'Custom JSON metadata as a string' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Asset already existed for this user (deduplicated by content hash); the\nexisting asset is returned with created_new=false.\n',
      content: { 'application/json': { schema: AssetCreatedSchema } },
    },
    201: {
      description: 'Asset created successfully (created_new=true)',
      content: { 'application/json': { schema: AssetCreatedSchema } },
    },
    400: {
      description: 'Invalid request (bad file, invalid content type, etc.)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    413: {
      description: 'File too large',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    415: {
      description: 'Unsupported media type',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error (e.g., disallowed model_type tag)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiAssetsIdRoute = createRoute({
  method: 'get',
  path: '/api/assets/{id}',
  tags: ['file'],
  summary: 'Get asset details',
  description: 'Retrieves detailed information about a specific asset',
  operationId: 'getAssetById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Asset details retrieved successfully',
      content: { 'application/json': { schema: AssetSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Asset not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putApiAssetsIdRoute = createRoute({
  method: 'put',
  path: '/api/assets/{id}',
  tags: ['file'],
  summary: 'Update asset metadata',
  description:
    "Updates an asset's metadata. At least one field must be provided.\nOnly name, mime_type, preview_id, and user_metadata can be updated.\nFor tag management, use POST (add) and DELETE (remove) /api/assets/{id}/tags.\n",
  operationId: 'updateAsset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mime_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Updated MIME type of the asset' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'New display name for the asset' }),
              preview_id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Updated preview asset ID' }),
              user_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Updated custom metadata' }),
            })
            .refine((val) => Object.keys(val).length >= 1)
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Asset updated successfully',
      content: { 'application/json': { schema: AssetUpdatedSchema } },
    },
    400: {
      description:
        'Invalid request — no fields provided, or `preview_id` is the zero UUID\n(`INVALID_PREVIEW_ID`).\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description:
        'Asset not found — returned both when the asset being updated does\nnot exist and when `preview_id` does not reference an asset\naccessible to the caller.\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteApiAssetsIdRoute = createRoute({
  method: 'delete',
  path: '/api/assets/{id}',
  tags: ['file'],
  summary: 'Delete asset',
  description: 'Deletes the asset record.',
  operationId: 'deleteAsset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Asset record deleted successfully' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Asset not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description:
        'Asset cannot be deleted because it is referenced by another resource, e.g. a workflow version (error code: ASSET_IN_USE)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiAssetsIdContentRoute = createRoute({
  method: 'get',
  path: '/api/assets/{id}/content',
  tags: ['file'],
  summary: 'Get asset content',
  description:
    'Returns the binary content of an asset by ID.\n\nThe contract is the same across runtimes — "GET this path and you\nreceive the asset\'s bytes" — but the mechanism differs:\n- **Local ComfyUI** streams the bytes directly (`200`,\n  `application/octet-stream`).\n- **Cloud** does not proxy large files; it responds `302` with a\n  `Location` redirect to a short-lived signed storage URL. Clients that\n  follow redirects (browsers, `fetch`/XHR, `<img>`/`<video>`) receive\n  the bytes transparently.\n\nPrefer this over the filename-addressed `/api/view` when you have an\nasset ID.\n',
  operationId: 'getAssetContent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      disposition: z
        .enum(['inline', 'attachment'])
        .default('attachment')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Content-Disposition for the response: `attachment` (download) or\n`inline` (render in browser). Defaults to `attachment`.\n',
            in: 'query',
            name: 'disposition',
            schema: { default: 'attachment', enum: ['inline', 'attachment'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Asset content stream (local runtime streams the bytes directly)',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    302: {
      description: 'Redirect to a signed storage URL (cloud runtime)',
      headers: z.object({
        'Cache-Control': {
          description: 'Private caching directive scoped to the signed URL lifetime',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Private caching directive scoped to the signed URL lifetime',
              param: { required: false },
            }),
        },
        Location: {
          description: 'Short-lived signed URL to the asset content in storage',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Short-lived signed URL to the asset content in storage',
              param: { required: false },
            }),
        },
        Vary: {
          description:
            'Partitions any cached redirect by auth credentials so a private redirect is not reused across users',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Partitions any cached redirect by auth credentials so a private redirect is not reused across users',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Asset not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, { CookieAuth: [] }],
})

export const postApiAssetsIdTagsRoute = createRoute({
  method: 'post',
  path: '/api/assets/{id}/tags',
  tags: ['file'],
  summary: 'Add tags to asset',
  description: 'Adds one or more tags to an existing asset',
  operationId: 'addAssetTags',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z.array(z.string()).min(1).openapi({ description: 'Tags to add to the asset' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Tags added successfully',
      content: { 'application/json': { schema: TagsModificationResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Asset not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error (e.g., reserved tag)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteApiAssetsIdTagsRoute = createRoute({
  method: 'delete',
  path: '/api/assets/{id}/tags',
  tags: ['file'],
  summary: 'Remove tags from asset',
  description: 'Removes one or more tags from an existing asset',
  operationId: 'removeAssetTags',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'Asset ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(z.string())
                .min(1)
                .openapi({ description: 'Tags to remove from the asset' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Tags removed successfully',
      content: { 'application/json': { schema: TagsModificationResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Asset not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error (e.g., reserved tag)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiAssetsFromHashRoute = createRoute({
  method: 'post',
  path: '/api/assets/from-hash',
  tags: ['file'],
  summary: 'Create asset reference from existing hash',
  description:
    "Creates a new asset reference using an existing asset's hash.\nThis avoids re-uploading the file content when the asset already exists in storage.\nThe user can provide their own metadata and tags for the reference.\n",
  operationId: 'createAssetFromHash',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hash: z
                .string()
                .regex(/^blake3:[a-f0-9]{64}$/)
                .openapi({
                  description: 'Blake3 content hash of the existing asset (blake3: prefix)',
                }),
              mime_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'MIME type of the asset (e.g., "image/png", "video/mp4")',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Display name for the asset reference (optional)' }),
              tags: z
                .array(z.string())
                .min(1)
                .openapi({
                  description:
                    'Freeform tags for the asset. Common types include "models", "input", "output", and "temp", but any tag can be used in any order.',
                }),
              user_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Custom metadata for this asset reference' }),
            })
            .openapi({ required: ['hash', 'tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Asset reference already existed for this user (deduplicated by content\nhash); the existing asset is returned with created_new=false.\n',
      content: { 'application/json': { schema: AssetCreatedSchema } },
    },
    201: {
      description: 'Asset reference created successfully (created_new=true)',
      content: { 'application/json': { schema: AssetCreatedSchema } },
    },
    400: {
      description: 'Invalid request (bad hash format, invalid tags, etc.)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Source asset with given hash not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error (e.g., disallowed model_type tag)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const headApiAssetsHashHashRoute = createRoute({
  method: 'head',
  path: '/api/assets/hash/{hash}',
  tags: ['file'],
  summary: 'Check if asset exists by hash',
  description:
    "Checks if an asset exists in the system by its blake3 hash.\nReturns 200 if the asset exists, 404 if it doesn't.\n",
  operationId: 'checkAssetByHash',
  request: {
    params: z.object({
      hash: z
        .string()
        .regex(/^blake3:[a-f0-9]{64}$/)
        .openapi({
          param: {
            description: "Blake3 hash of the asset in format 'blake3:hex_digest'",
            in: 'path',
            name: 'hash',
            required: true,
            schema: {
              example: 'blake3:a1b2c3d4e5f67890123456789012345678901234567890123456789012345678',
              pattern: '^blake3:[a-f0-9]{64}$',
              type: 'string',
            },
          },
          example: 'blake3:a1b2c3d4e5f67890123456789012345678901234567890123456789012345678',
        }),
    }),
  },
  responses: {
    200: { description: 'Asset exists' },
    400: {
      description: 'Invalid hash format',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: { description: 'Asset not found' },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiAssetsPruneRoute = createRoute({
  method: 'post',
  path: '/api/assets/prune',
  summary: 'Mark assets whose backing files no longer exist on disk',
  description:
    'Starts a background job that removes asset entries whose underlying content no longer exists on disk.',
  operationId: 'pruneAssets',
  responses: {
    200: {
      description: 'Prune result',
      content: {
        'application/json': {
          schema: z
            .object({
              marked: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of assets marked as missing' }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '"completed", or "cancelled" when a cancel stopped the prune part way; the assets it marked before that stay marked',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiAssetsSeedRoute = createRoute({
  method: 'post',
  path: '/api/assets/seed',
  summary: 'Trigger asset scan/seed from filesystem',
  description:
    'Starts a background job that scans configured directories and registers assets not yet in the asset database.',
  operationId: 'seedAssets',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roots: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Root folder paths to scan (if omitted, scans all)' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Seed started',
      content: {
        'application/json': {
          schema: z.object({ status: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiAssetsSeedCancelRoute = createRoute({
  method: 'post',
  path: '/api/assets/seed/cancel',
  summary: 'Cancel an in-progress asset scan',
  description: 'Requests cancellation of the currently-running asset seed job.',
  operationId: 'cancelAssetSeed',
  responses: {
    200: {
      description: 'Scan cancelled',
      content: {
        'application/json': {
          schema: z.object({ status: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiAssetsSeedStatusRoute = createRoute({
  method: 'get',
  path: '/api/assets/seed/status',
  summary: 'Get asset scan progress',
  description: 'Returns progress/status of the most recent asset seed job.',
  operationId: 'getAssetSeedStatus',
  responses: {
    200: {
      description: 'Scan progress',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ description: 'Scan progress details (files scanned, total, status, etc.)' }),
        },
      },
    },
  },
})

export const getApiAssetsTagsRefineRoute = createRoute({
  method: 'get',
  path: '/api/assets/tags/refine',
  tags: ['file'],
  summary: 'Get tag histogram for filtered assets',
  description:
    'Returns a histogram of tags appearing on assets matching the given filters.\nUseful for refining asset searches by showing available tags and their counts.\nOnly returns tags with non-zero counts (tags that exist on matching assets).\n',
  operationId: 'getAssetTagHistogram',
  request: {
    query: z.object({
      include_tags: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Deprecated alias for `tags_all`, kept permanently for existing\ncallers. Filter assets that have ALL of these tags. The same\ncombination and list-size rules as on `/api/assets` apply\n(400 `INVALID_TAG_FILTER`).\n',
            explode: false,
            in: 'query',
            name: 'include_tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      exclude_tags: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Deprecated alias for `tags_none`, kept permanently for existing\ncallers. Exclude assets that have ANY of these tags. The same\ncombination and list-size rules as on `/api/assets` apply\n(400 `INVALID_TAG_FILTER`).\n',
            explode: false,
            in: 'query',
            name: 'exclude_tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_all: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter assets that have ALL of these tags. Replaces the deprecated\n`include_tags`. The same combination and list-size rules as on\n`/api/assets` apply (400 `INVALID_TAG_FILTER`).\n',
            explode: false,
            in: 'query',
            name: 'tags_all',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_any: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter assets that have AT LEAST ONE of these tags. Combines with\n`tags_all`/`tags_none` by intersection (`tags_none` always wins).\nThe same combination and list-size rules as on `/api/assets` apply\n(400 `INVALID_TAG_FILTER`).\n',
            explode: false,
            in: 'query',
            name: 'tags_any',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags_none: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude assets that have ANY of these tags. Replaces the deprecated\n`exclude_tags`. The same combination and list-size rules as on\n`/api/assets` apply (400 `INVALID_TAG_FILTER`).\n',
            explode: false,
            in: 'query',
            name: 'tags_none',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      name_contains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter assets where name contains this substring (case-insensitive)',
            in: 'query',
            name: 'name_contains',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of tags to return (1-1000, default 100)',
            in: 'query',
            name: 'limit',
            schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      include_public: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include public/shared assets in results',
            in: 'query',
            name: 'include_public',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Tag histogram returned',
      content: { 'application/json': { schema: AssetTagHistogramResponseSchema } },
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiBillingChurnkeyAuthRoute = createRoute({
  method: 'get',
  path: '/api/billing/churnkey/auth',
  tags: ['billing'],
  summary: 'Get Churnkey HMAC auth credentials',
  description:
    'Returns the Stripe customer identifier and a server-signed\nHMAC-SHA256 of the customer ID, used to launch the Churnkey-hosted\ncancellation flow embed.\n',
  operationId: 'getChurnkeyAuth',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChurnkeyAuthResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workspace has no Stripe customer (never subscribed)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    503: {
      description: 'Churnkey is not configured on the server',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getApiDefaultWorkflowRoute = createRoute({
  method: 'get',
  path: '/api/default_workflow',
  tags: ['workflow'],
  summary: 'Get the default workflow',
  description: 'Returns the workflow the frontend loads when no other workflow is open.',
  operationId: 'getDefaultWorkflow',
  responses: {
    200: {
      description: 'Default workflow JSON',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
  security: [],
})

export const postApiDeployBundleRoute = createRoute({
  method: 'post',
  path: '/api/deploy/bundle',
  summary: 'Upload this installation to Cloud as an import bundle',
  description:
    "On explicit user action, collects this installation's snapshot (comfyui-desktop-2-snapshot) and installed model list, sends them with the optional workflow and name to comfy-builder's POST /v1/import-bundles, and returns the Create a Build wizard link that opens it. The caller's credential is forwarded verbatim and never stored; exactly one of a Bearer Authorization header or an X-API-Key header must be sent. Never available under --offline.",
  operationId: 'createDeployBundle',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .max(200)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional label for the bundle.' }),
              workflow: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'The workflow open in ComfyUI, sent as is.' }),
            })
            .openapi({
              description: 'A JSON object; `{}` is valid. Null members count as absent.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bundle stored on comfy-builder',
      content: {
        'application/json': {
          schema: z
            .object({
              bundle_id: z.uuid(),
              expires_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'When the bundle stops being readable (24 hours after creation).',
                }),
              url: z
                .url()
                .openapi({
                  description:
                    'The Create a Build wizard link that opens the bundle (/profile/builds/new?step=import&bundle=&workspace=&bundle_workspace=).',
                }),
              workspace_id: z
                .string()
                .openapi({
                  description: "The workspace the bundle belongs to (the credential's).",
                }),
            })
            .openapi({ required: ['url', 'bundle_id', 'workspace_id', 'expires_at'] }),
        },
      },
    },
    400: {
      description:
        'Rejected before upload: `multiple_credentials` (both headers sent), `invalid_api_key_format` (X-API-Key is not comfyui- followed by 64 hex characters) or `invalid_body` (not a JSON object, or a bad workflow or name).',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    401: {
      description:
        '`missing_credentials` (no credential sent) or `unauthorized` (the builder refused the credential).',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    403: {
      description:
        '`offline` (the server runs with --offline) or `unauthorized` (the builder refused the credential).',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    413: {
      description: "The bundle exceeds the builder's size cap (`too_large`).",
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    429: {
      description:
        "The user already holds the builder's limit of unexpired bundles in this workspace (`too_many_bundles`); clears as older bundles expire.",
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    502: {
      description:
        '`builder_rejected` (the builder refused the bundle as invalid; `message` carries its reason, at most 500 characters) or `builder_unavailable` (the builder could not be reached or answered unexpectedly).',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
    503: {
      description:
        'The builder is busy (`builder_busy`); retry after Retry-After seconds when present.',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'Seconds to wait, when the builder sent one.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Seconds to wait, when the builder sent one.',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
})

export const getApiDeploySummaryRoute = createRoute({
  method: 'get',
  path: '/api/deploy/summary',
  summary: 'Count what a Deploy to Cloud bundle would carry',
  description:
    'Counts the custom nodes and model files this local installation would send in an import bundle, so the UI can describe the upload before the user confirms it. Local reads only; makes no network request.',
  operationId: 'getDeploySummary',
  responses: {
    200: {
      description: 'Counts of what the bundle would include',
      content: {
        'application/json': {
          schema: z
            .object({
              custom_nodes: z
                .int()
                .openapi({ description: 'Custom node packages found in the custom_nodes folders' }),
              models: z
                .int()
                .openapi({ description: 'Model files found across the model folders' }),
            })
            .openapi({ required: ['custom_nodes', 'models'] }),
        },
      },
    },
    403: {
      description: 'The server runs with --offline (error `offline`)',
      content: { 'application/json': { schema: DeployToCloudErrorSchema } },
    },
  },
  security: [],
})

export const getApiEmbeddingsRoute = createRoute({
  method: 'get',
  path: '/api/embeddings',
  summary: 'List available embedding names',
  description: 'Returns the list of text-encoder embeddings available on disk.',
  operationId: 'getEmbeddings',
  responses: {
    200: {
      description: 'Embedding names',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getApiExperimentModelsRoute = createRoute({
  method: 'get',
  path: '/api/experiment/models',
  tags: ['file'],
  summary: 'Get available model folders',
  description:
    "Returns a list of model folders available in the system.\nThis is an experimental endpoint that replaces the legacy /models endpoint.\nEach folder's name is the identifier to pass to /api/experiment/models/{folder}.\nThe folder vocabulary is resolved per request from the caller's identity: where the\nmodel_type migration is active for that caller the names are model_type folder_names\n(e.g. `ultralytics_bbox`), and a folder with no folder_name mapping is returned by its\ndirectory path. An authenticated response can therefore differ from an anonymous one.\n",
  operationId: 'getModelFolders',
  responses: {
    200: {
      description: 'Success - List of model folders',
      content: { 'application/json': { schema: z.array(ModelFolderSchema) } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, {}],
})

export const getApiExperimentModelsFolderRoute = createRoute({
  method: 'get',
  path: '/api/experiment/models/{folder}',
  tags: ['file'],
  summary: 'Get models in a specific folder',
  description:
    "Returns a list of models available in the specified folder.\nThis is an experimental endpoint that provides enhanced model information.\nAccepted folder identifiers are those returned by /api/experiment/models for the same\ncaller. That vocabulary is request-scoped, so list folders and fetch a folder's models\nwith the same credentials — a name obtained anonymously may not resolve when\nauthenticated, and vice versa.\n",
  operationId: 'getModelsInFolder',
  request: {
    params: z.object({
      folder: z
        .string()
        .openapi({
          param: {
            description: 'The folder name to list models from',
            in: 'path',
            name: 'folder',
            required: true,
            schema: { example: 'checkpoints', type: 'string' },
          },
          example: 'checkpoints',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - List of models in the folder',
      content: { 'application/json': { schema: z.array(ModelFileSchema) } },
    },
    404: {
      description: 'Folder not found or no models in folder',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, {}],
})

export const getApiExtensionsRoute = createRoute({
  method: 'get',
  path: '/api/extensions',
  tags: ['node'],
  summary: 'List custom node JS extensions',
  description:
    'Returns the list of custom node web extension JS files available for\nloading by the ComfyUI frontend. Paths are relative to the web root\n(e.g. `/extensions/VHS.core.js`).\n',
  operationId: 'getExtensions',
  responses: {
    200: {
      description: 'JSON array of extension file paths',
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .openapi({
              description: 'URL paths (relative to web root) of available extension JS files',
            }),
        },
      },
    },
  },
  security: [],
})

export const getApiFeaturesRoute = createRoute({
  method: 'get',
  path: '/api/features',
  tags: ['node'],
  summary: 'Get server feature flags',
  description: "Returns the server's feature capabilities",
  operationId: 'getFeatures',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              deploy_to_cloud: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Local ComfyUI only: whether the UI should offer Deploy to Cloud. True when the server is not --offline and this installation has ever had a prompt queued by a non-browser client (a persistent marker in the user directory). A discovery hint only: it grants nothing, and the /api/deploy/* routes do not check it. Not settable with --feature-flag.',
                  'x-runtime': ['local'],
                }),
              free_tier_balance: z
                .object({
                  allowance: z
                    .int()
                    .openapi({ description: 'Total free jobs granted for the current period' }),
                  remaining: z
                    .int()
                    .openapi({
                      description: 'Free jobs remaining (allowance - used, floored at 0)',
                    }),
                  used: z.int().openapi({ description: 'Free jobs consumed so far' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Free-tier job allowance for an authenticated non-paid (FREE-tier) user in the rollout. Absent for paid users and unauthenticated requests. Synthesized from config before a grant row exists so a brand-new user still sees their full allowance.',
                  required: ['allowance', 'used', 'remaining'],
                }),
              max_upload_size: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum upload size in bytes' }),
              supports_preview_metadata: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the server supports preview metadata' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'Short-lived private cache to deduplicate rapid-fire calls from the frontend',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Short-lived private cache to deduplicate rapid-fire calls from the frontend',
              param: { required: false },
            }),
        },
        Vary: {
          description:
            'Cache key includes auth headers so anonymous and authenticated responses are stored separately',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Cache key includes auth headers so anonymous and authenticated responses are stored separately',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, { CookieAuth: [] }, {}],
})

export const postApiFeedbackRoute = createRoute({
  method: 'post',
  path: '/api/feedback',
  tags: ['feedback'],
  summary: 'Submit user feedback',
  description: 'Submit feedback about the ComfyUI service',
  operationId: 'submitFeedback',
  request: {
    body: { content: { 'application/json': { schema: FeedbackRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Feedback submitted successfully',
      content: { 'application/json': { schema: FeedbackResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiFilesMaskLayersRoute = createRoute({
  method: 'get',
  path: '/api/files/mask-layers',
  tags: ['file'],
  summary: 'Get related mask layer files',
  description:
    'Given a mask file (any of the 4 layers), returns all related mask layer files.\nThis is used by the mask editor to load the paint, mask, and painted layers\nwhen reopening a previously edited mask.\n',
  operationId: 'getMaskLayers',
  request: {
    query: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Hash filename of any mask layer file',
            in: 'query',
            name: 'filename',
            required: true,
            schema: { example: 'abc123def456.png', type: 'string' },
          },
          example: 'abc123def456.png',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Related mask layers returned',
      content: {
        'application/json': {
          schema: z
            .object({
              mask: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filename of the mask layer' }),
              paint: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filename of the paint strokes layer' }),
              painted: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filename of the painted image layer' }),
              painted_masked: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Filename of the final composite layer' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'File not found or not a mask file',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiFreeRoute = createRoute({
  method: 'post',
  path: '/api/free',
  summary: 'Free GPU memory and/or unload models',
  description: 'Frees GPU memory by unloading models and/or freeing the resident model cache.',
  operationId: 'freeMemory',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              free_memory: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Run garbage collection and free cached memory' }),
              unload_models: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Unload all models from VRAM/RAM' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Memory freed' } },
})

export const getApiGlobalSubgraphsRoute = createRoute({
  method: 'get',
  path: '/api/global_subgraphs',
  tags: ['workflow'],
  summary: 'Get available subgraph blueprints',
  description:
    'Returns a list of globally available subgraph blueprints.\nThese are pre-built workflow components that can be used as nodes.\nThe data field contains a promise that resolves to the full subgraph JSON.\n',
  operationId: 'getGlobalSubgraphs',
  responses: {
    200: {
      description: 'Success - Map of subgraph IDs to their metadata',
      content: { 'application/json': { schema: z.record(z.string(), GlobalSubgraphInfoSchema) } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiGlobalSubgraphsIdRoute = createRoute({
  method: 'get',
  path: '/api/global_subgraphs/{id}',
  tags: ['workflow'],
  summary: 'Get a specific subgraph blueprint',
  description: 'Returns the full data for a specific subgraph blueprint by ID',
  operationId: 'getGlobalSubgraph',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the subgraph blueprint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Full subgraph data',
      content: { 'application/json': { schema: GlobalSubgraphDataSchema } },
    },
    404: {
      description: 'Subgraph not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [],
})

export const postApiHistoryRoute = createRoute({
  method: 'post',
  path: '/api/history',
  tags: ['workflow'],
  summary: 'Manage execution history',
  description:
    '**Deprecated.** Superseded by the job-management endpoints under\n`/api/jobs`. Planned for removal no earlier than a future major\nrelease; sunset timeline TBD.\n\nClear all history for the authenticated user or delete specific job IDs.\nSupports clearing all history or deleting specific job IDs.\n',
  operationId: 'manageHistory',
  request: {
    body: {
      content: { 'application/json': { schema: HistoryManageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success - History management operation completed' },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiHistoryV2Route = createRoute({
  method: 'get',
  path: '/api/history_v2',
  tags: ['workflow'],
  summary: 'Get execution history (v2)',
  description:
    '**Deprecated.** Superseded by `GET /api/jobs`, which returns the same\nexecution records in a paginated, filterable format. Planned for removal\nno earlier than a future major release; sunset timeline TBD.\n\nRetrieve execution history for the authenticated user with pagination support.\nReturns a lightweight history format with filtered prompt data (workflow removed from extra_pnginfo).\n',
  operationId: 'getHistory',
  request: {
    query: z.object({
      max_items: z
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
            description: 'Maximum number of items to return',
            in: 'query',
            name: 'max_items',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting position (default 0)',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Execution history retrieved',
      content: { 'application/json': { schema: HistoryResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiHistoryV2PromptIdRoute = createRoute({
  method: 'get',
  path: '/api/history_v2/{prompt_id}',
  tags: ['workflow'],
  summary: 'Get history for specific prompt',
  description:
    '**Deprecated.** Superseded by `GET /api/jobs/{job_id}`, which returns\nthe same execution record. Planned for removal no earlier than a future\nmajor release; sunset timeline TBD.\n\nRetrieve detailed execution history for a specific prompt ID.\nReturns full history data including complete prompt information.\n',
  operationId: 'getHistoryForPrompt',
  request: {
    params: z.object({
      prompt_id: z
        .string()
        .openapi({
          param: {
            description: 'The prompt ID to retrieve history for',
            in: 'path',
            name: 'prompt_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - History for prompt retrieved',
      content: { 'application/json': { schema: HistoryDetailResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Prompt not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiI18nRoute = createRoute({
  method: 'get',
  path: '/api/i18n',
  summary: 'Get internationalisation translation strings',
  description: 'Returns translation file URLs contributed by custom nodes, keyed by locale.',
  operationId: 'getI18n',
  responses: {
    200: {
      description: 'Translation map',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ description: 'Nested map of locale to translation key-value pairs' }),
        },
      },
    },
  },
})

export const postApiInterruptRoute = createRoute({
  method: 'post',
  path: '/api/interrupt',
  tags: ['queue'],
  summary: 'Interrupt the first active job',
  description:
    'Deprecated. Prefer the jobs-namespace cancel endpoints:\nPOST /api/jobs/{job_id}/cancel for a single job, or\nPOST /api/jobs/cancel to cancel jobs by ID.\n\nCancels the first active job for the authenticated user (the currently\nrunning job if there is one, otherwise the next pending job). Takes no\nbody and cannot target a specific job — use the jobs-namespace endpoints\nfor that.\n',
  operationId: 'interruptJob',
  responses: {
    200: { description: 'Success - first active job cancelled, or no active job found' },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiJobJobIdStatusRoute = createRoute({
  method: 'get',
  path: '/api/job/{job_id}/status',
  tags: ['job'],
  summary: 'Get job status (deprecated)',
  description:
    '**Deprecated.** Superseded by `GET /api/jobs/{job_id}` (plural path).\nClients should migrate; the endpoint is retained for backward\ncompatibility but will be removed in a future release.\n',
  operationId: 'getJobStatus',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The unique ID of the job',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Job status returned',
      content: { 'application/json': { schema: JobStatusResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden - job belongs to another user',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Job not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiJobsRoute = createRoute({
  method: 'get',
  path: '/api/jobs',
  tags: ['workflow'],
  summary: 'List jobs with pagination and filtering',
  description:
    'Retrieve a paginated list of jobs for the authenticated user.\nReturns lightweight job data optimized for list views.\nWorkflow and full outputs are excluded to reduce payload size.\n',
  operationId: 'listJobs',
  request: {
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by one or more statuses (comma-separated). If not provided, returns all jobs.',
            example: 'pending,in_progress',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      workflow_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by workflow ID (exact match)',
            example: '550e8400-e29b-41d4-a716-446655440000',
            in: 'query',
            name: 'workflow_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      output_type: z
        .enum(['image', 'video', 'audio', '3d'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by output media type (only applies to completed jobs with outputs)',
            example: 'image',
            in: 'query',
            name: 'output_type',
            schema: { enum: ['image', 'video', 'audio', '3d'], type: 'string' },
            required: false,
          },
        }),
      sort_by: z
        .enum(['create_time', 'execution_time'])
        .default('create_time')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to sort by (create_time = when job was submitted, execution_time = how long workflow took to run)',
            example: 'execution_time',
            in: 'query',
            name: 'sort_by',
            schema: {
              default: 'create_time',
              enum: ['create_time', 'execution_time'],
              type: 'string',
            },
            required: false,
          },
        }),
      sort_order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction (asc = ascending, desc = descending)',
            in: 'query',
            name: 'sort_order',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Opaque cursor for keyset pagination. Pass the `next_cursor` value\nfrom a previous response to fetch the next page.\nCursor pagination is supported only when `sort_by=create_time`\n(default). If `sort_by=execution_time`, `after` is ignored and\noffset/limit pagination is used.\nCursors are opaque base64url payloads — clients should treat them\nas strings and not parse the contents.\n',
            example:
              'eyJzIjoiY3JlYXRlX3RpbWUiLCJ2IjoiMTcxNjIwMDAwMDAwMDAwMCIsImlkIjoiYTFiMmMzZDQtZTVmNi03YTg5LWIwYzEtZDJlM2Y0YTViNmM3In0',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'Pagination offset (0-based). Deprecated: prefer cursor-based pagination via `after`.',
            in: 'query',
            name: 'offset',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum items per page (1-1000)',
            in: 'query',
            name: 'limit',
            schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Jobs retrieved',
      content: { 'application/json': { schema: JobsListResponseSchema } },
    },
    400: {
      description: 'Bad request (e.g. malformed pagination cursor).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{job_id}',
  tags: ['workflow'],
  summary: 'Get full job details',
  description:
    'Retrieve complete details for a specific job including workflow and outputs.\nUsed for detail views, workflow re-execution, and debugging.\n',
  operationId: 'getJobDetail',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Job identifier (UUID)',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      short_link: z
        .enum(['ephemeral_tool_chain', 'default'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "When present, each output item in the response receives a `short_url` field containing a short link for that asset. Omit this parameter (the default) to receive a response identical to the no-param baseline. The value selects the link's lifetime and auth model: use `ephemeral_tool_chain` for short-lived (≤5 minute) machine-to-machine handoffs — these are public bearer links where the link ID itself is the credential, so anyone holding the link can resolve it (intended for pasting into an agent/MCP tool chain); use `default` for durable (30 day) human-revisitable links, which are owner-gated and resolvable only by the authenticated owner. Links are always minted under the authenticated request owner's identity; the auth model is selected by the server and is never settable by the caller.\n",
            in: 'query',
            name: 'short_link',
            schema: { enum: ['ephemeral_tool_chain', 'default'], type: 'string' },
            'x-runtime': ['cloud'],
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Job details retrieved',
      content: { 'application/json': { schema: JobDetailResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden - Job does not belong to user',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Job not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiJobsJobIdAssetsRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{job_id}/assets',
  tags: ['workflow'],
  summary: "List a job's output assets",
  description:
    "Retrieve a paginated list of the assets produced by a specific job,\nenriched with the per-output node context (`node_id`, `output_key`,\n`output_index`) correlated from the job's execution outputs by content\nhash. Unlike `GET /api/assets?job_ids={id}`, this endpoint is scoped to a\nsingle job and carries node-level placement, making it suited to job\noutput views rather than the general asset browser. Returns an empty\n`assets` array for jobs that produced no assets.\n",
  operationId: 'getJobAssets',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Job identifier (UUID)',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of assets to return (1-500)',
            in: 'query',
            name: 'limit',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of assets to skip for pagination',
            in: 'query',
            name: 'offset',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Job assets returned',
      content: { 'application/json': { schema: JobAssetsResponseSchema } },
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Job not found or does not belong to the user',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/jobs/{job_id}/cancel',
  tags: ['workflow'],
  summary: 'Cancel a job',
  description:
    'Cancel a specific job for the authenticated user.\n\nIdempotent: a job that is already in a terminal state (completed, failed,\ncancelled) or already cancelling is treated as a successful no-op and\nreturns 200. Only truly missing or cross-user jobs return 404.\n',
  operationId: 'cancelJob',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Job identifier (UUID)',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Cancel request accepted (or job was already terminal)',
      content: { 'application/json': { schema: JobCancelResponseSchema } },
    },
    400: {
      description:
        'Bad Request - job_id is not a valid UUID (emitted by request validation before the handler runs)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Job not found for this user',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error - cancellation failed',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiJobsCancelRoute = createRoute({
  method: 'post',
  path: '/api/jobs/cancel',
  tags: ['workflow'],
  summary: 'Cancel multiple jobs',
  description:
    'Cancel one or more jobs for the authenticated user in a single request.\n\nState-agnostic: cancels both pending and running jobs (both transition to\nthe cancelled state via the same mechanism as the single-job endpoint).\n\nIdempotent per job: a job already in a terminal or cancelling state is a\nno-op and simply will not appear in the returned `cancelled` list.\n\nFail-fast on unknown IDs: if any provided job ID does not exist for this\nuser, the request returns 404 and no jobs are cancelled. This surfaces\nbad IDs to the caller rather than silently dropping them.\n\nThis is the canonical batch-cancel endpoint. The delete operation on\nPOST /api/queue is deprecated in favour of this.\n',
  operationId: 'cancelJobs',
  request: {
    body: { content: { 'application/json': { schema: JobsCancelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success - cancel requests dispatched (or jobs were already terminal)',
      content: { 'application/json': { schema: JobsCancelResponseSchema } },
    },
    400: {
      description:
        'Bad Request - job_ids is missing, empty, exceeds the maximum count, or contains an invalid UUID',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'One or more job IDs not found for this user (no jobs cancelled)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error - cancellation failed',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiNodeReplacementsRoute = createRoute({
  method: 'get',
  path: '/api/node_replacements',
  tags: ['node'],
  summary: 'Get node replacement mappings',
  description:
    'Returns mappings of unsupported node class names to their cloud-installed replacements.\nUsed by the frontend to offer "Quick Fix" when a workflow contains missing nodes.\n',
  operationId: 'getNodeReplacements',
  responses: {
    200: {
      description: 'Success - Node replacement mappings',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiObjectInfoRoute = createRoute({
  method: 'get',
  path: '/api/object_info',
  tags: ['node'],
  summary: 'Get all node information',
  description: 'Returns information about all available nodes',
  operationId: 'getNodeInfo',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.record(z.string(), NodeInfoSchema) } },
    },
  },
})

export const getApiPromptRoute = createRoute({
  method: 'get',
  path: '/api/prompt',
  tags: ['workflow'],
  summary: 'Get information about current prompt execution',
  description: 'Returns information about the current prompt in the execution queue',
  operationId: 'getPromptInfo',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PromptInfoSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiPromptRoute = createRoute({
  method: 'post',
  path: '/api/prompt',
  tags: ['workflow'],
  summary: 'Submit a workflow for execution',
  description:
    'Submit a workflow to be executed by the backend.\nThe workflow is a JSON object describing the nodes and their connections.\n',
  operationId: 'executePrompt',
  request: {
    body: { content: { 'application/json': { schema: PromptRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success - Prompt accepted',
      content: { 'application/json': { schema: PromptResponseSchema } },
    },
    400: {
      description: 'Invalid prompt',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    402: {
      description: 'Payment required - Insufficient credits',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    403: {
      description:
        'Workspace governance policy blocks one or more partner providers (error.type PARTNER_NODE_DISABLED; error.class_types lists the offending nodes, error.providers the disabled providers)',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    413: {
      description: 'Workflow JSON too large',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    429: {
      description:
        "Retryable backpressure. Two distinct causes, disambiguated by the body's `error.type`, NOT by parsing `error.message`: `PAYMENT_REQUIRED` / `FREE_TIER_UNAVAILABLE` / `FREE_TIER_EXHAUSTED` / `PARTNER_NODE_PAYMENT_REQUIRED` (a billing gate - retrying without paying never succeeds), or `QUEUE_LIMIT` (this workspace's bounded job queue is full - retrying after some queued jobs complete will succeed).",
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
    503: {
      description: 'Service unavailable',
      content: { 'application/json': { schema: PromptErrorResponseSchema } },
    },
  },
})

export const getApiQueueRoute = createRoute({
  method: 'get',
  path: '/api/queue',
  tags: ['queue'],
  summary: 'Get queue information',
  description: 'Returns information about running and pending items in the queue',
  operationId: 'getQueueInfo',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: QueueInfoSchema } } },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiQueueRoute = createRoute({
  method: 'post',
  path: '/api/queue',
  tags: ['queue'],
  summary: 'Manage queue operations',
  description:
    'Deprecated. Prefer the jobs-namespace cancel endpoints:\nPOST /api/jobs/cancel for cancelling jobs by ID, and\nPOST /api/jobs/{job_id}/cancel for a single job.\n\nCancel specific jobs by ID (the `delete` field) or clear all pending\njobs in the queue (the `clear` field). Despite the `delete` naming, this\ndoes not delete anything — listed jobs transition to the cancelled state,\nand `delete` cancels both pending and running jobs (not pending-only as\npreviously documented). Job-by-ID cancellation is superseded by\nPOST /api/jobs/cancel; `clear` has no jobs-namespace replacement yet.\n',
  operationId: 'manageQueue',
  request: {
    body: { content: { 'application/json': { schema: QueueManageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueueManageResponseSchema } },
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiSettingsRoute = createRoute({
  method: 'get',
  path: '/api/settings',
  tags: ['settings'],
  summary: 'Get all user settings',
  description: 'Returns all settings for the authenticated user',
  operationId: 'getAllSettings',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.looseObject({}).openapi({ description: 'User settings as key-value pairs' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiSettingsRoute = createRoute({
  method: 'post',
  path: '/api/settings',
  tags: ['settings'],
  summary: 'Update multiple settings',
  description: 'Update multiple settings (merge with existing)',
  operationId: 'updateMultipleSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ description: 'Settings to update as key-value pairs' }),
        },
        'text/plain': {
          schema: z.string().openapi({ description: 'JSON string of settings to update' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.looseObject({}).openapi({ description: 'Updated user settings' }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiSettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/settings/{id}',
  tags: ['settings'],
  summary: 'Get a specific setting by id',
  description: 'Returns a specific setting value by its id',
  operationId: 'getSettingById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Setting id to retrieve',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              value: z.any().exactOptional().openapi({ description: 'The setting value' }),
            })
            .openapi({ description: 'Setting value response', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Setting not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiSettingsIdRoute = createRoute({
  method: 'post',
  path: '/api/settings/{id}',
  tags: ['settings'],
  summary: 'Update a specific setting by id',
  description: 'Update a specific setting by its id',
  operationId: 'updateSettingById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Setting id to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'New value for the setting' }),
        },
        'text/plain': {
          schema: z.string().openapi({ description: 'JSON string of the new setting value' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              value: z.any().exactOptional().openapi({ description: 'The updated setting value' }),
            })
            .openapi({ description: 'Updated setting value response', required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiSystemStatsRoute = createRoute({
  method: 'get',
  path: '/api/system_stats',
  tags: ['system'],
  summary: 'Get system statistics',
  description:
    'Returns system statistics including ComfyUI version, device info, and system resources',
  operationId: 'getSystemStats',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SystemStatsResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/tags',
  tags: ['file'],
  summary: 'List all tags',
  description:
    'Retrieves a list of all tags used across assets.\nIncludes usage counts and filtering options.\n',
  operationId: 'listTags',
  request: {
    query: z.object({
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tags by prefix',
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of tags to return (1-1000)',
            in: 'query',
            name: 'limit',
            schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of tags to skip for pagination',
            in: 'query',
            name: 'offset',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      order: z
        .enum(['count_desc', 'name_asc'])
        .default('count_desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order for tags',
            in: 'query',
            name: 'order',
            schema: { default: 'count_desc', enum: ['count_desc', 'name_asc'], type: 'string' },
            required: false,
          },
        }),
      include_zero: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include tags with zero usage count',
            in: 'query',
            name: 'include_zero',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_public: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include public/shared assets when counting tags',
            in: 'query',
            name: 'include_public',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tags retrieved successfully',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiTasksRoute = createRoute({
  method: 'get',
  path: '/api/tasks',
  tags: ['task'],
  summary: 'List background tasks',
  description:
    'Retrieve a paginated list of background tasks for the authenticated user.\nSupports filtering by task type, status, and creation time.\n',
  operationId: 'listTasks',
  request: {
    query: z.object({
      task_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by task type name (exact match)',
            example: 'model_upload',
            in: 'query',
            name: 'task_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      idempotency_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by idempotency key (exact match). For best performance, specify task_name as well.',
            example: 'upload-model-abc123',
            in: 'query',
            name: 'idempotency_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by one or more statuses (comma-separated)',
            example: 'created,running',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      created_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks created after this timestamp (RFC3339 format)',
            example: '2024-01-01T00:00:00Z',
            in: 'query',
            name: 'created_after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      created_before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks created before this timestamp (RFC3339 format)',
            example: '2024-12-31T23:59:59Z',
            in: 'query',
            name: 'created_before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      sort_order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction (asc = ascending, desc = descending by create_time)',
            in: 'query',
            name: 'sort_order',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination offset (0-based)',
            in: 'query',
            name: 'offset',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum items per page (1-100)',
            in: 'query',
            name: 'limit',
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Tasks retrieved',
      content: { 'application/json': { schema: TasksListResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error - Invalid filter values',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{task_id}',
  tags: ['task'],
  summary: 'Get task details',
  description: 'Retrieve full details for a specific background task.\n',
  operationId: 'getTask',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Task identifier (UUID)',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Task details retrieved',
      content: { 'application/json': { schema: TaskResponseSchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description:
        'Task not found (also returned for ownership failures to avoid leaking task existence)',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiUploadImageRoute = createRoute({
  method: 'post',
  path: '/api/upload/image',
  tags: ['file'],
  summary: 'Upload an image file',
  description:
    'Upload an image file to cloud storage.\n\nImage limits:\n  - Maximum file size: 50 MB\n  - Maximum width/height per edge: 16384 px\n  - Maximum total pixel count: 64 megapixels (67108864 pixels)\n\nUploads that exceed any of these limits are rejected with HTTP 400.\n',
  operationId: 'uploadImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              image: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The image file to upload',
                }),
              overwrite: z
                .string()
                .exactOptional()
                .openapi({ description: 'Whether to overwrite existing file (true/false)' }),
              subfolder: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional subfolder path' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Upload type (defaults to "output")' }),
            })
            .openapi({ required: ['image'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Image uploaded successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Filename of the uploaded image' }),
              subfolder: z
                .string()
                .exactOptional()
                .openapi({ description: 'Subfolder path where image was saved' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of upload (e.g., "output")' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiUploadMaskRoute = createRoute({
  method: 'post',
  path: '/api/upload/mask',
  tags: ['file'],
  summary: 'Upload a mask image',
  description:
    'Upload a mask image to be applied to an existing image.\n\nImage limits apply to both the uploaded mask and the referenced\noriginal image:\n  - Maximum file size: 50 MB\n  - Maximum width/height per edge: 16384 px\n  - Maximum total pixel count: 64 megapixels (67108864 pixels)\n\nUploads that exceed any of these limits are rejected with HTTP 400.\n',
  operationId: 'uploadMask',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              image: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The mask image file to upload',
                }),
              original_ref: z
                .string()
                .openapi({ description: 'JSON string containing reference to the original image' }),
            })
            .openapi({ required: ['image', 'original_ref'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Mask uploaded successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Filename of the uploaded mask' }),
              subfolder: z
                .string()
                .exactOptional()
                .openapi({ description: 'Subfolder path where mask was saved' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of upload (e.g., "output")' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiUserRoute = createRoute({
  method: 'get',
  path: '/api/user',
  tags: ['user'],
  summary: 'Get current user information',
  description: 'Returns information about the currently authenticated user',
  operationId: 'getUser',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiUserdataRoute = createRoute({
  method: 'get',
  path: '/api/userdata',
  tags: ['user'],
  summary: 'List user data files',
  description:
    'Returns a list of user data files in the specified directory, optionally recursively and with full metadata.',
  operationId: 'getUserdata',
  request: {
    query: z.object({
      dir: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The directory to list files from.',
            in: 'query',
            name: 'dir',
            schema: { type: 'string' },
            required: false,
          },
        }),
      recurse: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to list files recursively.',
            in: 'query',
            name: 'recurse',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      split: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to split file information by type.',
            in: 'query',
            name: 'split',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      full_info: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to return full file metadata.',
            in: 'query',
            name: 'full_info',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of user data files.',
      content: { 'application/json': { schema: GetUserDataResponseFullSchema } },
    },
    400: {
      description: 'Bad request (e.g., invalid filename).',
      content: { 'text/plain': { schema: z.string() } },
    },
    401: { description: 'Unauthorized.', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'File not found or invalid path.',
      content: { 'text/plain': { schema: z.string() } },
    },
    500: { description: 'General error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getApiUserdataFileRoute = createRoute({
  method: 'get',
  path: '/api/userdata/{file}',
  tags: ['user'],
  summary: 'Get user data file',
  description: 'Returns the requested user data file if it exists.',
  operationId: 'getUserdataFile',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description: 'The filename of the user data to retrieve.',
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the file.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: {
      description: 'Bad request (e.g., invalid filename).',
      content: { 'text/plain': { schema: z.string() } },
    },
    401: { description: 'Unauthorized.', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'File not found or invalid path.',
      content: { 'text/plain': { schema: z.string() } },
    },
    500: { description: 'General error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postApiUserdataFileRoute = createRoute({
  method: 'post',
  path: '/api/userdata/{file}',
  tags: ['user'],
  summary: 'Upload or update a user data file',
  description:
    "Upload a file to a user's data directory. Optional query parameters allow\ncontrol over overwrite behavior and response detail.\n",
  operationId: 'postUserdataFile',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description: 'The target file path (URL encoded if necessary).',
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      overwrite: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'If "false", prevents overwriting existing files. Defaults to "true".',
            in: 'query',
            name: 'overwrite',
            schema: { default: 'true', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
      full_info: z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If "true", returns detailed file info; if "false", returns only the relative path.',
            in: 'query',
            name: 'full_info',
            schema: { default: 'false', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'File uploaded successfully.',
      content: { 'application/json': { schema: UserDataResponseFullSchema } },
    },
    400: {
      description: "Missing or invalid 'file' parameter.",
      content: { 'text/plain': { schema: z.string() } },
    },
    401: { description: 'Unauthorized.', content: { 'text/plain': { schema: z.string() } } },
    403: {
      description: 'The requested path is not allowed.',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'File already exists and overwrite is set to false.',
      content: { 'text/plain': { schema: z.string() } },
    },
    500: { description: 'General error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteApiUserdataFileRoute = createRoute({
  method: 'delete',
  path: '/api/userdata/{file}',
  tags: ['user'],
  summary: 'Delete a user data file',
  description:
    "Delete a user data file from the database. The file parameter should be\nthe relative path within the user's data directory.\n",
  operationId: 'deleteUserdataFile',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description: 'The file path to delete (URL encoded if necessary).',
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'File deleted successfully (No Content).' },
    401: { description: 'Unauthorized.', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'File not found.', content: { 'text/plain': { schema: z.string() } } },
    500: {
      description: 'Internal server error.',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const postApiUserdataFileMoveDestRoute = createRoute({
  method: 'post',
  path: '/api/userdata/{file}/move/{dest}',
  tags: ['user'],
  summary: 'Move or rename a user data file',
  description:
    "Move or rename a file within a user's data directory, with options for\ncontrolling overwrite behavior and response format.\n",
  operationId: 'moveUserdataFile',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description: 'The source file path (URL encoded if necessary).',
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dest: z
        .string()
        .openapi({
          param: {
            description: 'The destination file path (URL encoded if necessary).',
            in: 'path',
            name: 'dest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      overwrite: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'If "false", prevents overwriting existing files. Defaults to "true".',
            in: 'query',
            name: 'overwrite',
            schema: { default: 'true', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File moved successfully.',
      content: { 'application/json': { schema: UserDataResponseFullSchema } },
    },
    400: {
      description: 'Missing or invalid parameters.',
      content: { 'text/plain': { schema: z.string() } },
    },
    401: { description: 'Unauthorized.', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Source file not found.',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'Destination file already exists and overwrite is set to false.',
      content: { 'text/plain': { schema: z.string() } },
    },
    500: { description: 'General error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getApiUserdataFilePublishRoute = createRoute({
  method: 'get',
  path: '/api/userdata/{file}/publish',
  tags: ['workflows'],
  summary: 'Get publish info for a workflow file',
  description:
    'Returns the publish status and share info for a workflow identified by its userdata path.',
  operationId: 'getUserdataFilePublish',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description:
              "The workflow file path within the user's data directory (URL encoded if necessary).",
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Publish info (publish_time is null if never published)',
      content: { 'application/json': { schema: WorkflowPublishInfoSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiUserdataFilePublishRoute = createRoute({
  method: 'post',
  path: '/api/userdata/{file}/publish',
  tags: ['workflows'],
  summary: 'Publish a workflow file',
  description:
    'Creates a new published_workflow record from the latest version and snapshots the provided assets.',
  operationId: 'postUserdataFilePublish',
  request: {
    params: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description:
              "The workflow file path within the user's data directory (URL encoded if necessary).",
            in: 'path',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublishWorkflowAssetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Workflow published',
      content: { 'application/json': { schema: WorkflowPublishInfoSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiUsersRoute = createRoute({
  method: 'get',
  path: '/api/users',
  tags: ['user'],
  summary: 'ComfyUI userdata storage info',
  description:
    'ComfyUI legacy users endpoint. Returns information about how user\ndata is stored. In cloud this is always server-managed, so callers\nreceive a constant response indicating server-side storage.\n',
  operationId: 'getUsersInfo',
  responses: {
    200: {
      description: 'Userdata storage information',
      content: {
        'application/json': {
          schema: z
            .object({
              migrated: z
                .boolean()
                .openapi({
                  description: 'Whether user data has been migrated (always true in cloud)',
                }),
              storage: z
                .string()
                .openapi({ description: 'Where user data is stored (always "server" in cloud)' }),
            })
            .openapi({ required: ['storage', 'migrated'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiVhsQueryvideoRoute = createRoute({
  method: 'get',
  path: '/api/vhs/queryvideo',
  tags: ['file'],
  summary: 'Query VHS video metadata',
  description:
    'VHS custom node endpoint that returns metadata about a video file\n(frame count, fps, resolution, duration). Currently returns default\nplaceholder values; real ffprobe integration is a follow-up.\n',
  operationId: 'getVhsQueryVideo',
  request: {
    query: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Name of the video file to query',
            in: 'query',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Video metadata',
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .object({
                  duration: z.number().openapi({ description: 'Duration in seconds' }),
                  fps: z.number().openapi({ description: 'Frames per second' }),
                  frames: z.int().openapi({ description: 'Total frame count' }),
                  size: z
                    .array(z.int())
                    .length(2)
                    .openapi({ description: '[width, height] in pixels' }),
                })
                .openapi({
                  description: 'Source video metadata',
                  required: ['size', 'fps', 'frames', 'duration'],
                }),
            })
            .openapi({ required: ['source'] }),
        },
      },
    },
    400: {
      description:
        'Missing required query parameter. Produced by the oapi-codegen\nwrapper via echo.NewHTTPError; the custom Echo HTTPErrorHandler\nnormalizes it to the standard ErrorResponse {code, message} shape\n(BE-1178).\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, { CookieAuth: [] }],
})

export const getApiViewRoute = createRoute({
  method: 'get',
  path: '/api/view',
  tags: ['file'],
  summary: 'View a file',
  description:
    "Retrieve and view a file from the ComfyUI file system.\nThis endpoint is typically used to view generated images or other output files.\nCookie auth is allowed on this endpoint because it's used by img/video tags in browsers.\n",
  operationId: 'viewFile',
  request: {
    query: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Name of the file to view',
            in: 'query',
            name: 'filename',
            required: true,
            schema: { example: 'ComfyUI_00004_.png', type: 'string' },
          },
          example: 'ComfyUI_00004_.png',
        }),
      subfolder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Subfolder path where the file is located',
            in: 'query',
            name: 'subfolder',
            schema: { example: 'tests/foo/bar', type: 'string' },
            required: false,
          },
          example: 'tests/foo/bar',
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of file (e.g., output, input, temp)',
            in: 'query',
            name: 'type',
            schema: { example: 'output', type: 'string' },
            required: false,
          },
          example: 'output',
        }),
      fullpath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Full path to the file (used for temp files)',
            in: 'query',
            name: 'fullpath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the file',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      frame_rate: z
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
            description: 'Frame rate for video files',
            in: 'query',
            name: 'frame_rate',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      workflow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Workflow identifier',
            in: 'query',
            name: 'workflow',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timestamp: z
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
            description: 'Timestamp parameter',
            in: 'query',
            name: 'timestamp',
            schema: { example: 1234567890, type: 'integer' },
            required: false,
          },
          example: 1234567890,
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Image channel to extract from PNG images.\n- 'rgb': Return only RGB channels (alpha set to fully opaque)\n- 'a' or 'alpha': Return alpha channel as grayscale image\n- If not specified, return original image unchanged via redirect\n",
            in: 'query',
            name: 'channel',
            schema: { example: 'rgb', type: 'string' },
            required: false,
          },
          example: 'rgb',
        }),
      res: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(64).max(1024),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum dimension (width or height) to resize the image to, preserving aspect ratio.\nThe image is fit within a res x res box. Returns a JPEG thumbnail.\nOnly applies to raster image files (PNG, JPEG, WebP, GIF).\n',
            in: 'query',
            name: 'res',
            schema: { example: 256, maximum: 1024, minimum: 64, type: 'integer' },
            required: false,
          },
          example: 256,
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success - File content returned (used when channel or res parameter is present)',
      content: {
        'image/jpeg': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'Resized JPEG thumbnail (returned when res parameter is used)',
            }),
        },
        'image/png': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'Processed PNG image with extracted channel',
            }),
        },
      },
    },
    302: {
      description: 'Redirect to GCS signed URL',
      headers: z.object({
        'Cache-Control': {
          description: 'Cache directive for the redirect response',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Cache directive for the redirect response',
              param: { required: false },
            }),
        },
        Location: {
          description: 'Signed URL to access the file in GCS',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Signed URL to access the file in GCS',
              param: { required: false },
            }),
        },
        Vary: {
          description: 'Headers that affect response caching',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Headers that affect response caching',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request parameters',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'File not found or unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }, { CookieAuth: [] }],
})

export const getApiWorkflowTemplatesRoute = createRoute({
  method: 'get',
  path: '/api/workflow_templates',
  tags: ['workflow'],
  summary: 'Get available workflow templates',
  description: 'Returns available workflow templates',
  operationId: 'getWorkflowTemplates',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ description: 'Empty object for workflow templates' }),
        },
      },
    },
  },
  security: [],
})

export const getApiWorkflowsRoute = createRoute({
  method: 'get',
  path: '/api/workflows',
  tags: ['workflows'],
  summary: 'List workflows',
  description:
    'Returns a paginated list of workflows for the authenticated user in the current workspace.',
  operationId: 'listWorkflows',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 20, maximum: 100, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search workflows by name (case-insensitive substring match)',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      default_view: z
        .enum(['workflow', 'app'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by default view type',
            in: 'query',
            name: 'default_view',
            schema: { enum: ['workflow', 'app'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['create_time', 'update_time', 'name'])
        .default('create_time')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'create_time',
              enum: ['create_time', 'update_time', 'name'],
              type: 'string',
            },
            required: false,
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'order',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowListResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiWorkflowsRoute = createRoute({
  method: 'post',
  path: '/api/workflows',
  tags: ['workflows'],
  summary: 'Create a new workflow',
  description: 'Creates a new workflow with its first version.',
  operationId: 'createWorkflow',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Workflow created successfully',
      content: { 'application/json': { schema: WorkflowResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiWorkflowsWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/api/workflows/{workflow_id}',
  tags: ['workflows'],
  summary: 'Get workflow',
  description: 'Retrieves workflow metadata by ID.',
  operationId: 'getWorkflow',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the workflow.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteApiWorkflowsWorkflowIdRoute = createRoute({
  method: 'delete',
  path: '/api/workflows/{workflow_id}',
  tags: ['workflows'],
  summary: 'Delete workflow',
  description: 'Soft-deletes a workflow.',
  operationId: 'deleteWorkflow',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the workflow to delete.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Workflow deleted successfully' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchApiWorkflowsWorkflowIdRoute = createRoute({
  method: 'patch',
  path: '/api/workflows/{workflow_id}',
  tags: ['workflows'],
  summary: 'Update workflow metadata',
  description: 'Updates mutable workflow metadata (name, description, default_view).',
  operationId: 'updateWorkflow',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the workflow to update.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiWorkflowsWorkflowIdContentRoute = createRoute({
  method: 'get',
  path: '/api/workflows/{workflow_id}/content',
  tags: ['workflows'],
  summary: 'Get workflow content',
  description: 'Retrieves the latest version of a workflow and its JSON content.',
  operationId: 'getWorkflowContent',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the workflow whose content should be retrieved.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowVersionContentResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiWorkflowsWorkflowIdForkRoute = createRoute({
  method: 'post',
  path: '/api/workflows/{workflow_id}/fork',
  tags: ['workflows'],
  summary: 'Fork a workflow',
  description: 'Creates a new workflow by forking from an existing version.',
  operationId: 'forkWorkflow',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the source workflow to fork from.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ForkWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Workflow forked successfully',
      content: { 'application/json': { schema: WorkflowResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Source workflow or version not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiWorkflowsWorkflowIdVersionsRoute = createRoute({
  method: 'post',
  path: '/api/workflows/{workflow_id}/versions',
  tags: ['workflows'],
  summary: 'Create a new version',
  description:
    'Creates a new workflow version with updated workflow JSON. Uses optimistic concurrency via base_version.',
  operationId: 'createWorkflowVersion',
  request: {
    params: z.object({
      workflow_id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the workflow to create a new version for.',
            in: 'path',
            name: 'workflow_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkflowVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Version created successfully',
      content: { 'application/json': { schema: WorkflowVersionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden - not the workflow owner',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Workflow not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Version conflict - base_version does not match latest',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getApiWorkflowsPublishedShareIdRoute = createRoute({
  method: 'get',
  path: '/api/workflows/published/{share_id}',
  tags: ['workflows'],
  summary: 'Get a published workflow by share ID',
  description:
    "Returns the published workflow details including the status of each\npublished asset relative to the caller's library. Authentication is required.\n",
  operationId: 'getPublishedWorkflow',
  request: {
    params: z.object({
      share_id: z
        .string()
        .openapi({
          param: {
            description: 'The share ID of the published workflow.',
            in: 'path',
            name: 'share_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Published workflow details with asset statuses',
      content: { 'application/json': { schema: PublishedWorkflowDetailSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Share not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    413: {
      description: 'Workflow JSON too large',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['system'],
  summary: 'Health probe for Kubernetes readiness/liveness',
  description:
    'Returns `200 OK` if the database is reachable and dynamic config has\nloaded, otherwise `503 Service Unavailable`. Used by the GKE ingress\nfor health checks. Response body is plain text for probe simplicity.\n',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'Service is healthy',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'OK' }) } },
    },
    503: {
      description: 'Service is unhealthy',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Service Unavailable' }) } },
    },
  },
  security: [],
})

export const getInternalFolderPathsRoute = createRoute({
  method: 'get',
  path: '/internal/folder_paths',
  summary: 'Get configured folder paths',
  description:
    'Returns the filesystem paths ComfyUI loads models and assets from, keyed by folder type.',
  operationId: 'getInternalFolderPaths',
  responses: {
    200: {
      description: 'Dictionary of folder type to paths',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.array(z.array(z.string())))
            .openapi({ description: 'Map of folder type name to list of path entries' }),
        },
      },
    },
  },
})

export const getInternalLogsRoute = createRoute({
  method: 'get',
  path: '/internal/logs',
  summary: 'Get server logs as text',
  description: 'Returns ComfyUI log entries from the in-memory log buffer.',
  operationId: 'getInternalLogs',
  responses: {
    200: { description: 'Log text', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getInternalLogsRawRoute = createRoute({
  method: 'get',
  path: '/internal/logs/raw',
  summary: 'Get raw structured log entries',
  description: 'Returns the raw ComfyUI log buffer plus size metadata.',
  operationId: 'getInternalLogsRaw',
  responses: {
    200: {
      description: 'Structured log data',
      content: {
        'application/json': {
          schema: z
            .object({
              entries: z
                .array(
                  z
                    .object({
                      m: z.string().exactOptional().openapi({ description: 'Message' }),
                      t: z.number().exactOptional().openapi({ description: 'Timestamp' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              size: z
                .object({ cols: z.int().exactOptional(), rows: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const patchInternalLogsSubscribeRoute = createRoute({
  method: 'patch',
  path: '/internal/logs/subscribe',
  summary: 'Subscribe or unsubscribe a WebSocket client to log streaming',
  description:
    'Subscribes or unsubscribes the current client from live log streaming over the WebSocket.',
  operationId: 'subscribeToLogs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientId: z.string().openapi({ description: 'WebSocket client ID' }),
              enabled: z
                .boolean()
                .openapi({ description: 'Enable or disable log streaming for this client' }),
            })
            .openapi({ required: ['clientId', 'enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Subscription updated' } },
})
