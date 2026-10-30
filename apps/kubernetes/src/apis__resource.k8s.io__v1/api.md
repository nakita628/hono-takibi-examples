<h1 id="kubernetes">Kubernetes vunversioned</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (BearerToken)
    - Parameter Name: **authorization**, in: header. Bearer Token authentication

<h1 id="kubernetes-resourcev1">resource_v1</h1>

## getResourceV1APIResources

<a id="opIdgetResourceV1APIResources"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/ \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/`

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

<h3 id="getresourcev1apiresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1DeviceClass

<a id="opIdlistResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/deviceclasses`

list or watch objects of kind DeviceClass

<h3 id="listresourcev1deviceclass-parameters">Parameters</h3>

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
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClassList](#schemaio.k8s.api.resource.v1.deviceclasslist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createResourceV1DeviceClass

<a id="opIdcreateResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/resource.k8s.io/v1/deviceclasses`

create a DeviceClass

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|false|spec defines what can be allocated and how to configure it.<br><br>This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » config|body|[[io.k8s.api.resource.v1.DeviceClassConfiguration](#schemaio.k8s.api.resource.v1.deviceclassconfiguration)]|false|config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.<br><br>They are passed to the driver, but are not considered while allocating the claim.|
|» » extendedResourceName|body|string|false|extendedResourceName is the extended resource name for the devices of this class. The devices of this class can be used to satisfy a pod's extended resource requests. It has the same format as the name of a pod's extended resource. It should be unique among all the device classes in a cluster. If two device classes have the same name, then the class created later is picked to satisfy a pod's extended resource requests. If two classes are created at the same time, then the name of the class lexicographically sorted first is picked.|
|» » selectors|body|[[io.k8s.api.resource.v1.DeviceSelector](#schemaio.k8s.api.resource.v1.deviceselector)]|false|selectors is the list of device selectors. Each selector must be satisfied by a device which is claimed via this class.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1CollectionDeviceClass

<a id="opIddeleteResourceV1CollectionDeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/deviceclasses`

delete collection of DeviceClass

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

<h3 id="deleteresourcev1collectiondeviceclass-parameters">Parameters</h3>

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

<h3 id="deleteresourcev1collectiondeviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1DeviceClass

<a id="opIdreadResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/deviceclasses/{name}`

read the specified DeviceClass

<h3 id="readresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the DeviceClass|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="readresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1DeviceClass

<a id="opIdreplaceResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/resource.k8s.io/v1/deviceclasses/{name}`

replace the specified DeviceClass

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the DeviceClass|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|false|spec defines what can be allocated and how to configure it.<br><br>This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » config|body|[[io.k8s.api.resource.v1.DeviceClassConfiguration](#schemaio.k8s.api.resource.v1.deviceclassconfiguration)]|false|config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.<br><br>They are passed to the driver, but are not considered while allocating the claim.|
|» » extendedResourceName|body|string|false|extendedResourceName is the extended resource name for the devices of this class. The devices of this class can be used to satisfy a pod's extended resource requests. It has the same format as the name of a pod's extended resource. It should be unique among all the device classes in a cluster. If two device classes have the same name, then the class created later is picked to satisfy a pod's extended resource requests. If two classes are created at the same time, then the name of the class lexicographically sorted first is picked.|
|» » selectors|body|[[io.k8s.api.resource.v1.DeviceSelector](#schemaio.k8s.api.resource.v1.deviceselector)]|false|selectors is the list of device selectors. Each selector must be satisfied by a device which is claimed via this class.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1DeviceClass

<a id="opIddeleteResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/deviceclasses/{name}`

delete a DeviceClass

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

<h3 id="deleteresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the DeviceClass|
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
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="deleteresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1DeviceClass

<a id="opIdpatchResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/deviceclasses/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/deviceclasses/{name}`

partially update the specified DeviceClass

> Body parameter

```json
{}
```

<h3 id="patchresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the DeviceClass|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="patchresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1DeviceTaintRule

<a id="opIdlistResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/devicetaintrules`

list or watch objects of kind DeviceTaintRule

<h3 id="listresourcev1devicetaintrule-parameters">Parameters</h3>

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

<h3 id="listresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRuleList](#schemaio.k8s.api.resource.v1.devicetaintrulelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createResourceV1DeviceTaintRule

<a id="opIdcreateResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/resource.k8s.io/v1/devicetaintrules`

create a DeviceTaintRule

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

<h3 id="createresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|true|spec specifies the selector and one taint.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » deviceSelector|body|object|false|deviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.|
|» » » device|body|string|false|device represents the name of the device. If device is set, only devices with that name are selected. This field corresponds to slice.spec.devices[].name.<br><br>Setting also driver and pool may be required to avoid ambiguity, but is not required.|
|» » » driver|body|string|false|driver is the driver name. If driver is set, only devices from that driver are selected. This fields corresponds to slice.spec.driver.|
|» » » pool|body|string|false|pool is the pool name. If pool is set, only devices in that pool are selected.<br><br>Also setting the driver name may be useful to avoid ambiguity when different drivers use the same pool name, but this is not required because selecting pools from different drivers may also be useful, for example when drivers with node-local devices use the node name as their pool name.|
|» » taint|body|object|true|taint is the taint that gets applied to matching devices.|
|» » » effect|body|string|true|effect is the effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.<br><br>Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.|
|» » » key|body|string|true|key is the taint key to be applied to a device. Must be a label name.|
|» » » timeAdded|body|object|false|timeAdded represents the time at which the taint was added or (only in a DeviceTaintRule) the effect was modified. Added automatically during create or update if not set.<br><br>In addition, in a DeviceTaintRule a value provided during an update gets replaced with the current time if the provided value is the same as the old one and the new effect is different. Changing the key and/or value while keeping the effect unchanged is possible and does not update the time stamp because the eviction which uses it is either already started (NoExecute) or not started yet (NoEffect, NoSchedule).|
|» » » value|body|string|false|value is the taint value corresponding to the taint key. Must be a label value.|
|» status|body|object|false|status provides information about what was requested in the spec.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions provide information about the state of the DeviceTaintRule and the cluster at some point in time, in a machine-readable and human-readable format.<br><br>The following condition is currently defined as part of this API, more may get added: - Type: EvictionInProgress - Status: True if there are currently pods which need to be evicted, False otherwise<br>  (includes the effects which don't cause eviction).<br>- Reason: not specified, may change - Message: includes information about number of pending pods and already evicted pods<br>  in a human-readable format, updated periodically, may change<br><br>For `effect: None`, the condition above gets set once for each change to the spec, with the message containing information about what would happen if the effect was `NoExecute`. This feedback can be used to decide whether changing the effect to `NoExecute` will work as intended. It only gets set once to avoid having to constantly update the status.<br><br>Must have 8 or fewer entries.|

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

<h3 id="createresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1CollectionDeviceTaintRule

<a id="opIddeleteResourceV1CollectionDeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/devicetaintrules`

delete collection of DeviceTaintRule

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

<h3 id="deleteresourcev1collectiondevicetaintrule-parameters">Parameters</h3>

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

<h3 id="deleteresourcev1collectiondevicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1DeviceTaintRule

<a id="opIdreadResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/devicetaintrules/{name}`

read the specified DeviceTaintRule

<h3 id="readresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="readresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1DeviceTaintRule

<a id="opIdreplaceResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/resource.k8s.io/v1/devicetaintrules/{name}`

replace the specified DeviceTaintRule

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

<h3 id="replaceresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the DeviceTaintRule|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|true|spec specifies the selector and one taint.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » deviceSelector|body|object|false|deviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.|
|» » » device|body|string|false|device represents the name of the device. If device is set, only devices with that name are selected. This field corresponds to slice.spec.devices[].name.<br><br>Setting also driver and pool may be required to avoid ambiguity, but is not required.|
|» » » driver|body|string|false|driver is the driver name. If driver is set, only devices from that driver are selected. This fields corresponds to slice.spec.driver.|
|» » » pool|body|string|false|pool is the pool name. If pool is set, only devices in that pool are selected.<br><br>Also setting the driver name may be useful to avoid ambiguity when different drivers use the same pool name, but this is not required because selecting pools from different drivers may also be useful, for example when drivers with node-local devices use the node name as their pool name.|
|» » taint|body|object|true|taint is the taint that gets applied to matching devices.|
|» » » effect|body|string|true|effect is the effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.<br><br>Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.|
|» » » key|body|string|true|key is the taint key to be applied to a device. Must be a label name.|
|» » » timeAdded|body|object|false|timeAdded represents the time at which the taint was added or (only in a DeviceTaintRule) the effect was modified. Added automatically during create or update if not set.<br><br>In addition, in a DeviceTaintRule a value provided during an update gets replaced with the current time if the provided value is the same as the old one and the new effect is different. Changing the key and/or value while keeping the effect unchanged is possible and does not update the time stamp because the eviction which uses it is either already started (NoExecute) or not started yet (NoEffect, NoSchedule).|
|» » » value|body|string|false|value is the taint value corresponding to the taint key. Must be a label value.|
|» status|body|object|false|status provides information about what was requested in the spec.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions provide information about the state of the DeviceTaintRule and the cluster at some point in time, in a machine-readable and human-readable format.<br><br>The following condition is currently defined as part of this API, more may get added: - Type: EvictionInProgress - Status: True if there are currently pods which need to be evicted, False otherwise<br>  (includes the effects which don't cause eviction).<br>- Reason: not specified, may change - Message: includes information about number of pending pods and already evicted pods<br>  in a human-readable format, updated periodically, may change<br><br>For `effect: None`, the condition above gets set once for each change to the spec, with the message containing information about what would happen if the effect was `NoExecute`. This feedback can be used to decide whether changing the effect to `NoExecute` will work as intended. It only gets set once to avoid having to constantly update the status.<br><br>Must have 8 or fewer entries.|

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

<h3 id="replaceresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1DeviceTaintRule

<a id="opIddeleteResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/devicetaintrules/{name}`

delete a DeviceTaintRule

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

<h3 id="deleteresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="deleteresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1DeviceTaintRule

<a id="opIdpatchResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/devicetaintrules/{name}`

partially update the specified DeviceTaintRule

> Body parameter

```json
{}
```

<h3 id="patchresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="patchresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1DeviceTaintRuleStatus

<a id="opIdreadResourceV1DeviceTaintRuleStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string/status \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/devicetaintrules/{name}/status`

read status of the specified DeviceTaintRule

<h3 id="readresourcev1devicetaintrulestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="readresourcev1devicetaintrulestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1DeviceTaintRuleStatus

<a id="opIdreplaceResourceV1DeviceTaintRuleStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/resource.k8s.io/v1/devicetaintrules/{name}/status`

replace status of the specified DeviceTaintRule

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

<h3 id="replaceresourcev1devicetaintrulestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the DeviceTaintRule|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|true|spec specifies the selector and one taint.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » deviceSelector|body|object|false|deviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.|
|» » » device|body|string|false|device represents the name of the device. If device is set, only devices with that name are selected. This field corresponds to slice.spec.devices[].name.<br><br>Setting also driver and pool may be required to avoid ambiguity, but is not required.|
|» » » driver|body|string|false|driver is the driver name. If driver is set, only devices from that driver are selected. This fields corresponds to slice.spec.driver.|
|» » » pool|body|string|false|pool is the pool name. If pool is set, only devices in that pool are selected.<br><br>Also setting the driver name may be useful to avoid ambiguity when different drivers use the same pool name, but this is not required because selecting pools from different drivers may also be useful, for example when drivers with node-local devices use the node name as their pool name.|
|» » taint|body|object|true|taint is the taint that gets applied to matching devices.|
|» » » effect|body|string|true|effect is the effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.<br><br>Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.|
|» » » key|body|string|true|key is the taint key to be applied to a device. Must be a label name.|
|» » » timeAdded|body|object|false|timeAdded represents the time at which the taint was added or (only in a DeviceTaintRule) the effect was modified. Added automatically during create or update if not set.<br><br>In addition, in a DeviceTaintRule a value provided during an update gets replaced with the current time if the provided value is the same as the old one and the new effect is different. Changing the key and/or value while keeping the effect unchanged is possible and does not update the time stamp because the eviction which uses it is either already started (NoExecute) or not started yet (NoEffect, NoSchedule).|
|» » » value|body|string|false|value is the taint value corresponding to the taint key. Must be a label value.|
|» status|body|object|false|status provides information about what was requested in the spec.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions provide information about the state of the DeviceTaintRule and the cluster at some point in time, in a machine-readable and human-readable format.<br><br>The following condition is currently defined as part of this API, more may get added: - Type: EvictionInProgress - Status: True if there are currently pods which need to be evicted, False otherwise<br>  (includes the effects which don't cause eviction).<br>- Reason: not specified, may change - Message: includes information about number of pending pods and already evicted pods<br>  in a human-readable format, updated periodically, may change<br><br>For `effect: None`, the condition above gets set once for each change to the spec, with the message containing information about what would happen if the effect was `NoExecute`. This feedback can be used to decide whether changing the effect to `NoExecute` will work as intended. It only gets set once to avoid having to constantly update the status.<br><br>Must have 8 or fewer entries.|

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

<h3 id="replaceresourcev1devicetaintrulestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1DeviceTaintRuleStatus

<a id="opIdpatchResourceV1DeviceTaintRuleStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/devicetaintrules/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/devicetaintrules/{name}/status`

partially update status of the specified DeviceTaintRule

> Body parameter

```json
{}
```

<h3 id="patchresourcev1devicetaintrulestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="patchresourcev1devicetaintrulestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|201|Created|Created|[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1NamespacedResourceClaim

<a id="opIdlistResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims`

list or watch objects of kind ResourceClaim

<h3 id="listresourcev1namespacedresourceclaim-parameters">Parameters</h3>

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
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="listresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimList](#schemaio.k8s.api.resource.v1.resourceclaimlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createResourceV1NamespacedResourceClaim

<a id="opIdcreateResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims`

create a ResourceClaim

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

<h3 id="createresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata.|
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
|» spec|body|object|false|spec describes what is being requested and how to configure it. The spec is immutable.|
|» » devices|body|object|false|devices defines how to request devices.|
|» » » config|body|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|» » » constraints|body|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|constraints must be satisfied by the set of devices that get allocated for the claim.|
|» » » requests|body|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|
|» status|body|object|false|status describes whether the claim is ready to use and what has been allocated.|
|» » allocation|body|object|false|allocation is set once the claim has been allocated successfully.|
|» » » allocationTimestamp|body|object|false|allocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.|
|» » » devices|body|object|false|devices is the result of allocating devices.|
|» » » » config|body|[[io.k8s.api.resource.v1.DeviceAllocationConfiguration](#schemaio.k8s.api.resource.v1.deviceallocationconfiguration)]|false|config is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.<br><br>This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.|
|» » » » results|body|[[io.k8s.api.resource.v1.DeviceRequestAllocationResult](#schemaio.k8s.api.resource.v1.devicerequestallocationresult)]|false|results lists all allocated devices.|
|» » » nodeSelector|body|object|false|nodeSelector defines where the allocated resources are available. If unset, they are available everywhere.|
|» » » » nodeSelectorTerms|body|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|
|» » devices|body|[[io.k8s.api.resource.v1.AllocatedDeviceStatus](#schemaio.k8s.api.resource.v1.allocateddevicestatus)]|false|devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.|
|» » reservedFor|body|[[io.k8s.api.resource.v1.ResourceClaimConsumerReference](#schemaio.k8s.api.resource.v1.resourceclaimconsumerreference)]|false|reservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.<br><br>In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.<br><br>Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.<br><br>There can be at most 256 such reservations. This may get increased in the future, but not reduced.|

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

<h3 id="createresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1CollectionNamespacedResourceClaim

<a id="opIddeleteResourceV1CollectionNamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims`

delete collection of ResourceClaim

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

<h3 id="deleteresourcev1collectionnamespacedresourceclaim-parameters">Parameters</h3>

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
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="deleteresourcev1collectionnamespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1NamespacedResourceClaim

<a id="opIdreadResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}`

read the specified ResourceClaim

<h3 id="readresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="readresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1NamespacedResourceClaim

<a id="opIdreplaceResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}`

replace the specified ResourceClaim

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

<h3 id="replaceresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata.|
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
|» spec|body|object|false|spec describes what is being requested and how to configure it. The spec is immutable.|
|» » devices|body|object|false|devices defines how to request devices.|
|» » » config|body|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|» » » constraints|body|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|constraints must be satisfied by the set of devices that get allocated for the claim.|
|» » » requests|body|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|
|» status|body|object|false|status describes whether the claim is ready to use and what has been allocated.|
|» » allocation|body|object|false|allocation is set once the claim has been allocated successfully.|
|» » » allocationTimestamp|body|object|false|allocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.|
|» » » devices|body|object|false|devices is the result of allocating devices.|
|» » » » config|body|[[io.k8s.api.resource.v1.DeviceAllocationConfiguration](#schemaio.k8s.api.resource.v1.deviceallocationconfiguration)]|false|config is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.<br><br>This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.|
|» » » » results|body|[[io.k8s.api.resource.v1.DeviceRequestAllocationResult](#schemaio.k8s.api.resource.v1.devicerequestallocationresult)]|false|results lists all allocated devices.|
|» » » nodeSelector|body|object|false|nodeSelector defines where the allocated resources are available. If unset, they are available everywhere.|
|» » » » nodeSelectorTerms|body|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|
|» » devices|body|[[io.k8s.api.resource.v1.AllocatedDeviceStatus](#schemaio.k8s.api.resource.v1.allocateddevicestatus)]|false|devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.|
|» » reservedFor|body|[[io.k8s.api.resource.v1.ResourceClaimConsumerReference](#schemaio.k8s.api.resource.v1.resourceclaimconsumerreference)]|false|reservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.<br><br>In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.<br><br>Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.<br><br>There can be at most 256 such reservations. This may get increased in the future, but not reduced.|

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

<h3 id="replaceresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1NamespacedResourceClaim

<a id="opIddeleteResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}`

delete a ResourceClaim

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

<h3 id="deleteresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="deleteresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1NamespacedResourceClaim

<a id="opIdpatchResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}`

partially update the specified ResourceClaim

> Body parameter

```json
{}
```

<h3 id="patchresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="patchresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1NamespacedResourceClaimStatus

<a id="opIdreadResourceV1NamespacedResourceClaimStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string/status \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}/status`

read status of the specified ResourceClaim

<h3 id="readresourcev1namespacedresourceclaimstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="readresourcev1namespacedresourceclaimstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1NamespacedResourceClaimStatus

<a id="opIdreplaceResourceV1NamespacedResourceClaimStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}/status`

replace status of the specified ResourceClaim

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

<h3 id="replaceresourcev1namespacedresourceclaimstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata.|
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
|» spec|body|object|false|spec describes what is being requested and how to configure it. The spec is immutable.|
|» » devices|body|object|false|devices defines how to request devices.|
|» » » config|body|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|» » » constraints|body|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|constraints must be satisfied by the set of devices that get allocated for the claim.|
|» » » requests|body|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|
|» status|body|object|false|status describes whether the claim is ready to use and what has been allocated.|
|» » allocation|body|object|false|allocation is set once the claim has been allocated successfully.|
|» » » allocationTimestamp|body|object|false|allocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.|
|» » » devices|body|object|false|devices is the result of allocating devices.|
|» » » » config|body|[[io.k8s.api.resource.v1.DeviceAllocationConfiguration](#schemaio.k8s.api.resource.v1.deviceallocationconfiguration)]|false|config is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.<br><br>This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.|
|» » » » results|body|[[io.k8s.api.resource.v1.DeviceRequestAllocationResult](#schemaio.k8s.api.resource.v1.devicerequestallocationresult)]|false|results lists all allocated devices.|
|» » » nodeSelector|body|object|false|nodeSelector defines where the allocated resources are available. If unset, they are available everywhere.|
|» » » » nodeSelectorTerms|body|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|
|» » devices|body|[[io.k8s.api.resource.v1.AllocatedDeviceStatus](#schemaio.k8s.api.resource.v1.allocateddevicestatus)]|false|devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.|
|» » reservedFor|body|[[io.k8s.api.resource.v1.ResourceClaimConsumerReference](#schemaio.k8s.api.resource.v1.resourceclaimconsumerreference)]|false|reservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.<br><br>In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.<br><br>Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.<br><br>There can be at most 256 such reservations. This may get increased in the future, but not reduced.|

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

<h3 id="replaceresourcev1namespacedresourceclaimstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1NamespacedResourceClaimStatus

<a id="opIdpatchResourceV1NamespacedResourceClaimStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaims/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}/status`

partially update status of the specified ResourceClaim

> Body parameter

```json
{}
```

<h3 id="patchresourcev1namespacedresourceclaimstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="patchresourcev1namespacedresourceclaimstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1NamespacedResourceClaimTemplate

<a id="opIdlistResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates`

list or watch objects of kind ResourceClaimTemplate

<h3 id="listresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

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
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplateList](#schemaio.k8s.api.resource.v1.resourceclaimtemplatelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createResourceV1NamespacedResourceClaimTemplate

<a id="opIdcreateResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates`

create a ResourceClaimTemplate

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|false|spec describes the ResourceClaim that is to be generated.<br><br>This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.|
|» » metadata|body|object|false|metadata may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.|
|» » » annotations|body|object|false|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|» » » » **additionalProperties**|body|string|false|none|
|» » » creationTimestamp|body|object|false|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » » deletionGracePeriodSeconds|body|integer(int64)|false|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|» » » deletionTimestamp|body|object|false|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » » finalizers|body|[string]|false|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|» » » generateName|body|string|false|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|» » » generation|body|integer(int64)|false|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|» » » labels|body|object|false|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|» » » » **additionalProperties**|body|string|false|none|
|» » » managedFields|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|» » » name|body|string|false|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|» » » namespace|body|string|false|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|» » » ownerReferences|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|» » » resourceVersion|body|string|false|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|» » » selfLink|body|string|false|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|» » » uid|body|string|false|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|
|» » spec|body|object|false|spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.|
|» » » devices|body|object|false|devices defines how to request devices.|
|» » » » config|body|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|» » » » constraints|body|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|constraints must be satisfied by the set of devices that get allocated for the claim.|
|» » » » requests|body|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1CollectionNamespacedResourceClaimTemplate

<a id="opIddeleteResourceV1CollectionNamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates`

delete collection of ResourceClaimTemplate

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

<h3 id="deleteresourcev1collectionnamespacedresourceclaimtemplate-parameters">Parameters</h3>

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
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="deleteresourcev1collectionnamespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1NamespacedResourceClaimTemplate

<a id="opIdreadResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates/{name}`

read the specified ResourceClaimTemplate

<h3 id="readresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ResourceClaimTemplate|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="readresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1NamespacedResourceClaimTemplate

<a id="opIdreplaceResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates/{name}`

replace the specified ResourceClaimTemplate

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ResourceClaimTemplate|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|false|spec describes the ResourceClaim that is to be generated.<br><br>This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.|
|» » metadata|body|object|false|metadata may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.|
|» » » annotations|body|object|false|Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations|
|» » » » **additionalProperties**|body|string|false|none|
|» » » creationTimestamp|body|object|false|CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.<br><br>Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » » deletionGracePeriodSeconds|body|integer(int64)|false|Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.|
|» » » deletionTimestamp|body|object|false|DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.<br><br>Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|» » » finalizers|body|[string]|false|Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.|
|» » » generateName|body|string|false|GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.<br><br>If this field is specified and the generated name exists, the server will return a 409.<br><br>Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency|
|» » » generation|body|integer(int64)|false|A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.|
|» » » labels|body|object|false|Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels|
|» » » » **additionalProperties**|body|string|false|none|
|» » » managedFields|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.managedfieldsentry)]|false|ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.|
|» » » name|body|string|false|Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names|
|» » » namespace|body|string|false|Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.<br><br>Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces|
|» » » ownerReferences|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.ownerreference)]|false|List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.|
|» » » resourceVersion|body|string|false|An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.<br><br>Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency|
|» » » selfLink|body|string|false|Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.|
|» » » uid|body|string|false|UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.<br><br>Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids|
|» » spec|body|object|false|spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.|
|» » » devices|body|object|false|devices defines how to request devices.|
|» » » » config|body|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|» » » » constraints|body|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|constraints must be satisfied by the set of devices that get allocated for the claim.|
|» » » » requests|body|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1NamespacedResourceClaimTemplate

<a id="opIddeleteResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates/{name}`

delete a ResourceClaimTemplate

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

<h3 id="deleteresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ResourceClaimTemplate|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="deleteresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1NamespacedResourceClaimTemplate

<a id="opIdpatchResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/namespaces/string/resourceclaimtemplates/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates/{name}`

partially update the specified ResourceClaimTemplate

> Body parameter

```json
{}
```

<h3 id="patchresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ResourceClaimTemplate|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="patchresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1ResourceClaimForAllNamespaces

<a id="opIdlistResourceV1ResourceClaimForAllNamespaces"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceclaims \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/resourceclaims`

list or watch objects of kind ResourceClaim

<h3 id="listresourcev1resourceclaimforallnamespaces-parameters">Parameters</h3>

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

<h3 id="listresourcev1resourceclaimforallnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimList](#schemaio.k8s.api.resource.v1.resourceclaimlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1ResourceClaimTemplateForAllNamespaces

<a id="opIdlistResourceV1ResourceClaimTemplateForAllNamespaces"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceclaimtemplates \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/resourceclaimtemplates`

list or watch objects of kind ResourceClaimTemplate

<h3 id="listresourcev1resourceclaimtemplateforallnamespaces-parameters">Parameters</h3>

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
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listresourcev1resourceclaimtemplateforallnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceClaimTemplateList](#schemaio.k8s.api.resource.v1.resourceclaimtemplatelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listResourceV1ResourceSlice

<a id="opIdlistResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/resourceslices`

list or watch objects of kind ResourceSlice

<h3 id="listresourcev1resourceslice-parameters">Parameters</h3>

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
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSliceList](#schemaio.k8s.api.resource.v1.resourceslicelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createResourceV1ResourceSlice

<a id="opIdcreateResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/resource.k8s.io/v1/resourceslices`

create a ResourceSlice

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|true|spec contains the information published by the driver.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » allNodes|body|boolean|false|allNodes indicates that all nodes have access to the resources in the pool.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » devices|body|[[io.k8s.api.resource.v1.Device](#schemaio.k8s.api.resource.v1.device)]|false|devices lists some or all of the devices in this pool.<br><br>Must not have more than 128 entries. If any device uses taints or consumes counters the limit is 64.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.|
|» » driver|body|string|true|driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters. This field is immutable.|
|» » nodeName|body|string|false|nodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.<br><br>This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.|
|» » nodeSelector|body|object|false|nodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.<br><br>Must use exactly one term.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » » nodeSelectorTerms|body|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|
|» » partitionTypeAttribute|body|string|false|partitionTypeAttribute names a string device attribute (by fully qualified name, e.g. "gpu.example.com/profile") whose value labels each device with its partition type, such as "Full" or "Half" for a MIG-style GPU.<br><br>When set, every partitionable device in the slice must carry the attribute and devices sharing a value must share the same ConsumesCounters cost.|
|» » perDeviceNodeSelection|body|boolean|false|perDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » pool|body|object|true|pool describes the pool that this ResourceSlice belongs to.|
|» » » generation|body|integer(int64)|true|generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.<br><br>Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.|
|» » » name|body|string|true|name is used to identify the pool. For node-local devices, this is often the node name, but this is not required. A field selector can be used to list only ResourceSlice objects belonging to a certain pool.<br><br>It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.|
|» » » resourceSliceCount|body|integer(int64)|true|resourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.<br><br>Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.|
|» » sharedCounters|body|[[io.k8s.api.resource.v1.CounterSet](#schemaio.k8s.api.resource.v1.counterset)]|false|sharedCounters defines a list of counter sets, each of which has a name and a list of counters available.<br><br>The names of the counter sets must be unique in the ResourcePool.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.<br><br>The maximum number of counter sets is 8.|
|» » skipNodeOperations|body|[string]|false|skipNodeOperations lists node-local resource operations (gRPC calls) that will be skipped for the devices in this slice when determining whether operations are necessary on the node. If all allocated devices for a driver in a claim skip an operation, that gRPC call will be skipped. Valid values are:<br><br>- "NodePrepareResources": NodePrepareResources gRPC calls are skipped. This<br>  value cannot be specified unless "NodeUnprepareResources" is also listed<br>  (or "*" is specified).<br>- "NodeUnprepareResources": NodeUnprepareResources gRPC calls are skipped. - "*": All node-local resource operations are skipped.<br><br>Other values may be added in the future. The kubelet must ignore unknown values.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1CollectionResourceSlice

<a id="opIddeleteResourceV1CollectionResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/resourceslices`

delete collection of ResourceSlice

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

<h3 id="deleteresourcev1collectionresourceslice-parameters">Parameters</h3>

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

<h3 id="deleteresourcev1collectionresourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readResourceV1ResourceSlice

<a id="opIdreadResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/resourceslices/{name}`

read the specified ResourceSlice

<h3 id="readresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ResourceSlice|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="readresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceResourceV1ResourceSlice

<a id="opIdreplaceResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/resource.k8s.io/v1/resourceslices/{name}`

replace the specified ResourceSlice

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ResourceSlice|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object's metadata.|
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
|» spec|body|object|true|spec contains the information published by the driver.<br><br>Changing the spec automatically increments the metadata.generation number.|
|» » allNodes|body|boolean|false|allNodes indicates that all nodes have access to the resources in the pool.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » devices|body|[[io.k8s.api.resource.v1.Device](#schemaio.k8s.api.resource.v1.device)]|false|devices lists some or all of the devices in this pool.<br><br>Must not have more than 128 entries. If any device uses taints or consumes counters the limit is 64.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.|
|» » driver|body|string|true|driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters. This field is immutable.|
|» » nodeName|body|string|false|nodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.<br><br>This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.|
|» » nodeSelector|body|object|false|nodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.<br><br>Must use exactly one term.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » » nodeSelectorTerms|body|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|
|» » partitionTypeAttribute|body|string|false|partitionTypeAttribute names a string device attribute (by fully qualified name, e.g. "gpu.example.com/profile") whose value labels each device with its partition type, such as "Full" or "Half" for a MIG-style GPU.<br><br>When set, every partitionable device in the slice must carry the attribute and devices sharing a value must share the same ConsumesCounters cost.|
|» » perDeviceNodeSelection|body|boolean|false|perDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|» » pool|body|object|true|pool describes the pool that this ResourceSlice belongs to.|
|» » » generation|body|integer(int64)|true|generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.<br><br>Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.|
|» » » name|body|string|true|name is used to identify the pool. For node-local devices, this is often the node name, but this is not required. A field selector can be used to list only ResourceSlice objects belonging to a certain pool.<br><br>It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.|
|» » » resourceSliceCount|body|integer(int64)|true|resourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.<br><br>Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.|
|» » sharedCounters|body|[[io.k8s.api.resource.v1.CounterSet](#schemaio.k8s.api.resource.v1.counterset)]|false|sharedCounters defines a list of counter sets, each of which has a name and a list of counters available.<br><br>The names of the counter sets must be unique in the ResourcePool.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.<br><br>The maximum number of counter sets is 8.|
|» » skipNodeOperations|body|[string]|false|skipNodeOperations lists node-local resource operations (gRPC calls) that will be skipped for the devices in this slice when determining whether operations are necessary on the node. If all allocated devices for a driver in a claim skip an operation, that gRPC call will be skipped. Valid values are:<br><br>- "NodePrepareResources": NodePrepareResources gRPC calls are skipped. This<br>  value cannot be specified unless "NodeUnprepareResources" is also listed<br>  (or "*" is specified).<br>- "NodeUnprepareResources": NodeUnprepareResources gRPC calls are skipped. - "*": All node-local resource operations are skipped.<br><br>Other values may be added in the future. The kubelet must ignore unknown values.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteResourceV1ResourceSlice

<a id="opIddeleteResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/resource.k8s.io/v1/resourceslices/{name}`

delete a ResourceSlice

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

<h3 id="deleteresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ResourceSlice|
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
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="deleteresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|202|Accepted|Accepted|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchResourceV1ResourceSlice

<a id="opIdpatchResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/resourceslices/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/resource.k8s.io/v1/resourceslices/{name}`

partially update the specified ResourceSlice

> Body parameter

```json
{}
```

<h3 id="patchresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ResourceSlice|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="patchresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|201|Created|Created|[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1DeviceClassList

<a id="opIdwatchResourceV1DeviceClassList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/deviceclasses \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/deviceclasses`

watch individual changes to a list of DeviceClass. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1deviceclasslist-parameters">Parameters</h3>

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

<h3 id="watchresourcev1deviceclasslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1DeviceClass

<a id="opIdwatchResourceV1DeviceClass"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/deviceclasses/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/deviceclasses/{name}`

watch changes to an object of kind DeviceClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchresourcev1deviceclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the DeviceClass|
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

<h3 id="watchresourcev1deviceclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1DeviceTaintRuleList

<a id="opIdwatchResourceV1DeviceTaintRuleList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/devicetaintrules \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/devicetaintrules`

watch individual changes to a list of DeviceTaintRule. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1devicetaintrulelist-parameters">Parameters</h3>

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

<h3 id="watchresourcev1devicetaintrulelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1DeviceTaintRule

<a id="opIdwatchResourceV1DeviceTaintRule"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/devicetaintrules/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/devicetaintrules/{name}`

watch changes to an object of kind DeviceTaintRule. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchresourcev1devicetaintrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the DeviceTaintRule|
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

<h3 id="watchresourcev1devicetaintrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1NamespacedResourceClaimList

<a id="opIdwatchResourceV1NamespacedResourceClaimList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/namespaces/string/resourceclaims \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaims`

watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1namespacedresourceclaimlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="watchresourcev1namespacedresourceclaimlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1NamespacedResourceClaim

<a id="opIdwatchResourceV1NamespacedResourceClaim"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/namespaces/string/resourceclaims/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaims/{name}`

watch changes to an object of kind ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchresourcev1namespacedresourceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ResourceClaim|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="watchresourcev1namespacedresourceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1NamespacedResourceClaimTemplateList

<a id="opIdwatchResourceV1NamespacedResourceClaimTemplateList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/namespaces/string/resourceclaimtemplates \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaimtemplates`

watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1namespacedresourceclaimtemplatelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="watchresourcev1namespacedresourceclaimtemplatelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1NamespacedResourceClaimTemplate

<a id="opIdwatchResourceV1NamespacedResourceClaimTemplate"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/namespaces/string/resourceclaimtemplates/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaimtemplates/{name}`

watch changes to an object of kind ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchresourcev1namespacedresourceclaimtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ResourceClaimTemplate|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
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

<h3 id="watchresourcev1namespacedresourceclaimtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1ResourceClaimListForAllNamespaces

<a id="opIdwatchResourceV1ResourceClaimListForAllNamespaces"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/resourceclaims \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/resourceclaims`

watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1resourceclaimlistforallnamespaces-parameters">Parameters</h3>

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

<h3 id="watchresourcev1resourceclaimlistforallnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1ResourceClaimTemplateListForAllNamespaces

<a id="opIdwatchResourceV1ResourceClaimTemplateListForAllNamespaces"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/resourceclaimtemplates \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/resourceclaimtemplates`

watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1resourceclaimtemplatelistforallnamespaces-parameters">Parameters</h3>

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

<h3 id="watchresourcev1resourceclaimtemplatelistforallnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1ResourceSliceList

<a id="opIdwatchResourceV1ResourceSliceList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/resourceslices \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/resourceslices`

watch individual changes to a list of ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchresourcev1resourceslicelist-parameters">Parameters</h3>

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

<h3 id="watchresourcev1resourceslicelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchResourceV1ResourceSlice

<a id="opIdwatchResourceV1ResourceSlice"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/resource.k8s.io/v1/watch/resourceslices/string \
  -H 'Accept: application/json'
```

`GET /apis/resource.k8s.io/v1/watch/resourceslices/{name}`

watch changes to an object of kind ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchresourcev1resourceslice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ResourceSlice|
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

<h3 id="watchresourcev1resourceslice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_io.k8s.api.core.v1.NodeSelector">io.k8s.api.core.v1.NodeSelector</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.core.v1.nodeselector"></a>
<a id="schema_io.k8s.api.core.v1.NodeSelector"></a>
<a id="tocSio.k8s.api.core.v1.nodeselector"></a>
<a id="tocsio.k8s.api.core.v1.nodeselector"></a>

```json
{
  "nodeSelectorTerms": [
    {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchFields": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeSelectorTerms|[[io.k8s.api.core.v1.NodeSelectorTerm](#schemaio.k8s.api.core.v1.nodeselectorterm)]|true|none|nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.|

<h2 id="tocS_io.k8s.api.core.v1.NodeSelectorRequirement">io.k8s.api.core.v1.NodeSelectorRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.core.v1.nodeselectorrequirement"></a>
<a id="schema_io.k8s.api.core.v1.NodeSelectorRequirement"></a>
<a id="tocSio.k8s.api.core.v1.nodeselectorrequirement"></a>
<a id="tocsio.k8s.api.core.v1.nodeselectorrequirement"></a>

```json
{
  "key": "",
  "operator": "",
  "values": [
    "string"
  ]
}
```

A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|key is the label key that the selector applies to.|
|operator|string|true|none|operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.|
|values|[string]|false|none|values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.|

<h2 id="tocS_io.k8s.api.core.v1.NodeSelectorTerm">io.k8s.api.core.v1.NodeSelectorTerm</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.core.v1.nodeselectorterm"></a>
<a id="schema_io.k8s.api.core.v1.NodeSelectorTerm"></a>
<a id="tocSio.k8s.api.core.v1.nodeselectorterm"></a>
<a id="tocsio.k8s.api.core.v1.nodeselectorterm"></a>

```json
{
  "matchExpressions": [
    {
      "key": "",
      "operator": "",
      "values": [
        "string"
      ]
    }
  ],
  "matchFields": [
    {
      "key": "",
      "operator": "",
      "values": [
        "string"
      ]
    }
  ]
}
```

A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchExpressions|[[io.k8s.api.core.v1.NodeSelectorRequirement](#schemaio.k8s.api.core.v1.nodeselectorrequirement)]|false|none|matchExpressions is a list of node selector requirements by node's labels.|
|matchFields|[[io.k8s.api.core.v1.NodeSelectorRequirement](#schemaio.k8s.api.core.v1.nodeselectorrequirement)]|false|none|matchFields is a list of node selector requirements by node's fields.|

<h2 id="tocS_io.k8s.api.resource.v1.AllocatedDeviceStatus">io.k8s.api.resource.v1.AllocatedDeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.allocateddevicestatus"></a>
<a id="schema_io.k8s.api.resource.v1.AllocatedDeviceStatus"></a>
<a id="tocSio.k8s.api.resource.v1.allocateddevicestatus"></a>
<a id="tocsio.k8s.api.resource.v1.allocateddevicestatus"></a>

```json
{
  "conditions": [
    {
      "lastTransitionTime": {},
      "message": "",
      "observedGeneration": 0,
      "reason": "",
      "status": "",
      "type": ""
    }
  ],
  "data": {},
  "device": "",
  "driver": "",
  "networkData": {
    "hardwareAddress": "string",
    "interfaceName": "string",
    "ips": [
      "string"
    ]
  },
  "pool": "",
  "shareID": "string"
}
```

AllocatedDeviceStatus contains the status of an allocated device, if the driver chooses to report it. This may include driver-specific information.

The combination of Driver, Pool, Device, and ShareID must match the corresponding key in Status.Allocation.Devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|none|Conditions contains the latest observation of the device's state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.<br><br>Must not contain more than 8 entries.|
|data|object|false|none|Data contains arbitrary driver-specific data.<br><br>The length of the raw data must be smaller or equal to 10 Ki.|
|device|string|true|none|Device references one device instance via its name in the driver's resource pool. It must be a DNS label.|
|driver|string|true|none|Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters.|
|networkData|object|false|none|NetworkData contains network-related information specific to the device.|
|pool|string|true|none|This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).<br><br>Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.|
|shareID|string|false|none|ShareID uniquely identifies an individual allocation share of the device.|

<h2 id="tocS_io.k8s.api.resource.v1.AllocationResult">io.k8s.api.resource.v1.AllocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.allocationresult"></a>
<a id="schema_io.k8s.api.resource.v1.AllocationResult"></a>
<a id="tocSio.k8s.api.resource.v1.allocationresult"></a>
<a id="tocsio.k8s.api.resource.v1.allocationresult"></a>

```json
{
  "allocationTimestamp": {},
  "devices": {},
  "nodeSelector": {
    "nodeSelectorTerms": [
      {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchFields": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ]
      }
    ]
  }
}
```

AllocationResult contains attributes of an allocated resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationTimestamp|object|false|none|allocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.|
|devices|object|false|none|devices is the result of allocating devices.|
|nodeSelector|object|false|none|nodeSelector defines where the allocated resources are available. If unset, they are available everywhere.|

<h2 id="tocS_io.k8s.api.resource.v1.CELDeviceSelector">io.k8s.api.resource.v1.CELDeviceSelector</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.celdeviceselector"></a>
<a id="schema_io.k8s.api.resource.v1.CELDeviceSelector"></a>
<a id="tocSio.k8s.api.resource.v1.celdeviceselector"></a>
<a id="tocsio.k8s.api.resource.v1.celdeviceselector"></a>

```json
{
  "expression": ""
}
```

CELDeviceSelector contains a CEL expression for selecting a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|expression is a CEL expression which evaluates a single device. It must evaluate to true when the device under consideration satisfies the desired criteria, and false when it does not. Any other result is an error and causes allocation of devices to abort.<br><br>The expression's input is an object named "device", which carries the following properties:<br> - driver (string): the name of the driver which defines this device.<br> - attributes (map[string]object): the device's attributes, grouped by prefix<br>   (e.g. device.attributes["dra.example.com"] evaluates to an object with all<br>   of the attributes which were prefixed by "dra.example.com").<br> - capacity (map[string]object): the device's capacities, grouped by prefix.<br> - allowMultipleAllocations (bool): the allowMultipleAllocations property of the device<br>   (v1.34+ with the DRAConsumableCapacity feature enabled).<br><br>Example: Consider a device with driver="dra.example.com", which exposes two attributes named "model" and "ext.example.com/family" and which exposes one capacity named "modules". This input to this expression would have the following fields:<br><br>    device.driver<br>    device.attributes["dra.example.com"].model<br>    device.attributes["ext.example.com"].family<br>    device.capacity["dra.example.com"].modules<br><br>The device.driver field can be used to check for a specific driver, either as a high-level precondition (i.e. you only want to consider devices from this driver) or as part of a multi-clause expression that is meant to consider devices from different drivers.<br><br>The value type of each attribute is defined by the device definition, and users who write these expressions must consult the documentation for their specific drivers. The value type of each capacity is Quantity.<br><br>If an unknown prefix is used as a lookup in either device.attributes or device.capacity, an empty map will be returned. Any reference to an unknown field will cause an evaluation error and allocation to abort.<br><br>A robust expression should check for the existence of attributes before referencing them.<br><br>Common errors: - "no such key": Use optional chaining (.? followed by orValue())<br>  or guarding the check with has() for optional fields.<br>  See CEL Optional Types for details:<br>  https://pkg.go.dev/github.com/google/cel-go@v0.17.4/cel#OptionalTypes<br><br>For more CEL expression syntax and examples, see: https://kubernetes.io/docs/reference/using-api/cel/<br><br>For ease of use, the cel.bind() function is enabled, and can be used to simplify expressions that access multiple attributes with the same domain. For example:<br><br>    cel.bind(dra, device.attributes["dra.example.com"], dra.someBool && dra.anotherBool)<br><br>When the DRAListTypeAttributes feature gate is enabled, the includes() helper is available and it can work for both scalar and list-type attributes. It was introduced to support smooth migration from scalar attributes to list-type attributes while keeping CEL expressions simple. For example:<br><br>    device.attributes["dra.example.com"].models.includes("some-model")<br><br>The length of the expression must be smaller or equal to 10 Ki. The cost of evaluating it is also limited based on the estimated number of logical steps.|

<h2 id="tocS_io.k8s.api.resource.v1.CapacityRequestPolicy">io.k8s.api.resource.v1.CapacityRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.capacityrequestpolicy"></a>
<a id="schema_io.k8s.api.resource.v1.CapacityRequestPolicy"></a>
<a id="tocSio.k8s.api.resource.v1.capacityrequestpolicy"></a>
<a id="tocsio.k8s.api.resource.v1.capacityrequestpolicy"></a>

```json
{
  "default": {},
  "validRange": {
    "max": {},
    "min": {},
    "step": {}
  },
  "validValues": [
    "string"
  ]
}
```

CapacityRequestPolicy defines how requests consume device capacity.

Must not set more than one ValidRequestValues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|object|false|none|default specifies how much of this capacity is consumed by a request that does not contain an entry for it in DeviceRequest's Capacity.|
|validRange|object|false|none|validRange defines an acceptable quantity value range in consuming requests.<br><br>If this field is set, Default must be defined and it must fall within the defined ValidRange.<br><br>If the requested amount does not fall within the defined range, the request violates the policy, and this device cannot be allocated.<br><br>If the request doesn't contain this capacity entry, Default value is used.|
|validValues|[[io.k8s.apimachinery.pkg.api.resource.Quantity](#schemaio.k8s.apimachinery.pkg.api.resource.quantity)]|false|none|validValues defines a set of acceptable quantity values in consuming requests.<br><br>Must not contain more than 10 entries. Must be sorted in ascending order.<br><br>If this field is set, Default must be defined and it must be included in ValidValues list.<br><br>If the requested amount does not match any valid value but smaller than some valid values, the scheduler calculates the smallest valid value that is greater than or equal to the request. That is: min(ceil(requestedValue) ∈ validValues), where requestedValue ≤ max(validValues).<br><br>If the requested amount exceeds all valid values, the request violates the policy, and this device cannot be allocated.|

<h2 id="tocS_io.k8s.api.resource.v1.CapacityRequestPolicyRange">io.k8s.api.resource.v1.CapacityRequestPolicyRange</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.capacityrequestpolicyrange"></a>
<a id="schema_io.k8s.api.resource.v1.CapacityRequestPolicyRange"></a>
<a id="tocSio.k8s.api.resource.v1.capacityrequestpolicyrange"></a>
<a id="tocsio.k8s.api.resource.v1.capacityrequestpolicyrange"></a>

```json
{
  "max": {},
  "min": {},
  "step": {}
}
```

CapacityRequestPolicyRange defines a valid range for consumable capacity values.

If the DRAFractionalCapacityRange feature gate is enabled and at least one of Min, Max, or Step is a fractional quantity (i.e. its value is not an integer), milli-unit arithmetic is used instead, supporting values with up to 3 decimal places (e.g. 100m = 0.1). The largest supported value then is 1000 times smaller compared to using 64-bit integers. Otherwise, all comparisons use 64-bit integer arithmetic via resource.Quantity.Value().

  - If the requested amount is less than Min, it is rounded up to the Min value.
  - If Step is set and the requested amount is between Min and Max but not aligned with Step,
    it will be rounded up to the next value equal to Min + (n * Step).
  - If Step is not set, the requested amount is used as-is if it falls within the range Min to Max (if set).
  - If the requested or rounded amount exceeds Max (if set), the request does not satisfy the policy,
    and the device cannot be allocated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|object|false|none|max defines the upper limit for capacity that can be requested.<br><br>Max must be less than or equal to the capacity value. Min and requestPolicy.default must be less than or equal to the maximum.|
|min|object|true|none|min specifies the minimum capacity allowed for a consumption request.<br><br>Min must be greater than or equal to zero, and less than or equal to the capacity value. requestPolicy.default must be more than or equal to the minimum.|
|step|object|false|none|step defines the step size between valid capacity amounts within the range.<br><br>Max (if set) and requestPolicy.default must be a multiple of Step. Min + Step must be less than or equal to the capacity value.|

<h2 id="tocS_io.k8s.api.resource.v1.CapacityRequirements">io.k8s.api.resource.v1.CapacityRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.capacityrequirements"></a>
<a id="schema_io.k8s.api.resource.v1.CapacityRequirements"></a>
<a id="tocSio.k8s.api.resource.v1.capacityrequirements"></a>
<a id="tocsio.k8s.api.resource.v1.capacityrequirements"></a>

```json
{
  "requests": {
    "property1": "string",
    "property2": "string"
  }
}
```

CapacityRequirements defines the capacity requirements for a specific device request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|object|false|none|requests represent individual device resource requests for distinct resources, all of which must be provided by the device.<br><br>This value is used as an additional filtering condition against the available capacity on the device. This is semantically equivalent to a CEL selector with `device.capacity[<domain>].<name>.compareTo(quantity(<request quantity>)) >= 0`. For example, device.capacity['test-driver.cdi.k8s.io'].counters.compareTo(quantity('2')) >= 0.<br><br>The domain prefix can be omitted, in which case it defaults to the driver of the device under evaluation. For example, "bandwidth: 1Gi" is equivalent to "<driver>/bandwidth: 1Gi" for a device published by driver "<driver>", regardless of which other, differently-domained "bandwidth" capacities that device might also have. To request one of those, the domain must be given explicitly, for example "example.com/bandwidth". Requesting the same driver capacity with and without the driver name as domain, for example "bandwidth: 1Gi" and "<driver>/bandwidth: 2Gi", is ambiguous and causes scheduling to fail with an error. For the sake of consistency there's no exception for such a conflict where the value is the same - that is still an error.<br><br>When a requestPolicy is defined, the requested amount is adjusted upward to the nearest valid value based on the policy. If the requested amount cannot be adjusted to a valid value—because it exceeds what the requestPolicy allows— the device is considered ineligible for allocation.<br><br>For any capacity that is not explicitly requested: - If no requestPolicy is set, the default consumed capacity is equal to the full device capacity<br>  (i.e., the whole device is claimed).<br>- If a requestPolicy is set, the default consumed capacity is determined according to that policy.<br><br>If the device allows multiple allocation, the aggregated amount across all requests must not exceed the capacity value. The consumed capacity, which may be adjusted based on the requestPolicy if defined, is recorded in the resource claim's status.devices[*].consumedCapacity field.<br><br>Requests may have at most 32 entries. The values must not be negative.|

<h2 id="tocS_io.k8s.api.resource.v1.Counter">io.k8s.api.resource.v1.Counter</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.counter"></a>
<a id="schema_io.k8s.api.resource.v1.Counter"></a>
<a id="tocSio.k8s.api.resource.v1.counter"></a>
<a id="tocsio.k8s.api.resource.v1.counter"></a>

```json
{
  "value": {}
}
```

Counter describes a quantity associated with a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|value defines how much of a certain device counter is available.|

<h2 id="tocS_io.k8s.api.resource.v1.CounterSet">io.k8s.api.resource.v1.CounterSet</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.counterset"></a>
<a id="schema_io.k8s.api.resource.v1.CounterSet"></a>
<a id="tocSio.k8s.api.resource.v1.counterset"></a>
<a id="tocsio.k8s.api.resource.v1.counterset"></a>

```json
{
  "counters": {
    "property1": {
      "value": {}
    },
    "property2": {
      "value": {}
    }
  },
  "name": ""
}
```

CounterSet defines a named set of counters that are available to be used by devices defined in the ResourcePool.

The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counters|object|true|none|counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.<br><br>The maximum number of counters is 32.|
|name|string|true|none|name defines the name of the counter set. It must be a DNS label.|

<h2 id="tocS_io.k8s.api.resource.v1.Device">io.k8s.api.resource.v1.Device</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.device"></a>
<a id="schema_io.k8s.api.resource.v1.Device"></a>
<a id="tocSio.k8s.api.resource.v1.device"></a>
<a id="tocsio.k8s.api.resource.v1.device"></a>

```json
{
  "allNodes": true,
  "allowMultipleAllocations": true,
  "attributes": {
    "property1": {
      "bool": true,
      "bools": [
        true
      ],
      "int": 0,
      "ints": [
        0
      ],
      "string": "string",
      "strings": [
        "string"
      ],
      "version": "string",
      "versions": [
        "string"
      ]
    },
    "property2": {
      "bool": true,
      "bools": [
        true
      ],
      "int": 0,
      "ints": [
        0
      ],
      "string": "string",
      "strings": [
        "string"
      ],
      "version": "string",
      "versions": [
        "string"
      ]
    }
  },
  "bindingConditions": [
    "string"
  ],
  "bindingFailureConditions": [
    "string"
  ],
  "bindsToNode": true,
  "capacity": {
    "property1": {
      "requestPolicy": {
        "default": {},
        "validRange": {
          "max": {},
          "min": {},
          "step": {}
        },
        "validValues": [
          "string"
        ]
      },
      "value": {}
    },
    "property2": {
      "requestPolicy": {
        "default": {},
        "validRange": {
          "max": {},
          "min": {},
          "step": {}
        },
        "validValues": [
          "string"
        ]
      },
      "value": {}
    }
  },
  "consumesCounters": [
    {
      "compatibilityGroups": [
        "string"
      ],
      "counterSet": "",
      "counters": {
        "property1": {
          "value": {}
        },
        "property2": {
          "value": {}
        }
      }
    }
  ],
  "name": "",
  "nodeAllocatableResources": {
    "property1": {
      "mapping": {
        "capacityKey": "string",
        "capacityMultiplier": {},
        "deviceMultiplier": {}
      },
      "overhead": {
        "perContainer": {},
        "perPod": {}
      }
    },
    "property2": {
      "mapping": {
        "capacityKey": "string",
        "capacityMultiplier": {},
        "deviceMultiplier": {}
      },
      "overhead": {
        "perContainer": {},
        "perPod": {}
      }
    }
  },
  "nodeName": "string",
  "nodeSelector": {
    "nodeSelectorTerms": [
      {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchFields": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ]
      }
    ]
  },
  "taints": [
    {
      "effect": "",
      "key": "",
      "timeAdded": {},
      "value": "string"
    }
  ]
}
```

Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allNodes|boolean|false|none|allNodes indicates that all nodes have access to the device.<br><br>Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.|
|allowMultipleAllocations|boolean|false|none|allowMultipleAllocations marks whether the device is allowed to be allocated to multiple DeviceRequests.<br><br>If AllowMultipleAllocations is set to true, the device can be allocated more than once, and all of its capacity is consumable, regardless of whether the requestPolicy is defined or not.|
|attributes|object|false|none|attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.<br><br>The maximum number of attributes and capacities combined is 32.|
|bindingConditions|[string]|false|none|bindingConditions defines the conditions for proceeding with binding. All of these conditions must be set in the per-device status conditions with a value of True to proceed with binding the pod to the node while scheduling the pod.<br><br>The maximum number of binding conditions is 4.<br><br>The conditions must be a valid condition type string.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.|
|bindingFailureConditions|[string]|false|none|bindingFailureConditions defines the conditions for binding failure. They may be set in the per-device status conditions. If any is set to "True", a binding failure occurred.<br><br>The maximum number of binding failure conditions is 4.<br><br>The conditions must be a valid condition type string.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.|
|bindsToNode|boolean|false|none|bindsToNode indicates if the usage of an allocation involving this device has to be limited to exactly the node that was chosen when allocating the claim. If set to true, the scheduler will set the ResourceClaim.Status.Allocation.NodeSelector to match the node where the allocation was made.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.|
|capacity|object|false|none|capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.<br><br>The maximum number of attributes and capacities combined is 32.|
|consumesCounters|[[io.k8s.api.resource.v1.DeviceCounterConsumption](#schemaio.k8s.api.resource.v1.devicecounterconsumption)]|false|none|consumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.<br><br>There can only be a single entry per counterSet.<br><br>The maximum number of device counter consumptions per device is 2.|
|name|string|true|none|name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.|
|nodeAllocatableResources|object|false|none|nodeAllocatableResources defines the mapping of node resources that are managed by the DRA driver exposing this device. This includes resources currently reported in v1.Node `status.allocatable` that are not extended resources (see https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#extended-resources). Examples include "cpu", "memory", "ephemeral-storage", and hugepages. In addition to standard requests made through the Pod `spec`, these resources can also be requested through claims and allocated by the DRA driver. For example, a CPU DRA driver might allocate exclusive CPUs or auxiliary node memory dependencies of an accelerator device. The keys of this map are the node-allocatable resource names (e.g., "cpu", "memory"). Extended resource names are not permitted as keys.|
|nodeName|string|false|none|nodeName identifies the node where the device is available.<br><br>Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.|
|nodeSelector|object|false|none|nodeSelector defines the nodes where the device is available.<br><br>Must use exactly one term.<br><br>Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.|
|taints|[[io.k8s.api.resource.v1.DeviceTaint](#schemaio.k8s.api.resource.v1.devicetaint)]|false|none|taints if specified, these are the driver-defined taints.<br><br>The maximum number of taints is 16. If taints are set for any device in a ResourceSlice, then the maximum number of allowed devices per ResourceSlice is 64 instead of 128.<br><br>This is a beta field and requires enabling the DRADeviceTaints feature gate.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceAllocationConfiguration">io.k8s.api.resource.v1.DeviceAllocationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceallocationconfiguration"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceAllocationConfiguration"></a>
<a id="tocSio.k8s.api.resource.v1.deviceallocationconfiguration"></a>
<a id="tocsio.k8s.api.resource.v1.deviceallocationconfiguration"></a>

```json
{
  "opaque": {
    "driver": "",
    "parameters": {}
  },
  "requests": [
    "string"
  ],
  "source": ""
}
```

DeviceAllocationConfiguration gets embedded in an AllocationResult.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opaque|object|false|none|opaque provides driver-specific configuration parameters.|
|requests|[string]|false|none|requests lists the names of requests where the configuration applies. If empty, its applies to all requests.<br><br>References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.|
|source|string|true|none|source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceAllocationResult">io.k8s.api.resource.v1.DeviceAllocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceallocationresult"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceAllocationResult"></a>
<a id="tocSio.k8s.api.resource.v1.deviceallocationresult"></a>
<a id="tocsio.k8s.api.resource.v1.deviceallocationresult"></a>

```json
{
  "config": [
    {
      "opaque": {
        "driver": "",
        "parameters": {}
      },
      "requests": [
        "string"
      ],
      "source": ""
    }
  ],
  "results": [
    {
      "adminAccess": true,
      "bindingConditions": [
        "string"
      ],
      "bindingFailureConditions": [
        "string"
      ],
      "consumedCapacity": {
        "property1": "string",
        "property2": "string"
      },
      "device": "",
      "driver": "",
      "pool": "",
      "request": "",
      "shareID": "string",
      "skipNodeOperations": [
        "string"
      ],
      "tolerations": [
        {
          "effect": "string",
          "key": "string",
          "operator": "Equal",
          "tolerationSeconds": 0,
          "value": "string"
        }
      ]
    }
  ]
}
```

DeviceAllocationResult is the result of allocating devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[[io.k8s.api.resource.v1.DeviceAllocationConfiguration](#schemaio.k8s.api.resource.v1.deviceallocationconfiguration)]|false|none|config is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.<br><br>This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.|
|results|[[io.k8s.api.resource.v1.DeviceRequestAllocationResult](#schemaio.k8s.api.resource.v1.devicerequestallocationresult)]|false|none|results lists all allocated devices.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceAttribute">io.k8s.api.resource.v1.DeviceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceattribute"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceAttribute"></a>
<a id="tocSio.k8s.api.resource.v1.deviceattribute"></a>
<a id="tocsio.k8s.api.resource.v1.deviceattribute"></a>

```json
{
  "bool": true,
  "bools": [
    true
  ],
  "int": 0,
  "ints": [
    0
  ],
  "string": "string",
  "strings": [
    "string"
  ],
  "version": "string",
  "versions": [
    "string"
  ]
}
```

DeviceAttribute must have exactly one field set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bool|boolean|false|none|bool is a true/false value.|
|bools|[boolean]|false|none|bools is a non-empty list of true/false values.|
|int|integer(int64)|false|none|int is a number.|
|ints|[integer(int64)]|false|none|ints is a non-empty list of numbers.<br><br>This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.|
|string|string|false|none|string is a string. Must not be longer than 64 characters.|
|strings|[string]|false|none|strings is a non-empty list of strings. Each string must not be longer than 64 characters.<br><br>This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.|
|version|string|false|none|version is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.|
|versions|[string]|false|none|versions is a non-empty list of semantic versions according to semver.org spec 2.0.0. Each version string must not be longer than 64 characters.<br><br>This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceCapacity">io.k8s.api.resource.v1.DeviceCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicecapacity"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceCapacity"></a>
<a id="tocSio.k8s.api.resource.v1.devicecapacity"></a>
<a id="tocsio.k8s.api.resource.v1.devicecapacity"></a>

```json
{
  "requestPolicy": {
    "default": {},
    "validRange": {
      "max": {},
      "min": {},
      "step": {}
    },
    "validValues": [
      "string"
    ]
  },
  "value": {}
}
```

DeviceCapacity describes a quantity associated with a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestPolicy|object|false|none|requestPolicy defines how this DeviceCapacity must be consumed when the device is allowed to be shared by multiple allocations.<br><br>The Device must have allowMultipleAllocations set to true in order to set a requestPolicy.<br><br>If unset, capacity requests are unconstrained: requests can consume any amount of capacity, as long as the total consumed across all allocations does not exceed the device's defined capacity. If request is also unset, default is the full capacity value.|
|value|object|true|none|value defines how much of a certain capacity that device has.<br><br>This field reflects the fixed total capacity and does not change. The consumed amount is tracked separately by scheduler and does not affect this value.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClaim">io.k8s.api.resource.v1.DeviceClaim</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclaim"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClaim"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclaim"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclaim"></a>

```json
{
  "config": [
    {
      "opaque": {
        "driver": "",
        "parameters": {}
      },
      "requests": [
        "string"
      ]
    }
  ],
  "constraints": [
    {
      "distinctAttribute": "string",
      "matchAttribute": "string",
      "requests": [
        "string"
      ]
    }
  ],
  "requests": [
    {
      "exactly": {
        "adminAccess": true,
        "allocationMode": "string",
        "capacity": {
          "requests": {
            "property1": "string",
            "property2": "string"
          }
        },
        "count": 0,
        "derivedAttributes": [
          {
            "expression": "",
            "name": ""
          }
        ],
        "deviceClassName": "",
        "selectors": [
          {
            "cel": {
              "expression": ""
            }
          }
        ],
        "tolerations": [
          {
            "effect": "string",
            "key": "string",
            "operator": "Equal",
            "tolerationSeconds": 0,
            "value": "string"
          }
        ]
      },
      "firstAvailable": [
        {
          "allocationMode": "string",
          "capacity": {
            "requests": {
              "property1": "string",
              "property2": "string"
            }
          },
          "count": 0,
          "derivedAttributes": [
            {
              "expression": "",
              "name": ""
            }
          ],
          "deviceClassName": "",
          "name": "",
          "selectors": [
            {
              "cel": {
                "expression": ""
              }
            }
          ],
          "tolerations": [
            {
              "effect": "string",
              "key": "string",
              "operator": "Equal",
              "tolerationSeconds": 0,
              "value": "string"
            }
          ]
        }
      ],
      "name": ""
    }
  ]
}
```

DeviceClaim defines how to request devices with a ResourceClaim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[[io.k8s.api.resource.v1.DeviceClaimConfiguration](#schemaio.k8s.api.resource.v1.deviceclaimconfiguration)]|false|none|config holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.|
|constraints|[[io.k8s.api.resource.v1.DeviceConstraint](#schemaio.k8s.api.resource.v1.deviceconstraint)]|false|none|constraints must be satisfied by the set of devices that get allocated for the claim.|
|requests|[[io.k8s.api.resource.v1.DeviceRequest](#schemaio.k8s.api.resource.v1.devicerequest)]|false|none|requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClaimConfiguration">io.k8s.api.resource.v1.DeviceClaimConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclaimconfiguration"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClaimConfiguration"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclaimconfiguration"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclaimconfiguration"></a>

```json
{
  "opaque": {
    "driver": "",
    "parameters": {}
  },
  "requests": [
    "string"
  ]
}
```

DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opaque|object|false|none|opaque provides driver-specific configuration parameters.|
|requests|[string]|false|none|requests lists the names of requests where the configuration applies. If empty, it applies to all requests.<br><br>References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClass">io.k8s.api.resource.v1.DeviceClass</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclass"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClass"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclass"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclass"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata.|
|spec|object|false|none|spec defines what can be allocated and how to configure it.<br><br>This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.<br><br>Changing the spec automatically increments the metadata.generation number.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClassConfiguration">io.k8s.api.resource.v1.DeviceClassConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclassconfiguration"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClassConfiguration"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclassconfiguration"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclassconfiguration"></a>

```json
{
  "opaque": {
    "driver": "",
    "parameters": {}
  }
}
```

DeviceClassConfiguration is used in DeviceClass.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opaque|object|false|none|opaque provides driver-specific configuration parameters.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClassList">io.k8s.api.resource.v1.DeviceClassList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclasslist"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClassList"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclasslist"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclasslist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

DeviceClassList is a collection of classes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.resource.v1.DeviceClass](#schemaio.k8s.api.resource.v1.deviceclass)]|true|none|Items is the list of resource classes.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard list metadata|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceClassSpec">io.k8s.api.resource.v1.DeviceClassSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceclassspec"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceClassSpec"></a>
<a id="tocSio.k8s.api.resource.v1.deviceclassspec"></a>
<a id="tocsio.k8s.api.resource.v1.deviceclassspec"></a>

```json
{
  "config": [
    {
      "opaque": {
        "driver": "",
        "parameters": {}
      }
    }
  ],
  "extendedResourceName": "string",
  "selectors": [
    {
      "cel": {
        "expression": ""
      }
    }
  ]
}
```

DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[[io.k8s.api.resource.v1.DeviceClassConfiguration](#schemaio.k8s.api.resource.v1.deviceclassconfiguration)]|false|none|config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.<br><br>They are passed to the driver, but are not considered while allocating the claim.|
|extendedResourceName|string|false|none|extendedResourceName is the extended resource name for the devices of this class. The devices of this class can be used to satisfy a pod's extended resource requests. It has the same format as the name of a pod's extended resource. It should be unique among all the device classes in a cluster. If two device classes have the same name, then the class created later is picked to satisfy a pod's extended resource requests. If two classes are created at the same time, then the name of the class lexicographically sorted first is picked.|
|selectors|[[io.k8s.api.resource.v1.DeviceSelector](#schemaio.k8s.api.resource.v1.deviceselector)]|false|none|selectors is the list of device selectors. Each selector must be satisfied by a device which is claimed via this class.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceConstraint">io.k8s.api.resource.v1.DeviceConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceconstraint"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceConstraint"></a>
<a id="tocSio.k8s.api.resource.v1.deviceconstraint"></a>
<a id="tocsio.k8s.api.resource.v1.deviceconstraint"></a>

```json
{
  "distinctAttribute": "string",
  "matchAttribute": "string",
  "requests": [
    "string"
  ]
}
```

DeviceConstraint must have exactly one field set besides Requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distinctAttribute|string|false|none|distinctAttribute requires that all devices in question have this attribute and that its type and value are unique across those devices.<br><br>When the DRAListTypeAttributes feature gate is enabled, comparison uses set semantics (i.e., element order and duplicates are ignored): list-valued attributes must be pairwise disjoint across devices. Scalar values are treated as singleton sets for backward compatibility.<br><br>This acts as the inverse of MatchAttribute.<br><br>This constraint is used to avoid allocating multiple requests to the same device by ensuring attribute-level differentiation.<br><br>This is useful for scenarios where resource requests must be fulfilled by separate physical devices. For example, a container requests two network interfaces that must be allocated from two different physical NICs.|
|matchAttribute|string|false|none|matchAttribute requires that all devices in question have this attribute and that its type and value are the same across those devices.<br><br>For example, if you specified "dra.example.com/numa" (a hypothetical example!), then only devices in the same NUMA node will be chosen. A device which does not have that attribute will not be chosen. All devices should use a value of the same type for this attribute because that is part of its specification, but if one device doesn't, then it also will not be chosen.<br><br>When the DRAListTypeAttributes feature gate is enabled, comparison uses set semantics(i.e., element order and duplicates are ignored): list-valued attributes match when the intersection across all devices is non-empty. Scalar values are treated as single-element lists for backward compatibility.<br><br>Must include the domain qualifier.|
|requests|[string]|false|none|requests is a list of the one or more requests in this claim which must co-satisfy this constraint. If a request is fulfilled by multiple devices, then all of the devices must satisfy the constraint. If this is not specified, this constraint applies to all requests in this claim.<br><br>References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the constraint applies to all subrequests.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceCounterConsumption">io.k8s.api.resource.v1.DeviceCounterConsumption</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicecounterconsumption"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceCounterConsumption"></a>
<a id="tocSio.k8s.api.resource.v1.devicecounterconsumption"></a>
<a id="tocsio.k8s.api.resource.v1.devicecounterconsumption"></a>

```json
{
  "compatibilityGroups": [
    "string"
  ],
  "counterSet": "",
  "counters": {
    "property1": {
      "value": {}
    },
    "property2": {
      "value": {}
    }
  }
}
```

DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatibilityGroups|[string]|false|none|compatibilityGroups is a list of opaque group names for this counter set consumption.<br><br>Devices that consume counters from the same counter set may only be allocated at the same time ("co-allocated") if they all share at least one common group: the intersection of the CompatibilityGroups of all co-allocated devices on that counter set must be non-empty. Devices that consume from different counter sets are never compared via this field.<br><br>An unset field, an explicit nil, and an empty list are equivalent and mean "no groups": such a device is only co-allocatable with sibling devices on the same counter set that also have no groups, and is never co-allocatable with a device that declares one or more groups.<br><br>Group names are opaque and meaningful only within the publishing driver's pool.<br><br>The maximum number of groups is 2, and the names must be unique.|
|counterSet|string|true|none|counterSet is the name of the set from which the counters defined will be consumed.|
|counters|object|true|none|counters defines the counters that will be consumed by the device.<br><br>The maximum number of counters is 32.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceDerivedAttribute">io.k8s.api.resource.v1.DeviceDerivedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicederivedattribute"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceDerivedAttribute"></a>
<a id="tocSio.k8s.api.resource.v1.devicederivedattribute"></a>
<a id="tocsio.k8s.api.resource.v1.devicederivedattribute"></a>

```json
{
  "expression": "",
  "name": ""
}
```

DeviceDerivedAttribute defines a derived attribute computed via CEL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|expression is a CEL expression evaluated against each candidate device. The expression must evaluate to a primitive scalar (string, integer, boolean, or semver) or a list of these scalars ([]string, []int64, []bool, []semver) to act as a virtual grouping key. Any other return type is an error and causes CEL evaluation for the device to fail.<br><br>The expression's input is an object named "device", which carries the same properties as in a CELDeviceSelector.<br><br>When pod scheduling encounters CEL runtime errors (such as looking up an attribute that isn't defined) for some devices, it will abort allocation and fail scheduling for the Pod. Surfacing evaluation errors immediately prevents silent topology matching failures that are extremely hard to detect. A robust expression should, for example, check for the existence of attributes before referencing them to avoid runtime evaluation errors.<br><br>The expression gets evaluated after a device has passed the other selector expressions for the request in which this expression is used. This allows writing expressions that are tailored towards the specific devices being requested (for example, by assuming the device is from a certain vendor and skipping those checks).<br><br>The length of the expression must be smaller or equal to 10 Ki. The cost of evaluating it is also limited based on the estimated number of logical steps; the combined cost of all derived attributes in a claim is capped by a shared CEL cost budget.|
|name|string|true|none|name is the identifier for this derived attribute, used in constraints.<br><br>It must be a DNS subdomain followed by a slash ("/") followed by a C identifier (e.g. "example.com/numaNode" or "derived/numaNode").<br><br>If the chosen name matches an existing physical attribute from a driver, the derived attribute's expression will shadow the physical attribute, and its evaluated value will be used in constraints instead. When the goal is to define a derived attribute that is only used within the ResourceClaim and not meant to shadow an existing attribute, use a domain prefix that no DRA driver should be using (e.g. "derived/myAttribute").<br><br>It is not valid to define a derived attribute that isn't used in at least one constraint.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceRequest">io.k8s.api.resource.v1.DeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicerequest"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceRequest"></a>
<a id="tocSio.k8s.api.resource.v1.devicerequest"></a>
<a id="tocsio.k8s.api.resource.v1.devicerequest"></a>

```json
{
  "exactly": {
    "adminAccess": true,
    "allocationMode": "string",
    "capacity": {
      "requests": {
        "property1": "string",
        "property2": "string"
      }
    },
    "count": 0,
    "derivedAttributes": [
      {
        "expression": "",
        "name": ""
      }
    ],
    "deviceClassName": "",
    "selectors": [
      {
        "cel": {
          "expression": ""
        }
      }
    ],
    "tolerations": [
      {
        "effect": "string",
        "key": "string",
        "operator": "Equal",
        "tolerationSeconds": 0,
        "value": "string"
      }
    ]
  },
  "firstAvailable": [
    {
      "allocationMode": "string",
      "capacity": {
        "requests": {
          "property1": "string",
          "property2": "string"
        }
      },
      "count": 0,
      "derivedAttributes": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "deviceClassName": "",
      "name": "",
      "selectors": [
        {
          "cel": {
            "expression": ""
          }
        }
      ],
      "tolerations": [
        {
          "effect": "string",
          "key": "string",
          "operator": "Equal",
          "tolerationSeconds": 0,
          "value": "string"
        }
      ]
    }
  ],
  "name": ""
}
```

DeviceRequest is a request for devices required for a claim. This is typically a request for a single resource like a device, but can also ask for several identical devices. With FirstAvailable it is also possible to provide a prioritized list of requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exactly|object|false|none|exactly specifies the details for a single request that must be met exactly for the request to be satisfied.<br><br>One of Exactly or FirstAvailable must be set.|
|firstAvailable|[[io.k8s.api.resource.v1.DeviceSubRequest](#schemaio.k8s.api.resource.v1.devicesubrequest)]|false|none|firstAvailable contains subrequests, of which exactly one will be selected by the scheduler. It tries to satisfy them in the order in which they are listed here. So if there are two entries in the list, the scheduler will only check the second one if it determines that the first one can not be used.<br><br>DRA does not yet implement scoring, so the scheduler will select the first set of devices that satisfies all the requests in the claim. And if the requirements can be satisfied on more than one node, other scheduling features will determine which node is chosen. This means that the set of devices allocated to a claim might not be the optimal set available to the cluster. Scoring will be implemented later.|
|name|string|true|none|name can be used to reference this request in a pod.spec.containers[].resources.claims entry and in a constraint of the claim.<br><br>References using the name in the DeviceRequest will uniquely identify a request when the Exactly field is set. When the FirstAvailable field is set, a reference to the name of the DeviceRequest will match whatever subrequest is chosen by the scheduler.<br><br>Must be a DNS label.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceRequestAllocationResult">io.k8s.api.resource.v1.DeviceRequestAllocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicerequestallocationresult"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceRequestAllocationResult"></a>
<a id="tocSio.k8s.api.resource.v1.devicerequestallocationresult"></a>
<a id="tocsio.k8s.api.resource.v1.devicerequestallocationresult"></a>

```json
{
  "adminAccess": true,
  "bindingConditions": [
    "string"
  ],
  "bindingFailureConditions": [
    "string"
  ],
  "consumedCapacity": {
    "property1": "string",
    "property2": "string"
  },
  "device": "",
  "driver": "",
  "pool": "",
  "request": "",
  "shareID": "string",
  "skipNodeOperations": [
    "string"
  ],
  "tolerations": [
    {
      "effect": "string",
      "key": "string",
      "operator": "Equal",
      "tolerationSeconds": 0,
      "value": "string"
    }
  ]
}
```

DeviceRequestAllocationResult contains the allocation result for one request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccess|boolean|false|none|adminAccess indicates that this device was allocated for administrative access. See the corresponding request field for a definition of mode.<br><br>Admin access is disabled if this field is unset or set to false, otherwise it is enabled.|
|bindingConditions|[string]|false|none|bindingConditions contains a copy of the BindingConditions from the corresponding ResourceSlice at the time of allocation.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.|
|bindingFailureConditions|[string]|false|none|bindingFailureConditions contains a copy of the BindingFailureConditions from the corresponding ResourceSlice at the time of allocation.<br><br>This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.|
|consumedCapacity|object|false|none|consumedCapacity tracks the amount of capacity consumed per device as part of the claim request. The consumed amount may differ from the requested amount: it is rounded up to the nearest valid value based on the device’s requestPolicy if applicable (i.e., may not be less than the requested amount).<br><br>The total consumed capacity for each device must not exceed the DeviceCapacity's Value.<br><br>This field is populated only for devices that allow multiple allocations. All capacity entries are included, even if the consumed amount is zero. The domain prefix in the capacity name may be omitted if it is the same as the driver name.<br><br>ConsumedCapacity may have at most 32 entries. The values must not be negative.|
|device|string|true|none|device references one device instance via its name in the driver's resource pool. It must be a DNS label.|
|driver|string|true|none|driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters.|
|pool|string|true|none|pool specifies the name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).<br><br>Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.|
|request|string|true|none|request is the name of the request in the claim which caused this device to be allocated. If it references a subrequest in the firstAvailable list on a DeviceRequest, this field must include both the name of the main request and the subrequest using the format <main request>/<subrequest>.<br><br>Multiple devices may have been allocated per request.|
|shareID|string|false|none|shareID uniquely identifies an individual allocation share of the device, used when the device supports multiple simultaneous allocations. It serves as an additional map key to differentiate concurrent shares of the same device.|
|skipNodeOperations|[string]|false|none|skipNodeOperations lists node-local resource operations (gRPC calls) that will be skipped for this allocated device when determining whether operations are necessary on the node. If all allocated devices for a driver in a claim skip an operation, that gRPC call will be skipped. It is a copy of the ResourceSlice.spec.skipNodeOperations value at the time when the device was allocated.|
|tolerations|[[io.k8s.api.resource.v1.DeviceToleration](#schemaio.k8s.api.resource.v1.devicetoleration)]|false|none|tolerations is a copy of all tolerations specified in the request at the time when the device got allocated.<br><br>The maximum number of tolerations is 16.<br><br>This is a beta field and requires enabling the DRADeviceTaints feature gate.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceSelector">io.k8s.api.resource.v1.DeviceSelector</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.deviceselector"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceSelector"></a>
<a id="tocSio.k8s.api.resource.v1.deviceselector"></a>
<a id="tocsio.k8s.api.resource.v1.deviceselector"></a>

```json
{
  "cel": {
    "expression": ""
  }
}
```

DeviceSelector must have exactly one field set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cel|object|false|none|cel contains a CEL expression for selecting a device.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceSubRequest">io.k8s.api.resource.v1.DeviceSubRequest</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicesubrequest"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceSubRequest"></a>
<a id="tocSio.k8s.api.resource.v1.devicesubrequest"></a>
<a id="tocsio.k8s.api.resource.v1.devicesubrequest"></a>

```json
{
  "allocationMode": "string",
  "capacity": {
    "requests": {
      "property1": "string",
      "property2": "string"
    }
  },
  "count": 0,
  "derivedAttributes": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "deviceClassName": "",
  "name": "",
  "selectors": [
    {
      "cel": {
        "expression": ""
      }
    }
  ],
  "tolerations": [
    {
      "effect": "string",
      "key": "string",
      "operator": "Equal",
      "tolerationSeconds": 0,
      "value": "string"
    }
  ]
}
```

DeviceSubRequest describes a request for device provided in the claim.spec.devices.requests[].firstAvailable array. Each is typically a request for a single resource like a device, but can also ask for several identical devices.

DeviceSubRequest is similar to ExactDeviceRequest, but doesn't expose the AdminAccess field as that one is only supported when requesting a specific device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationMode|string|false|none|allocationMode and its related fields define how devices are allocated to satisfy this subrequest. Supported values are:<br><br>- ExactCount: This request is for a specific number of devices.<br>  This is the default. The exact number is provided in the<br>  count field.<br><br>- All: This subrequest is for all of the matching devices in a pool.<br>  Allocation will fail if some devices are already allocated,<br>  unless adminAccess is requested.<br><br>If AllocationMode is not specified, the default mode is ExactCount. If the mode is ExactCount and count is not specified, the default count is one. Any other subrequests must specify this field.<br><br>More modes may get added in the future. Clients must refuse to handle requests with unknown modes.|
|capacity|object|false|none|capacity define resource requirements against each capacity.<br><br>If this field is unset and the device supports multiple allocations, the default value will be applied to each capacity according to requestPolicy. For the capacity that has no requestPolicy, default is the full capacity value.<br><br>Applies to each device allocation. If Count > 1, the request fails if there aren't enough devices that meet the requirements. If AllocationMode is set to All, the request fails if there are devices that otherwise match the request, and have this capacity, with a value >= the requested amount, but which cannot be allocated to this request.|
|count|integer(int64)|false|none|count is used only when the count mode is "ExactCount". Must be greater than zero. If AllocationMode is ExactCount and this field is not specified, the default is one.|
|derivedAttributes|[[io.k8s.api.resource.v1.DeviceDerivedAttribute](#schemaio.k8s.api.resource.v1.devicederivedattribute)]|false|none|derivedAttributes defines a set of virtual attributes computed via CEL expressions for each candidate device. These virtual attributes can be referenced in `.devices.constraints` to align and match different devices (e.g., co-allocating a GPU and a NIC on the same NUMA node) even if their drivers publish different attributes. Derived attributes are not available via `device.attributes` in the CEL environment when evaluating selector expressions.<br><br>Derived attributes allow you to extract, transform, or normalize topology information (such as extracting a NUMA index from a complex topology string or renaming a vendor-specific attribute) into a common virtual attribute name at scheduling time. The scheduler then evaluates these virtual attributes exactly like static attributes when matching constraints.<br><br>Every derived attribute defined in this list must be referenced by at least one MatchAttribute or DistinctAttribute constraint in the `.devices.constraints` list.<br><br>The maximum number of derived attributes is 32.<br><br>This is an alpha field and requires enabling the DRADerivedAttributes feature gate.|
|deviceClassName|string|true|none|deviceClassName references a specific DeviceClass, which can define additional configuration and selectors to be inherited by this subrequest.<br><br>A class is required. Which classes are available depends on the cluster.<br><br>Administrators may use this to restrict which devices may get requested by only installing classes with selectors for permitted devices. If users are free to request anything without restrictions, then administrators can create an empty DeviceClass for users to reference.|
|name|string|true|none|name can be used to reference this subrequest in the list of constraints or the list of configurations for the claim. References must use the format <main request>/<subrequest>.<br><br>Must be a DNS label.|
|selectors|[[io.k8s.api.resource.v1.DeviceSelector](#schemaio.k8s.api.resource.v1.deviceselector)]|false|none|selectors define criteria which must be satisfied by a specific device in order for that device to be considered for this subrequest. All selectors must be satisfied for a device to be considered.|
|tolerations|[[io.k8s.api.resource.v1.DeviceToleration](#schemaio.k8s.api.resource.v1.devicetoleration)]|false|none|tolerations if specified, the request's tolerations.<br><br>Tolerations for NoSchedule are required to allocate a device which has a taint with that effect. The same applies to NoExecute.<br><br>In addition, should any of the allocated devices get tainted with NoExecute after allocation and that effect is not tolerated, then all pods consuming the ResourceClaim get deleted to evict them. The scheduler will not let new pods reserve the claim while it has these tainted devices. Once all pods are evicted, the claim will get deallocated.<br><br>The maximum number of tolerations is 16.<br><br>This is a beta field and requires enabling the DRADeviceTaints feature gate.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaint">io.k8s.api.resource.v1.DeviceTaint</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaint"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaint"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaint"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaint"></a>

```json
{
  "effect": "",
  "key": "",
  "timeAdded": {},
  "value": "string"
}
```

The device this taint is attached to has the "effect" on any claim which does not tolerate the taint and, through the claim, to pods using the claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|effect is the effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.<br><br>Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.|
|key|string|true|none|key is the taint key to be applied to a device. Must be a label name.|
|timeAdded|object|false|none|timeAdded represents the time at which the taint was added or (only in a DeviceTaintRule) the effect was modified. Added automatically during create or update if not set.<br><br>In addition, in a DeviceTaintRule a value provided during an update gets replaced with the current time if the provided value is the same as the old one and the new effect is different. Changing the key and/or value while keeping the effect unchanged is possible and does not update the time stamp because the eviction which uses it is either already started (NoExecute) or not started yet (NoEffect, NoSchedule).|
|value|string|false|none|value is the taint value corresponding to the taint key. Must be a label value.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaintRule">io.k8s.api.resource.v1.DeviceTaintRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaintrule"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaintRule"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaintrule"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaintrule"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

DeviceTaintRule adds one taint to all devices which match the selector. This has the same effect as if the taint was specified directly in the ResourceSlice by the DRA driver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata.|
|spec|object|true|none|spec specifies the selector and one taint.<br><br>Changing the spec automatically increments the metadata.generation number.|
|status|object|false|none|status provides information about what was requested in the spec.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaintRuleList">io.k8s.api.resource.v1.DeviceTaintRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaintrulelist"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaintRuleList"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaintrulelist"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaintrulelist"></a>

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

DeviceTaintRuleList is a collection of DeviceTaintRules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.resource.v1.DeviceTaintRule](#schemaio.k8s.api.resource.v1.devicetaintrule)]|true|none|Items is the list of DeviceTaintRules.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard list metadata|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaintRuleSpec">io.k8s.api.resource.v1.DeviceTaintRuleSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaintrulespec"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaintRuleSpec"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaintrulespec"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaintrulespec"></a>

```json
{
  "deviceSelector": {
    "device": "string",
    "driver": "string",
    "pool": "string"
  },
  "taint": {}
}
```

DeviceTaintRuleSpec specifies the selector and one taint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceSelector|object|false|none|deviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.|
|taint|object|true|none|taint is the taint that gets applied to matching devices.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaintRuleStatus">io.k8s.api.resource.v1.DeviceTaintRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaintrulestatus"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaintRuleStatus"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaintrulestatus"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaintrulestatus"></a>

```json
{
  "conditions": [
    {
      "lastTransitionTime": {},
      "message": "",
      "observedGeneration": 0,
      "reason": "",
      "status": "",
      "type": ""
    }
  ]
}
```

DeviceTaintRuleStatus provides information about an on-going pod eviction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|none|conditions provide information about the state of the DeviceTaintRule and the cluster at some point in time, in a machine-readable and human-readable format.<br><br>The following condition is currently defined as part of this API, more may get added: - Type: EvictionInProgress - Status: True if there are currently pods which need to be evicted, False otherwise<br>  (includes the effects which don't cause eviction).<br>- Reason: not specified, may change - Message: includes information about number of pending pods and already evicted pods<br>  in a human-readable format, updated periodically, may change<br><br>For `effect: None`, the condition above gets set once for each change to the spec, with the message containing information about what would happen if the effect was `NoExecute`. This feedback can be used to decide whether changing the effect to `NoExecute` will work as intended. It only gets set once to avoid having to constantly update the status.<br><br>Must have 8 or fewer entries.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceTaintSelector">io.k8s.api.resource.v1.DeviceTaintSelector</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetaintselector"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceTaintSelector"></a>
<a id="tocSio.k8s.api.resource.v1.devicetaintselector"></a>
<a id="tocsio.k8s.api.resource.v1.devicetaintselector"></a>

```json
{
  "device": "string",
  "driver": "string",
  "pool": "string"
}
```

DeviceTaintSelector defines which device(s) a DeviceTaintRule applies to. The empty selector matches all devices. Without a selector, no devices are matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|string|false|none|device represents the name of the device. If device is set, only devices with that name are selected. This field corresponds to slice.spec.devices[].name.<br><br>Setting also driver and pool may be required to avoid ambiguity, but is not required.|
|driver|string|false|none|driver is the driver name. If driver is set, only devices from that driver are selected. This fields corresponds to slice.spec.driver.|
|pool|string|false|none|pool is the pool name. If pool is set, only devices in that pool are selected.<br><br>Also setting the driver name may be useful to avoid ambiguity when different drivers use the same pool name, but this is not required because selecting pools from different drivers may also be useful, for example when drivers with node-local devices use the node name as their pool name.|

<h2 id="tocS_io.k8s.api.resource.v1.DeviceToleration">io.k8s.api.resource.v1.DeviceToleration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.devicetoleration"></a>
<a id="schema_io.k8s.api.resource.v1.DeviceToleration"></a>
<a id="tocSio.k8s.api.resource.v1.devicetoleration"></a>
<a id="tocsio.k8s.api.resource.v1.devicetoleration"></a>

```json
{
  "effect": "string",
  "key": "string",
  "operator": "Equal",
  "tolerationSeconds": 0,
  "value": "string"
}
```

The ResourceClaim this DeviceToleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|false|none|effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule and NoExecute.|
|key|string|false|none|key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. Must be a label name.|
|operator|string|false|none|operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a ResourceClaim can tolerate all taints of a particular category.|
|tolerationSeconds|integer(int64)|false|none|tolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. If larger than zero, the time when the pod needs to be evicted is calculated as <time when taint was adedd> + <toleration seconds>.|
|value|string|false|none|value is the taint value the toleration matches to. If the operator is Exists, the value must be empty, otherwise just a regular string. Must be a label value.|

<h2 id="tocS_io.k8s.api.resource.v1.ExactDeviceRequest">io.k8s.api.resource.v1.ExactDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.exactdevicerequest"></a>
<a id="schema_io.k8s.api.resource.v1.ExactDeviceRequest"></a>
<a id="tocSio.k8s.api.resource.v1.exactdevicerequest"></a>
<a id="tocsio.k8s.api.resource.v1.exactdevicerequest"></a>

```json
{
  "adminAccess": true,
  "allocationMode": "string",
  "capacity": {
    "requests": {
      "property1": "string",
      "property2": "string"
    }
  },
  "count": 0,
  "derivedAttributes": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "deviceClassName": "",
  "selectors": [
    {
      "cel": {
        "expression": ""
      }
    }
  ],
  "tolerations": [
    {
      "effect": "string",
      "key": "string",
      "operator": "Equal",
      "tolerationSeconds": 0,
      "value": "string"
    }
  ]
}
```

ExactDeviceRequest is a request for one or more identical devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccess|boolean|false|none|adminAccess indicates that this is a claim for administrative access to the device(s). Claims with AdminAccess are expected to be used for monitoring or other management services for a device.  They ignore all ordinary claims to the device with respect to access modes and any resource allocations.<br><br>Admin access is disabled if this field is unset or set to false, otherwise it is enabled.|
|allocationMode|string|false|none|allocationMode and its related fields define how devices are allocated to satisfy this request. Supported values are:<br><br>- ExactCount: This request is for a specific number of devices.<br>  This is the default. The exact number is provided in the<br>  count field.<br><br>- All: This request is for all of the matching devices in a pool.<br>  At least one device must exist on the node for the allocation to succeed.<br>  Allocation will fail if some devices are already allocated,<br>  unless adminAccess is requested.<br><br>If AllocationMode is not specified, the default mode is ExactCount. If the mode is ExactCount and count is not specified, the default count is one. Any other requests must specify this field.<br><br>More modes may get added in the future. Clients must refuse to handle requests with unknown modes.|
|capacity|object|false|none|capacity define resource requirements against each capacity.<br><br>If this field is unset and the device supports multiple allocations, the default value will be applied to each capacity according to requestPolicy. For the capacity that has no requestPolicy, default is the full capacity value.<br><br>Applies to each device allocation. If Count > 1, the request fails if there aren't enough devices that meet the requirements. If AllocationMode is set to All, the request fails if there are devices that otherwise match the request, and have this capacity, with a value >= the requested amount, but which cannot be allocated to this request.|
|count|integer(int64)|false|none|count is used only when the count mode is "ExactCount". Must be greater than zero. If AllocationMode is ExactCount and this field is not specified, the default is one.|
|derivedAttributes|[[io.k8s.api.resource.v1.DeviceDerivedAttribute](#schemaio.k8s.api.resource.v1.devicederivedattribute)]|false|none|derivedAttributes defines a set of virtual attributes computed via CEL expressions for each candidate device. These virtual attributes can be referenced in `.devices.constraints` to align and match different devices (e.g., co-allocating a GPU and a NIC on the same NUMA node) even if their drivers publish different attributes. Derived attributes are not available via `device.attributes` in the CEL environment when evaluating selector expressions.<br><br>Derived attributes allow you to extract, transform, or normalize topology information (such as extracting a NUMA index from a complex topology string or renaming a vendor-specific attribute) into a common virtual attribute name at scheduling time. The scheduler then evaluates these virtual attributes exactly like static attributes when matching constraints.<br><br>Every derived attribute defined in this list must be referenced by at least one MatchAttribute or DistinctAttribute constraint in the `.devices.constraints` list.<br><br>The maximum number of derived attributes is 32.<br><br>This is an alpha field and requires enabling the DRADerivedAttributes feature gate.|
|deviceClassName|string|true|none|deviceClassName references a specific DeviceClass, which can define additional configuration and selectors to be inherited by this request.<br><br>A DeviceClassName is required.<br><br>Administrators may use this to restrict which devices may get requested by only installing classes with selectors for permitted devices. If users are free to request anything without restrictions, then administrators can create an empty DeviceClass for users to reference.|
|selectors|[[io.k8s.api.resource.v1.DeviceSelector](#schemaio.k8s.api.resource.v1.deviceselector)]|false|none|selectors define criteria which must be satisfied by a specific device in order for that device to be considered for this request. All selectors must be satisfied for a device to be considered.|
|tolerations|[[io.k8s.api.resource.v1.DeviceToleration](#schemaio.k8s.api.resource.v1.devicetoleration)]|false|none|tolerations if specified, the request's tolerations.<br><br>Tolerations for NoSchedule are required to allocate a device which has a taint with that effect. The same applies to NoExecute.<br><br>In addition, should any of the allocated devices get tainted with NoExecute after allocation and that effect is not tolerated, then all pods consuming the ResourceClaim get deleted to evict them. The scheduler will not let new pods reserve the claim while it has these tainted devices. Once all pods are evicted, the claim will get deallocated.<br><br>The maximum number of tolerations is 16.<br><br>This is a beta field and requires enabling the DRADeviceTaints feature gate.|

<h2 id="tocS_io.k8s.api.resource.v1.NetworkDeviceData">io.k8s.api.resource.v1.NetworkDeviceData</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.networkdevicedata"></a>
<a id="schema_io.k8s.api.resource.v1.NetworkDeviceData"></a>
<a id="tocSio.k8s.api.resource.v1.networkdevicedata"></a>
<a id="tocsio.k8s.api.resource.v1.networkdevicedata"></a>

```json
{
  "hardwareAddress": "string",
  "interfaceName": "string",
  "ips": [
    "string"
  ]
}
```

NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hardwareAddress|string|false|none|hardwareAddress represents the hardware address (e.g. MAC Address) of the device's network interface.<br><br>Must not be longer than 128 bytes.|
|interfaceName|string|false|none|interfaceName specifies the name of the network interface associated with the allocated device. This might be the name of a physical or virtual network interface being configured in the pod.<br><br>Must not be longer than 256 bytes.|
|ips|[string]|false|none|ips lists the network addresses assigned to the device's network interface. This can include both IPv4 and IPv6 addresses. The IPs are in the CIDR notation, which includes both the address and the associated subnet mask. e.g.: "192.0.2.5/24" for IPv4 and "2001:db8::5/64" for IPv6.|

<h2 id="tocS_io.k8s.api.resource.v1.NodeAllocatableMapping">io.k8s.api.resource.v1.NodeAllocatableMapping</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.nodeallocatablemapping"></a>
<a id="schema_io.k8s.api.resource.v1.NodeAllocatableMapping"></a>
<a id="tocSio.k8s.api.resource.v1.nodeallocatablemapping"></a>
<a id="tocsio.k8s.api.resource.v1.nodeallocatablemapping"></a>

```json
{
  "capacityKey": "string",
  "capacityMultiplier": {},
  "deviceMultiplier": {}
}
```

NodeAllocatableMapping defines how a DRA allocation directly translates into a node allocatable resource quantity. The mapping can be derived from either the count of allocated devices (via deviceMultiplier) or the specific capacity consumed (via capacityKey and capacityMultiplier). These options are mutually exclusive. Kubelet adds this mapped resource quantity from claim to both requests and limits at the pod-level cgroup, and to limits at the container-level cgroup for each container referencing the claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityKey|string|false|none|capacityKey references a capacity name defined as a key in the `spec.devices[*].capacity` map. When this field is set, the value associated with this key in the `status.allocation.devices.results[*].consumedCapacity` map (for a specific claim allocation) determines the base quantity for the node allocatable resource. `capacityMultiplier` must also be set and is multiplied with the base quantity.<br><br>For example, if `spec.devices[*].capacity` has an entry "dra.example.com/memory": "128Gi", and this field is set to "dra.example.com/memory", then for a claim allocation that consumes { "dra.example.com/memory": "4Gi" } the base quantity for the node allocatable resource mapping will be "4Gi". The final node allocatable resource amount is `consumedCapacity[capacityKey]` * `capacityMultiplier`.<br><br>In this example, "dra.example.com/memory" is a fictional standardized capacity name. For driver-specific capacities the driver name can be omitted. As defined for consumedCapacity, the capacity consumption may be recorded there with or without the driver name.|
|capacityMultiplier|object|false|none|capacityMultiplier is used as a multiplier for the allocated capacity consumed. It is only valid if `capacityKey` is set. The final node allocatable resource amount is `consumedCapacity[capacityKey]` * `capacityMultiplier`. For example, if a Device's capacity "dra.example.com/cores" is consumed, and each "core" provides 2 "cpu"s, the mapping would be: {ResourceName: "cpu", capacityKey: "dra.example.com/cores", capacityMultiplier: "2"}. If a claim consumes 8 "dra.example.com/cores", the CPU footprint is 8 * 2 = 16.|
|deviceMultiplier|object|false|none|deviceMultiplier is used as a multiplier for the allocated device count in the claim. The final node allocatable resource amount is `deviceCount` * `deviceMultiplier`. For example, a DRA driver representing each cache complex (CCX) as a device would have {ResourceName: "cpu", deviceMultiplier: "8"} in its `nodeAllocatableResources`. If 2 devices (CCX) are allocated to the claim, 2 * 8 = 16 CPUs would be considered as allocated. It is only valid when `capacityKey` and `capacityMultiplier` are not set.|

<h2 id="tocS_io.k8s.api.resource.v1.NodeAllocatableOverhead">io.k8s.api.resource.v1.NodeAllocatableOverhead</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.nodeallocatableoverhead"></a>
<a id="schema_io.k8s.api.resource.v1.NodeAllocatableOverhead"></a>
<a id="tocSio.k8s.api.resource.v1.nodeallocatableoverhead"></a>
<a id="tocsio.k8s.api.resource.v1.nodeallocatableoverhead"></a>

```json
{
  "perContainer": {},
  "perPod": {}
}
```

NodeAllocatableOverhead defines auxiliary resource overheads incurred when allocating a device. Overheads can be specified as a fixed cost per pod referencing the claim, a variable cost per container reference, or both. Kubelet accounts for this overhead by adding it to both the pod-level and container-level cgroups of referencing containers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perContainer|object|false|none|perContainer is applied per container reference to the claim. This models overhead scaling linearly with the number of containers actively using the device. When both PerPod and PerContainer are specified, the total overhead allocated for each pod referencing the claim is computed as: Quantity = PerPod + (PerContainer * NumReferences) Kubelet accounts for this overhead in cgroups: - Pod-level cgroup (requests and limits): Kubelet adds PerPod + (PerContainer * NumReferences). - Container-level cgroup (limits only): Kubelet adds PerPod + PerContainer for each referencing container. This allows any single container to access the pod-level overhead, while the parent cgroup caps the total usage to account for PerPod exactly once. PerContainer overhead of a claim referenced by a non-restartable init container is counted towards the pod's peak resource calculation (see Pod `spec.initContainers`), not for the pod's entire duration.|
|perPod|object|false|none|perPod is overhead applied once per pod referencing the claim on this node. This is a flat overhead incurred for every pod referencing the claim.|

<h2 id="tocS_io.k8s.api.resource.v1.NodeAllocatableResource">io.k8s.api.resource.v1.NodeAllocatableResource</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.nodeallocatableresource"></a>
<a id="schema_io.k8s.api.resource.v1.NodeAllocatableResource"></a>
<a id="tocSio.k8s.api.resource.v1.nodeallocatableresource"></a>
<a id="tocsio.k8s.api.resource.v1.nodeallocatableresource"></a>

```json
{
  "mapping": {
    "capacityKey": "string",
    "capacityMultiplier": {},
    "deviceMultiplier": {}
  },
  "overhead": {
    "perContainer": {},
    "perPod": {}
  }
}
```

NodeAllocatableResource defines the translation between the DRA device/capacity units requested to the corresponding quantity of the node allocatable resource. At least one of Mapping or Overhead must be specified. Not specifying either is an invalid configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapping|object|false|none|mapping is used when the device directly models a node allocatable resource like standard CPU or memory (e.g., with a CPU DRA driver). The calculated quantity is accounted for exactly once per claim instance on the node. To prevent node cgroup isolation friction, the scheduler explicitly blocks sharing mapped device claims across multiple pods.|
|overhead|object|false|none|overhead contains fields for modeling auxiliary overhead incurred on node allocatable resources when allocating devices that are not themselves modeling a node allocatable resource (e.g., host memory overhead for GPUs). Sharing overhead-mapped claims across multiple pods is allowed. The node allocatable overhead is accounted for individually for each pod referencing the claim. Overhead is always subtracted from the node's allocatable capacity for the resource, even when mapping is specified for the same resource. Eg: If a device models memory capacity per socket as a consumable capacity pool via Mapping (with CapacityKey), any overhead specified for the same resource will be subtracted from the node's general allocatable capacity and not from the per-socket capacity pool in Mapping.|

<h2 id="tocS_io.k8s.api.resource.v1.OpaqueDeviceConfiguration">io.k8s.api.resource.v1.OpaqueDeviceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.opaquedeviceconfiguration"></a>
<a id="schema_io.k8s.api.resource.v1.OpaqueDeviceConfiguration"></a>
<a id="tocSio.k8s.api.resource.v1.opaquedeviceconfiguration"></a>
<a id="tocsio.k8s.api.resource.v1.opaquedeviceconfiguration"></a>

```json
{
  "driver": "",
  "parameters": {}
}
```

OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driver|string|true|none|driver is used to determine which kubelet plugin needs to be passed these configuration parameters.<br><br>An admission policy provided by the driver developer could use this to decide whether it needs to validate them.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters.|
|parameters|object|true|none|parameters can contain arbitrary data. It is the responsibility of the driver developer to handle validation and versioning. Typically this includes self-identification and a version ("kind" + "apiVersion" for Kubernetes types), with conversion between different versions.<br><br>The length of the raw data must be smaller or equal to 10 Ki.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaim">io.k8s.api.resource.v1.ResourceClaim</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaim"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaim"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaim"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaim"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

ResourceClaim describes a request for access to resources in the cluster, for use by workloads. For example, if a workload needs an accelerator device with specific properties, this is how that request is expressed. The status stanza tracks whether this claim has been satisfied and what specific resources have been allocated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata.|
|spec|object|false|none|spec describes what is being requested and how to configure it. The spec is immutable.|
|status|object|false|none|status describes whether the claim is ready to use and what has been allocated.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimConsumerReference">io.k8s.api.resource.v1.ResourceClaimConsumerReference</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimconsumerreference"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimConsumerReference"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimconsumerreference"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimconsumerreference"></a>

```json
{
  "apiGroup": "string",
  "name": "",
  "resource": "",
  "uid": ""
}
```

ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiGroup|string|false|none|apiGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.|
|name|string|true|none|name is the name of resource being referenced.|
|resource|string|true|none|resource is the type of resource being referenced, for example "pods".|
|uid|string|true|none|uid identifies exactly one incarnation of the resource.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimList">io.k8s.api.resource.v1.ResourceClaimList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimlist"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimList"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimlist"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimlist"></a>

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

ResourceClaimList is a collection of claims.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.resource.v1.ResourceClaim](#schemaio.k8s.api.resource.v1.resourceclaim)]|true|none|Items is the list of resource claims.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard list metadata|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimSpec">io.k8s.api.resource.v1.ResourceClaimSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimspec"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimSpec"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimspec"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimspec"></a>

```json
{
  "devices": {}
}
```

ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|false|none|devices defines how to request devices.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimStatus">io.k8s.api.resource.v1.ResourceClaimStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimstatus"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimStatus"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimstatus"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimstatus"></a>

```json
{
  "allocation": {
    "allocationTimestamp": {},
    "devices": {},
    "nodeSelector": {
      "nodeSelectorTerms": [
        {
          "matchExpressions": [
            {
              "key": "",
              "operator": "",
              "values": [
                "string"
              ]
            }
          ],
          "matchFields": [
            {
              "key": "",
              "operator": "",
              "values": [
                "string"
              ]
            }
          ]
        }
      ]
    }
  },
  "devices": [
    {
      "conditions": [
        {
          "lastTransitionTime": {},
          "message": "",
          "observedGeneration": 0,
          "reason": "",
          "status": "",
          "type": ""
        }
      ],
      "data": {},
      "device": "",
      "driver": "",
      "networkData": {
        "hardwareAddress": "string",
        "interfaceName": "string",
        "ips": [
          "string"
        ]
      },
      "pool": "",
      "shareID": "string"
    }
  ],
  "reservedFor": [
    {
      "apiGroup": "string",
      "name": "",
      "resource": "",
      "uid": ""
    }
  ]
}
```

ResourceClaimStatus tracks whether the resource has been allocated and what the result of that was.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocation|object|false|none|allocation is set once the claim has been allocated successfully.|
|devices|[[io.k8s.api.resource.v1.AllocatedDeviceStatus](#schemaio.k8s.api.resource.v1.allocateddevicestatus)]|false|none|devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.|
|reservedFor|[[io.k8s.api.resource.v1.ResourceClaimConsumerReference](#schemaio.k8s.api.resource.v1.resourceclaimconsumerreference)]|false|none|reservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.<br><br>In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.<br><br>Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.<br><br>There can be at most 256 such reservations. This may get increased in the future, but not reduced.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimTemplate">io.k8s.api.resource.v1.ResourceClaimTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimtemplate"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimTemplate"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimtemplate"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimtemplate"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

ResourceClaimTemplate is used to produce ResourceClaim objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata.|
|spec|object|false|none|spec describes the ResourceClaim that is to be generated.<br><br>This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimTemplateList">io.k8s.api.resource.v1.ResourceClaimTemplateList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimtemplatelist"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimTemplateList"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimtemplatelist"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimtemplatelist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

ResourceClaimTemplateList is a collection of claim templates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.resource.v1.ResourceClaimTemplate](#schemaio.k8s.api.resource.v1.resourceclaimtemplate)]|true|none|Items is the list of resource claim templates.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard list metadata|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceClaimTemplateSpec">io.k8s.api.resource.v1.ResourceClaimTemplateSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceclaimtemplatespec"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceClaimTemplateSpec"></a>
<a id="tocSio.k8s.api.resource.v1.resourceclaimtemplatespec"></a>
<a id="tocsio.k8s.api.resource.v1.resourceclaimtemplatespec"></a>

```json
{
  "metadata": {},
  "spec": {}
}
```

ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|metadata may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.|
|spec|object|false|none|spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourcePool">io.k8s.api.resource.v1.ResourcePool</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourcepool"></a>
<a id="schema_io.k8s.api.resource.v1.ResourcePool"></a>
<a id="tocSio.k8s.api.resource.v1.resourcepool"></a>
<a id="tocsio.k8s.api.resource.v1.resourcepool"></a>

```json
{
  "generation": 0,
  "name": "",
  "resourceSliceCount": 0
}
```

ResourcePool describes the pool that ResourceSlices belong to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generation|integer(int64)|true|none|generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.<br><br>Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.|
|name|string|true|none|name is used to identify the pool. For node-local devices, this is often the node name, but this is not required. A field selector can be used to list only ResourceSlice objects belonging to a certain pool.<br><br>It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.|
|resourceSliceCount|integer(int64)|true|none|resourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.<br><br>Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceSlice">io.k8s.api.resource.v1.ResourceSlice</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceslice"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceSlice"></a>
<a id="tocSio.k8s.api.resource.v1.resourceslice"></a>
<a id="tocsio.k8s.api.resource.v1.resourceslice"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.

At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.

Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.

When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.

For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object's metadata.|
|spec|object|true|none|spec contains the information published by the driver.<br><br>Changing the spec automatically increments the metadata.generation number.|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceSliceList">io.k8s.api.resource.v1.ResourceSliceList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceslicelist"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceSliceList"></a>
<a id="tocSio.k8s.api.resource.v1.resourceslicelist"></a>
<a id="tocsio.k8s.api.resource.v1.resourceslicelist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "spec": {}
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

ResourceSliceList is a collection of ResourceSlices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.resource.v1.ResourceSlice](#schemaio.k8s.api.resource.v1.resourceslice)]|true|none|Items is the list of resource ResourceSlices.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|Standard list metadata|

<h2 id="tocS_io.k8s.api.resource.v1.ResourceSliceSpec">io.k8s.api.resource.v1.ResourceSliceSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.resource.v1.resourceslicespec"></a>
<a id="schema_io.k8s.api.resource.v1.ResourceSliceSpec"></a>
<a id="tocSio.k8s.api.resource.v1.resourceslicespec"></a>
<a id="tocsio.k8s.api.resource.v1.resourceslicespec"></a>

```json
{
  "allNodes": true,
  "devices": [
    {
      "allNodes": true,
      "allowMultipleAllocations": true,
      "attributes": {
        "property1": {
          "bool": true,
          "bools": [
            true
          ],
          "int": 0,
          "ints": [
            0
          ],
          "string": "string",
          "strings": [
            "string"
          ],
          "version": "string",
          "versions": [
            "string"
          ]
        },
        "property2": {
          "bool": true,
          "bools": [
            true
          ],
          "int": 0,
          "ints": [
            0
          ],
          "string": "string",
          "strings": [
            "string"
          ],
          "version": "string",
          "versions": [
            "string"
          ]
        }
      },
      "bindingConditions": [
        "string"
      ],
      "bindingFailureConditions": [
        "string"
      ],
      "bindsToNode": true,
      "capacity": {
        "property1": {
          "requestPolicy": {
            "default": {},
            "validRange": {
              "max": {},
              "min": {},
              "step": {}
            },
            "validValues": [
              "string"
            ]
          },
          "value": {}
        },
        "property2": {
          "requestPolicy": {
            "default": {},
            "validRange": {
              "max": {},
              "min": {},
              "step": {}
            },
            "validValues": [
              "string"
            ]
          },
          "value": {}
        }
      },
      "consumesCounters": [
        {
          "compatibilityGroups": [
            "string"
          ],
          "counterSet": "",
          "counters": {
            "property1": {
              "value": {}
            },
            "property2": {
              "value": {}
            }
          }
        }
      ],
      "name": "",
      "nodeAllocatableResources": {
        "property1": {
          "mapping": {
            "capacityKey": "string",
            "capacityMultiplier": {},
            "deviceMultiplier": {}
          },
          "overhead": {
            "perContainer": {},
            "perPod": {}
          }
        },
        "property2": {
          "mapping": {
            "capacityKey": "string",
            "capacityMultiplier": {},
            "deviceMultiplier": {}
          },
          "overhead": {
            "perContainer": {},
            "perPod": {}
          }
        }
      },
      "nodeName": "string",
      "nodeSelector": {
        "nodeSelectorTerms": [
          {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchFields": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ]
          }
        ]
      },
      "taints": [
        {
          "effect": "",
          "key": "",
          "timeAdded": {},
          "value": "string"
        }
      ]
    }
  ],
  "driver": "",
  "nodeName": "string",
  "nodeSelector": {
    "nodeSelectorTerms": [
      {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchFields": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ]
      }
    ]
  },
  "partitionTypeAttribute": "string",
  "perDeviceNodeSelection": true,
  "pool": {},
  "sharedCounters": [
    {
      "counters": {
        "property1": {
          "value": {}
        },
        "property2": {
          "value": {}
        }
      },
      "name": ""
    }
  ],
  "skipNodeOperations": [
    "string"
  ]
}
```

ResourceSliceSpec contains the information published by the driver in one ResourceSlice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allNodes|boolean|false|none|allNodes indicates that all nodes have access to the resources in the pool.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|devices|[[io.k8s.api.resource.v1.Device](#schemaio.k8s.api.resource.v1.device)]|false|none|devices lists some or all of the devices in this pool.<br><br>Must not have more than 128 entries. If any device uses taints or consumes counters the limit is 64.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.|
|driver|string|true|none|driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.<br><br>Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters. This field is immutable.|
|nodeName|string|false|none|nodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.<br><br>This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.|
|nodeSelector|object|false|none|nodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.<br><br>Must use exactly one term.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|partitionTypeAttribute|string|false|none|partitionTypeAttribute names a string device attribute (by fully qualified name, e.g. "gpu.example.com/profile") whose value labels each device with its partition type, such as "Full" or "Half" for a MIG-style GPU.<br><br>When set, every partitionable device in the slice must carry the attribute and devices sharing a value must share the same ConsumesCounters cost.|
|perDeviceNodeSelection|boolean|false|none|perDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.<br><br>Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.|
|pool|object|true|none|pool describes the pool that this ResourceSlice belongs to.|
|sharedCounters|[[io.k8s.api.resource.v1.CounterSet](#schemaio.k8s.api.resource.v1.counterset)]|false|none|sharedCounters defines a list of counter sets, each of which has a name and a list of counters available.<br><br>The names of the counter sets must be unique in the ResourcePool.<br><br>Only one of Devices and SharedCounters can be set in a ResourceSlice.<br><br>The maximum number of counter sets is 8.|
|skipNodeOperations|[string]|false|none|skipNodeOperations lists node-local resource operations (gRPC calls) that will be skipped for the devices in this slice when determining whether operations are necessary on the node. If all allocated devices for a driver in a claim skip an operation, that gRPC call will be skipped. Valid values are:<br><br>- "NodePrepareResources": NodePrepareResources gRPC calls are skipped. This<br>  value cannot be specified unless "NodeUnprepareResources" is also listed<br>  (or "*" is specified).<br>- "NodeUnprepareResources": NodeUnprepareResources gRPC calls are skipped. - "*": All node-local resource operations are skipped.<br><br>Other values may be added in the future. The kubelet must ignore unknown values.|

<h2 id="tocS_io.k8s.apimachinery.pkg.api.resource.Quantity">io.k8s.apimachinery.pkg.api.resource.Quantity</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.api.resource.quantity"></a>
<a id="schema_io.k8s.apimachinery.pkg.api.resource.Quantity"></a>
<a id="tocSio.k8s.apimachinery.pkg.api.resource.quantity"></a>
<a id="tocsio.k8s.apimachinery.pkg.api.resource.quantity"></a>

```json
"string"
```

Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

The serialization format is:

- `<quantity>`: `<signedNumber><suffix>`

- `<digit>`: `0 | 1 | ... | 9`

- `<digits>`: `<digit> | <digit><digits>`

- `<number>`: `<digits> | <digits>.<digits> | <digits>. | .<digits>`

- `<sign>`: `"+" | "-"`

- `<signedNumber>`: `<number> | <sign><number>`

- `<signedDigits>`: `<digits> | <sign><digits>`

- `<suffix>`: `<binarySI> | <decimalExponent> | <decimalSI>`

- `<binarySI>`: `Ki | Mi | Gi | Ti | Pi | Ei`

- `<decimalSI>`: `n | u | m | "" | k | M | G | T | P | E`

- `<decimalExponent>`: `"e" <signedDigits> | "E" <signedDigits>`

Note that `<suffix>` may be empty, from the `""` case in `<decimalSI>`. For `<binarySI>`, 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization. See http://physics.nist.gov/cuu/Units/binary.html.

A decimal quantity is not capped at 2^63-1 in magnitude, and no quantity is limited to three decimal places: "18446744073709551616" keeps its value, and "1.2345" keeps its precision (String reports it as "1234500u"). Parsing does cap a binarySI quantity, silently, at 2^63-1: "8Ei" parses as 2^63-1. Parsing also preserves a value only down to nano, rounding a finer non-zero value away from zero, so "0.9n" becomes "1n". The int64 accessors round and may overflow on top of that: see Value, MilliValue and ScaledValue.

When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.

Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:

- No precision is lost

- No fractional digits will be emitted

- The exponent (or suffix) is as large as possible.

The sign will be omitted unless the number is negative.

Examples:

- 1.5 will be serialized as "1500m"

- 1.5Gi will be serialized as "1536Mi"

Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.

Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)

This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|number|false|none|none|

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

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.Condition">io.k8s.apimachinery.pkg.apis.meta.v1.Condition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.Condition"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.condition"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.condition"></a>

```json
{
  "lastTransitionTime": {},
  "message": "",
  "observedGeneration": 0,
  "reason": "",
  "status": "",
  "type": ""
}
```

Condition contains details for one aspect of the current state of this API Resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastTransitionTime|object|true|none|lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.|
|message|string|false|none|message is a human readable message indicating details about the transition. This may be an empty string.|
|observedGeneration|integer(int64)|false|none|observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.|
|reason|string|true|none|reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.|
|status|string|true|none|status of the condition, one of True, False, Unknown.|
|type|string|true|none|type of condition in CamelCase or in foo.example.com/CamelCase.|

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
