type DescribeAffectedAccountsForOrganizationRequest = {
  eventArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeAffectedAccountsForOrganizationResponse = {
  affectedAccounts?: {} | undefined
  eventScopeCode?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeAffectedEntitiesRequest = {
  filter: {
    eventArns: {}
    entityArns?: {} | undefined
    entityValues?: {} | undefined
    lastUpdatedTimes?: {} | undefined
    tags?: {} | undefined
    statusCodes?: {} | undefined
  }
  locale?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeAffectedEntitiesResponse = { entities?: {} | undefined; nextToken?: {} | undefined }
type DescribeAffectedEntitiesForOrganizationRequest = {
  organizationEntityFilters: {}
  locale?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeAffectedEntitiesForOrganizationResponse = {
  entities?: {} | undefined
  failedSet?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeEntityAggregatesRequest = { eventArns?: {} | undefined }
type DescribeEntityAggregatesResponse = { entityAggregates?: {} | undefined }
type DescribeEventAggregatesRequest = {
  filter?:
    | {
        eventArns?: {} | undefined
        eventTypeCodes?: {} | undefined
        services?: {} | undefined
        regions?: {} | undefined
        availabilityZones?: {} | undefined
        startTimes?: {} | undefined
        endTimes?: {} | undefined
        lastUpdatedTimes?: {} | undefined
        entityArns?: {} | undefined
        entityValues?: {} | undefined
        eventTypeCategories?: {} | undefined
        tags?: {} | undefined
        eventStatusCodes?: {} | undefined
      }
    | undefined
  aggregateField: {}
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeEventAggregatesResponse = {
  eventAggregates?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeEventDetailsRequest = { eventArns: {}; locale?: {} | undefined }
type DescribeEventDetailsResponse = { successfulSet?: {} | undefined; failedSet?: {} | undefined }
type DescribeEventDetailsForOrganizationRequest = {
  organizationEventDetailFilters: {}
  locale?: {} | undefined
}
type DescribeEventDetailsForOrganizationResponse = {
  successfulSet?: {} | undefined
  failedSet?: {} | undefined
}
type DescribeEventTypesRequest = {
  filter?:
    | {
        eventTypeCodes?: {} | undefined
        services?: {} | undefined
        eventTypeCategories?: {} | undefined
      }
    | undefined
  locale?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeEventTypesResponse = { eventTypes?: {} | undefined; nextToken?: {} | undefined }
type DescribeEventsRequest = {
  filter?:
    | {
        eventArns?: {} | undefined
        eventTypeCodes?: {} | undefined
        services?: {} | undefined
        regions?: {} | undefined
        availabilityZones?: {} | undefined
        startTimes?: {} | undefined
        endTimes?: {} | undefined
        lastUpdatedTimes?: {} | undefined
        entityArns?: {} | undefined
        entityValues?: {} | undefined
        eventTypeCategories?: {} | undefined
        tags?: {} | undefined
        eventStatusCodes?: {} | undefined
      }
    | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  locale?: {} | undefined
}
type DescribeEventsResponse = { events?: {} | undefined; nextToken?: {} | undefined }
type DateTimeRange = { from?: {} | undefined; to?: {} | undefined }
type DescribeEventsForOrganizationRequest = {
  filter?:
    | {
        eventTypeCodes?: {} | undefined
        awsAccountIds?: {} | undefined
        services?: {} | undefined
        regions?: {} | undefined
        startTime?: DateTimeRange | undefined
        endTime?: DateTimeRange | undefined
        lastUpdatedTime?: DateTimeRange | undefined
        entityArns?: {} | undefined
        entityValues?: {} | undefined
        eventTypeCategories?: {} | undefined
        eventStatusCodes?: {} | undefined
      }
    | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  locale?: {} | undefined
}
type DescribeEventsForOrganizationResponse = { events?: {} | undefined; nextToken?: {} | undefined }
type DescribeHealthServiceStatusForOrganizationResponse = {
  healthServiceAccessStatusForOrganization?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeAffectedAccountsForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAffectedAccountsForOrganizationRequest }
        output: DescribeAffectedAccountsForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeAffectedEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAffectedEntitiesRequest }
        output: DescribeAffectedEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAffectedEntitiesForOrganizationRequest }
        output: DescribeAffectedEntitiesForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEntityAggregates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEntityAggregatesRequest }
        output: DescribeEntityAggregatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEventAggregates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventAggregatesRequest }
        output: DescribeEventAggregatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEventDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventDetailsRequest }
        output: DescribeEventDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEventDetailsForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventDetailsForOrganizationRequest }
        output: DescribeEventDetailsForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEventTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventTypesRequest }
        output: DescribeEventTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEvents': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventsRequest }
        output: DescribeEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeEventsForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventsForOrganizationRequest }
        output: DescribeEventsForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeHealthServiceStatusForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.DisableHealthServiceAccessForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSHealth_20160804.EnableHealthServiceAccessForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
