import { createRoute, z } from '@hono/zod-openapi'

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GceInstanceFilterSchema = z
  .object({
    serviceAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Service account of compute engine' }),
  })
  .openapi({ description: 'Message describing compute engine instance filter', required: [] })
  .openapi('GceInstanceFilter')

const ResourceFilterSchema = z
  .object({
    gceInstanceFilter: GceInstanceFilterSchema.exactOptional().openapi({
      description: 'Filter compute engine resource',
    }),
    inclusionLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The label used for filter resource' }),
    resourceIdPatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The id pattern for filter resource' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The scopes of evaluation resource' }),
  })
  .openapi({ description: 'Message describing resource filters', required: [] })
  .openapi('ResourceFilter')

const ResourceStatusSchema = z
  .object({
    rulesNewerVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'the new version of rule id if exists' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'State of the resource' }),
  })
  .openapi({ description: 'Message describing resource status', required: [] })
  .openapi('ResourceStatus')

const EvaluationSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Create time stamp', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the Evaluation' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'",
      }),
    resourceFilter: ResourceFilterSchema.exactOptional().openapi({
      description: 'annotations as key value pairs',
    }),
    resourceStatus: ResourceStatusSchema.exactOptional().openapi({
      description: 'Output only. [Output only] The updated rule ids if exist.',
      readOnly: true,
    }),
    ruleNames: z.array(z.string()).exactOptional().openapi({ description: 'the name of the rule' }),
    ruleVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. [Output only] The updated rule ids if exist.',
        readOnly: true,
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description: 'crontab format schedule for scheduled evaluation, example: 0 */3 * * *',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Update time stamp', readOnly: true }),
  })
  .openapi({ description: 'Message describing Evaluation object', required: [] })
  .openapi('Evaluation')

const ExecutionSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] End time stamp', readOnly: true }),
    evaluationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Evaluation ID', readOnly: true }),
    inventoryTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Inventory time stamp', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}',
      }),
    runType: z
      .enum(['TYPE_UNSPECIFIED', 'ONE_TIME', 'SCHEDULED'])
      .exactOptional()
      .openapi({
        description:
          'type represent whether the execution executed directly by user or scheduled according evaluation.schedule field.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Start time stamp', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] State', readOnly: true }),
  })
  .openapi({ description: 'Message describing Execution object', required: [] })
  .openapi('Execution')

const ResourceSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'the name of the resource' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'the service account accosiate with resource' }),
    type: z.string().exactOptional().openapi({ description: 'the type of reresource' }),
  })
  .openapi({ description: 'Message represent resource in execution result', required: [] })
  .openapi('Resource')

const ViolationDetailsSchema = z
  .object({
    asset: z.string().exactOptional().openapi({ description: 'the name of asset' }),
    observed: z.record(z.string(), z.string()).exactOptional().openapi({ description: 'observed' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'the service account associate with resource' }),
  })
  .openapi({ description: 'Message describing the violdation in execution result', required: [] })
  .openapi('ViolationDetails')

const ExecutionResultSchema = z
  .object({
    documentationUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'the document url of the rule' }),
    resource: ResourceSchema.exactOptional().openapi({ description: 'the violate resource' }),
    rule: z
      .string()
      .exactOptional()
      .openapi({ description: 'the rule which violate in execution' }),
    severity: z.string().exactOptional().openapi({ description: 'severity of violation' }),
    violationDetails: ViolationDetailsSchema.exactOptional().openapi({
      description: 'the details of violation in result',
    }),
    violationMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'the violation message of an execution' }),
  })
  .openapi({ description: 'Message describing the result of an execution', required: [] })
  .openapi('ExecutionResult')

const SapDiscoveryResourceSchema = z
  .object({
    relatedResources: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of resource URIs related to this resource.' }),
    resourceKind: z
      .string()
      .exactOptional()
      .openapi({ description: 'ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc.' }),
    resourceState: z
      .enum(['RESOURCE_STATE_UNSPECIFIED', 'ADDED', 'UPDATED', 'REMOVED', 'REPLACED', 'MISSING'])
      .exactOptional()
      .openapi({ description: 'Indicates whether this is a new, updated, or missing resource.' }),
    resourceType: z
      .enum(['RESOURCE_TYPE_UNSPECIFIED', 'COMPUTE', 'STORAGE', 'NETWORK'])
      .exactOptional()
      .openapi({ description: 'The type of this resource.' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI of the resource, includes project, location, and name.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unix timestamp of when this resource last had its discovery data updated.',
      }),
  })
  .openapi({ description: 'Message describing a resource.', required: [] })
  .openapi('SapDiscoveryResource')

const SapDiscoveryComponentSchema = z
  .object({
    applicationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The component is a SAP application.' }),
    databaseType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The component is a SAP database.' }),
    hostProject: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pantheon Project in which the resources reside.' }),
    resources: z
      .array(SapDiscoveryResourceSchema)
      .exactOptional()
      .openapi({ description: 'The resources in a component.' }),
    sid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sap identifier, used by the SAP software and helps differentiate systems for customers.',
      }),
  })
  .openapi({ description: 'Message describing the system component.', required: [] })
  .openapi('SapDiscoveryComponent')

const SapDiscoveryMetadataSchema = z
  .object({
    customerRegion: z
      .string()
      .exactOptional()
      .openapi({
        description: "Customer region string for customer's use. Does not represent GCP region.",
      }),
    definedSystem: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer defined, something like "E-commerce pre prod"' }),
    environmentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Should be "prod", "QA", "dev", "staging", etc.' }),
    sapProduct: z.string().exactOptional().openapi({ description: 'This sap product name' }),
  })
  .openapi({ description: 'Message describing SAP discovery system metadata', required: [] })
  .openapi('SapDiscoveryMetadata')

const SapDiscoverySchema = z
  .object({
    applicationLayer: SapDiscoveryComponentSchema.exactOptional().openapi({
      description: 'An SAP system may run without an application layer.',
    }),
    databaseLayer: SapDiscoveryComponentSchema.exactOptional().openapi({
      description: 'An SAP System must have a database.',
    }),
    metadata: SapDiscoveryMetadataSchema.exactOptional().openapi({
      description: 'The metadata for SAP system discovery data.',
    }),
    systemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unix timestamp this system has been updated last.' }),
  })
  .openapi({ description: 'The schema of SAP system discovery data.', required: [] })
  .openapi('SapDiscovery')

const SapValidationValidationDetailSchema = z
  .object({
    details: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The pairs of metrics data: field name & field value.' }),
    sapValidationType: z
      .enum([
        'SAP_VALIDATION_TYPE_UNSPECIFIED',
        'SYSTEM',
        'COROSYNC',
        'PACEMAKER',
        'HANA',
        'NETWEAVER',
      ])
      .exactOptional()
      .openapi({ description: 'The SAP system that the validation data is from.' }),
  })
  .openapi({ description: 'Message describing the SAP validation metrics.', required: [] })
  .openapi('SapValidationValidationDetail')

const SapValidationSchema = z
  .object({
    validationDetails: z
      .array(SapValidationValidationDetailSchema)
      .exactOptional()
      .openapi({ description: 'A list of SAP validation metrics data.' }),
  })
  .openapi({
    description:
      'A presentation of SAP workload insight. The schema of SAP workloads validation related data.',
    required: [],
  })
  .openapi('SapValidation')

const InsightSchema = z
  .object({
    sapDiscovery: SapDiscoverySchema.exactOptional().openapi({
      description:
        'The insights data for sap system discovery. This is a copy of SAP System proto and should get updated whenever that one changes.',
    }),
    sapValidation: SapValidationSchema.exactOptional().openapi({
      description: 'The insights data for the sap workload validation.',
    }),
    sentTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Create time stamp', readOnly: true }),
  })
  .openapi({
    description: 'A presentation of host resource usage where the workload runs.',
    required: [],
  })
  .openapi('Insight')

const ListEvaluationsResponseSchema = z
  .object({
    evaluations: z
      .array(EvaluationSchema)
      .exactOptional()
      .openapi({ description: 'The list of Evaluation' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Message for response to listing Evaluations', required: [] })
  .openapi('ListEvaluationsResponse')

const ListExecutionResultsResponseSchema = z
  .object({
    executionResults: z
      .array(ExecutionResultSchema)
      .exactOptional()
      .openapi({ description: 'The versions from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Message for response of list execution results', required: [] })
  .openapi('ListExecutionResultsResponse')

const ListExecutionsResponseSchema = z
  .object({
    executions: z
      .array(ExecutionSchema)
      .exactOptional()
      .openapi({ description: 'The list of Execution' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Message for response to listing Executions', required: [] })
  .openapi('ListExecutionsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const RuleSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'descrite rule in plain language' }),
    displayName: z.string().exactOptional().openapi({ description: 'the name display in UI' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'the message template for rule' }),
    name: z.string().exactOptional().openapi({ description: 'rule name' }),
    primaryCategory: z.string().exactOptional().openapi({ description: 'the primary category' }),
    remediation: z
      .string()
      .exactOptional()
      .openapi({ description: 'the remediation for the rule' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. the version of the rule', readOnly: true }),
    secondaryCategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'the secondary category' }),
    severity: z.string().exactOptional().openapi({ description: 'the severity of the rule' }),
    uri: z.string().exactOptional().openapi({ description: 'the docuement url for the rule' }),
  })
  .openapi({ description: 'Message represent a rule', required: [] })
  .openapi('Rule')

const ListRulesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results the server should return.' }),
    rules: z.array(RuleSchema).exactOptional().openapi({ description: 'all rules in response' }),
  })
  .openapi({ description: 'Mesesage of response of list rules', required: [] })
  .openapi('ListRulesResponse')

const ScannedResourceSchema = z
  .object({ resource: z.string().exactOptional().openapi({ description: 'resource name' }) })
  .openapi({ description: 'Message of scanned resource', required: [] })
  .openapi('ScannedResource')

const ListScannedResourcesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    scannedResources: z
      .array(ScannedResourceSchema)
      .exactOptional()
      .openapi({ description: 'All scanned resources in response' }),
  })
  .openapi({ description: 'Message for response to list scanned resources', required: [] })
  .openapi('ListScannedResourcesResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const RunEvaluationRequestSchema = z
  .object({
    execution: ExecutionSchema.exactOptional().openapi({
      description: 'Required. The resource being created',
    }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'Message for creating a Execution', required: [] })
  .openapi('RunEvaluationRequest')

const WriteInsightRequestSchema = z
  .object({
    insight: InsightSchema.exactOptional().openapi({
      description: 'Required. The metrics data details.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: 'Request for sending the data insights.', required: [] })
  .openapi('WriteInsightRequest')

const WriteInsightResponseSchema = z
  .object({})
  .openapi({ description: 'The response for write insights request.' })
  .openapi('WriteInsightResponse')

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

export const postV1LocationInsightsWriteInsightRoute = createRoute({
  method: 'post',
  path: '/v1/{location}/insights:writeInsight',
  tags: ['projects'],
  description: 'Write the data insights to workload manager data warehouse.',
  operationId: 'workloadmanager.projects.locations.insights.writeInsight',
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
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The GCP location. The format is: projects/{project}/locations/{location}.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WriteInsightRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WriteInsightResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'workloadmanager.projects.locations.operations.get',
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
            description: 'The name of the operation resource.',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'workloadmanager.projects.locations.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameExecutionsRunRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/executions:run',
  tags: ['projects'],
  description: 'Creates a new Execution in a given project and location.',
  operationId: 'workloadmanager.projects.locations.evaluations.executions.run',
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
            description:
              "Required. The resource name of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}'",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunEvaluationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'workloadmanager.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
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
              'The maximum number of results to return. If not set, the service selects a default.',
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
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'workloadmanager.projects.locations.operations.list',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'workloadmanager.projects.locations.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEvaluationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/evaluations',
  tags: ['projects'],
  description: 'Lists Evaluations in a given project and location.',
  operationId: 'workloadmanager.projects.locations.evaluations.list',
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
            description: 'Filtering results',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Hint for how to order the results',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
            description: 'Required. Parent value for ListEvaluationsRequest',
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
      content: { 'application/json': { schema: ListEvaluationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentEvaluationsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/evaluations',
  tags: ['projects'],
  description: 'Creates a new Evaluation in a given project and location.',
  operationId: 'workloadmanager.projects.locations.evaluations.create',
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
      evaluationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Id of the requesting object',
            in: 'query',
            name: 'evaluationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
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
              'Required. The resource prefix of the evaluation location using the form: `projects/{project_id}/locations/{location_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EvaluationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentExecutionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/executions',
  tags: ['projects'],
  description: 'Lists Executions in a given project and location.',
  operationId: 'workloadmanager.projects.locations.evaluations.executions.list',
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
            description: 'Filtering results',
            in: 'query',
            name: 'filter',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
              "Required. The resource prefix of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}'",
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
      content: { 'application/json': { schema: ListExecutionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentResultsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/results',
  tags: ['projects'],
  description: 'List the running result of a single Execution.',
  operationId: 'workloadmanager.projects.locations.evaluations.executions.results.list',
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
            description: 'Filtering results',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
              'Required. The execution results. Format: {parent}/evaluations/*/executions/*/results',
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
      content: { 'application/json': { schema: ListExecutionResultsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRulesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/rules',
  tags: ['projects'],
  description: 'Lists rules in a given project.',
  operationId: 'workloadmanager.projects.locations.rules.list',
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
            description: 'Filter based on primary_category, secondary_category',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
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
              'Required. The [project] on which to execute the request. The format is: projects/{project_id}/locations/{location} Currently, the pre-defined rules are global available to all projects and all regions',
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
      content: { 'application/json': { schema: ListRulesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentScannedResourcesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/scannedResources',
  tags: ['projects'],
  description: 'List all scanned resources for a single Execution.',
  operationId: 'workloadmanager.projects.locations.evaluations.executions.scannedResources.list',
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
            description: 'Filtering results',
            in: 'query',
            name: 'filter',
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
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
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
              'Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'A token identifying a page of results the server should return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rule: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'rule name',
            in: 'query',
            name: 'rule',
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
            description: 'Required. parent for ListScannedResourcesRequest',
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
      content: { 'application/json': { schema: ListScannedResourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
