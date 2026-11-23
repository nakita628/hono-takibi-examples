type PhotoId = { id?: string | undefined }
type Connection = { target?: PhotoId | undefined }
type Place = {
  languageCode?: string | undefined
  name?: string | undefined
  placeId?: string | undefined
}
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type Level = { name?: string | undefined; number?: number | undefined }
type Pose = {
  accuracyMeters?: number | undefined
  altitude?: number | undefined
  gpsRecordTimestampUnixEpoch?: string | undefined
  heading?: number | undefined
  latLngPair?: LatLng | undefined
  level?: Level | undefined
  pitch?: number | undefined
  roll?: number | undefined
}
type UploadRef = { uploadUrl?: string | undefined }
type Photo = {
  captureTime?: string | undefined
  connections?: Connection[] | undefined
  downloadUrl?: string | undefined
  mapsPublishStatus?:
    | 'UNSPECIFIED_MAPS_PUBLISH_STATUS'
    | 'PUBLISHED'
    | 'REJECTED_UNKNOWN'
    | undefined
  photoId?: PhotoId | undefined
  places?: Place[] | undefined
  pose?: Pose | undefined
  shareLink?: string | undefined
  thumbnailUrl?: string | undefined
  transferStatus?:
    | 'TRANSFER_STATUS_UNKNOWN'
    | 'NEVER_TRANSFERRED'
    | 'PENDING'
    | 'COMPLETED'
    | 'REJECTED'
    | 'EXPIRED'
    | 'CANCELLED'
    | 'RECEIVED_VIA_TRANSFER'
    | undefined
  uploadReference?: UploadRef | undefined
  uploadTime?: string | undefined
  viewCount?: string | undefined
}
type Empty = { [x: string]: unknown }
type GpsDataGapFailureDetails = {
  gapDuration?: string | undefined
  gapStartTime?: string | undefined
}
type ImuDataGapFailureDetails = {
  gapDuration?: string | undefined
  gapStartTime?: string | undefined
}
type InsufficientGpsFailureDetails = { gpsPointsFound?: number | undefined }
type NoOverlapGpsFailureDetails = {
  gpsEndTime?: string | undefined
  gpsStartTime?: string | undefined
  videoEndTime?: string | undefined
  videoStartTime?: string | undefined
}
type NotOutdoorsFailureDetails = { startTime?: string | undefined }
type ProcessingFailureDetails = {
  gpsDataGapDetails?: GpsDataGapFailureDetails | undefined
  imuDataGapDetails?: ImuDataGapFailureDetails | undefined
  insufficientGpsDetails?: InsufficientGpsFailureDetails | undefined
  noOverlapGpsDetails?: NoOverlapGpsFailureDetails | undefined
  notOutdoorsDetails?: NotOutdoorsFailureDetails | undefined
}
type Measurement3d = {
  captureTime?: string | undefined
  x?: number | undefined
  y?: number | undefined
  z?: number | undefined
}
type Imu = {
  accelMpsps?: Measurement3d[] | undefined
  gyroRps?: Measurement3d[] | undefined
  magUt?: Measurement3d[] | undefined
}
type LatLngBounds = { northeast?: LatLng | undefined; southwest?: LatLng | undefined }
type PhotoSequence = {
  captureTimeOverride?: string | undefined
  distanceMeters?: number | undefined
  failureDetails?: ProcessingFailureDetails | undefined
  failureReason?:
    | 'PROCESSING_FAILURE_REASON_UNSPECIFIED'
    | 'LOW_RESOLUTION'
    | 'DUPLICATE'
    | 'INSUFFICIENT_GPS'
    | 'NO_OVERLAP_GPS'
    | 'INVALID_GPS'
    | 'FAILED_TO_REFINE_POSITIONS'
    | 'TAKEDOWN'
    | 'CORRUPT_VIDEO'
    | 'INTERNAL'
    | 'INVALID_VIDEO_FORMAT'
    | 'INVALID_VIDEO_DIMENSIONS'
    | 'INVALID_CAPTURE_TIME'
    | 'GPS_DATA_GAP'
    | 'JUMPY_GPS'
    | 'INVALID_IMU'
    | 'INSUFFICIENT_IMU'
    | 'INSUFFICIENT_OVERLAP_TIME_SERIES'
    | 'IMU_DATA_GAP'
    | 'UNSUPPORTED_CAMERA'
    | 'NOT_OUTDOORS'
    | 'INSUFFICIENT_VIDEO_FRAMES'
    | 'INSUFFICIENT_MOVEMENT'
    | undefined
  filename?: string | undefined
  gpsSource?: 'PHOTO_SEQUENCE' | 'CAMERA_MOTION_METADATA_TRACK' | undefined
  id?: string | undefined
  imu?: Imu | undefined
  photos?: Photo[] | undefined
  processingState?:
    | 'PROCESSING_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'PROCESSING'
    | 'PROCESSED'
    | 'FAILED'
    | undefined
  rawGpsTimeline?: Pose[] | undefined
  sequenceBounds?: LatLngBounds | undefined
  uploadReference?: UploadRef | undefined
  uploadTime?: string | undefined
  viewCount?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListPhotoSequencesResponse = {
  nextPageToken?: string | undefined
  photoSequences?: Operation[] | undefined
}
type ListPhotosResponse = { nextPageToken?: string | undefined; photos?: Photo[] | undefined }
type BatchDeletePhotosRequest = { photoIds?: string[] | undefined }
type BatchDeletePhotosResponse = { status?: Status[] | undefined }
type PhotoResponse = { photo?: Photo | undefined; status?: Status | undefined }
type BatchGetPhotosResponse = { results?: PhotoResponse[] | undefined }
type UpdatePhotoRequest = { photo?: Photo | undefined; updateMask?: string | undefined }
type BatchUpdatePhotosRequest = { updatePhotoRequests?: UpdatePhotoRequest[] | undefined }
type BatchUpdatePhotosResponse = { results?: PhotoResponse[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/photo': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Photo }
        output: Photo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photo/:id': {
      $put: {
        input: { param: { id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Photo }
        output: Photo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photo/:photoId': {
      $delete: {
        input: { param: { photoId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { photoId: string } } & {
          query: {
            languageCode?: string | undefined
            view?: 'BASIC' | 'INCLUDE_DOWNLOAD_URL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Photo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photo:startUpload': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Empty }
        output: UploadRef
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photoSequence': {
      $post: {
        input: {
          query: {
            inputType?: 'INPUT_TYPE_UNSPECIFIED' | 'VIDEO' | 'XDM' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PhotoSequence }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photoSequence/:sequenceId': {
      $delete: {
        input: { param: { sequenceId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { sequenceId: string } } & {
          query: {
            filter?: string | undefined
            view?: 'BASIC' | 'INCLUDE_DOWNLOAD_URL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photoSequence:startUpload': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Empty }
        output: UploadRef
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photoSequences': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListPhotoSequencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photos': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'BASIC' | 'INCLUDE_DOWNLOAD_URL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListPhotosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photos:batchDelete': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchDeletePhotosRequest }
        output: BatchDeletePhotosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photos:batchGet': {
      $get: {
        input: {
          query: {
            languageCode?: string | undefined
            photoIds?: string[] | undefined
            view?: 'BASIC' | 'INCLUDE_DOWNLOAD_URL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BatchGetPhotosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/photos:batchUpdate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchUpdatePhotosRequest }
        output: BatchUpdatePhotosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
