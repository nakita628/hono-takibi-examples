import { createRoute, z } from '@hono/zod-openapi'

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

const IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementSchema = z
  .object({
    containerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'containerName restricts the check for exit codes to the container with the specified name. When null, the rule applies to all containers. When specified, it should match one the container or initContainer names in the pod template.',
      }),
    operator: z
      .string()
      .default('')
      .openapi({
        description:
          "operator represents the relationship between the container exit code(s) and the specified values. Containers completed with success (exit code 0) are excluded from the requirement check. Possible values are:\n\n- In: the requirement is satisfied if at least one container exit code\n  (might be multiple if there are multiple containers not restricted\n  by the 'containerName' field) is in the set of specified values.\n- NotIn: the requirement is satisfied if at least one container exit code\n  (might be multiple if there are multiple containers not restricted\n  by the 'containerName' field) is not in the set of specified values.\nAdditional values are considered to be added in the future. Clients should react to an unknown operator by assuming the requirement is not satisfied.",
      }),
    values: z
      .array(z.int32())
      .openapi({
        description:
          "values specifies the set of values. Each returned container exit code (might be multiple in case of multiple containers) is checked against this set of values with respect to the operator. The list of values must be ordered and must not contain duplicates. Value '0' cannot be used for the In operator. At least one element is required. At most 255 elements are allowed.",
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({
    description:
      'PodFailurePolicyOnExitCodesRequirement describes the requirement for handling a failed pod based on its container exit codes. In particular, it lookups the .state.terminated.exitCode for each app container and init container status, represented by the .status.containerStatuses and .status.initContainerStatuses fields in the Pod status, respectively. Containers completed with success (exit code 0) are excluded from the requirement check.',
    required: ['operator', 'values'],
  })
  .openapi('IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement')

const IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternSchema = z
  .object({
    status: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'status specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.',
      }),
    type: z
      .string()
      .default('')
      .openapi({
        description:
          'type specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.',
      }),
  })
  .openapi({
    description:
      'PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.',
    required: ['type'],
  })
  .openapi('IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern')

const IoK8sApiBatchV1PodFailurePolicyRuleSchema = z
  .object({
    action: z
      .string()
      .default('')
      .openapi({
        description:
          "action specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:\n\n- FailJob: indicates that the pod's job is marked as Failed and all\n  running pods are terminated.\n- FailIndex: indicates that the pod's index is marked as Failed and will\n  not be restarted.\n- Ignore: indicates that the counter towards the .backoffLimit is not\n  incremented and a replacement pod is created.\n- Count: indicates that the pod is handled in the default way - the\n  counter towards the .backoffLimit is incremented.\nAdditional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.",
      }),
    onExitCodes:
      IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementSchema.exactOptional().openapi({
        description: 'onExitCodes represents the requirement on the container exit codes.',
      }),
    onPodConditions: z
      .array(IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternSchema)
      .exactOptional()
      .openapi({
        description:
          'onPodConditions represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.',
    required: ['action'],
  })
  .openapi('IoK8sApiBatchV1PodFailurePolicyRule')

const IoK8sApiBatchV1PodFailurePolicySchema = z
  .object({
    rules: z
      .array(IoK8sApiBatchV1PodFailurePolicyRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'rules is a list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'PodFailurePolicy describes how failed pods influence the backoffLimit.',
    required: [],
  })
  .openapi('IoK8sApiBatchV1PodFailurePolicy')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupAllDisruptionModeSchema = z
  .object({})
  .openapi({
    description:
      'WorkloadPodGroupAllDisruptionMode indicates that all pods in the group must be disrupted together.',
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupAllDisruptionMode')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupSingleDisruptionModeSchema = z
  .object({})
  .openapi({
    description:
      'WorkloadPodGroupSingleDisruptionMode indicates that individual pods can be disrupted independently.',
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupSingleDisruptionMode')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupDisruptionModeSchema = z
  .object({
    all: IoK8sApiSchedulingV1alpha3WorkloadPodGroupAllDisruptionModeSchema.exactOptional().openapi({
      description: 'all specifies that all pods in the group must be disrupted together.',
    }),
    single:
      IoK8sApiSchedulingV1alpha3WorkloadPodGroupSingleDisruptionModeSchema.exactOptional().openapi({
        description: 'single specifies that pods can be disrupted independently from each other.',
      }),
  })
  .openapi({
    description:
      'WorkloadPodGroupDisruptionMode defines how individual pods within a group can be disrupted. Exactly one mode must be set.',
    'x-kubernetes-unions': [{ 'fields-to-discriminateBy': { all: 'All', single: 'Single' } }],
    required: [],
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupDisruptionMode')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupResourceClaimSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name uniquely identifies this resource claim inside the group. This field is required. It must be a DNS_LABEL.',
      }),
    resourceClaimName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'resourceClaimName is the name of a ResourceClaim object in the same namespace. This field is optional. If it is not specified, no resource claim is used. If set, it must be a DNS subdomain.',
      }),
    resourceClaimTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'resourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace. This field is optional. If it is not specified, no resource claim template is used. If set, it must be a DNS subdomain.',
      }),
  })
  .openapi({
    description:
      'WorkloadPodGroupResourceClaim references a dynamic resource claim that is shared across pods in the group.',
    required: ['name'],
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupResourceClaim')

const IoK8sApiSchedulingV1alpha3TopologyConstraintSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({
        description:
          'key specifies the key of the node label representing the topology domain. All pods within the PodGroup must be colocated within the same domain instance. Different PodGroups can land on different domain instances even if they derive from the same PodGroupTemplate. Nodes where this label is missing or has an empty value do not belong to any domain instance, so pods within the PodGroup cannot be scheduled onto them. Examples: "topology.kubernetes.io/rack"',
      }),
  })
  .openapi({
    description: 'TopologyConstraint defines a topology constraint for a PodGroup.',
    required: ['key'],
  })
  .openapi('IoK8sApiSchedulingV1alpha3TopologyConstraint')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingConstraintsSchema = z
  .object({
    topology: z
      .array(IoK8sApiSchedulingV1alpha3TopologyConstraintSchema)
      .exactOptional()
      .openapi({
        description:
          'topology specifies desired topological placements for all pods within the pod group. If unset, no topology placement is requested.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'WorkloadPodGroupSchedulingConstraints defines leaf-level scheduling constraints, such as topology.',
    required: [],
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingConstraints')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupBasicSchedulingPolicySchema = z
  .object({})
  .openapi({
    description:
      'WorkloadPodGroupBasicSchedulingPolicy indicates standard Kubernetes scheduling behavior.',
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupBasicSchedulingPolicy')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupGangSchedulingPolicySchema = z
  .object({
    minCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'minCount is the minimum number of pods that must be scheduled at the same time for the scheduler to admit the entire group. This field is optional. If it is not specified, the controller should inject a context-specific sane default (e.g., parallelism for a Job). If set, it must be a positive integer.',
      }),
  })
  .openapi({
    description:
      'WorkloadPodGroupGangSchedulingPolicy defines the parameters for gang (all-or-nothing) scheduling.',
    required: [],
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupGangSchedulingPolicy')

const IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingPolicySchema = z
  .object({
    basic:
      IoK8sApiSchedulingV1alpha3WorkloadPodGroupBasicSchedulingPolicySchema.exactOptional().openapi(
        {
          description:
            'basic specifies that standard, pod-by-pod Kubernetes scheduling behavior should be used.',
        },
      ),
    gang: IoK8sApiSchedulingV1alpha3WorkloadPodGroupGangSchedulingPolicySchema.exactOptional().openapi(
      { description: 'gang specifies all-or-nothing scheduling semantics.' },
    ),
  })
  .openapi({
    description:
      'WorkloadPodGroupSchedulingPolicy defines the scheduling policy for a group of pods managed by a workload controller. Exactly one policy must be set.',
    'x-kubernetes-unions': [{ 'fields-to-discriminateBy': { basic: 'Basic', gang: 'Gang' } }],
    required: [],
  })
  .openapi('IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingPolicy')

const IoK8sApiBatchV1JobSchedulingConfigurationSchema = z
  .object({
    disruptionMode:
      IoK8sApiSchedulingV1alpha3WorkloadPodGroupDisruptionModeSchema.exactOptional().openapi({
        description:
          "disruptionMode defines the mode in which the Job's pods can be disrupted. One of Single, All. This field is immutable after creation: it may not be added or removed, and the selected mode may not be changed.",
      }),
    resourceClaims: z
      .array(IoK8sApiSchedulingV1alpha3WorkloadPodGroupResourceClaimSchema)
      .exactOptional()
      .openapi({
        description:
          "resourceClaims defines which ResourceClaims may be shared among Pods in the Job. Pods consume the devices allocated to a PodGroup's claim by defining a claim in its own Spec.ResourceClaims that matches the PodGroup's claim exactly. The claim must have the same name and refer to the same ResourceClaim or ResourceClaimTemplate. At most 4 claims may be set, matching the limit on the resulting PodGroup. This list is immutable after creation: entries may neither be added, removed, nor modified.",
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    schedulingConstraints:
      IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingConstraintsSchema.exactOptional().openapi(
        {
          description:
            "schedulingConstraints defines scheduling constraints (e.g. topology) for the Job's pods. This field is immutable after creation.",
        },
      ),
    schedulingPolicy:
      IoK8sApiSchedulingV1alpha3WorkloadPodGroupSchedulingPolicySchema.exactOptional().openapi({
        description:
          'schedulingPolicy defines the scheduling policy for this Job. Exactly one of Basic or Gang must be set. This field is immutable after creation: the policy may not be added or removed. The policy variant (basic/gang) is frozen by hand-written validation; only schedulingPolicy.gang.minCount may be changed.',
      }),
  })
  .openapi({
    description:
      'JobSchedulingConfiguration composes the reusable workload-aware scheduling building blocks.',
    required: [],
  })
  .openapi('IoK8sApiBatchV1JobSchedulingConfiguration')

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

const IoK8sApiBatchV1SuccessPolicyRuleSchema = z
  .object({
    succeededCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'succeededCount specifies the minimal required size of the actual set of the succeeded indexes for the Job. When succeededCount is used along with succeededIndexes, the check is constrained only to the set of indexes specified by succeededIndexes. For example, given that succeededIndexes is "1-4", succeededCount is "3", and completed indexes are "1", "3", and "5", the Job isn\'t declared as succeeded because only "1" and "3" indexes are considered in that rules. When this field is null, this doesn\'t default to any value and is never evaluated at any time. When specified it needs to be a positive integer.',
      }),
    succeededIndexes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'succeededIndexes specifies the set of indexes which need to be contained in the actual set of the succeeded indexes for the Job. The list of indexes must be within 0 to ".spec.completions-1" and must not contain duplicates. At least one element is required. The indexes are represented as intervals separated by commas. The intervals can be a decimal integer or a pair of decimal integers separated by a hyphen. The number are listed in represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". When this field is null, this field doesn\'t default to any value and is never evaluated at any time.',
      }),
  })
  .openapi({
    description:
      'SuccessPolicyRule describes rule for declaring a Job as succeeded. Each rule must have at least one of the "succeededIndexes" or "succeededCount" specified.',
    required: [],
  })
  .openapi('IoK8sApiBatchV1SuccessPolicyRule')

const IoK8sApiBatchV1SuccessPolicySchema = z
  .object({
    rules: z
      .array(IoK8sApiBatchV1SuccessPolicyRuleSchema)
      .openapi({
        description:
          'rules represents the list of alternative rules for the declaring the Jobs as successful before `.status.succeeded >= .spec.completions`. Once any of the rules are met, the "SuccessCriteriaMet" condition is added, and the lingering pods are removed. The terminal state for such a Job has the "Complete" condition. Additionally, these rules are evaluated in order; Once the Job meets one of the rules, other rules are ignored. At most 20 elements are allowed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.',
    required: ['rules'],
  })
  .openapi('IoK8sApiBatchV1SuccessPolicy')

const IoK8sApiCoreV1NodeSelectorRequirementSchema = z
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
          "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
    required: ['key', 'operator'],
  })
  .openapi('IoK8sApiCoreV1NodeSelectorRequirement')

const IoK8sApiCoreV1NodeSelectorTermSchema = z
  .object({
    matchExpressions: z
      .array(IoK8sApiCoreV1NodeSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description: "matchExpressions is a list of node selector requirements by node's labels.",
        'x-kubernetes-list-type': 'atomic',
      }),
    matchFields: z
      .array(IoK8sApiCoreV1NodeSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description: "matchFields is a list of node selector requirements by node's fields.",
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1NodeSelectorTerm')

const IoK8sApiCoreV1PreferredSchedulingTermSchema = z
  .object({
    preference: IoK8sApiCoreV1NodeSelectorTermSchema.default({}).openapi({
      description: 'preference is a node selector term, associated with the corresponding weight.',
    }),
    weight: z
      .int32()
      .default(0)
      .openapi({
        description:
          'weight is the weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.',
      }),
  })
  .openapi({
    description:
      "An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).",
    required: ['weight', 'preference'],
  })
  .openapi('IoK8sApiCoreV1PreferredSchedulingTerm')

const IoK8sApiCoreV1NodeSelectorSchema = z
  .object({
    nodeSelectorTerms: z
      .array(IoK8sApiCoreV1NodeSelectorTermSchema)
      .openapi({
        description:
          'nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.',
    required: ['nodeSelectorTerms'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1NodeSelector')

const IoK8sApiCoreV1NodeAffinitySchema = z
  .object({
    preferredDuringSchedulingIgnoredDuringExecution: z
      .array(IoK8sApiCoreV1PreferredSchedulingTermSchema)
      .exactOptional()
      .openapi({
        description:
          'preferredDuringSchedulingIgnoredDuringExecution specifies that the scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.',
        'x-kubernetes-list-type': 'atomic',
      }),
    requiredDuringSchedulingIgnoredDuringExecution:
      IoK8sApiCoreV1NodeSelectorSchema.exactOptional().openapi({
        description:
          'requiredDuringSchedulingIgnoredDuringExecution specifies that if the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.',
      }),
  })
  .openapi({
    description: 'Node affinity is a group of node affinity scheduling rules.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1NodeAffinity')

const IoK8sApiCoreV1PodAffinityTermSchema = z
  .object({
    labelSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        "labelSelector is a label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.",
    }),
    matchLabelKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "matchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set.",
        'x-kubernetes-list-type': 'atomic',
      }),
    mismatchLabelKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "mismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set.",
        'x-kubernetes-list-type': 'atomic',
      }),
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'namespaceSelector is a label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod\'s namespace". An empty selector ({}) matches all namespaces.',
    }),
    namespaces: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod\'s namespace".',
        'x-kubernetes-list-type': 'atomic',
      }),
    topologyKey: z
      .string()
      .default('')
      .openapi({
        description:
          'topologyKey is the key of the node label that the system uses to denote such a topology domain. This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.',
      }),
  })
  .openapi({
    description:
      'Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running',
    required: ['topologyKey'],
  })
  .openapi('IoK8sApiCoreV1PodAffinityTerm')

const IoK8sApiCoreV1WeightedPodAffinityTermSchema = z
  .object({
    podAffinityTerm: IoK8sApiCoreV1PodAffinityTermSchema.default({}).openapi({
      description:
        'podAffinityTerm is a pod affinity term, associated with the corresponding weight. required.',
    }),
    weight: z
      .int32()
      .default(0)
      .openapi({
        description:
          'weight associated with matching the corresponding podAffinityTerm, in the range 1-100.',
      }),
  })
  .openapi({
    description:
      'The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)',
    required: ['weight', 'podAffinityTerm'],
  })
  .openapi('IoK8sApiCoreV1WeightedPodAffinityTerm')

const IoK8sApiCoreV1PodAffinitySchema = z
  .object({
    preferredDuringSchedulingIgnoredDuringExecution: z
      .array(IoK8sApiCoreV1WeightedPodAffinityTermSchema)
      .exactOptional()
      .openapi({
        description:
          'preferredDuringSchedulingIgnoredDuringExecution specifies that the scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
        'x-kubernetes-list-type': 'atomic',
      }),
    requiredDuringSchedulingIgnoredDuringExecution: z
      .array(IoK8sApiCoreV1PodAffinityTermSchema)
      .exactOptional()
      .openapi({
        description:
          'requiredDuringSchedulingIgnoredDuringExecution specifies that if the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'Pod affinity is a group of inter pod affinity scheduling rules.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodAffinity')

const IoK8sApiCoreV1PodAntiAffinitySchema = z
  .object({
    preferredDuringSchedulingIgnoredDuringExecution: z
      .array(IoK8sApiCoreV1WeightedPodAffinityTermSchema)
      .exactOptional()
      .openapi({
        description:
          'preferredDuringSchedulingIgnoredDuringExecution specifies that the scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and subtracting "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
        'x-kubernetes-list-type': 'atomic',
      }),
    requiredDuringSchedulingIgnoredDuringExecution: z
      .array(IoK8sApiCoreV1PodAffinityTermSchema)
      .exactOptional()
      .openapi({
        description:
          'requiredDuringSchedulingIgnoredDuringExecution specifies that if the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'Pod anti affinity is a group of inter pod anti affinity scheduling rules.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodAntiAffinity')

const IoK8sApiCoreV1AffinitySchema = z
  .object({
    nodeAffinity: IoK8sApiCoreV1NodeAffinitySchema.exactOptional().openapi({
      description: 'nodeAffinity describes node affinity scheduling rules for the pod.',
    }),
    podAffinity: IoK8sApiCoreV1PodAffinitySchema.exactOptional().openapi({
      description:
        'podAffinity describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).',
    }),
    podAntiAffinity: IoK8sApiCoreV1PodAntiAffinitySchema.exactOptional().openapi({
      description:
        'podAntiAffinity describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).',
    }),
  })
  .openapi({ description: 'Affinity is a group of affinity scheduling rules.', required: [] })
  .openapi('IoK8sApiCoreV1Affinity')

const IoK8sApiCoreV1ConfigMapKeySelectorSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({
        description:
          "key is the key to select from the ConfigMap's Data field. Keys in the BinaryData field are not currently propagated to container env vars.",
      }),
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'optional specifies whether the ConfigMap or its key must be defined',
      }),
  })
  .openapi({
    description: 'Selects a key from a ConfigMap.',
    required: ['key'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1ConfigMapKeySelector')

const IoK8sApiCoreV1ObjectFieldSelectorSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'apiVersion is the version of the schema the FieldPath is written in terms of, defaults to "v1".',
      }),
    fieldPath: z
      .string()
      .default('')
      .openapi({
        description: 'fieldPath is the path of the field to select in the specified API version.',
      }),
  })
  .openapi({
    description: 'ObjectFieldSelector selects an APIVersioned field of an object.',
    required: ['fieldPath'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1ObjectFieldSelector')

const IoK8sApiCoreV1FileKeySelectorSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({
        description:
          "key is the key within the env file. An invalid key will prevent the pod from starting. The keys defined within a source may consist of any printable ASCII characters except '='. During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.",
      }),
    optional: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "optional specifies whether the file or its key must be defined. If the file or key does not exist, then the env var is not published. If optional is set to true and the specified key does not exist, the environment variable will not be set in the Pod's containers.\n\nIf optional is set to false and the specified key does not exist, an error will be returned during Pod creation.",
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          "path is the path within the volume from which to select the file. Must be relative and may not contain the '..' path or start with '..'.",
      }),
    volumeName: z
      .string()
      .default('')
      .openapi({
        description: 'volumeName is the name of the volume mount containing the env file.',
      }),
  })
  .openapi({
    description: 'FileKeySelector selects a key of the env file.',
    required: ['volumeName', 'path', 'key'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1FileKeySelector')

const IoK8sApimachineryPkgApiResourceQuantitySchema = z
  .xor([z.string(), z.number()])
  .openapi({
    description:
      'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.\n\nThe serialization format is:\n\n- `<quantity>`: `<signedNumber><suffix>`\n\n- `<digit>`: `0 | 1 | ... | 9`\n\n- `<digits>`: `<digit> | <digit><digits>`\n\n- `<number>`: `<digits> | <digits>.<digits> | <digits>. | .<digits>`\n\n- `<sign>`: `"+" | "-"`\n\n- `<signedNumber>`: `<number> | <sign><number>`\n\n- `<signedDigits>`: `<digits> | <sign><digits>`\n\n- `<suffix>`: `<binarySI> | <decimalExponent> | <decimalSI>`\n\n- `<binarySI>`: `Ki | Mi | Gi | Ti | Pi | Ei`\n\n- `<decimalSI>`: `n | u | m | "" | k | M | G | T | P | E`\n\n- `<decimalExponent>`: `"e" <signedDigits> | "E" <signedDigits>`\n\nNote that `<suffix>` may be empty, from the `""` case in `<decimalSI>`. For `<binarySI>`, 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization. See http://physics.nist.gov/cuu/Units/binary.html.\n\nA decimal quantity is not capped at 2^63-1 in magnitude, and no quantity is limited to three decimal places: "18446744073709551616" keeps its value, and "1.2345" keeps its precision (String reports it as "1234500u"). Parsing does cap a binarySI quantity, silently, at 2^63-1: "8Ei" parses as 2^63-1. Parsing also preserves a value only down to nano, rounding a finer non-zero value away from zero, so "0.9n" becomes "1n". The int64 accessors round and may overflow on top of that: see Value, MilliValue and ScaledValue.\n\nWhen a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.\n\nBefore serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:\n\n- No precision is lost\n\n- No fractional digits will be emitted\n\n- The exponent (or suffix) is as large as possible.\n\nThe sign will be omitted unless the number is negative.\n\nExamples:\n\n- 1.5 will be serialized as "1500m"\n\n- 1.5Gi will be serialized as "1536Mi"\n\nNote that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.\n\nNon-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.)\n\nThis format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
  })
  .openapi('IoK8sApimachineryPkgApiResourceQuantity')

const IoK8sApiCoreV1ResourceFieldSelectorSchema = z
  .object({
    containerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'containerName is the name of the container: required for volumes, optional for env vars',
      }),
    divisor: IoK8sApimachineryPkgApiResourceQuantitySchema.exactOptional().openapi({
      description:
        'divisor optionally indicates how the resource from the container should be scaled. If unset or 0, the resource is not scaled (divisor is treated as 1).',
    }),
    resource: z.string().default('').openapi({ description: 'resource is the resource to select' }),
  })
  .openapi({
    description:
      'ResourceFieldSelector represents container resources (cpu, memory) and their output format',
    required: ['resource'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1ResourceFieldSelector')

const IoK8sApiCoreV1SecretKeySelectorSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({
        description: 'key is the key of the secret to select from.  Must be a valid secret key.',
      }),
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'optional specifies whether the Secret or its key must be defined' }),
  })
  .openapi({
    description: 'SecretKeySelector selects a key of a Secret.',
    required: ['key'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1SecretKeySelector')

const IoK8sApiCoreV1EnvVarSourceSchema = z
  .object({
    configMapKeyRef: IoK8sApiCoreV1ConfigMapKeySelectorSchema.exactOptional().openapi({
      description: 'configMapKeyRef selects a key of a ConfigMap.',
    }),
    fieldRef: IoK8sApiCoreV1ObjectFieldSelectorSchema.exactOptional().openapi({
      description:
        "fieldRef selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.",
    }),
    fileKeyRef: IoK8sApiCoreV1FileKeySelectorSchema.exactOptional().openapi({
      description:
        'fileKeyRef selects a key of the env file. Requires the EnvFiles feature gate to be enabled.',
    }),
    resourceFieldRef: IoK8sApiCoreV1ResourceFieldSelectorSchema.exactOptional().openapi({
      description:
        'resourceFieldRef selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.',
    }),
    secretKeyRef: IoK8sApiCoreV1SecretKeySelectorSchema.exactOptional().openapi({
      description: "secretKeyRef selects a key of a secret in the pod's namespace",
    }),
  })
  .openapi({
    description: 'EnvVarSource represents a source for the value of an EnvVar.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1EnvVarSource')

const IoK8sApiCoreV1EnvVarSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          "name is the name of the environment variable. May consist of any printable ASCII characters except '='.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'value is the value of the environment variable. Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".',
      }),
    valueFrom: IoK8sApiCoreV1EnvVarSourceSchema.exactOptional().openapi({
      description:
        "valueFrom is the source for the environment variable's value. Cannot be used if value is not empty.",
    }),
  })
  .openapi({
    description: 'EnvVar represents an environment variable present in a Container.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1EnvVar')

const IoK8sApiCoreV1ConfigMapEnvSourceSchema = z
  .object({
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'optional specifies whether the ConfigMap must be defined' }),
  })
  .openapi({
    description:
      "ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.\n\nThe contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. Keys in the BinaryData field are not currently propagated to container env vars.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1ConfigMapEnvSource')

const IoK8sApiCoreV1SecretEnvSourceSchema = z
  .object({
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'optional specifies whether the Secret must be defined' }),
  })
  .openapi({
    description:
      "SecretEnvSource selects a Secret to populate the environment variables with.\n\nThe contents of the target Secret's Data field will represent the key-value pairs as environment variables.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1SecretEnvSource')

const IoK8sApiCoreV1EnvFromSourceSchema = z
  .object({
    configMapRef: IoK8sApiCoreV1ConfigMapEnvSourceSchema.exactOptional().openapi({
      description: 'configMapRef is the ConfigMap to select from',
    }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "prefix is the text to prepend to the name of each environment variable. May consist of any printable ASCII characters except '='.",
      }),
    secretRef: IoK8sApiCoreV1SecretEnvSourceSchema.exactOptional().openapi({
      description: 'secretRef is the Secret to select from',
    }),
  })
  .openapi({
    description: 'EnvFromSource represents the source of a set of ConfigMaps or Secrets',
    required: [],
  })
  .openapi('IoK8sApiCoreV1EnvFromSource')

const IoK8sApiCoreV1ExecActionSchema = z
  .object({
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({ description: 'ExecAction describes a "run in container" action.', required: [] })
  .openapi('IoK8sApiCoreV1ExecAction')

const IoK8sApiCoreV1HTTPHeaderSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.',
      }),
    value: z.string().default('').openapi({ description: 'value is the header field value' }),
  })
  .openapi({
    description: 'HTTPHeader describes a custom header to be used in HTTP probes',
    required: ['name', 'value'],
  })
  .openapi('IoK8sApiCoreV1HTTPHeader')

const IoK8sApimachineryPkgUtilIntstrIntOrStringSchema = z
  .xor([z.int(), z.string()])
  .openapi({
    description:
      'IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.',
  })
  .openapi('IoK8sApimachineryPkgUtilIntstrIntOrString')

const IoK8sApiCoreV1HTTPGetActionSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'host is the host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.',
      }),
    httpHeaders: z
      .array(IoK8sApiCoreV1HTTPHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'httpHeaders are the custom headers to set in the request. HTTP allows repeated headers.',
        'x-kubernetes-list-type': 'atomic',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'path is the path to access on the HTTP server.' }),
    port: IoK8sApimachineryPkgUtilIntstrIntOrStringSchema.openapi({
      description:
        'port is the name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.',
    }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'protocol selects the wire protocol for the probe connection. Nil defaults to HTTP/1.1.',
      }),
    scheme: z
      .string()
      .exactOptional()
      .openapi({
        description: 'scheme is the scheme to use for connecting to the host. Defaults to HTTP.',
      }),
  })
  .openapi({
    description: 'HTTPGetAction describes an action based on HTTP Get requests.',
    required: ['port'],
  })
  .openapi('IoK8sApiCoreV1HTTPGetAction')

const IoK8sApiCoreV1SleepActionSchema = z
  .object({
    seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'seconds is the number of seconds to sleep.',
      }),
  })
  .openapi({ description: 'SleepAction describes a "sleep" action.', required: ['seconds'] })
  .openapi('IoK8sApiCoreV1SleepAction')

const IoK8sApiCoreV1TCPSocketActionSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({
        description: 'host is the optional host name to connect to, defaults to the pod IP.',
      }),
    port: IoK8sApimachineryPkgUtilIntstrIntOrStringSchema.openapi({
      description:
        'port is the number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.',
    }),
  })
  .openapi({
    description: 'TCPSocketAction describes an action based on opening a socket',
    required: ['port'],
  })
  .openapi('IoK8sApiCoreV1TCPSocketAction')

const IoK8sApiCoreV1LifecycleHandlerSchema = z
  .object({
    exec: IoK8sApiCoreV1ExecActionSchema.exactOptional().openapi({
      description: 'exec specifies a command to execute in the container.',
    }),
    httpGet: IoK8sApiCoreV1HTTPGetActionSchema.exactOptional().openapi({
      description: 'httpGet specifies an HTTP GET request to perform.',
    }),
    sleep: IoK8sApiCoreV1SleepActionSchema.exactOptional().openapi({
      description: 'sleep represents a duration that the container should sleep.',
    }),
    tcpSocket: IoK8sApiCoreV1TCPSocketActionSchema.exactOptional().openapi({
      description:
        'tcpSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified. Deprecated.',
    }),
  })
  .openapi({
    description:
      'LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1LifecycleHandler')

const IoK8sApiCoreV1LifecycleSchema = z
  .object({
    postStart: IoK8sApiCoreV1LifecycleHandlerSchema.exactOptional().openapi({
      description:
        'postStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks',
    }),
    preStop: IoK8sApiCoreV1LifecycleHandlerSchema.exactOptional().openapi({
      description:
        "preStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks",
    }),
    stopSignal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'stopSignal defines which signal will be sent to a container when it is being stopped. If not specified, the default is defined by the container runtime in use. StopSignal can only be set for Pods with a non-empty .spec.os.name',
      }),
  })
  .openapi({
    description:
      'Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1Lifecycle')

const IoK8sApiCoreV1GRPCActionSchema = z
  .object({
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'mode specifies the connection mode for the gRPC health probe. Set to "TLS" to use TLS without certificate verification. Set to "Plaintext" to use a plaintext (insecure) connection explicitly. If not specified, the probe uses a plaintext (insecure) connection.',
      }),
    port: z
      .int32()
      .default(0)
      .openapi({
        description:
          'port is the number of the gRPC service. Number must be in the range 1 to 65535.',
      }),
    service: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).\n\nIf this is not specified, the default behavior is defined by gRPC.',
      }),
  })
  .openapi({
    description: 'GRPCAction specifies an action involving a GRPC service.',
    required: ['port'],
  })
  .openapi('IoK8sApiCoreV1GRPCAction')

const IoK8sApiCoreV1ProbeSchema = z
  .object({
    exec: IoK8sApiCoreV1ExecActionSchema.exactOptional().openapi({
      description: 'exec specifies a command to execute in the container.',
    }),
    failureThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'failureThreshold is the minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.',
      }),
    grpc: IoK8sApiCoreV1GRPCActionSchema.exactOptional().openapi({
      description: 'grpc specifies a GRPC HealthCheckRequest.',
    }),
    httpGet: IoK8sApiCoreV1HTTPGetActionSchema.exactOptional().openapi({
      description: 'httpGet specifies an HTTP GET request to perform.',
    }),
    initialDelaySeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'initialDelaySeconds is the number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      }),
    periodSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'periodSeconds is how often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.',
      }),
    successThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'successThreshold is the minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.',
      }),
    tcpSocket: IoK8sApiCoreV1TCPSocketActionSchema.exactOptional().openapi({
      description: 'tcpSocket specifies a connection to a TCP port.',
    }),
    terminationGracePeriodSeconds: z
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
          "terminationGracePeriodSeconds is the optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.",
      }),
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'timeoutSeconds is the number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      }),
  })
  .openapi({
    description:
      'Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1Probe')

const IoK8sApiCoreV1ContainerPortSchema = z
  .object({
    containerPort: z
      .int32()
      .default(0)
      .openapi({
        description:
          "containerPort is the number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.",
      }),
    hostIP: z
      .string()
      .exactOptional()
      .openapi({ description: 'hostIP is the host IP to bind the external port to.' }),
    hostPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'hostPort is the number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name is the name of the port. If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.',
      }),
    protocol: z
      .string()
      .default('TCP')
      .exactOptional()
      .openapi({
        description:
          'protocol is the protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".',
      }),
  })
  .openapi({
    description: 'ContainerPort represents a network port in a single container.',
    required: ['containerPort'],
  })
  .openapi('IoK8sApiCoreV1ContainerPort')

const IoK8sApiCoreV1ContainerResizePolicySchema = z
  .object({
    resourceName: z
      .string()
      .default('')
      .openapi({
        description:
          'resourceName is the name of the resource to which this resource resize policy applies. Supported values: cpu, memory.',
      }),
    restartPolicy: z
      .string()
      .default('')
      .openapi({
        description:
          'restartPolicy is the restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.',
      }),
  })
  .openapi({
    description: 'ContainerResizePolicy represents resource resize policy for the container.',
    required: ['resourceName', 'restartPolicy'],
  })
  .openapi('IoK8sApiCoreV1ContainerResizePolicy')

const IoK8sApiCoreV1ResourceClaimSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.',
      }),
    request: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.',
      }),
  })
  .openapi({
    description: 'ResourceClaim references one entry in PodSpec.ResourceClaims.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1ResourceClaim')

const IoK8sApiCoreV1ResourceRequirementsSchema = z
  .object({
    claims: z
      .array(IoK8sApiCoreV1ResourceClaimSchema)
      .exactOptional()
      .openapi({
        description:
          'claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.\n\nThis field is immutable. It can only be set for containers.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
      }),
    limits: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          'limits describes the maximum amount of compute resources allowed. For kubelet cgroup enforcement: - cpu and memory: a limit of 0 is treated the same as an unspecified limit. If\n  neither the container nor the pod specifies a limit, the resource is not limited.\n- hugepages: an unspecified limit is treated the same as a limit of 0. More details: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
      }),
    requests: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          'requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
      }),
  })
  .openapi({
    description: 'ResourceRequirements describes the compute resource requirements.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1ResourceRequirements')

const IoK8sApiCoreV1ContainerRestartRuleOnExitCodesSchema = z
  .object({
    operator: z
      .string()
      .openapi({
        description:
          'operator represents the relationship between the container exit code(s) and the specified values. Possible values are: - In: the requirement is satisfied if the container exit code is in the\n  set of specified values.\n- NotIn: the requirement is satisfied if the container exit code is\n  not in the set of specified values.',
      }),
    values: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'values specifies the set of values to check for container exit codes. At most 255 elements are allowed.',
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({
    description:
      'ContainerRestartRuleOnExitCodes describes the condition for handling an exited container based on its exit codes.',
    required: ['operator'],
  })
  .openapi('IoK8sApiCoreV1ContainerRestartRuleOnExitCodes')

const IoK8sApiCoreV1ContainerRestartRuleSchema = z
  .object({
    action: z
      .string()
      .openapi({
        description:
          'action specifies the action taken on a container exit if the requirements are satisfied. The only possible value is "Restart" to restart the container.',
      }),
    exitCodes: IoK8sApiCoreV1ContainerRestartRuleOnExitCodesSchema.exactOptional().openapi({
      description: 'exitCodes represents the exit codes to check on container exits.',
    }),
  })
  .openapi({
    description: 'ContainerRestartRule describes how a container exit is handled.',
    required: ['action'],
  })
  .openapi('IoK8sApiCoreV1ContainerRestartRule')

const IoK8sApiCoreV1AppArmorProfileSchema = z
  .object({
    localhostProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".',
      }),
    type: z
      .string()
      .default('')
      .openapi({
        description:
          "type indicates which kind of AppArmor profile will be applied. Valid options are:\n  Localhost - a profile pre-loaded on the node.\n  RuntimeDefault - the container runtime's default profile.\n  Unconfined - no AppArmor enforcement.",
      }),
  })
  .openapi({
    description: "AppArmorProfile defines a pod or container's AppArmor settings.",
    required: ['type'],
    'x-kubernetes-unions': [
      {
        discriminator: 'type',
        'fields-to-discriminateBy': { localhostProfile: 'LocalhostProfile' },
      },
    ],
  })
  .openapi('IoK8sApiCoreV1AppArmorProfile')

const IoK8sApiCoreV1CapabilitiesSchema = z
  .object({
    add: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'add lists the capabilities to add to the container.',
        'x-kubernetes-list-type': 'atomic',
      }),
    drop: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'drop lists the capabilities to remove from the container.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'Adds and removes POSIX capabilities from running containers.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1Capabilities')

const IoK8sApiCoreV1SELinuxOptionsSchema = z
  .object({
    level: z
      .string()
      .exactOptional()
      .openapi({ description: 'level is SELinux level label that applies to the container.' }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'role is a SELinux role label that applies to the container.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'type is a SELinux type label that applies to the container.' }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'user is a SELinux user label that applies to the container.' }),
  })
  .openapi({
    description: 'SELinuxOptions are the labels to be applied to the container',
    required: [],
  })
  .openapi('IoK8sApiCoreV1SELinuxOptions')

const IoK8sApiCoreV1SeccompProfileSchema = z
  .object({
    localhostProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type.',
      }),
    type: z
      .string()
      .default('')
      .openapi({
        description:
          'type indicates which kind of seccomp profile will be applied. Valid options are:\n\nLocalhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.',
      }),
  })
  .openapi({
    description:
      "SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.",
    required: ['type'],
    'x-kubernetes-unions': [
      {
        discriminator: 'type',
        'fields-to-discriminateBy': { localhostProfile: 'LocalhostProfile' },
      },
    ],
  })
  .openapi('IoK8sApiCoreV1SeccompProfile')

const IoK8sApiCoreV1WindowsSecurityContextOptionsSchema = z
  .object({
    gmsaCredentialSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'gmsaCredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.',
      }),
    gmsaCredentialSpecName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'gmsaCredentialSpecName is the name of the GMSA credential spec to use.',
      }),
    hostProcess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "hostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.",
      }),
    runAsUserName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'runAsUserName is the UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
      }),
  })
  .openapi({
    description: 'WindowsSecurityContextOptions contain Windows-specific options and credentials.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1WindowsSecurityContextOptions')

const IoK8sApiCoreV1SecurityContextSchema = z
  .object({
    allowPrivilegeEscalation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'allowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.',
      }),
    appArmorProfile: IoK8sApiCoreV1AppArmorProfileSchema.exactOptional().openapi({
      description:
        "appArmorProfile is the AppArmor options to use by this container. If set, this profile overrides the pod's appArmorProfile. Note that this field cannot be set when spec.os.name is windows.",
    }),
    capabilities: IoK8sApiCoreV1CapabilitiesSchema.exactOptional().openapi({
      description:
        'capabilities is the capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.',
    }),
    privileged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'privileged indicates whether to run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.',
      }),
    procMount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. Note that this field cannot be set when spec.os.name is windows.',
      }),
    readOnlyRootFilesystem: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnlyRootFilesystem indicates whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.',
      }),
    runAsGroup: z
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
          'runAsGroup is the GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.',
      }),
    runAsNonRoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'runAsNonRoot indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
      }),
    runAsUser: z
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
          'runAsUser is the UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.',
      }),
    seLinuxOptions: IoK8sApiCoreV1SELinuxOptionsSchema.exactOptional().openapi({
      description:
        'seLinuxOptions is the SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.',
    }),
    seccompProfile: IoK8sApiCoreV1SeccompProfileSchema.exactOptional().openapi({
      description:
        'seccompProfile is the seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.',
    }),
    windowsOptions: IoK8sApiCoreV1WindowsSecurityContextOptionsSchema.exactOptional().openapi({
      description:
        'windowsOptions is the Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.',
    }),
  })
  .openapi({
    description:
      'SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1SecurityContext')

const IoK8sApiCoreV1VolumeDeviceSchema = z
  .object({
    devicePath: z
      .string()
      .default('')
      .openapi({
        description:
          'devicePath is the path inside of the container that the device will be mapped to.',
      }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name must match the name of a persistentVolumeClaim in the pod' }),
  })
  .openapi({
    description: 'volumeDevice describes a mapping of a raw block device within a container.',
    required: ['name', 'devicePath'],
  })
  .openapi('IoK8sApiCoreV1VolumeDevice')

const IoK8sApiCoreV1VolumeMountSchema = z
  .object({
    bindMountOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'bindMountOptions is the list of additional bind mount options to apply when mounting this volume into the container. Allowed values are noexec, nodev, and nosuid. These are Linux mount options and have no effect on Windows nodes. This field is not supported with image volumes. This is an alpha field and requires enabling the VolumeBindMountOptions feature gate.',
        'x-kubernetes-list-type': 'set',
      }),
    mountPath: z
      .string()
      .default('')
      .openapi({
        description:
          'mountPath is the path within the container at which the volume should be mounted.',
      }),
    mountPropagation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).',
      }),
    name: z.string().default('').openapi({ description: 'name must match the Name of a Volume.' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.',
      }),
    recursiveReadOnly: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'recursiveReadOnly specifies whether read-only mounts should be handled recursively.\n\nIf ReadOnly is false, this field has no meaning and must be unspecified.\n\nIf ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.\n\nIf this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).\n\nIf this field is not specified, it is treated as an equivalent of Disabled.',
      }),
    subPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'subPath is the path within the volume from which the container\'s volume should be mounted. Defaults to "" (volume\'s root).',
      }),
    subPathExpr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "subPathExpr is the expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive.",
      }),
  })
  .openapi({
    description: 'VolumeMount describes a mounting of a Volume within a container.',
    required: ['name', 'mountPath'],
  })
  .openapi('IoK8sApiCoreV1VolumeMount')

const IoK8sApiCoreV1ContainerSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'args are the arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
        'x-kubernetes-list-type': 'atomic',
      }),
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'command is the entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
        'x-kubernetes-list-type': 'atomic',
      }),
    env: z
      .array(IoK8sApiCoreV1EnvVarSchema)
      .exactOptional()
      .openapi({
        description:
          'env is the list of environment variables to set in the container. Cannot be updated.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    envFrom: z
      .array(IoK8sApiCoreV1EnvFromSourceSchema)
      .exactOptional()
      .openapi({
        description:
          "envFrom is the list of sources to populate environment variables in the container. The keys defined within a source may consist of any printable ASCII characters except '='. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
        'x-kubernetes-list-type': 'atomic',
      }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'image is the container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
      }),
    imagePullPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'imagePullPolicy is the image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images',
      }),
    lifecycle: IoK8sApiCoreV1LifecycleSchema.exactOptional().openapi({
      description:
        'lifecycle are the actions that the management system should take in response to container lifecycle events. Cannot be updated.',
    }),
    livenessProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description:
        'livenessProbe is the periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
    }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.',
      }),
    ports: z
      .array(IoK8sApiCoreV1ContainerPortSchema)
      .exactOptional()
      .openapi({
        description:
          'ports is the list of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.',
        'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'containerPort',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    readinessProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description:
        'readinessProbe is the periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
    }),
    resizePolicy: z
      .array(IoK8sApiCoreV1ContainerResizePolicySchema)
      .exactOptional()
      .openapi({
        description:
          'resizePolicy is the resize policy for the container. This field cannot be set on ephemeral containers.',
        'x-kubernetes-list-type': 'atomic',
      }),
    resources: IoK8sApiCoreV1ResourceRequirementsSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'resources is the compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
      }),
    restartPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'restartPolicy defines the restart behavior of individual containers in a pod. This overrides the pod-level restart policy. When this field is not specified, the restart behavior is defined by the Pod\'s restart policy and the container type. Additionally, setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.',
      }),
    restartPolicyRules: z
      .array(IoK8sApiCoreV1ContainerRestartRuleSchema)
      .exactOptional()
      .openapi({
        description:
          "restartPolicyRules represents a list of rules to be checked to determine if the container should be restarted on exit. The rules are evaluated in order. Once a rule matches a container exit condition, the remaining rules are ignored. If no rule matches the container exit condition, the Container-level restart policy determines the whether the container is restarted or not. Constraints on the rules: - At most 20 rules are allowed. - Rules can have the same action. - Identical rules are not forbidden in validations. When rules are specified, container MUST set RestartPolicy explicitly even it if matches the Pod's RestartPolicy.",
        'x-kubernetes-list-type': 'atomic',
      }),
    securityContext: IoK8sApiCoreV1SecurityContextSchema.exactOptional().openapi({
      description:
        'securityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/',
    }),
    startupProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description:
        "startupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
    }),
    stdin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'stdin indicates whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
      }),
    stdinOnce: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'stdinOnce indicates whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
      }),
    terminationMessagePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "terminationMessagePath is the optional path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
      }),
    terminationMessagePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'terminationMessagePolicy indicates how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.',
      }),
    tty: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "tty indicates whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
      }),
    volumeDevices: z
      .array(IoK8sApiCoreV1VolumeDeviceSchema)
      .exactOptional()
      .openapi({
        description: 'volumeDevices is the list of block devices to be used by the container.',
        'x-kubernetes-list-map-keys': ['devicePath'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'devicePath',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    volumeMounts: z
      .array(IoK8sApiCoreV1VolumeMountSchema)
      .exactOptional()
      .openapi({
        description:
          "volumeMounts are the pod volumes to mount into the container's filesystem. Cannot be updated.",
        'x-kubernetes-list-map-keys': ['mountPath'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'mountPath',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    workingDir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "workingDir is the Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
      }),
  })
  .openapi({
    description: 'A single application container that you want to run within a pod.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1Container')

const IoK8sApiCoreV1PodDNSConfigOptionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "name is this DNS resolver option's name. Required." }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: "value is this DNS resolver option's value." }),
  })
  .openapi({
    description: 'PodDNSConfigOption defines DNS resolver options of a pod.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodDNSConfigOption')

const IoK8sApiCoreV1PodDNSConfigSchema = z
  .object({
    nameservers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'nameservers is a list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.',
        'x-kubernetes-list-type': 'atomic',
      }),
    options: z
      .array(IoK8sApiCoreV1PodDNSConfigOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'options is a list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.',
        'x-kubernetes-list-type': 'atomic',
      }),
    searches: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'searches is a list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodDNSConfig')

const IoK8sApiCoreV1EphemeralContainerSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'args are the arguments to the entrypoint. The image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
        'x-kubernetes-list-type': 'atomic',
      }),
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'command is the entrypoint array. Not executed within a shell. The image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
        'x-kubernetes-list-type': 'atomic',
      }),
    env: z
      .array(IoK8sApiCoreV1EnvVarSchema)
      .exactOptional()
      .openapi({
        description:
          'env is the list of environment variables to set in the container. Cannot be updated.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    envFrom: z
      .array(IoK8sApiCoreV1EnvFromSourceSchema)
      .exactOptional()
      .openapi({
        description:
          "envFrom is the list of sources to populate environment variables in the container. The keys defined within a source may consist of any printable ASCII characters except '='. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
        'x-kubernetes-list-type': 'atomic',
      }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'image is the container image name. More info: https://kubernetes.io/docs/concepts/containers/images',
      }),
    imagePullPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'imagePullPolicy is the image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images',
      }),
    lifecycle: IoK8sApiCoreV1LifecycleSchema.exactOptional().openapi({
      description: 'lifecycle is not allowed for ephemeral containers.',
    }),
    livenessProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description: 'livenessProbe is not allowed for ephemeral containers.',
    }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.',
      }),
    ports: z
      .array(IoK8sApiCoreV1ContainerPortSchema)
      .exactOptional()
      .openapi({
        description: 'ports are not allowed for ephemeral containers.',
        'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'containerPort',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    readinessProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description: 'readinessProbe is not allowed for ephemeral containers.',
    }),
    resizePolicy: z
      .array(IoK8sApiCoreV1ContainerResizePolicySchema)
      .exactOptional()
      .openapi({
        description: 'resizePolicy is the resources resize policy for the container.',
        'x-kubernetes-list-type': 'atomic',
      }),
    resources: IoK8sApiCoreV1ResourceRequirementsSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.',
      }),
    restartPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'restartPolicy is the restart policy for the container to manage the restart behavior of each container within a pod. You cannot set this field on ephemeral containers.',
      }),
    restartPolicyRules: z
      .array(IoK8sApiCoreV1ContainerRestartRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'restartPolicyRules represents a list of rules to be checked to determine if the container should be restarted on exit. You cannot set this field on ephemeral containers.',
        'x-kubernetes-list-type': 'atomic',
      }),
    securityContext: IoK8sApiCoreV1SecurityContextSchema.exactOptional().openapi({
      description:
        'securityContext is optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.',
    }),
    startupProbe: IoK8sApiCoreV1ProbeSchema.exactOptional().openapi({
      description: 'startupProbe is not allowed for ephemeral containers.',
    }),
    stdin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'stdin indicates whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
      }),
    stdinOnce: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'stdinOnce indicates whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
      }),
    targetContainerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'targetContainerName if set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.\n\nThe container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.',
      }),
    terminationMessagePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "terminationMessagePath is the optional path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
      }),
    terminationMessagePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'terminationMessagePolicy indicates how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.',
      }),
    tty: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "tty indicates whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
      }),
    volumeDevices: z
      .array(IoK8sApiCoreV1VolumeDeviceSchema)
      .exactOptional()
      .openapi({
        description: 'volumeDevices is the list of block devices to be used by the container.',
        'x-kubernetes-list-map-keys': ['devicePath'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'devicePath',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    volumeMounts: z
      .array(IoK8sApiCoreV1VolumeMountSchema)
      .exactOptional()
      .openapi({
        description:
          "volumeMounts are the pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.",
        'x-kubernetes-list-map-keys': ['mountPath'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'mountPath',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    workingDir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "workingDir is the container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
      }),
  })
  .openapi({
    description:
      'An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.\n\nTo add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1EphemeralContainer')

const IoK8sApiCoreV1EvictionResponderSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name allows you to identify the responder responding to the Eviction.\n\nIt must be a valid domain-prefixed key (such as "acme.io/foo"). Domain names *.k8s.io and *.kubernetes.io are reserved. This field must be unique for each responder. This field is required.',
      }),
    priority: z
      .int32()
      .openapi({
        description:
          'priority for this responder. Higher priorities are selected first by the evictionrequest-controller. If there are responders with the same priority, the responder whose domain name comes first in the alphabetical higher domain order, will be picked. This means that the top domain labels are compared alphabetically first, followed by the lower domain labels. The key is compared last.\n\nThe responder that is the managing controller of the pod should set the value of this field to 10000 to allow both for preemption or fallback registration by other responders.\n\nThe minimum value is 0 and the maximum value is 100000. The interval 0-999 is reserved for responders with *.k8s.io suffix. This field is required.',
      }),
  })
  .openapi({
    description:
      'EvictionResponder allows you to specify the responder reacting to an Eviction. Responders should observe and communicate through the Eviction Resource API to help with the graceful eviction of a target (e.g. termination of a pod).',
    required: ['name', 'priority'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1EvictionResponder')

const IoK8sApiCoreV1HostAliasSchema = z
  .object({
    hostnames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'hostnames for the above IP address.',
        'x-kubernetes-list-type': 'atomic',
      }),
    ip: z.string().default('').openapi({ description: 'ip address of the host file entry.' }),
  })
  .openapi({
    description:
      "HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.",
    required: ['ip'],
  })
  .openapi('IoK8sApiCoreV1HostAlias')

const IoK8sApiCoreV1LocalObjectReferenceSchema = z
  .object({
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
  })
  .openapi({
    description:
      'LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1LocalObjectReference')

const IoK8sApiCoreV1PodOSSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null',
      }),
  })
  .openapi({ description: 'PodOS defines the OS parameters of a pod.', required: ['name'] })
  .openapi('IoK8sApiCoreV1PodOS')

const IoK8sApiCoreV1PodReadinessGateSchema = z
  .object({
    conditionType: z
      .string()
      .default('')
      .openapi({
        description:
          "conditionType refers to a condition in the pod's condition list with matching type.",
      }),
  })
  .openapi({
    description: 'PodReadinessGate contains the reference to a pod condition',
    required: ['conditionType'],
  })
  .openapi('IoK8sApiCoreV1PodReadinessGate')

const IoK8sApiCoreV1PodResourceClaimSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.',
      }),
    resourceClaimName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'resourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.\n\nExactly one of ResourceClaimName and ResourceClaimTemplateName must be set.',
      }),
    resourceClaimTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "resourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.\n\nThe template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.\n\nWhen the DRAWorkloadResourceClaims feature gate is enabled and the pod belongs to a PodGroup that defines a PodGroupResourceClaim with the same Name and ResourceClaimTemplateName, this PodResourceClaim resolves to the ResourceClaim generated for the PodGroup. All pods in the group that define an equivalent PodResourceClaim matching the PodGroupResourceClaim's Name and ResourceClaimTemplateName share the same generated ResourceClaim. ResourceClaims generated for a PodGroup are owned by the PodGroup and their lifecycles are tied to the PodGroup instead of any individual pod.\n\nThis field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.\n\nExactly one of ResourceClaimName and ResourceClaimTemplateName must be set.",
      }),
  })
  .openapi({
    description:
      'PodResourceClaim references exactly one ResourceClaim, either directly or by naming a ResourceClaimTemplate which is then turned into a ResourceClaim for the pod.\n\nIt adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.\n\nWhen the DRAWorkloadResourceClaims feature gate is enabled and this Pod belongs to a PodGroup, a PodResourceClaim is matched to a PodGroupResourceClaim if all of their fields are equal (Name, ResourceClaimName, and ResourceClaimTemplateName). A matched claim references a single ResourceClaim shared across all Pods in the PodGroup, reserved for the PodGroup in ResourceClaimStatus.ReservedFor rather than for individual Pods.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1PodResourceClaim')

const IoK8sApiCoreV1PodSchedulingGateSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name of the scheduling gate. Each scheduling gate must have a unique name field.',
      }),
  })
  .openapi({
    description: 'PodSchedulingGate is associated to a Pod to guard its scheduling.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1PodSchedulingGate')

const IoK8sApiCoreV1PodSchedulingGroupSchema = z
  .object({
    podGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'podGroupName specifies the name of the standalone PodGroup object that represents the runtime instance of this group. Must be a DNS subdomain.',
      }),
  })
  .openapi({
    description:
      'PodSchedulingGroup identifies the runtime scheduling group instance that a Pod belongs to. The scheduler uses this information to apply workload-aware scheduling semantics. Exactly one field must be specified.',
    'x-kubernetes-unions': [{ 'fields-to-discriminateBy': { podGroupName: 'PodGroupName' } }],
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodSchedulingGroup')

const IoK8sApiCoreV1SysctlSchema = z
  .object({
    name: z.string().default('').openapi({ description: 'name of a property to set' }),
    value: z.string().default('').openapi({ description: 'value of a property to set' }),
  })
  .openapi({
    description: 'Sysctl defines a kernel parameter to be set',
    required: ['name', 'value'],
  })
  .openapi('IoK8sApiCoreV1Sysctl')

const IoK8sApiCoreV1PodSecurityContextSchema = z
  .object({
    appArmorProfile: IoK8sApiCoreV1AppArmorProfileSchema.exactOptional().openapi({
      description:
        'appArmorProfile is the AppArmor options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.',
    }),
    fsGroup: z
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
          "fsGroup is a special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:\n\n1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----\n\nIf unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.",
      }),
    fsGroupChangePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.',
      }),
    runAsGroup: z
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
          'runAsGroup is the GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.',
      }),
    runAsNonRoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'runAsNonRoot indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
      }),
    runAsUser: z
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
          'runAsUser is the UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.',
      }),
    seLinuxChangePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'seLinuxChangePolicy defines how the container\'s SELinux label is applied to all volumes used by the Pod. It has no effect on nodes that do not support SELinux or to volumes does not support SELinux. Valid values are "MountOption" and "Recursive".\n\n"Recursive" means relabeling of all files on all Pod volumes by the container runtime. This may be slow for large volumes, but allows mixing privileged and unprivileged Pods sharing the same volume on the same node.\n\n"MountOption" mounts all eligible Pod volumes with `-o context` mount option. This requires all Pods that share the same volume to use the same SELinux label. It is not possible to share the same volume among privileged and unprivileged Pods. Eligible volumes are in-tree FibreChannel and iSCSI volumes, and all CSI volumes whose CSI driver announces SELinux support by setting spec.seLinuxMount: true in their CSIDriver instance. Other volumes are always re-labelled recursively.\n\nIf not specified, "MountOption" is used.\n\nThis field affects only Pods that have SELinux label set, either in PodSecurityContext or in SecurityContext of all containers.\n\nAll Pods that use the same volume should use the same seLinuxChangePolicy, otherwise some pods can get stuck in ContainerCreating state. Note that this field cannot be set when spec.os.name is windows.',
      }),
    seLinuxOptions: IoK8sApiCoreV1SELinuxOptionsSchema.exactOptional().openapi({
      description:
        'seLinuxOptions is the SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.',
    }),
    seccompProfile: IoK8sApiCoreV1SeccompProfileSchema.exactOptional().openapi({
      description:
        'seccompProfile is the seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.',
    }),
    supplementalGroups: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          "supplementalGroups is a list of groups applied to the first process run in each container, in addition to the container's primary GID and fsGroup (if specified).  If the SupplementalGroupsPolicy feature is enabled, the supplementalGroupsPolicy field determines whether these are in addition to or instead of any group memberships defined in the container image. If unspecified, no additional groups are added, though group memberships defined in the container image may still be used, depending on the supplementalGroupsPolicy field. Note that this field cannot be set when spec.os.name is windows.",
        'x-kubernetes-list-type': 'atomic',
      }),
    supplementalGroupsPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'supplementalGroupsPolicy defines how supplemental groups of the first container processes are calculated. Valid values are "Merge" and "Strict". If not specified, "Merge" is used. The container runtime must implement support for this feature. Note that this field cannot be set when spec.os.name is windows.',
      }),
    sysctls: z
      .array(IoK8sApiCoreV1SysctlSchema)
      .exactOptional()
      .openapi({
        description:
          'sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.',
        'x-kubernetes-list-type': 'atomic',
      }),
    windowsOptions: IoK8sApiCoreV1WindowsSecurityContextOptionsSchema.exactOptional().openapi({
      description:
        "windowsOptions is the Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.",
    }),
  })
  .openapi({
    description:
      'PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodSecurityContext')

const IoK8sApiCoreV1TolerationSchema = z
  .object({
    effect: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.',
      }),
    operator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "operator represents a key's relationship to the value. Valid operators are Exists, Equal, Lt, and Gt. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. Lt and Gt perform numeric comparisons (requires feature gate TaintTolerationComparisonOperators).",
      }),
    tolerationSeconds: z
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
          'tolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.',
      }),
  })
  .openapi({
    description:
      'The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1Toleration')

const IoK8sApiCoreV1TopologySpreadConstraintSchema = z
  .object({
    labelSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'labelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.',
    }),
    matchLabelKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "matchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector.\n\nThis is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).",
        'x-kubernetes-list-type': 'atomic',
      }),
    maxSkew: z
      .int32()
      .default(0)
      .openapi({
        description:
          "maxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.",
      }),
    minDomains: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'minDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won\'t schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule.\n\nFor example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.',
      }),
    nodeAffinityPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "nodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.\n\nIf this value is nil, the behavior is equivalent to the Honor policy.",
      }),
    nodeTaintsPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'nodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included.\n\nIf this value is nil, the behavior is equivalent to the Ignore policy.',
      }),
    topologyKey: z
      .string()
      .default('')
      .openapi({
        description:
          'topologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It\'s a required field.',
      }),
    whenUnsatisfiable: z
      .string()
      .default('')
      .openapi({
        description:
          'whenUnsatisfiable indicates how to deal with a pod if it doesn\'t satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,\n  but giving higher precedence to topologies that would help reduce the\n  skew.\nA constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won\'t make it *more* imbalanced. It\'s a required field.',
      }),
  })
  .openapi({
    description:
      'TopologySpreadConstraint specifies how to spread matching pods among the given topology.',
    required: ['maxSkew', 'topologyKey', 'whenUnsatisfiable'],
  })
  .openapi('IoK8sApiCoreV1TopologySpreadConstraint')

const IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
    volumeID: z
      .string()
      .default('')
      .openapi({
        description:
          'volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
  })
  .openapi({
    description:
      'Represents a Persistent Disk resource in AWS.\n\nAn AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource')

const IoK8sApiCoreV1AzureDiskVolumeSourceSchema = z
  .object({
    cachingMode: z
      .string()
      .default('ReadWrite')
      .exactOptional()
      .openapi({
        description: 'cachingMode is the Host Caching mode: None, Read Only, Read Write.',
      }),
    diskName: z
      .string()
      .default('')
      .openapi({ description: 'diskName is the Name of the data disk in the blob storage' }),
    diskURI: z
      .string()
      .default('')
      .openapi({ description: 'diskURI is the URI of data disk in the blob storage' }),
    fsType: z
      .string()
      .default('ext4')
      .exactOptional()
      .openapi({
        description:
          'fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    kind: z
      .string()
      .default('Shared')
      .exactOptional()
      .openapi({
        description:
          'kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared',
      }),
    readOnly: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
  })
  .openapi({
    description:
      'AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.',
    required: ['diskName', 'diskURI'],
  })
  .openapi('IoK8sApiCoreV1AzureDiskVolumeSource')

const IoK8sApiCoreV1AzureFileVolumeSourceSchema = z
  .object({
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretName: z
      .string()
      .default('')
      .openapi({
        description:
          'secretName is the  name of secret that contains Azure Storage Account Name and Key',
      }),
    shareName: z.string().default('').openapi({ description: 'shareName is the azure share Name' }),
  })
  .openapi({
    description:
      'AzureFile represents an Azure File Service mount on the host and bind mount to the pod.',
    required: ['secretName', 'shareName'],
  })
  .openapi('IoK8sApiCoreV1AzureFileVolumeSource')

const IoK8sApiCoreV1CephFSVolumeSourceSchema = z
  .object({
    monitors: z
      .array(z.string())
      .openapi({
        description:
          'monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
        'x-kubernetes-list-type': 'atomic',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
    secretFile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
    }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
  })
  .openapi({
    description:
      'Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.',
    required: ['monitors'],
  })
  .openapi('IoK8sApiCoreV1CephFSVolumeSource')

const IoK8sApiCoreV1CinderVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.',
    }),
    volumeID: z
      .string()
      .default('')
      .openapi({
        description:
          'volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
  })
  .openapi({
    description:
      'Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1CinderVolumeSource')

const IoK8sApiCoreV1KeyToPathSchema = z
  .object({
    key: z.string().default('').openapi({ description: 'key is the key to project.' }),
    mode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          "path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
      }),
    user: z
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
          'user is Optional: The owner UID of the created file. If specified, the item-level user field takes precedence over defaultUser. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
  })
  .openapi({
    description: 'Maps a string key to a path within a volume.',
    required: ['key', 'path'],
  })
  .openapi('IoK8sApiCoreV1KeyToPath')

const IoK8sApiCoreV1ConfigMapVolumeSourceSchema = z
  .object({
    defaultMode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    defaultUser: z
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
          'defaultUser is Optional: The owner UID of the created files by default. The defaultUser field is only used as a fallback when the item-level user field is unset. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
    items: z
      .array(IoK8sApiCoreV1KeyToPathSchema)
      .exactOptional()
      .openapi({
        description:
          "items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'optional specify whether the ConfigMap or its keys must be defined',
      }),
  })
  .openapi({
    description:
      "Adapts a ConfigMap into a volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1ConfigMapVolumeSource')

const IoK8sApiCoreV1CSIVolumeSourceSchema = z
  .object({
    driver: z
      .string()
      .default('')
      .openapi({
        description:
          'driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.',
      }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.',
      }),
    nodePublishSecretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.',
    }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).',
      }),
    volumeAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.",
      }),
  })
  .openapi({
    description:
      'Represents a source location of a volume to mount, managed by an external CSI driver',
    required: ['driver'],
  })
  .openapi('IoK8sApiCoreV1CSIVolumeSource')

const IoK8sApiCoreV1DownwardAPIVolumeFileSchema = z
  .object({
    fieldRef: IoK8sApiCoreV1ObjectFieldSelectorSchema.exactOptional().openapi({
      description:
        'fieldRef selects a field of the pod: only annotations, labels, name, namespace and uid are supported. Required.',
    }),
    mode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'mode is optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          "path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
      }),
    resourceFieldRef: IoK8sApiCoreV1ResourceFieldSelectorSchema.exactOptional().openapi({
      description:
        'resourceFieldRef selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.',
    }),
    user: z
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
          'user is Optional: The owner UID of the created file. If specified, the item-level user field takes precedence over defaultUser. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
  })
  .openapi({
    description:
      'DownwardAPIVolumeFile represents information to create the file containing the pod field',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1DownwardAPIVolumeFile')

const IoK8sApiCoreV1DownwardAPIVolumeSourceSchema = z
  .object({
    defaultMode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'defaultMode is mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    defaultUser: z
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
          'defaultUser is Optional: The owner UID of the created files by default. The defaultUser field is only used as a fallback when the item-level user field is unset. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
    items: z
      .array(IoK8sApiCoreV1DownwardAPIVolumeFileSchema)
      .exactOptional()
      .openapi({
        description: 'items is a list of downward API volume file',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1DownwardAPIVolumeSource')

const IoK8sApiCoreV1EmptyDirVolumeSourceSchema = z
  .object({
    medium: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'medium represents what type of storage medium should back this directory. The default is "" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir',
      }),
    mode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'mode specifies the permission bits for the emptyDir directory, in numeric notation (e.g., 0755, 01777). Must be a value between 0000 and 01777. If not specified, defaults to 0777. This might be in conflict with other options that affect the file mode, like fsGroup. If fsGroup is specified, the fsGroup permissions will override the mode specified here. This field has no effect on Windows. This field is alpha and requires EmptyDirVolumeMode featuregate to be enabled.',
      }),
    sizeLimit: IoK8sApimachineryPkgApiResourceQuantitySchema.exactOptional().openapi({
      description:
        'sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir',
    }),
  })
  .openapi({
    description:
      'Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1EmptyDirVolumeSource')

const IoK8sApiCoreV1TypedLocalObjectReferenceSchema = z
  .object({
    apiGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.',
      }),
    kind: z
      .string()
      .default('')
      .openapi({ description: 'kind is the type of resource being referenced' }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the name of resource being referenced' }),
  })
  .openapi({
    description:
      'TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.',
    required: ['kind', 'name'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1TypedLocalObjectReference')

const IoK8sApiCoreV1TypedObjectReferenceSchema = z
  .object({
    apiGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.',
      }),
    kind: z
      .string()
      .default('')
      .openapi({ description: 'kind is the type of resource being referenced' }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the name of resource being referenced' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.",
      }),
  })
  .openapi({
    description:
      'TypedObjectReference contains enough information to let you locate the typed referenced object',
    required: ['kind', 'name'],
  })
  .openapi('IoK8sApiCoreV1TypedObjectReference')

const IoK8sApiCoreV1VolumeResourceRequirementsSchema = z
  .object({
    limits: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          'limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
      }),
    requests: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          'requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
      }),
  })
  .openapi({
    description:
      'VolumeResourceRequirements describes the storage resource requirements for a volume.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1VolumeResourceRequirements')

const IoK8sApiCoreV1PersistentVolumeClaimSpecSchema = z
  .object({
    accessModes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1',
        'x-kubernetes-list-type': 'atomic',
      }),
    dataSource: IoK8sApiCoreV1TypedLocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.',
    }),
    dataSourceRef: IoK8sApiCoreV1TypedObjectReferenceSchema.exactOptional().openapi({
      description:
        "dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef\n  allows any non-core object, as well as PersistentVolumeClaim objects.\n* While dataSource ignores disallowed values (dropping them), dataSourceRef\n  preserves all values, and generates an error if a disallowed value is\n  specified.\n* While dataSource only allows local objects, dataSourceRef allows objects\n  in any namespaces.\n(Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.",
    }),
    resources: IoK8sApiCoreV1VolumeResourceRequirementsSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'resources represents the minimum resources the volume should have. Users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources',
      }),
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description: 'selector is a label query over volumes to consider for binding.',
    }),
    storageClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1',
      }),
    volumeAttributesClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string or nil value indicates that no VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state, this field can be reset to its previous value (including nil) to cancel the modification. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/',
      }),
    volumeMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.',
      }),
    volumeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeName is the binding reference to the PersistentVolume backing this claim.',
      }),
  })
  .openapi({
    description:
      'PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PersistentVolumeClaimSpec')

const IoK8sApiCoreV1PersistentVolumeClaimTemplateSchema = z
  .object({
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata may contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.',
      }),
    spec: IoK8sApiCoreV1PersistentVolumeClaimSpecSchema.default({}).openapi({
      description:
        'spec is the specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.',
    }),
  })
  .openapi({
    description:
      'PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.',
    required: ['spec'],
  })
  .openapi('IoK8sApiCoreV1PersistentVolumeClaimTemplate')

const IoK8sApiCoreV1EphemeralVolumeSourceSchema = z
  .object({
    volumeClaimTemplate: IoK8sApiCoreV1PersistentVolumeClaimTemplateSchema.openapi({
      description:
        'volumeClaimTemplate will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).\n\nAn existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.\n\nThis field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.\n\nRequired, must not be nil.',
    }),
  })
  .openapi({
    description: 'Represents an ephemeral volume that is handled by a normal storage driver.',
    required: ['volumeClaimTemplate'],
  })
  .openapi('IoK8sApiCoreV1EphemeralVolumeSource')

const IoK8sApiCoreV1FCVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    lun: z
      .int32()
      .exactOptional()
      .openapi({ description: 'lun is Optional: FC target lun number' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    targetWWNs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'targetWWNs is Optional: FC target worldwide names (WWNs)',
        'x-kubernetes-list-type': 'atomic',
      }),
    wwids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1FCVolumeSource')

const IoK8sApiCoreV1FlexVolumeSourceSchema = z
  .object({
    driver: z
      .string()
      .default('')
      .openapi({ description: 'driver is the name of the driver to use for this volume.' }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.',
      }),
    options: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'options is Optional: this field holds extra command options if any.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.',
    }),
  })
  .openapi({
    description:
      'FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.',
    required: ['driver'],
  })
  .openapi('IoK8sApiCoreV1FlexVolumeSource')

const IoK8sApiCoreV1FlockerVolumeSourceSchema = z
  .object({
    datasetName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated',
      }),
    datasetUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset',
      }),
  })
  .openapi({
    description:
      'Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1FlockerVolumeSource')

const IoK8sApiCoreV1GCEPersistentDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    pdName: z
      .string()
      .default('')
      .openapi({
        description:
          'pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
  })
  .openapi({
    description:
      'Represents a Persistent Disk resource in Google Compute Engine.\n\nA GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.',
    required: ['pdName'],
  })
  .openapi('IoK8sApiCoreV1GCEPersistentDiskVolumeSource')

const IoK8sApiCoreV1GitRepoVolumeSourceSchema = z
  .object({
    directory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",
      }),
    repository: z.string().default('').openapi({ description: 'repository is the URL' }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'revision is the commit hash for the specified revision.' }),
  })
  .openapi({
    description:
      "Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.\n\nDeprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
    required: ['repository'],
  })
  .openapi('IoK8sApiCoreV1GitRepoVolumeSource')

const IoK8sApiCoreV1GlusterfsVolumeSourceSchema = z
  .object({
    endpoints: z
      .string()
      .default('')
      .openapi({ description: 'endpoints is the endpoint name that details Glusterfs topology.' }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
  })
  .openapi({
    description:
      'Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.',
    required: ['endpoints', 'path'],
  })
  .openapi('IoK8sApiCoreV1GlusterfsVolumeSource')

const IoK8sApiCoreV1HostPathVolumeSourceSchema = z
  .object({
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
      }),
  })
  .openapi({
    description:
      'Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1HostPathVolumeSource')

const IoK8sApiCoreV1ImageVolumeSourceSchema = z
  .object({
    pullPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "pullPolicy is the policy for pulling OCI objects. Possible values are: Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.",
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reference is required: Image or artifact reference to be used. Behaves in the same way as pod.spec.containers[*].image. Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
      }),
  })
  .openapi({ description: 'ImageVolumeSource represents a image volume resource.', required: [] })
  .openapi('IoK8sApiCoreV1ImageVolumeSource')

const IoK8sApiCoreV1ISCSIVolumeSourceSchema = z
  .object({
    chapAuthDiscovery: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication',
      }),
    chapAuthSession: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'chapAuthSession defines whether support iSCSI Session CHAP authentication',
      }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi',
      }),
    initiatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.',
      }),
    iqn: z.string().default('').openapi({ description: 'iqn is the target iSCSI Qualified Name.' }),
    iscsiInterface: z
      .string()
      .default('default')
      .exactOptional()
      .openapi({
        description:
          "iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
      }),
    lun: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'lun represents iSCSI Target Lun number.' }),
    portals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
        'x-kubernetes-list-type': 'atomic',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description: 'secretRef is the CHAP Secret for iSCSI target and initiator authentication',
    }),
    targetPortal: z
      .string()
      .default('')
      .openapi({
        description:
          'targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
      }),
  })
  .openapi({
    description:
      'Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.',
    required: ['targetPortal', 'iqn'],
  })
  .openapi('IoK8sApiCoreV1ISCSIVolumeSource')

const IoK8sApiCoreV1NFSVolumeSourceSchema = z
  .object({
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
    server: z
      .string()
      .default('')
      .openapi({
        description:
          'server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
  })
  .openapi({
    description:
      'Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.',
    required: ['server', 'path'],
  })
  .openapi('IoK8sApiCoreV1NFSVolumeSource')

const IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceSchema = z
  .object({
    claimName: z
      .string()
      .default('')
      .openapi({
        description:
          'claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'readOnly Will force the ReadOnly setting in VolumeMounts. Default false.',
      }),
  })
  .openapi({
    description:
      "PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).",
    required: ['claimName'],
  })
  .openapi('IoK8sApiCoreV1PersistentVolumeClaimVolumeSource')

const IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    pdID: z
      .string()
      .default('')
      .openapi({ description: 'pdID is the ID that identifies Photon Controller persistent disk' }),
  })
  .openapi({
    description: 'Represents a Photon Controller persistent disk resource.',
    required: ['pdID'],
  })
  .openapi('IoK8sApiCoreV1PhotonPersistentDiskVolumeSource')

const IoK8sApiCoreV1PortworxVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    volumeID: z
      .string()
      .default('')
      .openapi({ description: 'volumeID uniquely identifies a Portworx volume' }),
  })
  .openapi({
    description: 'PortworxVolumeSource represents a Portworx volume resource.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1PortworxVolumeSource')

const IoK8sApiCoreV1ClusterTrustBundleProjectionSchema = z
  .object({
    labelSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'labelSelector selects all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as "match nothing".  If set but empty, interpreted as "match everything".',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name selects a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "optional indicates that if true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.",
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description: 'path is the relative path from the volume root to write the bundle.',
      }),
    signerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'signerName selects all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.',
      }),
    user: z
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
          'user is Optional: The owner UID of the created file. If specified, the item-level user field takes precedence over defaultUser. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
  })
  .openapi({
    description:
      'ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1ClusterTrustBundleProjection')

const IoK8sApiCoreV1ConfigMapProjectionSchema = z
  .object({
    items: z
      .array(IoK8sApiCoreV1KeyToPathSchema)
      .exactOptional()
      .openapi({
        description:
          "items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'optional specify whether the ConfigMap or its keys must be defined',
      }),
  })
  .openapi({
    description:
      "Adapts a ConfigMap into a projected volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1ConfigMapProjection')

const IoK8sApiCoreV1DownwardAPIProjectionSchema = z
  .object({
    items: z
      .array(IoK8sApiCoreV1DownwardAPIVolumeFileSchema)
      .exactOptional()
      .openapi({
        description: 'items is a list of DownwardAPIVolume file',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1DownwardAPIProjection')

const IoK8sApiCoreV1PodCertificateProjectionSchema = z
  .object({
    certificateChainPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'certificateChainPath is the path to write the certificate chain at this path in the projected volume.\n\nMost applications should use credentialBundlePath.  When using keyPath and certificateChainPath, your application needs to check that the key and leaf certificate are consistent, because it is possible to read the files mid-rotation.',
      }),
    credentialBundlePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "credentialBundlePath is the path to write the credential bundle at in the projected volume.\n\nThe credential bundle is a single file that contains multiple PEM blocks. The first PEM block is a PRIVATE KEY block, containing a PKCS#8 private key.\n\nThe remaining blocks are CERTIFICATE blocks, containing the issued certificate chain from the signer (leaf and any intermediates).\n\nUsing credentialBundlePath lets your Pod's application code make a single atomic read that retrieves a consistent key and certificate chain.  If you project them to separate files, your application code will need to additionally check that the leaf certificate was issued to the key.",
      }),
    keyPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'keyPath is the path to write the key at in the projected volume.\n\nMost applications should use credentialBundlePath.  When using keyPath and certificateChainPath, your application needs to check that the key and leaf certificate are consistent, because it is possible to read the files mid-rotation.',
      }),
    keyType: z
      .string()
      .openapi({
        description:
          'keyType is the type of keypair Kubelet will generate for the pod.\n\nValid values are "RSA3072", "RSA4096", "ECDSAP256", "ECDSAP384", "ECDSAP521", "ED25519", "MLDSA44", "MLDSA65", and "MLDSA87".\n\nMLDSA key types are only allowed when the PodCertificateMLDSA feature gate is enabled.',
      }),
    maxExpirationSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'maxExpirationSeconds is the maximum lifetime permitted for the certificate.\n\nKubelet copies this value verbatim into the PodCertificateRequests it generates for this projection.\n\nIf omitted, kube-apiserver will set it to 86400(24 hours). kube-apiserver will reject values shorter than 3600 (1 hour).  The maximum allowable value is 7862400 (91 days).\n\nThe signer implementation is then free to issue a certificate with any lifetime *shorter* than MaxExpirationSeconds, but no shorter than 3600 seconds (1 hour).  This constraint is enforced by kube-apiserver. `kubernetes.io` signers will never issue certificates with a lifetime longer than 24 hours.',
      }),
    signerName: z
      .string()
      .openapi({
        description:
          "signerName is the name of the signer. Kubelet's generated CSRs will be addressed to this signer.",
      }),
    user: z
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
          'user is Optional: The owner UID of the created file. If specified, the item-level user field takes precedence over defaultUser. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
    userAnnotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'userAnnotations allow pod authors to pass additional information to the signer implementation.  Kubernetes does not restrict or validate this metadata in any way.\n\nThese values are copied verbatim into the `spec.unverifiedUserAnnotations` field of the PodCertificateRequest objects that Kubelet creates.\n\nEntries are subject to the same validation as object metadata annotations, with the addition that all keys must be domain-prefixed. No restrictions are placed on values, except an overall size limitation on the entire field.\n\nSigners should document the keys and values they support. Signers should deny requests that contain keys they do not recognize.',
      }),
  })
  .openapi({
    description:
      'PodCertificateProjection provides a private key and X.509 certificate in the pod filesystem.',
    required: ['signerName', 'keyType'],
  })
  .openapi('IoK8sApiCoreV1PodCertificateProjection')

const IoK8sApiCoreV1SecretProjectionSchema = z
  .object({
    items: z
      .array(IoK8sApiCoreV1KeyToPathSchema)
      .exactOptional()
      .openapi({
        description:
          "items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'optional field specify whether the Secret or its key must be defined',
      }),
  })
  .openapi({
    description:
      "Adapts a secret into a projected volume.\n\nThe contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1SecretProjection')

const IoK8sApiCoreV1ServiceAccountTokenProjectionSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.',
      }),
    expirationSeconds: z
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
          'expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.',
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path is the path relative to the mount point of the file to project the token into.',
      }),
    user: z
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
          'user is Optional: The owner UID of the created file. If specified, the item-level user field takes precedence over defaultUser. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
  })
  .openapi({
    description:
      'ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1ServiceAccountTokenProjection')

const IoK8sApiCoreV1VolumeProjectionSchema = z
  .object({
    clusterTrustBundle: IoK8sApiCoreV1ClusterTrustBundleProjectionSchema.exactOptional().openapi({
      description:
        'clusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.\n\nAlpha, gated by the ClusterTrustBundleProjection feature gate.\n\nClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.\n\nKubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.',
    }),
    configMap: IoK8sApiCoreV1ConfigMapProjectionSchema.exactOptional().openapi({
      description: 'configMap information about the configMap data to project',
    }),
    downwardAPI: IoK8sApiCoreV1DownwardAPIProjectionSchema.exactOptional().openapi({
      description: 'downwardAPI information about the downwardAPI data to project',
    }),
    podCertificate: IoK8sApiCoreV1PodCertificateProjectionSchema.exactOptional().openapi({
      description:
        "podCertificate projects an auto-rotating credential bundle (private key and certificate chain) that the pod can use either as a TLS client or server.\n\nKubelet generates a private key and uses it to send a PodCertificateRequest to the named signer.  Once the signer approves the request and issues a certificate chain, Kubelet writes the key and certificate chain to the pod filesystem.  The pod does not start until certificates have been issued for each podCertificate projected volume source in its spec.\n\nKubelet will begin trying to rotate the certificate at the time indicated by the signer using the PodCertificateRequest.Status.BeginRefreshAt timestamp.\n\nKubelet can write a single file, indicated by the credentialBundlePath field, or separate files, indicated by the keyPath and certificateChainPath fields.\n\nThe credential bundle is a single file in PEM format.  The first PEM entry is the private key (in PKCS#8 format), and the remaining PEM entries are the certificate chain issued by the signer (typically, signers will return their certificate chain in leaf-to-root order).\n\nPrefer using the credential bundle format, since your application code can read it atomically.  If you use keyPath and certificateChainPath, your application must make two separate file reads. If these coincide with a certificate rotation, it is possible that the private key and leaf certificate you read may not correspond to each other.  Your application will need to check for this condition, and re-read until they are consistent.\n\nThe named signer controls chooses the format of the certificate it issues; consult the signer implementation's documentation to learn how to use the certificates it issues.",
    }),
    secret: IoK8sApiCoreV1SecretProjectionSchema.exactOptional().openapi({
      description: 'secret information about the secret data to project',
    }),
    serviceAccountToken: IoK8sApiCoreV1ServiceAccountTokenProjectionSchema.exactOptional().openapi({
      description:
        'serviceAccountToken is information about the serviceAccountToken data to project',
    }),
  })
  .openapi({
    description:
      'Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1VolumeProjection')

const IoK8sApiCoreV1ProjectedVolumeSourceSchema = z
  .object({
    defaultMode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    defaultUser: z
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
          'defaultUser is Optional: The owner UID of the created files by default. The defaultUser field is only used as a fallback when the item-level user field is unset. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
    sources: z
      .array(IoK8sApiCoreV1VolumeProjectionSchema)
      .exactOptional()
      .openapi({
        description:
          'sources is the list of volume projections. Each entry in this list handles one source.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({ description: 'Represents a projected volume source', required: [] })
  .openapi('IoK8sApiCoreV1ProjectedVolumeSource')

const IoK8sApiCoreV1QuobyteVolumeSourceSchema = z
  .object({
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'group to map volume access to Default is no group' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.',
      }),
    registry: z
      .string()
      .default('')
      .openapi({
        description:
          'registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes',
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'user to map volume access to Defaults to serivceaccount user' }),
    volume: z
      .string()
      .default('')
      .openapi({
        description:
          'volume is a string that references an already created Quobyte volume by name.',
      }),
  })
  .openapi({
    description:
      'Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.',
    required: ['registry', 'volume'],
  })
  .openapi('IoK8sApiCoreV1QuobyteVolumeSource')

const IoK8sApiCoreV1RBDVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd',
      }),
    image: z
      .string()
      .default('')
      .openapi({
        description:
          'image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    keyring: z
      .string()
      .default('/etc/ceph/keyring')
      .exactOptional()
      .openapi({
        description:
          'keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    monitors: z
      .array(z.string())
      .openapi({
        description:
          'monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
        'x-kubernetes-list-type': 'atomic',
      }),
    pool: z
      .string()
      .default('rbd')
      .exactOptional()
      .openapi({
        description:
          'pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
    }),
    user: z
      .string()
      .default('admin')
      .exactOptional()
      .openapi({
        description:
          'user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
  })
  .openapi({
    description:
      'Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.',
    required: ['monitors', 'image'],
  })
  .openapi('IoK8sApiCoreV1RBDVolumeSource')

const IoK8sApiCoreV1ScaleIOVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .default('xfs')
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".',
      }),
    gateway: z
      .string()
      .default('')
      .openapi({ description: 'gateway is the host address of the ScaleIO API Gateway.' }),
    protectionDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.',
    }),
    sslEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'sslEnabled Flag enable/disable SSL communication with Gateway, default false',
      }),
    storageMode: z
      .string()
      .default('ThinProvisioned')
      .exactOptional()
      .openapi({
        description:
          'storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.',
      }),
    storagePool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePool is the ScaleIO Storage Pool associated with the protection domain.',
      }),
    system: z
      .string()
      .default('')
      .openapi({
        description: 'system is the name of the storage system as configured in ScaleIO.',
      }),
    volumeName: z
      .string()
      .openapi({
        description:
          'volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.',
      }),
  })
  .openapi({
    description: 'ScaleIOVolumeSource represents a persistent ScaleIO volume',
    required: ['gateway', 'system', 'volumeName'],
  })
  .openapi('IoK8sApiCoreV1ScaleIOVolumeSource')

const IoK8sApiCoreV1SecretVolumeSourceSchema = z
  .object({
    defaultMode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
      }),
    defaultUser: z
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
          'defaultUser is Optional: The owner UID of the created files by default. The defaultUser field is only used as a fallback when the item-level user field is unset. (Alpha) This field requires the AtomicWriteVolumeUserFields feature gate to be enabled.',
      }),
    items: z
      .array(IoK8sApiCoreV1KeyToPathSchema)
      .exactOptional()
      .openapi({
        description:
          "items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
        'x-kubernetes-list-type': 'atomic',
      }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'optional field specify whether the Secret or its keys must be defined',
      }),
    secretName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
      }),
  })
  .openapi({
    description:
      "Adapts a Secret into a volume.\n\nThe contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.",
    required: [],
  })
  .openapi('IoK8sApiCoreV1SecretVolumeSource')

const IoK8sApiCoreV1StorageOSVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1LocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.',
    }),
    volumeName: z
      .string()
      .openapi({
        description:
          'volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.',
      }),
    volumeNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.',
      }),
  })
  .openapi({
    description: 'Represents a StorageOS persistent volume resource.',
    required: ['volumeName'],
  })
  .openapi('IoK8sApiCoreV1StorageOSVolumeSource')

const IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    storagePolicyID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.',
      }),
    storagePolicyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePolicyName is the storage Policy Based Management (SPBM) profile name.',
      }),
    volumePath: z
      .string()
      .default('')
      .openapi({ description: 'volumePath is the path that identifies vSphere volume vmdk' }),
  })
  .openapi({ description: 'Represents a vSphere volume resource.', required: ['volumePath'] })
  .openapi('IoK8sApiCoreV1VsphereVirtualDiskVolumeSource')

const IoK8sApiCoreV1VolumeSchema = z
  .object({
    awsElasticBlockStore:
      IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceSchema.exactOptional().openapi({
        description:
          "awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod.\n\nDeprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
      }),
    azureDisk: IoK8sApiCoreV1AzureDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        'azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.\n\nDeprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.',
    }),
    azureFile: IoK8sApiCoreV1AzureFileVolumeSourceSchema.exactOptional().openapi({
      description:
        'azureFile represents an Azure File Service mount on the host and bind mount to the pod.\n\nDeprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.',
    }),
    cephfs: IoK8sApiCoreV1CephFSVolumeSourceSchema.exactOptional().openapi({
      description:
        "cephfs represents a Ceph FS mount on the host that shares a pod's lifetime.\n\nDeprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.",
    }),
    cinder: IoK8sApiCoreV1CinderVolumeSourceSchema.exactOptional().openapi({
      description:
        'cinder represents a cinder volume attached and mounted on kubelets host machine.\n\nDeprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
    }),
    configMap: IoK8sApiCoreV1ConfigMapVolumeSourceSchema.exactOptional().openapi({
      description: 'configMap represents a configMap that should populate this volume',
    }),
    csi: IoK8sApiCoreV1CSIVolumeSourceSchema.exactOptional().openapi({
      description:
        'csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.',
    }),
    downwardAPI: IoK8sApiCoreV1DownwardAPIVolumeSourceSchema.exactOptional().openapi({
      description:
        'downwardAPI represents downward API about the pod that should populate this volume',
    }),
    emptyDir: IoK8sApiCoreV1EmptyDirVolumeSourceSchema.exactOptional().openapi({
      description:
        "emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir",
    }),
    ephemeral: IoK8sApiCoreV1EphemeralVolumeSourceSchema.exactOptional().openapi({
      description:
        "ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.\n\nUse this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity\n   tracking are needed,\nc) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through\n   a PersistentVolumeClaim (see EphemeralVolumeSource for more\n   information on the connection between this volume type\n   and PersistentVolumeClaim).\n\nUse PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.\n\nUse CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.\n\nA pod can use both types of ephemeral volumes and persistent volumes at the same time.",
    }),
    fc: IoK8sApiCoreV1FCVolumeSourceSchema.exactOptional().openapi({
      description:
        "fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.",
    }),
    flexVolume: IoK8sApiCoreV1FlexVolumeSourceSchema.exactOptional().openapi({
      description:
        'flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.\n\nDeprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.',
    }),
    flocker: IoK8sApiCoreV1FlockerVolumeSourceSchema.exactOptional().openapi({
      description:
        "flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running.\n\nDeprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.",
    }),
    gcePersistentDisk: IoK8sApiCoreV1GCEPersistentDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        "gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod.\n\nDeprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
    }),
    gitRepo: IoK8sApiCoreV1GitRepoVolumeSourceSchema.exactOptional().openapi({
      description:
        "gitRepo represents a git repository at a particular revision.\n\nDeprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
    }),
    glusterfs: IoK8sApiCoreV1GlusterfsVolumeSourceSchema.exactOptional().openapi({
      description:
        "glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.\n\nDeprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported.",
    }),
    hostPath: IoK8sApiCoreV1HostPathVolumeSourceSchema.exactOptional().openapi({
      description:
        'hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
    }),
    image: IoK8sApiCoreV1ImageVolumeSourceSchema.exactOptional().openapi({
      description:
        "image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:\n\n- Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.\n\nThe volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33. The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.",
    }),
    iscsi: IoK8sApiCoreV1ISCSIVolumeSourceSchema.exactOptional().openapi({
      description:
        "iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes/#iscsi",
    }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    nfs: IoK8sApiCoreV1NFSVolumeSourceSchema.exactOptional().openapi({
      description:
        "nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
    }),
    persistentVolumeClaim:
      IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceSchema.exactOptional().openapi({
        description:
          'persistentVolumeClaim represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims',
      }),
    photonPersistentDisk:
      IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceSchema.exactOptional().openapi({
        description:
          'photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.\n\nDeprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.',
      }),
    portworxVolume: IoK8sApiCoreV1PortworxVolumeSourceSchema.exactOptional().openapi({
      description:
        'portworxVolume represents a portworx volume attached and mounted on kubelets host machine.\n\nDeprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver.',
    }),
    projected: IoK8sApiCoreV1ProjectedVolumeSourceSchema.exactOptional().openapi({
      description: 'projected items for all in one resources secrets, configmaps, and downward API',
    }),
    quobyte: IoK8sApiCoreV1QuobyteVolumeSourceSchema.exactOptional().openapi({
      description:
        "quobyte represents a Quobyte mount on the host that shares a pod's lifetime.\n\nDeprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.",
    }),
    rbd: IoK8sApiCoreV1RBDVolumeSourceSchema.exactOptional().openapi({
      description:
        "rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.\n\nDeprecated: RBD is deprecated and the in-tree rbd type is no longer supported.",
    }),
    scaleIO: IoK8sApiCoreV1ScaleIOVolumeSourceSchema.exactOptional().openapi({
      description:
        'scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.\n\nDeprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.',
    }),
    secret: IoK8sApiCoreV1SecretVolumeSourceSchema.exactOptional().openapi({
      description:
        'secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret',
    }),
    storageos: IoK8sApiCoreV1StorageOSVolumeSourceSchema.exactOptional().openapi({
      description:
        'storageos represents a StorageOS volume attached and mounted on Kubernetes nodes.\n\nDeprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.',
    }),
    vsphereVolume: IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        'vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.\n\nDeprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.',
    }),
  })
  .openapi({
    description:
      'Volume represents a named volume in a pod that may be accessed by any container in the pod.',
    required: ['name'],
  })
  .openapi('IoK8sApiCoreV1Volume')

const IoK8sApiCoreV1PodSpecSchema = z
  .object({
    activeDeadlineSeconds: z
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
          'activeDeadlineSeconds is the optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.',
      }),
    affinity: IoK8sApiCoreV1AffinitySchema.exactOptional().openapi({
      description: "affinity specifies the pod's scheduling constraints",
    }),
    automountServiceAccountToken: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'automountServiceAccountToken indicates whether a service account token should be automatically mounted.',
      }),
    containers: z
      .array(IoK8sApiCoreV1ContainerSchema)
      .openapi({
        description:
          'containers is the list of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    dnsConfig: IoK8sApiCoreV1PodDNSConfigSchema.exactOptional().openapi({
      description:
        'dnsConfig specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.',
    }),
    dnsPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "dnsPolicy sets the DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.",
      }),
    enableServiceLinks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "enableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.",
      }),
    ephemeralContainers: z
      .array(IoK8sApiCoreV1EphemeralContainerSchema)
      .exactOptional()
      .openapi({
        description:
          "ephemeralContainers is the list of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.",
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    evictionResponders: z
      .array(IoK8sApiCoreV1EvictionResponderSchema)
      .exactOptional()
      .openapi({
        description:
          'evictionResponders reference responders that react to Evictions based on EvictionRequests. Responders should observe and communicate through the Eviction Resource API to help with the graceful termination of a pod. The responders are selected sequentially, according to their specified priority.\n\nResponders should periodically report on an eviction progress by updating the .status.responders[].heartbeatTime field of the Eviction object. If this field is not updated within the heartbeat deadline defined by the Eviction API (currently 20 minutes), the eviction is passed over to the next responder with a lower priority. If there is no other responder, the last default imperative-eviction.k8s.io/evictor responder with a priority of 100 will evict the pod using the imperative Eviction API (pods/<name>/eviction subresource).\n\nThe maximum length of the responders list is 10. Responders are not supported when the pod is part of a PodGroup (.spec.schedulingGroup is set). This field can only be set on creation and is immutable afterwards.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    hostAliases: z
      .array(IoK8sApiCoreV1HostAliasSchema)
      .exactOptional()
      .openapi({
        description:
          "hostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified.",
        'x-kubernetes-list-map-keys': ['ip'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'ip',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    hostIPC: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "hostIPC uses the host's ipc namespace. Optional: Default to false.",
      }),
    hostNetwork: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "hostNetwork indicates that the pod should use the host's network namespace. When using hostNetwork you should specify ports so the scheduler is aware. When `hostNetwork` is true, specified `hostPort` fields in port definitions must match `containerPort`, and unspecified `hostPort` fields in port definitions are defaulted to match `containerPort`. Default to false.",
      }),
    hostPID: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "hostPID uses the host's pid namespace. Optional: Default to false.",
      }),
    hostUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "hostUsers specifies whether to use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host.",
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "hostname specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.",
      }),
    hostnameOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "hostnameOverride specifies an explicit override for the pod's hostname as perceived by the pod. This field only specifies the pod's hostname and does not affect its DNS records. When this field is set to a non-empty string: - It takes precedence over the values set in `hostname` and `subdomain`. - The Pod's hostname will be set to this value. - `setHostnameAsFQDN` must be nil or set to false. - `hostNetwork` must be set to false.\n\nThis field must be a valid DNS subdomain as defined in RFC 1123 and contain at most 64 characters.",
      }),
    imagePullSecrets: z
      .array(IoK8sApiCoreV1LocalObjectReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'imagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    initContainers: z
      .array(IoK8sApiCoreV1ContainerSchema)
      .exactOptional()
      .openapi({
        description:
          'initContainers is the list of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    nodeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'nodeName indicates in which node this pod is scheduled. If empty, this pod is a candidate for scheduling by the scheduler defined in schedulerName. Once this field is set, the kubelet for this node becomes responsible for the lifecycle of this pod. This field should not be used to express a desire for the pod to be scheduled on a specific node. https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename',
      }),
    nodeSelector: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "nodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/",
        'x-kubernetes-map-type': 'atomic',
      }),
    os: IoK8sApiCoreV1PodOSSchema.exactOptional().openapi({
      description:
        'os specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set.\n\nIf the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions\n\nIf the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.resources - spec.securityContext.appArmorProfile - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.securityContext.supplementalGroupsPolicy - spec.containers[*].securityContext.appArmorProfile - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup',
    }),
    overhead: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          'overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md',
      }),
    preemptionPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. Defaults to PreemptLowerPriority if unset.',
      }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'priority specifies the priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.',
      }),
    priorityClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'priorityClassName if specified, indicates the pod\'s priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.',
      }),
    readinessGates: z
      .array(IoK8sApiCoreV1PodReadinessGateSchema)
      .exactOptional()
      .openapi({
        description:
          'readinessGates if specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates',
        'x-kubernetes-list-type': 'atomic',
      }),
    resourceClaims: z
      .array(IoK8sApiCoreV1PodResourceClaimSchema)
      .exactOptional()
      .openapi({
        description:
          'resourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name. This field is immutable.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge,retainKeys',
      }),
    resources: IoK8sApiCoreV1ResourceRequirementsSchema.exactOptional().openapi({
      description:
        'resources is the total amount of CPU and Memory resources required by all containers in the pod. It supports specifying Requests and Limits for "cpu", "memory" and "hugepages-" resource names only. ResourceClaims are not supported.\n\nThis field enables fine-grained control over resource allocation for the entire pod, allowing resource sharing among containers in a pod.\n\nIf a limit is not specified at the pod level, the pod is limited by the aggregate of its container limits: - For cpu and memory, the aggregate is used only if every init and regular container\n  specifies a limit; otherwise the pod is not limited for that resource.\n- For hugepages, the container limits are summed and unspecified values are treated as 0.\n\nMore details: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
    }),
    restartPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'restartPolicy is the restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy',
      }),
    runtimeClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'runtimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class',
      }),
    schedulerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'schedulerName specifies the scheduler to dispatch the pod. If not specified, the pod will be dispatched by default scheduler.',
      }),
    schedulingGates: z
      .array(IoK8sApiCoreV1PodSchedulingGateSchema)
      .exactOptional()
      .openapi({
        description:
          'schedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.\n\nSchedulingGates can only be set at pod creation time, and be removed only afterwards.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    schedulingGroup: IoK8sApiCoreV1PodSchedulingGroupSchema.exactOptional().openapi({
      description:
        'schedulingGroup provides a reference to the immediate scheduling runtime grouping object that this Pod belongs to. This field is used by the scheduler to identify the group and apply the correct group scheduling policies. The association with a group also impacts other lifecycle aspects of a Pod that are relevant in a wider context of scheduling like preemption, resource attachment, etc. If not specified, the Pod is treated as a single unit in all of these aspects. The group object referenced by this field may not exist at the time the Pod is created. This field is immutable. The scheduler cannot distinguish PodGroup runtime instances that reuse the same namespace and name. Controllers should use a new PodGroup name for each runtime instance. Reusing a name for a PodGroup with different policies may result in Pod placement not conforming to the expected policies.',
    }),
    securityContext: IoK8sApiCoreV1PodSecurityContextSchema.exactOptional().openapi({
      description:
        'securityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.',
    }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'serviceAccount is a deprecated alias for ServiceAccountName.\n\nDeprecated: Use serviceAccountName instead.',
      }),
    serviceAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'serviceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/',
      }),
    setHostnameAsFQDN: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "setHostnameAsFQDN if true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\\\SYSTEM\\\\CurrentControlSet\\\\Services\\\\Tcpip\\\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.",
      }),
    shareProcessNamespace: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'shareProcessNamespace indicates whether to share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'subdomain specifies the subdomain of the Pod. If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.',
      }),
    terminationGracePeriodSeconds: z
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
          'terminationGracePeriodSeconds is the optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.',
      }),
    tolerations: z
      .array(IoK8sApiCoreV1TolerationSchema)
      .exactOptional()
      .openapi({
        description: "tolerations specifies the pod's tolerations.",
        'x-kubernetes-list-type': 'atomic',
      }),
    topologySpreadConstraints: z
      .array(IoK8sApiCoreV1TopologySpreadConstraintSchema)
      .exactOptional()
      .openapi({
        description:
          'topologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.',
        'x-kubernetes-list-map-keys': ['topologyKey', 'whenUnsatisfiable'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'topologyKey',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    volumes: z
      .array(IoK8sApiCoreV1VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'volumes is the list of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge,retainKeys',
      }),
  })
  .openapi({ description: 'PodSpec is a description of a pod.', required: ['containers'] })
  .openapi('IoK8sApiCoreV1PodSpec')

const IoK8sApiCoreV1PodTemplateSpecSchema = z
  .object({
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          "metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
    spec: IoK8sApiCoreV1PodSpecSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'spec is the specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description:
      'PodTemplateSpec describes the data a pod should have when created from a template',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PodTemplateSpec')

const IoK8sApiBatchV1JobSpecSchema = z
  .object({
    activeDeadlineSeconds: z
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
          'activeDeadlineSeconds specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it; value must be positive integer. If a Job is suspended (at creation or through an update), this timer will effectively be stopped and reset when the Job is resumed again.',
      }),
    backoffLimit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'backoffLimit specifies the number of retries before marking this job failed. Defaults to 6, unless backoffLimitPerIndex (only Indexed Job) is specified. When backoffLimitPerIndex is specified, backoffLimit defaults to 2147483647.',
      }),
    backoffLimitPerIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "backoffLimitPerIndex specifies the limit for the number of retries within an index before marking this index as failed. When enabled the number of failures per index is kept in the pod's batch.kubernetes.io/job-index-failure-count annotation. It can only be set when Job's completionMode=Indexed, and the Pod's restart policy is Never. The field is immutable.",
      }),
    completionMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "completionMode specifies how Pod completions are tracked. It can be `NonIndexed` (default) or `Indexed`.\n\n`NonIndexed` means that the Job is considered complete when there have been .spec.completions successfully completed Pods. Each Pod completion is homologous to each other.\n\n`Indexed` means that the Pods of a Job get an associated completion index from 0 to (.spec.completions - 1), available in the annotation batch.kubernetes.io/job-completion-index. The Job is considered complete when there is one successfully completed Pod for each index. When value is `Indexed`, .spec.completions must be specified and `.spec.parallelism` must be less than or equal to 10^5. In addition, The Pod name takes the form `$(job-name)-$(index)-$(random-string)`, the Pod hostname takes the form `$(job-name)-$(index)`.\n\nMore completion modes can be added in the future. If the Job controller observes a mode that it doesn't recognize, which is possible during upgrades due to version skew, the controller skips updates for the Job.",
      }),
    completions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'completions specifies the desired number of successfully finished pods the job should be run with.  Setting to null means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/',
      }),
    managedBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'managedBy field indicates the controller that manages a Job. The k8s Job controller reconciles jobs which don\'t have this field at all or the field value is the reserved string `kubernetes.io/job-controller`, but skips reconciling Jobs with a custom value for this field. The value must be a valid domain-prefixed path (e.g. acme.io/foo) - all characters before the first "/" must be a valid subdomain as defined by RFC 1123. All characters trailing the first "/" must be valid HTTP Path characters as defined by RFC 3986. The value cannot exceed 63 characters. This field is immutable.',
      }),
    manualSelector: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector',
      }),
    maxFailedIndexes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'maxFailedIndexes specifies the maximal number of failed indexes before marking the Job as failed, when backoffLimitPerIndex is set. Once the number of failed indexes exceeds this number the entire Job is marked as Failed and its execution is terminated. When left as null the job continues execution of all of its indexes and is marked with the `Complete` Job condition. It can only be specified when backoffLimitPerIndex is set. It can be null or up to completions. It is required and must be less than or equal to 10^4 when is completions greater than 10^5.',
      }),
    parallelism: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'parallelism specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/',
      }),
    podFailurePolicy: IoK8sApiBatchV1PodFailurePolicySchema.exactOptional().openapi({
      description:
        "podFailurePolicy specifies the policy of handling failed pods. In particular, it allows to specify the set of actions and conditions which need to be satisfied to take the associated action. If empty, the default behaviour applies - the counter of failed pods, represented by the jobs's .status.failed field, is incremented and it is checked against the backoffLimit. This field cannot be used in combination with restartPolicy=OnFailure.",
    }),
    podReplacementPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'podReplacementPolicy specifies when to create replacement Pods. Possible values are: - TerminatingOrFailed means that we recreate pods\n  when they are terminating (has a metadata.deletionTimestamp) or failed.\n- Failed means to wait until a previously created Pod is fully terminated (has phase\n  Failed or Succeeded) before creating a replacement Pod.\n\nWhen using podFailurePolicy, Failed is the the only allowed value. TerminatingOrFailed and Failed are allowed values when podFailurePolicy is not in use.',
      }),
    scheduling: IoK8sApiBatchV1JobSchedulingConfigurationSchema.exactOptional().openapi({
      description:
        'scheduling defines the Workload-aware Scheduling configuration for this Job. When set, it specifies the scheduling policy (basic or gang), topology constraints, disruption mode, and shared resource claims. When omitted, the Job defaults to the basic scheduling policy, which behaves as standard pod-by-pod scheduling. This field is alpha-level and requires the WorkloadWithJob feature gate. This field is immutable, including whether it is set at all, only policy.gang.minCount may be changed after creation.',
    }),
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'selector is a label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors',
    }),
    successPolicy: IoK8sApiBatchV1SuccessPolicySchema.exactOptional().openapi({
      description:
        'successPolicy specifies the policy when the Job can be declared as succeeded. If empty, the default behavior applies - the Job is declared as succeeded only when the number of succeeded pods equals to the completions. When the field is specified, it must be immutable and works only for the Indexed Jobs. Once the Job meets the SuccessPolicy, the lingering pods are terminated.',
    }),
    suspend: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'suspend specifies whether the Job controller should create Pods or not. If a Job is created with suspend set to true, no Pods are created by the Job controller. If a Job is suspended after creation (i.e. the flag goes from false to true), the Job controller will delete all active Pods associated with this Job. Users must design their workload to gracefully handle this. Suspending a Job will reset the StartTime field of the Job, effectively resetting the ActiveDeadlineSeconds timer too. Defaults to false.',
      }),
    template: IoK8sApiCoreV1PodTemplateSpecSchema.default({}).openapi({
      description:
        'template describes the pod that will be created when executing a job. The only allowed template.spec.restartPolicy values are "Never" or "OnFailure". More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/',
    }),
    ttlSecondsAfterFinished: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes.",
      }),
  })
  .openapi({
    description: 'JobSpec describes how the job execution will look like.',
    required: ['template'],
  })
  .openapi('IoK8sApiBatchV1JobSpec')

const IoK8sApiBatchV1JobTemplateSpecSchema = z
  .object({
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          "metadata is the standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
    spec: IoK8sApiBatchV1JobSpecSchema.default({}).openapi({
      description:
        'spec is the specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
    }),
  })
  .openapi({
    description:
      'JobTemplateSpec describes the data a Job should have when created from a template',
    required: ['spec'],
  })
  .openapi('IoK8sApiBatchV1JobTemplateSpec')

const IoK8sApiBatchV1CronJobSpecSchema = z
  .object({
    concurrencyPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'concurrencyPolicy specifies how to treat concurrent executions of a Job. Valid values are:\n\n- "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - "Replace": cancels currently running job and replaces it with a new one',
      }),
    failedJobsHistoryLimit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'failedJobsHistoryLimit is the number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1.',
      }),
    jobTemplate: IoK8sApiBatchV1JobTemplateSpecSchema.default({}).openapi({
      description: 'jobTemplate specifies the job that will be created when executing a CronJob.',
    }),
    schedule: z
      .string()
      .default('')
      .openapi({
        description:
          'schedule is the schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.',
      }),
    startingDeadlineSeconds: z
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
          'startingDeadlineSeconds is the optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.',
      }),
    successfulJobsHistoryLimit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'successfulJobsHistoryLimit is the number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3.',
      }),
    suspend: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'suspend is a flag that tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'timeZone is the time zone name for the given schedule, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. If not specified, this will default to the time zone of the kube-controller-manager process. The set of valid time zone names and the time zone offset is loaded from the system-wide time zone database by the API server during CronJob validation and the controller manager during execution. If no system-wide time zone database can be found a bundled version of the database is used instead. If the time zone name becomes invalid during the lifetime of a CronJob or due to a change in host configuration, the controller will stop creating new new Jobs and will create a system event with the reason UnknownTimeZone. More information can be found in https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones',
      }),
  })
  .openapi({
    description:
      'CronJobSpec describes how the job execution will look like and when it will actually run.',
    required: ['schedule', 'jobTemplate'],
  })
  .openapi('IoK8sApiBatchV1CronJobSpec')

const IoK8sApiCoreV1ObjectReferenceSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'apiVersion is API version of the referent.' }),
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fieldPath if referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'resourceVersion is the specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'uid of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids',
      }),
  })
  .openapi({
    description:
      'ObjectReference contains enough information to let you inspect or modify the referred object.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1ObjectReference')

const IoK8sApiBatchV1CronJobStatusSchema = z
  .object({
    active: z
      .array(IoK8sApiCoreV1ObjectReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'A list of pointers to currently running jobs.',
        'x-kubernetes-list-type': 'atomic',
      }),
    lastScheduleTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description: 'Information when was the last time the job was successfully scheduled.',
    }),
    lastSuccessfulTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description: 'Information when was the last time the job successfully completed.',
    }),
  })
  .openapi({
    description: 'CronJobStatus represents the current state of a cron job.',
    required: [],
  })
  .openapi('IoK8sApiBatchV1CronJobStatus')

const IoK8sApiBatchV1CronJobSchema = z
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
          "metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
    spec: IoK8sApiBatchV1CronJobSpecSchema.default({}).openapi({
      description:
        'spec is the specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
    }),
    status: IoK8sApiBatchV1CronJobStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is the current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description: 'CronJob represents the configuration of a single cron job.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [{ group: 'batch', kind: 'CronJob', version: 'v1' }],
  })
  .openapi('IoK8sApiBatchV1CronJob')

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

const IoK8sApiBatchV1CronJobListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiBatchV1CronJobSchema)
      .openapi({ description: 'items is the list of CronJobs.' }),
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
          'Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'CronJobList is a collection of cron jobs.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [{ group: 'batch', kind: 'CronJobList', version: 'v1' }],
  })
  .openapi('IoK8sApiBatchV1CronJobList')

const IoK8sApiBatchV1JobConditionSchema = z
  .object({
    lastProbeTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description: 'lastProbeTime is the last time the condition was checked.',
    }),
    lastTransitionTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'lastTransitionTime is the last time the condition transit from one status to another.',
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'message is human readable message indicating details about last transition.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: "reason is the brief reason for the condition's last transition." }),
    status: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description: 'status is the status of the condition, one of True, False, Unknown.',
      }),
    type: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'type is the type of job condition, Complete or Failed.' }),
  })
  .openapi({ description: 'JobCondition describes current state of a job.', required: [] })
  .openapi('IoK8sApiBatchV1JobCondition')

const IoK8sApiBatchV1UncountedTerminatedPodsSchema = z
  .object({
    failed: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'failed holds UIDs of failed Pods.',
        'x-kubernetes-list-type': 'set',
      }),
    succeeded: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'succeeded holds UIDs of succeeded Pods.',
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({
    description:
      "UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.",
    required: [],
  })
  .openapi('IoK8sApiBatchV1UncountedTerminatedPods')

const IoK8sApiBatchV1JobStatusSchema = z
  .object({
    active: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of pending and running pods which are not terminating (without a deletionTimestamp). The value is zero for finished jobs.',
      }),
    completedIndexes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'completedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7".',
      }),
    completionTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is set when the job finishes successfully, and only then. The value cannot be updated or removed. The value indicates the same or later point in time as the startTime field.',
    }),
    conditions: z
      .array(IoK8sApiBatchV1JobConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'The latest available observations of an object\'s current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true.\n\nA job is considered finished when it is in a terminal condition, either "Complete" or "Failed". A Job cannot have both the "Complete" and "Failed" conditions. Additionally, it cannot be in the "Complete" and "FailureTarget" conditions. The "Complete", "Failed" and "FailureTarget" conditions cannot be disabled.\n\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/',
        'x-kubernetes-list-type': 'atomic',
        'x-kubernetes-patch-merge-key': 'type',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    failed: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of pods which reached phase Failed. The value increases monotonically.',
      }),
    failedIndexes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FailedIndexes holds the failed indexes when spec.backoffLimitPerIndex is set. The indexes are represented in the text format analogous as for the `completedIndexes` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". The set of failed indexes cannot overlap with the set of completed indexes.',
      }),
    ready: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of active pods which have a Ready condition and are not terminating (without a deletionTimestamp).',
      }),
    startTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.\n\nOnce set, the field can only be removed when the job is suspended. The field cannot be modified while the job is unsuspended or finished.',
    }),
    succeeded: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of pods which reached phase Succeeded. The value increases monotonically for a given spec. However, it may decrease in reaction to scale down of elastic indexed jobs.',
      }),
    terminating: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).',
      }),
    uncountedTerminatedPods: IoK8sApiBatchV1UncountedTerminatedPodsSchema.exactOptional().openapi({
      description:
        "uncountedTerminatedPods holds the UIDs of Pods that have terminated but the job controller hasn't yet accounted for in the status counters.\n\nThe job controller creates pods with a finalizer. When a pod terminates (succeeded or failed), the controller does three steps to account for it in the job status:\n\n1. Add the pod UID to the arrays in this field. 2. Remove the pod finalizer. 3. Remove the pod UID from the arrays while increasing the corresponding\n    counter.\n\nOld jobs might not be tracked using this field, in which case the field remains null. The structure is empty for finished jobs.",
    }),
  })
  .openapi({ description: 'JobStatus represents the current state of a Job.', required: [] })
  .openapi('IoK8sApiBatchV1JobStatus')

const IoK8sApiBatchV1JobSchema = z
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
          "metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
    spec: IoK8sApiBatchV1JobSpecSchema.default({}).openapi({
      description:
        'spec is the specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
    }),
    status: IoK8sApiBatchV1JobStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is the current status of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description: 'Job represents the configuration of a single job.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [{ group: 'batch', kind: 'Job', version: 'v1' }],
  })
  .openapi('IoK8sApiBatchV1Job')

const IoK8sApiBatchV1JobListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z.array(IoK8sApiBatchV1JobSchema).openapi({ description: 'items is the list of Jobs.' }),
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
          'Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'JobList is a collection of jobs.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [{ group: 'batch', kind: 'JobList', version: 'v1' }],
  })
  .openapi('IoK8sApiBatchV1JobList')

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
      { group: 'batch', kind: 'DeleteOptions', version: 'v1' },
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
      { group: 'batch', kind: 'WatchEvent', version: 'v1' },
    ],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1WatchEvent')

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisBatchV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/',
  tags: ['batch_v1'],
  description: 'get available resources',
  operationId: 'getBatchV1APIResources',
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

export const getApisBatchV1CronjobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/cronjobs',
  tags: ['batch_v1'],
  description: 'list or watch objects of kind CronJob',
  operationId: 'listBatchV1CronJobForAllNamespaces',
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/cbor-seq': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/json;stream=watch': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiBatchV1CronJobListSchema,
        },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1JobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/jobs',
  tags: ['batch_v1'],
  description: 'list or watch objects of kind Job',
  operationId: 'listBatchV1JobForAllNamespaces',
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
        'application/cbor': { schema: IoK8sApiBatchV1JobListSchema },
        'application/cbor-seq': { schema: IoK8sApiBatchV1JobListSchema },
        'application/json': { schema: IoK8sApiBatchV1JobListSchema },
        'application/json;stream=watch': { schema: IoK8sApiBatchV1JobListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiBatchV1JobListSchema,
        },
        'application/yaml': { schema: IoK8sApiBatchV1JobListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1NamespacesNamespaceCronjobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs',
  tags: ['batch_v1'],
  description: 'list or watch objects of kind CronJob',
  operationId: 'listBatchV1NamespacedCronJob',
  request: {
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/cbor-seq': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/json;stream=watch': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiBatchV1CronJobListSchema,
        },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisBatchV1NamespacesNamespaceCronjobsRoute = createRoute({
  method: 'post',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs',
  tags: ['batch_v1'],
  description: 'create a CronJob',
  operationId: 'createBatchV1NamespacedCronJob',
  request: {
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1CronJobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisBatchV1NamespacesNamespaceCronjobsRoute = createRoute({
  method: 'delete',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs',
  tags: ['batch_v1'],
  description: 'delete collection of CronJob',
  operationId: 'deleteBatchV1CollectionNamespacedCronJob',
  request: {
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

export const getApisBatchV1NamespacesNamespaceCronjobsNameRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}',
  tags: ['batch_v1'],
  description: 'read the specified CronJob',
  operationId: 'readBatchV1NamespacedCronJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisBatchV1NamespacesNamespaceCronjobsNameRoute = createRoute({
  method: 'put',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}',
  tags: ['batch_v1'],
  description: 'replace the specified CronJob',
  operationId: 'replaceBatchV1NamespacedCronJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1CronJobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisBatchV1NamespacesNamespaceCronjobsNameRoute = createRoute({
  method: 'delete',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}',
  tags: ['batch_v1'],
  description: 'delete a CronJob',
  operationId: 'deleteBatchV1NamespacedCronJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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

export const patchApisBatchV1NamespacesNamespaceCronjobsNameRoute = createRoute({
  method: 'patch',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}',
  tags: ['batch_v1'],
  description: 'partially update the specified CronJob',
  operationId: 'patchBatchV1NamespacedCronJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status',
  tags: ['batch_v1'],
  description: 'read status of the specified CronJob',
  operationId: 'readBatchV1NamespacedCronJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status',
  tags: ['batch_v1'],
  description: 'replace status of the specified CronJob',
  operationId: 'replaceBatchV1NamespacedCronJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1CronJobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status',
  tags: ['batch_v1'],
  description: 'partially update status of the specified CronJob',
  operationId: 'patchBatchV1NamespacedCronJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/json': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1CronJobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1CronJobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1NamespacesNamespaceJobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs',
  tags: ['batch_v1'],
  description: 'list or watch objects of kind Job',
  operationId: 'listBatchV1NamespacedJob',
  request: {
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
        'application/cbor': { schema: IoK8sApiBatchV1JobListSchema },
        'application/cbor-seq': { schema: IoK8sApiBatchV1JobListSchema },
        'application/json': { schema: IoK8sApiBatchV1JobListSchema },
        'application/json;stream=watch': { schema: IoK8sApiBatchV1JobListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiBatchV1JobListSchema,
        },
        'application/yaml': { schema: IoK8sApiBatchV1JobListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisBatchV1NamespacesNamespaceJobsRoute = createRoute({
  method: 'post',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs',
  tags: ['batch_v1'],
  description: 'create a Job',
  operationId: 'createBatchV1NamespacedJob',
  request: {
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1JobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisBatchV1NamespacesNamespaceJobsRoute = createRoute({
  method: 'delete',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs',
  tags: ['batch_v1'],
  description: 'delete collection of Job',
  operationId: 'deleteBatchV1CollectionNamespacedJob',
  request: {
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

export const getApisBatchV1NamespacesNamespaceJobsNameRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}',
  tags: ['batch_v1'],
  description: 'read the specified Job',
  operationId: 'readBatchV1NamespacedJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisBatchV1NamespacesNamespaceJobsNameRoute = createRoute({
  method: 'put',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}',
  tags: ['batch_v1'],
  description: 'replace the specified Job',
  operationId: 'replaceBatchV1NamespacedJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1JobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisBatchV1NamespacesNamespaceJobsNameRoute = createRoute({
  method: 'delete',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}',
  tags: ['batch_v1'],
  description: 'delete a Job',
  operationId: 'deleteBatchV1NamespacedJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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

export const patchApisBatchV1NamespacesNamespaceJobsNameRoute = createRoute({
  method: 'patch',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}',
  tags: ['batch_v1'],
  description: 'partially update the specified Job',
  operationId: 'patchBatchV1NamespacedJob',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1NamespacesNamespaceJobsNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status',
  tags: ['batch_v1'],
  description: 'read status of the specified Job',
  operationId: 'readBatchV1NamespacedJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisBatchV1NamespacesNamespaceJobsNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status',
  tags: ['batch_v1'],
  description: 'replace status of the specified Job',
  operationId: 'replaceBatchV1NamespacedJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
    body: { content: { '*/*': { schema: IoK8sApiBatchV1JobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisBatchV1NamespacesNamespaceJobsNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status',
  tags: ['batch_v1'],
  description: 'partially update status of the specified Job',
  operationId: 'patchBatchV1NamespacedJobStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiBatchV1JobSchema },
        'application/json': { schema: IoK8sApiBatchV1JobSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiBatchV1JobSchema },
        'application/yaml': { schema: IoK8sApiBatchV1JobSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisBatchV1WatchCronjobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/cronjobs',
  tags: ['batch_v1'],
  description:
    "watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchBatchV1CronJobListForAllNamespaces',
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

export const getApisBatchV1WatchJobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/jobs',
  tags: ['batch_v1'],
  description:
    "watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchBatchV1JobListForAllNamespaces',
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

export const getApisBatchV1WatchNamespacesNamespaceCronjobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/namespaces/{namespace}/cronjobs',
  tags: ['batch_v1'],
  description:
    "watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchBatchV1NamespacedCronJobList',
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

export const getApisBatchV1WatchNamespacesNamespaceCronjobsNameRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}',
  tags: ['batch_v1'],
  description:
    "watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchBatchV1NamespacedCronJob',
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
            description: 'name of the CronJob',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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

export const getApisBatchV1WatchNamespacesNamespaceJobsRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/namespaces/{namespace}/jobs',
  tags: ['batch_v1'],
  description:
    "watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchBatchV1NamespacedJobList',
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

export const getApisBatchV1WatchNamespacesNamespaceJobsNameRoute = createRoute({
  method: 'get',
  path: '/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}',
  tags: ['batch_v1'],
  description:
    "watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchBatchV1NamespacedJob',
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
            description: 'name of the Job',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
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
