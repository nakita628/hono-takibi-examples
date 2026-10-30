<h1 id="kubernetes">Kubernetes vunversioned</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (BearerToken)
    - Parameter Name: **authorization**, in: header. Bearer Token authentication

<h1 id="kubernetes-admissionregistrationv1">admissionregistration_v1</h1>

## getAdmissionregistrationV1APIResources

<a id="opIdgetAdmissionregistrationV1APIResources"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/ \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/`

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

<h3 id="getadmissionregistrationv1apiresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdlistAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies`

list or watch objects of kind MutatingAdmissionPolicy

<h3 id="listadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

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

<h3 id="listadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyList](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicylist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdcreateAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies`

create a MutatingAdmissionPolicy

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the MutatingAdmissionPolicy.|
|» » failurePolicy|body|string|false|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|» » matchConditions|body|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|» » matchConstraints|body|object|false|matchConstraints specifies what resources this policy is designed to validate. The MutatingAdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API MutatingAdmissionPolicy cannot match MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT. Required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » mutations|body|[[io.k8s.api.admissionregistration.v1.Mutation](#schemaio.k8s.api.admissionregistration.v1.mutation)]|false|mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.|
|» » paramKind|body|object|false|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If paramKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in MutatingAdmissionPolicyBinding, the params variable will be null.|
|» » » apiVersion|body|string|false|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|» » » kind|body|string|false|kind is the API kind the resources belong to. Required.|
|» » reinvocationPolicy|body|string|false|reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".<br><br>Never: These mutations will not be called more than once per binding in a single admission evaluation.<br><br>IfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.|
|» » variables|body|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.|

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

<h3 id="createadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy

<a id="opIddeleteAdmissionregistrationV1CollectionMutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies`

delete collection of MutatingAdmissionPolicy

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

<h3 id="deleteadmissionregistrationv1collectionmutatingadmissionpolicy-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionmutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdreadAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}`

read the specified MutatingAdmissionPolicy

<h3 id="readadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the MutatingAdmissionPolicy|
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

<h3 id="readadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdreplaceAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}`

replace the specified MutatingAdmissionPolicy

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the MutatingAdmissionPolicy|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the MutatingAdmissionPolicy.|
|» » failurePolicy|body|string|false|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|» » matchConditions|body|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|» » matchConstraints|body|object|false|matchConstraints specifies what resources this policy is designed to validate. The MutatingAdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API MutatingAdmissionPolicy cannot match MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT. Required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » mutations|body|[[io.k8s.api.admissionregistration.v1.Mutation](#schemaio.k8s.api.admissionregistration.v1.mutation)]|false|mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.|
|» » paramKind|body|object|false|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If paramKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in MutatingAdmissionPolicyBinding, the params variable will be null.|
|» » » apiVersion|body|string|false|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|» » » kind|body|string|false|kind is the API kind the resources belong to. Required.|
|» » reinvocationPolicy|body|string|false|reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".<br><br>Never: These mutations will not be called more than once per binding in a single admission evaluation.<br><br>IfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.|
|» » variables|body|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.|

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

<h3 id="replaceadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIddeleteAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}`

delete a MutatingAdmissionPolicy

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

<h3 id="deleteadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the MutatingAdmissionPolicy|
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

<h3 id="deleteadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdpatchAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/{name}`

partially update the specified MutatingAdmissionPolicy

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the MutatingAdmissionPolicy|
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

<h3 id="patchadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdlistAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings`

list or watch objects of kind MutatingAdmissionPolicyBinding

<h3 id="listadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

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

<h3 id="listadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingList](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindinglist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdcreateAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings`

create a MutatingAdmissionPolicyBinding

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the MutatingAdmissionPolicyBinding.|
|» » matchResources|body|object|false|matchResources limits what resources match this binding and may be mutated by it. Note that if matchResources matches a resource, the resource must also match a policy's matchConstraints and matchConditions before the resource may be mutated. When matchResources is unset, it does not constrain resource matching, and only the policy's matchConstraints and matchConditions must match for the resource to be mutated. Additionally, matchResources.resourceRules are optional and do not constraint matching when unset. Note that this is differs from MutatingAdmissionPolicy matchConstraints, where resourceRules are required. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramRef|body|object|false|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in spec.ParamKind of the bound MutatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the MutatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|» » » name|body|string|false|name is the name of the resource being referenced.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.<br><br>A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.|
|» » » namespace|body|string|false|namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.<br><br>A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.<br><br>- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.<br><br>- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.|
|» » » parameterNotFoundAction|body|string|true|parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.<br><br>Allowed values are `Allow` or `Deny`<br><br>Required|
|» » » selector|body|object|false|selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.<br><br>If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » policyName|body|string|false|policyName references a MutatingAdmissionPolicy name which the MutatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|

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

<h3 id="createadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding

<a id="opIddeleteAdmissionregistrationV1CollectionMutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings`

delete collection of MutatingAdmissionPolicyBinding

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

<h3 id="deleteadmissionregistrationv1collectionmutatingadmissionpolicybinding-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionmutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdreadAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}`

read the specified MutatingAdmissionPolicyBinding

<h3 id="readadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the MutatingAdmissionPolicyBinding|
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

<h3 id="readadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdreplaceAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}`

replace the specified MutatingAdmissionPolicyBinding

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the MutatingAdmissionPolicyBinding|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the MutatingAdmissionPolicyBinding.|
|» » matchResources|body|object|false|matchResources limits what resources match this binding and may be mutated by it. Note that if matchResources matches a resource, the resource must also match a policy's matchConstraints and matchConditions before the resource may be mutated. When matchResources is unset, it does not constrain resource matching, and only the policy's matchConstraints and matchConditions must match for the resource to be mutated. Additionally, matchResources.resourceRules are optional and do not constraint matching when unset. Note that this is differs from MutatingAdmissionPolicy matchConstraints, where resourceRules are required. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramRef|body|object|false|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in spec.ParamKind of the bound MutatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the MutatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|» » » name|body|string|false|name is the name of the resource being referenced.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.<br><br>A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.|
|» » » namespace|body|string|false|namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.<br><br>A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.<br><br>- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.<br><br>- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.|
|» » » parameterNotFoundAction|body|string|true|parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.<br><br>Allowed values are `Allow` or `Deny`<br><br>Required|
|» » » selector|body|object|false|selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.<br><br>If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » policyName|body|string|false|policyName references a MutatingAdmissionPolicy name which the MutatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|

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

<h3 id="replaceadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIddeleteAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}`

delete a MutatingAdmissionPolicyBinding

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

<h3 id="deleteadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the MutatingAdmissionPolicyBinding|
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

<h3 id="deleteadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdpatchAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/{name}`

partially update the specified MutatingAdmissionPolicyBinding

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the MutatingAdmissionPolicyBinding|
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

<h3 id="patchadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdlistAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`

list or watch objects of kind MutatingWebhookConfiguration

<h3 id="listadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

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
      "webhooks": [
        {
          "admissionReviewVersions": [
            "string"
          ],
          "clientConfig": {},
          "failurePolicy": "string",
          "matchConditions": [
            {
              "expression": "",
              "name": ""
            }
          ],
          "matchPolicy": "string",
          "name": "",
          "namespaceSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "objectSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "reinvocationPolicy": "string",
          "rules": [
            {
              "apiGroups": [
                "string"
              ],
              "apiVersions": [
                "string"
              ],
              "operations": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "scope": "string"
            }
          ],
          "sideEffects": "string",
          "timeoutSeconds": 0
        }
      ]
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfigurationlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdcreateAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"webhooks":[{"admissionReviewVersions":["string"],"clientConfig":{},"failurePolicy":"string","matchConditions":[{"expression":"","name":""}],"matchPolicy":"string","name":"","namespaceSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"objectSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"reinvocationPolicy":"string","rules":[{"apiGroups":["string"],"apiVersions":["string"],"operations":["string"],"resources":["string"],"scope":"string"}],"sideEffects":"string","timeoutSeconds":0}]}'
```

`POST /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`

create a MutatingWebhookConfiguration

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="createadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» webhooks|body|[[io.k8s.api.admissionregistration.v1.MutatingWebhook](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhook)]|false|webhooks is a list of webhooks and the affected resources and operations.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="createadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration

<a id="opIddeleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`

delete collection of MutatingWebhookConfiguration

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

<h3 id="deleteadmissionregistrationv1collectionmutatingwebhookconfiguration-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionmutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdreadAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`

read the specified MutatingWebhookConfiguration

<h3 id="readadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the MutatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="readadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdreplaceAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"webhooks":[{"admissionReviewVersions":["string"],"clientConfig":{},"failurePolicy":"string","matchConditions":[{"expression":"","name":""}],"matchPolicy":"string","name":"","namespaceSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"objectSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"reinvocationPolicy":"string","rules":[{"apiGroups":["string"],"apiVersions":["string"],"operations":["string"],"resources":["string"],"scope":"string"}],"sideEffects":"string","timeoutSeconds":0}]}'
```

`PUT /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`

replace the specified MutatingWebhookConfiguration

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="replaceadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the MutatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» webhooks|body|[[io.k8s.api.admissionregistration.v1.MutatingWebhook](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhook)]|false|webhooks is a list of webhooks and the affected resources and operations.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="replaceadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIddeleteAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`

delete a MutatingWebhookConfiguration

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

<h3 id="deleteadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the MutatingWebhookConfiguration|
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

<h3 id="deleteadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdpatchAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`

partially update the specified MutatingWebhookConfiguration

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the MutatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="patchadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdlistAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`

list or watch objects of kind ValidatingAdmissionPolicy

<h3 id="listadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

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

<h3 id="listadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyList](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicylist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdcreateAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`

create a ValidatingAdmissionPolicy

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

<h3 id="createadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the ValidatingAdmissionPolicy.|
|» » auditAnnotations|body|[[io.k8s.api.admissionregistration.v1.AuditAnnotation](#schemaio.k8s.api.admissionregistration.v1.auditannotation)]|false|auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.|
|» » failurePolicy|body|string|false|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|» » matchConditions|body|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|» » matchConstraints|body|object|false|matchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramKind|body|object|false|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.|
|» » » apiVersion|body|string|false|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|» » » kind|body|string|false|kind is the API kind the resources belong to. Required.|
|» » validations|body|[[io.k8s.api.admissionregistration.v1.Validation](#schemaio.k8s.api.admissionregistration.v1.validation)]|false|validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.|
|» » variables|body|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.|
|» status|body|object|false|status represents the current status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions represent the latest available observations of a policy's current state.|
|» » observedGeneration|body|integer(int64)|false|observedGeneration is the generation observed by the controller.|
|» » typeChecking|body|object|false|typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.|
|» » » expressionWarnings|body|[[io.k8s.api.admissionregistration.v1.ExpressionWarning](#schemaio.k8s.api.admissionregistration.v1.expressionwarning)]|false|expressionWarnings contains the type checking warnings for each expression.|

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

<h3 id="createadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy

<a id="opIddeleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`

delete collection of ValidatingAdmissionPolicy

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingadmissionpolicy-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdreadAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`

read the specified ValidatingAdmissionPolicy

<h3 id="readadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="readadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdreplaceAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`

replace the specified ValidatingAdmissionPolicy

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

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the ValidatingAdmissionPolicy.|
|» » auditAnnotations|body|[[io.k8s.api.admissionregistration.v1.AuditAnnotation](#schemaio.k8s.api.admissionregistration.v1.auditannotation)]|false|auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.|
|» » failurePolicy|body|string|false|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|» » matchConditions|body|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|» » matchConstraints|body|object|false|matchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramKind|body|object|false|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.|
|» » » apiVersion|body|string|false|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|» » » kind|body|string|false|kind is the API kind the resources belong to. Required.|
|» » validations|body|[[io.k8s.api.admissionregistration.v1.Validation](#schemaio.k8s.api.admissionregistration.v1.validation)]|false|validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.|
|» » variables|body|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.|
|» status|body|object|false|status represents the current status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions represent the latest available observations of a policy's current state.|
|» » observedGeneration|body|integer(int64)|false|observedGeneration is the generation observed by the controller.|
|» » typeChecking|body|object|false|typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.|
|» » » expressionWarnings|body|[[io.k8s.api.admissionregistration.v1.ExpressionWarning](#schemaio.k8s.api.admissionregistration.v1.expressionwarning)]|false|expressionWarnings contains the type checking warnings for each expression.|

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

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIddeleteAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`

delete a ValidatingAdmissionPolicy

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

<h3 id="deleteadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="deleteadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdpatchAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`

partially update the specified ValidatingAdmissionPolicy

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="patchadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1ValidatingAdmissionPolicyStatus

<a id="opIdreadAdmissionregistrationV1ValidatingAdmissionPolicyStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string/status \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`

read status of the specified ValidatingAdmissionPolicy

<h3 id="readadmissionregistrationv1validatingadmissionpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="readadmissionregistrationv1validatingadmissionpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus

<a id="opIdreplaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string/status \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`

replace status of the specified ValidatingAdmissionPolicy

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

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|false|spec defines the desired behavior of the ValidatingAdmissionPolicy.|
|» » auditAnnotations|body|[[io.k8s.api.admissionregistration.v1.AuditAnnotation](#schemaio.k8s.api.admissionregistration.v1.auditannotation)]|false|auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.|
|» » failurePolicy|body|string|false|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|» » matchConditions|body|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|» » matchConstraints|body|object|false|matchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramKind|body|object|false|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.|
|» » » apiVersion|body|string|false|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|» » » kind|body|string|false|kind is the API kind the resources belong to. Required.|
|» » validations|body|[[io.k8s.api.admissionregistration.v1.Validation](#schemaio.k8s.api.admissionregistration.v1.validation)]|false|validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.|
|» » variables|body|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.|
|» status|body|object|false|status represents the current status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.|
|» » conditions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|conditions represent the latest available observations of a policy's current state.|
|» » observedGeneration|body|integer(int64)|false|observedGeneration is the generation observed by the controller.|
|» » typeChecking|body|object|false|typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.|
|» » » expressionWarnings|body|[[io.k8s.api.admissionregistration.v1.ExpressionWarning](#schemaio.k8s.api.admissionregistration.v1.expressionwarning)]|false|expressionWarnings contains the type checking warnings for each expression.|

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

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus

<a id="opIdpatchAdmissionregistrationV1ValidatingAdmissionPolicyStatus"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/string/status \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`

partially update status of the specified ValidatingAdmissionPolicy

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1validatingadmissionpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="patchadmissionregistrationv1validatingadmissionpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdlistAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`

list or watch objects of kind ValidatingAdmissionPolicyBinding

<h3 id="listadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

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

<h3 id="listadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingList](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindinglist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdcreateAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`

create a ValidatingAdmissionPolicyBinding

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="createadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|true|spec defines the desired behavior of the ValidatingAdmissionPolicyBinding.|
|» » matchResources|body|object|false|matchResources declares what resources match this binding and will be validated by it. Note that this is intersected with the policy's matchConstraints, so only requests that are matched by the policy can be selected by this. If this is unset, all resources matched by the policy are validated by this binding When resourceRules is unset, it does not constrain resource matching. If a resource is matched by the other fields of this object, it will be validated. Note that this is differs from ValidatingAdmissionPolicy matchConstraints, where resourceRules are required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramRef|body|object|false|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in ParamKind of the bound ValidatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the ValidatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|» » » name|body|string|false|name is the name of the resource being referenced.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.<br><br>A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.|
|» » » namespace|body|string|false|namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.<br><br>A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.<br><br>- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.<br><br>- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.|
|» » » parameterNotFoundAction|body|string|true|parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.<br><br>Allowed values are `Allow` or `Deny`<br><br>Required|
|» » » selector|body|object|false|selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.<br><br>If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » policyName|body|string|true|policyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|
|» » validationActions|body|[string]|true|validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.<br><br>Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.<br><br>validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.<br><br>The supported actions values are:<br><br>"Deny" specifies that a validation failure results in a denied request.<br><br>"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.<br><br>"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]"`<br><br>Clients should expect to handle additional values by ignoring any values not recognized.<br><br>"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.<br><br>Required.|

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

<h3 id="createadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding

<a id="opIddeleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`

delete collection of ValidatingAdmissionPolicyBinding

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingadmissionpolicybinding-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdreadAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`

read the specified ValidatingAdmissionPolicyBinding

<h3 id="readadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ValidatingAdmissionPolicyBinding|
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

<h3 id="readadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdreplaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{}}'
```

`PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`

replace the specified ValidatingAdmissionPolicyBinding

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ValidatingAdmissionPolicyBinding|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» spec|body|object|true|spec defines the desired behavior of the ValidatingAdmissionPolicyBinding.|
|» » matchResources|body|object|false|matchResources declares what resources match this binding and will be validated by it. Note that this is intersected with the policy's matchConstraints, so only requests that are matched by the policy can be selected by this. If this is unset, all resources matched by the policy are validated by this binding When resourceRules is unset, it does not constrain resource matching. If a resource is matched by the other fields of this object, it will be validated. Note that this is differs from ValidatingAdmissionPolicy matchConstraints, where resourceRules are required.|
|» » » excludeResourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|» » » matchPolicy|body|string|false|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|» » » namespaceSelector|body|object|false|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » objectSelector|body|object|false|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » » resourceRules|body|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|
|» » paramRef|body|object|false|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in ParamKind of the bound ValidatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the ValidatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|» » » name|body|string|false|name is the name of the resource being referenced.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.<br><br>A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.|
|» » » namespace|body|string|false|namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.<br><br>A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.<br><br>- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.<br><br>- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.|
|» » » parameterNotFoundAction|body|string|true|parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.<br><br>Allowed values are `Allow` or `Deny`<br><br>Required|
|» » » selector|body|object|false|selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.<br><br>If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.|
|» » » » matchExpressions|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|» » » » matchLabels|body|object|false|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|
|» » » » » **additionalProperties**|body|string|false|none|
|» » policyName|body|string|true|policyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|
|» » validationActions|body|[string]|true|validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.<br><br>Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.<br><br>validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.<br><br>The supported actions values are:<br><br>"Deny" specifies that a validation failure results in a denied request.<br><br>"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.<br><br>"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]"`<br><br>Clients should expect to handle additional values by ignoring any values not recognized.<br><br>"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.<br><br>Required.|

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

<h3 id="replaceadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIddeleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`

delete a ValidatingAdmissionPolicyBinding

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

<h3 id="deleteadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ValidatingAdmissionPolicyBinding|
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

<h3 id="deleteadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdpatchAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`

partially update the specified ValidatingAdmissionPolicyBinding

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ValidatingAdmissionPolicyBinding|
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

<h3 id="patchadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## listAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdlistAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`

list or watch objects of kind ValidatingWebhookConfiguration

<h3 id="listadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

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
      "webhooks": [
        {
          "admissionReviewVersions": [
            "string"
          ],
          "clientConfig": {},
          "failurePolicy": "string",
          "matchConditions": [
            {
              "expression": "",
              "name": ""
            }
          ],
          "matchPolicy": "string",
          "name": "",
          "namespaceSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "objectSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "rules": [
            {
              "apiGroups": [
                "string"
              ],
              "apiVersions": [
                "string"
              ],
              "operations": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "scope": "string"
            }
          ],
          "sideEffects": "string",
          "timeoutSeconds": 0
        }
      ]
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

<h3 id="listadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfigurationlist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdcreateAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"webhooks":[{"admissionReviewVersions":["string"],"clientConfig":{},"failurePolicy":"string","matchConditions":[{"expression":"","name":""}],"matchPolicy":"string","name":"","namespaceSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"objectSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"rules":[{"apiGroups":["string"],"apiVersions":["string"],"operations":["string"],"resources":["string"],"scope":"string"}],"sideEffects":"string","timeoutSeconds":0}]}'
```

`POST /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`

create a ValidatingWebhookConfiguration

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="createadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» webhooks|body|[[io.k8s.api.admissionregistration.v1.ValidatingWebhook](#schemaio.k8s.api.admissionregistration.v1.validatingwebhook)]|false|webhooks is a list of webhooks and the affected resources and operations.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 202 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="createadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|202|Accepted|Accepted|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration

<a id="opIddeleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`

delete collection of ValidatingWebhookConfiguration

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingwebhookconfiguration-parameters">Parameters</h3>

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

<h3 id="deleteadmissionregistrationv1collectionvalidatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## readAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdreadAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`

read the specified ValidatingWebhookConfiguration

<h3 id="readadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the ValidatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="readadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## replaceAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdreplaceAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"webhooks":[{"admissionReviewVersions":["string"],"clientConfig":{},"failurePolicy":"string","matchConditions":[{"expression":"","name":""}],"matchPolicy":"string","name":"","namespaceSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"objectSelector":{"matchExpressions":[{"key":"","operator":"","values":["string"]}],"matchLabels":{"property1":"string","property2":"string"}},"rules":[{"apiGroups":["string"],"apiVersions":["string"],"operations":["string"],"resources":["string"],"scope":"string"}],"sideEffects":"string","timeoutSeconds":0}]}'
```

`PUT /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`

replace the specified ValidatingWebhookConfiguration

> Body parameter

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="replaceadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|name|path|string|true|name of the ValidatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
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
|» webhooks|body|[[io.k8s.api.admissionregistration.v1.ValidatingWebhook](#schemaio.k8s.api.admissionregistration.v1.validatingwebhook)]|false|webhooks is a list of webhooks and the affected resources and operations.|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="replaceadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIddeleteAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","dryRun":["string"],"gracePeriodSeconds":0,"ignoreStoreReadErrorWithClusterBreakingPotential":true,"kind":"string","orphanDependents":true,"preconditions":{"resourceVersion":"string","uid":"string"},"propagationPolicy":"string"}'
```

`DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`

delete a ValidatingWebhookConfiguration

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

<h3 id="deleteadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|gracePeriodSeconds|query|integer|false|The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.|
|ignoreStoreReadErrorWithClusterBreakingPotential|query|boolean|false|if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it|
|orphanDependents|query|boolean|false|Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.|
|propagationPolicy|query|string|false|Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.|
|name|path|string|true|name of the ValidatingWebhookConfiguration|
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

<h3 id="deleteadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|202|Accepted|Accepted|[io.k8s.apimachinery.pkg.apis.meta.v1.Status](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.status)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## patchAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdpatchAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/string \
  -X PATCH \
  -H 'Content-Type: application/json-patch+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PATCH /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`

partially update the specified ValidatingWebhookConfiguration

> Body parameter

```json
{}
```

<h3 id="patchadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|force|query|boolean|false|Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.|
|name|path|string|true|name of the ValidatingWebhookConfiguration|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.apimachinery.pkg.apis.meta.v1.Patch](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.patch)|true|none|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

> 201 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

<h3 id="patchadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|201|Created|Created|[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingAdmissionPolicyList

<a id="opIdwatchAdmissionregistrationV1MutatingAdmissionPolicyList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies`

watch individual changes to a list of MutatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicylist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingAdmissionPolicy

<a id="opIdwatchAdmissionregistrationV1MutatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies/{name}`

watch changes to an object of kind MutatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the MutatingAdmissionPolicy|
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

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingAdmissionPolicyBindingList

<a id="opIdwatchAdmissionregistrationV1MutatingAdmissionPolicyBindingList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings`

watch individual changes to a list of MutatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicybindinglist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicybindinglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingAdmissionPolicyBinding

<a id="opIdwatchAdmissionregistrationV1MutatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings/{name}`

watch changes to an object of kind MutatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the MutatingAdmissionPolicyBinding|
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

<h3 id="watchadmissionregistrationv1mutatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingWebhookConfigurationList

<a id="opIdwatchAdmissionregistrationV1MutatingWebhookConfigurationList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations`

watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1mutatingwebhookconfigurationlist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1mutatingwebhookconfigurationlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1MutatingWebhookConfiguration

<a id="opIdwatchAdmissionregistrationV1MutatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}`

watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1mutatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the MutatingWebhookConfiguration|
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

<h3 id="watchadmissionregistrationv1mutatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingAdmissionPolicyList

<a id="opIdwatchAdmissionregistrationV1ValidatingAdmissionPolicyList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies`

watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1validatingadmissionpolicylist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1validatingadmissionpolicylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingAdmissionPolicy

<a id="opIdwatchAdmissionregistrationV1ValidatingAdmissionPolicy"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/{name}`

watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1validatingadmissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ValidatingAdmissionPolicy|
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

<h3 id="watchadmissionregistrationv1validatingadmissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList

<a id="opIdwatchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings`

watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1validatingadmissionpolicybindinglist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1validatingadmissionpolicybindinglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding

<a id="opIdwatchAdmissionregistrationV1ValidatingAdmissionPolicyBinding"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/{name}`

watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1validatingadmissionpolicybinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ValidatingAdmissionPolicyBinding|
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

<h3 id="watchadmissionregistrationv1validatingadmissionpolicybinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingWebhookConfigurationList

<a id="opIdwatchAdmissionregistrationV1ValidatingWebhookConfigurationList"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations`

watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.

<h3 id="watchadmissionregistrationv1validatingwebhookconfigurationlist-parameters">Parameters</h3>

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

<h3 id="watchadmissionregistrationv1validatingwebhookconfigurationlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## watchAdmissionregistrationV1ValidatingWebhookConfiguration

<a id="opIdwatchAdmissionregistrationV1ValidatingWebhookConfiguration"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/string \
  -H 'Accept: application/json'
```

`GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}`

watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.

<h3 id="watchadmissionregistrationv1validatingwebhookconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowWatchBookmarks|query|boolean|false|allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.|
|continue|query|string|false|The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".<br><br>This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.|
|fieldSelector|query|string|false|A selector to restrict the list of returned objects by their fields. Defaults to everything.|
|labelSelector|query|string|false|A selector to restrict the list of returned objects by their labels. Defaults to everything.|
|limit|query|integer|false|limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.<br><br>The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.|
|name|path|string|true|name of the ValidatingWebhookConfiguration|
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

<h3 id="watchadmissionregistrationv1validatingwebhookconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.watchevent)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ApplyConfiguration">io.k8s.api.admissionregistration.v1.ApplyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.applyconfiguration"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ApplyConfiguration"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.applyconfiguration"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.applyconfiguration"></a>

```json
{
  "expression": "string"
}
```

ApplyConfiguration defines the desired configuration values of an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|false|none|expression will be evaluated by CEL to create an apply configuration. ref: https://github.com/google/cel-spec<br><br>Apply configurations are declared in CEL using object initialization. For example, this CEL expression returns an apply configuration to set a single field:<br><br>	Object{<br>	  spec: Object.spec{<br>	    serviceAccountName: "example"<br>	  }<br>	}<br><br>Apply configurations may not modify atomic structs, maps or arrays due to the risk of accidental deletion of values not included in the apply configuration.<br><br>CEL expressions have access to the object types needed to create apply configurations:<br><br>- 'Object' - CEL type of the resource object. - 'Object.<fieldName>' - CEL type of object field (such as 'Object.spec') - 'Object.<fieldName1>.<fieldName2>...<fieldNameN>` - CEL type of nested field (such as 'Object.spec.containers')<br><br>CEL expressions have access to the contents of the API request, organized into CEL variables as well as some other useful variables:<br><br>- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.<br>  For example, a variable named 'foo' can be accessed as 'variables.foo'.<br>- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.<br>  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz<br>- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the<br>  request resource.<br><br>The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object. No other metadata properties are accessible.<br><br>Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.AuditAnnotation">io.k8s.api.admissionregistration.v1.AuditAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.auditannotation"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.AuditAnnotation"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.auditannotation"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.auditannotation"></a>

```json
{
  "key": "",
  "valueExpression": ""
}
```

AuditAnnotation describes how to produce an audit annotation for an API request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|key specifies the audit annotation key. The audit annotation keys of a ValidatingAdmissionPolicy must be unique. The key must be a qualified name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.<br><br>The key is combined with the resource name of the ValidatingAdmissionPolicy to construct an audit annotation key: "{ValidatingAdmissionPolicy name}/{key}".<br><br>If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy and the same audit annotation key, the annotation key will be identical. In this case, the first annotation written with the key will be included in the audit event and all subsequent annotations with the same key will be discarded.<br><br>Required.|
|valueExpression|string|true|none|valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. The expression must evaluate to either a string or null value. If the expression evaluates to a string, the audit annotation is included with the string value. If the expression evaluates to null or empty string the audit annotation will be omitted. The valueExpression may be no longer than 5kb in length. If the result of the valueExpression is more than 10kb in length, it will be truncated to 10kb.<br><br>If multiple ValidatingAdmissionPolicyBinding resources match an API request, then the valueExpression will be evaluated for each binding. All unique values produced by the valueExpressions will be joined together in a comma-separated list.<br><br>Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ExpressionWarning">io.k8s.api.admissionregistration.v1.ExpressionWarning</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.expressionwarning"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ExpressionWarning"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.expressionwarning"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.expressionwarning"></a>

```json
{
  "fieldRef": "",
  "warning": ""
}
```

ExpressionWarning is a warning information that targets a specific expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldRef|string|true|none|fieldRef is the path to the field that refers to the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"|
|warning|string|true|none|warning contains the content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.JSONPatch">io.k8s.api.admissionregistration.v1.JSONPatch</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.jsonpatch"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.JSONPatch"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.jsonpatch"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.jsonpatch"></a>

```json
{
  "expression": "string"
}
```

JSONPatch defines a JSON Patch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|false|none|expression will be evaluated by CEL to create a [JSON patch](https://jsonpatch.com/). ref: https://github.com/google/cel-spec<br><br>expression must return an array of JSONPatch values.<br><br>For example, this CEL expression returns a JSON patch to conditionally modify a value:<br><br>	  [<br>	    JSONPatch{op: "test", path: "/spec/example", value: "Red"},<br>	    JSONPatch{op: "replace", path: "/spec/example", value: "Green"}<br>	  ]<br><br>To define an object for the patch value, use Object types. For example:<br><br>	  [<br>	    JSONPatch{<br>	      op: "add",<br>	      path: "/spec/selector",<br>	      value: Object.spec.selector{matchLabels: {"environment": "test"}}<br>	    }<br>	  ]<br><br>To use strings containing '/' and '~' as JSONPatch path keys, use "jsonpatch.escapeKey". For example:<br><br>	  [<br>	    JSONPatch{<br>	      op: "add",<br>	      path: "/metadata/labels/" + jsonpatch.escapeKey("example.com/environment"),<br>	      value: "test"<br>	    },<br>	  ]<br><br>CEL expressions have access to the types needed to create JSON patches and objects:<br><br>- 'JSONPatch' - CEL type of JSON Patch operations. JSONPatch has the fields 'op', 'from', 'path' and 'value'.<br>  See [JSON patch](https://jsonpatch.com/) for more details. The 'value' field may be set to any of: string,<br>  integer, array, map or object.  If set, the 'path' and 'from' fields must be set to a<br>  [JSON pointer](https://datatracker.ietf.org/doc/html/rfc6901/) string, where the 'jsonpatch.escapeKey()' CEL<br>  function may be used to escape path keys containing '/' and '~'.<br>- 'Object' - CEL type of the resource object. - 'Object.<fieldName>' - CEL type of object field (such as 'Object.spec') - 'Object.<fieldName1>.<fieldName2>...<fieldNameN>` - CEL type of nested field (such as 'Object.spec.containers')<br><br>CEL expressions have access to the contents of the API request, organized into CEL variables as well as some other useful variables:<br><br>- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.<br>  For example, a variable named 'foo' can be accessed as 'variables.foo'.<br>- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.<br>  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz<br>- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the<br>  request resource.<br><br>CEL expressions have access to [Kubernetes CEL function libraries](https://kubernetes.io/docs/reference/using-api/cel/#cel-options-language-features-and-libraries) as well as:<br><br>- 'jsonpatch.escapeKey' - Performs JSONPatch key escaping. '~' and  '/' are escaped as '~0' and `~1' respectively).<br><br>Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MatchCondition">io.k8s.api.admissionregistration.v1.MatchCondition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.matchcondition"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MatchCondition"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.matchcondition"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.matchcondition"></a>

```json
{
  "expression": "",
  "name": ""
}
```

MatchCondition represents a condition which must by fulfilled for a request to be sent to a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:<br><br>'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.<br>  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz<br>'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the<br>  request resource.<br>Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/<br><br>Required.|
|name|string|true|none|name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')<br><br>Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MatchResources">io.k8s.api.admissionregistration.v1.MatchResources</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.matchresources"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MatchResources"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.matchresources"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.matchresources"></a>

```json
{
  "excludeResourceRules": [
    {
      "apiGroups": [
        "string"
      ],
      "apiVersions": [
        "string"
      ],
      "operations": [
        "string"
      ],
      "resourceNames": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "scope": "string"
    }
  ],
  "matchPolicy": "string",
  "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "objectSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "resourceRules": [
    {
      "apiGroups": [
        "string"
      ],
      "apiVersions": [
        "string"
      ],
      "operations": [
        "string"
      ],
      "resourceNames": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "scope": "string"
    }
  ]
}
```

MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludeResourceRules|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|none|excludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)|
|matchPolicy|string|false|none|matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.<br><br>Defaults to "Equivalent"|
|namespaceSelector|object|false|none|namespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|objectSelector|object|false|none|objectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|resourceRules|[[io.k8s.api.admissionregistration.v1.NamedRuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations)]|false|none|resourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|spec|object|false|none|spec defines the desired behavior of the MutatingAdmissionPolicy.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

MutatingAdmissionPolicyBinding binds the MutatingAdmissionPolicy with parametrized resources. MutatingAdmissionPolicyBinding and the optional parameter resource together define how cluster administrators configure policies for clusters.

For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding. Each evaluation is constrained by a [runtime cost budget](https://kubernetes.io/docs/reference/using-api/cel/#runtime-cost-budget).

Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|spec|object|false|none|spec defines the desired behavior of the MutatingAdmissionPolicyBinding.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingList">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindinglist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindinglist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindinglist"></a>

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

MutatingAdmissionPolicyBindingList is a list of MutatingAdmissionPolicyBinding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybinding)]|true|none|List of PolicyBinding.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingSpec">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindingspec"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyBindingSpec"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindingspec"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicybindingspec"></a>

```json
{
  "matchResources": {
    "excludeResourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ],
    "matchPolicy": "string",
    "namespaceSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "objectSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ]
  },
  "paramRef": {
    "name": "string",
    "namespace": "string",
    "parameterNotFoundAction": "string",
    "selector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "policyName": "string"
}
```

MutatingAdmissionPolicyBindingSpec defines the specification of the MutatingAdmissionPolicyBinding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchResources|object|false|none|matchResources limits what resources match this binding and may be mutated by it. Note that if matchResources matches a resource, the resource must also match a policy's matchConstraints and matchConditions before the resource may be mutated. When matchResources is unset, it does not constrain resource matching, and only the policy's matchConstraints and matchConditions must match for the resource to be mutated. Additionally, matchResources.resourceRules are optional and do not constraint matching when unset. Note that this is differs from MutatingAdmissionPolicy matchConstraints, where resourceRules are required. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT.|
|paramRef|object|false|none|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in spec.ParamKind of the bound MutatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the MutatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|policyName|string|false|none|policyName references a MutatingAdmissionPolicy name which the MutatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyList">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicylist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicyList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicylist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicylist"></a>

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

MutatingAdmissionPolicyList is a list of MutatingAdmissionPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicy)]|true|none|List of ValidatingAdmissionPolicy.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicySpec">io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicySpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingadmissionpolicyspec"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingAdmissionPolicySpec"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingadmissionpolicyspec"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingadmissionpolicyspec"></a>

```json
{
  "failurePolicy": "string",
  "matchConditions": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "matchConstraints": {
    "excludeResourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ],
    "matchPolicy": "string",
    "namespaceSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "objectSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ]
  },
  "mutations": [
    {
      "applyConfiguration": {
        "expression": "string"
      },
      "jsonPatch": {
        "expression": "string"
      },
      "patchType": ""
    }
  ],
  "paramKind": {
    "apiVersion": "string",
    "kind": "string"
  },
  "reinvocationPolicy": "string",
  "variables": [
    {
      "expression": "",
      "name": ""
    }
  ]
}
```

MutatingAdmissionPolicySpec defines the desired behavior of the admission policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failurePolicy|string|false|none|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|matchConditions|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|none|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|matchConstraints|object|false|none|matchConstraints specifies what resources this policy is designed to validate. The MutatingAdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API MutatingAdmissionPolicy cannot match MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. '*' matches CREATE, UPDATE and CONNECT. Required.|
|mutations|[[io.k8s.api.admissionregistration.v1.Mutation](#schemaio.k8s.api.admissionregistration.v1.mutation)]|false|none|mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.|
|paramKind|object|false|none|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If paramKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in MutatingAdmissionPolicyBinding, the params variable will be null.|
|reinvocationPolicy|string|false|none|reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".<br><br>Never: These mutations will not be called more than once per binding in a single admission evaluation.<br><br>IfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.|
|variables|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|none|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingWebhook">io.k8s.api.admissionregistration.v1.MutatingWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingwebhook"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingWebhook"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingwebhook"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingwebhook"></a>

```json
{
  "admissionReviewVersions": [
    "string"
  ],
  "clientConfig": {},
  "failurePolicy": "string",
  "matchConditions": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "matchPolicy": "string",
  "name": "",
  "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "objectSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "reinvocationPolicy": "string",
  "rules": [
    {
      "apiGroups": [
        "string"
      ],
      "apiVersions": [
        "string"
      ],
      "operations": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "scope": "string"
    }
  ],
  "sideEffects": "string",
  "timeoutSeconds": 0
}
```

MutatingWebhook describes an admission webhook and the resources and operations it applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admissionReviewVersions|[string]|true|none|admissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.|
|clientConfig|object|true|none|clientConfig defines how to communicate with the hook. Required|
|failurePolicy|string|false|none|failurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.|
|matchConditions|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|none|matchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the webhook is called.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped|
|matchPolicy|string|false|none|matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.<br><br>Defaults to "Equivalent"|
|name|string|true|none|name is the name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.|
|namespaceSelector|object|false|none|namespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|objectSelector|object|false|none|objectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|reinvocationPolicy|string|false|none|reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".<br><br>Never: the webhook will not be called more than once in a single admission evaluation.<br><br>IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.<br><br>Defaults to "Never".|
|rules|[[io.k8s.api.admissionregistration.v1.RuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.rulewithoperations)]|false|none|rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.|
|sideEffects|string|true|none|sideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.|
|timeoutSeconds|integer(int32)|false|none|timeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration">io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "reinvocationPolicy": "string",
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|webhooks|[[io.k8s.api.admissionregistration.v1.MutatingWebhook](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhook)]|false|none|webhooks is a list of webhooks and the affected resources and operations.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList">io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfigurationlist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutatingwebhookconfigurationlist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutatingwebhookconfigurationlist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "webhooks": [
        {
          "admissionReviewVersions": [
            "string"
          ],
          "clientConfig": {},
          "failurePolicy": "string",
          "matchConditions": [
            {
              "expression": "",
              "name": ""
            }
          ],
          "matchPolicy": "string",
          "name": "",
          "namespaceSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "objectSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "reinvocationPolicy": "string",
          "rules": [
            {
              "apiGroups": [
                "string"
              ],
              "apiVersions": [
                "string"
              ],
              "operations": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "scope": "string"
            }
          ],
          "sideEffects": "string",
          "timeoutSeconds": 0
        }
      ]
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.mutatingwebhookconfiguration)]|true|none|List of MutatingWebhookConfiguration.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.Mutation">io.k8s.api.admissionregistration.v1.Mutation</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.mutation"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.Mutation"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.mutation"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.mutation"></a>

```json
{
  "applyConfiguration": {
    "expression": "string"
  },
  "jsonPatch": {
    "expression": "string"
  },
  "patchType": ""
}
```

Mutation specifies the CEL expression which is used to apply the Mutation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyConfiguration|object|false|none|applyConfiguration defines the desired configuration values of an object. The configuration is applied to the admission object using [structured merge diff](https://github.com/kubernetes-sigs/structured-merge-diff). A CEL expression is used to create apply configuration.|
|jsonPatch|object|false|none|jsonPatch defines a [JSON patch](https://jsonpatch.com/) operation to perform a mutation to the object. A CEL expression is used to create the JSON patch.|
|patchType|string|true|none|patchType indicates the patch strategy used. Allowed values are "ApplyConfiguration" and "JSONPatch". Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.NamedRuleWithOperations">io.k8s.api.admissionregistration.v1.NamedRuleWithOperations</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.namedrulewithoperations"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.NamedRuleWithOperations"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.namedrulewithoperations"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.namedrulewithoperations"></a>

```json
{
  "apiGroups": [
    "string"
  ],
  "apiVersions": [
    "string"
  ],
  "operations": [
    "string"
  ],
  "resourceNames": [
    "string"
  ],
  "resources": [
    "string"
  ],
  "scope": "string"
}
```

NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiGroups|[string]|false|none|apiGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.|
|apiVersions|[string]|false|none|apiVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.|
|operations|[string]|false|none|operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.|
|resourceNames|[string]|false|none|resourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.|
|resources|[string]|false|none|resources is a list of resources this rule applies to.<br><br>For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.<br><br>If wildcard is present, the validation rule will ensure resources do not overlap with each other.<br><br>Depending on the enclosing object, subresources might not be allowed. Required.|
|scope|string|false|none|scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ParamKind">io.k8s.api.admissionregistration.v1.ParamKind</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.paramkind"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ParamKind"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.paramkind"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.paramkind"></a>

```json
{
  "apiVersion": "string",
  "kind": "string"
}
```

ParamKind is a tuple of Group Kind and Version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|apiVersion is the API group version the resources belong to. In format of "group/version". Required.|
|kind|string|false|none|kind is the API kind the resources belong to. Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ParamRef">io.k8s.api.admissionregistration.v1.ParamRef</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.paramref"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ParamRef"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.paramref"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.paramref"></a>

```json
{
  "name": "string",
  "namespace": "string",
  "parameterNotFoundAction": "string",
  "selector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|name is the name of the resource being referenced.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.<br><br>A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.|
|namespace|string|false|none|namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.<br><br>A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.<br><br>- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.<br><br>- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.|
|parameterNotFoundAction|string|true|none|parameterNotFoundAction controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.<br><br>Allowed values are `Allow` or `Deny`<br><br>Required|
|selector|object|false|none|selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.<br><br>If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.<br><br>One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.RuleWithOperations">io.k8s.api.admissionregistration.v1.RuleWithOperations</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.rulewithoperations"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.RuleWithOperations"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.rulewithoperations"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.rulewithoperations"></a>

```json
{
  "apiGroups": [
    "string"
  ],
  "apiVersions": [
    "string"
  ],
  "operations": [
    "string"
  ],
  "resources": [
    "string"
  ],
  "scope": "string"
}
```

RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiGroups|[string]|false|none|apiGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.|
|apiVersions|[string]|false|none|apiVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.|
|operations|[string]|false|none|operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.|
|resources|[string]|false|none|resources is a list of resources this rule applies to.<br><br>For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.<br><br>If wildcard is present, the validation rule will ensure resources do not overlap with each other.<br><br>Depending on the enclosing object, subresources might not be allowed. Required.|
|scope|string|false|none|scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ServiceReference">io.k8s.api.admissionregistration.v1.ServiceReference</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.servicereference"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ServiceReference"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.servicereference"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.servicereference"></a>

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
|path|string|false|none|path is an optional URL path which will be sent in any request to this service.|
|port|integer(int32)|false|none|port is the port on the service that hosts the webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.TypeChecking">io.k8s.api.admissionregistration.v1.TypeChecking</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.typechecking"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.TypeChecking"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.typechecking"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.typechecking"></a>

```json
{
  "expressionWarnings": [
    {
      "fieldRef": "",
      "warning": ""
    }
  ]
}
```

TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expressionWarnings|[[io.k8s.api.admissionregistration.v1.ExpressionWarning](#schemaio.k8s.api.admissionregistration.v1.expressionwarning)]|false|none|expressionWarnings contains the type checking warnings for each expression.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicy"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicy"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|spec|object|false|none|spec defines the desired behavior of the ValidatingAdmissionPolicy.|
|status|object|false|none|status represents the current status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {}
}
```

ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.

For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.

The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|spec|object|true|none|spec defines the desired behavior of the ValidatingAdmissionPolicyBinding.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingList">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindinglist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindinglist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindinglist"></a>

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

ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybinding)]|true|none|List of PolicyBinding.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingSpec">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindingspec"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingSpec"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindingspec"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicybindingspec"></a>

```json
{
  "matchResources": {
    "excludeResourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ],
    "matchPolicy": "string",
    "namespaceSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "objectSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ]
  },
  "paramRef": {
    "name": "string",
    "namespace": "string",
    "parameterNotFoundAction": "string",
    "selector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "policyName": "string",
  "validationActions": [
    "string"
  ]
}
```

ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchResources|object|false|none|matchResources declares what resources match this binding and will be validated by it. Note that this is intersected with the policy's matchConstraints, so only requests that are matched by the policy can be selected by this. If this is unset, all resources matched by the policy are validated by this binding When resourceRules is unset, it does not constrain resource matching. If a resource is matched by the other fields of this object, it will be validated. Note that this is differs from ValidatingAdmissionPolicy matchConstraints, where resourceRules are required.|
|paramRef|object|false|none|paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in ParamKind of the bound ValidatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the ValidatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.|
|policyName|string|true|none|policyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.|
|validationActions|[string]|true|none|validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.<br><br>Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.<br><br>validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.<br><br>The supported actions values are:<br><br>"Deny" specifies that a validation failure results in a denied request.<br><br>"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.<br><br>"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]"`<br><br>Clients should expect to handle additional values by ignoring any values not recognized.<br><br>"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.<br><br>Required.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyList">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicylist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicylist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicylist"></a>

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

ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicy](#schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicy)]|true|none|List of ValidatingAdmissionPolicy.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicySpec">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicySpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicyspec"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicySpec"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicyspec"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicyspec"></a>

```json
{
  "auditAnnotations": [
    {
      "key": "",
      "valueExpression": ""
    }
  ],
  "failurePolicy": "string",
  "matchConditions": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "matchConstraints": {
    "excludeResourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ],
    "matchPolicy": "string",
    "namespaceSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "objectSelector": {
      "matchExpressions": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ],
      "matchLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceRules": [
      {
        "apiGroups": [
          "string"
        ],
        "apiVersions": [
          "string"
        ],
        "operations": [
          "string"
        ],
        "resourceNames": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "scope": "string"
      }
    ]
  },
  "paramKind": {
    "apiVersion": "string",
    "kind": "string"
  },
  "validations": [
    {
      "expression": "",
      "message": "string",
      "messageExpression": "string",
      "reason": "string"
    }
  ],
  "variables": [
    {
      "expression": "",
      "name": ""
    }
  ]
}
```

ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditAnnotations|[[io.k8s.api.admissionregistration.v1.AuditAnnotation](#schemaio.k8s.api.admissionregistration.v1.auditannotation)]|false|none|auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.|
|failurePolicy|string|false|none|failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.<br><br>A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.<br><br>failurePolicy does not define how validations that evaluate to false are handled.<br><br>When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.<br><br>Allowed values are Ignore or Fail. Defaults to Fail.|
|matchConditions|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|none|matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the policy is skipped|
|matchConstraints|object|false|none|matchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.|
|paramKind|object|false|none|paramKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.|
|validations|[[io.k8s.api.admissionregistration.v1.Validation](#schemaio.k8s.api.admissionregistration.v1.validation)]|false|none|validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.|
|variables|[[io.k8s.api.admissionregistration.v1.Variable](#schemaio.k8s.api.admissionregistration.v1.variable)]|false|none|variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.<br><br>The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyStatus">io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingadmissionpolicystatus"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyStatus"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingadmissionpolicystatus"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingadmissionpolicystatus"></a>

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
  "observedGeneration": 0,
  "typeChecking": {
    "expressionWarnings": [
      {
        "fieldRef": "",
        "warning": ""
      }
    ]
  }
}
```

ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[io.k8s.apimachinery.pkg.apis.meta.v1.Condition](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.condition)]|false|none|conditions represent the latest available observations of a policy's current state.|
|observedGeneration|integer(int64)|false|none|observedGeneration is the generation observed by the controller.|
|typeChecking|object|false|none|typeChecking contains the results of type checking for each expression. Presence of this field indicates the completion of the type checking.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingWebhook">io.k8s.api.admissionregistration.v1.ValidatingWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingwebhook"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingWebhook"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingwebhook"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingwebhook"></a>

```json
{
  "admissionReviewVersions": [
    "string"
  ],
  "clientConfig": {},
  "failurePolicy": "string",
  "matchConditions": [
    {
      "expression": "",
      "name": ""
    }
  ],
  "matchPolicy": "string",
  "name": "",
  "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "objectSelector": {
    "matchExpressions": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ],
    "matchLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "rules": [
    {
      "apiGroups": [
        "string"
      ],
      "apiVersions": [
        "string"
      ],
      "operations": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "scope": "string"
    }
  ],
  "sideEffects": "string",
  "timeoutSeconds": 0
}
```

ValidatingWebhook describes an admission webhook and the resources and operations it applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admissionReviewVersions|[string]|true|none|admissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.|
|clientConfig|object|true|none|clientConfig defines how to communicate with the hook. Required|
|failurePolicy|string|false|none|failurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.|
|matchConditions|[[io.k8s.api.admissionregistration.v1.MatchCondition](#schemaio.k8s.api.admissionregistration.v1.matchcondition)]|false|none|matchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.<br><br>The exact matching logic is (in order):<br>  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.<br>  2. If ALL matchConditions evaluate to TRUE, the webhook is called.<br>  3. If any matchCondition evaluates to an error (but none are FALSE):<br>     - If failurePolicy=Fail, reject the request<br>     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped|
|matchPolicy|string|false|none|matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".<br><br>- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.<br><br>- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.<br><br>Defaults to "Equivalent"|
|name|string|true|none|name is the name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.|
|namespaceSelector|object|false|none|namespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.<br><br>For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "runlevel",<br>      "operator": "NotIn",<br>      "values": [<br>        "0",<br>        "1"<br>      ]<br>    }<br>  ]<br>}<br><br>If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {<br>  "matchExpressions": [<br>    {<br>      "key": "environment",<br>      "operator": "In",<br>      "values": [<br>        "prod",<br>        "staging"<br>      ]<br>    }<br>  ]<br>}<br><br>See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.<br><br>Default to the empty LabelSelector, which matches everything.|
|objectSelector|object|false|none|objectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.|
|rules|[[io.k8s.api.admissionregistration.v1.RuleWithOperations](#schemaio.k8s.api.admissionregistration.v1.rulewithoperations)]|false|none|rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.|
|sideEffects|string|true|none|sideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.|
|timeoutSeconds|integer(int32)|false|none|timeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration">io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "webhooks": [
    {
      "admissionReviewVersions": [
        "string"
      ],
      "clientConfig": {},
      "failurePolicy": "string",
      "matchConditions": [
        {
          "expression": "",
          "name": ""
        }
      ],
      "matchPolicy": "string",
      "name": "",
      "namespaceSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "objectSelector": {
        "matchExpressions": [
          {
            "key": "",
            "operator": "",
            "values": [
              "string"
            ]
          }
        ],
        "matchLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "rules": [
        {
          "apiGroups": [
            "string"
          ],
          "apiVersions": [
            "string"
          ],
          "operations": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "scope": "string"
        }
      ],
      "sideEffects": "string",
      "timeoutSeconds": 0
    }
  ]
}
```

ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.|
|webhooks|[[io.k8s.api.admissionregistration.v1.ValidatingWebhook](#schemaio.k8s.api.admissionregistration.v1.validatingwebhook)]|false|none|webhooks is a list of webhooks and the affected resources and operations.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList">io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfigurationlist"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validatingwebhookconfigurationlist"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validatingwebhookconfigurationlist"></a>

```json
{
  "apiVersion": "string",
  "items": [
    {
      "apiVersion": "string",
      "kind": "string",
      "metadata": {},
      "webhooks": [
        {
          "admissionReviewVersions": [
            "string"
          ],
          "clientConfig": {},
          "failurePolicy": "string",
          "matchConditions": [
            {
              "expression": "",
              "name": ""
            }
          ],
          "matchPolicy": "string",
          "name": "",
          "namespaceSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "objectSelector": {
            "matchExpressions": [
              {
                "key": "",
                "operator": "",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "rules": [
            {
              "apiGroups": [
                "string"
              ],
              "apiVersions": [
                "string"
              ],
              "operations": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "scope": "string"
            }
          ],
          "sideEffects": "string",
          "timeoutSeconds": 0
        }
      ]
    }
  ],
  "kind": "string",
  "metadata": {}
}
```

ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|items|[[io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration](#schemaio.k8s.api.admissionregistration.v1.validatingwebhookconfiguration)]|true|none|List of ValidatingWebhookConfiguration.|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.Validation">io.k8s.api.admissionregistration.v1.Validation</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.validation"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.Validation"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.validation"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.validation"></a>

```json
{
  "expression": "",
  "message": "string",
  "messageExpression": "string",
  "reason": "string"
}
```

Validation specifies the CEL expression which is used to apply the validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|expression represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec CEL expressions have access to the contents of the API request/response, organized into CEL variables as well as some other useful variables:<br><br>- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.<br>  For example, a variable named 'foo' can be accessed as 'variables.foo'.<br>- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.<br>  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz<br>- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the<br>  request resource.<br><br>The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object. No other metadata properties are accessible.<br><br>Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:<br>	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",<br>	  "import", "let", "loop", "package", "namespace", "return".<br>Examples:<br>  - Expression accessing a property named "namespace": {"Expression": "object.__namespace__ > 0"}<br>  - Expression accessing a property named "x-prop": {"Expression": "object.x__dash__prop > 0"}<br>  - Expression accessing a property named "redact__d": {"Expression": "object.redact__underscores__d > 0"}<br><br>Equality on arrays with list type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:<br>  - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and<br>    non-intersecting elements in `Y` are appended, retaining their partial order.<br>  - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values<br>    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with<br>    non-intersecting keys are appended, retaining their partial order.<br>Required.|
|message|string|false|none|message represents the message displayed when validation fails. The message is required if the Expression contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host" If the Expression contains line breaks. Message is required. The message must not contain line breaks. If unset, the message is "failed Expression: {Expression}".|
|messageExpression|string|false|none|messageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a validation, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the `expression` except for 'authorizer' and 'authorizer.requestResource'. Example: "object.x must be less than max ("+string(params.max)+")"|
|reason|string|false|none|reason represents a machine-readable description of why this validation failed. If this is the first validation in the list to fail, this reason, as well as the corresponding HTTP response code, are used in the HTTP response to the client. The currently supported reasons are: "Unauthorized", "Forbidden", "Invalid", "RequestEntityTooLarge". If not set, StatusReasonInvalid is used in the response to the client.|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.Variable">io.k8s.api.admissionregistration.v1.Variable</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.variable"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.Variable"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.variable"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.variable"></a>

```json
{
  "expression": "",
  "name": ""
}
```

Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.|
|name|string|true|none|name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`|

<h2 id="tocS_io.k8s.api.admissionregistration.v1.WebhookClientConfig">io.k8s.api.admissionregistration.v1.WebhookClientConfig</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.admissionregistration.v1.webhookclientconfig"></a>
<a id="schema_io.k8s.api.admissionregistration.v1.WebhookClientConfig"></a>
<a id="tocSio.k8s.api.admissionregistration.v1.webhookclientconfig"></a>
<a id="tocsio.k8s.api.admissionregistration.v1.webhookclientconfig"></a>

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

WebhookClientConfig contains the information to make a TLS connection with the webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caBundle|string(byte)|false|none|caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.|
|service|object|false|none|service is a reference to the service for this webhook. Either `service` or `url` must be specified.<br><br>If the webhook is running within the cluster, then you should use `service`.|
|url|string|false|none|url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.<br><br>The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.<br><br>Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.<br><br>The scheme must be "https"; the URL must begin with "https://".<br><br>A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.<br><br>Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.|

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

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector">io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselector"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.labelselector"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.labelselector"></a>

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
  "matchLabels": {
    "property1": "string",
    "property2": "string"
  }
}
```

A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchExpressions|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|none|matchExpressions is a list of label selector requirements. The requirements are ANDed.|
|matchLabels|object|false|none|matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.|

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement">io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement"></a>

```json
{
  "key": "",
  "operator": "",
  "values": [
    "string"
  ]
}
```

A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|key is the label key that the selector applies to.|
|operator|string|true|none|operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.|
|values|[string]|false|none|values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.|

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
