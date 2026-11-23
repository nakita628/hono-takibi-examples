type AssociateFacesRequest = {
  CollectionId: {}
  UserId: {}
  FaceIds: {}
  UserMatchThreshold?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type AssociateFacesResponse = {
  AssociatedFaces?: {} | undefined
  UnsuccessfulFaceAssociations?: {} | undefined
  UserStatus?: {} | undefined
}
type InvalidParameterException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ProvisionedThroughputExceededException = { [x: string]: unknown }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type CompareFacesRequest = {
  SourceImage: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  TargetImage: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  SimilarityThreshold?: {} | undefined
  QualityFilter?: {} | undefined
}
type CompareFacesResponse = {
  SourceImageFace?:
    | {
        BoundingBox?:
          | {
              Width?: {} | undefined
              Height?: {} | undefined
              Left?: {} | undefined
              Top?: {} | undefined
            }
          | undefined
        Confidence?: {} | undefined
      }
    | undefined
  FaceMatches?: {} | undefined
  UnmatchedFaces?: {} | undefined
  SourceImageOrientationCorrection?: {} | undefined
  TargetImageOrientationCorrection?: {} | undefined
}
type InvalidS3ObjectException = { [x: string]: unknown }
type ImageTooLargeException = { [x: string]: unknown }
type InvalidImageFormatException = { [x: string]: unknown }
type CopyProjectVersionRequest = {
  SourceProjectArn: {}
  SourceProjectVersionArn: {}
  DestinationProjectArn: {}
  VersionName: {}
  OutputConfig: { S3Bucket?: {} | undefined; S3KeyPrefix?: {} | undefined }
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
}
type CopyProjectVersionResponse = { ProjectVersionArn?: {} | undefined }
type LimitExceededException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type CreateCollectionRequest = { CollectionId: {}; Tags?: {} | undefined }
type CreateCollectionResponse = {
  StatusCode?: {} | undefined
  CollectionArn?: {} | undefined
  FaceModelVersion?: {} | undefined
}
type ResourceAlreadyExistsException = { [x: string]: unknown }
type S3Object = { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
type GroundTruthManifest = { S3Object?: S3Object | undefined }
type CreateDatasetRequest = {
  DatasetSource?:
    | { GroundTruthManifest?: GroundTruthManifest | undefined; DatasetArn?: {} | undefined }
    | undefined
  DatasetType: {}
  ProjectArn: {}
}
type CreateDatasetResponse = { DatasetArn?: {} | undefined }
type CreateFaceLivenessSessionRequest = {
  KmsKeyId?: {} | undefined
  Settings?:
    | {
        OutputConfig?: { S3Bucket: {}; S3KeyPrefix?: {} | undefined } | undefined
        AuditImagesLimit?: {} | undefined
      }
    | undefined
  ClientRequestToken?: {} | undefined
}
type CreateFaceLivenessSessionResponse = { SessionId: {} }
type CreateProjectRequest = { ProjectName: {} }
type CreateProjectResponse = { ProjectArn?: {} | undefined }
type CreateProjectVersionRequest = {
  ProjectArn: {}
  VersionName: {}
  OutputConfig: { S3Bucket?: {} | undefined; S3KeyPrefix?: {} | undefined }
  TrainingData?: { Assets?: {} | undefined } | undefined
  TestingData?: { Assets?: {} | undefined; AutoCreate?: {} | undefined } | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
}
type CreateProjectVersionResponse = { ProjectVersionArn?: {} | undefined }
type ConnectedHomeSettings = { Labels: {}; MinConfidence?: {} | undefined }
type StreamProcessorNotificationChannel = { SNSTopicArn: {} }
type CreateStreamProcessorRequest = {
  Input: { KinesisVideoStream?: { Arn?: {} | undefined } | undefined }
  Output: {
    KinesisDataStream?: { Arn?: {} | undefined } | undefined
    S3Destination?: { Bucket?: {} | undefined; KeyPrefix?: {} | undefined } | undefined
  }
  Name: {}
  Settings: {
    FaceSearch?: { CollectionId?: {} | undefined; FaceMatchThreshold?: {} | undefined } | undefined
    ConnectedHome?: ConnectedHomeSettings | undefined
  }
  RoleArn: {}
  Tags?: {} | undefined
  NotificationChannel?: StreamProcessorNotificationChannel | undefined
  KmsKeyId?: {} | undefined
  RegionsOfInterest?: {} | undefined
  DataSharingPreference?: { OptIn: {} } | undefined
}
type CreateStreamProcessorResponse = { StreamProcessorArn?: {} | undefined }
type CreateUserRequest = { CollectionId: {}; UserId: {}; ClientRequestToken?: {} | undefined }
type CreateUserResponse = { [x: string]: unknown }
type DeleteCollectionRequest = { CollectionId: {} }
type DeleteCollectionResponse = { StatusCode?: {} | undefined }
type DeleteDatasetRequest = { DatasetArn: {} }
type DeleteDatasetResponse = { [x: string]: unknown }
type DeleteFacesRequest = { CollectionId: {}; FaceIds: {} }
type DeleteFacesResponse = {
  DeletedFaces?: {} | undefined
  UnsuccessfulFaceDeletions?: {} | undefined
}
type DeleteProjectRequest = { ProjectArn: {} }
type DeleteProjectResponse = { Status?: {} | undefined }
type DeleteProjectPolicyRequest = {
  ProjectArn: {}
  PolicyName: {}
  PolicyRevisionId?: {} | undefined
}
type DeleteProjectPolicyResponse = { [x: string]: unknown }
type InvalidPolicyRevisionIdException = { [x: string]: unknown }
type DeleteProjectVersionRequest = { ProjectVersionArn: {} }
type DeleteProjectVersionResponse = { Status?: {} | undefined }
type DeleteStreamProcessorRequest = { Name: {} }
type DeleteStreamProcessorResponse = { [x: string]: unknown }
type DeleteUserRequest = { CollectionId: {}; UserId: {}; ClientRequestToken?: {} | undefined }
type DeleteUserResponse = { [x: string]: unknown }
type DescribeCollectionRequest = { CollectionId: {} }
type DescribeCollectionResponse = {
  FaceCount?: {} | undefined
  FaceModelVersion?: {} | undefined
  CollectionARN?: {} | undefined
  CreationTimestamp?: {} | undefined
  UserCount?: {} | undefined
}
type DescribeDatasetRequest = { DatasetArn: {} }
type DescribeDatasetResponse = {
  DatasetDescription?:
    | {
        CreationTimestamp?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        StatusMessageCode?: {} | undefined
        DatasetStats?:
          | {
              LabeledEntries?: {} | undefined
              TotalEntries?: {} | undefined
              TotalLabels?: {} | undefined
              ErrorEntries?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeProjectVersionsRequest = {
  ProjectArn: {}
  VersionNames?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeProjectVersionsResponse = {
  ProjectVersionDescriptions?: {} | undefined
  NextToken?: {} | undefined
}
type InvalidPaginationTokenException = { [x: string]: unknown }
type DescribeProjectsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ProjectNames?: {} | undefined
}
type DescribeProjectsResponse = { ProjectDescriptions?: {} | undefined; NextToken?: {} | undefined }
type DescribeStreamProcessorRequest = { Name: {} }
type DescribeStreamProcessorResponse = {
  Name?: {} | undefined
  StreamProcessorArn?: {} | undefined
  Status?: {} | undefined
  StatusMessage?: {} | undefined
  CreationTimestamp?: {} | undefined
  LastUpdateTimestamp?: {} | undefined
  Input?: { KinesisVideoStream?: { Arn?: {} | undefined } | undefined } | undefined
  Output?:
    | {
        KinesisDataStream?: { Arn?: {} | undefined } | undefined
        S3Destination?: { Bucket?: {} | undefined; KeyPrefix?: {} | undefined } | undefined
      }
    | undefined
  RoleArn?: {} | undefined
  Settings?:
    | {
        FaceSearch?:
          | { CollectionId?: {} | undefined; FaceMatchThreshold?: {} | undefined }
          | undefined
        ConnectedHome?: ConnectedHomeSettings | undefined
      }
    | undefined
  NotificationChannel?: StreamProcessorNotificationChannel | undefined
  KmsKeyId?: {} | undefined
  RegionsOfInterest?: {} | undefined
  DataSharingPreference?: { OptIn: {} } | undefined
}
type Image = {
  Bytes?: {} | undefined
  S3Object?:
    | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
    | undefined
}
type DetectCustomLabelsRequest = {
  ProjectVersionArn: {}
  Image: Image
  MaxResults?: {} | undefined
  MinConfidence?: {} | undefined
}
type DetectCustomLabelsResponse = { CustomLabels?: {} | undefined }
type ResourceNotReadyException = { [x: string]: unknown }
type DetectFacesRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  Attributes?: {} | undefined
}
type DetectFacesResponse = { FaceDetails?: {} | undefined; OrientationCorrection?: {} | undefined }
type DetectLabelsRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  MaxLabels?: {} | undefined
  MinConfidence?: {} | undefined
  Features?: {} | undefined
  Settings?:
    | {
        GeneralLabels?:
          | {
              LabelInclusionFilters?: {} | undefined
              LabelExclusionFilters?: {} | undefined
              LabelCategoryInclusionFilters?: {} | undefined
              LabelCategoryExclusionFilters?: {} | undefined
            }
          | undefined
        ImageProperties?: { MaxDominantColors?: {} | undefined } | undefined
      }
    | undefined
}
type DetectLabelsResponse = {
  Labels?: {} | undefined
  OrientationCorrection?: {} | undefined
  LabelModelVersion?: {} | undefined
  ImageProperties?:
    | {
        Quality?:
          | { Brightness?: {} | undefined; Sharpness?: {} | undefined; Contrast?: {} | undefined }
          | undefined
        DominantColors?: {} | undefined
        Foreground?:
          | {
              Quality?:
                | {
                    Brightness?: {} | undefined
                    Sharpness?: {} | undefined
                    Contrast?: {} | undefined
                  }
                | undefined
              DominantColors?: {} | undefined
            }
          | undefined
        Background?:
          | {
              Quality?:
                | {
                    Brightness?: {} | undefined
                    Sharpness?: {} | undefined
                    Contrast?: {} | undefined
                  }
                | undefined
              DominantColors?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DetectModerationLabelsRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  MinConfidence?: {} | undefined
  HumanLoopConfig?:
    | {
        HumanLoopName: {}
        FlowDefinitionArn: {}
        DataAttributes?: { ContentClassifiers?: {} | undefined } | undefined
      }
    | undefined
}
type DetectModerationLabelsResponse = {
  ModerationLabels?: {} | undefined
  ModerationModelVersion?: {} | undefined
  HumanLoopActivationOutput?:
    | {
        HumanLoopArn?: {} | undefined
        HumanLoopActivationReasons?: {} | undefined
        HumanLoopActivationConditionsEvaluationResults?: {} | undefined
      }
    | undefined
}
type HumanLoopQuotaExceededException = { [x: string]: unknown }
type DetectProtectiveEquipmentRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  SummarizationAttributes?: { MinConfidence: {}; RequiredEquipmentTypes: {} } | undefined
}
type DetectProtectiveEquipmentResponse = {
  ProtectiveEquipmentModelVersion?: {} | undefined
  Persons?: {} | undefined
  Summary?:
    | {
        PersonsWithRequiredEquipment?: {} | undefined
        PersonsWithoutRequiredEquipment?: {} | undefined
        PersonsIndeterminate?: {} | undefined
      }
    | undefined
}
type DetectionFilter = {
  MinConfidence?: {} | undefined
  MinBoundingBoxHeight?: {} | undefined
  MinBoundingBoxWidth?: {} | undefined
}
type DetectTextRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  Filters?:
    | { WordFilter?: DetectionFilter | undefined; RegionsOfInterest?: {} | undefined }
    | undefined
}
type DetectTextResponse = { TextDetections?: {} | undefined; TextModelVersion?: {} | undefined }
type DisassociateFacesRequest = {
  CollectionId: {}
  UserId: {}
  ClientRequestToken?: {} | undefined
  FaceIds: {}
}
type DisassociateFacesResponse = {
  DisassociatedFaces?: {} | undefined
  UnsuccessfulFaceDisassociations?: {} | undefined
  UserStatus?: {} | undefined
}
type DistributeDatasetEntriesRequest = { Datasets: {} }
type DistributeDatasetEntriesResponse = { [x: string]: unknown }
type GetCelebrityInfoRequest = { Id: {} }
type GetCelebrityInfoResponse = {
  Urls?: {} | undefined
  Name?: {} | undefined
  KnownGender?: { Type?: {} | undefined } | undefined
}
type GetCelebrityRecognitionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
}
type Video = {
  S3Object?:
    | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
    | undefined
}
type GetCelebrityRecognitionResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  Celebrities?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type GetContentModerationRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  AggregateBy?: {} | undefined
}
type GetContentModerationResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  ModerationLabels?: {} | undefined
  NextToken?: {} | undefined
  ModerationModelVersion?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
  GetRequestMetadata?: { SortBy?: {} | undefined; AggregateBy?: {} | undefined } | undefined
}
type GetFaceDetectionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetFaceDetectionResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  Faces?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type GetFaceLivenessSessionResultsRequest = { SessionId: {} }
type BoundingBox = {
  Width?: {} | undefined
  Height?: {} | undefined
  Left?: {} | undefined
  Top?: {} | undefined
}
type GetFaceLivenessSessionResultsResponse = {
  SessionId: {}
  Status: {}
  Confidence?: {} | undefined
  ReferenceImage?:
    | {
        Bytes?: {} | undefined
        S3Object?: S3Object | undefined
        BoundingBox?: BoundingBox | undefined
      }
    | undefined
  AuditImages?: {} | undefined
}
type SessionNotFoundException = { [x: string]: unknown }
type GetFaceSearchRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
}
type GetFaceSearchResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  NextToken?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  Persons?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type GetLabelDetectionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  AggregateBy?: {} | undefined
}
type GetLabelDetectionResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  Labels?: {} | undefined
  LabelModelVersion?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
  GetRequestMetadata?: { SortBy?: {} | undefined; AggregateBy?: {} | undefined } | undefined
}
type GetPersonTrackingRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
}
type GetPersonTrackingResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?:
    | {
        Codec?: {} | undefined
        DurationMillis?: {} | undefined
        Format?: {} | undefined
        FrameRate?: {} | undefined
        FrameHeight?: {} | undefined
        FrameWidth?: {} | undefined
        ColorRange?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  Persons?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type GetSegmentDetectionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetSegmentDetectionResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?: {} | undefined
  AudioMetadata?: {} | undefined
  NextToken?: {} | undefined
  Segments?: {} | undefined
  SelectedSegmentTypes?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type GetTextDetectionRequest = {
  JobId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type VideoMetadata = {
  Codec?: {} | undefined
  DurationMillis?: {} | undefined
  Format?: {} | undefined
  FrameRate?: {} | undefined
  FrameHeight?: {} | undefined
  FrameWidth?: {} | undefined
  ColorRange?: {} | undefined
}
type GetTextDetectionResponse = {
  JobStatus?: {} | undefined
  StatusMessage?: {} | undefined
  VideoMetadata?: VideoMetadata | undefined
  TextDetections?: {} | undefined
  NextToken?: {} | undefined
  TextModelVersion?: {} | undefined
  JobId?: {} | undefined
  Video?: Video | undefined
  JobTag?: {} | undefined
}
type IndexFacesRequest = {
  CollectionId: {}
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ExternalImageId?: {} | undefined
  DetectionAttributes?: {} | undefined
  MaxFaces?: {} | undefined
  QualityFilter?: {} | undefined
}
type IndexFacesResponse = {
  FaceRecords?: {} | undefined
  OrientationCorrection?: {} | undefined
  FaceModelVersion?: {} | undefined
  UnindexedFaces?: {} | undefined
}
type ListCollectionsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListCollectionsResponse = {
  CollectionIds?: {} | undefined
  NextToken?: {} | undefined
  FaceModelVersions?: {} | undefined
}
type ListDatasetEntriesRequest = {
  DatasetArn: {}
  ContainsLabels?: {} | undefined
  Labeled?: {} | undefined
  SourceRefContains?: {} | undefined
  HasErrors?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDatasetEntriesResponse = { DatasetEntries?: {} | undefined; NextToken?: {} | undefined }
type ListDatasetLabelsRequest = {
  DatasetArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDatasetLabelsResponse = {
  DatasetLabelDescriptions?: {} | undefined
  NextToken?: {} | undefined
}
type ListFacesRequest = {
  CollectionId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  UserId?: {} | undefined
  FaceIds?: {} | undefined
}
type ListFacesResponse = {
  Faces?: {} | undefined
  NextToken?: {} | undefined
  FaceModelVersion?: {} | undefined
}
type ListProjectPoliciesRequest = {
  ProjectArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListProjectPoliciesResponse = { ProjectPolicies?: {} | undefined; NextToken?: {} | undefined }
type ListStreamProcessorsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListStreamProcessorsResponse = {
  NextToken?: {} | undefined
  StreamProcessors?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListUsersRequest = {
  CollectionId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListUsersResponse = { Users?: {} | undefined; NextToken?: {} | undefined }
type PutProjectPolicyRequest = {
  ProjectArn: {}
  PolicyName: {}
  PolicyRevisionId?: {} | undefined
  PolicyDocument: {}
}
type PutProjectPolicyResponse = { PolicyRevisionId?: {} | undefined }
type MalformedPolicyDocumentException = { [x: string]: unknown }
type RecognizeCelebritiesRequest = {
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
}
type RecognizeCelebritiesResponse = {
  CelebrityFaces?: {} | undefined
  UnrecognizedFaces?: {} | undefined
  OrientationCorrection?: {} | undefined
}
type SearchFacesRequest = {
  CollectionId: {}
  FaceId: {}
  MaxFaces?: {} | undefined
  FaceMatchThreshold?: {} | undefined
}
type SearchFacesResponse = {
  SearchedFaceId?: {} | undefined
  FaceMatches?: {} | undefined
  FaceModelVersion?: {} | undefined
}
type SearchFacesByImageRequest = {
  CollectionId: {}
  Image: {
    Bytes?: {} | undefined
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  MaxFaces?: {} | undefined
  FaceMatchThreshold?: {} | undefined
  QualityFilter?: {} | undefined
}
type SearchFacesByImageResponse = {
  SearchedFaceBoundingBox?:
    | {
        Width?: {} | undefined
        Height?: {} | undefined
        Left?: {} | undefined
        Top?: {} | undefined
      }
    | undefined
  SearchedFaceConfidence?: {} | undefined
  FaceMatches?: {} | undefined
  FaceModelVersion?: {} | undefined
}
type SearchUsersRequest = {
  CollectionId: {}
  UserId?: {} | undefined
  FaceId?: {} | undefined
  UserMatchThreshold?: {} | undefined
  MaxUsers?: {} | undefined
}
type SearchUsersResponse = {
  UserMatches?: {} | undefined
  FaceModelVersion?: {} | undefined
  SearchedFace?: { FaceId?: {} | undefined } | undefined
  SearchedUser?: { UserId?: {} | undefined } | undefined
}
type SearchUsersByImageRequest = {
  CollectionId: {}
  Image: Image
  UserMatchThreshold?: {} | undefined
  MaxUsers?: {} | undefined
  QualityFilter?: {} | undefined
}
type FaceDetail = {
  BoundingBox?:
    | {
        Width?: {} | undefined
        Height?: {} | undefined
        Left?: {} | undefined
        Top?: {} | undefined
      }
    | undefined
  AgeRange?: { Low?: {} | undefined; High?: {} | undefined } | undefined
  Smile?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Eyeglasses?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Sunglasses?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Gender?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Beard?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Mustache?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  EyesOpen?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  MouthOpen?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  Emotions?: {} | undefined
  Landmarks?: {} | undefined
  Pose?: { Roll?: {} | undefined; Yaw?: {} | undefined; Pitch?: {} | undefined } | undefined
  Quality?: { Brightness?: {} | undefined; Sharpness?: {} | undefined } | undefined
  Confidence?: {} | undefined
  FaceOccluded?: { Value?: {} | undefined; Confidence?: {} | undefined } | undefined
  EyeDirection?:
    | { Yaw?: {} | undefined; Pitch?: {} | undefined; Confidence?: {} | undefined }
    | undefined
}
type SearchUsersByImageResponse = {
  UserMatches?: {} | undefined
  FaceModelVersion?: {} | undefined
  SearchedFace?: { FaceDetail?: FaceDetail | undefined } | undefined
  UnsearchedFaces?: {} | undefined
}
type StartCelebrityRecognitionRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
}
type StartCelebrityRecognitionResponse = { JobId?: {} | undefined }
type VideoTooLargeException = { [x: string]: unknown }
type StartContentModerationRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  MinConfidence?: {} | undefined
  ClientRequestToken?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
}
type StartContentModerationResponse = { JobId?: {} | undefined }
type StartFaceDetectionRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  FaceAttributes?: {} | undefined
  JobTag?: {} | undefined
}
type StartFaceDetectionResponse = { JobId?: {} | undefined }
type StartFaceSearchRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  FaceMatchThreshold?: {} | undefined
  CollectionId: {}
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
}
type StartFaceSearchResponse = { JobId?: {} | undefined }
type GeneralLabelsSettings = {
  LabelInclusionFilters?: {} | undefined
  LabelExclusionFilters?: {} | undefined
  LabelCategoryInclusionFilters?: {} | undefined
  LabelCategoryExclusionFilters?: {} | undefined
}
type StartLabelDetectionRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  MinConfidence?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
  Features?: {} | undefined
  Settings?: { GeneralLabels?: GeneralLabelsSettings | undefined } | undefined
}
type StartLabelDetectionResponse = { JobId?: {} | undefined }
type StartPersonTrackingRequest = {
  Video: {
    S3Object?:
      | { Bucket?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
      | undefined
  }
  ClientRequestToken?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
}
type StartPersonTrackingResponse = { JobId?: {} | undefined }
type StartProjectVersionRequest = {
  ProjectVersionArn: {}
  MinInferenceUnits: {}
  MaxInferenceUnits?: {} | undefined
}
type StartProjectVersionResponse = { Status?: {} | undefined }
type StartSegmentDetectionRequest = {
  Video: Video
  ClientRequestToken?: {} | undefined
  NotificationChannel?: { SNSTopicArn: {}; RoleArn: {} } | undefined
  JobTag?: {} | undefined
  Filters?:
    | {
        TechnicalCueFilter?:
          | {
              MinSegmentConfidence?: {} | undefined
              BlackFrame?:
                | { MaxPixelThreshold?: {} | undefined; MinCoveragePercentage?: {} | undefined }
                | undefined
            }
          | undefined
        ShotFilter?: { MinSegmentConfidence?: {} | undefined } | undefined
      }
    | undefined
  SegmentTypes: {}
}
type StartSegmentDetectionResponse = { JobId?: {} | undefined }
type StartStreamProcessorRequest = {
  Name: {}
  StartSelector?:
    | {
        KVSStreamStartSelector?:
          | { ProducerTimestamp?: {} | undefined; FragmentNumber?: {} | undefined }
          | undefined
      }
    | undefined
  StopSelector?: { MaxDurationInSeconds?: {} | undefined } | undefined
}
type StartStreamProcessorResponse = { SessionId?: {} | undefined }
type NotificationChannel = { SNSTopicArn: {}; RoleArn: {} }
type StartTextDetectionRequest = {
  Video: Video
  ClientRequestToken?: {} | undefined
  NotificationChannel?: NotificationChannel | undefined
  JobTag?: {} | undefined
  Filters?:
    | {
        WordFilter?:
          | {
              MinConfidence?: {} | undefined
              MinBoundingBoxHeight?: {} | undefined
              MinBoundingBoxWidth?: {} | undefined
            }
          | undefined
        RegionsOfInterest?: {} | undefined
      }
    | undefined
}
type StartTextDetectionResponse = { JobId?: {} | undefined }
type StopProjectVersionRequest = { ProjectVersionArn: {} }
type StopProjectVersionResponse = { Status?: {} | undefined }
type StopStreamProcessorRequest = { Name: {} }
type StopStreamProcessorResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDatasetEntriesRequest = { DatasetArn: {}; Changes: { GroundTruth: {} } }
type UpdateDatasetEntriesResponse = { [x: string]: unknown }
type UpdateStreamProcessorRequest = {
  Name: {}
  SettingsForUpdate?:
    | {
        ConnectedHomeForUpdate?:
          | { Labels?: {} | undefined; MinConfidence?: {} | undefined }
          | undefined
      }
    | undefined
  RegionsOfInterestForUpdate?: {} | undefined
  DataSharingPreferenceForUpdate?: { OptIn: {} } | undefined
  ParametersToDelete?: {} | undefined
}
type UpdateStreamProcessorResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=RekognitionService.AssociateFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: AssociateFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.AssociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateFacesRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CompareFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: CompareFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CompareFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CompareFacesRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CopyProjectVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: CopyProjectVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CopyProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyProjectVersionRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateCollection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: CreateCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCollectionRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateDataset': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: CreateDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDatasetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateFaceLivenessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: CreateFaceLivenessSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateFaceLivenessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFaceLivenessSessionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: CreateProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateProjectVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: CreateProjectVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectVersionRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: CreateStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStreamProcessorRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateUser': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: CreateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.CreateUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteCollection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: DeleteCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteDataset': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: DeleteDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDatasetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: DeleteFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: DeleteProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProjectPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: DeleteProjectPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectPolicyRequest }
            output: InvalidPolicyRevisionIdException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProjectVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: DeleteProjectVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectVersionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: DeleteStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteUser': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: DeleteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DeleteUser'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeCollection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: DescribeCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeCollection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCollectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeDataset': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: DescribeDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeDataset'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDatasetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeProjectVersions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: DescribeProjectVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjectVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectVersionsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeProjects': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: DescribeProjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProjectsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: DescribeStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DescribeStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectCustomLabels': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: DetectCustomLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectCustomLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectCustomLabelsRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: DetectFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectFacesRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectLabels': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: DetectLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectLabelsRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectModerationLabels': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: DetectModerationLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectModerationLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectModerationLabelsRequest }
            output: HumanLoopQuotaExceededException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectProtectiveEquipment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: DetectProtectiveEquipmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectProtectiveEquipment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectProtectiveEquipmentRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectText': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: DetectTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DetectText'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetectTextRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DisassociateFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: DisassociateFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DisassociateFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateFacesRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DistributeDatasetEntries': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: DistributeDatasetEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.DistributeDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DistributeDatasetEntriesRequest }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetCelebrityInfo': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: GetCelebrityInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityInfo'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityInfoRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: GetCelebrityRecognitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCelebrityRecognitionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetContentModeration': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: GetContentModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetContentModerationRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceDetection': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: GetFaceDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: GetFaceLivenessSessionResultsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: SessionNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceLivenessSessionResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceLivenessSessionResultsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceSearch': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: GetFaceSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFaceSearchRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetLabelDetection': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: GetLabelDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLabelDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetPersonTracking': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: GetPersonTrackingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPersonTrackingRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetSegmentDetection': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: GetSegmentDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSegmentDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetTextDetection': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: GetTextDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.GetTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTextDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.IndexFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: IndexFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.IndexFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexFacesRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListCollections': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: ListCollectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListCollections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCollectionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListDatasetEntries': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ListDatasetEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetEntriesRequest }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListDatasetLabels': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ListDatasetLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListDatasetLabels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDatasetLabelsRequest }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListFaces': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: ListFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListProjectPolicies': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: ListProjectPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListProjectPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectPoliciesRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListStreamProcessors': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: ListStreamProcessorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListStreamProcessors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamProcessorsRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListUsers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: ListUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'RekognitionService.ListUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUsersRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.PutProjectPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: PutProjectPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: InvalidPolicyRevisionIdException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: MalformedPolicyDocumentException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.PutProjectPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProjectPolicyRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.RecognizeCelebrities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: RecognizeCelebritiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.RecognizeCelebrities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RecognizeCelebritiesRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchFaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: SearchFacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchFacesByImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: SearchFacesByImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchFacesByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchFacesByImageRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchUsers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: SearchUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchUsersByImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: SearchUsersByImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: InvalidImageFormatException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: ImageTooLargeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.SearchUsersByImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchUsersByImageRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: StartCelebrityRecognitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartCelebrityRecognition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartCelebrityRecognitionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartContentModeration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: StartContentModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartContentModeration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartContentModerationRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartFaceDetection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: StartFaceDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartFaceSearch': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: StartFaceSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartFaceSearch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFaceSearchRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartLabelDetection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: StartLabelDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartLabelDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartLabelDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartPersonTracking': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: StartPersonTrackingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartPersonTracking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPersonTrackingRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartProjectVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: StartProjectVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartProjectVersionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartSegmentDetection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: StartSegmentDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartSegmentDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSegmentDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: StartStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartTextDetection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: StartTextDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: InvalidS3ObjectException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: VideoTooLargeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StartTextDetection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTextDetectionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StopProjectVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: StopProjectVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopProjectVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProjectVersionRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StopStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: StopStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.StopStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UpdateDatasetEntries': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: UpdateDatasetEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateDatasetEntries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDatasetEntriesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UpdateStreamProcessor': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: UpdateStreamProcessorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'RekognitionService.UpdateStreamProcessor'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStreamProcessorRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 486
          }
    }
  },
  '/'
>
export default routes
