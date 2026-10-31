import { createRoute, z } from '@hono/zod-openapi'

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

const GoogleCloudDatalabelingV1alpha1CreateInstructionMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when create instruction request was created.' }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of a CreateInstruction operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata')

const GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when export dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be exported. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ExportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelStatsSchema = z
  .object({
    exampleCount: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.",
      }),
  })
  .openapi({ description: 'Statistics about annotation specs.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelStats')

const GoogleCloudDatalabelingV1alpha1GcsDestinationSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The output uri of destination file.' }),
  })
  .openapi({
    description: 'Export destination of the data.Only gcs path is allowed in output_uri.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1GcsDestination')

const GoogleCloudDatalabelingV1alpha1GcsFolderDestinationSchema = z
  .object({
    outputFolderUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Storage directory to export data to.' }),
  })
  .openapi({ description: 'Export folder destination of the data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1GcsFolderDestination')

const GoogleCloudDatalabelingV1alpha1OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDatalabelingV1alpha1GcsDestinationSchema.exactOptional().openapi({
      description:
        'Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.',
    }),
    gcsFolderDestination:
      GoogleCloudDatalabelingV1alpha1GcsFolderDestinationSchema.exactOptional().openapi({
        description:
          'Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.',
      }),
  })
  .openapi({ description: 'The configuration of output data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1OutputConfig')

const GoogleCloudDatalabelingV1alpha1ExportDataOperationResponseSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of dataset. "projects/*/datasets/*"' }),
    exportCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples exported successfully.' }),
    labelStats: GoogleCloudDatalabelingV1alpha1LabelStatsSchema.exactOptional().openapi({
      description: 'Output only. Statistic infos of labels in the exported dataset.',
    }),
    outputConfig: GoogleCloudDatalabelingV1alpha1OutputConfigSchema.exactOptional().openapi({
      description: 'Output only. output_config in the ExportData request.',
    }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to export' }),
  })
  .openapi({ description: 'Response used for ExportDataset longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse')

const GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema = z
  .object({
    annotatedDatasetDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.',
      }),
    annotatedDatasetDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .',
      }),
    contributorEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/',
      }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Instruction resource name.' }),
    labelGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\\\d_-]{0,128}`.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.',
      }),
    questionDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.',
      }),
    replicaCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.',
      }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({
    description: 'Configuration for how human labeling task should be done.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig')

const GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when import dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of imported dataset. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ImportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata')

const GoogleCloudDatalabelingV1alpha1ImportDataOperationResponseSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of imported dataset.' }),
    importCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples imported successfully.' }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to import' }),
  })
  .openapi({ description: 'Response used for ImportData longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse')

const GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({ description: 'Details of a LabelImageBoundingBox operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({ description: 'Details of LabelImageBoundingPoly operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({ description: 'Metadata of a LabelImageClassification operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelImageOrientedBoundingBox operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({ description: 'Details of LabelImagePolyline operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config.' },
    ),
  })
  .openapi({ description: 'Details of a LabelImageSegmentation operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelTextClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelTextEntityExtraction operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelVideoClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({ description: 'Details of a LabelVideoEvent operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectDetection operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigSchema.exactOptional().openapi(
      { description: 'Basic human annotation config used in labeling request.' },
    ),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectTracking operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata')

const GoogleCloudDatalabelingV1alpha1LabelOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when labeling request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be labeled. "projects/*/datasets/*"',
      }),
    imageBoundingBoxDetails:
      GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding box operation.' },
      ),
    imageBoundingPolyDetails:
      GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding poly operation.' },
      ),
    imageClassificationDetails:
      GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image classification operation.' },
      ),
    imageOrientedBoundingBoxDetails:
      GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image oriented bounding box operation.' },
      ),
    imagePolylineDetails:
      GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image polyline operation.' },
      ),
    imageSegmentationDetails:
      GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image segmentation operation.' },
      ),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Progress of label operation. Range: [0, 100].' }),
    textClassificationDetails:
      GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text classification operation.' },
      ),
    textEntityExtractionDetails:
      GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text entity extraction operation.' },
      ),
    videoClassificationDetails:
      GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video classification operation.' },
      ),
    videoEventDetails:
      GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video event operation.' },
      ),
    videoObjectDetectionDetails:
      GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object detection operation.' },
      ),
    videoObjectTrackingDetails:
      GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object tracking operation.' },
      ),
  })
  .openapi({
    description: 'Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1alpha1LabelOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelStatsSchema = z
  .object({
    exampleCount: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.",
      }),
  })
  .openapi({ description: 'Statistics about annotation specs.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelStats')

const GoogleCloudDatalabelingV1beta1BoundingPolyConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    instructionMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Instruction message showed on contributors UI.' }),
  })
  .openapi({
    description: 'Config for image bounding poly (and bounding box) human labeling task.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1BoundingPolyConfig')

const GoogleCloudDatalabelingV1beta1EventConfigSchema = z
  .object({
    annotationSpecSets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time.',
      }),
    clipLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.',
      }),
    overlapLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.',
      }),
  })
  .openapi({ description: 'Config for video event human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1EventConfig')

const GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema = z
  .object({
    annotatedDatasetDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.',
      }),
    annotatedDatasetDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .',
      }),
    contributorEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/',
      }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Instruction resource name.' }),
    labelGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\\\d_-]{0,128}`.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.',
      }),
    questionDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.',
      }),
    replicaCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.',
      }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({
    description: 'Configuration for how human labeling task should be done.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1HumanAnnotationConfig')

const GoogleCloudDatalabelingV1beta1ImageClassificationConfigSchema = z
  .object({
    allowMultiLabel: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image.',
      }),
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    answerAggregationType: z
      .enum([
        'STRING_AGGREGATION_TYPE_UNSPECIFIED',
        'MAJORITY_VOTE',
        'UNANIMOUS_VOTE',
        'NO_AGGREGATION',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. The type of how to aggregate answers.' }),
  })
  .openapi({ description: 'Config for image classification human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImageClassificationConfig')

const GoogleCloudDatalabelingV1beta1ObjectDetectionConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    extractionFrameRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Required. Number of frames per second to be extracted from the video.',
      }),
  })
  .openapi({
    description:
      'Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ObjectDetectionConfig')

const GoogleCloudDatalabelingV1beta1ObjectTrackingConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    clipLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.',
      }),
    overlapLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.',
      }),
  })
  .openapi({ description: 'Config for video object tracking human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ObjectTrackingConfig')

const GoogleCloudDatalabelingV1beta1PolylineConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    instructionMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Instruction message showed on contributors UI.' }),
  })
  .openapi({ description: 'Config for image polyline human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1PolylineConfig')

const GoogleCloudDatalabelingV1beta1SegmentationConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}',
      }),
    instructionMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instruction message showed on labelers UI.' }),
  })
  .openapi({ description: 'Config for image segmentation', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1SegmentationConfig')

const GoogleCloudDatalabelingV1beta1SentimentConfigSchema = z
  .object({
    enableLabelSentimentSelection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false.',
      }),
  })
  .openapi({ description: 'Config for setting up sentiments.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1SentimentConfig')

const GoogleCloudDatalabelingV1beta1TextClassificationConfigSchema = z
  .object({
    allowMultiLabel: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment.',
      }),
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
    sentimentConfig: GoogleCloudDatalabelingV1beta1SentimentConfigSchema.exactOptional().openapi({
      description:
        'Optional. Configs for sentiment selection. We deprecate sentiment analysis in data labeling side as it is incompatible with uCAIP.',
    }),
  })
  .openapi({ description: 'Config for text classification human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextClassificationConfig')

const GoogleCloudDatalabelingV1beta1TextEntityExtractionConfigSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
  })
  .openapi({ description: 'Config for text entity extraction human labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig')

const GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfigSchema = z
  .object({
    allowMultiLabel: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set.',
      }),
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Annotation spec set resource name.' }),
  })
  .openapi({
    description: 'Annotation spec set with the setting of allowing multi labels or not.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig')

const GoogleCloudDatalabelingV1beta1VideoClassificationConfigSchema = z
  .object({
    annotationSpecSetConfigs: z
      .array(GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group.',
      }),
    applyShotDetection: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Option to apply shot detection on the video.' }),
  })
  .openapi({
    description:
      'Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1VideoClassificationConfig')

const GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadataSchema = z
  .object({
    boundingPolyConfig:
      GoogleCloudDatalabelingV1beta1BoundingPolyConfigSchema.exactOptional().openapi({
        description: 'Configuration for image bounding box and bounding poly task.',
      }),
    eventConfig: GoogleCloudDatalabelingV1beta1EventConfigSchema.exactOptional().openapi({
      description: 'Configuration for video event labeling task.',
    }),
    humanAnnotationConfig:
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
        description:
          'HumanAnnotationConfig used when requesting the human labeling task for this AnnotatedDataset.',
      }),
    imageClassificationConfig:
      GoogleCloudDatalabelingV1beta1ImageClassificationConfigSchema.exactOptional().openapi({
        description: 'Configuration for image classification task.',
      }),
    objectDetectionConfig:
      GoogleCloudDatalabelingV1beta1ObjectDetectionConfigSchema.exactOptional().openapi({
        description: 'Configuration for video object detection task.',
      }),
    objectTrackingConfig:
      GoogleCloudDatalabelingV1beta1ObjectTrackingConfigSchema.exactOptional().openapi({
        description: 'Configuration for video object tracking task.',
      }),
    polylineConfig: GoogleCloudDatalabelingV1beta1PolylineConfigSchema.exactOptional().openapi({
      description: 'Configuration for image polyline task.',
    }),
    segmentationConfig:
      GoogleCloudDatalabelingV1beta1SegmentationConfigSchema.exactOptional().openapi({
        description: 'Configuration for image segmentation task.',
      }),
    textClassificationConfig:
      GoogleCloudDatalabelingV1beta1TextClassificationConfigSchema.exactOptional().openapi({
        description: 'Configuration for text classification task.',
      }),
    textEntityExtractionConfig:
      GoogleCloudDatalabelingV1beta1TextEntityExtractionConfigSchema.exactOptional().openapi({
        description: 'Configuration for text entity extraction task.',
      }),
    videoClassificationConfig:
      GoogleCloudDatalabelingV1beta1VideoClassificationConfigSchema.exactOptional().openapi({
        description: 'Configuration for video classification task.',
      }),
  })
  .openapi({ description: 'Metadata on AnnotatedDataset.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata')

const GoogleCloudDatalabelingV1beta1AnnotatedDatasetSchema = z
  .object({
    annotationSource: z
      .enum(['ANNOTATION_SOURCE_UNSPECIFIED', 'OPERATOR'])
      .exactOptional()
      .openapi({ description: 'Output only. Source of the annotation.' }),
    annotationType: z
      .enum([
        'ANNOTATION_TYPE_UNSPECIFIED',
        'IMAGE_CLASSIFICATION_ANNOTATION',
        'IMAGE_BOUNDING_BOX_ANNOTATION',
        'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION',
        'IMAGE_BOUNDING_POLY_ANNOTATION',
        'IMAGE_POLYLINE_ANNOTATION',
        'IMAGE_SEGMENTATION_ANNOTATION',
        'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION',
        'VIDEO_OBJECT_TRACKING_ANNOTATION',
        'VIDEO_OBJECT_DETECTION_ANNOTATION',
        'VIDEO_EVENT_ANNOTATION',
        'TEXT_CLASSIFICATION_ANNOTATION',
        'TEXT_ENTITY_EXTRACTION_ANNOTATION',
        'GENERAL_CLASSIFICATION_ANNOTATION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Type of the annotation. It is specified when starting labeling task.',
      }),
    blockingResources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The names of any related resources that are blocking changes to the annotated dataset.',
      }),
    completedExampleCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of examples that have annotation in the annotated dataset.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the AnnotatedDataset was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.',
      }),
    exampleCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples in the annotated dataset.' }),
    labelStats: GoogleCloudDatalabelingV1beta1LabelStatsSchema.exactOptional().openapi({
      description: 'Output only. Per label statistics.',
    }),
    metadata: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadataSchema.exactOptional().openapi({
      description: 'Output only. Additional information about AnnotatedDataset.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}',
      }),
  })
  .openapi({
    description:
      'AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotatedDataset')

const GoogleCloudDatalabelingV1beta1OperatorMetadataSchema = z
  .object({
    comments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Comments from contributors.' }),
    labelVotes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of contributors that choose this label.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).',
      }),
    totalVotes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of contributors that answer this question.' }),
  })
  .openapi({
    description: 'General information useful for labels coming from contributors.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1OperatorMetadata')

const GoogleCloudDatalabelingV1beta1AnnotationMetadataSchema = z
  .object({
    operatorMetadata: GoogleCloudDatalabelingV1beta1OperatorMetadataSchema.exactOptional().openapi({
      description: 'Metadata related to human labeling.',
    }),
  })
  .openapi({ description: 'Additional information associated with the annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotationMetadata')

const GoogleCloudDatalabelingV1beta1AnnotationSpecSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display name of the AnnotationSpec. Maximum of 64 characters.',
      }),
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.',
      }),
  })
  .openapi({
    description:
      'Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotationSpec')

const GoogleCloudDatalabelingV1beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Vertex')

const GoogleCloudDatalabelingV1beta1BoundingPolySchema = z
  .object({
    vertices: z
      .array(GoogleCloudDatalabelingV1beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon in the image.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1BoundingPoly')

const GoogleCloudDatalabelingV1beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1NormalizedVertex')

const GoogleCloudDatalabelingV1beta1NormalizedBoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudDatalabelingV1beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
  })
  .openapi({ description: 'Normalized bounding polygon.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly')

const GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of object in this bounding polygon.',
    }),
    boundingPoly: GoogleCloudDatalabelingV1beta1BoundingPolySchema.exactOptional(),
    normalizedBoundingPoly:
      GoogleCloudDatalabelingV1beta1NormalizedBoundingPolySchema.exactOptional(),
  })
  .openapi({
    description:
      'Image bounding poly annotation. It represents a polygon including bounding box in the image.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation')

const GoogleCloudDatalabelingV1beta1ImageClassificationAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of image.',
    }),
  })
  .openapi({ description: 'Image classification annotation definition.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation')

const GoogleCloudDatalabelingV1beta1NormalizedPolylineSchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudDatalabelingV1beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The normalized polyline vertices.' }),
  })
  .openapi({ description: 'Normalized polyline.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1NormalizedPolyline')

const GoogleCloudDatalabelingV1beta1PolylineSchema = z
  .object({
    vertices: z
      .array(GoogleCloudDatalabelingV1beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The polyline vertices.' }),
  })
  .openapi({ description: 'A line with multiple line segments.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1Polyline')

const GoogleCloudDatalabelingV1beta1ImagePolylineAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of this polyline.',
    }),
    normalizedPolyline: GoogleCloudDatalabelingV1beta1NormalizedPolylineSchema.exactOptional(),
    polyline: GoogleCloudDatalabelingV1beta1PolylineSchema.exactOptional(),
  })
  .openapi({ description: 'A polyline for the image annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation')

const GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotationSchema = z
  .object({
    annotationColors: z
      .record(z.string(), GoogleCloudDatalabelingV1beta1AnnotationSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec.',
      }),
    imageBytes: z
      .string()
      .exactOptional()
      .openapi({ description: "A byte string of a full image's color map." }),
    mimeType: z.string().exactOptional().openapi({ description: 'Image format.' }),
  })
  .openapi({ description: 'Image segmentation annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation')

const GoogleCloudDatalabelingV1beta1TextClassificationAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of the text.',
    }),
  })
  .openapi({ description: 'Text classification annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextClassificationAnnotation')

const GoogleCloudDatalabelingV1beta1SequentialSegmentSchema = z
  .object({
    end: z.int32().exactOptional().openapi({ description: 'End position (exclusive).' }),
    start: z.int32().exactOptional().openapi({ description: 'Start position (inclusive).' }),
  })
  .openapi({
    description: 'Start and end position in a sequence (e.g. text segment).',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1SequentialSegment')

const GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of the text entities.',
    }),
    sequentialSegment:
      GoogleCloudDatalabelingV1beta1SequentialSegmentSchema.exactOptional().openapi({
        description: 'Position of the entity.',
      }),
  })
  .openapi({ description: 'Text entity extraction annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation')

const GoogleCloudDatalabelingV1beta1TimeSegmentSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End of the time segment (exclusive), represented as the duration since the example start.',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start of the time segment (inclusive), represented as the duration since the example start.',
      }),
  })
  .openapi({
    description: 'A time period inside of an example that has a time dimension (e.g. video).',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1TimeSegment')

const GoogleCloudDatalabelingV1beta1VideoClassificationAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of the segment specified by time_segment.',
    }),
    timeSegment: GoogleCloudDatalabelingV1beta1TimeSegmentSchema.exactOptional().openapi({
      description: 'The time segment of the video to which the annotation applies.',
    }),
  })
  .openapi({ description: 'Video classification annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation')

const GoogleCloudDatalabelingV1beta1VideoEventAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of the event in this annotation.',
    }),
    timeSegment: GoogleCloudDatalabelingV1beta1TimeSegmentSchema.exactOptional().openapi({
      description: 'The time segment of the video to which the annotation applies.',
    }),
  })
  .openapi({ description: 'Video event annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1VideoEventAnnotation')

const GoogleCloudDatalabelingV1beta1ObjectTrackingFrameSchema = z
  .object({
    boundingPoly: GoogleCloudDatalabelingV1beta1BoundingPolySchema.exactOptional(),
    normalizedBoundingPoly:
      GoogleCloudDatalabelingV1beta1NormalizedBoundingPolySchema.exactOptional(),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time offset of this frame relative to the beginning of the video.',
      }),
  })
  .openapi({
    description: 'Video frame level annotation for object detection and tracking.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ObjectTrackingFrame')

const GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotationSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'Label of the object tracked in this annotation.',
    }),
    objectTrackingFrames: z
      .array(GoogleCloudDatalabelingV1beta1ObjectTrackingFrameSchema)
      .exactOptional()
      .openapi({ description: 'The list of frames where this object track appears.' }),
    timeSegment: GoogleCloudDatalabelingV1beta1TimeSegmentSchema.exactOptional().openapi({
      description: 'The time segment of the video to which object tracking applies.',
    }),
  })
  .openapi({ description: 'Video object tracking annotation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation')

const GoogleCloudDatalabelingV1beta1AnnotationValueSchema = z
  .object({
    imageBoundingPolyAnnotation:
      GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotationSchema.exactOptional().openapi({
        description:
          'Annotation value for image bounding box, oriented bounding box and polygon cases.',
      }),
    imageClassificationAnnotation:
      GoogleCloudDatalabelingV1beta1ImageClassificationAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for image classification case.',
      }),
    imagePolylineAnnotation:
      GoogleCloudDatalabelingV1beta1ImagePolylineAnnotationSchema.exactOptional().openapi({
        description:
          'Annotation value for image polyline cases. Polyline here is different from BoundingPoly. It is formed by line segments connected to each other but not closed form(Bounding Poly). The line segments can cross each other.',
      }),
    imageSegmentationAnnotation:
      GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for image segmentation.',
      }),
    textClassificationAnnotation:
      GoogleCloudDatalabelingV1beta1TextClassificationAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for text classification case.',
      }),
    textEntityExtractionAnnotation:
      GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for text entity extraction case.',
      }),
    videoClassificationAnnotation:
      GoogleCloudDatalabelingV1beta1VideoClassificationAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for video classification case.',
      }),
    videoEventAnnotation:
      GoogleCloudDatalabelingV1beta1VideoEventAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for video event case.',
      }),
    videoObjectTrackingAnnotation:
      GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotationSchema.exactOptional().openapi({
        description: 'Annotation value for video object detection and tracking case.',
      }),
  })
  .openapi({ description: 'Annotation value for an example.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotationValue')

const GoogleCloudDatalabelingV1beta1AnnotationSchema = z
  .object({
    annotationMetadata:
      GoogleCloudDatalabelingV1beta1AnnotationMetadataSchema.exactOptional().openapi({
        description:
          'Output only. Annotation metadata, including information like votes for labels.',
      }),
    annotationSentiment: z
      .enum(['ANNOTATION_SENTIMENT_UNSPECIFIED', 'NEGATIVE', 'POSITIVE'])
      .exactOptional()
      .openapi({ description: 'Output only. Sentiment for this annotation.' }),
    annotationSource: z
      .enum(['ANNOTATION_SOURCE_UNSPECIFIED', 'OPERATOR'])
      .exactOptional()
      .openapi({ description: 'Output only. The source of the annotation.' }),
    annotationValue: GoogleCloudDatalabelingV1beta1AnnotationValueSchema.exactOptional().openapi({
      description:
        'Output only. This is the actual annotation value, e.g classification, bounding box values are stored here.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id}',
      }),
  })
  .openapi({
    description:
      'Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Annotation')

const GoogleCloudDatalabelingV1beta1AnnotationSpecSetSchema = z
  .object({
    annotationSpecs: z
      .array(GoogleCloudDatalabelingV1beta1AnnotationSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.',
      }),
    blockingResources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The names of any related resources that are blocking changes to the annotation spec set.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"',
      }),
  })
  .openapi({
    description:
      'An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1AnnotationSpecSet')

const GoogleCloudDatalabelingV1beta1AttemptSchema = z
  .object({
    attemptTime: z.string().exactOptional(),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'Details of errors that occurred.' }),
  })
  .openapi({ description: 'Records a failed evaluation job run.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1Attempt')

const GoogleCloudDatalabelingV1beta1BigQuerySourceSchema = z
  .object({
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema).',
      }),
  })
  .openapi({
    description:
      'The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1BigQuerySource')

const GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptionsSchema = z
  .object({
    iouThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.',
      }),
  })
  .openapi({ description: 'Options regarding evaluation between bounding boxes.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions')

const GoogleCloudDatalabelingV1beta1ClassificationMetadataSchema = z
  .object({
    isMultiLabel: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the classification task is multi-label or not.' }),
  })
  .openapi({ description: 'Metadata for classification annotations.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ClassificationMetadata')

const GoogleCloudDatalabelingV1beta1ConfusionMatrixEntrySchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'The annotation spec of a predicted label.',
    }),
    itemCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)",
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry')

const GoogleCloudDatalabelingV1beta1RowSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description: 'The annotation spec of the ground truth label for this row.',
    }),
    entries: z
      .array(GoogleCloudDatalabelingV1beta1ConfusionMatrixEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the confusion matrix entries. One entry for each possible predicted label.',
      }),
  })
  .openapi({
    description:
      'A row in the confusion matrix. Each entry in this row has the same ground truth label.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Row')

const GoogleCloudDatalabelingV1beta1ConfusionMatrixSchema = z
  .object({ row: z.array(GoogleCloudDatalabelingV1beta1RowSchema).exactOptional() })
  .openapi({
    description:
      'Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ConfusionMatrix')

const GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntrySchema = z
  .object({
    confidenceThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.",
      }),
    f1Score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Harmonic mean of recall and precision.' }),
    f1ScoreAt1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The harmonic mean of recall_at1 and precision_at1.' }),
    f1ScoreAt5: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The harmonic mean of recall_at5 and precision_at5.' }),
    precision: z.float32().exactOptional().openapi({ description: 'Precision value.' }),
    precisionAt1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Precision value for entries with label that has highest score.' }),
    precisionAt5: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Precision value for entries with label that has highest 5 scores.',
      }),
    recall: z.float32().exactOptional().openapi({ description: 'Recall value.' }),
    recallAt1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Recall value for entries with label that has highest score.' }),
    recallAt5: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Recall value for entries with label that has highest 5 scores.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry')

const GoogleCloudDatalabelingV1beta1PrCurveSchema = z
  .object({
    annotationSpec: GoogleCloudDatalabelingV1beta1AnnotationSpecSchema.exactOptional().openapi({
      description:
        'The annotation spec of the label for which the precision-recall curve calculated. If this field is empty, that means the precision-recall curve is an aggregate curve for all labels.',
    }),
    areaUnderCurve: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.',
      }),
    confidenceMetricsEntries: z
      .array(GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`.',
      }),
    meanAveragePrecision: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Mean average prcision of this curve.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1PrCurve')

const GoogleCloudDatalabelingV1beta1ClassificationMetricsSchema = z
  .object({
    confusionMatrix: GoogleCloudDatalabelingV1beta1ConfusionMatrixSchema.exactOptional().openapi({
      description: 'Confusion matrix of predicted labels vs. ground truth labels.',
    }),
    prCurve: GoogleCloudDatalabelingV1beta1PrCurveSchema.exactOptional().openapi({
      description:
        'Precision-recall curve based on ground truth labels, predicted labels, and scores for the predicted labels.',
    }),
  })
  .openapi({ description: 'Metrics calculated for a classification model.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ClassificationMetrics')

const GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequestSchema = z
  .object({
    annotationSpecSet:
      GoogleCloudDatalabelingV1beta1AnnotationSpecSetSchema.exactOptional().openapi({
        description:
          'Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name.',
      }),
  })
  .openapi({ description: 'Request message for CreateAnnotationSpecSet.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest')

const GoogleCloudDatalabelingV1beta1GcsSourceSchema = z
  .object({
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`).',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The format of the source file. Only "text/csv" is supported.',
      }),
  })
  .openapi({ description: 'Source of the Cloud Storage file to be imported.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1GcsSource')

const GoogleCloudDatalabelingV1beta1TextMetadataSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US.',
      }),
  })
  .openapi({ description: 'Metadata for the text.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextMetadata')

const GoogleCloudDatalabelingV1beta1InputConfigSchema = z
  .object({
    annotationType: z
      .enum([
        'ANNOTATION_TYPE_UNSPECIFIED',
        'IMAGE_CLASSIFICATION_ANNOTATION',
        'IMAGE_BOUNDING_BOX_ANNOTATION',
        'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION',
        'IMAGE_BOUNDING_POLY_ANNOTATION',
        'IMAGE_POLYLINE_ANNOTATION',
        'IMAGE_SEGMENTATION_ANNOTATION',
        'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION',
        'VIDEO_OBJECT_TRACKING_ANNOTATION',
        'VIDEO_OBJECT_DETECTION_ANNOTATION',
        'VIDEO_EVENT_ANNOTATION',
        'TEXT_CLASSIFICATION_ANNOTATION',
        'TEXT_ENTITY_EXTRACTION_ANNOTATION',
        'GENERAL_CLASSIFICATION_ANNOTATION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob.',
      }),
    bigquerySource: GoogleCloudDatalabelingV1beta1BigQuerySourceSchema.exactOptional().openapi({
      description:
        'Source located in BigQuery. You must specify this field if you are using this InputConfig in an EvaluationJob.',
    }),
    classificationMetadata:
      GoogleCloudDatalabelingV1beta1ClassificationMetadataSchema.exactOptional().openapi({
        description:
          'Optional. Metadata about annotations for the input. You must specify this field if you are using this InputConfig in an EvaluationJob for a model version that performs classification.',
      }),
    dataType: z
      .enum(['DATA_TYPE_UNSPECIFIED', 'IMAGE', 'VIDEO', 'TEXT', 'GENERAL_DATA'])
      .exactOptional()
      .openapi({
        description: 'Required. Data type must be specifed when user tries to import data.',
      }),
    gcsSource: GoogleCloudDatalabelingV1beta1GcsSourceSchema.exactOptional().openapi({
      description: 'Source located in Cloud Storage.',
    }),
    textMetadata: GoogleCloudDatalabelingV1beta1TextMetadataSchema.exactOptional().openapi({
      description: 'Required for text import, as language code must be specified.',
    }),
  })
  .openapi({
    description: 'The configuration of input data, including data type, location, etc.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1InputConfig')

const GoogleCloudDatalabelingV1beta1DatasetSchema = z
  .object({
    blockingResources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The names of any related resources that are blocking changes to the dataset.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the dataset is created.' }),
    dataItemCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The number of data items in the dataset.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display name of the dataset. Maximum of 64 characters.',
      }),
    inputConfigs: z
      .array(GoogleCloudDatalabelingV1beta1InputConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.',
      }),
    lastMigrateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id}',
      }),
  })
  .openapi({
    description:
      'Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Dataset')

const GoogleCloudDatalabelingV1beta1CreateDatasetRequestSchema = z
  .object({
    dataset: GoogleCloudDatalabelingV1beta1DatasetSchema.exactOptional().openapi({
      description: 'Required. The dataset to be created.',
    }),
  })
  .openapi({ description: 'Request message for CreateDataset.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1CreateDatasetRequest')

const GoogleCloudDatalabelingV1beta1EvaluationConfigSchema = z
  .object({
    boundingBoxEvaluationOptions:
      GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptionsSchema.exactOptional().openapi({
        description:
          'Only specify this field if the related model performs image object detection (`IMAGE_BOUNDING_BOX_ANNOTATION`). Describes how to evaluate bounding boxes.',
      }),
  })
  .openapi({
    description:
      'Configuration details used for calculating evaluation metrics and creating an Evaluation.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1EvaluationConfig')

const GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfigSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. An email address to send alerts to.' }),
    minAcceptableMeanAveragePrecision: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.",
      }),
  })
  .openapi({
    description:
      'Provides details for how an evaluation job sends email alerts based on the results of a run.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig')

const GoogleCloudDatalabelingV1beta1EvaluationJobConfigSchema = z
  .object({
    bigqueryImportKeys: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).',
      }),
    boundingPolyConfig:
      GoogleCloudDatalabelingV1beta1BoundingPolyConfigSchema.exactOptional().openapi({
        description:
          'Specify this field if your model version performs image object detection (bounding box detection). `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet.',
      }),
    evaluationConfig: GoogleCloudDatalabelingV1beta1EvaluationConfigSchema.exactOptional().openapi({
      description:
        'Required. Details for calculating evaluation metrics and creating Evaulations. If your model version performs image object detection, you must specify the `boundingBoxEvaluationOptions` field within this configuration. Otherwise, provide an empty object for this configuration.',
    }),
    evaluationJobAlertConfig:
      GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfigSchema.exactOptional().openapi({
        description:
          'Optional. Configuration details for evaluation job alerts. Specify this field if you want to receive email alerts if the evaluation job finds that your predictions have low mean average precision during a run.',
      }),
    exampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.',
      }),
    exampleSamplePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.',
      }),
    humanAnnotationConfig:
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
        description:
          'Optional. Details for human annotation of your data. If you set labelMissingGroundTruth to `true` for this evaluation job, then you must specify this field. If you plan to provide your own ground truth labels, then omit this field. Note that you must create an Instruction resource before you can specify this field. Provide the name of the instruction resource in the `instruction` field within this configuration.',
      }),
    imageClassificationConfig:
      GoogleCloudDatalabelingV1beta1ImageClassificationConfigSchema.exactOptional().openapi({
        description:
          'Specify this field if your model version performs image classification or general classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.',
      }),
    inputConfig: GoogleCloudDatalabelingV1beta1InputConfigSchema.exactOptional().openapi({
      description:
        'Rquired. Details for the sampled prediction input. Within this configuration, there are requirements for several fields: * `dataType` must be one of `IMAGE`, `TEXT`, or `GENERAL_DATA`. * `annotationType` must be one of `IMAGE_CLASSIFICATION_ANNOTATION`, `TEXT_CLASSIFICATION_ANNOTATION`, `GENERAL_CLASSIFICATION_ANNOTATION`, or `IMAGE_BOUNDING_BOX_ANNOTATION` (image object detection). * If your machine learning model performs classification, you must specify `classificationMetadata.isMultiLabel`. * You must specify `bigquerySource` (not `gcsSource`).',
    }),
    textClassificationConfig:
      GoogleCloudDatalabelingV1beta1TextClassificationConfigSchema.exactOptional().openapi({
        description:
          'Specify this field if your model version performs text classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.',
      }),
  })
  .openapi({
    description:
      'Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1EvaluationJobConfig')

const GoogleCloudDatalabelingV1beta1EvaluationJobSchema = z
  .object({
    annotationSpecSet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"',
      }),
    attempts: z
      .array(GoogleCloudDatalabelingV1beta1AttemptSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp of when this evaluation job was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Description of the job. The description can be up to 25,000 characters long.',
      }),
    evaluationJobConfig:
      GoogleCloudDatalabelingV1beta1EvaluationJobConfigSchema.exactOptional().openapi({
        description: 'Required. Configuration details for the evaluation job.',
      }),
    labelMissingGroundTruth: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.",
      }),
    modelVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"',
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SCHEDULED', 'RUNNING', 'PAUSED', 'STOPPED'])
      .exactOptional()
      .openapi({ description: 'Output only. Describes the current state of the job.' }),
  })
  .openapi({
    description:
      'Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1EvaluationJob')

const GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequestSchema = z
  .object({
    job: GoogleCloudDatalabelingV1beta1EvaluationJobSchema.exactOptional().openapi({
      description: 'Required. The evaluation job to create.',
    }),
  })
  .openapi({ description: 'Request message for CreateEvaluationJob.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest')

const GoogleCloudDatalabelingV1beta1CreateInstructionMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when create instruction request was created.' }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of a CreateInstruction operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1CreateInstructionMetadata')

const GoogleCloudDatalabelingV1beta1CsvInstructionSchema = z
  .object({
    gcsFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'CSV file for the instruction. Only gcs path is allowed.' }),
  })
  .openapi({
    description:
      'Deprecated: this instruction format is not supported any more. Instruction from a CSV file.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1CsvInstruction')

const GoogleCloudDatalabelingV1beta1PdfInstructionSchema = z
  .object({
    gcsFileUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'PDF file for the instruction. Only gcs path is allowed.' }),
  })
  .openapi({ description: 'Instruction from a PDF file.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1PdfInstruction')

const GoogleCloudDatalabelingV1beta1InstructionSchema = z
  .object({
    blockingResources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The names of any related resources that are blocking changes to the instruction.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation time of instruction.' }),
    csvInstruction: GoogleCloudDatalabelingV1beta1CsvInstructionSchema.exactOptional().openapi({
      description:
        'Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data.',
    }),
    dataType: z
      .enum(['DATA_TYPE_UNSPECIFIED', 'IMAGE', 'VIDEO', 'TEXT', 'GENERAL_DATA'])
      .exactOptional()
      .openapi({ description: 'Required. The data type of this instruction.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description of the instruction. The description can be up to 10000 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display name of the instruction. Maximum of 64 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}',
      }),
    pdfInstruction: GoogleCloudDatalabelingV1beta1PdfInstructionSchema.exactOptional().openapi({
      description: 'Instruction from a PDF document. The PDF should be in a Cloud Storage bucket.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time of instruction.' }),
  })
  .openapi({
    description:
      'Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Instruction')

const GoogleCloudDatalabelingV1beta1CreateInstructionRequestSchema = z
  .object({
    instruction: GoogleCloudDatalabelingV1beta1InstructionSchema.exactOptional().openapi({
      description: 'Required. Instruction of how to perform the labeling task.',
    }),
  })
  .openapi({ description: 'Request message for CreateInstruction.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1CreateInstructionRequest')

const GoogleCloudDatalabelingV1beta1ImagePayloadSchema = z
  .object({
    imageThumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'A byte string of a thumbnail image.' }),
    imageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Image uri from the user bucket.' }),
    mimeType: z.string().exactOptional().openapi({ description: 'Image format.' }),
    signedUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Signed uri of the image file in the service bucket.' }),
  })
  .openapi({ description: 'Container of information about an image.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImagePayload')

const GoogleCloudDatalabelingV1beta1TextPayloadSchema = z
  .object({ textContent: z.string().exactOptional().openapi({ description: 'Text content.' }) })
  .openapi({ description: 'Container of information about a piece of text.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1TextPayload')

const GoogleCloudDatalabelingV1beta1VideoThumbnailSchema = z
  .object({
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'A byte string of the video frame.' }),
    timeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from.',
      }),
  })
  .openapi({ description: 'Container of information of a video thumbnail.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1VideoThumbnail')

const GoogleCloudDatalabelingV1beta1VideoPayloadSchema = z
  .object({
    frameRate: z.float32().exactOptional().openapi({ description: 'FPS of the video.' }),
    mimeType: z.string().exactOptional().openapi({ description: 'Video format.' }),
    signedUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Signed uri of the video file in the service bucket.' }),
    videoThumbnails: z
      .array(GoogleCloudDatalabelingV1beta1VideoThumbnailSchema)
      .exactOptional()
      .openapi({ description: 'The list of video thumbnails.' }),
    videoUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Video uri from the user bucket.' }),
  })
  .openapi({ description: 'Container of information of a video.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1VideoPayload')

const GoogleCloudDatalabelingV1beta1DataItemSchema = z
  .object({
    imagePayload: GoogleCloudDatalabelingV1beta1ImagePayloadSchema.exactOptional().openapi({
      description: 'The image payload, a container of the image bytes/uri.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}',
      }),
    textPayload: GoogleCloudDatalabelingV1beta1TextPayloadSchema.exactOptional().openapi({
      description: 'The text payload, a container of text content.',
    }),
    videoPayload: GoogleCloudDatalabelingV1beta1VideoPayloadSchema.exactOptional().openapi({
      description: 'The video payload, a container of the video uri.',
    }),
  })
  .openapi({
    description: 'DataItem is a piece of data, without annotation. For example, an image.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1DataItem')

const GoogleCloudDatalabelingV1beta1ObjectDetectionMetricsSchema = z
  .object({
    prCurve: GoogleCloudDatalabelingV1beta1PrCurveSchema.exactOptional().openapi({
      description: 'Precision-recall curve.',
    }),
  })
  .openapi({
    description: 'Metrics calculated for an image object detection (bounding box) model.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics')

const GoogleCloudDatalabelingV1beta1EvaluationMetricsSchema = z
  .object({
    classificationMetrics:
      GoogleCloudDatalabelingV1beta1ClassificationMetricsSchema.exactOptional(),
    objectDetectionMetrics:
      GoogleCloudDatalabelingV1beta1ObjectDetectionMetricsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1EvaluationMetrics')

const GoogleCloudDatalabelingV1beta1EvaluationSchema = z
  .object({
    annotationType: z
      .enum([
        'ANNOTATION_TYPE_UNSPECIFIED',
        'IMAGE_CLASSIFICATION_ANNOTATION',
        'IMAGE_BOUNDING_BOX_ANNOTATION',
        'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION',
        'IMAGE_BOUNDING_POLY_ANNOTATION',
        'IMAGE_POLYLINE_ANNOTATION',
        'IMAGE_SEGMENTATION_ANNOTATION',
        'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION',
        'VIDEO_OBJECT_TRACKING_ANNOTATION',
        'VIDEO_OBJECT_DETECTION_ANNOTATION',
        'VIDEO_EVENT_ANNOTATION',
        'TEXT_CLASSIFICATION_ANNOTATION',
        'TEXT_ENTITY_EXTRACTION_ANNOTATION',
        'GENERAL_CLASSIFICATION_ANNOTATION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation.',
      }),
    config: GoogleCloudDatalabelingV1beta1EvaluationConfigSchema.exactOptional().openapi({
      description: 'Output only. Options used in the evaluation job that created this evaluation.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp for when this evaluation was created.' }),
    evaluatedItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes.',
      }),
    evaluationJobRunTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp for when the evaluation job that created this evaluation ran.',
      }),
    evaluationMetrics:
      GoogleCloudDatalabelingV1beta1EvaluationMetricsSchema.exactOptional().openapi({
        description: 'Output only. Metrics comparing predictions to ground truth labels.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}\'',
      }),
  })
  .openapi({
    description:
      "Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.",
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Evaluation')

const GoogleCloudDatalabelingV1beta1ExampleSchema = z
  .object({
    annotations: z
      .array(GoogleCloudDatalabelingV1beta1AnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations.',
      }),
    imagePayload: GoogleCloudDatalabelingV1beta1ImagePayloadSchema.exactOptional().openapi({
      description: 'The image payload, a container of the image bytes/uri.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}',
      }),
    textPayload: GoogleCloudDatalabelingV1beta1TextPayloadSchema.exactOptional().openapi({
      description: 'The text payload, a container of the text content.',
    }),
    videoPayload: GoogleCloudDatalabelingV1beta1VideoPayloadSchema.exactOptional().openapi({
      description: 'The video payload, a container of the video uri.',
    }),
  })
  .openapi({
    description:
      'An Example is a piece of data and its annotation. For example, an image with label "house".',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1Example')

const GoogleCloudDatalabelingV1beta1ExampleComparisonSchema = z
  .object({
    groundTruthExample: GoogleCloudDatalabelingV1beta1ExampleSchema.exactOptional().openapi({
      description: 'The ground truth output for the input.',
    }),
    modelCreatedExamples: z
      .array(GoogleCloudDatalabelingV1beta1ExampleSchema)
      .exactOptional()
      .openapi({ description: 'Predictions by the model for the input.' }),
  })
  .openapi({
    description:
      'Example comparisons comparing ground truth output and predictions for a specific input.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1ExampleComparison')

const GoogleCloudDatalabelingV1beta1ExportDataOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when export dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be exported. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ExportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata')

const GoogleCloudDatalabelingV1beta1GcsDestinationSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The output uri of destination file.' }),
  })
  .openapi({
    description: 'Export destination of the data.Only gcs path is allowed in output_uri.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1GcsDestination')

const GoogleCloudDatalabelingV1beta1GcsFolderDestinationSchema = z
  .object({
    outputFolderUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Storage directory to export data to.' }),
  })
  .openapi({ description: 'Export folder destination of the data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1GcsFolderDestination')

const GoogleCloudDatalabelingV1beta1OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDatalabelingV1beta1GcsDestinationSchema.exactOptional().openapi({
      description:
        'Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.',
    }),
    gcsFolderDestination:
      GoogleCloudDatalabelingV1beta1GcsFolderDestinationSchema.exactOptional().openapi({
        description:
          'Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.',
      }),
  })
  .openapi({ description: 'The configuration of output data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1OutputConfig')

const GoogleCloudDatalabelingV1beta1ExportDataOperationResponseSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of dataset. "projects/*/datasets/*"' }),
    exportCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples exported successfully.' }),
    labelStats: GoogleCloudDatalabelingV1beta1LabelStatsSchema.exactOptional().openapi({
      description: 'Output only. Statistic infos of labels in the exported dataset.',
    }),
    outputConfig: GoogleCloudDatalabelingV1beta1OutputConfigSchema.exactOptional().openapi({
      description: 'Output only. output_config in the ExportData request.',
    }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to export' }),
  })
  .openapi({ description: 'Response used for ExportDataset longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ExportDataOperationResponse')

const GoogleCloudDatalabelingV1beta1ExportDataRequestSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}",
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Filter is not supported at this moment.' }),
    outputConfig: GoogleCloudDatalabelingV1beta1OutputConfigSchema.exactOptional().openapi({
      description: 'Required. Specify the output destination.',
    }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the export task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({ description: 'Request message for ExportData API.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ExportDataRequest')

const GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata describing the feedback from the operator.' })
  .openapi('GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata')

const GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata describing the feedback from the labeling task requester.' })
  .openapi('GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata')

const GoogleCloudDatalabelingV1beta1FeedbackMessageSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'String content of the feedback. Maximum of 10000 characters.' }),
    createTime: z.string().exactOptional().openapi({ description: 'Create time.' }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The image storing this feedback if the feedback is an image representing operator's comments.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'",
      }),
    operatorFeedbackMetadata:
      GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadataSchema.exactOptional(),
    requesterFeedbackMetadata:
      GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'A feedback message inside a feedback thread.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1FeedbackMessage')

const GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'When the thread is created' }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the thread is last updated.' }),
    status: z.enum(['FEEDBACK_THREAD_STATUS_UNSPECIFIED', 'NEW', 'REPLIED']).exactOptional(),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({ description: 'An image thumbnail of this thread.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata')

const GoogleCloudDatalabelingV1beta1FeedbackThreadSchema = z
  .object({
    feedbackThreadMetadata:
      GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataSchema.exactOptional().openapi({
        description: 'Metadata regarding the feedback thread.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'",
      }),
  })
  .openapi({
    description: 'A feedback thread of a certain labeling task on a certain annotated dataset.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1FeedbackThread')

const GoogleCloudDatalabelingV1beta1ImportDataOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when import dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of imported dataset. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ImportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata')

const GoogleCloudDatalabelingV1beta1ImportDataOperationResponseSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of imported dataset.' }),
    importCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples imported successfully.' }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to import' }),
  })
  .openapi({ description: 'Response used for ImportData longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImportDataOperationResponse')

const GoogleCloudDatalabelingV1beta1ImportDataRequestSchema = z
  .object({
    inputConfig: GoogleCloudDatalabelingV1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Required. Specify the input source of the data.',
    }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the import task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({ description: 'Request message for ImportData API.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ImportDataRequest')

const GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({ description: 'Details of a LabelImageBoundingBox operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({ description: 'Details of LabelImageBoundingPoly operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({ description: 'Metadata of a LabelImageClassification operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config.',
    }),
  })
  .openapi({
    description: 'Details of a LabelImageOrientedBoundingBox operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({ description: 'Details of LabelImagePolyline operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelImageRequestSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Required. Basic human annotation config.',
    }),
    boundingPolyConfig:
      GoogleCloudDatalabelingV1beta1BoundingPolyConfigSchema.exactOptional().openapi({
        description:
          'Configuration for bounding box and bounding poly task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.',
      }),
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'CLASSIFICATION',
        'BOUNDING_BOX',
        'ORIENTED_BOUNDING_BOX',
        'BOUNDING_POLY',
        'POLYLINE',
        'SEGMENTATION',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of image labeling task.' }),
    imageClassificationConfig:
      GoogleCloudDatalabelingV1beta1ImageClassificationConfigSchema.exactOptional().openapi({
        description:
          'Configuration for image classification task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.',
      }),
    polylineConfig: GoogleCloudDatalabelingV1beta1PolylineConfigSchema.exactOptional().openapi({
      description:
        'Configuration for polyline task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.',
    }),
    segmentationConfig:
      GoogleCloudDatalabelingV1beta1SegmentationConfigSchema.exactOptional().openapi({
        description:
          'Configuration for segmentation task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.',
      }),
  })
  .openapi({ description: 'Request message for starting an image labeling task.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageRequest')

const GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config.',
    }),
  })
  .openapi({ description: 'Details of a LabelImageSegmentation operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({
    description: 'Details of a LabelTextClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({
    description: 'Details of a LabelTextEntityExtraction operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({
    description: 'Details of a LabelVideoClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({ description: 'Details of a LabelVideoEvent operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectDetection operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadataSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Basic human annotation config used in labeling request.',
    }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectTracking operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when labeling request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be labeled. "projects/*/datasets/*"',
      }),
    imageBoundingBoxDetails:
      GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding box operation.' },
      ),
    imageBoundingPolyDetails:
      GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding poly operation.' },
      ),
    imageClassificationDetails:
      GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image classification operation.' },
      ),
    imageOrientedBoundingBoxDetails:
      GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image oriented bounding box operation.' },
      ),
    imagePolylineDetails:
      GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image polyline operation.' },
      ),
    imageSegmentationDetails:
      GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image segmentation operation.' },
      ),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Progress of label operation. Range: [0, 100].' }),
    textClassificationDetails:
      GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text classification operation.' },
      ),
    textEntityExtractionDetails:
      GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text entity extraction operation.' },
      ),
    videoClassificationDetails:
      GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video classification operation.' },
      ),
    videoEventDetails:
      GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadataSchema.exactOptional().openapi({
        description: 'Details of label video event operation.',
      }),
    videoObjectDetectionDetails:
      GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object detection operation.' },
      ),
    videoObjectTrackingDetails:
      GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object tracking operation.' },
      ),
  })
  .openapi({
    description: 'Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1beta1LabelOperationMetadata')

const GoogleCloudDatalabelingV1beta1LabelTextRequestSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Required. Basic human annotation config.',
    }),
    feature: z
      .enum(['FEATURE_UNSPECIFIED', 'TEXT_CLASSIFICATION', 'TEXT_ENTITY_EXTRACTION'])
      .exactOptional()
      .openapi({ description: 'Required. The type of text labeling task.' }),
    textClassificationConfig:
      GoogleCloudDatalabelingV1beta1TextClassificationConfigSchema.exactOptional().openapi({
        description:
          'Configuration for text classification task. One of text_classification_config and text_entity_extraction_config is required.',
      }),
    textEntityExtractionConfig:
      GoogleCloudDatalabelingV1beta1TextEntityExtractionConfigSchema.exactOptional().openapi({
        description:
          'Configuration for entity extraction task. One of text_classification_config and text_entity_extraction_config is required.',
      }),
  })
  .openapi({ description: 'Request message for LabelText.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelTextRequest')

const GoogleCloudDatalabelingV1beta1LabelVideoRequestSchema = z
  .object({
    basicConfig: GoogleCloudDatalabelingV1beta1HumanAnnotationConfigSchema.exactOptional().openapi({
      description: 'Required. Basic human annotation config.',
    }),
    eventConfig: GoogleCloudDatalabelingV1beta1EventConfigSchema.exactOptional().openapi({
      description:
        'Configuration for video event task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.',
    }),
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'CLASSIFICATION',
        'OBJECT_DETECTION',
        'OBJECT_TRACKING',
        'EVENT',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of video labeling task.' }),
    objectDetectionConfig:
      GoogleCloudDatalabelingV1beta1ObjectDetectionConfigSchema.exactOptional().openapi({
        description:
          'Configuration for video object detection task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.',
      }),
    objectTrackingConfig:
      GoogleCloudDatalabelingV1beta1ObjectTrackingConfigSchema.exactOptional().openapi({
        description:
          'Configuration for video object tracking task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.',
      }),
    videoClassificationConfig:
      GoogleCloudDatalabelingV1beta1VideoClassificationConfigSchema.exactOptional().openapi({
        description:
          'Configuration for video classification task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.',
      }),
  })
  .openapi({ description: 'Request message for LabelVideo.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1LabelVideoRequest')

const GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponseSchema = z
  .object({
    annotatedDatasets: z
      .array(GoogleCloudDatalabelingV1beta1AnnotatedDatasetSchema)
      .exactOptional()
      .openapi({ description: 'The list of annotated datasets to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing annotated datasets for a dataset.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse')

const GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponseSchema = z
  .object({
    annotationSpecSets: z
      .array(GoogleCloudDatalabelingV1beta1AnnotationSpecSetSchema)
      .exactOptional()
      .openapi({ description: 'The list of annotation spec sets.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing annotation spec set under a project.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse')

const GoogleCloudDatalabelingV1beta1ListDataItemsResponseSchema = z
  .object({
    dataItems: z
      .array(GoogleCloudDatalabelingV1beta1DataItemSchema)
      .exactOptional()
      .openapi({ description: 'The list of data items to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing data items in a dataset.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListDataItemsResponse')

const GoogleCloudDatalabelingV1beta1ListDatasetsResponseSchema = z
  .object({
    datasets: z
      .array(GoogleCloudDatalabelingV1beta1DatasetSchema)
      .exactOptional()
      .openapi({ description: 'The list of datasets to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing datasets within a project.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListDatasetsResponse')

const GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponseSchema = z
  .object({
    evaluationJobs: z
      .array(GoogleCloudDatalabelingV1beta1EvaluationJobSchema)
      .exactOptional()
      .openapi({ description: 'The list of evaluation jobs to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results for listing evaluation jobs.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse')

const GoogleCloudDatalabelingV1beta1ListExamplesResponseSchema = z
  .object({
    examples: z
      .array(GoogleCloudDatalabelingV1beta1ExampleSchema)
      .exactOptional()
      .openapi({ description: 'The list of examples to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing Examples in and annotated dataset.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListExamplesResponse')

const GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponseSchema = z
  .object({
    feedbackMessages: z
      .array(GoogleCloudDatalabelingV1beta1FeedbackMessageSchema)
      .exactOptional()
      .openapi({ description: 'The list of feedback messages to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results for listing FeedbackMessages.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse')

const GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponseSchema = z
  .object({
    feedbackThreads: z
      .array(GoogleCloudDatalabelingV1beta1FeedbackThreadSchema)
      .exactOptional()
      .openapi({ description: 'The list of feedback threads to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results for listing FeedbackThreads.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse')

const GoogleCloudDatalabelingV1beta1ListInstructionsResponseSchema = z
  .object({
    instructions: z
      .array(GoogleCloudDatalabelingV1beta1InstructionSchema)
      .exactOptional()
      .openapi({ description: 'The list of Instructions to return.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of listing instructions under a project.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1ListInstructionsResponse')

const GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for PauseEvaluationJob.' })
  .openapi('GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest')

const GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequestSchema = z
  .object({})
  .openapi({ description: 'Request message ResumeEvaluationJob.' })
  .openapi('GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest')

const GoogleCloudDatalabelingV1beta1SearchEvaluationsResponseSchema = z
  .object({
    evaluations: z
      .array(GoogleCloudDatalabelingV1beta1EvaluationSchema)
      .exactOptional()
      .openapi({ description: 'The list of evaluations matching the search.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of searching evaluations.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse')

const GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequestSchema = z
  .object({
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.",
      }),
  })
  .openapi({ description: 'Request message of SearchExampleComparisons.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest')

const GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponseSchema = z
  .object({
    exampleComparisons: z
      .array(GoogleCloudDatalabelingV1beta1ExampleComparisonSchema)
      .exactOptional()
      .openapi({ description: 'A list of example comparisons matching the search criteria.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve next page of results.' }),
  })
  .openapi({ description: 'Results of searching example comparisons.', required: [] })
  .openapi('GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse')

const GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when create instruction request was created.' }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of a CreateInstruction operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata')

const GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when export dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be exported. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ExportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelStatsSchema = z
  .object({
    exampleCount: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.",
      }),
  })
  .openapi({ description: 'Statistics about annotation specs.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelStats')

const GoogleCloudDatalabelingV1p1alpha1GcsDestinationSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The output uri of destination file.' }),
  })
  .openapi({
    description: 'Export destination of the data.Only gcs path is allowed in output_uri.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1GcsDestination')

const GoogleCloudDatalabelingV1p1alpha1GcsFolderDestinationSchema = z
  .object({
    outputFolderUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Storage directory to export data to.' }),
  })
  .openapi({ description: 'Export folder destination of the data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination')

const GoogleCloudDatalabelingV1p1alpha1OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDatalabelingV1p1alpha1GcsDestinationSchema.exactOptional().openapi({
      description:
        'Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.',
    }),
    gcsFolderDestination:
      GoogleCloudDatalabelingV1p1alpha1GcsFolderDestinationSchema.exactOptional().openapi({
        description:
          'Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.',
      }),
  })
  .openapi({ description: 'The configuration of output data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1OutputConfig')

const GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponseSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of dataset. "projects/*/datasets/*"' }),
    exportCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples exported successfully.' }),
    labelStats: GoogleCloudDatalabelingV1p1alpha1LabelStatsSchema.exactOptional().openapi({
      description: 'Output only. Statistic infos of labels in the exported dataset.',
    }),
    outputConfig: GoogleCloudDatalabelingV1p1alpha1OutputConfigSchema.exactOptional().openapi({
      description: 'Output only. output_config in the ExportData request.',
    }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to export' }),
  })
  .openapi({ description: 'Response used for ExportDataset longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse')

const GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when generate report request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset for which the analysis report is generated. Format: "projects/*/datasets/*"',
      }),
  })
  .openapi({ description: 'Metadata of an GenerateAnalysisReport operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema = z
  .object({
    annotatedDatasetDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.',
      }),
    annotatedDatasetDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .',
      }),
    contributorEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/',
      }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Instruction resource name.' }),
    labelGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\\\d_-]{0,128}`.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.',
      }),
    questionDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.',
      }),
    replicaCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.',
      }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({
    description: 'Configuration for how human labeling task should be done.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig')

const GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when import dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of imported dataset. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ImportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponseSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of imported dataset.' }),
    importCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples imported successfully.' }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to import' }),
  })
  .openapi({ description: 'Response used for ImportData longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse')

const GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of a LabelImageBoundingBox operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of LabelImageBoundingPoly operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Metadata of a LabelImageClassification operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config.',
      }),
  })
  .openapi({
    description: 'Details of a LabelImageOrientedBoundingBox operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of LabelImagePolyline operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config.',
      }),
  })
  .openapi({ description: 'Details of a LabelImageSegmentation operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelTextClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelTextEntityExtraction operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of a LabelVideoEvent operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectDetection operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectTracking operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata')

const GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when labeling request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be labeled. "projects/*/datasets/*"',
      }),
    imageBoundingBoxDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding box operation.' },
      ),
    imageBoundingPolyDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding poly operation.' },
      ),
    imageClassificationDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image classification operation.' },
      ),
    imageOrientedBoundingBoxDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image oriented bounding box operation.' },
      ),
    imagePolylineDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image polyline operation.' },
      ),
    imageSegmentationDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image segmentation operation.' },
      ),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Progress of label operation. Range: [0, 100].' }),
    textClassificationDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text classification operation.' },
      ),
    textEntityExtractionDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text entity extraction operation.' },
      ),
    videoClassificationDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video classification operation.' },
      ),
    videoEventDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video event operation.' },
      ),
    videoObjectDetectionDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object detection operation.' },
      ),
    videoObjectTrackingDetails:
      GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object tracking operation.' },
      ),
  })
  .openapi({
    description: 'Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when create instruction request was created.' }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of a CreateInstruction operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata')

const GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when export dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be exported. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ExportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelStatsSchema = z
  .object({
    exampleCount: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.",
      }),
  })
  .openapi({ description: 'Statistics about annotation specs.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelStats')

const GoogleCloudDatalabelingV1p2alpha1GcsDestinationSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The output uri of destination file.' }),
  })
  .openapi({
    description: 'Export destination of the data.Only gcs path is allowed in output_uri.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1GcsDestination')

const GoogleCloudDatalabelingV1p2alpha1GcsFolderDestinationSchema = z
  .object({
    outputFolderUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Storage directory to export data to.' }),
  })
  .openapi({ description: 'Export folder destination of the data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination')

const GoogleCloudDatalabelingV1p2alpha1OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDatalabelingV1p2alpha1GcsDestinationSchema.exactOptional().openapi({
      description:
        'Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.',
    }),
    gcsFolderDestination:
      GoogleCloudDatalabelingV1p2alpha1GcsFolderDestinationSchema.exactOptional().openapi({
        description:
          'Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.',
      }),
  })
  .openapi({ description: 'The configuration of output data.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1OutputConfig')

const GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponseSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of dataset. "projects/*/datasets/*"' }),
    exportCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples exported successfully.' }),
    labelStats: GoogleCloudDatalabelingV1p2alpha1LabelStatsSchema.exactOptional().openapi({
      description: 'Output only. Statistic infos of labels in the exported dataset.',
    }),
    outputConfig: GoogleCloudDatalabelingV1p2alpha1OutputConfigSchema.exactOptional().openapi({
      description: 'Output only. output_config in the ExportData request.',
    }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to export' }),
  })
  .openapi({ description: 'Response used for ExportDataset longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse')

const GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema = z
  .object({
    annotatedDatasetDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.',
      }),
    annotatedDatasetDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .',
      }),
    contributorEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/',
      }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Instruction resource name.' }),
    labelGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\\\d_-]{0,128}`.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.',
      }),
    questionDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.',
      }),
    replicaCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.',
      }),
    userEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.',
      }),
  })
  .openapi({
    description: 'Configuration for how human labeling task should be done.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig')

const GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when import dataset request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of imported dataset. "projects/*/datasets/*"',
      }),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
  })
  .openapi({ description: 'Metadata of an ImportData operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponseSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ouptut only. The name of imported dataset.' }),
    importCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of examples imported successfully.' }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of examples requested to import' }),
  })
  .openapi({ description: 'Response used for ImportData longrunning operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse')

const GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of a LabelImageBoundingBox operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of LabelImageBoundingPoly operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Metadata of a LabelImageClassification operation.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config.',
      }),
  })
  .openapi({
    description: 'Details of a LabelImageOrientedBoundingBox operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of LabelImagePolyline operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config.',
      }),
  })
  .openapi({ description: 'Details of a LabelImageSegmentation operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelTextClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelTextEntityExtraction operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoClassification operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({ description: 'Details of a LabelVideoEvent operation metadata.', required: [] })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectDetection operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadataSchema = z
  .object({
    basicConfig:
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigSchema.exactOptional().openapi({
        description: 'Basic human annotation config used in labeling request.',
      }),
  })
  .openapi({
    description: 'Details of a LabelVideoObjectTracking operation metadata.',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata')

const GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadataSchema = z
  .object({
    annotatedDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp when labeling request was created.' }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of dataset to be labeled. "projects/*/datasets/*"',
      }),
    imageBoundingBoxDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding box operation.' },
      ),
    imageBoundingPolyDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image bounding poly operation.' },
      ),
    imageClassificationDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image classification operation.' },
      ),
    imageOrientedBoundingBoxDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image oriented bounding box operation.' },
      ),
    imagePolylineDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image polyline operation.' },
      ),
    imageSegmentationDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label image segmentation operation.' },
      ),
    partialFailures: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.",
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Progress of label operation. Range: [0, 100].' }),
    textClassificationDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text classification operation.' },
      ),
    textEntityExtractionDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label text entity extraction operation.' },
      ),
    videoClassificationDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video classification operation.' },
      ),
    videoEventDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video event operation.' },
      ),
    videoObjectDetectionDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object detection operation.' },
      ),
    videoObjectTrackingDetails:
      GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadataSchema.exactOptional().openapi(
        { description: 'Details of label video object tracking operation.' },
      ),
  })
  .openapi({
    description: 'Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23',
    required: [],
  })
  .openapi('GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata')

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

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'datalabeling.projects.operations.get',
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
              'Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'datalabeling.projects.operations.delete',
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
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be deleted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.",
  operationId: 'datalabeling.projects.evaluationJobs.patch',
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
              'Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1EvaluationJobSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1EvaluationJobSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    'Lists operations that match the specified filter in the request. If the server doesn\'t support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.',
  operationId: 'datalabeling.projects.operations.list',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameCancelRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'datalabeling.projects.operations.cancel',
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
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameExportDataRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:exportData',
  tags: ['projects'],
  description: 'Exports data and annotations from dataset.',
  operationId: 'datalabeling.projects.datasets.exportData',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1ExportDataRequestSchema },
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

export const postV1beta1NameImportDataRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:importData',
  tags: ['projects'],
  description:
    'Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.',
  operationId: 'datalabeling.projects.datasets.importData',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1ImportDataRequestSchema },
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

export const postV1beta1NamePauseRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:pause',
  tags: ['projects'],
  description:
    'Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.',
  operationId: 'datalabeling.projects.evaluationJobs.pause',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameResumeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:resume',
  tags: ['projects'],
  description:
    "Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.",
  operationId: 'datalabeling.projects.evaluationJobs.resume',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentAnnotatedDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/annotatedDatasets',
  tags: ['projects'],
  description: 'Lists annotated datasets for a dataset. Pagination is supported.',
  operationId: 'datalabeling.projects.datasets.annotatedDatasets.list',
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
            description: 'Optional. Filter is not supported at this moment.',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentAnnotationSpecSetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/annotationSpecSets',
  tags: ['projects'],
  description: 'Lists annotation spec sets for a project. Pagination is supported.',
  operationId: 'datalabeling.projects.annotationSpecSets.list',
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
            description: 'Optional. Filter is not supported at this moment.',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentAnnotationSpecSetsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/annotationSpecSets',
  tags: ['projects'],
  description: 'Creates an annotation spec set by providing a set of labels.',
  operationId: 'datalabeling.projects.annotationSpecSets.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. AnnotationSpecSet resource parent, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1AnnotationSpecSetSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDataItemsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/dataItems',
  tags: ['projects'],
  description:
    'Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.',
  operationId: 'datalabeling.projects.datasets.dataItems.list',
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
            description: 'Optional. Filter is not supported at this moment.',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1ListDataItemsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description: 'Lists datasets under a project. Pagination is supported.',
  operationId: 'datalabeling.projects.datasets.list',
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
            description: 'Optional. Filter on dataset is not supported at this moment.',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset resource parent, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1ListDatasetsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentDatasetsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description: 'Creates dataset. If success return a Dataset resource.',
  operationId: 'datalabeling.projects.datasets.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset resource parent, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1CreateDatasetRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatalabelingV1beta1DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentEvaluationJobsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/evaluationJobs',
  tags: ['projects'],
  description:
    'Lists all evaluation jobs within a project with possible filters. Pagination is supported.',
  operationId: 'datalabeling.projects.evaluationJobs.list',
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
              'Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Evaluation job resource parent. Format: "projects/{project_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentEvaluationJobsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/evaluationJobs',
  tags: ['projects'],
  description: 'Creates an evaluation job.',
  operationId: 'datalabeling.projects.evaluationJobs.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Evaluation job resource parent. Format: "projects/{project_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1EvaluationJobSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentEvaluationsSearchRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/evaluations:search',
  tags: ['projects'],
  description: 'Searches evaluations within a project.',
  operationId: 'datalabeling.projects.evaluations.search',
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
              'Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              "Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1SearchEvaluationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentExampleComparisonsSearchRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/exampleComparisons:search',
  tags: ['projects'],
  description:
    'Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.',
  operationId: 'datalabeling.projects.datasets.evaluations.exampleComparisons.search',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentExamplesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/examples',
  tags: ['projects'],
  description: 'Lists examples in an annotated dataset. Pagination is supported.',
  operationId: 'datalabeling.projects.datasets.annotatedDatasets.examples.list',
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
              'Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Example resource parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1ListExamplesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentFeedbackMessagesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/feedbackMessages',
  tags: ['projects'],
  description: 'List FeedbackMessages with pagination.',
  operationId:
    'datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFeedbackMessagesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/feedbackMessages',
  tags: ['projects'],
  description: 'Create a FeedbackMessage object.',
  operationId:
    'datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1FeedbackMessageSchema },
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

export const getV1beta1ParentFeedbackThreadsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/feedbackThreads',
  tags: ['projects'],
  description: 'List FeedbackThreads with pagination.',
  operationId: 'datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentImageLabelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/image:label',
  tags: ['projects'],
  description:
    'Starts a labeling task for image. The type of image labeling task is configured by feature in the request.',
  operationId: 'datalabeling.projects.datasets.image.label',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1LabelImageRequestSchema },
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

export const getV1beta1ParentInstructionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/instructions',
  tags: ['projects'],
  description: 'Lists instructions for a project. Pagination is supported.',
  operationId: 'datalabeling.projects.instructions.list',
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
            description: 'Optional. Filter is not supported at this moment.',
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
              'Optional. Requested page size. Server may return fewer results than requested. Default value is 100.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Instruction resource parent, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1ListInstructionsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentInstructionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/instructions',
  tags: ['projects'],
  description: 'Creates an instruction for how data should be labeled.',
  operationId: 'datalabeling.projects.instructions.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Instruction resource parent, format: projects/{project_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatalabelingV1beta1CreateInstructionRequestSchema,
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

export const postV1beta1ParentTextLabelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/text:label',
  tags: ['projects'],
  description:
    'Starts a labeling task for text. The type of text labeling task is configured by feature in the request.',
  operationId: 'datalabeling.projects.datasets.text.label',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1LabelTextRequestSchema },
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

export const postV1beta1ParentVideoLabelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/video:label',
  tags: ['projects'],
  description:
    'Starts a labeling task for video. The type of video labeling task is configured by feature in the request.',
  operationId: 'datalabeling.projects.datasets.video.label',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatalabelingV1beta1LabelVideoRequestSchema },
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
