import { createRoute, z } from '@hono/zod-openapi'

const IoK8sApiAdmissionregistrationV1ApplyConfigurationSchema = z
  .object({
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "expression will be evaluated by CEL to create an apply configuration. ref: https://github.com/google/cel-spec\n\nApply configurations are declared in CEL using object initialization. For example, this CEL expression returns an apply configuration to set a single field:\n\n\tObject{\n\t  spec: Object.spec{\n\t    serviceAccountName: \"example\"\n\t  }\n\t}\n\nApply configurations may not modify atomic structs, maps or arrays due to the risk of accidental deletion of values not included in the apply configuration.\n\nCEL expressions have access to the object types needed to create apply configurations:\n\n- 'Object' - CEL type of the resource object. - 'Object.<fieldName>' - CEL type of object field (such as 'Object.spec') - 'Object.<fieldName1>.<fieldName2>...<fieldNameN>` - CEL type of nested field (such as 'Object.spec.containers')\n\nCEL expressions have access to the contents of the API request, organized into CEL variables as well as some other useful variables:\n\n- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.\n  For example, a variable named 'foo' can be accessed as 'variables.foo'.\n- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.\n  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz\n- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the\n  request resource.\n\nThe `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object. No other metadata properties are accessible.\n\nOnly property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Required.",
      }),
  })
  .openapi({
    description: 'ApplyConfiguration defines the desired configuration values of an object.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ApplyConfiguration')

const IoK8sApiAdmissionregistrationV1AuditAnnotationSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({
        description:
          'key specifies the audit annotation key. The audit annotation keys of a ValidatingAdmissionPolicy must be unique. The key must be a qualified name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.\n\nThe key is combined with the resource name of the ValidatingAdmissionPolicy to construct an audit annotation key: "{ValidatingAdmissionPolicy name}/{key}".\n\nIf an admission webhook uses the same resource name as this ValidatingAdmissionPolicy and the same audit annotation key, the annotation key will be identical. In this case, the first annotation written with the key will be included in the audit event and all subsequent annotations with the same key will be discarded.\n\nRequired.',
      }),
    valueExpression: z
      .string()
      .default('')
      .openapi({
        description:
          'valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. The expression must evaluate to either a string or null value. If the expression evaluates to a string, the audit annotation is included with the string value. If the expression evaluates to null or empty string the audit annotation will be omitted. The valueExpression may be no longer than 5kb in length. If the result of the valueExpression is more than 10kb in length, it will be truncated to 10kb.\n\nIf multiple ValidatingAdmissionPolicyBinding resources match an API request, then the valueExpression will be evaluated for each binding. All unique values produced by the valueExpressions will be joined together in a comma-separated list.\n\nRequired.',
      }),
  })
  .openapi({
    description: 'AuditAnnotation describes how to produce an audit annotation for an API request.',
    required: ['key', 'valueExpression'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1AuditAnnotation')

const IoK8sApiAdmissionregistrationV1ExpressionWarningSchema = z
  .object({
    fieldRef: z
      .string()
      .default('')
      .openapi({
        description:
          'fieldRef is the path to the field that refers to the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"',
      }),
    warning: z
      .string()
      .default('')
      .openapi({
        description:
          'warning contains the content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.',
      }),
  })
  .openapi({
    description: 'ExpressionWarning is a warning information that targets a specific expression.',
    required: ['fieldRef', 'warning'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ExpressionWarning')

const IoK8sApiAdmissionregistrationV1JSONPatchSchema = z
  .object({
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "expression will be evaluated by CEL to create a [JSON patch](https://jsonpatch.com/). ref: https://github.com/google/cel-spec\n\nexpression must return an array of JSONPatch values.\n\nFor example, this CEL expression returns a JSON patch to conditionally modify a value:\n\n\t  [\n\t    JSONPatch{op: \"test\", path: \"/spec/example\", value: \"Red\"},\n\t    JSONPatch{op: \"replace\", path: \"/spec/example\", value: \"Green\"}\n\t  ]\n\nTo define an object for the patch value, use Object types. For example:\n\n\t  [\n\t    JSONPatch{\n\t      op: \"add\",\n\t      path: \"/spec/selector\",\n\t      value: Object.spec.selector{matchLabels: {\"environment\": \"test\"}}\n\t    }\n\t  ]\n\nTo use strings containing '/' and '~' as JSONPatch path keys, use \"jsonpatch.escapeKey\". For example:\n\n\t  [\n\t    JSONPatch{\n\t      op: \"add\",\n\t      path: \"/metadata/labels/\" + jsonpatch.escapeKey(\"example.com/environment\"),\n\t      value: \"test\"\n\t    },\n\t  ]\n\nCEL expressions have access to the types needed to create JSON patches and objects:\n\n- 'JSONPatch' - CEL type of JSON Patch operations. JSONPatch has the fields 'op', 'from', 'path' and 'value'.\n  See [JSON patch](https://jsonpatch.com/) for more details. The 'value' field may be set to any of: string,\n  integer, array, map or object.  If set, the 'path' and 'from' fields must be set to a\n  [JSON pointer](https://datatracker.ietf.org/doc/html/rfc6901/) string, where the 'jsonpatch.escapeKey()' CEL\n  function may be used to escape path keys containing '/' and '~'.\n- 'Object' - CEL type of the resource object. - 'Object.<fieldName>' - CEL type of object field (such as 'Object.spec') - 'Object.<fieldName1>.<fieldName2>...<fieldNameN>` - CEL type of nested field (such as 'Object.spec.containers')\n\nCEL expressions have access to the contents of the API request, organized into CEL variables as well as some other useful variables:\n\n- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.\n  For example, a variable named 'foo' can be accessed as 'variables.foo'.\n- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.\n  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz\n- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the\n  request resource.\n\nCEL expressions have access to [Kubernetes CEL function libraries](https://kubernetes.io/docs/reference/using-api/cel/#cel-options-language-features-and-libraries) as well as:\n\n- 'jsonpatch.escapeKey' - Performs JSONPatch key escaping. '~' and  '/' are escaped as '~0' and `~1' respectively).\n\nOnly property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Required.",
      }),
  })
  .openapi({ description: 'JSONPatch defines a JSON Patch.', required: [] })
  .openapi('IoK8sApiAdmissionregistrationV1JSONPatch')

const IoK8sApiAdmissionregistrationV1MatchConditionSchema = z
  .object({
    expression: z
      .string()
      .default('')
      .openapi({
        description:
          "expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:\n\n'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.\n  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz\n'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the\n  request resource.\nDocumentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/\n\nRequired.",
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          "name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')\n\nRequired.",
      }),
  })
  .openapi({
    description:
      'MatchCondition represents a condition which must by fulfilled for a request to be sent to a webhook.',
    required: ['name', 'expression'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MatchCondition')

const IoK8sApiAdmissionregistrationV1NamedRuleWithOperationsSchema = z
  .object({
    apiGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "apiGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    apiVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "apiVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    operations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    resourceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'resourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.',
        'x-kubernetes-list-type': 'atomic',
      }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "resources is a list of resources this rule applies to.\n\nFor example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.\n\nIf wildcard is present, the validation rule will ensure resources do not overlap with each other.\n\nDepending on the enclosing object, subresources might not be allowed. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".',
      }),
  })
  .openapi({
    description:
      'NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1NamedRuleWithOperations')

const IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({ description: 'key is the label key that the selector applies to.' }),
    operator: z
      .string()
      .default('')
      .openapi({
        description:
          "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
    required: ['key', 'operator'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement')

const IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema = z
  .object({
    matchExpressions: z
      .array(IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description:
          'matchExpressions is a list of label selector requirements. The requirements are ANDed.',
        'x-kubernetes-list-type': 'atomic',
      }),
    matchLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
      }),
  })
  .openapi({
    description:
      'A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1LabelSelector')

const IoK8sApiAdmissionregistrationV1MatchResourcesSchema = z
  .object({
    excludeResourceRules: z
      .array(IoK8sApiAdmissionregistrationV1NamedRuleWithOperationsSchema)
      .exactOptional()
      .openapi({
        description:
          'excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)',
        'x-kubernetes-list-type': 'atomic',
      }),
    matchPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".\n\n- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.\n\n- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.\n\nDefaults to "Equivalent"',
      }),
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.\n\nFor example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "runlevel",\n      "operator": "NotIn",\n      "values": [\n        "0",\n        "1"\n      ]\n    }\n  ]\n}\n\nIf instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "environment",\n      "operator": "In",\n      "values": [\n        "prod",\n        "staging"\n      ]\n    }\n  ]\n}\n\nSee https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.\n\nDefault to the empty LabelSelector, which matches everything.',
    }),
    objectSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.',
    }),
    resourceRules: z
      .array(IoK8sApiAdmissionregistrationV1NamedRuleWithOperationsSchema)
      .exactOptional()
      .openapi({
        description:
          'resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MatchResources')

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

const IoK8sApiAdmissionregistrationV1MutationSchema = z
  .object({
    applyConfiguration:
      IoK8sApiAdmissionregistrationV1ApplyConfigurationSchema.exactOptional().openapi({
        description:
          'applyConfiguration defines the desired configuration values of an object. The configuration is applied to the admission object using [structured merge diff](https://github.com/kubernetes-sigs/structured-merge-diff). A CEL expression is used to create apply configuration.',
      }),
    jsonPatch: IoK8sApiAdmissionregistrationV1JSONPatchSchema.exactOptional().openapi({
      description:
        'jsonPatch defines a [JSON patch](https://jsonpatch.com/) operation to perform a mutation to the object. A CEL expression is used to create the JSON patch.',
    }),
    patchType: z
      .string()
      .default('')
      .openapi({
        description:
          'patchType indicates the patch strategy used. Allowed values are "ApplyConfiguration" and "JSONPatch". Required.',
      }),
  })
  .openapi({
    description: 'Mutation specifies the CEL expression which is used to apply the Mutation.',
    required: ['patchType'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1Mutation')

const IoK8sApiAdmissionregistrationV1ParamKindSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'apiVersion is the API group version the resources belong to. In format of "group/version". Required.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'kind is the API kind the resources belong to. Required.' }),
  })
  .openapi({
    description: 'ParamKind is a tuple of Group Kind and Version.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ParamKind')

const IoK8sApiAdmissionregistrationV1VariableSchema = z
  .object({
    expression: z
      .string()
      .default('')
      .openapi({
        description:
          'expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`',
      }),
  })
  .openapi({
    description:
      'Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.',
    required: ['name', 'expression'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiAdmissionregistrationV1Variable')

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySpecSchema = z
  .object({
    failurePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.\n\nA policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.\n\nfailurePolicy does not define how validations that evaluate to false are handled.\n\nAllowed values are Ignore or Fail. Defaults to Fail.',
      }),
    matchConditions: z
      .array(IoK8sApiAdmissionregistrationV1MatchConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.\n\nIf a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.\n\nThe exact matching logic is (in order):\n  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.\n  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.\n  3. If any matchCondition evaluates to an error (but none are FALSE):\n     - If failurePolicy=Fail, reject the request\n     - If failurePolicy=Ignore, the policy is skipped',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    matchConstraints: IoK8sApiAdmissionregistrationV1MatchResourcesSchema.exactOptional().openapi({
      description:
        "matchConstraints specifies what resources this policy is designed to validate. The MutatingAdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API MutatingAdmissionPolicy cannot match MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT. Required.",
    }),
    mutations: z
      .array(IoK8sApiAdmissionregistrationV1MutationSchema)
      .exactOptional()
      .openapi({
        description:
          'mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.',
        'x-kubernetes-list-type': 'atomic',
      }),
    paramKind: IoK8sApiAdmissionregistrationV1ParamKindSchema.exactOptional().openapi({
      description:
        'paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If paramKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in MutatingAdmissionPolicyBinding, the params variable will be null.',
    }),
    reinvocationPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".\n\nNever: These mutations will not be called more than once per binding in a single admission evaluation.\n\nIfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.',
      }),
    variables: z
      .array(IoK8sApiAdmissionregistrationV1VariableSchema)
      .exactOptional()
      .openapi({
        description:
          'variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.\n\nThe expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'MutatingAdmissionPolicySpec defines the desired behavior of the admission policy.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySpec')

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    spec: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySpecSchema.default({})
      .exactOptional()
      .openapi({
        description: 'spec defines the desired behavior of the MutatingAdmissionPolicy.',
      }),
  })
  .openapi({
    description:
      'MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.',
    'x-kubernetes-group-version-kind': [
      { group: 'admissionregistration.k8s.io', kind: 'MutatingAdmissionPolicy', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicy')

const IoK8sApiAdmissionregistrationV1ParamRefSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name is the name of the resource being referenced.\n\nOne of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.\n\nA single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.\n\nA per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.\n\n- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.\n\n- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.',
      }),
    parameterNotFoundAction: z
      .string()
      .openapi({
        description:
          'parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.\n\nAllowed values are `Allow` or `Deny`\n\nRequired',
      }),
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.\n\nIf multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.\n\nOne of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.',
    }),
  })
  .openapi({
    description:
      'ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.',
    required: ['parameterNotFoundAction'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiAdmissionregistrationV1ParamRef')

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpecSchema = z
  .object({
    matchResources: IoK8sApiAdmissionregistrationV1MatchResourcesSchema.exactOptional().openapi({
      description:
        "matchResources limits what resources match this binding and may be mutated by it. Note that if matchResources matches a resource, the resource must also match a policy's matchConstraints and matchConditions before the resource may be mutated. When matchResources is unset, it does not constrain resource matching, and only the policy's matchConstraints and matchConditions must match for the resource to be mutated. Additionally, matchResources.resourceRules are optional and do not constraint matching when unset. Note that this is differs from MutatingAdmissionPolicy matchConstraints, where resourceRules are required. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT.",
    }),
    paramRef: IoK8sApiAdmissionregistrationV1ParamRefSchema.exactOptional().openapi({
      description:
        'paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in spec.ParamKind of the bound MutatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the MutatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.',
    }),
    policyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'policyName references a MutatingAdmissionPolicy name which the MutatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.',
      }),
  })
  .openapi({
    description:
      'MutatingAdmissionPolicyBindingSpec defines the specification of the MutatingAdmissionPolicyBinding.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpec')

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    spec: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSpecSchema.default({})
      .exactOptional()
      .openapi({
        description: 'spec defines the desired behavior of the MutatingAdmissionPolicyBinding.',
      }),
  })
  .openapi({
    description:
      "MutatingAdmissionPolicyBinding binds the MutatingAdmissionPolicy with parametrized resources. MutatingAdmissionPolicyBinding and the optional parameter resource together define how cluster administrators configure policies for clusters.\n\nFor a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding. Each evaluation is constrained by a [runtime cost budget](https://kubernetes.io/docs/reference/using-api/cel/#runtime-cost-budget).\n\nAdding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.",
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'MutatingAdmissionPolicyBinding',
        version: 'v1',
      },
    ],
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBinding')

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

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema)
      .openapi({ description: 'List of PolicyBinding.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description: 'MutatingAdmissionPolicyBindingList is a list of MutatingAdmissionPolicyBinding.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'MutatingAdmissionPolicyBindingList',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingList')

const IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema)
      .openapi({ description: 'List of ValidatingAdmissionPolicy.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description: 'MutatingAdmissionPolicyList is a list of MutatingAdmissionPolicy.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'admissionregistration.k8s.io', kind: 'MutatingAdmissionPolicyList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyList')

const IoK8sApiAdmissionregistrationV1ServiceReferenceSchema = z
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
        description:
          'path is an optional URL path which will be sent in any request to this service.',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'port is the port on the service that hosts the webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).',
      }),
  })
  .openapi({
    description: 'ServiceReference holds a reference to Service.legacy.k8s.io',
    required: ['namespace', 'name'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ServiceReference')

const IoK8sApiAdmissionregistrationV1WebhookClientConfigSchema = z
  .object({
    caBundle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.",
      }),
    service: IoK8sApiAdmissionregistrationV1ServiceReferenceSchema.exactOptional().openapi({
      description:
        'service is a reference to the service for this webhook. Either `service` or `url` must be specified.\n\nIf the webhook is running within the cluster, then you should use `service`.',
    }),
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
      'WebhookClientConfig contains the information to make a TLS connection with the webhook',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1WebhookClientConfig')

const IoK8sApiAdmissionregistrationV1RuleWithOperationsSchema = z
  .object({
    apiGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "apiGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    apiVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "apiVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    operations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "resources is a list of resources this rule applies to.\n\nFor example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.\n\nIf wildcard is present, the validation rule will ensure resources do not overlap with each other.\n\nDepending on the enclosing object, subresources might not be allowed. Required.",
        'x-kubernetes-list-type': 'atomic',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".',
      }),
  })
  .openapi({
    description:
      'RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1RuleWithOperations')

const IoK8sApiAdmissionregistrationV1MutatingWebhookSchema = z
  .object({
    admissionReviewVersions: z
      .array(z.string())
      .openapi({
        description:
          'admissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.',
        'x-kubernetes-list-type': 'atomic',
      }),
    clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfigSchema.default({}).openapi({
      description: 'clientConfig defines how to communicate with the hook. Required',
    }),
    failurePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'failurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.',
      }),
    matchConditions: z
      .array(IoK8sApiAdmissionregistrationV1MatchConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'matchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.\n\nThe exact matching logic is (in order):\n  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.\n  2. If ALL matchConditions evaluate to TRUE, the webhook is called.\n  3. If any matchCondition evaluates to an error (but none are FALSE):\n     - If failurePolicy=Fail, reject the request\n     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    matchPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".\n\n- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.\n\n- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.\n\nDefaults to "Equivalent"',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.',
      }),
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'namespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.\n\nFor example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "runlevel",\n      "operator": "NotIn",\n      "values": [\n        "0",\n        "1"\n      ]\n    }\n  ]\n}\n\nIf instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "environment",\n      "operator": "In",\n      "values": [\n        "prod",\n        "staging"\n      ]\n    }\n  ]\n}\n\nSee https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.\n\nDefault to the empty LabelSelector, which matches everything.',
    }),
    objectSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'objectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.',
    }),
    reinvocationPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".\n\nNever: the webhook will not be called more than once in a single admission evaluation.\n\nIfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.\n\nDefaults to "Never".',
      }),
    rules: z
      .array(IoK8sApiAdmissionregistrationV1RuleWithOperationsSchema)
      .exactOptional()
      .openapi({
        description:
          'rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.',
        'x-kubernetes-list-type': 'atomic',
      }),
    sideEffects: z
      .string()
      .openapi({
        description:
          'sideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.',
      }),
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'timeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.',
      }),
  })
  .openapi({
    description:
      'MutatingWebhook describes an admission webhook and the resources and operations it applies to.',
    required: ['name', 'clientConfig', 'sideEffects', 'admissionReviewVersions'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingWebhook')

const IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    webhooks: z
      .array(IoK8sApiAdmissionregistrationV1MutatingWebhookSchema)
      .exactOptional()
      .openapi({
        description: 'webhooks is a list of webhooks and the affected resources and operations.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description:
      'MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.',
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'MutatingWebhookConfiguration',
        version: 'v1',
      },
    ],
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration')

const IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema)
      .openapi({ description: 'List of MutatingWebhookConfiguration.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description: 'MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'MutatingWebhookConfigurationList',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList')

const IoK8sApiAdmissionregistrationV1TypeCheckingSchema = z
  .object({
    expressionWarnings: z
      .array(IoK8sApiAdmissionregistrationV1ExpressionWarningSchema)
      .exactOptional()
      .openapi({
        description: 'expressionWarnings contains the type checking warnings for each expression.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1TypeChecking')

const IoK8sApiAdmissionregistrationV1ValidationSchema = z
  .object({
    expression: z
      .string()
      .default('')
      .openapi({
        description:
          'expression represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec CEL expressions have access to the contents of the API request/response, organized into CEL variables as well as some other useful variables:\n\n- \'object\' - The object from the incoming request. The value is null for DELETE requests. - \'oldObject\' - The existing object. The value is null for CREATE requests. - \'request\' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - \'params\' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - \'namespaceObject\' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - \'variables\' - Map of composited variables, from its name to its lazily evaluated value.\n  For example, a variable named \'foo\' can be accessed as \'variables.foo\'.\n- \'authorizer\' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.\n  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz\n- \'authorizer.requestResource\' - A CEL ResourceCheck constructed from the \'authorizer\' and configured with the\n  request resource.\n\nThe `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object. No other metadata properties are accessible.\n\nOnly property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - \'__\' escapes to \'__underscores__\' - \'.\' escapes to \'__dot__\' - \'-\' escapes to \'__dash__\' - \'/\' escapes to \'__slash__\' - Property names that exactly match a CEL RESERVED keyword escape to \'__{keyword}__\'. The keywords are:\n\t  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",\n\t  "import", "let", "loop", "package", "namespace", "return".\nExamples:\n  - Expression accessing a property named "namespace": {"Expression": "object.__namespace__ > 0"}\n  - Expression accessing a property named "x-prop": {"Expression": "object.x__dash__prop > 0"}\n  - Expression accessing a property named "redact__d": {"Expression": "object.redact__underscores__d > 0"}\n\nEquality on arrays with list type of \'set\' or \'map\' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:\n  - \'set\': `X + Y` performs a union where the array positions of all elements in `X` are preserved and\n    non-intersecting elements in `Y` are appended, retaining their partial order.\n  - \'map\': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values\n    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with\n    non-intersecting keys are appended, retaining their partial order.\nRequired.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'message represents the message displayed when validation fails. The message is required if the Expression contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host" If the Expression contains line breaks. Message is required. The message must not contain line breaks. If unset, the message is "failed Expression: {Expression}".',
      }),
    messageExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'messageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a validation, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the `expression` except for \'authorizer\' and \'authorizer.requestResource\'. Example: "object.x must be less than max ("+string(params.max)+")"',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reason represents a machine-readable description of why this validation failed. If this is the first validation in the list to fail, this reason, as well as the corresponding HTTP response code, are used in the HTTP response to the client. The currently supported reasons are: "Unauthorized", "Forbidden", "Invalid", "RequestEntityTooLarge". If not set, StatusReasonInvalid is used in the response to the client.',
      }),
  })
  .openapi({
    description: 'Validation specifies the CEL expression which is used to apply the validation.',
    required: ['expression'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1Validation')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpecSchema = z
  .object({
    auditAnnotations: z
      .array(IoK8sApiAdmissionregistrationV1AuditAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.',
        'x-kubernetes-list-type': 'atomic',
      }),
    failurePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.\n\nA policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.\n\nfailurePolicy does not define how validations that evaluate to false are handled.\n\nWhen failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.\n\nAllowed values are Ignore or Fail. Defaults to Fail.',
      }),
    matchConditions: z
      .array(IoK8sApiAdmissionregistrationV1MatchConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.\n\nIf a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.\n\nThe exact matching logic is (in order):\n  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.\n  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.\n  3. If any matchCondition evaluates to an error (but none are FALSE):\n     - If failurePolicy=Fail, reject the request\n     - If failurePolicy=Ignore, the policy is skipped',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    matchConstraints: IoK8sApiAdmissionregistrationV1MatchResourcesSchema.exactOptional().openapi({
      description:
        'matchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.',
    }),
    paramKind: IoK8sApiAdmissionregistrationV1ParamKindSchema.exactOptional().openapi({
      description:
        'paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.',
    }),
    validations: z
      .array(IoK8sApiAdmissionregistrationV1ValidationSchema)
      .exactOptional()
      .openapi({
        description:
          'validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.',
        'x-kubernetes-list-type': 'atomic',
      }),
    variables: z
      .array(IoK8sApiAdmissionregistrationV1VariableSchema)
      .exactOptional()
      .openapi({
        description:
          'variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.\n\nThe expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description:
      'ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec')

const IoK8sApimachineryPkgApisMetaV1ConditionSchema = z
  .object({
    lastTransitionTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.openapi({
      description:
        'lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.',
    }),
    message: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'message is a human readable message indicating details about the transition. This may be an empty string.',
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
      .default('')
      .openapi({
        description:
          "reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.",
      }),
    status: z
      .string()
      .default('')
      .openapi({ description: 'status of the condition, one of True, False, Unknown.' }),
    type: z
      .string()
      .default('')
      .openapi({ description: 'type of condition in CamelCase or in foo.example.com/CamelCase.' }),
  })
  .openapi({
    description:
      'Condition contains details for one aspect of the current state of this API Resource.',
    required: ['type', 'status', 'lastTransitionTime', 'reason'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Condition')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatusSchema = z
  .object({
    conditions: z
      .array(IoK8sApimachineryPkgApisMetaV1ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          "conditions represent the latest available observations of a policy's current state.",
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
        description: 'observedGeneration is the generation observed by the controller.',
      }),
    typeChecking: IoK8sApiAdmissionregistrationV1TypeCheckingSchema.exactOptional().openapi({
      description:
        'typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.',
    }),
  })
  .openapi({
    description:
      'ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.',
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    spec: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpecSchema.default({})
      .exactOptional()
      .openapi({
        description: 'spec defines the desired behavior of the ValidatingAdmissionPolicy.',
      }),
    status: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status represents the current status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.',
      }),
  })
  .openapi({
    description:
      'ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.',
    'x-kubernetes-group-version-kind': [
      { group: 'admissionregistration.k8s.io', kind: 'ValidatingAdmissionPolicy', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicy')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpecSchema = z
  .object({
    matchResources: IoK8sApiAdmissionregistrationV1MatchResourcesSchema.exactOptional().openapi({
      description:
        "matchResources declares what resources match this binding and will be validated by it. Note that this is intersected with the policy's matchConstraints, so only requests that are matched by the policy can be selected by this. If this is unset, all resources matched by the policy are validated by this binding When resourceRules is unset, it does not constrain resource matching. If a resource is matched by the other fields of this object, it will be validated. Note that this is differs from ValidatingAdmissionPolicy matchConstraints, where resourceRules are required.",
    }),
    paramRef: IoK8sApiAdmissionregistrationV1ParamRefSchema.exactOptional().openapi({
      description:
        'paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in ParamKind of the bound ValidatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the ValidatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.',
    }),
    policyName: z
      .string()
      .openapi({
        description:
          'policyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.',
      }),
    validationActions: z
      .array(z.string())
      .openapi({
        description:
          'validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.\n\nFailures defined by the ValidatingAdmissionPolicy\'s FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.\n\nvalidationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.\n\nThe supported actions values are:\n\n"Deny" specifies that a validation failure results in a denied request.\n\n"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.\n\n"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\\"message\\": \\"Invalid value\\", {\\"policy\\": \\"policy.example.com\\", {\\"binding\\": \\"policybinding.example.com\\", {\\"expressionIndex\\": \\"1\\", {\\"validationActions\\": [\\"Audit\\"]}]"`\n\nClients should expect to handle additional values by ignoring any values not recognized.\n\n"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.\n\nRequired.',
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({
    description:
      'ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.',
    required: ['policyName', 'validationActions'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    spec: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpecSchema.default(
      {},
    ).openapi({
      description: 'spec defines the desired behavior of the ValidatingAdmissionPolicyBinding.',
    }),
  })
  .openapi({
    description:
      "ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.\n\nFor a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.\n\nThe CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.",
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'ValidatingAdmissionPolicyBinding',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBinding')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema)
      .openapi({ description: 'List of PolicyBinding.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description:
      'ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'ValidatingAdmissionPolicyBindingList',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingList')

const IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema)
      .openapi({ description: 'List of ValidatingAdmissionPolicy.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description: 'ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'ValidatingAdmissionPolicyList',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyList')

const IoK8sApiAdmissionregistrationV1ValidatingWebhookSchema = z
  .object({
    admissionReviewVersions: z
      .array(z.string())
      .openapi({
        description:
          'admissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.',
        'x-kubernetes-list-type': 'atomic',
      }),
    clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfigSchema.default({}).openapi({
      description: 'clientConfig defines how to communicate with the hook. Required',
    }),
    failurePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'failurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.',
      }),
    matchConditions: z
      .array(IoK8sApiAdmissionregistrationV1MatchConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'matchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.\n\nThe exact matching logic is (in order):\n  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.\n  2. If ALL matchConditions evaluate to TRUE, the webhook is called.\n  3. If any matchCondition evaluates to an error (but none are FALSE):\n     - If failurePolicy=Fail, reject the request\n     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    matchPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".\n\n- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.\n\n- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.\n\nDefaults to "Equivalent"',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.',
      }),
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'namespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.\n\nFor example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "runlevel",\n      "operator": "NotIn",\n      "values": [\n        "0",\n        "1"\n      ]\n    }\n  ]\n}\n\nIf instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {\n  "matchExpressions": [\n    {\n      "key": "environment",\n      "operator": "In",\n      "values": [\n        "prod",\n        "staging"\n      ]\n    }\n  ]\n}\n\nSee https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.\n\nDefault to the empty LabelSelector, which matches everything.',
    }),
    objectSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'objectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.',
    }),
    rules: z
      .array(IoK8sApiAdmissionregistrationV1RuleWithOperationsSchema)
      .exactOptional()
      .openapi({
        description:
          'rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.',
        'x-kubernetes-list-type': 'atomic',
      }),
    sideEffects: z
      .string()
      .openapi({
        description:
          'sideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.',
      }),
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'timeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.',
      }),
  })
  .openapi({
    description:
      'ValidatingWebhook describes an admission webhook and the resources and operations it applies to.',
    required: ['name', 'clientConfig', 'sideEffects', 'admissionReviewVersions'],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingWebhook')

const IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema = z
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
          'metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.',
      }),
    webhooks: z
      .array(IoK8sApiAdmissionregistrationV1ValidatingWebhookSchema)
      .exactOptional()
      .openapi({
        description: 'webhooks is a list of webhooks and the affected resources and operations.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description:
      'ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.',
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'ValidatingWebhookConfiguration',
        version: 'v1',
      },
    ],
    required: [],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration')

const IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema)
      .openapi({ description: 'List of ValidatingWebhookConfiguration.' }),
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description: 'ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      {
        group: 'admissionregistration.k8s.io',
        kind: 'ValidatingWebhookConfigurationList',
        version: 'v1',
      },
    ],
  })
  .openapi('IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList')

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
      { group: 'admissionregistration.k8s.io', kind: 'DeleteOptions', version: 'v1' },
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
      { group: 'admissionregistration.k8s.io', kind: 'WatchEvent', version: 'v1' },
    ],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1WatchEvent')

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisAdmissionregistrationK8sIoV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/',
  tags: ['admissionregistration_v1'],
  description: 'get available resources',
  operationId: 'getAdmissionregistrationV1APIResources',
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

export const getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'list or watch objects of kind MutatingAdmissionPolicy',
  operationId: 'listAdmissionregistrationV1MutatingAdmissionPolicy',
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
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/cbor-seq': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/json;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute = createRoute({
  method: 'post',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'create a MutatingAdmissionPolicy',
  operationId: 'createAdmissionregistrationV1MutatingAdmissionPolicy',
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
      content: { '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute = createRoute({
  method: 'delete',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'delete collection of MutatingAdmissionPolicy',
  operationId: 'deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy',
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

export const getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}',
  tags: ['admissionregistration_v1'],
  description: 'read the specified MutatingAdmissionPolicy',
  operationId: 'readAdmissionregistrationV1MutatingAdmissionPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the MutatingAdmissionPolicy',
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
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute = createRoute({
  method: 'put',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}',
  tags: ['admissionregistration_v1'],
  description: 'replace the specified MutatingAdmissionPolicy',
  operationId: 'replaceAdmissionregistrationV1MutatingAdmissionPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the MutatingAdmissionPolicy',
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
      content: { '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute = createRoute(
  {
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a MutatingAdmissionPolicy',
    operationId: 'deleteAdmissionregistrationV1MutatingAdmissionPolicy',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingAdmissionPolicy',
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
  },
)

export const patchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}',
  tags: ['admissionregistration_v1'],
  description: 'partially update the specified MutatingAdmissionPolicy',
  operationId: 'patchAdmissionregistrationV1MutatingAdmissionPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the MutatingAdmissionPolicy',
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
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
  tags: ['admissionregistration_v1'],
  description: 'list or watch objects of kind MutatingAdmissionPolicyBinding',
  operationId: 'listAdmissionregistrationV1MutatingAdmissionPolicyBinding',
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
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/cbor-seq': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/json;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute = createRoute(
  {
    method: 'post',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description: 'create a MutatingAdmissionPolicyBinding',
    operationId: 'createAdmissionregistrationV1MutatingAdmissionPolicyBinding',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      202: {
        description: 'Accepted',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  },
)

export const deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description: 'delete collection of MutatingAdmissionPolicyBinding',
    operationId: 'deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding',
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

export const getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'read the specified MutatingAdmissionPolicyBinding',
    operationId: 'readAdmissionregistrationV1MutatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingAdmissionPolicyBinding',
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
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const putApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'put',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'replace the specified MutatingAdmissionPolicyBinding',
    operationId: 'replaceAdmissionregistrationV1MutatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingAdmissionPolicyBinding',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a MutatingAdmissionPolicyBinding',
    operationId: 'deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingAdmissionPolicyBinding',
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

export const patchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'partially update the specified MutatingAdmissionPolicyBinding',
    operationId: 'patchAdmissionregistrationV1MutatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingAdmissionPolicyBinding',
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
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
  tags: ['admissionregistration_v1'],
  description: 'list or watch objects of kind MutatingWebhookConfiguration',
  operationId: 'listAdmissionregistrationV1MutatingWebhookConfiguration',
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
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/cbor-seq': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/json;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute = createRoute({
  method: 'post',
  path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
  tags: ['admissionregistration_v1'],
  description: 'create a MutatingWebhookConfiguration',
  operationId: 'createAdmissionregistrationV1MutatingWebhookConfiguration',
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
        '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute = createRoute(
  {
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    tags: ['admissionregistration_v1'],
    description: 'delete collection of MutatingWebhookConfiguration',
    operationId: 'deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration',
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
  },
)

export const getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'read the specified MutatingWebhookConfiguration',
    operationId: 'readAdmissionregistrationV1MutatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingWebhookConfiguration',
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
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const putApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'put',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'replace the specified MutatingWebhookConfiguration',
    operationId: 'replaceAdmissionregistrationV1MutatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingWebhookConfiguration',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a MutatingWebhookConfiguration',
    operationId: 'deleteAdmissionregistrationV1MutatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingWebhookConfiguration',
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

export const patchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'partially update the specified MutatingWebhookConfiguration',
    operationId: 'patchAdmissionregistrationV1MutatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the MutatingWebhookConfiguration',
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
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'list or watch objects of kind ValidatingAdmissionPolicy',
  operationId: 'listAdmissionregistrationV1ValidatingAdmissionPolicy',
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
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/cbor-seq': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/json;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute = createRoute({
  method: 'post',
  path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'create a ValidatingAdmissionPolicy',
  operationId: 'createAdmissionregistrationV1ValidatingAdmissionPolicy',
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
        '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute = createRoute({
  method: 'delete',
  path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description: 'delete collection of ValidatingAdmissionPolicy',
  operationId: 'deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy',
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

export const getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}',
  tags: ['admissionregistration_v1'],
  description: 'read the specified ValidatingAdmissionPolicy',
  operationId: 'readAdmissionregistrationV1ValidatingAdmissionPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ValidatingAdmissionPolicy',
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
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute = createRoute({
  method: 'put',
  path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}',
  tags: ['admissionregistration_v1'],
  description: 'replace the specified ValidatingAdmissionPolicy',
  operationId: 'replaceAdmissionregistrationV1ValidatingAdmissionPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ValidatingAdmissionPolicy',
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
        '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a ValidatingAdmissionPolicy',
    operationId: 'deleteAdmissionregistrationV1ValidatingAdmissionPolicy',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicy',
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

export const patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}',
    tags: ['admissionregistration_v1'],
    description: 'partially update the specified ValidatingAdmissionPolicy',
    operationId: 'patchAdmissionregistrationV1ValidatingAdmissionPolicy',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicy',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status',
    tags: ['admissionregistration_v1'],
    description: 'read status of the specified ValidatingAdmissionPolicy',
    operationId: 'readAdmissionregistrationV1ValidatingAdmissionPolicyStatus',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicy',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute =
  createRoute({
    method: 'put',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status',
    tags: ['admissionregistration_v1'],
    description: 'replace status of the specified ValidatingAdmissionPolicy',
    operationId: 'replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicy',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status',
    tags: ['admissionregistration_v1'],
    description: 'partially update status of the specified ValidatingAdmissionPolicy',
    operationId: 'patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicy',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description: 'list or watch objects of kind ValidatingAdmissionPolicyBinding',
    operationId: 'listAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/cbor-seq': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/json;stream=watch': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/vnd.kubernetes.protobuf;stream=watch': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingListSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const postApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'post',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description: 'create a ValidatingAdmissionPolicyBinding',
    operationId: 'createAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      202: {
        description: 'Accepted',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description: 'delete collection of ValidatingAdmissionPolicyBinding',
    operationId: 'deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding',
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

export const getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'read the specified ValidatingAdmissionPolicyBinding',
    operationId: 'readAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicyBinding',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const putApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'put',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'replace the specified ValidatingAdmissionPolicyBinding',
    operationId: 'replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicyBinding',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a ValidatingAdmissionPolicyBinding',
    operationId: 'deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicyBinding',
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

export const patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description: 'partially update the specified ValidatingAdmissionPolicyBinding',
    operationId: 'patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingAdmissionPolicyBinding',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
  tags: ['admissionregistration_v1'],
  description: 'list or watch objects of kind ValidatingWebhookConfiguration',
  operationId: 'listAdmissionregistrationV1ValidatingWebhookConfiguration',
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
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/cbor-seq': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/json': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/json;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
        'application/yaml': {
          schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute = createRoute(
  {
    method: 'post',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    tags: ['admissionregistration_v1'],
    description: 'create a ValidatingWebhookConfiguration',
    operationId: 'createAdmissionregistrationV1ValidatingWebhookConfiguration',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      202: {
        description: 'Accepted',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  },
)

export const deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    tags: ['admissionregistration_v1'],
    description: 'delete collection of ValidatingWebhookConfiguration',
    operationId: 'deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration',
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

export const getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'read the specified ValidatingWebhookConfiguration',
    operationId: 'readAdmissionregistrationV1ValidatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingWebhookConfiguration',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const putApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'put',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'replace the specified ValidatingWebhookConfiguration',
    operationId: 'replaceAdmissionregistrationV1ValidatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingWebhookConfiguration',
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
          '*/*': { schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'delete',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'delete a ValidatingWebhookConfiguration',
    operationId: 'deleteAdmissionregistrationV1ValidatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingWebhookConfiguration',
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

export const patchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'patch',
    path: '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description: 'partially update the specified ValidatingWebhookConfiguration',
    operationId: 'patchAdmissionregistrationV1ValidatingWebhookConfiguration',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the ValidatingWebhookConfiguration',
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
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/json': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
          'application/yaml': {
            schema: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationSchema,
          },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies',
  tags: ['admissionregistration_v1'],
  description:
    "watch individual changes to a list of MutatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchAdmissionregistrationV1MutatingAdmissionPolicyList',
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

export const getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind MutatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1MutatingAdmissionPolicy',
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
              description: 'name of the MutatingAdmissionPolicy',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description:
      "watch individual changes to a list of MutatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.",
    operationId: 'watchAdmissionregistrationV1MutatingAdmissionPolicyBindingList',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind MutatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1MutatingAdmissionPolicyBinding',
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
              description: 'name of the MutatingAdmissionPolicyBinding',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations',
    tags: ['admissionregistration_v1'],
    description:
      "watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.",
    operationId: 'watchAdmissionregistrationV1MutatingWebhookConfigurationList',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1MutatingWebhookConfiguration',
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
              description: 'name of the MutatingWebhookConfiguration',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesRoute = createRoute(
  {
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies',
    tags: ['admissionregistration_v1'],
    description:
      "watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.",
    operationId: 'watchAdmissionregistrationV1ValidatingAdmissionPolicyList',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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
  },
)

export const getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1ValidatingAdmissionPolicy',
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
              description: 'name of the ValidatingAdmissionPolicy',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings',
    tags: ['admissionregistration_v1'],
    description:
      "watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.",
    operationId: 'watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding',
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
              description: 'name of the ValidatingAdmissionPolicyBinding',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations',
    tags: ['admissionregistration_v1'],
    description:
      "watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.",
    operationId: 'watchAdmissionregistrationV1ValidatingWebhookConfigurationList',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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

export const getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}',
    tags: ['admissionregistration_v1'],
    description:
      "watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchAdmissionregistrationV1ValidatingWebhookConfiguration',
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
              description: 'name of the ValidatingWebhookConfiguration',
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
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
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
