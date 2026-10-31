import { createRoute, z } from '@hono/zod-openapi'

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EndpointSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An IPv4 or IPv6 address. Service Directory rejects bad addresses like: * `8.8.8` * `8.8.8.8:53` * `test:bad:address` * `[::1]` * `[::1]:8080` Limited to 45 characters.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the endpoint was created.',
        readOnly: true,
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Metadata for the endpoint. This data can be consumed by service clients. Restrictions: * The entire metadata dictionary may contain up to 512 characters, spread accoss all key-value pairs. Metadata that goes beyond this limit are rejected * Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements are rejected Note: This field is equivalent to the `annotations` field in the v1 API. They have the same syntax and read/write to the same location in Service Directory.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name for the endpoint in the format `projects/*/locations/*/namespaces/*/services/*/endpoints/*`.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The Google Compute Engine network (VPC) of the endpoint in the format `projects//locations/global/networks/*`. The project must be specified by project number (project id is rejected). Incorrectly formatted networks are rejected, but no other validation is performed on this field (ex. network or project existence, reachability, or permissions).',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Service Directory rejects values outside of `[0, 65535]`.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A globally unique identifier (in UUID4 format) for this endpoint.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the endpoint was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An individual endpoint that provides a service. The service must already exist to create an endpoint.',
    required: [],
  })
  .openapi('Endpoint')

const GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GetPolicyOptions')

const GetIamPolicyRequestSchema = z
  .object({
    options: GetPolicyOptionsSchema.exactOptional().openapi({
      description:
        'OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.',
    }),
  })
  .openapi({ description: 'Request message for `GetIamPolicy` method.', required: [] })
  .openapi('GetIamPolicyRequest')

const ListEndpointsResponseSchema = z
  .object({
    endpoints: z
      .array(EndpointSchema)
      .exactOptional()
      .openapi({ description: 'The list of endpoints.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({
    description: 'The response message for RegistrationService.ListEndpoints.',
    required: [],
  })
  .openapi('ListEndpointsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const NamespaceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the namespace was created.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name for the namespace in the format `projects/*/locations/*/namespaces/*`.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A globally unique identifier (in UUID4 format) for this namespace.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the namespace was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.',
    required: [],
  })
  .openapi('Namespace')

const ListNamespacesResponseSchema = z
  .object({
    namespaces: z
      .array(NamespaceSchema)
      .exactOptional()
      .openapi({ description: 'The list of namespaces.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({
    description: 'The response message for RegistrationService.ListNamespaces.',
    required: [],
  })
  .openapi('ListNamespacesResponse')

const ServiceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the service was created.',
        readOnly: true,
      }),
    endpoints: z
      .array(EndpointSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Endpoints associated with this service. Returned on LookupService.ResolveService. Control plane clients should use RegistrationService.ListEndpoints.',
        readOnly: true,
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Metadata for the service. This data can be consumed by service clients. Restrictions: * The entire metadata dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Metadata that goes beyond this limit are rejected * Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements are rejected Note: This field is equivalent to the `annotations` field in the v1 API. They have the same syntax and read/write to the same location in Service Directory.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name for the service in the format `projects/*/locations/*/namespaces/*/services/*`.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A globally unique identifier (in UUID4 format) for this service.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the service was last updated. Note: endpoints being created/deleted/updated within the service are not considered service updates for the purpose of this timestamp.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.',
    required: [],
  })
  .openapi('Service')

const ListServicesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    services: z
      .array(ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The list of services.' }),
  })
  .openapi({
    description: 'The response message for RegistrationService.ListServices.',
    required: [],
  })
  .openapi('ListServicesResponse')

const PolicySchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const ResolveServiceRequestSchema = z
  .object({
    endpointFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The filter applied to the endpoints of the resolved service. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, or `metadata.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns endpoints that have a annotation with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `name=projects/my-project/locations/us-central1/namespaces/my-namespace/services/my-service/endpoints/ep-1` returns the endpoint that has an endpoint_id equal to `ep-1` * `metadata.owner!=sd AND metadata.foo=bar` returns endpoints that have `owner` in annotation key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn\'t have a field called "doesnotexist". Since the filter does not match any endpoint, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160).',
      }),
    maxEndpoints: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used.',
      }),
  })
  .openapi({
    description:
      'The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.',
    required: [],
  })
  .openapi('ResolveServiceRequest')

const ResolveServiceResponseSchema = z
  .object({ service: ServiceSchema.exactOptional() })
  .openapi({ description: 'The response message for LookupService.ResolveService.', required: [] })
  .openapi('ResolveServiceResponse')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Gets an endpoint.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.endpoints.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the endpoint to get.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EndpointSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Deletes an endpoint.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.endpoints.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the endpoint to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates an endpoint.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.endpoints.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. List of fields to be updated in this request.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The resource name for the endpoint in the format `projects/*/locations/*/namespaces/*/services/*/endpoints/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EndpointSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'servicedirectory.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameResolveRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:resolve',
  tags: ['projects'],
  description:
    'Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.resolve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the service to resolve.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResolveServiceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResolveServiceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentEndpointsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/endpoints',
  tags: ['projects'],
  description: 'Lists all endpoints.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.endpoints.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, `metadata.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns endpoints that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns endpoints that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn\'t have a field called "doesnotexist". Since the filter does not match any endpoints, it returns no results * `attributes.kubernetes_resource_type=KUBERNETES_RESOURCE_TYPE_CLUSTER_ IP` returns endpoints with the corresponding kubernetes_resource_type For more information about filtering, see [API Filtering](https://aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows values: `name`, `address`, `port` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'Optional. The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the service whose endpoints you'd like to list.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListEndpointsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentEndpointsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/endpoints',
  tags: ['projects'],
  description: 'Creates an endpoint, and returns the new endpoint.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.endpoints.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      endpointId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.',
            in: 'query',
            name: 'endpointId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the service that this endpoint provides.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EndpointSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentNamespacesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/namespaces',
  tags: ['projects'],
  description: 'Lists all namespaces.',
  operationId: 'servicedirectory.projects.locations.namespaces.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `labels.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `labels.owner` returns namespaces that have a label with the key `owner`, this is the same as `labels:owner` * `labels.owner=sd` returns namespaces that have key/value `owner=sd` * `name>projects/my-project/locations/us-east1/namespaces/namespace-c` returns namespaces that have name that is alphabetically later than the string, so "namespace-e" is returned but "namespace-a" is not * `labels.owner!=sd AND labels.foo=bar` returns namespaces that have `owner` in label key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that namespace doesn\'t have a field called "doesnotexist". Since the filter does not match any namespaces, it returns no results * `attributes.managed_registration=true` returns namespaces that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'Optional. The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the project and location whose namespaces you'd like to list.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNamespacesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentNamespacesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/namespaces',
  tags: ['projects'],
  description: 'Creates a namespace, and returns the new namespace.',
  operationId: 'servicedirectory.projects.locations.namespaces.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      namespaceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.',
            in: 'query',
            name: 'namespaceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the project and location the namespace will be created in.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NamespaceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NamespaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentServicesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/services',
  tags: ['projects'],
  description: 'Lists all services belonging to a namespace.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name` or `metadata.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns services that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns services that have key/value `protocol=gRPC` * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns services that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that service doesn\'t have a field called "doesnotexist". Since the filter does not match any services, it returns no results * `attributes.managed_registration=true` returns services that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'Optional. The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the namespace whose services you'd like to list.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentServicesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/services',
  tags: ['projects'],
  description: 'Creates a service, and returns the new service.',
  operationId: 'servicedirectory.projects.locations.namespaces.services.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the namespace this service will belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description: 'Gets the IAM Policy for a resource',
  operationId: 'servicedirectory.projects.locations.registrationPolicies.getIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:setIamPolicy',
  tags: ['projects'],
  description: 'Sets the IAM Policy for a resource',
  operationId: 'servicedirectory.projects.locations.registrationPolicies.setIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Tests IAM permissions for a resource (namespace, service or service workload only).',
  operationId: 'servicedirectory.projects.locations.registrationPolicies.testIamPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
