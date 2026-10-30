<h1 id="kubernetes">Kubernetes vunversioned</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (BearerToken)
    - Parameter Name: **authorization**, in: header. Bearer Token authentication

<h1 id="kubernetes-authorizationv1">authorization_v1</h1>

## getAuthorizationV1APIResources

<a id="opIdgetAuthorizationV1APIResources"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/authorization.k8s.io/v1/ \
  -H 'Accept: application/json'
```

`GET /apis/authorization.k8s.io/v1/`

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

<h3 id="getauthorizationv1apiresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.apiresourcelist)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAuthorizationV1NamespacedLocalSubjectAccessReview

<a id="opIdcreateAuthorizationV1NamespacedLocalSubjectAccessReview"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/authorization.k8s.io/v1/namespaces/string/localsubjectaccessreviews \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews`

create a LocalSubjectAccessReview

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

<h3 id="createauthorizationv1namespacedlocalsubjectaccessreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|namespace|path|string|true|object name and auth scope, such as for teams and projects|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.authorization.v1.LocalSubjectAccessReview](#schemaio.k8s.api.authorization.v1.localsubjectaccessreview)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.|
|» » authorizationOptions|body|object|false|authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.|
|» » » handledDecisionTypes|body|[string]|true|handledDecisionTypes specifies what decision types the client can handle in the context it is in. Currently valid values are: - [Allow, Deny, NoOpinion] (for conditions-unaware clients) or - [Allow, Deny, NoOpinion, ConditionsMap, Union, ...] (for conditions-aware clients) If the authorizer would like to return conditions, but the client does not opt in to handle those here,<br>  the authorizer must fail closed to a safe unconditional decision<br>  (Deny if any Deny conditions were present, otherwise NoOpinion).<br>Order does not matter in this slice; set semantics should be used. The server does not reject unrecognized decision types, but focuses on whether the client supports a mode that the server does. All clients must support "classic", conditions-unaware authorization.|
|» » extra|body|object|false|extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.|
|» » » **additionalProperties**|body|[string]|false|none|
|» » groups|body|[string]|false|groups is the groups you're testing for.|
|» » nonResourceAttributes|body|object|false|nonResourceAttributes describes information for a non-resource access request|
|» » » path|body|string|false|path is the URL path of the request|
|» » » verb|body|string|false|verb is the standard HTTP verb|
|» » resourceAttributes|body|object|false|resourceAttributes describes information for a resource access request|
|» » » fieldSelector|body|object|false|fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement)]|false|requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » group|body|string|false|group is the API Group of the Resource.  "*" means all.|
|» » » labelSelector|body|object|false|labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » name|body|string|false|name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.|
|» » » namespace|body|string|false|namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview|
|» » » resource|body|string|false|resource is one of the existing resource types.  "*" means all.|
|» » » subresource|body|string|false|subresource is one of the existing resource types.  "" means none.|
|» » » verb|body|string|false|verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.|
|» » » version|body|string|false|version is the API Version of the Resource.  "*" means all.|
|» » uid|body|string|false|uid information about the requesting user.|
|» » user|body|string|false|user is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups|
|» status|body|object|false|status is filled in by the server and indicates whether the request is allowed or not|
|» » allowed|body|boolean|false|allowed is true if the action would be allowed, false otherwise. allowed=true is mutually exclusive with denied=true and conditionalDecision != nil.|
|» » conditionalDecision|body|object|false|conditionalDecision represents a conditional decision returned by the authorizer. When conditionalDecision is set, allowed, denied, reason and evaluationError must have their zero values. The top-level decision type should be ConditionsAwareDecisionTypeConditionsMap or ConditionsAwareDecisionTypeUnion, as Allow/Deny/NoOpinion decisions can be represented with SubjectAccessReviewStatus.Allowed and SubjectAccessReviewStatus.Denied alone. May only be set if spec.authorizationOptions.handledDecisionTypes includes `ConditionsMap` and `Union`. Requires the ConditionalAuthorization feature to be enabled.|
|» » » allow|body|object|false|allow represents an unconditional Allow decision. Must be non-null when type == "Allow", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » conditionsMap|body|object|false|conditionsMap represents a conditional decision, modelled as a map of conditions. Must be non-null when type == "ConditionsMap", otherwise this field must be unset.|
|» » » » allowConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|allowConditions contains the conditions with Allow effect. If any such condition evaluates to true, the ConditionsMap as a whole must evaluate to Allow.|
|» » » » denyConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|denyConditions contains the conditions with Deny effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to Deny.|
|» » » » noOpinionConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|noOpinionConditions contains the conditions with NoOpinion effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to NoOpinion.|
|» » » deny|body|object|false|deny represents an unconditional Deny decision. Must be non-null when type == "Deny", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » noOpinion|body|object|false|noOpinion represents an unconditional NoOpinion decision. Must be non-null when type == "NoOpinion", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » type|body|string|true|type describes the type of the decision, and acts as an enum discriminator.|
|» » » union|body|[[io.k8s.api.authorization.v1.NamedConditionsAwareDecision](#schemaio.k8s.api.authorization.v1.namedconditionsawaredecision)]|false|union forms an ordered tree of decisions, where the union decision is represented by an internal node, and all other decision types are leaf nodes. During evaluation, the leaf decisions are evaluated in depth-first order, until an Allow or Deny decision is found. The order of the decisions should match the order of the authorizers in the union authorizer for interpretability, but the authorizerName is the map key. At least one of the leaves must be of type ConditionsMap, as otherwise the union could be trivially reduced to just a single Allow/Deny/NoOpinion.<br><br>Must have at least one element when type == "Union", otherwise this field must be unset.|
|» » denied|body|boolean|false|denied is optional. True if the action would be denied, otherwise false If allowed is false, denied is false, and conditionalDecision is unset, then the authorizer has no opinion on whether to authorize the action. denied=true is mutually exclusive with allowed=true and conditionalDecision != nil.|
|» » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » reason|body|string|false|reason is optional.  It indicates why a request was allowed or denied.|

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

<h3 id="createauthorizationv1namespacedlocalsubjectaccessreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.authorization.v1.LocalSubjectAccessReview](#schemaio.k8s.api.authorization.v1.localsubjectaccessreview)|
|201|Created|Created|[io.k8s.api.authorization.v1.LocalSubjectAccessReview](#schemaio.k8s.api.authorization.v1.localsubjectaccessreview)|
|202|Accepted|Accepted|[io.k8s.api.authorization.v1.LocalSubjectAccessReview](#schemaio.k8s.api.authorization.v1.localsubjectaccessreview)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAuthorizationV1SelfSubjectAccessReview

<a id="opIdcreateAuthorizationV1SelfSubjectAccessReview"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/authorization.k8s.io/v1/selfsubjectaccessreviews \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews`

create a SelfSubjectAccessReview

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

<h3 id="createauthorizationv1selfsubjectaccessreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.authorization.v1.SelfSubjectAccessReview](#schemaio.k8s.api.authorization.v1.selfsubjectaccessreview)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec holds information about the request being evaluated.  user and groups must be empty|
|» » authorizationOptions|body|object|false|authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.|
|» » » handledDecisionTypes|body|[string]|true|handledDecisionTypes specifies what decision types the client can handle in the context it is in. Currently valid values are: - [Allow, Deny, NoOpinion] (for conditions-unaware clients) or - [Allow, Deny, NoOpinion, ConditionsMap, Union, ...] (for conditions-aware clients) If the authorizer would like to return conditions, but the client does not opt in to handle those here,<br>  the authorizer must fail closed to a safe unconditional decision<br>  (Deny if any Deny conditions were present, otherwise NoOpinion).<br>Order does not matter in this slice; set semantics should be used. The server does not reject unrecognized decision types, but focuses on whether the client supports a mode that the server does. All clients must support "classic", conditions-unaware authorization.|
|» » nonResourceAttributes|body|object|false|nonResourceAttributes describes information for a non-resource access request|
|» » » path|body|string|false|path is the URL path of the request|
|» » » verb|body|string|false|verb is the standard HTTP verb|
|» » resourceAttributes|body|object|false|resourceAttributes describes information for a resource access request|
|» » » fieldSelector|body|object|false|fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement)]|false|requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » group|body|string|false|group is the API Group of the Resource.  "*" means all.|
|» » » labelSelector|body|object|false|labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » name|body|string|false|name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.|
|» » » namespace|body|string|false|namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview|
|» » » resource|body|string|false|resource is one of the existing resource types.  "*" means all.|
|» » » subresource|body|string|false|subresource is one of the existing resource types.  "" means none.|
|» » » verb|body|string|false|verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.|
|» » » version|body|string|false|version is the API Version of the Resource.  "*" means all.|
|» status|body|object|false|status is filled in by the server and indicates whether the request is allowed or not|
|» » allowed|body|boolean|false|allowed is true if the action would be allowed, false otherwise. allowed=true is mutually exclusive with denied=true and conditionalDecision != nil.|
|» » conditionalDecision|body|object|false|conditionalDecision represents a conditional decision returned by the authorizer. When conditionalDecision is set, allowed, denied, reason and evaluationError must have their zero values. The top-level decision type should be ConditionsAwareDecisionTypeConditionsMap or ConditionsAwareDecisionTypeUnion, as Allow/Deny/NoOpinion decisions can be represented with SubjectAccessReviewStatus.Allowed and SubjectAccessReviewStatus.Denied alone. May only be set if spec.authorizationOptions.handledDecisionTypes includes `ConditionsMap` and `Union`. Requires the ConditionalAuthorization feature to be enabled.|
|» » » allow|body|object|false|allow represents an unconditional Allow decision. Must be non-null when type == "Allow", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » conditionsMap|body|object|false|conditionsMap represents a conditional decision, modelled as a map of conditions. Must be non-null when type == "ConditionsMap", otherwise this field must be unset.|
|» » » » allowConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|allowConditions contains the conditions with Allow effect. If any such condition evaluates to true, the ConditionsMap as a whole must evaluate to Allow.|
|» » » » denyConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|denyConditions contains the conditions with Deny effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to Deny.|
|» » » » noOpinionConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|noOpinionConditions contains the conditions with NoOpinion effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to NoOpinion.|
|» » » deny|body|object|false|deny represents an unconditional Deny decision. Must be non-null when type == "Deny", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » noOpinion|body|object|false|noOpinion represents an unconditional NoOpinion decision. Must be non-null when type == "NoOpinion", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » type|body|string|true|type describes the type of the decision, and acts as an enum discriminator.|
|» » » union|body|[[io.k8s.api.authorization.v1.NamedConditionsAwareDecision](#schemaio.k8s.api.authorization.v1.namedconditionsawaredecision)]|false|union forms an ordered tree of decisions, where the union decision is represented by an internal node, and all other decision types are leaf nodes. During evaluation, the leaf decisions are evaluated in depth-first order, until an Allow or Deny decision is found. The order of the decisions should match the order of the authorizers in the union authorizer for interpretability, but the authorizerName is the map key. At least one of the leaves must be of type ConditionsMap, as otherwise the union could be trivially reduced to just a single Allow/Deny/NoOpinion.<br><br>Must have at least one element when type == "Union", otherwise this field must be unset.|
|» » denied|body|boolean|false|denied is optional. True if the action would be denied, otherwise false If allowed is false, denied is false, and conditionalDecision is unset, then the authorizer has no opinion on whether to authorize the action. denied=true is mutually exclusive with allowed=true and conditionalDecision != nil.|
|» » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » reason|body|string|false|reason is optional.  It indicates why a request was allowed or denied.|

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

<h3 id="createauthorizationv1selfsubjectaccessreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.authorization.v1.SelfSubjectAccessReview](#schemaio.k8s.api.authorization.v1.selfsubjectaccessreview)|
|201|Created|Created|[io.k8s.api.authorization.v1.SelfSubjectAccessReview](#schemaio.k8s.api.authorization.v1.selfsubjectaccessreview)|
|202|Accepted|Accepted|[io.k8s.api.authorization.v1.SelfSubjectAccessReview](#schemaio.k8s.api.authorization.v1.selfsubjectaccessreview)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAuthorizationV1SelfSubjectRulesReview

<a id="opIdcreateAuthorizationV1SelfSubjectRulesReview"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/authorization.k8s.io/v1/selfsubjectrulesreviews \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/authorization.k8s.io/v1/selfsubjectrulesreviews`

create a SelfSubjectRulesReview

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

<h3 id="createauthorizationv1selfsubjectrulesreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.authorization.v1.SelfSubjectRulesReview](#schemaio.k8s.api.authorization.v1.selfsubjectrulesreview)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec holds information about the request being evaluated.|
|» » namespace|body|string|true|namespace to evaluate rules for. Required.|
|» status|body|object|false|status is filled in by the server and indicates the set of actions a user can perform.|
|» » evaluationError|body|string|false|evaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.|
|» » incomplete|body|boolean|false|incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.|
|» » nonResourceRules|body|[[io.k8s.api.authorization.v1.NonResourceRule](#schemaio.k8s.api.authorization.v1.nonresourcerule)]|false|nonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.|
|» » resourceRules|body|[[io.k8s.api.authorization.v1.ResourceRule](#schemaio.k8s.api.authorization.v1.resourcerule)]|false|resourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.|

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

<h3 id="createauthorizationv1selfsubjectrulesreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.authorization.v1.SelfSubjectRulesReview](#schemaio.k8s.api.authorization.v1.selfsubjectrulesreview)|
|201|Created|Created|[io.k8s.api.authorization.v1.SelfSubjectRulesReview](#schemaio.k8s.api.authorization.v1.selfsubjectrulesreview)|
|202|Accepted|Accepted|[io.k8s.api.authorization.v1.SelfSubjectRulesReview](#schemaio.k8s.api.authorization.v1.selfsubjectrulesreview)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAuthorizationV1SubjectAccessReview

<a id="opIdcreateAuthorizationV1SubjectAccessReview"></a>

> Code samples

```bash
curl https://kubernetes.default.svc/apis/authorization.k8s.io/v1/subjectaccessreviews \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"apiVersion":"string","kind":"string","metadata":{},"spec":{},"status":{}}'
```

`POST /apis/authorization.k8s.io/v1/subjectaccessreviews`

create a SubjectAccessReview

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

<h3 id="createauthorizationv1subjectaccessreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed|
|fieldManager|query|string|false|fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.|
|fieldValidation|query|string|false|fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.|
|pretty|query|string|false|If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).|
|body|body|[io.k8s.api.authorization.v1.SubjectAccessReview](#schemaio.k8s.api.authorization.v1.subjectaccessreview)|true|none|
|» apiVersion|body|string|false|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|» kind|body|string|false|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|» metadata|body|object|false|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
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
|» spec|body|object|true|spec holds information about the request being evaluated|
|» » authorizationOptions|body|object|false|authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.|
|» » » handledDecisionTypes|body|[string]|true|handledDecisionTypes specifies what decision types the client can handle in the context it is in. Currently valid values are: - [Allow, Deny, NoOpinion] (for conditions-unaware clients) or - [Allow, Deny, NoOpinion, ConditionsMap, Union, ...] (for conditions-aware clients) If the authorizer would like to return conditions, but the client does not opt in to handle those here,<br>  the authorizer must fail closed to a safe unconditional decision<br>  (Deny if any Deny conditions were present, otherwise NoOpinion).<br>Order does not matter in this slice; set semantics should be used. The server does not reject unrecognized decision types, but focuses on whether the client supports a mode that the server does. All clients must support "classic", conditions-unaware authorization.|
|» » extra|body|object|false|extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.|
|» » » **additionalProperties**|body|[string]|false|none|
|» » groups|body|[string]|false|groups is the groups you're testing for.|
|» » nonResourceAttributes|body|object|false|nonResourceAttributes describes information for a non-resource access request|
|» » » path|body|string|false|path is the URL path of the request|
|» » » verb|body|string|false|verb is the standard HTTP verb|
|» » resourceAttributes|body|object|false|resourceAttributes describes information for a resource access request|
|» » » fieldSelector|body|object|false|fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement)]|false|requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » group|body|string|false|group is the API Group of the Resource.  "*" means all.|
|» » » labelSelector|body|object|false|labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.|
|» » » » rawSelector|body|string|false|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|» » » » requirements|body|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|
|» » » name|body|string|false|name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.|
|» » » namespace|body|string|false|namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview|
|» » » resource|body|string|false|resource is one of the existing resource types.  "*" means all.|
|» » » subresource|body|string|false|subresource is one of the existing resource types.  "" means none.|
|» » » verb|body|string|false|verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.|
|» » » version|body|string|false|version is the API Version of the Resource.  "*" means all.|
|» » uid|body|string|false|uid information about the requesting user.|
|» » user|body|string|false|user is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups|
|» status|body|object|false|status is filled in by the server and indicates whether the request is allowed or not|
|» » allowed|body|boolean|false|allowed is true if the action would be allowed, false otherwise. allowed=true is mutually exclusive with denied=true and conditionalDecision != nil.|
|» » conditionalDecision|body|object|false|conditionalDecision represents a conditional decision returned by the authorizer. When conditionalDecision is set, allowed, denied, reason and evaluationError must have their zero values. The top-level decision type should be ConditionsAwareDecisionTypeConditionsMap or ConditionsAwareDecisionTypeUnion, as Allow/Deny/NoOpinion decisions can be represented with SubjectAccessReviewStatus.Allowed and SubjectAccessReviewStatus.Denied alone. May only be set if spec.authorizationOptions.handledDecisionTypes includes `ConditionsMap` and `Union`. Requires the ConditionalAuthorization feature to be enabled.|
|» » » allow|body|object|false|allow represents an unconditional Allow decision. Must be non-null when type == "Allow", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » conditionsMap|body|object|false|conditionsMap represents a conditional decision, modelled as a map of conditions. Must be non-null when type == "ConditionsMap", otherwise this field must be unset.|
|» » » » allowConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|allowConditions contains the conditions with Allow effect. If any such condition evaluates to true, the ConditionsMap as a whole must evaluate to Allow.|
|» » » » denyConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|denyConditions contains the conditions with Deny effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to Deny.|
|» » » » noOpinionConditions|body|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|noOpinionConditions contains the conditions with NoOpinion effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to NoOpinion.|
|» » » deny|body|object|false|deny represents an unconditional Deny decision. Must be non-null when type == "Deny", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » noOpinion|body|object|false|noOpinion represents an unconditional NoOpinion decision. Must be non-null when type == "NoOpinion", otherwise this field must be unset.|
|» » » » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » » » reason|body|string|false|reason is optional. It indicates why a request was allowed or denied.|
|» » » type|body|string|true|type describes the type of the decision, and acts as an enum discriminator.|
|» » » union|body|[[io.k8s.api.authorization.v1.NamedConditionsAwareDecision](#schemaio.k8s.api.authorization.v1.namedconditionsawaredecision)]|false|union forms an ordered tree of decisions, where the union decision is represented by an internal node, and all other decision types are leaf nodes. During evaluation, the leaf decisions are evaluated in depth-first order, until an Allow or Deny decision is found. The order of the decisions should match the order of the authorizers in the union authorizer for interpretability, but the authorizerName is the map key. At least one of the leaves must be of type ConditionsMap, as otherwise the union could be trivially reduced to just a single Allow/Deny/NoOpinion.<br><br>Must have at least one element when type == "Union", otherwise this field must be unset.|
|» » denied|body|boolean|false|denied is optional. True if the action would be denied, otherwise false If allowed is false, denied is false, and conditionalDecision is unset, then the authorizer has no opinion on whether to authorize the action. denied=true is mutually exclusive with allowed=true and conditionalDecision != nil.|
|» » evaluationError|body|string|false|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|» » reason|body|string|false|reason is optional.  It indicates why a request was allowed or denied.|

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

<h3 id="createauthorizationv1subjectaccessreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[io.k8s.api.authorization.v1.SubjectAccessReview](#schemaio.k8s.api.authorization.v1.subjectaccessreview)|
|201|Created|Created|[io.k8s.api.authorization.v1.SubjectAccessReview](#schemaio.k8s.api.authorization.v1.subjectaccessreview)|
|202|Accepted|Accepted|[io.k8s.api.authorization.v1.SubjectAccessReview](#schemaio.k8s.api.authorization.v1.subjectaccessreview)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_io.k8s.api.authorization.v1.AuthorizationOptions">io.k8s.api.authorization.v1.AuthorizationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.authorizationoptions"></a>
<a id="schema_io.k8s.api.authorization.v1.AuthorizationOptions"></a>
<a id="tocSio.k8s.api.authorization.v1.authorizationoptions"></a>
<a id="tocsio.k8s.api.authorization.v1.authorizationoptions"></a>

```json
{
  "handledDecisionTypes": [
    "string"
  ]
}
```

AuthorizationOptions contains options for specifying the client's authorization abilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handledDecisionTypes|[string]|true|none|handledDecisionTypes specifies what decision types the client can handle in the context it is in. Currently valid values are: - [Allow, Deny, NoOpinion] (for conditions-unaware clients) or - [Allow, Deny, NoOpinion, ConditionsMap, Union, ...] (for conditions-aware clients) If the authorizer would like to return conditions, but the client does not opt in to handle those here,<br>  the authorizer must fail closed to a safe unconditional decision<br>  (Deny if any Deny conditions were present, otherwise NoOpinion).<br>Order does not matter in this slice; set semantics should be used. The server does not reject unrecognized decision types, but focuses on whether the client supports a mode that the server does. All clients must support "classic", conditions-unaware authorization.|

<h2 id="tocS_io.k8s.api.authorization.v1.Condition">io.k8s.api.authorization.v1.Condition</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.condition"></a>
<a id="schema_io.k8s.api.authorization.v1.Condition"></a>
<a id="tocSio.k8s.api.authorization.v1.condition"></a>
<a id="tocsio.k8s.api.authorization.v1.condition"></a>

```json
{
  "condition": "string",
  "description": "string",
  "id": "",
  "type": "string"
}
```

Condition represents a single authorization condition to be evaluated against data available later in the request chain, e.g. objects available in admission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|string|false|none|condition returns a string encoding of the condition to be evaluated. It is a pure, deterministic function from ConditionsData to a boolean (or error). Might or might not be human-readable. Optional, if the ID alone is enough for the authorizer to know how to evaluate the condition.|
|description|string|false|none|description is an optional human-friendly description that can be shown as an error message or for debugging. Optional.|
|id|string|true|none|id uniquely identifies this condition within the scope of the authorizer that authored it and ConditionsMap it is part of. Validated as a Kubernetes label key. Any domain of form *.k8s.io or *.kubernetes.io is reserved for Kubernetes use.|
|type|string|false|none|type describes the type of the condition, if there are multiple possibilities. Should be formatted as a Kubernetes label key. Any domain of form *.k8s.io or *.kubernetes.io is reserved for Kubernetes use. authorizer.kubernetes.io/cel is a conditions type for CEL, handled by kube-apiserver. Optional. Can be omitted if the authorizer already knows how to evaluate the condition.|

<h2 id="tocS_io.k8s.api.authorization.v1.ConditionsAwareDecision">io.k8s.api.authorization.v1.ConditionsAwareDecision</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.conditionsawaredecision"></a>
<a id="schema_io.k8s.api.authorization.v1.ConditionsAwareDecision"></a>
<a id="tocSio.k8s.api.authorization.v1.conditionsawaredecision"></a>
<a id="tocsio.k8s.api.authorization.v1.conditionsawaredecision"></a>

```json
{
  "allow": {
    "evaluationError": "string",
    "reason": "string"
  },
  "conditionsMap": {
    "allowConditions": [
      {
        "condition": "string",
        "description": "string",
        "id": "",
        "type": "string"
      }
    ],
    "denyConditions": [
      {
        "condition": "string",
        "description": "string",
        "id": "",
        "type": "string"
      }
    ],
    "noOpinionConditions": [
      {
        "condition": "string",
        "description": "string",
        "id": "",
        "type": "string"
      }
    ]
  },
  "deny": {
    "evaluationError": "string",
    "reason": "string"
  },
  "noOpinion": {
    "evaluationError": "string",
    "reason": "string"
  },
  "type": "",
  "union": [
    {
      "authorizerName": "",
      "decision": {}
    }
  ]
}
```

ConditionsAwareDecision represents one authorizer's decision. It is an enum type, with variants described in ConditionsAwareDecisionType, plus a reason and error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow|object|false|none|allow represents an unconditional Allow decision. Must be non-null when type == "Allow", otherwise this field must be unset.|
|conditionsMap|object|false|none|conditionsMap represents a conditional decision, modelled as a map of conditions. Must be non-null when type == "ConditionsMap", otherwise this field must be unset.|
|deny|object|false|none|deny represents an unconditional Deny decision. Must be non-null when type == "Deny", otherwise this field must be unset.|
|noOpinion|object|false|none|noOpinion represents an unconditional NoOpinion decision. Must be non-null when type == "NoOpinion", otherwise this field must be unset.|
|type|string|true|none|type describes the type of the decision, and acts as an enum discriminator.|
|union|[[io.k8s.api.authorization.v1.NamedConditionsAwareDecision](#schemaio.k8s.api.authorization.v1.namedconditionsawaredecision)]|false|none|union forms an ordered tree of decisions, where the union decision is represented by an internal node, and all other decision types are leaf nodes. During evaluation, the leaf decisions are evaluated in depth-first order, until an Allow or Deny decision is found. The order of the decisions should match the order of the authorizers in the union authorizer for interpretability, but the authorizerName is the map key. At least one of the leaves must be of type ConditionsMap, as otherwise the union could be trivially reduced to just a single Allow/Deny/NoOpinion.<br><br>Must have at least one element when type == "Union", otherwise this field must be unset.|

<h2 id="tocS_io.k8s.api.authorization.v1.ConditionsMap">io.k8s.api.authorization.v1.ConditionsMap</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.conditionsmap"></a>
<a id="schema_io.k8s.api.authorization.v1.ConditionsMap"></a>
<a id="tocSio.k8s.api.authorization.v1.conditionsmap"></a>
<a id="tocsio.k8s.api.authorization.v1.conditionsmap"></a>

```json
{
  "allowConditions": [
    {
      "condition": "string",
      "description": "string",
      "id": "",
      "type": "string"
    }
  ],
  "denyConditions": [
    {
      "condition": "string",
      "description": "string",
      "id": "",
      "type": "string"
    }
  ],
  "noOpinionConditions": [
    {
      "condition": "string",
      "description": "string",
      "id": "",
      "type": "string"
    }
  ]
}
```

ConditionsMap represents a map of conditions, keyed by ID across all conditions, across all effects. The ConditionsMap must have at least one Allow condition or at least one Deny condition. It cannot contain more than 128 conditions in total. The conditions are evaluated against data available later, to determine whether the authorizer that authored the conditions allows or denies the request. If all conditions in the map evaluate to false, the final decision must be NoOpinion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowConditions|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|none|allowConditions contains the conditions with Allow effect. If any such condition evaluates to true, the ConditionsMap as a whole must evaluate to Allow.|
|denyConditions|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|none|denyConditions contains the conditions with Deny effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to Deny.|
|noOpinionConditions|[[io.k8s.api.authorization.v1.Condition](#schemaio.k8s.api.authorization.v1.condition)]|false|none|noOpinionConditions contains the conditions with NoOpinion effect. If any such condition evaluates to true or error, the ConditionsMap as a whole must evaluate to NoOpinion.|

<h2 id="tocS_io.k8s.api.authorization.v1.FieldSelectorAttributes">io.k8s.api.authorization.v1.FieldSelectorAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.fieldselectorattributes"></a>
<a id="schema_io.k8s.api.authorization.v1.FieldSelectorAttributes"></a>
<a id="tocSio.k8s.api.authorization.v1.fieldselectorattributes"></a>
<a id="tocsio.k8s.api.authorization.v1.fieldselectorattributes"></a>

```json
{
  "rawSelector": "string",
  "requirements": [
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

FieldSelectorAttributes indicates a field limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawSelector|string|false|none|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|requirements|[[io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement)]|false|none|requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|

<h2 id="tocS_io.k8s.api.authorization.v1.LabelSelectorAttributes">io.k8s.api.authorization.v1.LabelSelectorAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.labelselectorattributes"></a>
<a id="schema_io.k8s.api.authorization.v1.LabelSelectorAttributes"></a>
<a id="tocSio.k8s.api.authorization.v1.labelselectorattributes"></a>
<a id="tocsio.k8s.api.authorization.v1.labelselectorattributes"></a>

```json
{
  "rawSelector": "string",
  "requirements": [
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

LabelSelectorAttributes indicates a label limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawSelector|string|false|none|rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.|
|requirements|[[io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement](#schemaio.k8s.apimachinery.pkg.apis.meta.v1.labelselectorrequirement)]|false|none|requirements is the parsed interpretation of a label selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.|

<h2 id="tocS_io.k8s.api.authorization.v1.LocalSubjectAccessReview">io.k8s.api.authorization.v1.LocalSubjectAccessReview</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.localsubjectaccessreview"></a>
<a id="schema_io.k8s.api.authorization.v1.LocalSubjectAccessReview"></a>
<a id="tocSio.k8s.api.authorization.v1.localsubjectaccessreview"></a>
<a id="tocsio.k8s.api.authorization.v1.localsubjectaccessreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.|
|status|object|false|none|status is filled in by the server and indicates whether the request is allowed or not|

<h2 id="tocS_io.k8s.api.authorization.v1.NamedConditionsAwareDecision">io.k8s.api.authorization.v1.NamedConditionsAwareDecision</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.namedconditionsawaredecision"></a>
<a id="schema_io.k8s.api.authorization.v1.NamedConditionsAwareDecision"></a>
<a id="tocSio.k8s.api.authorization.v1.namedconditionsawaredecision"></a>
<a id="tocsio.k8s.api.authorization.v1.namedconditionsawaredecision"></a>

```json
{
  "authorizerName": "",
  "decision": {}
}
```

NamedConditionsAwareDecision is a named ConditionsAwareDecision, returned by a unioned authorizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizerName|string|true|none|authorizerName details the name of the authorizer that authored the condition, such that the right Decision can be paired with the right authorizer when evaluating the conditions, even across API server replicas. The name must be stable over time. This name must be unique within a given union authorizer, not necessarily globally.|
|decision|object|true|none|decision carries the inner decision returned from the authorizer.|

<h2 id="tocS_io.k8s.api.authorization.v1.NonResourceAttributes">io.k8s.api.authorization.v1.NonResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.nonresourceattributes"></a>
<a id="schema_io.k8s.api.authorization.v1.NonResourceAttributes"></a>
<a id="tocSio.k8s.api.authorization.v1.nonresourceattributes"></a>
<a id="tocsio.k8s.api.authorization.v1.nonresourceattributes"></a>

```json
{
  "path": "string",
  "verb": "string"
}
```

NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|path is the URL path of the request|
|verb|string|false|none|verb is the standard HTTP verb|

<h2 id="tocS_io.k8s.api.authorization.v1.NonResourceRule">io.k8s.api.authorization.v1.NonResourceRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.nonresourcerule"></a>
<a id="schema_io.k8s.api.authorization.v1.NonResourceRule"></a>
<a id="tocSio.k8s.api.authorization.v1.nonresourcerule"></a>
<a id="tocsio.k8s.api.authorization.v1.nonresourcerule"></a>

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

NonResourceRule holds information that describes a rule for the non-resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonResourceURLs|[string]|false|none|nonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.|
|verbs|[string]|false|none|verbs is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.|

<h2 id="tocS_io.k8s.api.authorization.v1.ResourceAttributes">io.k8s.api.authorization.v1.ResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.resourceattributes"></a>
<a id="schema_io.k8s.api.authorization.v1.ResourceAttributes"></a>
<a id="tocSio.k8s.api.authorization.v1.resourceattributes"></a>
<a id="tocsio.k8s.api.authorization.v1.resourceattributes"></a>

```json
{
  "fieldSelector": {
    "rawSelector": "string",
    "requirements": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ]
  },
  "group": "string",
  "labelSelector": {
    "rawSelector": "string",
    "requirements": [
      {
        "key": "",
        "operator": "",
        "values": [
          "string"
        ]
      }
    ]
  },
  "name": "string",
  "namespace": "string",
  "resource": "string",
  "subresource": "string",
  "verb": "string",
  "version": "string"
}
```

ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldSelector|object|false|none|fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.|
|group|string|false|none|group is the API Group of the Resource.  "*" means all.|
|labelSelector|object|false|none|labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.|
|name|string|false|none|name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.|
|namespace|string|false|none|namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview|
|resource|string|false|none|resource is one of the existing resource types.  "*" means all.|
|subresource|string|false|none|subresource is one of the existing resource types.  "" means none.|
|verb|string|false|none|verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.|
|version|string|false|none|version is the API Version of the Resource.  "*" means all.|

<h2 id="tocS_io.k8s.api.authorization.v1.ResourceRule">io.k8s.api.authorization.v1.ResourceRule</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.resourcerule"></a>
<a id="schema_io.k8s.api.authorization.v1.ResourceRule"></a>
<a id="tocSio.k8s.api.authorization.v1.resourcerule"></a>
<a id="tocsio.k8s.api.authorization.v1.resourcerule"></a>

```json
{
  "apiGroups": [
    "string"
  ],
  "resourceNames": [
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

ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiGroups|[string]|false|none|apiGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.|
|resourceNames|[string]|false|none|resourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.|
|resources|[string]|false|none|resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.<br> "*/foo" represents the subresource 'foo' for all resources in the specified apiGroups.|
|verbs|[string]|false|none|verbs is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.|

<h2 id="tocS_io.k8s.api.authorization.v1.SelfSubjectAccessReview">io.k8s.api.authorization.v1.SelfSubjectAccessReview</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.selfsubjectaccessreview"></a>
<a id="schema_io.k8s.api.authorization.v1.SelfSubjectAccessReview"></a>
<a id="tocSio.k8s.api.authorization.v1.selfsubjectaccessreview"></a>
<a id="tocsio.k8s.api.authorization.v1.selfsubjectaccessreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec holds information about the request being evaluated.  user and groups must be empty|
|status|object|false|none|status is filled in by the server and indicates whether the request is allowed or not|

<h2 id="tocS_io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec">io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.selfsubjectaccessreviewspec"></a>
<a id="schema_io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec"></a>
<a id="tocSio.k8s.api.authorization.v1.selfsubjectaccessreviewspec"></a>
<a id="tocsio.k8s.api.authorization.v1.selfsubjectaccessreviewspec"></a>

```json
{
  "authorizationOptions": {
    "handledDecisionTypes": [
      "string"
    ]
  },
  "nonResourceAttributes": {
    "path": "string",
    "verb": "string"
  },
  "resourceAttributes": {
    "fieldSelector": {
      "rawSelector": "string",
      "requirements": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ]
    },
    "group": "string",
    "labelSelector": {
      "rawSelector": "string",
      "requirements": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ]
    },
    "name": "string",
    "namespace": "string",
    "resource": "string",
    "subresource": "string",
    "verb": "string",
    "version": "string"
  }
}
```

SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationOptions|object|false|none|authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.|
|nonResourceAttributes|object|false|none|nonResourceAttributes describes information for a non-resource access request|
|resourceAttributes|object|false|none|resourceAttributes describes information for a resource access request|

<h2 id="tocS_io.k8s.api.authorization.v1.SelfSubjectRulesReview">io.k8s.api.authorization.v1.SelfSubjectRulesReview</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.selfsubjectrulesreview"></a>
<a id="schema_io.k8s.api.authorization.v1.SelfSubjectRulesReview"></a>
<a id="tocSio.k8s.api.authorization.v1.selfsubjectrulesreview"></a>
<a id="tocsio.k8s.api.authorization.v1.selfsubjectrulesreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec holds information about the request being evaluated.|
|status|object|false|none|status is filled in by the server and indicates the set of actions a user can perform.|

<h2 id="tocS_io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec">io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.selfsubjectrulesreviewspec"></a>
<a id="schema_io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec"></a>
<a id="tocSio.k8s.api.authorization.v1.selfsubjectrulesreviewspec"></a>
<a id="tocsio.k8s.api.authorization.v1.selfsubjectrulesreviewspec"></a>

```json
{
  "namespace": "string"
}
```

SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|true|none|namespace to evaluate rules for. Required.|

<h2 id="tocS_io.k8s.api.authorization.v1.SubjectAccessReview">io.k8s.api.authorization.v1.SubjectAccessReview</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.subjectaccessreview"></a>
<a id="schema_io.k8s.api.authorization.v1.SubjectAccessReview"></a>
<a id="tocSio.k8s.api.authorization.v1.subjectaccessreview"></a>
<a id="tocsio.k8s.api.authorization.v1.subjectaccessreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {},
  "spec": {},
  "status": {}
}
```

SubjectAccessReview checks whether or not a user or group can perform an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|metadata|object|false|none|metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata|
|spec|object|true|none|spec holds information about the request being evaluated|
|status|object|false|none|status is filled in by the server and indicates whether the request is allowed or not|

<h2 id="tocS_io.k8s.api.authorization.v1.SubjectAccessReviewSpec">io.k8s.api.authorization.v1.SubjectAccessReviewSpec</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.subjectaccessreviewspec"></a>
<a id="schema_io.k8s.api.authorization.v1.SubjectAccessReviewSpec"></a>
<a id="tocSio.k8s.api.authorization.v1.subjectaccessreviewspec"></a>
<a id="tocsio.k8s.api.authorization.v1.subjectaccessreviewspec"></a>

```json
{
  "authorizationOptions": {
    "handledDecisionTypes": [
      "string"
    ]
  },
  "extra": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "groups": [
    "string"
  ],
  "nonResourceAttributes": {
    "path": "string",
    "verb": "string"
  },
  "resourceAttributes": {
    "fieldSelector": {
      "rawSelector": "string",
      "requirements": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ]
    },
    "group": "string",
    "labelSelector": {
      "rawSelector": "string",
      "requirements": [
        {
          "key": "",
          "operator": "",
          "values": [
            "string"
          ]
        }
      ]
    },
    "name": "string",
    "namespace": "string",
    "resource": "string",
    "subresource": "string",
    "verb": "string",
    "version": "string"
  },
  "uid": "string",
  "user": "string"
}
```

SubjectAccessReviewSpec is a description of the access request.  Exactly one of resourceAttributes and nonResourceAttributes must be set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationOptions|object|false|none|authorizationOptions contains options for specifying the client's authorization abilities. If unset, only unconditional authorization is supported, for backwards-compatibility. Requires the ConditionalAuthorization feature to be enabled.|
|extra|object|false|none|extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.|
|groups|[string]|false|none|groups is the groups you're testing for.|
|nonResourceAttributes|object|false|none|nonResourceAttributes describes information for a non-resource access request|
|resourceAttributes|object|false|none|resourceAttributes describes information for a resource access request|
|uid|string|false|none|uid information about the requesting user.|
|user|string|false|none|user is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups|

<h2 id="tocS_io.k8s.api.authorization.v1.SubjectAccessReviewStatus">io.k8s.api.authorization.v1.SubjectAccessReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.subjectaccessreviewstatus"></a>
<a id="schema_io.k8s.api.authorization.v1.SubjectAccessReviewStatus"></a>
<a id="tocSio.k8s.api.authorization.v1.subjectaccessreviewstatus"></a>
<a id="tocsio.k8s.api.authorization.v1.subjectaccessreviewstatus"></a>

```json
{
  "allowed": false,
  "conditionalDecision": {
    "allow": {
      "evaluationError": "string",
      "reason": "string"
    },
    "conditionsMap": {
      "allowConditions": [
        {
          "condition": "string",
          "description": "string",
          "id": "",
          "type": "string"
        }
      ],
      "denyConditions": [
        {
          "condition": "string",
          "description": "string",
          "id": "",
          "type": "string"
        }
      ],
      "noOpinionConditions": [
        {
          "condition": "string",
          "description": "string",
          "id": "",
          "type": "string"
        }
      ]
    },
    "deny": {
      "evaluationError": "string",
      "reason": "string"
    },
    "noOpinion": {
      "evaluationError": "string",
      "reason": "string"
    },
    "type": "",
    "union": [
      {}
    ]
  },
  "denied": true,
  "evaluationError": "string",
  "reason": "string"
}
```

SubjectAccessReviewStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|allowed is true if the action would be allowed, false otherwise. allowed=true is mutually exclusive with denied=true and conditionalDecision != nil.|
|conditionalDecision|object|false|none|conditionalDecision represents a conditional decision returned by the authorizer. When conditionalDecision is set, allowed, denied, reason and evaluationError must have their zero values. The top-level decision type should be ConditionsAwareDecisionTypeConditionsMap or ConditionsAwareDecisionTypeUnion, as Allow/Deny/NoOpinion decisions can be represented with SubjectAccessReviewStatus.Allowed and SubjectAccessReviewStatus.Denied alone. May only be set if spec.authorizationOptions.handledDecisionTypes includes `ConditionsMap` and `Union`. Requires the ConditionalAuthorization feature to be enabled.|
|denied|boolean|false|none|denied is optional. True if the action would be denied, otherwise false If allowed is false, denied is false, and conditionalDecision is unset, then the authorizer has no opinion on whether to authorize the action. denied=true is mutually exclusive with allowed=true and conditionalDecision != nil.|
|evaluationError|string|false|none|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|reason|string|false|none|reason is optional.  It indicates why a request was allowed or denied.|

<h2 id="tocS_io.k8s.api.authorization.v1.SubjectRulesReviewStatus">io.k8s.api.authorization.v1.SubjectRulesReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.subjectrulesreviewstatus"></a>
<a id="schema_io.k8s.api.authorization.v1.SubjectRulesReviewStatus"></a>
<a id="tocSio.k8s.api.authorization.v1.subjectrulesreviewstatus"></a>
<a id="tocsio.k8s.api.authorization.v1.subjectrulesreviewstatus"></a>

```json
{
  "evaluationError": "string",
  "incomplete": false,
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
      "resourceNames": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "verbs": [
        "string"
      ]
    }
  ]
}
```

SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationError|string|false|none|evaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.|
|incomplete|boolean|false|none|incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.|
|nonResourceRules|[[io.k8s.api.authorization.v1.NonResourceRule](#schemaio.k8s.api.authorization.v1.nonresourcerule)]|false|none|nonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.|
|resourceRules|[[io.k8s.api.authorization.v1.ResourceRule](#schemaio.k8s.api.authorization.v1.resourcerule)]|false|none|resourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.|

<h2 id="tocS_io.k8s.api.authorization.v1.UnconditionalDecision">io.k8s.api.authorization.v1.UnconditionalDecision</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.api.authorization.v1.unconditionaldecision"></a>
<a id="schema_io.k8s.api.authorization.v1.UnconditionalDecision"></a>
<a id="tocSio.k8s.api.authorization.v1.unconditionaldecision"></a>
<a id="tocsio.k8s.api.authorization.v1.unconditionaldecision"></a>

```json
{
  "evaluationError": "string",
  "reason": "string"
}
```

UnconditionalDecision represents the data associated with an unconditional decision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationError|string|false|none|evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.|
|reason|string|false|none|reason is optional. It indicates why a request was allowed or denied.|

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

<h2 id="tocS_io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement">io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement"></a>
<a id="schema_io.k8s.apimachinery.pkg.apis.meta.v1.FieldSelectorRequirement"></a>
<a id="tocSio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement"></a>
<a id="tocsio.k8s.apimachinery.pkg.apis.meta.v1.fieldselectorrequirement"></a>

```json
{
  "key": "",
  "operator": "",
  "values": [
    "string"
  ]
}
```

FieldSelectorRequirement is a selector that contains values, a key, and an operator that relates the key and values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|key is the field selector key that the requirement applies to.|
|operator|string|true|none|operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. The list of operators may grow in the future.|
|values|[string]|false|none|values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty.|

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
