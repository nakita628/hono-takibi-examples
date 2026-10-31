import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const DiscovererStateSchema = z.enum(['STARTED', 'STOPPED']).openapi('DiscovererState')

const BooleanSchema = z.boolean().openapi('Boolean')

const TagsSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: 'Key-value pairs associated with a resource.' })
  .openapi('Tags')

const CreateDiscovererResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the discoverer.' }),
    ).exactOptional(),
    DiscovererArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the discoverer.' }),
    ).exactOptional(),
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Status if the discoverer will discover schemas from events sent from another account.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDiscovererResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CreateRegistryResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the registry.' }),
    ).exactOptional(),
    RegistryArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the registry.' }),
    ).exactOptional(),
    RegistryName: StringSchema.and(
      z.any().openapi({ description: 'The name of the registry.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRegistryResponse')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const CreateSchemaResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the schema.' }),
    ).exactOptional(),
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that schema was modified.' }),
    ).exactOptional(),
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema' }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of the schema.' }),
    ).exactOptional(),
    VersionCreatedDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date the schema version was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSchemaResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const CodeGenerationStatusSchema = z
  .enum(['CREATE_IN_PROGRESS', 'CREATE_COMPLETE', 'CREATE_FAILED'])
  .openapi('CodeGenerationStatus')

const DescribeCodeBindingResponseSchema = z
  .object({
    CreationDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The time and date that the code binding was created.' }),
    ).exactOptional(),
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that code bindings were modified.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema.' }),
    ).exactOptional(),
    Status: CodeGenerationStatusSchema.and(
      z.any().openapi({ description: 'The current status of code binding generation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCodeBindingResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const DescribeDiscovererResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the discoverer.' }),
    ).exactOptional(),
    DiscovererArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the discoverer.' }),
    ).exactOptional(),
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Status if the discoverer will discover schemas from events sent from another account.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDiscovererResponse')

const DescribeRegistryResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the registry.' }),
    ).exactOptional(),
    RegistryArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the registry.' }),
    ).exactOptional(),
    RegistryName: StringSchema.and(
      z.any().openapi({ description: 'The name of the registry.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRegistryResponse')

const DescribeSchemaResponseSchema = z
  .object({
    Content: StringSchema.and(
      z.any().openapi({ description: 'The source of the schema definition.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the schema.' }),
    ).exactOptional(),
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that schema was modified.' }),
    ).exactOptional(),
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of the schema.' }),
    ).exactOptional(),
    VersionCreatedDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date the schema version was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSchemaResponse')

const ExportSchemaResponseSchema = z
  .object({
    Content: StringSchema.exactOptional(),
    SchemaArn: StringSchema.exactOptional(),
    SchemaName: StringSchema.exactOptional(),
    SchemaVersion: StringSchema.exactOptional(),
    Type: StringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportSchemaResponse')

const BodySchema = z.string().openapi('Body')

const GetCodeBindingSourceResponseSchema = z
  .object({ Body: BodySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetCodeBindingSourceResponse')

const GetDiscoveredSchemaResponseSchema = z
  .object({
    Content: StringSchema.and(
      z.any().openapi({ description: 'The source of the schema definition.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiscoveredSchemaResponse')

const GetDiscoveredSchemaVersionItemInputSchema = z
  .string()
  .min(1)
  .max(100000)
  .openapi('GetDiscoveredSchemaVersionItemInput')

const GetResourcePolicyResponseSchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The resource-based policy.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z.any().openapi({ description: 'The revision ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePolicyResponse')

const DiscovererSummarySchema = z
  .object({
    DiscovererArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the discoverer.' }),
    ).exactOptional(),
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Status if the discoverer will discover schemas from events sent from another account.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscovererSummary')

const ListOfDiscovererSummarySchema = z
  .array(DiscovererSummarySchema)
  .openapi('ListOfDiscovererSummary')

const ListDiscoverersResponseSchema = z
  .object({
    Discoverers: ListOfDiscovererSummarySchema.and(
      z.any().openapi({ description: 'An array of DiscovererSummary information.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDiscoverersResponse')

const RegistrySummarySchema = z
  .object({
    RegistryArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the registry.' }),
    ).exactOptional(),
    RegistryName: StringSchema.and(
      z.any().openapi({ description: 'The name of the registry.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegistrySummary')

const ListOfRegistrySummarySchema = z.array(RegistrySummarySchema).openapi('ListOfRegistrySummary')

const ListRegistriesResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
        }),
    ).exactOptional(),
    Registries: ListOfRegistrySummarySchema.and(
      z.any().openapi({ description: 'An array of registry summaries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRegistriesResponse')

const TypeSchema = z.enum(['OpenApi3', 'JSONSchemaDraft4']).openapi('Type')

const SchemaVersionSummarySchema = z
  .object({
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema version.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema.' }),
    ).exactOptional(),
    Type: TypeSchema.and(z.any().openapi({ description: 'The type of schema.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchemaVersionSummary')

const ListOfSchemaVersionSummarySchema = z
  .array(SchemaVersionSummarySchema)
  .openapi('ListOfSchemaVersionSummary')

const ListSchemaVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
        }),
    ).exactOptional(),
    SchemaVersions: ListOfSchemaVersionSummarySchema.and(
      z.any().openapi({ description: 'An array of schema version summaries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSchemaVersionsResponse')

const LongSchema = z.int().openapi('Long')

const SchemaSummarySchema = z
  .object({
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that schema was modified.' }),
    ).exactOptional(),
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the schema.' }),
    ).exactOptional(),
    VersionCount: LongSchema.and(
      z.any().openapi({ description: 'The number of versions available for the schema.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of schema details.', required: [] })
  .openapi('SchemaSummary')

const ListOfSchemaSummarySchema = z.array(SchemaSummarySchema).openapi('ListOfSchemaSummary')

const ListSchemasResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
        }),
    ).exactOptional(),
    Schemas: ListOfSchemaSummarySchema.and(
      z.any().openapi({ description: 'An array of schema summaries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSchemasResponse')

const ListTagsForResourceResponseSchema = z
  .object({ Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutCodeBindingResponseSchema = z
  .object({
    CreationDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The time and date that the code binding was created.' }),
    ).exactOptional(),
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that code bindings were modified.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema.' }),
    ).exactOptional(),
    Status: CodeGenerationStatusSchema.and(
      z.any().openapi({ description: 'The current status of code binding generation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutCodeBindingResponse')

const GoneExceptionSchema = z.any().openapi('GoneException')

const PutResourcePolicyResponseSchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The resource-based policy.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z.any().openapi({ description: 'The revision ID of the policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResponse')

const PreconditionFailedExceptionSchema = z.any().openapi('PreconditionFailedException')

const SearchSchemaVersionSummarySchema = z
  .object({
    CreatedDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date the schema version was created.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema' }),
    ).exactOptional(),
    Type: TypeSchema.and(z.any().openapi({ description: 'The type of schema.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchSchemaVersionSummary')

const ListOfSearchSchemaVersionSummarySchema = z
  .array(SearchSchemaVersionSummarySchema)
  .openapi('ListOfSearchSchemaVersionSummary')

const SearchSchemaSummarySchema = z
  .object({
    RegistryName: StringSchema.and(
      z.any().openapi({ description: 'The name of the registry.' }),
    ).exactOptional(),
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    SchemaVersions: ListOfSearchSchemaVersionSummarySchema.and(
      z.any().openapi({ description: 'An array of schema version summaries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchSchemaSummary')

const ListOfSearchSchemaSummarySchema = z
  .array(SearchSchemaSummarySchema)
  .openapi('ListOfSearchSchemaSummary')

const SearchSchemasResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
        }),
    ).exactOptional(),
    Schemas: ListOfSearchSchemaSummarySchema.and(
      z.any().openapi({ description: 'An array of SearchSchemaSummary information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchSchemasResponse')

const StartDiscovererResponseSchema = z
  .object({
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDiscovererResponse')

const StopDiscovererResponseSchema = z
  .object({
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopDiscovererResponse')

const UpdateDiscovererResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the discoverer.' }),
    ).exactOptional(),
    DiscovererArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the discoverer.' }),
    ).exactOptional(),
    DiscovererId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the discoverer.' }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ).exactOptional(),
    State: DiscovererStateSchema.and(
      z.any().openapi({ description: 'The state of the discoverer.' }),
    ).exactOptional(),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Status if the discoverer will discover schemas from events sent from another account.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDiscovererResponse')

const UpdateRegistryResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the registry.' }),
    ).exactOptional(),
    RegistryArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the registry.' }),
    ).exactOptional(),
    RegistryName: StringSchema.and(
      z.any().openapi({ description: 'The name of the registry.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRegistryResponse')

const UpdateSchemaResponseSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the schema.' }),
    ).exactOptional(),
    LastModified: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date and time that schema was modified.' }),
    ).exactOptional(),
    SchemaArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the schema.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z.any().openapi({ description: 'The name of the schema.' }),
    ).exactOptional(),
    SchemaVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the schema' }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of the schema.' }),
    ).exactOptional(),
    VersionCreatedDate: TimestampIso8601Schema.and(
      z.any().openapi({ description: 'The date the schema version was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSchemaResponse')

const StringMin0Max256Schema = z.string().min(0).max(256).openapi('StringMin0Max256')

const StringMin20Max1600Schema = z.string().min(20).max(1600).openapi('StringMin20Max1600')

const CreateDiscovererRequestSchema = z
  .object({
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'A description for the discoverer.' }),
    ).exactOptional(),
    SourceArn: StringMin20Max1600Schema.and(
      z.any().openapi({ description: 'The ARN of the event bus.' }),
    ),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Support discovery of schemas in events sent to the bus from another account. (default: true).',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceArn'], title: 'CreateDiscovererRequest', description: '' })
  .openapi('CreateDiscovererRequest')

const CreateRegistryRequestSchema = z
  .object({
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'A description of the registry to be created.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'tags' }, description: 'Tags to associate with the registry.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateRegistryRequest', required: [] })
  .openapi('CreateRegistryRequest')

const StringMin1Max100000Schema = z.string().min(1).max(100000).openapi('StringMin1Max100000')

const CreateSchemaRequestSchema = z
  .object({
    Content: StringMin1Max100000Schema.and(
      z.any().openapi({ description: 'The source of the schema definition.' }),
    ),
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'A description of the schema.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the schema.' }),
    ).exactOptional(),
    Type: TypeSchema.and(z.any().openapi({ description: 'The type of schema.' })),
  })
  .openapi({ required: ['Type', 'Content'], title: 'CreateSchemaRequest' })
  .openapi('CreateSchemaRequest')

const DeleteDiscovererRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDiscovererRequest' })
  .openapi('DeleteDiscovererRequest')

const DeleteRegistryRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRegistryRequest' })
  .openapi('DeleteRegistryRequest')

const DeleteResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DeleteSchemaRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSchemaRequest' })
  .openapi('DeleteSchemaRequest')

const DeleteSchemaVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSchemaVersionRequest' })
  .openapi('DeleteSchemaVersionRequest')

const DescribeCodeBindingRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeCodeBindingRequest' })
  .openapi('DescribeCodeBindingRequest')

const DescribeDiscovererRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDiscovererRequest' })
  .openapi('DescribeDiscovererRequest')

const DescribeRegistryRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRegistryRequest' })
  .openapi('DescribeRegistryRequest')

const DescribeSchemaRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSchemaRequest' })
  .openapi('DescribeSchemaRequest')

const ExportSchemaRequestSchema = z
  .object({})
  .openapi({ title: 'ExportSchemaRequest' })
  .openapi('ExportSchemaRequest')

const GetCodeBindingSourceRequestSchema = z
  .object({})
  .openapi({ title: 'GetCodeBindingSourceRequest' })
  .openapi('GetCodeBindingSourceRequest')

const ListOfGetDiscoveredSchemaVersionItemInputSchema = z
  .array(GetDiscoveredSchemaVersionItemInputSchema)
  .min(1)
  .max(10)
  .openapi('ListOfGetDiscoveredSchemaVersionItemInput')

const GetDiscoveredSchemaRequestSchema = z
  .object({
    Events: ListOfGetDiscoveredSchemaVersionItemInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.',
        }),
    ),
    Type: TypeSchema.and(z.any().openapi({ description: 'The type of event.' })),
  })
  .openapi({ required: ['Type', 'Events'], title: 'GetDiscoveredSchemaRequest' })
  .openapi('GetDiscoveredSchemaRequest')

const GetResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourcePolicyRequest' })
  .openapi('GetResourcePolicyRequest')

const IntegerSchema = z.int().openapi('Integer')

const ListDiscoverersRequestSchema = z
  .object({})
  .openapi({ title: 'ListDiscoverersRequest' })
  .openapi('ListDiscoverersRequest')

const ListRegistriesRequestSchema = z
  .object({})
  .openapi({ title: 'ListRegistriesRequest' })
  .openapi('ListRegistriesRequest')

const ListSchemaVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSchemaVersionsRequest' })
  .openapi('ListSchemaVersionsRequest')

const ListSchemasRequestSchema = z
  .object({})
  .openapi({ title: 'ListSchemasRequest' })
  .openapi('ListSchemasRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutCodeBindingRequestSchema = z
  .object({})
  .openapi({ title: 'PutCodeBindingRequest' })
  .openapi('PutCodeBindingRequest')

const PutResourcePolicyRequestSchema = z
  .object({
    Policy: StringSchema.and(z.any().openapi({ description: 'The resource-based policy.' })),
    RevisionId: StringSchema.and(
      z.any().openapi({ description: 'The revision ID of the policy.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Policy'],
    title: 'PutResourcePolicyRequest',
    description: 'The name of the policy.',
  })
  .openapi('PutResourcePolicyRequest')

const SearchSchemasRequestSchema = z
  .object({})
  .openapi({ title: 'SearchSchemasRequest' })
  .openapi('SearchSchemasRequest')

const StartDiscovererRequestSchema = z
  .object({})
  .openapi({ title: 'StartDiscovererRequest' })
  .openapi('StartDiscovererRequest')

const StopDiscovererRequestSchema = z
  .object({})
  .openapi({ title: 'StopDiscovererRequest' })
  .openapi('StopDiscovererRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags associated with the resource.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest', description: '' })
  .openapi('TagResourceRequest')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDiscovererRequestSchema = z
  .object({
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'The description of the discoverer to update.' }),
    ).exactOptional(),
    CrossAccount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Support discovery of schemas in events sent to the bus from another account. (default: true)',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDiscovererRequest', required: [] })
  .openapi('UpdateDiscovererRequest')

const UpdateRegistryRequestSchema = z
  .object({
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'The description of the registry to update.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRegistryRequest', description: 'Updates the registry.', required: [] })
  .openapi('UpdateRegistryRequest')

const StringMin0Max36Schema = z.string().min(0).max(36).openapi('StringMin0Max36')

const UpdateSchemaRequestSchema = z
  .object({
    ClientTokenId: StringMin0Max36Schema.and(
      z.any().openapi({ description: 'The ID of the client token.' }),
    ).exactOptional(),
    Content: StringMin1Max100000Schema.and(
      z.any().openapi({ description: 'The source of the schema definition.' }),
    ).exactOptional(),
    Description: StringMin0Max256Schema.and(
      z.any().openapi({ description: 'The description of the schema.' }),
    ).exactOptional(),
    Type: TypeSchema.and(
      z.any().openapi({ description: 'The schema type for the events schema.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSchemaRequest', required: [] })
  .openapi('UpdateSchemaRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getV1DiscoverersRoute = createRoute({
  method: 'get',
  path: '/v1/discoverers',
  description: 'List the discoverers.',
  operationId: 'ListDiscoverers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      discovererIdPrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'discovererIdPrefix',
            in: 'query',
            required: false,
            description:
              'Specifying this limits the results to only those discoverer IDs that start with the specified prefix.',
            schema: { type: 'string' },
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
            name: 'limit',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
            schema: { type: 'string' },
          },
        }),
      sourceArnPrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceArnPrefix',
            in: 'query',
            required: false,
            description:
              'Specifying this limits the results to only those ARNs that start with the specified prefix.',
            schema: { type: 'string' },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDiscoverersResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1DiscoverersRoute = createRoute({
  method: 'post',
  path: '/v1/discoverers',
  description: 'Creates a discoverer.',
  operationId: 'CreateDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description for the discoverer.' }),
              SourceArn: z
                .string()
                .min(20)
                .max(1600)
                .openapi({ description: 'The ARN of the event bus.' }),
              CrossAccount: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Support discovery of schemas in events sent to the bus from another account. (default: true).',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Key-value pairs associated with a resource.' }),
            })
            .openapi({ required: ['SourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDiscovererResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}',
  description: 'Describes the registry.',
  operationId: 'DescribeRegistry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRegistryResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1RegistriesNameRegistryNameRoute = createRoute({
  method: 'put',
  path: '/v1/registries/name/{registryName}',
  description: 'Updates a registry.',
  operationId: 'UpdateRegistry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of the registry to update.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRegistryResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postV1RegistriesNameRegistryNameRoute = createRoute({
  method: 'post',
  path: '/v1/registries/name/{registryName}',
  description: 'Creates a registry.',
  operationId: 'CreateRegistry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the registry to be created.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Key-value pairs associated with a resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRegistryResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1RegistriesNameRegistryNameRoute = createRoute({
  method: 'delete',
  path: '/v1/registries/name/{registryName}',
  description: 'Deletes a Registry.',
  operationId: 'DeleteRegistry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
  description: 'Retrieve the schema definition.',
  operationId: 'DescribeSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      schemaVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'schemaVersion',
            in: 'query',
            required: false,
            description: 'Specifying this limits the results to only this schema version.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSchemaResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute = createRoute({
  method: 'put',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
  description:
    '<p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>',
  operationId: 'UpdateSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientTokenId: z
                .string()
                .min(0)
                .max(36)
                .exactOptional()
                .openapi({ description: 'The ID of the client token.' }),
              Content: z
                .string()
                .min(1)
                .max(100000)
                .exactOptional()
                .openapi({ description: 'The source of the schema definition.' }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of the schema.' }),
              Type: z
                .enum(['OpenApi3', 'JSONSchemaDraft4'])
                .exactOptional()
                .openapi({ description: 'The schema type for the events schema.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSchemaResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute = createRoute({
  method: 'post',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
  description:
    '<p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>',
  operationId: 'CreateSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Content: z
                .string()
                .min(1)
                .max(100000)
                .openapi({ description: 'The source of the schema definition.' }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the schema.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Key-value pairs associated with a resource.' }),
              Type: z
                .enum(['OpenApi3', 'JSONSchemaDraft4'])
                .openapi({ description: 'The type of schema.' }),
            })
            .openapi({ required: ['Content', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSchemaResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute = createRoute({
  method: 'delete',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}',
  description: 'Delete a schema definition.',
  operationId: 'DeleteSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1DiscoverersIdDiscovererIdRoute = createRoute({
  method: 'get',
  path: '/v1/discoverers/id/{discovererId}',
  description: 'Describes the discoverer.',
  operationId: 'DescribeDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      discovererId: z
        .string()
        .openapi({
          param: {
            name: 'discovererId',
            in: 'path',
            required: true,
            description: 'The ID of the discoverer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDiscovererResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1DiscoverersIdDiscovererIdRoute = createRoute({
  method: 'put',
  path: '/v1/discoverers/id/{discovererId}',
  description: 'Updates the discoverer',
  operationId: 'UpdateDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      discovererId: z
        .string()
        .openapi({
          param: {
            name: 'discovererId',
            in: 'path',
            required: true,
            description: 'The ID of the discoverer.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of the discoverer to update.' }),
              CrossAccount: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Support discovery of schemas in events sent to the bus from another account. (default: true)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDiscovererResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteV1DiscoverersIdDiscovererIdRoute = createRoute({
  method: 'delete',
  path: '/v1/discoverers/id/{discovererId}',
  description: 'Deletes a discoverer.',
  operationId: 'DeleteDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      discovererId: z
        .string()
        .openapi({
          param: {
            name: 'discovererId',
            in: 'path',
            required: true,
            description: 'The ID of the discoverer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1PolicyRoute = createRoute({
  method: 'get',
  path: '/v1/policy',
  description: 'Retrieves the resource-based policy attached to a given registry.',
  operationId: 'GetResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      registryName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'registryName',
            in: 'query',
            required: false,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePolicyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putV1PolicyRoute = createRoute({
  method: 'put',
  path: '/v1/policy',
  description: 'The name of the policy.',
  operationId: 'PutResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      registryName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'registryName',
            in: 'query',
            required: false,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z.string().openapi({ description: 'The resource-based policy.' }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The revision ID of the policy.' }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteV1PolicyRoute = createRoute({
  method: 'delete',
  path: '/v1/policy',
  description: 'Delete the resource-based policy attached to the specified registry.',
  operationId: 'DeleteResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      registryName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'registryName',
            in: 'query',
            required: false,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRoute =
  createRoute({
    method: 'delete',
    path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/version/{schemaVersion}',
    description: 'Delete the schema version definition',
    operationId: 'DeleteSchemaVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        registryName: z
          .string()
          .openapi({
            param: {
              name: 'registryName',
              in: 'path',
              required: true,
              description: 'The name of the registry.',
              schema: { type: 'string' },
            },
          }),
        schemaName: z
          .string()
          .openapi({
            param: {
              name: 'schemaName',
              in: 'path',
              required: true,
              description: 'The name of the schema.',
              schema: { type: 'string' },
            },
          }),
        schemaVersion: z
          .string()
          .openapi({
            param: {
              name: 'schemaVersion',
              in: 'path',
              required: true,
              description: 'The version number of the schema',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      482: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
    },
  })

export const getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute =
  createRoute({
    method: 'get',
    path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}',
    description: 'Describe the code binding URI.',
    operationId: 'DescribeCodeBinding',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        language: z
          .string()
          .openapi({
            param: {
              name: 'language',
              in: 'path',
              required: true,
              description: 'The language of the code binding.',
              schema: { type: 'string' },
            },
          }),
        registryName: z
          .string()
          .openapi({
            param: {
              name: 'registryName',
              in: 'path',
              required: true,
              description: 'The name of the registry.',
              schema: { type: 'string' },
            },
          }),
        schemaName: z
          .string()
          .openapi({
            param: {
              name: 'schemaName',
              in: 'path',
              required: true,
              description: 'The name of the schema.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        schemaVersion: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'schemaVersion',
              in: 'query',
              required: false,
              description: 'Specifying this limits the results to only this schema version.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeCodeBindingResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      482: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute =
  createRoute({
    method: 'post',
    path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}',
    description: 'Put code binding URI',
    operationId: 'PutCodeBinding',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        language: z
          .string()
          .openapi({
            param: {
              name: 'language',
              in: 'path',
              required: true,
              description: 'The language of the code binding.',
              schema: { type: 'string' },
            },
          }),
        registryName: z
          .string()
          .openapi({
            param: {
              name: 'registryName',
              in: 'path',
              required: true,
              description: 'The name of the registry.',
              schema: { type: 'string' },
            },
          }),
        schemaName: z
          .string()
          .openapi({
            param: {
              name: 'schemaName',
              in: 'path',
              required: true,
              description: 'The name of the schema.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        schemaVersion: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'schemaVersion',
              in: 'query',
              required: false,
              description: 'Specifying this limits the results to only this schema version.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: PutCodeBindingResponseSchema } },
      },
      480: {
        description: 'GoneException',
        content: { 'application/json': { schema: GoneExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      483: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      484: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      485: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/export#type',
  operationId: 'ExportSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      schemaVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'schemaVersion',
            in: 'query',
            required: false,
            description: 'Specifying this limits the results to only this schema version.',
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            description: '',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportSchemaResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRoute =
  createRoute({
    method: 'get',
    path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}/source',
    description: 'Get the code binding source URI.',
    operationId: 'GetCodeBindingSource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        language: z
          .string()
          .openapi({
            param: {
              name: 'language',
              in: 'path',
              required: true,
              description: 'The language of the code binding.',
              schema: { type: 'string' },
            },
          }),
        registryName: z
          .string()
          .openapi({
            param: {
              name: 'registryName',
              in: 'path',
              required: true,
              description: 'The name of the registry.',
              schema: { type: 'string' },
            },
          }),
        schemaName: z
          .string()
          .openapi({
            param: {
              name: 'schemaName',
              in: 'path',
              required: true,
              description: 'The name of the schema.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        schemaVersion: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'schemaVersion',
              in: 'query',
              required: false,
              description: 'Specifying this limits the results to only this schema version.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetCodeBindingSourceResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      482: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postV1DiscoverRoute = createRoute({
  method: 'post',
  path: '/v1/discover',
  description: 'Get the discovered schema that was generated based on sampled events.',
  operationId: 'GetDiscoveredSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Events: z
                .array(GetDiscoveredSchemaVersionItemInputSchema)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.',
                }),
              Type: z
                .enum(['OpenApi3', 'JSONSchemaDraft4'])
                .openapi({ description: 'The type of event.' }),
            })
            .openapi({ required: ['Events', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiscoveredSchemaResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1RegistriesRoute = createRoute({
  method: 'get',
  path: '/v1/registries',
  description: 'List the registries.',
  operationId: 'ListRegistries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
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
            name: 'limit',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
            schema: { type: 'string' },
          },
        }),
      registryNamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'registryNamePrefix',
            in: 'query',
            required: false,
            description:
              'Specifying this limits the results to only those registry names that start with the specified prefix.',
            schema: { type: 'string' },
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            required: false,
            description:
              'Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.',
            schema: { type: 'string' },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRegistriesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}/schemas/name/{schemaName}/versions',
  description: 'Provides a list of the schema versions and related information.',
  operationId: 'ListSchemaVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
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
            name: 'limit',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
            schema: { type: 'string' },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
      schemaName: z
        .string()
        .openapi({
          param: {
            name: 'schemaName',
            in: 'path',
            required: true,
            description: 'The name of the schema.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSchemaVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameSchemasRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}/schemas',
  description: 'List the schemas.',
  operationId: 'ListSchemas',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
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
            name: 'limit',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
            schema: { type: 'string' },
          },
        }),
      schemaNamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'schemaNamePrefix',
            in: 'query',
            required: false,
            description:
              'Specifying this limits the results to only those schema names that start with the specified prefix.',
            schema: { type: 'string' },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSchemasResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resource-arn}',
  description: 'Get tags for resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resource-arn}',
  description: 'Add tags to a resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({ description: 'Key-value pairs associated with a resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1RegistriesNameRegistryNameSchemasSearchKeywordsRoute = createRoute({
  method: 'get',
  path: '/v1/registries/name/{registryName}/schemas/search#keywords',
  description: 'Search the schemas',
  operationId: 'SearchSchemas',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      keywords: z
        .string()
        .openapi({
          param: {
            name: 'keywords',
            in: 'query',
            required: true,
            description:
              'Specifying this limits the results to only schemas that include the provided keywords.',
            schema: { type: 'string' },
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
            name: 'limit',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.',
            schema: { type: 'string' },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    params: z.object({
      registryName: z
        .string()
        .openapi({
          param: {
            name: 'registryName',
            in: 'path',
            required: true,
            description: 'The name of the registry.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchSchemasResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1DiscoverersIdDiscovererIdStartRoute = createRoute({
  method: 'post',
  path: '/v1/discoverers/id/{discovererId}/start',
  description: 'Starts the discoverer',
  operationId: 'StartDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      discovererId: z
        .string()
        .openapi({
          param: {
            name: 'discovererId',
            in: 'path',
            required: true,
            description: 'The ID of the discoverer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDiscovererResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postV1DiscoverersIdDiscovererIdStopRoute = createRoute({
  method: 'post',
  path: '/v1/discoverers/id/{discovererId}/stop',
  description: 'Stops the discoverer',
  operationId: 'StopDiscoverer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      discovererId: z
        .string()
        .openapi({
          param: {
            name: 'discovererId',
            in: 'path',
            required: true,
            description: 'The ID of the discoverer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopDiscovererResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resource-arn}#tagKeys',
  description: 'Removes tags from a resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'Keys of key-value pairs.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})
