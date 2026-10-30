import { createRoute, z } from '@hono/zod-openapi'

type IoK8sApiAuthorizationV1UnconditionalDecisionType = {
  evaluationError?: string
  reason?: string
}

const IoK8sApiAuthorizationV1UnconditionalDecisionSchema: z.ZodType<IoK8sApiAuthorizationV1UnconditionalDecisionType> =
  z
    .object({
      evaluationError: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.',
        }),
      reason: z
        .string()
        .exactOptional()
        .openapi({
          description: 'reason is optional. It indicates why a request was allowed or denied.',
        }),
    })
    .openapi({
      description:
        'UnconditionalDecision represents the data associated with an unconditional decision.',
      required: [],
    })
    .openapi('IoK8sApiAuthorizationV1UnconditionalDecision')

const IoK8sApiAuthorizationV1ConditionSchema = z
  .object({
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'condition returns a string encoding of the condition to be evaluated. It is a pure, deterministic function from ConditionsData to a boolean (or error). Might or might not be human-readable. Optional, if the ID alone is enough for the authorizer to know how to evaluate the condition.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'description is an optional human-friendly description that can be shown as an error message or for debugging. Optional.',
      }),
    id: z
      .string()
      .default('')
      .openapi({
        description:
          'id uniquely identifies this condition within the scope of the authorizer that authored it and ConditionsMap it is part of. Validated as a Kubernetes label key. Any domain of form *.k8s.io or *.kubernetes.io is reserved for Kubernetes use.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'type describes the type of the condition, if there are multiple possibilities. Should be formatted as a Kubernetes label key. Any domain of form *.k8s.io or *.kubernetes.io is reserved for Kubernetes use. authorizer.kubernetes.io/cel is a conditions type for CEL, handled by kube-apiserver. Optional. Can be omitted if the authorizer already knows how to evaluate the condition.',
      }),
  })
  .openapi({
    description:
      'Condition represents a single authorization condition to be evaluated against data available later in the request chain, e.g. objects available in admission.',
    required: ['id'],
  })
  .openapi('IoK8sApiAuthorizationV1Condition')

type IoK8sApiAuthorizationV1ConditionsMapType = {
  allowConditions?: z.infer<typeof IoK8sApiAuthorizationV1ConditionSchema>[]
  denyConditions?: z.infer<typeof IoK8sApiAuthorizationV1ConditionSchema>[]
  noOpinionConditions?: z.infer<typeof IoK8sApiAuthorizationV1ConditionSchema>[]
}

const IoK8sApiAuthorizationV1ConditionsMapSchema: z.ZodType<IoK8sApiAuthorizationV1ConditionsMapType> =
  z
    .object({
      allowConditions: z
        .array(IoK8sApiAuthorizationV1ConditionSchema)
        .exactOptional()
        .openapi({
          description:
            'allowConditions contains the conditions with Allow effect. If any such condition evaluates to true, the ConditionsMap as a whole must evaluate to Allow.',
          'x-kubernetes-list-map-keys': ['id'],
          'x-kubernetes-list-type': 'map',
        }),
      denyConditions: z
        .array(IoK8sApiAuthorizationV1ConditionSchema)
        .exactOptional()
        .openapi({
          description:
            'denyConditions contains the conditions with Deny effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to Deny.',
          'x-kubernetes-list-map-keys': ['id'],
          'x-kubernetes-list-type': 'map',
        }),
      noOpinionConditions: z
        .array(IoK8sApiAuthorizationV1ConditionSchema)
        .exactOptional()
        .openapi({
          description:
            'noOpinionConditions contains the conditions with NoOpinion effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to NoOpinion.',
          'x-kubernetes-list-map-keys': ['id'],
          'x-kubernetes-list-type': 'map',
        }),
    })
    .openapi({
      description:
        'ConditionsMap represents a map of conditions, keyed by ID across all conditions, across all effects. The ConditionsMap must have at least one Allow condition or at least one Deny condition. It cannot contain more than 128 conditions in total. The conditions are evaluated against data available later, to determine whether the authorizer that authored the conditions allows or denies the request. If all conditions in the map evaluate to false, the final decision must be NoOpinion.',
      required: [],
    })
    .openapi('IoK8sApiAuthorizationV1ConditionsMap')

const IoK8sApiAuthorizationV1NamedConditionsAwareDecisionSchema: z.ZodType<IoK8sApiAuthorizationV1NamedConditionsAwareDecisionType> =
  z
    .lazy(() =>
      z
        .object({
          authorizerName: z
            .string()
            .default('')
            .openapi({
              description:
                'authorizerName details the name of the authorizer that authored the condition, such that the right Decision can be paired with the right authorizer when evaluating the conditions, even across API server replicas. The name must be stable over time. This name must be unique within a given union authorizer, not necessarily globally.',
            }),
          decision: IoK8sApiAuthorizationV1ConditionsAwareDecisionSchema.default({}).openapi({
            description: 'decision carries the inner decision returned from the authorizer.',
          }),
        })
        .openapi({
          description:
            'NamedConditionsAwareDecision is a named ConditionsAwareDecision, returned by a unioned authorizer.',
          required: ['authorizerName', 'decision'],
        }),
    )
    .openapi('IoK8sApiAuthorizationV1NamedConditionsAwareDecision')

type IoK8sApiAuthorizationV1ConditionsAwareDecisionType = {
  allow?: z.infer<typeof IoK8sApiAuthorizationV1UnconditionalDecisionSchema>
  conditionsMap?: z.infer<typeof IoK8sApiAuthorizationV1ConditionsMapSchema>
  deny?: z.infer<typeof IoK8sApiAuthorizationV1UnconditionalDecisionSchema>
  noOpinion?: z.infer<typeof IoK8sApiAuthorizationV1UnconditionalDecisionSchema>
  type: string
  union?: z.infer<typeof IoK8sApiAuthorizationV1NamedConditionsAwareDecisionSchema>[]
}

const IoK8sApiAuthorizationV1ConditionsAwareDecisionSchema: z.ZodType<IoK8sApiAuthorizationV1ConditionsAwareDecisionType> =
  z
    .lazy(() =>
      z
        .object({
          allow: IoK8sApiAuthorizationV1UnconditionalDecisionSchema.exactOptional().openapi({
            description:
              'allow represents an unconditional Allow decision. Must be non-null when type == "Allow", otherwise this field must be unset.',
          }),
          conditionsMap: IoK8sApiAuthorizationV1ConditionsMapSchema.exactOptional().openapi({
            description:
              'conditionsMap represents a conditional decision, modelled as a map of conditions. Must be non-null when type == "ConditionsMap", otherwise this field must be unset.',
          }),
          deny: IoK8sApiAuthorizationV1UnconditionalDecisionSchema.exactOptional().openapi({
            description:
              'deny represents an unconditional Deny decision. Must be non-null when type == "Deny", otherwise this field must be unset.',
          }),
          noOpinion: IoK8sApiAuthorizationV1UnconditionalDecisionSchema.exactOptional().openapi({
            description:
              'noOpinion represents an unconditional NoOpinion decision. Must be non-null when type == "NoOpinion", otherwise this field must be unset.',
          }),
          type: z
            .string()
            .default('')
            .openapi({
              description:
                'type describes the type of the decision, and acts as an enum discriminator.',
            }),
          union: z
            .array(IoK8sApiAuthorizationV1NamedConditionsAwareDecisionSchema)
            .exactOptional()
            .openapi({
              description:
                'union forms an ordered tree of decisions, where the union decision is represented by an internal node, and all other decision types are leaf nodes. During evaluation, the leaf decisions are evaluated in depth-first order, until an Allow or Deny decision is found. The order of the decisions should match the order of the authorizers in the union authorizer for interpretability, but the authorizerName is the map key. At least one of the leaves must be of type ConditionsMap, as otherwise the union could be trivially reduced to just a single Allow/Deny/NoOpinion.\n\nMust have at least one element when type == "Union", otherwise this field must be unset.',
              'x-kubernetes-list-map-keys': ['authorizerName'],
              'x-kubernetes-list-type': 'map',
            }),
        })
        .openapi({
          description:
            "ConditionsAwareDecision represents one authorizer's decision. It is an enum type, with variants described in ConditionsAwareDecisionType, plus a reason and error.",
          required: ['type'],
        }),
    )
    .openapi('IoK8sApiAuthorizationV1ConditionsAwareDecision')

type IoK8sApiAuthorizationV1NamedConditionsAwareDecisionType = {
  authorizerName: string
  decision: z.infer<typeof IoK8sApiAuthorizationV1ConditionsAwareDecisionSchema>
}

const IoK8sApiAuthorizationV1AuthorizationOptionsSchema = z
  .object({
    handledDecisionTypes: z
      .array(z.string())
      .openapi({
        description:
          'handledDecisionTypes specifies what decision types the client can handle in the context it is in. Currently valid values are: - [Allow, Deny, NoOpinion] (for conditions-unaware clients) or - [Allow, Deny, NoOpinion, ConditionsMap, Union, ...] (for conditions-aware clients) If the authorizer would like to return conditions, but the client does not opt in to handle those here,\n  the authorizer must fail closed to a safe unconditional decision\n  (Deny if any Deny conditions were present, otherwise NoOpinion).\nOrder does not matter in this slice; set semantics should be used. The server does not reject unrecognized decision types, but focuses on whether the client supports a mode that the server does. All clients must support "classic", conditions-unaware authorization.',
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({
    description:
      "AuthorizationOptions contains options for specifying the client's authorization abilities.",
    required: ['handledDecisionTypes'],
  })
  .openapi('IoK8sApiAuthorizationV1AuthorizationOptions')

const IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirementSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({ description: 'key is the field selector key that the requirement applies to.' }),
    operator: z
      .string()
      .default('')
      .openapi({
        description:
          "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. The list of operators may grow in the future.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'FieldSelectorRequirement is a selector that contains values, a key, and an operator that relates the key and values.',
    required: ['key', 'operator'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement')

const IoK8sApiAuthorizationV1FieldSelectorAttributesSchema = z
  .object({
    rawSelector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.",
      }),
    requirements: z
      .array(IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description:
          'requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'FieldSelectorAttributes indicates a field limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1FieldSelectorAttributes')

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

const IoK8sApiAuthorizationV1LabelSelectorAttributesSchema = z
  .object({
    rawSelector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.",
      }),
    requirements: z
      .array(IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description:
          'requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'LabelSelectorAttributes indicates a label limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1LabelSelectorAttributes')

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

const IoK8sApiAuthorizationV1NonResourceAttributesSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'path is the URL path of the request' }),
    verb: z.string().exactOptional().openapi({ description: 'verb is the standard HTTP verb' }),
  })
  .openapi({
    description:
      'NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1NonResourceAttributes')

const IoK8sApiAuthorizationV1ResourceAttributesSchema = z
  .object({
    fieldSelector: IoK8sApiAuthorizationV1FieldSelectorAttributesSchema.exactOptional().openapi({
      description:
        'fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.',
    }),
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'group is the API Group of the Resource.  "*" means all.' }),
    labelSelector: IoK8sApiAuthorizationV1LabelSelectorAttributesSchema.exactOptional().openapi({
      description:
        'labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'resource is one of the existing resource types.  "*" means all.' }),
    subresource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'subresource is one of the existing resource types.  "" means none.',
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'version is the API Version of the Resource.  "*" means all.' }),
  })
  .openapi({
    description:
      'ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1ResourceAttributes')

const IoK8sApiAuthorizationV1SubjectAccessReviewSpecSchema = z
  .object({
    authorizationOptions: IoK8sApiAuthorizationV1AuthorizationOptionsSchema.exactOptional().openapi(
      {
        description:
          "authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.",
      },
    ),
    extra: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.',
      }),
    groups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "groups is the groups you're testing for.",
        'x-kubernetes-list-type': 'atomic',
      }),
    nonResourceAttributes:
      IoK8sApiAuthorizationV1NonResourceAttributesSchema.exactOptional().openapi({
        description:
          'nonResourceAttributes describes information for a non-resource access request',
      }),
    resourceAttributes: IoK8sApiAuthorizationV1ResourceAttributesSchema.exactOptional().openapi({
      description: 'resourceAttributes describes information for a resource access request',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'uid information about the requesting user.' }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'user is the user you\'re testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups',
      }),
  })
  .openapi({
    description:
      'SubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1SubjectAccessReviewSpec')

const IoK8sApiAuthorizationV1SubjectAccessReviewStatusSchema = z
  .object({
    allowed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'allowed is true if the action would be allowed, false otherwise. allowed=true is mutually exclusive with denied=true and conditionalDecision != nil.',
      }),
    conditionalDecision:
      IoK8sApiAuthorizationV1ConditionsAwareDecisionSchema.exactOptional().openapi({
        description:
          'conditionalDecision represents a conditional decision returned by the authorizer. When conditionalDecision is set, allowed, denied, reason and evaluationError must have their zero values. The top-level decision type should be ConditionsAwareDecisionTypeConditionsMap or ConditionsAwareDecisionTypeUnion, as Allow/Deny/NoOpinion decisions can be represented with SubjectAccessReviewStatus.Allowed and SubjectAccessReviewStatus.Denied alone. May only be set if spec.authorizationOptions.handledDecisionTypes includes `ConditionsMap` and `Union`. Requires the ConditionalAuthorization feature to be enabled.',
      }),
    denied: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'denied is optional. True if the action would be denied, otherwise false If allowed is false, denied is false, and conditionalDecision is unset, then the authorizer has no opinion on whether to authorize the action. denied=true is mutually exclusive with allowed=true and conditionalDecision != nil.',
      }),
    evaluationError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'reason is optional.  It indicates why a request was allowed or denied.',
      }),
  })
  .openapi({ description: 'SubjectAccessReviewStatus', required: [] })
  .openapi('IoK8sApiAuthorizationV1SubjectAccessReviewStatus')

const IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema = z
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpecSchema.default({}).openapi({
      description:
        'spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.',
    }),
    status: IoK8sApiAuthorizationV1SubjectAccessReviewStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is filled in by the server and indicates whether the request is allowed or not',
      }),
  })
  .openapi({
    description:
      'LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'authorization.k8s.io', kind: 'LocalSubjectAccessReview', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiAuthorizationV1LocalSubjectAccessReview')

const IoK8sApiAuthorizationV1NonResourceRuleSchema = z
  .object({
    nonResourceURLs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'nonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.',
        'x-kubernetes-list-type': 'atomic',
      }),
    verbs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'verbs is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'NonResourceRule holds information that describes a rule for the non-resource',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1NonResourceRule')

const IoK8sApiAuthorizationV1ResourceRuleSchema = z
  .object({
    apiGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'apiGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.',
        'x-kubernetes-list-type': 'atomic',
      }),
    resourceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'resourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.',
        'x-kubernetes-list-type': 'atomic',
      }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.\n "*/foo" represents the subresource \'foo\' for all resources in the specified apiGroups.',
        'x-kubernetes-list-type': 'atomic',
      }),
    verbs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'verbs is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      "ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.",
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1ResourceRule')

const IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecSchema = z
  .object({
    authorizationOptions: IoK8sApiAuthorizationV1AuthorizationOptionsSchema.exactOptional().openapi(
      {
        description:
          "authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.",
      },
    ),
    nonResourceAttributes:
      IoK8sApiAuthorizationV1NonResourceAttributesSchema.exactOptional().openapi({
        description:
          'nonResourceAttributes describes information for a non-resource access request',
      }),
    resourceAttributes: IoK8sApiAuthorizationV1ResourceAttributesSchema.exactOptional().openapi({
      description: 'resourceAttributes describes information for a resource access request',
    }),
  })
  .openapi({
    description:
      'SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set',
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec')

const IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema = z
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecSchema.default({}).openapi({
      description:
        'spec holds information about the request being evaluated.  user and groups must be empty',
    }),
    status: IoK8sApiAuthorizationV1SubjectAccessReviewStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is filled in by the server and indicates whether the request is allowed or not',
      }),
  })
  .openapi({
    description:
      'SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'authorization.k8s.io', kind: 'SelfSubjectAccessReview', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiAuthorizationV1SelfSubjectAccessReview')

const IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecSchema = z
  .object({
    namespace: z.string().openapi({ description: 'namespace to evaluate rules for. Required.' }),
  })
  .openapi({
    description: 'SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.',
    required: ['namespace'],
  })
  .openapi('IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec')

const IoK8sApiAuthorizationV1SubjectRulesReviewStatusSchema = z
  .object({
    evaluationError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "evaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.",
      }),
    incomplete: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.",
      }),
    nonResourceRules: z
      .array(IoK8sApiAuthorizationV1NonResourceRuleSchema)
      .exactOptional()
      .openapi({
        description:
          "nonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.",
        'x-kubernetes-list-type': 'atomic',
      }),
    resourceRules: z
      .array(IoK8sApiAuthorizationV1ResourceRuleSchema)
      .exactOptional()
      .openapi({
        description:
          "resourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.",
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      "SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.",
    required: [],
  })
  .openapi('IoK8sApiAuthorizationV1SubjectRulesReviewStatus')

const IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema = z
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecSchema.default({}).openapi({
      description: 'spec holds information about the request being evaluated.',
    }),
    status: IoK8sApiAuthorizationV1SubjectRulesReviewStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is filled in by the server and indicates the set of actions a user can perform.',
      }),
  })
  .openapi({
    description:
      "SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.",
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'authorization.k8s.io', kind: 'SelfSubjectRulesReview', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiAuthorizationV1SelfSubjectRulesReview')

const IoK8sApiAuthorizationV1SubjectAccessReviewSchema = z
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
          'metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpecSchema.default({}).openapi({
      description: 'spec holds information about the request being evaluated',
    }),
    status: IoK8sApiAuthorizationV1SubjectAccessReviewStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is filled in by the server and indicates whether the request is allowed or not',
      }),
  })
  .openapi({
    description: 'SubjectAccessReview checks whether or not a user or group can perform an action.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'authorization.k8s.io', kind: 'SubjectAccessReview', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiAuthorizationV1SubjectAccessReview')

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

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisAuthorizationK8sIoV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/authorization.k8s.io/v1/',
  tags: ['authorization_v1'],
  description: 'get available resources',
  operationId: 'getAuthorizationV1APIResources',
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

export const postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsRoute =
  createRoute({
    method: 'post',
    path: '/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews',
    tags: ['authorization_v1'],
    description: 'create a LocalSubjectAccessReview',
    operationId: 'createAuthorizationV1NamespacedLocalSubjectAccessReview',
    request: {
      query: z.object({
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
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              description: 'object name and auth scope, such as for teams and projects',
              in: 'path',
              name: 'namespace',
              required: true,
              schema: { type: 'string', uniqueItems: true },
            },
          }),
      }),
      body: {
        content: { '*/*': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/json': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema,
          },
          'application/yaml': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
        },
      },
      201: {
        description: 'Created',
        content: {
          'application/cbor': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/json': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema,
          },
          'application/yaml': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
        },
      },
      202: {
        description: 'Accepted',
        content: {
          'application/cbor': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/json': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema,
          },
          'application/yaml': { schema: IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const postApisAuthorizationK8sIoV1SelfsubjectaccessreviewsRoute = createRoute({
  method: 'post',
  path: '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews',
  tags: ['authorization_v1'],
  description: 'create a SelfSubjectAccessReview',
  operationId: 'createAuthorizationV1SelfSubjectAccessReview',
  request: {
    query: z.object({
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
    body: {
      content: { '*/*': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAuthorizationK8sIoV1SelfsubjectrulesreviewsRoute = createRoute({
  method: 'post',
  path: '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews',
  tags: ['authorization_v1'],
  description: 'create a SelfSubjectRulesReview',
  operationId: 'createAuthorizationV1SelfSubjectRulesReview',
  request: {
    query: z.object({
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
    body: {
      content: { '*/*': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisAuthorizationK8sIoV1SubjectaccessreviewsRoute = createRoute({
  method: 'post',
  path: '/apis/authorization.k8s.io/v1/subjectaccessreviews',
  tags: ['authorization_v1'],
  description: 'create a SubjectAccessReview',
  operationId: 'createAuthorizationV1SubjectAccessReview',
  request: {
    query: z.object({
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
    body: {
      content: { '*/*': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/json': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema,
        },
        'application/yaml': { schema: IoK8sApiAuthorizationV1SubjectAccessReviewSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})
