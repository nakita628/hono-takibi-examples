<h1 id="kubernetes">Kubernetes vunversioned</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (BearerToken)
    - Parameter Name: **authorization**, in: header. Bearer Token authentication

<h1 id="kubernetes-flowcontrolapiserverv1">flowcontrolApiserver_v1</h1>

## getFlowcontrolApiserverV1APIResources

<a id="opIdgetFlowcontrolApiserverV1APIResources"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/ \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/`

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

<h3 id="getflowcontrolapiserverv1apiresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listFlowcontrolApiserverV1FlowSchema

<a id="opIdlistFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`

list or watch objects of kind FlowSchema

<h3 id="listflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

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

<h3 id="listflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchemaList](#schemaio.k8s.api.flowcontrol.v1.flowschemalist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createFlowcontrolApiserverV1FlowSchema

<a id="opIdcreateFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`

create a FlowSchema

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

<h3 id="createflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » distinguisherMethod|body|object|false|distinguisherMethod defines how to compute the flow distinguisher for requests that match this schema. `nil` specifies that the distinguisher is disabled and thus will always be the empty string.|
|» » » type|body|string|true|type is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.|
|» » matchingPrecedence|body|integer(int32)|false|matchingPrecedence is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.|
|» » priorityLevelConfiguration|body|object|true|priorityLevelConfiguration should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.|
|» » » name|body|string|true|name is the name of the priority level configuration being referenced Required.|
|» » rules|body|[[io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects](#schemaio.k8s.api.flowcontrol.v1.policyruleswithsubjects)]|false|rules describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.|
|» status|body|object|false|status is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.FlowSchemaCondition](#schemaio.k8s.api.flowcontrol.v1.flowschemacondition)]|false|`conditions` is a list of the current states of FlowSchema.|

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

<h3 id="createflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|202|Accepted|Accepted|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteFlowcontrolApiserverV1CollectionFlowSchema

<a id="opIddeleteFlowcontrolApiserverV1CollectionFlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`

delete collection of FlowSchema

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

<h3 id="deleteflowcontrolapiserverv1collectionflowschema-parameters">Parameters</h3>

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

<h3 id="deleteflowcontrolapiserverv1collectionflowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readFlowcontrolApiserverV1FlowSchema

<a id="opIdreadFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`

read the specified FlowSchema

<h3 id="readflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="readflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceFlowcontrolApiserverV1FlowSchema

<a id="opIdreplaceFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`

replace the specified FlowSchema

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

<h3 id="replaceflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the FlowSchema|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » distinguisherMethod|body|object|false|distinguisherMethod defines how to compute the flow distinguisher for requests that match this schema. `nil` specifies that the distinguisher is disabled and thus will always be the empty string.|
|» » » type|body|string|true|type is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.|
|» » matchingPrecedence|body|integer(int32)|false|matchingPrecedence is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.|
|» » priorityLevelConfiguration|body|object|true|priorityLevelConfiguration should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.|
|» » » name|body|string|true|name is the name of the priority level configuration being referenced Required.|
|» » rules|body|[[io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects](#schemaio.k8s.api.flowcontrol.v1.policyruleswithsubjects)]|false|rules describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.|
|» status|body|object|false|status is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.FlowSchemaCondition](#schemaio.k8s.api.flowcontrol.v1.flowschemacondition)]|false|`conditions` is a list of the current states of FlowSchema.|

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

<h3 id="replaceflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteFlowcontrolApiserverV1FlowSchema

<a id="opIddeleteFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`

delete a FlowSchema

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

<h3 id="deleteflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="deleteflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchFlowcontrolApiserverV1FlowSchema

<a id="opIdpatchFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`

partially update the specified FlowSchema

> Body parameter

```json
{}
```

<h3 id="patchflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="patchflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readFlowcontrolApiserverV1FlowSchemaStatus

<a id="opIdreadFlowcontrolApiserverV1FlowSchemaStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string/status \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`

read status of the specified FlowSchema

<h3 id="readflowcontrolapiserverv1flowschemastatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="readflowcontrolapiserverv1flowschemastatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceFlowcontrolApiserverV1FlowSchemaStatus

<a id="opIdreplaceFlowcontrolApiserverV1FlowSchemaStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`

replace status of the specified FlowSchema

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

<h3 id="replaceflowcontrolapiserverv1flowschemastatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the FlowSchema|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » distinguisherMethod|body|object|false|distinguisherMethod defines how to compute the flow distinguisher for requests that match this schema. `nil` specifies that the distinguisher is disabled and thus will always be the empty string.|
|» » » type|body|string|true|type is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.|
|» » matchingPrecedence|body|integer(int32)|false|matchingPrecedence is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.|
|» » priorityLevelConfiguration|body|object|true|priorityLevelConfiguration should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.|
|» » » name|body|string|true|name is the name of the priority level configuration being referenced Required.|
|» » rules|body|[[io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects](#schemaio.k8s.api.flowcontrol.v1.policyruleswithsubjects)]|false|rules describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.|
|» status|body|object|false|status is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.FlowSchemaCondition](#schemaio.k8s.api.flowcontrol.v1.flowschemacondition)]|false|`conditions` is a list of the current states of FlowSchema.|

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

<h3 id="replaceflowcontrolapiserverv1flowschemastatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchFlowcontrolApiserverV1FlowSchemaStatus

<a id="opIdpatchFlowcontrolApiserverV1FlowSchemaStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`

partially update status of the specified FlowSchema

> Body parameter

```json
{}
```

<h3 id="patchflowcontrolapiserverv1flowschemastatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="patchflowcontrolapiserverv1flowschemastatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdlistFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`

list or watch objects of kind PriorityLevelConfiguration

<h3 id="listflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

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

<h3 id="listflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationList](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdcreateFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`

create a PriorityLevelConfiguration

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

<h3 id="createflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » exempt|body|object|false|exempt specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.|
|» » limited|body|object|false|limited specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if type is `"Limited"`.|
|» » » borrowingLimitPercent|body|integer(int32)|false|borrowingLimitPercent configures a limit on how many seats this priority level can borrow from other priority levels, if present. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.<br><br>BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )<br><br>The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » limitResponse|body|object|true|limitResponse indicates what to do with requests that can not be executed right now|
|» » » » queuing|body|object|false|queuing holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.|
|» » » » » handSize|body|integer(int32)|false|handSize is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.|
|» » » » » queueLengthLimit|body|integer(int32)|false|queueLengthLimit is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.|
|» » » » » queues|body|integer(int32)|false|queues is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.|
|» » » » type|body|string|true|type is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level.<br><br>If not specified, this field defaults to a value of 30.<br><br>Setting this field to zero supports the construction of a "jail" for this priority level that is used to hold some request(s)|
|» » type|body|string|true|type indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.|
|» status|body|object|false|status is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition)]|false|`conditions` is the current state of "request-priority".|

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

<h3 id="createflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|202|Accepted|Accepted|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration

<a id="opIddeleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`

delete collection of PriorityLevelConfiguration

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

<h3 id="deleteflowcontrolapiserverv1collectionprioritylevelconfiguration-parameters">Parameters</h3>

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

<h3 id="deleteflowcontrolapiserverv1collectionprioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdreadFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`

read the specified PriorityLevelConfiguration

<h3 id="readflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="readflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdreplaceFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`

replace the specified PriorityLevelConfiguration

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

<h3 id="replaceflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the PriorityLevelConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » exempt|body|object|false|exempt specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.|
|» » limited|body|object|false|limited specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if type is `"Limited"`.|
|» » » borrowingLimitPercent|body|integer(int32)|false|borrowingLimitPercent configures a limit on how many seats this priority level can borrow from other priority levels, if present. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.<br><br>BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )<br><br>The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » limitResponse|body|object|true|limitResponse indicates what to do with requests that can not be executed right now|
|» » » » queuing|body|object|false|queuing holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.|
|» » » » » handSize|body|integer(int32)|false|handSize is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.|
|» » » » » queueLengthLimit|body|integer(int32)|false|queueLengthLimit is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.|
|» » » » » queues|body|integer(int32)|false|queues is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.|
|» » » » type|body|string|true|type is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level.<br><br>If not specified, this field defaults to a value of 30.<br><br>Setting this field to zero supports the construction of a "jail" for this priority level that is used to hold some request(s)|
|» » type|body|string|true|type indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.|
|» status|body|object|false|status is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition)]|false|`conditions` is the current state of "request-priority".|

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

<h3 id="replaceflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIddeleteFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`

delete a PriorityLevelConfiguration

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

<h3 id="deleteflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="deleteflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdpatchFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`

partially update the specified PriorityLevelConfiguration

> Body parameter

```json
{}
```

<h3 id="patchflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="patchflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readFlowcontrolApiserverV1PriorityLevelConfigurationStatus

<a id="opIdreadFlowcontrolApiserverV1PriorityLevelConfigurationStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string/status \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`

read status of the specified PriorityLevelConfiguration

<h3 id="readflowcontrolapiserverv1prioritylevelconfigurationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="readflowcontrolapiserverv1prioritylevelconfigurationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus

<a id="opIdreplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`

replace status of the specified PriorityLevelConfiguration

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

<h3 id="replaceflowcontrolapiserverv1prioritylevelconfigurationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the PriorityLevelConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » exempt|body|object|false|exempt specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.|
|» » limited|body|object|false|limited specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if type is `"Limited"`.|
|» » » borrowingLimitPercent|body|integer(int32)|false|borrowingLimitPercent configures a limit on how many seats this priority level can borrow from other priority levels, if present. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.<br><br>BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )<br><br>The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.|
|» » » lendablePercent|body|integer(int32)|false|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|» » » limitResponse|body|object|true|limitResponse indicates what to do with requests that can not be executed right now|
|» » » » queuing|body|object|false|queuing holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.|
|» » » » » handSize|body|integer(int32)|false|handSize is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.|
|» » » » » queueLengthLimit|body|integer(int32)|false|queueLengthLimit is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.|
|» » » » » queues|body|integer(int32)|false|queues is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.|
|» » » » type|body|string|true|type is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.|
|» » » nominalConcurrencyShares|body|integer(int32)|false|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level.<br><br>If not specified, this field defaults to a value of 30.<br><br>Setting this field to zero supports the construction of a "jail" for this priority level that is used to hold some request(s)|
|» » type|body|string|true|type indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.|
|» status|body|object|false|status is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|» » conditions|body|[[io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition)]|false|`conditions` is the current state of "request-priority".|

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

<h3 id="replaceflowcontrolapiserverv1prioritylevelconfigurationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus

<a id="opIdpatchFlowcontrolApiserverV1PriorityLevelConfigurationStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`

partially update status of the specified PriorityLevelConfiguration

> Body parameter

```json
{}
```

<h3 id="patchflowcontrolapiserverv1prioritylevelconfigurationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="patchflowcontrolapiserverv1prioritylevelconfigurationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|201|Created|Created|[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchFlowcontrolApiserverV1FlowSchemaList

<a id="opIdwatchFlowcontrolApiserverV1FlowSchemaList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas`

watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchflowcontrolapiserverv1flowschemalist-parameters">Parameters</h3>

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

<h3 id="watchflowcontrolapiserverv1flowschemalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchFlowcontrolApiserverV1FlowSchema

<a id="opIdwatchFlowcontrolApiserverV1FlowSchema"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/string \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/{name}`

watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchflowcontrolapiserverv1flowschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the FlowSchema|
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

<h3 id="watchflowcontrolapiserverv1flowschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchFlowcontrolApiserverV1PriorityLevelConfigurationList

<a id="opIdwatchFlowcontrolApiserverV1PriorityLevelConfigurationList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations`

watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchflowcontrolapiserverv1prioritylevelconfigurationlist-parameters">Parameters</h3>

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

<h3 id="watchflowcontrolapiserverv1prioritylevelconfigurationlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchFlowcontrolApiserverV1PriorityLevelConfiguration

<a id="opIdwatchFlowcontrolApiserverV1PriorityLevelConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/{name}`

watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchflowcontrolapiserverv1prioritylevelconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the PriorityLevelConfiguration|
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

<h3 id="watchflowcontrolapiserverv1prioritylevelconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration">io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.exemptprioritylevelconfiguration"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.exemptprioritylevelconfiguration"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.exemptprioritylevelconfiguration"></a>

```json
{
  "lendablePercent": 0,
  "nominalConcurrencyShares": 0
}
```

ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lendablePercent|integer(int32)|false|none|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|nominalConcurrencyShares|integer(int32)|false|none|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowDistinguisherMethod">io.k8s.api.flowcontrol.v1.FlowDistinguisherMethod</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowdistinguishermethod"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowDistinguisherMethod"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowdistinguishermethod"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowdistinguishermethod"></a>

```json
{
  "type": ""
}
```

FlowDistinguisherMethod specifies the method of a flow distinguisher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|type is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowSchema">io.k8s.api.flowcontrol.v1.FlowSchema</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowschema"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowSchema"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowschema"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowschema"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|status|object|false|none|status is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowSchemaCondition">io.k8s.api.flowcontrol.v1.FlowSchemaCondition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowschemacondition"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowSchemaCondition"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowschemacondition"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowschemacondition"></a>

```json
{
  "lastTransitionTime": {},
  "message": "string",
  "reason": "string",
  "status": "string",
  "type": "string"
}
```

FlowSchemaCondition describes conditions for a FlowSchema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastTransitionTime|object|false|none|lastTransitionTime is the last time the condition transitioned from one status to another.|
|message|string|false|none|message is a human-readable message indicating details about last transition.|
|reason|string|false|none|reason is a unique, one-word, CamelCase reason for the condition's last transition.|
|status|string|false|none|status is the status of the condition. Should be specified and set to one of True, False, Unknown.|
|type|string|true|none|type is the type of the condition. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowSchemaList">io.k8s.api.flowcontrol.v1.FlowSchemaList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowschemalist"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowSchemaList"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowschemalist"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowschemalist"></a>

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

FlowSchemaList is a list of FlowSchema objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.flowcontrol.v1.FlowSchema](#schemaio.k8s.api.flowcontrol.v1.flowschema)]|true|none|`items` is a list of FlowSchemas.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|`metadata` is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowSchemaSpec">io.k8s.api.flowcontrol.v1.FlowSchemaSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowschemaspec"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowSchemaSpec"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowschemaspec"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowschemaspec"></a>

```json
{
  "distinguisherMethod": {
    "type": ""
  },
  "matchingPrecedence": 0,
  "priorityLevelConfiguration": {},
  "rules": [
    {
      "nonResourceRules": [
        {
          "nonResourceURLs": [
            "string"
          ],
          "verbs": [
            "string"
          ]
        }
      ],
      "resourceRules": [
        {
          "apiGroups": [
            "string"
          ],
          "clusterScope": true,
          "namespaces": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "verbs": [
            "string"
          ]
        }
      ],
      "subjects": [
        {
          "group": {
            "name": ""
          },
          "kind": "",
          "serviceAccount": {
            "name": "",
            "namespace": ""
          },
          "user": {
            "name": ""
          }
        }
      ]
    }
  ]
}
```

FlowSchemaSpec describes how the FlowSchema's specification looks like.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distinguisherMethod|object|false|none|distinguisherMethod defines how to compute the flow distinguisher for requests that match this schema. `nil` specifies that the distinguisher is disabled and thus will always be the empty string.|
|matchingPrecedence|integer(int32)|false|none|matchingPrecedence is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.|
|priorityLevelConfiguration|object|true|none|priorityLevelConfiguration should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.|
|rules|[[io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects](#schemaio.k8s.api.flowcontrol.v1.policyruleswithsubjects)]|false|none|rules describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.FlowSchemaStatus">io.k8s.api.flowcontrol.v1.FlowSchemaStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.flowschemastatus"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.FlowSchemaStatus"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.flowschemastatus"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.flowschemastatus"></a>

```json
{
  "conditions": [
    {
      "lastTransitionTime": {},
      "message": "string",
      "reason": "string",
      "status": "string",
      "type": "string"
    }
  ]
}
```

FlowSchemaStatus represents the current state of a FlowSchema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[io.k8s.api.flowcontrol.v1.FlowSchemaCondition](#schemaio.k8s.api.flowcontrol.v1.flowschemacondition)]|false|none|`conditions` is a list of the current states of FlowSchema.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.GroupSubject">io.k8s.api.flowcontrol.v1.GroupSubject</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.groupsubject"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.GroupSubject"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.groupsubject"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.groupsubject"></a>

```json
{
  "name": ""
}
```

GroupSubject holds detailed information for group-kind subject.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.LimitResponse">io.k8s.api.flowcontrol.v1.LimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.limitresponse"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.LimitResponse"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.limitresponse"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.limitresponse"></a>

```json
{
  "queuing": {
    "handSize": 0,
    "queueLengthLimit": 0,
    "queues": 0
  },
  "type": ""
}
```

LimitResponse defines how to handle requests that can not be executed right now.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queuing|object|false|none|queuing holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.|
|type|string|true|none|type is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.LimitedPriorityLevelConfiguration">io.k8s.api.flowcontrol.v1.LimitedPriorityLevelConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.limitedprioritylevelconfiguration"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.LimitedPriorityLevelConfiguration"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.limitedprioritylevelconfiguration"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.limitedprioritylevelconfiguration"></a>

```json
{
  "borrowingLimitPercent": 0,
  "lendablePercent": 0,
  "limitResponse": {},
  "nominalConcurrencyShares": 0
}
```

LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
  - How are requests for this priority level limited?
  - What should be done with requests that exceed the limit?

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|borrowingLimitPercent|integer(int32)|false|none|borrowingLimitPercent configures a limit on how many seats this priority level can borrow from other priority levels, if present. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.<br><br>BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )<br><br>The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.|
|lendablePercent|integer(int32)|false|none|lendablePercent prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.<br><br>LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )|
|limitResponse|object|true|none|limitResponse indicates what to do with requests that can not be executed right now|
|nominalConcurrencyShares|integer(int32)|false|none|nominalConcurrencyShares (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:<br><br>NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)<br><br>Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level.<br><br>If not specified, this field defaults to a value of 30.<br><br>Setting this field to zero supports the construction of a "jail" for this priority level that is used to hold some request(s)|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.NonResourcePolicyRule">io.k8s.api.flowcontrol.v1.NonResourcePolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.nonresourcepolicyrule"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.NonResourcePolicyRule"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.nonresourcepolicyrule"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.nonresourcepolicyrule"></a>

```json
{
  "nonResourceURLs": [
    "string"
  ],
  "verbs": [
    "string"
  ]
}
```

NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonResourceURLs|[string]|true|none|nonResourceURLs is a set of url prefixes that a user should have access to and may not be empty. For example:<br>  - "/healthz" is legal<br>  - "/hea*" is illegal<br>  - "/hea" is legal but matches nothing<br>  - "/hea/*" also matches nothing<br>  - "/healthz/*" matches all per-component health checks.<br>"*" matches all non-resource urls. if it is present, it must be the only entry. Required.|
|verbs|[string]|true|none|verbs is a list of matching verbs and may not be empty. "*" matches all verbs. If it is present, it must be the only entry. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects">io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.policyruleswithsubjects"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.policyruleswithsubjects"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.policyruleswithsubjects"></a>

```json
{
  "nonResourceRules": [
    {
      "nonResourceURLs": [
        "string"
      ],
      "verbs": [
        "string"
      ]
    }
  ],
  "resourceRules": [
    {
      "apiGroups": [
        "string"
      ],
      "clusterScope": true,
      "namespaces": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "verbs": [
        "string"
      ]
    }
  ],
  "subjects": [
    {
      "group": {
        "name": ""
      },
      "kind": "",
      "serviceAccount": {
        "name": "",
        "namespace": ""
      },
      "user": {
        "name": ""
      }
    }
  ]
}
```

PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonResourceRules|[[io.k8s.api.flowcontrol.v1.NonResourcePolicyRule](#schemaio.k8s.api.flowcontrol.v1.nonresourcepolicyrule)]|false|none|nonResourceRules is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.|
|resourceRules|[[io.k8s.api.flowcontrol.v1.ResourcePolicyRule](#schemaio.k8s.api.flowcontrol.v1.resourcepolicyrule)]|false|none|resourceRules is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.|
|subjects|[[io.k8s.api.flowcontrol.v1.Subject](#schemaio.k8s.api.flowcontrol.v1.subject)]|true|none|subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration">io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfiguration"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfiguration"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

PriorityLevelConfiguration represents the configuration of a priority level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|
|status|object|false|none|status is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition">io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition"></a>

```json
{
  "lastTransitionTime": {},
  "message": "string",
  "reason": "string",
  "status": "string",
  "type": "string"
}
```

PriorityLevelConfigurationCondition defines the condition of priority level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastTransitionTime|object|false|none|lastTransitionTime is the last time the condition transitioned from one status to another.|
|message|string|false|none|message is a human-readable message indicating details about last transition.|
|reason|string|false|none|reason is a unique, one-word, CamelCase reason for the condition's last transition.|
|status|string|false|none|status is the status of the condition. Should be specified and set to one of True, False, Unknown.|
|type|string|true|none|type is the type of the condition. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationList">io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationlist"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationList"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfigurationlist"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfigurationlist"></a>

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

PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfiguration)]|true|none|`items` is a list of request-priorities.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|`metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationReference">io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationReference</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationreference"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationReference"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfigurationreference"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfigurationreference"></a>

```json
{
  "name": ""
}
```

PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name is the name of the priority level configuration being referenced Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationSpec">io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationspec"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationSpec"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfigurationspec"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfigurationspec"></a>

```json
{
  "exempt": {
    "lendablePercent": 0,
    "nominalConcurrencyShares": 0
  },
  "limited": {
    "borrowingLimitPercent": 0,
    "lendablePercent": 0,
    "limitResponse": {},
    "nominalConcurrencyShares": 0
  },
  "type": ""
}
```

PriorityLevelConfigurationSpec specifies the configuration of a priority level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exempt|object|false|none|exempt specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.|
|limited|object|false|none|limited specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if type is `"Limited"`.|
|type|string|true|none|type indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationStatus">io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationstatus"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationStatus"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.prioritylevelconfigurationstatus"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.prioritylevelconfigurationstatus"></a>

```json
{
  "conditions": [
    {
      "lastTransitionTime": {},
      "message": "string",
      "reason": "string",
      "status": "string",
      "type": "string"
    }
  ]
}
```

PriorityLevelConfigurationStatus represents the current state of a "request-priority".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationCondition](#schemaio.k8s.api.flowcontrol.v1.prioritylevelconfigurationcondition)]|false|none|`conditions` is the current state of "request-priority".|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.QueuingConfiguration">io.k8s.api.flowcontrol.v1.QueuingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.queuingconfiguration"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.QueuingConfiguration"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.queuingconfiguration"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.queuingconfiguration"></a>

```json
{
  "handSize": 0,
  "queueLengthLimit": 0,
  "queues": 0
}
```

QueuingConfiguration holds the configuration parameters for queuing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handSize|integer(int32)|false|none|handSize is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.|
|queueLengthLimit|integer(int32)|false|none|queueLengthLimit is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.|
|queues|integer(int32)|false|none|queues is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.ResourcePolicyRule">io.k8s.api.flowcontrol.v1.ResourcePolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.resourcepolicyrule"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.ResourcePolicyRule"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.resourcepolicyrule"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.resourcepolicyrule"></a>

```json
{
  "apiGroups": [
    "string"
  ],
  "clusterScope": true,
  "namespaces": [
    "string"
  ],
  "resources": [
    "string"
  ],
  "verbs": [
    "string"
  ]
}
```

ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) either (d1) the request does not specify a namespace (i.e., `Namespace==""`) and clusterScope is true or (d2) the request specifies a namespace and least one member of namespaces matches the request's namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiGroups|[string]|true|none|apiGroups is a list of matching API groups and may not be empty. "*" matches all API groups and, if present, must be the only entry. Required.|
|clusterScope|boolean|false|none|clusterScope indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.|
|namespaces|[string]|false|none|namespaces is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "*".  Note that "*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.|
|resources|[string]|true|none|resources is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "*" matches all resources and, if present, must be the only entry. Required.|
|verbs|[string]|true|none|verbs is a list of matching verbs and may not be empty. "*" matches all verbs and, if present, must be the only entry. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.ServiceAccountSubject">io.k8s.api.flowcontrol.v1.ServiceAccountSubject</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.serviceaccountsubject"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.ServiceAccountSubject"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.serviceaccountsubject"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.serviceaccountsubject"></a>

```json
{
  "name": "",
  "namespace": ""
}
```

ServiceAccountSubject holds detailed information for service-account-kind subject.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.|
|namespace|string|true|none|namespace is the namespace of matching ServiceAccount objects. Required.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.Subject">io.k8s.api.flowcontrol.v1.Subject</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.subject"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.Subject"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.subject"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.subject"></a>

```json
{
  "group": {
    "name": ""
  },
  "kind": "",
  "serviceAccount": {
    "name": "",
    "namespace": ""
  },
  "user": {
    "name": ""
  }
}
```

Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|group matches based on user group name.|
|kind|string|true|none|kind indicates which one of the other fields is non-empty. Required|
|serviceAccount|object|false|none|serviceAccount matches ServiceAccounts.|
|user|object|false|none|user matches based on username.|

<h2 id="tocS_io.k8s.api.flowcontrol.v1.UserSubject">io.k8s.api.flowcontrol.v1.UserSubject</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.flowcontrol.v1.usersubject"></a>
<a id="schema_io.k8s.api.flowcontrol.v1.UserSubject"></a>
<a id="tocSio.k8s.api.flowcontrol.v1.usersubject"></a>
<a id="tocsio.k8s.api.flowcontrol.v1.usersubject"></a>

```json
{
  "name": ""
}
```

UserSubject holds detailed information for user-kind subject.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name is the username that matches, or "*" to match all usernames. Required.|

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
