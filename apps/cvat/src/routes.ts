import { createRoute, z } from '@hono/zod-openapi'

const ShapeTypeSchema = z
  .enum(['rectangle', 'polygon', 'polyline', 'points', 'ellipse', 'cuboid', 'mask', 'skeleton'])
  .openapi({
    description:
      '* `rectangle` - RECTANGLE\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `points` - POINTS\n* `ellipse` - ELLIPSE\n* `cuboid` - CUBOID\n* `mask` - MASK\n* `skeleton` - SKELETON',
  })
  .openapi('ShapeType')

const AttributeValSchema = z
  .object({ spec_id: z.int(), value: z.string().max(4096) })
  .openapi({ required: ['spec_id', 'value'] })
  .openapi('AttributeVal')

const SubLabeledShapeSchema = z
  .object({
    type: ShapeTypeSchema,
    occluded: z.boolean().default(false).exactOptional(),
    outside: z.boolean().default(false).exactOptional(),
    z_order: z.int().default(0).exactOptional(),
    rotation: z.float64().min(0).max(360).default(0).exactOptional(),
    points: z.array(z.float64()).exactOptional(),
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValSchema).default([]).exactOptional(),
    score: z.float64().min(0).max(1).default(1).exactOptional(),
  })
  .openapi({ required: ['frame', 'label_id', 'type'] })
  .openapi('SubLabeledShape')

type LabeledShapeType = {
  type: z.infer<typeof ShapeTypeSchema>
  occluded?: boolean
  outside?: boolean
  z_order?: number
  rotation?: number
  points?: number[]
  id?: number | null
  label_id: number
  group?: number | null
  source?: string
  frame: number
  attributes?: z.infer<typeof AttributeValSchema>[]
  score?: number
  elements?: z.infer<typeof SubLabeledShapeSchema>[]
}

const AttributeValRequestSchema = z
  .object({ spec_id: z.int(), value: z.string().max(4096) })
  .openapi({ required: ['spec_id', 'value'] })
  .openapi('AttributeValRequest')

const SubLabeledShapeRequestSchema = z
  .object({
    type: ShapeTypeSchema,
    occluded: z.boolean().default(false).exactOptional(),
    outside: z.boolean().default(false).exactOptional(),
    z_order: z.int().default(0).exactOptional(),
    rotation: z.float64().min(0).max(360).default(0).exactOptional(),
    points: z.array(z.float64()).exactOptional(),
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().min(1).default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
    score: z.float64().min(0).max(1).default(1).exactOptional(),
  })
  .openapi({ required: ['frame', 'label_id', 'type'] })
  .openapi('SubLabeledShapeRequest')

type LabeledShapeRequestType = {
  type: z.infer<typeof ShapeTypeSchema>
  occluded?: boolean
  outside?: boolean
  z_order?: number
  rotation?: number
  points?: number[]
  id?: number | null
  label_id: number
  group?: number | null
  source?: string
  frame: number
  attributes?: z.infer<typeof AttributeValRequestSchema>[]
  score?: number
  elements?: z.infer<typeof SubLabeledShapeRequestSchema>[]
}

const TrackedShapeSchema = z
  .object({
    type: ShapeTypeSchema,
    occluded: z.boolean().default(false).exactOptional(),
    outside: z.boolean().default(false).exactOptional(),
    z_order: z.int().default(0).exactOptional(),
    rotation: z.float64().min(0).max(360).default(0).exactOptional(),
    points: z.array(z.float64()).exactOptional(),
    attributes: z.array(AttributeValSchema).default([]).exactOptional(),
    id: z.int().nullable().exactOptional(),
    frame: z.int().min(0),
  })
  .openapi({ required: ['frame', 'type'] })
  .openapi('TrackedShape')

const SubLabeledTrackSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValSchema).default([]).exactOptional(),
    shapes: z.array(TrackedShapeSchema),
  })
  .openapi({ required: ['frame', 'label_id', 'shapes'] })
  .openapi('SubLabeledTrack')

type LabeledTrackType = {
  id?: number | null
  label_id: number
  group?: number | null
  source?: string
  frame: number
  attributes?: z.infer<typeof AttributeValSchema>[]
  shapes: z.infer<typeof TrackedShapeSchema>[]
  elements?: z.infer<typeof SubLabeledTrackSchema>[]
}

const TrackedShapeRequestSchema = z
  .object({
    type: ShapeTypeSchema,
    occluded: z.boolean().default(false).exactOptional(),
    outside: z.boolean().default(false).exactOptional(),
    z_order: z.int().default(0).exactOptional(),
    rotation: z.float64().min(0).max(360).default(0).exactOptional(),
    points: z.array(z.float64()).exactOptional(),
    attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
    id: z.int().nullable().exactOptional(),
    frame: z.int().min(0),
  })
  .openapi({ required: ['frame', 'type'] })
  .openapi('TrackedShapeRequest')

const SubLabeledTrackRequestSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().min(1).default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
    shapes: z.array(TrackedShapeRequestSchema),
  })
  .openapi({ required: ['frame', 'label_id', 'shapes'] })
  .openapi('SubLabeledTrackRequest')

type LabeledTrackRequestType = {
  id?: number | null
  label_id: number
  group?: number | null
  source?: string
  frame: number
  attributes?: z.infer<typeof AttributeValRequestSchema>[]
  shapes: z.infer<typeof TrackedShapeRequestSchema>[]
  elements?: z.infer<typeof SubLabeledTrackRequestSchema>[]
}

const AnnotationTypeEnumSchema = z
  .enum([
    'tag',
    'rectangle',
    'skeleton',
    'skeleton_keypoint',
    'points',
    'polyline',
    'mask',
    'polygon',
    'ellipse',
  ])
  .openapi({
    description:
      '* `tag` - Tag\n* `rectangle` - Rectangle\n* `skeleton` - Skeleton\n* `skeleton_keypoint` - Skeleton Keypoint\n* `points` - Points\n* `polyline` - Polyline\n* `mask` - Mask\n* `polygon` - Polygon\n* `ellipse` - Ellipse',
  })
  .openapi('AnnotationTypeEnum')

const BlankEnumSchema = z.literal('').openapi('BlankEnum')

const NullEnumSchema = z.literal(null).openapi('NullEnum')

const QualityTargetMetricSchema = z
  .enum([
    'accuracy',
    'precision',
    'recall',
    'jaccard_index',
    'dice',
    'mean_accuracy',
    'mean_precision',
    'mean_recall',
    'mean_jaccard_index',
    'mean_dice',
    'label_accuracy',
    'label_precision',
    'label_recall',
    'label_jaccard_index',
    'label_dice',
  ])
  .openapi({
    description:
      '* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
  })
  .openapi('QualityTargetMetric')

const SimilarityThresholdPolicyTypeEnumSchema = z
  .literal('iou')
  .openapi({ description: '* `iou` - iou' })
  .openapi('SimilarityThresholdPolicyTypeEnum')

const SimilarityThresholdPolicyModeEnumSchema = z
  .enum(['constant', 'linear'])
  .openapi({ description: '* `constant` - constant\n* `linear` - linear' })
  .openapi('SimilarityThresholdPolicyModeEnum')

const InputEnumSchema = z
  .literal('gt.shape_area')
  .openapi({ description: '* `gt.shape_area` - gt.shape_area' })
  .openapi('InputEnum')

const ExtrapolationEnumSchema = z
  .literal('clamp')
  .openapi({ description: '* `clamp` - clamp' })
  .openapi('ExtrapolationEnum')

const ThresholdPolicyPointRequestSchema = z
  .object({
    x: z
      .float64()
      .min(0)
      .openapi({ description: 'Finite GT shape area in px², strictly greater than zero.' }),
    y: z.float64().min(0).max(1),
  })
  .openapi({ required: ['x', 'y'] })
  .openapi('ThresholdPolicyPointRequest')

const SimilarityThresholdPolicyRequestSchema = z
  .object({
    type: SimilarityThresholdPolicyTypeEnumSchema.exactOptional().openapi({
      description:
        'Threshold type. Omitted type is accepted as IoU for compatibility; responses always include it.\n\n* `iou` - iou',
    }),
    mode: SimilarityThresholdPolicyModeEnumSchema,
    value: z.float64().min(0).max(1).exactOptional(),
    input: InputEnumSchema.exactOptional(),
    extrapolation: ExtrapolationEnumSchema.exactOptional(),
    points: z
      .array(ThresholdPolicyPointRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Required in linear mode: 2-200 points sorted by unique positive GT area.',
      }),
  })
  .openapi({
    description:
      'An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.\n\nThe `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.\nExisting numeric thresholds are returned as numbers.\n\nA constant policy uses one threshold for all shapes:\n\n```json\n{"type": "iou", "mode": "constant", "value": 0.7}\n```\n\nA linear policy chooses a threshold from the GT shape area in px²:\n\n```json\n{\n  "type": "iou",\n  "mode": "linear",\n  "input": "gt.shape_area",\n  "extrapolation": "clamp",\n  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]\n}\n```\n\nLinear policies require 2-200 points with unique positive areas sorted in ascending order\nand thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.\nPolicies without `type` are accepted as IoU for compatibility; responses include it.\nOther threshold types are not supported.\n\nSetting a child\'s threshold to `null` restores inheritance of the whole threshold.\nRoot requirements cannot inherit their threshold.',
    required: ['mode'],
  })
  .openapi('SimilarityThresholdPolicyRequest')

const QualityPointSizeBaseSchema = z
  .enum(['image_size', 'group_bbox_size'])
  .openapi({ description: '* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE' })
  .openapi('QualityPointSizeBase')

const ComparatorEnumSchema = z
  .enum(['exact', 'levenshtein'])
  .openapi({ description: '* `exact` - exact\n* `levenshtein` - levenshtein' })
  .openapi('ComparatorEnum')

const AttributeComparisonDefaultRuleRequestSchema = z
  .object({
    enabled: z.boolean().nullable().exactOptional(),
    comparator: z.xor([ComparatorEnumSchema, NullEnumSchema]).nullable().exactOptional(),
    threshold: z.float64().min(0).max(1).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeComparisonDefaultRuleRequest')

const AttributeComparisonRuleRequestSchema = z
  .object({
    spec_id: z.int().openapi({ description: 'AttributeSpec id to override.' }),
    enabled: z.boolean(),
    comparator: z.xor([ComparatorEnumSchema, NullEnumSchema]).nullable().exactOptional(),
    threshold: z.float64().min(0).max(1).nullable().exactOptional(),
  })
  .openapi({ required: ['enabled', 'spec_id'] })
  .openapi('AttributeComparisonRuleRequest')

const AttributeComparisonRequestSchema = z
  .object({
    default: AttributeComparisonDefaultRuleRequestSchema.nullable().exactOptional(),
    rules: z.array(AttributeComparisonRuleRequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeComparisonRequest')

type QualityRequirementBulkCreateNodeRequestType = {
  name: string
  sort_order?: number
  filter?: string
  enabled?: boolean
  annotation_type?:
    | (
        | z.infer<typeof AnnotationTypeEnumSchema>
        | z.infer<typeof BlankEnumSchema>
        | z.infer<typeof NullEnumSchema>
      )
    | null
  metric?: (z.infer<typeof QualityTargetMetricSchema> | z.infer<typeof NullEnumSchema>) | null
  required_score?: number | null
  parent_requirement?: number | null
  iou_threshold?: (number | z.infer<typeof SimilarityThresholdPolicyRequestSchema>) | null
  point_size?: number | null
  point_size_base?:
    | (
        | z.infer<typeof QualityPointSizeBaseSchema>
        | z.infer<typeof BlankEnumSchema>
        | z.infer<typeof NullEnumSchema>
      )
    | null
  line_thickness?: number | null
  match_orientation?: boolean | null
  line_orientation_threshold?: number | null
  match_groups?: boolean | null
  group_match_threshold?: number | null
  check_covered_annotations?: boolean | null
  object_visibility_threshold?: number | null
  panoptic_comparison?: boolean | null
  attribute_comparison?: z.infer<typeof AttributeComparisonRequestSchema> | null
  children?: QualityRequirementBulkCreateNodeRequestType[]
}

const AboutSchema = z
  .object({
    name: z.string().max(128),
    description: z.string().max(2048),
    version: z.string().max(64),
    logo_url: z.string(),
    subtitle: z.string().max(1024),
  })
  .openapi({ required: ['description', 'logo_url', 'name', 'subtitle', 'version'] })
  .openapi('About')

const AcceptInvitationReadSchema = z
  .object({ organization_slug: z.string() })
  .openapi({ required: ['organization_slug'] })
  .openapi('AcceptInvitationRead')

const BasicUserSchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    username: z
      .string()
      .regex(/^[\w.@+-]+$/)
      .max(150)
      .openapi({
        description: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
      }),
    first_name: z.string().max(150).exactOptional(),
    last_name: z.string().max(150).exactOptional(),
  })
  .openapi({ required: ['username'] })
  .openapi('BasicUser')

const AccessTokenReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'A free-form name for the token.' }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    expiry_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        readOnly: true,
        title: 'Expires',
        description: 'Once the token expires, clients cannot use it anymore.',
      }),
    last_used_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The last use date of the token. This field is NOT updated after each\nuser request. The minimum expected resolution should be 1 day.\n',
      }),
    read_only: z.boolean().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.exactOptional(),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The raw value of the token. Must be saved by the user, returned only once',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccessTokenRead')

const AccessTokenWriteRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(50)
      .openapi({ description: "A free-form name for the token. Doesn't have to be unique" }),
    expiry_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Expires',
        description:
          'Once the token expires, clients cannot use it anymore.\nIf not set, the token will not expire.\n',
      }),
    read_only: z.boolean().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('AccessTokenWriteRequest')

const AggregationEnumSchema = z
  .enum(['micro', 'mean', 'label'])
  .openapi({ description: '* `micro` - micro\n* `mean` - mean\n* `label` - label' })
  .openapi('AggregationEnum')

const AllWebhookTypeSchema = z
  .enum(['organization', 'project', 'server', 'all'])
  .openapi({
    description:
      '* `organization` - ORGANIZATION\n* `project` - PROJECT\n* `server` - SERVER\n* `all` - ALL',
  })
  .openapi('AllWebhookType')

const AnnotationConflictTypeSchema = z
  .enum([
    'missing_annotation',
    'extra_annotation',
    'mismatching_label',
    'mismatching_direction',
    'mismatching_attributes',
    'mismatching_groups',
    'covered_annotation',
  ])
  .openapi({
    description:
      '* `missing_annotation` - MISSING_ANNOTATION\n* `extra_annotation` - EXTRA_ANNOTATION\n* `mismatching_label` - MISMATCHING_LABEL\n* `mismatching_direction` - MISMATCHING_DIRECTION\n* `mismatching_attributes` - MISMATCHING_ATTRIBUTES\n* `mismatching_groups` - MISMATCHING_GROUPS\n* `covered_annotation` - COVERED_ANNOTATION',
  })
  .openapi('AnnotationConflictType')

const AnnotationConflictAnnotationTypeSchema = z
  .enum(['tag', 'shape', 'track'])
  .openapi({ description: '* `tag` - TAG\n* `shape` - SHAPE\n* `track` - TRACK' })
  .openapi('AnnotationConflictAnnotationType')

const AnnotationIdSchema = z
  .object({
    obj_id: z.int().exactOptional().openapi({ readOnly: true }),
    job_id: z.int().exactOptional().openapi({ readOnly: true }),
    type: AnnotationConflictAnnotationTypeSchema.exactOptional().openapi({ readOnly: true }),
    shape_type: z
      .xor([ShapeTypeSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationId')

const AnnotationConflictSeveritySchema = z
  .literal('error')
  .openapi({ description: '* `error` - ERROR' })
  .openapi('AnnotationConflictSeverity')

const AnnotationConflictSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    frame: z.int().exactOptional().openapi({ readOnly: true }),
    type: AnnotationConflictTypeSchema.exactOptional().openapi({ readOnly: true }),
    annotation_ids: z.array(AnnotationIdSchema),
    report_id: z.int().exactOptional().openapi({ readOnly: true }),
    severity: AnnotationConflictSeveritySchema.exactOptional().openapi({ readOnly: true }),
    attribute_names: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['annotation_ids'] })
  .openapi('AnnotationConflict')

const AnnotationFileRequestSchema = z
  .object({ annotation_file: z.file().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: ['annotation_file'] })
  .openapi('AnnotationFileRequest')

const AnnotationGuideReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    markdown: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationGuideRead')

const AnnotationGuideWriteRequestSchema = z
  .object({
    task_id: z.int().nullable().exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    markdown: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationGuideWriteRequest')

const AssetReadSchema = z
  .object({
    uuid: z.uuid().exactOptional().openapi({ readOnly: true }),
    filename: z.string().max(1024),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.exactOptional(),
    guide_id: z.int().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['filename'] })
  .openapi('AssetRead')

const AssetWriteRequestSchema = z
  .object({
    guide_id: z.int(),
    file: z.file().openapi({ type: 'string', format: 'binary', writeOnly: true }),
  })
  .openapi({ required: ['file', 'guide_id'] })
  .openapi('AssetWriteRequest')

const InputTypeEnumSchema = z
  .enum(['checkbox', 'radio', 'number', 'text', 'select'])
  .openapi({
    description:
      '* `checkbox` - CHECKBOX\n* `radio` - RADIO\n* `number` - NUMBER\n* `text` - TEXT\n* `select` - SELECT',
  })
  .openapi('InputTypeEnum')

const AttributeSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(64),
    mutable: z.boolean(),
    input_type: InputTypeEnumSchema,
    default_value: z.string().max(128).exactOptional(),
    values: z.array(z.string().max(200)),
  })
  .openapi({ required: ['input_type', 'mutable', 'name', 'values'] })
  .openapi('Attribute')

const AttributeComparisonDefaultRuleSchema = z
  .object({
    enabled: z.boolean().nullable().exactOptional(),
    comparator: z.xor([ComparatorEnumSchema, NullEnumSchema]).nullable().exactOptional(),
    threshold: z.float64().min(0).max(1).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeComparisonDefaultRule')

const AttributeComparisonRuleSchema = z
  .object({
    spec_id: z.int().openapi({ description: 'AttributeSpec id to override.' }),
    enabled: z.boolean(),
    comparator: z.xor([ComparatorEnumSchema, NullEnumSchema]).nullable().exactOptional(),
    threshold: z.float64().min(0).max(1).nullable().exactOptional(),
  })
  .openapi({ required: ['enabled', 'spec_id'] })
  .openapi('AttributeComparisonRule')

const AttributeComparisonSchema = z
  .object({
    default: AttributeComparisonDefaultRuleSchema.nullable().exactOptional(),
    rules: z.array(AttributeComparisonRuleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeComparison')

const AttributeRequestSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().min(1).max(64),
    mutable: z.boolean(),
    input_type: InputTypeEnumSchema,
    default_value: z.string().max(128).exactOptional(),
    values: z.array(z.string().max(200)),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description: 'Delete the attribute and all related annotation values.',
      }),
  })
  .openapi({ required: ['input_type', 'mutable', 'name', 'values'] })
  .openapi('AttributeRequest')

const BasicOrganizationSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('BasicOrganization')

const BasicUserRequestSchema = z
  .object({
    username: z
      .string()
      .regex(/^[\w.@+-]+$/)
      .min(1)
      .max(150)
      .openapi({
        description: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
      }),
    first_name: z.string().max(150).exactOptional(),
    last_name: z.string().max(150).exactOptional(),
  })
  .openapi({ required: ['username'] })
  .openapi('BasicUserRequest')

const ChapterMetadataSchema = z
  .object({ title: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ChapterMetadata')

const ChapterSchema = z
  .object({ id: z.int(), start: z.int(), stop: z.int(), metadata: ChapterMetadataSchema })
  .openapi({ required: ['id', 'metadata', 'start', 'stop'] })
  .openapi('Chapter')

const ChunkTypeSchema = z
  .enum(['video', 'imageset', 'audio_mp3'])
  .openapi({ description: '* `video` - VIDEO\n* `imageset` - IMAGESET\n* `audio_mp3` - AUDIO_MP3' })
  .openapi('ChunkType')

const EventSchema = z
  .object({
    scope: z.string(),
    obj_name: z.string().nullable().exactOptional(),
    obj_id: z.int().nullable().exactOptional(),
    obj_val: z.string().nullable().exactOptional(),
    source: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }),
    count: z.int().nullable().exactOptional(),
    duration: z.int().default(0).exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    task_id: z.int().nullable().exactOptional(),
    job_id: z.int().nullable().exactOptional(),
    user_id: z.int().nullable().exactOptional(),
    user_name: z.string().nullable().exactOptional(),
    user_email: z.string().nullable().exactOptional(),
    org_id: z.int().nullable().exactOptional(),
    org_slug: z.string().nullable().exactOptional(),
    payload: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['scope', 'timestamp'] })
  .openapi('Event')

const ClientEventsSchema = z
  .object({
    events: z.array(EventSchema).default([]).exactOptional(),
    timestamp: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['timestamp'] })
  .openapi('ClientEvents')

const EventRequestSchema = z
  .object({
    scope: z.string().min(1),
    obj_name: z.string().min(1).nullable().exactOptional(),
    obj_id: z.int().nullable().exactOptional(),
    obj_val: z.string().min(1).nullable().exactOptional(),
    source: z.string().min(1).nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }),
    count: z.int().nullable().exactOptional(),
    duration: z.int().default(0).exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    task_id: z.int().nullable().exactOptional(),
    job_id: z.int().nullable().exactOptional(),
    user_id: z.int().nullable().exactOptional(),
    user_name: z.string().min(1).nullable().exactOptional(),
    user_email: z.string().min(1).nullable().exactOptional(),
    org_id: z.int().nullable().exactOptional(),
    org_slug: z.string().min(1).nullable().exactOptional(),
    payload: z.string().min(1).nullable().exactOptional(),
  })
  .openapi({ required: ['scope', 'timestamp'] })
  .openapi('EventRequest')

const ClientEventsRequestSchema = z
  .object({
    events: z.array(EventRequestSchema).default([]).exactOptional(),
    previous_event: EventRequestSchema.nullable().exactOptional().openapi({ writeOnly: true }),
    timestamp: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['timestamp'] })
  .openapi('ClientEventsRequest')

const FileInfoTypeEnumSchema = z
  .enum(['REG', 'DIR'])
  .openapi({ description: '* `REG` - REG\n* `DIR` - DIR' })
  .openapi('FileInfoTypeEnum')

const FileInfoSchema = z
  .object({
    name: z.string().max(1024),
    type: FileInfoTypeEnumSchema,
    mime_type: z.string().max(255),
  })
  .openapi({ required: ['mime_type', 'name', 'type'] })
  .openapi('FileInfo')

const CloudStorageContentSchema = z
  .object({
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'This token is used to continue listing files in the bucket.' }),
    content: z.array(FileInfoSchema),
  })
  .openapi({ required: ['content'] })
  .openapi('CloudStorageContent')

const ProviderTypeEnumSchema = z
  .enum(['AWS_S3_BUCKET', 'AZURE_CONTAINER', 'GOOGLE_CLOUD_STORAGE'])
  .openapi({
    description:
      '* `AWS_S3_BUCKET` - Amazon S3\n* `AZURE_CONTAINER` - Azure Blob Storage\n* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage',
  })
  .openapi('ProviderTypeEnum')

const CredentialsTypeEnumSchema = z
  .enum([
    'KEY_SECRET_KEY_PAIR',
    'ACCOUNT_NAME_TOKEN_PAIR',
    'KEY_FILE_PATH',
    'ANONYMOUS_ACCESS',
    'CONNECTION_STRING',
  ])
  .openapi({
    description:
      '* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR\n* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR\n* `KEY_FILE_PATH` - KEY_FILE_PATH\n* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS\n* `CONNECTION_STRING` - CONNECTION_STRING',
  })
  .openapi('CredentialsTypeEnum')

const CloudStorageReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional(),
    manifests: z.array(z.string().max(1024)).default([]).exactOptional(),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    provider_type: ProviderTypeEnumSchema,
    resource: z.string().max(222),
    display_name: z.string().max(63),
    credentials_type: CredentialsTypeEnumSchema,
    specific_attributes: z.string().max(1024).exactOptional(),
    description: z.string().exactOptional(),
    organization: z.int().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['credentials_type', 'display_name', 'provider_type', 'resource'] })
  .openapi('CloudStorageRead')

const CloudStorageWriteRequestSchema = z
  .object({
    provider_type: ProviderTypeEnumSchema,
    resource: z.string().min(1).max(222),
    display_name: z.string().min(1).max(63),
    owner: BasicUserRequestSchema.exactOptional(),
    credentials_type: CredentialsTypeEnumSchema,
    session_token: z.string().max(440).exactOptional(),
    account_name: z.string().max(24).exactOptional(),
    key: z.string().max(40).exactOptional(),
    secret_key: z.string().max(64).exactOptional(),
    connection_string: z.string().max(1024).exactOptional(),
    key_file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
    specific_attributes: z.string().max(1024).exactOptional(),
    description: z.string().exactOptional(),
    manifests: z.array(z.string().min(1).max(1024)).default([]).exactOptional(),
  })
  .openapi({ required: ['credentials_type', 'display_name', 'provider_type', 'resource'] })
  .openapi('CloudStorageWriteRequest')

const CommentReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    issue: z.int().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional(),
    message: z.string().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('CommentRead')

const CommentWriteRequestSchema = z
  .object({ issue: z.int(), message: z.string().min(1).exactOptional() })
  .openapi({ required: ['issue'] })
  .openapi('CommentWriteRequest')

const CommentsSummarySchema = z
  .object({
    count: z.int().default(0).exactOptional(),
    url: z.url().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('CommentsSummary')

const ConsensusMergeCreateRequestSchema = z
  .object({
    task_id: z.int().exactOptional().openapi({ writeOnly: true }),
    job_id: z.int().exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ConsensusMergeCreateRequest')

const ConsensusSettingsSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().exactOptional().openapi({ readOnly: true }),
    iou_threshold: z
      .float64()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Pairwise annotation matching IoU threshold' }),
  })
  .openapi({ required: [] })
  .openapi('ConsensusSettings')

const CreatedViaEnumSchema = z
  .enum(['registration', 'social', 'sso', 'ldap', 'invitation'])
  .openapi({
    description:
      '* `registration` - Registration\n* `social` - Social\n* `sso` - SSO\n* `ldap` - LDAP\n* `invitation` - Invitation',
  })
  .openapi('CreatedViaEnum')

const CvatUsageReasonEnumSchema = z
  .enum(['work_project', 'academic_research', 'teaching_or_coursework', 'personal_project'])
  .openapi({
    description:
      '* `work_project` - work_project\n* `academic_research` - academic_research\n* `teaching_or_coursework` - teaching_or_coursework\n* `personal_project` - personal_project',
  })
  .openapi('CvatUsageReasonEnum')

const FrameMetaSchema = z
  .object({
    width: z.int().exactOptional(),
    height: z.int().exactOptional(),
    name: z.string().max(1024),
    related_files: z.int(),
    has_related_context: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'related_files'] })
  .openapi('FrameMeta')

const StorageTypeSchema = z
  .enum(['cloud_storage', 'local', 'share'])
  .openapi({
    description: '* `cloud_storage` - CLOUD_STORAGE\n* `local` - LOCAL\n* `share` - SHARE',
  })
  .openapi('StorageType')

const DataMetaReadSchema = z
  .object({
    chapters: z.array(ChapterSchema).nullable().exactOptional(),
    chunks_updated_date: z.iso.datetime({ offset: true }),
    chunk_size: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    size: z
      .int()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'The number of frames included. Deleted frames do not affect this value.\n',
      }),
    image_quality: z.int().min(0).max(100).exactOptional(),
    start_frame: z.int().exactOptional().openapi({ readOnly: true }),
    stop_frame: z.int().exactOptional().openapi({ readOnly: true }),
    frame_filter: z.string().exactOptional().openapi({ readOnly: true }),
    frames: z.array(FrameMetaSchema).nullable(),
    deleted_frames: z.array(z.int().min(0)),
    included_frames: z
      .array(z.int().min(0))
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A list of valid frame ids. The None value means all frames are included.\n',
      }),
    storage: StorageTypeSchema.exactOptional().openapi({ readOnly: true }),
    cloud_storage_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['chunks_updated_date', 'deleted_frames', 'frames'] })
  .openapi('DataMetaRead')

const StorageMethodSchema = z
  .enum(['cache', 'file_system'])
  .openapi({ description: '* `cache` - CACHE\n* `file_system` - FILE_SYSTEM' })
  .openapi('StorageMethod')

const SortingMethodSchema = z
  .enum(['lexicographical', 'natural', 'predefined', 'random'])
  .openapi({
    description:
      '* `lexicographical` - LEXICOGRAPHICAL\n* `natural` - NATURAL\n* `predefined` - PREDEFINED\n* `random` - RANDOM',
  })
  .openapi('SortingMethod')

const ValidationModeSchema = z
  .enum(['gt', 'gt_pool'])
  .openapi({ description: '* `gt` - GT\n* `gt_pool` - GT_POOL' })
  .openapi('ValidationMode')

const FrameSelectionMethodSchema = z
  .enum(['random_uniform', 'random_per_job', 'manual'])
  .openapi({
    description:
      '* `random_uniform` - RANDOM_UNIFORM\n* `random_per_job` - RANDOM_PER_JOB\n* `manual` - MANUAL',
  })
  .openapi('FrameSelectionMethod')

const ValidationParamsRequestSchema = z
  .object({
    mode: ValidationModeSchema,
    frame_selection_method: FrameSelectionMethodSchema.exactOptional(),
    random_seed: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'The seed value for the random number generator.\nThe same value will produce the same frame sets.\nApplicable only to random frame selection methods.\nBy default, a random value is used.\n',
      }),
    frames: z
      .array(z.string().min(1).max(1024))
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'The list of file names to be included in the validation set.\nApplicable only to the "manual" frame selection method.\nCan only be used for images.\n',
      }),
    frame_count: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of frames to be included in the validation set.\nApplicable only to the "random_uniform" frame selection method\n',
      }),
    frame_share: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The share of frames to be included in the validation set.\nApplicable only to the "random_uniform" frame selection method\n',
      }),
    frames_per_job_count: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of frames to be included in the validation set from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
      }),
    frames_per_job_share: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The share of frames to be included in the validation set from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
      }),
  })
  .openapi({ required: ['mode'] })
  .openapi('ValidationParamsRequest')

const DataRequestSchema = z
  .object({
    chunk_size: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum number of frames per chunk' }),
    image_quality: z
      .int()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Image quality to use during annotation, required for image and video-based tasks',
      }),
    start_frame: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'First frame index' }),
    stop_frame: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'Last frame index' }),
    frame_filter: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({ description: "Frame filter. The only supported syntax is: 'step=N'" }),
    client_files: z
      .array(z.file().openapi({ type: 'string', format: 'binary' }))
      .default([])
      .exactOptional()
      .openapi({
        description:
          '\nUploaded files.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
      }),
    server_files: z
      .array(z.string().min(1).max(1024))
      .default([])
      .exactOptional()
      .openapi({
        description:
          '\nPaths to files from a file share mounted on the server, or from a cloud storage.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
      }),
    remote_files: z
      .array(z.string().min(1).max(1024))
      .default([])
      .exactOptional()
      .openapi({
        description:
          '\nDirect download URLs for files.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
      }),
    use_zip_chunks: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When true, video chunks will be represented as zip archives with decoded video frames.\nWhen false, video chunks are represented as video segments\n',
      }),
    server_files_exclude: z
      .array(z.string().min(1).max(1024))
      .default([])
      .exactOptional()
      .openapi({
        description:
          "Paths to files and directories from a file share mounted on the server, or from a cloud storage\nthat should be excluded from the directories specified in server_files.\nThis option cannot be used together with filename_pattern.\nThe server_files_exclude parameter cannot be used to exclude a part of dataset from an archive.\n\nExamples:\n\nExclude all files from subfolder 'sub/sub_1/sub_2'and single file 'sub/image.jpg' from specified folder:\nserver_files = ['sub/'], server_files_exclude = ['sub/sub_1/sub_2/', 'sub/image.jpg']\n\nExclude all cloud storage files with prefix 'sub' from the content of manifest file:\nserver_files = ['manifest.jsonl'], server_files_exclude = ['sub/']\n",
      }),
    cloud_storage_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'If not null, the files referenced by server_files will be retrieved\nfrom the cloud storage with the specified ID.\nThe cloud storages applicable depend on the context.\nIn the user sandbox, only the user sandbox cloud storages can be used.\nIn an organization, only the organization cloud storages can be used.\n',
      }),
    use_cache: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Enable or disable task data chunk caching for the task.\nRead more: https://docs.cvat.ai/docs/manual/advanced/data_on_fly/\n',
      }),
    copy_data: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Copy data from the server file share to CVAT during the task creation.\nThis will create a copy of the data, making the server independent from\nthe file share availability\n',
      }),
    storage_method: StorageMethodSchema.exactOptional(),
    sorting_method: SortingMethodSchema.exactOptional(),
    filename_pattern: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A filename filter for cloud storage files\nlisted in the manifest. Supports fnmatch wildcards.\nRead more: https://docs.python.org/3/library/fnmatch.html\n',
      }),
    job_file_mapping: z
      .array(z.array(z.string().min(1).max(1024)))
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          '\nRepresents a file-to-job mapping.\nUseful to specify a custom job configuration during task creation.\nThis option is not compatible with most other job split-related options.\nFiles in the jobs must not overlap or repeat.\nJob file mapping files must be a subset of the input files.\nIf directories are specified in server_files, all files obtained by recursive search\nin the specified directories will be used as input files.\nIn case of missing items in the input files, an error will be raised.\n\nExample:\n[\n\n    ["file1.jpg", "file2.jpg"], # job #1 files\n    ["file3.png"], # job #2 files\n    ["file4.jpg", "file5.png", "file6.bmp"], # job #3 files\n]\n',
      }),
    upload_file_order: z
      .array(z.string().min(1).max(1024))
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Allows to specify file order for client_file uploads.\nOnly valid with the "predefined" sorting method selected.\n\nTo state that the input files are sent in the correct order,\npass an empty list.\n\nIf you want to send files in an arbitrary order\nand reorder them afterwards on the server,\npass the list of file names in the required order.\n',
      }),
    validation_params: ValidationParamsRequestSchema.nullable().exactOptional(),
  })
  .openapi({
    description:
      'Read more about parameters here:\nhttps://docs.cvat.ai/docs/manual/basics/create-annotation-task/#advanced-configuration',
    required: [],
  })
  .openapi('DataRequest')

const RqIdSchema = z
  .object({ rq_id: z.string().openapi({ description: 'Request id' }) })
  .openapi({ required: ['rq_id'] })
  .openapi('RqId')

const DataResponseSchema = z
  .xor([RqIdSchema, z.file().openapi({ type: 'string', format: 'binary' })])
  .openapi('DataResponse')

const DatasetFileRequestSchema = z
  .object({ dataset_file: z.file().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: ['dataset_file'] })
  .openapi('DatasetFileRequest')

const DatasetFormatSchema = z
  .object({
    name: z.string().max(64),
    ext: z.string().max(64),
    version: z.string().max(64),
    enabled: z.boolean(),
    dimension: z.string().max(2),
  })
  .openapi({ required: ['dimension', 'enabled', 'ext', 'name', 'version'] })
  .openapi('DatasetFormat')

const DatasetFormatsSchema = z
  .object({ importers: z.array(DatasetFormatSchema), exporters: z.array(DatasetFormatSchema) })
  .openapi({ required: ['exporters', 'importers'] })
  .openapi('DatasetFormats')

const EventGroupSchema = z
  .object({ display_name: z.string().exactOptional().openapi({ readOnly: true }) })
  .openapi({ required: [] })
  .openapi('EventGroup')

const WebhooksEventSchema = z
  .object({
    key: z.string().exactOptional().openapi({ readOnly: true }),
    group: EventGroupSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('WebhooksEvent')

const EventsSchema = z
  .object({
    webhook_type: AllWebhookTypeSchema,
    events: z.array(WebhooksEventSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['webhook_type'] })
  .openapi('Events')

const EventsEnumSchema = z
  .enum([
    'completed:request[calculate:quality]',
    'completed:request[create:task]',
    'completed:request[export:annotations]',
    'completed:request[export:backup]',
    'completed:request[export:dataset]',
    'completed:request[merge:job]',
    'completed:request[merge:task]',
    'create:comment',
    'create:invitation',
    'create:issue',
    'create:job',
    'create:membership',
    'create:organization',
    'create:project',
    'create:task',
    'create:user',
    'delete:comment',
    'delete:invitation',
    'delete:issue',
    'delete:job',
    'delete:membership',
    'delete:organization',
    'delete:project',
    'delete:task',
    'delete:user',
    'update:comment',
    'update:issue',
    'update:job',
    'update:membership',
    'update:organization',
    'update:project',
    'update:task',
    'update:user',
  ])
  .openapi({
    description:
      '* `completed:request[calculate:quality]` - COMPLETED:REQUEST[CALCULATE:QUALITY]\n* `completed:request[create:task]` - COMPLETED:REQUEST[CREATE:TASK]\n* `completed:request[export:annotations]` - COMPLETED:REQUEST[EXPORT:ANNOTATIONS]\n* `completed:request[export:backup]` - COMPLETED:REQUEST[EXPORT:BACKUP]\n* `completed:request[export:dataset]` - COMPLETED:REQUEST[EXPORT:DATASET]\n* `completed:request[merge:job]` - COMPLETED:REQUEST[MERGE:JOB]\n* `completed:request[merge:task]` - COMPLETED:REQUEST[MERGE:TASK]\n* `create:comment` - CREATE:COMMENT\n* `create:invitation` - CREATE:INVITATION\n* `create:issue` - CREATE:ISSUE\n* `create:job` - CREATE:JOB\n* `create:membership` - CREATE:MEMBERSHIP\n* `create:organization` - CREATE:ORGANIZATION\n* `create:project` - CREATE:PROJECT\n* `create:task` - CREATE:TASK\n* `create:user` - CREATE:USER\n* `delete:comment` - DELETE:COMMENT\n* `delete:invitation` - DELETE:INVITATION\n* `delete:issue` - DELETE:ISSUE\n* `delete:job` - DELETE:JOB\n* `delete:membership` - DELETE:MEMBERSHIP\n* `delete:organization` - DELETE:ORGANIZATION\n* `delete:project` - DELETE:PROJECT\n* `delete:task` - DELETE:TASK\n* `delete:user` - DELETE:USER\n* `update:comment` - UPDATE:COMMENT\n* `update:issue` - UPDATE:ISSUE\n* `update:job` - UPDATE:JOB\n* `update:membership` - UPDATE:MEMBERSHIP\n* `update:organization` - UPDATE:ORGANIZATION\n* `update:project` - UPDATE:PROJECT\n* `update:task` - UPDATE:TASK\n* `update:user` - UPDATE:USER',
  })
  .openapi('EventsEnum')

const FunctionCallParamsSchema = z
  .object({
    id: z.string().nullable().openapi({ description: 'The name of the function' }),
    task: z.int().nullable().openapi({ description: 'The id of the task' }),
    job: z.int().exactOptional().openapi({ description: 'The id of the job' }),
    threshold: z.float64().nullable(),
  })
  .openapi({ required: ['id', 'task', 'threshold'] })
  .openapi('FunctionCallParams')

const FunctionCallSchema = z
  .object({
    id: z.string().openapi({ description: 'Request id' }),
    function: FunctionCallParamsSchema,
    status: z.string().nullable(),
    progress: z.int().nullable().default(0).exactOptional(),
    enqueued: z.iso.datetime({ offset: true }).nullable(),
    started: z.iso.datetime({ offset: true }).nullable(),
    ended: z.iso.datetime({ offset: true }).nullable(),
    exc_info: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['ended', 'enqueued', 'function', 'id', 'started', 'status'] })
  .openapi('FunctionCall')

const SublabelMappingEntryRequestSchema = z
  .object({
    name: z.string().min(1),
    attributes: z.record(z.string(), z.string().min(1).max(64)).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SublabelMappingEntryRequest')

const LabelMappingEntryRequestSchema = z
  .object({
    name: z.string().min(1),
    attributes: z.record(z.string(), z.string().min(1)).exactOptional(),
    sublabels: z
      .record(z.string(), SublabelMappingEntryRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Label mapping for from the model to the task sublabels within a parent label',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('LabelMappingEntryRequest')

const FunctionCallRequestSchema = z
  .object({
    function: z.string().min(1).openapi({ description: 'The name of the function to execute' }),
    task: z.int().openapi({ description: 'The id of the task to be annotated' }),
    job: z.int().exactOptional().openapi({ description: 'The id of the job to be annotated' }),
    max_distance: z.int().exactOptional(),
    threshold: z.float64().exactOptional(),
    cleanup: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether existing annotations should be removed' }),
    convMaskToPoly: z
      .boolean()
      .exactOptional()
      .openapi({ writeOnly: true, description: 'Deprecated; use conv_mask_to_poly instead' }),
    conv_mask_to_poly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Convert mask shapes to polygons' }),
    mapping: z
      .record(z.string(), LabelMappingEntryRequestSchema)
      .exactOptional()
      .openapi({ description: 'Label mapping from the model to the task labels' }),
    roi: z
      .array(z.int())
      .length(4)
      .exactOptional()
      .openapi({ description: 'Region of interest as [xtl, ytl, xbr, ybr]' }),
  })
  .openapi({ required: ['function', 'task'] })
  .openapi('FunctionCallRequest')

const GroundTruthJobCreateTypeEnumSchema = z
  .literal('ground_truth')
  .openapi({ description: '* `ground_truth` - GROUND_TRUTH' })
  .openapi('GroundTruthJobCreateTypeEnum')

const GroundTruthJobCreateRequestSchema = z
  .object({
    assignee: z.int().nullable().exactOptional(),
    type: GroundTruthJobCreateTypeEnumSchema,
    task_id: z.int(),
    frame_selection_method: FrameSelectionMethodSchema.exactOptional(),
    frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({
        description:
          'The list of frame ids. Applicable only to the "manual" frame selection method\n',
      }),
    frame_count: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of frames included in the GT job.\nApplicable only to the "random_uniform" frame selection method\n',
      }),
    frame_share: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The share of frames included in the GT job.\nApplicable only to the "random_uniform" frame selection method\n',
      }),
    frames_per_job_count: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of frames included in the GT job from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
      }),
    frames_per_job_share: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The share of frames included in the GT job from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
      }),
    random_seed: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'The seed value for the random number generator.\nThe same value will produce the same frame sets.\nApplicable only to random frame selection methods.\nBy default, a random value is used.\n',
      }),
  })
  .openapi({ required: ['task_id', 'type'] })
  .openapi('GroundTruthJobCreateRequest')

const RoleEnumSchema = z
  .enum(['worker', 'supervisor', 'maintainer', 'owner'])
  .openapi({
    description:
      '* `worker` - Worker\n* `supervisor` - Supervisor\n* `maintainer` - Maintainer\n* `owner` - Owner',
  })
  .openapi('RoleEnum')

const InvitationReadSchema = z
  .object({
    key: z.string().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable(),
    role: RoleEnumSchema,
    user: BasicUserSchema,
    organization: z.int(),
    expired: z.boolean().nullable().exactOptional().openapi({ readOnly: true }),
    accepted: z.boolean().exactOptional().openapi({ readOnly: true }),
    organization_info: BasicOrganizationSchema,
  })
  .openapi({ required: ['organization', 'organization_info', 'owner', 'role', 'user'] })
  .openapi('InvitationRead')

const InvitationWriteRequestSchema = z
  .object({ role: RoleEnumSchema, email: z.email().min(1) })
  .openapi({ required: ['email', 'role'] })
  .openapi('InvitationWriteRequest')

const IssueReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    frame: z.int().exactOptional().openapi({ readOnly: true }),
    position: z.array(z.float64()),
    job: z.int().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional(),
    assignee: BasicUserSchema.nullable().exactOptional(),
    created_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    updated_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    resolved: z.boolean().exactOptional().openapi({ readOnly: true }),
    comments: CommentsSummarySchema,
  })
  .openapi({ required: ['comments', 'position'] })
  .openapi('IssueRead')

const IssueWriteRequestSchema = z
  .object({
    frame: z.int().min(0).max(2147483647),
    position: z.array(z.float64()),
    job: z.int(),
    assignee: z.int().nullable().exactOptional(),
    message: z.string().min(1),
    resolved: z.boolean().exactOptional(),
  })
  .openapi({ required: ['frame', 'job', 'message', 'position'] })
  .openapi('IssueWriteRequest')

const IssuesSummarySchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    count: z.int().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IssuesSummary')

const JobStatusSchema = z
  .enum(['annotation', 'validation', 'completed'])
  .openapi({
    description:
      '* `annotation` - ANNOTATION\n* `validation` - VALIDATION\n* `completed` - COMPLETED',
  })
  .openapi('JobStatus')

const JobStageSchema = z
  .enum(['annotation', 'validation', 'acceptance'])
  .openapi({
    description:
      '* `annotation` - ANNOTATION\n* `validation` - VALIDATION\n* `acceptance` - ACCEPTANCE',
  })
  .openapi('JobStage')

const OperationStatusSchema = z
  .enum(['new', 'in progress', 'completed', 'rejected'])
  .openapi({
    description:
      '* `new` - NEW\n* `in progress` - IN_PROGRESS\n* `completed` - COMPLETED\n* `rejected` - REJECTED',
  })
  .openapi('OperationStatus')

const LabelsSummarySchema = z
  .object({ url: z.url().exactOptional().openapi({ readOnly: true }) })
  .openapi({ required: [] })
  .openapi('LabelsSummary')

const JobTypeSchema = z
  .enum(['annotation', 'ground_truth', 'replica'])
  .openapi({
    description:
      '* `annotation` - ANNOTATION\n* `ground_truth` - GROUND_TRUTH\n* `replica` - REPLICA',
  })
  .openapi('JobType')

const LocationEnumSchema = z
  .enum(['cloud_storage', 'local'])
  .openapi({ description: '* `cloud_storage` - CLOUD_STORAGE\n* `local` - LOCAL' })
  .openapi('LocationEnum')

const StorageSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    location: LocationEnumSchema.exactOptional(),
    cloud_storage_id: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Storage')

const JobReadSchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().exactOptional().openapi({ readOnly: true }),
    task_name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    project_name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    assignee: BasicUserSchema.nullable().exactOptional().openapi({ readOnly: true }),
    guide_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    dimension: z.string().exactOptional().openapi({ readOnly: true }),
    mode: z.string().exactOptional().openapi({ readOnly: true }),
    media_type: z.string().exactOptional().openapi({ readOnly: true }),
    bug_tracker: z.string().max(2000).nullable().exactOptional().openapi({ readOnly: true }),
    status: JobStatusSchema.exactOptional().openapi({ readOnly: true }),
    stage: JobStageSchema.exactOptional().openapi({ readOnly: true }),
    state: OperationStatusSchema.exactOptional().openapi({ readOnly: true }),
    frame_count: z.int().exactOptional().openapi({ readOnly: true }),
    start_frame: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ readOnly: true }),
    stop_frame: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ readOnly: true }),
    data_chunk_size: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    data_compressed_chunk_type: ChunkTypeSchema.exactOptional().openapi({ readOnly: true }),
    data_original_chunk_type: ChunkTypeSchema.exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    issues: IssuesSummarySchema,
    labels: LabelsSummarySchema,
    type: JobTypeSchema.exactOptional().openapi({ readOnly: true }),
    organization: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    target_storage: StorageSchema.nullable().exactOptional(),
    source_storage: StorageSchema.nullable().exactOptional(),
    assignee_updated_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    parent_job_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    replicas_count: z.int().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['issues', 'labels'] })
  .openapi('JobRead')

const JobValidationLayoutReadSchema = z
  .object({
    honeypot_count: z.int().min(0).exactOptional(),
    honeypot_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({ description: 'The list of frame ids for honeypots in the job\n' }),
    honeypot_real_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({
        description: 'The list of real (validation) frame ids for honeypots in the job\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('JobValidationLayoutRead')

const ReplicaJobCreateTypeEnumSchema = z
  .literal('replica')
  .openapi({ description: '* `replica` - REPLICA' })
  .openapi('ReplicaJobCreateTypeEnum')

const ReplicaJobCreateRequestSchema = z
  .object({
    assignee: z.int().nullable().exactOptional(),
    type: ReplicaJobCreateTypeEnumSchema,
    task_id: z.int(),
    parent_job_id: z.int(),
  })
  .openapi({ required: ['parent_job_id', 'task_id', 'type'] })
  .openapi('ReplicaJobCreateRequest')

const JobWriteRequestSchema = z
  .xor([GroundTruthJobCreateRequestSchema, ReplicaJobCreateRequestSchema])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        ground_truth: '#/components/schemas/GroundTruthJobCreateRequest',
        replica: '#/components/schemas/ReplicaJobCreateRequest',
      },
    },
  })
  .openapi('JobWriteRequest')

const JobsSummarySchema = z
  .object({
    count: z.int().default(0).exactOptional(),
    completed: z.int().nullable(),
    validation: z.int().nullable(),
    url: z.url().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['completed', 'validation'] })
  .openapi('JobsSummary')

const LabelTypeSchema = z
  .enum([
    'any',
    'cuboid',
    'ellipse',
    'mask',
    'points',
    'polygon',
    'polyline',
    'rectangle',
    'skeleton',
    'interval',
    'tag',
  ])
  .openapi({
    description:
      '* `any` - ANY\n* `cuboid` - CUBOID\n* `ellipse` - ELLIPSE\n* `mask` - MASK\n* `points` - POINTS\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `rectangle` - RECTANGLE\n* `skeleton` - SKELETON\n* `interval` - INTERVAL\n* `tag` - TAG',
  })
  .openapi('LabelType')

const SublabelSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(64),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hex value for the RGB color. Will be generated automatically, unless specified explicitly.',
      }),
    attributes: z
      .array(AttributeSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.',
      }),
    type: LabelTypeSchema.exactOptional().openapi({
      description:
        'Associated annotation type for this label\n\n* `any` - ANY\n* `cuboid` - CUBOID\n* `ellipse` - ELLIPSE\n* `mask` - MASK\n* `points` - POINTS\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `rectangle` - RECTANGLE\n* `skeleton` - SKELETON\n* `interval` - INTERVAL\n* `tag` - TAG',
    }),
    has_parent: z.boolean().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('Sublabel')

const LabelSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(64),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hex value for the RGB color. Will be generated automatically, unless specified explicitly.',
      }),
    attributes: z
      .array(AttributeSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.',
      }),
    type: LabelTypeSchema.exactOptional().openapi({
      description:
        'Associated annotation type for this label\n\n* `any` - ANY\n* `cuboid` - CUBOID\n* `ellipse` - ELLIPSE\n* `mask` - MASK\n* `points` - POINTS\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `rectangle` - RECTANGLE\n* `skeleton` - SKELETON\n* `interval` - INTERVAL\n* `tag` - TAG',
    }),
    svg: z.string().exactOptional(),
    sublabels: z.array(SublabelSchema).exactOptional(),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    parent_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    has_parent: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('Label')

const LabeledImageSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValSchema).default([]).exactOptional(),
  })
  .openapi({ required: ['frame', 'label_id'] })
  .openapi('LabeledImage')

const LabeledShapeSchema: z.ZodType<LabeledShapeType> = z
  .lazy(() =>
    z
      .object({
        type: ShapeTypeSchema,
        occluded: z.boolean().default(false).exactOptional(),
        outside: z.boolean().default(false).exactOptional(),
        z_order: z.int().default(0).exactOptional(),
        rotation: z.float64().min(0).max(360).default(0).exactOptional(),
        points: z.array(z.float64()).exactOptional(),
        id: z.int().nullable().exactOptional(),
        label_id: z.int().min(0),
        group: z.int().min(0).nullable().default(0).exactOptional(),
        source: z.string().default('manual').exactOptional(),
        frame: z.int().min(0),
        attributes: z.array(AttributeValSchema).default([]).exactOptional(),
        score: z.float64().min(0).max(1).default(1).exactOptional(),
        elements: z.array(SubLabeledShapeSchema).exactOptional(),
      })
      .openapi({ required: ['frame', 'label_id', 'type'] }),
  )
  .openapi('LabeledShape')

const LabeledTrackSchema: z.ZodType<LabeledTrackType> = z
  .lazy(() =>
    z
      .object({
        id: z.int().nullable().exactOptional(),
        label_id: z.int().min(0),
        group: z.int().min(0).nullable().default(0).exactOptional(),
        source: z.string().default('manual').exactOptional(),
        frame: z.int().min(0),
        attributes: z.array(AttributeValSchema).default([]).exactOptional(),
        shapes: z.array(TrackedShapeSchema),
        elements: z.array(SubLabeledTrackSchema).exactOptional(),
      })
      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
  )
  .openapi('LabeledTrack')

const LabeledIntervalSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().default('manual').exactOptional(),
    attributes: z.array(AttributeValSchema).default([]).exactOptional(),
    score: z.float64().min(0).max(1).default(1).exactOptional(),
    start: z.int().min(0).openapi({ description: 'Must be within the task frame bounds.' }),
    stop: z
      .int()
      .min(0)
      .nullable()
      .openapi({
        description: 'Exclusive interval end. May be one greater than the task stop frame.',
      }),
  })
  .openapi({ required: ['label_id', 'start', 'stop'] })
  .openapi('LabeledInterval')

const LabeledDataSchema = z
  .object({
    version: z.int().default(0).exactOptional(),
    tags: z.array(LabeledImageSchema).default([]).exactOptional(),
    shapes: z.array(LabeledShapeSchema).default([]).exactOptional(),
    tracks: z.array(LabeledTrackSchema).default([]).exactOptional(),
    intervals: z.array(LabeledIntervalSchema).default([]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LabeledData')

const LabeledImageRequestSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().min(1).default('manual').exactOptional(),
    frame: z.int().min(0),
    attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
  })
  .openapi({ required: ['frame', 'label_id'] })
  .openapi('LabeledImageRequest')

const LabeledShapeRequestSchema: z.ZodType<LabeledShapeRequestType> = z
  .lazy(() =>
    z
      .object({
        type: ShapeTypeSchema,
        occluded: z.boolean().default(false).exactOptional(),
        outside: z.boolean().default(false).exactOptional(),
        z_order: z.int().default(0).exactOptional(),
        rotation: z.float64().min(0).max(360).default(0).exactOptional(),
        points: z.array(z.float64()).exactOptional(),
        id: z.int().nullable().exactOptional(),
        label_id: z.int().min(0),
        group: z.int().min(0).nullable().default(0).exactOptional(),
        source: z.string().min(1).default('manual').exactOptional(),
        frame: z.int().min(0),
        attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
        score: z.float64().min(0).max(1).default(1).exactOptional(),
        elements: z.array(SubLabeledShapeRequestSchema).exactOptional(),
      })
      .openapi({ required: ['frame', 'label_id', 'type'] }),
  )
  .openapi('LabeledShapeRequest')

const LabeledTrackRequestSchema: z.ZodType<LabeledTrackRequestType> = z
  .lazy(() =>
    z
      .object({
        id: z.int().nullable().exactOptional(),
        label_id: z.int().min(0),
        group: z.int().min(0).nullable().default(0).exactOptional(),
        source: z.string().min(1).default('manual').exactOptional(),
        frame: z.int().min(0),
        attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
        shapes: z.array(TrackedShapeRequestSchema),
        elements: z.array(SubLabeledTrackRequestSchema).exactOptional(),
      })
      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
  )
  .openapi('LabeledTrackRequest')

const LabeledIntervalRequestSchema = z
  .object({
    id: z.int().nullable().exactOptional(),
    label_id: z.int().min(0),
    group: z.int().min(0).nullable().default(0).exactOptional(),
    source: z.string().min(1).default('manual').exactOptional(),
    attributes: z.array(AttributeValRequestSchema).default([]).exactOptional(),
    score: z.float64().min(0).max(1).default(1).exactOptional(),
    start: z.int().min(0).openapi({ description: 'Must be within the task frame bounds.' }),
    stop: z
      .int()
      .min(0)
      .nullable()
      .openapi({
        description: 'Exclusive interval end. May be one greater than the task stop frame.',
      }),
  })
  .openapi({ required: ['label_id', 'start', 'stop'] })
  .openapi('LabeledIntervalRequest')

const LabeledDataRequestSchema = z
  .object({
    version: z.int().default(0).exactOptional(),
    tags: z.array(LabeledImageRequestSchema).default([]).exactOptional(),
    shapes: z.array(LabeledShapeRequestSchema).default([]).exactOptional(),
    tracks: z.array(LabeledTrackRequestSchema).default([]).exactOptional(),
    intervals: z.array(LabeledIntervalRequestSchema).default([]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LabeledDataRequest')

const LoginSerializerExRequestSchema = z
  .object({
    username: z.string().exactOptional(),
    email: z.email().exactOptional(),
    password: z.string().min(1),
  })
  .openapi({ required: ['password'] })
  .openapi('LoginSerializerExRequest')

const MembershipReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    user: BasicUserSchema,
    organization: z.int().exactOptional().openapi({ readOnly: true }),
    is_active: z.boolean().exactOptional().openapi({ readOnly: true }),
    joined_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    role: RoleEnumSchema.exactOptional().openapi({ readOnly: true }),
    invitation: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['user'] })
  .openapi('MembershipRead')

const PlannedActivitiesEnumSchema = z
  .enum([
    'set_up_projects',
    'annotate_data',
    'review_quality',
    'manage_annotators',
    'connect_models',
    'evaluate_for_organization',
  ])
  .openapi({
    description:
      '* `set_up_projects` - set_up_projects\n* `annotate_data` - annotate_data\n* `review_quality` - review_quality\n* `manage_annotators` - manage_annotators\n* `connect_models` - connect_models\n* `evaluate_for_organization` - evaluate_for_organization',
  })
  .openapi('PlannedActivitiesEnum')

const UserSchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    username: z
      .string()
      .regex(/^[\w.@+-]+$/)
      .max(150)
      .openapi({
        description: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
      }),
    first_name: z.string().max(150).exactOptional(),
    last_name: z.string().max(150).exactOptional(),
    email: z.email().max(254).exactOptional().openapi({ title: 'Email address' }),
    groups: z.array(z.string()),
    is_staff: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Staff status',
        description: 'Designates whether the user can log into this admin site.',
      }),
    is_superuser: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Superuser status',
        description:
          'Designates that this user has all permissions without explicitly assigning them.',
      }),
    is_active: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Active',
        description:
          'Designates whether this user should be treated as active. Unselect this instead of deleting accounts.',
      }),
    last_login: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    date_joined: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    has_analytics_access: z.boolean().nullable().exactOptional().openapi({ readOnly: true }),
    cvat_usage_reason: z
      .xor([CvatUsageReasonEnumSchema, BlankEnumSchema])
      .exactOptional()
      .openapi({
        description:
          'The main reason the user uses CVAT.\n\n* `work_project` - work_project\n* `academic_research` - academic_research\n* `teaching_or_coursework` - teaching_or_coursework\n* `personal_project` - personal_project',
      }),
    primary_role: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'A predefined role code or custom role text.' }),
    planned_activities: z
      .array(PlannedActivitiesEnumSchema)
      .max(6)
      .exactOptional()
      .openapi({ description: 'Predefined activity codes selected by the user.' }),
    data_types: z
      .array(z.string().max(255))
      .max(6)
      .exactOptional()
      .openapi({ description: 'Predefined data type codes and optionally one custom value.' }),
    discovery_source: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'A predefined discovery source code or custom text.' }),
    email_verified: z.boolean().nullable().exactOptional().openapi({ readOnly: true }),
    created_via: z
      .xor([CreatedViaEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['groups', 'username'] })
  .openapi('User')

const MetaUserSchema = z.union([UserSchema, BasicUserSchema]).openapi('MetaUser')

const OnlineFunctionCallRequestSchema = z
  .object({ job: z.int().exactOptional(), task: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('OnlineFunctionCallRequest')

const OrganizationReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .exactOptional()
      .openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    contact: z.any().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable(),
  })
  .openapi({ required: ['owner'] })
  .openapi('OrganizationRead')

const OrganizationWriteRequestSchema = z
  .object({
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .max(16),
    name: z.string().max(64).exactOptional(),
    description: z.string().exactOptional(),
    contact: z.any().exactOptional(),
  })
  .openapi({ required: ['slug'] })
  .openapi('OrganizationWriteRequest')

const PaginatedAccessTokenReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(AccessTokenReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedAccessTokenReadList')

const PaginatedAnnotationConflictListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(AnnotationConflictSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedAnnotationConflictList')

const PaginatedCloudStorageReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(CloudStorageReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCloudStorageReadList')

const PaginatedCommentReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(CommentReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCommentReadList')

const PaginatedConsensusSettingsListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(ConsensusSettingsSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedConsensusSettingsList')

const PaginatedInvitationReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(InvitationReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedInvitationReadList')

const PaginatedIssueReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(IssueReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedIssueReadList')

const PaginatedJobReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(JobReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedJobReadList')

const PaginatedLabelListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(LabelSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLabelList')

const PaginatedMembershipReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(MembershipReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMembershipReadList')

const PaginatedMetaUserListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(MetaUserSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMetaUserList')

const PaginatedOrganizationReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(OrganizationReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedOrganizationReadList')

const TasksSummarySchema = z
  .object({
    count: z.int().default(0).exactOptional(),
    url: z.url().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TasksSummary')

const ProjectReadSchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional().openapi({ readOnly: true }),
    assignee: BasicUserSchema.nullable().exactOptional().openapi({ readOnly: true }),
    guide_id: z.int().nullable().exactOptional(),
    bug_tracker: z.string().exactOptional().openapi({ readOnly: true }),
    task_subsets: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    status: JobStatusSchema.exactOptional().openapi({ readOnly: true }),
    dimension: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    organization: z.int().nullable().exactOptional().openapi({ readOnly: true, deprecated: true }),
    organization_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    target_storage: StorageSchema.nullable().exactOptional().openapi({ readOnly: true }),
    source_storage: StorageSchema.nullable().exactOptional().openapi({ readOnly: true }),
    tasks: TasksSummarySchema,
    labels: LabelsSummarySchema,
    assignee_updated_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['labels', 'tasks'] })
  .openapi('ProjectRead')

const PaginatedProjectReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(ProjectReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedProjectReadList')

const QualityReportTargetSchema = z
  .enum(['job', 'task', 'project'])
  .openapi({ description: '* `job` - JOB\n* `task` - TASK\n* `project` - PROJECT' })
  .openapi('QualityReportTarget')

const QualityReportTasksSummarySchema = z
  .object({
    total: z.int().openapi({ description: 'Total task count' }),
    custom: z.int().openapi({ description: 'Tasks with individual settings' }),
    not_configured: z.int().openapi({ description: 'Tasks with validation not configured' }),
    excluded: z.int().openapi({ description: 'Tasks excluded by filters' }),
    included: z
      .int()
      .openapi({ description: 'Included task count = total - custom - non_configured - excluded' }),
    completed: z.int().openapi({ description: 'Tasks with all enabled requirements met' }),
  })
  .openapi({ required: ['completed', 'custom', 'excluded', 'included', 'not_configured', 'total'] })
  .openapi('QualityReportTasksSummary')

const QualityReportJobsSummarySchema = z
  .object({
    total: z.int().openapi({ description: 'Non-GT jobs in included tasks' }),
    excluded: z.int().openapi({ description: 'Jobs excluded by filters' }),
    not_checkable: z.int().openapi({ description: 'Included jobs without validation frames' }),
    included: z.int().openapi({ description: 'Included job count = total - excluded' }),
    completed: z.int().openapi({ description: 'Jobs with all enabled requirements met' }),
  })
  .openapi({ required: ['completed', 'excluded', 'included', 'not_checkable', 'total'] })
  .openapi('QualityReportJobsSummary')

const QualityReportScoreComponentsSchema = z
  .object({ valid_count: z.int(), missing_count: z.int(), extra_count: z.int() })
  .openapi({ required: ['extra_count', 'missing_count', 'valid_count'] })
  .openapi('QualityReportScoreComponents')

const QualityReportRequirementCalculationStatusEnumSchema = z
  .enum(['computed', 'not_computed'])
  .openapi({ description: '* `computed` - computed\n* `not_computed` - not_computed' })
  .openapi('QualityReportRequirementCalculationStatusEnum')

const ReasonEnumSchema = z
  .enum(['no_annotations', 'filter_no_matches', 'required_attributes_missing'])
  .openapi({
    description:
      '* `no_annotations` - no_annotations\n* `filter_no_matches` - filter_no_matches\n* `required_attributes_missing` - required_attributes_missing',
  })
  .openapi('ReasonEnum')

const QualityReportRequirementCalculationSchema = z
  .object({
    status: QualityReportRequirementCalculationStatusEnumSchema,
    reason: z.xor([ReasonEnumSchema, NullEnumSchema]).nullable().exactOptional(),
  })
  .openapi({ required: ['status'] })
  .openapi('QualityReportRequirementCalculation')

const QualityReportRequirementSummaryItemSchema = z
  .object({
    requirement_id: z.int().nullable(),
    name: z.string(),
    metric: QualityTargetMetricSchema,
    score: z.float64().nullable(),
    score_components: QualityReportScoreComponentsSchema,
    calculation: QualityReportRequirementCalculationSchema,
    threshold: z.float64(),
  })
  .openapi({
    required: [
      'calculation',
      'metric',
      'name',
      'requirement_id',
      'score',
      'score_components',
      'threshold',
    ],
  })
  .openapi('QualityReportRequirementSummaryItem')

const QualityReportRequirementsSummarySchema = z
  .object({
    total: z.int(),
    enabled: z.int(),
    completed: z.int(),
    not_computed: z.int(),
    items: z.array(QualityReportRequirementSummaryItemSchema),
  })
  .openapi({ required: ['completed', 'enabled', 'items', 'not_computed', 'total'] })
  .openapi('QualityReportRequirementsSummary')

const QualityReportSummarySchema = z
  .object({
    total_frames: z.int(),
    validation_frames: z.int(),
    validation_frame_share: z.float64(),
    conflict_count: z.int(),
    error_count: z.int(),
    conflicts_by_type: z.record(z.string(), z.int()),
    tasks: QualityReportTasksSummarySchema.exactOptional().openapi({
      description: 'Included only in project reports',
    }),
    jobs: QualityReportJobsSummarySchema.exactOptional().openapi({
      description: 'Included only in task and project reports',
    }),
    requirements: QualityReportRequirementsSummarySchema.exactOptional(),
  })
  .openapi({
    required: [
      'conflict_count',
      'conflicts_by_type',
      'error_count',
      'total_frames',
      'validation_frame_share',
      'validation_frames',
    ],
  })
  .openapi('QualityReportSummary')

const QualityReportSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    job_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    parent_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    target: QualityReportTargetSchema,
    summary: QualityReportSummarySchema,
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    target_last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    gt_last_updated: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    assignee: BasicUserSchema.nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['summary', 'target'] })
  .openapi('QualityReport')

const PaginatedQualityReportListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(QualityReportSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedQualityReportList')

const ThresholdPolicyPointSchema = z
  .object({
    x: z
      .float64()
      .min(0)
      .openapi({ description: 'Finite GT shape area in px², strictly greater than zero.' }),
    y: z.float64().min(0).max(1),
  })
  .openapi({ required: ['x', 'y'] })
  .openapi('ThresholdPolicyPoint')

const SimilarityThresholdPolicySchema = z
  .object({
    type: SimilarityThresholdPolicyTypeEnumSchema.exactOptional().openapi({
      description:
        'Threshold type. Omitted type is accepted as IoU for compatibility; responses always include it.\n\n* `iou` - iou',
    }),
    mode: SimilarityThresholdPolicyModeEnumSchema,
    value: z.float64().min(0).max(1).exactOptional(),
    input: InputEnumSchema.exactOptional(),
    extrapolation: ExtrapolationEnumSchema.exactOptional(),
    points: z
      .array(ThresholdPolicyPointSchema)
      .exactOptional()
      .openapi({
        description: 'Required in linear mode: 2-200 points sorted by unique positive GT area.',
      }),
  })
  .openapi({
    description:
      'An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.\n\nThe `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.\nExisting numeric thresholds are returned as numbers.\n\nA constant policy uses one threshold for all shapes:\n\n```json\n{"type": "iou", "mode": "constant", "value": 0.7}\n```\n\nA linear policy chooses a threshold from the GT shape area in px²:\n\n```json\n{\n  "type": "iou",\n  "mode": "linear",\n  "input": "gt.shape_area",\n  "extrapolation": "clamp",\n  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]\n}\n```\n\nLinear policies require 2-200 points with unique positive areas sorted in ascending order\nand thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.\nPolicies without `type` are accepted as IoU for compatibility; responses include it.\nOther threshold types are not supported.\n\nSetting a child\'s threshold to `null` restores inheritance of the whole threshold.\nRoot requirements cannot inherit their threshold.',
    required: ['mode'],
  })
  .openapi('SimilarityThresholdPolicy')

const QualityRequirementListItemSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    settings_id: z.int().exactOptional(),
    task_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    name: z.string().max(250).exactOptional(),
    is_base: z.boolean().exactOptional().openapi({ readOnly: true }),
    sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
    filter: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    annotation_type: z
      .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional(),
    metric: z
      .xor([QualityTargetMetricSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
      }),
    required_score: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines the minimal quality requirements in terms of the selected target metric.',
      }),
    parent_requirement: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent requirement. Child requirements inherit comparison settings from it.',
      }),
    iou_threshold: z
      .xor([z.number().min(0).max(1), SimilarityThresholdPolicySchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
      }),
    point_size: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
      }),
    point_size_base: z
      .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
      }),
    line_thickness: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
      }),
    match_orientation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enables or disables polyline orientation comparison' }),
    line_orientation_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
      }),
    match_groups: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
      }),
    group_match_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
      }),
    check_covered_annotations: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check for partially-covered annotations, useful in segmentation tasks\n',
      }),
    object_visibility_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
      }),
    panoptic_comparison: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use only the visible part of the masks and polygons in comparisons\n',
      }),
    attribute_comparison: AttributeComparisonSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
      }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('QualityRequirementListItem')

const PaginatedQualityRequirementListItemListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(QualityRequirementListItemSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedQualityRequirementListItemList')

const QualitySettingsSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    task_id: z.int().nullable().exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    job_filter: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "A JSON-based logic expression used to filter jobs for quality validation.\nThe filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']\n",
      }),
    inherit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow using project settings when computing task quality.\nOnly applicable to task quality settings inside projects\n',
      }),
    max_validations_per_job: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of job validation attempts for the job assignee.\nThe job can be automatically accepted if the job quality is above the required\nthreshold, defined by the target threshold parameter.\n',
      }),
    requirements: z.array(QualityRequirementListItemSchema).exactOptional(),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('QualitySettings')

const PaginatedQualitySettingsListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(QualitySettingsSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedQualitySettingsList')

const RequestStatusSchema = z
  .enum(['queued', 'started', 'failed', 'finished'])
  .openapi({
    description:
      '* `queued` - Queued\n* `started` - Started\n* `failed` - Failed\n* `finished` - Finished',
  })
  .openapi('RequestStatus')

const RequestDataOperationSchema = z
  .object({
    type: z.string(),
    target: z.string(),
    project_id: z.int().nullable().exactOptional(),
    task_id: z.int().nullable().exactOptional(),
    job_id: z.int().nullable().exactOptional(),
    org_id: z.int().nullable().exactOptional(),
    format: z.string().nullable().exactOptional(),
    function_id: z.string().nullable().exactOptional(),
    lightweight: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: ['target', 'type'] })
  .openapi('RequestDataOperation')

const UserIdentifiersSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    username: z
      .string()
      .regex(/^[\w.@+-]+$/)
      .max(150)
      .openapi({
        description: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
      }),
  })
  .openapi({ required: ['username'] })
  .openapi('UserIdentifiers')

const RequestSchema = z
  .object({
    status: RequestStatusSchema,
    message: z.string().exactOptional().openapi({ readOnly: true }),
    id: z.string(),
    operation: RequestDataOperationSchema,
    progress: z.float64().min(0).max(1).nullable().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }),
    started_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    finished_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    expiry_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    owner: UserIdentifiersSchema.exactOptional().openapi({ readOnly: true }),
    result_url: z.url().nullable().exactOptional(),
    result_id: z.int().nullable().exactOptional(),
  })
  .openapi({ required: ['created_date', 'id', 'operation', 'status'] })
  .openapi('Request')

const PaginatedRequestListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(RequestSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedRequestList')

const TaskReadSchema = z
  .object({
    url: z.url().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional(),
    project_name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional(),
    assignee: BasicUserSchema.nullable().exactOptional(),
    bug_tracker: z.string().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    overlap: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    segment_size: z.int().exactOptional().openapi({ readOnly: true }),
    initial_replicas: z.int().exactOptional().openapi({ readOnly: true }),
    status: JobStatusSchema.exactOptional().openapi({ readOnly: true }),
    data_chunk_size: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    data_original_chunk_type: ChunkTypeSchema.exactOptional().openapi({ readOnly: true }),
    data_compressed_chunk_type: ChunkTypeSchema.exactOptional().openapi({ readOnly: true }),
    data_cloud_storage_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    guide_id: z.int().nullable().exactOptional(),
    size: z.int().min(0).max(2147483647).exactOptional().openapi({ readOnly: true }),
    image_quality: z.int().min(0).max(32767).exactOptional().openapi({ readOnly: true }),
    data: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    dimension: z.string().exactOptional().openapi({ readOnly: true }),
    mode: z.string().exactOptional().openapi({ readOnly: true }),
    media_type: z.string().exactOptional().openapi({ readOnly: true }),
    subset: z.string().exactOptional().openapi({ readOnly: true }),
    organization_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    organization: z.int().nullable().exactOptional().openapi({ readOnly: true, deprecated: true }),
    target_storage: StorageSchema.nullable().exactOptional(),
    source_storage: StorageSchema.nullable().exactOptional(),
    jobs: JobsSummarySchema,
    labels: LabelsSummarySchema,
    assignee_updated_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    validation_mode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Describes how the task validation is performed. Configured at task creation',
      }),
  })
  .openapi({ required: ['jobs', 'labels'] })
  .openapi('TaskRead')

const PaginatedTaskReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(TaskReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedTaskReadList')

const UserGrowthDataSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.exactOptional().openapi({ readOnly: true }),
    github_prompt_shown: z.boolean().exactOptional(),
    github_prompt_support_clicked: z.boolean().exactOptional(),
    github_prompt_enabled: z.boolean().exactOptional().openapi({ readOnly: true }),
    promotion_notifications_allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserGrowthData')

const PaginatedUserGrowthDataListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(UserGrowthDataSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedUserGrowthDataList')

const WebhookDeliveryReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    webhook_id: z.int().exactOptional().openapi({ readOnly: true }),
    event: z.string().exactOptional().openapi({ readOnly: true }),
    status_code: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    redelivery: z.boolean().exactOptional().openapi({ readOnly: true }),
    attempt: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    request_duration: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    changed_fields: z.string().exactOptional().openapi({ readOnly: true, deprecated: true }),
    request: z.any().exactOptional().openapi({ readOnly: true }),
    response: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('WebhookDeliveryRead')

const PaginatedWebhookDeliveryReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(WebhookDeliveryReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedWebhookDeliveryReadList')

const WebhookTypeSchema = z
  .enum(['organization', 'project', 'server'])
  .openapi({
    description: '* `organization` - ORGANIZATION\n* `project` - PROJECT\n* `server` - SERVER',
  })
  .openapi('WebhookType')

const WebhookContentTypeSchema = z
  .literal('application/json')
  .openapi({ description: '* `application/json` - JSON' })
  .openapi('WebhookContentType')

const WebhookReadSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    url: z.url().exactOptional().openapi({ readOnly: true }),
    target_url: z.url().exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    type: WebhookTypeSchema,
    content_type: WebhookContentTypeSchema,
    is_active: z.boolean().exactOptional().openapi({ readOnly: true }),
    enable_ssl: z.boolean().exactOptional().openapi({ readOnly: true }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    owner: BasicUserSchema.nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional(),
    organization: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    events: z.array(EventsEnumSchema).exactOptional().openapi({ readOnly: true }),
    last_status: z.int().exactOptional().openapi({ readOnly: true }),
    last_delivery_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['content_type', 'type'] })
  .openapi('WebhookRead')

const PaginatedWebhookReadListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=4' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?page=2' }),
    results: z.array(WebhookReadSchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedWebhookReadList')

const PasswordChangeRequestSchema = z
  .object({
    old_password: z.string().min(1).openapi({ writeOnly: true }),
    new_password1: z.string().min(8).max(256).openapi({ writeOnly: true }),
    new_password2: z.string().min(8).max(256).openapi({ writeOnly: true }),
  })
  .openapi({ required: ['new_password1', 'new_password2', 'old_password'] })
  .openapi('PasswordChangeRequest')

const PasswordResetConfirmRequestSchema = z
  .object({
    new_password1: z.string().min(8).max(256).openapi({ writeOnly: true }),
    new_password2: z.string().min(8).max(256).openapi({ writeOnly: true }),
    uid: z.string().min(1),
    token: z.string().min(1),
  })
  .openapi({
    description: 'Serializer for confirming a password reset attempt.',
    required: ['new_password1', 'new_password2', 'token', 'uid'],
  })
  .openapi('PasswordResetConfirmRequest')

const PasswordResetSerializerExRequestSchema = z
  .object({ email: z.email().min(1) })
  .openapi({
    description: 'Serializer for requesting a password reset e-mail.',
    required: ['email'],
  })
  .openapi('PasswordResetSerializerExRequest')

const PatchedAccessTokenWriteRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: "A free-form name for the token. Doesn't have to be unique" }),
    expiry_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Expires',
        description:
          'Once the token expires, clients cannot use it anymore.\nIf not set, the token will not expire.\n',
      }),
    read_only: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedAccessTokenWriteRequest')

const PatchedAnnotationGuideWriteRequestSchema = z
  .object({
    task_id: z.int().nullable().exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    markdown: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedAnnotationGuideWriteRequest')

const PatchedCloudStorageWriteRequestSchema = z
  .object({
    provider_type: ProviderTypeEnumSchema.exactOptional(),
    resource: z.string().min(1).max(222).exactOptional(),
    display_name: z.string().min(1).max(63).exactOptional(),
    owner: BasicUserRequestSchema.exactOptional(),
    credentials_type: CredentialsTypeEnumSchema.exactOptional(),
    session_token: z.string().max(440).exactOptional(),
    account_name: z.string().max(24).exactOptional(),
    key: z.string().max(40).exactOptional(),
    secret_key: z.string().max(64).exactOptional(),
    connection_string: z.string().max(1024).exactOptional(),
    key_file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
    specific_attributes: z.string().max(1024).exactOptional(),
    description: z.string().exactOptional(),
    manifests: z.array(z.string().min(1).max(1024)).default([]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedCloudStorageWriteRequest')

const PatchedCommentWriteRequestSchema = z
  .object({ message: z.string().min(1).exactOptional() })
  .openapi({ required: [] })
  .openapi('PatchedCommentWriteRequest')

const PatchedConsensusSettingsRequestSchema = z
  .object({
    iou_threshold: z
      .float64()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Pairwise annotation matching IoU threshold' }),
  })
  .openapi({ required: [] })
  .openapi('PatchedConsensusSettingsRequest')

const PatchedDataMetaWriteRequestSchema = z
  .object({
    deleted_frames: z.array(z.int().min(0)).exactOptional(),
    cloud_storage_id: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedDataMetaWriteRequest')

const PatchedIssueWriteRequestSchema = z
  .object({
    position: z.array(z.float64()).exactOptional(),
    assignee: z.int().nullable().exactOptional(),
    resolved: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedIssueWriteRequest')

const PatchedJobDataMetaWriteRequestSchema = z
  .object({ deleted_frames: z.array(z.int().min(0)).exactOptional() })
  .openapi({ required: [] })
  .openapi('PatchedJobDataMetaWriteRequest')

const PatchedJobValidationLayoutWriteRequestSchema = z
  .object({
    frame_selection_method: FrameSelectionMethodSchema.exactOptional().openapi({
      description:
        'The method to use for frame selection of new real frames for honeypots in the job\n\n\n* `random_uniform` - RANDOM_UNIFORM\n* `random_per_job` - RANDOM_PER_JOB\n* `manual` - MANUAL',
    }),
    honeypot_real_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({
        description:
          'The list of frame ids. Applicable only to the "manual" frame selection method\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchedJobValidationLayoutWriteRequest')

const PatchedJobWriteRequestSchema = z
  .object({
    assignee: z.int().nullable().exactOptional(),
    stage: JobStageSchema.exactOptional(),
    state: OperationStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedJobWriteRequest')

const SublabelRequestSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().min(1).max(64),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hex value for the RGB color. Will be generated automatically, unless specified explicitly.',
      }),
    attributes: z
      .array(AttributeRequestSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.',
      }),
    type: LabelTypeSchema.exactOptional().openapi({
      description:
        'Associated annotation type for this label\n\n* `any` - ANY\n* `cuboid` - CUBOID\n* `ellipse` - ELLIPSE\n* `mask` - MASK\n* `points` - POINTS\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `rectangle` - RECTANGLE\n* `skeleton` - SKELETON\n* `interval` - INTERVAL\n* `tag` - TAG',
    }),
    has_parent: z.boolean().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SublabelRequest')

const PatchedLabelRequestSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().min(1).max(64).exactOptional(),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hex value for the RGB color. Will be generated automatically, unless specified explicitly.',
      }),
    attributes: z
      .array(AttributeRequestSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Delete the label. Only applicable in the PATCH methods of a project or a task.',
      }),
    type: LabelTypeSchema.exactOptional().openapi({
      description:
        'Associated annotation type for this label\n\n* `any` - ANY\n* `cuboid` - CUBOID\n* `ellipse` - ELLIPSE\n* `mask` - MASK\n* `points` - POINTS\n* `polygon` - POLYGON\n* `polyline` - POLYLINE\n* `rectangle` - RECTANGLE\n* `skeleton` - SKELETON\n* `interval` - INTERVAL\n* `tag` - TAG',
    }),
    svg: z.string().exactOptional(),
    sublabels: z.array(SublabelRequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedLabelRequest')

const PatchedLabeledDataRequestSchema = z
  .object({
    version: z.int().default(0).exactOptional(),
    tags: z.array(LabeledImageRequestSchema).default([]).exactOptional(),
    shapes: z.array(LabeledShapeRequestSchema).default([]).exactOptional(),
    tracks: z.array(LabeledTrackRequestSchema).default([]).exactOptional(),
    intervals: z.array(LabeledIntervalRequestSchema).default([]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedLabeledDataRequest')

const PatchedMembershipWriteRequestSchema = z
  .object({ role: RoleEnumSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PatchedMembershipWriteRequest')

const PatchedOrganizationWriteRequestSchema = z
  .object({
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .max(16)
      .exactOptional(),
    name: z.string().max(64).exactOptional(),
    description: z.string().exactOptional(),
    contact: z.any().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedOrganizationWriteRequest')

const StorageRequestSchema = z
  .object({
    location: LocationEnumSchema.exactOptional(),
    cloud_storage_id: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StorageRequest')

const PatchedProjectWriteRequestSchema = z
  .object({
    name: z.string().min(1).max(256).exactOptional(),
    labels: z
      .array(PatchedLabelRequestSchema)
      .default([])
      .exactOptional()
      .openapi({ writeOnly: true }),
    owner_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    assignee_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    bug_tracker: z.string().max(2000).exactOptional(),
    target_storage: StorageRequestSchema.exactOptional().openapi({ writeOnly: true }),
    source_storage: StorageRequestSchema.exactOptional().openapi({ writeOnly: true }),
    organization_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('PatchedProjectWriteRequest')

const PatchedQualityRequirementRequestSchema = z
  .object({
    settings_id: z.int().exactOptional(),
    name: z.string().min(1).max(250).exactOptional(),
    sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
    filter: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    annotation_type: z
      .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional(),
    metric: z
      .xor([QualityTargetMetricSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
      }),
    required_score: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines the minimal quality requirements in terms of the selected target metric.',
      }),
    parent_requirement: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent requirement. Child requirements inherit comparison settings from it.',
      }),
    iou_threshold: z
      .xor([z.number().min(0).max(1), SimilarityThresholdPolicyRequestSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
      }),
    point_size: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
      }),
    point_size_base: z
      .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
      }),
    line_thickness: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
      }),
    match_orientation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enables or disables polyline orientation comparison' }),
    line_orientation_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
      }),
    match_groups: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
      }),
    group_match_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
      }),
    check_covered_annotations: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check for partially-covered annotations, useful in segmentation tasks\n',
      }),
    object_visibility_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
      }),
    panoptic_comparison: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use only the visible part of the masks and polygons in comparisons\n',
      }),
    attribute_comparison: AttributeComparisonRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchedQualityRequirementRequest')

const QualityRequirementListItemRequestSchema = z
  .object({
    settings_id: z.int().exactOptional(),
    name: z.string().min(1).max(250).exactOptional(),
    sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
    filter: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    annotation_type: z
      .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional(),
    metric: z
      .xor([QualityTargetMetricSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
      }),
    required_score: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines the minimal quality requirements in terms of the selected target metric.',
      }),
    parent_requirement: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent requirement. Child requirements inherit comparison settings from it.',
      }),
    iou_threshold: z
      .xor([z.number().min(0).max(1), SimilarityThresholdPolicyRequestSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
      }),
    point_size: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
      }),
    point_size_base: z
      .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
      }),
    line_thickness: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
      }),
    match_orientation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enables or disables polyline orientation comparison' }),
    line_orientation_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
      }),
    match_groups: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
      }),
    group_match_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
      }),
    check_covered_annotations: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check for partially-covered annotations, useful in segmentation tasks\n',
      }),
    object_visibility_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
      }),
    panoptic_comparison: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use only the visible part of the masks and polygons in comparisons\n',
      }),
    attribute_comparison: AttributeComparisonRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
      }),
  })
  .openapi({ required: [] })
  .openapi('QualityRequirementListItemRequest')

const PatchedQualitySettingsRequestSchema = z
  .object({
    job_filter: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "A JSON-based logic expression used to filter jobs for quality validation.\nThe filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']\n",
      }),
    inherit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow using project settings when computing task quality.\nOnly applicable to task quality settings inside projects\n',
      }),
    max_validations_per_job: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of job validation attempts for the job assignee.\nThe job can be automatically accepted if the job quality is above the required\nthreshold, defined by the target threshold parameter.\n',
      }),
    requirements: z.array(QualityRequirementListItemRequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedQualitySettingsRequest')

const PatchedTaskValidationLayoutWriteRequestSchema = z
  .object({
    disabled_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({ description: 'The list of frame ids to be excluded from validation\n' }),
    frame_selection_method: FrameSelectionMethodSchema.exactOptional().openapi({
      description:
        'The method to use for frame selection of new real frames for honeypots in the task\n\n\n* `random_uniform` - RANDOM_UNIFORM\n* `random_per_job` - RANDOM_PER_JOB\n* `manual` - MANUAL',
    }),
    honeypot_real_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({
        description:
          'The list of frame ids. Applicable only to the "manual" frame selection method\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchedTaskValidationLayoutWriteRequest')

const PatchedTaskWriteRequestSchema = z
  .object({
    name: z.string().min(1).max(256).exactOptional(),
    project_id: z.int().nullable().exactOptional(),
    owner_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    assignee_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    bug_tracker: z.string().max(2000).exactOptional(),
    labels: z.array(PatchedLabelRequestSchema).exactOptional(),
    subset: z.string().max(64).exactOptional(),
    target_storage: StorageRequestSchema.exactOptional(),
    source_storage: StorageRequestSchema.exactOptional(),
    organization_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('PatchedTaskWriteRequest')

const PatchedUserGrowthDataRequestSchema = z
  .object({
    github_prompt_shown: z.boolean().exactOptional(),
    github_prompt_support_clicked: z.boolean().exactOptional(),
    promotion_notifications_allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchedUserGrowthDataRequest')

const PatchedUserRequestSchema = z
  .object({
    username: z
      .string()
      .regex(/^[\w.@+-]+$/)
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({
        description: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
      }),
    first_name: z.string().max(150).exactOptional(),
    last_name: z.string().max(150).exactOptional(),
    email: z.email().max(254).exactOptional().openapi({ title: 'Email address' }),
    groups: z.array(z.string().min(1)).exactOptional(),
    is_staff: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Staff status',
        description: 'Designates whether the user can log into this admin site.',
      }),
    is_superuser: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Superuser status',
        description:
          'Designates that this user has all permissions without explicitly assigning them.',
      }),
    is_active: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Active',
        description:
          'Designates whether this user should be treated as active. Unselect this instead of deleting accounts.',
      }),
    cvat_usage_reason: z
      .xor([CvatUsageReasonEnumSchema, BlankEnumSchema])
      .exactOptional()
      .openapi({
        description:
          'The main reason the user uses CVAT.\n\n* `work_project` - work_project\n* `academic_research` - academic_research\n* `teaching_or_coursework` - teaching_or_coursework\n* `personal_project` - personal_project',
      }),
    primary_role: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'A predefined role code or custom role text.' }),
    planned_activities: z
      .array(PlannedActivitiesEnumSchema)
      .max(6)
      .exactOptional()
      .openapi({ description: 'Predefined activity codes selected by the user.' }),
    data_types: z
      .array(z.string().min(1).max(255))
      .max(6)
      .exactOptional()
      .openapi({ description: 'Predefined data type codes and optionally one custom value.' }),
    discovery_source: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'A predefined discovery source code or custom text.' }),
  })
  .openapi({ required: [] })
  .openapi('PatchedUserRequest')

const PatchedWebhookWriteRequestSchema = z
  .object({
    target_url: z.url().min(1).max(8192).exactOptional(),
    description: z.string().max(128).exactOptional(),
    content_type: WebhookContentTypeSchema.exactOptional(),
    secret: z.string().max(64).exactOptional(),
    is_active: z.boolean().exactOptional(),
    enable_ssl: z.boolean().exactOptional(),
    events: z.array(EventsEnumSchema).exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('PatchedWebhookWriteRequest')

const PluginsSchema = z
  .object({ ANALYTICS: z.boolean(), MODELS: z.boolean() })
  .openapi({ required: ['ANALYTICS', 'MODELS'] })
  .openapi('Plugins')

const ProjectFileRequestSchema = z
  .object({ project_file: z.file().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: ['project_file'] })
  .openapi('ProjectFileRequest')

const ProjectWriteRequestSchema = z
  .object({
    name: z.string().min(1).max(256),
    labels: z
      .array(PatchedLabelRequestSchema)
      .default([])
      .exactOptional()
      .openapi({ writeOnly: true }),
    owner_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    assignee_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    bug_tracker: z.string().max(2000).exactOptional(),
    target_storage: StorageRequestSchema.exactOptional().openapi({ writeOnly: true }),
    source_storage: StorageRequestSchema.exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectWriteRequest')

const QualityReportConfusionMatrixAxesSchema = z
  .object({ cols: z.string(), rows: z.string() })
  .openapi({ required: ['cols', 'rows'] })
  .openapi('QualityReportConfusionMatrixAxes')

const QualityReportTargetMetricSummaryMetricEnumSchema = z
  .enum(['accuracy', 'precision', 'recall', 'jaccard_index', 'dice'])
  .openapi({
    description:
      '* `accuracy` - accuracy\n* `precision` - precision\n* `recall` - recall\n* `jaccard_index` - jaccard_index\n* `dice` - dice',
  })
  .openapi('QualityReportTargetMetricSummaryMetricEnum')

const QualityReportTargetMetricValuesSchema = z
  .object({
    micro: z.float64().nullable(),
    mean: z.float64().nullable(),
    label: z.float64().nullable(),
  })
  .openapi({ required: ['label', 'mean', 'micro'] })
  .openapi('QualityReportTargetMetricValues')

const QualityReportTargetMetricSummarySchema = z
  .object({
    metric: QualityReportTargetMetricSummaryMetricEnumSchema,
    aggregation: AggregationEnumSchema,
    values: QualityReportTargetMetricValuesSchema,
    worst_labels: z.array(z.string()),
  })
  .openapi({ required: ['aggregation', 'metric', 'values', 'worst_labels'] })
  .openapi('QualityReportTargetMetricSummary')

const QualityReportConfusionMatrixSchema = z
  .object({
    labels: z.array(z.string()),
    rows: z.array(z.array(z.int())),
    axes: QualityReportConfusionMatrixAxesSchema,
    precision: z.array(z.float64()).nullable(),
    recall: z.array(z.float64()).nullable(),
    accuracy: z.array(z.float64()).nullable(),
    jaccard_index: z.array(z.float64()).nullable(),
    dice: z.array(z.float64()).nullable(),
    target_metric_summary: QualityReportTargetMetricSummarySchema,
  })
  .openapi({
    required: [
      'accuracy',
      'axes',
      'dice',
      'jaccard_index',
      'labels',
      'precision',
      'recall',
      'rows',
      'target_metric_summary',
    ],
  })
  .openapi('QualityReportConfusionMatrix')

const QualityReportCreateRequestSchema = z
  .object({
    task_id: z.int().exactOptional().openapi({ writeOnly: true }),
    project_id: z.int().exactOptional().openapi({ writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('QualityReportCreateRequest')

const QualityRequirementSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    settings_id: z.int().exactOptional(),
    task_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    project_id: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    name: z.string().max(250).exactOptional(),
    is_base: z.boolean().exactOptional().openapi({ readOnly: true }),
    sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
    filter: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    annotation_type: z
      .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional(),
    metric: z
      .xor([QualityTargetMetricSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
      }),
    required_score: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines the minimal quality requirements in terms of the selected target metric.',
      }),
    parent_requirement: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent requirement. Child requirements inherit comparison settings from it.',
      }),
    effective: z.object({}).exactOptional().openapi({ readOnly: true }),
    iou_threshold: z
      .xor([z.number().min(0).max(1), SimilarityThresholdPolicySchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
      }),
    point_size: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
      }),
    point_size_base: z
      .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
      }),
    line_thickness: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
      }),
    match_orientation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enables or disables polyline orientation comparison' }),
    line_orientation_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
      }),
    match_groups: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
      }),
    group_match_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
      }),
    check_covered_annotations: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check for partially-covered annotations, useful in segmentation tasks\n',
      }),
    object_visibility_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
      }),
    panoptic_comparison: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use only the visible part of the masks and polygons in comparisons\n',
      }),
    attribute_comparison: AttributeComparisonSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
      }),
    created_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('QualityRequirement')

const QualityRequirementBulkCreateNodeRequestSchema: z.ZodType<QualityRequirementBulkCreateNodeRequestType> =
  z
    .lazy(() =>
      z
        .object({
          name: z.string().min(1).max(250),
          sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
          filter: z.string().exactOptional(),
          enabled: z.boolean().exactOptional(),
          annotation_type: z
            .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
            .nullable()
            .exactOptional(),
          metric: z
            .xor([QualityTargetMetricSchema, NullEnumSchema])
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
            }),
          required_score: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Defines the minimal quality requirements in terms of the selected target metric.',
            }),
          parent_requirement: z
            .int()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Required for root requirements and forbidden for nested requirements. Must identify an existing requirement from the selected quality settings.',
            }),
          iou_threshold: z
            .xor([z.number().min(0).max(1), SimilarityThresholdPolicyRequestSchema])
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
            }),
          point_size: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
            }),
          point_size_base: z
            .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
            }),
          line_thickness: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
            }),
          match_orientation: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Enables or disables polyline orientation comparison' }),
          line_orientation_threshold: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
            }),
          match_groups: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
            }),
          group_match_threshold: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
            }),
          check_covered_annotations: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Check for partially-covered annotations, useful in segmentation tasks\n',
            }),
          object_visibility_threshold: z
            .float64()
            .min(0)
            .max(1)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
            }),
          panoptic_comparison: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Use only the visible part of the masks and polygons in comparisons\n',
            }),
          attribute_comparison: AttributeComparisonRequestSchema.nullable()
            .exactOptional()
            .openapi({
              description:
                'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
            }),
          children: z
            .array(QualityRequirementBulkCreateNodeRequestSchema)
            .exactOptional()
            .openapi({
              description:
                'Nested requirements to create. Their parent is determined by their position in the hierarchy.',
            }),
        })
        .openapi({ required: ['name'] }),
    )
    .openapi('QualityRequirementBulkCreateNodeRequest')

const QualityRequirementBulkCreateRequestSchema = z
  .object({
    settings_id: z.int(),
    requirements: z.array(QualityRequirementBulkCreateNodeRequestSchema),
  })
  .openapi({ required: ['requirements', 'settings_id'] })
  .openapi('QualityRequirementBulkCreateRequest')

const QualityRequirementRequestSchema = z
  .object({
    settings_id: z.int().exactOptional(),
    name: z.string().min(1).max(250).exactOptional(),
    sort_order: z.int().min(-2147483648).max(2147483647).exactOptional(),
    filter: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    annotation_type: z
      .xor([AnnotationTypeEnumSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional(),
    metric: z
      .xor([QualityTargetMetricSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The primary metric used for quality estimation\n\n* `accuracy` - ACCURACY\n* `precision` - PRECISION\n* `recall` - RECALL\n* `jaccard_index` - JACCARD_INDEX\n* `dice` - DICE\n* `mean_accuracy` - MEAN_ACCURACY\n* `mean_precision` - MEAN_PRECISION\n* `mean_recall` - MEAN_RECALL\n* `mean_jaccard_index` - MEAN_JACCARD_INDEX\n* `mean_dice` - MEAN_DICE\n* `label_accuracy` - LABEL_ACCURACY\n* `label_precision` - LABEL_PRECISION\n* `label_recall` - LABEL_RECALL\n* `label_jaccard_index` - LABEL_JACCARD_INDEX\n* `label_dice` - LABEL_DICE',
      }),
    required_score: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines the minimal quality requirements in terms of the selected target metric.',
      }),
    parent_requirement: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent requirement. Child requirements inherit comparison settings from it.',
      }),
    iou_threshold: z
      .xor([z.number().min(0).max(1), SimilarityThresholdPolicyRequestSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.',
      }),
    point_size: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The point "size" (the OKS sigma), as a fraction of the object size, defined by\nthe point size base. Corresponds to the standard deviation of the keypoint position.\nLarger values give larger areas around the GT points, where the checked points\nare accepted.\nRead more about the point matching in the documentation.',
      }),
    point_size_base: z
      .xor([QualityPointSizeBaseSchema, BlankEnumSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When comparing point annotations (including both separate points and point groups),\nthe point size parameter defines matching area for each GT point based to the\nobject size. The point size base parameter allows to configure how to determine\nthe object size.\nIf image_size, the image size is used. Useful if each point\nannotation represents a separate object or boxes grouped with points do not\nrepresent object boundaries.\nIf group_bbox_size, the object size is based on\nthe point group bbox size. Useful if each point group represents an object\nor there is a bbox grouped with points, representing the object size.\n\n\n* `image_size` - IMAGE_SIZE\n* `group_bbox_size` - GROUP_BBOX_SIZE',
      }),
    line_thickness: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Thickness of polylines, relatively to the (image area) ^ 0.5.\nThe distance to the boundary around the GT line,\ninside of which the checked line points should be\n',
      }),
    match_orientation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Enables or disables polyline orientation comparison' }),
    line_orientation_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The minimal gain in the GT IoU between the given and reversed line directions\nto consider the line inverted.\nOnly used when the 'match_orientation' parameter is true\n",
      }),
    match_groups: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.',
      }),
    group_match_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal IoU for groups to be considered matching.\nOnly used when the 'match_groups' parameter is true\n",
      }),
    check_covered_annotations: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check for partially-covered annotations, useful in segmentation tasks\n',
      }),
    object_visibility_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Minimal visible area percent of the spatial annotations (polygons, masks)\nfor reporting covered annotations.\nOnly used when the 'object_visibility_threshold' parameter is true\n",
      }),
    panoptic_comparison: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use only the visible part of the masks and polygons in comparisons\n',
      }),
    attribute_comparison: AttributeComparisonRequestSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.',
      }),
  })
  .openapi({ required: [] })
  .openapi('QualityRequirementRequest')

const QualitySettingsRequestSchema = z
  .object({
    job_filter: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "A JSON-based logic expression used to filter jobs for quality validation.\nThe filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']\n",
      }),
    inherit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow using project settings when computing task quality.\nOnly applicable to task quality settings inside projects\n',
      }),
    max_validations_per_job: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of job validation attempts for the job assignee.\nThe job can be automatically accepted if the job quality is above the required\nthreshold, defined by the target threshold parameter.\n',
      }),
    requirements: z.array(QualityRequirementListItemRequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QualitySettingsRequest')

const RegisterSerializerExSchema = z
  .object({
    username: z.string().min(5).max(150),
    email: z.email().max(254).exactOptional(),
    first_name: z.string().max(150).exactOptional(),
    last_name: z.string().max(150).exactOptional(),
    email_verification_required: z.boolean().exactOptional().openapi({ readOnly: true }),
    key: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['username'] })
  .openapi('RegisterSerializerEx')

const RegisterSerializerExRequestSchema = z
  .object({
    username: z.string().min(5).max(150),
    email: z.email().min(1).max(254).exactOptional(),
    password1: z.string().min(8).max(256).openapi({ writeOnly: true }),
    password2: z.string().min(8).max(256).openapi({ writeOnly: true }),
    first_name: z.string().min(1).max(150).exactOptional(),
    last_name: z.string().min(1).max(150).exactOptional(),
  })
  .openapi({ required: ['password1', 'password2', 'username'] })
  .openapi('RegisterSerializerExRequest')

const RestAuthDetailSchema = z
  .object({ detail: z.string().exactOptional().openapi({ readOnly: true }) })
  .openapi({ required: [] })
  .openapi('RestAuthDetail')

const RqStatusStateEnumSchema = z
  .enum(['Queued', 'Started', 'Finished', 'Failed'])
  .openapi({
    description:
      '* `Queued` - Queued\n* `Started` - Started\n* `Finished` - Finished\n* `Failed` - Failed',
  })
  .openapi('RqStatusStateEnum')

const RqStatusSchema = z
  .object({
    state: RqStatusStateEnumSchema,
    message: z.string().default('').exactOptional(),
    progress: z.float64().max(100).default(0).exactOptional(),
  })
  .openapi({ required: ['state'] })
  .openapi('RqStatus')

const TaskFileRequestSchema = z
  .object({ task_file: z.file().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: ['task_file'] })
  .openapi('TaskFileRequest')

const TaskValidationLayoutReadSchema = z
  .object({
    mode: z
      .xor([ValidationModeSchema, NullEnumSchema])
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    frames_per_job_count: z.int().nullable().exactOptional().openapi({ readOnly: true }),
    validation_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({ description: 'The list of frame ids to be used for validation\n' }),
    disabled_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({ description: 'The list of frame ids excluded from validation\n' }),
    honeypot_count: z.int().min(0).exactOptional(),
    honeypot_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({ description: 'The list of frame ids for all honeypots in the task\n' }),
    honeypot_real_frames: z
      .array(z.int().min(0))
      .exactOptional()
      .openapi({
        description: 'The list of real (validation) frame ids for all honeypots in the task\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaskValidationLayoutRead')

const TaskWriteRequestSchema = z
  .object({
    name: z.string().min(1).max(256),
    project_id: z.int().nullable().exactOptional(),
    owner_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    assignee_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    bug_tracker: z.string().max(2000).exactOptional(),
    overlap: z.int().min(0).max(2147483647).nullable().exactOptional(),
    segment_size: z.int().min(0).max(2147483647).exactOptional(),
    labels: z.array(PatchedLabelRequestSchema).exactOptional(),
    subset: z.string().max(64).exactOptional(),
    target_storage: StorageRequestSchema.exactOptional(),
    source_storage: StorageRequestSchema.exactOptional(),
    initial_replicas: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The number of replica jobs for each annotation job. Configured at task creation',
      }),
    consensus_replicas: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          "Deprecated. The number of replica jobs for each annotation job.\nUse 'initial_replicas' instead\n",
        deprecated: true,
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('TaskWriteRequest')

const TokenSchema = z
  .object({ key: z.string().max(40) })
  .openapi({ description: 'Serializer for Token model.', required: ['key'] })
  .openapi('Token')

const WebhookWriteRequestSchema = z
  .object({
    target_url: z.url().min(1).max(8192),
    description: z.string().max(128).exactOptional(),
    type: WebhookTypeSchema,
    content_type: WebhookContentTypeSchema.exactOptional(),
    secret: z.string().max(64).exactOptional(),
    is_active: z.boolean().exactOptional(),
    enable_ssl: z.boolean().exactOptional(),
    project_id: z.int().nullable().exactOptional().openapi({ writeOnly: true }),
    events: z.array(EventsEnumSchema).openapi({ writeOnly: true }),
  })
  .openapi({ required: ['events', 'target_url', 'type'] })
  .openapi('WebhookWriteRequest')

const AccessTokenAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    "To authenticate using an API Access token, you need to include\nthe 'Authentication' header with the 'Bearer ' prefix\n\nAn API Access token has to be issued in the user profile section of the UI or\nvia the /auth/access_tokens API before this authentication method can be used.\n",
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const CsrfAuthSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'csrftoken',
  description:
    "A CSRF protection token. Can be received in the 'csrftoken' cookie in the\nserver response on the /api/auth/login endpoint. The 'Origin' header\nmust also be specified in the request.\n",
}

const CsrfHeaderAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'X-CSRFToken',
  description:
    "A CSRF protection token. Can be received in the 'csrftoken' cookie in the\nserver response on the /api/auth/login endpoint. The 'Origin' header\nmust also be specified in the request.\n",
}

const SessionAuthSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'sessionid' }

const TokenAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description:
    'Deprecated.\n\nYou can obtain an API key (the token) from the server response on\nthe /api/auth/login/ endpoint.\n',
  'x-token-prefix': 'Token',
}

export const postApiAssetsRoute = createRoute({
  method: 'post',
  path: '/api/assets',
  tags: ['assets'],
  summary: 'Create an asset',
  operationId: 'assets_create',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              guide_id: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int(),
              ),
              file: z.file().openapi({ type: 'string', format: 'binary', writeOnly: true }),
            })
            .openapi({ required: ['file', 'guide_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/vnd.cvat+json': { schema: AssetReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiAssetsUuidRoute = createRoute({
  method: 'get',
  path: '/api/assets/{uuid}',
  tags: ['assets'],
  summary: 'Get an asset',
  operationId: 'assets_retrieve',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            schema: { type: 'string', format: 'uuid' },
            description: 'A UUID string identifying this asset.',
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Asset file' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiAssetsUuidRoute = createRoute({
  method: 'delete',
  path: '/api/assets/{uuid}',
  tags: ['assets'],
  summary: 'Delete an asset',
  operationId: 'assets_destroy',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            schema: { type: 'string', format: 'uuid' },
            description: 'A UUID string identifying this asset.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The asset has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiAuthAccessTokensRoute = createRoute({
  method: 'get',
  path: '/api/auth/access_tokens',
  tags: ['auth'],
  summary: 'List tokens',
  operationId: 'auth_list_access_tokens',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['created_date', 'expiry_date', 'id', 'last_used_date', 'name', 'read_only', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      read_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'read_only',
            in: 'query',
            description: 'A simple equality filter for the read_only field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['name']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['created_date', 'expiry_date', 'id', 'last_used_date', 'name', 'read_only', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedAccessTokenReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiAuthAccessTokensRoute = createRoute({
  method: 'post',
  path: '/api/auth/access_tokens',
  tags: ['auth'],
  summary: 'Create a token',
  operationId: 'auth_create_access_tokens',
  request: {
    body: {
      content: { 'application/json': { schema: AccessTokenWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AccessTokenReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiAuthAccessTokensIdRoute = createRoute({
  method: 'get',
  path: '/api/auth/access_tokens/{id}',
  tags: ['auth'],
  summary: 'Get token details',
  operationId: 'auth_retrieve_access_tokens',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this API Access Token.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AccessTokenReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiAuthAccessTokensIdRoute = createRoute({
  method: 'delete',
  path: '/api/auth/access_tokens/{id}',
  tags: ['auth'],
  summary: 'Revoke token',
  operationId: 'auth_destroy_access_tokens',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this API Access Token.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The token was successfully revoked' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiAuthAccessTokensIdRoute = createRoute({
  method: 'patch',
  path: '/api/auth/access_tokens/{id}',
  tags: ['auth'],
  summary: 'Update a token',
  operationId: 'auth_partial_update_access_tokens',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this API Access Token.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedAccessTokenWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AccessTokenReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiAuthAccessTokensSelfRoute = createRoute({
  method: 'get',
  path: '/api/auth/access_tokens/self',
  tags: ['auth'],
  summary: 'Get current token details',
  description:
    'Get details of the token used for the current request.\nThis endpoint is only allowed if the request is performed using an access token.\n',
  operationId: 'auth_retrieve_access_tokens_self',
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AccessTokenReadSchema } },
    },
  },
  security: [{ accessTokenAuth: [] }],
})

export const postApiAuthLoginRoute = createRoute({
  method: 'post',
  path: '/api/auth/login',
  tags: ['auth'],
  description:
    "Check the credentials and return the REST Token\nif the credentials are valid and authenticated.\nIf email verification is enabled and the user has the unverified email,\nan email with a confirmation link will be sent.\nCalls Django Auth login method to register User ID\nin Django session framework.\n\nAccept the following POST parameters: username, email, password\nReturn the REST Framework Token Object's key.",
  operationId: 'auth_create_login',
  request: {
    body: {
      content: { 'application/json': { schema: LoginSerializerExRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: TokenSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
    {},
  ],
})

export const postApiAuthLogoutRoute = createRoute({
  method: 'post',
  path: '/api/auth/logout',
  tags: ['auth'],
  description:
    'Calls Django logout method and delete the Token object\nassigned to the current User object.\n\nAccepts/Returns nothing.',
  operationId: 'auth_create_logout',
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: RestAuthDetailSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
    {},
  ],
})

export const postApiAuthPasswordChangeRoute = createRoute({
  method: 'post',
  path: '/api/auth/password/change',
  tags: ['auth'],
  description:
    'Calls Django Auth SetPasswordForm save method.\n\nAccepts the following POST parameters: new_password1, new_password2\nReturns the success/fail message.',
  operationId: 'auth_create_password_change',
  request: {
    body: {
      content: { 'application/json': { schema: PasswordChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: RestAuthDetailSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiAuthPasswordResetRoute = createRoute({
  method: 'post',
  path: '/api/auth/password/reset',
  tags: ['auth'],
  description:
    'Calls Django Auth PasswordResetForm save method.\n\nAccepts the following POST parameters: email\nReturns the success/fail message.',
  operationId: 'auth_create_password_reset',
  request: {
    body: {
      content: { 'application/json': { schema: PasswordResetSerializerExRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: RestAuthDetailSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
    {},
  ],
})

export const postApiAuthPasswordResetConfirmRoute = createRoute({
  method: 'post',
  path: '/api/auth/password/reset/confirm',
  tags: ['auth'],
  description:
    "Password reset e-mail link is confirmed, therefore\nthis resets the user's password.\n\nAccepts the following POST parameters: token, uid,\n    new_password1, new_password2\nReturns the success/fail message.",
  operationId: 'auth_create_password_reset_confirm',
  request: {
    body: {
      content: { 'application/json': { schema: PasswordResetConfirmRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: RestAuthDetailSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
    {},
  ],
})

export const postApiAuthRegisterRoute = createRoute({
  method: 'post',
  path: '/api/auth/register',
  tags: ['auth'],
  description:
    'Registers a new user.\n\nAccepts the following POST parameters: username, email, password1, password2.',
  operationId: 'auth_create_register',
  request: {
    body: {
      content: { 'application/json': { schema: RegisterSerializerExRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: RegisterSerializerExSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
    {},
  ],
})

export const getApiAuthRulesRoute = createRoute({
  method: 'get',
  path: '/api/auth/rules',
  tags: ['auth'],
  operationId: 'auth_retrieve_rules',
  responses: { 200: { description: 'No response body' } },
  security: [{}],
})

export const getApiCloudstoragesRoute = createRoute({
  method: 'get',
  path: '/api/cloudstorages',
  tags: ['cloudstorages'],
  summary: 'List cloud storages',
  operationId: 'cloudstorages_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      credentials_type: z
        .enum([
          'KEY_SECRET_KEY_PAIR',
          'ACCOUNT_NAME_TOKEN_PAIR',
          'KEY_FILE_PATH',
          'ANONYMOUS_ACCESS',
          'CONNECTION_STRING',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'credentials_type',
            in: 'query',
            description: 'A simple equality filter for the credentials_type field',
            schema: {
              type: 'string',
              enum: [
                'KEY_SECRET_KEY_PAIR',
                'ACCOUNT_NAME_TOKEN_PAIR',
                'KEY_FILE_PATH',
                'ANONYMOUS_ACCESS',
                'CONNECTION_STRING',
              ],
            },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['credentials_type', 'description', 'id', 'name', 'owner', 'provider_type', 'resource'].",
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      provider_type: z
        .enum(['AWS_S3_BUCKET', 'AZURE_CONTAINER', 'GOOGLE_CLOUD_STORAGE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'provider_type',
            in: 'query',
            description: 'A simple equality filter for the provider_type field',
            schema: {
              type: 'string',
              enum: ['AWS_S3_BUCKET', 'AZURE_CONTAINER', 'GOOGLE_CLOUD_STORAGE'],
            },
            required: false,
          },
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description: 'A simple equality filter for the resource field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description:
              "A search term. Available search_fields: ['description', 'name', 'owner', 'resource']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['credentials_type', 'description', 'id', 'name', 'owner', 'provider_type', 'resource']",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedCloudStorageReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiCloudstoragesRoute = createRoute({
  method: 'post',
  path: '/api/cloudstorages',
  tags: ['cloudstorages'],
  summary: 'Create a cloud storage',
  operationId: 'cloudstorages_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CloudStorageWriteRequestSchema,
          examples: {
            CreateAmazonS3CloudStorageWithCredentials: {
              summary: 'Create Amazon S3 cloud storage with credentials',
              value: {
                provider_type: 'AWS_S3_BUCKET',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'KEY_SECRET_KEY_PAIR',
                key: 'XXX',
                secret_key: 'XXX',
                specific_attributes: 'region=eu-central-1',
                description: 'Some description',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateAmazonS3CloudStorageWithoutCredentials: {
              summary: 'Create Amazon S3 cloud storage without credentials',
              value: {
                provider_type: 'AWS_S3_BUCKET',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'ANONYMOUS_ACCESS',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateAzureCloudStorage: {
              summary: 'Create Azure cloud storage',
              value: {
                provider_type: 'AZURE_CONTAINER',
                resource: 'sonecontainer',
                display_name: 'Container',
                credentials_type: 'ACCOUNT_NAME_TOKEN_PAIR',
                account_name: 'someaccount',
                session_token: 'xxx',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateGCS: {
              summary: 'Create GCS',
              value: {
                provider_type: 'GOOGLE_CLOUD_STORAGE',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'KEY_FILE_PATH',
                key_file: 'file',
                manifests: ['manifest.jsonl'],
              },
            },
          },
        },
        'multipart/form-data': { schema: CloudStorageWriteRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CloudStorageReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCloudstoragesIdRoute = createRoute({
  method: 'get',
  path: '/api/cloudstorages/{id}',
  tags: ['cloudstorages'],
  summary: 'Get cloud storage details',
  operationId: 'cloudstorages_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CloudStorageReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiCloudstoragesIdRoute = createRoute({
  method: 'delete',
  path: '/api/cloudstorages/{id}',
  tags: ['cloudstorages'],
  summary: 'Delete a cloud storage',
  operationId: 'cloudstorages_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The cloud storage has been removed' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiCloudstoragesIdRoute = createRoute({
  method: 'patch',
  path: '/api/cloudstorages/{id}',
  tags: ['cloudstorages'],
  summary: 'Update a cloud storage',
  operationId: 'cloudstorages_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchedCloudStorageWriteRequestSchema,
          examples: {
            CreateAmazonS3CloudStorageWithCredentials: {
              summary: 'Create Amazon S3 cloud storage with credentials',
              value: {
                provider_type: 'AWS_S3_BUCKET',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'KEY_SECRET_KEY_PAIR',
                key: 'XXX',
                secret_key: 'XXX',
                specific_attributes: 'region=eu-central-1',
                description: 'Some description',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateAmazonS3CloudStorageWithoutCredentials: {
              summary: 'Create Amazon S3 cloud storage without credentials',
              value: {
                provider_type: 'AWS_S3_BUCKET',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'ANONYMOUS_ACCESS',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateAzureCloudStorage: {
              summary: 'Create Azure cloud storage',
              value: {
                provider_type: 'AZURE_CONTAINER',
                resource: 'sonecontainer',
                display_name: 'Container',
                credentials_type: 'ACCOUNT_NAME_TOKEN_PAIR',
                account_name: 'someaccount',
                session_token: 'xxx',
                manifests: ['manifest.jsonl'],
              },
            },
            CreateGCS: {
              summary: 'Create GCS',
              value: {
                provider_type: 'GOOGLE_CLOUD_STORAGE',
                resource: 'somebucket',
                display_name: 'Bucket',
                credentials_type: 'KEY_FILE_PATH',
                key_file: 'file',
                manifests: ['manifest.jsonl'],
              },
            },
          },
        },
        'multipart/form-data': { schema: PatchedCloudStorageWriteRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CloudStorageReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCloudstoragesIdActionsRoute = createRoute({
  method: 'get',
  path: '/api/cloudstorages/{id}/actions',
  tags: ['cloudstorages'],
  summary: 'Get allowed actions for a cloud storage',
  description: "Method return allowed actions for cloud storage. It's required for reading/writing",
  operationId: 'cloudstorages_retrieve_actions',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cloud Storage actions (GET | PUT | DELETE)',
      content: { 'application/vnd.cvat+json': { schema: z.string() } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCloudstoragesIdContentV2Route = createRoute({
  method: 'get',
  path: '/api/cloudstorages/{id}/content-v2',
  tags: ['cloudstorages'],
  summary: 'Get cloud storage content',
  operationId: 'cloudstorages_retrieve_content_v2',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
    query: z.object({
      manifest_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manifest_path',
            schema: { type: 'string' },
            description: 'Path to the manifest file in a cloud storage',
            required: false,
          },
        }),
      next_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'next_token',
            schema: { type: 'string' },
            description: 'Used to continue listing files in the bucket',
            required: false,
          },
        }),
      page_size: z
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
          param: { in: 'query', name: 'page_size', schema: { type: 'integer' }, required: false },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            description: 'Prefix to filter data',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A manifest content',
      content: { 'application/vnd.cvat+json': { schema: CloudStorageContentSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCloudstoragesIdPreviewRoute = createRoute({
  method: 'get',
  path: '/api/cloudstorages/{id}/preview',
  tags: ['cloudstorages'],
  summary: 'Get a preview image for a cloud storage',
  operationId: 'cloudstorages_retrieve_preview',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Cloud Storage preview' },
    400: { description: 'Failed to get cloud storage preview' },
    404: { description: 'Cloud Storage preview not found' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCloudstoragesIdStatusRoute = createRoute({
  method: 'get',
  path: '/api/cloudstorages/{id}/status',
  tags: ['cloudstorages'],
  summary: 'Get the status of a cloud storage',
  operationId: 'cloudstorages_retrieve_status',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this cloud storage.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cloud Storage Status',
      content: {
        'application/vnd.cvat+json': { schema: z.enum(['AVAILABLE', 'NOT_FOUND', 'FORBIDDEN']) },
      },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCommentsRoute = createRoute({
  method: 'get',
  path: '/api/comments',
  tags: ['comments'],
  summary: 'List comments',
  operationId: 'comments_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'frame_id\', \'id\', \'issue_id\', \'job_id\', \'owner\'].',
            schema: { type: 'string' },
          },
        }),
      frame_id: z
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
            name: 'frame_id',
            in: 'query',
            description: 'A simple equality filter for the frame_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      issue_id: z
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
            name: 'issue_id',
            in: 'query',
            description: 'A simple equality filter for the issue_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      job_id: z
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
            name: 'job_id',
            in: 'query',
            description: 'A simple equality filter for the job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['owner']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['frame_id', 'id', 'issue_id', 'job_id', 'owner']",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedCommentReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiCommentsRoute = createRoute({
  method: 'post',
  path: '/api/comments',
  tags: ['comments'],
  summary: 'Create a comment',
  operationId: 'comments_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CommentWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CommentReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiCommentsIdRoute = createRoute({
  method: 'get',
  path: '/api/comments/{id}',
  tags: ['comments'],
  summary: 'Get comment details',
  operationId: 'comments_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this comment.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CommentReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiCommentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/comments/{id}',
  tags: ['comments'],
  summary: 'Delete a comment',
  operationId: 'comments_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this comment.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The comment has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiCommentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/comments/{id}',
  tags: ['comments'],
  summary: 'Update a comment',
  operationId: 'comments_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this comment.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedCommentWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: CommentReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiConsensusMergesRoute = createRoute({
  method: 'post',
  path: '/api/consensus/merges',
  tags: ['consensus'],
  summary: 'Create a consensus merge',
  operationId: 'consensus_create_merge',
  request: {
    body: { content: { 'application/json': { schema: ConsensusMergeCreateRequestSchema } } },
  },
  responses: {
    202: {
      description:
        'A consensus merge request has been enqueued, the request id is returned.\nThe request status can be checked by using common requests API: GET /api/requests/<rq_id>\n',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    400: { description: 'Invalid or failed request, check the response data for details' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiConsensusSettingsRoute = createRoute({
  method: 'get',
  path: '/api/consensus/settings',
  tags: ['consensus'],
  summary: 'List consensus settings instances',
  operationId: 'consensus_list_settings',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'id\', \'task_id\'].',
            schema: { type: 'string' },
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['id']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedConsensusSettingsListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiConsensusSettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/consensus/settings/{id}',
  tags: ['consensus'],
  summary: 'Get consensus settings instance details',
  operationId: 'consensus_retrieve_settings',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'An id of a consensus settings instance',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ConsensusSettingsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiConsensusSettingsIdRoute = createRoute({
  method: 'patch',
  path: '/api/consensus/settings/{id}',
  tags: ['consensus'],
  summary: 'Update a consensus settings instance',
  operationId: 'consensus_partial_update_settings',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'An id of a consensus settings instance',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedConsensusSettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ConsensusSettingsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiEventsRoute = createRoute({
  method: 'get',
  path: '/api/events',
  tags: ['events'],
  summary: 'Get an event log',
  description: 'The log is returned in the CSV format.',
  operationId: 'events_list',
  request: {
    query: z.object({
      action: z
        .literal('download')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            schema: { type: 'string', enum: ['download'] },
            description: 'Used to start downloading process after annotation file had been created',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Desired output file name',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'UTC start date for events filtration. Default is the minimal time.',
            required: false,
          },
        }),
      job_id: z
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
            in: 'query',
            name: 'job_id',
            schema: { type: 'integer' },
            description: 'Filter events by job ID',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description: 'Filter events by organization ID',
            required: false,
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'Filter events by project ID',
            required: false,
          },
        }),
      query_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query_id',
            schema: { type: 'string' },
            description: 'ID of query request that need to check or download',
            required: false,
          },
        }),
      task_id: z
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
            in: 'query',
            name: 'task_id',
            schema: { type: 'integer' },
            description: 'Filter events by task ID',
            required: false,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'UTC end date for events filtration. Default is the current time.',
            required: false,
          },
        }),
      user_id: z
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
            in: 'query',
            name: 'user_id',
            schema: { type: 'integer' },
            description: 'Filter events by user ID',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Download of file started' },
    201: { description: 'CSV log file is ready for downloading' },
    202: { description: 'Creating a CSV log file has been started' },
  },
  deprecated: true,
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiEventsRoute = createRoute({
  method: 'post',
  path: '/api/events',
  tags: ['events'],
  summary: 'Log client events',
  description: 'Sends logs to the Clickhouse if it is connected',
  operationId: 'events_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ClientEventsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiEventsExportRoute = createRoute({
  method: 'post',
  path: '/api/events/export',
  tags: ['events'],
  summary: 'Initiate a process to export events',
  operationId: 'events_create_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Desired output file name',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'UTC start date for events filtration. Default is the minimal time.',
            required: false,
          },
        }),
      job_id: z
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
            in: 'query',
            name: 'job_id',
            schema: { type: 'integer' },
            description: 'Filter events by job ID',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save events file',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description: 'Filter events by organization ID',
            required: false,
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'Filter events by project ID',
            required: false,
          },
        }),
      task_id: z
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
            in: 'query',
            name: 'task_id',
            schema: { type: 'integer' },
            description: 'Filter events by task ID',
            required: false,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'UTC end date for events filtration. Default is the current time.',
            required: false,
          },
        }),
      user_id: z
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
            in: 'query',
            name: 'user_id',
            schema: { type: 'integer' },
            description: 'Filter events by user ID',
            required: false,
          },
        }),
    }),
  },
  responses: {
    202: { description: '', content: { 'application/vnd.cvat+json': { schema: RqIdSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiGrowthRoute = createRoute({
  method: 'get',
  path: '/api/growth',
  tags: ['growth'],
  summary: 'List growth data',
  operationId: 'growth_list',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'id\', \'user_id\'].',
            schema: { type: 'string' },
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['id']",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedUserGrowthDataListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiGrowthIdRoute = createRoute({
  method: 'get',
  path: '/api/growth/{id}',
  tags: ['growth'],
  summary: 'Get growth data',
  operationId: 'growth_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: UserGrowthDataSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiGrowthIdRoute = createRoute({
  method: 'patch',
  path: '/api/growth/{id}',
  tags: ['growth'],
  summary: 'Update growth data',
  operationId: 'growth_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
    body: { content: { 'application/json': { schema: PatchedUserGrowthDataRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: UserGrowthDataSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiGuidesRoute = createRoute({
  method: 'post',
  path: '/api/guides',
  tags: ['guides'],
  summary: 'Create an annotation guide',
  description:
    'The new guide will be bound either to a project or a task, depending on parameters.',
  operationId: 'guides_create',
  request: {
    body: { content: { 'application/json': { schema: AnnotationGuideWriteRequestSchema } } },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AnnotationGuideReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiGuidesIdRoute = createRoute({
  method: 'get',
  path: '/api/guides/{id}',
  tags: ['guides'],
  summary: 'Get annotation guide details',
  operationId: 'guides_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this annotation guide.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AnnotationGuideReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiGuidesIdRoute = createRoute({
  method: 'delete',
  path: '/api/guides/{id}',
  tags: ['guides'],
  summary: 'Delete an annotation guide',
  description: 'This also deletes all assets attached to the guide.',
  operationId: 'guides_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this annotation guide.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The annotation guide has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiGuidesIdRoute = createRoute({
  method: 'patch',
  path: '/api/guides/{id}',
  tags: ['guides'],
  summary: 'Update an annotation guide',
  operationId: 'guides_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this annotation guide.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedAnnotationGuideWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: AnnotationGuideReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiInvitationsRoute = createRoute({
  method: 'get',
  path: '/api/invitations',
  tags: ['invitations'],
  summary: 'List invitations',
  operationId: 'invitations_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      accepted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'accepted',
            in: 'query',
            description: 'A simple equality filter for the accepted field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'accepted\', \'id\', \'owner\', \'user_id\'].',
            schema: { type: 'string' },
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['owner']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['accepted', 'created_date', 'owner', 'user_id']",
            schema: { type: 'string' },
          },
        }),
      user_id: z
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
            name: 'user_id',
            in: 'query',
            description: 'A simple equality filter for the user_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedInvitationReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiInvitationsRoute = createRoute({
  method: 'post',
  path: '/api/invitations',
  tags: ['invitations'],
  summary: 'Create an invitation',
  operationId: 'invitations_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InvitationWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: InvitationReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiInvitationsKeyRoute = createRoute({
  method: 'get',
  path: '/api/invitations/{key}',
  tags: ['invitations'],
  summary: 'Get invitation details',
  operationId: 'invitations_retrieve',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'key',
            schema: { type: 'string' },
            description: 'A unique value identifying this invitation.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: InvitationReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiInvitationsKeyRoute = createRoute({
  method: 'delete',
  path: '/api/invitations/{key}',
  tags: ['invitations'],
  summary: 'Delete an invitation',
  operationId: 'invitations_destroy',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'key',
            schema: { type: 'string' },
            description: 'A unique value identifying this invitation.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The invitation has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiInvitationsKeyAcceptRoute = createRoute({
  method: 'post',
  path: '/api/invitations/{key}/accept',
  tags: ['invitations'],
  summary: 'Accept an invitation',
  operationId: 'invitations_accept',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'key',
            schema: { type: 'string' },
            description: 'A unique value identifying this invitation.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The invitation is accepted',
      content: { 'application/vnd.cvat+json': { schema: AcceptInvitationReadSchema } },
    },
    400: { description: 'The invitation is expired or already accepted' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiInvitationsKeyDeclineRoute = createRoute({
  method: 'post',
  path: '/api/invitations/{key}/decline',
  tags: ['invitations'],
  summary: 'Decline an invitation',
  operationId: 'invitations_decline',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'key',
            schema: { type: 'string' },
            description: 'A unique value identifying this invitation.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The invitation has been declined' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiInvitationsKeyResendRoute = createRoute({
  method: 'post',
  path: '/api/invitations/{key}/resend',
  tags: ['invitations'],
  summary: 'Resend an invitation',
  operationId: 'invitations_resend',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'key',
            schema: { type: 'string' },
            description: 'A unique value identifying this invitation.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Invitation has been sent' },
    400: { description: 'The invitation is already accepted' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiIssuesRoute = createRoute({
  method: 'get',
  path: '/api/issues',
  tags: ['issues'],
  summary: 'List issues',
  operationId: 'issues_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      assignee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'assignee',
            in: 'query',
            description: 'A simple equality filter for the assignee field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['assignee', 'frame_id', 'id', 'job_id', 'owner', 'resolved', 'task_id'].",
            schema: { type: 'string' },
          },
        }),
      frame_id: z
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
            name: 'frame_id',
            in: 'query',
            description: 'A simple equality filter for the frame_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      job_id: z
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
            name: 'job_id',
            in: 'query',
            description: 'A simple equality filter for the job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      resolved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'resolved',
            in: 'query',
            description: 'A simple equality filter for the resolved field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['assignee', 'owner']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['assignee', 'frame_id', 'id', 'job_id', 'owner', 'resolved', 'task_id']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedIssueReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiIssuesRoute = createRoute({
  method: 'post',
  path: '/api/issues',
  tags: ['issues'],
  summary: 'Create an issue',
  operationId: 'issues_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IssueWriteRequestSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/vnd.cvat+json': { schema: IssueReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiIssuesIdRoute = createRoute({
  method: 'get',
  path: '/api/issues/{id}',
  tags: ['issues'],
  summary: 'Get issue details',
  operationId: 'issues_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this issue.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: IssueReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiIssuesIdRoute = createRoute({
  method: 'delete',
  path: '/api/issues/{id}',
  tags: ['issues'],
  summary: 'Delete an issue',
  operationId: 'issues_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this issue.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The issue has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiIssuesIdRoute = createRoute({
  method: 'patch',
  path: '/api/issues/{id}',
  tags: ['issues'],
  summary: 'Update an issue',
  operationId: 'issues_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this issue.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedIssueWriteRequestSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: IssueReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsRoute = createRoute({
  method: 'get',
  path: '/api/jobs',
  tags: ['jobs'],
  summary: 'List jobs',
  operationId: 'jobs_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      assignee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'assignee',
            in: 'query',
            description: 'A simple equality filter for the assignee field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dimension: z
        .enum(['1d', '2d', '3d'])
        .exactOptional()
        .openapi({
          param: {
            name: 'dimension',
            in: 'query',
            description: 'A simple equality filter for the dimension field',
            schema: { type: 'string', enum: ['1d', '2d', '3d'] },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['assignee', 'dimension', 'id', 'media_type', 'mode', 'parent_job_id', 'project_id', 'project_name', 'stage', 'state', 'task_id', 'task_name', 'type', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      media_type: z
        .enum(['image', 'point_cloud', 'audio'])
        .exactOptional()
        .openapi({
          param: {
            name: 'media_type',
            in: 'query',
            description: 'A simple equality filter for the media_type field',
            schema: { type: 'string', enum: ['image', 'point_cloud', 'audio'] },
            required: false,
          },
        }),
      mode: z
        .enum(['annotation', 'interpolation'])
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            description: 'A simple equality filter for the mode field',
            schema: { type: 'string', enum: ['annotation', 'interpolation'] },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      parent_job_id: z
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
            name: 'parent_job_id',
            in: 'query',
            description: 'A simple equality filter for the parent_job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      project_id: z
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
            name: 'project_id',
            in: 'query',
            description: 'A simple equality filter for the project_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_name',
            in: 'query',
            description: 'A simple equality filter for the project_name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description:
              "A search term. Available search_fields: ['assignee', 'project_name', 'task_name']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['assignee', 'dimension', 'id', 'media_type', 'mode', 'parent_job_id', 'project_id', 'project_name', 'stage', 'state', 'task_id', 'task_name', 'type', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
      stage: z
        .enum(['annotation', 'validation', 'acceptance'])
        .exactOptional()
        .openapi({
          param: {
            name: 'stage',
            in: 'query',
            description: 'A simple equality filter for the stage field',
            schema: { type: 'string', enum: ['annotation', 'validation', 'acceptance'] },
            required: false,
          },
        }),
      state: z
        .enum(['new', 'in progress', 'completed', 'rejected'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'A simple equality filter for the state field',
            schema: { type: 'string', enum: ['new', 'in progress', 'completed', 'rejected'] },
            required: false,
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      task_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'task_name',
            in: 'query',
            description: 'A simple equality filter for the task_name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['annotation', 'ground_truth', 'replica'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'A simple equality filter for the type field',
            schema: { type: 'string', enum: ['annotation', 'ground_truth', 'replica'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedJobReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiJobsRoute = createRoute({
  method: 'post',
  path: '/api/jobs',
  tags: ['jobs'],
  summary: 'Create a job',
  operationId: 'jobs_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: JobWriteRequestSchema,
          examples: {
            CreateGtJobWithRandom10Frames: {
              summary: 'create gt job with random 10 frames',
              value: {
                type: 'ground_truth',
                task_id: 42,
                frame_selection_method: 'random_uniform',
                frame_count: 10,
                random_seed: 1,
              },
            },
            'CreateGtJobWithRandom15%Frames': {
              summary: 'create gt job with random 15% frames',
              value: {
                type: 'ground_truth',
                task_id: 42,
                frame_selection_method: 'random_uniform',
                frame_share: 0.15,
                random_seed: 1,
              },
            },
            CreateGtJobWith3RandomFramesInEachJob: {
              summary: 'create gt job with 3 random frames in each job',
              value: {
                type: 'ground_truth',
                task_id: 42,
                frame_selection_method: 'random_per_job',
                frames_per_job_count: 3,
                random_seed: 1,
              },
            },
            'CreateGtJobWith20%RandomFramesInEachJob': {
              summary: 'create gt job with 20% random frames in each job',
              value: {
                type: 'ground_truth',
                task_id: 42,
                frame_selection_method: 'random_per_job',
                frames_per_job_share: 0.2,
                random_seed: 1,
              },
            },
            CreateGtJobWithManualFrameSelection: {
              summary: 'create gt job with manual frame selection',
              value: {
                type: 'ground_truth',
                task_id: 42,
                frame_selection_method: 'manual',
                frames: [1, 5, 10, 18],
              },
            },
            CreateAReplicaJob: {
              summary: 'create a replica job',
              value: { type: 'replica', task_id: 17, parent_job_id: 42 },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/vnd.cvat+json': { schema: JobReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}',
  tags: ['jobs'],
  summary: 'Get job details',
  operationId: 'jobs_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: JobReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiJobsIdRoute = createRoute({
  method: 'delete',
  path: '/api/jobs/{id}',
  tags: ['jobs'],
  summary: 'Delete a job',
  description:
    'Related annotations will be deleted as well.\n\nPlease note, that not every job can be removed. Currently,\nit is only available for Ground Truth and replica jobs.\n',
  operationId: 'jobs_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The job has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiJobsIdRoute = createRoute({
  method: 'patch',
  path: '/api/jobs/{id}',
  tags: ['jobs'],
  summary: 'Update a job',
  operationId: 'jobs_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedJobWriteRequestSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: JobReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdAnnotationsIndexRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}/annotations/',
  tags: ['jobs'],
  summary: 'Get job annotations',
  description:
    'Deprecation warning:\n\nUtilizing this endpoint to export job dataset in a specific format\nis no longer possible.\n\nConsider using new API:\n- `POST /api/jobs/<job_id>/dataset/export?save_images=True` to initiate export process\n- `GET /api/requests/<rq_id>` to check process status,\n    where `rq_id` is request id returned on initializing request\n- `GET result_url` to download a prepared file,\n    where `result_url` can be found in the response on checking status request\n',
  operationId: 'jobs_retrieve_annotations',
  request: {
    query: z.object({
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            schema: { type: 'string' },
            description: 'This parameter is no longer supported',
            deprecated: true,
            required: false,
          },
        }),
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'This parameter is no longer supported',
            deprecated: true,
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'This parameter is no longer supported',
            deprecated: true,
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description: 'This parameter is no longer supported',
            deprecated: true,
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'This parameter is no longer supported',
            deprecated: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: LabeledDataSchema } },
    },
    410: { description: 'API endpoint no longer handles dataset exporting process' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const putApiJobsIdAnnotationsIndexRoute = createRoute({
  method: 'put',
  path: '/api/jobs/{id}/annotations/',
  tags: ['jobs'],
  summary: 'Replace job annotations',
  operationId: 'jobs_update_annotations',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: LabeledDataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              version: z
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
                .exactOptional(),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              shapes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        type: ShapeTypeSchema,
                        occluded: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        outside: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        z_order: z
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
                          .exactOptional(),
                        rotation: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(360),
                          )
                          .default(0)
                          .exactOptional(),
                        points: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              ),
                            ),
                          )
                          .exactOptional(),
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  type: ShapeTypeSchema,
                                  occluded: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  outside: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  z_order: z
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
                                    .exactOptional(),
                                  rotation: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(360),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  points: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z.preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.float64(),
                                        ),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  score: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(1),
                                    )
                                    .default(1)
                                    .exactOptional(),
                                })
                                .openapi({ required: ['frame', 'label_id', 'type'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'type'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              tracks: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        shapes: z.preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                type: ShapeTypeSchema,
                                occluded: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                outside: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                z_order: z
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
                                  .exactOptional(),
                                rotation: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64().min(0).max(360),
                                  )
                                  .default(0)
                                  .exactOptional(),
                                points: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                                attributes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          spec_id: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int(),
                                          ),
                                          value: z.string().max(4096),
                                        })
                                        .openapi({ required: ['spec_id', 'value'] }),
                                    ),
                                  )
                                  .default([])
                                  .exactOptional(),
                                id: z
                                  .preprocess(
                                    (val) => (val === 'null' ? null : val),
                                    z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int(),
                                      )
                                      .nullable(),
                                  )
                                  .exactOptional(),
                                frame: z.preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(0),
                                ),
                              })
                              .openapi({ required: ['frame', 'type'] }),
                          ),
                        ),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  shapes: z.preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          type: ShapeTypeSchema,
                                          occluded: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          outside: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          z_order: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          rotation: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64().min(0).max(360),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          points: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z.preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                ),
                                              ),
                                            )
                                            .exactOptional(),
                                          attributes: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    spec_id: z.preprocess(
                                                      (val) =>
                                                        typeof val === 'string' &&
                                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                          val,
                                                        ) &&
                                                        (!/^-?\d+$/.test(val) ||
                                                          Number.isSafeInteger(Number(val)))
                                                          ? Number(val)
                                                          : val,
                                                      z.int(),
                                                    ),
                                                    value: z.string().max(4096),
                                                  })
                                                  .openapi({ required: ['spec_id', 'value'] }),
                                              ),
                                            )
                                            .default([])
                                            .exactOptional(),
                                          id: z
                                            .preprocess(
                                              (val) => (val === 'null' ? null : val),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int(),
                                                )
                                                .nullable(),
                                            )
                                            .exactOptional(),
                                          frame: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int().min(0),
                                          ),
                                        })
                                        .openapi({ required: ['frame', 'type'] }),
                                    ),
                                  ),
                                })
                                .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              intervals: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        start: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int().min(0),
                          )
                          .openapi({ description: 'Must be within the task frame bounds.' }),
                        stop: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .openapi({
                            description:
                              'Exclusive interval end. May be one greater than the task stop frame.',
                          }),
                      })
                      .openapi({ required: ['label_id', 'start', 'stop'] }),
                  ),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Annotations have been replaced' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiJobsIdAnnotationsIndexRoute = createRoute({
  method: 'post',
  path: '/api/jobs/{id}/annotations/',
  tags: ['jobs'],
  summary: 'Import annotations into a job',
  description:
    '\nThe request POST /api/jobs/id/annotations initiates a background process to import annotations into a job.\nPlease, use the GET /api/requests/<rq_id> endpoint for checking status of the process.\nThe `rq_id` parameter can be found in the response on initiating request.\n',
  operationId: 'jobs_create_annotations',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Annotation file name',
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Input format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: false,
          },
        }),
      import_mode: z
        .enum(['append', 'replace'])
        .default('replace')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'import_mode',
            schema: { type: 'string', enum: ['append', 'replace'], default: 'replace' },
            description: 'How to import annotations',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'where to import the annotation from',
            required: false,
          },
        }),
      use_default_location: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'use_default_location',
            schema: { type: 'boolean', default: true },
            description: 'Use the location that was configured in the task to import annotation',
            deprecated: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: AnnotationFileRequestSchema },
        'multipart/form-data': { schema: AnnotationFileRequestSchema },
      },
    },
  },
  responses: {
    201: { description: 'Uploading has finished' },
    202: {
      description: 'Uploading has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    405: { description: 'Format is not available' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiJobsIdAnnotationsIndexRoute = createRoute({
  method: 'delete',
  path: '/api/jobs/{id}/annotations/',
  tags: ['jobs'],
  summary: 'Delete job annotations',
  operationId: 'jobs_destroy_annotations',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The annotation has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiJobsIdAnnotationsIndexRoute = createRoute({
  method: 'patch',
  path: '/api/jobs/{id}/annotations/',
  tags: ['jobs'],
  summary: 'Update job annotations',
  operationId: 'jobs_partial_update_annotations',
  request: {
    query: z.object({
      action: z
        .enum(['create', 'delete', 'update'])
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            schema: { type: 'string', enum: ['create', 'delete', 'update'] },
            required: true,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PatchedLabeledDataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              version: z
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
                .exactOptional(),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              shapes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        type: ShapeTypeSchema,
                        occluded: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        outside: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        z_order: z
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
                          .exactOptional(),
                        rotation: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(360),
                          )
                          .default(0)
                          .exactOptional(),
                        points: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              ),
                            ),
                          )
                          .exactOptional(),
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  type: ShapeTypeSchema,
                                  occluded: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  outside: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  z_order: z
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
                                    .exactOptional(),
                                  rotation: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(360),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  points: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z.preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.float64(),
                                        ),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  score: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(1),
                                    )
                                    .default(1)
                                    .exactOptional(),
                                })
                                .openapi({ required: ['frame', 'label_id', 'type'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'type'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              tracks: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        shapes: z.preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                type: ShapeTypeSchema,
                                occluded: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                outside: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                z_order: z
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
                                  .exactOptional(),
                                rotation: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64().min(0).max(360),
                                  )
                                  .default(0)
                                  .exactOptional(),
                                points: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                                attributes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          spec_id: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int(),
                                          ),
                                          value: z.string().max(4096),
                                        })
                                        .openapi({ required: ['spec_id', 'value'] }),
                                    ),
                                  )
                                  .default([])
                                  .exactOptional(),
                                id: z
                                  .preprocess(
                                    (val) => (val === 'null' ? null : val),
                                    z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int(),
                                      )
                                      .nullable(),
                                  )
                                  .exactOptional(),
                                frame: z.preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(0),
                                ),
                              })
                              .openapi({ required: ['frame', 'type'] }),
                          ),
                        ),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  shapes: z.preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          type: ShapeTypeSchema,
                                          occluded: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          outside: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          z_order: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          rotation: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64().min(0).max(360),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          points: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z.preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                ),
                                              ),
                                            )
                                            .exactOptional(),
                                          attributes: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    spec_id: z.preprocess(
                                                      (val) =>
                                                        typeof val === 'string' &&
                                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                          val,
                                                        ) &&
                                                        (!/^-?\d+$/.test(val) ||
                                                          Number.isSafeInteger(Number(val)))
                                                          ? Number(val)
                                                          : val,
                                                      z.int(),
                                                    ),
                                                    value: z.string().max(4096),
                                                  })
                                                  .openapi({ required: ['spec_id', 'value'] }),
                                              ),
                                            )
                                            .default([])
                                            .exactOptional(),
                                          id: z
                                            .preprocess(
                                              (val) => (val === 'null' ? null : val),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int(),
                                                )
                                                .nullable(),
                                            )
                                            .exactOptional(),
                                          frame: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int().min(0),
                                          ),
                                        })
                                        .openapi({ required: ['frame', 'type'] }),
                                    ),
                                  ),
                                })
                                .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              intervals: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        start: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int().min(0),
                          )
                          .openapi({ description: 'Must be within the task frame bounds.' }),
                        stop: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .openapi({
                            description:
                              'Exclusive interval end. May be one greater than the task stop frame.',
                          }),
                      })
                      .openapi({ required: ['label_id', 'start', 'stop'] }),
                  ),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Annotations successfully uploaded' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdDataRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}/data',
  tags: ['jobs'],
  summary: 'Get data of a job',
  operationId: 'jobs_retrieve_data',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    query: z.object({
      index: z
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
            in: 'query',
            name: 'index',
            schema: { type: 'integer' },
            description: 'A unique number value identifying chunk, starts from 0 for each job',
            required: false,
          },
        }),
      number: z
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
            in: 'query',
            name: 'number',
            schema: { type: 'integer' },
            description:
              "A unique number value identifying chunk or frame. The numbers are the same as for the task. Deprecated for chunks in favor of 'index'",
            required: false,
          },
        }),
      quality: z
        .enum(['compressed', 'original'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'quality',
            schema: { type: 'string', enum: ['compressed', 'original'] },
            description: 'Specifies the quality level of the requested data',
            required: false,
          },
        }),
      type: z
        .enum(['chunk', 'context_image', 'frame'])
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['chunk', 'context_image', 'frame'] },
            description: 'Specifies the type of the requested data',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Data of a specific type',
      content: {
        'application/vnd.cvat+json': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({
        'X-Checksum': {
          description: 'Data checksum, applicable for chunks only',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Data checksum, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Updated-Date': {
          description: 'Data update date, applicable for chunks only',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'Data update date, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
    206: {
      description: 'Partial chunk data',
      content: {
        'application/vnd.cvat+json': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({
        'X-Checksum': {
          description: 'Data checksum, applicable for chunks only',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Data checksum, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Updated-Date': {
          description: 'Data update date, applicable for chunks only',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'Data update date, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
    416: {
      description: 'Requested range is not satisfiable',
      headers: z.object({
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdDataMetaRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}/data/meta',
  tags: ['jobs'],
  summary: 'Get metainformation for media files in a job',
  operationId: 'jobs_retrieve_data_meta',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: DataMetaReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiJobsIdDataMetaRoute = createRoute({
  method: 'patch',
  path: '/api/jobs/{id}/data/meta',
  tags: ['jobs'],
  summary: 'Update metainformation for media files in a job',
  operationId: 'jobs_partial_update_data_meta',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedJobDataMetaWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: DataMetaReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiJobsIdDatasetExportRoute = createRoute({
  method: 'post',
  path: '/api/jobs/{id}/dataset/export',
  tags: ['jobs'],
  summary: 'Initialize process to export resource as a dataset in a specific format',
  description:
    'The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize\na background process to export a dataset. To check status of the process\nplease, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.\n',
  operationId: 'jobs_create_dataset_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Desired output file name',
            required: false,
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Desired output format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: true,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save downloaded dataset',
            required: false,
          },
        }),
      save_images: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'save_images',
            schema: { type: 'boolean', default: false },
            description: 'Include images or not',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Exporting has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    405: { description: 'Format is not available' },
    409: {
      description: 'Exporting is already in progress',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdPreviewRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}/preview',
  tags: ['jobs'],
  summary: 'Get a preview image for a job',
  operationId: 'jobs_retrieve_preview',
  request: {
    headers: z.object({
      Prefer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Prefer',
            schema: { type: 'string' },
            description:
              'RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Job image preview' },
    204: {
      description:
        'No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.',
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiJobsIdValidationLayoutRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{id}/validation_layout',
  tags: ['jobs'],
  summary: 'Allows getting current validation configuration',
  operationId: 'jobs_retrieve_validation_layout',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: JobValidationLayoutReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiJobsIdValidationLayoutRoute = createRoute({
  method: 'patch',
  path: '/api/jobs/{id}/validation_layout',
  tags: ['jobs'],
  summary: 'Allows updating current validation configuration',
  description:
    "\nWARNING: this operation is not protected from race conditions.\nIt's up to the user to ensure no parallel calls to this operation happen.\nIt affects image access, including exports with images, backups, chunk downloading etc.\n",
  operationId: 'jobs_partial_update_validation_layout',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this job.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchedJobValidationLayoutWriteRequestSchema,
          examples: {
            SetHoneypotsToRandomValidationFrames: {
              summary: 'set honeypots to random validation frames',
              value: { frame_selection_method: 'random_uniform' },
            },
            SetHoneypotsManually: {
              summary: 'set honeypots manually',
              value: { frame_selection_method: 'manual', honeypot_real_frames: [10, 20, 22] },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: JobValidationLayoutReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLabelsRoute = createRoute({
  method: 'get',
  path: '/api/labels',
  tags: ['labels'],
  summary: 'List labels',
  operationId: 'labels_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'color',
            in: 'query',
            description: 'A simple equality filter for the color field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['color', 'id', 'name', 'parent', 'parent_id', 'type'].",
            schema: { type: 'string' },
          },
        }),
      job_id: z
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
            in: 'query',
            name: 'job_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for job id',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parent',
            in: 'query',
            description: 'A simple equality filter for the parent field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parent_id: z
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
            name: 'parent_id',
            in: 'query',
            description: 'A simple equality filter for the parent_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for project id',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['name', 'parent']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['color', 'id', 'name', 'parent', 'parent_id', 'type']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            in: 'query',
            name: 'task_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for task id',
            required: false,
          },
        }),
      type: z
        .enum([
          'any',
          'cuboid',
          'ellipse',
          'mask',
          'points',
          'polygon',
          'polyline',
          'rectangle',
          'skeleton',
          'interval',
          'tag',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'A simple equality filter for the type field',
            schema: {
              type: 'string',
              enum: [
                'any',
                'cuboid',
                'ellipse',
                'mask',
                'points',
                'polygon',
                'polyline',
                'rectangle',
                'skeleton',
                'interval',
                'tag',
              ],
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedLabelListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLabelsIdRoute = createRoute({
  method: 'get',
  path: '/api/labels/{id}',
  tags: ['labels'],
  summary: 'Get label details',
  operationId: 'labels_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this label.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: LabelSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiLabelsIdRoute = createRoute({
  method: 'delete',
  path: '/api/labels/{id}',
  tags: ['labels'],
  summary: 'Delete a label',
  description: 'To delete a sublabel, please use the PATCH method of the parent label.',
  operationId: 'labels_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this label.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The label has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiLabelsIdRoute = createRoute({
  method: 'patch',
  path: '/api/labels/{id}',
  tags: ['labels'],
  summary: 'Update a label',
  description: 'To modify a sublabel, please use the PATCH method of the parent label.',
  operationId: 'labels_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this label.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedLabelRequestSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: LabelSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLambdaFunctionsRoute = createRoute({
  method: 'get',
  path: '/api/lambda/functions',
  tags: ['lambda'],
  summary: 'Method returns a list of functions',
  operationId: 'lambda_list_functions',
  responses: { 200: { description: 'No response body' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLambdaFunctionsFuncIdRoute = createRoute({
  method: 'get',
  path: '/api/lambda/functions/{func_id}',
  tags: ['lambda'],
  summary: 'Method returns the information about the function',
  operationId: 'lambda_retrieve_functions',
  request: {
    params: z.object({
      func_id: z
        .string()
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/)
        .openapi({
          param: {
            in: 'path',
            name: 'func_id',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9][a-zA-Z0-9_.-]*$' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the function',
      content: { 'application/vnd.cvat+json': { schema: z.object({}) } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiLambdaFunctionsFuncIdRoute = createRoute({
  method: 'post',
  path: '/api/lambda/functions/{func_id}',
  tags: ['lambda'],
  description:
    "Allows to execute a function for immediate computation.\n\nIntended for short-lived executions, useful for interactive calls.\n\nWhen executed for interactive annotation, the job id must be specified\nin the 'job' input field. The task id is not required in this case,\nbut if it is specified, it must match the job task id.\n",
  operationId: 'lambda_create_functions',
  request: {
    params: z.object({
      func_id: z
        .string()
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/)
        .openapi({
          param: {
            in: 'path',
            name: 'func_id',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9][a-zA-Z0-9_.-]*$' },
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OnlineFunctionCallRequestSchema } } },
  },
  responses: { 200: { description: 'Returns function invocation results' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLambdaRequestsRoute = createRoute({
  method: 'get',
  path: '/api/lambda/requests',
  tags: ['lambda'],
  summary: 'Method returns a list of requests',
  operationId: 'lambda_list_requests',
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: z.array(FunctionCallSchema) } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiLambdaRequestsRoute = createRoute({
  method: 'post',
  path: '/api/lambda/requests',
  tags: ['lambda'],
  summary: 'Method calls the function',
  operationId: 'lambda_create_requests',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FunctionCallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: FunctionCallSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiLambdaRequestsIdRoute = createRoute({
  method: 'get',
  path: '/api/lambda/requests/{id}',
  tags: ['lambda'],
  summary: 'Method returns the status of the request',
  operationId: 'lambda_retrieve_requests',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'Request id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: FunctionCallSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiLambdaRequestsIdRoute = createRoute({
  method: 'delete',
  path: '/api/lambda/requests/{id}',
  tags: ['lambda'],
  summary: 'Method cancels the request',
  operationId: 'lambda_delete_requests',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'Request id',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'No response body' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiMembershipsRoute = createRoute({
  method: 'get',
  path: '/api/memberships',
  tags: ['memberships'],
  summary: 'List memberships',
  operationId: 'memberships_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'id\', \'role\', \'user\'].',
            schema: { type: 'string' },
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      role: z
        .enum(['worker', 'supervisor', 'maintainer', 'owner'])
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description: 'A simple equality filter for the role field',
            schema: { type: 'string', enum: ['worker', 'supervisor', 'maintainer', 'owner'] },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['user']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['id', 'role', 'user']",
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            description: 'A simple equality filter for the user field',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedMembershipReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiMembershipsIdRoute = createRoute({
  method: 'get',
  path: '/api/memberships/{id}',
  tags: ['memberships'],
  summary: 'Get membership details',
  operationId: 'memberships_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this membership.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: MembershipReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiMembershipsIdRoute = createRoute({
  method: 'delete',
  path: '/api/memberships/{id}',
  tags: ['memberships'],
  summary: 'Delete a membership',
  operationId: 'memberships_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this membership.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The membership has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiMembershipsIdRoute = createRoute({
  method: 'patch',
  path: '/api/memberships/{id}',
  tags: ['memberships'],
  summary: 'Update a membership',
  operationId: 'memberships_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this membership.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedMembershipWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: MembershipReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiOrganizationsRoute = createRoute({
  method: 'get',
  path: '/api/organizations',
  tags: ['organizations'],
  summary: 'List organizations',
  operationId: 'organizations_list',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'id\', \'name\', \'owner\', \'slug\'].',
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['name', 'owner', 'slug']",
            schema: { type: 'string' },
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'slug',
            in: 'query',
            description: 'A simple equality filter for the slug field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['id', 'name', 'owner', 'slug']",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedOrganizationReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiOrganizationsRoute = createRoute({
  method: 'post',
  path: '/api/organizations',
  tags: ['organizations'],
  summary: 'Create an organization',
  operationId: 'organizations_create',
  request: {
    body: {
      content: { 'application/json': { schema: OrganizationWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: OrganizationReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiOrganizationsIdRoute = createRoute({
  method: 'get',
  path: '/api/organizations/{id}',
  tags: ['organizations'],
  summary: 'Get organization details',
  operationId: 'organizations_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this organization.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: OrganizationReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiOrganizationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/organizations/{id}',
  tags: ['organizations'],
  summary: 'Delete an organization',
  operationId: 'organizations_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this organization.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The organization has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiOrganizationsIdRoute = createRoute({
  method: 'patch',
  path: '/api/organizations/{id}',
  tags: ['organizations'],
  summary: 'Update an organization',
  operationId: 'organizations_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this organization.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedOrganizationWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: OrganizationReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiProjectsRoute = createRoute({
  method: 'get',
  path: '/api/projects',
  tags: ['projects'],
  summary: 'List projects',
  operationId: 'projects_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      assignee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'assignee',
            in: 'query',
            description: 'A simple equality filter for the assignee field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['assignee', 'id', 'name', 'owner', 'status', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: "A search term. Available search_fields: ['assignee', 'name', 'owner']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['assignee', 'id', 'name', 'owner', 'status', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['annotation', 'validation', 'completed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'A simple equality filter for the status field',
            schema: { type: 'string', enum: ['annotation', 'validation', 'completed'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedProjectReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiProjectsRoute = createRoute({
  method: 'post',
  path: '/api/projects',
  tags: ['projects'],
  summary: 'Create a project',
  operationId: 'projects_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProjectWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ProjectReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiProjectsIdRoute = createRoute({
  method: 'get',
  path: '/api/projects/{id}',
  tags: ['projects'],
  summary: 'Get project details',
  operationId: 'projects_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ProjectReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/api/projects/{id}',
  tags: ['projects'],
  summary: 'Delete a project',
  operationId: 'projects_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The project has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiProjectsIdRoute = createRoute({
  method: 'patch',
  path: '/api/projects/{id}',
  tags: ['projects'],
  summary: 'Update a project',
  operationId: 'projects_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedProjectWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: ProjectReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiProjectsIdBackupExportRoute = createRoute({
  method: 'post',
  path: '/api/projects/{id}/backup/export',
  tags: ['projects'],
  summary: 'Initiate process to backup resource',
  description:
    'The request `POST /api/<projects|tasks>/id/backup/export` will initialize\na background process to backup a resource. To check status of the process\nplease, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.\n',
  operationId: 'projects_create_backup_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Backup file name',
            required: false,
          },
        }),
      lightweight: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lightweight',
            schema: { type: 'boolean', default: true },
            description:
              'Makes a lightweight backup (without media files) for tasks whose media is located in cloud storage',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save downloaded backup',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Creating a backup file has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    400: { description: 'Wrong query parameters were passed' },
    409: {
      description: 'The backup process has already been initiated and is not yet finished',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiProjectsIdDatasetIndexRoute = createRoute({
  method: 'post',
  path: '/api/projects/{id}/dataset/',
  tags: ['projects'],
  summary: 'Import a dataset into a project',
  description:
    '\nThe request POST /api/projects/id/dataset initiates a background process to import dataset into a project.\nPlease, use the GET /api/requests/<rq_id> endpoint for checking status of the process.\nThe `rq_id` parameter can be found in the response on initiating request.\n',
  operationId: 'projects_create_dataset',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Dataset file name',
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Desired dataset format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where to import the dataset from',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DatasetFileRequestSchema },
        'multipart/form-data': { schema: DatasetFileRequestSchema },
      },
    },
  },
  responses: {
    202: {
      description: 'Importing has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    400: { description: 'Failed to import dataset' },
    405: { description: 'Format is not available' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiProjectsIdDatasetExportRoute = createRoute({
  method: 'post',
  path: '/api/projects/{id}/dataset/export',
  tags: ['projects'],
  summary: 'Initialize process to export resource as a dataset in a specific format',
  description:
    'The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize\na background process to export a dataset. To check status of the process\nplease, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.\n',
  operationId: 'projects_create_dataset_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Desired output file name',
            required: false,
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Desired output format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: true,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save downloaded dataset',
            required: false,
          },
        }),
      save_images: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'save_images',
            schema: { type: 'boolean', default: false },
            description: 'Include images or not',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Exporting has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    405: { description: 'Format is not available' },
    409: {
      description: 'Exporting is already in progress',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiProjectsIdPreviewRoute = createRoute({
  method: 'get',
  path: '/api/projects/{id}/preview',
  tags: ['projects'],
  summary: 'Get a preview image for a project',
  operationId: 'projects_retrieve_preview',
  request: {
    headers: z.object({
      Prefer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Prefer',
            schema: { type: 'string' },
            description:
              'RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this project.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Project image preview' },
    204: {
      description:
        'No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.',
    },
    404: { description: 'Project image preview not found' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiProjectsBackupIndexRoute = createRoute({
  method: 'post',
  path: '/api/projects/backup/',
  tags: ['projects'],
  summary: 'Recreate a project from a backup',
  description:
    '\nThe backup import process is as follows:\n\nThe first request POST /api/projects/backup schedules a background job on the server\nin which the process of creating a project from the uploaded backup is carried out.\n\nTo check the status of the import process, use GET /api/requests/rq_id,\nwhere rq_id is the request ID obtained from the response to the previous request.\n\nOnce the import completes successfully, the response will contain the ID\nof the newly created project in the result_id field.\n',
  operationId: 'projects_create_backup',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Backup file name',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .default('local')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'], default: 'local' },
            description: 'Where to import the backup file from',
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProjectFileRequestSchema },
        'multipart/form-data': { schema: ProjectFileRequestSchema },
      },
    },
  },
  responses: {
    202: {
      description: 'Import of the backup file has started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityConflictsRoute = createRoute({
  method: 'get',
  path: '/api/quality/conflicts',
  tags: ['quality'],
  summary: 'List annotation conflicts in a quality report',
  operationId: 'quality_list_conflicts',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['frame', 'id', 'job_id', 'project_id', 'severity', 'task_id', 'type'].",
            schema: { type: 'string' },
          },
        }),
      frame: z
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
            name: 'frame',
            in: 'query',
            description: 'A simple equality filter for the frame field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      job_id: z
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
            name: 'job_id',
            in: 'query',
            description: 'A simple equality filter for the job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      project_id: z
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
            name: 'project_id',
            in: 'query',
            description: 'A simple equality filter for the project_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      report_id: z
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
            in: 'query',
            name: 'report_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for report id',
            required: false,
          },
        }),
      severity: z
        .literal('error')
        .exactOptional()
        .openapi({
          param: {
            name: 'severity',
            in: 'query',
            description: 'A simple equality filter for the severity field',
            schema: { type: 'string', enum: ['error'] },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['frame', 'id', 'job_id', 'project_id', 'severity', 'task_id', 'type']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      type: z
        .enum([
          'missing_annotation',
          'extra_annotation',
          'mismatching_label',
          'mismatching_direction',
          'mismatching_attributes',
          'mismatching_groups',
          'covered_annotation',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'A simple equality filter for the type field',
            schema: {
              type: 'string',
              enum: [
                'missing_annotation',
                'extra_annotation',
                'mismatching_label',
                'mismatching_direction',
                'mismatching_attributes',
                'mismatching_groups',
                'covered_annotation',
              ],
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedAnnotationConflictListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityReportsRoute = createRoute({
  method: 'get',
  path: '/api/quality/reports',
  tags: ['quality'],
  summary: 'Method returns a paginated list of quality reports.',
  description:
    'The "target" parameter is required when the "task_id" or "project_id"\nfilter is used.\n\nThe "parent_id" filter requires the "target" parameter. Valid parent\nreport target to requested target combinations are: task to job,\nproject to task, and project to job.\n\nPlease note that a report can be reused in several parent reports,\nbut the "parent_id" field in responses will include only the first parent report id.\nFiltering project report children with target "job" still returns all the relevant\nnested job reports, even though their response "parent_id" values refer to task reports.\n',
  operationId: 'quality_list_reports',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['created_date', 'gt_last_updated', 'id', 'job_id', 'project_id', 'target_last_updated', 'task_id'].",
            schema: { type: 'string' },
          },
        }),
      include_legacy: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_legacy',
            schema: { type: 'boolean', default: false },
            description: 'Include reports stored in the legacy data format',
            required: false,
          },
        }),
      job_id: z
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
            name: 'job_id',
            in: 'query',
            description: 'A simple equality filter for the job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      parent_id: z
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
            in: 'query',
            name: 'parent_id',
            schema: { type: 'integer' },
            description: 'A parent report id filter. Requires a compatible target filter',
            required: false,
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for project id',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['created_date', 'gt_last_updated', 'id', 'job_id', 'project_id', 'target_last_updated', 'task_id']",
            schema: { type: 'string' },
          },
        }),
      target: z
        .enum(['job', 'project', 'task'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'target',
            schema: { type: 'string', enum: ['job', 'project', 'task'] },
            description: 'A simple equality filter for target',
            required: false,
          },
        }),
      task_id: z
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
            in: 'query',
            name: 'task_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for task id',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedQualityReportListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiQualityReportsRoute = createRoute({
  method: 'post',
  path: '/api/quality/reports',
  tags: ['quality'],
  summary: 'Create a quality report',
  description:
    'Deprecation warning: Utilizing this endpoint to check the computation status is no longer possible.\nConsider using common requests API: GET /api/requests/<rq_id>\n',
  operationId: 'quality_create_report',
  request: {
    query: z.object({
      rq_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'rq_id',
            schema: { type: 'string' },
            description:
              'The report creation request id. Can be specified to check the report\ncreation status.\n',
            deprecated: true,
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QualityReportCreateRequestSchema } } },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityReportSchema } },
    },
    202: {
      description:
        'A quality report request has been enqueued, the request id is returned.\nThe request status can be checked at this endpoint by passing the rq_id\nas the query parameter. If the request id is specified, this response\nmeans the quality report request is queued or is being processed.\n',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    400: { description: 'Invalid or failed request, check the response data for details' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityReportsIdRoute = createRoute({
  method: 'get',
  path: '/api/quality/reports/{id}',
  tags: ['quality'],
  summary: 'Get quality report details',
  operationId: 'quality_retrieve_report',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality report.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityReportSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityReportsIdConfusionRoute = createRoute({
  method: 'get',
  path: '/api/quality/reports/{id}/confusion',
  tags: ['quality'],
  summary: 'Download quality report confusion matrices',
  operationId: 'quality_retrieve_report_confusion',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality report.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ZIP archive with per-requirement confusion matrices',
      content: {
        'application/vnd.cvat+json': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityReportsIdConfusionMatrixRoute = createRoute({
  method: 'get',
  path: '/api/quality/reports/{id}/confusion/matrix',
  tags: ['quality'],
  summary: 'Get a quality report requirement confusion matrix',
  operationId: 'quality_retrieve_report_requirement_confusion',
  request: {
    query: z.object({
      format: z
        .enum(['csv', 'json'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string', enum: ['csv', 'json'], default: 'json' },
            required: false,
          },
        }),
      requirement: z
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
            in: 'query',
            name: 'requirement',
            schema: { type: 'integer' },
            description: 'Quality requirement id in the report',
            required: true,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality report.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'JSON confusion matrix for the requested quality requirement',
      content: {
        'application/json': { schema: QualityReportConfusionMatrixSchema },
        'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: { description: 'Requirement confusion matrix was not found' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualityReportsIdDataRoute = createRoute({
  method: 'get',
  path: '/api/quality/reports/{id}/data',
  tags: ['quality'],
  summary: 'Get quality report contents',
  operationId: 'quality_retrieve_report_data',
  request: {
    query: z.object({
      format: z
        .literal('json')
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string', enum: ['json'], default: 'json' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality report.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/vnd.cvat+json': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualitySettingsRoute = createRoute({
  method: 'get',
  path: '/api/quality/settings',
  tags: ['quality'],
  summary: 'List quality settings instances',
  description:
    'Please note that child task settings are included by default\nif the "project_id" filter is used.\nIf you want to restrict results only to a specific parent type, use the "parent_type" parameter.\n',
  operationId: 'quality_list_settings',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['created_date', 'id', 'inherit', 'project_id', 'task_id', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      inherit: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'inherit',
            in: 'query',
            description: 'A simple equality filter for the inherit field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      parent_type: z
        .enum(['project', 'task'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parent_type',
            schema: { type: 'string', enum: ['project', 'task'] },
            description: 'A simple equality filter for parent instance type',
            required: false,
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'A simple equality filter for project id',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['created_date', 'id', 'inherit', 'project_id', 'task_id', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedQualitySettingsListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualitySettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/quality/settings/{id}',
  tags: ['quality'],
  summary: 'Get quality settings instance details',
  operationId: 'quality_retrieve_settings',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'An id of a quality settings instance',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualitySettingsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const putApiQualitySettingsIdRoute = createRoute({
  method: 'put',
  path: '/api/quality/settings/{id}',
  tags: ['quality'],
  summary: 'Replace a quality settings instance',
  operationId: 'quality_update_settings',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'An id of a quality settings instance',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QualitySettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualitySettingsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiQualitySettingsIdRoute = createRoute({
  method: 'patch',
  path: '/api/quality/settings/{id}',
  tags: ['quality'],
  summary: 'Update a quality settings instance',
  operationId: 'quality_partial_update_settings',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'An id of a quality settings instance',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedQualitySettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualitySettingsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualitySettingsRequirementsRoute = createRoute({
  method: 'get',
  path: '/api/quality/settings/requirements',
  tags: ['quality'],
  summary: 'List quality requirements',
  operationId: 'quality_list_settings_requirements',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      annotation_type: z
        .enum([
          'tag',
          'rectangle',
          'skeleton',
          'skeleton_keypoint',
          'points',
          'polyline',
          'mask',
          'polygon',
          'ellipse',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'annotation_type',
            in: 'query',
            description: 'A simple equality filter for the annotation_type field',
            schema: {
              type: 'string',
              enum: [
                'tag',
                'rectangle',
                'skeleton',
                'skeleton_keypoint',
                'points',
                'polyline',
                'mask',
                'polygon',
                'ellipse',
              ],
            },
            required: false,
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description: 'A simple equality filter for the enabled field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['annotation_type', 'created_date', 'enabled', 'id', 'project_id', 'settings_id', 'task_id', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            schema: { type: 'integer' },
            description: 'Project id filter',
            required: false,
          },
        }),
      settings_id: z
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
            in: 'query',
            name: 'settings_id',
            schema: { type: 'integer' },
            description: 'Settings id filter',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['annotation_type', 'created_date', 'enabled', 'id', 'name', 'project_id', 'settings_id', 'sort_order', 'task_id', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
      task_id: z
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
            in: 'query',
            name: 'task_id',
            schema: { type: 'integer' },
            description: 'Task id filter',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/vnd.cvat+json': { schema: PaginatedQualityRequirementListItemListSchema },
      },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiQualitySettingsRequirementsRoute = createRoute({
  method: 'post',
  path: '/api/quality/settings/requirements',
  tags: ['quality'],
  summary: 'Create a quality requirement',
  operationId: 'quality_create_settings_requirements',
  request: {
    body: { content: { 'application/json': { schema: QualityRequirementRequestSchema } } },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityRequirementSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiQualitySettingsRequirementsIdRoute = createRoute({
  method: 'get',
  path: '/api/quality/settings/requirements/{id}',
  tags: ['quality'],
  summary: 'Get quality requirement details',
  operationId: 'quality_retrieve_settings_requirements',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality requirement.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityRequirementSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const putApiQualitySettingsRequirementsIdRoute = createRoute({
  method: 'put',
  path: '/api/quality/settings/requirements/{id}',
  tags: ['quality'],
  summary: 'Replace a quality requirement',
  operationId: 'quality_update_settings_requirements',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality requirement.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QualityRequirementRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityRequirementSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiQualitySettingsRequirementsIdRoute = createRoute({
  method: 'delete',
  path: '/api/quality/settings/requirements/{id}',
  tags: ['quality'],
  summary: 'Delete a quality requirement',
  operationId: 'quality_destroy_settings_requirements',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality requirement.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'Requirement deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiQualitySettingsRequirementsIdRoute = createRoute({
  method: 'patch',
  path: '/api/quality/settings/requirements/{id}',
  tags: ['quality'],
  summary: 'Update a quality requirement',
  operationId: 'quality_partial_update_settings_requirements',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this quality requirement.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedQualityRequirementRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: QualityRequirementSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiQualitySettingsRequirementsBulkRoute = createRoute({
  method: 'post',
  path: '/api/quality/settings/requirements/bulk',
  tags: ['quality'],
  summary: 'Create a hierarchy of quality requirements',
  operationId: 'quality_create_settings_requirements_bulk',
  request: {
    body: {
      content: { 'application/json': { schema: QualityRequirementBulkCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: z.array(QualityRequirementSchema) } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiRequestsRoute = createRoute({
  method: 'get',
  path: '/api/requests',
  tags: ['requests'],
  summary: 'List requests',
  operationId: 'requests_list',
  request: {
    query: z.object({
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'action',
            in: 'query',
            description: 'A simple equality filter for the action field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['action', 'format', 'job_id', 'org', 'org_id', 'project_id', 'status', 'subresource', 'target', 'task_id'].",
            schema: { type: 'string' },
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description: 'A simple equality filter for the format field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      job_id: z
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
            name: 'job_id',
            in: 'query',
            description: 'A simple equality filter for the job_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description: 'A simple equality filter for the org field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org_id: z
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
            name: 'org_id',
            in: 'query',
            description: 'A simple equality filter for the org_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      project_id: z
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
            name: 'project_id',
            in: 'query',
            description: 'A simple equality filter for the project_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['action', 'created_date', 'status']",
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['queued', 'started', 'failed', 'finished'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'A simple equality filter for the status field',
            schema: { type: 'string', enum: ['queued', 'started', 'failed', 'finished'] },
            required: false,
          },
        }),
      subresource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'subresource',
            in: 'query',
            description: 'A simple equality filter for the subresource field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'target',
            in: 'query',
            description: 'A simple equality filter for the target field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      task_id: z
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
            name: 'task_id',
            in: 'query',
            description: 'A simple equality filter for the task_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedRequestListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiRequestsIdRoute = createRoute({
  method: 'get',
  path: '/api/requests/{id}',
  tags: ['requests'],
  summary: 'Get request details',
  operationId: 'requests_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: RequestSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiRequestsIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/requests/{id}/cancel',
  tags: ['requests'],
  summary: 'Cancel request',
  operationId: 'requests_create_cancel',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: { 200: { description: 'The request has been cancelled' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiSchemaIndexRoute = createRoute({
  method: 'get',
  path: '/api/schema/',
  tags: ['schema'],
  description:
    'OpenApi3 schema for this API. Format can be selected via content negotiation.\n\n- YAML: application/vnd.oai.openapi\n- JSON: application/vnd.oai.openapi+json',
  operationId: 'schema_retrieve',
  request: {
    query: z.object({
      lang: z
        .enum([
          'af',
          'ar',
          'ar-dz',
          'ast',
          'az',
          'be',
          'bg',
          'bn',
          'br',
          'bs',
          'ca',
          'ckb',
          'cs',
          'cy',
          'da',
          'de',
          'dsb',
          'el',
          'en',
          'en-au',
          'en-gb',
          'eo',
          'es',
          'es-ar',
          'es-co',
          'es-mx',
          'es-ni',
          'es-ve',
          'et',
          'eu',
          'fa',
          'fi',
          'fr',
          'fy',
          'ga',
          'gd',
          'gl',
          'he',
          'hi',
          'hr',
          'hsb',
          'hu',
          'hy',
          'ia',
          'id',
          'ig',
          'io',
          'is',
          'it',
          'ja',
          'ka',
          'kab',
          'kk',
          'km',
          'kn',
          'ko',
          'ky',
          'lb',
          'lt',
          'lv',
          'mk',
          'ml',
          'mn',
          'mr',
          'ms',
          'my',
          'nb',
          'ne',
          'nl',
          'nn',
          'os',
          'pa',
          'pl',
          'pt',
          'pt-br',
          'ro',
          'ru',
          'sk',
          'sl',
          'sq',
          'sr',
          'sr-latn',
          'sv',
          'sw',
          'ta',
          'te',
          'tg',
          'th',
          'tk',
          'tr',
          'tt',
          'udm',
          'ug',
          'uk',
          'ur',
          'uz',
          'vi',
          'zh-hans',
          'zh-hant',
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lang',
            schema: {
              type: 'string',
              enum: [
                'af',
                'ar',
                'ar-dz',
                'ast',
                'az',
                'be',
                'bg',
                'bn',
                'br',
                'bs',
                'ca',
                'ckb',
                'cs',
                'cy',
                'da',
                'de',
                'dsb',
                'el',
                'en',
                'en-au',
                'en-gb',
                'eo',
                'es',
                'es-ar',
                'es-co',
                'es-mx',
                'es-ni',
                'es-ve',
                'et',
                'eu',
                'fa',
                'fi',
                'fr',
                'fy',
                'ga',
                'gd',
                'gl',
                'he',
                'hi',
                'hr',
                'hsb',
                'hu',
                'hy',
                'ia',
                'id',
                'ig',
                'io',
                'is',
                'it',
                'ja',
                'ka',
                'kab',
                'kk',
                'km',
                'kn',
                'ko',
                'ky',
                'lb',
                'lt',
                'lv',
                'mk',
                'ml',
                'mn',
                'mr',
                'ms',
                'my',
                'nb',
                'ne',
                'nl',
                'nn',
                'os',
                'pa',
                'pl',
                'pt',
                'pt-br',
                'ro',
                'ru',
                'sk',
                'sl',
                'sq',
                'sr',
                'sr-latn',
                'sv',
                'sw',
                'ta',
                'te',
                'tg',
                'th',
                'tk',
                'tr',
                'tt',
                'udm',
                'ug',
                'uk',
                'ur',
                'uz',
                'vi',
                'zh-hans',
                'zh-hant',
              ],
            },
            required: false,
          },
        }),
      scheme: z
        .enum(['json', 'yaml'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'scheme',
            schema: { type: 'string', enum: ['json', 'yaml'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/vnd.oai.openapi': { schema: z.object({}) },
        'application/yaml': { schema: z.object({}) },
        'application/vnd.oai.openapi+json': { schema: z.object({}) },
        'application/json': { schema: z.object({}) },
      },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiServerAboutRoute = createRoute({
  method: 'get',
  path: '/api/server/about',
  tags: ['server'],
  summary: 'Get basic CVAT information',
  operationId: 'server_retrieve_about',
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: AboutSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiServerAnnotationFormatsRoute = createRoute({
  method: 'get',
  path: '/api/server/annotation/formats',
  tags: ['server'],
  summary: 'Get supported annotation formats',
  operationId: 'server_retrieve_annotation_formats',
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: DatasetFormatsSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiServerPluginsRoute = createRoute({
  method: 'get',
  path: '/api/server/plugins',
  tags: ['server'],
  summary: 'Get enabled plugins',
  operationId: 'server_retrieve_plugins',
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: PluginsSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiServerShareRoute = createRoute({
  method: 'get',
  path: '/api/server/share',
  tags: ['server'],
  summary: 'List files/directories in the mounted share',
  operationId: 'server_list_share',
  request: {
    query: z.object({
      directory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'directory',
            schema: { type: 'string' },
            description: 'Directory to browse',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            description: 'Search for specific files',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: z.array(FileInfoSchema) } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksRoute = createRoute({
  method: 'get',
  path: '/api/tasks',
  tags: ['tasks'],
  summary: 'List tasks',
  operationId: 'tasks_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      assignee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'assignee',
            in: 'query',
            description: 'A simple equality filter for the assignee field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dimension: z
        .enum(['1d', '2d', '3d'])
        .exactOptional()
        .openapi({
          param: {
            name: 'dimension',
            in: 'query',
            description: 'A simple equality filter for the dimension field',
            schema: { type: 'string', enum: ['1d', '2d', '3d'] },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'assignee\', \'created_date\', \'dimension\', \'id\', \'media_type\', \'mode\', \'name\', \'owner\', \'project_id\', \'project_name\', \'status\', \'subset\', \'tracker_link\', \'updated_date\', \'validation_mode\'].\n\nThere are few examples for complex filtering tasks:\n\n    - Get all tasks from 1,2,3 projects - { "and" : [{ "in" : [{ "var" : "project_id" }, [1, 2, 3]]}]}\n\n    - Get all completed tasks from 1 project - { "and": [{ "==": [{ "var" : "status" }, "completed"]}, { "==" : [{ "var" : "project_id"}, 1]}]}\n\n',
            schema: { type: 'string' },
          },
        }),
      media_type: z
        .enum(['image', 'point_cloud', 'audio'])
        .exactOptional()
        .openapi({
          param: {
            name: 'media_type',
            in: 'query',
            description: 'A simple equality filter for the media_type field',
            schema: { type: 'string', enum: ['image', 'point_cloud', 'audio'] },
            required: false,
          },
        }),
      mode: z
        .enum(['annotation', 'interpolation'])
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            description: 'A simple equality filter for the mode field',
            schema: { type: 'string', enum: ['annotation', 'interpolation'] },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A simple equality filter for the name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      project_id: z
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
            name: 'project_id',
            in: 'query',
            description: 'A simple equality filter for the project_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_name',
            in: 'query',
            description: 'A simple equality filter for the project_name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description:
              "A search term. Available search_fields: ['assignee', 'name', 'owner', 'project_name', 'subset', 'tracker_link']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['assignee', 'created_date', 'dimension', 'id', 'media_type', 'mode', 'name', 'owner', 'project_id', 'project_name', 'status', 'subset', 'tracker_link', 'updated_date', 'validation_mode']",
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['annotation', 'validation', 'completed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'A simple equality filter for the status field',
            schema: { type: 'string', enum: ['annotation', 'validation', 'completed'] },
            required: false,
          },
        }),
      subset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'subset',
            in: 'query',
            description: 'A simple equality filter for the subset field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tracker_link: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tracker_link',
            in: 'query',
            description: 'A simple equality filter for the tracker_link field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validation_mode: z
        .enum(['gt', 'gt_pool'])
        .exactOptional()
        .openapi({
          param: {
            name: 'validation_mode',
            in: 'query',
            description: 'A simple equality filter for the validation_mode field',
            schema: { type: 'string', enum: ['gt', 'gt_pool'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedTaskReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksRoute = createRoute({
  method: 'post',
  path: '/api/tasks',
  tags: ['tasks'],
  summary: 'Create a task',
  description:
    'The new task will not have any attached images or videos.\nTo attach them, use the /api/tasks/<id>/data endpoint.\n',
  operationId: 'tasks_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskWriteRequestSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/vnd.cvat+json': { schema: TaskReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}',
  tags: ['tasks'],
  summary: 'Get task details',
  operationId: 'tasks_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: TaskReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiTasksIdRoute = createRoute({
  method: 'delete',
  path: '/api/tasks/{id}',
  tags: ['tasks'],
  summary: 'Delete a task',
  description: 'All attached jobs, annotations and data will be deleted as well.',
  operationId: 'tasks_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The task has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiTasksIdRoute = createRoute({
  method: 'patch',
  path: '/api/tasks/{id}',
  tags: ['tasks'],
  summary: 'Update a task',
  operationId: 'tasks_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchedTaskWriteRequestSchema,
          examples: {
            UpdateTaskProperties: {
              summary: 'Update task properties',
              value: {
                name: 'string',
                owner_id: 0,
                assignee_id: 0,
                bug_tracker: 'string',
                subset: 'string',
                target_storage: { location: 'cloud_storage', cloud_storage_id: 0 },
                source_storage: { location: 'cloud_storage', cloud_storage_id: 0 },
              },
            },
            UpdateTaskLabels: {
              summary: 'Update task labels',
              value: {
                labels: [
                  {
                    name: 'string',
                    color: 'string',
                    attributes: [],
                    deleted: false,
                    type: 'any',
                    svg: 'string',
                    sublabels: [
                      {
                        name: 'string',
                        color: 'string',
                        attributes: [],
                        type: 'any',
                        has_parent: true,
                      },
                    ],
                  },
                ],
              },
            },
            MoveTaskToAProject: { summary: 'Move task to a project', value: { project_id: 0 } },
            TransferTaskToPersonalSandbox: {
              summary: 'Transfer task to personal sandbox',
              value: { organization_id: null },
            },
            TransferTaskToOrganization: {
              summary: 'Transfer task to organization',
              value: { organization_id: 1 },
            },
            TransferAStorageLinkedTaskToAnOrganizationAndDetachStorages: {
              summary: 'Transfer a storage linked task to an organization and detach storages',
              value: {
                organization_id: 1,
                source_storage: { location: 'local', cloud_storage_id: null },
                target_storage: { location: 'local', cloud_storage_id: null },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: TaskReadSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdAnnotationsIndexRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/annotations/',
  tags: ['tasks'],
  summary: 'Get task annotations',
  operationId: 'tasks_retrieve_annotations',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: LabeledDataSchema } },
    },
    400: { description: 'Exporting without data is not allowed' },
    410: { description: 'API endpoint no longer handles exporting process' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const putApiTasksIdAnnotationsIndexRoute = createRoute({
  method: 'put',
  path: '/api/tasks/{id}/annotations/',
  tags: ['tasks'],
  summary: 'Replace task annotations',
  operationId: 'tasks_update_annotations',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: LabeledDataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              version: z
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
                .exactOptional(),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              shapes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        type: ShapeTypeSchema,
                        occluded: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        outside: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        z_order: z
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
                          .exactOptional(),
                        rotation: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(360),
                          )
                          .default(0)
                          .exactOptional(),
                        points: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              ),
                            ),
                          )
                          .exactOptional(),
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  type: ShapeTypeSchema,
                                  occluded: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  outside: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  z_order: z
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
                                    .exactOptional(),
                                  rotation: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(360),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  points: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z.preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.float64(),
                                        ),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  score: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(1),
                                    )
                                    .default(1)
                                    .exactOptional(),
                                })
                                .openapi({ required: ['frame', 'label_id', 'type'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'type'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              tracks: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        shapes: z.preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                type: ShapeTypeSchema,
                                occluded: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                outside: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                z_order: z
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
                                  .exactOptional(),
                                rotation: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64().min(0).max(360),
                                  )
                                  .default(0)
                                  .exactOptional(),
                                points: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                                attributes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          spec_id: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int(),
                                          ),
                                          value: z.string().max(4096),
                                        })
                                        .openapi({ required: ['spec_id', 'value'] }),
                                    ),
                                  )
                                  .default([])
                                  .exactOptional(),
                                id: z
                                  .preprocess(
                                    (val) => (val === 'null' ? null : val),
                                    z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int(),
                                      )
                                      .nullable(),
                                  )
                                  .exactOptional(),
                                frame: z.preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(0),
                                ),
                              })
                              .openapi({ required: ['frame', 'type'] }),
                          ),
                        ),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  shapes: z.preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          type: ShapeTypeSchema,
                                          occluded: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          outside: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          z_order: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          rotation: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64().min(0).max(360),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          points: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z.preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                ),
                                              ),
                                            )
                                            .exactOptional(),
                                          attributes: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    spec_id: z.preprocess(
                                                      (val) =>
                                                        typeof val === 'string' &&
                                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                          val,
                                                        ) &&
                                                        (!/^-?\d+$/.test(val) ||
                                                          Number.isSafeInteger(Number(val)))
                                                          ? Number(val)
                                                          : val,
                                                      z.int(),
                                                    ),
                                                    value: z.string().max(4096),
                                                  })
                                                  .openapi({ required: ['spec_id', 'value'] }),
                                              ),
                                            )
                                            .default([])
                                            .exactOptional(),
                                          id: z
                                            .preprocess(
                                              (val) => (val === 'null' ? null : val),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int(),
                                                )
                                                .nullable(),
                                            )
                                            .exactOptional(),
                                          frame: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int().min(0),
                                          ),
                                        })
                                        .openapi({ required: ['frame', 'type'] }),
                                    ),
                                  ),
                                })
                                .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              intervals: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        start: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int().min(0),
                          )
                          .openapi({ description: 'Must be within the task frame bounds.' }),
                        stop: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .openapi({
                            description:
                              'Exclusive interval end. May be one greater than the task stop frame.',
                          }),
                      })
                      .openapi({ required: ['label_id', 'start', 'stop'] }),
                  ),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Annotations have been replaced' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksIdAnnotationsIndexRoute = createRoute({
  method: 'post',
  path: '/api/tasks/{id}/annotations/',
  tags: ['tasks'],
  summary: 'Import annotations into a task',
  description:
    '\nThe request POST /api/tasks/id/annotations initiates a background process to import annotations into a task.\nPlease, use the GET /api/requests/<rq_id> endpoint for checking status of the process.\nThe `rq_id` parameter can be found in the response on initiating request.\n',
  operationId: 'tasks_create_annotations',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Annotation file name',
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Input format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: false,
          },
        }),
      import_mode: z
        .enum(['append', 'replace'])
        .default('replace')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'import_mode',
            schema: { type: 'string', enum: ['append', 'replace'], default: 'replace' },
            description: 'How to import annotations',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'where to import the annotation from',
            required: false,
          },
        }),
      use_default_location: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'use_default_location',
            schema: { type: 'boolean', default: true },
            description: 'Use the location that was configured in task to import annotations',
            deprecated: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: AnnotationFileRequestSchema },
        'multipart/form-data': { schema: AnnotationFileRequestSchema },
      },
    },
  },
  responses: {
    201: { description: 'Uploading has finished' },
    202: {
      description: 'Uploading has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    405: { description: 'Format is not available' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiTasksIdAnnotationsIndexRoute = createRoute({
  method: 'delete',
  path: '/api/tasks/{id}/annotations/',
  tags: ['tasks'],
  summary: 'Delete task annotations',
  operationId: 'tasks_destroy_annotations',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The annotation has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiTasksIdAnnotationsIndexRoute = createRoute({
  method: 'patch',
  path: '/api/tasks/{id}/annotations/',
  tags: ['tasks'],
  summary: 'Update task annotations',
  operationId: 'tasks_partial_update_annotations',
  request: {
    query: z.object({
      action: z
        .enum(['create', 'delete', 'update'])
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            schema: { type: 'string', enum: ['create', 'delete', 'update'] },
            required: true,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PatchedLabeledDataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              version: z
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
                .exactOptional(),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              shapes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        type: ShapeTypeSchema,
                        occluded: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        outside: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .default(false)
                          .exactOptional(),
                        z_order: z
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
                          .exactOptional(),
                        rotation: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(360),
                          )
                          .default(0)
                          .exactOptional(),
                        points: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              ),
                            ),
                          )
                          .exactOptional(),
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  type: ShapeTypeSchema,
                                  occluded: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  outside: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .default(false)
                                    .exactOptional(),
                                  z_order: z
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
                                    .exactOptional(),
                                  rotation: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(360),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  points: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z.preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.float64(),
                                        ),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  score: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.float64().min(0).max(1),
                                    )
                                    .default(1)
                                    .exactOptional(),
                                })
                                .openapi({ required: ['frame', 'label_id', 'type'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'type'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              tracks: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        frame: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        shapes: z.preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                type: ShapeTypeSchema,
                                occluded: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                outside: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .default(false)
                                  .exactOptional(),
                                z_order: z
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
                                  .exactOptional(),
                                rotation: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64().min(0).max(360),
                                  )
                                  .default(0)
                                  .exactOptional(),
                                points: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                                attributes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          spec_id: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int(),
                                          ),
                                          value: z.string().max(4096),
                                        })
                                        .openapi({ required: ['spec_id', 'value'] }),
                                    ),
                                  )
                                  .default([])
                                  .exactOptional(),
                                id: z
                                  .preprocess(
                                    (val) => (val === 'null' ? null : val),
                                    z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int(),
                                      )
                                      .nullable(),
                                  )
                                  .exactOptional(),
                                frame: z.preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(0),
                                ),
                              })
                              .openapi({ required: ['frame', 'type'] }),
                          ),
                        ),
                        elements: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  id: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int(),
                                        )
                                        .nullable(),
                                    )
                                    .exactOptional(),
                                  label_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  group: z
                                    .preprocess(
                                      (val) => (val === 'null' ? null : val),
                                      z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int().min(0),
                                        )
                                        .nullable(),
                                    )
                                    .default(0)
                                    .exactOptional(),
                                  source: z.string().min(1).default('manual').exactOptional(),
                                  frame: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int().min(0),
                                  ),
                                  attributes: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .object({
                                            spec_id: z.preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            ),
                                            value: z.string().max(4096),
                                          })
                                          .openapi({ required: ['spec_id', 'value'] }),
                                      ),
                                    )
                                    .default([])
                                    .exactOptional(),
                                  shapes: z.preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          type: ShapeTypeSchema,
                                          occluded: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          outside: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .default(false)
                                            .exactOptional(),
                                          z_order: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.int(),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          rotation: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64().min(0).max(360),
                                            )
                                            .default(0)
                                            .exactOptional(),
                                          points: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z.preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                ),
                                              ),
                                            )
                                            .exactOptional(),
                                          attributes: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    spec_id: z.preprocess(
                                                      (val) =>
                                                        typeof val === 'string' &&
                                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                          val,
                                                        ) &&
                                                        (!/^-?\d+$/.test(val) ||
                                                          Number.isSafeInteger(Number(val)))
                                                          ? Number(val)
                                                          : val,
                                                      z.int(),
                                                    ),
                                                    value: z.string().max(4096),
                                                  })
                                                  .openapi({ required: ['spec_id', 'value'] }),
                                              ),
                                            )
                                            .default([])
                                            .exactOptional(),
                                          id: z
                                            .preprocess(
                                              (val) => (val === 'null' ? null : val),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int(),
                                                )
                                                .nullable(),
                                            )
                                            .exactOptional(),
                                          frame: z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int().min(0),
                                          ),
                                        })
                                        .openapi({ required: ['frame', 'type'] }),
                                    ),
                                  ),
                                })
                                .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                            ),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['frame', 'label_id', 'shapes'] }),
                  ),
                )
                .default([])
                .exactOptional(),
              intervals: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int(),
                              )
                              .nullable(),
                          )
                          .exactOptional(),
                        label_id: z.preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int().min(0),
                        ),
                        group: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .default(0)
                          .exactOptional(),
                        source: z.string().min(1).default('manual').exactOptional(),
                        attributes: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  spec_id: z.preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int(),
                                  ),
                                  value: z.string().max(4096),
                                })
                                .openapi({ required: ['spec_id', 'value'] }),
                            ),
                          )
                          .default([])
                          .exactOptional(),
                        score: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64().min(0).max(1),
                          )
                          .default(1)
                          .exactOptional(),
                        start: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int().min(0),
                          )
                          .openapi({ description: 'Must be within the task frame bounds.' }),
                        stop: z
                          .preprocess(
                            (val) => (val === 'null' ? null : val),
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int().min(0),
                              )
                              .nullable(),
                          )
                          .openapi({
                            description:
                              'Exclusive interval end. May be one greater than the task stop frame.',
                          }),
                      })
                      .openapi({ required: ['label_id', 'start', 'stop'] }),
                  ),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: LabeledDataSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksIdBackupExportRoute = createRoute({
  method: 'post',
  path: '/api/tasks/{id}/backup/export',
  tags: ['tasks'],
  summary: 'Initiate process to backup resource',
  description:
    'The request `POST /api/<projects|tasks>/id/backup/export` will initialize\na background process to backup a resource. To check status of the process\nplease, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.\n',
  operationId: 'tasks_create_backup_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Backup file name',
            required: false,
          },
        }),
      lightweight: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lightweight',
            schema: { type: 'boolean', default: true },
            description:
              'Makes a lightweight backup (without media files) for tasks whose media is located in cloud storage',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save downloaded backup',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Creating a backup file has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    400: { description: 'Wrong query parameters were passed' },
    409: {
      description: 'The backup process has already been initiated and is not yet finished',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdDataIndexRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/data/',
  tags: ['tasks'],
  summary: 'Get data of a task',
  operationId: 'tasks_retrieve_data',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    query: z.object({
      number: z
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
            in: 'query',
            name: 'number',
            schema: { type: 'integer' },
            description: 'A unique number value identifying chunk or frame',
            required: false,
          },
        }),
      quality: z
        .enum(['compressed', 'original'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'quality',
            schema: { type: 'string', enum: ['compressed', 'original'] },
            description: 'Specifies the quality level of the requested data',
            required: false,
          },
        }),
      type: z
        .enum(['chunk', 'context_image', 'frame'])
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string', enum: ['chunk', 'context_image', 'frame'] },
            description: 'Specifies the type of the requested data',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Data of a specific type',
      headers: z.object({
        'X-Checksum': {
          description: 'Data checksum, applicable for chunks only',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Data checksum, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Updated-Date': {
          description: 'Data update date, applicable for chunks only',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'Data update date, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
    206: {
      description: 'Partial chunk data',
      headers: z.object({
        'X-Checksum': {
          description: 'Data checksum, applicable for chunks only',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Data checksum, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
        'X-Updated-Date': {
          description: 'Data update date, applicable for chunks only',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'Data update date, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
    416: {
      description: 'Requested range is not satisfiable',
      headers: z.object({
        'X-Chunk-Size': {
          description: 'Decoded chunk size in bytes, applicable for chunks only',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Decoded chunk size in bytes, applicable for chunks only',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksIdDataIndexRoute = createRoute({
  method: 'post',
  path: '/api/tasks/{id}/data/',
  tags: ['tasks'],
  summary: 'Attach data to a task',
  description:
    "Allows to upload data (images, video, etc.) to a task.\nSupports the TUS open file uploading protocol (https://tus.io/).\n\nSupports the following protocols:\n\n1. A single Data request\n\nand\n\n2.1. An Upload-Start request\n2.2.a. Regular TUS protocol requests (Upload-Length + Chunks)\n2.2.b. Upload-Multiple requests\n2.3. An Upload-Finish request\n\nRequests:\n- Data - POST, no extra headers or 'Upload-Start' + 'Upload-Finish' headers.\n  Contains data in the body.\n- Upload-Start - POST, has an 'Upload-Start' header. No body is expected.\n- Upload-Length - POST, has an 'Upload-Length' header (see the TUS specification)\n- Chunk - HEAD/PATCH (see the TUS specification). Sent to /data/<file id> endpoints.\n- Upload-Finish - POST, has an 'Upload-Finish' header. Can contain data in the body.\n- Upload-Multiple - POST, has an 'Upload-Multiple' header. Contains data in the body.\n\nThe 'Upload-Finish' request allows to specify the uploaded files should be ordered.\nThis may be needed if the files can be sent unordered. To state that the input files\nare sent ordered, pass an empty list of files in the 'upload_file_order' field.\nIf the files are sent unordered, the ordered file list is expected\nin the 'upload_file_order' field. It must be a list of string file paths,\nrelative to the dataset root.\n\nExample:\nfiles = [\n    \"cats/cat_1.jpg\",\n    \"dogs/dog2.jpg\",\n    \"image_3.png\",\n    ...\n]\n\nIndependently of the file declaration field used\n('client_files', 'server_files', etc.), when the 'predefined'\nsorting method is selected, the uploaded files will be ordered according\nto the '.jsonl' manifest file, if it is found in the list of files.\nFor archives (e.g. '.zip'), a manifest file ('*.jsonl') is required when using\nthe 'predefined' file ordering. Such file must be provided next to the archive\nin the list of files. Read more about manifest files here:\nhttps://docs.cvat.ai/docs/manual/advanced/dataset_manifest/\n\nAfter all data is sent, the operation status can be retrieved via\nthe `GET /api/requests/<rq_id>`, where **rq_id** is request ID returned for this request.\n\nOnce data is attached to a task, it cannot be detached or replaced.\n",
  operationId: 'tasks_create_data',
  request: {
    headers: z.object({
      'Upload-Finish': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upload-Finish',
            schema: { type: 'boolean' },
            description:
              'Finishes data upload. Can be combined with Upload-Start header to create task data with one request',
            required: false,
          },
        }),
      'Upload-Multiple': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upload-Multiple',
            schema: { type: 'boolean' },
            description:
              'Indicates that data with this request are single or multiple files that should be attached to a task',
            required: false,
          },
        }),
      'Upload-Start': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Upload-Start',
            schema: { type: 'boolean' },
            description:
              'Initializes data upload. Optionally, can include upload metadata in the request body.',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              chunk_size: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(0).max(2147483647),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({ description: 'Maximum number of frames per chunk' }),
              image_quality: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(100),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Image quality to use during annotation, required for image and video-based tasks',
                }),
              start_frame: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(0).max(2147483647),
                )
                .exactOptional()
                .openapi({ description: 'First frame index' }),
              stop_frame: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(0).max(2147483647),
                )
                .exactOptional()
                .openapi({ description: 'Last frame index' }),
              frame_filter: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: "Frame filter. The only supported syntax is: 'step=N'" }),
              client_files: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .default([])
                .exactOptional()
                .openapi({
                  description:
                    '\nUploaded files.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
                }),
              server_files: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(1).max(1024)),
                )
                .default([])
                .exactOptional()
                .openapi({
                  description:
                    '\nPaths to files from a file share mounted on the server, or from a cloud storage.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
                }),
              remote_files: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(1).max(1024)),
                )
                .default([])
                .exactOptional()
                .openapi({
                  description:
                    '\nDirect download URLs for files.\nMust contain all files from job_file_mapping if job_file_mapping is not empty.\n',
                }),
              use_zip_chunks: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, video chunks will be represented as zip archives with decoded video frames.\nWhen false, video chunks are represented as video segments\n',
                }),
              server_files_exclude: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(1).max(1024)),
                )
                .default([])
                .exactOptional()
                .openapi({
                  description:
                    "Paths to files and directories from a file share mounted on the server, or from a cloud storage\nthat should be excluded from the directories specified in server_files.\nThis option cannot be used together with filename_pattern.\nThe server_files_exclude parameter cannot be used to exclude a part of dataset from an archive.\n\nExamples:\n\nExclude all files from subfolder 'sub/sub_1/sub_2'and single file 'sub/image.jpg' from specified folder:\nserver_files = ['sub/'], server_files_exclude = ['sub/sub_1/sub_2/', 'sub/image.jpg']\n\nExclude all cloud storage files with prefix 'sub' from the content of manifest file:\nserver_files = ['manifest.jsonl'], server_files_exclude = ['sub/']\n",
                }),
              cloud_storage_id: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  writeOnly: true,
                  description:
                    'If not null, the files referenced by server_files will be retrieved\nfrom the cloud storage with the specified ID.\nThe cloud storages applicable depend on the context.\nIn the user sandbox, only the user sandbox cloud storages can be used.\nIn an organization, only the organization cloud storages can be used.\n',
                }),
              use_cache: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Enable or disable task data chunk caching for the task.\nRead more: https://docs.cvat.ai/docs/manual/advanced/data_on_fly/\n',
                }),
              copy_data: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Copy data from the server file share to CVAT during the task creation.\nThis will create a copy of the data, making the server independent from\nthe file share availability\n',
                }),
              storage_method: StorageMethodSchema.exactOptional(),
              sorting_method: SortingMethodSchema.exactOptional(),
              filename_pattern: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.string().min(1).nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'A filename filter for cloud storage files\nlisted in the manifest. Supports fnmatch wildcards.\nRead more: https://docs.python.org/3/library/fnmatch.html\n',
                }),
              job_file_mapping: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z.preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string().min(1).max(1024)),
                    ),
                  ),
                )
                .exactOptional()
                .openapi({
                  writeOnly: true,
                  description:
                    '\nRepresents a file-to-job mapping.\nUseful to specify a custom job configuration during task creation.\nThis option is not compatible with most other job split-related options.\nFiles in the jobs must not overlap or repeat.\nJob file mapping files must be a subset of the input files.\nIf directories are specified in server_files, all files obtained by recursive search\nin the specified directories will be used as input files.\nIn case of missing items in the input files, an error will be raised.\n\nExample:\n[\n\n    ["file1.jpg", "file2.jpg"], # job #1 files\n    ["file3.png"], # job #2 files\n    ["file4.jpg", "file5.png", "file6.bmp"], # job #3 files\n]\n',
                }),
              upload_file_order: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(1).max(1024)),
                )
                .exactOptional()
                .openapi({
                  writeOnly: true,
                  description:
                    'Allows to specify file order for client_file uploads.\nOnly valid with the "predefined" sorting method selected.\n\nTo state that the input files are sent in the correct order,\npass an empty list.\n\nIf you want to send files in an arbitrary order\nand reorder them afterwards on the server,\npass the list of file names in the required order.\n',
                }),
              validation_params: z
                .object({
                  mode: ValidationModeSchema,
                  frame_selection_method: FrameSelectionMethodSchema.exactOptional(),
                  random_seed: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(0),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The seed value for the random number generator.\nThe same value will produce the same frame sets.\nApplicable only to random frame selection methods.\nBy default, a random value is used.\n',
                    }),
                  frames: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string().min(1).max(1024)),
                    )
                    .exactOptional()
                    .openapi({
                      writeOnly: true,
                      description:
                        'The list of file names to be included in the validation set.\nApplicable only to the "manual" frame selection method.\nCan only be used for images.\n',
                    }),
                  frame_count: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(1),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of frames to be included in the validation set.\nApplicable only to the "random_uniform" frame selection method\n',
                    }),
                  frame_share: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float64(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The share of frames to be included in the validation set.\nApplicable only to the "random_uniform" frame selection method\n',
                    }),
                  frames_per_job_count: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(1),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of frames to be included in the validation set from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
                    }),
                  frames_per_job_share: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float64(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The share of frames to be included in the validation set from each annotation job.\nApplicable only to the "random_per_job" frame selection method\n',
                    }),
                })
                .openapi({ required: ['mode'] })
                .nullable()
                .exactOptional(),
            })
            .openapi({
              description:
                'Read more about parameters here:\nhttps://docs.cvat.ai/docs/manual/basics/create-annotation-task/#advanced-configuration',
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Request to attach a data to a task has been accepted',
      content: { 'application/vnd.cvat+json': { schema: DataResponseSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdDataMetaRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/data/meta',
  tags: ['tasks'],
  summary: 'Get metainformation for media files in a task',
  operationId: 'tasks_retrieve_data_meta',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: DataMetaReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiTasksIdDataMetaRoute = createRoute({
  method: 'patch',
  path: '/api/tasks/{id}/data/meta',
  tags: ['tasks'],
  summary: 'Update metainformation for media files in a task',
  operationId: 'tasks_partial_update_data_meta',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedDataMetaWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: DataMetaReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksIdDatasetExportRoute = createRoute({
  method: 'post',
  path: '/api/tasks/{id}/dataset/export',
  tags: ['tasks'],
  summary: 'Initialize process to export resource as a dataset in a specific format',
  description:
    'The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize\na background process to export a dataset. To check status of the process\nplease, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.\n',
  operationId: 'tasks_create_dataset_export',
  request: {
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Desired output file name',
            required: false,
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            description:
              'Desired output format name\nYou can get the list of supported formats at:\n/server/annotation/formats',
            required: true,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'] },
            description: 'Where need to save downloaded dataset',
            required: false,
          },
        }),
      save_images: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'save_images',
            schema: { type: 'boolean', default: false },
            description: 'Include images or not',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Exporting has been started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
    405: { description: 'Format is not available' },
    409: {
      description: 'Exporting is already in progress',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdPreviewRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/preview',
  tags: ['tasks'],
  summary: 'Get a preview image for a task',
  operationId: 'tasks_retrieve_preview',
  request: {
    headers: z.object({
      Prefer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Prefer',
            schema: { type: 'string' },
            description:
              'RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Task image preview' },
    204: {
      description:
        'No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.',
    },
    404: { description: 'Task image preview not found' },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdStatusRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/status',
  tags: ['tasks'],
  summary: 'Get the creation status of a task',
  description:
    'This method is deprecated and will be removed in one of the next releases. To check status of task creation, use new common API for managing background operations: GET /api/requests/?action=create&task_id=<task_id>',
  operationId: 'tasks_retrieve_status',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: RqStatusSchema } } },
  },
  deprecated: true,
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiTasksIdValidationLayoutRoute = createRoute({
  method: 'get',
  path: '/api/tasks/{id}/validation_layout',
  tags: ['tasks'],
  summary: 'Allows getting current validation configuration',
  operationId: 'tasks_retrieve_validation_layout',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: TaskValidationLayoutReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiTasksIdValidationLayoutRoute = createRoute({
  method: 'patch',
  path: '/api/tasks/{id}/validation_layout',
  tags: ['tasks'],
  summary: 'Allows updating current validation configuration',
  description:
    "\nWARNING: this operation is not protected from race conditions.\nIt's up to the user to ensure no parallel calls to this operation happen.\nIt affects image access, including exports with images, backups, chunk downloading etc.\n",
  operationId: 'tasks_partial_update_validation_layout',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this task.',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchedTaskValidationLayoutWriteRequestSchema,
          examples: {
            SetHoneypotsToRandomValidationFrames: {
              summary: 'set honeypots to random validation frames',
              value: { frame_selection_method: 'random_uniform' },
            },
            SetHoneypotsManually: {
              summary: 'set honeypots manually',
              value: { frame_selection_method: 'manual', honeypot_real_frames: [10, 20, 22] },
            },
            DisableValidationFrames: {
              summary: 'disable validation frames',
              value: { disabled_frames: [4, 5, 8] },
            },
            RestoreAllValidationFrames: {
              summary: 'restore all validation frames',
              value: { disabled_frames: [] },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: TaskValidationLayoutReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiTasksBackupIndexRoute = createRoute({
  method: 'post',
  path: '/api/tasks/backup/',
  tags: ['tasks'],
  summary: 'Recreate a task from a backup',
  description:
    '\nThe backup import process is as follows:\n\nThe first request POST /api/tasks/backup creates a background job on the server\nin which the process of a task creating from an uploaded backup is carried out.\n\nTo check the status of the import process, use GET /api/requests/rq_id,\nwhere rq_id is the request ID obtained from the response to the previous request.\n\nOnce the import completes successfully, the response will contain the ID\nof the newly created task in the result_id field.\n',
  operationId: 'tasks_create_backup',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      cloud_storage_id: z
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
            in: 'query',
            name: 'cloud_storage_id',
            schema: { type: 'integer' },
            description: 'Storage id',
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            description: 'Backup file name',
            required: false,
          },
        }),
      location: z
        .enum(['cloud_storage', 'local'])
        .default('local')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            schema: { type: 'string', enum: ['cloud_storage', 'local'], default: 'local' },
            description: 'Where to import the backup file from',
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TaskFileRequestSchema },
        'multipart/form-data': { schema: TaskFileRequestSchema },
      },
    },
  },
  responses: {
    202: {
      description: 'Import of the backup file has started',
      content: { 'application/vnd.cvat+json': { schema: RqIdSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiUsersRoute = createRoute({
  method: 'get',
  path: '/api/users',
  tags: ['users'],
  summary: 'List users',
  operationId: 'users_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              '\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: [\'first_name\', \'id\', \'is_active\', \'last_name\', \'username\'].',
            schema: { type: 'string' },
          },
        }),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'first_name',
            in: 'query',
            description: 'A simple equality filter for the first_name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'is_active',
            in: 'query',
            description: 'A simple equality filter for the is_active field',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'last_name',
            in: 'query',
            description: 'A simple equality filter for the last_name field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description:
              "A search term. Available search_fields: ['first_name', 'last_name', 'username']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['first_name', 'id', 'is_active', 'last_name', 'username']",
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            description: 'A simple equality filter for the username field',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedMetaUserListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiUsersIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}',
  tags: ['users'],
  summary: 'Get user details',
  operationId: 'users_retrieve',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this user.',
            required: true,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: MetaUserSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiUsersIdRoute = createRoute({
  method: 'delete',
  path: '/api/users/{id}',
  tags: ['users'],
  summary: 'Delete a user',
  operationId: 'users_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this user.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The user has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiUsersIdRoute = createRoute({
  method: 'patch',
  path: '/api/users/{id}',
  tags: ['users'],
  summary: 'Update a user',
  operationId: 'users_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this user.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedUserRequestSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: MetaUserSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiUsersSelfRoute = createRoute({
  method: 'get',
  path: '/api/users/self',
  tags: ['users'],
  summary: 'Get details of the current user',
  description: 'Method returns an instance of a user who is currently authenticated',
  operationId: 'users_retrieve_self',
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: MetaUserSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiWebhooksRoute = createRoute({
  method: 'get',
  path: '/api/webhooks',
  tags: ['webhooks'],
  summary: 'List webhooks',
  operationId: 'webhooks_list',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Organization',
            in: 'header',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            required: false,
            in: 'query',
            description:
              "\nJSON Logic filter. This filter can be used to perform complex filtering by grouping rules.\n\nFor example, using such a filter you can get all resources created by you:\n\n    - {\"and\":[{\"==\":[{\"var\":\"owner\"},\"<user>\"]}]}\n\nDetails about the syntax used can be found at the link: https://jsonlogic.com/\n\n Available filter_fields: ['description', 'id', 'owner', 'project_id', 'target_url', 'type', 'updated_date'].",
            schema: { type: 'string' },
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'org',
            in: 'query',
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      org_id: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'org_id',
            in: 'query',
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            schema: { type: 'integer' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            description: 'A simple equality filter for the owner field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      project_id: z
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
            name: 'project_id',
            in: 'query',
            description: 'A simple equality filter for the project_id field',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description:
              "A search term. Available search_fields: ['description', 'owner', 'target_url']",
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description:
              "Which field to use when ordering the results. Available ordering_fields: ['description', 'id', 'owner', 'project_id', 'target_url', 'type', 'updated_date']",
            schema: { type: 'string' },
          },
        }),
      target_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'target_url',
            in: 'query',
            description: 'A simple equality filter for the target_url field',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['organization', 'project', 'server'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'A simple equality filter for the type field',
            schema: { type: 'string', enum: ['organization', 'project', 'server'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedWebhookReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiWebhooksRoute = createRoute({
  method: 'post',
  path: '/api/webhooks',
  tags: ['webhooks'],
  summary: 'Create a webhook',
  operationId: 'webhooks_create',
  request: {
    headers: z.object({
      'X-Organization': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Organization',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'Organization unique slug.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA non-empty value selects that organization.\n',
            required: false,
          },
        }),
      org_id: z
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
            in: 'query',
            name: 'org_id',
            schema: { type: 'integer' },
            description:
              'Organization unique id.\nIf omitted, results from all organizations available to the user are returned\n(unfiltered). An empty value ("") selects the personal sandbox workspace only.\nA positive integer selects that organization.\n',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WebhookWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/api/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Get webhook details',
  operationId: 'webhooks_retrieve',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const putApiWebhooksIdRoute = createRoute({
  method: 'put',
  path: '/api/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Replace a webhook',
  operationId: 'webhooks_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WebhookWriteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const deleteApiWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/api/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Delete a webhook',
  operationId: 'webhooks_destroy',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'The webhook has been deleted' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const patchApiWebhooksIdRoute = createRoute({
  method: 'patch',
  path: '/api/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Update a webhook',
  operationId: 'webhooks_partial_update',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchedWebhookWriteRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiWebhooksIdDeliveriesRoute = createRoute({
  method: 'get',
  path: '/api/webhooks/{id}/deliveries',
  tags: ['webhooks'],
  summary: 'List deliveries for a webhook',
  operationId: 'webhooks_list_deliveries',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
    query: z.object({
      page: z
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
            name: 'page',
            required: false,
            in: 'query',
            description: 'A page number within the paginated result set.',
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            name: 'page_size',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: PaginatedWebhookDeliveryReadListSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiWebhooksIdDeliveriesDeliveryIdRoute = createRoute({
  method: 'get',
  path: '/api/webhooks/{id}/deliveries/{delivery_id}',
  tags: ['webhooks'],
  summary: 'Get details of a webhook delivery',
  operationId: 'webhooks_retrieve_deliveries',
  request: {
    params: z.object({
      delivery_id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            in: 'path',
            name: 'delivery_id',
            schema: { type: 'string', pattern: '^\\d+$' },
            required: true,
          },
        }),
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookDeliveryReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute = createRoute({
  method: 'post',
  path: '/api/webhooks/{id}/deliveries/{delivery_id}/redelivery',
  tags: ['webhooks'],
  summary: 'Redeliver a webhook delivery',
  operationId: 'webhooks_create_deliveries_redelivery',
  request: {
    params: z.object({
      delivery_id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            in: 'path',
            name: 'delivery_id',
            schema: { type: 'string', pattern: '^\\d+$' },
            required: true,
          },
        }),
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response body' } },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const postApiWebhooksIdPingRoute = createRoute({
  method: 'post',
  path: '/api/webhooks/{id}/ping',
  tags: ['webhooks'],
  summary: 'Send a ping webhook',
  operationId: 'webhooks_create_ping',
  request: {
    params: z.object({
      id: z
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
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this webhook.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/vnd.cvat+json': { schema: WebhookDeliveryReadSchema } },
    },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})

export const getApiWebhooksEventsRoute = createRoute({
  method: 'get',
  path: '/api/webhooks/events',
  tags: ['webhooks'],
  summary: 'List available webhook events',
  operationId: 'webhooks_retrieve_events',
  request: {
    query: z.object({
      type: z
        .enum(['all', 'organization', 'project', 'server'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: {
              type: 'string',
              enum: ['all', 'organization', 'project', 'server'],
              default: 'all',
            },
            description: 'Type of webhook',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.cvat+json': { schema: EventsSchema } } },
  },
  security: [
    { tokenAuth: [] },
    { accessTokenAuth: [] },
    { sessionAuth: [], csrfAuth: [], csrfHeaderAuth: [] },
    { basicAuth: [] },
  ],
})
