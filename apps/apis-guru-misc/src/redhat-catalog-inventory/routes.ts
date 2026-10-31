import { createRoute, z } from '@hono/zod-openapi'

const AppliedInventoriesParametersServicePlanSchema = z
  .strictObject({
    service_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The provider specific parameters needed to compute list of used service inventories',
      }),
  })
  .openapi({ required: [] })
  .openapi('AppliedInventoriesParametersServicePlan')

const UUIDSchema = z.uuid().openapi({ description: 'UUID of task', readOnly: true }).openapi('UUID')

const IDSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({ description: 'ID of the resource', readOnly: true })
  .openapi('ID')

const TaskSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    child_task_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    controller_message_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    id: UUIDSchema.exactOptional(),
    input: z
      .object({})
      .exactOptional()
      .openapi({ example: 'Task payload input content', readOnly: true, title: 'Content' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'received message starting inventory collection', title: 'Message' }),
    name: z.string().exactOptional().openapi({ example: 'Order Service Plan', title: 'Name' }),
    output: z
      .object({})
      .exactOptional()
      .openapi({ example: 'Result of Task Execution', title: 'Result' }),
    owner: z.string().exactOptional().openapi({ example: 'jdoe', readOnly: true, title: 'Owner' }),
    source_id: IDSchema.exactOptional(),
    state: z
      .enum(['pending', 'queued', 'running', 'timedout', 'completed'])
      .exactOptional()
      .openapi({ example: 'running', title: 'State' }),
    status: z
      .enum(['ok', 'warn', 'unchanged', 'error'])
      .exactOptional()
      .openapi({ example: 'error', title: 'Status' }),
    target_source_ref: z.string().exactOptional(),
    target_type: z.string().exactOptional(),
    type: z.string().exactOptional().openapi({ example: 'CloudConnectorTask', title: 'Type' }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Task')

const CheckAvailabilityTaskSchema = TaskSchema.openapi('CheckAvailabilityTask')

const CollectionLinksSchema = z
  .object({
    first: z.string().exactOptional(),
    last: z.string().exactOptional(),
    next: z.string().exactOptional(),
    prev: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionLinks')

const CollectionMetadataSchema = z
  .object({
    count: z.int().exactOptional(),
    limit: z.int().exactOptional(),
    offset: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionMetadata')

const ErrorNotFoundSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            detail: z.string().exactOptional().openapi({ example: 'Record not found' }),
            status: z.string().exactOptional().openapi({ example: '404' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorNotFound')

const FullRefreshPersisterTaskSchema = TaskSchema.openapi('FullRefreshPersisterTask')

const FullRefreshUploadTaskSchema = TaskSchema.openapi('FullRefreshUploadTask')

const GraphQLRequestSchema = z
  .object({
    operationName: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'If the Query contains several named operations, the operationName controls which one should be executed',
      }),
    query: z.string().default('{}').openapi({ description: 'The GraphQL query' }),
    variables: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional Query variables' }),
  })
  .openapi({ required: ['query'] })
  .openapi('GraphQLRequest')

const GraphQLResponseSchema = z
  .object({
    data: z.object({}).exactOptional().openapi({ description: 'Results from the GraphQL query' }),
    errors: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'Errors resulting from the GraphQL query' }),
  })
  .openapi({ required: [] })
  .openapi('GraphQLResponse')

const IncrementalRefreshUploadTaskSchema = TaskSchema.openapi('IncrementalRefreshUploadTask')

const LaunchJobTaskSchema = TaskSchema.openapi('LaunchJobTask')

const OrderParametersServiceOfferingSchema = z
  .strictObject({
    provider_control_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The provider specific parameters needed to provision this service. This might include namespaces, special keys',
      }),
    service_parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON object with provisioning parameters' }),
    service_plan_id: IDSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderParametersServiceOffering')

const OrderParametersServicePlanSchema = z
  .strictObject({
    provider_control_parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The provider specific parameters needed to provision this service. This might include namespaces, special keys',
      }),
    service_parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON object with provisioning parameters' }),
  })
  .openapi({ required: [] })
  .openapi('OrderParametersServicePlan')

const ServiceCredentialSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    refresh_state_part_id: IDSchema.exactOptional(),
    service_credential_type_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional().openapi({ readOnly: true }),
    source_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    type_name: z.string().exactOptional().openapi({ readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceCredential')

const ServiceCredentialTypeSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    id: IDSchema.exactOptional(),
    kind: z.string().exactOptional().openapi({ readOnly: true }),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    namespace: z.string().exactOptional().openapi({ readOnly: true }),
    refresh_state_part_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_deleted_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional().openapi({ readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceCredentialType')

const ServiceCredentialTypesCollectionSchema = z
  .object({
    data: z.array(ServiceCredentialTypeSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceCredentialTypesCollection')

const ServiceCredentialsCollectionSchema = z
  .object({
    data: z.array(ServiceCredentialSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceCredentialsCollection')

const ServiceInstanceSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    external_url: z.string().exactOptional().openapi({ readOnly: true }),
    extra: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Extra information about this object in JSON format',
        readOnly: true,
      }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Sample ServiceInstance', readOnly: true, title: 'Name' }),
    refresh_state_part_id: IDSchema.exactOptional(),
    root_service_instance_id: IDSchema.exactOptional(),
    service_inventory_id: IDSchema.exactOptional(),
    service_offering_id: IDSchema.exactOptional(),
    service_plan_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_deleted_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z.uuid().exactOptional().openapi({ readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceInstance')

const ServiceInstanceNodeSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    extra: z.object({}).exactOptional(),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    refresh_state_part_id: IDSchema.exactOptional(),
    root_service_instance_id: IDSchema.exactOptional(),
    service_instance_id: IDSchema.exactOptional(),
    service_inventory_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional(),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional(),
    source_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceInstanceNode')

const ServiceInstanceNodesCollectionSchema = z
  .object({
    data: z.array(ServiceInstanceNodeSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceInstanceNodesCollection')

const ServiceInstancesCollectionSchema = z
  .object({
    data: z.array(ServiceInstanceSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceInstancesCollection')

const ServiceInventorySchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    extra: z.object({}).exactOptional().openapi({ readOnly: true }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    refresh_state_part_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional().openapi({ readOnly: true }),
    source_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceInventory')

const ServiceInventoriesCollectionSchema = z
  .object({
    data: z.array(ServiceInventorySchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceInventoriesCollection')

const ServiceOfferingSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'This is a short description', readOnly: true, title: 'Description' }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ example: 'MariaDB (Ephemeral)', readOnly: true, title: 'Display Name' }),
    distributor: z
      .string()
      .exactOptional()
      .openapi({ example: 'Red Hat, Inc.', readOnly: true, title: 'Distributor' }),
    documentation_url: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md',
        readOnly: true,
        title: 'Documentation URL',
      }),
    extra: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Extra information about this object in JSON format',
        readOnly: true,
      }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    long_description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'This template provides a standalone MariaDB server with a database created...',
        readOnly: true,
        title: 'Long Description',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Sample Service Offering', readOnly: true, title: 'Name' }),
    refresh_state_part_id: IDSchema.exactOptional(),
    service_inventory_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_deleted_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The native reference used by the Source to refer to this object',
        example: 'object-12345_67890',
        readOnly: true,
        title: 'Source reference',
      }),
    support_url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://access.redhat.com', readOnly: true, title: 'Support URL' }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceOffering')

const ServiceOfferingIconSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Raw icon data', readOnly: true, title: 'Icon Data' }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    refresh_state_part_id: IDSchema.exactOptional(),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional().openapi({ example: 'icon-mariadb', readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceOfferingIcon')

const ServiceOfferingIconsCollectionSchema = z
  .object({
    data: z.array(ServiceOfferingIconSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceOfferingIconsCollection')

const ServiceOfferingNodeSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    extra: z.object({}).exactOptional(),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    refresh_state_part_id: IDSchema.exactOptional(),
    root_service_offering_id: IDSchema.exactOptional(),
    service_inventory_id: IDSchema.exactOptional(),
    service_offering_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional(),
    source_id: IDSchema.exactOptional(),
    source_ref: z.string().exactOptional(),
    source_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServiceOfferingNode')

const ServiceOfferingNodesCollectionSchema = z
  .object({
    data: z.array(ServiceOfferingNodeSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceOfferingNodesCollection')

const ServiceOfferingsCollectionSchema = z
  .object({
    data: z.array(ServiceOfferingSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceOfferingsCollection')

const ServicePlanSchema = z
  .strictObject({
    archived_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    create_json_schema: z.object({}).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'This is a sample description for a provider',
        readOnly: true,
        title: 'Description',
      }),
    extra: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Extra information about this object in JSON format',
        readOnly: true,
      }),
    id: IDSchema.exactOptional(),
    last_seen_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Sample Provider', readOnly: true, title: 'Name' }),
    refresh_state_part_id: IDSchema.exactOptional(),
    resource_version: z.string().exactOptional().openapi({ readOnly: true }),
    service_offering_id: IDSchema.exactOptional(),
    source_created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_deleted_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    source_id: IDSchema.exactOptional(),
    source_ref: z.uuid().exactOptional().openapi({ readOnly: true }),
    update_json_schema: z.string().exactOptional().openapi({ readOnly: true }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ServicePlan')

const ServicePlansCollectionSchema = z
  .object({
    data: z.array(ServicePlanSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServicePlansCollection')

const SourceSchema = z
  .strictObject({
    archived_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Archived' }),
    availability_message: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Availability Message' }),
    availability_status: z
      .string()
      .exactOptional()
      .openapi({ example: 'The availability status of source', title: 'Availability Status' }),
    cloud_connector_id: z
      .string()
      .exactOptional()
      .openapi({
        example: 'The GUID of the RedHat connect client being used',
        readOnly: true,
        title: 'RedHat Connect Client Id',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Created' }),
    enabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Enabled' }),
    id: IDSchema.exactOptional(),
    info: z
      .object({})
      .exactOptional()
      .openapi({ example: 'The version of Tower being used', readOnly: true, title: 'Info' }),
    last_available_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Last available' }),
    last_checked_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Last checked' }),
    last_refresh_message: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Last refresh message' }),
    last_successful_refresh_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Last successful refresh' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'The Source Name', readOnly: true, title: 'Name' }),
    previous_sha: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'SHA of previous uploaded files' }),
    previous_size: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Size of previous uploaded files' }),
    refresh_finished_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Refresh finished' }),
    refresh_started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Refresh started' }),
    refresh_state: z.string().exactOptional().openapi({ title: 'Refresh state' }),
    refresh_task_id: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Refresh task' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Unique ID of the inventory source installation' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Updated' }),
  })
  .openapi({ required: [] })
  .openapi('Source')

const SourcesCollectionSchema = z
  .object({
    data: z.array(SourceSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourcesCollection')

const TagSchema = z
  .strictObject({
    tag: z.string().exactOptional().openapi({ example: '/namespace/architecture=x86_64' }),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TagsCollectionSchema = z
  .object({
    data: z.array(TagSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagsCollection')

const TasksCollectionSchema = z
  .object({
    data: z.array(TaskSchema).exactOptional(),
    links: CollectionLinksSchema.exactOptional(),
    meta: CollectionMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TasksCollection')

const TenantSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Description of the Tenant', readOnly: true }),
    external_tenant: z
      .string()
      .exactOptional()
      .openapi({ example: 'External tenant identifier', readOnly: true }),
    id: IDSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Sample Tenant', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Tenant')

const TowingTaskSchema = TaskSchema.openapi('TowingTask')

const IDParamsSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({
    param: {
      description: 'ID of the resource',
      in: 'path',
      name: 'id',
      required: true,
      schema: { pattern: '^\\d+$', type: 'string' },
    },
  })

const QueryFilterParamsSchema = z
  .object({})
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter for querying collections.',
      explode: true,
      in: 'query',
      name: 'filter',
      required: false,
      schema: { type: 'object' },
      style: 'deepObject',
    },
  })

const QueryLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: 'The numbers of items to return per page.',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
    },
  })

const QueryOffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of items to skip before starting to collect the result set.',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { default: 0, minimum: 0, type: 'integer' },
    },
  })

const QuerySortByParamsSchema = z
  .object({})
  .exactOptional()
  .openapi({
    param: {
      description: 'The list of attribute and order to sort the result set by.',
      explode: true,
      in: 'query',
      name: 'sort_by',
      required: false,
      schema: { type: 'object' },
      style: 'deepObject',
    },
  })

const UUIDParamsSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi({
    param: {
      description: 'UUID of task',
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        pattern: '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}',
        type: 'string',
      },
    },
  })

const UserSecuritySecurityScheme = { scheme: 'basic', type: 'http' }

export const postGraphqlRoute = createRoute({
  method: 'post',
  path: '/graphql',
  summary: 'Perform a GraphQL Query',
  description: 'Performs a GraphQL Query',
  operationId: 'postGraphQL',
  request: {
    body: {
      description: 'GraphQL Query Request',
      content: { 'application/json': { schema: GraphQLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'GraphQL Query Response',
      content: { 'application/json': { schema: GraphQLResponseSchema } },
    },
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  summary: 'Return this API document in JSON format',
  operationId: 'getDocumentation',
  responses: {
    200: {
      description: 'The API document for this version of the API',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const getServiceCredentialTypesRoute = createRoute({
  method: 'get',
  path: '/service_credential_types',
  tags: ['ServiceCredentialType'],
  summary: 'List ServiceCredentialTypes',
  description: 'Returns an array of ServiceCredentialType objects',
  operationId: 'listServiceCredentialTypes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceCredentialTypes collection',
      content: { 'application/json': { schema: ServiceCredentialTypesCollectionSchema } },
    },
  },
})

export const getServiceCredentialTypesIdRoute = createRoute({
  method: 'get',
  path: '/service_credential_types/{id}',
  tags: ['ServiceCredentialType'],
  summary: 'Show an existing ServiceCredentialType',
  description: 'Returns a ServiceCredentialType object',
  operationId: 'showServiceCredentialType',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceCredentialType info',
      content: { 'application/json': { schema: ServiceCredentialTypeSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceCredentialsRoute = createRoute({
  method: 'get',
  path: '/service_credentials',
  tags: ['ServiceCredential'],
  summary: 'List ServiceCredentials',
  description: 'Returns an array of ServiceCredential objects',
  operationId: 'listServiceCredentials',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceCredentials collection',
      content: { 'application/json': { schema: ServiceCredentialsCollectionSchema } },
    },
  },
})

export const getServiceCredentialsIdRoute = createRoute({
  method: 'get',
  path: '/service_credentials/{id}',
  tags: ['ServiceCredential'],
  summary: 'Show an existing ServiceCredential',
  description: 'Returns a ServiceCredential object',
  operationId: 'showServiceCredential',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceCredential info',
      content: { 'application/json': { schema: ServiceCredentialSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceInstancesRoute = createRoute({
  method: 'get',
  path: '/service_instances',
  tags: ['ServiceInstance'],
  summary: 'List ServiceInstances',
  description: 'Returns an array of ServiceInstance objects',
  operationId: 'listServiceInstances',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceInstances collection',
      content: { 'application/json': { schema: ServiceInstancesCollectionSchema } },
    },
  },
})

export const getServiceInstancesIdRoute = createRoute({
  method: 'get',
  path: '/service_instances/{id}',
  tags: ['ServiceInstance'],
  summary: 'Show an existing ServiceInstance',
  description: 'Returns a ServiceInstance object',
  operationId: 'showServiceInstance',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceInstance info',
      content: { 'application/json': { schema: ServiceInstanceSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceInventoriesRoute = createRoute({
  method: 'get',
  path: '/service_inventories',
  tags: ['ServiceInventory'],
  summary: 'List ServiceInventories',
  description: 'Returns an array of ServiceInventory objects',
  operationId: 'listServiceInventories',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceInventories collection',
      content: { 'application/json': { schema: ServiceInventoriesCollectionSchema } },
    },
  },
})

export const getServiceInventoriesIdRoute = createRoute({
  method: 'get',
  path: '/service_inventories/{id}',
  tags: ['ServiceInventory'],
  summary: 'Show an existing ServiceInventory',
  description: 'Returns a ServiceInventory object',
  operationId: 'showServiceInventory',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceInventory info',
      content: { 'application/json': { schema: ServiceInventorySchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const postServiceInventoriesIdTagRoute = createRoute({
  method: 'post',
  path: '/service_inventories/{id}/tag',
  tags: ['ServiceInventory'],
  summary: 'Tag a ServiceInventory',
  description: 'Tags a ServiceInventory object',
  operationId: 'tagServiceInventory',
  request: {
    params: z.object({ id: IDParamsSchema }),
    body: {
      description: 'Tag attributes to add',
      content: { 'application/json': { schema: z.array(TagSchema) } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'ServiceInventory tagged successful',
      content: { 'application/json': { schema: z.array(TagSchema) } },
    },
    304: { description: 'Not modified' },
  },
})

export const getServiceInventoriesIdTagsRoute = createRoute({
  method: 'get',
  path: '/service_inventories/{id}/tags',
  tags: ['ServiceInventory'],
  summary: 'List Tags for ServiceInventory',
  description: 'Returns an array of Tag objects',
  operationId: 'listServiceInventoryTags',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Tags collection',
      content: { 'application/json': { schema: TagsCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const postServiceInventoriesIdUntagRoute = createRoute({
  method: 'post',
  path: '/service_inventories/{id}/untag',
  tags: ['ServiceInventory'],
  summary: 'Untag a ServiceInventory',
  description: 'Untags a ServiceInventory object',
  operationId: 'untagServiceInventory',
  request: {
    params: z.object({ id: IDParamsSchema }),
    body: {
      description: 'Tag attributes to removed',
      content: { 'application/json': { schema: z.array(TagSchema) } },
      required: true,
    },
  },
  responses: { 204: { description: 'ServiceInventory untagged successfully' } },
})

export const getServiceOfferingNodesRoute = createRoute({
  method: 'get',
  path: '/service_offering_nodes',
  tags: ['ServiceOfferingNode'],
  summary: 'List ServiceOfferingNodes',
  description: 'Returns an array of ServiceOfferingNode objects',
  operationId: 'listServiceOfferingNodes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceOfferingNodes collection',
      content: { 'application/json': { schema: ServiceOfferingNodesCollectionSchema } },
    },
  },
})

export const getServiceOfferingNodesIdRoute = createRoute({
  method: 'get',
  path: '/service_offering_nodes/{id}',
  tags: ['ServiceOfferingNode'],
  summary: 'Show an existing ServiceOfferingNode',
  description: 'Returns a ServiceOfferingNode object',
  operationId: 'showServiceOfferingNode',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceOfferingNode info',
      content: { 'application/json': { schema: ServiceOfferingNodeSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceOfferingsRoute = createRoute({
  method: 'get',
  path: '/service_offerings',
  tags: ['ServiceOffering'],
  summary: 'List ServiceOfferings',
  description: 'Returns an array of ServiceOffering objects',
  operationId: 'listServiceOfferings',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServiceOfferings collection',
      content: { 'application/json': { schema: ServiceOfferingsCollectionSchema } },
    },
  },
})

export const getServiceOfferingsIdRoute = createRoute({
  method: 'get',
  path: '/service_offerings/{id}',
  tags: ['ServiceOffering'],
  summary: 'Show an existing ServiceOffering',
  description: 'Returns a ServiceOffering object',
  operationId: 'showServiceOffering',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServiceOffering info',
      content: { 'application/json': { schema: ServiceOfferingSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const postServiceOfferingsIdAppliedInventoriesTagsRoute = createRoute({
  method: 'post',
  path: '/service_offerings/{id}/applied_inventories_tags',
  tags: ['ServiceOffering'],
  summary: 'Invokes computing of ServiceInventories tags for given ServiceOffering',
  description: 'Returns an array of inventories tags',
  operationId: 'appliedInventoriesTagsForServiceOffering',
  request: {
    params: z.object({ id: IDParamsSchema }),
    body: {
      description: 'Parameters defining input data for computing inventories',
      content: { 'application/json': { schema: AppliedInventoriesParametersServicePlanSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns an array of inventories tags for the computing result',
      content: { 'application/json': { schema: z.array(TagSchema) } },
    },
    400: { description: 'BadRequest' },
  },
})

export const postServiceOfferingsIdOrderRoute = createRoute({
  method: 'post',
  path: '/service_offerings/{id}/order',
  tags: ['ServiceOffering'],
  summary: 'Order an existing ServiceOffering',
  description: 'Returns a Task id',
  operationId: 'orderServiceOffering',
  request: {
    params: z.object({ id: IDParamsSchema }),
    body: {
      description: 'Order parameters defining the service and provider control',
      content: { 'application/json': { schema: OrderParametersServiceOfferingSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns a task ID for the order',
      content: {
        'application/json': {
          schema: z.object({ task_id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'BadRequest' },
  },
})

export const getServiceOfferingsIdServiceInstancesRoute = createRoute({
  method: 'get',
  path: '/service_offerings/{id}/service_instances',
  tags: ['ServiceOffering'],
  summary: 'List ServiceInstances for ServiceOffering',
  description: 'Returns an array of ServiceInstance objects',
  operationId: 'listServiceOfferingServiceInstances',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceInstances collection',
      content: { 'application/json': { schema: ServiceInstancesCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceOfferingsIdServiceOfferingNodesRoute = createRoute({
  method: 'get',
  path: '/service_offerings/{id}/service_offering_nodes',
  tags: ['ServiceOffering'],
  summary: 'List ServiceOfferingNodes for ServiceOffering',
  description: 'Returns an array of ServiceOfferingNode objects',
  operationId: 'listServiceOfferingServiceOfferingNodes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceOfferingNodes collection',
      content: { 'application/json': { schema: ServiceOfferingNodesCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServiceOfferingsIdServicePlansRoute = createRoute({
  method: 'get',
  path: '/service_offerings/{id}/service_plans',
  tags: ['ServiceOffering'],
  summary: 'List ServicePlans for ServiceOffering',
  description: 'Returns an array of ServicePlan objects',
  operationId: 'listServiceOfferingServicePlans',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServicePlans collection',
      content: { 'application/json': { schema: ServicePlansCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getServicePlansRoute = createRoute({
  method: 'get',
  path: '/service_plans',
  tags: ['ServicePlan'],
  summary: 'List ServicePlans',
  description: 'Returns an array of ServicePlan objects',
  operationId: 'listServicePlans',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'ServicePlans collection',
      content: { 'application/json': { schema: ServicePlansCollectionSchema } },
    },
  },
})

export const getServicePlansIdRoute = createRoute({
  method: 'get',
  path: '/service_plans/{id}',
  tags: ['ServicePlan'],
  summary: 'Show an existing ServicePlan',
  description: 'Returns a ServicePlan object',
  operationId: 'showServicePlan',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: {
      description: 'ServicePlan info',
      content: { 'application/json': { schema: ServicePlanSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesRoute = createRoute({
  method: 'get',
  path: '/sources',
  tags: ['Source'],
  summary: 'List Sources',
  description: 'Returns an array of Source objects',
  operationId: 'listSources',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Sources collection',
      content: { 'application/json': { schema: SourcesCollectionSchema } },
    },
  },
})

export const getSourcesIdRoute = createRoute({
  method: 'get',
  path: '/sources/{id}',
  tags: ['Source'],
  summary: 'Show an existing Source',
  description: 'Returns a Source object',
  operationId: 'showSource',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    200: { description: 'Source info', content: { 'application/json': { schema: SourceSchema } } },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const patchSourcesIdIncrementalRefreshRoute = createRoute({
  method: 'patch',
  path: '/sources/{id}/incremental_refresh',
  tags: ['Source'],
  summary: 'Incremental Refresh an existing Source',
  description: 'Incremental Refresh a source object',
  operationId: 'incrementalRefreshSource',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    204: { description: 'Updated, no content' },
    400: { description: 'Bad request' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const patchSourcesIdRefreshRoute = createRoute({
  method: 'patch',
  path: '/sources/{id}/refresh',
  tags: ['Source'],
  summary: ' Refresh an existing Source',
  description: 'Refresh a source object',
  operationId: 'refreshSource',
  request: { params: z.object({ id: IDParamsSchema }) },
  responses: {
    204: { description: 'Updated, no content' },
    400: { description: 'Bad request' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const getSourcesIdServiceInstancesRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/service_instances',
  tags: ['Source'],
  summary: 'List ServiceInstances for Source',
  description: 'Returns an array of ServiceInstance objects',
  operationId: 'listSourceServiceInstances',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceInstances collection',
      content: { 'application/json': { schema: ServiceInstancesCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesIdServiceInventoriesRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/service_inventories',
  tags: ['Source'],
  summary: 'List ServiceInventories for Source',
  description: 'Returns an array of ServiceInventory objects',
  operationId: 'listSourceServiceInventories',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceInventories collection',
      content: { 'application/json': { schema: ServiceInventoriesCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesIdServiceOfferingNodesRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/service_offering_nodes',
  tags: ['Source'],
  summary: 'List ServiceOfferingNodes for Source',
  description: 'Returns an array of ServiceOfferingNode objects',
  operationId: 'listSourceServiceOfferingNodes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceOfferingNodes collection',
      content: { 'application/json': { schema: ServiceOfferingNodesCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesIdServiceOfferingsRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/service_offerings',
  tags: ['Source'],
  summary: 'List ServiceOfferings for Source',
  description: 'Returns an array of ServiceOffering objects',
  operationId: 'listSourceServiceOfferings',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServiceOfferings collection',
      content: { 'application/json': { schema: ServiceOfferingsCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesIdServicePlansRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/service_plans',
  tags: ['Source'],
  summary: 'List ServicePlans for Source',
  description: 'Returns an array of ServicePlan objects',
  operationId: 'listSourceServicePlans',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'ServicePlans collection',
      content: { 'application/json': { schema: ServicePlansCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getSourcesIdTasksRoute = createRoute({
  method: 'get',
  path: '/sources/{id}/tasks',
  tags: ['Source'],
  summary: 'List Tasks for Source',
  description: 'Returns an array of Task objects',
  operationId: 'listSourceTasks',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
    params: z.object({ id: IDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Tasks collection',
      content: { 'application/json': { schema: TasksCollectionSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'List Tags',
  description: 'Returns an array of Tag objects',
  operationId: 'listTags',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Tags collection',
      content: { 'application/json': { schema: TagsCollectionSchema } },
    },
  },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Task'],
  summary: 'List Tasks',
  description: 'Returns an array of Task objects',
  operationId: 'listTasks',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort_by']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          limit: QueryLimitParamsSchema,
          offset: QueryOffsetParamsSchema,
          filter: QueryFilterParamsSchema,
          sort_by: QuerySortByParamsSchema,
        }),
      ),
  },
  responses: {
    200: {
      description: 'Tasks collection',
      content: { 'application/json': { schema: TasksCollectionSchema } },
    },
  },
})

export const getTasksIdRoute = createRoute({
  method: 'get',
  path: '/tasks/{id}',
  tags: ['Task'],
  summary: 'Show an existing Task',
  description: 'Returns a Task object',
  operationId: 'showTask',
  request: { params: z.object({ id: UUIDParamsSchema }) },
  responses: {
    200: { description: 'Task info', content: { 'application/json': { schema: TaskSchema } } },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})

export const patchTasksIdRoute = createRoute({
  method: 'patch',
  path: '/tasks/{id}',
  tags: ['Task'],
  summary: 'Update an existing Task',
  description: 'Updates a Task object',
  operationId: 'updateTask',
  request: {
    params: z.object({ id: UUIDParamsSchema }),
    body: {
      description: 'Task attributes to update',
      content: { 'application/json': { schema: TaskSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Updated, no content' },
    400: { description: 'Bad request' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
})
