import { createRoute, z } from '@hono/zod-openapi'

const AppConfigSetBodySchema = z
  .object({
    requires_restart: z.int().default(1).exactOptional().openapi({ title: 'Requires Restart' }),
    update_topic: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Update Topic' }),
    config_data: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Config Data' }),
    skip_save: z.boolean().default(false).exactOptional().openapi({ title: 'Skip Save' }),
    replace_paths: z.array(z.string()).exactOptional().openapi({ title: 'Replace Paths' }),
  })
  .openapi({ title: 'AppConfigSetBody', required: [] })
  .openapi('AppConfigSetBody')

const AppPostLoginBodySchema = z
  .object({
    user: z.string().openapi({ title: 'User' }),
    password: z.string().openapi({ title: 'Password' }),
  })
  .openapi({ required: ['user', 'password'], title: 'AppPostLoginBody' })
  .openapi('AppPostLoginBody')

const AppPostUsersBodySchema = z
  .object({
    username: z.string().openapi({ title: 'Username' }),
    password: z.string().openapi({ title: 'Password' }),
    role: z
      .union([z.string(), z.null().nullable()])
      .default('viewer')
      .exactOptional()
      .openapi({ title: 'Role' }),
  })
  .openapi({ required: ['username', 'password'], title: 'AppPostUsersBody' })
  .openapi('AppPostUsersBody')

const AppPutPasswordBodySchema = z
  .object({
    password: z.string().openapi({ title: 'Password' }),
    old_password: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Old Password' }),
  })
  .openapi({ required: ['password'], title: 'AppPutPasswordBody' })
  .openapi('AppPutPasswordBody')

const AppPutRoleBodySchema = z
  .object({ role: z.string().openapi({ title: 'Role' }) })
  .openapi({ required: ['role'], title: 'AppPutRoleBody' })
  .openapi('AppPutRoleBody')

const AudioTranscriptionBodySchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'ID of the event to transcribe audio for' }),
  })
  .openapi({ required: ['event_id'], title: 'AudioTranscriptionBody' })
  .openapi('AudioTranscriptionBody')

const BatchExportItemSchema = z
  .object({
    camera: z.string().openapi({ title: 'Camera name' }),
    start_time: z.number().openapi({ title: 'Start time' }),
    end_time: z.number().openapi({ title: 'End time' }),
    image_path: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Existing thumbnail path',
        description: 'Optional existing image to use as the export thumbnail',
      }),
    friendly_name: z
      .union([z.string().max(256), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Friendly name',
        description: 'Optional friendly name for this specific export item',
      }),
    client_item_id: z
      .union([z.string().max(128), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Client item ID',
        description: 'Optional opaque client identifier echoed back in results',
      }),
  })
  .openapi({ required: ['camera', 'start_time', 'end_time'], title: 'BatchExportItem' })
  .openapi('BatchExportItem')

const ExportStreamEnumSchema = z
  .enum(['auto', 'main', 'sub'])
  .openapi({
    title: 'ExportStreamEnum',
    description:
      'Which recorded stream an export should be built from.\n\n``auto`` keeps the merged timeline: main where it exists, sub filling\nthe gaps main has already aged out of. Pinning to one stream trades\nthat coverage for a uniform source, which is always a plain stream\ncopy since nothing hands off mid-export.',
  })
  .openapi('ExportStreamEnum')

const BatchExportBodySchema = z
  .object({
    items: z
      .array(BatchExportItemSchema)
      .min(1)
      .max(50)
      .openapi({
        title: 'Items',
        description: 'List of export items. Each item has its own camera and time range.',
      }),
    export_case_id: z
      .union([z.string().max(30), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export case ID',
        description:
          'Existing export case ID to assign all exports to. Attaching to an existing case is temporarily admin-only until case-level ACLs exist.',
      }),
    new_case_name: z
      .union([z.string().max(100), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'New case name',
        description: 'Name of a new export case to create when export_case_id is omitted',
      }),
    new_case_description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'New case description',
        description: 'Optional description for a newly created export case',
      }),
    stream: ExportStreamEnumSchema.default('auto')
      .exactOptional()
      .openapi({
        title: 'Recorded stream to export',
        description:
          "Which recorded stream every item in the batch is exported from. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the exports to that stream.",
      }),
  })
  .openapi({ required: ['items'], title: 'BatchExportBody' })
  .openapi('BatchExportBody')

const BatchExportResultModelSchema = z
  .object({
    camera: z
      .string()
      .openapi({ title: 'Camera', description: 'Camera name for this export attempt' }),
    export_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export Id',
        description: 'The export ID when the export was successfully queued',
      }),
    success: z
      .boolean()
      .openapi({ title: 'Success', description: 'Whether the export was successfully queued' }),
    status: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Status', description: 'Queue status for this camera export' }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Error',
        description: 'Validation or queueing error for this item, if any',
      }),
    item_index: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Item Index',
        description: 'Zero-based index of this result within the request items list',
      }),
    client_item_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Client Item Id',
        description: 'Opaque client-supplied item identifier echoed from the request',
      }),
  })
  .openapi({
    required: ['camera', 'success'],
    title: 'BatchExportResultModel',
    description: 'Per-item result for a batch export request.',
  })
  .openapi('BatchExportResultModel')

const BatchExportResponseSchema = z
  .object({
    export_case_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export Case Id',
        description: 'Export case ID associated with the batch',
      }),
    export_ids: z
      .array(z.string())
      .openapi({ title: 'Export Ids', description: 'Export IDs successfully queued' }),
    results: z
      .array(BatchExportResultModelSchema)
      .openapi({ title: 'Results', description: 'Per-item batch export results' }),
  })
  .openapi({
    required: ['export_ids', 'results'],
    title: 'BatchExportResponse',
    description: 'Response model for starting an export batch.',
  })
  .openapi('BatchExportResponse')

const BodyRecognizeFaceFacesRecognizePostSchema = z
  .object({ file: z.string().openapi({ title: 'File' }) })
  .openapi({ required: ['file'], title: 'Body_recognize_face_faces_recognize_post' })
  .openapi('BodyRecognizeFaceFacesRecognizePost')

const BodyRegisterFaceFacesNameRegisterPostSchema = z
  .object({ file: z.string().openapi({ title: 'File' }) })
  .openapi({ required: ['file'], title: 'Body_register_face_faces__name__register_post' })
  .openapi('BodyRegisterFaceFacesNameRegisterPost')

const CameraSetBodySchema = z
  .object({
    value: z.string().openapi({ title: 'Value', description: 'The value to set for the feature' }),
  })
  .openapi({ required: ['value'], title: 'CameraSetBody' })
  .openapi('CameraSetBody')

const ChaptersEnumSchema = z
  .enum(['none', 'recording_segments', 'review_items'])
  .openapi({ title: 'ChaptersEnum' })
  .openapi('ChaptersEnum')

const ChatMessageSchema = z
  .object({
    role: z
      .string()
      .openapi({
        title: 'Role',
        description: "Message role: 'user', 'assistant', 'system', or 'tool'",
      }),
    content: z
      .union([z.any(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Content',
        description:
          'Message content. Usually a string, but may be a multimodal content list (e.g. text + image_url) or null for assistant turns that only request tool calls.',
      }),
    tool_call_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Tool Call Id',
        description: 'For tool messages, the ID of the tool call',
      }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'For tool messages, the tool name' }),
    tool_calls: z
      .union([z.array(z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Tool Calls',
        description:
          "For assistant messages replayed from prior turns, the OpenAI-format tool calls the model previously requested. Replaying these verbatim keeps the conversation prefix byte-for-byte identical so the model server's prompt cache hits on follow-up turns.",
      }),
  })
  .openapi({
    required: ['role'],
    title: 'ChatMessage',
    description: 'A single message in a chat conversation.',
  })
  .openapi('ChatMessage')

const ChatCompletionRequestSchema = z
  .object({
    messages: z
      .array(ChatMessageSchema)
      .openapi({ title: 'Messages', description: 'List of messages in the conversation' }),
    max_tool_iterations: z
      .int()
      .min(1)
      .max(10)
      .default(5)
      .exactOptional()
      .openapi({
        title: 'Max Tool Iterations',
        description: 'Maximum number of tool call iterations (default: 5)',
      }),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'If true, stream the final assistant response in the body as newline-delimited JSON.',
      }),
    enable_thinking: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Enable Thinking',
        description:
          'Per-request thinking toggle. None means use the provider default. Ignored by providers that do not expose a per-request thinking switch.',
      }),
    tool_decisions: z
      .record(z.string(), z.enum(['approve', 'reject']))
      .exactOptional()
      .openapi({
        title: 'Tool Decisions',
        description:
          'Decisions for tool calls that paused for approval, keyed by tool call ID. Send these with the conversation chain returned alongside an approval request; rejected calls are reported to the model as declined instead of being executed.',
      }),
  })
  .openapi({
    required: ['messages'],
    title: 'ChatCompletionRequest',
    description: 'Request for chat completion with tool calling.',
  })
  .openapi('ChatCompletionRequest')

const DayReviewSchema = z
  .object({
    day: z.iso.datetime({ offset: true }).openapi({ title: 'Day' }),
    reviewed_alert: z.int().openapi({ title: 'Reviewed Alert' }),
    reviewed_detection: z.int().openapi({ title: 'Reviewed Detection' }),
    total_alert: z.int().openapi({ title: 'Total Alert' }),
    total_detection: z.int().openapi({ title: 'Total Detection' }),
  })
  .openapi({
    required: ['day', 'reviewed_alert', 'reviewed_detection', 'total_alert', 'total_detection'],
    title: 'DayReview',
  })
  .openapi('DayReview')

const DebugReplayStartBodySchema = z
  .object({
    camera: z.string().openapi({ title: 'Source camera name' }),
    start_time: z.number().openapi({ title: 'Start timestamp' }),
    end_time: z.number().openapi({ title: 'End timestamp' }),
  })
  .openapi({
    required: ['camera', 'start_time', 'end_time'],
    title: 'DebugReplayStartBody',
    description: 'Request body for starting a debug replay session.',
  })
  .openapi('DebugReplayStartBody')

const DebugReplayStartFromExportBodySchema = z
  .object({ export_id: z.string().openapi({ title: 'Export id' }) })
  .openapi({
    required: ['export_id'],
    title: 'DebugReplayStartFromExportBody',
    description: 'Request body for starting a debug replay session from an export.',
  })
  .openapi('DebugReplayStartFromExportBody')

const DebugReplayStartResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    replay_camera: z.string().openapi({ title: 'Replay Camera' }),
    job_id: z.string().openapi({ title: 'Job Id' }),
  })
  .openapi({
    required: ['success', 'replay_camera', 'job_id'],
    title: 'DebugReplayStartResponse',
    description: 'Response for starting a debug replay session.',
  })
  .openapi('DebugReplayStartResponse')

const DebugReplayStatusResponseSchema = z
  .object({
    active: z.boolean().openapi({ title: 'Active' }),
    replay_camera: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Replay Camera' }),
    source_camera: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Camera' }),
    start_time: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Time' }),
    end_time: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Time' }),
    live_ready: z.boolean().default(false).exactOptional().openapi({ title: 'Live Ready' }),
  })
  .openapi({
    required: ['active'],
    title: 'DebugReplayStatusResponse',
    description:
      'Response for debug replay status.\n\nReturns only session-presence fields. Startup progress and error\ndetails flow through the job_state WebSocket topic via the\ndebug_replay job (see frigate.jobs.debug_replay); the\nReplay page subscribes there with useJobStatus("debug_replay").',
  })
  .openapi('DebugReplayStatusResponse')

const DebugReplayStopResponseSchema = z
  .object({ success: z.boolean().openapi({ title: 'Success' }) })
  .openapi({
    required: ['success'],
    title: 'DebugReplayStopResponse',
    description: 'Response for stopping a debug replay session.',
  })
  .openapi('DebugReplayStopResponse')

const DeleteFaceImagesBodySchema = z
  .object({
    ids: z
      .array(z.string())
      .openapi({
        title: 'Ids',
        description: 'List of image filenames to delete from the face folder',
      }),
  })
  .openapi({ required: ['ids'], title: 'DeleteFaceImagesBody' })
  .openapi('DeleteFaceImagesBody')

const HardwareUnitSchema = z
  .object({
    device: z
      .string()
      .openapi({
        title: 'Device string',
        description: "The value to put in a model's devices list, for example 'edgetpu:pci:1'.",
      }),
    label: z
      .string()
      .openapi({
        title: 'Unit label',
        description:
          "How to identify this unit among others of the same kind, for example 'PCIe 1'.",
      }),
  })
  .openapi({
    required: ['device', 'label'],
    title: 'HardwareUnit',
    description: 'One physical piece of hardware.',
  })
  .openapi('HardwareUnit')

const DetectionHardwareSchema = z
  .object({
    key: z
      .string()
      .openapi({
        title: 'Hardware key',
        description: 'Stable identifier for this kind of hardware.',
      }),
    detector: z
      .string()
      .openapi({ title: 'Detector type', description: 'The detector that drives this hardware.' }),
    name: z
      .string()
      .openapi({
        title: 'Hardware name',
        description: 'Human readable name for this kind of hardware.',
      }),
    units: z
      .array(HardwareUnitSchema)
      .openapi({
        title: 'Units',
        description: 'Each physical piece of this hardware that was found.',
      }),
    count: z.int().openapi({ title: 'Unit count', description: 'How many units were found.' }),
    unlimited: z
      .boolean()
      .openapi({
        title: 'Unlimited detectors',
        description: 'Whether this hardware can run more inference processes than there are units.',
      }),
  })
  .openapi({
    required: ['key', 'detector', 'name', 'units', 'count', 'unlimited'],
    title: 'DetectionHardware',
    description: 'A kind of detection hardware, and every unit of it that was found.',
  })
  .openapi('DetectionHardware')

const EventCreateResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    message: z.string().openapi({ title: 'Message' }),
    event_id: z.string().openapi({ title: 'Event Id' }),
  })
  .openapi({ required: ['success', 'message', 'event_id'], title: 'EventCreateResponse' })
  .openapi('EventCreateResponse')

const EventMultiDeleteResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    deleted_events: z.array(z.string()).openapi({ title: 'Deleted Events' }),
    not_found_events: z.array(z.string()).openapi({ title: 'Not Found Events' }),
  })
  .openapi({
    required: ['success', 'deleted_events', 'not_found_events'],
    title: 'EventMultiDeleteResponse',
  })
  .openapi('EventMultiDeleteResponse')

const EventResponseSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    label: z.string().openapi({ title: 'Label' }),
    sub_label: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Sub Label' }),
    camera: z.string().openapi({ title: 'Camera' }),
    start_time: z.number().openapi({ title: 'Start Time' }),
    end_time: z.union([z.number(), z.null().nullable()]).openapi({ title: 'End Time' }),
    false_positive: z
      .union([z.boolean(), z.null().nullable()])
      .openapi({ title: 'False Positive' }),
    zones: z.array(z.string()).openapi({ title: 'Zones' }),
    thumbnail: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Thumbnail' }),
    has_clip: z.boolean().openapi({ title: 'Has Clip' }),
    has_snapshot: z.boolean().openapi({ title: 'Has Snapshot' }),
    retain_indefinitely: z.boolean().openapi({ title: 'Retain Indefinitely' }),
    plus_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Plus Id' }),
    model_hash: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Model Hash' }),
    detector_type: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Detector Type' }),
    model_type: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Model Type' }),
    data: z.looseObject({}).openapi({ title: 'Data' }),
  })
  .openapi({
    required: [
      'id',
      'label',
      'sub_label',
      'camera',
      'start_time',
      'end_time',
      'false_positive',
      'zones',
      'thumbnail',
      'has_clip',
      'has_snapshot',
      'retain_indefinitely',
      'plus_id',
      'model_hash',
      'detector_type',
      'model_type',
      'data',
    ],
    title: 'EventResponse',
  })
  .openapi('EventResponse')

const EventUploadPlusResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    plus_id: z.string().openapi({ title: 'Plus Id' }),
  })
  .openapi({ required: ['success', 'plus_id'], title: 'EventUploadPlusResponse' })
  .openapi('EventUploadPlusResponse')

const EventsAttributesBodySchema = z
  .object({
    attributes: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'Selected classification attributes for the event' }),
  })
  .openapi({ title: 'EventsAttributesBody', required: [] })
  .openapi('EventsAttributesBody')

const EventsCreateBodySchema = z
  .object({
    sub_label: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Sub Label' }),
    score: z
      .union([z.number(), z.null().nullable()])
      .default(0)
      .exactOptional()
      .openapi({ title: 'Score' }),
    duration: z
      .union([z.int(), z.null().nullable()])
      .default(30)
      .exactOptional()
      .openapi({ title: 'Duration' }),
    include_recording: z
      .union([z.boolean(), z.null().nullable()])
      .default(true)
      .exactOptional()
      .openapi({ title: 'Include Recording' }),
    draw: z
      .union([z.looseObject({}), z.null().nullable()])
      .default({})
      .exactOptional()
      .openapi({ title: 'Draw' }),
    pre_capture: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Pre Capture' }),
  })
  .openapi({ title: 'EventsCreateBody', required: [] })
  .openapi('EventsCreateBody')

const EventsDeleteBodySchema = z
  .object({ event_ids: z.array(z.string()).openapi({ title: 'The event IDs to delete' }) })
  .openapi({ required: ['event_ids'], title: 'EventsDeleteBody' })
  .openapi('EventsDeleteBody')

const EventsDescriptionBodySchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'The description of the event' }),
  })
  .openapi({ required: ['description'], title: 'EventsDescriptionBody' })
  .openapi('EventsDescriptionBody')

const EventsEndBodySchema = z
  .object({
    end_time: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Time' }),
  })
  .openapi({ title: 'EventsEndBody', required: [] })
  .openapi('EventsEndBody')

const EventsLPRBodySchema = z
  .object({
    recognizedLicensePlate: z.string().max(100).openapi({ title: 'Recognized License Plate' }),
    recognizedLicensePlateScore: z
      .union([z.number().gt(0).max(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Score for recognized license plate' }),
  })
  .openapi({ required: ['recognizedLicensePlate'], title: 'EventsLPRBody' })
  .openapi('EventsLPRBody')

const EventsSubLabelBodySchema = z
  .object({
    subLabel: z.string().max(100).openapi({ title: 'Sub label' }),
    subLabelScore: z
      .union([z.number().gt(0).max(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Score for sub label' }),
    camera: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Camera this object is detected on.' }),
  })
  .openapi({ required: ['subLabel'], title: 'EventsSubLabelBody' })
  .openapi('EventsSubLabelBody')

const ExportBulkDeleteBodySchema = z
  .object({ ids: z.array(z.string().min(1)).min(1).openapi({ title: 'Ids' }) })
  .openapi({
    required: ['ids'],
    title: 'ExportBulkDeleteBody',
    description: 'Request body for bulk deleting exports.',
  })
  .openapi('ExportBulkDeleteBody')

const ExportBulkReassignBodySchema = z
  .object({
    ids: z.array(z.string().min(1)).min(1).openapi({ title: 'Ids' }),
    export_case_id: z
      .union([z.string().max(30), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export Case Id',
        description: 'Case ID to assign to, or null to unassign from current case',
      }),
  })
  .openapi({
    required: ['ids'],
    title: 'ExportBulkReassignBody',
    description: 'Request body for bulk reassigning exports to a case.',
  })
  .openapi('ExportBulkReassignBody')

const ExportCaseCreateBodySchema = z
  .object({
    name: z
      .string()
      .max(100)
      .openapi({ title: 'Name', description: 'Friendly name of the export case' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Optional description of the export case' }),
  })
  .openapi({
    required: ['name'],
    title: 'ExportCaseCreateBody',
    description: 'Request body for creating a new export case.',
  })
  .openapi('ExportCaseCreateBody')

const ExportCaseModelSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'Unique identifier for the export case' }),
    name: z.string().openapi({ title: 'Name', description: 'Friendly name of the export case' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Optional description of the export case' }),
    created_at: z
      .number()
      .openapi({
        title: 'Created At',
        description: 'Unix timestamp when the export case was created',
      }),
    updated_at: z
      .number()
      .openapi({
        title: 'Updated At',
        description: 'Unix timestamp when the export case was last updated',
      }),
  })
  .openapi({
    required: ['id', 'name', 'created_at', 'updated_at'],
    title: 'ExportCaseModel',
    description: 'Model representing a single export case.',
  })
  .openapi('ExportCaseModel')

const ExportCaseUpdateBodySchema = z
  .object({
    name: z
      .union([z.string().max(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'Updated friendly name of the export case' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Updated description of the export case' }),
  })
  .openapi({
    title: 'ExportCaseUpdateBody',
    description: 'Request body for updating an existing export case.',
    required: [],
  })
  .openapi('ExportCaseUpdateBody')

const ExportJobModelSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'Unique identifier for the export job' }),
    job_type: z.string().openapi({ title: 'Job Type', description: 'Job type' }),
    status: z.string().openapi({ title: 'Status', description: 'Current job status' }),
    camera: z
      .string()
      .openapi({ title: 'Camera', description: 'Camera associated with this export job' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'Friendly name for the export' }),
    export_case_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export Case Id',
        description: 'ID of the export case this export belongs to',
      }),
    request_start_time: z
      .number()
      .openapi({ title: 'Request Start Time', description: 'Requested export start time' }),
    request_end_time: z
      .number()
      .openapi({ title: 'Request End Time', description: 'Requested export end time' }),
    start_time: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Time', description: 'Unix timestamp when execution started' }),
    end_time: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Time', description: 'Unix timestamp when execution completed' }),
    error_message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Error Message', description: 'Error message for failed jobs' }),
    results: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Results', description: 'Result metadata for completed jobs' }),
    current_step: z
      .string()
      .default('queued')
      .exactOptional()
      .openapi({
        title: 'Current Step',
        description:
          'Current execution step (queued, preparing, encoding, encoding_retry, finalizing)',
      }),
    progress_percent: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Progress Percent',
        description: 'Progress percentage of the current step (0.0 - 100.0)',
      }),
  })
  .openapi({
    required: ['id', 'job_type', 'status', 'camera', 'request_start_time', 'request_end_time'],
    title: 'ExportJobModel',
    description: 'Model representing a queued or running export job.',
  })
  .openapi('ExportJobModel')

const ExportModelSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'Unique identifier for the export' }),
    camera: z
      .string()
      .openapi({ title: 'Camera', description: 'Camera name associated with this export' }),
    name: z.string().openapi({ title: 'Name', description: 'Friendly name of the export' }),
    date: z
      .number()
      .openapi({ title: 'Date', description: 'Unix timestamp when the export was created' }),
    video_path: z
      .string()
      .openapi({ title: 'Video Path', description: 'File path to the exported video' }),
    thumb_path: z
      .string()
      .openapi({ title: 'Thumb Path', description: 'File path to the export thumbnail' }),
    in_progress: z
      .boolean()
      .openapi({
        title: 'In Progress',
        description: 'Whether the export is currently being processed',
      }),
    export_case_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export Case Id',
        description: 'ID of the export case this export belongs to',
      }),
  })
  .openapi({
    required: ['id', 'camera', 'name', 'date', 'video_path', 'thumb_path', 'in_progress'],
    title: 'ExportModel',
    description: 'Model representing a single export.',
  })
  .openapi('ExportModel')

const PlaybackSourceEnumSchema = z
  .enum(['recordings', 'preview'])
  .openapi({ title: 'PlaybackSourceEnum' })
  .openapi('PlaybackSourceEnum')

const ExportRecordingsBodySchema = z
  .object({
    source: PlaybackSourceEnumSchema.default('recordings')
      .exactOptional()
      .openapi({ title: 'Playback source' }),
    name: z
      .union([z.string().max(256), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Friendly name' }),
    image_path: z.string().exactOptional().openapi({ title: 'Image Path' }),
    export_case_id: z
      .union([z.string().max(30), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export case ID',
        description: 'ID of the export case to assign this export to',
      }),
    chapters: z
      .union([ChaptersEnumSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Chapter mode',
        description:
          "Optional chapter metadata to embed in the export. When omitted, the camera's configured export chapter mode is used.",
      }),
    stream: ExportStreamEnumSchema.default('auto')
      .exactOptional()
      .openapi({
        title: 'Recorded stream to export',
        description:
          "Which recorded stream to export. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the export to that stream alone.",
      }),
  })
  .openapi({ title: 'ExportRecordingsBody', required: [] })
  .openapi('ExportRecordingsBody')

const ExportRecordingsCustomBodySchema = z
  .object({
    source: PlaybackSourceEnumSchema.default('recordings')
      .exactOptional()
      .openapi({ title: 'Playback source' }),
    name: z.string().max(256).exactOptional().openapi({ title: 'Friendly name' }),
    image_path: z.string().exactOptional().openapi({ title: 'Image Path' }),
    export_case_id: z
      .union([z.string().max(30), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Export case ID',
        description: 'ID of the export case to assign this export to',
      }),
    ffmpeg_input_args: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'FFmpeg input arguments',
        description:
          'Custom FFmpeg input arguments. If not provided, defaults to timelapse input args.',
      }),
    ffmpeg_output_args: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'FFmpeg output arguments',
        description:
          'Custom FFmpeg output arguments. If not provided, defaults to timelapse output args.',
      }),
    cpu_fallback: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'CPU Fallback',
        description:
          'If true, retry export without hardware acceleration if the initial export fails.',
      }),
  })
  .openapi({ title: 'ExportRecordingsCustomBody', required: [] })
  .openapi('ExportRecordingsCustomBody')

const ExportRenameBodySchema = z
  .object({ name: z.string().max(256).openapi({ title: 'Friendly name' }) })
  .openapi({ required: ['name'], title: 'ExportRenameBody' })
  .openapi('ExportRenameBody')

const ExtensionSchema = z
  .enum(['webp', 'png', 'jpg', 'jpeg'])
  .openapi({ title: 'Extension' })
  .openapi('Extension')

const FaceRecognitionResponseSchema = z
  .object({
    success: z
      .boolean()
      .openapi({ title: 'Success', description: 'Whether the face recognition was successful' }),
    score: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Score', description: 'Confidence score of the recognition (0-1)' }),
    face_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Face Name', description: 'The recognized face name if successful' }),
  })
  .openapi({
    required: ['success'],
    title: 'FaceRecognitionResponse',
    description:
      'Response model for face recognition endpoint.\n\nReturns the result of attempting to recognize a face from an uploaded image.',
  })
  .openapi('FaceRecognitionResponse')

const FacesResponseSchema = z
  .record(z.string(), z.array(z.string()))
  .openapi({
    title: 'FacesResponse',
    description:
      'Response model for the get_faces endpoint.\n\nReturns a mapping of face names to lists of image filenames.\nEach face name corresponds to a directory in the faces folder,\nand the list contains the names of image files for that face.\n\nExample:\n    {\n        "john_doe": ["face1.webp", "face2.jpg"],\n        "jane_smith": ["face3.png"]\n    }',
  })
  .openapi('FacesResponse')

const GenAIProviderEnumSchema = z
  .enum(['openai', 'azure_openai', 'gemini', 'ollama', 'llamacpp'])
  .openapi({ title: 'GenAIProviderEnum' })
  .openapi('GenAIProviderEnum')

const GenAIProbeBodySchema = z
  .object({
    provider: GenAIProviderEnumSchema,
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    api_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Api Key' }),
    base_url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Base Url' }),
    provider_options: z.looseObject({}).exactOptional().openapi({ title: 'Provider Options' }),
  })
  .openapi({ required: ['provider'], title: 'GenAIProbeBody' })
  .openapi('GenAIProbeBody')

const GenerateObjectExamplesBodySchema = z
  .object({
    model_name: z
      .string()
      .openapi({ title: 'Model Name', description: 'Name of the classification model' }),
    label: z
      .string()
      .openapi({
        title: 'Label',
        description: "Object label to collect examples for (e.g., 'person', 'car')",
      }),
  })
  .openapi({ required: ['model_name', 'label'], title: 'GenerateObjectExamplesBody' })
  .openapi('GenerateObjectExamplesBody')

const GenerateStateExamplesBodySchema = z
  .object({
    model_name: z
      .string()
      .openapi({ title: 'Model Name', description: 'Name of the classification model' }),
    cameras: z
      .record(
        z.string(),
        z
          .array(z.unknown())
          .superRefine((arr, ctx) => {
            const Prefix = [z.number(), z.number(), z.number(), z.number()]
            for (const [i, Schema] of Prefix.slice(0, arr.length).entries()) {
              const result = Schema.safeParse(arr[i])
              if (!result.success) {
                for (const issue of result.error.issues) {
                  ctx.addIssue({ ...issue, path: [i, ...issue.path] })
                }
              }
            }
          })
          .length(4),
      )
      .openapi({
        title: 'Cameras',
        description:
          'Dictionary mapping camera names to normalized crop coordinates in [x1, y1, x2, y2] format (values 0-1)',
      }),
  })
  .openapi({ required: ['model_name', 'cameras'], title: 'GenerateStateExamplesBody' })
  .openapi('GenerateStateExamplesBody')

const GenericResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    message: z.string().openapi({ title: 'Message' }),
  })
  .openapi({ required: ['success', 'message'], title: 'GenericResponse' })
  .openapi('GenericResponse')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
    input: z.any().exactOptional().openapi({ title: 'Input' }),
    ctx: z.object({}).exactOptional().openapi({ title: 'Context' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const HwaccelFamilySchema = z
  .object({
    key: z
      .string()
      .openapi({
        title: 'Family key',
        description: 'Stable identifier for this kind of hardware decoding.',
      }),
    presets: z
      .record(z.string(), z.string())
      .openapi({
        title: 'Presets',
        description:
          "The ffmpeg preset for each codec this family decodes, or a single 'any' preset when it decodes every codec.",
      }),
  })
  .openapi({
    required: ['key', 'presets'],
    title: 'HwaccelFamily',
    description: 'A kind of hardware decoding, and the presets that drive it.',
  })
  .openapi('HwaccelFamily')

const HwaccelRecommendationSchema = z
  .object({
    recommended: z
      .string()
      .openapi({
        title: 'Recommended family',
        description:
          'Key of the family that fits this system best, or an empty string when none does.',
      }),
    available: z
      .array(HwaccelFamilySchema)
      .exactOptional()
      .openapi({
        title: 'Available families',
        description: "Every family this system's hardware can use, best first.",
      }),
  })
  .openapi({
    required: ['recommended'],
    title: 'HwaccelRecommendation',
    description: 'The hardware decoding this system can do.',
  })
  .openapi('HwaccelRecommendation')

const Last24HoursReviewSchema = z
  .object({
    reviewed_alert: z.int().openapi({ title: 'Reviewed Alert' }),
    reviewed_detection: z.int().openapi({ title: 'Reviewed Detection' }),
    total_alert: z.int().openapi({ title: 'Total Alert' }),
    total_detection: z.int().openapi({ title: 'Total Detection' }),
  })
  .openapi({
    required: ['reviewed_alert', 'reviewed_detection', 'total_alert', 'total_detection'],
    title: 'Last24HoursReview',
  })
  .openapi('Last24HoursReview')

const MediaSyncBodySchema = z
  .object({
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Dry Run',
        description: 'If True, only report orphans without deleting them',
      }),
    media_types: z
      .array(z.string())
      .default(['all'])
      .exactOptional()
      .openapi({
        title: 'Media Types',
        description:
          "Types of media to sync: 'all', 'event_snapshots', 'event_thumbnails', 'review_thumbnails', 'previews', 'exports', 'recordings'",
      }),
    force: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Force', description: 'If True, bypass safety threshold checks' }),
    verbose: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Verbose', description: 'If True, write full orphan file list to disk' }),
  })
  .openapi({ title: 'MediaSyncBody', required: [] })
  .openapi('MediaSyncBody')

const MotionSearchMetricsResponseSchema = z
  .object({
    segments_scanned: z.int().default(0).exactOptional().openapi({ title: 'Segments Scanned' }),
    segments_processed: z.int().default(0).exactOptional().openapi({ title: 'Segments Processed' }),
    metadata_inactive_segments: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ title: 'Metadata Inactive Segments' }),
    heatmap_roi_skip_segments: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ title: 'Heatmap Roi Skip Segments' }),
    fallback_full_range_segments: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ title: 'Fallback Full Range Segments' }),
    frames_decoded: z.int().default(0).exactOptional().openapi({ title: 'Frames Decoded' }),
    wall_time_seconds: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ title: 'Wall Time Seconds' }),
    segments_with_errors: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ title: 'Segments With Errors' }),
  })
  .openapi({
    title: 'MotionSearchMetricsResponse',
    description: 'Metrics collected during motion search execution.',
    required: [],
  })
  .openapi('MotionSearchMetricsResponse')

const MotionSearchRequestSchema = z
  .object({
    start_time: z
      .number()
      .openapi({ title: 'Start Time', description: 'Start timestamp for the search range' }),
    end_time: z
      .number()
      .openapi({ title: 'End Time', description: 'End timestamp for the search range' }),
    polygon_points: z
      .array(z.array(z.number()))
      .openapi({
        title: 'Polygon Points',
        description: 'List of [x, y] normalized coordinates (0-1) defining the ROI polygon',
      }),
    threshold: z
      .int()
      .min(1)
      .max(255)
      .default(30)
      .exactOptional()
      .openapi({ title: 'Threshold', description: 'Pixel difference threshold (1-255)' }),
    min_area: z
      .number()
      .min(0.1)
      .max(100)
      .default(5)
      .exactOptional()
      .openapi({
        title: 'Min Area',
        description: 'Minimum change area as a percentage of the ROI',
      }),
    parallel: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Parallel', description: 'Enable parallel scanning across segments' }),
    max_results: z
      .int()
      .min(1)
      .max(200)
      .default(25)
      .exactOptional()
      .openapi({ title: 'Max Results', description: 'Maximum number of search results to return' }),
  })
  .openapi({
    required: ['start_time', 'end_time', 'polygon_points'],
    title: 'MotionSearchRequest',
    description: 'Request body for motion search.',
  })
  .openapi('MotionSearchRequest')

const MotionSearchResultSchema = z
  .object({
    timestamp: z
      .number()
      .openapi({ title: 'Timestamp', description: 'Timestamp where change was detected' }),
    change_percentage: z
      .number()
      .openapi({ title: 'Change Percentage', description: 'Percentage of ROI area that changed' }),
  })
  .openapi({
    required: ['timestamp', 'change_percentage'],
    title: 'MotionSearchResult',
    description: 'A single search result with timestamp and change info.',
  })
  .openapi('MotionSearchResult')

const MotionSearchStartResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    message: z.string().openapi({ title: 'Message' }),
    job_id: z.string().openapi({ title: 'Job Id' }),
  })
  .openapi({
    required: ['success', 'message', 'job_id'],
    title: 'MotionSearchStartResponse',
    description: 'Response when motion search job starts.',
  })
  .openapi('MotionSearchStartResponse')

const MotionSearchStatusResponseSchema = z
  .object({
    success: z.boolean().openapi({ title: 'Success' }),
    message: z.string().openapi({ title: 'Message' }),
    status: z.string().openapi({ title: 'Status' }),
    results: z
      .union([z.array(MotionSearchResultSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Results' }),
    total_frames_processed: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Total Frames Processed' }),
    error_message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Error Message' }),
    metrics: z.union([MotionSearchMetricsResponseSchema, z.null().nullable()]).exactOptional(),
    scanning_timestamp: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Scanning Timestamp' }),
    progress: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Progress' }),
  })
  .openapi({
    required: ['success', 'message', 'status'],
    title: 'MotionSearchStatusResponse',
    description: 'Response containing job status and results.',
  })
  .openapi('MotionSearchStatusResponse')

const PreviewModelSchema = z
  .object({
    camera: z.string().openapi({ title: 'Camera', description: 'Camera name for this preview' }),
    src: z.string().openapi({ title: 'Src', description: 'Path to the preview video file' }),
    type: z
      .string()
      .openapi({ title: 'Type', description: 'MIME type of the preview video (video/mp4)' }),
    start: z
      .number()
      .openapi({ title: 'Start', description: 'Unix timestamp when the preview starts' }),
    end: z.number().openapi({ title: 'End', description: 'Unix timestamp when the preview ends' }),
  })
  .openapi({
    required: ['camera', 'src', 'type', 'start', 'end'],
    title: 'PreviewModel',
    description: 'Model representing a single preview clip.',
  })
  .openapi('PreviewModel')

const RegenerateDescriptionEnumSchema = z
  .enum(['thumbnails', 'snapshot'])
  .openapi({ title: 'RegenerateDescriptionEnum' })
  .openapi('RegenerateDescriptionEnum')

const RenameFaceBodySchema = z
  .object({
    new_name: z.string().openapi({ title: 'New Name', description: 'New name for the face' }),
  })
  .openapi({ required: ['new_name'], title: 'RenameFaceBody' })
  .openapi('RenameFaceBody')

const ReviewActivityMotionResponseSchema = z
  .object({
    start_time: z.int().openapi({ title: 'Start Time' }),
    motion: z.number().openapi({ title: 'Motion' }),
    camera: z.string().openapi({ title: 'Camera' }),
  })
  .openapi({ required: ['start_time', 'motion', 'camera'], title: 'ReviewActivityMotionResponse' })
  .openapi('ReviewActivityMotionResponse')

const ReviewModifyMultipleBodySchema = z
  .object({
    ids: z.array(z.string().min(1)).min(1).openapi({ title: 'Ids' }),
    reviewed: z.boolean().default(true).exactOptional().openapi({ title: 'Reviewed' }),
  })
  .openapi({ required: ['ids'], title: 'ReviewModifyMultipleBody' })
  .openapi('ReviewModifyMultipleBody')

const SeverityEnumSchema = z
  .enum(['alert', 'detection'])
  .openapi({ title: 'SeverityEnum' })
  .openapi('SeverityEnum')

const ReviewSegmentResponseSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    camera: z.string().openapi({ title: 'Camera' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
    has_been_reviewed: z.boolean().openapi({ title: 'Has Been Reviewed' }),
    severity: SeverityEnumSchema,
    thumb_path: z.string().openapi({ title: 'Thumb Path' }),
    data: z.any().openapi({ title: 'Data' }),
  })
  .openapi({
    required: [
      'id',
      'camera',
      'start_time',
      'end_time',
      'has_been_reviewed',
      'severity',
      'thumb_path',
      'data',
    ],
    title: 'ReviewSegmentResponse',
  })
  .openapi('ReviewSegmentResponse')

const ReviewSummaryResponseSchema = z
  .object({
    last24Hours: Last24HoursReviewSchema,
    root: z.record(z.string(), DayReviewSchema).openapi({ title: 'Root' }),
  })
  .openapi({ required: ['last24Hours', 'root'], title: 'ReviewSummaryResponse' })
  .openapi('ReviewSummaryResponse')

const StartExportResponseSchema = z
  .object({
    success: z
      .boolean()
      .openapi({ title: 'Success', description: 'Whether the export was started successfully' }),
    message: z.string().openapi({ title: 'Message', description: 'Status or error message' }),
    export_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Export Id', description: 'The export ID if successfully started' }),
    status: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Status', description: 'Queue status for the export job' }),
  })
  .openapi({
    required: ['success', 'message'],
    title: 'StartExportResponse',
    description: 'Response model for starting an export.',
  })
  .openapi('StartExportResponse')

const SubmitPlusBodySchema = z
  .object({
    include_annotation: z.int().default(1).exactOptional().openapi({ title: 'Include Annotation' }),
  })
  .openapi({ title: 'SubmitPlusBody', required: [] })
  .openapi('SubmitPlusBody')

const ToolExecuteRequestSchema = z
  .object({
    tool_name: z.string().openapi({ title: 'Tool Name' }),
    arguments: z.looseObject({}).openapi({ title: 'Arguments' }),
  })
  .openapi({
    required: ['tool_name', 'arguments'],
    title: 'ToolExecuteRequest',
    description: 'Request model for tool execution.',
  })
  .openapi('ToolExecuteRequest')

const TriggerTypeSchema = z
  .enum(['thumbnail', 'description'])
  .openapi({ title: 'TriggerType' })
  .openapi('TriggerType')

const TriggerEmbeddingBodySchema = z
  .object({
    type: TriggerTypeSchema,
    data: z.string().openapi({ title: 'Data' }),
    threshold: z
      .number()
      .min(0)
      .max(1)
      .default(0.5)
      .exactOptional()
      .openapi({ title: 'Threshold' }),
  })
  .openapi({ required: ['type', 'data'], title: 'TriggerEmbeddingBody' })
  .openapi('TriggerEmbeddingBody')

const VLMMonitorRequestSchema = z
  .object({
    camera: z.string().openapi({ title: 'Camera' }),
    condition: z.string().openapi({ title: 'Condition' }),
    max_duration_minutes: z
      .int()
      .default(60)
      .exactOptional()
      .openapi({ title: 'Max Duration Minutes' }),
    labels: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Labels' }),
    zones: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Zones' }),
  })
  .openapi({
    required: ['camera', 'condition'],
    title: 'VLMMonitorRequest',
    description: 'Request model for starting a VLM watch job.',
  })
  .openapi('VLMMonitorRequest')

const VodStreamPreferenceSchema = z
  .enum(['main', 'sub'])
  .openapi({
    title: 'VodStreamPreference',
    description:
      'Stream pin for the path-segment VOD route.\n\nnginx-vod derives its mapping fetch URI from the playlist URL path\n(query params are dropped), so the preference must be a path segment.',
  })
  .openapi('VodStreamPreference')

const FrigateAdminAuthSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'frigate_token',
  description:
    "Authenticated session whose resolved role is 'admin'. The session is established via the JWT cookie issued by POST /login, or via proxy auth headers (remote-user / remote-role) when Frigate runs behind an authenticating reverse proxy.",
}

const FrigateUserAuthSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'frigate_token',
  description:
    "Any authenticated session (role 'viewer' or higher), established via the JWT cookie issued by POST /login, or via proxy auth headers when Frigate runs behind an authenticating reverse proxy.",
}

export const getAuthFirstTimeLoginRoute = createRoute({
  method: 'get',
  path: '/auth/first_time_login',
  tags: ['Auth'],
  summary: 'First Time Login',
  description:
    '**Access:** Public — no authentication required.\n\nReturn whether the admin first-time login help flag is set in config.\n\nThis endpoint is intentionally unauthenticated so the login page can\nquery it before a user is authenticated.',
  operationId: 'first_time_login_auth_first_time_login_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [],
})

export const getAuthRoute = createRoute({
  method: 'get',
  path: '/auth',
  tags: ['Auth'],
  summary: 'Authenticate request',
  description:
    '**Access:** Public — no authentication required.\n\nAuthenticates the current request based on proxy headers or JWT token. This endpoint verifies authentication credentials and manages JWT token refresh. On success, no JSON body is returned; authentication state is communicated via response headers and cookies.',
  operationId: 'auth_auth_get',
  responses: {
    202: {
      description: 'Authentication Accepted (no response body)',
      content: { 'application/json': { schema: z.any() } },
      headers: z.object({
        'remote-user': {
          description: 'Authenticated username or "viewer" in proxy-only mode',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Authenticated username or "viewer" in proxy-only mode',
              param: { required: false },
            }),
        },
        'remote-role': {
          description: 'Resolved role (e.g., admin, viewer, or custom)',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Resolved role (e.g., admin, viewer, or custom)',
              param: { required: false },
            }),
        },
        'Set-Cookie': {
          description: 'May include refreshed JWT cookie when applicable',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'May include refreshed JWT cookie when applicable',
              param: { required: false },
            }),
        },
      }),
    },
    401: { description: 'Authentication Failed' },
    403: { description: "Access Denied (proxy user resolved to a default role of 'none')" },
  },
  security: [],
})

export const getProfileRoute = createRoute({
  method: 'get',
  path: '/profile',
  tags: ['Auth'],
  summary: 'Get user profile',
  description:
    "**Access:** Any authenticated user.\n\nReturns the current authenticated user's profile including username, role, and allowed cameras. This endpoint requires authentication and returns information about the user's permissions.",
  operationId: 'profile_profile_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getLogoutRoute = createRoute({
  method: 'get',
  path: '/logout',
  tags: ['Auth'],
  summary: 'Logout user',
  description:
    '**Access:** Public — no authentication required.\n\nLogs out the current user by clearing the session cookie. After logout, subsequent requests will require re-authentication.',
  operationId: 'logout_logout_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [],
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['Auth'],
  summary: 'Login with credentials',
  description:
    '**Access:** Public — no authentication required.\n\nAuthenticates a user with username and password. Returns a JWT token as a secure HTTP-only cookie that can be used for subsequent API requests. The JWT token can also be retrieved from the response and used as a Bearer token in the Authorization header.\n\nExample using Bearer token:\n```\ncurl -H "Authorization: Bearer <token_value>" https://frigate_ip:8971/api/profile\n```',
  operationId: 'login_login_post',
  request: {
    body: { content: { 'application/json': { schema: AppPostLoginBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Auth'],
  summary: 'Get all users',
  description:
    '**Access:** Admin role required.\n\nReturns a list of all users with their usernames and roles. Requires admin role. Each user object contains the username and assigned role.',
  operationId: 'get_users_users_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Auth'],
  summary: 'Create new user',
  description:
    '**Access:** Admin role required.\n\nCreates a new user with the specified username, password, and role. Requires admin role. Password must be at least 12 characters long.',
  operationId: 'create_user_users_post',
  request: {
    body: { content: { 'application/json': { schema: AppPostUsersBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/users/{username}',
  tags: ['Auth'],
  summary: 'Delete user',
  description:
    '**Access:** Admin role required.\n\nDeletes a user by username. The built-in admin user cannot be deleted. Requires admin role. Returns success message or error if user not found.',
  operationId: 'delete_user_users__username__delete',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Username' },
          },
          title: 'Username',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putUsersUsernamePasswordRoute = createRoute({
  method: 'put',
  path: '/users/{username}/password',
  tags: ['Auth'],
  summary: 'Update user password',
  description:
    "**Access:** Any authenticated user.\n\nUpdates a user's password. Users can only change their own password unless they have admin role. Requires the current password to verify identity for non-admin users. Password must be at least 12 characters long. If user changes their own password, a new JWT cookie is automatically issued.",
  operationId: 'update_password_users__username__password_put',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Username' },
          },
          title: 'Username',
        }),
    }),
    body: { content: { 'application/json': { schema: AppPutPasswordBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const putUsersUsernameRoleRoute = createRoute({
  method: 'put',
  path: '/users/{username}/role',
  tags: ['Auth'],
  summary: 'Update user role',
  description:
    "**Access:** Admin role required.\n\nUpdates a user's role. The built-in admin user's role cannot be modified. Requires admin role. Valid roles are defined in the configuration.",
  operationId: 'update_role_users__username__role_put',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Username' },
          },
          title: 'Username',
        }),
    }),
    body: { content: { 'application/json': { schema: AppPutRoleBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getGo2rtcStreamsRoute = createRoute({
  method: 'get',
  path: '/go2rtc/streams',
  tags: ['Camera'],
  summary: 'Go2Rtc Streams',
  description: '**Access:** Any authenticated user.',
  operationId: 'go2rtc_streams_go2rtc_streams_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getGo2rtcStreamsStreamNameRoute = createRoute({
  method: 'get',
  path: '/go2rtc/streams/{stream_name}',
  tags: ['Camera'],
  summary: 'Go2Rtc Camera Stream',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'go2rtc_camera_stream_go2rtc_streams__stream_name__get',
  request: {
    params: z.object({
      stream_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'stream_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Stream Name' },
        },
        title: 'Stream Name',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const putGo2rtcStreamsStreamNameRoute = createRoute({
  method: 'put',
  path: '/go2rtc/streams/{stream_name}',
  tags: ['Camera'],
  summary: 'Go2Rtc Add Stream',
  description: '**Access:** Admin role required.\n\nAdd or update a go2rtc stream configuration.',
  operationId: 'go2rtc_add_stream_go2rtc_streams__stream_name__put',
  request: {
    params: z.object({
      stream_name: z
        .string()
        .openapi({
          param: {
            name: 'stream_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Stream Name' },
          },
          title: 'Stream Name',
        }),
    }),
    query: z.object({
      src: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'src',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Src' },
          },
          title: 'Src',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteGo2rtcStreamsStreamNameRoute = createRoute({
  method: 'delete',
  path: '/go2rtc/streams/{stream_name}',
  tags: ['Camera'],
  summary: 'Go2Rtc Delete Stream',
  description: '**Access:** Admin role required.\n\nDelete a go2rtc stream.',
  operationId: 'go2rtc_delete_stream_go2rtc_streams__stream_name__delete',
  request: {
    params: z.object({
      stream_name: z
        .string()
        .openapi({
          param: {
            name: 'stream_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Stream Name' },
          },
          title: 'Stream Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getGo2rtcStreamsStreamNameBitrateRoute = createRoute({
  method: 'get',
  path: '/go2rtc/streams/{stream_name}/bitrate',
  tags: ['Camera'],
  summary: 'Go2Rtc Stream Bitrate',
  description:
    "**Access:** Admin role required.\n\nMeasure a go2rtc stream's bitrate over a few seconds.",
  operationId: 'go2rtc_stream_bitrate_go2rtc_streams__stream_name__bitrate_get',
  request: {
    params: z.object({
      stream_name: z
        .string()
        .openapi({
          param: {
            name: 'stream_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Stream Name' },
          },
          title: 'Stream Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getFfprobeRoute = createRoute({
  method: 'get',
  path: '/ffprobe',
  tags: ['Camera'],
  summary: 'Ffprobe',
  description: '**Access:** Admin role required.',
  operationId: 'ffprobe_ffprobe_get',
  request: {
    query: z.object({
      paths: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'paths',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Paths' },
          },
          title: 'Paths',
        }),
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'detailed',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Detailed' },
          },
          title: 'Detailed',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getKeyframeAnalysisRoute = createRoute({
  method: 'get',
  path: '/keyframe_analysis',
  tags: ['Camera'],
  summary: 'Keyframe Analysis',
  description:
    "**Access:** Admin role required.\n\nProbe a camera's record stream and classify its keyframe spacing.\n\nDetects smart/+ codecs and long/variable GOPs that degrade recording.",
  operationId: 'keyframe_analysis_keyframe_analysis_get',
  request: {
    query: z.object({
      camera: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'camera',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Camera' },
          },
          title: 'Camera',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getFfprobeSnapshotRoute = createRoute({
  method: 'get',
  path: '/ffprobe/snapshot',
  tags: ['Camera'],
  summary: 'Ffprobe Snapshot',
  description: '**Access:** Admin role required.\n\nGet a snapshot from a stream URL using ffmpeg.',
  operationId: 'ffprobe_snapshot_ffprobe_snapshot_get',
  request: {
    query: z.object({
      url: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Url' },
          },
          title: 'Url',
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 10, title: 'Timeout' },
          },
          title: 'Timeout',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getReolinkDetectRoute = createRoute({
  method: 'get',
  path: '/reolink/detect',
  tags: ['Camera'],
  summary: 'Reolink Detect',
  description:
    "**Access:** Admin role required.\n\nDetect Reolink camera capabilities and recommend optimal protocol.\n\nQueries the Reolink camera API to determine the camera's resolution\nand recommends either http-flv (for 5MP and below) or rtsp (for higher resolutions).",
  operationId: 'reolink_detect_reolink_detect_get',
  request: {
    query: z.object({
      host: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Host' },
          },
          title: 'Host',
        }),
      username: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Username' },
          },
          title: 'Username',
        }),
      password: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'password',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Password' },
          },
          title: 'Password',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getOnvifProbeRoute = createRoute({
  method: 'get',
  path: '/onvif/probe',
  tags: ['Camera'],
  summary: 'Probe ONVIF device',
  description:
    '**Access:** Admin role required.\n\nProbe an ONVIF device to determine capabilities and optionally test available stream URIs. Query params: host (required), port (default 80), username, password, test (boolean), auth_type (basic or digest, default basic).',
  operationId: 'onvif_probe_onvif_probe_get',
  request: {
    query: z.object({
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Host' },
          },
          title: 'Host',
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(80)
        .exactOptional()
        .openapi({
          param: {
            name: 'port',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 80, title: 'Port' },
          },
          title: 'Port',
        }),
      username: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Username' },
          },
          title: 'Username',
        }),
      password: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'password',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Password' },
          },
          title: 'Password',
        }),
      test: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'test',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Test' },
          },
          title: 'Test',
        }),
      auth_type: z
        .string()
        .default('basic')
        .exactOptional()
        .openapi({
          param: {
            name: 'auth_type',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'basic', title: 'Auth Type' },
          },
          title: 'Auth Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteCamerasCameraNameRoute = createRoute({
  method: 'delete',
  path: '/cameras/{camera_name}',
  tags: ['Camera'],
  summary: 'Delete Camera',
  description:
    '**Access:** Admin role required.\n\nDelete a camera and all its associated data.\n\nRemoves the camera from config, stops processes, and cleans up\nall database entries and media files.\n\nArgs:\n    camera_name: Name of the camera to delete\n    delete_exports: Whether to also delete exports for this camera',
  operationId: 'delete_camera_cameras__camera_name__delete',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
    }),
    query: z.object({
      delete_exports: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_exports',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Delete Exports' },
          },
          title: 'Delete Exports',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putCameraCameraNameSetFeatureSubCommandRoute = createRoute({
  method: 'put',
  path: '/camera/{camera_name}/set/{feature}/{sub_command}',
  tags: ['Camera'],
  summary: 'Camera Set',
  description:
    '**Access:** Admin role required.\n\nSet a camera feature state. Use camera_name=\'*\' to target all cameras.\n\nThe value to set is sent in the request body as `{"value": "<value>"}`.\n\n| Feature | Accepted values |\n| --- | --- |\n| `enabled` | `ON`, `OFF` |\n| `detect` | `ON`, `OFF` |\n| `motion` | `ON`, `OFF` |\n| `recordings` | `ON`, `OFF` |\n| `snapshots` | `ON`, `OFF` |\n| `audio` | `ON`, `OFF` |\n| `audio_transcription` | `ON`, `OFF` |\n| `notifications` | `ON`, `OFF` |\n| `review_alerts` | `ON`, `OFF` |\n| `review_detections` | `ON`, `OFF` |\n| `object_descriptions` | `ON`, `OFF` |\n| `review_descriptions` | `ON`, `OFF` |\n| `improve_contrast` | `ON`, `OFF` |\n| `ptz_autotracker` | `ON`, `OFF` |\n| `birdseye` | `ON`, `OFF` |\n| `birdseye_modes` | `CONTINUOUS`, `MOTION`, `ALL_OBJECTS`, `ALERTS`, `DETECTIONS`, `NONE`, or a comma-separated combination |\n| `motion_contour_area` | integer |\n| `motion_threshold` | integer |\n| `motion_mask` | `ON`, `OFF` |\n| `object_mask` | `ON`, `OFF` |\n| `zone` | `ON`, `OFF` |\n| `profile` | a profile name, or `none` to deactivate |\n\n`motion_mask`, `object_mask`, and `zone` require the `sub_command` path\nparameter to be set to the name of the mask or zone. All other features\nreject a sub-command.\n\n`profile` applies globally rather than per camera, so it requires\n`camera_name` to be `*`.\n\nThese features map to the equivalent MQTT topics, which document the\nbehavior of each value in more detail.',
  operationId: 'camera_set_camera__camera_name__set__feature___sub_command__put',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      feature: z
        .string()
        .openapi({
          param: {
            name: 'feature',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Feature' },
          },
          title: 'Feature',
        }),
      sub_command: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'sub_command',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Sub Command' },
        },
        title: 'Sub Command',
      }),
    }),
    body: { content: { 'application/json': { schema: CameraSetBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putCameraCameraNameSetFeatureRoute = createRoute({
  method: 'put',
  path: '/camera/{camera_name}/set/{feature}',
  tags: ['Camera'],
  summary: 'Camera Set',
  description:
    '**Access:** Admin role required.\n\nSet a camera feature state. Use camera_name=\'*\' to target all cameras.\n\nThe value to set is sent in the request body as `{"value": "<value>"}`.\n\n| Feature | Accepted values |\n| --- | --- |\n| `enabled` | `ON`, `OFF` |\n| `detect` | `ON`, `OFF` |\n| `motion` | `ON`, `OFF` |\n| `recordings` | `ON`, `OFF` |\n| `snapshots` | `ON`, `OFF` |\n| `audio` | `ON`, `OFF` |\n| `audio_transcription` | `ON`, `OFF` |\n| `notifications` | `ON`, `OFF` |\n| `review_alerts` | `ON`, `OFF` |\n| `review_detections` | `ON`, `OFF` |\n| `object_descriptions` | `ON`, `OFF` |\n| `review_descriptions` | `ON`, `OFF` |\n| `improve_contrast` | `ON`, `OFF` |\n| `ptz_autotracker` | `ON`, `OFF` |\n| `birdseye` | `ON`, `OFF` |\n| `birdseye_modes` | `CONTINUOUS`, `MOTION`, `ALL_OBJECTS`, `ALERTS`, `DETECTIONS`, `NONE`, or a comma-separated combination |\n| `motion_contour_area` | integer |\n| `motion_threshold` | integer |\n| `motion_mask` | `ON`, `OFF` |\n| `object_mask` | `ON`, `OFF` |\n| `zone` | `ON`, `OFF` |\n| `profile` | a profile name, or `none` to deactivate |\n\n`motion_mask`, `object_mask`, and `zone` require the `sub_command` path\nparameter to be set to the name of the mask or zone. All other features\nreject a sub-command.\n\n`profile` applies globally rather than per camera, so it requires\n`camera_name` to be `*`.\n\nThese features map to the equivalent MQTT topics, which document the\nbehavior of each value in more detail.',
  operationId: 'camera_set_camera__camera_name__set__feature__put',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      feature: z
        .string()
        .openapi({
          param: {
            name: 'feature',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Feature' },
          },
          title: 'Feature',
        }),
    }),
    query: z.object({
      sub_command: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'sub_command',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Sub Command' },
          },
          title: 'Sub Command',
        }),
    }),
    body: { content: { 'application/json': { schema: CameraSetBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getChatToolsRoute = createRoute({
  method: 'get',
  path: '/chat/tools',
  tags: ['Chat'],
  summary: 'Get available tools',
  description:
    '**Access:** Admin role required.\n\nReturns OpenAI-compatible tool definitions for function calling.',
  operationId: 'get_tools_chat_tools_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postChatExecuteRoute = createRoute({
  method: 'post',
  path: '/chat/execute',
  tags: ['Chat'],
  summary: 'Execute a tool',
  description: '**Access:** Admin role required.\n\nExecute a tool function call from an LLM.',
  operationId: 'execute_tool_chat_execute_post',
  request: {
    body: { content: { 'application/json': { schema: ToolExecuteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postChatCompletionRoute = createRoute({
  method: 'post',
  path: '/chat/completion',
  tags: ['Chat'],
  summary: 'Chat completion with tool calling',
  description:
    '**Access:** Admin role required.\n\nSend a chat message to the configured GenAI provider with tool calling support. The LLM can call Frigate tools to answer questions about your cameras and events.',
  operationId: 'chat_completion_chat_completion_post',
  request: {
    body: {
      content: { 'application/json': { schema: ChatCompletionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getVlmMonitorRoute = createRoute({
  method: 'get',
  path: '/vlm/monitor',
  tags: ['Chat'],
  summary: 'Get current VLM watch job',
  description:
    '**Access:** Admin role required.\n\nReturns the current (or most recently completed) VLM watch job.',
  operationId: 'get_vlm_monitor_vlm_monitor_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postVlmMonitorRoute = createRoute({
  method: 'post',
  path: '/vlm/monitor',
  tags: ['Chat'],
  summary: 'Start a VLM watch job',
  description:
    '**Access:** Admin role required.\n\nStart monitoring a camera with the vision provider. The VLM analyzes live frames until the specified condition is met, then sends a notification. Only one watch job can run at a time.',
  operationId: 'start_vlm_monitor_vlm_monitor_post',
  request: {
    body: { content: { 'application/json': { schema: VLMMonitorRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteVlmMonitorRoute = createRoute({
  method: 'delete',
  path: '/vlm/monitor',
  tags: ['Chat'],
  summary: 'Cancel the current VLM watch job',
  description: '**Access:** Admin role required.\n\nCancels the running watch job if one exists.',
  operationId: 'cancel_vlm_monitor_vlm_monitor_delete',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getFacesRoute = createRoute({
  method: 'get',
  path: '/faces',
  tags: ['Classification'],
  summary: 'Get all registered faces',
  description:
    '**Access:** Admin role required.\n\nReturns a dictionary mapping face names to lists of image filenames.\n    Each key represents a registered face name, and the value is a list of image\n    files associated with that face. Supported image formats include .webp, .png,\n    .jpg, and .jpeg.',
  operationId: 'get_faces_faces_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FacesResponseSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesReprocessRoute = createRoute({
  method: 'post',
  path: '/faces/reprocess',
  tags: ['Classification'],
  summary: 'Reprocess a face training image',
  description:
    '**Access:** Admin role required.\n\nReprocesses a face training image to update the prediction.\n    Requires face recognition to be enabled in the configuration. The training file\n    must exist in the faces/train directory. Returns a success response or an error\n    message if face recognition is not enabled or the training file is invalid.',
  operationId: 'reclassify_face_faces_reprocess_post',
  request: {
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesTrainNameClassifyRoute = createRoute({
  method: 'post',
  path: '/faces/train/{name}/classify',
  tags: ['Classification'],
  summary: 'Classify and save a face training image',
  description:
    "**Access:** Admin role required.\n\nAdds a training image to a specific face name for face recognition.\n    Accepts either a training file from the train directory or an event_id to extract\n    the face from. The image is saved to the face's directory and the face classifier\n    is cleared to incorporate the new training data. Returns a success message with\n    the new filename or an error if face recognition is not enabled, the file/event\n    is invalid, or the face cannot be extracted.",
  operationId: 'train_face_faces_train__name__classify_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesNameCreateRoute = createRoute({
  method: 'post',
  path: '/faces/{name}/create',
  tags: ['Classification'],
  summary: 'Create a new face name',
  description:
    '**Access:** Admin role required.\n\nCreates a new folder for a face name in the faces directory.\n    This is used to organize face training images. The face name is sanitized and\n    spaces are replaced with underscores. Returns a success message or an error if\n    face recognition is not enabled.',
  operationId: 'create_face_faces__name__create_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesNameRegisterRoute = createRoute({
  method: 'post',
  path: '/faces/{name}/register',
  tags: ['Classification'],
  summary: 'Register a face image',
  description:
    '**Access:** Admin role required.\n\nRegisters a face image for a specific face name by uploading an image file.\n    The uploaded image is processed and added to the face recognition system. Returns a\n    success response with details about the registration, or an error if face recognition\n    is not enabled or the image cannot be processed.',
  operationId: 'register_face_faces__name__register_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: BodyRegisterFaceFacesNameRegisterPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesRecognizeRoute = createRoute({
  method: 'post',
  path: '/faces/recognize',
  tags: ['Classification'],
  summary: 'Recognize a face from an uploaded image',
  description:
    '**Access:** Admin role required.\n\nRecognizes a face from an uploaded image file by comparing it against\n    registered faces in the system. Returns the recognized face name and confidence score,\n    or an error if face recognition is not enabled or the image cannot be processed.',
  operationId: 'recognize_face_faces_recognize_post',
  request: {
    body: {
      content: { 'multipart/form-data': { schema: BodyRecognizeFaceFacesRecognizePostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FaceRecognitionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesNameReclassifyRoute = createRoute({
  method: 'post',
  path: '/faces/{name}/reclassify',
  tags: ['Classification'],
  summary: 'Reclassify a face image to a different name',
  description:
    "**Access:** Admin role required.\n\nMoves a single face image from one person's folder to another.\n    The image is moved and renamed, and the face classifier is cleared to\n    incorporate the change. Returns a success message or an error if the\n    image or target name is invalid.",
  operationId: 'reclassify_face_image_faces__name__reclassify_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postFacesNameDeleteRoute = createRoute({
  method: 'post',
  path: '/faces/{name}/delete',
  tags: ['Classification'],
  summary: 'Delete face images',
  description:
    '**Access:** Admin role required.\n\nDeletes specific face images for a given face name. The image IDs must belong\n    to the specified face folder. To delete an entire face folder, all image IDs in that\n    folder must be sent. Returns a success message or an error if face recognition is not enabled.',
  operationId: 'deregister_faces_faces__name__delete_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFaceImagesBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putFacesOldNameRenameRoute = createRoute({
  method: 'put',
  path: '/faces/{old_name}/rename',
  tags: ['Classification'],
  summary: 'Rename a face name',
  description:
    '**Access:** Admin role required.\n\nRenames a face name in the system. The old name must exist and the new\n    name must be valid. Returns a success message or an error if face recognition is not enabled.',
  operationId: 'rename_face_faces__old_name__rename_put',
  request: {
    params: z.object({
      old_name: z
        .string()
        .openapi({
          param: {
            name: 'old_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Old Name' },
          },
          title: 'Old Name',
        }),
    }),
    body: { content: { 'application/json': { schema: RenameFaceBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putLprReprocessRoute = createRoute({
  method: 'put',
  path: '/lpr/reprocess',
  tags: ['Classification'],
  summary: 'Reprocess a license plate',
  description:
    '**Access:** Admin role required.\n\nReprocesses a license plate image to update the plate.\n    Requires license plate recognition to be enabled in the configuration. The event_id\n    must exist in the database. Returns a success message or an error if license plate\n    recognition is not enabled or the event_id is invalid.',
  operationId: 'reprocess_license_plate_lpr_reprocess_put',
  request: {
    query: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putReindexRoute = createRoute({
  method: 'put',
  path: '/reindex',
  tags: ['Classification'],
  summary: 'Reindex embeddings',
  description:
    '**Access:** Admin role required.\n\nReindexes the embeddings for all tracked objects.\n    Requires semantic search to be enabled in the configuration. Returns a success message or an error if semantic search is not enabled.',
  operationId: 'reindex_embeddings_reindex_put',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putAudioTranscribeRoute = createRoute({
  method: 'put',
  path: '/audio/transcribe',
  tags: ['Classification'],
  summary: 'Transcribe audio',
  description:
    '**Access:** Admin role required.\n\nTranscribes audio from a specific event.\n    Requires audio transcription to be enabled in the configuration. The event_id\n    must exist in the database. Returns a success message or an error if audio transcription is not enabled or the event_id is invalid.',
  operationId: 'transcribe_audio_audio_transcribe_put',
  request: {
    body: {
      content: { 'application/json': { schema: AudioTranscriptionBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getClassificationNameDatasetRoute = createRoute({
  method: 'get',
  path: '/classification/{name}/dataset',
  tags: ['Classification'],
  summary: 'Get classification dataset',
  description:
    '**Access:** Admin role required.\n\nGets the dataset for a specific classification model.\n    The name must exist in the classification models. Returns a success message or an error if the name is invalid.',
  operationId: 'get_classification_dataset_classification__name__dataset_get',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getClassificationAttributesRoute = createRoute({
  method: 'get',
  path: '/classification/attributes',
  tags: ['Classification'],
  summary: 'Get custom classification attributes',
  description:
    "**Access:** Authenticated user with access to all cameras.\n\nReturns custom classification attributes for a given object type.\n    Only includes models with classification_type set to 'attribute'.\n    By default returns a flat sorted list of all attribute labels.\n    If group_by_model is true, returns attributes grouped by model name.",
  operationId: 'get_custom_attributes_classification_attributes_get',
  request: {
    query: z.object({
      object_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'object_type',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Object Type' },
          },
          title: 'Object Type',
        }),
      group_by_model: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'group_by_model',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Group By Model' },
          },
          title: 'Group By Model',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getClassificationNameTrainRoute = createRoute({
  method: 'get',
  path: '/classification/{name}/train',
  tags: ['Classification'],
  summary: 'Get classification train images',
  description:
    '**Access:** Admin role required.\n\nGets the train images for a specific classification model.\n    The name must exist in the classification models. Returns a success message or an error if the name is invalid.',
  operationId: 'get_classification_images_classification__name__train_get',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameTrainRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/train',
  tags: ['Classification'],
  summary: 'Train a classification model',
  description:
    '**Access:** Admin role required.\n\nTrains a specific classification model.\n    The name must exist in the classification models. Returns a success message or an error if the name is invalid.',
  operationId: 'train_configured_model_classification__name__train_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameDatasetCategoryDeleteRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/dataset/{category}/delete',
  tags: ['Classification'],
  summary: 'Delete classification dataset images',
  description:
    '**Access:** Admin role required.\n\nDeletes specific dataset images for a given classification model and category.\n    The image IDs must belong to the specified category. Returns a success message or an error if the name or category is invalid.',
  operationId:
    'delete_classification_dataset_images_classification__name__dataset__category__delete_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
      category: z
        .string()
        .openapi({
          param: {
            name: 'category',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Category' },
          },
          title: 'Category',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameDatasetCategoryReclassifyRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/dataset/{category}/reclassify',
  tags: ['Classification'],
  summary: 'Reclassify a dataset image to a different category',
  description:
    '**Access:** Admin role required.\n\nMoves a single dataset image from one category to another.\n    The image is re-saved as PNG in the target category and removed from the source.',
  operationId:
    'reclassify_classification_image_classification__name__dataset__category__reclassify_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
      category: z
        .string()
        .openapi({
          param: {
            name: 'category',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Category' },
          },
          title: 'Category',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putClassificationNameDatasetOldCategoryRenameRoute = createRoute({
  method: 'put',
  path: '/classification/{name}/dataset/{old_category}/rename',
  tags: ['Classification'],
  summary: 'Rename a classification category',
  description:
    '**Access:** Admin role required.\n\nRenames a classification category for a given classification model.\n    The old category must exist and the new name must be valid. Returns a success message or an error if the name is invalid.',
  operationId:
    'rename_classification_category_classification__name__dataset__old_category__rename_put',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
      old_category: z
        .string()
        .openapi({
          param: {
            name: 'old_category',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Old Category' },
          },
          title: 'Old Category',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameDatasetCategorizeRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/dataset/categorize',
  tags: ['Classification'],
  summary: 'Categorize a classification image',
  description:
    '**Access:** Admin role required.\n\nCategorizes a specific classification image for a given classification model and category.\n    The image must exist in the specified category. Returns a success message or an error if the name or category is invalid.',
  operationId: 'categorize_classification_image_classification__name__dataset_categorize_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameDatasetCategoryCreateRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/dataset/{category}/create',
  tags: ['Classification'],
  summary: 'Create an empty classification category folder',
  description:
    "**Access:** Admin role required.\n\nCreates an empty folder for a classification category.\n    This is used to create folders for categories that don't have images yet.\n    Returns a success message or an error if the name is invalid.",
  operationId:
    'create_classification_category_classification__name__dataset__category__create_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
      category: z
        .string()
        .openapi({
          param: {
            name: 'category',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Category' },
          },
          title: 'Category',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationNameTrainDeleteRoute = createRoute({
  method: 'post',
  path: '/classification/{name}/train/delete',
  tags: ['Classification'],
  summary: 'Delete classification train images',
  description:
    '**Access:** Admin role required.\n\nDeletes specific train images for a given classification model.\n    The image IDs must belong to the specified train folder. Returns a success message or an error if the name is invalid.',
  operationId: 'delete_classification_train_images_classification__name__train_delete_post',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationGenerateExamplesStateRoute = createRoute({
  method: 'post',
  path: '/classification/generate_examples/state',
  tags: ['Classification'],
  summary: 'Generate state classification examples',
  description: '**Access:** Admin role required.\n\nGenerate examples for state classification.',
  operationId: 'generate_state_examples_classification_generate_examples_state_post',
  request: {
    body: {
      content: { 'application/json': { schema: GenerateStateExamplesBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postClassificationGenerateExamplesObjectRoute = createRoute({
  method: 'post',
  path: '/classification/generate_examples/object',
  tags: ['Classification'],
  summary: 'Generate object classification examples',
  description: '**Access:** Admin role required.\n\nGenerate examples for object classification.',
  operationId: 'generate_object_examples_classification_generate_examples_object_post',
  request: {
    body: {
      content: { 'application/json': { schema: GenerateObjectExamplesBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteClassificationNameRoute = createRoute({
  method: 'delete',
  path: '/classification/{name}',
  tags: ['Classification'],
  summary: 'Delete a classification model',
  description:
    '**Access:** Admin role required.\n\nDeletes a specific classification model and all its associated data.\n    Works even if the model is not in the config (e.g., partially created during wizard).\n    Returns a success message.',
  operationId: 'delete_classification_model_classification__name__delete',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getReviewRoute = createRoute({
  method: 'get',
  path: '/review',
  tags: ['Review'],
  summary: 'Review',
  description: '**Access:** Any authenticated user.',
  operationId: 'review_review_get',
  request: {
    query: z.object({
      cameras: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Cameras' },
          },
          title: 'Cameras',
        }),
      labels: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Labels' },
          },
          title: 'Labels',
        }),
      zones: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Zones' },
          },
          title: 'Zones',
        }),
      reviewed: z
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
            name: 'reviewed',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Reviewed' },
          },
          title: 'Reviewed',
        }),
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Limit' },
          },
          title: 'Limit',
        }),
      severity: SeverityEnumSchema.openapi({
        param: {
          name: 'severity',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/SeverityEnum' },
        },
      }).exactOptional(),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'Before' },
          },
          title: 'Before',
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'After' },
          },
          title: 'After',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ReviewSegmentResponseSchema)
            .openapi({ title: 'Response Review Review Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewIdsRoute = createRoute({
  method: 'get',
  path: '/review_ids',
  tags: ['Review'],
  summary: 'Review Ids',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'review_ids_review_ids_get',
  request: {
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Ids' },
          },
          title: 'Ids',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ReviewSegmentResponseSchema)
            .openapi({ title: 'Response Review Ids Review Ids Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewSummaryRoute = createRoute({
  method: 'get',
  path: '/review/summary',
  tags: ['Review'],
  summary: 'Review Summary',
  description: '**Access:** Any authenticated user.',
  operationId: 'review_summary_review_summary_get',
  request: {
    query: z.object({
      cameras: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Cameras' },
          },
          title: 'Cameras',
        }),
      labels: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Labels' },
          },
          title: 'Labels',
        }),
      zones: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Zones' },
          },
          title: 'Zones',
        }),
      timezone: z
        .string()
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'UTC', title: 'Timezone' },
          },
          title: 'Timezone',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReviewSummaryResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postReviewsViewedRoute = createRoute({
  method: 'post',
  path: '/reviews/viewed',
  tags: ['Review'],
  summary: 'Set Multiple Reviewed',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'set_multiple_reviewed_reviews_viewed_post',
  request: {
    body: {
      content: { 'application/json': { schema: ReviewModifyMultipleBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postReviewsDeleteRoute = createRoute({
  method: 'post',
  path: '/reviews/delete',
  tags: ['Review'],
  summary: 'Delete Reviews',
  description: '**Access:** Admin role required.',
  operationId: 'delete_reviews_reviews_delete_post',
  request: {
    body: {
      content: { 'application/json': { schema: ReviewModifyMultipleBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getReviewActivityMotionRoute = createRoute({
  method: 'get',
  path: '/review/activity/motion',
  tags: ['Review'],
  summary: 'Motion Activity',
  description: '**Access:** Any authenticated user.\n\nGet motion and audio activity.',
  operationId: 'motion_activity_review_activity_motion_get',
  request: {
    query: z.object({
      cameras: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Cameras' },
          },
          title: 'Cameras',
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'Before' },
          },
          title: 'Before',
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'After' },
          },
          title: 'After',
        }),
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'scale',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 30, title: 'Scale' },
          },
          title: 'Scale',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ReviewActivityMotionResponseSchema)
            .openapi({ title: 'Response Motion Activity Review Activity Motion Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewEventEventIdRoute = createRoute({
  method: 'get',
  path: '/review/event/{event_id}',
  tags: ['Review'],
  summary: 'Get Review From Event',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'get_review_from_event_review_event__event_id__get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReviewSegmentResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewReviewIdRoute = createRoute({
  method: 'get',
  path: '/review/{review_id}',
  tags: ['Review'],
  summary: 'Get Review',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'get_review_review__review_id__get',
  request: {
    params: z.object({
      review_id: z
        .string()
        .openapi({
          param: {
            name: 'review_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Review Id' },
          },
          title: 'Review Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReviewSegmentResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const putReviewReviewIdRegenerateDescriptionRoute = createRoute({
  method: 'put',
  path: '/review/{review_id}/regenerate_description',
  tags: ['Review'],
  summary: 'Generate a review item description',
  description:
    "**Access:** Admin role required.\n\nRe-runs a review item through the GenAI descriptions process.\n    Frames are always taken from recordings, and both alerts and detections are\n    accepted regardless of the camera's GenAI alerts/detections toggles.",
  operationId: 'regenerate_review_description_review__review_id__regenerate_description_put',
  request: {
    params: z.object({
      review_id: z
        .string()
        .openapi({
          param: {
            name: 'review_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Review Id' },
          },
          title: 'Review Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteReviewReviewIdViewedRoute = createRoute({
  method: 'delete',
  path: '/review/{review_id}/viewed',
  tags: ['Review'],
  summary: 'Set Not Reviewed',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'set_not_reviewed_review__review_id__viewed_delete',
  request: {
    params: z.object({
      review_id: z
        .string()
        .openapi({
          param: {
            name: 'review_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Review Id' },
          },
          title: 'Review Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postReviewSummarizeStartStartTsEndEndTsRoute = createRoute({
  method: 'post',
  path: '/review/summarize/start/{start_ts}/end/{end_ts}',
  tags: ['Review'],
  summary: 'Generate Review Summary',
  description:
    '**Access:** Authenticated user with access to all cameras.\n\nUse GenAI to summarize review items over a period of time.',
  operationId: 'generate_review_summary_review_summarize_start__start_ts__end__end_ts__post',
  request: {
    params: z.object({
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['App'],
  summary: 'Is Healthy',
  description: '**Access:** Public — no authentication required.',
  operationId: 'is_healthy__get',
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [],
})

export const getConfigSchemaJsonRoute = createRoute({
  method: 'get',
  path: '/config/schema.json',
  tags: ['App'],
  summary: 'Config Schema',
  description: '**Access:** Public — no authentication required.',
  operationId: 'config_schema_config_schema_json_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [],
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['App'],
  summary: 'Version',
  description: '**Access:** Public — no authentication required.',
  operationId: 'version_version_get',
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [],
})

export const getStatsRoute = createRoute({
  method: 'get',
  path: '/stats',
  tags: ['App'],
  summary: 'Stats',
  description: '**Access:** Any authenticated user.',
  operationId: 'stats_stats_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getStatsHistoryRoute = createRoute({
  method: 'get',
  path: '/stats/history',
  tags: ['App'],
  summary: 'Stats History',
  description: '**Access:** Admin role required.',
  operationId: 'stats_history_stats_history_get',
  request: {
    query: z.object({
      keys: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'keys',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Keys' },
          },
          title: 'Keys',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['App'],
  summary: 'Metrics',
  description:
    '**Access:** Any authenticated user.\n\nExpose Prometheus metrics endpoint and update metrics with latest stats',
  operationId: 'metrics_metrics_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getGenaiModelsRoute = createRoute({
  method: 'get',
  path: '/genai/models',
  tags: ['App'],
  summary: 'List available GenAI models',
  description:
    '**Access:** Admin role required.\n\nReturns available models for each configured GenAI provider.',
  operationId: 'genai_models_genai_models_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getGenaiRolesRoute = createRoute({
  method: 'get',
  path: '/genai/roles',
  tags: ['App'],
  summary: 'Get the model assigned to each GenAI role',
  description:
    '**Access:** Admin role required.\n\nReturns the selected model and its context size for each configured GenAI role. Reads only what the client saved when it initialized, so the provider is not queried for its model list.',
  operationId: 'genai_roles_genai_roles_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postGenaiProbeRoute = createRoute({
  method: 'post',
  path: '/genai/probe',
  tags: ['App'],
  summary: 'Probe a GenAI provider without saving config',
  description:
    '**Access:** Admin role required.\n\nBuilds a transient client from the request body and returns its available models. Used to validate provider credentials in the UI before saving the configuration.',
  operationId: 'genai_probe_genai_probe_post',
  request: {
    body: { content: { 'application/json': { schema: GenAIProbeBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['App'],
  summary: 'Config',
  description: '**Access:** Any authenticated user.',
  operationId: 'config_config_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getProfilesRoute = createRoute({
  method: 'get',
  path: '/profiles',
  tags: ['App'],
  summary: 'Get Profiles',
  description:
    '**Access:** Any authenticated user.\n\nList all available profiles and the currently active profile.',
  operationId: 'get_profiles_profiles_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getProfileActiveRoute = createRoute({
  method: 'get',
  path: '/profile/active',
  tags: ['App'],
  summary: 'Get Active Profile',
  description: '**Access:** Admin role required.\n\nGet the currently active profile.',
  operationId: 'get_active_profile_profile_active_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getFfmpegPresetsRoute = createRoute({
  method: 'get',
  path: '/ffmpeg/presets',
  tags: ['App'],
  summary: 'Ffmpeg Presets',
  description:
    '**Access:** Admin role required.\n\nReturn available ffmpeg preset keys for config UI usage.',
  operationId: 'ffmpeg_presets_ffmpeg_presets_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getConfigRawPathsRoute = createRoute({
  method: 'get',
  path: '/config/raw_paths',
  tags: ['App'],
  summary: 'Config Raw Paths',
  description:
    '**Access:** Admin role required.\n\nAdmin-only endpoint that returns camera paths and go2rtc streams without credential masking.',
  operationId: 'config_raw_paths_config_raw_paths_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getConfigRawRoute = createRoute({
  method: 'get',
  path: '/config/raw',
  tags: ['App'],
  summary: 'Config Raw',
  description: '**Access:** Admin role required.',
  operationId: 'config_raw_config_raw_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postConfigSaveRoute = createRoute({
  method: 'post',
  path: '/config/save',
  tags: ['App'],
  summary: 'Config Save',
  description: '**Access:** Admin role required.',
  operationId: 'config_save_config_save_post',
  request: {
    query: z.object({
      save_option: z
        .string()
        .openapi({
          param: {
            name: 'save_option',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Save Option' },
          },
          title: 'Save Option',
        }),
    }),
    body: {
      content: { 'text/plain': { schema: z.any().openapi({ title: 'Body' }) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putConfigSetRoute = createRoute({
  method: 'put',
  path: '/config/set',
  tags: ['App'],
  summary: 'Config Set',
  description: '**Access:** Admin role required.',
  operationId: 'config_set_config_set_put',
  request: {
    body: { content: { 'application/json': { schema: AppConfigSetBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getVainfoRoute = createRoute({
  method: 'get',
  path: '/vainfo',
  tags: ['App'],
  summary: 'Vainfo',
  description: '**Access:** Any authenticated user.',
  operationId: 'vainfo_vainfo_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getNvinfoRoute = createRoute({
  method: 'get',
  path: '/nvinfo',
  tags: ['App'],
  summary: 'Nvinfo',
  description: '**Access:** Any authenticated user.',
  operationId: 'nvinfo_nvinfo_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getLogsServiceRoute = createRoute({
  method: 'get',
  path: '/logs/{service}',
  tags: ['App', 'Logs'],
  summary: 'Logs',
  description:
    '**Access:** Admin role required.\n\nGet logs for the requested service (frigate/nginx/go2rtc)',
  operationId: 'logs_logs__service__get',
  request: {
    params: z.object({
      service: z
        .enum(['frigate', 'nginx', 'go2rtc'])
        .openapi({
          param: {
            name: 'service',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['frigate', 'nginx', 'go2rtc'], title: 'Service' },
          },
          title: 'Service',
        }),
    }),
    query: z.object({
      download: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Download' },
          },
          title: 'Download',
        }),
      stream: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'stream',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              default: false,
              title: 'Stream',
            },
          },
          title: 'Stream',
        }),
      start: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], default: 0, title: 'Start' },
          },
          title: 'Start',
        }),
      end: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'End' },
          },
          title: 'End',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postRestartRoute = createRoute({
  method: 'post',
  path: '/restart',
  tags: ['App'],
  summary: 'Restart',
  description: '**Access:** Admin role required.',
  operationId: 'restart_restart_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postMediaSyncRoute = createRoute({
  method: 'post',
  path: '/media/sync',
  tags: ['App'],
  summary: 'Start media sync job',
  description:
    '**Access:** Admin role required.\n\nStart an asynchronous media sync job to find and (optionally) remove orphaned media files.\n    Returns 202 with job details when queued, or 409 if a job is already running.',
  operationId: 'sync_media_media_sync_post',
  request: {
    body: { content: { 'application/json': { schema: MediaSyncBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getMediaSyncCurrentRoute = createRoute({
  method: 'get',
  path: '/media/sync/current',
  tags: ['App'],
  summary: 'Get current media sync job',
  description:
    '**Access:** Admin role required.\n\nRetrieve the current running media sync job, if any. Returns the job details\n    or null when no job is active.',
  operationId: 'get_media_sync_current_media_sync_current_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getMediaSyncStatusJobIdRoute = createRoute({
  method: 'get',
  path: '/media/sync/status/{job_id}',
  tags: ['App'],
  summary: 'Get media sync job status',
  description:
    '**Access:** Admin role required.\n\nGet status and results for the specified media sync job id. Returns 200 with\n    job details including results, or 404 if the job is not found.',
  operationId: 'get_media_sync_status_media_sync_status__job_id__get',
  request: {
    params: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getLabelsRoute = createRoute({
  method: 'get',
  path: '/labels',
  tags: ['App'],
  summary: 'Get Labels',
  description: '**Access:** Any authenticated user.',
  operationId: 'get_labels_labels_get',
  request: {
    query: z.object({
      camera: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'camera',
            in: 'query',
            required: false,
            schema: { type: 'string', default: '', title: 'Camera' },
          },
          title: 'Camera',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getSubLabelsRoute = createRoute({
  method: 'get',
  path: '/sub_labels',
  tags: ['App'],
  summary: 'Get Sub Labels',
  description: '**Access:** Any authenticated user.',
  operationId: 'get_sub_labels_sub_labels_get',
  request: {
    query: z.object({
      split_joined: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'split_joined',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Split Joined' },
          },
          title: 'Split Joined',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCategorizedObjectNamesRoute = createRoute({
  method: 'get',
  path: '/categorized_object_names',
  tags: ['App'],
  summary: 'Get known object names by object type',
  description:
    '**Access:** Any authenticated user.\n\nReturns the sub labels and attributes this install can attach,\n    grouped by object type. Unlike /sub_labels, which reflects what has already been\n    detected, this reads the config and model files, so it covers recognized face\n    names, named license plates, custom object classification categories, and the\n    detector attributes of tracked objects.',
  operationId: 'categorized_object_names_categorized_object_names_get',
  request: {
    query: z.object({
      object_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'object_type',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Object Type' },
          },
          title: 'Object Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getAudioLabelsRoute = createRoute({
  method: 'get',
  path: '/audio_labels',
  tags: ['App'],
  summary: 'Get Audio Labels',
  description: '**Access:** Admin role required.',
  operationId: 'get_audio_labels_audio_labels_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getPlusModelsRoute = createRoute({
  method: 'get',
  path: '/plus/models',
  tags: ['App'],
  summary: 'Plusmodels',
  description: '**Access:** Any authenticated user.',
  operationId: 'plusModels_plus_models_get',
  request: {
    query: z.object({
      filterByCurrentModelDetector: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'filterByCurrentModelDetector',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Filterbycurrentmodeldetector' },
          },
          title: 'Filterbycurrentmodeldetector',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getRecognizedLicensePlatesRoute = createRoute({
  method: 'get',
  path: '/recognized_license_plates',
  tags: ['App'],
  summary: 'Get Recognized License Plates',
  description: '**Access:** Any authenticated user.',
  operationId: 'get_recognized_license_plates_recognized_license_plates_get',
  request: {
    query: z.object({
      split_joined: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'split_joined',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Split Joined' },
          },
          title: 'Split Joined',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getTimelineRoute = createRoute({
  method: 'get',
  path: '/timeline',
  tags: ['App'],
  summary: 'Timeline',
  description: '**Access:** Any authenticated user.',
  operationId: 'timeline_timeline_get',
  request: {
    query: z.object({
      camera: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'camera',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Camera' },
          },
          title: 'Camera',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 100, title: 'Limit' },
          },
          title: 'Limit',
        }),
      source_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Source Id' },
          },
          title: 'Source Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getTimelineHourlyRoute = createRoute({
  method: 'get',
  path: '/timeline/hourly',
  tags: ['App'],
  summary: 'Hourly Timeline',
  description: '**Access:** Any authenticated user.\n\nGet hourly summary for timeline.',
  operationId: 'hourly_timeline_timeline_hourly_get',
  request: {
    query: z.object({
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
      labels: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Labels',
            },
          },
          title: 'Labels',
        }),
      after: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'After' },
          },
          title: 'After',
        }),
      before: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'null' }],
              default: 200,
              title: 'Limit',
            },
          },
          title: 'Limit',
        }),
      timezone: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'UTC',
              title: 'Timezone',
            },
          },
          title: 'Timezone',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getPreviewCameraNameStartStartTsEndEndTsRoute = createRoute({
  method: 'get',
  path: '/preview/{camera_name}/start/{start_ts}/end/{end_ts}',
  tags: ['Preview'],
  summary: 'Get preview clips for time range',
  description:
    "**Access:** Any authenticated user.\n\nGets all preview clips for a specified camera and time range.\n    Returns a list of preview video clips that overlap with the requested time period,\n    ordered by start time. Use camera_name='all' to get previews from all cameras.\n    Returns an error if no previews are found.",
  operationId: 'preview_ts_preview__camera_name__start__start_ts__end__end_ts__get',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(PreviewModelSchema)
            .openapi({
              title: 'Response Preview Ts Preview  Camera Name  Start  Start Ts End  End Ts  Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getPreviewYearMonthDayHourCameraNameTzNameRoute = createRoute({
  method: 'get',
  path: '/preview/{year_month}/{day}/{hour}/{camera_name}/{tz_name}',
  tags: ['Preview'],
  summary: 'Get preview clips for specific hour',
  description:
    "**Access:** Any authenticated user.\n\nGets all preview clips for a specific hour in a given timezone.\n    Converts the provided date/time from the specified timezone to UTC and retrieves\n    all preview clips for that hour. Use camera_name='all' to get previews from all cameras.\n    The tz_name should be a timezone like 'America/New_York' (use commas instead of slashes).",
  operationId: 'preview_hour_preview__year_month___day___hour___camera_name___tz_name__get',
  request: {
    params: z.object({
      year_month: z
        .string()
        .openapi({
          param: {
            name: 'year_month',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Year Month' },
          },
          title: 'Year Month',
        }),
      day: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'day',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Day' },
          },
          title: 'Day',
        }),
      hour: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'hour',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Hour' },
          },
          title: 'Hour',
        }),
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      tz_name: z
        .string()
        .openapi({
          param: {
            name: 'tz_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Tz Name' },
          },
          title: 'Tz Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(PreviewModelSchema)
            .openapi({
              title:
                'Response Preview Hour Preview  Year Month   Day   Hour Camera Name   Tz Name  Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getPreviewCameraNameStartStartTsEndEndTsFramesRoute = createRoute({
  method: 'get',
  path: '/preview/{camera_name}/start/{start_ts}/end/{end_ts}/frames',
  tags: ['Preview'],
  summary: 'Get cached preview frame filenames',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGets a list of cached preview frame filenames for a specific camera and time range.\n    Returns an array of filenames for preview frames that fall within the specified time period,\n    sorted in chronological order. These are individual frame images cached for quick preview display.',
  operationId:
    'get_preview_frames_from_cache_preview__camera_name__start__start_ts__end__end_ts__frames_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .openapi({
              title:
                'Response Get Preview Frames From Cache Preview  Camera Name  Start  Start Ts  End  End Ts  Frames Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getNotificationsPubkeyRoute = createRoute({
  method: 'get',
  path: '/notifications/pubkey',
  tags: ['Notifications'],
  summary: 'Get VAPID public key',
  description:
    '**Access:** Any authenticated user.\n\nGets the VAPID public key for the notifications.\n    Returns the public key or an error if notifications are not enabled.',
  operationId: 'get_vapid_pub_key_notifications_pubkey_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postNotificationsRegisterRoute = createRoute({
  method: 'post',
  path: '/notifications/register',
  tags: ['Notifications'],
  summary: 'Register notifications',
  description:
    '**Access:** Any authenticated user.\n\nRegisters a notifications subscription.\n    Returns a success message or an error if the subscription is not provided.',
  operationId: 'register_notifications_notifications_register_post',
  request: {
    body: {
      content: { 'application/json': { schema: z.looseObject({}).openapi({ title: 'Body' }) } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getExportsRoute = createRoute({
  method: 'get',
  path: '/exports',
  tags: ['Export'],
  summary: 'Get exports',
  description:
    '**Access:** Any authenticated user.\n\nGets all exports from the database for cameras the user has access to.\n    Returns a list of exports ordered by date (most recent first).',
  operationId: 'get_exports_exports_get',
  request: {
    query: z.object({
      export_case_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'export_case_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Export Case Id' },
          },
          title: 'Export Case Id',
        }),
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
      start_date: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Start Date' },
          },
          title: 'Start Date',
        }),
      end_date: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'End Date' },
          },
          title: 'End Date',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(ExportModelSchema).openapi({ title: 'Response Get Exports Exports Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCasesRoute = createRoute({
  method: 'get',
  path: '/cases',
  tags: ['Export'],
  summary: 'Get export cases',
  description: '**Access:** Any authenticated user.\n\nGets all export cases from the database.',
  operationId: 'get_export_cases_cases_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ExportCaseModelSchema)
            .openapi({ title: 'Response Get Export Cases Cases Get' }),
        },
      },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postCasesRoute = createRoute({
  method: 'post',
  path: '/cases',
  tags: ['Export'],
  summary: 'Create export case',
  description: '**Access:** Admin role required.\n\nCreates a new export case.',
  operationId: 'create_export_case_cases_post',
  request: {
    body: {
      content: { 'application/json': { schema: ExportCaseCreateBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExportCaseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getCasesCaseIdRoute = createRoute({
  method: 'get',
  path: '/cases/{case_id}',
  tags: ['Export'],
  summary: 'Get a single export case',
  description: '**Access:** Any authenticated user.\n\nGets a specific export case by ID.',
  operationId: 'get_export_case_cases__case_id__get',
  request: {
    params: z.object({
      case_id: z
        .string()
        .openapi({
          param: {
            name: 'case_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Case Id' },
          },
          title: 'Case Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExportCaseModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const deleteCasesCaseIdRoute = createRoute({
  method: 'delete',
  path: '/cases/{case_id}',
  tags: ['Export'],
  summary: 'Delete export case',
  description:
    '**Access:** Admin role required.\n\nDeletes an export case.\n    Exports that reference this case will have their export_case set to null.',
  operationId: 'delete_export_case_cases__case_id__delete',
  request: {
    params: z.object({
      case_id: z
        .string()
        .openapi({
          param: {
            name: 'case_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Case Id' },
          },
          title: 'Case Id',
        }),
    }),
    query: z.object({
      delete_exports: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_exports',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Delete Exports' },
          },
          title: 'Delete Exports',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const patchCasesCaseIdRoute = createRoute({
  method: 'patch',
  path: '/cases/{case_id}',
  tags: ['Export'],
  summary: 'Update export case',
  description: '**Access:** Admin role required.\n\nUpdates an existing export case.',
  operationId: 'update_export_case_cases__case_id__patch',
  request: {
    params: z.object({
      case_id: z
        .string()
        .openapi({
          param: {
            name: 'case_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Case Id' },
          },
          title: 'Case Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportCaseUpdateBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getCasesCaseIdDownloadRoute = createRoute({
  method: 'get',
  path: '/cases/{case_id}/download',
  tags: ['Export'],
  summary: 'Download export case as zip',
  description:
    "**Access:** Any authenticated user.\n\nStreams a zip archive containing every completed export's mp4 for the given case.",
  operationId: 'download_export_case_cases__case_id__download_get',
  request: {
    params: z.object({
      case_id: z
        .string()
        .openapi({
          param: {
            name: 'case_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Case Id' },
          },
          title: 'Case Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getJobsExportRoute = createRoute({
  method: 'get',
  path: '/jobs/export',
  tags: ['Export'],
  summary: 'Get active export jobs',
  description: '**Access:** Any authenticated user.\n\nGets queued and running export jobs.',
  operationId: 'get_active_export_jobs_jobs_export_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(ExportJobModelSchema)
            .openapi({ title: 'Response Get Active Export Jobs Jobs Export Get' }),
        },
      },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getJobsExportExportIdRoute = createRoute({
  method: 'get',
  path: '/jobs/export/{export_id}',
  tags: ['Export'],
  summary: 'Get export job status',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGets queued, running, or completed status for a specific export job.',
  operationId: 'get_export_job_status_jobs_export__export_id__get',
  request: {
    params: z.object({
      export_id: z
        .string()
        .openapi({
          param: {
            name: 'export_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Export Id' },
          },
          title: 'Export Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExportJobModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postExportsBatchRoute = createRoute({
  method: 'post',
  path: '/exports/batch',
  tags: ['Export'],
  summary: 'Start recording export batch',
  description:
    '**Access:** Any authenticated user.\n\nStarts recording exports for a batch of items, each with its own camera and time range, and assigns them to a single export case. Attaching to an existing case is temporarily admin-only until case-level ACLs exist.',
  operationId: 'export_recordings_batch_exports_batch_post',
  request: {
    body: { content: { 'application/json': { schema: BatchExportBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BatchExportResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postExportCameraNameStartStartTimeEndEndTimeRoute = createRoute({
  method: 'post',
  path: '/export/{camera_name}/start/{start_time}/end/{end_time}',
  tags: ['Export'],
  summary: 'Start recording export',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nStarts an export of a recording for the specified time range.\n    The export can be from recordings or preview footage. Returns the export ID if\n    successful, or an error message if the camera is invalid or no recordings/previews\n    are found for the time range.',
  operationId: 'export_recording_export__camera_name__start__start_time__end__end_time__post',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_time',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Time' },
          },
          title: 'Start Time',
        }),
      end_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_time',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Time' },
          },
          title: 'End Time',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportRecordingsBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StartExportResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const patchExportEventIdRenameRoute = createRoute({
  method: 'patch',
  path: '/export/{event_id}/rename',
  tags: ['Export'],
  summary: 'Rename export',
  description:
    '**Access:** Admin role required.\n\nRenames an export.\n    NOTE: This changes the friendly name of the export, not the filename.',
  operationId: 'export_rename_export__event_id__rename_patch',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: { content: { 'application/json': { schema: ExportRenameBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postExportCustomCameraNameStartStartTimeEndEndTimeRoute = createRoute({
  method: 'post',
  path: '/export/custom/{camera_name}/start/{start_time}/end/{end_time}',
  tags: ['Export'],
  summary: 'Start custom recording export',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nStarts an export of a recording for the specified time range using custom FFmpeg arguments.\n    The export can be from recordings or preview footage. Returns the export ID if\n    successful, or an error message if the camera is invalid or no recordings/previews\n    are found for the time range. If ffmpeg_input_args and ffmpeg_output_args are not provided,\n    defaults to timelapse export settings.',
  operationId:
    'export_recording_custom_export_custom__camera_name__start__start_time__end__end_time__post',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_time',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Time' },
          },
          title: 'Start Time',
        }),
      end_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_time',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Time' },
          },
          title: 'End Time',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportRecordingsCustomBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StartExportResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getExportsExportIdRoute = createRoute({
  method: 'get',
  path: '/exports/{export_id}',
  tags: ['Export'],
  summary: 'Get a single export',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGets a specific export by ID. The user must have access to the camera\n    associated with the export.',
  operationId: 'get_export_exports__export_id__get',
  request: {
    params: z.object({
      export_id: z
        .string()
        .openapi({
          param: {
            name: 'export_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Export Id' },
          },
          title: 'Export Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExportModelSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postExportsDeleteRoute = createRoute({
  method: 'post',
  path: '/exports/delete',
  tags: ['Export'],
  summary: 'Bulk delete exports',
  description:
    '**Access:** Admin role required.\n\nDeletes one or more exports by ID. All IDs must exist and none can be in-progress.',
  operationId: 'bulk_delete_exports_exports_delete_post',
  request: {
    body: {
      content: { 'application/json': { schema: ExportBulkDeleteBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postExportsReassignRoute = createRoute({
  method: 'post',
  path: '/exports/reassign',
  tags: ['Export'],
  summary: 'Bulk reassign exports to a case',
  description:
    '**Access:** Admin role required.\n\nAssigns or unassigns one or more exports to/from a case. All IDs must exist.',
  operationId: 'bulk_reassign_exports_exports_reassign_post',
  request: {
    body: {
      content: { 'application/json': { schema: ExportBulkReassignBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getHardwareProbeRoute = createRoute({
  method: 'get',
  path: '/hardware/probe',
  tags: ['Hardware'],
  summary: 'Probe Hardware',
  description:
    '**Access:** Admin role required.\n\nGet the object detection hardware attached to this system.\n\nArgs:\n    refresh: Probe again instead of returning the cached result\n\nReturns:\n    Every kind of detection hardware that was found',
  operationId: 'probe_hardware_hardware_probe_get',
  request: {
    query: z.object({
      refresh: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Refresh' },
          },
          title: 'Refresh',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(DetectionHardwareSchema)
            .openapi({ title: 'Response Probe Hardware Hardware Probe Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getHardwareHwaccelRoute = createRoute({
  method: 'get',
  path: '/hardware/hwaccel',
  tags: ['Hardware'],
  summary: 'Hwaccel Recommendation',
  description:
    "**Access:** Admin role required.\n\nGet the hardware decoding this system can do.\n\nArgs:\n    detector: Hardware key of the detection hardware in use, which biases\n        the recommendation toward that hardware's GPU\n    codecs: Comma separated codecs of the streams that will be decoded,\n        used to drop families that cannot decode one of them\n\nReturns:\n    The recommended family (empty when none fits) and every usable family",
  operationId: 'hwaccel_recommendation_hardware_hwaccel_get',
  request: {
    query: z.object({
      detector: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'detector',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Detector' },
          },
          title: 'Detector',
        }),
      codecs: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'codecs',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Codecs' },
          },
          title: 'Codecs',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: HwaccelRecommendationSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getNoticesRoute = createRoute({
  method: 'get',
  path: '/notices',
  tags: ['Notices'],
  summary: 'Get Notices',
  description:
    '**Access:** Admin role required.\n\nGet notices, most severe first.\n\nArgs:\n    include_hidden: Also return acknowledged and muted notices, for the\n        hidden list\n\nReturns:\n    The notices',
  operationId: 'get_notices_notices_get',
  request: {
    query: z.object({
      include_hidden: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_hidden',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Include Hidden' },
          },
          title: 'Include Hidden',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getNoticesStatsRoute = createRoute({
  method: 'get',
  path: '/notices/stats',
  tags: ['Notices'],
  summary: 'Get Notice Stats',
  description:
    '**Access:** Admin role required.\n\nGet lifetime occurrence counts per notice kind.',
  operationId: 'get_notice_stats_notices_stats_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getNoticesMutedChecksRoute = createRoute({
  method: 'get',
  path: '/notices/muted_checks',
  tags: ['Notices'],
  summary: 'Get Muted Checks',
  description:
    '**Access:** Admin role required.\n\nGet the muted config and stream check rows, newest first.',
  operationId: 'get_muted_checks_notices_muted_checks_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteNoticesHiddenRoute = createRoute({
  method: 'delete',
  path: '/notices/hidden',
  tags: ['Notices'],
  summary: 'Unhide All Notices',
  description:
    '**Access:** Admin role required.\n\nShow every acknowledged and muted notice and check row again.',
  operationId: 'unhide_all_notices_notices_hidden_delete',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postNoticesNoticeIdAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/notices/{notice_id}/acknowledge',
  tags: ['Notices'],
  summary: 'Acknowledge Notice',
  description:
    '**Access:** Admin role required.\n\nHide a notice until it happens again.\n\nConfig and stream check rows and the update notice never repeat, so they\ncan only be muted.',
  operationId: 'acknowledge_notice_notices__notice_id__acknowledge_post',
  request: {
    params: z.object({
      notice_id: z
        .string()
        .openapi({
          param: {
            name: 'notice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Notice Id' },
          },
          title: 'Notice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postNoticesNoticeIdMuteRoute = createRoute({
  method: 'post',
  path: '/notices/{notice_id}/mute',
  tags: ['Notices'],
  summary: 'Mute Notice',
  description:
    '**Access:** Admin role required.\n\nHide a notice or a config or stream check row for good.',
  operationId: 'mute_notice_notices__notice_id__mute_post',
  request: {
    params: z.object({
      notice_id: z
        .string()
        .openapi({
          param: {
            name: 'notice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Notice Id' },
          },
          title: 'Notice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteNoticesNoticeIdHiddenRoute = createRoute({
  method: 'delete',
  path: '/notices/{notice_id}/hidden',
  tags: ['Notices'],
  summary: 'Unhide Notice',
  description:
    '**Access:** Admin role required.\n\nShow an acknowledged or muted notice or check row again.',
  operationId: 'unhide_notice_notices__notice_id__hidden_delete',
  request: {
    params: z.object({
      notice_id: z
        .string()
        .openapi({
          param: {
            name: 'notice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Notice Id' },
          },
          title: 'Notice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Get events',
  description: '**Access:** Any authenticated user.\n\nReturns a list of events.',
  operationId: 'events_events_get',
  request: {
    query: z.object({
      camera: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'camera',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Camera',
            },
          },
          title: 'Camera',
        }),
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
      label: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Label',
            },
          },
          title: 'Label',
        }),
      labels: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Labels',
            },
          },
          title: 'Labels',
        }),
      sub_label: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'sub_label',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Sub Label',
            },
          },
          title: 'Sub Label',
        }),
      sub_labels: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'sub_labels',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Sub Labels',
            },
          },
          title: 'Sub Labels',
        }),
      attributes: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'attributes',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Attributes',
            },
          },
          title: 'Attributes',
        }),
      zone: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'zone',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Zone',
            },
          },
          title: 'Zone',
        }),
      zones: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Zones',
            },
          },
          title: 'Zones',
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'null' }],
              default: 100,
              title: 'Limit',
            },
          },
          title: 'Limit',
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(0), z.null().nullable()]),
          ),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: 0 }, { type: 'null' }],
              default: 0,
              title: 'Offset',
            },
          },
          title: 'Offset',
        }),
      after: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'After' },
          },
          title: 'After',
        }),
      before: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
      time_range: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('00:00,24:00')
        .exactOptional()
        .openapi({
          param: {
            name: 'time_range',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: '00:00,24:00',
              title: 'Time Range',
            },
          },
          title: 'Time Range',
        }),
      has_clip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_clip',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Has Clip' },
          },
          title: 'Has Clip',
        }),
      has_snapshot: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_snapshot',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Has Snapshot' },
          },
          title: 'Has Snapshot',
        }),
      in_progress: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'in_progress',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'In Progress' },
          },
          title: 'In Progress',
        }),
      include_thumbnails: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_thumbnails',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'null' }],
              default: 1,
              title: 'Include Thumbnails',
            },
          },
          title: 'Include Thumbnails',
        }),
      favorites: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'favorites',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Favorites' },
          },
          title: 'Favorites',
        }),
      min_score: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_score',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Min Score' },
          },
          title: 'Min Score',
        }),
      max_score: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_score',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Max Score' },
          },
          title: 'Max Score',
        }),
      min_speed: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_speed',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Min Speed' },
          },
          title: 'Min Speed',
        }),
      max_speed: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_speed',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Max Speed' },
          },
          title: 'Max Speed',
        }),
      recognized_license_plate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'recognized_license_plate',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Recognized License Plate',
            },
          },
          title: 'Recognized License Plate',
        }),
      is_submitted: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'is_submitted',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Is Submitted' },
          },
          title: 'Is Submitted',
        }),
      min_length: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_length',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Min Length' },
          },
          title: 'Min Length',
        }),
      max_length: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_length',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Max Length' },
          },
          title: 'Max Length',
        }),
      event_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Event Id' },
          },
          title: 'Event Id',
        }),
      sort: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Sort' },
          },
          title: 'Sort',
        }),
      timezone: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'UTC',
              title: 'Timezone',
            },
          },
          title: 'Timezone',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(EventResponseSchema).openapi({ title: 'Response Events Events Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsExploreRoute = createRoute({
  method: 'get',
  path: '/events/explore',
  tags: ['Events'],
  summary: 'Get summary of objects',
  description:
    '**Access:** Any authenticated user.\n\nGets a summary of objects from the database.\n    Returns a list of objects with a max of `limit` objects for each label.',
  operationId: 'events_explore_events_explore_get',
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
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 10, title: 'Limit' },
          },
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(EventResponseSchema)
            .openapi({ title: 'Response Events Explore Events Explore Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventIdsRoute = createRoute({
  method: 'get',
  path: '/event_ids',
  tags: ['Events'],
  summary: 'Get events by ids',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGets events by a list of ids.\n    Returns a list of events.',
  operationId: 'event_ids_event_ids_get',
  request: {
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Ids' },
          },
          title: 'Ids',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(EventResponseSchema)
            .openapi({ title: 'Response Event Ids Event Ids Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsSearchRoute = createRoute({
  method: 'get',
  path: '/events/search',
  tags: ['Events'],
  summary: 'Search events',
  description:
    '**Access:** Any authenticated user.\n\nSearches for events in the database.\n    Returns a list of events.',
  operationId: 'events_search_events_search_get',
  request: {
    query: z.object({
      query: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Query' },
          },
          title: 'Query',
        }),
      event_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Event Id' },
          },
          title: 'Event Id',
        }),
      search_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('thumbnail')
        .exactOptional()
        .openapi({
          param: {
            name: 'search_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'thumbnail',
              title: 'Search Type',
            },
          },
          title: 'Search Type',
        }),
      include_thumbnails: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_thumbnails',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'null' }],
              default: 1,
              title: 'Include Thumbnails',
            },
          },
          title: 'Include Thumbnails',
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(0), z.null().nullable()]),
          ),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: 0 }, { type: 'null' }],
              default: 0,
              title: 'Offset',
            },
          },
          title: 'Offset',
        }),
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
      labels: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Labels',
            },
          },
          title: 'Labels',
        }),
      sub_labels: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'sub_labels',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Sub Labels',
            },
          },
          title: 'Sub Labels',
        }),
      attributes: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'attributes',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Attributes',
            },
          },
          title: 'Attributes',
        }),
      zones: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Zones',
            },
          },
          title: 'Zones',
        }),
      after: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'After' },
          },
          title: 'After',
        }),
      before: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
      time_range: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('00:00,24:00')
        .exactOptional()
        .openapi({
          param: {
            name: 'time_range',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: '00:00,24:00',
              title: 'Time Range',
            },
          },
          title: 'Time Range',
        }),
      has_clip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_clip',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Has Clip' },
          },
          title: 'Has Clip',
        }),
      has_snapshot: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_snapshot',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Has Snapshot' },
          },
          title: 'Has Snapshot',
        }),
      is_submitted: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'is_submitted',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Is Submitted' },
          },
          title: 'Is Submitted',
        }),
      timezone: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'UTC',
              title: 'Timezone',
            },
          },
          title: 'Timezone',
        }),
      min_score: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_score',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Min Score' },
          },
          title: 'Min Score',
        }),
      max_score: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_score',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Max Score' },
          },
          title: 'Max Score',
        }),
      min_speed: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_speed',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Min Speed' },
          },
          title: 'Min Speed',
        }),
      max_speed: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_speed',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Max Speed' },
          },
          title: 'Max Speed',
        }),
      recognized_license_plate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'recognized_license_plate',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Recognized License Plate',
            },
          },
          title: 'Recognized License Plate',
        }),
      sort: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Sort' },
          },
          title: 'Sort',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsSummaryRoute = createRoute({
  method: 'get',
  path: '/events/summary',
  tags: ['Events'],
  summary: 'Events Summary',
  description: '**Access:** Any authenticated user.',
  operationId: 'events_summary_events_summary_get',
  request: {
    query: z.object({
      timezone: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'UTC',
              title: 'Timezone',
            },
          },
          title: 'Timezone',
        }),
      has_clip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_clip',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Has Clip' },
          },
          title: 'Has Clip',
        }),
      has_snapshot: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_snapshot',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Has Snapshot' },
          },
          title: 'Has Snapshot',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}',
  tags: ['Events'],
  summary: 'Get event by id',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGets an event by its id.',
  operationId: 'event_events__event_id__get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const deleteEventsEventIdRoute = createRoute({
  method: 'delete',
  path: '/events/{event_id}',
  tags: ['Events'],
  summary: 'Delete event',
  description:
    '**Access:** Admin role required.\n\nDeletes an event from the database.\n    Returns a success message or an error if the event is not found.',
  operationId: 'delete_event_events__event_id__delete',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdRetainRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/retain',
  tags: ['Events'],
  summary: 'Set event retain indefinitely.',
  description:
    '**Access:** Admin role required.\n\nSets an event to retain indefinitely.\n    Returns a success message or an error if the event is not found.\n    NOTE: This is a legacy endpoint and is not supported in the frontend.',
  operationId: 'set_retain_events__event_id__retain_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteEventsEventIdRetainRoute = createRoute({
  method: 'delete',
  path: '/events/{event_id}/retain',
  tags: ['Events'],
  summary: 'Stop event from being retained indefinitely',
  description:
    '**Access:** Admin role required.\n\nStops an event from being retained indefinitely.\n    Returns a success message or an error if the event is not found.\n    NOTE: This is a legacy endpoint and is not supported in the frontend.',
  operationId: 'delete_retain_events__event_id__retain_delete',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdPlusRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/plus',
  tags: ['Events'],
  summary: 'Send event to Frigate+',
  description:
    '**Access:** Admin role required.\n\nSends an event to Frigate+.\n    Returns a success message or an error if the event is not found.',
  operationId: 'send_to_plus_events__event_id__plus_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: { content: { 'application/json': { schema: SubmitPlusBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventUploadPlusResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putEventsEventIdFalsePositiveRoute = createRoute({
  method: 'put',
  path: '/events/{event_id}/false_positive',
  tags: ['Events'],
  summary: 'Submit false positive to Frigate+',
  description:
    '**Access:** Admin role required.\n\nSubmit an event as a false positive to Frigate+.\n    This endpoint is the same as the standard Frigate+ submission endpoint,\n    but is specifically for marking an event as a false positive.',
  operationId: 'false_positive_events__event_id__false_positive_put',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventUploadPlusResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdSubLabelRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/sub_label',
  tags: ['Events'],
  summary: 'Set event sub label',
  description:
    "**Access:** Admin role required.\n\nSets an event's sub label.\n    Returns a success message or an error if the event is not found.",
  operationId: 'set_sub_label_events__event_id__sub_label_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: { content: { 'application/json': { schema: EventsSubLabelBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdRecognizedLicensePlateRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/recognized_license_plate',
  tags: ['Events'],
  summary: 'Set event license plate',
  description:
    "**Access:** Admin role required.\n\nSets an event's license plate.\n    Returns a success message or an error if the event is not found.",
  operationId: 'set_plate_events__event_id__recognized_license_plate_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: { content: { 'application/json': { schema: EventsLPRBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdAttributesRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/attributes',
  tags: ['Events'],
  summary: 'Set custom classification attributes',
  description:
    "**Access:** Admin role required.\n\nSets an event's custom classification attributes for all attribute-type models that apply to the event's object type.",
  operationId: 'set_attributes_events__event_id__attributes_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EventsAttributesBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsEventIdDescriptionRoute = createRoute({
  method: 'post',
  path: '/events/{event_id}/description',
  tags: ['Events'],
  summary: 'Set event description',
  description:
    "**Access:** Admin role required.\n\nSets an event's description.\n    Returns a success message or an error if the event is not found.",
  operationId: 'set_description_events__event_id__description_post',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EventsDescriptionBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putEventsEventIdDescriptionRegenerateRoute = createRoute({
  method: 'put',
  path: '/events/{event_id}/description/regenerate',
  tags: ['Events'],
  summary: 'Regenerate event description',
  description:
    "**Access:** Admin role required.\n\nRegenerates an event's description.\n    Returns a success message or an error if the event is not found.",
  operationId: 'regenerate_description_events__event_id__description_regenerate_put',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      source: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          RegenerateDescriptionEnumSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('thumbnails')
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ $ref: '#/components/schemas/RegenerateDescriptionEnum' }, { type: 'null' }],
              default: 'thumbnails',
              title: 'Source',
            },
          },
          title: 'Source',
        }),
      force: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              default: false,
              title: 'Force',
            },
          },
          title: 'Force',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postDescriptionGenerateRoute = createRoute({
  method: 'post',
  path: '/description/generate',
  tags: ['Events'],
  summary: 'Generate description embedding',
  description:
    "**Access:** Admin role required.\n\nGenerates an embedding for an event's description.\n    Returns a success message or an error if the event is not found.",
  operationId: 'generate_description_embedding_description_generate_post',
  request: {
    body: {
      content: { 'application/json': { schema: EventsDescriptionBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteEventsIndexRoute = createRoute({
  method: 'delete',
  path: '/events/',
  tags: ['Events'],
  summary: 'Delete events',
  description:
    '**Access:** Admin role required.\n\nDeletes a list of events from the database.\n    Returns a success message or an error if the events are not found.',
  operationId: 'delete_events_events__delete',
  request: {
    body: { content: { 'application/json': { schema: EventsDeleteBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventMultiDeleteResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postEventsCameraNameLabelCreateRoute = createRoute({
  method: 'post',
  path: '/events/{camera_name}/{label}/create',
  tags: ['Events'],
  summary: 'Create manual event',
  description:
    "**Access:** Admin role required.\n\nCreates a manual event in the database.\n    Returns a success message or an error if the event is not found.\n    NOTES:\n    - Creating a manual event does not trigger an update to /events MQTT topic.\n    - If a duration is set to null, the event will need to be ended manually by calling /events/{event_id}/end.\n    - The review item is an alert unless the label is listed in the camera's review -> detections -> labels config.",
  operationId: 'create_event_events__camera_name___label__create_post',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Label' },
          },
          title: 'Label',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EventsCreateBodySchema.default({
            score: 0,
            duration: 30,
            include_recording: true,
            draw: {},
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventCreateResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putEventsEventIdEndRoute = createRoute({
  method: 'put',
  path: '/events/{event_id}/end',
  tags: ['Events'],
  summary: 'End manual event',
  description:
    '**Access:** Admin role required.\n\nEnds a manual event.\n    Returns a success message or an error if the event is not found.\n    NOTE: This should only be used for manual events.',
  operationId: 'end_event_events__event_id__end_put',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    body: { content: { 'application/json': { schema: EventsEndBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postTriggerEmbeddingRoute = createRoute({
  method: 'post',
  path: '/trigger/embedding',
  tags: ['Events'],
  summary: 'Create trigger embedding',
  description:
    '**Access:** Admin role required.\n\nCreates a trigger embedding for a specific trigger.\n    Returns a success message or an error if the trigger is not found.',
  operationId: 'create_trigger_embedding_trigger_embedding_post',
  request: {
    query: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TriggerEmbeddingBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ title: 'Response Create Trigger Embedding Trigger Embedding Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const putTriggerEmbeddingCameraNameNameRoute = createRoute({
  method: 'put',
  path: '/trigger/embedding/{camera_name}/{name}',
  tags: ['Events'],
  summary: 'Update trigger embedding',
  description:
    '**Access:** Admin role required.\n\nUpdates a trigger embedding for a specific trigger.\n    Returns a success message or an error if the trigger is not found.',
  operationId: 'update_trigger_embedding_trigger_embedding__camera_name___name__put',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TriggerEmbeddingBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({
              title: 'Response Update Trigger Embedding Trigger Embedding Camera Name   Name  Put',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const deleteTriggerEmbeddingCameraNameNameRoute = createRoute({
  method: 'delete',
  path: '/trigger/embedding/{camera_name}/{name}',
  tags: ['Events'],
  summary: 'Delete trigger embedding',
  description:
    '**Access:** Admin role required.\n\nDeletes a trigger embedding for a specific trigger.\n    Returns a success message or an error if the trigger is not found.',
  operationId: 'delete_trigger_embedding_trigger_embedding__camera_name___name__delete',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({
              title:
                'Response Delete Trigger Embedding Trigger Embedding Camera Name   Name  Delete',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getTriggersStatusCameraNameRoute = createRoute({
  method: 'get',
  path: '/triggers/status/{camera_name}',
  tags: ['Events'],
  summary: 'Get triggers status',
  description:
    '**Access:** Admin role required.\n\nGets the status of all triggers for a specific camera.\n    Returns a success message or an error if the camera is not found.',
  operationId: 'get_triggers_status_triggers_status__camera_name__get',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({ title: 'Response Get Triggers Status Triggers Status  Camera Name Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getCameraNameRoute = createRoute({
  method: 'get',
  path: '/{camera_name}',
  tags: ['Media'],
  summary: 'Mjpeg Feed',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'mjpeg_feed__camera_name__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    query: z.object({
      fps: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'fps',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 3, title: 'Fps' },
          },
          title: 'Fps',
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(360)
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 360, title: 'Height' },
          },
          title: 'Height',
        }),
      bbox: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'bbox',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Bbox' },
          },
          title: 'Bbox',
        }),
      timestamp: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Timestamp' },
          },
          title: 'Timestamp',
        }),
      zones: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Zones' },
          },
          title: 'Zones',
        }),
      mask: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'mask',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Mask' },
          },
          title: 'Mask',
        }),
      motion: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'motion',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Motion' },
          },
          title: 'Motion',
        }),
      regions: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'regions',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Regions' },
          },
          title: 'Regions',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNamePtzInfoRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/ptz/info',
  tags: ['Media'],
  summary: 'Camera Ptz Info',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'camera_ptz_info__camera_name__ptz_info_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameLatestExtensionRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/latest.{extension}',
  tags: ['Media'],
  summary: 'Latest Frame',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns the latest frame from the specified camera in the requested format (jpg, png, webp). Falls back to preview frames if the camera is offline.',
  operationId: 'latest_frame__camera_name__latest__extension__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      extension: ExtensionSchema.openapi({
        param: {
          name: 'extension',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Extension' },
        },
      }),
    }),
    query: z.object({
      bbox: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'bbox',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Bbox' },
          },
          title: 'Bbox',
        }),
      timestamp: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Timestamp' },
          },
          title: 'Timestamp',
        }),
      zones: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'zones',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Zones' },
          },
          title: 'Zones',
        }),
      mask: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'mask',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Mask' },
          },
          title: 'Mask',
        }),
      motion: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'motion',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Motion' },
          },
          title: 'Motion',
        }),
      paths: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'paths',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Paths' },
          },
          title: 'Paths',
        }),
      regions: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'regions',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Regions' },
          },
          title: 'Regions',
        }),
      quality: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .default(70)
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'null' }],
              default: 70,
              title: 'Quality',
            },
          },
          title: 'Quality',
        }),
      height: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Height' },
          },
          title: 'Height',
        }),
      store: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'store',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Store' },
          },
          title: 'Store',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameRecordingsFrameTimeSnapshotFormatRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/recordings/{frame_time}/snapshot.{format}',
  tags: ['Media'],
  summary: 'Get Snapshot From Recording',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId:
    'get_snapshot_from_recording__camera_name__recordings__frame_time__snapshot__format__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      frame_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'frame_time',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Frame Time' },
          },
          title: 'Frame Time',
        }),
      format: z
        .enum(['png', 'jpg'])
        .openapi({
          param: {
            name: 'format',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['png', 'jpg'], title: 'Format' },
          },
          title: 'Format',
        }),
    }),
    query: z.object({
      height: z
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
            name: 'height',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Height' },
          },
          title: 'Height',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postCameraNamePlusFrameTimeRoute = createRoute({
  method: 'post',
  path: '/{camera_name}/plus/{frame_time}',
  tags: ['Media'],
  summary: 'Submit Recording Snapshot To Plus',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'submit_recording_snapshot_to_plus__camera_name__plus__frame_time__post',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      frame_time: z
        .string()
        .openapi({
          param: {
            name: 'frame_time',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Frame Time' },
          },
          title: 'Frame Time',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameStartStartTsEndEndTsClipMp4Route = createRoute({
  method: 'get',
  path: '/{camera_name}/start/{start_ts}/end/{end_ts}/clip.mp4',
  tags: ['Media'],
  summary: 'Recording Clip',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nFor iOS devices, use the master.m3u8 HLS link instead of clip.mp4. Safari does not reliably process progressive mp4 files.',
  operationId: 'recording_clip__camera_name__start__start_ts__end__end_ts__clip_mp4_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodCameraNameStartStartTsEndEndTsRoute = createRoute({
  method: 'get',
  path: '/vod/{camera_name}/start/{start_ts}/end/{end_ts}',
  tags: ['Media'],
  summary: 'Vod Ts',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist for the specified timestamp-range on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_ts_vod__camera_name__start__start_ts__end__end_ts__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
    query: z.object({
      force_discontinuity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force_discontinuity',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Force Discontinuity' },
          },
          title: 'Force Discontinuity',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodYearMonthDayHourCameraNameRoute = createRoute({
  method: 'get',
  path: '/vod/{year_month}/{day}/{hour}/{camera_name}',
  tags: ['Media'],
  summary: 'Vod Hour No Timezone',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist for the specified date-time on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_hour_no_timezone_vod__year_month___day___hour___camera_name__get',
  request: {
    params: z.object({
      year_month: z
        .string()
        .openapi({
          param: {
            name: 'year_month',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Year Month' },
          },
          title: 'Year Month',
        }),
      day: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'day',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Day' },
          },
          title: 'Day',
        }),
      hour: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'hour',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Hour' },
          },
          title: 'Hour',
        }),
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodYearMonthDayHourCameraNameTzNameRoute = createRoute({
  method: 'get',
  path: '/vod/{year_month}/{day}/{hour}/{camera_name}/{tz_name}',
  tags: ['Media'],
  summary: 'Vod Hour',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist for the specified date-time (with timezone) on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_hour_vod__year_month___day___hour___camera_name___tz_name__get',
  request: {
    params: z.object({
      year_month: z
        .string()
        .openapi({
          param: {
            name: 'year_month',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Year Month' },
          },
          title: 'Year Month',
        }),
      day: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'day',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Day' },
          },
          title: 'Day',
        }),
      hour: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'hour',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Hour' },
          },
          title: 'Hour',
        }),
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      tz_name: z
        .string()
        .openapi({
          param: {
            name: 'tz_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Tz Name' },
          },
          title: 'Tz Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodEventEventIdRoute = createRoute({
  method: 'get',
  path: '/vod/event/{event_id}',
  tags: ['Media'],
  summary: 'Vod Event',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist for the specified object. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_event_vod_event__event_id__get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      padding: z
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
            name: 'padding',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Padding to apply to the vod.',
              default: 0,
              title: 'Padding',
            },
            description: 'Padding to apply to the vod.',
          },
          description: 'Padding to apply to the vod.',
          title: 'Padding',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodClipCameraNameStartStartTsEndEndTsRoute = createRoute({
  method: 'get',
  path: '/vod/clip/{camera_name}/start/{start_ts}/end/{end_ts}',
  tags: ['Media'],
  summary: 'Vod Clip',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist for a timestamp range with HLS discontinuity enabled. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_clip_vod_clip__camera_name__start__start_ts__end__end_ts__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getVodCameraNameStreamStartStartTsEndEndTsRoute = createRoute({
  method: 'get',
  path: '/vod/{camera_name}/{stream}/start/{start_ts}/end/{end_ts}',
  tags: ['Media'],
  summary: 'Vod Ts Stream',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns an HLS playlist pinned to one stream type (main or sub) for the specified timestamp-range on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.',
  operationId: 'vod_ts_stream_vod__camera_name___stream__start__start_ts__end__end_ts__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      stream: VodStreamPreferenceSchema.openapi({
        param: {
          name: 'stream',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/VodStreamPreference' },
        },
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
    query: z.object({
      force_discontinuity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force_discontinuity',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Force Discontinuity' },
          },
          title: 'Force Discontinuity',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsEventIdSnapshotJpgRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}/snapshot.jpg',
  tags: ['Media'],
  summary: 'Event Snapshot',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns a snapshot image for the specified object id.',
  operationId: 'event_snapshot_events__event_id__snapshot_jpg_get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      download: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              default: false,
              title: 'Download',
            },
          },
          title: 'Download',
        }),
      timestamp: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Timestamp' },
          },
          title: 'Timestamp',
        }),
      bbox: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'bbox',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Bbox' },
          },
          title: 'Bbox',
        }),
      crop: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'crop',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Crop' },
          },
          title: 'Crop',
        }),
      height: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'height',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Height' },
          },
          title: 'Height',
        }),
      quality: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Quality' },
          },
          title: 'Quality',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsEventIdThumbnailExtensionRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}/thumbnail.{extension}',
  tags: ['Media'],
  summary: 'Event Thumbnail',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'event_thumbnail_events__event_id__thumbnail__extension__get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
      extension: ExtensionSchema.openapi({
        param: {
          name: 'extension',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Extension' },
        },
      }),
    }),
    query: z.object({
      max_cache_age: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(2592000)
        .exactOptional()
        .openapi({
          param: {
            name: 'max_cache_age',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Max cache age in seconds. Default 30 days in seconds.',
              default: 2592000,
              title: 'Max Cache Age',
            },
            description: 'Max cache age in seconds. Default 30 days in seconds.',
          },
          description: 'Max cache age in seconds. Default 30 days in seconds.',
          title: 'Max Cache Age',
        }),
      format: z
        .enum(['ios', 'android'])
        .default('ios')
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['ios', 'android'], default: 'ios', title: 'Format' },
          },
          title: 'Format',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameGridJpgRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/grid.jpg',
  tags: ['Media'],
  summary: 'Grid Snapshot',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'grid_snapshot__camera_name__grid_jpg_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    query: z.object({
      color: z
        .string()
        .default('green')
        .exactOptional()
        .openapi({
          param: {
            name: 'color',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'green', title: 'Color' },
          },
          title: 'Color',
        }),
      font_scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0.5)
        .exactOptional()
        .openapi({
          param: {
            name: 'font_scale',
            in: 'query',
            required: false,
            schema: { type: 'number', default: 0.5, title: 'Font Scale' },
          },
          title: 'Font Scale',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const deleteCameraNameRegionGridRoute = createRoute({
  method: 'delete',
  path: '/{camera_name}/region_grid',
  tags: ['Media'],
  summary: 'Clear Region Grid',
  description: '**Access:** Admin role required.\n\nClear the region grid for a camera.',
  operationId: 'clear_region_grid__camera_name__region_grid_delete',
  request: {
    params: z.object({
      camera_name: z
        .string()
        .openapi({
          param: {
            name: 'camera_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Camera Name' },
          },
          title: 'Camera Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getEventsEventIdSnapshotCleanWebpRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}/snapshot-clean.webp',
  tags: ['Media'],
  summary: 'Event Snapshot Clean',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'event_snapshot_clean_events__event_id__snapshot_clean_webp_get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Download' },
          },
          title: 'Download',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsEventIdClipMp4Route = createRoute({
  method: 'get',
  path: '/events/{event_id}/clip.mp4',
  tags: ['Media'],
  summary: 'Event Clip',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'event_clip_events__event_id__clip_mp4_get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      padding: z
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
            name: 'padding',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Padding to apply to clip.',
              default: 0,
              title: 'Padding',
            },
            description: 'Padding to apply to clip.',
          },
          description: 'Padding to apply to clip.',
          title: 'Padding',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewReviewIdClipMp4Route = createRoute({
  method: 'get',
  path: '/review/{review_id}/clip.mp4',
  tags: ['Media'],
  summary: 'Review Clip',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'review_clip_review__review_id__clip_mp4_get',
  request: {
    params: z.object({
      review_id: z
        .string()
        .openapi({
          param: {
            name: 'review_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Review Id' },
          },
          title: 'Review Id',
        }),
    }),
    query: z.object({
      padding: z
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
            name: 'padding',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Padding to apply to clip.',
              default: 0,
              title: 'Padding',
            },
            description: 'Padding to apply to clip.',
          },
          description: 'Padding to apply to clip.',
          title: 'Padding',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getEventsEventIdPreviewGifRoute = createRoute({
  method: 'get',
  path: '/events/{event_id}/preview.gif',
  tags: ['Media'],
  summary: 'Event Preview',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'event_preview_events__event_id__preview_gif_get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameStartStartTsEndEndTsPreviewGifRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/start/{start_ts}/end/{end_ts}/preview.gif',
  tags: ['Media'],
  summary: 'Preview Gif',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'preview_gif__camera_name__start__start_ts__end__end_ts__preview_gif_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
    query: z.object({
      max_cache_age: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(2592000)
        .exactOptional()
        .openapi({
          param: {
            name: 'max_cache_age',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Max cache age in seconds. Default 30 days in seconds.',
              default: 2592000,
              title: 'Max Cache Age',
            },
            description: 'Max cache age in seconds. Default 30 days in seconds.',
          },
          description: 'Max cache age in seconds. Default 30 days in seconds.',
          title: 'Max Cache Age',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameStartStartTsEndEndTsPreviewMp4Route = createRoute({
  method: 'get',
  path: '/{camera_name}/start/{start_ts}/end/{end_ts}/preview.mp4',
  tags: ['Media'],
  summary: 'Preview Mp4',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'preview_mp4__camera_name__start__start_ts__end__end_ts__preview_mp4_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      start_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'Start Ts' },
          },
          title: 'Start Ts',
        }),
      end_ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end_ts',
            in: 'path',
            required: true,
            schema: { type: 'number', title: 'End Ts' },
          },
          title: 'End Ts',
        }),
    }),
    query: z.object({
      max_cache_age: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(604800)
        .exactOptional()
        .openapi({
          param: {
            name: 'max_cache_age',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              description: 'Max cache age in seconds. Default 7 days in seconds.',
              default: 604800,
              title: 'Max Cache Age',
            },
            description: 'Max cache age in seconds. Default 7 days in seconds.',
          },
          description: 'Max cache age in seconds. Default 7 days in seconds.',
          title: 'Max Cache Age',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getReviewEventIdPreviewRoute = createRoute({
  method: 'get',
  path: '/review/{event_id}/preview',
  tags: ['Media'],
  summary: 'Review Preview',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'review_preview_review__event_id__preview_get',
  request: {
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id' },
          },
          title: 'Event Id',
        }),
    }),
    query: z.object({
      format: z
        .enum(['gif', 'mp4'])
        .default('gif')
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['gif', 'mp4'], default: 'gif', title: 'Format' },
          },
          title: 'Format',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getPreviewFileNameThumbnailWebpRoute = createRoute({
  method: 'get',
  path: '/preview/{file_name}/thumbnail.webp',
  tags: ['Media'],
  summary: 'Preview Thumbnail',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGet a thumbnail from the cached preview frames.',
  operationId: 'preview_thumbnail_preview__file_name__thumbnail_webp_get',
  request: {
    params: z.object({
      file_name: z
        .string()
        .openapi({
          param: {
            name: 'file_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Name' },
          },
          title: 'File Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getPreviewFileNameThumbnailJpgRoute = createRoute({
  method: 'get',
  path: '/preview/{file_name}/thumbnail.jpg',
  tags: ['Media'],
  summary: 'Preview Thumbnail',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nGet a thumbnail from the cached preview frames.',
  operationId: 'preview_thumbnail_preview__file_name__thumbnail_jpg_get',
  request: {
    params: z.object({
      file_name: z
        .string()
        .openapi({
          param: {
            name: 'file_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Name' },
          },
          title: 'File Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameLabelThumbnailJpgRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/{label}/thumbnail.jpg',
  tags: ['Media'],
  summary: 'Label Thumbnail',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'label_thumbnail__camera_name___label__thumbnail_jpg_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Label' },
          },
          title: 'Label',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameLabelBestJpgRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/{label}/best.jpg',
  tags: ['Media'],
  summary: 'Label Thumbnail',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'label_thumbnail__camera_name___label__best_jpg_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Label' },
          },
          title: 'Label',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameLabelClipMp4Route = createRoute({
  method: 'get',
  path: '/{camera_name}/{label}/clip.mp4',
  tags: ['Media'],
  summary: 'Label Clip',
  description: '**Access:** Authenticated user with access to the referenced camera.',
  operationId: 'label_clip__camera_name___label__clip_mp4_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Label' },
          },
          title: 'Label',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameLabelSnapshotJpgRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/{label}/snapshot.jpg',
  tags: ['Media'],
  summary: 'Label Snapshot',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns the snapshot image from the latest event for the given camera and label combo',
  operationId: 'label_snapshot__camera_name___label__snapshot_jpg_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Label' },
          },
          title: 'Label',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postCameraNameSearchMotionRoute = createRoute({
  method: 'post',
  path: '/{camera_name}/search/motion',
  tags: ['Motion Search'],
  summary: 'Start motion search job',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nStarts an asynchronous search for significant motion changes within\n    a user-defined Region of Interest (ROI) over a specified time range. Returns a job_id\n    that can be used to poll for results.',
  operationId: 'start_motion_search__camera_name__search_motion_post',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    body: {
      content: { 'application/json': { schema: MotionSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MotionSearchStartResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameSearchMotionJobIdRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/search/motion/{job_id}',
  tags: ['Motion Search'],
  summary: 'Get motion search job status',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns the status and results (if complete) of a motion search job.',
  operationId: 'get_motion_search_status_endpoint__camera_name__search_motion__job_id__get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MotionSearchStatusResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const postCameraNameSearchMotionJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/{camera_name}/search/motion/{job_id}/cancel',
  tags: ['Motion Search'],
  summary: 'Cancel motion search job',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nCancels an active motion search job if it is still processing.',
  operationId: 'cancel_motion_search_endpoint__camera_name__search_motion__job_id__cancel_post',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getRecordingsStorageRoute = createRoute({
  method: 'get',
  path: '/recordings/storage',
  tags: ['Recordings'],
  summary: 'Get Recordings Storage Usage',
  description: '**Access:** Admin role required.',
  operationId: 'get_recordings_storage_usage_recordings_storage_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getRecordingsSummaryRoute = createRoute({
  method: 'get',
  path: '/recordings/summary',
  tags: ['Recordings'],
  summary: 'All Recordings Summary',
  description:
    '**Access:** Any authenticated user.\n\nReturns true/false by day indicating if recordings exist',
  operationId: 'all_recordings_summary_recordings_summary_get',
  request: {
    query: z.object({
      timezone: z
        .string()
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'UTC', title: 'Timezone' },
          },
          title: 'Timezone',
        }),
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameRecordingsSummaryRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/recordings/summary',
  tags: ['Recordings'],
  summary: 'Recordings Summary',
  description:
    '**Access:** Authenticated user with access to the referenced camera.\n\nReturns hourly summary for recordings of given camera',
  operationId: 'recordings_summary__camera_name__recordings_summary_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    query: z.object({
      timezone: z
        .string()
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'UTC', title: 'Timezone' },
          },
          title: 'Timezone',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameRecordingsCoverageRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/recordings/coverage',
  tags: ['Recordings'],
  summary: 'Recordings Coverage',
  description:
    "**Access:** Authenticated user with access to the referenced camera.\n\nReturns merged recording coverage spans plus codec compatibility.\n\ncodecs_compatible is false only when more than one known video codec\nappears across the range's rows, the case where the merged vod route\ndegrades to a single-stream manifest.",
  operationId: 'recordings_coverage__camera_name__recordings_coverage_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    query: z.object({
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: true,
            schema: { type: 'number', title: 'After' },
          },
          title: 'After',
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: true,
            schema: { type: 'number', title: 'Before' },
          },
          title: 'Before',
        }),
      timelines: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'timelines',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Timelines' },
          },
          title: 'Timelines',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getCameraNameRecordingsRoute = createRoute({
  method: 'get',
  path: '/{camera_name}/recordings',
  tags: ['Recordings'],
  summary: 'Recordings',
  description:
    "**Access:** Authenticated user with access to the referenced camera.\n\nReturn specific camera recordings between the given 'after'/'end' times. If not provided the last hour will be used",
  operationId: 'recordings__camera_name__recordings_get',
  request: {
    params: z.object({
      camera_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      ).openapi({
        param: {
          name: 'camera_name',
          in: 'path',
          required: true,
          schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Camera Name' },
        },
        title: 'Camera Name',
      }),
    }),
    query: z.object({
      after: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'After' },
          },
          title: 'After',
        }),
      before: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const getRecordingsUnavailableRoute = createRoute({
  method: 'get',
  path: '/recordings/unavailable',
  tags: ['Recordings'],
  summary: 'No Recordings',
  description: '**Access:** Any authenticated user.\n\nGet time ranges with no recordings.',
  operationId: 'no_recordings_recordings_unavailable_get',
  request: {
    query: z.object({
      cameras: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'all', title: 'Cameras' },
          },
          title: 'Cameras',
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'Before' },
          },
          title: 'Before',
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'number', title: 'After' },
          },
          title: 'After',
        }),
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'scale',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 30, title: 'Scale' },
          },
          title: 'Scale',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.looseObject({}))
            .openapi({ title: 'Response No Recordings Recordings Unavailable Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateUserAuth: [] }],
})

export const deleteRecordingsStartStartEndEndRoute = createRoute({
  method: 'delete',
  path: '/recordings/start/{start}/end/{end}',
  tags: ['Recordings'],
  summary: 'Delete recordings',
  description:
    '**Access:** Admin role required.\n\nDeletes recordings within the specified time range.\n    Recordings can be filtered by cameras and kept based on motion, objects, or audio attributes.',
  operationId: 'delete_recordings_recordings_start__start__end__end__delete',
  request: {
    params: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'start',
            in: 'path',
            required: true,
            schema: { type: 'number', description: 'Start timestamp (unix)', title: 'Start' },
            description: 'Start timestamp (unix)',
          },
          description: 'Start timestamp (unix)',
          title: 'Start',
        }),
      end: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'end',
            in: 'path',
            required: true,
            schema: { type: 'number', description: 'End timestamp (unix)', title: 'End' },
            description: 'End timestamp (unix)',
          },
          description: 'End timestamp (unix)',
          title: 'End',
        }),
    }),
    query: z.object({
      keep: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'keep',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Keep' },
          },
          title: 'Keep',
        }),
      cameras: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'cameras',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              default: 'all',
              title: 'Cameras',
            },
          },
          title: 'Cameras',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postDebugReplayStartRoute = createRoute({
  method: 'post',
  path: '/debug_replay/start',
  tags: ['App'],
  summary: 'Start debug replay',
  description:
    "**Access:** Admin role required.\n\nStart a debug replay session from camera recordings. Returns immediately while clip generation runs as a background job; subscribe to the 'debug_replay' job_state WS topic to track progress.",
  operationId: 'start_debug_replay_debug_replay_start_post',
  request: {
    body: {
      content: { 'application/json': { schema: DebugReplayStartBodySchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DebugReplayStartResponseSchema } },
    },
    400: { description: 'Invalid camera or time range' },
    404: { description: 'No recordings in the requested time range' },
    409: { description: 'A replay session is already active' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postDebugReplayStartFromExportRoute = createRoute({
  method: 'post',
  path: '/debug_replay/start_from_export',
  tags: ['App'],
  summary: 'Start debug replay from an export',
  description:
    "**Access:** Admin role required.\n\nStart a debug replay session covering an existing export's time range. The end time is derived from the export's video duration.",
  operationId: 'start_debug_replay_from_export_debug_replay_start_from_export_post',
  request: {
    body: {
      content: { 'application/json': { schema: DebugReplayStartFromExportBodySchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DebugReplayStartResponseSchema } },
    },
    400: { description: 'Invalid export, time range, or no recordings' },
    404: { description: 'Export not found' },
    409: { description: 'A replay session is already active' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const getDebugReplayStatusRoute = createRoute({
  method: 'get',
  path: '/debug_replay/status',
  tags: ['App'],
  summary: 'Get debug replay status',
  description:
    '**Access:** Admin role required.\n\nGet the status of the current debug replay session.',
  operationId: 'get_debug_replay_status_debug_replay_status_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DebugReplayStatusResponseSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})

export const postDebugReplayStopRoute = createRoute({
  method: 'post',
  path: '/debug_replay/stop',
  tags: ['App'],
  summary: 'Stop debug replay',
  description:
    '**Access:** Admin role required.\n\nStop the active debug replay session and clean up all artifacts.',
  operationId: 'stop_debug_replay_debug_replay_stop_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DebugReplayStopResponseSchema } },
    },
  },
  security: [{ frigateAdminAuth: [] }],
})
