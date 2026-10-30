import { createRoute, z } from '@hono/zod-openapi'

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBoolSchema = z
  .any()
  .openapi({
    description:
      'JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.',
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema = z
  .any()
  .openapi({
    description:
      'JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.',
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArraySchema = z
  .any()
  .openapi({
    description: 'JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.',
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationSchema = z
  .object({ description: z.string().exactOptional(), url: z.string().exactOptional() })
  .openapi({
    description:
      'ExternalDocumentation allows referencing an external resource for extended documentation.',
    required: [],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArraySchema = z
  .any()
  .openapi({
    description:
      'JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.',
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRuleSchema = z
  .object({
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "fieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute `foo` under a map `testMap`, the fieldPath could be set to `.testMap.foo` If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. `.testList` It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use `['specialName']` to refer the field name. e.g. for attribute `foo.34$` appears in a list `testList`, the fieldPath could be set to `.testList['foo.34$']`",
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host"',
      }),
    messageExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: "x must be less than max ("+string(self.max)+")"',
      }),
    optionalOldSelf: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'optionalOldSelf is used to opt a transition rule into evaluation even when the object is first created, or if the old object is missing the value.\n\nWhen enabled `oldSelf` will be a CEL optional whose value will be `None` if there is no old value, or when the object is initially created.\n\nYou may check for presence of oldSelf using `oldSelf.hasValue()` and unwrap it after checking using `oldSelf.value()`. Check the CEL documentation for Optional types for more information: https://pkg.go.dev/github.com/google/cel-go/cel#OptionalTypes\n\nMay not be set unless `oldSelf` is used in `rule`.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The HTTP status code returned to the caller will match the reason of the reason of the first failed validation rule. The currently supported reasons are: "FieldValueInvalid", "FieldValueForbidden", "FieldValueRequired", "FieldValueDuplicate". If not set, default to use "FieldValueInvalid". All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.',
      }),
    rule: z
      .string()
      .default('')
      .openapi({
        description:
          'Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {"rule": "self.status.actual <= self.spec.maxDesired"}\n\nIf the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {"rule": "self.components[\'Widget\'].priority < 10"} - Rule scoped to a list of integers: {"rule": "self.values.all(value, value >= 0 && value < 100)"} - Rule scoped to a string value: {"rule": "self.startsWith(\'kube\')"}\n\nThe `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.\n\nUnknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an "unknown type". An "unknown type" is recursively defined as:\n  - A schema with no type and x-kubernetes-preserve-unknown-fields set to true\n  - An array where the items schema is of an "unknown type"\n  - An object where the additionalProperties schema is of an "unknown type"\n\nOnly property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - \'__\' escapes to \'__underscores__\' - \'.\' escapes to \'__dot__\' - \'-\' escapes to \'__dash__\' - \'/\' escapes to \'__slash__\' - Property names that exactly match a CEL RESERVED keyword escape to \'__{keyword}__\'. The keywords are:\n\t  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",\n\t  "import", "let", "loop", "package", "namespace", "return".\nExamples:\n  - Rule accessing a property named "namespace": {"rule": "self.__namespace__ > 0"}\n  - Rule accessing a property named "x-prop": {"rule": "self.x__dash__prop > 0"}\n  - Rule accessing a property named "redact__d": {"rule": "self.redact__underscores__d > 0"}\n\nEquality on arrays with x-kubernetes-list-type of \'set\' or \'map\' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:\n  - \'set\': `X + Y` performs a union where the array positions of all elements in `X` are preserved and\n    non-intersecting elements in `Y` are appended, retaining their partial order.\n  - \'map\': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values\n    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with\n    non-intersecting keys are appended, retaining their partial order.\n\nIf `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.\n\nBy default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional\n variable whose value() is the same type as `self`.\nSee the documentation for the `optionalOldSelf` field for details.\n\nTransition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.',
      }),
  })
  .openapi({
    description:
      'ValidationRule describes a validation rule written in the CEL expression language.',
    required: ['rule'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule')

type IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType = {
  $ref?: string
  $schema?: string
  additionalItems?: z.infer<
    typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBoolSchema
  >
  additionalProperties?: z.infer<
    typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBoolSchema
  >
  allOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType[]
  anyOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType[]
  default?: z.infer<typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema>
  definitions?: {
    [key: string]: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType
  }
  dependencies?: {
    [key: string]: z.infer<
      typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArraySchema
    >
  }
  description?: string
  enum?: z.infer<typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema>[]
  example?: z.infer<typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema>
  exclusiveMaximum?: boolean
  exclusiveMinimum?: boolean
  externalDocs?: z.infer<
    typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationSchema
  >
  format?: string
  id?: string
  items?: z.infer<
    typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArraySchema
  >
  maxItems?: bigint
  maxLength?: bigint
  maxProperties?: bigint
  maximum?: number
  minItems?: bigint
  minLength?: bigint
  minProperties?: bigint
  minimum?: number
  multipleOf?: number
  not?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType
  nullable?: boolean
  oneOf?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType[]
  pattern?: string
  patternProperties?: {
    [key: string]: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType
  }
  properties?: {
    [key: string]: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType
  }
  required?: string[]
  title?: string
  type?: string
  uniqueItems?: boolean
  'x-kubernetes-embedded-resource'?: boolean
  'x-kubernetes-int-or-string'?: boolean
  'x-kubernetes-list-map-keys'?: string[]
  'x-kubernetes-list-type'?: string
  'x-kubernetes-map-type'?: string
  'x-kubernetes-preserve-unknown-fields'?: boolean
  'x-kubernetes-validations'?: z.infer<
    typeof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRuleSchema
  >[]
}

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'description is a human readable description of this column.' }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.",
      }),
    jsonPath: z
      .string()
      .default('')
      .openapi({
        description:
          'jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.',
      }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is a human readable name for the column.' }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.',
      }),
    type: z
      .string()
      .default('')
      .openapi({
        description:
          'type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.',
      }),
  })
  .openapi({
    description: 'CustomResourceColumnDefinition specifies a column for server side printing.',
    required: ['name', 'type', 'jsonPath'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the name of the service. Required' }),
    namespace: z
      .string()
      .default('')
      .openapi({ description: 'namespace is the namespace of the service. Required' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'path is an optional URL path at which the webhook will be contacted.',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.',
      }),
  })
  .openapi({
    description: 'ServiceReference holds a reference to Service.legacy.k8s.io',
    required: ['namespace', 'name'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfigSchema = z
  .object({
    caBundle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.",
      }),
    service:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceSchema.exactOptional().openapi(
        {
          description:
            'service is a reference to the service for this webhook. Either service or url must be specified.\n\nIf the webhook is running within the cluster, then you should use `service`.',
        },
      ),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.\n\nThe `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.\n\nPlease note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.\n\nThe scheme must be "https"; the URL must begin with "https://".\n\nA path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.\n\nAttempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.',
      }),
  })
  .openapi({
    description:
      'WebhookClientConfig contains the information to make a TLS connection with the webhook.',
    required: [],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionSchema = z
  .object({
    clientConfig:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfigSchema.exactOptional().openapi(
        {
          description:
            'clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.',
        },
      ),
    conversionReviewVersions: z
      .array(z.string())
      .openapi({
        description:
          'conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'WebhookConversion describes how to call a conversion webhook',
    required: ['conversionReviewVersions'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionSchema = z
  .object({
    strategy: z
      .string()
      .default('')
      .openapi({
        description:
          'strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information\n  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.',
      }),
    webhook:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionSchema.exactOptional().openapi(
        {
          description:
            'webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.',
        },
      ),
  })
  .openapi({
    description: 'CustomResourceConversion describes how to convert different versions of a CR.',
    required: ['strategy'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion')

const IoK8sApimachineryPkgApisMetaV1TimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Time')

const IoK8sApimachineryPkgApisMetaV1FieldsV1Schema = z
  .object({})
  .openapi({
    description:
      "FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.\n\nEach key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.\n\nThe exact format is defined in sigs.k8s.io/structured-merge-diff",
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1FieldsV1')

const IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntrySchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.',
      }),
    fieldsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"',
      }),
    fieldsV1: IoK8sApimachineryPkgApisMetaV1FieldsV1Schema.exactOptional().openapi({
      description:
        'FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.',
    }),
    manager: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manager is an identifier of the workflow managing these fields.' }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.",
      }),
    subresource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.',
      }),
    time: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.',
    }),
  })
  .openapi({
    description:
      'ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry')

const IoK8sApimachineryPkgApisMetaV1OwnerReferenceSchema = z
  .object({
    apiVersion: z.string().default('').openapi({ description: 'API version of the referent.' }),
    blockOwnerDeletion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.',
      }),
    controller: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, this reference points to the managing controller.' }),
    kind: z
      .string()
      .default('')
      .openapi({
        description:
          'Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names',
      }),
    uid: z
      .string()
      .default('')
      .openapi({
        description:
          'UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.',
    required: ['apiVersion', 'kind', 'name', 'uid'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1OwnerReference')

const IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations',
      }),
    creationTimestamp: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
    }),
    deletionGracePeriodSeconds: z
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
          'Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.',
      }),
    deletionTimestamp: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.\n\nPopulated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
    }),
    finalizers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.',
        'x-kubernetes-list-type': 'set',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    generateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.\n\nIf this field is specified and the generated name exists, the server will return a 409.\n\nApplied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency',
      }),
    generation: z
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
          'A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels',
      }),
    managedFields: z
      .array(IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          "ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.",
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.\n\nMust be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces',
      }),
    ownerReferences: z
      .array(IoK8sApimachineryPkgApisMetaV1OwnerReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.',
        'x-kubernetes-list-map-keys': ['uid'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'uid',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.\n\nPopulated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.\n\nPopulated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ObjectMeta')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.",
        'x-kubernetes-list-type': 'atomic',
      }),
    kind: z
      .string()
      .default('')
      .openapi({
        description:
          'kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.',
      }),
    listKind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".',
      }),
    plural: z
      .string()
      .default('')
      .openapi({
        description:
          'plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.',
      }),
    shortNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.',
        'x-kubernetes-list-type': 'atomic',
      }),
    singular: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.',
      }),
  })
  .openapi({
    description:
      'CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition',
    required: ['plural', 'kind'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema: z.ZodType<IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsType> =
  z
    .lazy(() =>
      z
        .object({
          $ref: z.string().exactOptional(),
          $schema: z.string().exactOptional(),
          additionalItems:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBoolSchema.exactOptional(),
          additionalProperties:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBoolSchema.exactOptional(),
          allOf: z
            .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema)
            .exactOptional()
            .openapi({ 'x-kubernetes-list-type': 'atomic' }),
          anyOf: z
            .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema)
            .exactOptional()
            .openapi({ 'x-kubernetes-list-type': 'atomic' }),
          default:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema.exactOptional().openapi({
              description:
                'default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false.',
            }),
          definitions: z
            .record(
              z.string(),
              IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema,
            )
            .exactOptional(),
          dependencies: z
            .record(
              z.string(),
              IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArraySchema,
            )
            .exactOptional(),
          description: z.string().exactOptional(),
          enum: z
            .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema)
            .exactOptional()
            .openapi({ 'x-kubernetes-list-type': 'atomic' }),
          example: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchema.exactOptional(),
          exclusiveMaximum: z.boolean().exactOptional(),
          exclusiveMinimum: z.boolean().exactOptional(),
          externalDocs:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationSchema.exactOptional(),
          format: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:\n\n- bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\\\d{3})\\\\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\\\\d{3}[- ]?\\\\d{2}[- ]?\\\\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.',
            }),
          id: z.string().exactOptional(),
          items:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArraySchema.exactOptional(),
          maxItems: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          maxLength: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          maxProperties: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          maximum: z.float64().exactOptional(),
          minItems: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          minLength: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          minProperties: z
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
            .openapi({ type: 'integer', format: 'int64' }),
          minimum: z.float64().exactOptional(),
          multipleOf: z.float64().exactOptional(),
          not: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema.exactOptional(),
          nullable: z.boolean().exactOptional(),
          oneOf: z
            .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema)
            .exactOptional()
            .openapi({ 'x-kubernetes-list-type': 'atomic' }),
          pattern: z.string().exactOptional(),
          patternProperties: z
            .record(
              z.string(),
              IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema,
            )
            .exactOptional(),
          properties: z
            .record(
              z.string(),
              IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema,
            )
            .exactOptional(),
          required: z
            .array(z.string())
            .exactOptional()
            .openapi({ 'x-kubernetes-list-type': 'atomic' }),
          title: z.string().exactOptional(),
          type: z.string().exactOptional(),
          uniqueItems: z.boolean().exactOptional(),
          'x-kubernetes-embedded-resource': z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata).',
            }),
          'x-kubernetes-int-or-string': z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:\n\n1) anyOf:\n   - type: integer\n   - type: string\n2) allOf:\n   - anyOf:\n     - type: integer\n     - type: string\n   - ... zero or more',
            }),
          'x-kubernetes-list-map-keys': z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.\n\nThis tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).\n\nThe properties specified must either be required or have a default value, to ensure those properties are present for all list items.',
              'x-kubernetes-list-type': 'atomic',
            }),
          'x-kubernetes-list-type': z
            .string()
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:\n\n1) `atomic`: the list is treated as a single entity, like a scalar.\n     Atomic lists will be entirely replaced when updated. This extension\n     may be used on any type of list (struct, scalar, ...).\n2) `set`:\n     Sets are lists that must not have multiple items with the same value. Each\n     value must be a scalar, an object with x-kubernetes-map-type `atomic` or an\n     array with x-kubernetes-list-type `atomic`.\n3) `map`:\n     These lists are like maps in that their elements have a non-index key\n     used to identify them. Order is preserved upon merge. The map tag\n     must only be used on a list with elements of type object.\nDefaults to atomic for arrays.',
            }),
          'x-kubernetes-map-type': z
            .string()
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:\n\n1) `granular`:\n     These maps are actual maps (key-value pairs) and each fields are independent\n     from each other (they can each be manipulated by separate actors). This is\n     the default behaviour for all maps.\n2) `atomic`: the list is treated as a single entity, like a scalar.\n     Atomic maps will be entirely replaced when updated.',
            }),
          'x-kubernetes-preserve-unknown-fields': z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden.',
            }),
          'x-kubernetes-validations': z
            .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRuleSchema)
            .exactOptional()
            .openapi({
              description:
                'x-kubernetes-validations describes a list of validation rules written in the CEL expression language.',
              'x-kubernetes-list-map-keys': ['rule'],
              'x-kubernetes-list-type': 'map',
              'x-kubernetes-patch-merge-key': 'rule',
              'x-kubernetes-patch-strategy': 'merge',
            }),
        })
        .openapi({
          description:
            'JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).',
          required: [],
        }),
    )
    .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationSchema = z
  .object({
    openAPIV3Schema:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsSchema.exactOptional().openapi(
        {
          description:
            'openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.',
        },
      ),
  })
  .openapi({
    description: 'CustomResourceValidation is a list of validation methods for CustomResources.',
    required: [],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableFieldSchema = z
  .object({
    jsonPath: z
      .string()
      .default('')
      .openapi({
        description:
          'jsonPath is a simple JSON path which is evaluated against each custom resource to produce a field selector value. Only JSON paths without the array notation are allowed. Must point to a field of type string, boolean or integer. Types with enum values and strings with formats are allowed. If jsonPath refers to absent field in a resource, the jsonPath evaluates to an empty string. Must not point to metdata fields. Required.',
      }),
  })
  .openapi({
    description:
      'SelectableField specifies the JSON path of a field that may be used with field selectors.',
    required: ['jsonPath'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleSchema = z
  .object({
    labelSelectorPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string.',
      }),
    specReplicasPath: z
      .string()
      .default('')
      .openapi({
        description:
          'specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.',
      }),
    statusReplicasPath: z
      .string()
      .default('')
      .openapi({
        description:
          'statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.',
      }),
  })
  .openapi({
    description:
      'CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.',
    required: ['specReplicasPath', 'statusReplicasPath'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatusSchema = z
  .object({})
  .openapi({
    description:
      'CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza',
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesSchema = z
  .object({
    scale:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleSchema.exactOptional().openapi(
        {
          description:
            'scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.',
        },
      ),
    status:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatusSchema.exactOptional().openapi(
        {
          description:
            'status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.',
        },
      ),
  })
  .openapi({
    description:
      'CustomResourceSubresources defines the status and scale subresources for CustomResources.',
    required: [],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionSchema = z
  .object({
    additionalPrinterColumns: z
      .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.',
        'x-kubernetes-list-type': 'atomic',
      }),
    deprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.',
      }),
    deprecationWarning: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.',
      }),
    schema:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationSchema.exactOptional().openapi(
        {
          description:
            'schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.',
        },
      ),
    selectableFields: z
      .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors',
        'x-kubernetes-list-type': 'atomic',
      }),
    served: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'served is a flag enabling/disabling this version from being served via REST APIs',
      }),
    storage: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.',
      }),
    subresources:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesSchema.exactOptional().openapi(
        {
          description:
            'subresources specify what subresources this version of the defined custom resource have.',
        },
      ),
  })
  .openapi({
    description: 'CustomResourceDefinitionVersion describes a version for CRD.',
    required: ['name', 'served', 'storage'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecSchema = z
  .object({
    conversion:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionSchema.exactOptional().openapi(
        { description: 'conversion defines conversion settings for the CRD.' },
      ),
    group: z
      .string()
      .default('')
      .openapi({
        description:
          'group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).',
      }),
    names:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesSchema.default(
        {},
      ).openapi({
        description: 'names specify the resource and kind names for the custom resource.',
      }),
    preserveUnknownFields: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.',
      }),
    scope: z
      .string()
      .default('')
      .openapi({
        description:
          'scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.',
      }),
    versions: z
      .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionSchema)
      .openapi({
        description:
          'versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'CustomResourceDefinitionSpec describes how a user wants their resource to appear',
    required: ['group', 'names', 'scope', 'versions'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionSchema = z
  .object({
    lastTransitionTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'lastTransitionTime last time the condition transitioned from one status to another.',
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'message is a human-readable message indicating details about last transition.',
      }),
    observedGeneration: z
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
          'observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "reason is a unique, one-word, CamelCase reason for the condition's last transition.",
      }),
    status: z
      .string()
      .default('')
      .openapi({
        description: 'status is the status of the condition. Can be True, False, Unknown.',
      }),
    type: z
      .string()
      .default('')
      .openapi({
        description:
          'type is the type of the condition. Types include Established, NamesAccepted and Terminating.',
      }),
  })
  .openapi({
    description:
      'CustomResourceDefinitionCondition contains details for the current condition of this pod.',
    required: ['type', 'status'],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusSchema = z
  .object({
    acceptedNames:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesSchema.default(
        {},
      )
        .exactOptional()
        .openapi({
          description:
            'acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.',
        }),
    conditions: z
      .array(
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionSchema,
      )
      .exactOptional()
      .openapi({
        description:
          'conditions indicate state for particular aspects of a CustomResourceDefinition',
        'x-kubernetes-list-map-keys': ['type'],
        'x-kubernetes-list-type': 'map',
      }),
    observedGeneration: z
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
        description: 'The generation observed by the CRD controller.',
      }),
    storedVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition',
    required: [],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          "Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
    spec: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecSchema.default(
      {},
    ).openapi({ description: 'spec describes how the user wants the resources to appear' }),
    status:
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusSchema.default(
        {},
      )
        .exactOptional()
        .openapi({
          description: 'status indicates the actual state of the CustomResourceDefinition',
        }),
  })
  .openapi({
    description:
      'CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'apiextensions.k8s.io', kind: 'CustomResourceDefinition', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition')

const IoK8sApimachineryPkgApisMetaV1ShardInfoSchema = z
  .object({
    selector: z
      .string()
      .default('')
      .openapi({
        description:
          'selector is the shard selector string from the request, echoed back so clients can verify which shard they received and merge responses from multiple shards.',
      }),
  })
  .openapi({
    description:
      'ShardInfo describes the shard selector that was applied to produce a list response. Its presence on a list response indicates the list is a filtered subset.',
    required: ['selector'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ShardInfo')

const IoK8sApimachineryPkgApisMetaV1ListMetaSchema = z
  .object({
    continue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.',
      }),
    remainingItemCount: z
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
          'remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency",
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.',
      }),
    shardInfo: IoK8sApimachineryPkgApisMetaV1ShardInfoSchema.exactOptional().openapi({
      description:
        'shardInfo is set when the list is a filtered subset of the full collection, as selected by a shard selector on the request. It echoes back the selector so clients can verify which shard they received and merge sharded responses. Clients should not cache sharded list responses as a full representation of the collection.\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.',
    }),
  })
  .openapi({
    description:
      'ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ListMeta')

const IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema)
      .openapi({ description: 'items list individual CustomResourceDefinition objects' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          "Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
  })
  .openapi({
    description: 'CustomResourceDefinitionList is a list of CustomResourceDefinition objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'apiextensions.k8s.io', kind: 'CustomResourceDefinitionList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList')

const IoK8sApimachineryPkgApisMetaV1APIResourceSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "categories is a list of the grouped resources this resource belongs to (e.g. 'all')",
        'x-kubernetes-list-type': 'atomic',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".',
      }),
    kind: z
      .string()
      .default('')
      .openapi({
        description:
          "kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')",
      }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the plural name of the resource.' }),
    namespaced: z
      .boolean()
      .default(false)
      .openapi({ description: 'namespaced indicates if a resource is namespaced or not.' }),
    shortNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'shortNames is a list of suggested short names of the resource.',
        'x-kubernetes-list-type': 'atomic',
      }),
    singularName: z
      .string()
      .default('')
      .openapi({
        description:
          'singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.',
      }),
    storageVersionHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.',
      }),
    verbs: z
      .array(z.string())
      .openapi({
        description:
          'verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource\'s group)".',
      }),
  })
  .openapi({
    description: 'APIResource specifies the name of a resource and whether it is namespaced.',
    required: ['name', 'singularName', 'namespaced', 'kind', 'verbs'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1APIResource')

const IoK8sApimachineryPkgApisMetaV1APIResourceListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    groupVersion: z
      .string()
      .default('')
      .openapi({
        description: 'groupVersion is the group and version this APIResourceList is for.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    resources: z
      .array(IoK8sApimachineryPkgApisMetaV1APIResourceSchema)
      .openapi({
        description: 'resources contains the name of the resources and if they are namespaced.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.',
    required: ['groupVersion', 'resources'],
    'x-kubernetes-group-version-kind': [{ group: '', kind: 'APIResourceList', version: 'v1' }],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1APIResourceList')

const IoK8sApimachineryPkgApisMetaV1PreconditionsSchema = z
  .object({
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the target ResourceVersion' }),
    uid: z.string().exactOptional().openapi({ description: 'Specifies the target UID.' }),
  })
  .openapi({
    description:
      'Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Preconditions')

const IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    dryRun: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
        'x-kubernetes-list-type': 'atomic',
      }),
    gracePeriodSeconds: z
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
          'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
      }),
    ignoreStoreReadErrorWithClusterBreakingPotential: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    orphanDependents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
      }),
    preconditions: IoK8sApimachineryPkgApisMetaV1PreconditionsSchema.exactOptional().openapi({
      description:
        'Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.',
    }),
    propagationPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
      }),
  })
  .openapi({
    description: 'DeleteOptions may be provided when deleting an API object.',
    'x-kubernetes-group-version-kind': [
      { group: '', kind: 'DeleteOptions', version: 'v1' },
      { group: 'apiextensions.k8s.io', kind: 'DeleteOptions', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1DeleteOptions')

const IoK8sApimachineryPkgApisMetaV1PatchSchema = z
  .object({})
  .openapi({
    description:
      'Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Patch')

const IoK8sApimachineryPkgApisMetaV1StatusCauseSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.\n\nExamples:\n  "name" - the field "name" on the current resource\n  "items[0].name" - the field "name" on the first array entry in "items"',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable description of the cause of the error.  This field may be presented as-is to a reader.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable description of the cause of the error. If this value is empty there is no information available.',
      }),
  })
  .openapi({
    description:
      'StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1StatusCause')

const IoK8sApimachineryPkgApisMetaV1StatusDetailsSchema = z
  .object({
    causes: z
      .array(IoK8sApimachineryPkgApisMetaV1StatusCauseSchema)
      .exactOptional()
      .openapi({
        description:
          'The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.',
        'x-kubernetes-list-type': 'atomic',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The group attribute of the resource associated with the status StatusReason.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).',
      }),
    retryAfterSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1StatusDetails')

const IoK8sApimachineryPkgApisMetaV1StatusSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    code: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Suggested HTTP return code for this status, 0 if not set.' }),
    details: IoK8sApimachineryPkgApisMetaV1StatusDetailsSchema.exactOptional().openapi({
      description:
        'Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the status of this operation.' }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description: "Status is a return value for calls that don't return other objects.",
    'x-kubernetes-group-version-kind': [{ group: '', kind: 'Status', version: 'v1' }],
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Status')

const IoK8sApimachineryPkgRuntimeRawExtensionSchema = z
  .object({})
  .openapi({
    description:
      'RawExtension is used to hold extensions in external versions.\n\nTo use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.\n\n// Internal package:\n\n\ttype MyAPIObject struct {\n\t\truntime.TypeMeta `json:""`\n\t\tMyPlugin runtime.Object `json:"myPlugin"`\n\t}\n\n\ttype PluginA struct {\n\t\tAOption string `json:"aOption"`\n\t}\n\n// External package:\n\n\ttype MyAPIObject struct {\n\t\truntime.TypeMeta `json:""`\n\t\tMyPlugin runtime.RawExtension `json:"myPlugin"`\n\t}\n\n\ttype PluginA struct {\n\t\tAOption string `json:"aOption"`\n\t}\n\n// On the wire, the JSON will look something like this:\n\n\t{\n\t\t"kind":"MyAPIObject",\n\t\t"apiVersion":"v1",\n\t\t"myPlugin": {\n\t\t\t"kind":"PluginA",\n\t\t\t"aOption":"foo",\n\t\t},\n\t}\n\nSo what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package\'s DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)',
  })
  .openapi('IoK8sApimachineryPkgRuntimeRawExtension')

const IoK8sApimachineryPkgApisMetaV1WatchEventSchema = z
  .object({
    object: IoK8sApimachineryPkgRuntimeRawExtensionSchema.openapi({
      description:
        'Object is:\n * If Type is Added or Modified: the new state of the object.\n * If Type is Deleted: the state of the object immediately before deletion.\n * If Type is Error: *Status is recommended; other types may make sense\n   depending on context.',
    }),
    type: z.string().default(''),
  })
  .openapi({
    description: 'Event represents a single event to a watched resource.',
    required: ['type', 'object'],
    'x-kubernetes-group-version-kind': [
      { group: '', kind: 'WatchEvent', version: 'v1' },
      { group: 'apiextensions.k8s.io', kind: 'WatchEvent', version: 'v1' },
    ],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1WatchEvent')

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisApiextensionsK8sIoV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/',
  tags: ['apiextensions_v1'],
  description: 'get available resources',
  operationId: 'getApiextensionsV1APIResources',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions',
  tags: ['apiextensions_v1'],
  description: 'list or watch objects of kind CustomResourceDefinition',
  operationId: 'listApiextensionsV1CustomResourceDefinition',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
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
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/cbor-seq': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/json': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/json;stream=watch': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
        'application/yaml': {
          schema:
            IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute = createRoute({
  method: 'post',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions',
  tags: ['apiextensions_v1'],
  description: 'create a CustomResourceDefinition',
  operationId: 'createApiextensionsV1CustomResourceDefinition',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        '*/*': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute = createRoute({
  method: 'delete',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions',
  tags: ['apiextensions_v1'],
  description: 'delete collection of CustomResourceDefinition',
  operationId: 'deleteApiextensionsV1CollectionCustomResourceDefinition',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
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
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
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
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}',
  tags: ['apiextensions_v1'],
  description: 'read the specified CustomResourceDefinition',
  operationId: 'readApiextensionsV1CustomResourceDefinition',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute = createRoute({
  method: 'put',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}',
  tags: ['apiextensions_v1'],
  description: 'replace the specified CustomResourceDefinition',
  operationId: 'replaceApiextensionsV1CustomResourceDefinition',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        '*/*': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute = createRoute({
  method: 'delete',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}',
  tags: ['apiextensions_v1'],
  description: 'delete a CustomResourceDefinition',
  operationId: 'deleteApiextensionsV1CustomResourceDefinition',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
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
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute = createRoute({
  method: 'patch',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}',
  tags: ['apiextensions_v1'],
  description: 'partially update the specified CustomResourceDefinition',
  operationId: 'patchApiextensionsV1CustomResourceDefinition',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status',
  tags: ['apiextensions_v1'],
  description: 'read status of the specified CustomResourceDefinition',
  operationId: 'readApiextensionsV1CustomResourceDefinitionStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status',
  tags: ['apiextensions_v1'],
  description: 'replace status of the specified CustomResourceDefinition',
  operationId: 'replaceApiextensionsV1CustomResourceDefinitionStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        '*/*': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status',
  tags: ['apiextensions_v1'],
  description: 'partially update status of the specified CustomResourceDefinition',
  operationId: 'patchApiextensionsV1CustomResourceDefinitionStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/json': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
        'application/yaml': {
          schema: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions',
  tags: ['apiextensions_v1'],
  description:
    "watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchApiextensionsV1CustomResourceDefinitionList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
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
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRoute = createRoute({
  method: 'get',
  path: '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}',
  tags: ['apiextensions_v1'],
  description:
    "watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchApiextensionsV1CustomResourceDefinition',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
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
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CustomResourceDefinition',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})
