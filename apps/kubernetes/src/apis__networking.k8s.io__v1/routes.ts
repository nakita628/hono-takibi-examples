import { createRoute, z } from '@hono/zod-openapi'

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

const IoK8sApiNetworkingV1ServiceBackendPortSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name is the name of the port on the Service. This is a mutually exclusive setting with "Number".',
      }),
    number: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".',
      }),
  })
  .openapi({
    description: 'ServiceBackendPort is the service port being referenced.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1ServiceBackendPort')

const IoK8sApiNetworkingV1IngressServiceBackendSchema = z
  .object({
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name is the referenced service. The service must exist in the same namespace as the Ingress object.',
      }),
    port: IoK8sApiNetworkingV1ServiceBackendPortSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'port of the referenced service. A port name or port number is required for a IngressServiceBackend.',
      }),
  })
  .openapi({
    description: 'IngressServiceBackend references a Kubernetes Service as a Backend.',
    required: ['name'],
  })
  .openapi('IoK8sApiNetworkingV1IngressServiceBackend')

const IoK8sApiNetworkingV1IngressBackendSchema = z
  .object({
    resource: IoK8sApiCoreV1TypedLocalObjectReferenceSchema.exactOptional().openapi({
      description:
        'resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".',
    }),
    service: IoK8sApiNetworkingV1IngressServiceBackendSchema.exactOptional().openapi({
      description:
        'service references a service as a backend. This is a mutually exclusive setting with "Resource".',
    }),
  })
  .openapi({
    description: 'IngressBackend describes all endpoints for a given service and port.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressBackend')

const IoK8sApiNetworkingV1HTTPIngressPathSchema = z
  .object({
    backend: IoK8sApiNetworkingV1IngressBackendSchema.default({}).openapi({
      description:
        'backend defines the referenced service endpoint to which the traffic will be forwarded to.',
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a \'/\' and must be present when using PathType with value "Exact" or "Prefix".',
      }),
    pathType: z
      .string()
      .openapi({
        description:
          "pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is\n  done on a path element by element basis. A path element refers is the\n  list of labels in the path split by the '/' separator. A request is a\n  match for path p if every p is an element-wise prefix of p of the\n  request path. Note that if the last element of the path is a substring\n  of the last element in request path, it is not a match (e.g. /foo/bar\n  matches /foo/bar/baz, but does not match /foo/barbaz).\n* ImplementationSpecific: Interpretation of the Path matching is up to\n  the IngressClass. Implementations can treat this as a separate PathType\n  or treat it identically to Prefix or Exact path types.\nImplementations are required to support all path types.",
      }),
  })
  .openapi({
    description:
      'HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.',
    required: ['pathType', 'backend'],
  })
  .openapi('IoK8sApiNetworkingV1HTTPIngressPath')

const IoK8sApiNetworkingV1HTTPIngressRuleValueSchema = z
  .object({
    paths: z
      .array(IoK8sApiNetworkingV1HTTPIngressPathSchema)
      .openapi({
        description: 'paths is a collection of paths that map requests to backends.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      "HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.",
    required: ['paths'],
  })
  .openapi('IoK8sApiNetworkingV1HTTPIngressRuleValue')

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

const IoK8sApiNetworkingV1ParentReferenceSchema = z
  .object({
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'group is the group of the object being referenced.' }),
    name: z.string().openapi({ description: 'name is the name of the object being referenced.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'namespace is the namespace of the object being referenced.' }),
    resource: z
      .string()
      .openapi({ description: 'resource is the resource of the object being referenced.' }),
  })
  .openapi({
    description: 'ParentReference describes a reference to a parent object.',
    required: ['resource', 'name'],
  })
  .openapi('IoK8sApiNetworkingV1ParentReference')

const IoK8sApiNetworkingV1IPAddressSpecSchema = z
  .object({
    parentRef: IoK8sApiNetworkingV1ParentReferenceSchema.openapi({
      description:
        'parentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.',
    }),
  })
  .openapi({
    description: 'IPAddressSpec describe the attributes in an IP Address.',
    required: ['parentRef'],
  })
  .openapi('IoK8sApiNetworkingV1IPAddressSpec')

const IoK8sApiNetworkingV1IPAddressSchema = z
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
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiNetworkingV1IPAddressSpecSchema.default({}).openapi({
      description:
        'spec is the desired state of the IPAddress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
    }),
  })
  .openapi({
    description:
      'IPAddress represents a single IP of a single IP Family. The object is designed to be used by APIs that operate on IP addresses. The object is used by the Service core API for allocation of IP addresses. An IP address can be represented in different formats, to guarantee the uniqueness of the IP, the name of the object is the IP address in canonical format, four decimal digits separated by dots suppressing leading zeros for IPv4 and the representation defined by RFC 5952 for IPv6. Valid: 192.168.1.5 or 2001:db8::1 or 2001:db8:aaaa:bbbb:cccc:dddd:eeee:1 Invalid: 10.01.2.3 or 2001:db8:0:0:0::1',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'IPAddress', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1IPAddress')

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

const IoK8sApiNetworkingV1IPAddressListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiNetworkingV1IPAddressSchema)
      .openapi({ description: 'items is the list of IPAddresses.' }),
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
          "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
  })
  .openapi({
    description: 'IPAddressList contains a list of IPAddress.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'IPAddressList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1IPAddressList')

const IoK8sApiNetworkingV1IPBlockSchema = z
  .object({
    cidr: z
      .string()
      .default('')
      .openapi({
        description:
          'cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64"',
      }),
    except: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'IPBlock describes a particular CIDR (Ex. "192.168.1.0/24","2001:db8::/64") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.',
    required: ['cidr'],
  })
  .openapi('IoK8sApiNetworkingV1IPBlock')

const IoK8sApiNetworkingV1IngressRuleSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to\n   the IP in the Spec of the parent Ingress.\n2. The `:` delimiter is not respected because ports are not allowed.\n\t  Currently the port of an Ingress is implicitly :80 for http and\n\t  :443 for https.\nBoth these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.\n\nhost can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character \'*\' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If host is precise, the request matches this rule if the http host header is equal to Host. 2. If host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.',
      }),
    http: IoK8sApiNetworkingV1HTTPIngressRuleValueSchema.exactOptional().openapi({
      description: 'http is a HTTP IngressRuleValue, which contains a list of http selectors',
    }),
  })
  .openapi({
    description:
      'IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressRule')

const IoK8sApiNetworkingV1IngressTLSSchema = z
  .object({
    hosts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.',
        'x-kubernetes-list-type': 'atomic',
      }),
    secretName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the "Host" header is used for routing.',
      }),
  })
  .openapi({
    description: 'IngressTLS describes the transport layer security associated with an ingress.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressTLS')

const IoK8sApiNetworkingV1IngressSpecSchema = z
  .object({
    defaultBackend: IoK8sApiNetworkingV1IngressBackendSchema.exactOptional().openapi({
      description:
        "defaultBackend is the backend that should handle requests that don't match any rule. If Rules are not specified, DefaultBackend must be specified. If DefaultBackend is not set, the handling of requests that do not match any of the rules will be up to the Ingress controller.",
    }),
    ingressClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.',
      }),
    rules: z
      .array(IoK8sApiNetworkingV1IngressRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.',
        'x-kubernetes-list-type': 'atomic',
      }),
    tls: z
      .array(IoK8sApiNetworkingV1IngressTLSSchema)
      .exactOptional()
      .openapi({
        description:
          'tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'IngressSpec describes the Ingress the user wishes to exist.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressSpec')

const IoK8sApiNetworkingV1IngressPortStatusSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use\n  CamelCase names\n- cloud provider specific error values must have names that comply with the\n  format foo.example.com/CamelCase.',
      }),
    port: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'port is the port number of the ingress port.' }),
    protocol: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"',
      }),
  })
  .openapi({
    description: 'IngressPortStatus represents the error condition of a service port',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressPortStatus')

const IoK8sApiNetworkingV1IngressLoadBalancerIngressSchema = z
  .object({
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description: 'hostname is set for load-balancer ingress points that are DNS based.',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({ description: 'ip is set for load-balancer ingress points that are IP based.' }),
    ports: z
      .array(IoK8sApiNetworkingV1IngressPortStatusSchema)
      .exactOptional()
      .openapi({
        description: 'ports provides information about the ports exposed by this LoadBalancer.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'IngressLoadBalancerIngress represents the status of a load-balancer ingress point.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressLoadBalancerIngress')

const IoK8sApiNetworkingV1IngressLoadBalancerStatusSchema = z
  .object({
    ingress: z
      .array(IoK8sApiNetworkingV1IngressLoadBalancerIngressSchema)
      .exactOptional()
      .openapi({
        description: 'ingress is a list containing ingress points for the load-balancer.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'IngressLoadBalancerStatus represents the status of a load-balancer.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressLoadBalancerStatus')

const IoK8sApiNetworkingV1IngressStatusSchema = z
  .object({
    loadBalancer: IoK8sApiNetworkingV1IngressLoadBalancerStatusSchema.default({})
      .exactOptional()
      .openapi({ description: 'loadBalancer contains the current status of the load-balancer.' }),
  })
  .openapi({
    description: 'IngressStatus describe the current state of the Ingress.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1IngressStatus')

const IoK8sApiNetworkingV1IngressSchema = z
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
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiNetworkingV1IngressSpecSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
    status: IoK8sApiNetworkingV1IngressStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description:
      'Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.',
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'Ingress', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1Ingress')

const IoK8sApiNetworkingV1IngressClassParametersReferenceSchema = z
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
      .openapi({ description: 'kind is the type of resource being referenced.' }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the name of resource being referenced.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace".',
      }),
  })
  .openapi({
    description:
      'IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.',
    required: ['kind', 'name'],
  })
  .openapi('IoK8sApiNetworkingV1IngressClassParametersReference')

const IoK8sApiNetworkingV1IngressClassSpecSchema = z
  .object({
    controller: z
      .string()
      .openapi({
        description:
          'controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.',
      }),
    parameters: IoK8sApiNetworkingV1IngressClassParametersReferenceSchema.exactOptional().openapi({
      description:
        'parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.',
    }),
  })
  .openapi({
    description: 'IngressClassSpec provides information about the class of an Ingress.',
    required: ['controller'],
  })
  .openapi('IoK8sApiNetworkingV1IngressClassSpec')

const IoK8sApiNetworkingV1IngressClassSchema = z
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
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiNetworkingV1IngressClassSpecSchema.default({}).openapi({
      description:
        'spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
    }),
  })
  .openapi({
    description:
      'IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'IngressClass', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1IngressClass')

const IoK8sApiNetworkingV1IngressClassListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiNetworkingV1IngressClassSchema)
      .openapi({ description: 'items is the list of IngressClasses.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({ description: 'Standard list metadata.' }),
  })
  .openapi({
    description: 'IngressClassList is a collection of IngressClasses.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'IngressClassList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1IngressClassList')

const IoK8sApiNetworkingV1IngressListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiNetworkingV1IngressSchema)
      .openapi({ description: 'items is the list of Ingress.' }),
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
          "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
  })
  .openapi({
    description: 'IngressList is a collection of Ingress.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'IngressList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1IngressList')

const IoK8sApimachineryPkgUtilIntstrIntOrStringSchema = z
  .xor([z.int(), z.string()])
  .openapi({
    description:
      'IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.',
  })
  .openapi('IoK8sApimachineryPkgUtilIntstrIntOrString')

const IoK8sApiNetworkingV1NetworkPolicyPortSchema = z
  .object({
    endPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.',
      }),
    port: IoK8sApimachineryPkgUtilIntstrIntOrStringSchema.exactOptional().openapi({
      description:
        'port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.',
    }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.',
      }),
  })
  .openapi({ description: 'NetworkPolicyPort describes a port to allow traffic on', required: [] })
  .openapi('IoK8sApiNetworkingV1NetworkPolicyPort')

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

const IoK8sApiNetworkingV1NetworkPolicyPeerSchema = z
  .object({
    ipBlock: IoK8sApiNetworkingV1IPBlockSchema.exactOptional().openapi({
      description:
        'ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.',
    }),
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.\n\nIf podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.',
    }),
    podSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        "podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods.\n\nIf namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.",
    }),
  })
  .openapi({
    description:
      'NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicyPeer')

const IoK8sApiNetworkingV1NetworkPolicyEgressRuleSchema = z
  .object({
    ports: z
      .array(IoK8sApiNetworkingV1NetworkPolicyPortSchema)
      .exactOptional()
      .openapi({
        description:
          'ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.',
        'x-kubernetes-list-type': 'atomic',
      }),
    to: z
      .array(IoK8sApiNetworkingV1NetworkPolicyPeerSchema)
      .exactOptional()
      .openapi({
        description:
          'to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      "NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8",
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicyEgressRule')

const IoK8sApiNetworkingV1NetworkPolicyIngressRuleSchema = z
  .object({
    from: z
      .array(IoK8sApiNetworkingV1NetworkPolicyPeerSchema)
      .exactOptional()
      .openapi({
        description:
          'from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.',
        'x-kubernetes-list-type': 'atomic',
      }),
    ports: z
      .array(IoK8sApiNetworkingV1NetworkPolicyPortSchema)
      .exactOptional()
      .openapi({
        description:
          'ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      "NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.",
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicyIngressRule')

const IoK8sApiNetworkingV1NetworkPolicySpecSchema = z
  .object({
    egress: z
      .array(IoK8sApiNetworkingV1NetworkPolicyEgressRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8',
        'x-kubernetes-list-type': 'atomic',
      }),
    ingress: z
      .array(IoK8sApiNetworkingV1NetworkPolicyIngressRuleSchema)
      .exactOptional()
      .openapi({
        description:
          "ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)",
        'x-kubernetes-list-type': 'atomic',
      }),
    podSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.default({})
      .exactOptional()
      .openapi({
        description:
          "podSelector selects the pods to which this NetworkPolicy object applies. The array of rules is applied to any pods selected by this field. An empty selector matches all pods in the policy's namespace. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is optional. If it is not specified, it defaults to an empty selector.",
      }),
    policyTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description: 'NetworkPolicySpec provides the specification of a NetworkPolicy',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicySpec')

const IoK8sApiNetworkingV1NetworkPolicySchema = z
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
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiNetworkingV1NetworkPolicySpecSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'spec represents the specification of the desired behavior for this NetworkPolicy.',
      }),
  })
  .openapi({
    description: 'NetworkPolicy describes what network traffic is allowed for a set of Pods',
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'NetworkPolicy', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicy')

const IoK8sApiNetworkingV1NetworkPolicyListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiNetworkingV1NetworkPolicySchema)
      .openapi({ description: 'items is a list of schema objects.' }),
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
    description: 'NetworkPolicyList is a list of NetworkPolicy objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'NetworkPolicyList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1NetworkPolicyList')

const IoK8sApiNetworkingV1ServiceCIDRSpecSchema = z
  .object({
    cidrs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'cidrs defines the IP blocks in CIDR notation (e.g. "192.168.0.0/24" or "2001:db8::/64") from which to assign service cluster IPs. Max of two CIDRs is allowed, one of each IP family. This field is immutable.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'ServiceCIDRSpec define the CIDRs the user wants to use for allocating ClusterIPs for Services.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1ServiceCIDRSpec')

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

const IoK8sApiNetworkingV1ServiceCIDRStatusSchema = z
  .object({
    conditions: z
      .array(IoK8sApimachineryPkgApisMetaV1ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state',
        'x-kubernetes-list-map-keys': ['type'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'type',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description: 'ServiceCIDRStatus describes the current state of the ServiceCIDR.',
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1ServiceCIDRStatus')

const IoK8sApiNetworkingV1ServiceCIDRSchema = z
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
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiNetworkingV1ServiceCIDRSpecSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'spec is the desired state of the ServiceCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
    status: IoK8sApiNetworkingV1ServiceCIDRStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status represents the current state of the ServiceCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description:
      'ServiceCIDR defines a range of IP addresses using CIDR format (e.g. 192.168.0.0/24 or 2001:db2::/64). This range is used to allocate ClusterIPs to Service objects.',
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'ServiceCIDR', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiNetworkingV1ServiceCIDR')

const IoK8sApiNetworkingV1ServiceCIDRListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiNetworkingV1ServiceCIDRSchema)
      .openapi({ description: 'items is the list of ServiceCIDRs.' }),
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
          "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
      }),
  })
  .openapi({
    description: 'ServiceCIDRList contains a list of ServiceCIDR objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'networking.k8s.io', kind: 'ServiceCIDRList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiNetworkingV1ServiceCIDRList')

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
      { group: 'networking.k8s.io', kind: 'DeleteOptions', version: 'v1' },
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
      { group: 'networking.k8s.io', kind: 'WatchEvent', version: 'v1' },
    ],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1WatchEvent')

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisNetworkingK8sIoV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/',
  tags: ['networking_v1'],
  description: 'get available resources',
  operationId: 'getNetworkingV1APIResources',
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

export const getApisNetworkingK8sIoV1IngressclassesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/ingressclasses',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind IngressClass',
  operationId: 'listNetworkingV1IngressClass',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1IngressClassListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1IngressClassListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiNetworkingV1IngressClassListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1IngressClassListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisNetworkingK8sIoV1IngressclassesRoute = createRoute({
  method: 'post',
  path: '/apis/networking.k8s.io/v1/ingressclasses',
  tags: ['networking_v1'],
  description: 'create an IngressClass',
  operationId: 'createNetworkingV1IngressClass',
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
      content: { '*/*': { schema: IoK8sApiNetworkingV1IngressClassSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1IngressclassesRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/ingressclasses',
  tags: ['networking_v1'],
  description: 'delete collection of IngressClass',
  operationId: 'deleteNetworkingV1CollectionIngressClass',
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

export const getApisNetworkingK8sIoV1IngressclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
  tags: ['networking_v1'],
  description: 'read the specified IngressClass',
  operationId: 'readNetworkingV1IngressClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IngressClass',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1IngressclassesNameRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
  tags: ['networking_v1'],
  description: 'replace the specified IngressClass',
  operationId: 'replaceNetworkingV1IngressClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IngressClass',
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
      content: { '*/*': { schema: IoK8sApiNetworkingV1IngressClassSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1IngressclassesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
  tags: ['networking_v1'],
  description: 'delete an IngressClass',
  operationId: 'deleteNetworkingV1IngressClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IngressClass',
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

export const patchApisNetworkingK8sIoV1IngressclassesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
  tags: ['networking_v1'],
  description: 'partially update the specified IngressClass',
  operationId: 'patchNetworkingV1IngressClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IngressClass',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressClassSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1IngressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/ingresses',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind Ingress',
  operationId: 'listNetworkingV1IngressForAllNamespaces',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1IngressListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1IpaddressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/ipaddresses',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind IPAddress',
  operationId: 'listNetworkingV1IPAddress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1IPAddressListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisNetworkingK8sIoV1IpaddressesRoute = createRoute({
  method: 'post',
  path: '/apis/networking.k8s.io/v1/ipaddresses',
  tags: ['networking_v1'],
  description: 'create an IPAddress',
  operationId: 'createNetworkingV1IPAddress',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1IPAddressSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1IpaddressesRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/ipaddresses',
  tags: ['networking_v1'],
  description: 'delete collection of IPAddress',
  operationId: 'deleteNetworkingV1CollectionIPAddress',
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

export const getApisNetworkingK8sIoV1IpaddressesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/ipaddresses/{name}',
  tags: ['networking_v1'],
  description: 'read the specified IPAddress',
  operationId: 'readNetworkingV1IPAddress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IPAddress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1IpaddressesNameRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/ipaddresses/{name}',
  tags: ['networking_v1'],
  description: 'replace the specified IPAddress',
  operationId: 'replaceNetworkingV1IPAddress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IPAddress',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1IPAddressSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1IpaddressesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/ipaddresses/{name}',
  tags: ['networking_v1'],
  description: 'delete an IPAddress',
  operationId: 'deleteNetworkingV1IPAddress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IPAddress',
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

export const patchApisNetworkingK8sIoV1IpaddressesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/ipaddresses/{name}',
  tags: ['networking_v1'],
  description: 'partially update the specified IPAddress',
  operationId: 'patchNetworkingV1IPAddress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the IPAddress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IPAddressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IPAddressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind Ingress',
  operationId: 'listNetworkingV1NamespacedIngress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1IngressListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute = createRoute({
  method: 'post',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
  tags: ['networking_v1'],
  description: 'create an Ingress',
  operationId: 'createNetworkingV1NamespacedIngress',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1IngressSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
  tags: ['networking_v1'],
  description: 'delete collection of Ingress',
  operationId: 'deleteNetworkingV1CollectionNamespacedIngress',
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

export const getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
  tags: ['networking_v1'],
  description: 'read the specified Ingress',
  operationId: 'readNetworkingV1NamespacedIngress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
  tags: ['networking_v1'],
  description: 'replace the specified Ingress',
  operationId: 'replaceNetworkingV1NamespacedIngress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1IngressSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
  tags: ['networking_v1'],
  description: 'delete an Ingress',
  operationId: 'deleteNetworkingV1NamespacedIngress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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

export const patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
  tags: ['networking_v1'],
  description: 'partially update the specified Ingress',
  operationId: 'patchNetworkingV1NamespacedIngress',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
  tags: ['networking_v1'],
  description: 'read status of the specified Ingress',
  operationId: 'readNetworkingV1NamespacedIngressStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
  tags: ['networking_v1'],
  description: 'replace status of the specified Ingress',
  operationId: 'replaceNetworkingV1NamespacedIngressStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1IngressSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
  tags: ['networking_v1'],
  description: 'partially update status of the specified Ingress',
  operationId: 'patchNetworkingV1NamespacedIngressStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the Ingress',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/json': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1IngressSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1IngressSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind NetworkPolicy',
  operationId: 'listNetworkingV1NamespacedNetworkPolicy',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiNetworkingV1NetworkPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1NetworkPolicyListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute = createRoute({
  method: 'post',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
  tags: ['networking_v1'],
  description: 'create a NetworkPolicy',
  operationId: 'createNetworkingV1NamespacedNetworkPolicy',
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
    body: {
      content: { '*/*': { schema: IoK8sApiNetworkingV1NetworkPolicySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
  tags: ['networking_v1'],
  description: 'delete collection of NetworkPolicy',
  operationId: 'deleteNetworkingV1CollectionNamespacedNetworkPolicy',
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

export const getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
  tags: ['networking_v1'],
  description: 'read the specified NetworkPolicy',
  operationId: 'readNetworkingV1NamespacedNetworkPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the NetworkPolicy',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
  tags: ['networking_v1'],
  description: 'replace the specified NetworkPolicy',
  operationId: 'replaceNetworkingV1NamespacedNetworkPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the NetworkPolicy',
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
    body: {
      content: { '*/*': { schema: IoK8sApiNetworkingV1NetworkPolicySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
  tags: ['networking_v1'],
  description: 'delete a NetworkPolicy',
  operationId: 'deleteNetworkingV1NamespacedNetworkPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the NetworkPolicy',
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

export const patchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
  tags: ['networking_v1'],
  description: 'partially update the specified NetworkPolicy',
  operationId: 'patchNetworkingV1NamespacedNetworkPolicy',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the NetworkPolicy',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1NetworkpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/networkpolicies',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind NetworkPolicy',
  operationId: 'listNetworkingV1NetworkPolicyForAllNamespaces',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiNetworkingV1NetworkPolicyListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1NetworkPolicyListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1NetworkPolicyListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1ServicecidrsRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/servicecidrs',
  tags: ['networking_v1'],
  description: 'list or watch objects of kind ServiceCIDR',
  operationId: 'listNetworkingV1ServiceCIDR',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRListSchema },
        'application/cbor-seq': { schema: IoK8sApiNetworkingV1ServiceCIDRListSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRListSchema },
        'application/json;stream=watch': { schema: IoK8sApiNetworkingV1ServiceCIDRListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiNetworkingV1ServiceCIDRListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiNetworkingV1ServiceCIDRListSchema,
        },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisNetworkingK8sIoV1ServicecidrsRoute = createRoute({
  method: 'post',
  path: '/apis/networking.k8s.io/v1/servicecidrs',
  tags: ['networking_v1'],
  description: 'create a ServiceCIDR',
  operationId: 'createNetworkingV1ServiceCIDR',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1ServicecidrsRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/servicecidrs',
  tags: ['networking_v1'],
  description: 'delete collection of ServiceCIDR',
  operationId: 'deleteNetworkingV1CollectionServiceCIDR',
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

export const getApisNetworkingK8sIoV1ServicecidrsNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}',
  tags: ['networking_v1'],
  description: 'read the specified ServiceCIDR',
  operationId: 'readNetworkingV1ServiceCIDR',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1ServicecidrsNameRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}',
  tags: ['networking_v1'],
  description: 'replace the specified ServiceCIDR',
  operationId: 'replaceNetworkingV1ServiceCIDR',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisNetworkingK8sIoV1ServicecidrsNameRoute = createRoute({
  method: 'delete',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}',
  tags: ['networking_v1'],
  description: 'delete a ServiceCIDR',
  operationId: 'deleteNetworkingV1ServiceCIDR',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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

export const patchApisNetworkingK8sIoV1ServicecidrsNameRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}',
  tags: ['networking_v1'],
  description: 'partially update the specified ServiceCIDR',
  operationId: 'patchNetworkingV1ServiceCIDR',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1ServicecidrsNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}/status',
  tags: ['networking_v1'],
  description: 'read status of the specified ServiceCIDR',
  operationId: 'readNetworkingV1ServiceCIDRStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisNetworkingK8sIoV1ServicecidrsNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}/status',
  tags: ['networking_v1'],
  description: 'replace status of the specified ServiceCIDR',
  operationId: 'replaceNetworkingV1ServiceCIDRStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
    body: { content: { '*/*': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisNetworkingK8sIoV1ServicecidrsNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/networking.k8s.io/v1/servicecidrs/{name}/status',
  tags: ['networking_v1'],
  description: 'partially update status of the specified ServiceCIDR',
  operationId: 'patchNetworkingV1ServiceCIDRStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the ServiceCIDR',
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
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/json': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
        'application/yaml': { schema: IoK8sApiNetworkingV1ServiceCIDRSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisNetworkingK8sIoV1WatchIngressclassesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/ingressclasses',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1IngressClassList',
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

export const getApisNetworkingK8sIoV1WatchIngressclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/ingressclasses/{name}',
  tags: ['networking_v1'],
  description:
    "watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchNetworkingV1IngressClass',
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
            description: 'name of the IngressClass',
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

export const getApisNetworkingK8sIoV1WatchIngressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/ingresses',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1IngressListForAllNamespaces',
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

export const getApisNetworkingK8sIoV1WatchIpaddressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/ipaddresses',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of IPAddress. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1IPAddressList',
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

export const getApisNetworkingK8sIoV1WatchIpaddressesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/ipaddresses/{name}',
  tags: ['networking_v1'],
  description:
    "watch changes to an object of kind IPAddress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchNetworkingV1IPAddress',
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
            description: 'name of the IPAddress',
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

export const getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1NamespacedIngressList',
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

export const getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}',
  tags: ['networking_v1'],
  description:
    "watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchNetworkingV1NamespacedIngress',
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
            description: 'name of the Ingress',
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

export const getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1NamespacedNetworkPolicyList',
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

export const getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameRoute = createRoute(
  {
    method: 'get',
    path: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}',
    tags: ['networking_v1'],
    description:
      "watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchNetworkingV1NamespacedNetworkPolicy',
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
              description: 'name of the NetworkPolicy',
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

export const getApisNetworkingK8sIoV1WatchNetworkpoliciesRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/networkpolicies',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1NetworkPolicyListForAllNamespaces',
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

export const getApisNetworkingK8sIoV1WatchServicecidrsRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/servicecidrs',
  tags: ['networking_v1'],
  description:
    "watch individual changes to a list of ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchNetworkingV1ServiceCIDRList',
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

export const getApisNetworkingK8sIoV1WatchServicecidrsNameRoute = createRoute({
  method: 'get',
  path: '/apis/networking.k8s.io/v1/watch/servicecidrs/{name}',
  tags: ['networking_v1'],
  description:
    "watch changes to an object of kind ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchNetworkingV1ServiceCIDR',
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
            description: 'name of the ServiceCIDR',
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
