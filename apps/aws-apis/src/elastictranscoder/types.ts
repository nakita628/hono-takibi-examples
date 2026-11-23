type CancelJobResponse = { [x: string]: unknown }
type ReadJobResponse = {
  Job?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        PipelineId?: {} | undefined
        Input?:
          | {
              Key?: {} | undefined
              FrameRate?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              Interlaced?: {} | undefined
              Container?: {} | undefined
              Encryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              TimeSpan?: { StartTime?: {} | undefined; Duration?: {} | undefined } | undefined
              InputCaptions?:
                | { MergePolicy?: {} | undefined; CaptionSources?: {} | undefined }
                | undefined
              DetectedProperties?:
                | {
                    Width?: {} | undefined
                    Height?: {} | undefined
                    FrameRate?: {} | undefined
                    FileSize?: {} | undefined
                    DurationMillis?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Inputs?: {} | undefined
        Output?:
          | {
              Id?: {} | undefined
              Key?: {} | undefined
              ThumbnailPattern?: {} | undefined
              ThumbnailEncryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              Rotate?: {} | undefined
              PresetId?: {} | undefined
              SegmentDuration?: {} | undefined
              Status?: {} | undefined
              StatusDetail?: {} | undefined
              Duration?: {} | undefined
              Width?: {} | undefined
              Height?: {} | undefined
              FrameRate?: {} | undefined
              FileSize?: {} | undefined
              DurationMillis?: {} | undefined
              Watermarks?: {} | undefined
              AlbumArt?: { MergePolicy?: {} | undefined; Artwork?: {} | undefined } | undefined
              Composition?: {} | undefined
              Captions?:
                | {
                    MergePolicy?: {} | undefined
                    CaptionSources?: {} | undefined
                    CaptionFormats?: {} | undefined
                  }
                | undefined
              Encryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              AppliedColorSpaceConversion?: {} | undefined
            }
          | undefined
        Outputs?: {} | undefined
        OutputKeyPrefix?: {} | undefined
        Playlists?: {} | undefined
        Status?: {} | undefined
        UserMetadata?: {} | undefined
        Timing?:
          | {
              SubmitTimeMillis?: {} | undefined
              StartTimeMillis?: {} | undefined
              FinishTimeMillis?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type JobInput = {
  Key?: {} | undefined
  FrameRate?: {} | undefined
  Resolution?: {} | undefined
  AspectRatio?: {} | undefined
  Interlaced?: {} | undefined
  Container?: {} | undefined
  Encryption?:
    | {
        Mode?: {} | undefined
        Key?: {} | undefined
        KeyMd5?: {} | undefined
        InitializationVector?: {} | undefined
      }
    | undefined
  TimeSpan?: { StartTime?: {} | undefined; Duration?: {} | undefined } | undefined
  InputCaptions?: { MergePolicy?: {} | undefined; CaptionSources?: {} | undefined } | undefined
  DetectedProperties?:
    | {
        Width?: {} | undefined
        Height?: {} | undefined
        FrameRate?: {} | undefined
        FileSize?: {} | undefined
        DurationMillis?: {} | undefined
      }
    | undefined
}
type CreateJobOutput = {
  Key?: {} | undefined
  ThumbnailPattern?: {} | undefined
  ThumbnailEncryption?:
    | {
        Mode?: {} | undefined
        Key?: {} | undefined
        KeyMd5?: {} | undefined
        InitializationVector?: {} | undefined
      }
    | undefined
  Rotate?: {} | undefined
  PresetId?: {} | undefined
  SegmentDuration?: {} | undefined
  Watermarks?: {} | undefined
  AlbumArt?: { MergePolicy?: {} | undefined; Artwork?: {} | undefined } | undefined
  Composition?: {} | undefined
  Captions?:
    | {
        MergePolicy?: {} | undefined
        CaptionSources?: {} | undefined
        CaptionFormats?: {} | undefined
      }
    | undefined
  Encryption?:
    | {
        Mode?: {} | undefined
        Key?: {} | undefined
        KeyMd5?: {} | undefined
        InitializationVector?: {} | undefined
      }
    | undefined
}
type CreateJobPlaylist = {
  Name?: {} | undefined
  Format?: {} | undefined
  OutputKeys?: {} | undefined
  HlsContentProtection?:
    | {
        Method?: {} | undefined
        Key?: {} | undefined
        KeyMd5?: {} | undefined
        InitializationVector?: {} | undefined
        LicenseAcquisitionUrl?: {} | undefined
        KeyStoragePolicy?: {} | undefined
      }
    | undefined
  PlayReadyDrm?:
    | {
        Format?: {} | undefined
        Key?: {} | undefined
        KeyMd5?: {} | undefined
        KeyId?: {} | undefined
        InitializationVector?: {} | undefined
        LicenseAcquisitionUrl?: {} | undefined
      }
    | undefined
}
type String = string
type CreateJobResponse = {
  Job?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        PipelineId?: {} | undefined
        Input?:
          | {
              Key?: {} | undefined
              FrameRate?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              Interlaced?: {} | undefined
              Container?: {} | undefined
              Encryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              TimeSpan?: { StartTime?: {} | undefined; Duration?: {} | undefined } | undefined
              InputCaptions?:
                | { MergePolicy?: {} | undefined; CaptionSources?: {} | undefined }
                | undefined
              DetectedProperties?:
                | {
                    Width?: {} | undefined
                    Height?: {} | undefined
                    FrameRate?: {} | undefined
                    FileSize?: {} | undefined
                    DurationMillis?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Inputs?: {} | undefined
        Output?:
          | {
              Id?: {} | undefined
              Key?: {} | undefined
              ThumbnailPattern?: {} | undefined
              ThumbnailEncryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              Rotate?: {} | undefined
              PresetId?: {} | undefined
              SegmentDuration?: {} | undefined
              Status?: {} | undefined
              StatusDetail?: {} | undefined
              Duration?: {} | undefined
              Width?: {} | undefined
              Height?: {} | undefined
              FrameRate?: {} | undefined
              FileSize?: {} | undefined
              DurationMillis?: {} | undefined
              Watermarks?: {} | undefined
              AlbumArt?: { MergePolicy?: {} | undefined; Artwork?: {} | undefined } | undefined
              Composition?: {} | undefined
              Captions?:
                | {
                    MergePolicy?: {} | undefined
                    CaptionSources?: {} | undefined
                    CaptionFormats?: {} | undefined
                  }
                | undefined
              Encryption?:
                | {
                    Mode?: {} | undefined
                    Key?: {} | undefined
                    KeyMd5?: {} | undefined
                    InitializationVector?: {} | undefined
                  }
                | undefined
              AppliedColorSpaceConversion?: {} | undefined
            }
          | undefined
        Outputs?: {} | undefined
        OutputKeyPrefix?: {} | undefined
        Playlists?: {} | undefined
        Status?: {} | undefined
        UserMetadata?: {} | undefined
        Timing?:
          | {
              SubmitTimeMillis?: {} | undefined
              StartTimeMillis?: {} | undefined
              FinishTimeMillis?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreatePipelineResponse = {
  Pipeline?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        InputBucket?: {} | undefined
        OutputBucket?: {} | undefined
        Role?: {} | undefined
        AwsKmsKeyArn?: {} | undefined
        Notifications?:
          | {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          | undefined
        ContentConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
        ThumbnailConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
      }
    | undefined
  Warnings?: {} | undefined
}
type ListPipelinesResponse = { Pipelines?: {} | undefined; NextPageToken?: {} | undefined }
type CreatePresetResponse = {
  Preset?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Container?: {} | undefined
        Audio?:
          | {
              Codec?: {} | undefined
              SampleRate?: {} | undefined
              BitRate?: {} | undefined
              Channels?: {} | undefined
              AudioPackingMode?: {} | undefined
              CodecOptions?:
                | {
                    Profile?: {} | undefined
                    BitDepth?: {} | undefined
                    BitOrder?: {} | undefined
                    Signed?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Video?:
          | {
              Codec?: {} | undefined
              CodecOptions?: {} | undefined
              KeyframesMaxDist?: {} | undefined
              FixedGOP?: {} | undefined
              BitRate?: {} | undefined
              FrameRate?: {} | undefined
              MaxFrameRate?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              MaxWidth?: {} | undefined
              MaxHeight?: {} | undefined
              DisplayAspectRatio?: {} | undefined
              SizingPolicy?: {} | undefined
              PaddingPolicy?: {} | undefined
              Watermarks?: {} | undefined
            }
          | undefined
        Thumbnails?:
          | {
              Format?: {} | undefined
              Interval?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              MaxWidth?: {} | undefined
              MaxHeight?: {} | undefined
              SizingPolicy?: {} | undefined
              PaddingPolicy?: {} | undefined
            }
          | undefined
        Type?: {} | undefined
      }
    | undefined
  Warning?: {} | undefined
}
type ListPresetsResponse = { Presets?: {} | undefined; NextPageToken?: {} | undefined }
type DeletePipelineResponse = { [x: string]: unknown }
type ReadPipelineResponse = {
  Pipeline?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        InputBucket?: {} | undefined
        OutputBucket?: {} | undefined
        Role?: {} | undefined
        AwsKmsKeyArn?: {} | undefined
        Notifications?:
          | {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          | undefined
        ContentConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
        ThumbnailConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
      }
    | undefined
  Warnings?: {} | undefined
}
type UpdatePipelineResponse = {
  Pipeline?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        InputBucket?: {} | undefined
        OutputBucket?: {} | undefined
        Role?: {} | undefined
        AwsKmsKeyArn?: {} | undefined
        Notifications?:
          | {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          | undefined
        ContentConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
        ThumbnailConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
      }
    | undefined
  Warnings?: {} | undefined
}
type DeletePresetResponse = { [x: string]: unknown }
type ReadPresetResponse = {
  Preset?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Container?: {} | undefined
        Audio?:
          | {
              Codec?: {} | undefined
              SampleRate?: {} | undefined
              BitRate?: {} | undefined
              Channels?: {} | undefined
              AudioPackingMode?: {} | undefined
              CodecOptions?:
                | {
                    Profile?: {} | undefined
                    BitDepth?: {} | undefined
                    BitOrder?: {} | undefined
                    Signed?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Video?:
          | {
              Codec?: {} | undefined
              CodecOptions?: {} | undefined
              KeyframesMaxDist?: {} | undefined
              FixedGOP?: {} | undefined
              BitRate?: {} | undefined
              FrameRate?: {} | undefined
              MaxFrameRate?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              MaxWidth?: {} | undefined
              MaxHeight?: {} | undefined
              DisplayAspectRatio?: {} | undefined
              SizingPolicy?: {} | undefined
              PaddingPolicy?: {} | undefined
              Watermarks?: {} | undefined
            }
          | undefined
        Thumbnails?:
          | {
              Format?: {} | undefined
              Interval?: {} | undefined
              Resolution?: {} | undefined
              AspectRatio?: {} | undefined
              MaxWidth?: {} | undefined
              MaxHeight?: {} | undefined
              SizingPolicy?: {} | undefined
              PaddingPolicy?: {} | undefined
            }
          | undefined
        Type?: {} | undefined
      }
    | undefined
}
type ListJobsByPipelineResponse = { Jobs?: {} | undefined; NextPageToken?: {} | undefined }
type ListJobsByStatusResponse = { Jobs?: {} | undefined; NextPageToken?: {} | undefined }
type SnsTopic = string
type TestRoleResponse = { Success?: {} | undefined; Messages?: {} | undefined }
type UpdatePipelineNotificationsResponse = {
  Pipeline?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        InputBucket?: {} | undefined
        OutputBucket?: {} | undefined
        Role?: {} | undefined
        AwsKmsKeyArn?: {} | undefined
        Notifications?:
          | {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          | undefined
        ContentConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
        ThumbnailConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdatePipelineStatusResponse = {
  Pipeline?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        InputBucket?: {} | undefined
        OutputBucket?: {} | undefined
        Role?: {} | undefined
        AwsKmsKeyArn?: {} | undefined
        Notifications?:
          | {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          | undefined
        ContentConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
        ThumbnailConfig?:
          | { Bucket?: {} | undefined; StorageClass?: {} | undefined; Permissions?: {} | undefined }
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2012-09-25/jobs/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelJobResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReadJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/jobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PipelineId: string
            Input?:
              | {
                  Key?: {} | undefined
                  FrameRate?: {} | undefined
                  Resolution?: {} | undefined
                  AspectRatio?: {} | undefined
                  Interlaced?: {} | undefined
                  Container?: {} | undefined
                  Encryption?:
                    | {
                        Mode?: {} | undefined
                        Key?: {} | undefined
                        KeyMd5?: {} | undefined
                        InitializationVector?: {} | undefined
                      }
                    | undefined
                  TimeSpan?: { StartTime?: {} | undefined; Duration?: {} | undefined } | undefined
                  InputCaptions?:
                    | { MergePolicy?: {} | undefined; CaptionSources?: {} | undefined }
                    | undefined
                  DetectedProperties?:
                    | {
                        Width?: {} | undefined
                        Height?: {} | undefined
                        FrameRate?: {} | undefined
                        FileSize?: {} | undefined
                        DurationMillis?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            Inputs?: JobInput[] | undefined
            Output?:
              | {
                  Key?: {} | undefined
                  ThumbnailPattern?: {} | undefined
                  ThumbnailEncryption?:
                    | {
                        Mode?: {} | undefined
                        Key?: {} | undefined
                        KeyMd5?: {} | undefined
                        InitializationVector?: {} | undefined
                      }
                    | undefined
                  Rotate?: {} | undefined
                  PresetId?: {} | undefined
                  SegmentDuration?: {} | undefined
                  Watermarks?: {} | undefined
                  AlbumArt?: { MergePolicy?: {} | undefined; Artwork?: {} | undefined } | undefined
                  Composition?: {} | undefined
                  Captions?:
                    | {
                        MergePolicy?: {} | undefined
                        CaptionSources?: {} | undefined
                        CaptionFormats?: {} | undefined
                      }
                    | undefined
                  Encryption?:
                    | {
                        Mode?: {} | undefined
                        Key?: {} | undefined
                        KeyMd5?: {} | undefined
                        InitializationVector?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            Outputs?: CreateJobOutput[] | undefined
            OutputKeyPrefix?: string | undefined
            Playlists?: CreateJobPlaylist[] | undefined
            UserMetadata?: { [x: string]: String } | undefined
          }
        }
        output: CreateJobResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2012-09-25/pipelines': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            InputBucket: string
            OutputBucket?: string | undefined
            Role: string
            AwsKmsKeyArn?: string | undefined
            Notifications?:
              | {
                  Progressing?: {} | undefined
                  Completed?: {} | undefined
                  Warning?: {} | undefined
                  Error?: {} | undefined
                }
              | undefined
            ContentConfig?:
              | {
                  Bucket?: {} | undefined
                  StorageClass?: {} | undefined
                  Permissions?: {} | undefined
                }
              | undefined
            ThumbnailConfig?:
              | {
                  Bucket?: {} | undefined
                  StorageClass?: {} | undefined
                  Permissions?: {} | undefined
                }
              | undefined
          }
        }
        output: CreatePipelineResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { Ascending?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPipelinesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/presets': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            Container: string
            Video?:
              | {
                  Codec?: {} | undefined
                  CodecOptions?: {} | undefined
                  KeyframesMaxDist?: {} | undefined
                  FixedGOP?: {} | undefined
                  BitRate?: {} | undefined
                  FrameRate?: {} | undefined
                  MaxFrameRate?: {} | undefined
                  Resolution?: {} | undefined
                  AspectRatio?: {} | undefined
                  MaxWidth?: {} | undefined
                  MaxHeight?: {} | undefined
                  DisplayAspectRatio?: {} | undefined
                  SizingPolicy?: {} | undefined
                  PaddingPolicy?: {} | undefined
                  Watermarks?: {} | undefined
                }
              | undefined
            Audio?:
              | {
                  Codec?: {} | undefined
                  SampleRate?: {} | undefined
                  BitRate?: {} | undefined
                  Channels?: {} | undefined
                  AudioPackingMode?: {} | undefined
                  CodecOptions?:
                    | {
                        Profile?: {} | undefined
                        BitDepth?: {} | undefined
                        BitOrder?: {} | undefined
                        Signed?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            Thumbnails?:
              | {
                  Format?: {} | undefined
                  Interval?: {} | undefined
                  Resolution?: {} | undefined
                  AspectRatio?: {} | undefined
                  MaxWidth?: {} | undefined
                  MaxHeight?: {} | undefined
                  SizingPolicy?: {} | undefined
                  PaddingPolicy?: {} | undefined
                }
              | undefined
          }
        }
        output: CreatePresetResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { Ascending?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPresetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/pipelines/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePipelineResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReadPipelineResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            InputBucket?: string | undefined
            Role?: string | undefined
            AwsKmsKeyArn?: string | undefined
            Notifications?:
              | {
                  Progressing?: {} | undefined
                  Completed?: {} | undefined
                  Warning?: {} | undefined
                  Error?: {} | undefined
                }
              | undefined
            ContentConfig?:
              | {
                  Bucket?: {} | undefined
                  StorageClass?: {} | undefined
                  Permissions?: {} | undefined
                }
              | undefined
            ThumbnailConfig?:
              | {
                  Bucket?: {} | undefined
                  StorageClass?: {} | undefined
                  Permissions?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdatePipelineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/presets/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePresetResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReadPresetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/jobsByPipeline/:PipelineId': {
      $get: {
        input: { param: { PipelineId: string } } & {
          query: { Ascending?: string | undefined; PageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListJobsByPipelineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/jobsByStatus/:Status': {
      $get: {
        input: { param: { Status: string } } & {
          query: { Ascending?: string | undefined; PageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListJobsByStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/roleTests': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { Role: string; InputBucket: string; OutputBucket: string; Topics: SnsTopic[] }
        }
        output: TestRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/pipelines/:Id/notifications': {
      $post: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Notifications: {
              Progressing?: {} | undefined
              Completed?: {} | undefined
              Warning?: {} | undefined
              Error?: {} | undefined
            }
          }
        }
        output: UpdatePipelineNotificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2012-09-25/pipelines/:Id/status': {
      $post: {
        input: { param: { Id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Status: string } }
        output: UpdatePipelineStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
