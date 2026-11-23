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
type CreateCollectionRequest = { CollectionId: {}; Tags?: {} | undefined }
type CreateCollectionResponse = {
  StatusCode?: {} | undefined
  CollectionArn?: {} | undefined
  FaceModelVersion?: {} | undefined
}
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
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CompareFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CopyProjectVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateCollection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateDataset': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateFaceLivenessSession': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateProject': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateProjectVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateStreamProcessor': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.CreateUser': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteCollection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteDataset': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProject': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProjectPolicy': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteProjectVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DeleteUser': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeCollection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeDataset': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeProjectVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeProjects': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectCustomLabels': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectLabels': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectModerationLabels': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectProtectiveEquipment': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DetectText': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DisassociateFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.DistributeDatasetEntries': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetCelebrityInfo': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetContentModeration': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceDetection': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetFaceSearch': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetLabelDetection': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetPersonTracking': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetSegmentDetection': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.GetTextDetection': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.IndexFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListCollections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListDatasetEntries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListDatasetLabels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListFaces': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListProjectPolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListStreamProcessors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListTagsForResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.ListUsers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.PutProjectPolicy': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.RecognizeCelebrities': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchFaces': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchFacesByImage': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchUsers': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.SearchUsersByImage': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartContentModeration': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartFaceDetection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartFaceSearch': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartLabelDetection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartPersonTracking': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartProjectVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartSegmentDetection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartStreamProcessor': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StartTextDetection': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StopProjectVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.StopStreamProcessor': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.TagResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UntagResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UpdateDatasetEntries': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=RekognitionService.UpdateStreamProcessor': {
      $post: {
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
    }
  },
  '/'
>
export default routes
