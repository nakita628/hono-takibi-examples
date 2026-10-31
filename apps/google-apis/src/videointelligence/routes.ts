import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudVideointelligenceV1VideoSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).',
      }),
  })
  .openapi({ description: 'Video segment.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1VideoSegment')

const GoogleCloudVideointelligenceV1VideoAnnotationProgressSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'LABEL_DETECTION',
        'SHOT_CHANGE_DETECTION',
        'EXPLICIT_CONTENT_DETECTION',
        'FACE_DETECTION',
        'SPEECH_TRANSCRIPTION',
        'TEXT_DETECTION',
        'OBJECT_TRACKING',
        'LOGO_RECOGNITION',
        'PERSON_DETECTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which feature is being tracked if the request contains more than one feature.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.',
      }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Specifies which segment is being tracked if the request contains more than one segment.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the most recent update.' }),
  })
  .openapi({ description: 'Annotation progress for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1VideoAnnotationProgress')

const GoogleCloudVideointelligenceV1AnnotateVideoProgressSchema = z
  .object({
    annotationProgress: z
      .array(GoogleCloudVideointelligenceV1VideoAnnotationProgressSchema)
      .exactOptional()
      .openapi({
        description: 'Progress metadata for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1AnnotateVideoProgress')

const GoogleRpcStatusSchema = z
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
  .openapi('GoogleRpcStatus')

const GoogleCloudVideointelligenceV1ExplicitContentFrameSchema = z
  .object({
    pornographyLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Likelihood of the pornography content..' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for explicit content.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1ExplicitContentFrame')

const GoogleCloudVideointelligenceV1ExplicitContentAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1ExplicitContentFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where explicit content was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1ExplicitContentAnnotation')

const GoogleCloudVideointelligenceV1NormalizedBoundingBoxSchema = z
  .object({
    bottom: z.float32().exactOptional().openapi({ description: 'Bottom Y coordinate.' }),
    left: z.float32().exactOptional().openapi({ description: 'Left X coordinate.' }),
    right: z.float32().exactOptional().openapi({ description: 'Right X coordinate.' }),
    top: z.float32().exactOptional().openapi({ description: 'Top Y coordinate.' }),
  })
  .openapi({
    description:
      'Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1NormalizedBoundingBox')

const GoogleCloudVideointelligenceV1FaceFrameSchema = z
  .object({
    normalizedBoundingBoxes: z
      .array(GoogleCloudVideointelligenceV1NormalizedBoundingBoxSchema)
      .exactOptional()
      .openapi({
        description:
          'Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1FaceFrame')

const GoogleCloudVideointelligenceV1FaceSegmentSchema = z
  .object({
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a face was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for face detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1FaceSegment')

const GoogleCloudVideointelligenceV1FaceAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1FaceFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a face was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1FaceSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a face was detected.' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail of a representative face view (in JPEG format).' }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1FaceAnnotation')

const GoogleCloudVideointelligenceV1DetectedAttributeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detected attribute confidence. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.',
      }),
  })
  .openapi({
    description: 'A generic detected attribute represented by name in string format.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1DetectedAttribute')

const GoogleCloudVideointelligenceV1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1NormalizedVertex')

const GoogleCloudVideointelligenceV1DetectedLandmarkSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence score of the detected landmark. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this landmark, for example, left_hand, right_shoulder.',
      }),
    point: GoogleCloudVideointelligenceV1NormalizedVertexSchema.exactOptional().openapi({
      description:
        'The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.',
    }),
  })
  .openapi({
    description:
      'A generic detected landmark represented by name in string format and a 2D location.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1DetectedLandmark')

const GoogleCloudVideointelligenceV1TimestampedObjectSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The attributes of the object in the bounding box.' }),
    landmarks: z
      .array(GoogleCloudVideointelligenceV1DetectedLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The detected landmarks.' }),
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'Normalized Bounding box in a frame, where the object is located.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.',
      }),
  })
  .openapi({
    description:
      'For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1TimestampedObject')

const GoogleCloudVideointelligenceV1TrackSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Attributes in the track level.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. The confidence score of the tracked object.' }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment of a track.',
    }),
    timestampedObjects: z
      .array(GoogleCloudVideointelligenceV1TimestampedObjectSchema)
      .exactOptional()
      .openapi({ description: 'The object with timestamp and attributes per frame in the track.' }),
  })
  .openapi({ description: 'A track of an object instance.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1Track')

const GoogleCloudVideointelligenceV1FaceDetectionAnnotationSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: "The thumbnail of a person's face." }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The face tracks with attributes.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Face detection annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1FaceDetectionAnnotation')

const GoogleCloudVideointelligenceV1EntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description, e.g., `Fixed-gear bicycle`.' }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code for `description` in BCP-47 format.' }),
  })
  .openapi({ description: 'Detected entity from video analysis.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1Entity')

const GoogleCloudVideointelligenceV1LabelFrameSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1LabelFrame')

const GoogleCloudVideointelligenceV1LabelSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a label was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1LabelSegment')

const GoogleCloudVideointelligenceV1LabelAnnotationSchema = z
  .object({
    categoryEntities: z
      .array(GoogleCloudVideointelligenceV1EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.',
      }),
    entity: GoogleCloudVideointelligenceV1EntitySchema.exactOptional().openapi({
      description: 'Detected entity.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1LabelFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a label was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1LabelSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a label was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Label annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1LabelAnnotation')

const GoogleCloudVideointelligenceV1LogoRecognitionAnnotationSchema = z
  .object({
    entity: GoogleCloudVideointelligenceV1EntitySchema.exactOptional().openapi({
      description:
        'Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.',
    }),
    segments: z
      .array(GoogleCloudVideointelligenceV1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.',
      }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1TrackSchema)
      .exactOptional()
      .openapi({
        description:
          'All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.',
      }),
  })
  .openapi({
    description: 'Annotation corresponding to one detected, tracked and recognized logo class.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1LogoRecognitionAnnotation')

const GoogleCloudVideointelligenceV1ObjectTrackingFrameSchema = z
  .object({
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'The normalized bounding box location of this object track for the frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the frame in microseconds.' }),
  })
  .openapi({
    description:
      'Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1ObjectTrackingFrame')

const GoogleCloudVideointelligenceV1ObjectTrackingAnnotationSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: "Object category's labeling confidence of this track." }),
    entity: GoogleCloudVideointelligenceV1EntitySchema.exactOptional().openapi({
      description: 'Entity to specify the object category that this track is labeled as.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.',
      }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.',
    }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Annotations corresponding to one tracked object.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1ObjectTrackingAnnotation')

const GoogleCloudVideointelligenceV1PersonDetectionAnnotationSchema = z
  .object({
    tracks: z
      .array(GoogleCloudVideointelligenceV1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The detected tracks of a person.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Person detection annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1PersonDetectionAnnotation')

const GoogleCloudVideointelligenceV1WordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    speakerTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({ description: 'The word corresponding to this set of information.' }),
  })
  .openapi({
    description:
      'Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1WordInfo')

const GoogleCloudVideointelligenceV1SpeechRecognitionAlternativeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    transcript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcript text representing the words that the user spoke.' }),
    words: z
      .array(GoogleCloudVideointelligenceV1WordInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Alternative hypotheses (a.k.a. n-best list).', required: [] })
  .openapi('GoogleCloudVideointelligenceV1SpeechRecognitionAlternative')

const GoogleCloudVideointelligenceV1SpeechTranscriptionSchema = z
  .object({
    alternatives: z
      .array(GoogleCloudVideointelligenceV1SpeechRecognitionAlternativeSchema)
      .exactOptional()
      .openapi({
        description:
          'May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A speech recognition result corresponding to a portion of the audio.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1SpeechTranscription')

const GoogleCloudVideointelligenceV1NormalizedBoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudVideointelligenceV1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Normalized vertices of the bounding polygon.' }),
  })
  .openapi({
    description:
      "Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.",
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1NormalizedBoundingPoly')

const GoogleCloudVideointelligenceV1TextFrameSchema = z
  .object({
    rotatedBoundingBox:
      GoogleCloudVideointelligenceV1NormalizedBoundingPolySchema.exactOptional().openapi({
        description: 'Bounding polygon of the detected text for this frame.',
      }),
    timeOffset: z.string().exactOptional().openapi({ description: 'Timestamp of this frame.' }),
  })
  .openapi({
    description:
      'Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1TextFrame')

const GoogleCloudVideointelligenceV1TextSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.',
      }),
    frames: z
      .array(GoogleCloudVideointelligenceV1TextFrameSchema)
      .exactOptional()
      .openapi({
        description: 'Information related to the frames where OCR detected text appears.',
      }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a text snippet was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for text detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1TextSegment')

const GoogleCloudVideointelligenceV1TextAnnotationSchema = z
  .object({
    segments: z
      .array(GoogleCloudVideointelligenceV1TextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where OCR detected text appears.' }),
    text: z.string().exactOptional().openapi({ description: 'The detected text.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1TextAnnotation')

const GoogleCloudVideointelligenceV1VideoAnnotationResultsSchema = z
  .object({
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.',
    }),
    explicitAnnotation:
      GoogleCloudVideointelligenceV1ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation.',
      }),
    faceAnnotations: z
      .array(GoogleCloudVideointelligenceV1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use `face_detection_annotations` instead.' }),
    faceDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1FaceDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Face detection annotations.' }),
    frameLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Label annotations on frame level. There is exactly one element for each unique label.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    logoRecognitionAnnotations: z
      .array(GoogleCloudVideointelligenceV1LogoRecognitionAnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Annotations for list of logos detected, tracked and recognized in video.',
      }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations for list of objects detected and tracked in video.' }),
    personDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1PersonDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Person detection annotations.' }),
    segment: GoogleCloudVideointelligenceV1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment on which the annotation is run.',
    }),
    segmentLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.',
      }),
    segmentPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1VideoSegmentSchema)
      .exactOptional()
      .openapi({ description: 'Shot annotations. Each shot is represented as a video segment.' }),
    shotLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on shot level. There is exactly one element for each unique label.',
      }),
    shotPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    speechTranscriptions: z
      .array(GoogleCloudVideointelligenceV1SpeechTranscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Speech transcription.' }),
    textAnnotations: z
      .array(GoogleCloudVideointelligenceV1TextAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.',
      }),
  })
  .openapi({ description: 'Annotation results for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1VideoAnnotationResults')

const GoogleCloudVideointelligenceV1AnnotateVideoResponseSchema = z
  .object({
    annotationResults: z
      .array(GoogleCloudVideointelligenceV1VideoAnnotationResultsSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation results for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1AnnotateVideoResponse')

const GoogleCloudVideointelligenceV1beta2VideoSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).',
      }),
  })
  .openapi({ description: 'Video segment.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2VideoSegment')

const GoogleCloudVideointelligenceV1beta2VideoAnnotationProgressSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'LABEL_DETECTION',
        'SHOT_CHANGE_DETECTION',
        'EXPLICIT_CONTENT_DETECTION',
        'FACE_DETECTION',
        'SPEECH_TRANSCRIPTION',
        'TEXT_DETECTION',
        'OBJECT_TRACKING',
        'LOGO_RECOGNITION',
        'PERSON_DETECTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which feature is being tracked if the request contains more than one feature.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.',
      }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description:
        'Specifies which segment is being tracked if the request contains more than one segment.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the most recent update.' }),
  })
  .openapi({ description: 'Annotation progress for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2VideoAnnotationProgress')

const GoogleCloudVideointelligenceV1beta2AnnotateVideoProgressSchema = z
  .object({
    annotationProgress: z
      .array(GoogleCloudVideointelligenceV1beta2VideoAnnotationProgressSchema)
      .exactOptional()
      .openapi({
        description: 'Progress metadata for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress')

const GoogleCloudVideointelligenceV1beta2ExplicitContentFrameSchema = z
  .object({
    pornographyLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Likelihood of the pornography content..' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for explicit content.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2ExplicitContentFrame')

const GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1beta2ExplicitContentFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where explicit content was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation')

const GoogleCloudVideointelligenceV1beta2NormalizedBoundingBoxSchema = z
  .object({
    bottom: z.float32().exactOptional().openapi({ description: 'Bottom Y coordinate.' }),
    left: z.float32().exactOptional().openapi({ description: 'Left X coordinate.' }),
    right: z.float32().exactOptional().openapi({ description: 'Right X coordinate.' }),
    top: z.float32().exactOptional().openapi({ description: 'Top Y coordinate.' }),
  })
  .openapi({
    description:
      'Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2NormalizedBoundingBox')

const GoogleCloudVideointelligenceV1beta2FaceFrameSchema = z
  .object({
    normalizedBoundingBoxes: z
      .array(GoogleCloudVideointelligenceV1beta2NormalizedBoundingBoxSchema)
      .exactOptional()
      .openapi({
        description:
          'Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2FaceFrame')

const GoogleCloudVideointelligenceV1beta2FaceSegmentSchema = z
  .object({
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a face was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for face detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2FaceSegment')

const GoogleCloudVideointelligenceV1beta2FaceAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1beta2FaceFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a face was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1beta2FaceSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a face was detected.' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail of a representative face view (in JPEG format).' }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2FaceAnnotation')

const GoogleCloudVideointelligenceV1beta2DetectedAttributeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detected attribute confidence. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.',
      }),
  })
  .openapi({
    description: 'A generic detected attribute represented by name in string format.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2DetectedAttribute')

const GoogleCloudVideointelligenceV1beta2NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2NormalizedVertex')

const GoogleCloudVideointelligenceV1beta2DetectedLandmarkSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence score of the detected landmark. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this landmark, for example, left_hand, right_shoulder.',
      }),
    point: GoogleCloudVideointelligenceV1beta2NormalizedVertexSchema.exactOptional().openapi({
      description:
        'The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.',
    }),
  })
  .openapi({
    description:
      'A generic detected landmark represented by name in string format and a 2D location.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2DetectedLandmark')

const GoogleCloudVideointelligenceV1beta2TimestampedObjectSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1beta2DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The attributes of the object in the bounding box.' }),
    landmarks: z
      .array(GoogleCloudVideointelligenceV1beta2DetectedLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The detected landmarks.' }),
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1beta2NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'Normalized Bounding box in a frame, where the object is located.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.',
      }),
  })
  .openapi({
    description:
      'For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2TimestampedObject')

const GoogleCloudVideointelligenceV1beta2TrackSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1beta2DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Attributes in the track level.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. The confidence score of the tracked object.' }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment of a track.',
    }),
    timestampedObjects: z
      .array(GoogleCloudVideointelligenceV1beta2TimestampedObjectSchema)
      .exactOptional()
      .openapi({ description: 'The object with timestamp and attributes per frame in the track.' }),
  })
  .openapi({ description: 'A track of an object instance.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2Track')

const GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotationSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: "The thumbnail of a person's face." }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1beta2TrackSchema)
      .exactOptional()
      .openapi({ description: 'The face tracks with attributes.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Face detection annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation')

const GoogleCloudVideointelligenceV1beta2EntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description, e.g., `Fixed-gear bicycle`.' }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code for `description` in BCP-47 format.' }),
  })
  .openapi({ description: 'Detected entity from video analysis.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2Entity')

const GoogleCloudVideointelligenceV1beta2LabelFrameSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2LabelFrame')

const GoogleCloudVideointelligenceV1beta2LabelSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a label was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2LabelSegment')

const GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema = z
  .object({
    categoryEntities: z
      .array(GoogleCloudVideointelligenceV1beta2EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.',
      }),
    entity: GoogleCloudVideointelligenceV1beta2EntitySchema.exactOptional().openapi({
      description: 'Detected entity.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1beta2LabelFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a label was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1beta2LabelSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a label was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Label annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2LabelAnnotation')

const GoogleCloudVideointelligenceV1beta2LogoRecognitionAnnotationSchema = z
  .object({
    entity: GoogleCloudVideointelligenceV1beta2EntitySchema.exactOptional().openapi({
      description:
        'Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.',
    }),
    segments: z
      .array(GoogleCloudVideointelligenceV1beta2VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.',
      }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1beta2TrackSchema)
      .exactOptional()
      .openapi({
        description:
          'All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.',
      }),
  })
  .openapi({
    description: 'Annotation corresponding to one detected, tracked and recognized logo class.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2LogoRecognitionAnnotation')

const GoogleCloudVideointelligenceV1beta2ObjectTrackingFrameSchema = z
  .object({
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1beta2NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'The normalized bounding box location of this object track for the frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the frame in microseconds.' }),
  })
  .openapi({
    description:
      'Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame')

const GoogleCloudVideointelligenceV1beta2ObjectTrackingAnnotationSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: "Object category's labeling confidence of this track." }),
    entity: GoogleCloudVideointelligenceV1beta2EntitySchema.exactOptional().openapi({
      description: 'Entity to specify the object category that this track is labeled as.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1beta2ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.',
      }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description:
        'Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.',
    }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Annotations corresponding to one tracked object.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2ObjectTrackingAnnotation')

const GoogleCloudVideointelligenceV1beta2PersonDetectionAnnotationSchema = z
  .object({
    tracks: z
      .array(GoogleCloudVideointelligenceV1beta2TrackSchema)
      .exactOptional()
      .openapi({ description: 'The detected tracks of a person.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Person detection annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2PersonDetectionAnnotation')

const GoogleCloudVideointelligenceV1beta2WordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    speakerTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({ description: 'The word corresponding to this set of information.' }),
  })
  .openapi({
    description:
      'Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2WordInfo')

const GoogleCloudVideointelligenceV1beta2SpeechRecognitionAlternativeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    transcript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcript text representing the words that the user spoke.' }),
    words: z
      .array(GoogleCloudVideointelligenceV1beta2WordInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Alternative hypotheses (a.k.a. n-best list).', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2SpeechRecognitionAlternative')

const GoogleCloudVideointelligenceV1beta2SpeechTranscriptionSchema = z
  .object({
    alternatives: z
      .array(GoogleCloudVideointelligenceV1beta2SpeechRecognitionAlternativeSchema)
      .exactOptional()
      .openapi({
        description:
          'May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A speech recognition result corresponding to a portion of the audio.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2SpeechTranscription')

const GoogleCloudVideointelligenceV1beta2NormalizedBoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudVideointelligenceV1beta2NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Normalized vertices of the bounding polygon.' }),
  })
  .openapi({
    description:
      "Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.",
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2NormalizedBoundingPoly')

const GoogleCloudVideointelligenceV1beta2TextFrameSchema = z
  .object({
    rotatedBoundingBox:
      GoogleCloudVideointelligenceV1beta2NormalizedBoundingPolySchema.exactOptional().openapi({
        description: 'Bounding polygon of the detected text for this frame.',
      }),
    timeOffset: z.string().exactOptional().openapi({ description: 'Timestamp of this frame.' }),
  })
  .openapi({
    description:
      'Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2TextFrame')

const GoogleCloudVideointelligenceV1beta2TextSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.',
      }),
    frames: z
      .array(GoogleCloudVideointelligenceV1beta2TextFrameSchema)
      .exactOptional()
      .openapi({
        description: 'Information related to the frames where OCR detected text appears.',
      }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a text snippet was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for text detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2TextSegment')

const GoogleCloudVideointelligenceV1beta2TextAnnotationSchema = z
  .object({
    segments: z
      .array(GoogleCloudVideointelligenceV1beta2TextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where OCR detected text appears.' }),
    text: z.string().exactOptional().openapi({ description: 'The detected text.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2TextAnnotation')

const GoogleCloudVideointelligenceV1beta2VideoAnnotationResultsSchema = z
  .object({
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.',
    }),
    explicitAnnotation:
      GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation.',
      }),
    faceAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use `face_detection_annotations` instead.' }),
    faceDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Face detection annotations.' }),
    frameLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Label annotations on frame level. There is exactly one element for each unique label.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    logoRecognitionAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LogoRecognitionAnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Annotations for list of logos detected, tracked and recognized in video.',
      }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations for list of objects detected and tracked in video.' }),
    personDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2PersonDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Person detection annotations.' }),
    segment: GoogleCloudVideointelligenceV1beta2VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment on which the annotation is run.',
    }),
    segmentLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.',
      }),
    segmentPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2VideoSegmentSchema)
      .exactOptional()
      .openapi({ description: 'Shot annotations. Each shot is represented as a video segment.' }),
    shotLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on shot level. There is exactly one element for each unique label.',
      }),
    shotPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    speechTranscriptions: z
      .array(GoogleCloudVideointelligenceV1beta2SpeechTranscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Speech transcription.' }),
    textAnnotations: z
      .array(GoogleCloudVideointelligenceV1beta2TextAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.',
      }),
  })
  .openapi({ description: 'Annotation results for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1beta2VideoAnnotationResults')

const GoogleCloudVideointelligenceV1beta2AnnotateVideoResponseSchema = z
  .object({
    annotationResults: z
      .array(GoogleCloudVideointelligenceV1beta2VideoAnnotationResultsSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation results for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse')

const GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).',
      }),
  })
  .openapi({ description: 'Video segment.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1VideoSegment')

const GoogleCloudVideointelligenceV1p1beta1VideoAnnotationProgressSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'LABEL_DETECTION',
        'SHOT_CHANGE_DETECTION',
        'EXPLICIT_CONTENT_DETECTION',
        'FACE_DETECTION',
        'SPEECH_TRANSCRIPTION',
        'TEXT_DETECTION',
        'OBJECT_TRACKING',
        'LOGO_RECOGNITION',
        'PERSON_DETECTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which feature is being tracked if the request contains more than one feature.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.',
      }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Specifies which segment is being tracked if the request contains more than one segment.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the most recent update.' }),
  })
  .openapi({ description: 'Annotation progress for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1VideoAnnotationProgress')

const GoogleCloudVideointelligenceV1p1beta1AnnotateVideoProgressSchema = z
  .object({
    annotationProgress: z
      .array(GoogleCloudVideointelligenceV1p1beta1VideoAnnotationProgressSchema)
      .exactOptional()
      .openapi({
        description: 'Progress metadata for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1AnnotateVideoProgress')

const GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrameSchema = z
  .object({
    pornographyLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Likelihood of the pornography content..' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for explicit content.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame')

const GoogleCloudVideointelligenceV1p1beta1ExplicitContentAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where explicit content was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1ExplicitContentAnnotation')

const GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBoxSchema = z
  .object({
    bottom: z.float32().exactOptional().openapi({ description: 'Bottom Y coordinate.' }),
    left: z.float32().exactOptional().openapi({ description: 'Left X coordinate.' }),
    right: z.float32().exactOptional().openapi({ description: 'Right X coordinate.' }),
    top: z.float32().exactOptional().openapi({ description: 'Top Y coordinate.' }),
  })
  .openapi({
    description:
      'Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBox')

const GoogleCloudVideointelligenceV1p1beta1FaceFrameSchema = z
  .object({
    normalizedBoundingBoxes: z
      .array(GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBoxSchema)
      .exactOptional()
      .openapi({
        description:
          'Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1FaceFrame')

const GoogleCloudVideointelligenceV1p1beta1FaceSegmentSchema = z
  .object({
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a face was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for face detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1FaceSegment')

const GoogleCloudVideointelligenceV1p1beta1FaceAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p1beta1FaceFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a face was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p1beta1FaceSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a face was detected.' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail of a representative face view (in JPEG format).' }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1FaceAnnotation')

const GoogleCloudVideointelligenceV1p1beta1DetectedAttributeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detected attribute confidence. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.',
      }),
  })
  .openapi({
    description: 'A generic detected attribute represented by name in string format.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1DetectedAttribute')

const GoogleCloudVideointelligenceV1p1beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1NormalizedVertex')

const GoogleCloudVideointelligenceV1p1beta1DetectedLandmarkSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence score of the detected landmark. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this landmark, for example, left_hand, right_shoulder.',
      }),
    point: GoogleCloudVideointelligenceV1p1beta1NormalizedVertexSchema.exactOptional().openapi({
      description:
        'The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.',
    }),
  })
  .openapi({
    description:
      'A generic detected landmark represented by name in string format and a 2D location.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1DetectedLandmark')

const GoogleCloudVideointelligenceV1p1beta1TimestampedObjectSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p1beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The attributes of the object in the bounding box.' }),
    landmarks: z
      .array(GoogleCloudVideointelligenceV1p1beta1DetectedLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The detected landmarks.' }),
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'Normalized Bounding box in a frame, where the object is located.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.',
      }),
  })
  .openapi({
    description:
      'For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1TimestampedObject')

const GoogleCloudVideointelligenceV1p1beta1TrackSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p1beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Attributes in the track level.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. The confidence score of the tracked object.' }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment of a track.',
    }),
    timestampedObjects: z
      .array(GoogleCloudVideointelligenceV1p1beta1TimestampedObjectSchema)
      .exactOptional()
      .openapi({ description: 'The object with timestamp and attributes per frame in the track.' }),
  })
  .openapi({ description: 'A track of an object instance.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1Track')

const GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotationSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: "The thumbnail of a person's face." }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p1beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The face tracks with attributes.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Face detection annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation')

const GoogleCloudVideointelligenceV1p1beta1EntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description, e.g., `Fixed-gear bicycle`.' }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code for `description` in BCP-47 format.' }),
  })
  .openapi({ description: 'Detected entity from video analysis.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1Entity')

const GoogleCloudVideointelligenceV1p1beta1LabelFrameSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1LabelFrame')

const GoogleCloudVideointelligenceV1p1beta1LabelSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a label was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1LabelSegment')

const GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema = z
  .object({
    categoryEntities: z
      .array(GoogleCloudVideointelligenceV1p1beta1EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.',
      }),
    entity: GoogleCloudVideointelligenceV1p1beta1EntitySchema.exactOptional().openapi({
      description: 'Detected entity.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a label was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a label was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Label annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1LabelAnnotation')

const GoogleCloudVideointelligenceV1p1beta1LogoRecognitionAnnotationSchema = z
  .object({
    entity: GoogleCloudVideointelligenceV1p1beta1EntitySchema.exactOptional().openapi({
      description:
        'Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.',
    }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.',
      }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p1beta1TrackSchema)
      .exactOptional()
      .openapi({
        description:
          'All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.',
      }),
  })
  .openapi({
    description: 'Annotation corresponding to one detected, tracked and recognized logo class.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1LogoRecognitionAnnotation')

const GoogleCloudVideointelligenceV1p1beta1ObjectTrackingFrameSchema = z
  .object({
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'The normalized bounding box location of this object track for the frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the frame in microseconds.' }),
  })
  .openapi({
    description:
      'Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1ObjectTrackingFrame')

const GoogleCloudVideointelligenceV1p1beta1ObjectTrackingAnnotationSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: "Object category's labeling confidence of this track." }),
    entity: GoogleCloudVideointelligenceV1p1beta1EntitySchema.exactOptional().openapi({
      description: 'Entity to specify the object category that this track is labeled as.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p1beta1ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.',
      }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.',
    }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Annotations corresponding to one tracked object.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1ObjectTrackingAnnotation')

const GoogleCloudVideointelligenceV1p1beta1PersonDetectionAnnotationSchema = z
  .object({
    tracks: z
      .array(GoogleCloudVideointelligenceV1p1beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The detected tracks of a person.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Person detection annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1PersonDetectionAnnotation')

const GoogleCloudVideointelligenceV1p1beta1WordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    speakerTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({ description: 'The word corresponding to this set of information.' }),
  })
  .openapi({
    description:
      'Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1WordInfo')

const GoogleCloudVideointelligenceV1p1beta1SpeechRecognitionAlternativeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    transcript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcript text representing the words that the user spoke.' }),
    words: z
      .array(GoogleCloudVideointelligenceV1p1beta1WordInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Alternative hypotheses (a.k.a. n-best list).', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1SpeechRecognitionAlternative')

const GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionSchema = z
  .object({
    alternatives: z
      .array(GoogleCloudVideointelligenceV1p1beta1SpeechRecognitionAlternativeSchema)
      .exactOptional()
      .openapi({
        description:
          'May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A speech recognition result corresponding to a portion of the audio.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1SpeechTranscription')

const GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudVideointelligenceV1p1beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Normalized vertices of the bounding polygon.' }),
  })
  .openapi({
    description:
      "Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.",
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingPoly')

const GoogleCloudVideointelligenceV1p1beta1TextFrameSchema = z
  .object({
    rotatedBoundingBox:
      GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingPolySchema.exactOptional().openapi({
        description: 'Bounding polygon of the detected text for this frame.',
      }),
    timeOffset: z.string().exactOptional().openapi({ description: 'Timestamp of this frame.' }),
  })
  .openapi({
    description:
      'Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1TextFrame')

const GoogleCloudVideointelligenceV1p1beta1TextSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.',
      }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p1beta1TextFrameSchema)
      .exactOptional()
      .openapi({
        description: 'Information related to the frames where OCR detected text appears.',
      }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a text snippet was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for text detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1TextSegment')

const GoogleCloudVideointelligenceV1p1beta1TextAnnotationSchema = z
  .object({
    segments: z
      .array(GoogleCloudVideointelligenceV1p1beta1TextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where OCR detected text appears.' }),
    text: z.string().exactOptional().openapi({ description: 'The detected text.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1TextAnnotation')

const GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResultsSchema = z
  .object({
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.',
    }),
    explicitAnnotation:
      GoogleCloudVideointelligenceV1p1beta1ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation.',
      }),
    faceAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use `face_detection_annotations` instead.' }),
    faceDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Face detection annotations.' }),
    frameLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Label annotations on frame level. There is exactly one element for each unique label.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    logoRecognitionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LogoRecognitionAnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Annotations for list of logos detected, tracked and recognized in video.',
      }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations for list of objects detected and tracked in video.' }),
    personDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1PersonDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Person detection annotations.' }),
    segment: GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment on which the annotation is run.',
    }),
    segmentLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.',
      }),
    segmentPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({ description: 'Shot annotations. Each shot is represented as a video segment.' }),
    shotLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on shot level. There is exactly one element for each unique label.',
      }),
    shotPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    speechTranscriptions: z
      .array(GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Speech transcription.' }),
    textAnnotations: z
      .array(GoogleCloudVideointelligenceV1p1beta1TextAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.',
      }),
  })
  .openapi({ description: 'Annotation results for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults')

const GoogleCloudVideointelligenceV1p1beta1AnnotateVideoResponseSchema = z
  .object({
    annotationResults: z
      .array(GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResultsSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation results for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p1beta1AnnotateVideoResponse')

const GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).',
      }),
  })
  .openapi({ description: 'Video segment.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1VideoSegment')

const GoogleCloudVideointelligenceV1p2beta1VideoAnnotationProgressSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'LABEL_DETECTION',
        'SHOT_CHANGE_DETECTION',
        'EXPLICIT_CONTENT_DETECTION',
        'FACE_DETECTION',
        'SPEECH_TRANSCRIPTION',
        'TEXT_DETECTION',
        'OBJECT_TRACKING',
        'LOGO_RECOGNITION',
        'PERSON_DETECTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which feature is being tracked if the request contains more than one feature.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.',
      }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Specifies which segment is being tracked if the request contains more than one segment.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the most recent update.' }),
  })
  .openapi({ description: 'Annotation progress for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1VideoAnnotationProgress')

const GoogleCloudVideointelligenceV1p2beta1AnnotateVideoProgressSchema = z
  .object({
    annotationProgress: z
      .array(GoogleCloudVideointelligenceV1p2beta1VideoAnnotationProgressSchema)
      .exactOptional()
      .openapi({
        description: 'Progress metadata for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1AnnotateVideoProgress')

const GoogleCloudVideointelligenceV1p2beta1ExplicitContentFrameSchema = z
  .object({
    pornographyLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Likelihood of the pornography content..' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for explicit content.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1ExplicitContentFrame')

const GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p2beta1ExplicitContentFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where explicit content was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation')

const GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBoxSchema = z
  .object({
    bottom: z.float32().exactOptional().openapi({ description: 'Bottom Y coordinate.' }),
    left: z.float32().exactOptional().openapi({ description: 'Left X coordinate.' }),
    right: z.float32().exactOptional().openapi({ description: 'Right X coordinate.' }),
    top: z.float32().exactOptional().openapi({ description: 'Top Y coordinate.' }),
  })
  .openapi({
    description:
      'Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBox')

const GoogleCloudVideointelligenceV1p2beta1FaceFrameSchema = z
  .object({
    normalizedBoundingBoxes: z
      .array(GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBoxSchema)
      .exactOptional()
      .openapi({
        description:
          'Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1FaceFrame')

const GoogleCloudVideointelligenceV1p2beta1FaceSegmentSchema = z
  .object({
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a face was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for face detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1FaceSegment')

const GoogleCloudVideointelligenceV1p2beta1FaceAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p2beta1FaceFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a face was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p2beta1FaceSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a face was detected.' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail of a representative face view (in JPEG format).' }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1FaceAnnotation')

const GoogleCloudVideointelligenceV1p2beta1DetectedAttributeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detected attribute confidence. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.',
      }),
  })
  .openapi({
    description: 'A generic detected attribute represented by name in string format.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1DetectedAttribute')

const GoogleCloudVideointelligenceV1p2beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1NormalizedVertex')

const GoogleCloudVideointelligenceV1p2beta1DetectedLandmarkSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence score of the detected landmark. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this landmark, for example, left_hand, right_shoulder.',
      }),
    point: GoogleCloudVideointelligenceV1p2beta1NormalizedVertexSchema.exactOptional().openapi({
      description:
        'The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.',
    }),
  })
  .openapi({
    description:
      'A generic detected landmark represented by name in string format and a 2D location.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1DetectedLandmark')

const GoogleCloudVideointelligenceV1p2beta1TimestampedObjectSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p2beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The attributes of the object in the bounding box.' }),
    landmarks: z
      .array(GoogleCloudVideointelligenceV1p2beta1DetectedLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The detected landmarks.' }),
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'Normalized Bounding box in a frame, where the object is located.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.',
      }),
  })
  .openapi({
    description:
      'For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1TimestampedObject')

const GoogleCloudVideointelligenceV1p2beta1TrackSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p2beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Attributes in the track level.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. The confidence score of the tracked object.' }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment of a track.',
    }),
    timestampedObjects: z
      .array(GoogleCloudVideointelligenceV1p2beta1TimestampedObjectSchema)
      .exactOptional()
      .openapi({ description: 'The object with timestamp and attributes per frame in the track.' }),
  })
  .openapi({ description: 'A track of an object instance.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1Track')

const GoogleCloudVideointelligenceV1p2beta1FaceDetectionAnnotationSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: "The thumbnail of a person's face." }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p2beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The face tracks with attributes.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Face detection annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1FaceDetectionAnnotation')

const GoogleCloudVideointelligenceV1p2beta1EntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description, e.g., `Fixed-gear bicycle`.' }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code for `description` in BCP-47 format.' }),
  })
  .openapi({ description: 'Detected entity from video analysis.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1Entity')

const GoogleCloudVideointelligenceV1p2beta1LabelFrameSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1LabelFrame')

const GoogleCloudVideointelligenceV1p2beta1LabelSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a label was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1LabelSegment')

const GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema = z
  .object({
    categoryEntities: z
      .array(GoogleCloudVideointelligenceV1p2beta1EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.',
      }),
    entity: GoogleCloudVideointelligenceV1p2beta1EntitySchema.exactOptional().openapi({
      description: 'Detected entity.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a label was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a label was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Label annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1LabelAnnotation')

const GoogleCloudVideointelligenceV1p2beta1LogoRecognitionAnnotationSchema = z
  .object({
    entity: GoogleCloudVideointelligenceV1p2beta1EntitySchema.exactOptional().openapi({
      description:
        'Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.',
    }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.',
      }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p2beta1TrackSchema)
      .exactOptional()
      .openapi({
        description:
          'All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.',
      }),
  })
  .openapi({
    description: 'Annotation corresponding to one detected, tracked and recognized logo class.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1LogoRecognitionAnnotation')

const GoogleCloudVideointelligenceV1p2beta1ObjectTrackingFrameSchema = z
  .object({
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'The normalized bounding box location of this object track for the frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the frame in microseconds.' }),
  })
  .openapi({
    description:
      'Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1ObjectTrackingFrame')

const GoogleCloudVideointelligenceV1p2beta1ObjectTrackingAnnotationSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: "Object category's labeling confidence of this track." }),
    entity: GoogleCloudVideointelligenceV1p2beta1EntitySchema.exactOptional().openapi({
      description: 'Entity to specify the object category that this track is labeled as.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p2beta1ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.',
      }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.',
    }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Annotations corresponding to one tracked object.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1ObjectTrackingAnnotation')

const GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotationSchema = z
  .object({
    tracks: z
      .array(GoogleCloudVideointelligenceV1p2beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The detected tracks of a person.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Person detection annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation')

const GoogleCloudVideointelligenceV1p2beta1WordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    speakerTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({ description: 'The word corresponding to this set of information.' }),
  })
  .openapi({
    description:
      'Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1WordInfo')

const GoogleCloudVideointelligenceV1p2beta1SpeechRecognitionAlternativeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    transcript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcript text representing the words that the user spoke.' }),
    words: z
      .array(GoogleCloudVideointelligenceV1p2beta1WordInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Alternative hypotheses (a.k.a. n-best list).', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1SpeechRecognitionAlternative')

const GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionSchema = z
  .object({
    alternatives: z
      .array(GoogleCloudVideointelligenceV1p2beta1SpeechRecognitionAlternativeSchema)
      .exactOptional()
      .openapi({
        description:
          'May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A speech recognition result corresponding to a portion of the audio.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1SpeechTranscription')

const GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudVideointelligenceV1p2beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Normalized vertices of the bounding polygon.' }),
  })
  .openapi({
    description:
      "Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.",
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingPoly')

const GoogleCloudVideointelligenceV1p2beta1TextFrameSchema = z
  .object({
    rotatedBoundingBox:
      GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingPolySchema.exactOptional().openapi({
        description: 'Bounding polygon of the detected text for this frame.',
      }),
    timeOffset: z.string().exactOptional().openapi({ description: 'Timestamp of this frame.' }),
  })
  .openapi({
    description:
      'Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1TextFrame')

const GoogleCloudVideointelligenceV1p2beta1TextSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.',
      }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p2beta1TextFrameSchema)
      .exactOptional()
      .openapi({
        description: 'Information related to the frames where OCR detected text appears.',
      }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a text snippet was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for text detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1TextSegment')

const GoogleCloudVideointelligenceV1p2beta1TextAnnotationSchema = z
  .object({
    segments: z
      .array(GoogleCloudVideointelligenceV1p2beta1TextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where OCR detected text appears.' }),
    text: z.string().exactOptional().openapi({ description: 'The detected text.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1TextAnnotation')

const GoogleCloudVideointelligenceV1p2beta1VideoAnnotationResultsSchema = z
  .object({
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.',
    }),
    explicitAnnotation:
      GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation.',
      }),
    faceAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use `face_detection_annotations` instead.' }),
    faceDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1FaceDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Face detection annotations.' }),
    frameLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Label annotations on frame level. There is exactly one element for each unique label.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    logoRecognitionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LogoRecognitionAnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Annotations for list of logos detected, tracked and recognized in video.',
      }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations for list of objects detected and tracked in video.' }),
    personDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Person detection annotations.' }),
    segment: GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment on which the annotation is run.',
    }),
    segmentLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.',
      }),
    segmentPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({ description: 'Shot annotations. Each shot is represented as a video segment.' }),
    shotLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on shot level. There is exactly one element for each unique label.',
      }),
    shotPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    speechTranscriptions: z
      .array(GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Speech transcription.' }),
    textAnnotations: z
      .array(GoogleCloudVideointelligenceV1p2beta1TextAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.',
      }),
  })
  .openapi({ description: 'Annotation results for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p2beta1VideoAnnotationResults')

const GoogleCloudVideointelligenceV1p2beta1AnnotateVideoResponseSchema = z
  .object({
    annotationResults: z
      .array(GoogleCloudVideointelligenceV1p2beta1VideoAnnotationResultsSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation results for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p2beta1AnnotateVideoResponse')

const GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).',
      }),
  })
  .openapi({ description: 'Video segment.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1VideoSegment')

const GoogleCloudVideointelligenceV1p3beta1VideoAnnotationProgressSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'LABEL_DETECTION',
        'SHOT_CHANGE_DETECTION',
        'EXPLICIT_CONTENT_DETECTION',
        'FACE_DETECTION',
        'SPEECH_TRANSCRIPTION',
        'TEXT_DETECTION',
        'OBJECT_TRACKING',
        'LOGO_RECOGNITION',
        'CELEBRITY_RECOGNITION',
        'PERSON_DETECTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which feature is being tracked if the request contains more than one feature.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.',
      }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Specifies which segment is being tracked if the request contains more than one segment.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the request was received.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of the most recent update.' }),
  })
  .openapi({ description: 'Annotation progress for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1VideoAnnotationProgress')

const GoogleCloudVideointelligenceV1p3beta1AnnotateVideoProgressSchema = z
  .object({
    annotationProgress: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoAnnotationProgressSchema)
      .exactOptional()
      .openapi({
        description: 'Progress metadata for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1AnnotateVideoProgress')

const GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfigSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".',
      }),
  })
  .openapi({ description: 'Config for EXPLICIT_CONTENT_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfigSchema = z
  .object({
    includeAttributes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false.",
      }),
    includeBoundingBoxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether bounding boxes are included in the face annotation output.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".',
      }),
  })
  .openapi({ description: 'Config for FACE_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigSchema = z
  .object({
    frameConfidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.',
      }),
    labelDetectionMode: z
      .enum(['LABEL_DETECTION_MODE_UNSPECIFIED', 'SHOT_MODE', 'FRAME_MODE', 'SHOT_AND_FRAME_MODE'])
      .exactOptional()
      .openapi({
        description:
          'What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".',
      }),
    stationaryCamera: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.',
      }),
    videoConfidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.",
      }),
  })
  .openapi({ description: 'Config for LABEL_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfigSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".',
      }),
  })
  .openapi({ description: 'Config for OBJECT_TRACKING.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig')

const GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfigSchema = z
  .object({
    includeAttributes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false.",
      }),
    includeBoundingBoxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether bounding boxes are included in the person detection annotation output.',
      }),
    includePoseLandmarks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false.",
      }),
  })
  .openapi({ description: 'Config for PERSON_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfigSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset), "builtin/latest", and "builtin/legacy".',
      }),
  })
  .openapi({ description: 'Config for SHOT_CHANGE_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1SpeechContextSchema = z
  .object({
    phrases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content).',
      }),
  })
  .openapi({
    description:
      'Provides "hints" to the speech recognizer to favor specific words and phrases in the results.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1SpeechContext')

const GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfigSchema = z
  .object({
    audioTracks: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Optional. For file formats, such as MXF or MKV, supporting multiple audio tracks, specify up to two tracks. Default: track 0.',
      }),
    diarizationSpeakerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true.",
      }),
    enableAutomaticPunctuation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: \"This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature.\"",
      }),
    enableSpeakerDiarization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time.",
      }),
    enableWordConfidence: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`.',
      }),
    filterProfanity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won\'t be filtered out.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes.',
      }),
    maxAlternatives: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.',
      }),
    speechContexts: z
      .array(GoogleCloudVideointelligenceV1p3beta1SpeechContextSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. A means to provide context to assist the speech recognition.',
      }),
  })
  .openapi({ description: 'Config for SPEECH_TRANSCRIPTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig')

const GoogleCloudVideointelligenceV1p3beta1TextDetectionConfigSchema = z
  .object({
    languageHints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".',
      }),
  })
  .openapi({ description: 'Config for TEXT_DETECTION.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig')

const GoogleCloudVideointelligenceV1p3beta1VideoContextSchema = z
  .object({
    explicitContentDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfigSchema.exactOptional().openapi(
        { description: 'Config for EXPLICIT_CONTENT_DETECTION.' },
      ),
    faceDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfigSchema.exactOptional().openapi({
        description: 'Config for FACE_DETECTION.',
      }),
    labelDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigSchema.exactOptional().openapi({
        description: 'Config for LABEL_DETECTION.',
      }),
    objectTrackingConfig:
      GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfigSchema.exactOptional().openapi({
        description: 'Config for OBJECT_TRACKING.',
      }),
    personDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfigSchema.exactOptional().openapi({
        description: 'Config for PERSON_DETECTION.',
      }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.',
      }),
    shotChangeDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfigSchema.exactOptional().openapi({
        description: 'Config for SHOT_CHANGE_DETECTION.',
      }),
    speechTranscriptionConfig:
      GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfigSchema.exactOptional().openapi({
        description: 'Config for SPEECH_TRANSCRIPTION.',
      }),
    textDetectionConfig:
      GoogleCloudVideointelligenceV1p3beta1TextDetectionConfigSchema.exactOptional().openapi({
        description: 'Config for TEXT_DETECTION.',
      }),
  })
  .openapi({ description: 'Video context and/or feature-specific parameters.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1VideoContext')

const GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestSchema = z
  .object({
    features: z
      .array(
        z.enum([
          'FEATURE_UNSPECIFIED',
          'LABEL_DETECTION',
          'SHOT_CHANGE_DETECTION',
          'EXPLICIT_CONTENT_DETECTION',
          'FACE_DETECTION',
          'SPEECH_TRANSCRIPTION',
          'TEXT_DETECTION',
          'OBJECT_TRACKING',
          'LOGO_RECOGNITION',
          'CELEBRITY_RECOGNITION',
          'PERSON_DETECTION',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Required. Requested video annotation features.' }),
    inputContent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.",
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).',
      }),
    videoContext: GoogleCloudVideointelligenceV1p3beta1VideoContextSchema.exactOptional().openapi({
      description: 'Additional video context and/or feature-specific parameters.',
    }),
  })
  .openapi({ description: 'Video annotation request.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest')

const GoogleCloudVideointelligenceV1p3beta1CelebritySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual description of additional information about the celebrity, if applicable.',
      }),
    displayName: z.string().exactOptional().openapi({ description: 'The celebrity name.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity.',
      }),
  })
  .openapi({ description: 'Celebrity definition.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1Celebrity')

const GoogleCloudVideointelligenceV1p3beta1RecognizedCelebritySchema = z
  .object({
    celebrity: GoogleCloudVideointelligenceV1p3beta1CelebritySchema.exactOptional().openapi({
      description: 'The recognized celebrity.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Recognition confidence. Range [0, 1].' }),
  })
  .openapi({ description: 'The recognized celebrity with confidence score.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity')

const GoogleCloudVideointelligenceV1p3beta1DetectedAttributeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detected attribute confidence. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.',
      }),
  })
  .openapi({
    description: 'A generic detected attribute represented by name in string format.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1DetectedAttribute')

const GoogleCloudVideointelligenceV1p3beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1NormalizedVertex')

const GoogleCloudVideointelligenceV1p3beta1DetectedLandmarkSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence score of the detected landmark. Range [0, 1].' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this landmark, for example, left_hand, right_shoulder.',
      }),
    point: GoogleCloudVideointelligenceV1p3beta1NormalizedVertexSchema.exactOptional().openapi({
      description:
        'The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.',
    }),
  })
  .openapi({
    description:
      'A generic detected landmark represented by name in string format and a 2D location.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1DetectedLandmark')

const GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBoxSchema = z
  .object({
    bottom: z.float32().exactOptional().openapi({ description: 'Bottom Y coordinate.' }),
    left: z.float32().exactOptional().openapi({ description: 'Left X coordinate.' }),
    right: z.float32().exactOptional().openapi({ description: 'Right X coordinate.' }),
    top: z.float32().exactOptional().openapi({ description: 'Top Y coordinate.' }),
  })
  .openapi({
    description:
      'Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox')

const GoogleCloudVideointelligenceV1p3beta1TimestampedObjectSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p3beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The attributes of the object in the bounding box.' }),
    landmarks: z
      .array(GoogleCloudVideointelligenceV1p3beta1DetectedLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The detected landmarks.' }),
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'Normalized Bounding box in a frame, where the object is located.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.',
      }),
  })
  .openapi({
    description:
      'For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1TimestampedObject')

const GoogleCloudVideointelligenceV1p3beta1TrackSchema = z
  .object({
    attributes: z
      .array(GoogleCloudVideointelligenceV1p3beta1DetectedAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Attributes in the track level.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. The confidence score of the tracked object.' }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment of a track.',
    }),
    timestampedObjects: z
      .array(GoogleCloudVideointelligenceV1p3beta1TimestampedObjectSchema)
      .exactOptional()
      .openapi({ description: 'The object with timestamp and attributes per frame in the track.' }),
  })
  .openapi({ description: 'A track of an object instance.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1Track')

const GoogleCloudVideointelligenceV1p3beta1CelebrityTrackSchema = z
  .object({
    celebrities: z
      .array(GoogleCloudVideointelligenceV1p3beta1RecognizedCelebritySchema)
      .exactOptional()
      .openapi({ description: 'Top N match of the celebrities for the face in this track.' }),
    faceTrack: GoogleCloudVideointelligenceV1p3beta1TrackSchema.exactOptional().openapi({
      description: "A track of a person's face.",
    }),
  })
  .openapi({
    description:
      'The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1CelebrityTrack')

const GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotationSchema = z
  .object({
    celebrityTracks: z
      .array(GoogleCloudVideointelligenceV1p3beta1CelebrityTrackSchema)
      .exactOptional()
      .openapi({
        description:
          'The tracks detected from the input video, including recognized celebrities and other detected faces in the video.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Celebrity recognition annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation')

const GoogleCloudVideointelligenceV1p3beta1ExplicitContentFrameSchema = z
  .object({
    pornographyLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Likelihood of the pornography content..' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for explicit content.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ExplicitContentFrame')

const GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p3beta1ExplicitContentFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where explicit content was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotation')

const GoogleCloudVideointelligenceV1p3beta1FaceFrameSchema = z
  .object({
    normalizedBoundingBoxes: z
      .array(GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBoxSchema)
      .exactOptional()
      .openapi({
        description:
          'Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1FaceFrame')

const GoogleCloudVideointelligenceV1p3beta1FaceSegmentSchema = z
  .object({
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a face was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for face detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1FaceSegment')

const GoogleCloudVideointelligenceV1p3beta1FaceAnnotationSchema = z
  .object({
    frames: z
      .array(GoogleCloudVideointelligenceV1p3beta1FaceFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a face was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p3beta1FaceSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a face was detected.' }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail of a representative face view (in JPEG format).' }),
  })
  .openapi({ description: 'Deprecated. No effect.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1FaceAnnotation')

const GoogleCloudVideointelligenceV1p3beta1FaceDetectionAnnotationSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: "The thumbnail of a person's face." }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p3beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The face tracks with attributes.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Face detection annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1FaceDetectionAnnotation')

const GoogleCloudVideointelligenceV1p3beta1EntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Textual description, e.g., `Fixed-gear bicycle`.' }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code for `description` in BCP-47 format.' }),
  })
  .openapi({ description: 'Detected entity from video analysis.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1Entity')

const GoogleCloudVideointelligenceV1p3beta1LabelFrameSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1LabelFrame')

const GoogleCloudVideointelligenceV1p3beta1LabelSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence that the label is accurate. Range: [0, 1].' }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a label was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for label detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1LabelSegment')

const GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema = z
  .object({
    categoryEntities: z
      .array(GoogleCloudVideointelligenceV1p3beta1EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.',
      }),
    entity: GoogleCloudVideointelligenceV1p3beta1EntitySchema.exactOptional().openapi({
      description: 'Detected entity.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelFrameSchema)
      .exactOptional()
      .openapi({ description: 'All video frames where a label was detected.' }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where a label was detected.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Label annotation.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1LabelAnnotation')

const GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotationSchema = z
  .object({
    entity: GoogleCloudVideointelligenceV1p3beta1EntitySchema.exactOptional().openapi({
      description:
        'Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.',
    }),
    segments: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.',
      }),
    tracks: z
      .array(GoogleCloudVideointelligenceV1p3beta1TrackSchema)
      .exactOptional()
      .openapi({
        description:
          'All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.',
      }),
  })
  .openapi({
    description: 'Annotation corresponding to one detected, tracked and recognized logo class.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation')

const GoogleCloudVideointelligenceV1p3beta1ObjectTrackingFrameSchema = z
  .object({
    normalizedBoundingBox:
      GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBoxSchema.exactOptional().openapi({
        description: 'The normalized bounding box location of this object track for the frame.',
      }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the frame in microseconds.' }),
  })
  .openapi({
    description:
      'Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ObjectTrackingFrame')

const GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotationSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: "Object category's labeling confidence of this track." }),
    entity: GoogleCloudVideointelligenceV1p3beta1EntitySchema.exactOptional().openapi({
      description: 'Entity to specify the object category that this track is labeled as.',
    }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p3beta1ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.',
      }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description:
        'Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.',
    }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Annotations corresponding to one tracked object.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotation')

const GoogleCloudVideointelligenceV1p3beta1PersonDetectionAnnotationSchema = z
  .object({
    tracks: z
      .array(GoogleCloudVideointelligenceV1p3beta1TrackSchema)
      .exactOptional()
      .openapi({ description: 'The detected tracks of a person.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({ description: 'Person detection annotation per video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1PersonDetectionAnnotation')

const GoogleCloudVideointelligenceV1p3beta1WordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    speakerTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({ description: 'The word corresponding to this set of information.' }),
  })
  .openapi({
    description:
      'Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1WordInfo')

const GoogleCloudVideointelligenceV1p3beta1SpeechRecognitionAlternativeSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.',
        readOnly: true,
      }),
    transcript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transcript text representing the words that the user spoke.' }),
    words: z
      .array(GoogleCloudVideointelligenceV1p3beta1WordInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Alternative hypotheses (a.k.a. n-best list).', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1SpeechRecognitionAlternative')

const GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionSchema = z
  .object({
    alternatives: z
      .array(GoogleCloudVideointelligenceV1p3beta1SpeechRecognitionAlternativeSchema)
      .exactOptional()
      .openapi({
        description:
          'May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A speech recognition result corresponding to a portion of the audio.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1SpeechTranscription')

const GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudVideointelligenceV1p3beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'Normalized vertices of the bounding polygon.' }),
  })
  .openapi({
    description:
      "Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.",
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly')

const GoogleCloudVideointelligenceV1p3beta1TextFrameSchema = z
  .object({
    rotatedBoundingBox:
      GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPolySchema.exactOptional().openapi({
        description: 'Bounding polygon of the detected text for this frame.',
      }),
    timeOffset: z.string().exactOptional().openapi({ description: 'Timestamp of this frame.' }),
  })
  .openapi({
    description:
      'Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1TextFrame')

const GoogleCloudVideointelligenceV1p3beta1TextSegmentSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.',
      }),
    frames: z
      .array(GoogleCloudVideointelligenceV1p3beta1TextFrameSchema)
      .exactOptional()
      .openapi({
        description: 'Information related to the frames where OCR detected text appears.',
      }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment where a text snippet was detected.',
    }),
  })
  .openapi({
    description: 'Video segment level annotation results for text detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1TextSegment')

const GoogleCloudVideointelligenceV1p3beta1TextAnnotationSchema = z
  .object({
    segments: z
      .array(GoogleCloudVideointelligenceV1p3beta1TextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'All video segments where OCR detected text appears.' }),
    text: z.string().exactOptional().openapi({ description: 'The detected text.' }),
    version: z.string().exactOptional().openapi({ description: 'Feature version.' }),
  })
  .openapi({
    description:
      'Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1TextAnnotation')

const GoogleCloudVideointelligenceV1p3beta1VideoAnnotationResultsSchema = z
  .object({
    celebrityRecognitionAnnotations:
      GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotationSchema.exactOptional().openapi(
        { description: 'Celebrity recognition annotations.' },
      ),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.',
    }),
    explicitAnnotation:
      GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation.',
      }),
    faceAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use `face_detection_annotations` instead.' }),
    faceDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1FaceDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Face detection annotations.' }),
    frameLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Label annotations on frame level. There is exactly one element for each unique label.',
      }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video file location in [Cloud Storage](https://cloud.google.com/storage/).',
      }),
    logoRecognitionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Annotations for list of logos detected, tracked and recognized in video.',
      }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations for list of objects detected and tracked in video.' }),
    personDetectionAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1PersonDetectionAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Person detection annotations.' }),
    segment: GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema.exactOptional().openapi({
      description: 'Video segment on which the annotation is run.',
    }),
    segmentLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.',
      }),
    segmentPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({ description: 'Shot annotations. Each shot is represented as a video segment.' }),
    shotLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Topical label annotations on shot level. There is exactly one element for each unique label.',
      }),
    shotPresenceLabelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.',
      }),
    speechTranscriptions: z
      .array(GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Speech transcription.' }),
    textAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1TextAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.',
      }),
  })
  .openapi({ description: 'Annotation results for a single video.', required: [] })
  .openapi('GoogleCloudVideointelligenceV1p3beta1VideoAnnotationResults')

const GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponseSchema = z
  .object({
    annotationResults: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoAnnotationResultsSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation results for all videos specified in `AnnotateVideoRequest`.',
      }),
  })
  .openapi({
    description:
      'Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse')

const GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResultsSchema = z
  .object({
    explicitAnnotation:
      GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotationSchema.exactOptional().openapi({
        description: 'Explicit content annotation results.',
      }),
    frameTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the processed frame in microseconds.' }),
    labelAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1LabelAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Label annotation results.' }),
    objectAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Object tracking results.' }),
    shotAnnotations: z
      .array(GoogleCloudVideointelligenceV1p3beta1VideoSegmentSchema)
      .exactOptional()
      .openapi({
        description: 'Shot annotation results. Each shot is represented as a video segment.',
      }),
  })
  .openapi({
    description:
      'Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults')

const GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponseSchema = z
  .object({
    annotationResults:
      GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResultsSchema.exactOptional().openapi(
        { description: 'Streaming annotation results.' },
      ),
    annotationResultsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'.",
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If set, returns a google.rpc.Status message that specifies the error for the operation.',
    }),
  })
  .openapi({
    description:
      '`StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client.',
    required: [],
  })
  .openapi('GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
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
  .openapi('GoogleLongrunningOperation')

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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1p3beta1VideosAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p3beta1/videos:annotate',
  tags: ['videos'],
  description:
    'Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).',
  operationId: 'videointelligence.videos.annotate',
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
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
