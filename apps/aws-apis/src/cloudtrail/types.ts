type AddTagsRequest = { ResourceId: {}; TagsList: {} }
type AddTagsResponse = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type CloudTrailARNInvalidException = { [x: string]: unknown }
type ResourceTypeNotSupportedException = { [x: string]: unknown }
type TagsLimitExceededException = { [x: string]: unknown }
type InvalidTrailNameException = { [x: string]: unknown }
type InvalidTagParameterException = { [x: string]: unknown }
type InactiveEventDataStoreException = { [x: string]: unknown }
type EventDataStoreNotFoundException = { [x: string]: unknown }
type ChannelNotFoundException = { [x: string]: unknown }
type UnsupportedOperationException = { [x: string]: unknown }
type OperationNotPermittedException = { [x: string]: unknown }
type NotOrganizationMasterAccountException = { [x: string]: unknown }
type NoManagementAccountSLRExistsException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type CancelQueryRequest = { EventDataStore?: {} | undefined; QueryId: {} }
type CancelQueryResponse = { QueryId: {}; QueryStatus: {} }
type EventDataStoreARNInvalidException = { [x: string]: unknown }
type InactiveQueryException = { [x: string]: unknown }
type InvalidParameterException = { [x: string]: unknown }
type QueryIdNotFoundException = { [x: string]: unknown }
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
type ChannelMaxLimitExceededException = { [x: string]: unknown }
type InvalidSourceException = { [x: string]: unknown }
type ChannelAlreadyExistsException = { [x: string]: unknown }
type InvalidEventDataStoreCategoryException = { [x: string]: unknown }
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
type EventDataStoreAlreadyExistsException = { [x: string]: unknown }
type EventDataStoreMaxLimitExceededException = { [x: string]: unknown }
type InvalidEventSelectorsException = { [x: string]: unknown }
type InsufficientEncryptionPolicyException = { [x: string]: unknown }
type InvalidKmsKeyIdException = { [x: string]: unknown }
type KmsKeyNotFoundException = { [x: string]: unknown }
type KmsException = { [x: string]: unknown }
type CloudTrailAccessNotEnabledException = { [x: string]: unknown }
type InsufficientDependencyServiceAccessPermissionException = { [x: string]: unknown }
type OrganizationsNotInUseException = { [x: string]: unknown }
type OrganizationNotInAllFeaturesModeException = { [x: string]: unknown }
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
type MaximumNumberOfTrailsExceededException = { [x: string]: unknown }
type TrailAlreadyExistsException = { [x: string]: unknown }
type S3BucketDoesNotExistException = { [x: string]: unknown }
type InsufficientS3BucketPolicyException = { [x: string]: unknown }
type InsufficientSnsTopicPolicyException = { [x: string]: unknown }
type InvalidS3BucketNameException = { [x: string]: unknown }
type InvalidS3PrefixException = { [x: string]: unknown }
type InvalidSnsTopicNameException = { [x: string]: unknown }
type TrailNotProvidedException = { [x: string]: unknown }
type InvalidParameterCombinationException = { [x: string]: unknown }
type KmsKeyDisabledException = { [x: string]: unknown }
type InvalidCloudWatchLogsLogGroupArnException = { [x: string]: unknown }
type InvalidCloudWatchLogsRoleArnException = { [x: string]: unknown }
type CloudWatchLogsDeliveryUnavailableException = { [x: string]: unknown }
type CloudTrailInvalidClientTokenIdException = { [x: string]: unknown }
type DeleteChannelRequest = { Channel: {} }
type DeleteChannelResponse = { [x: string]: unknown }
type ChannelARNInvalidException = { [x: string]: unknown }
type DeleteEventDataStoreRequest = { EventDataStore: {} }
type DeleteEventDataStoreResponse = { [x: string]: unknown }
type EventDataStoreTerminationProtectedException = { [x: string]: unknown }
type EventDataStoreHasOngoingImportException = { [x: string]: unknown }
type ChannelExistsForEDSException = { [x: string]: unknown }
type DeleteResourcePolicyRequest = { ResourceArn: {} }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type ResourceARNNotValidException = { [x: string]: unknown }
type ResourcePolicyNotFoundException = { [x: string]: unknown }
type DeleteTrailRequest = { Name: {} }
type DeleteTrailResponse = { [x: string]: unknown }
type TrailNotFoundException = { [x: string]: unknown }
type InvalidHomeRegionException = { [x: string]: unknown }
type DeregisterOrganizationDelegatedAdminRequest = { DelegatedAdminAccountId: {} }
type DeregisterOrganizationDelegatedAdminResponse = { [x: string]: unknown }
type AccountNotFoundException = { [x: string]: unknown }
type AccountNotRegisteredException = { [x: string]: unknown }
type NotOrganizationManagementAccountException = { [x: string]: unknown }
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
type ImportNotFoundException = { [x: string]: unknown }
type GetInsightSelectorsRequest = { TrailName: {} }
type GetInsightSelectorsResponse = { TrailARN?: {} | undefined; InsightSelectors?: {} | undefined }
type InsightNotEnabledException = { [x: string]: unknown }
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
type InvalidMaxResultsException = { [x: string]: unknown }
type InvalidNextTokenException = { [x: string]: unknown }
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
type InvalidTimeRangeException = { [x: string]: unknown }
type InvalidTokenException = { [x: string]: unknown }
type ListQueriesRequest = {
  EventDataStore: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  QueryStatus?: {} | undefined
}
type ListQueriesResponse = { Queries?: {} | undefined; NextToken?: {} | undefined }
type InvalidDateRangeException = { [x: string]: unknown }
type InvalidQueryStatusException = { [x: string]: unknown }
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
type InvalidLookupAttributesException = { [x: string]: unknown }
type InvalidEventCategoryException = { [x: string]: unknown }
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
type InvalidInsightSelectorsException = { [x: string]: unknown }
type PutResourcePolicyRequest = { ResourceArn: {}; ResourcePolicy: {} }
type PutResourcePolicyResponse = { ResourceArn?: {} | undefined; ResourcePolicy?: {} | undefined }
type ResourcePolicyNotValidException = { [x: string]: unknown }
type RegisterOrganizationDelegatedAdminRequest = { MemberAccountId: {} }
type RegisterOrganizationDelegatedAdminResponse = { [x: string]: unknown }
type AccountRegisteredException = { [x: string]: unknown }
type CannotDelegateManagementAccountException = { [x: string]: unknown }
type DelegatedAdminAccountLimitExceededException = { [x: string]: unknown }
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
type InvalidEventDataStoreStatusException = { [x: string]: unknown }
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
type AccountHasOngoingImportException = { [x: string]: unknown }
type InvalidImportSourceException = { [x: string]: unknown }
type StartLoggingRequest = { Name: {} }
type StartLoggingResponse = { [x: string]: unknown }
type StartQueryRequest = { QueryStatement: {}; DeliveryS3Uri?: {} | undefined }
type StartQueryResponse = { QueryId?: {} | undefined }
type InvalidQueryStatementException = { [x: string]: unknown }
type MaxConcurrentQueriesException = { [x: string]: unknown }
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: TagsLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidTagParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ChannelNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 492
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 493
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InactiveQueryException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: QueryIdNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel': {
      $post:
        | {
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
        | {
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
            output: ChannelMaxLimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidSourceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ChannelAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidEventDataStoreCategoryException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidTagParameterException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: TagsLimitExceededException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreAlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreMaxLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidEventSelectorsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTagParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InvalidKmsKeyIdException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: KmsKeyNotFoundException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: KmsException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 492
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 493
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 494
          }
        | {
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
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 495
          }
        | {
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
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 496
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 497
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
            output: MaximumNumberOfTrailsExceededException
            outputFormat: 'json'
            status: 480
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
            output: TrailAlreadyExistsException
            outputFormat: 'json'
            status: 481
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
            output: S3BucketDoesNotExistException
            outputFormat: 'json'
            status: 482
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
            output: InsufficientS3BucketPolicyException
            outputFormat: 'json'
            status: 483
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
            output: InsufficientSnsTopicPolicyException
            outputFormat: 'json'
            status: 484
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 485
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
            output: InvalidS3BucketNameException
            outputFormat: 'json'
            status: 486
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
            output: InvalidS3PrefixException
            outputFormat: 'json'
            status: 487
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
            output: InvalidSnsTopicNameException
            outputFormat: 'json'
            status: 488
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
            output: InvalidKmsKeyIdException
            outputFormat: 'json'
            status: 489
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 490
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
            output: TrailNotProvidedException
            outputFormat: 'json'
            status: 491
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
            output: TagsLimitExceededException
            outputFormat: 'json'
            status: 492
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
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 493
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
            output: KmsKeyNotFoundException
            outputFormat: 'json'
            status: 494
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
            output: KmsKeyDisabledException
            outputFormat: 'json'
            status: 495
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
            output: KmsException
            outputFormat: 'json'
            status: 496
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
            output: InvalidCloudWatchLogsLogGroupArnException
            outputFormat: 'json'
            status: 497
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
            output: InvalidCloudWatchLogsRoleArnException
            outputFormat: 'json'
            status: 498
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
            output: CloudWatchLogsDeliveryUnavailableException
            outputFormat: 'json'
            status: 499
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
            output: CloudTrailInvalidClientTokenIdException
            outputFormat: 'json'
            status: 509
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
      $post:
        | {
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
        | {
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
            output: ChannelARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ChannelNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EventDataStoreTerminationProtectedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EventDataStoreHasOngoingImportException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: ChannelExistsForEDSException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: ResourceARNNotValidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourcePolicyNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin': {
      $post:
        | {
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
        | {
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
            output: AccountNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AccountNotRegisteredException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: NotOrganizationManagementAccountException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: QueryIdNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails': {
      $post:
        | {
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
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel': {
      $post:
        | {
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
        | {
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
            output: ChannelARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ChannelNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport': {
      $post:
        | {
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
        | {
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
            output: ImportNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InsightNotEnabledException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidMaxResultsException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: QueryIdNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: ResourceARNNotValidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourcePolicyNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail': {
      $post:
        | {
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
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus': {
      $post:
        | {
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
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidMaxResultsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys': {
      $post:
        | {
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
        | {
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
            output: InvalidTimeRangeException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidDateRangeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidMaxResultsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidQueryStatusException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails': {
      $post:
        | {
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
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidLookupAttributesException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidTimeRangeException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidMaxResultsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidEventCategoryException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidEventSelectorsException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidInsightSelectorsException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InsufficientS3BucketPolicyException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: S3BucketDoesNotExistException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: KmsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 492
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: ResourceARNNotValidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourcePolicyNotValidException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin': {
      $post:
        | {
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
        | {
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
            output: AccountRegisteredException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AccountNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: CannotDelegateManagementAccountException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: DelegatedAdminAccountLimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NotOrganizationManagementAccountException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 492
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTagParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ChannelNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EventDataStoreMaxLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidEventDataStoreStatusException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 492
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport': {
      $post:
        | {
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
        | {
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
            output: AccountHasOngoingImportException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidEventDataStoreStatusException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidEventDataStoreCategoryException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InvalidImportSourceException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ImportNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 492
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 493
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging': {
      $post:
        | {
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
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidQueryStatementException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: MaxConcurrentQueriesException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidS3PrefixException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidS3BucketNameException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientS3BucketPolicyException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: S3BucketDoesNotExistException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 492
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 493
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport': {
      $post:
        | {
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
        | {
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
            output: ImportNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging': {
      $post:
        | {
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
        | {
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel': {
      $post:
        | {
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
        | {
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
            output: ChannelARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ChannelNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ChannelAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidEventDataStoreCategoryException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore': {
      $post:
        | {
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
        | {
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
            output: EventDataStoreARNInvalidException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EventDataStoreNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidEventSelectorsException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EventDataStoreHasOngoingImportException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InactiveEventDataStoreException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InvalidKmsKeyIdException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: KmsKeyNotFoundException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: KmsException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: CloudTrailAccessNotEnabledException
            outputFormat: 'json'
            status: 492
          }
        | {
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
            output: InsufficientDependencyServiceAccessPermissionException
            outputFormat: 'json'
            status: 493
          }
        | {
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
            output: OrganizationsNotInUseException
            outputFormat: 'json'
            status: 494
          }
        | {
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
            output: NotOrganizationMasterAccountException
            outputFormat: 'json'
            status: 495
          }
        | {
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 496
          }
        | {
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
            output: OrganizationNotInAllFeaturesModeException
            outputFormat: 'json'
            status: 497
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
            output: S3BucketDoesNotExistException
            outputFormat: 'json'
            status: 480
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
            output: InsufficientS3BucketPolicyException
            outputFormat: 'json'
            status: 481
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
            output: InsufficientSnsTopicPolicyException
            outputFormat: 'json'
            status: 482
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
            output: InsufficientEncryptionPolicyException
            outputFormat: 'json'
            status: 483
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
            output: TrailNotFoundException
            outputFormat: 'json'
            status: 484
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
            output: InvalidS3BucketNameException
            outputFormat: 'json'
            status: 485
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
            output: InvalidS3PrefixException
            outputFormat: 'json'
            status: 486
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
            output: InvalidSnsTopicNameException
            outputFormat: 'json'
            status: 487
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
            output: InvalidKmsKeyIdException
            outputFormat: 'json'
            status: 488
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
            output: InvalidTrailNameException
            outputFormat: 'json'
            status: 489
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
            output: TrailNotProvidedException
            outputFormat: 'json'
            status: 490
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
            output: InvalidEventSelectorsException
            outputFormat: 'json'
            status: 491
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
            output: CloudTrailARNInvalidException
            outputFormat: 'json'
            status: 492
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
            output: ConflictException
            outputFormat: 'json'
            status: 493
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
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 494
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
            output: InvalidHomeRegionException
            outputFormat: 'json'
            status: 495
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
            output: KmsKeyNotFoundException
            outputFormat: 'json'
            status: 496
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
            output: KmsKeyDisabledException
            outputFormat: 'json'
            status: 497
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
            output: KmsException
            outputFormat: 'json'
            status: 498
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
            output: InvalidCloudWatchLogsLogGroupArnException
            outputFormat: 'json'
            status: 499
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
            output: NoManagementAccountSLRExistsException
            outputFormat: 'json'
            status: 509
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
