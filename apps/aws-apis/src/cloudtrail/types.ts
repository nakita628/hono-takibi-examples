type AddTagsRequest = { ResourceId: {}; TagsList: {} }
type AddTagsResponse = { [x: string]: unknown }
type CancelQueryRequest = { EventDataStore?: {} | undefined; QueryId: {} }
type CancelQueryResponse = { QueryId: {}; QueryStatus: {} }
type Tag = { Key: {}; Value?: {} | undefined }
type TagsList = Tag[]
type CreateChannelRequest = { Name: {}; Source: {}; Destinations: {}; Tags?: TagsList | undefined }
type CreateChannelResponse = {
  ChannelArn?: {} | undefined
  Name?: {} | undefined
  Source?: {} | undefined
  Destinations?: {} | undefined
  Tags?: TagsList | undefined
}
type CreateEventDataStoreRequest = {
  Name: {}
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  TagsList?: TagsList | undefined
  KmsKeyId?: {} | undefined
}
type CreateEventDataStoreResponse = {
  EventDataStoreArn?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  TagsList?: TagsList | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  KmsKeyId?: {} | undefined
}
type CreateTrailRequest = {
  Name: {}
  S3BucketName: {}
  S3KeyPrefix?: {} | undefined
  SnsTopicName?: {} | undefined
  IncludeGlobalServiceEvents?: {} | undefined
  IsMultiRegionTrail?: {} | undefined
  EnableLogFileValidation?: {} | undefined
  CloudWatchLogsLogGroupArn?: {} | undefined
  CloudWatchLogsRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  IsOrganizationTrail?: {} | undefined
  TagsList?: TagsList | undefined
}
type CreateTrailResponse = {
  Name?: {} | undefined
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  SnsTopicName?: {} | undefined
  SnsTopicARN?: {} | undefined
  IncludeGlobalServiceEvents?: {} | undefined
  IsMultiRegionTrail?: {} | undefined
  TrailARN?: {} | undefined
  LogFileValidationEnabled?: {} | undefined
  CloudWatchLogsLogGroupArn?: {} | undefined
  CloudWatchLogsRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  IsOrganizationTrail?: {} | undefined
}
type InvalidTagParameterException = { [x: string]: unknown }
type UnsupportedOperationException = { [x: string]: unknown }
type OperationNotPermittedException = { [x: string]: unknown }
type CloudTrailAccessNotEnabledException = { [x: string]: unknown }
type InsufficientDependencyServiceAccessPermissionException = { [x: string]: unknown }
type NotOrganizationMasterAccountException = { [x: string]: unknown }
type OrganizationsNotInUseException = { [x: string]: unknown }
type OrganizationNotInAllFeaturesModeException = { [x: string]: unknown }
type NoManagementAccountSLRExistsException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type DeleteChannelRequest = { Channel: {} }
type DeleteChannelResponse = { [x: string]: unknown }
type DeleteEventDataStoreRequest = { EventDataStore: {} }
type DeleteEventDataStoreResponse = { [x: string]: unknown }
type DeleteResourcePolicyRequest = { ResourceArn: {} }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DeleteTrailRequest = { Name: {} }
type DeleteTrailResponse = { [x: string]: unknown }
type DeregisterOrganizationDelegatedAdminRequest = { DelegatedAdminAccountId: {} }
type DeregisterOrganizationDelegatedAdminResponse = { [x: string]: unknown }
type DescribeQueryRequest = { EventDataStore?: {} | undefined; QueryId: {} }
type DescribeQueryResponse = {
  QueryId?: {} | undefined
  QueryString?: {} | undefined
  QueryStatus?: {} | undefined
  QueryStatistics?:
    | {
        EventsMatched?: {} | undefined
        EventsScanned?: {} | undefined
        BytesScanned?: {} | undefined
        ExecutionTimeInMillis?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
  ErrorMessage?: {} | undefined
  DeliveryS3Uri?: {} | undefined
  DeliveryStatus?: {} | undefined
}
type DescribeTrailsRequest = {
  trailNameList?: {} | undefined
  includeShadowTrails?: {} | undefined
}
type DescribeTrailsResponse = { trailList?: {} | undefined }
type GetChannelRequest = { Channel: {} }
type GetChannelResponse = {
  ChannelArn?: {} | undefined
  Name?: {} | undefined
  Source?: {} | undefined
  SourceConfig?:
    | { ApplyToAllRegions?: {} | undefined; AdvancedEventSelectors?: {} | undefined }
    | undefined
  Destinations?: {} | undefined
  IngestionStatus?:
    | {
        LatestIngestionSuccessTime?: {} | undefined
        LatestIngestionSuccessEventID?: {} | undefined
        LatestIngestionErrorCode?: {} | undefined
        LatestIngestionAttemptTime?: {} | undefined
        LatestIngestionAttemptEventID?: {} | undefined
      }
    | undefined
}
type GetEventDataStoreRequest = { EventDataStore: {} }
type GetEventDataStoreResponse = {
  EventDataStoreArn?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  KmsKeyId?: {} | undefined
}
type GetEventSelectorsRequest = { TrailName: {} }
type GetEventSelectorsResponse = {
  TrailARN?: {} | undefined
  EventSelectors?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
}
type GetImportRequest = { ImportId: {} }
type GetImportResponse = {
  ImportId?: {} | undefined
  Destinations?: {} | undefined
  ImportSource?:
    | { S3: { S3LocationUri: {}; S3BucketRegion: {}; S3BucketAccessRoleArn: {} } }
    | undefined
  StartEventTime?: {} | undefined
  EndEventTime?: {} | undefined
  ImportStatus?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  ImportStatistics?:
    | {
        PrefixesFound?: {} | undefined
        PrefixesCompleted?: {} | undefined
        FilesCompleted?: {} | undefined
        EventsCompleted?: {} | undefined
        FailedEntries?: {} | undefined
      }
    | undefined
}
type GetInsightSelectorsRequest = { TrailName: {} }
type GetInsightSelectorsResponse = { TrailARN?: {} | undefined; InsightSelectors?: {} | undefined }
type GetQueryResultsRequest = {
  EventDataStore?: {} | undefined
  QueryId: {}
  NextToken?: {} | undefined
  MaxQueryResults?: {} | undefined
}
type GetQueryResultsResponse = {
  QueryStatus?: {} | undefined
  QueryStatistics?:
    | {
        ResultsCount?: {} | undefined
        TotalResultsCount?: {} | undefined
        BytesScanned?: {} | undefined
      }
    | undefined
  QueryResultRows?: {} | undefined
  NextToken?: {} | undefined
  ErrorMessage?: {} | undefined
}
type GetResourcePolicyRequest = { ResourceArn: {} }
type GetResourcePolicyResponse = { ResourceArn?: {} | undefined; ResourcePolicy?: {} | undefined }
type GetTrailRequest = { Name: {} }
type Trail = {
  Name?: {} | undefined
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  SnsTopicName?: {} | undefined
  SnsTopicARN?: {} | undefined
  IncludeGlobalServiceEvents?: {} | undefined
  IsMultiRegionTrail?: {} | undefined
  HomeRegion?: {} | undefined
  TrailARN?: {} | undefined
  LogFileValidationEnabled?: {} | undefined
  CloudWatchLogsLogGroupArn?: {} | undefined
  CloudWatchLogsRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  HasCustomEventSelectors?: {} | undefined
  HasInsightSelectors?: {} | undefined
  IsOrganizationTrail?: {} | undefined
}
type GetTrailResponse = { Trail?: Trail | undefined }
type GetTrailStatusRequest = { Name: {} }
type GetTrailStatusResponse = {
  IsLogging?: {} | undefined
  LatestDeliveryError?: {} | undefined
  LatestNotificationError?: {} | undefined
  LatestDeliveryTime?: {} | undefined
  LatestNotificationTime?: {} | undefined
  StartLoggingTime?: {} | undefined
  StopLoggingTime?: {} | undefined
  LatestCloudWatchLogsDeliveryError?: {} | undefined
  LatestCloudWatchLogsDeliveryTime?: {} | undefined
  LatestDigestDeliveryTime?: {} | undefined
  LatestDigestDeliveryError?: {} | undefined
  LatestDeliveryAttemptTime?: {} | undefined
  LatestNotificationAttemptTime?: {} | undefined
  LatestNotificationAttemptSucceeded?: {} | undefined
  LatestDeliveryAttemptSucceeded?: {} | undefined
  TimeLoggingStarted?: {} | undefined
  TimeLoggingStopped?: {} | undefined
}
type ListChannelsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListChannelsResponse = { Channels?: {} | undefined; NextToken?: {} | undefined }
type ListEventDataStoresRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListEventDataStoresResponse = { EventDataStores?: {} | undefined; NextToken?: {} | undefined }
type ListImportFailuresRequest = {
  ImportId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListImportFailuresResponse = { Failures?: {} | undefined; NextToken?: {} | undefined }
type ListImportsRequest = {
  MaxResults?: {} | undefined
  Destination?: {} | undefined
  ImportStatus?: {} | undefined
  NextToken?: {} | undefined
}
type ListImportsResponse = { Imports?: {} | undefined; NextToken?: {} | undefined }
type ListPublicKeysRequest = {
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  NextToken?: {} | undefined
}
type ListPublicKeysResponse = { PublicKeyList?: {} | undefined; NextToken?: {} | undefined }
type ListQueriesRequest = {
  EventDataStore: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  QueryStatus?: {} | undefined
}
type ListQueriesResponse = { Queries?: {} | undefined; NextToken?: {} | undefined }
type ListTagsRequest = { ResourceIdList: {}; NextToken?: {} | undefined }
type ListTagsResponse = { ResourceTagList?: {} | undefined; NextToken?: {} | undefined }
type ListTrailsRequest = { NextToken?: {} | undefined }
type ListTrailsResponse = { Trails?: {} | undefined; NextToken?: {} | undefined }
type LookupEventsRequest = {
  LookupAttributes?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  EventCategory?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type LookupEventsResponse = { Events?: {} | undefined; NextToken?: {} | undefined }
type PutEventSelectorsRequest = {
  TrailName: {}
  EventSelectors?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
}
type PutEventSelectorsResponse = {
  TrailARN?: {} | undefined
  EventSelectors?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
}
type PutInsightSelectorsRequest = { TrailName: {}; InsightSelectors: {} }
type PutInsightSelectorsResponse = { TrailARN?: {} | undefined; InsightSelectors?: {} | undefined }
type PutResourcePolicyRequest = { ResourceArn: {}; ResourcePolicy: {} }
type PutResourcePolicyResponse = { ResourceArn?: {} | undefined; ResourcePolicy?: {} | undefined }
type RegisterOrganizationDelegatedAdminRequest = { MemberAccountId: {} }
type RegisterOrganizationDelegatedAdminResponse = { [x: string]: unknown }
type RemoveTagsRequest = { ResourceId: {}; TagsList: {} }
type RemoveTagsResponse = { [x: string]: unknown }
type RestoreEventDataStoreRequest = { EventDataStore: {} }
type RestoreEventDataStoreResponse = {
  EventDataStoreArn?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  KmsKeyId?: {} | undefined
}
type StartImportRequest = {
  Destinations?: {} | undefined
  ImportSource?:
    | { S3: { S3LocationUri: {}; S3BucketRegion: {}; S3BucketAccessRoleArn: {} } }
    | undefined
  StartEventTime?: {} | undefined
  EndEventTime?: {} | undefined
  ImportId?: {} | undefined
}
type StartImportResponse = {
  ImportId?: {} | undefined
  Destinations?: {} | undefined
  ImportSource?:
    | { S3: { S3LocationUri: {}; S3BucketRegion: {}; S3BucketAccessRoleArn: {} } }
    | undefined
  StartEventTime?: {} | undefined
  EndEventTime?: {} | undefined
  ImportStatus?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
}
type StartLoggingRequest = { Name: {} }
type StartLoggingResponse = { [x: string]: unknown }
type StartQueryRequest = { QueryStatement: {}; DeliveryS3Uri?: {} | undefined }
type StartQueryResponse = { QueryId?: {} | undefined }
type StopImportRequest = { ImportId: {} }
type StopImportResponse = {
  ImportId?: {} | undefined
  ImportSource?:
    | { S3: { S3LocationUri: {}; S3BucketRegion: {}; S3BucketAccessRoleArn: {} } }
    | undefined
  Destinations?: {} | undefined
  ImportStatus?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  StartEventTime?: {} | undefined
  EndEventTime?: {} | undefined
  ImportStatistics?:
    | {
        PrefixesFound?: {} | undefined
        PrefixesCompleted?: {} | undefined
        FilesCompleted?: {} | undefined
        EventsCompleted?: {} | undefined
        FailedEntries?: {} | undefined
      }
    | undefined
}
type StopLoggingRequest = { Name: {} }
type StopLoggingResponse = { [x: string]: unknown }
type UpdateChannelRequest = { Channel: {}; Destinations?: {} | undefined; Name?: {} | undefined }
type UpdateChannelResponse = {
  ChannelArn?: {} | undefined
  Name?: {} | undefined
  Source?: {} | undefined
  Destinations?: {} | undefined
}
type UpdateEventDataStoreRequest = {
  EventDataStore: {}
  Name?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  KmsKeyId?: {} | undefined
}
type UpdateEventDataStoreResponse = {
  EventDataStoreArn?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  AdvancedEventSelectors?: {} | undefined
  MultiRegionEnabled?: {} | undefined
  OrganizationEnabled?: {} | undefined
  RetentionPeriod?: {} | undefined
  TerminationProtectionEnabled?: {} | undefined
  CreatedTimestamp?: {} | undefined
  UpdatedTimestamp?: {} | undefined
  KmsKeyId?: {} | undefined
}
type UpdateTrailRequest = {
  Name: {}
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  SnsTopicName?: {} | undefined
  IncludeGlobalServiceEvents?: {} | undefined
  IsMultiRegionTrail?: {} | undefined
  EnableLogFileValidation?: {} | undefined
  CloudWatchLogsLogGroupArn?: {} | undefined
  CloudWatchLogsRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  IsOrganizationTrail?: {} | undefined
}
type UpdateTrailResponse = {
  Name?: {} | undefined
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  SnsTopicName?: {} | undefined
  SnsTopicARN?: {} | undefined
  IncludeGlobalServiceEvents?: {} | undefined
  IsMultiRegionTrail?: {} | undefined
  TrailARN?: {} | undefined
  LogFileValidationEnabled?: {} | undefined
  CloudWatchLogsLogGroupArn?: {} | undefined
  CloudWatchLogsRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  IsOrganizationTrail?: {} | undefined
}
type InvalidCloudWatchLogsRoleArnException = { [x: string]: unknown }
type CloudWatchLogsDeliveryUnavailableException = { [x: string]: unknown }
type CloudTrailInvalidClientTokenIdException = { [x: string]: unknown }
type InvalidParameterException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsRequest }
        output: AddTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelQueryRequest }
        output: CancelQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateChannelRequest }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEventDataStoreRequest }
        output: CreateEventDataStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: CreateTrailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: InvalidTagParameterException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrailRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 510
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteChannelRequest }
        output: DeleteChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventDataStoreRequest }
        output: DeleteEventDataStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyRequest }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTrailRequest }
        output: DeleteTrailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterOrganizationDelegatedAdminRequest }
        output: DeregisterOrganizationDelegatedAdminResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeQueryRequest }
        output: DescribeQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrailsRequest }
        output: DescribeTrailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetChannelRequest }
        output: GetChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventDataStoreRequest }
        output: GetEventDataStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEventSelectorsRequest }
        output: GetEventSelectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetImportRequest }
        output: GetImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInsightSelectorsRequest }
        output: GetInsightSelectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueryResultsRequest }
        output: GetQueryResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePolicyRequest }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTrailRequest }
        output: GetTrailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTrailStatusRequest }
        output: GetTrailStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListChannelsRequest }
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEventDataStoresRequest }
        output: ListEventDataStoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListImportFailuresRequest }
        output: ListImportFailuresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListImportsRequest }
        output: ListImportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPublicKeysRequest }
        output: ListPublicKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQueriesRequest }
        output: ListQueriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsRequest }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTrailsRequest }
        output: ListTrailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LookupEventsRequest }
        output: LookupEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutEventSelectorsRequest }
        output: PutEventSelectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInsightSelectorsRequest }
        output: PutInsightSelectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourcePolicyRequest }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterOrganizationDelegatedAdminRequest }
        output: RegisterOrganizationDelegatedAdminResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsRequest }
        output: RemoveTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreEventDataStoreRequest }
        output: RestoreEventDataStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartImportRequest }
        output: StartImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartLoggingRequest }
        output: StartLoggingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartQueryRequest }
        output: StartQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopImportRequest }
        output: StopImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopLoggingRequest }
        output: StopLoggingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateChannelRequest }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEventDataStoreRequest }
        output: UpdateEventDataStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: UpdateTrailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: InvalidCloudWatchLogsRoleArnException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: CloudWatchLogsDeliveryUnavailableException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: CloudTrailInvalidClientTokenIdException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrailRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 511
          }
    }
  },
  '/'
>
export default routes
