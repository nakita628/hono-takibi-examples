import { createRoute, z } from '@hono/zod-openapi'

const GoogleTypeMoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('GoogleTypeMoney')

const GoogleCloudRecommenderV1beta1CostProjectionSchema = z
  .object({
    cost: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        "An approximate projection on amount saved or amount incurred. Negative cost units indicate cost savings and positive cost units indicate increase. See google.type.Money documentation for positive/negative units. A user's permissions may affect whether the cost is computed using list prices or custom contract prices.",
    }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration for which this cost applies.' }),
  })
  .openapi({
    description: 'Contains metadata about how much money a recommendation can save or incur.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1CostProjection')

const GoogleCloudRecommenderV1beta1ReliabilityProjectionSchema = z
  .object({
    details: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Per-recommender projection.' }),
    risks: z
      .array(z.enum(['RISK_TYPE_UNSPECIFIED', 'SERVICE_DISRUPTION', 'DATA_LOSS', 'ACCESS_DENY']))
      .exactOptional()
      .openapi({ description: 'Reliability risks mitigated by this recommendation.' }),
  })
  .openapi({
    description: 'Contains information on the impact of a reliability recommendation.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1ReliabilityProjection')

const GoogleCloudRecommenderV1beta1SecurityProjectionSchema = z
  .object({
    details: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'This field can be used by the recommender to define details specific to security impact.',
      }),
  })
  .openapi({
    description: 'Contains various ways of describing the impact on Security.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1SecurityProjection')

const GoogleCloudRecommenderV1beta1SustainabilityProjectionSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration for which this sustanability applies.' }),
    kgCO2e: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e).',
      }),
  })
  .openapi({
    description:
      'Contains metadata about how much sustainability a recommendation can save or incur.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1SustainabilityProjection')

const GoogleCloudRecommenderV1beta1ImpactSchema = z
  .object({
    category: z
      .enum([
        'CATEGORY_UNSPECIFIED',
        'COST',
        'SECURITY',
        'PERFORMANCE',
        'MANAGEABILITY',
        'SUSTAINABILITY',
        'RELIABILITY',
      ])
      .exactOptional()
      .openapi({ description: 'Category that is being targeted.' }),
    costProjection: GoogleCloudRecommenderV1beta1CostProjectionSchema.exactOptional().openapi({
      description: 'Use with CategoryType.COST',
    }),
    reliabilityProjection:
      GoogleCloudRecommenderV1beta1ReliabilityProjectionSchema.exactOptional().openapi({
        description: 'Use with CategoryType.RELIABILITY',
      }),
    securityProjection:
      GoogleCloudRecommenderV1beta1SecurityProjectionSchema.exactOptional().openapi({
        description: 'Use with CategoryType.SECURITY',
      }),
    sustainabilityProjection:
      GoogleCloudRecommenderV1beta1SustainabilityProjectionSchema.exactOptional().openapi({
        description: 'Use with CategoryType.SUSTAINABILITY',
      }),
  })
  .openapi({
    description: 'Contains the impact a recommendation can have for a given category.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1Impact')

const GoogleCloudRecommenderV1beta1InsightRecommendationReferenceSchema = z
  .object({
    recommendation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]',
      }),
  })
  .openapi({ description: 'Reference to an associated recommendation.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1InsightRecommendationReference')

const GoogleCloudRecommenderV1beta1InsightStateInfoSchema = z
  .object({
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'ACCEPTED', 'DISMISSED'])
      .exactOptional()
      .openapi({ description: 'Insight state.' }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'A map of metadata for the state, provided by user or automations systems.',
      }),
  })
  .openapi({ description: 'Information related to insight state.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1InsightStateInfo')

const GoogleCloudRecommenderV1beta1InsightSchema = z
  .object({
    associatedRecommendations: z
      .array(GoogleCloudRecommenderV1beta1InsightRecommendationReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Recommendations derived from this insight.' }),
    category: z
      .enum([
        'CATEGORY_UNSPECIFIED',
        'COST',
        'SECURITY',
        'PERFORMANCE',
        'MANAGEABILITY',
        'SUSTAINABILITY',
        'RELIABILITY',
      ])
      .exactOptional()
      .openapi({ description: 'Category being targeted by the insight.' }),
    content: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-form human readable summary in English. The maximum length is 500 characters.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fingerprint of the Insight. Provides optimistic locking when updating states.',
      }),
    insightSubtype: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Insight subtype. Insight content schema will be stable for a given subtype.',
      }),
    lastRefreshTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the latest data used to generate the insight.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the insight.' }),
    observationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).',
      }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({ description: "Insight's severity." }),
    stateInfo: GoogleCloudRecommenderV1beta1InsightStateInfoSchema.exactOptional().openapi({
      description: 'Information state and metadata.',
    }),
    targetResources: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Fully qualified resource names that this insight is targeting.' }),
  })
  .openapi({
    description:
      'An insight along with the information used to derive the insight. The insight may have associated recommendations as well.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1Insight')

const GoogleCloudRecommenderV1beta1InsightTypeGenerationConfigSchema = z
  .object({
    params: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes.',
      }),
  })
  .openapi({
    description:
      'A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig')

const GoogleCloudRecommenderV1beta1InsightTypeConfigSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-settable field to provide a human-readable name to be used in user interfaces.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.',
      }),
    insightTypeGenerationConfig:
      GoogleCloudRecommenderV1beta1InsightTypeGenerationConfigSchema.exactOptional().openapi({
        description:
          'InsightTypeGenerationConfig which configures the generation of insights for this insight type.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time when the config was updated.' }),
  })
  .openapi({ description: 'Configuration for an InsightType.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1InsightTypeConfig')

const GoogleCloudRecommenderV1beta1ListInsightsResponseSchema = z
  .object({
    insights: z
      .array(GoogleCloudRecommenderV1beta1InsightSchema)
      .exactOptional()
      .openapi({ description: 'The set of insights for the `parent` resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be used to request the next page of results. This field is empty if there are no additional results.',
      }),
  })
  .openapi({ description: 'Response to the `ListInsights` method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1ListInsightsResponse')

const GoogleCloudRecommenderV1beta1RecommendationInsightReferenceSchema = z
  .object({
    insight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID]',
      }),
  })
  .openapi({ description: 'Reference to an associated insight.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1RecommendationInsightReference')

const GoogleCloudRecommenderV1beta1ValueMatcherSchema = z
  .object({
    matchesPattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch',
      }),
  })
  .openapi({
    description: 'Contains various matching options for values for a GCP resource field.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1ValueMatcher')

const GoogleCloudRecommenderV1beta1OperationSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.',
      }),
    pathFilters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 } ``` * Example: ``` { "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null } ``` * Example: ``` { "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed.',
      }),
    pathValueMatchers: z
      .record(z.string(), GoogleCloudRecommenderV1beta1ValueMatcherSchema)
      .exactOptional()
      .openapi({
        description:
          'Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.',
      }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance',
      }),
    sourcePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types.",
      }),
    sourceResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Can be set with action \'copy\' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = \'copy\', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`.',
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.",
      }),
    valueMatcher: GoogleCloudRecommenderV1beta1ValueMatcherSchema.exactOptional().openapi({
      description:
        "Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.",
    }),
  })
  .openapi({
    description:
      'Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1Operation')

const GoogleCloudRecommenderV1beta1OperationGroupSchema = z
  .object({
    operations: z
      .array(GoogleCloudRecommenderV1beta1OperationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.',
      }),
  })
  .openapi({
    description: 'Group of operations that need to be performed atomically.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1OperationGroup')

const GoogleCloudRecommenderV1beta1RecommendationContentSchema = z
  .object({
    operationGroups: z
      .array(GoogleCloudRecommenderV1beta1OperationGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.',
      }),
    overview: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Condensed overview information about the recommendation.' }),
  })
  .openapi({
    description: 'Contains what resources are changing and how they are changing.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1RecommendationContent')

const GoogleCloudRecommenderV1beta1RecommendationStateInfoSchema = z
  .object({
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CLAIMED', 'SUCCEEDED', 'FAILED', 'DISMISSED'])
      .exactOptional()
      .openapi({ description: 'The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.' }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'A map of metadata for the state, provided by user or automations systems.',
      }),
  })
  .openapi({ description: 'Information for state. Contains state and metadata.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1RecommendationStateInfo')

const GoogleCloudRecommenderV1beta1RecommendationSchema = z
  .object({
    additionalImpact: z
      .array(GoogleCloudRecommenderV1beta1ImpactSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.',
      }),
    associatedInsights: z
      .array(GoogleCloudRecommenderV1beta1RecommendationInsightReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Insights that led to this recommendation.' }),
    content: GoogleCloudRecommenderV1beta1RecommendationContentSchema.exactOptional().openapi({
      description: 'Content of the recommendation describing recommended changes to resources.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-form human readable summary in English. The maximum length is 500 characters.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fingerprint of the Recommendation. Provides optimistic locking when updating states.',
      }),
    lastRefreshTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last time this recommendation was refreshed by the system that created it in the first place.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of recommendation.' }),
    primaryImpact: GoogleCloudRecommenderV1beta1ImpactSchema.exactOptional().openapi({
      description:
        'The primary impact that this recommendation can have while trying to optimize for one category.',
    }),
    priority: z
      .enum(['PRIORITY_UNSPECIFIED', 'P4', 'P3', 'P2', 'P1'])
      .exactOptional()
      .openapi({ description: "Recommendation's priority." }),
    recommenderSubtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"',
      }),
    stateInfo: GoogleCloudRecommenderV1beta1RecommendationStateInfoSchema.exactOptional().openapi({
      description: 'Information for state. Contains state and metadata.',
    }),
    xorGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.',
      }),
  })
  .openapi({
    description:
      'A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1Recommendation')

const GoogleCloudRecommenderV1beta1ListRecommendationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be used to request the next page of results. This field is empty if there are no additional results.',
      }),
    recommendations: z
      .array(GoogleCloudRecommenderV1beta1RecommendationSchema)
      .exactOptional()
      .openapi({ description: 'The set of recommendations for the `parent` resource.' }),
  })
  .openapi({ description: 'Response to the `ListRecommendations` method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1ListRecommendationsResponse')

const GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Fingerprint of the Insight. Provides optimistic locking.',
      }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. State properties user wish to include with this state. Full replace of the current state_metadata.',
      }),
  })
  .openapi({ description: 'Request for the `MarkInsightAccepted` method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest')

const GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Fingerprint of the Recommendation. Provides optimistic locking.',
      }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.',
      }),
  })
  .openapi({ description: 'Request for the `MarkRecommendationClaimed` Method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest')

const GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fingerprint of the Recommendation. Provides optimistic locking.' }),
  })
  .openapi({ description: 'Request for the `MarkRecommendationDismissed` Method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest')

const GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Fingerprint of the Recommendation. Provides optimistic locking.',
      }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.',
      }),
  })
  .openapi({ description: 'Request for the `MarkRecommendationFailed` Method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest')

const GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Fingerprint of the Recommendation. Provides optimistic locking.',
      }),
    stateMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.',
      }),
  })
  .openapi({ description: 'Request for the `MarkRecommendationSucceeded` Method.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest')

const GoogleCloudRecommenderV1beta1RecommenderGenerationConfigSchema = z
  .object({
    params: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes.',
      }),
  })
  .openapi({
    description:
      'A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.',
    required: [],
  })
  .openapi('GoogleCloudRecommenderV1beta1RecommenderGenerationConfig')

const GoogleCloudRecommenderV1beta1RecommenderConfigSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-settable field to provide a human-readable name to be used in user interfaces.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config',
      }),
    recommenderGenerationConfig:
      GoogleCloudRecommenderV1beta1RecommenderGenerationConfigSchema.exactOptional().openapi({
        description:
          'RecommenderGenerationConfig which configures the Generation of recommendations for this recommender.',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time when the config was updated.' }),
  })
  .openapi({ description: 'Configuration for a Recommender.', required: [] })
  .openapi('GoogleCloudRecommenderV1beta1RecommenderConfig')

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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.get',
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
            description: 'Required. Name of the recommendation.',
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
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommendationSchema },
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

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates a Recommender Config. This will create a new revision of the config.',
  operationId: 'recommender.projects.locations.recommenders.updateConfig',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, validate the request and preview the change, but do not actually update it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommenderConfigSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommenderConfigSchema },
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

export const postV1beta1NameMarkAcceptedRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:markAccepted',
  tags: ['projects'],
  description:
    'Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.',
  operationId: 'recommender.projects.locations.insightTypes.insights.markAccepted',
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
            description: 'Required. Name of the insight.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecommenderV1beta1InsightSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameMarkClaimedRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:markClaimed',
  tags: ['projects'],
  description:
    'Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.markClaimed',
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
            description: 'Required. Name of the recommendation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommendationSchema },
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

export const postV1beta1NameMarkDismissedRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:markDismissed',
  tags: ['projects'],
  description:
    'Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.markDismissed',
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
            description: 'Name of the recommendation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommendationSchema },
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

export const postV1beta1NameMarkFailedRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:markFailed',
  tags: ['projects'],
  description:
    'Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.markFailed',
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
            description: 'Required. Name of the recommendation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommendationSchema },
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

export const postV1beta1NameMarkSucceededRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:markSucceeded',
  tags: ['projects'],
  description:
    'Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.markSucceeded',
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
            description: 'Required. Name of the recommendation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1RecommendationSchema },
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

export const getV1beta1ParentInsightsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/insights',
  tags: ['projects'],
  description:
    'Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.',
  operationId: 'recommender.projects.locations.insightTypes.insights.list',
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
            description:
              'Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` (These expressions are based on the filter language described at https://google.aip.dev/160)',
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
            description:
              'Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.',
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
              'Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommenderV1beta1ListInsightsResponseSchema },
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

export const getV1beta1ParentRecommendationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/recommendations',
  tags: ['projects'],
  description:
    'Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.',
  operationId: 'recommender.projects.locations.recommenders.recommendations.list',
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
            description:
              'Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` (These expressions are based on the filter language described at https://google.aip.dev/160)',
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
            description:
              'Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.',
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
              'Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecommenderV1beta1ListRecommendationsResponseSchema,
        },
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
