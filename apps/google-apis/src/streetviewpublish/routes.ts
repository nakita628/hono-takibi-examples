import { createRoute, z } from '@hono/zod-openapi'

const BatchDeletePhotosRequestSchema = z
  .object({
    photoIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`.',
      }),
  })
  .openapi({ description: 'Request to delete multiple Photos.', required: [] })
  .openapi('BatchDeletePhotosRequest')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const BatchDeletePhotosResponseSchema = z
  .object({
    status: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description: 'The status for the operation to delete a single Photo in the batch request.',
      }),
  })
  .openapi({ description: 'Response to batch delete of one or more Photos.', required: [] })
  .openapi('BatchDeletePhotosResponse')

const PhotoIdSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'A unique identifier for a photo.' }),
  })
  .openapi({ description: 'Identifier for a Photo.', required: [] })
  .openapi('PhotoId')

const ConnectionSchema = z
  .object({
    target: PhotoIdSchema.exactOptional().openapi({
      description:
        'Required. The destination of the connection from the containing photo to another photo.',
    }),
  })
  .openapi({
    description: 'A connection is the link from a source photo to a destination photo.',
    required: [],
  })
  .openapi('Connection')

const PlaceSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the place, localized to the language_code.',
        readOnly: true,
      }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Place identifier, as described in https://developers.google.com/places/place-id.',
      }),
  })
  .openapi({ description: 'Place metadata for an entity.', required: [] })
  .openapi('Place')

const LatLngSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
      }),
  })
  .openapi({
    description:
      'An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.',
    required: [],
  })
  .openapi('LatLng')

const LevelSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.',
      }),
    number: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.',
      }),
  })
  .openapi({
    description: 'Level information containing level number and its corresponding name.',
    required: [],
  })
  .openapi('Level')

const PoseSchema = z
  .object({
    accuracyMeters: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.',
      }),
    altitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.',
      }),
    gpsRecordTimestampUnixEpoch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the GPS record since UTC epoch.' }),
    heading: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be >=0 and <360. NaN indicates an unmeasured quantity.',
      }),
    latLngPair: LatLngSchema.exactOptional().openapi({
      description:
        'Latitude and longitude pair of the pose, as explained here: https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng When creating a Photo, if the latitude and longitude pair are not provided, the geolocation from the exif header is used. A latitude and longitude pair not provided in the photo or exif header causes the photo process to fail.',
    }),
    level: LevelSchema.exactOptional().openapi({
      description: 'Level (the floor in a building) used to configure vertical navigation.',
    }),
    pitch: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Pitch, measured at the center of the photo in degrees. Value must be >=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.',
      }),
    roll: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Roll, measured in degrees. Value must be >= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.',
      }),
  })
  .openapi({ description: 'Raw pose measurement for an entity.', required: [] })
  .openapi('Pose')

const UploadRefSchema = z
  .object({
    uploadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"',
      }),
  })
  .openapi({ description: 'Upload reference for media files.', required: [] })
  .openapi('UploadRef')

const PhotoSchema = z
  .object({
    captureTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.',
      }),
    connections: z
      .array(ConnectionSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Connections to other photos. A connection represents the link from this photo to another photo.',
      }),
    downloadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.',
        readOnly: true,
      }),
    mapsPublishStatus: z
      .enum(['UNSPECIFIED_MAPS_PUBLISH_STATUS', 'PUBLISHED', 'REJECTED_UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Status in Google Maps, whether this photo was published or rejected.',
        readOnly: true,
      }),
    photoId: PhotoIdSchema.exactOptional().openapi({
      description:
        'Required. Output only. Required when updating a photo. Output only when creating a photo. Identifier for the photo, which is unique among all photos in Google.',
      readOnly: true,
    }),
    places: z
      .array(PlaceSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Places where this photo belongs.' }),
    pose: PoseSchema.exactOptional().openapi({ description: 'Optional. Pose of the photo.' }),
    shareLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The share link for the photo.', readOnly: true }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The thumbnail URL for showing a preview of the given photo.',
        readOnly: true,
      }),
    transferStatus: z
      .enum([
        'TRANSFER_STATUS_UNKNOWN',
        'NEVER_TRANSFERRED',
        'PENDING',
        'COMPLETED',
        'REJECTED',
        'EXPIRED',
        'CANCELLED',
        'RECEIVED_VIA_TRANSFER',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Status of rights transfer on this photo.',
        readOnly: true,
      }),
    uploadReference: UploadRefSchema.exactOptional().openapi({
      description:
        'Input only. Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.',
    }),
    uploadTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when the image was uploaded.', readOnly: true }),
    viewCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. View count of the photo.', readOnly: true }),
  })
  .openapi({
    description: 'Photo is used to store 360 photos along with photo metadata.',
    required: [],
  })
  .openapi('Photo')

const PhotoResponseSchema = z
  .object({
    photo: PhotoSchema.exactOptional().openapi({
      description: 'The Photo resource, if the request was successful.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        'The status for the operation to get or update a single photo in the batch request.',
    }),
  })
  .openapi({
    description:
      'Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.',
    required: [],
  })
  .openapi('PhotoResponse')

const BatchGetPhotosResponseSchema = z
  .object({
    results: z
      .array(PhotoResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.',
      }),
  })
  .openapi({ description: 'Response to batch get of Photos.', required: [] })
  .openapi('BatchGetPhotosResponse')

const UpdatePhotoRequestSchema = z
  .object({
    photo: PhotoSchema.exactOptional().openapi({
      description: 'Required. Photo object containing the new metadata.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.',
      }),
  })
  .openapi({
    description:
      'Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.',
    required: [],
  })
  .openapi('UpdatePhotoRequest')

const BatchUpdatePhotosRequestSchema = z
  .object({
    updatePhotoRequests: z
      .array(UpdatePhotoRequestSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of UpdatePhotoRequests.' }),
  })
  .openapi({
    description:
      'Request to update the metadata of photos. Updating the pixels of photos is not supported.',
    required: [],
  })
  .openapi('BatchUpdatePhotosRequest')

const BatchUpdatePhotosResponseSchema = z
  .object({
    results: z
      .array(PhotoResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results for each individual Photo updated, in the same order as the request.',
      }),
  })
  .openapi({
    description: 'Response to batch update of metadata of one or more Photos.',
    required: [],
  })
  .openapi('BatchUpdatePhotosResponse')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GpsDataGapFailureDetailsSchema = z
  .object({
    gapDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of the gap in GPS data that was found.' }),
    gapStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Relative time (from the start of the video stream) when the gap started.',
      }),
  })
  .openapi({
    description:
      'Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.',
    required: [],
  })
  .openapi('GpsDataGapFailureDetails')

const Measurement3dSchema = z
  .object({
    captureTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the IMU measurement.' }),
    x: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The sensor measurement in the x axis.' }),
    y: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The sensor measurement in the y axis.' }),
    z: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The sensor measurement in the z axis.' }),
  })
  .openapi({ description: 'A Generic 3d measurement sample.', required: [] })
  .openapi('Measurement3d')

const ImuSchema = z
  .object({
    accelMpsps: z
      .array(Measurement3dSchema)
      .exactOptional()
      .openapi({
        description:
          'The accelerometer measurements in meters/sec^2 with increasing timestamps from devices.',
      }),
    gyroRps: z
      .array(Measurement3dSchema)
      .exactOptional()
      .openapi({
        description:
          'The gyroscope measurements in radians/sec with increasing timestamps from devices.',
      }),
    magUt: z
      .array(Measurement3dSchema)
      .exactOptional()
      .openapi({
        description:
          'The magnetometer measurements of the magnetic field in microtesla (uT) with increasing timestamps from devices.',
      }),
  })
  .openapi({ description: 'IMU data from the device sensors.', required: [] })
  .openapi('Imu')

const ImuDataGapFailureDetailsSchema = z
  .object({
    gapDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of the gap in IMU data that was found.' }),
    gapStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Relative time (from the start of the video stream) when the gap started.',
      }),
  })
  .openapi({
    description:
      'Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.',
    required: [],
  })
  .openapi('ImuDataGapFailureDetails')

const InsufficientGpsFailureDetailsSchema = z
  .object({
    gpsPointsFound: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of GPS points that were found in the video.' }),
  })
  .openapi({
    description: 'Details related to ProcessingFailureReason#INSUFFICIENT_GPS.',
    required: [],
  })
  .openapi('InsufficientGpsFailureDetails')

const LatLngBoundsSchema = z
  .object({
    northeast: LatLngSchema.exactOptional().openapi({
      description: 'The northeast corner of these bounds.',
    }),
    southwest: LatLngSchema.exactOptional().openapi({
      description: 'The southwest corner of these bounds.',
    }),
  })
  .openapi({ description: 'A rectangle in geographical coordinates.', required: [] })
  .openapi('LatLngBounds')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListPhotoSequencesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    photoSequences: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of photo sequences via Operation interface. The maximum number of items returned is based on the pageSize field in the request. Each item in the list can have three possible states, * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` contains a PhotoSequence message, In each sequence, only Id is populated.',
      }),
  })
  .openapi({
    description: 'Response to list all photo sequences that belong to a user.',
    required: [],
  })
  .openapi('ListPhotoSequencesResponse')

const ListPhotosResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({
        description:
          'List of photos. The pageSize field in the request determines the number of items returned.',
      }),
  })
  .openapi({ description: 'Response to list all photos that belong to a user.', required: [] })
  .openapi('ListPhotosResponse')

const NoOverlapGpsFailureDetailsSchema = z
  .object({
    gpsEndTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of last recorded GPS point.' }),
    gpsStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of first recorded GPS point.' }),
    videoEndTime: z.string().exactOptional().openapi({ description: 'End time of video.' }),
    videoStartTime: z.string().exactOptional().openapi({ description: 'Start time of video.' }),
  })
  .openapi({
    description: 'Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS.',
    required: [],
  })
  .openapi('NoOverlapGpsFailureDetails')

const NotOutdoorsFailureDetailsSchema = z
  .object({
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Relative time (from the start of the video stream) when an indoor frame was found.',
      }),
  })
  .openapi({
    description:
      'Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.',
    required: [],
  })
  .openapi('NotOutdoorsFailureDetails')

const ProcessingFailureDetailsSchema = z
  .object({
    gpsDataGapDetails: GpsDataGapFailureDetailsSchema.exactOptional().openapi({
      description: 'See GpsDataGapFailureDetails.',
    }),
    imuDataGapDetails: ImuDataGapFailureDetailsSchema.exactOptional().openapi({
      description: 'See ImuDataGapFailureDetails.',
    }),
    insufficientGpsDetails: InsufficientGpsFailureDetailsSchema.exactOptional().openapi({
      description: 'See InsufficientGpsFailureDetails.',
    }),
    noOverlapGpsDetails: NoOverlapGpsFailureDetailsSchema.exactOptional().openapi({
      description: 'See NoOverlapGpsFailureDetails.',
    }),
    notOutdoorsDetails: NotOutdoorsFailureDetailsSchema.exactOptional().openapi({
      description: 'See NotOutdoorsFailureDetails.',
    }),
  })
  .openapi({
    description:
      'Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.',
    required: [],
  })
  .openapi('ProcessingFailureDetails')

const PhotoSequenceSchema = z
  .object({
    captureTimeOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file.',
      }),
    distanceMeters: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. The computed distance of the photo sequence in meters.',
        readOnly: true,
      }),
    failureDetails: ProcessingFailureDetailsSchema.exactOptional().openapi({
      description:
        'Output only. If this sequence has `failure_reason` set, this may contain additional details about the failure.',
      readOnly: true,
    }),
    failureReason: z
      .enum([
        'PROCESSING_FAILURE_REASON_UNSPECIFIED',
        'LOW_RESOLUTION',
        'DUPLICATE',
        'INSUFFICIENT_GPS',
        'NO_OVERLAP_GPS',
        'INVALID_GPS',
        'FAILED_TO_REFINE_POSITIONS',
        'TAKEDOWN',
        'CORRUPT_VIDEO',
        'INTERNAL',
        'INVALID_VIDEO_FORMAT',
        'INVALID_VIDEO_DIMENSIONS',
        'INVALID_CAPTURE_TIME',
        'GPS_DATA_GAP',
        'JUMPY_GPS',
        'INVALID_IMU',
        'INSUFFICIENT_IMU',
        'INSUFFICIENT_OVERLAP_TIME_SERIES',
        'IMU_DATA_GAP',
        'UNSUPPORTED_CAMERA',
        'NOT_OUTDOORS',
        'INSUFFICIENT_VIDEO_FRAMES',
        'INSUFFICIENT_MOVEMENT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. If this sequence has processing_state = FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset.',
        readOnly: true,
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename.',
        readOnly: true,
      }),
    gpsSource: z
      .enum(['PHOTO_SEQUENCE', 'CAMERA_MOTION_METADATA_TRACK'])
      .exactOptional()
      .openapi({
        description:
          'Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously.',
        readOnly: true,
      }),
    imu: ImuSchema.exactOptional().openapi({
      description:
        'Input only. Three axis IMU data for the collection. If this data is too large to put in the request, then it should be put in the CAMM track for the video. This data always takes precedence over the equivalent CAMM data, if it exists.',
    }),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Photos with increasing timestamps.', readOnly: true }),
    processingState: z
      .enum(['PROCESSING_STATE_UNSPECIFIED', 'PENDING', 'PROCESSING', 'PROCESSED', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The processing state of this sequence.',
        readOnly: true,
      }),
    rawGpsTimeline: z
      .array(PoseSchema)
      .exactOptional()
      .openapi({
        description:
          "Input only. Raw GPS measurements with increasing timestamps from the device that aren't time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM).",
      }),
    sequenceBounds: LatLngBoundsSchema.exactOptional().openapi({
      description:
        'Output only. A rectangular box that encapsulates every image in this photo sequence.',
      readOnly: true,
    }),
    uploadReference: UploadRefSchema.exactOptional().openapi({
      description:
        'Input only. Required when creating photo sequence. The resource name where the bytes of the photo sequence (in the form of video) are uploaded.',
    }),
    uploadTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time this photo sequence was created in uSV Store service.',
        readOnly: true,
      }),
    viewCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total number of views that all the published images in this PhotoSequence have received.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A sequence of 360 photos along with metadata.', required: [] })
  .openapi('PhotoSequence')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/streetviewpublish':
          'Publish and manage your 360 photos on Google Street View',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/streetviewpublish':
          'Publish and manage your 360 photos on Google Street View',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1PhotoRoute = createRoute({
  method: 'post',
  path: '/v1/photo',
  tags: ['photo'],
  description:
    'After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.',
  operationId: 'streetviewpublish.photo.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: PhotoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const putV1PhotoIdRoute = createRoute({
  method: 'put',
  path: '/v1/photo/{id}',
  tags: ['photo'],
  description:
    'Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.',
  operationId: 'streetviewpublish.photo.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a photo.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PhotoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const getV1PhotoPhotoIdRoute = createRoute({
  method: 'get',
  path: '/v1/photo/{photoId}',
  tags: ['photo'],
  description:
    'Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.',
  operationId: 'streetviewpublish.photo.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user\'s language preference for Google services is used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'INCLUDE_DOWNLOAD_URL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'INCLUDE_DOWNLOAD_URL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      photoId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the Photo.',
            in: 'path',
            name: 'photoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const deleteV1PhotoPhotoIdRoute = createRoute({
  method: 'delete',
  path: '/v1/photo/{photoId}',
  tags: ['photo'],
  description:
    'Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.',
  operationId: 'streetviewpublish.photo.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      photoId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the Photo.',
            in: 'path',
            name: 'photoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const postV1PhotoStartUploadRoute = createRoute({
  method: 'post',
  path: '/v1/photo:startUpload',
  tags: ['photo'],
  description:
    'Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.',
  operationId: 'streetviewpublish.photo.startUpload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: EmptySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadRefSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const postV1PhotoSequenceRoute = createRoute({
  method: 'post',
  path: '/v1/photoSequence',
  tags: ['photoSequence'],
  description:
    'After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.',
  operationId: 'streetviewpublish.photoSequence.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      inputType: z
        .enum(['INPUT_TYPE_UNSPECIFIED', 'VIDEO', 'XDM'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The input form of PhotoSequence.',
            in: 'query',
            name: 'inputType',
            schema: { enum: ['INPUT_TYPE_UNSPECIFIED', 'VIDEO', 'XDM'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PhotoSequenceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const getV1PhotoSequenceSequenceIdRoute = createRoute({
  method: 'get',
  path: '/v1/photoSequence/{sequenceId}',
  tags: ['photoSequence'],
  description:
    'Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.',
  operationId: 'streetviewpublish.photoSequence.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'INCLUDE_DOWNLOAD_URL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. > Note: Currently not implemented.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'INCLUDE_DOWNLOAD_URL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the photo sequence.',
            in: 'path',
            name: 'sequenceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const deleteV1PhotoSequenceSequenceIdRoute = createRoute({
  method: 'delete',
  path: '/v1/photoSequence/{sequenceId}',
  tags: ['photoSequence'],
  description:
    'Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.',
  operationId: 'streetviewpublish.photoSequence.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the PhotoSequence.',
            in: 'path',
            name: 'sequenceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const postV1PhotoSequenceStartUploadRoute = createRoute({
  method: 'post',
  path: '/v1/photoSequence:startUpload',
  tags: ['photoSequence'],
  description:
    'Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.',
  operationId: 'streetviewpublish.photoSequence.startUpload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: EmptySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadRefSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const getV1PhotoSequencesRoute = createRoute({
  method: 'get',
  path: '/v1/photoSequences',
  tags: ['photoSequences'],
  description:
    'Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.',
  operationId: 'streetviewpublish.photoSequences.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, and `filename_query`. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4"',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPhotoSequencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const getV1PhotosRoute = createRoute({
  method: 'get',
  path: '/v1/photos',
  tags: ['photos'],
  description:
    'Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.',
  operationId: 'streetviewpublish.photos.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, and `max_longitude`. See https://google.aip.dev/160 for more information.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user\'s language preference for Google services is used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The nextPageToken value returned from a previous ListPhotos request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'INCLUDE_DOWNLOAD_URL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'INCLUDE_DOWNLOAD_URL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPhotosResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const postV1PhotosBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/photos:batchDelete',
  tags: ['photos'],
  description:
    'Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.',
  operationId: 'streetviewpublish.photos.batchDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BatchDeletePhotosRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchDeletePhotosResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const getV1PhotosBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1/photos:batchGet',
  tags: ['photos'],
  description:
    'Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.',
  operationId: 'streetviewpublish.photos.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user\'s language preference for Google services is used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      photoIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.',
            explode: true,
            in: 'query',
            name: 'photoIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'INCLUDE_DOWNLOAD_URL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'INCLUDE_DOWNLOAD_URL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetPhotosResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})

export const postV1PhotosBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/photos:batchUpdate',
  tags: ['photos'],
  description:
    'Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.',
  operationId: 'streetviewpublish.photos.batchUpdate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BatchUpdatePhotosRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdatePhotosResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/streetviewpublish'],
      Oauth2c: ['https://www.googleapis.com/auth/streetviewpublish'],
    },
  ],
})
