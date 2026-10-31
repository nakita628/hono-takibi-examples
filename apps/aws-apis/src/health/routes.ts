import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z.string().regex(/^\S+$/).max(12).openapi('AccountId')

const AffectedAccountsListSchema = z.array(AccountIdSchema).openapi('AffectedAccountsList')

const EventScopeCodeSchema = z
  .enum(['PUBLIC', 'ACCOUNT_SPECIFIC', 'NONE'])
  .openapi('EventScopeCode')

const NextTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9=\/+_.-]{4,10000}/)
  .min(4)
  .max(10000)
  .openapi('NextToken')

const DescribeAffectedAccountsForOrganizationResponseSchema = z
  .object({
    affectedAccounts: AffectedAccountsListSchema.and(
      z.any().openapi({ description: 'A JSON set of elements of the affected accounts.' }),
    ).exactOptional(),
    eventScopeCode: EventScopeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p> <ul> <li> <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the <code>affectedAccounts</code> value is always empty.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the <code>eventArn</code> that you specified in the request is invalid or doesn't exist.</p> </li> </ul>",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAffectedAccountsForOrganizationResponse')

const EventArnSchema = z
  .string()
  .regex(/arn:aws(-[a-z]+(-[a-z]+)?)?:health:[^:]*:[^:]*:event(?:\/[\w-]+){3}/)
  .max(1600)
  .openapi('EventArn')

const MaxResultsSchema = z.int().min(10).max(100).openapi('MaxResults')

const DescribeAffectedAccountsForOrganizationRequestSchema = z
  .object({
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['eventArn'], title: 'DescribeAffectedAccountsForOrganizationRequest' })
  .openapi('DescribeAffectedAccountsForOrganizationRequest')

const InvalidPaginationTokenSchema = z.any().openapi('InvalidPaginationToken')

const EntityArnSchema = z
  .string()
  .regex(/.{0,1600}/)
  .max(1600)
  .openapi('EntityArn')

const EntityValueSchema = z
  .string()
  .regex(/.{0,1224}/)
  .max(1224)
  .openapi('EntityValue')

const EntityUrlSchema = z.string().openapi('EntityUrl')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const EntityStatusCodeSchema = z
  .enum(['IMPAIRED', 'UNIMPAIRED', 'UNKNOWN'])
  .openapi('EntityStatusCode')

const TagValueSchema = z
  .string()
  .regex(/.{0,255}/)
  .max(255)
  .openapi('TagValue')

const TagSetSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagSet')

const AffectedEntitySchema = z
  .object({
    entityArn: EntityArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i> </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code> ',
        }),
    ).exactOptional(),
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    entityValue: EntityValueSchema.and(
      z.any().openapi({ description: 'The ID of the affected entity.' }),
    ).exactOptional(),
    entityUrl: EntityUrlSchema.and(
      z.any().openapi({ description: 'The URL of the affected entity.' }),
    ).exactOptional(),
    awsAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit Amazon Web Services account number that contains the affected entity.',
        }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The most recent time that the entity was updated.' }),
    ).exactOptional(),
    statusCode: EntityStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The most recent status of the entity affected by the event. The possible values are <code>IMPAIRED</code>, <code>UNIMPAIRED</code>, and <code>UNKNOWN</code>.',
        }),
    ).exactOptional(),
    tags: TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of entity tags attached to the affected entity.</p> <note> <p>Currently, the <code>tags</code> property isn't supported.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an entity that is affected by a Health event.',
    required: [],
  })
  .openapi('AffectedEntity')

const EntityListSchema = z.array(AffectedEntitySchema).openapi('EntityList')

const DescribeAffectedEntitiesResponseSchema = z
  .object({
    entities: EntityListSchema.and(
      z.any().openapi({ description: 'The entities that match the filter criteria.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAffectedEntitiesResponse')

const EventArnListSchema = z.array(EventArnSchema).min(1).max(10).openapi('EventArnList')

const EntityArnListSchema = z.array(EntityArnSchema).min(1).max(99).openapi('EntityArnList')

const EntityValueListSchema = z.array(EntityValueSchema).min(1).max(99).openapi('EntityValueList')

const DateTimeRangeSchema = z
  .object({
    from: TimestampSchema.and(
      z.any().openapi({ description: 'The starting date and time of a time range.' }),
    ).exactOptional(),
    to: TimestampSchema.and(
      z.any().openapi({ description: 'The ending date and time of a time range.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.',
    required: [],
  })
  .openapi('DateTimeRange')

const DateTimeRangeListSchema = z
  .array(DateTimeRangeSchema)
  .min(1)
  .max(10)
  .openapi('DateTimeRangeList')

const TagFilterSchema = z.array(TagSetSchema).max(50).openapi('TagFilter')

const EntityStatusCodeListSchema = z
  .array(EntityStatusCodeSchema)
  .min(1)
  .max(3)
  .openapi('EntityStatusCodeList')

const EntityFilterSchema = z
  .object({
    eventArns: EventArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> ',
        }),
    ),
    entityArns: EntityArnListSchema.and(
      z.any().openapi({ description: 'A list of entity ARNs (unique identifiers).' }),
    ).exactOptional(),
    entityValues: EntityValueListSchema.and(
      z.any().openapi({ description: 'A list of IDs for affected entities.' }),
    ).exactOptional(),
    lastUpdatedTimes: DateTimeRangeListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the most recent dates and times that the entity was updated.',
        }),
    ).exactOptional(),
    tags: TagFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of entity tags attached to the affected entity.</p> <note> <p>Currently, the <code>tags</code> property isn't supported.</p> </note>",
        }),
    ).exactOptional(),
    statusCodes: EntityStatusCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or <code>UNKNOWN</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['eventArns'],
    description:
      'The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.',
  })
  .openapi('EntityFilter')

const LocaleSchema = z
  .string()
  .regex(/.{2,256}/)
  .min(2)
  .max(256)
  .openapi('Locale')

const DescribeAffectedEntitiesRequestSchema = z
  .object({
    filter: EntityFilterSchema.and(
      z
        .any()
        .openapi({
          description: 'Values to narrow the results returned. At least one event ARN is required.',
        }),
    ),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filter'], title: 'DescribeAffectedEntitiesRequest' })
  .openapi('DescribeAffectedEntitiesRequest')

const UnsupportedLocaleSchema = z.any().openapi('UnsupportedLocale')

const StringSchema = z.string().openapi('String')

const OrganizationAffectedEntitiesErrorItemSchema = z
  .object({
    awsAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit Amazon Web Services account numbers that contains the affected entities.',
        }),
    ).exactOptional(),
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    errorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the error.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the event type. The format is <code>AWS_SERVICE_DESCRIPTION</code>. For example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can\'t find or process a specific entity.',
    required: [],
  })
  .openapi('OrganizationAffectedEntitiesErrorItem')

const DescribeAffectedEntitiesForOrganizationFailedSetSchema = z
  .array(OrganizationAffectedEntitiesErrorItemSchema)
  .openapi('DescribeAffectedEntitiesForOrganizationFailedSet')

const DescribeAffectedEntitiesForOrganizationResponseSchema = z
  .object({
    entities: EntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON set of elements including the <code>awsAccountId</code> and its <code>entityArn</code>, <code>entityValue</code> and its <code>entityArn</code>, <code>lastUpdatedTime</code>, and <code>statusCode</code>.',
        }),
    ).exactOptional(),
    failedSet: DescribeAffectedEntitiesForOrganizationFailedSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON set of elements of the failed response, including the <code>awsAccountId</code>, <code>errorMessage</code>, <code>errorName</code>, and <code>eventArn</code>.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAffectedEntitiesForOrganizationResponse')

const EventAccountFilterSchema = z
  .object({
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ),
    awsAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit Amazon Web Services account numbers that contains the affected entities.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['eventArn'],
    description:
      'The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations.',
  })
  .openapi('EventAccountFilter')

const OrganizationEntityFiltersListSchema = z
  .array(EventAccountFilterSchema)
  .min(1)
  .max(10)
  .openapi('OrganizationEntityFiltersList')

const MaxResultsLowerRangeSchema = z.int().min(1).max(100).openapi('MaxResultsLowerRange')

const DescribeAffectedEntitiesForOrganizationRequestSchema = z
  .object({
    organizationEntityFilters: OrganizationEntityFiltersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON set of elements including the <code>awsAccountId</code> and the <code>eventArn</code>.',
        }),
    ),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsLowerRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['organizationEntityFilters'],
    title: 'DescribeAffectedEntitiesForOrganizationRequest',
  })
  .openapi('DescribeAffectedEntitiesForOrganizationRequest')

const CountSchema = z.int().openapi('Count')

const EntityAggregateSchema = z
  .object({
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    count: CountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of entities that match the criteria for the specified events.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation.',
    required: [],
  })
  .openapi('EntityAggregate')

const EntityAggregateListSchema = z.array(EntityAggregateSchema).openapi('EntityAggregateList')

const DescribeEntityAggregatesResponseSchema = z
  .object({
    entityAggregates: EntityAggregateListSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of entities that are affected by each of the specified events.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntityAggregatesResponse')

const EventArnsListSchema = z.array(EventArnSchema).min(1).max(50).openapi('EventArnsList')

const DescribeEntityAggregatesRequestSchema = z
  .object({
    eventArns: EventArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEntityAggregatesRequest', required: [] })
  .openapi('DescribeEntityAggregatesRequest')

const AggregateValueSchema = z.string().openapi('AggregateValue')

const EventAggregateSchema = z
  .object({
    aggregateValue: AggregateValueSchema.and(
      z.any().openapi({ description: 'The issue type for the associated count.' }),
    ).exactOptional(),
    count: CountSchema.and(
      z.any().openapi({ description: 'The number of events of the associated issue type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation.',
    required: [],
  })
  .openapi('EventAggregate')

const EventAggregateListSchema = z.array(EventAggregateSchema).openapi('EventAggregateList')

const DescribeEventAggregatesResponseSchema = z
  .object({
    eventAggregates: EventAggregateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of events in each category that meet the optional filter criteria.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventAggregatesResponse')

const EventType2Schema = z
  .string()
  .regex(/[^:\/]{3,100}/)
  .min(3)
  .max(100)
  .openapi('EventType2')

const EventTypeList2Schema = z.array(EventType2Schema).min(1).max(10).openapi('EventTypeList2')

const ServiceSchema = z
  .string()
  .regex(/[^:\/]{2,30}/)
  .min(2)
  .max(30)
  .openapi('Service')

const ServiceListSchema = z.array(ServiceSchema).min(1).max(10).openapi('ServiceList')

const RegionSchema = z
  .string()
  .regex(/[^:\/]{2,25}/)
  .min(2)
  .max(25)
  .openapi('Region')

const RegionListSchema = z.array(RegionSchema).min(1).max(10).openapi('RegionList')

const AvailabilityZoneSchema = z
  .string()
  .regex(/[a-z]{2}\-[0-9a-z\-]{4,16}/)
  .min(6)
  .max(18)
  .openapi('AvailabilityZone')

const AvailabilityZonesSchema = z.array(AvailabilityZoneSchema).openapi('AvailabilityZones')

const EventTypeCategorySchema = z
  .enum(['issue', 'accountNotification', 'scheduledChange', 'investigation'])
  .openapi('EventTypeCategory')

const EventTypeCategoryListSchema = z
  .array(EventTypeCategorySchema)
  .min(1)
  .max(10)
  .openapi('EventTypeCategoryList')

const EventStatusCodeSchema = z.enum(['open', 'closed', 'upcoming']).openapi('EventStatusCode')

const EventStatusCodeListSchema = z
  .array(EventStatusCodeSchema)
  .min(1)
  .max(6)
  .openapi('EventStatusCodeList')

const EventFilterSchema = z
  .object({
    eventArns: EventArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> ',
        }),
    ).exactOptional(),
    eventTypeCodes: EventTypeList2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code> ',
        }),
    ).exactOptional(),
    services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.',
        }),
    ).exactOptional(),
    regions: RegionListSchema.and(
      z.any().openapi({ description: 'A list of Amazon Web Services Regions.' }),
    ).exactOptional(),
    availabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'A list of Amazon Web Services Availability Zones.' }),
    ).exactOptional(),
    startTimes: DateTimeRangeListSchema.and(
      z.any().openapi({ description: 'A list of dates and times that the event began.' }),
    ).exactOptional(),
    endTimes: DateTimeRangeListSchema.and(
      z.any().openapi({ description: 'A list of dates and times that the event ended.' }),
    ).exactOptional(),
    lastUpdatedTimes: DateTimeRangeListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of dates and times that the event was last updated.' }),
    ).exactOptional(),
    entityArns: EntityArnListSchema.and(
      z.any().openapi({ description: 'A list of entity ARNs (unique identifiers).' }),
    ).exactOptional(),
    entityValues: EntityValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS volumes (<code>vol-426ab23e</code>).',
        }),
    ).exactOptional(),
    eventTypeCategories: EventTypeCategoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
    tags: TagFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of entity tags attached to the affected entity.</p> <note> <p>Currently, the <code>tags</code> property isn't supported.</p> </note>",
        }),
    ).exactOptional(),
    eventStatusCodes: EventStatusCodeListSchema.and(
      z.any().openapi({ description: 'A list of event status codes.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations.',
    required: [],
  })
  .openapi('EventFilter')

const EventAggregateFieldSchema = z.literal('eventTypeCategory').openapi('EventAggregateField')

const DescribeEventAggregatesRequestSchema = z
  .object({
    filter: EventFilterSchema.and(
      z.any().openapi({ description: 'Values to narrow the results returned.' }),
    ).exactOptional(),
    aggregateField: EventAggregateFieldSchema.and(
      z
        .any()
        .openapi({
          description: 'The only currently supported value is <code>eventTypeCategory</code>.',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['aggregateField'], title: 'DescribeEventAggregatesRequest' })
  .openapi('DescribeEventAggregatesRequest')

const EventTypeCodeSchema = z
  .string()
  .regex(/[a-zA-Z0-9\_\-]{3,100}/)
  .min(3)
  .max(100)
  .openapi('EventTypeCode')

const EventSchema = z
  .object({
    arn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.',
        }),
    ).exactOptional(),
    eventTypeCode: EventTypeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.',
        }),
    ).exactOptional(),
    eventTypeCategory: EventTypeCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region name of the event.' }),
    ).exactOptional(),
    availabilityZone: AvailabilityZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Availability Zone of the event. For example, us-east-1a.',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event began.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event ended.' }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The most recent date and time that the event was updated.' }),
    ).exactOptional(),
    statusCode: EventStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The most recent status of the event. Possible values are <code>open</code>, <code>closed</code>, and <code>upcoming</code>.',
        }),
    ).exactOptional(),
    eventScopeCode: EventScopeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p> <ul> <li> <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the <code>affectedAccounts</code> value is always empty.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the <code>eventArn</code> that you specified in the request is invalid or doesn't exist.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don\'t use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there\'s an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>',
    required: [],
  })
  .openapi('Event')

const EventDescriptionSchema = z.string().openapi('EventDescription')

const EventDescription2Schema = z
  .object({
    latestDescription: EventDescriptionSchema.and(
      z.any().openapi({ description: 'The most recent description of the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.',
    required: [],
  })
  .openapi('EventDescription2')

const MetadataValueSchema = z.string().max(32766).openapi('MetadataValue')

const EventMetadataSchema = z.record(z.string(), MetadataValueSchema).openapi('EventMetadata')

const EventDetailsSchema = z
  .object({
    event: EventSchema.and(
      z.any().openapi({ description: 'Summary information about the event.' }),
    ).exactOptional(),
    eventDescription: EventDescription2Schema.and(
      z.any().openapi({ description: 'The most recent description of the event.' }),
    ).exactOptional(),
    eventMetadata: EventMetadataSchema.and(
      z.any().openapi({ description: 'Additional metadata about the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.',
    required: [],
  })
  .openapi('EventDetails')

const DescribeEventDetailsSuccessfulSetSchema = z
  .array(EventDetailsSchema)
  .openapi('DescribeEventDetailsSuccessfulSet')

const EventDetailsErrorItemSchema = z
  .object({
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    errorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the error.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can\'t find a specified event.',
    required: [],
  })
  .openapi('EventDetailsErrorItem')

const DescribeEventDetailsFailedSetSchema = z
  .array(EventDetailsErrorItemSchema)
  .openapi('DescribeEventDetailsFailedSet')

const DescribeEventDetailsResponseSchema = z
  .object({
    successfulSet: DescribeEventDetailsSuccessfulSetSchema.and(
      z.any().openapi({ description: 'Information about the events that could be retrieved.' }),
    ).exactOptional(),
    failedSet: DescribeEventDetailsFailedSetSchema.and(
      z
        .any()
        .openapi({ description: 'Error messages for any events that could not be retrieved.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventDetailsResponse')

const DescribeEventDetailsRequestSchema = z
  .object({
    eventArns: EventArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> ',
        }),
    ),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['eventArns'], title: 'DescribeEventDetailsRequest' })
  .openapi('DescribeEventDetailsRequest')

const OrganizationEventDetailsSchema = z
  .object({
    awsAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit Amazon Web Services account numbers that contains the affected entities.',
        }),
    ).exactOptional(),
    event: EventSchema.exactOptional(),
    eventDescription: EventDescription2Schema.exactOptional(),
    eventMetadata: EventMetadataSchema.and(
      z.any().openapi({ description: 'Additional metadata about the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation.',
    required: [],
  })
  .openapi('OrganizationEventDetails')

const DescribeEventDetailsForOrganizationSuccessfulSetSchema = z
  .array(OrganizationEventDetailsSchema)
  .openapi('DescribeEventDetailsForOrganizationSuccessfulSet')

const OrganizationEventDetailsErrorItemSchema = z
  .object({
    awsAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can\'t find a specified event.',
        }),
    ).exactOptional(),
    eventArn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    errorName: StringSchema.and(
      z.any().openapi({ description: 'The name of the error.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A message that describes the error.</p> <p>If you call the <code>DescribeEventDetailsForOrganization</code> operation and receive one of the following errors, follow the recommendations in the message:</p> <ul> <li> <p>We couldn't find a public event that matches your request. To find an event that is account specific, you must enter an Amazon Web Services account ID in the request.</p> </li> <li> <p>We couldn't find an account specific event for the specified Amazon Web Services account. To find an event that is public, you must enter a null value for the Amazon Web Services account ID in the request.</p> </li> <li> <p>Your Amazon Web Services account doesn't include the Amazon Web Services Support plan required to use the Health API. You must have either a Business, Enterprise On-Ramp, or Enterprise Support plan.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can\'t find a specified event.',
    required: [],
  })
  .openapi('OrganizationEventDetailsErrorItem')

const DescribeEventDetailsForOrganizationFailedSetSchema = z
  .array(OrganizationEventDetailsErrorItemSchema)
  .openapi('DescribeEventDetailsForOrganizationFailedSet')

const DescribeEventDetailsForOrganizationResponseSchema = z
  .object({
    successfulSet: DescribeEventDetailsForOrganizationSuccessfulSetSchema.and(
      z.any().openapi({ description: 'Information about the events that could be retrieved.' }),
    ).exactOptional(),
    failedSet: DescribeEventDetailsForOrganizationFailedSetSchema.and(
      z
        .any()
        .openapi({ description: 'Error messages for any events that could not be retrieved.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventDetailsForOrganizationResponse')

const OrganizationEventDetailFiltersListSchema = z
  .array(EventAccountFilterSchema)
  .min(1)
  .max(10)
  .openapi('OrganizationEventDetailFiltersList')

const DescribeEventDetailsForOrganizationRequestSchema = z
  .object({
    organizationEventDetailFilters: OrganizationEventDetailFiltersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of JSON elements that includes the <code>awsAccountId</code> and the <code>eventArn</code>.',
        }),
    ),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['organizationEventDetailFilters'],
    title: 'DescribeEventDetailsForOrganizationRequest',
  })
  .openapi('DescribeEventDetailsForOrganizationRequest')

const EventTypeSchema = z
  .object({
    service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.',
        }),
    ).exactOptional(),
    code: EventTypeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.',
        }),
    ).exactOptional(),
    category: EventTypeCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the metadata about a type of event that is reported by Health. The <code>EventType</code> shows the category, service, and the event type code of the event. For example, an <code>issue</code> might be the category, <code>EC2</code> the service, and <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code> the event type code.</p> <p>You can use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> API operation to return this information about an event.</p> <p>You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or take action when Health delivers a specific event to your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html">Monitor for Health events with Amazon CloudWatch Events</a> in the <i>Health User Guide</i>.</p>',
    required: [],
  })
  .openapi('EventType')

const EventTypeListSchema = z.array(EventTypeSchema).openapi('EventTypeList')

const DescribeEventTypesResponseSchema = z
  .object({
    eventTypes: EventTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event types that match the filter criteria. Event types have a category (<code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>), a service (for example, <code>EC2</code>, <code>RDS</code>, <code>DATAPIPELINE</code>, <code>BILLING</code>), and a code (in the format <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventTypesResponse')

const EventTypeCodeListSchema = z
  .array(EventTypeCodeSchema)
  .min(1)
  .max(10)
  .openapi('EventTypeCodeList')

const EventTypeCategoryList2Schema = z
  .array(EventTypeCategorySchema)
  .min(1)
  .max(10)
  .openapi('EventTypeCategoryList2')

const EventTypeFilterSchema = z
  .object({
    eventTypeCodes: EventTypeCodeListSchema.and(
      z.any().openapi({ description: 'A list of event type codes.' }),
    ).exactOptional(),
    services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.',
        }),
    ).exactOptional(),
    eventTypeCategories: EventTypeCategoryList2Schema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> operation.',
    required: [],
  })
  .openapi('EventTypeFilter')

const DescribeEventTypesRequestSchema = z
  .object({
    filter: EventTypeFilterSchema.and(
      z.any().openapi({ description: 'Values to narrow the results returned.' }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventTypesRequest', required: [] })
  .openapi('DescribeEventTypesRequest')

const EventListSchema = z.array(EventSchema).openapi('EventList')

const DescribeEventsResponseSchema = z
  .object({
    events: EventListSchema.and(
      z.any().openapi({ description: 'The events that match the specified filter criteria.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventsResponse')

const DescribeEventsRequestSchema = z
  .object({
    filter: EventFilterSchema.and(
      z.any().openapi({ description: 'Values to narrow the results returned.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventsRequest', required: [] })
  .openapi('DescribeEventsRequest')

const OrganizationEventSchema = z
  .object({
    arn: EventArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the event. The event ARN has the <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code> format.</p> <p>For example, an event ARN might look like the following:</p> <p> <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>',
        }),
    ).exactOptional(),
    service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service that is affected by the event, such as EC2 and RDS.',
        }),
    ).exactOptional(),
    eventTypeCode: EventTypeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the event type. The format is <code>AWS_SERVICE_DESCRIPTION</code>. For example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.',
        }),
    ).exactOptional(),
    eventTypeCategory: EventTypeCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
    eventScopeCode: EventScopeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p> <ul> <li> <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the <code>affectedAccounts</code> value is always empty.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.</p> </li> <li> <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the <code>eventArn</code> that you specified in the request is invalid or doesn't exist.</p> </li> </ul>",
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region name of the event.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event began.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event ended.' }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The most recent date and time that the event was updated.' }),
    ).exactOptional(),
    statusCode: EventStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The most recent status of the event. Possible values are <code>open</code>, <code>closed</code>, and <code>upcoming</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.',
    required: [],
  })
  .openapi('OrganizationEvent')

const OrganizationEventListSchema = z
  .array(OrganizationEventSchema)
  .openapi('OrganizationEventList')

const DescribeEventsForOrganizationResponseSchema = z
  .object({
    events: OrganizationEventListSchema.and(
      z.any().openapi({ description: 'The events that match the specified filter criteria.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventsForOrganizationResponse')

const AwsAccountIdsListSchema = z.array(AccountIdSchema).min(1).max(50).openapi('AwsAccountIdsList')

const OrganizationEventFilterSchema = z
  .object({
    eventTypeCodes: EventTypeList2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code> ',
        }),
    ).exactOptional(),
    awsAccountIds: AwsAccountIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of 12-digit Amazon Web Services account numbers that contains the affected entities.',
        }),
    ).exactOptional(),
    services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.',
        }),
    ).exactOptional(),
    regions: RegionListSchema.and(
      z.any().openapi({ description: 'A list of Amazon Web Services Regions.' }),
    ).exactOptional(),
    startTime: DateTimeRangeSchema.exactOptional(),
    endTime: DateTimeRangeSchema.exactOptional(),
    lastUpdatedTime: DateTimeRangeSchema.exactOptional(),
    entityArns: EntityArnListSchema.and(
      z.any().openapi({ description: 'A list of entity ARNs (unique identifiers).' }),
    ).exactOptional(),
    entityValues: EntityValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).',
        }),
    ).exactOptional(),
    eventTypeCategories: EventTypeCategoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of event type category codes. Possible values are <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently, the <code>investigation</code> value isn't supported at this time.",
        }),
    ).exactOptional(),
    eventStatusCodes: EventStatusCodeListSchema.and(
      z.any().openapi({ description: 'A list of event status codes.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.',
    required: [],
  })
  .openapi('OrganizationEventFilter')

const DescribeEventsForOrganizationRequestSchema = z
  .object({
    filter: OrganizationEventFilterSchema.and(
      z.any().openapi({ description: 'Values to narrow the results returned.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsLowerRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in one batch, between 10 and 100, inclusive.',
        }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale (language) to return information in. English (en) is the default and the only supported value at this time.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventsForOrganizationRequest', required: [] })
  .openapi('DescribeEventsForOrganizationRequest')

const HealthServiceAccessStatusForOrganizationSchema = z
  .string()
  .openapi('HealthServiceAccessStatusForOrganization')

const DescribeHealthServiceStatusForOrganizationResponseSchema = z
  .object({
    healthServiceAccessStatusForOrganization: HealthServiceAccessStatusForOrganizationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the status of enabling or disabling the Health organizational view feature in your organization.</p> <p>Valid values are <code>ENABLED | DISABLED | PENDING</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeHealthServiceStatusForOrganizationResponse')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const MetadataKeySchema = z.string().max(32766).openapi('MetadataKey')

const TagKeySchema = z
  .string()
  .regex(/.{0,127}/)
  .max(127)
  .openapi('TagKey')

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

export const postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization',
    description:
      '<p>Returns a list of accounts in the organization from Organizations that are affected by the provided event. For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization\'s management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>',
    operationId: 'DescribeAffectedAccountsForOrganization',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSHealth_20160804.DescribeAffectedAccountsForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHealth_20160804.DescribeAffectedAccountsForOrganization'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeAffectedAccountsForOrganizationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAffectedAccountsForOrganizationResponseSchema },
        },
      },
      480: {
        description: 'InvalidPaginationToken',
        content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
      },
    },
  })

export const postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities',
  description:
    '<p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>',
  operationId: 'DescribeAffectedEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeAffectedEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeAffectedEntities'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAffectedEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAffectedEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationToken',
      content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
    },
    481: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization',
    description:
      '<p>Returns a list of entities that have been affected by one or more events for one or more accounts in your organization in Organizations, based on the filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service.</p> <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization\'s management account.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation doesn\'t support resource-level permissions. You can\'t use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>',
    operationId: 'DescribeAffectedEntitiesForOrganization',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSHealth_20160804.DescribeAffectedEntitiesForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeAffectedEntitiesForOrganizationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAffectedEntitiesForOrganizationResponseSchema },
        },
      },
      480: {
        description: 'InvalidPaginationToken',
        content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
      },
      481: {
        description: 'UnsupportedLocale',
        content: { 'application/json': { schema: UnsupportedLocaleSchema } },
      },
    },
  })

export const postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates',
  description: 'Returns the number of entities that are affected by each of the specified events.',
  operationId: 'DescribeEntityAggregates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEntityAggregates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEntityAggregates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEntityAggregatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEntityAggregatesResponseSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventAggregatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates',
  description:
    '<p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>',
  operationId: 'DescribeEventAggregates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEventAggregates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEventAggregates'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventAggregatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventAggregatesResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationToken',
      content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails',
  description:
    '<p>Returns detailed information about one or more specified events. Information includes standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included. To retrieve the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p> <p>If a specified event can\'t be retrieved, an error message is returned for that event.</p> <note> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>',
  operationId: 'DescribeEventDetails',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEventDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEventDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventDetailsResponseSchema } },
    },
    480: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization',
  description:
    '<p>Returns detailed information about one or more specified events for one or more Amazon Web Services accounts in your organization. This information includes standard event data (such as the Amazon Web Services Region and service), an event description, and (depending on the event) possible metadata. This operation doesn\'t return affected entities, such as the resources related to the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p> <note> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization\'s management account.</p> </note> <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify the <code>organizationEventDetailFilters</code> object in the request. Depending on the Health event type, note the following differences:</p> <ul> <li> <p>To return event details for a public event, you must specify a null value for the <code>awsAccountId</code> parameter. If you specify an account ID for a public event, Health returns an error message because public events aren\'t specific to an account.</p> </li> <li> <p>To return event details for an event that is specific to an account in your organization, you must specify the <code>awsAccountId</code> parameter in the request. If you don\'t specify an account ID, Health returns an error message because the event is specific to an account in your organization. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <note> <p>This operation doesn\'t support resource-level permissions. You can\'t use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>',
  operationId: 'DescribeEventDetailsForOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEventDetailsForOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHealth_20160804.DescribeEventDetailsForOrganization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventDetailsForOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeEventDetailsForOrganizationResponseSchema },
      },
    },
    480: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes',
  description:
    '<p>Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p> <p>If you don\'t specify a filter criteria, the API operation returns all event types, in no particular order. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>',
  operationId: 'DescribeEventTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEventTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEventTypes'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventTypesResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationToken',
      content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
    },
    481: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEvents',
  description:
    '<p> Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event.</p> <note> <ul> <li> <p>When you call the <code>DescribeEvents</code> operation and specify an entity for the <code>entityValues</code> parameter, Health might return public events that aren\'t specific to that resource. For example, if you call <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2) instance, Health might return events that aren\'t specific to that resource or service. To get events that are specific to a service, use the <code>services</code> parameter in the <code>filter</code> object. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> </li> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> </ul> </note>',
  operationId: 'DescribeEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEvents'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationToken',
      content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
    },
    481: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization',
  description:
    '<p>Returns information about events across your organization in Organizations. You can use the<code>filters</code> parameter to specify the events that you want to return. Events are returned in a summary form and don\'t include the affected accounts, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the following operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> </p> </li> </ul> <p>If you don\'t specify a <code>filter</code>, the <code>DescribeEventsForOrganizations</code> returns all events across your organization. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p> <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization\'s management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>',
  operationId: 'DescribeEventsForOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSHealth_20160804.DescribeEventsForOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHealth_20160804.DescribeEventsForOrganization'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsForOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsForOrganizationResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationToken',
      content: { 'application/json': { schema: InvalidPaginationTokenSchema } },
    },
    481: {
      description: 'UnsupportedLocale',
      content: { 'application/json': { schema: UnsupportedLocaleSchema } },
    },
  },
})

export const postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization',
    description:
      "This operation provides status information on enabling or disabling Health to work with your organization. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's management account.",
    operationId: 'DescribeHealthServiceStatusForOrganization',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSHealth_20160804.DescribeHealthServiceStatusForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'],
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeHealthServiceStatusForOrganizationResponseSchema },
        },
      },
    },
  })

export const postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization',
    description:
      '<p>Disables Health from working with Organizations. To call this operation, you must sign in as an Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not recommended) in the organization\'s management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p> <p>This operation doesn\'t remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.</p> </note>',
    operationId: 'DisableHealthServiceAccessForOrganization',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSHealth_20160804.DisableHealthServiceAccessForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHealth_20160804.DisableHealthServiceAccessForOrganization'],
              },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization',
    description:
      '<p>Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. </p> <p>This operation also creates a service-linked role for the management account in the organization. </p> <note> <p>To call this operation, you must meet the following requirements:</p> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an Amazon Web Services account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a <code>SubscriptionRequiredException</code> error.</p> </li> <li> <p>You must have permission to call this operation from the organization\'s management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">Health identity-based policy examples</a>.</p> </li> </ul> </note> <p>If you don\'t have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p>',
    operationId: 'EnableHealthServiceAccessForOrganization',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSHealth_20160804.EnableHealthServiceAccessForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHealth_20160804.EnableHealthServiceAccessForOrganization'],
              },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
    },
  })
