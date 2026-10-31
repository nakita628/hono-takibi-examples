import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudServicebrokerV1beta1BindingSchema = z
  .object({
    bind_resource: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'A JSON object that contains data for platform resources associated with\nthe binding to be created.',
      }),
    binding_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the binding. Must be unique within GCP project.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp for when the binding was created.' }),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. String containing the Deployment Manager deployment name that was created\nfor this binding,',
      }),
    parameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Configuration options for the service binding.' }),
    plan_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the plan. See `Service` and `Plan` resources for details.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the binding, e.g.\nprojects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the service. Must be a valid identifier of a service\ncontained in the list from a `ListServices()` call.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
  })
  .openapi({ description: 'Describes the binding.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1Binding')

const GoogleCloudServicebrokerV1beta1BrokerSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp for when the broker was created.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the broker in the format:\n<projects>/<project-id>/brokers/<broker>.\nThis allows for multiple brokers per project which can be used to\nenable having custom brokers per GKE cluster, for example.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User friendly title of the broker.\nLimited to 1024 characters. Requests with longer titles will be rejected.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the broker OSB-compliant endpoint, for example:\nhttps://servicebroker.googleapis.com/projects/<project>/brokers/<broker>',
      }),
  })
  .openapi({
    description:
      'Broker represents a consumable collection of Service Registry catalogs\nexposed as an OSB Broker.',
    required: [],
  })
  .openapi('GoogleCloudServicebrokerV1beta1Broker')

const GoogleCloudServicebrokerV1beta1CreateBindingResponseSchema = z
  .object({
    credentials: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Credentials to use the binding.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If broker executes operation asynchronously, this is the operation ID that\ncan be polled to check the completion status of said operation.\nThis broker always executes all create/delete operations asynchronously.',
      }),
    route_service_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL to which the platform may proxy requests for the address sent with\nbind_resource.route',
      }),
    syslog_drain_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'From where to read system logs.' }),
    volume_mounts: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({ description: 'An array of configuration for mounting volumes.' }),
  })
  .openapi({ description: 'Response for the `CreateBinding()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1CreateBindingResponse')

const GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If broker executes operation asynchronously, this is the operation ID that\ncan be polled to check the completion status of said operation.\nThis broker always will return a non-empty operation on success.',
      }),
  })
  .openapi({ description: 'Response for the `CreateServiceInstance()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse')

const GoogleCloudServicebrokerV1beta1DashboardClientSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the Oauth client that the dashboard will use.' }),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI for the service dashboard.\nValidated by the OAuth token server when the dashboard requests a token.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'A secret for the dashboard client.' }),
  })
  .openapi({
    description: 'Message containing information required to activate Dashboard SSO feature.',
    required: [],
  })
  .openapi('GoogleCloudServicebrokerV1beta1DashboardClient')

const GoogleCloudServicebrokerV1beta1DeleteBindingResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If broker executes operation asynchronously, this is the operation ID that\ncan be polled to check the completion status of said operation.',
      }),
  })
  .openapi({ description: 'Response for the `DeleteBinding()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1DeleteBindingResponse')

const GoogleCloudServicebrokerV1beta1DeleteServiceInstanceResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If broker executes operation asynchronously, this is the operation ID that\ncan be polled to check the completion status of said operation.',
      }),
  })
  .openapi({ description: 'Response for the `DeleteServiceInstance()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1DeleteServiceInstanceResponse')

const GoogleCloudServicebrokerV1beta1GetBindingResponseSchema = z
  .object({
    credentials: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Credentials to use the binding.' }),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String containing the Deployment Manager deployment name that was created\nfor this binding,',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the binding, e.g.\nprojects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.',
      }),
    route_service_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL to which the platform may proxy requests for the address sent with\nbind_resource.route',
      }),
    syslog_drain_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'From where to read system logs.' }),
    volume_mounts: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({ description: 'An array of configurations for mounting volumes.' }),
  })
  .openapi({ description: 'Response for the `GetBinding()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1GetBindingResponse')

const GoogleCloudServicebrokerV1beta1ListBindingsResponseSchema = z
  .object({
    bindings: z
      .array(GoogleCloudServicebrokerV1beta1BindingSchema)
      .exactOptional()
      .openapi({ description: 'The list of bindings in the instance.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token allows you to get the next page of results for list requests.\nIf the number of results is larger than `pageSize`, use the `nextPageToken`\nas a value for the query parameter `pageToken` in the next list request.\nSubsequent list requests will have their own `nextPageToken` to continue\npaging through the results',
      }),
  })
  .openapi({ description: 'The response for the `ListBindings()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1ListBindingsResponse')

const GoogleCloudServicebrokerV1beta1ListBrokersResponseSchema = z
  .object({
    brokers: z
      .array(GoogleCloudServicebrokerV1beta1BrokerSchema)
      .exactOptional()
      .openapi({ description: 'The list of brokers in the container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token allows you to get the next page of results for list requests.\nIf the number of results is larger than `pageSize`, use the `nextPageToken`\nas a value for the query parameter `pageToken` in the next list request.\nSubsequent list requests will have their own `nextPageToken` to continue\npaging through the results',
      }),
  })
  .openapi({ description: 'The response for the `ListBrokers()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1ListBrokersResponse')

const GoogleCloudServicebrokerV1beta1PlanSchema = z
  .object({
    bindable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether instances of the service can be bound to applications.\nIf not specified, `Service.bindable` will be presumed.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description of the plan. Optional.' }),
    free: z.boolean().exactOptional().openapi({ description: 'Whether the service is free.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID is a globally unique identifier used to uniquely identify the plan.\nUser must make no presumption about the format of this field.',
      }),
    metadata: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'A list of metadata for a service offering.\nMetadata is an arbitrary JSON object.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User friendly name of the plan.\nThe name must be globally unique within GCP project.\nNote, which is different from ("This must be globally unique within a\nplatform marketplace").',
      }),
    schemas: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description: 'Schema definitions for service instances and bindings for the plan.',
      }),
  })
  .openapi({ description: 'Plan message describes a Service Plan.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1Plan')

const GoogleCloudServicebrokerV1beta1ServiceSchema = z
  .object({
    bindable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether instances of the service can be bound to applications.\nRequired.',
      }),
    binding_retrievable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the service provides an endpoint to get service bindings.',
      }),
    bindings_retrievable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the service provides an endpoint to get service bindings.',
      }),
    dashboard_client: GoogleCloudServicebrokerV1beta1DashboardClientSchema.exactOptional().openapi({
      description: 'Information to activate Dashboard SSO feature.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description of the service. Required.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID is a globally unique identifier used to uniquely identify the service.\nID is an opaque string.',
      }),
    instances_retrievable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the service provides an endpoint to get service instances.',
      }),
    metadata: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'A list of metadata for a service offering.\nMetadata is an arbitrary JSON object.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User friendly service name.\nName must match [a-z0-9]+ regexp.\nThe name must be globally unique within GCP project.\nNote, which is different from ("This must be globally unique within a\nplatform marketplace").\nRequired.',
      }),
    plan_updateable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the service supports upgrade/downgrade for some plans.' }),
    plans: z
      .array(GoogleCloudServicebrokerV1beta1PlanSchema)
      .exactOptional()
      .openapi({
        description: 'A list of plans for this service.\nAt least one plan is required.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Tags provide a flexible mechanism to expose a classification, attribute, or\nbase technology of a service.',
      }),
  })
  .openapi({
    description:
      'The resource model mostly follows the Open Service Broker API, as\ndescribed here:\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md\nThough due to Google Specifics it has additional optional fields.',
    required: [],
  })
  .openapi('GoogleCloudServicebrokerV1beta1Service')

const GoogleCloudServicebrokerV1beta1ListCatalogResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token allows you to get the next page of results for list requests.\nIf the number of results is larger than `pageSize`, use the `nextPageToken`\nas a value for the query parameter `pageToken` in the next list request.\nSubsequent list requests will have their own `nextPageToken` to continue\npaging through the results',
      }),
    services: z
      .array(GoogleCloudServicebrokerV1beta1ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The services available for the requested GCP project.' }),
  })
  .openapi({ description: 'Response message for the `ListCatalog()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1ListCatalogResponse')

const GoogleCloudServicebrokerV1beta1ServiceInstanceSchema = z
  .object({
    context: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Platform specific contextual information under which the service instance\nis to be provisioned. This replaces organization_guid and space_guid.\nBut can also contain anything.\nCurrently only used for logging context information.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp for when the instance was created.' }),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. String containing the Deployment Manager deployment name that was created\nfor this instance,',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'To return errors when GetInstance call is done via HTTP to be unified with\nother methods.',
      }),
    instance_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the service instance. Must be unique within GCP project.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
    organization_guid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The platform GUID for the organization under which the service is to be\nprovisioned.\nRequired.',
      }),
    parameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Configuration options for the service instance.\nParameters is JSON object serialized to string.',
      }),
    plan_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the plan. See `Service` and `Plan` resources for details.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
    previous_values: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Used only in UpdateServiceInstance request to optionally specify previous\nfields.',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the instance, e.g.\nprojects/project_id/brokers/broker_id/service_instances/instance_id',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the service. Must be a valid identifier of a service\ncontained in the list from a `ListServices()` call.\nMaximum length is 64, GUID recommended.\nRequired.',
      }),
    space_guid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for the project space within the platform organization.\nRequired.',
      }),
  })
  .openapi({
    description: 'Message describing inputs to Provision and Update Service instance requests.',
    required: [],
  })
  .openapi('GoogleCloudServicebrokerV1beta1ServiceInstance')

const GoogleCloudServicebrokerV1beta1ListServiceInstancesResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    instances: z
      .array(GoogleCloudServicebrokerV1beta1ServiceInstanceSchema)
      .exactOptional()
      .openapi({ description: 'The list of instances in the broker.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token allows you to get the next page of results for list requests.\nIf the number of results is larger than `pageSize`, use the `nextPageToken`\nas a value for the query parameter `pageToken` in the next list request.\nSubsequent list requests will have their own `nextPageToken` to continue\npaging through the results',
      }),
  })
  .openapi({ description: 'The response for the `ListServiceInstances()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse')

const GoogleCloudServicebrokerV1beta1OperationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional description of the Operation state.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of the operation.\nValid values are: "in progress", "succeeded", and "failed".',
      }),
  })
  .openapi({
    description: 'Describes a long running operation, which conforms to OpenService API.',
    required: [],
  })
  .openapi('GoogleCloudServicebrokerV1beta1Operation')

const GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to communicate description of the response. Usually for non-standard\nerror codes.\nhttps://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If broker executes operation asynchronously, this is the operation ID that\ncan be polled to check the completion status of said operation.',
      }),
  })
  .openapi({ description: 'Response for the `UpdateServiceInstance()` method.', required: [] })
  .openapi('GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse')

const GoogleTypeExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional description of the expression. This is a longer text which\ndescribes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in\nCommon Expression Language syntax.\n\nThe application context of the containing message determines which\nwell-known feature set of CEL is supported.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional string indicating the location of the expression for error\nreporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional title for the expression, i.e. a short string describing\nits purpose. This can be used e.g. in UIs which allow to enter the\nexpression.',
      }),
  })
  .openapi({
    description:
      'Represents an expression text. Example:\n\n    title: "User account presence"\n    description: "Determines whether the request has a user account"\n    expression: "size(request.user) > 0"',
    required: [],
  })
  .openapi('GoogleTypeExpr')

const GoogleIamV1BindingSchema = z
  .object({
    condition: GoogleTypeExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding.\nNOTE: An unsatisfied condition will not allow user access via current\nbinding. Different bindings, including their conditions, are examined\nindependently.',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities requesting access for a Cloud Platform resource.\n`members` can have the following values:\n\n* `allUsers`: A special identifier that represents anyone who is\n   on the internet; with or without a Google account.\n\n* `allAuthenticatedUsers`: A special identifier that represents anyone\n   who is authenticated with a Google account or a service account.\n\n* `user:{emailid}`: An email address that represents a specific Google\n   account. For example, `alice@example.com` .\n\n\n* `serviceAccount:{emailid}`: An email address that represents a service\n   account. For example, `my-other-app@appspot.gserviceaccount.com`.\n\n* `group:{emailid}`: An email address that represents a Google group.\n   For example, `admins@example.com`.\n\n* `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique\n   identifier) representing a user that has been recently deleted. For\n   example, `alice@example.com?uid=123456789012345678901`. If the user is\n   recovered, this value reverts to `user:{emailid}` and the recovered user\n   retains the role in the binding.\n\n* `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus\n   unique identifier) representing a service account that has been recently\n   deleted. For example,\n   `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.\n   If the service account is undeleted, this value reverts to\n   `serviceAccount:{emailid}` and the undeleted service account retains the\n   role in the binding.\n\n* `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique\n   identifier) representing a Google group that has been recently\n   deleted. For example, `admins@example.com?uid=123456789012345678901`. If\n   the group is recovered, this value reverts to `group:{emailid}` and the\n   recovered group retains the role in the binding.\n\n\n* `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.\n\n',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to `members`.\nFor example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members` with a `role`.', required: [] })
  .openapi('GoogleIamV1Binding')

const GoogleIamV1PolicySchema = z
  .object({
    bindings: z
      .array(GoogleIamV1BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members` to a `role`. Optionally, may specify a\n`condition` that determines how and when the `bindings` are applied. Each\nof the `bindings` must contain at least one member.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help\nprevent simultaneous updates of a policy from overwriting each other.\nIt is strongly suggested that systems make use of the `etag` in the\nread-modify-write cycle to perform policy updates in order to avoid race\nconditions: An `etag` is returned in the response to `getIamPolicy`, and\nsystems are expected to put that etag in the request to `setIamPolicy` to\nensure that their change will be applied to the same version of the policy.\n\n**Important:** If you use IAM Conditions, you must include the `etag` field\nwhenever you call `setIamPolicy`. If you omit this field, then IAM allows\nyou to overwrite a version `3` policy with a version `1` policy, and all of\nthe conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy.\n\nValid values are `0`, `1`, and `3`. Requests that specify an invalid value\nare rejected.\n\nAny operation that affects conditional role bindings must specify version\n`3`. This requirement applies to the following operations:\n\n* Getting a policy that includes a conditional role binding\n* Adding a conditional role binding to a policy\n* Changing a conditional role binding in a policy\n* Removing any role binding, with or without a condition, from a policy\n  that includes conditions\n\n**Important:** If you use IAM Conditions, you must include the `etag` field\nwhenever you call `setIamPolicy`. If you omit this field, then IAM allows\nyou to overwrite a version `3` policy with a version `1` policy, and all of\nthe conditions in the version `3` policy are lost.\n\nIf a policy does not include any conditions, operations on that policy may\nspecify any valid version or leave the field unset.',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access\ncontrols for Google Cloud resources.\n\n\nA `Policy` is a collection of `bindings`. A `binding` binds one or more\n`members` to a single `role`. Members can be user accounts, service accounts,\nGoogle groups, and domains (such as G Suite). A `role` is a named list of\npermissions; each `role` can be an IAM predefined role or a user-created\ncustom role.\n\nOptionally, a `binding` can specify a `condition`, which is a logical\nexpression that allows access to a resource only if the expression evaluates\nto `true`. A condition can add constraints based on attributes of the\nrequest, the resource, or both.\n\n**JSON example:**\n\n    {\n      "bindings": [\n        {\n          "role": "roles/resourcemanager.organizationAdmin",\n          "members": [\n            "user:mike@example.com",\n            "group:admins@example.com",\n            "domain:google.com",\n            "serviceAccount:my-project-id@appspot.gserviceaccount.com"\n          ]\n        },\n        {\n          "role": "roles/resourcemanager.organizationViewer",\n          "members": ["user:eve@example.com"],\n          "condition": {\n            "title": "expirable access",\n            "description": "Does not grant access after Sep 2020",\n            "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')",\n          }\n        }\n      ],\n      "etag": "BwWWja0YfJA=",\n      "version": 3\n    }\n\n**YAML example:**\n\n    bindings:\n    - members:\n      - user:mike@example.com\n      - group:admins@example.com\n      - domain:google.com\n      - serviceAccount:my-project-id@appspot.gserviceaccount.com\n      role: roles/resourcemanager.organizationAdmin\n    - members:\n      - user:eve@example.com\n      role: roles/resourcemanager.organizationViewer\n      condition:\n        title: expirable access\n        description: Does not grant access after Sep 2020\n        expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\')\n    - etag: BwWWja0YfJA=\n    - version: 3\n\nFor a description of IAM and its features, see the\n[IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('GoogleIamV1Policy')

const GoogleIamV1SetIamPolicyRequestSchema = z
  .object({
    policy: GoogleIamV1PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of\nthe policy is limited to a few 10s of KB. An empty policy is a\nvalid policy but certain Cloud Platform services (such as Projects)\nmight reject them.',
    }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('GoogleIamV1SetIamPolicyRequest')

const GoogleIamV1TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The set of permissions to check for the `resource`. Permissions with\nwildcards (such as '*' or 'storage.*') are not allowed. For more\ninformation see\n[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).",
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsRequest')

const GoogleIamV1TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A subset of `TestPermissionsRequest.permissions` that the caller is\nallowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.',
  })
  .openapi('GoogleProtobufEmpty')

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
  .default('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { default: 'json', enum: ['json', 'media', 'proto'], type: 'string' },
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
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { default: true, type: 'boolean' },
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

const GoogleCloudServicebrokerV1beta1ServiceInstanceRequestBody = {
  content: { 'application/json': { schema: GoogleCloudServicebrokerV1beta1ServiceInstanceSchema } },
}

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 accessCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
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
  description: 'GetBinding returns the binding information.',
  operationId: 'servicebroker.projects.brokers.v2.service_instances.service_bindings.get',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Plan id.',
            in: 'query',
            name: 'planId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Service id.',
            in: 'query',
            name: 'serviceId',
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
              'Name must match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_bindings`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1GetBindingResponseSchema } },
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
  description:
    'Unbinds from a service instance.\nFor synchronous/asynchronous request details see CreateServiceInstance\nmethod.\nIf binding does not exist HTTP 410 status will be returned.',
  operationId: 'servicebroker.projects.brokers.v2.service_instances.service_bindings.delete',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      acceptsIncomplete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'See CreateServiceInstanceRequest for details.',
            in: 'query',
            name: 'acceptsIncomplete',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The plan id of the service instance.',
            in: 'query',
            name: 'planId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Additional query parameter hints.\nThe service id of the service instance.',
            in: 'query',
            name: 'serviceId',
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
              'Name must match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/`\n`v2/service_instances/[INSTANCE_ID]/service_bindings/[BINDING_ID]`\nor\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/`\n`/instances/[INSTANCE_ID]/bindings/[BINDING_ID]`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1DeleteBindingResponseSchema } },
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
  description:
    'Updates an existing service instance.\nSee CreateServiceInstance for possible response codes.',
  operationId: 'servicebroker.projects.brokers.v2.service_instances.patch',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      acceptsIncomplete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'See CreateServiceInstanceRequest for details.',
            in: 'query',
            name: 'acceptsIncomplete',
            schema: { type: 'boolean' },
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
              'Name must match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudServicebrokerV1beta1ServiceInstanceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        '*/*': { schema: GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLastOperationRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/last_operation',
  tags: ['projects'],
  description:
    'Returns the state of the last operation for the binding.\nOnly last (or current) operation can be polled.',
  operationId:
    'servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      operation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `operation` was returned during mutation operation, this field must be\npopulated with the provided value.',
            in: 'query',
            name: 'operation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Plan id.',
            in: 'query',
            name: 'planId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Service id.',
            in: 'query',
            name: 'serviceId',
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
              'Name must match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_binding/[BINDING_ID]`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentBindingsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/bindings',
  tags: ['projects'],
  description: 'Lists all the bindings in the instance.',
  operationId: 'servicebroker.projects.brokers.instances.bindings.list',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
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
              'Specifies the number of results to return per page. If there are fewer\nelements than the specified number, returns all elements.\nOptional. Acceptable values are 0 to 200, inclusive. (Default: 100)',
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
              'Specifies a page token to use. Set `pageToken` to a `nextPageToken`\nreturned by a previous list request to get the next page of results.',
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
              'Parent must match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/` +\n`v2/service_instances/[INSTANCE_ID]`\nor\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1ListBindingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentBrokersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/brokers',
  tags: ['projects'],
  description: 'ListBrokers lists brokers.',
  operationId: 'servicebroker.projects.brokers.list',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
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
              'Specifies the number of results to return per page. If there are fewer\nelements than the specified number, returns all elements.\nOptional. Acceptable values are 0 to 200, inclusive. (Default: 100)',
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
              'Specifies a page token to use. Set `pageToken` to a `nextPageToken`\nreturned by a previous list request to get the next page of results.',
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
            description: 'Parent must match `projects/[PROJECT_ID]/brokers`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1ListBrokersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentBrokersRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/brokers',
  tags: ['projects'],
  description: 'CreateBroker creates a Broker.',
  operationId: 'servicebroker.projects.brokers.create',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The project in which to create broker.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudServicebrokerV1beta1BrokerSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1BrokerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/instances',
  tags: ['projects'],
  description:
    'Lists all the instances in the brokers\nThis API is an extension and not part of the OSB spec.\nHence the path is a standard Google API URL.',
  operationId: 'servicebroker.projects.brokers.instances.list',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
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
              'Specifies the number of results to return per page. If there are fewer\nelements than the specified number, returns all elements.\nOptional. Acceptable values are 0 to 200, inclusive. (Default: 100)',
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
              'Specifies a page token to use. Set `pageToken` to a `nextPageToken`\nreturned by a previous list request to get the next page of results.',
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
            description: 'Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        '*/*': { schema: GoogleCloudServicebrokerV1beta1ListServiceInstancesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1ParentServiceBindingsBindingIdRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{parent}/service_bindings/{binding_id}',
  tags: ['projects'],
  description:
    'CreateBinding generates a service binding to an existing service instance.\nSee ProviServiceInstance for async operation details.',
  operationId: 'servicebroker.projects.brokers.v2.service_instances.service_bindings.create',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      acceptsIncomplete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'See CreateServiceInstanceRequest for details.',
            in: 'query',
            name: 'acceptsIncomplete',
            schema: { type: 'boolean' },
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
              'The GCP container.\nMust match\n`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
      binding_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the binding. Must be unique within GCP project.\nMaximum length is 64, GUID recommended.\nRequired.',
            in: 'path',
            name: 'binding_id',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudServicebrokerV1beta1BindingSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1CreateBindingResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentV2CatalogRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/v2/catalog',
  tags: ['projects'],
  description:
    'Lists all the Services registered with this broker for consumption for\ngiven service registry broker, which contains an set of services.\nNote, that Service producer API is separate from Broker API.',
  operationId: 'servicebroker.projects.brokers.v2.catalog.list',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
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
              'Specifies the number of results to return per page. If there are fewer\nelements than the specified number, returns all elements.\nOptional. If unset or 0, all the results will be returned.',
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
              'Specifies a page token to use. Set `pageToken` to a `nextPageToken`\nreturned by a previous list request to get the next page of results.',
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
            description: 'Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudServicebrokerV1beta1ListCatalogResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1ParentV2ServiceInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{parent}/v2/service_instances/{instance_id}',
  tags: ['projects'],
  description:
    'Provisions a service instance.\nIf `request.accepts_incomplete` is false and Broker cannot execute request\nsynchronously HTTP 422 error will be returned along with\nFAILED_PRECONDITION status.\nIf `request.accepts_incomplete` is true and the Broker decides to execute\nresource asynchronously then HTTP 202 response code will be returned and a\nvalid polling operation in the response will be included.\nIf Broker executes the request synchronously and it succeeds HTTP 201\nresponse will be furnished.\nIf identical instance exists, then HTTP 200 response will be returned.\nIf an instance with identical ID but mismatching parameters exists, then\nHTTP 409 status code will be returned.',
  operationId: 'servicebroker.projects.brokers.v2.service_instances.create',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      acceptsIncomplete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value indicating that API client supports asynchronous operations. If\nBroker cannot execute the request synchronously HTTP 422 code will be\nreturned to HTTP clients along with FAILED_PRECONDITION error.\nIf true and broker will execute request asynchronously 202 HTTP code will\nbe returned.\nThis broker always requires this to be true as all mutator operations are\nasynchronous.',
            in: 'query',
            name: 'acceptsIncomplete',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
      instance_id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the service instance. Must be unique within GCP project.\nMaximum length is 64, GUID recommended.\nRequired.',
            in: 'path',
            name: 'instance_id',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudServicebrokerV1beta1ServiceInstanceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        '*/*': { schema: GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['v1beta1'],
  description:
    'Gets the access control policy for a resource.\nReturns an empty policy if the resource exists and does not have a policy\nset.',
  operationId: 'servicebroker.getIamPolicy',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      'options.requestedPolicyVersion': z
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
              'Optional. The policy format version to be returned.\n\nValid values are 0, 1, and 3. Requests specifying an invalid value will be\nrejected.\n\nRequests for policies with any conditional bindings must specify version 3.\nPolicies without any conditional bindings may specify any valid value or\nleave the field unset.',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested.\nSee the operation documentation for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleIamV1PolicySchema } },
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
  tags: ['v1beta1'],
  description:
    'Sets the access control policy on the specified resource. Replaces any\nexisting policy.\n\nCan return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED',
  operationId: 'servicebroker.setIamPolicy',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified.\nSee the operation documentation for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleIamV1SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleIamV1PolicySchema } },
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
  tags: ['v1beta1'],
  description:
    'Returns permissions that a caller has on the specified resource.\nIf the resource does not exist, this will return an empty set of\npermissions, not a NOT_FOUND error.\n\nNote: This operation is designed to be used for building permission-aware\nUIs and command-line tools, not for authorization checking. This operation\nmay "fail open" without warning.',
  operationId: 'servicebroker.testIamPermissions',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callback: CallbackParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      '$.xgafv': XgafvParamsSchema,
      alt: AltParamsSchema,
      access_token: AccessTokenParamsSchema,
      key: KeyParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested.\nSee the operation documentation for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleIamV1TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
