<h1 id="kubernetes">Kubernetes vunversioned</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (BearerToken)
    - Parameter Name: **authorization**, in: header. Bearer Token authentication

<h1 id="kubernetes-apiextensionsv1">apiextensions_v1</h1>

## getApiextensionsV1APIResources

<a id="opIdgetApiextensionsV1APIResources"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/ \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/`

get available resources

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "groupVersion": "",
  "kind": "string",
  "resources": [
    {
      "categories": [
        "string"
      ],
      "group": "string",
      "kind": "",
      "name": "",
      "namespaced": false,
      "shortNames": [
        "string"
      ],
      "singularName": "",
      "storageVersionHash": "string",
      "verbs": [
        "string"
      ],
      "version": "string"
    }
  ]
}
```

<h3 id="getapiextensionsv1apiresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listApiextensionsV1CustomResourceDefinition

<a id="opIdlistApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions`

list or watch objects of kind CustomResourceDefinition

<h3 id="listapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|resourceVersion|query|string|false|resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|resourceVersionMatch|query|string|false|resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|sendInitialEvents|query|boolean|false|`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.<br><br>When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan<br>  is interpreted as "data at least as new as the provided `resourceVersion`"<br>  and the bookmark event is send when the state is synced<br>  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.<br>  If `resourceVersion` is unset, this is interpreted as "consistent read" and the<br>  bookmark event is send when the state is synced at least to the moment<br>  when request started being processed.<br>- `resourceVersionMatch` set to any other value or unset<br>  Invalid error is returned.<br><br>Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.|
|shardSelector|query|string|false|shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with \|\| (logical OR) to specify one or more hash ranges:<br><br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')<br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') \|\| shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br><br>Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:<br>  - object.metadata.uid<br>  - object.metadata.namespace<br><br>hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.<br><br>Examples:<br>  2-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br>  4-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')<br>    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')<br>    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')<br><br>This is a beta field and is enabled by default via the ShardedListAndWatch feature gate.|
|timeoutSeconds|query|integer|false|Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.|
|watch|query|boolean|false|Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {},
      "status": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createApiextensionsV1CustomResourceDefinition

<a id="opIdcreateApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/apiextensions.k8s.io/v1/customresourcedefinitions`

create a CustomResourceDefinition

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="createapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » annotations|body|object|false|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|» » » **additionalProperties**|body|string|false|none|
|» » creationTimestamp|body|object|false|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » deletionGracePeriodSeconds|body|integer(int64)|false|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|» » deletionTimestamp|body|object|false|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » finalizers|body|[string]|false|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|» » generateName|body|string|false|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|» » generation|body|integer(int64)|false|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|» » labels|body|object|false|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|» » » **additionalProperties**|body|string|false|none|
|» » managedFields|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|» » name|body|string|false|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|» » namespace|body|string|false|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|» » ownerReferences|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|» » resourceVersion|body|string|false|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|» » selfLink|body|string|false|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|» » uid|body|string|false|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|
|» spec|body|object|true|spec describes how the user wants the resources to appear|
|» » conversion|body|object|false|conversion defines conversion settings for the CRD.|
|» » » strategy|body|string|true|strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information<br>  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.|
|» » » webhook|body|object|false|webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.|
|» » » » clientConfig|body|object|false|clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.|
|» » » » » caBundle|body|string(byte)|false|caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.|
|» » » » » service|body|object|false|service is a reference to the service for this webhook. Either service or url must be specified.<br><br>If the webhook is running within the cluster, then you should use `service`.|
|» » » » » » name|body|string|true|name is the name of the service. Required|
|» » » » » » namespace|body|string|true|namespace is the namespace of the service. Required|
|» » » » » » path|body|string|false|path is an optional URL path at which the webhook will be contacted.|
|» » » » » » port|body|integer(int32)|false|port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.|
|» » » » » url|body|string|false|url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.<br><br>The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.<br><br>Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.<br><br>The scheme must be "https"; the URL must begin with "https://".<br><br>A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.<br><br>Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.|
|» » » » conversionReviewVersions|body|[string]|true|conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.|
|» » group|body|string|true|group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).|
|» » names|body|object|true|names specify the resource and kind names for the custom resource.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » preserveUnknownFields|body|boolean|false|preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.|
|» » scope|body|string|true|scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.|
|» » versions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion)]|true|versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.|
|» status|body|object|false|status indicates the actual state of the CustomResourceDefinition|
|» » acceptedNames|body|object|false|acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » conditions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition)]|false|conditions indicate state for particular aspects of a CustomResourceDefinition|
|» » observedGeneration|body|integer(int64)|false|The generation observed by the CRD controller.|
|» » storedVersions|body|[string]|false|storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="createapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|201|Created|Created|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|202|Accepted|Accepted|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteApiextensionsV1CollectionCustomResourceDefinition

<a id="opIddeleteApiextensionsV1CollectionCustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions`

delete collection of CustomResourceDefinition

> Body parameter

```json
{
  "apiVersion": "string",
  "dryRun": [
    "string"
  ],
  "gracePeriodSeconds": 0,
  "ignoreStoreReadErrorWithClusterBreakingPotential": true,
  "kind": "string",
  "orphanDependents": true,
  "preconditions": {
    "resourceVersion": "string",
    "uid": "string"
  },
  "propagationPolicy": "string"
}
```

<h3 id="deleteapiextensionsv1collectioncustomresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|resourceVersion|query|string|false|resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|resourceVersionMatch|query|string|false|resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|sendInitialEvents|query|boolean|false|`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.<br><br>When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan<br>  is interpreted as "data at least as new as the provided `resourceVersion`"<br>  and the bookmark event is send when the state is synced<br>  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.<br>  If `resourceVersion` is unset, this is interpreted as "consistent read" and the<br>  bookmark event is send when the state is synced at least to the moment<br>  when request started being processed.<br>- `resourceVersionMatch` set to any other value or unset<br>  Invalid error is returned.<br><br>Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.|
|shardSelector|query|string|false|shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with \|\| (logical OR) to specify one or more hash ranges:<br><br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')<br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') \|\| shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br><br>Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:<br>  - object.metadata.uid<br>  - object.metadata.namespace<br><br>hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.<br><br>Examples:<br>  2-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br>  4-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')<br>    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')<br>    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')<br><br>This is a beta field and is enabled by default via the ShardedListAndWatch feature gate.|
|timeoutSeconds|query|integer|false|Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.deleteoptions)|false|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» dryRun|body|[string]|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|» gracePeriodSeconds|body|integer(int64)|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|» ignoreStoreReadErrorWithClusterBreakingPotential|body|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» orphanDependents|body|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|» preconditions|body|object|false|Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.|
|» » resourceVersion|body|string|false|Specifies the target ResourceVersion|
|» » uid|body|string|false|Specifies the target UID.|
|» propagationPolicy|body|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "code": 0,
  "details": {
    "causes": [
      {
        "field": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "group": "string",
    "kind": "string",
    "name": "string",
    "retryAfterSeconds": 0,
    "uid": "string"
  },
  "kind": "string",
  "message": "string",
  "metadata": {},
  "reason": "string",
  "status": "string"
}
```

<h3 id="deleteapiextensionsv1collectioncustomresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readApiextensionsV1CustomResourceDefinition

<a id="opIdreadApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`

read the specified CustomResourceDefinition

<h3 id="readapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="readapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceApiextensionsV1CustomResourceDefinition

<a id="opIdreplaceApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`

replace the specified CustomResourceDefinition

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="replaceapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » annotations|body|object|false|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|» » » **additionalProperties**|body|string|false|none|
|» » creationTimestamp|body|object|false|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » deletionGracePeriodSeconds|body|integer(int64)|false|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|» » deletionTimestamp|body|object|false|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » finalizers|body|[string]|false|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|» » generateName|body|string|false|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|» » generation|body|integer(int64)|false|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|» » labels|body|object|false|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|» » » **additionalProperties**|body|string|false|none|
|» » managedFields|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|» » name|body|string|false|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|» » namespace|body|string|false|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|» » ownerReferences|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|» » resourceVersion|body|string|false|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|» » selfLink|body|string|false|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|» » uid|body|string|false|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|
|» spec|body|object|true|spec describes how the user wants the resources to appear|
|» » conversion|body|object|false|conversion defines conversion settings for the CRD.|
|» » » strategy|body|string|true|strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information<br>  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.|
|» » » webhook|body|object|false|webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.|
|» » » » clientConfig|body|object|false|clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.|
|» » » » » caBundle|body|string(byte)|false|caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.|
|» » » » » service|body|object|false|service is a reference to the service for this webhook. Either service or url must be specified.<br><br>If the webhook is running within the cluster, then you should use `service`.|
|» » » » » » name|body|string|true|name is the name of the service. Required|
|» » » » » » namespace|body|string|true|namespace is the namespace of the service. Required|
|» » » » » » path|body|string|false|path is an optional URL path at which the webhook will be contacted.|
|» » » » » » port|body|integer(int32)|false|port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.|
|» » » » » url|body|string|false|url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.<br><br>The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.<br><br>Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.<br><br>The scheme must be "https"; the URL must begin with "https://".<br><br>A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.<br><br>Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.|
|» » » » conversionReviewVersions|body|[string]|true|conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.|
|» » group|body|string|true|group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).|
|» » names|body|object|true|names specify the resource and kind names for the custom resource.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » preserveUnknownFields|body|boolean|false|preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.|
|» » scope|body|string|true|scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.|
|» » versions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion)]|true|versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.|
|» status|body|object|false|status indicates the actual state of the CustomResourceDefinition|
|» » acceptedNames|body|object|false|acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » conditions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition)]|false|conditions indicate state for particular aspects of a CustomResourceDefinition|
|» » observedGeneration|body|integer(int64)|false|The generation observed by the CRD controller.|
|» » storedVersions|body|[string]|false|storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="replaceapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|201|Created|Created|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteApiextensionsV1CustomResourceDefinition

<a id="opIddeleteApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`

delete a CustomResourceDefinition

> Body parameter

```json
{
  "apiVersion": "string",
  "dryRun": [
    "string"
  ],
  "gracePeriodSeconds": 0,
  "ignoreStoreReadErrorWithClusterBreakingPotential": true,
  "kind": "string",
  "orphanDependents": true,
  "preconditions": {
    "resourceVersion": "string",
    "uid": "string"
  },
  "propagationPolicy": "string"
}
```

<h3 id="deleteapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.deleteoptions)|false|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» dryRun|body|[string]|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|» gracePeriodSeconds|body|integer(int64)|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|» ignoreStoreReadErrorWithClusterBreakingPotential|body|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» orphanDependents|body|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|» preconditions|body|object|false|Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.|
|» » resourceVersion|body|string|false|Specifies the target ResourceVersion|
|» » uid|body|string|false|Specifies the target UID.|
|» propagationPolicy|body|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "code": 0,
  "details": {
    "causes": [
      {
        "field": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "group": "string",
    "kind": "string",
    "name": "string",
    "retryAfterSeconds": 0,
    "uid": "string"
  },
  "kind": "string",
  "message": "string",
  "metadata": {},
  "reason": "string",
  "status": "string"
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "code": 0,
  "details": {
    "causes": [
      {
        "field": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "group": "string",
    "kind": "string",
    "name": "string",
    "retryAfterSeconds": 0,
    "uid": "string"
  },
  "kind": "string",
  "message": "string",
  "metadata": {},
  "reason": "string",
  "status": "string"
}
```

<h3 id="deleteapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchApiextensionsV1CustomResourceDefinition

<a id="opIdpatchApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`

partially update the specified CustomResourceDefinition

> Body parameter

```json
{}
```

<h3 id="patchapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="patchapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|201|Created|Created|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readApiextensionsV1CustomResourceDefinitionStatus

<a id="opIdreadApiextensionsV1CustomResourceDefinitionStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string/status \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`

read status of the specified CustomResourceDefinition

<h3 id="readapiextensionsv1customresourcedefinitionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="readapiextensionsv1customresourcedefinitionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceApiextensionsV1CustomResourceDefinitionStatus

<a id="opIdreplaceApiextensionsV1CustomResourceDefinitionStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`

replace status of the specified CustomResourceDefinition

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="replaceapiextensionsv1customresourcedefinitionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » annotations|body|object|false|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|» » » **additionalProperties**|body|string|false|none|
|» » creationTimestamp|body|object|false|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » deletionGracePeriodSeconds|body|integer(int64)|false|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|» » deletionTimestamp|body|object|false|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » finalizers|body|[string]|false|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|» » generateName|body|string|false|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|» » generation|body|integer(int64)|false|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|» » labels|body|object|false|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|» » » **additionalProperties**|body|string|false|none|
|» » managedFields|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|» » name|body|string|false|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|» » namespace|body|string|false|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|» » ownerReferences|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|» » resourceVersion|body|string|false|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|» » selfLink|body|string|false|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|» » uid|body|string|false|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|
|» spec|body|object|true|spec describes how the user wants the resources to appear|
|» » conversion|body|object|false|conversion defines conversion settings for the CRD.|
|» » » strategy|body|string|true|strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information<br>  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.|
|» » » webhook|body|object|false|webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.|
|» » » » clientConfig|body|object|false|clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.|
|» » » » » caBundle|body|string(byte)|false|caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.|
|» » » » » service|body|object|false|service is a reference to the service for this webhook. Either service or url must be specified.<br><br>If the webhook is running within the cluster, then you should use `service`.|
|» » » » » » name|body|string|true|name is the name of the service. Required|
|» » » » » » namespace|body|string|true|namespace is the namespace of the service. Required|
|» » » » » » path|body|string|false|path is an optional URL path at which the webhook will be contacted.|
|» » » » » » port|body|integer(int32)|false|port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.|
|» » » » » url|body|string|false|url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.<br><br>The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.<br><br>Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.<br><br>The scheme must be "https"; the URL must begin with "https://".<br><br>A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.<br><br>Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.|
|» » » » conversionReviewVersions|body|[string]|true|conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.|
|» » group|body|string|true|group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).|
|» » names|body|object|true|names specify the resource and kind names for the custom resource.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » preserveUnknownFields|body|boolean|false|preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.|
|» » scope|body|string|true|scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.|
|» » versions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion)]|true|versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.|
|» status|body|object|false|status indicates the actual state of the CustomResourceDefinition|
|» » acceptedNames|body|object|false|acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.|
|» » » categories|body|[string]|false|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|» » » kind|body|string|true|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|» » » listKind|body|string|false|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|» » » plural|body|string|true|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|» » » shortNames|body|[string]|false|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|» » » singular|body|string|false|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|
|» » conditions|body|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition)]|false|conditions indicate state for particular aspects of a CustomResourceDefinition|
|» » observedGeneration|body|integer(int64)|false|The generation observed by the CRD controller.|
|» » storedVersions|body|[string]|false|storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="replaceapiextensionsv1customresourcedefinitionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|201|Created|Created|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchApiextensionsV1CustomResourceDefinitionStatus

<a id="opIdpatchApiextensionsV1CustomResourceDefinitionStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/customresourcedefinitions/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`

partially update status of the specified CustomResourceDefinition

> Body parameter

```json
{}
```

<h3 id="patchapiextensionsv1customresourcedefinitionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

<h3 id="patchapiextensionsv1customresourcedefinitionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|201|Created|Created|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchApiextensionsV1CustomResourceDefinitionList

<a id="opIdwatchApiextensionsV1CustomResourceDefinitionList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions`

watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchapiextensionsv1customresourcedefinitionlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|resourceVersion|query|string|false|resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|resourceVersionMatch|query|string|false|resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|sendInitialEvents|query|boolean|false|`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.<br><br>When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan<br>  is interpreted as "data at least as new as the provided `resourceVersion`"<br>  and the bookmark event is send when the state is synced<br>  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.<br>  If `resourceVersion` is unset, this is interpreted as "consistent read" and the<br>  bookmark event is send when the state is synced at least to the moment<br>  when request started being processed.<br>- `resourceVersionMatch` set to any other value or unset<br>  Invalid error is returned.<br><br>Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.|
|shardSelector|query|string|false|shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with \|\| (logical OR) to specify one or more hash ranges:<br><br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')<br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') \|\| shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br><br>Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:<br>  - object.metadata.uid<br>  - object.metadata.namespace<br><br>hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.<br><br>Examples:<br>  2-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br>  4-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')<br>    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')<br>    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')<br><br>This is a beta field and is enabled by default via the ShardedListAndWatch feature gate.|
|timeoutSeconds|query|integer|false|Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.|
|watch|query|boolean|false|Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.|

> Example responses

> 200 Response

```json
{
  "object": {},
  "type": ""
}
```

<h3 id="watchapiextensionsv1customresourcedefinitionlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchApiextensionsV1CustomResourceDefinition

<a id="opIdwatchApiextensionsV1CustomResourceDefinition"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/string \
  -H 'Accept: application/json'
```

`GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}`

watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchapiextensionsv1customresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the CustomResourceDefinition|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|resourceVersion|query|string|false|resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|resourceVersionMatch|query|string|false|resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.<br><br>Defaults to unset|
|sendInitialEvents|query|boolean|false|`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.<br><br>When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan<br>  is interpreted as "data at least as new as the provided `resourceVersion`"<br>  and the bookmark event is send when the state is synced<br>  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.<br>  If `resourceVersion` is unset, this is interpreted as "consistent read" and the<br>  bookmark event is send when the state is synced at least to the moment<br>  when request started being processed.<br>- `resourceVersionMatch` set to any other value or unset<br>  Invalid error is returned.<br><br>Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.|
|shardSelector|query|string|false|shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with \|\| (logical OR) to specify one or more hash ranges:<br><br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')<br>  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') \|\| shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br><br>Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:<br>  - object.metadata.uid<br>  - object.metadata.namespace<br><br>hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.<br><br>Examples:<br>  2-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')<br>  4-shard split:<br>    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')<br>    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')<br>    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')<br>    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')<br><br>This is a beta field and is enabled by default via the ShardedListAndWatch feature gate.|
|timeoutSeconds|query|integer|false|Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.|
|watch|query|boolean|false|Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.|

> Example responses

> 200 Response

```json
{
  "object": {},
  "type": ""
}
```

<h3 id="watchapiextensionsv1customresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcecolumndefinition"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcecolumndefinition"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcecolumndefinition"></a>

```json
{
  "description": "string",
  "format": "string",
  "jsonPath": "",
  "name": "",
  "priority": 0,
  "type": ""
}
```

CustomResourceColumnDefinition specifies a column for server side printing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|description is a human readable description of this column.|
|format|string|false|none|format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.|
|jsonPath|string|true|none|jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.|
|name|string|true|none|name is a human readable name for the column.|
|priority|integer(int32)|false|none|priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.|
|type|string|true|none|type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourceconversion"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourceconversion"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourceconversion"></a>

```json
{
  "strategy": "",
  "webhook": {
    "clientConfig": {
      "caBundle": "string",
      "service": {
        "name": "",
        "namespace": "",
        "path": "string",
        "port": 0
      },
      "url": "string"
    },
    "conversionReviewVersions": [
      "string"
    ]
  }
}
```

CustomResourceConversion describes how to convert different versions of a CR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strategy|string|true|none|strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information<br>  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.|
|webhook|object|false|none|webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec describes how the user wants the resources to appear|
|status|object|false|none|status indicates the actual state of the CustomResourceDefinition|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition"></a>

```json
{
  "lastTransitionTime": {},
  "message": "string",
  "observedGeneration": 0,
  "reason": "string",
  "status": "",
  "type": ""
}
```

CustomResourceDefinitionCondition contains details for the current condition of this pod.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastTransitionTime|object|false|none|lastTransitionTime last time the condition transitioned from one status to another.|
|message|string|false|none|message is a human-readable message indicating details about last transition.|
|observedGeneration|integer(int64)|false|none|observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.|
|reason|string|false|none|reason is a unique, one-word, CamelCase reason for the condition's last transition.|
|status|string|true|none|status is the status of the condition. Can be True, False, Unknown.|
|type|string|true|none|type is the type of the condition. Types include Established, NamesAccepted and Terminating.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionlist"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionlist"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionlist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {},
      "status": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

CustomResourceDefinitionList is a list of CustomResourceDefinition objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinition)]|true|none|items list individual CustomResourceDefinition objects|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionnames"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionnames"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionnames"></a>

```json
{
  "categories": [
    "string"
  ],
  "kind": "",
  "listKind": "string",
  "plural": "",
  "shortNames": [
    "string"
  ],
  "singular": "string"
}
```

CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.|
|kind|string|true|none|kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.|
|listKind|string|false|none|listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".|
|plural|string|true|none|plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.|
|shortNames|[string]|false|none|shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.|
|singular|string|false|none|singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionspec"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionspec"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionspec"></a>

```json
{
  "conversion": {
    "strategy": "",
    "webhook": {
      "clientConfig": {
        "caBundle": "string",
        "service": {
          "name": "",
          "namespace": "",
          "path": "string",
          "port": 0
        },
        "url": "string"
      },
      "conversionReviewVersions": [
        "string"
      ]
    }
  },
  "group": "",
  "names": {},
  "preserveUnknownFields": true,
  "scope": "",
  "versions": [
    {
      "additionalPrinterColumns": [
        {
          "description": "string",
          "format": "string",
          "jsonPath": "",
          "name": "",
          "priority": 0,
          "type": ""
        }
      ],
      "deprecated": true,
      "deprecationWarning": "string",
      "name": "",
      "schema": {
        "openAPIV3Schema": {
          "$ref": "string",
          "$schema": "string",
          "additionalItems": null,
          "additionalProperties": null,
          "allOf": [
            {}
          ],
          "anyOf": [
            {}
          ],
          "default": {},
          "definitions": {
            "property1": {},
            "property2": {}
          },
          "dependencies": {
            "property1": null,
            "property2": null
          },
          "description": "string",
          "enum": [
            null
          ],
          "example": null,
          "exclusiveMaximum": true,
          "exclusiveMinimum": true,
          "externalDocs": {
            "description": "string",
            "url": "string"
          },
          "format": "string",
          "id": "string",
          "items": null,
          "maxItems": 0,
          "maxLength": 0,
          "maxProperties": 0,
          "maximum": 0,
          "minItems": 0,
          "minLength": 0,
          "minProperties": 0,
          "minimum": 0,
          "multipleOf": 0,
          "not": {},
          "nullable": true,
          "oneOf": [
            {}
          ],
          "pattern": "string",
          "patternProperties": {
            "property1": {},
            "property2": {}
          },
          "properties": {
            "property1": {},
            "property2": {}
          },
          "required": [
            "string"
          ],
          "title": "string",
          "type": "string",
          "uniqueItems": true,
          "x-kubernetes-embedded-resource": true,
          "x-kubernetes-int-or-string": true,
          "x-kubernetes-list-map-keys": [
            "string"
          ],
          "x-kubernetes-list-type": "string",
          "x-kubernetes-map-type": "string",
          "x-kubernetes-preserve-unknown-fields": true,
          "x-kubernetes-validations": [
            {
              "fieldPath": "string",
              "message": "string",
              "messageExpression": "string",
              "optionalOldSelf": true,
              "reason": "string",
              "rule": ""
            }
          ]
        }
      },
      "selectableFields": [
        {
          "jsonPath": ""
        }
      ],
      "served": false,
      "storage": false,
      "subresources": {
        "scale": {
          "labelSelectorPath": "string",
          "specReplicasPath": "",
          "statusReplicasPath": ""
        },
        "status": {}
      }
    }
  ]
}
```

CustomResourceDefinitionSpec describes how a user wants their resource to appear

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversion|object|false|none|conversion defines conversion settings for the CRD.|
|group|string|true|none|group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).|
|names|object|true|none|names specify the resource and kind names for the custom resource.|
|preserveUnknownFields|boolean|false|none|preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.|
|scope|string|true|none|scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.|
|versions|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion)]|true|none|versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionstatus"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionstatus"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionstatus"></a>

```json
{
  "acceptedNames": {},
  "conditions": [
    {
      "lastTransitionTime": {},
      "message": "string",
      "observedGeneration": 0,
      "reason": "string",
      "status": "",
      "type": ""
    }
  ],
  "observedGeneration": 0,
  "storedVersions": [
    "string"
  ]
}
```

CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedNames|object|false|none|acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.|
|conditions|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitioncondition)]|false|none|conditions indicate state for particular aspects of a CustomResourceDefinition|
|observedGeneration|integer(int64)|false|none|The generation observed by the CRD controller.|
|storedVersions|[string]|false|none|storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcedefinitionversion"></a>

```json
{
  "additionalPrinterColumns": [
    {
      "description": "string",
      "format": "string",
      "jsonPath": "",
      "name": "",
      "priority": 0,
      "type": ""
    }
  ],
  "deprecated": true,
  "deprecationWarning": "string",
  "name": "",
  "schema": {
    "openAPIV3Schema": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  },
  "selectableFields": [
    {
      "jsonPath": ""
    }
  ],
  "served": false,
  "storage": false,
  "subresources": {
    "scale": {
      "labelSelectorPath": "string",
      "specReplicasPath": "",
      "statusReplicasPath": ""
    },
    "status": {}
  }
}
```

CustomResourceDefinitionVersion describes a version for CRD.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalPrinterColumns|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcecolumndefinition)]|false|none|additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.|
|deprecated|boolean|false|none|deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.|
|deprecationWarning|string|false|none|deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.|
|name|string|true|none|name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.|
|schema|object|false|none|schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.|
|selectableFields|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.selectablefield)]|false|none|selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors|
|served|boolean|true|none|served is a flag enabling/disabling this version from being served via REST APIs|
|storage|boolean|true|none|storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.|
|subresources|object|false|none|subresources specify what subresources this version of the defined custom resource have.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcescale"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcescale"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcescale"></a>

```json
{
  "labelSelectorPath": "string",
  "specReplicasPath": "",
  "statusReplicasPath": ""
}
```

CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelSelectorPath|string|false|none|labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string.|
|specReplicasPath|string|true|none|specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.|
|statusReplicasPath|string|true|none|statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcestatus"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcestatus"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresourcestatus"></a>

```json
{}
```

CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresources"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresources"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcesubresources"></a>

```json
{
  "scale": {
    "labelSelectorPath": "string",
    "specReplicasPath": "",
    "statusReplicasPath": ""
  },
  "status": {}
}
```

CustomResourceSubresources defines the status and scale subresources for CustomResources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scale|object|false|none|scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.|
|status|object|false|none|status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcevalidation"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcevalidation"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.customresourcevalidation"></a>

```json
{
  "openAPIV3Schema": {
    "$ref": "string",
    "$schema": "string",
    "additionalItems": null,
    "additionalProperties": null,
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "default": {},
    "definitions": {
      "property1": {},
      "property2": {}
    },
    "dependencies": {
      "property1": null,
      "property2": null
    },
    "description": "string",
    "enum": [
      null
    ],
    "example": null,
    "exclusiveMaximum": true,
    "exclusiveMinimum": true,
    "externalDocs": {
      "description": "string",
      "url": "string"
    },
    "format": "string",
    "id": "string",
    "items": null,
    "maxItems": 0,
    "maxLength": 0,
    "maxProperties": 0,
    "maximum": 0,
    "minItems": 0,
    "minLength": 0,
    "minProperties": 0,
    "minimum": 0,
    "multipleOf": 0,
    "not": {},
    "nullable": true,
    "oneOf": [
      {}
    ],
    "pattern": "string",
    "patternProperties": {
      "property1": {},
      "property2": {}
    },
    "properties": {
      "property1": {},
      "property2": {}
    },
    "required": [
      "string"
    ],
    "title": "string",
    "type": "string",
    "uniqueItems": true,
    "x-kubernetes-embedded-resource": true,
    "x-kubernetes-int-or-string": true,
    "x-kubernetes-list-map-keys": [
      "string"
    ],
    "x-kubernetes-list-type": "string",
    "x-kubernetes-map-type": "string",
    "x-kubernetes-preserve-unknown-fields": true,
    "x-kubernetes-validations": [
      {
        "fieldPath": "string",
        "message": "string",
        "messageExpression": "string",
        "optionalOldSelf": true,
        "reason": "string",
        "rule": ""
      }
    ]
  }
}
```

CustomResourceValidation is a list of validation methods for CustomResources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openAPIV3Schema|object|false|none|openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.externaldocumentation"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.externaldocumentation"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.externaldocumentation"></a>

```json
{
  "description": "string",
  "url": "string"
}
```

ExternalDocumentation allows referencing an external resource for extended documentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.json"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.json"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.json"></a>

```json
null
```

JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops"></a>

```json
{
  "$ref": "string",
  "$schema": "string",
  "additionalItems": null,
  "additionalProperties": null,
  "allOf": [
    {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  ],
  "anyOf": [
    {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  ],
  "default": {},
  "definitions": {
    "property1": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    },
    "property2": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  },
  "dependencies": {
    "property1": null,
    "property2": null
  },
  "description": "string",
  "enum": [
    null
  ],
  "example": null,
  "exclusiveMaximum": true,
  "exclusiveMinimum": true,
  "externalDocs": {
    "description": "string",
    "url": "string"
  },
  "format": "string",
  "id": "string",
  "items": null,
  "maxItems": 0,
  "maxLength": 0,
  "maxProperties": 0,
  "maximum": 0,
  "minItems": 0,
  "minLength": 0,
  "minProperties": 0,
  "minimum": 0,
  "multipleOf": 0,
  "not": {
    "$ref": "string",
    "$schema": "string",
    "additionalItems": null,
    "additionalProperties": null,
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "default": {},
    "definitions": {
      "property1": {},
      "property2": {}
    },
    "dependencies": {
      "property1": null,
      "property2": null
    },
    "description": "string",
    "enum": [
      null
    ],
    "example": null,
    "exclusiveMaximum": true,
    "exclusiveMinimum": true,
    "externalDocs": {
      "description": "string",
      "url": "string"
    },
    "format": "string",
    "id": "string",
    "items": null,
    "maxItems": 0,
    "maxLength": 0,
    "maxProperties": 0,
    "maximum": 0,
    "minItems": 0,
    "minLength": 0,
    "minProperties": 0,
    "minimum": 0,
    "multipleOf": 0,
    "not": {},
    "nullable": true,
    "oneOf": [
      {}
    ],
    "pattern": "string",
    "patternProperties": {
      "property1": {},
      "property2": {}
    },
    "properties": {
      "property1": {},
      "property2": {}
    },
    "required": [
      "string"
    ],
    "title": "string",
    "type": "string",
    "uniqueItems": true,
    "x-kubernetes-embedded-resource": true,
    "x-kubernetes-int-or-string": true,
    "x-kubernetes-list-map-keys": [
      "string"
    ],
    "x-kubernetes-list-type": "string",
    "x-kubernetes-map-type": "string",
    "x-kubernetes-preserve-unknown-fields": true,
    "x-kubernetes-validations": [
      {
        "fieldPath": "string",
        "message": "string",
        "messageExpression": "string",
        "optionalOldSelf": true,
        "reason": "string",
        "rule": ""
      }
    ]
  },
  "nullable": true,
  "oneOf": [
    {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  ],
  "pattern": "string",
  "patternProperties": {
    "property1": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    },
    "property2": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  },
  "properties": {
    "property1": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    },
    "property2": {
      "$ref": "string",
      "$schema": "string",
      "additionalItems": null,
      "additionalProperties": null,
      "allOf": [
        {}
      ],
      "anyOf": [
        {}
      ],
      "default": {},
      "definitions": {
        "property1": {},
        "property2": {}
      },
      "dependencies": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "enum": [
        null
      ],
      "example": null,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "externalDocs": {
        "description": "string",
        "url": "string"
      },
      "format": "string",
      "id": "string",
      "items": null,
      "maxItems": 0,
      "maxLength": 0,
      "maxProperties": 0,
      "maximum": 0,
      "minItems": 0,
      "minLength": 0,
      "minProperties": 0,
      "minimum": 0,
      "multipleOf": 0,
      "not": {},
      "nullable": true,
      "oneOf": [
        {}
      ],
      "pattern": "string",
      "patternProperties": {
        "property1": {},
        "property2": {}
      },
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": [
        "string"
      ],
      "title": "string",
      "type": "string",
      "uniqueItems": true,
      "x-kubernetes-embedded-resource": true,
      "x-kubernetes-int-or-string": true,
      "x-kubernetes-list-map-keys": [
        "string"
      ],
      "x-kubernetes-list-type": "string",
      "x-kubernetes-map-type": "string",
      "x-kubernetes-preserve-unknown-fields": true,
      "x-kubernetes-validations": [
        {
          "fieldPath": "string",
          "message": "string",
          "messageExpression": "string",
          "optionalOldSelf": true,
          "reason": "string",
          "rule": ""
        }
      ]
    }
  },
  "required": [
    "string"
  ],
  "title": "string",
  "type": "string",
  "uniqueItems": true,
  "x-kubernetes-embedded-resource": true,
  "x-kubernetes-int-or-string": true,
  "x-kubernetes-list-map-keys": [
    "string"
  ],
  "x-kubernetes-list-type": "string",
  "x-kubernetes-map-type": "string",
  "x-kubernetes-preserve-unknown-fields": true,
  "x-kubernetes-validations": [
    {
      "fieldPath": "string",
      "message": "string",
      "messageExpression": "string",
      "optionalOldSelf": true,
      "reason": "string",
      "rule": ""
    }
  ]
}
```

JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$ref|string|false|none|none|
|$schema|string|false|none|none|
|additionalItems|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorbool)|false|none|JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.|
|additionalProperties|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorbool)|false|none|JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.|
|allOf|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops)]|false|none|none|
|anyOf|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops)]|false|none|none|
|default|object|false|none|default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false.|
|definitions|object|false|none|none|
|dependencies|object|false|none|none|
|description|string|false|none|none|
|enum|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.json)]|false|none|none|
|example|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.json)|false|none|JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.|
|exclusiveMaximum|boolean|false|none|none|
|exclusiveMinimum|boolean|false|none|none|
|externalDocs|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.externaldocumentation)|false|none|ExternalDocumentation allows referencing an external resource for extended documentation.|
|format|string|false|none|format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:<br><br>- bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?\|5[1-5][0-9]{14}\|6(?:011\|5[0-9][0-9])[0-9]{12}\|3[47][0-9]{13}\|3(?:0[0-5]\|[68][0-9])[0-9]{11}\|(?:2131\|1800\|35\\d{3})\\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\\d{3}[- ]?\\d{2}[- ]?\\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.|
|id|string|false|none|none|
|items|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorarray)|false|none|JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.|
|maxItems|integer(int64)|false|none|none|
|maxLength|integer(int64)|false|none|none|
|maxProperties|integer(int64)|false|none|none|
|maximum|number(double)|false|none|none|
|minItems|integer(int64)|false|none|none|
|minLength|integer(int64)|false|none|none|
|minProperties|integer(int64)|false|none|none|
|minimum|number(double)|false|none|none|
|multipleOf|number(double)|false|none|none|
|not|[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops)|false|none|JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).|
|nullable|boolean|false|none|none|
|oneOf|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemaprops)]|false|none|none|
|pattern|string|false|none|none|
|patternProperties|object|false|none|none|
|properties|object|false|none|none|
|required|[string]|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|uniqueItems|boolean|false|none|none|
|x-kubernetes-embedded-resource|boolean|false|none|x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata).|
|x-kubernetes-int-or-string|boolean|false|none|x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:<br><br>1) anyOf:<br>   - type: integer<br>   - type: string<br>2) allOf:<br>   - anyOf:<br>     - type: integer<br>     - type: string<br>   - ... zero or more|
|x-kubernetes-list-map-keys|[string]|false|none|x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.<br><br>This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).<br><br>The properties specified must either be required or have a default value, to ensure those properties are present for all list items.|
|x-kubernetes-list-type|string|false|none|x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:<br><br>1) `atomic`: the list is treated as a single entity, like a scalar.<br>     Atomic lists will be entirely replaced when updated. This extension<br>     may be used on any type of list (struct, scalar, ...).<br>2) `set`:<br>     Sets are lists that must not have multiple items with the same value. Each<br>     value must be a scalar, an object with x-kubernetes-map-type `atomic` or an<br>     array with x-kubernetes-list-type `atomic`.<br>3) `map`:<br>     These lists are like maps in that their elements have a non-index key<br>     used to identify them. Order is preserved upon merge. The map tag<br>     must only be used on a list with elements of type object.<br>Defaults to atomic for arrays.|
|x-kubernetes-map-type|string|false|none|x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:<br><br>1) `granular`:<br>     These maps are actual maps (key-value pairs) and each fields are independent<br>     from each other (they can each be manipulated by separate actors). This is<br>     the default behaviour for all maps.<br>2) `atomic`: the list is treated as a single entity, like a scalar.<br>     Atomic maps will be entirely replaced when updated.|
|x-kubernetes-preserve-unknown-fields|boolean|false|none|x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden.|
|x-kubernetes-validations|[[io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule](#schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.validationrule)]|false|none|x-kubernetes-validations describes a list of validation rules written in the CEL expression language.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorarray"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorarray"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorarray"></a>

```json
null
```

JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorbool"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorbool"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorbool"></a>

```json
null
```

JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorstringarray"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorstringarray"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.jsonschemapropsorstringarray"></a>

```json
null
```

JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.selectablefield"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.selectablefield"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.selectablefield"></a>

```json
{
  "jsonPath": ""
}
```

SelectableField specifies the JSON path of a field that may be used with field selectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonPath|string|true|none|jsonPath is a simple JSON path which is evaluated against each custom resource to produce a field selector value. Only JSON paths without the array notation are allowed. Must point to a field of type string, boolean or integer. Types with enum values and strings with formats are allowed. If jsonPath refers to absent field in a resource, the jsonPath evaluates to an empty string. Must not point to metdata fields. Required.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.servicereference"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.servicereference"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.servicereference"></a>

```json
{
  "name": "",
  "namespace": "",
  "path": "string",
  "port": 0
}
```

ServiceReference holds a reference to Service.legacy.k8s.io

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name is the name of the service. Required|
|namespace|string|true|none|namespace is the namespace of the service. Required|
|path|string|false|none|path is an optional URL path at which the webhook will be contacted.|
|port|integer(int32)|false|none|port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.validationrule"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.validationrule"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.validationrule"></a>

```json
{
  "fieldPath": "string",
  "message": "string",
  "messageExpression": "string",
  "optionalOldSelf": true,
  "reason": "string",
  "rule": ""
}
```

ValidationRule describes a validation rule written in the CEL expression language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldPath|string|false|none|fieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute `foo` under a map `testMap`, the fieldPath could be set to `.testMap.foo` If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. `.testList` It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use `['specialName']` to refer the field name. e.g. for attribute `foo.34$` appears in a list `testList`, the fieldPath could be set to `.testList['foo.34$']`|
|message|string|false|none|Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host"|
|messageExpression|string|false|none|MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: "x must be less than max ("+string(self.max)+")"|
|optionalOldSelf|boolean|false|none|optionalOldSelf is used to opt a transition rule into evaluation even when the object is first created, or if the old object is missing the value.<br><br>When enabled `oldSelf` will be a CEL optional whose value will be `None` if there is no old value, or when the object is initially created.<br><br>You may check for presence of oldSelf using `oldSelf.hasValue()` and unwrap it after checking using `oldSelf.value()`. Check the CEL documentation for Optional types for more information: https://pkg.go.dev/github.com/google/cel-go/cel#OptionalTypes<br><br>May not be set unless `oldSelf` is used in `rule`.|
|reason|string|false|none|reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The HTTP status code returned to the caller will match the reason of the reason of the first failed validation rule. The currently supported reasons are: "FieldValueInvalid", "FieldValueForbidden", "FieldValueRequired", "FieldValueDuplicate". If not set, default to use "FieldValueInvalid". All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.|
|rule|string|true|none|Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {"rule": "self.status.actual <= self.spec.maxDesired"}<br><br>If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {"rule": "self.components['Widget'].priority < 10"} - Rule scoped to a list of integers: {"rule": "self.values.all(value, value >= 0 && value < 100)"} - Rule scoped to a string value: {"rule": "self.startsWith('kube')"}<br><br>The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.<br><br>Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an "unknown type". An "unknown type" is recursively defined as:<br>  - A schema with no type and x-kubernetes-preserve-unknown-fields set to true<br>  - An array where the items schema is of an "unknown type"<br>  - An object where the additionalProperties schema is of an "unknown type"<br><br>Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:<br>	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",<br>	  "import", "let", "loop", "package", "namespace", "return".<br>Examples:<br>  - Rule accessing a property named "namespace": {"rule": "self.__namespace__ > 0"}<br>  - Rule accessing a property named "x-prop": {"rule": "self.x__dash__prop > 0"}<br>  - Rule accessing a property named "redact__d": {"rule": "self.redact__underscores__d > 0"}<br><br>Equality on arrays with x-kubernetes-list-type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:<br>  - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and<br>    non-intersecting elements in `Y` are appended, retaining their partial order.<br>  - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values<br>    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with<br>    non-intersecting keys are appended, retaining their partial order.<br><br>If `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.<br><br>By default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional<br> variable whose value() is the same type as `self`.<br>See the documentation for the `optionalOldSelf` field for details.<br><br>Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookclientconfig"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookclientconfig"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookclientconfig"></a>

```json
{
  "caBundle": "string",
  "service": {
    "name": "",
    "namespace": "",
    "path": "string",
    "port": 0
  },
  "url": "string"
}
```

WebhookClientConfig contains the information to make a TLS connection with the webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caBundle|string(byte)|false|none|caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.|
|service|object|false|none|service is a reference to the service for this webhook. Either service or url must be specified.<br><br>If the webhook is running within the cluster, then you should use `service`.|
|url|string|false|none|url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.<br><br>The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.<br><br>Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.<br><br>The scheme must be "https"; the URL must begin with "https://".<br><br>A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.<br><br>Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.|

<h2 id="tocS_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion">io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookconversion"></a>
<a id="schema_io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion"></a>
<a id="tocSio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookconversion"></a>
<a id="tocsio.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.webhookconversion"></a>

```json
{
  "clientConfig": {
    "caBundle": "string",
    "service": {
      "name": "",
      "namespace": "",
      "path": "string",
      "port": 0
    },
    "url": "string"
  },
  "conversionReviewVersions": [
    "string"
  ]
}
```

WebhookConversion describes how to call a conversion webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientConfig|object|false|none|clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.|
|conversionReviewVersions|[string]|true|none|conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.APIResource">io.k8s.apimachinery.pkg.apis.meta.v1.APIResource</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresource"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.APIResource"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.apiresource"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.apiresource"></a>

```json
{
  "categories": [
    "string"
  ],
  "group": "string",
  "kind": "",
  "name": "",
  "namespaced": false,
  "shortNames": [
    "string"
  ],
  "singularName": "",
  "storageVersionHash": "string",
  "verbs": [
    "string"
  ],
  "version": "string"
}
```

APIResource specifies the name of a resource and whether it is namespaced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|categories is a list of the grouped resources this resource belongs to (e.g. 'all')|
|group|string|false|none|group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".|
|kind|string|true|none|kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')|
|name|string|true|none|name is the plural name of the resource.|
|namespaced|boolean|true|none|namespaced indicates if a resource is namespaced or not.|
|shortNames|[string]|false|none|shortNames is a list of suggested short names of the resource.|
|singularName|string|true|none|singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.|
|storageVersionHash|string|false|none|The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.|
|verbs|[string]|true|none|verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)|
|version|string|false|none|version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList">io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist"></a>

```json
{
  "apiVersion": "string",
  "groupVersion": "",
  "kind": "string",
  "resources": [
    {
      "categories": [
        "string"
      ],
      "group": "string",
      "kind": "",
      "name": "",
      "namespaced": false,
      "shortNames": [
        "string"
      ],
      "singularName": "",
      "storageVersionHash": "string",
      "verbs": [
        "string"
      ],
      "version": "string"
    }
  ]
}
```

APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|groupVersion|string|true|none|groupVersion is the group and version this APIResourceList is for.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|resources|[[io.k8s.apimachinery.pkg.apis.meta.v1.APIResource](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresource)]|true|none|resources contains the name of the resources and if they are namespaced.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions">io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.deleteoptions"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.deleteoptions"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.deleteoptions"></a>

```json
{
  "apiVersion": "string",
  "dryRun": [
    "string"
  ],
  "gracePeriodSeconds": 0,
  "ignoreStoreReadErrorWithClusterBreakingPotential": true,
  "kind": "string",
  "orphanDependents": true,
  "preconditions": {
    "resourceVersion": "string",
    "uid": "string"
  },
  "propagationPolicy": "string"
}
```

DeleteOptions may be provided when deleting an API object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|dryRun|[string]|false|none|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|integer(int64)|false|none|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|boolean|false|none|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|orphanDependents|boolean|false|none|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|preconditions|object|false|none|Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.|
|propagationPolicy|string|false|none|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1">io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldsv1"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.fieldsv1"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.fieldsv1"></a>

```json
{}
```

FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.

Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.

The exact format is defined in sigs.k8s.io/structured-merge-diff

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta">io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.listmeta"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.listmeta"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.listmeta"></a>

```json
{
  "continue": "string",
  "remainingItemCount": 0,
  "resourceVersion": "string",
  "selfLink": "string",
  "shardInfo": {
    "selector": ""
  }
}
```

ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continue|string|false|none|continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.|
|remainingItemCount|integer(int64)|false|none|remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.|
|resourceVersion|string|false|none|String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|selfLink|string|false|none|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|shardInfo|object|false|none|shardInfo is set when the list is a filtered subset of the full collection, as selected by a shard selector on the request. It echoes back the selector so clients can verify which shard they received and merge sharded responses. Clients should not cache sharded list responses as a full representation of the collection.<br><br>This is a beta field and is enabled by default via the ShardedListAndWatch feature gate.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry">io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry"></a>

```json
{
  "apiVersion": "string",
  "fieldsType": "string",
  "fieldsV1": {},
  "manager": "string",
  "operation": "string",
  "subresource": "string",
  "time": {}
}
```

ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.|
|fieldsType|string|false|none|FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"|
|fieldsV1|object|false|none|FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.|
|manager|string|false|none|Manager is an identifier of the workflow managing these fields.|
|operation|string|false|none|Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.|
|subresource|string|false|none|Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.|
|time|object|false|none|Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta">io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.objectmeta"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.objectmeta"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.objectmeta"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "creationTimestamp": {},
  "deletionGracePeriodSeconds": 0,
  "deletionTimestamp": {},
  "finalizers": [
    "string"
  ],
  "generateName": "string",
  "generation": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managedFields": [
    {
      "apiVersion": "string",
      "fieldsType": "string",
      "fieldsV1": {},
      "manager": "string",
      "operation": "string",
      "subresource": "string",
      "time": {}
    }
  ],
  "name": "string",
  "namespace": "string",
  "ownerReferences": [
    {
      "apiVersion": "",
      "blockOwnerDeletion": true,
      "controller": true,
      "kind": "",
      "name": "",
      "uid": ""
    }
  ],
  "resourceVersion": "string",
  "selfLink": "string",
  "uid": "string"
}
```

ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|creationTimestamp|object|false|none|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|deletionGracePeriodSeconds|integer(int64)|false|none|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|deletionTimestamp|object|false|none|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|finalizers|[string]|false|none|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|generateName|string|false|none|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|generation|integer(int64)|false|none|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|labels|object|false|none|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|managedFields|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|none|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|name|string|false|none|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|namespace|string|false|none|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|ownerReferences|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|none|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|resourceVersion|string|false|none|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|selfLink|string|false|none|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|uid|string|false|none|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference">io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference"></a>

```json
{
  "apiVersion": "",
  "blockOwnerDeletion": true,
  "controller": true,
  "kind": "",
  "name": "",
  "uid": ""
}
```

OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|true|none|API version of the referent.|
|blockOwnerDeletion|boolean|false|none|If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.|
|controller|boolean|false|none|If true, this reference points to the managing controller.|
|kind|string|true|none|Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|name|string|true|none|Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|uid|string|true|none|UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.Patch">io.k8s.apimachinery.pkg.apis.meta.v1.Patch</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.Patch"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.patch"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.patch"></a>

```json
{}
```

Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions">io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.preconditions"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.preconditions"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.preconditions"></a>

```json
{
  "resourceVersion": "string",
  "uid": "string"
}
```

Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceVersion|string|false|none|Specifies the target ResourceVersion|
|uid|string|false|none|Specifies the target UID.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.ShardInfo">io.k8s.apimachinery.pkg.apis.meta.v1.ShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.shardinfo"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.ShardInfo"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.shardinfo"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.shardinfo"></a>

```json
{
  "selector": ""
}
```

ShardInfo describes the shard selector that was applied to produce a list response. Its presence on a list response indicates the list is a filtered subset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selector|string|true|none|selector is the shard selector string from the request, echoed back so clients can verify which shard they received and merge responses from multiple shards.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.Status">io.k8s.apimachinery.pkg.apis.meta.v1.Status</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.status"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.Status"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.status"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.status"></a>

```json
{
  "apiVersion": "string",
  "code": 0,
  "details": {
    "causes": [
      {
        "field": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "group": "string",
    "kind": "string",
    "name": "string",
    "retryAfterSeconds": 0,
    "uid": "string"
  },
  "kind": "string",
  "message": "string",
  "metadata": {},
  "reason": "string",
  "status": "string"
}
```

Status is a return value for calls that don't return other objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|code|integer(int32)|false|none|Suggested HTTP return code for this status, 0 if not set.|
|details|object|false|none|Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|message|string|false|none|A human-readable description of the status of this operation.|
|metadata|object|false|none|Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|reason|string|false|none|A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.|
|status|string|false|none|Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause">io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.statuscause"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.statuscause"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.statuscause"></a>

```json
{
  "field": "string",
  "message": "string",
  "reason": "string"
}
```

StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.<br><br>Examples:<br>  "name" - the field "name" on the current resource<br>  "items[0].name" - the field "name" on the first array entry in "items"|
|message|string|false|none|A human-readable description of the cause of the error.  This field may be presented as-is to a reader.|
|reason|string|false|none|A machine-readable description of the cause of the error. If this value is empty there is no information available.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails">io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.statusdetails"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.statusdetails"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.statusdetails"></a>

```json
{
  "causes": [
    {
      "field": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "group": "string",
  "kind": "string",
  "name": "string",
  "retryAfterSeconds": 0,
  "uid": "string"
}
```

StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|causes|[[io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.statuscause)]|false|none|The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.|
|group|string|false|none|The group attribute of the resource associated with the status StatusReason.|
|kind|string|false|none|The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|name|string|false|none|The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).|
|retryAfterSeconds|integer(int32)|false|none|If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.|
|uid|string|false|none|UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.Time">io.k8s.apimachinery.pkg.apis.meta.v1.Time</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.time"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.Time"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.time"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.time"></a>

```json
"1970-01-01T00:00:00Z"
```

Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent">io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.watchevent"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.watchevent"></a>

```json
{
  "object": {},
  "type": ""
}
```

Event represents a single event to a watched resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|Object is:<br> * If Type is Added or Modified: the new state of the object.<br> * If Type is Deleted: the state of the object immediately before deletion.<br> * If Type is Error: *Status is recommended; other types may make sense<br>   depending on context.|
|type|string|true|none|none|

<h2 id="tocS_io.k8s.apimachinery.pkg.runtime.RawExtension">io.k8s.apimachinery.pkg.runtime.RawExtension</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.runtime.rawextension"></a>
<a id="schema_io.k8s.apimachinery.pkg.runtime.RawExtension"></a>
<a id="tocSio.k8s.apimachinery.pkg.runtime.rawextension"></a>
<a id="tocsio.k8s.apimachinery.pkg.runtime.rawextension"></a>

```json
{}
```

RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package:

	type MyAPIObject struct {
		runtime.TypeMeta `json:""`
		MyPlugin runtime.Object `json:"myPlugin"`
	}

	type PluginA struct {
		AOption string `json:"aOption"`
	}

// External package:

	type MyAPIObject struct {
		runtime.TypeMeta `json:""`
		MyPlugin runtime.RawExtension `json:"myPlugin"`
	}

	type PluginA struct {
		AOption string `json:"aOption"`
	}

// On the wire, the JSON will look something like this:

	{
		"kind":"MyAPIObject",
		"apiVersion":"v1",
		"myPlugin": {
			"kind":"PluginA",
			"aOption":"foo",
		},
	}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
