import { createRoute, z } from '@hono/zod-openapi'

const DiagnosticSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.',
      }),
    level: z
      .enum(['UNKNOWN', 'INFORMATION', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Level to record this diagnostic.' }),
  })
  .openapi({ required: [] })
  .openapi('Diagnostic')

const PollingOptionsSchema = z
  .object({
    diagnostics: z
      .array(DiagnosticSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.',
      }),
    failCondition: z
      .string()
      .exactOptional()
      .openapi({ description: 'JsonPath expression that determines if the request failed.' }),
    finishCondition: z
      .string()
      .exactOptional()
      .openapi({ description: 'JsonPath expression that determines if the request is completed.' }),
    pollingLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JsonPath expression that evaluates to string, it indicates where to poll.',
      }),
    targetLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JsonPath expression, after polling is completed, indicates where to fetch the resource.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PollingOptions')

const AsyncOptionsSchema = z
  .object({
    methodMatch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Method regex where this policy will apply.' }),
    pollingOptions: PollingOptionsSchema.exactOptional().openapi({
      description:
        'Deployment manager will poll instances for this API resource setting a RUNNING state, and blocking until polling conditions tell whether the resource is completed or failed.',
    }),
  })
  .openapi({
    description: 'Async options that determine when a resource should finish.',
    required: [],
  })
  .openapi('AsyncOptions')

const InputMappingSchema = z
  .object({
    fieldName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the field that is going to be injected.' }),
    location: z
      .enum(['UNKNOWN', 'PATH', 'QUERY', 'BODY', 'HEADER'])
      .exactOptional()
      .openapi({ description: 'The location where this mapping applies.' }),
    methodMatch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Regex to evaluate on method to decide if input applies.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A jsonPath expression to select an element.' }),
  })
  .openapi({
    description:
      "InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.",
    required: [],
  })
  .openapi('InputMapping')

const ValidationOptionsSchema = z
  .object({
    schemaValidation: z
      .enum(['UNKNOWN', 'IGNORE', 'IGNORE_WITH_WARNINGS', 'FAIL'])
      .exactOptional()
      .openapi({
        description:
          'Customize how deployment manager will validate the resource against schema errors.',
      }),
    undeclaredProperties: z
      .enum([
        'UNKNOWN',
        'INCLUDE',
        'IGNORE',
        'INCLUDE_WITH_WARNINGS',
        'IGNORE_WITH_WARNINGS',
        'FAIL',
      ])
      .exactOptional()
      .openapi({
        description: 'Specify what to do with extra properties when executing a request.',
      }),
  })
  .openapi({
    description: 'Options for how to validate and process properties on a resource.',
    required: [],
  })
  .openapi('ValidationOptions')

type OptionsType = {
  asyncOptions?: z.infer<typeof AsyncOptionsSchema>[]
  inputMappings?: z.infer<typeof InputMappingSchema>[]
  validationOptions?: z.infer<typeof ValidationOptionsSchema>
  virtualProperties?: string
}

const OptionsSchema: z.ZodType<OptionsType> = z
  .lazy(() =>
    z
      .object({
        asyncOptions: z
          .array(AsyncOptionsSchema)
          .exactOptional()
          .openapi({ description: 'Options regarding how to thread async requests.' }),
        inputMappings: z
          .array(InputMappingSchema)
          .exactOptional()
          .openapi({ description: 'The mappings that apply for requests.' }),
        validationOptions: ValidationOptionsSchema.exactOptional().openapi({
          description: 'Options for how to validate and process properties on a resource.',
        }),
        virtualProperties: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number',
          }),
      })
      .openapi({
        description: 'Options allows customized resource handling by Deployment Manager.',
        required: [],
      }),
  )
  .openapi('Options')

const CollectionOverrideSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The collection that identifies this resource within its service.' }),
    options: OptionsSchema.exactOptional().openapi({
      description: 'The options to apply to this resource-level override',
    }),
  })
  .openapi({
    description:
      'CollectionOverride allows resource handling overrides for specific resources within a BaseType',
    required: [],
  })
  .openapi('CollectionOverride')

const BasicAuthSchema = z
  .object({ password: z.string().exactOptional(), user: z.string().exactOptional() })
  .openapi({ description: 'Basic Auth used as a credential.', required: [] })
  .openapi('BasicAuth')

const ServiceAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IAM service account email address like test@myproject.iam.gserviceaccount.com',
      }),
  })
  .openapi({ description: 'Service Account used as a credential.', required: [] })
  .openapi('ServiceAccount')

const CredentialSchema = z
  .object({
    basicAuth: BasicAuthSchema.exactOptional().openapi({
      description: 'Basic Auth Credential, only used by TypeProvider.',
    }),
    serviceAccount: ServiceAccountSchema.exactOptional().openapi({
      description: 'Service Account Credential, only used by Deployment.',
    }),
    useProjectDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specify to use the project default credential, only supported by Deployment.',
      }),
  })
  .openapi({
    description:
      'The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.',
    required: [],
  })
  .openapi('Credential')

const BaseTypeSchema = z
  .object({
    collectionOverrides: z
      .array(CollectionOverrideSchema)
      .exactOptional()
      .openapi({ description: 'Allows resource handling overrides for specific collections' }),
    credential: CredentialSchema.exactOptional().openapi({
      description: 'Credential used when interacting with this type.',
    }),
    descriptorUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Descriptor Url for the this type.' }),
    options: OptionsSchema.exactOptional().openapi({
      description: 'Options to apply when handling any resources in this service.',
    }),
  })
  .openapi({ description: 'BaseType that describes a service-backed Type.', required: [] })
  .openapi('BaseType')

const TypeLabelEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of the label' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the label' }),
  })
  .openapi({ description: 'Label object for Types', required: [] })
  .openapi('TypeLabelEntry')

const OperationSchema = z
  .object({
    clientOperationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.',
      }),
    creationTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: '[Deprecated] This field is deprecated.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] A textual description of the operation, which is set when the operation is created.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The time that this operation was completed. This value is in RFC3339 text format.',
      }),
    error: z
      .object({
        errors: z
          .array(
            z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: '[Output Only] The error type identifier for this error.',
                  }),
                location: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      '[Output Only] Indicates the field in the request that caused the error. This property is optional.',
                  }),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: '[Output Only] An optional, human-readable error message.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              '[Output Only] The array of errors encountered while processing this operation.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          '[Output Only] If errors are generated during processing of the operation, this field will be populated.',
        required: [],
      }),
    httpErrorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.',
      }),
    httpErrorStatusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The unique identifier for the operation. This identifier is defined by the server.',
      }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The time that this operation was requested. This value is in RFC3339 text format.',
      }),
    kind: z
      .string()
      .default('compute#operation')
      .exactOptional()
      .openapi({
        description:
          '[Output Only] Type of the resource. Always `compute#operation` for Operation resources.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] Name of the operation.' }),
    operationGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.',
      }),
    operationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.',
      }),
    progress: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output Only] Server-defined URL for the resource.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.',
      }),
    status: z
      .enum(['PENDING', 'RUNNING', 'DONE'])
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.',
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] An optional textual description of the current status of the operation.',
      }),
    targetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.',
      }),
    targetLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] User who requested the operation, for example: `user@example.com`.',
      }),
    warnings: z
      .array(
        z
          .object({
            code: z
              .enum([
                'DEPRECATED_RESOURCE_USED',
                'NO_RESULTS_ON_PAGE',
                'UNREACHABLE',
                'NEXT_HOP_ADDRESS_NOT_ASSIGNED',
                'NEXT_HOP_INSTANCE_NOT_FOUND',
                'NEXT_HOP_INSTANCE_NOT_ON_NETWORK',
                'NEXT_HOP_CANNOT_IP_FORWARD',
                'NEXT_HOP_NOT_RUNNING',
                'INJECTED_KERNELS_DEPRECATED',
                'REQUIRED_TOS_AGREEMENT',
                'DISK_SIZE_LARGER_THAN_IMAGE_SIZE',
                'RESOURCE_NOT_DELETED',
                'SINGLE_INSTANCE_PROPERTY_TEMPLATE',
                'NOT_CRITICAL_ERROR',
                'CLEANUP_FAILED',
                'FIELD_VALUE_OVERRIDEN',
                'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING',
                'MISSING_TYPE_DEPENDENCY',
                'EXTERNAL_API_WARNING',
                'SCHEMA_VALIDATION_IGNORED',
                'UNDECLARED_PROPERTIES',
                'EXPERIMENTAL_TYPE_USED',
                'DEPRECATED_TYPE_USED',
                'PARTIAL_SUCCESS',
                'LARGE_DEPLOYMENT_WARNING',
                'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE',
                'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB',
              ])
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.',
              }),
            data: z
              .array(
                z
                  .object({
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '[Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).',
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '[Output Only] A warning data value corresponding to the key.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } ',
              }),
            message: z
              .string()
              .exactOptional()
              .openapi({
                description: '[Output Only] A human-readable description of the warning code.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '[Output Only] If warning messages are generated during processing of the operation, this field will be populated.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.',
      }),
  })
  .openapi({
    description:
      'Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.',
    required: [],
  })
  .openapi('Operation')

type TypeType = {
  base?: z.infer<typeof BaseTypeSchema>
  description?: string
  id?: string
  insertTime?: string
  labels?: z.infer<typeof TypeLabelEntrySchema>[]
  name?: string
  operation?: z.infer<typeof OperationSchema>
  selfLink?: string
}

const TypeInfoSchemaInfoSchema = z
  .object({
    input: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4',
      }),
    output: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4',
      }),
  })
  .openapi({ required: [] })
  .openapi('TypeInfoSchemaInfo')

type TypeInfoType = {
  description?: string
  documentationLink?: string
  kind?: string
  name?: string
  schema?: z.infer<typeof TypeInfoSchemaInfoSchema>
  selfLink?: string
  title?: string
}

const AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CompositeTypeLabelEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of the label' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the label' }),
  })
  .openapi({ description: 'Label object for CompositeTypes', required: [] })
  .openapi('CompositeTypeLabelEntry')

const ImportFileSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The contents of the file.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the file.' }),
  })
  .openapi({ required: [] })
  .openapi('ImportFile')

const TemplateContentsSchema = z
  .object({
    imports: z
      .array(ImportFileSchema)
      .exactOptional()
      .openapi({ description: 'Import files referenced by the main template.' }),
    interpreter: z
      .enum(['UNKNOWN_INTERPRETER', 'PYTHON', 'JINJA'])
      .exactOptional()
      .openapi({
        description: 'Which interpreter (python or jinja) should be used during expansion.',
      }),
    mainTemplate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filename of the mainTemplate' }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contents of the template schema.' }),
    template: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contents of the main template file.' }),
  })
  .openapi({
    description: 'Files that make up the template contents of a template type.',
    required: [],
  })
  .openapi('TemplateContents')

const CompositeTypeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional textual description of the resource; provided by the client when the resource is created.',
      }),
    id: z.string().exactOptional(),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
    labels: z
      .array(CompositeTypeLabelEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.',
      }),
    operation: OperationSchema.exactOptional().openapi({
      description:
        'Output only. The Operation that most recently ran, or is currently running, on this composite type.',
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Server defined URL for the resource.' }),
    status: z.enum(['UNKNOWN_STATUS', 'DEPRECATED', 'EXPERIMENTAL', 'SUPPORTED']).exactOptional(),
    templateContents: TemplateContentsSchema.exactOptional().openapi({
      description: 'Files for the template type.',
    }),
  })
  .openapi({ description: 'Holds the composite type.', required: [] })
  .openapi('CompositeType')

const CompositeTypesListResponseSchema = z
  .object({
    compositeTypes: z
      .array(CompositeTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of resource composite types supported by Deployment Manager.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token used to continue a truncated list request.' }),
  })
  .openapi({
    description: 'A response that returns all Composite Types supported by Deployment Manager',
    required: [],
  })
  .openapi('CompositeTypesListResponse')

const ConfigFileSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The contents of the file.' }),
  })
  .openapi({ required: [] })
  .openapi('ConfigFile')

const DeploymentLabelEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of the label' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the label' }),
  })
  .openapi({ description: 'Label object for Deployments', required: [] })
  .openapi('DeploymentLabelEntry')

const TargetConfigurationSchema = z
  .object({
    config: ConfigFileSchema.exactOptional().openapi({
      description: 'The configuration to use for this deployment.',
    }),
    imports: z
      .array(ImportFileSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TargetConfiguration')

const DeploymentUpdateLabelEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of the label' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the label' }),
  })
  .openapi({ description: 'Label object for DeploymentUpdate', required: [] })
  .openapi('DeploymentUpdateLabelEntry')

const DeploymentUpdateSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. An optional user-provided description of the deployment after the current update has been applied.',
      }),
    labels: z
      .array(DeploymentUpdateLabelEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.',
      }),
    manifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the manifest representing the update configuration of this deployment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeploymentUpdate')

const DeploymentSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional user-provided description of the deployment.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.',
      }),
    id: z.string().exactOptional(),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
    labels: z
      .array(DeploymentLabelEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.',
      }),
    manifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.',
      }),
    operation: OperationSchema.exactOptional().openapi({
      description:
        'Output only. The Operation that most recently ran, or is currently running, on this deployment.',
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Server defined URL for the resource.' }),
    target: TargetConfigurationSchema.exactOptional().openapi({
      description:
        '[Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.',
    }),
    update: DeploymentUpdateSchema.exactOptional().openapi({
      description:
        'Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Update timestamp in RFC3339 text format.' }),
  })
  .openapi({ required: [] })
  .openapi('Deployment')

const DeploymentsCancelPreviewRequestSchema = z
  .object({
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeploymentsCancelPreviewRequest')

const DeploymentsListResponseSchema = z
  .object({
    deployments: z
      .array(DeploymentSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The deployments contained in this response.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A token used to continue a truncated list request.' }),
  })
  .openapi({
    description:
      'A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.',
    required: [],
  })
  .openapi('DeploymentsListResponse')

const DeploymentsStopRequestSchema = z
  .object({
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeploymentsStopRequest')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const GlobalSetPolicyRequestSchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          "Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings.",
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag.",
      }),
    policy: PolicySchema.exactOptional().openapi({
      description:
        "REQUIRED: The complete policy to be applied to the 'resource'. The size of the policy is limited to a few 10s of KB. An empty policy is in general a valid policy but certain services (like Projects) might reject them.",
    }),
  })
  .openapi({ required: [] })
  .openapi('GlobalSetPolicyRequest')

const ManifestSchema = z
  .object({
    config: ConfigFileSchema.exactOptional().openapi({
      description: 'Output only. The YAML configuration for this manifest.',
    }),
    expandedConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The fully-expanded configuration file, including any templates and references.',
      }),
    id: z.string().exactOptional(),
    imports: z
      .array(ImportFileSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The imported files for this manifest.' }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
    layout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The YAML layout for this manifest.' }),
    manifestSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The computed size of the fully expanded manifest.' }),
    manifestSizeLimitBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The size limit for expanded manifests in the project.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the manifest.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Self link for the manifest.' }),
  })
  .openapi({ required: [] })
  .openapi('Manifest')

const ManifestsListResponseSchema = z
  .object({
    manifests: z
      .array(ManifestSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Manifests contained in this list response.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A token used to continue a truncated list request.' }),
  })
  .openapi({
    description:
      'A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.',
    required: [],
  })
  .openapi('ManifestsListResponse')

const OperationsListResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A token used to continue a truncated list request.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Operations contained in this list response.' }),
  })
  .openapi({
    description:
      'A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.',
    required: [],
  })
  .openapi('OperationsListResponse')

const ResourceAccessControlSchema = z
  .object({
    gcpIamPolicy: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GCP IAM Policy to set on the resource.' }),
  })
  .openapi({ description: 'The access controls set on the resource.', required: [] })
  .openapi('ResourceAccessControl')

const ResourceUpdateSchema = z
  .object({
    accessControl: ResourceAccessControlSchema.exactOptional().openapi({
      description:
        'The Access Control Policy to set on this resource after updating the resource itself.',
    }),
    error: z
      .object({
        errors: z
          .array(
            z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: '[Output Only] The error type identifier for this error.',
                  }),
                location: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      '[Output Only] Indicates the field in the request that caused the error. This property is optional.',
                  }),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: '[Output Only] An optional, human-readable error message.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              '[Output Only] The array of errors encountered while processing this operation.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Output only. If errors are generated during update of the resource, this field will be populated.',
        required: [],
      }),
    finalProperties: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.',
      }),
    intent: z
      .enum(['CREATE_OR_ACQUIRE', 'DELETE', 'ACQUIRE', 'UPDATE', 'ABANDON', 'CREATE'])
      .exactOptional()
      .openapi({
        description: 'Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`.',
      }),
    manifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the manifest representing the update configuration of this resource.',
      }),
    properties: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.',
      }),
    state: z
      .enum(['PENDING', 'IN_PROGRESS', 'IN_PREVIEW', 'FAILED', 'ABORTED'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the resource.' }),
    warnings: z
      .array(
        z
          .object({
            code: z
              .enum([
                'DEPRECATED_RESOURCE_USED',
                'NO_RESULTS_ON_PAGE',
                'UNREACHABLE',
                'NEXT_HOP_ADDRESS_NOT_ASSIGNED',
                'NEXT_HOP_INSTANCE_NOT_FOUND',
                'NEXT_HOP_INSTANCE_NOT_ON_NETWORK',
                'NEXT_HOP_CANNOT_IP_FORWARD',
                'NEXT_HOP_NOT_RUNNING',
                'INJECTED_KERNELS_DEPRECATED',
                'REQUIRED_TOS_AGREEMENT',
                'DISK_SIZE_LARGER_THAN_IMAGE_SIZE',
                'RESOURCE_NOT_DELETED',
                'SINGLE_INSTANCE_PROPERTY_TEMPLATE',
                'NOT_CRITICAL_ERROR',
                'CLEANUP_FAILED',
                'FIELD_VALUE_OVERRIDEN',
                'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING',
                'MISSING_TYPE_DEPENDENCY',
                'EXTERNAL_API_WARNING',
                'SCHEMA_VALIDATION_IGNORED',
                'UNDECLARED_PROPERTIES',
                'EXPERIMENTAL_TYPE_USED',
                'DEPRECATED_TYPE_USED',
                'PARTIAL_SUCCESS',
                'LARGE_DEPLOYMENT_WARNING',
                'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE',
                'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB',
              ])
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.',
              }),
            data: z
              .array(
                z
                  .object({
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '[Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).',
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '[Output Only] A warning data value corresponding to the key.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } ',
              }),
            message: z
              .string()
              .exactOptional()
              .openapi({
                description: '[Output Only] A human-readable description of the warning code.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. If warning messages are generated during processing of this resource, this field will be populated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResourceUpdate')

const ResourceSchema = z
  .object({
    accessControl: ResourceAccessControlSchema.exactOptional().openapi({
      description: 'The Access Control Policy set on this resource.',
    }),
    finalProperties: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.',
      }),
    id: z.string().exactOptional(),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
    manifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the manifest representing the current configuration of this resource.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the resource as it appears in the YAML config.',
      }),
    properties: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`.',
      }),
    update: ResourceUpdateSchema.exactOptional().openapi({
      description:
        'Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Update timestamp in RFC3339 text format.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The URL of the actual resource.' }),
    warnings: z
      .array(
        z
          .object({
            code: z
              .enum([
                'DEPRECATED_RESOURCE_USED',
                'NO_RESULTS_ON_PAGE',
                'UNREACHABLE',
                'NEXT_HOP_ADDRESS_NOT_ASSIGNED',
                'NEXT_HOP_INSTANCE_NOT_FOUND',
                'NEXT_HOP_INSTANCE_NOT_ON_NETWORK',
                'NEXT_HOP_CANNOT_IP_FORWARD',
                'NEXT_HOP_NOT_RUNNING',
                'INJECTED_KERNELS_DEPRECATED',
                'REQUIRED_TOS_AGREEMENT',
                'DISK_SIZE_LARGER_THAN_IMAGE_SIZE',
                'RESOURCE_NOT_DELETED',
                'SINGLE_INSTANCE_PROPERTY_TEMPLATE',
                'NOT_CRITICAL_ERROR',
                'CLEANUP_FAILED',
                'FIELD_VALUE_OVERRIDEN',
                'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING',
                'MISSING_TYPE_DEPENDENCY',
                'EXTERNAL_API_WARNING',
                'SCHEMA_VALIDATION_IGNORED',
                'UNDECLARED_PROPERTIES',
                'EXPERIMENTAL_TYPE_USED',
                'DEPRECATED_TYPE_USED',
                'PARTIAL_SUCCESS',
                'LARGE_DEPLOYMENT_WARNING',
                'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE',
                'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB',
              ])
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.',
              }),
            data: z
              .array(
                z
                  .object({
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '[Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).',
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '[Output Only] A warning data value corresponding to the key.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  '[Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } ',
              }),
            message: z
              .string()
              .exactOptional()
              .openapi({
                description: '[Output Only] A human-readable description of the warning code.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. If warning messages are generated during processing of this resource, this field will be populated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const ResourcesListResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token used to continue a truncated list request.' }),
    resources: z
      .array(ResourceSchema)
      .exactOptional()
      .openapi({ description: 'Resources contained in this list response.' }),
  })
  .openapi({
    description:
      'A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.',
    required: [],
  })
  .openapi('ResourcesListResponse')

const TestPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TestPermissionsRequest')

const TestPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestPermissionsResponse')

const TypeSchema: z.ZodType<TypeType> = z
  .lazy(() =>
    z
      .object({
        base: BaseTypeSchema.exactOptional().openapi({
          description: 'Base Type (configurable service) that backs this Type.',
        }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An optional textual description of the resource; provided by the client when the resource is created.',
          }),
        id: z.string().exactOptional(),
        insertTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
        labels: z
          .array(TypeLabelEntrySchema)
          .exactOptional()
          .openapi({
            description:
              'Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.',
          }),
        name: z.string().exactOptional().openapi({ description: 'Name of the type.' }),
        operation: OperationSchema.exactOptional().openapi({
          description:
            'Output only. The Operation that most recently ran, or is currently running, on this type.',
        }),
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. Server defined URL for the resource.' }),
      })
      .openapi({ description: 'A resource type supported by Deployment Manager.', required: [] }),
  )
  .openapi('Type')

const TypeInfoSchema: z.ZodType<TypeInfoType> = z
  .lazy(() =>
    z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'The description of the type.' }),
        documentationLink: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.',
          }),
        kind: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The base type or composite type name.' }),
        schema: TypeInfoSchemaInfoSchema.exactOptional().openapi({
          description:
            'For base types with a collection, we return a schema and documentation link For template types, we return only a schema',
        }),
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. Self link for the type provider.' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title on the API descriptor URL provided.' }),
      })
      .openapi({
        description:
          'Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.',
        required: [],
      }),
  )
  .openapi('TypeInfo')

const TypeProviderLabelEntrySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of the label' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the label' }),
  })
  .openapi({ description: 'Label object for TypeProviders', required: [] })
  .openapi('TypeProviderLabelEntry')

const TypeProviderSchema = z
  .object({
    collectionOverrides: z
      .array(CollectionOverrideSchema)
      .exactOptional()
      .openapi({ description: 'Allows resource handling overrides for specific collections' }),
    credential: CredentialSchema.exactOptional().openapi({
      description: 'Credential used when interacting with this type.',
    }),
    customCertificateAuthorityRoots: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional textual description of the resource; provided by the client when the resource is created.',
      }),
    descriptorUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Descriptor Url for the this type provider.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Unique identifier for the resource defined by the server.',
      }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp in RFC3339 text format.' }),
    labels: z
      .array(TypeProviderLabelEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.',
      }),
    operation: OperationSchema.exactOptional().openapi({
      description:
        'Output only. The Operation that most recently ran, or is currently running, on this type provider.',
    }),
    options: OptionsSchema.exactOptional().openapi({
      description: 'Options to apply when handling any resources in this service.',
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Self link for the type provider.' }),
  })
  .openapi({ description: 'A type provider that describes a service-backed Type.', required: [] })
  .openapi('TypeProvider')

const TypeProvidersListResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token used to continue a truncated list request.' }),
    typeProviders: z
      .array(TypeProviderSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of resource type providers supported by Deployment Manager.',
      }),
  })
  .openapi({
    description: 'A response that returns all Type Providers supported by Deployment Manager',
    required: [],
  })
  .openapi('TypeProvidersListResponse')

const TypeProvidersListTypesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token used to continue a truncated list request.' }),
    types: z
      .array(TypeInfoSchema)
      .exactOptional()
      .openapi({ description: 'Output only. A list of resource type info.' }),
  })
  .openapi({ required: [] })
  .openapi('TypeProvidersListTypesResponse')

const TypesListResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token used to continue a truncated list request.' }),
    types: z
      .array(TypeSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. A list of resource types supported by Deployment Manager.',
      }),
  })
  .openapi({
    description: 'A response that returns all Types supported by Deployment Manager',
    required: [],
  })
  .openapi('TypesListResponse')

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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/ndev.cloudman':
          'View and manage your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/ndev.cloudman.readonly':
          'View your Google Cloud Platform management resources and deployment status information',
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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/ndev.cloudman':
          'View and manage your Google Cloud Platform management resources and deployment status information',
        'https://www.googleapis.com/auth/ndev.cloudman.readonly':
          'View your Google Cloud Platform management resources and deployment status information',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes',
  tags: ['compositeTypes'],
  description: 'Lists all composite types for Deployment Manager.',
  operationId: 'deploymentmanager.compositeTypes.list',
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
              'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
          param: {
            description:
              'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompositeTypesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})

export const postDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute = createRoute({
  method: 'post',
  path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes',
  tags: ['compositeTypes'],
  description: 'Creates a composite type.',
  operationId: 'deploymentmanager.compositeTypes.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompositeTypeSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
  ],
})

export const getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}',
    tags: ['compositeTypes'],
    description: 'Gets information about a specific composite type.',
    operationId: 'deploymentmanager.compositeTypes.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        compositeType: z
          .string()
          .openapi({
            param: {
              description: 'The name of the composite type for this request.',
              in: 'path',
              name: 'compositeType',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CompositeTypeSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const putDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute =
  createRoute({
    method: 'put',
    path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}',
    tags: ['compositeTypes'],
    description: 'Updates a composite type.',
    operationId: 'deploymentmanager.compositeTypes.update',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        compositeType: z
          .string()
          .openapi({
            param: {
              description: 'The name of the composite type for this request.',
              in: 'path',
              name: 'compositeType',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CompositeTypeSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const deleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute =
  createRoute({
    method: 'delete',
    path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}',
    tags: ['compositeTypes'],
    description: 'Deletes a composite type.',
    operationId: 'deploymentmanager.compositeTypes.delete',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        compositeType: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type for this request.',
              in: 'path',
              name: 'compositeType',
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const patchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute =
  createRoute({
    method: 'patch',
    path: '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}',
    tags: ['compositeTypes'],
    description: 'Patches a composite type.',
    operationId: 'deploymentmanager.compositeTypes.patch',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        compositeType: z
          .string()
          .openapi({
            param: {
              description: 'The name of the composite type for this request.',
              in: 'path',
              name: 'compositeType',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CompositeTypeSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/deployments',
  tags: ['deployments'],
  description: 'Lists all deployments for a given project.',
  operationId: 'deploymentmanager.deployments.list',
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
              'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
          param: {
            description:
              'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeploymentsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})

export const postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute = createRoute({
  method: 'post',
  path: '/deploymentmanager/v2beta/projects/{project}/global/deployments',
  tags: ['deployments'],
  description:
    'Creates a deployment and all of the resources described by the deployment manifest.',
  operationId: 'deploymentmanager.deployments.insert',
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
      createPolicy: z
        .enum(['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the policy to use for creating new resources.',
            in: 'query',
            name: 'createPolicy',
            schema: { enum: ['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'], type: 'string' },
            required: false,
          },
        }),
      preview: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.',
            in: 'query',
            name: 'preview',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeploymentSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
  ],
})

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}',
    tags: ['deployments'],
    description: 'Gets information about a specific deployment.',
    operationId: 'deploymentmanager.deployments.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeploymentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const putDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute =
  createRoute({
    method: 'put',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}',
    tags: ['deployments'],
    description:
      'Updates a deployment and all of the resources described by the deployment manifest.',
    operationId: 'deploymentmanager.deployments.update',
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
        createPolicy: z
          .enum(['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sets the policy to use for creating new resources.',
              in: 'query',
              name: 'createPolicy',
              schema: { enum: ['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'], type: 'string' },
              required: false,
            },
          }),
        deletePolicy: z
          .enum(['DELETE', 'ABANDON'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sets the policy to use for deleting resources.',
              in: 'query',
              name: 'deletePolicy',
              schema: { enum: ['DELETE', 'ABANDON'], type: 'string' },
              required: false,
            },
          }),
        preview: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.',
              in: 'query',
              name: 'preview',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeploymentSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const deleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute =
  createRoute({
    method: 'delete',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}',
    tags: ['deployments'],
    description: 'Deletes a deployment and all of the resources in the deployment.',
    operationId: 'deploymentmanager.deployments.delete',
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
        deletePolicy: z
          .enum(['DELETE', 'ABANDON'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sets the policy to use for deleting resources.',
              in: 'query',
              name: 'deletePolicy',
              schema: { enum: ['DELETE', 'ABANDON'], type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const patchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute =
  createRoute({
    method: 'patch',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}',
    tags: ['deployments'],
    description:
      'Patches a deployment and all of the resources described by the deployment manifest.',
    operationId: 'deploymentmanager.deployments.patch',
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
        createPolicy: z
          .enum(['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sets the policy to use for creating new resources.',
              in: 'query',
              name: 'createPolicy',
              schema: { enum: ['CREATE_OR_ACQUIRE', 'ACQUIRE', 'CREATE'], type: 'string' },
              required: false,
            },
          }),
        deletePolicy: z
          .enum(['DELETE', 'ABANDON'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Sets the policy to use for deleting resources.',
              in: 'query',
              name: 'deletePolicy',
              schema: { enum: ['DELETE', 'ABANDON'], type: 'string' },
              required: false,
            },
          }),
        preview: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.',
              in: 'query',
              name: 'preview',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeploymentSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewRoute =
  createRoute({
    method: 'post',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview',
    tags: ['deployments'],
    description: 'Cancels and removes the preview currently associated with the deployment.',
    operationId: 'deploymentmanager.deployments.cancelPreview',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeploymentsCancelPreviewRequestSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests',
    tags: ['manifests'],
    description: 'Lists all manifests for a given deployment.',
    operationId: 'deploymentmanager.manifests.list',
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
                'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
              in: 'query',
              name: 'filter',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxResults: z
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
            param: {
              description:
                'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
              in: 'query',
              name: 'maxResults',
              schema: { minimum: 0, type: 'integer' },
              required: false,
            },
          }),
        orderBy: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
              in: 'query',
              name: 'orderBy',
              schema: { type: 'string' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManifestsListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests/{manifest}',
    tags: ['manifests'],
    description: 'Gets information about a specific manifest.',
    operationId: 'deploymentmanager.manifests.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
        manifest: z
          .string()
          .openapi({
            param: {
              description: 'The name of the manifest for this request.',
              in: 'path',
              name: 'manifest',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManifestSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources',
    tags: ['resources'],
    description: 'Lists all resources in a given deployment.',
    operationId: 'deploymentmanager.resources.list',
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
                'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
              in: 'query',
              name: 'filter',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxResults: z
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
            param: {
              description:
                'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
              in: 'query',
              name: 'maxResults',
              schema: { minimum: 0, type: 'integer' },
              required: false,
            },
          }),
        orderBy: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
              in: 'query',
              name: 'orderBy',
              schema: { type: 'string' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourcesListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources/{resource}',
    tags: ['resources'],
    description: 'Gets information about a single resource.',
    operationId: 'deploymentmanager.resources.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resource: z
          .string()
          .openapi({
            param: {
              description: 'The name of the resource for this request.',
              in: 'path',
              name: 'resource',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ResourceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopRoute =
  createRoute({
    method: 'post',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop',
    tags: ['deployments'],
    description:
      'Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.',
    operationId: 'deploymentmanager.deployments.stop',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The name of the deployment for this request.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeploymentsStopRequestSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy',
    tags: ['deployments'],
    description:
      'Gets the access control policy for a resource. May be empty if no such policy or resource exists.',
    operationId: 'deploymentmanager.deployments.getIamPolicy',
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
        optionsRequestedPolicyVersion: z
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
              description: 'Requested IAM Policy version.',
              in: 'query',
              name: 'optionsRequestedPolicyVersion',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resource: z
          .string()
          .openapi({
            param: {
              description: 'Name or id of the resource for this request.',
              in: 'path',
              name: 'resource',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PolicySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyRoute =
  createRoute({
    method: 'post',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy',
    tags: ['deployments'],
    description:
      'Sets the access control policy on the specified resource. Replaces any existing policy.',
    operationId: 'deploymentmanager.deployments.setIamPolicy',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resource: z
          .string()
          .openapi({
            param: {
              description: 'Name or id of the resource for this request.',
              in: 'path',
              name: 'resource',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GlobalSetPolicyRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PolicySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsRoute =
  createRoute({
    method: 'post',
    path: '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions',
    tags: ['deployments'],
    description: 'Returns permissions that a caller has on the specified resource.',
    operationId: 'deploymentmanager.deployments.testIamPermissions',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resource: z
          .string()
          .openapi({
            param: {
              description: 'Name or id of the resource for this request.',
              in: 'path',
              name: 'resource',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TestPermissionsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TestPermissionsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalOperationsRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/operations',
  tags: ['operations'],
  description: 'Lists all operations for a project.',
  operationId: 'deploymentmanager.operations.list',
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
              'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
          param: {
            description:
              'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})

export const getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/operations/{operation}',
  tags: ['operations'],
  description: 'Gets information about a specific operation.',
  operationId: 'deploymentmanager.operations.get',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operation: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation for this request.',
            in: 'path',
            name: 'operation',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})

export const getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders',
  tags: ['typeProviders'],
  description: 'Lists all resource type providers for Deployment Manager.',
  operationId: 'deploymentmanager.typeProviders.list',
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
              'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
          param: {
            description:
              'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TypeProvidersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})

export const postDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute = createRoute({
  method: 'post',
  path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders',
  tags: ['typeProviders'],
  description: 'Creates a type provider.',
  operationId: 'deploymentmanager.typeProviders.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TypeProviderSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
  ],
})

export const getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}',
    tags: ['typeProviders'],
    description: 'Gets information about a specific type provider.',
    operationId: 'deploymentmanager.typeProviders.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TypeProviderSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const putDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute =
  createRoute({
    method: 'put',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}',
    tags: ['typeProviders'],
    description: 'Updates a type provider.',
    operationId: 'deploymentmanager.typeProviders.update',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TypeProviderSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const deleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute =
  createRoute({
    method: 'delete',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}',
    tags: ['typeProviders'],
    description: 'Deletes a type provider.',
    operationId: 'deploymentmanager.typeProviders.delete',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const patchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute =
  createRoute({
    method: 'patch',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}',
    tags: ['typeProviders'],
    description: 'Patches a type provider.',
    operationId: 'deploymentmanager.typeProviders.patch',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TypeProviderSchema } } },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types',
    tags: ['typeProviders'],
    description: 'Lists all the type info for a TypeProvider.',
    operationId: 'deploymentmanager.typeProviders.listTypes',
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
                'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
              in: 'query',
              name: 'filter',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxResults: z
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
            param: {
              description:
                'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
              in: 'query',
              name: 'maxResults',
              schema: { minimum: 0, type: 'integer' },
              required: false,
            },
          }),
        orderBy: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
              in: 'query',
              name: 'orderBy',
              schema: { type: 'string' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TypeProvidersListTypesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeRoute =
  createRoute({
    method: 'get',
    path: '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types/{type}',
    tags: ['typeProviders'],
    description: 'Gets a type info for a type provided by a TypeProvider.',
    operationId: 'deploymentmanager.typeProviders.getType',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project ID for this request.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        typeProvider: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider for this request.',
              in: 'path',
              name: 'typeProvider',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: z
          .string()
          .openapi({
            param: {
              description: 'The name of the type provider type for this request.',
              in: 'path',
              name: 'type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TypeInfoSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      },
    ],
  })

export const getDeploymentmanagerV2betaProjectsProjectGlobalTypesRoute = createRoute({
  method: 'get',
  path: '/deploymentmanager/v2beta/projects/{project}/global/types',
  tags: ['types'],
  description: 'Lists all resource types for Deployment Manager.',
  operationId: 'deploymentmanager.types.list',
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
              'A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq \'single quoted literal\'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
          param: {
            description:
              'The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for this request.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TypesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ndev.cloudman.readonly'],
    },
  ],
})
