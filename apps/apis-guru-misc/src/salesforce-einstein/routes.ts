import { createRoute, z } from '@hono/zod-openapi'

const PlanDataSchema = z
  .object({
    amount: z
      .int32()
      .exactOptional()
      .openapi({ example: 1, title: 'Number of plans of the specified type.' }),
    plan: z
      .enum(['STARTER', 'SFDC_1M_EDITION', 'BRONZE', 'SILVER', 'GOLD', 'DATASET_DOWNLOAD'])
      .exactOptional()
      .openapi({ title: 'Type of plan based on the source.' }),
    source: z
      .enum(['SALESFORCE', 'HEROKU', 'SF_AUTO_PROVISION', 'SF_AUTO_PROVISION_BOUND'])
      .exactOptional()
      .openapi({ title: 'Service that provisioned the plan.' }),
  })
  .openapi({ title: 'Plan Data', required: [] })
  .openapi('PlanData')

const ApiUsageSchema = z
  .object({
    endsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        title:
          'Date and time that the plan calendar month ends. Always 12 am on the first day of the following month.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ example: '489', title: 'Unique ID for the API usage plan month' }),
    licenseId: z
      .string()
      .exactOptional()
      .openapi({ example: 'kJCHtYDCSf', title: 'Unique ID of the API plan.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'apiusage', title: 'Object returned; in this case, apiusage.' }),
    organizationId: z
      .string()
      .exactOptional()
      .openapi({ example: '108', title: 'Unique ID for the user making the API call' }),
    planData: z.array(PlanDataSchema).exactOptional().openapi({ title: 'Plan data details' }),
    predictionsMax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 1997,
        title: 'Number of predictions left for the calendar month.',
      }),
    predictionsUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 3,
        title: 'Number of predictions used in the calendar month.',
      }),
    startsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        title: 'Date and time that the plan calendar month begins. Always the first of the month.',
      }),
  })
  .openapi({ title: 'Api Usage', required: [] })
  .openapi('ApiUsage')

const ApiUsageListSchema = z
  .object({
    data: z.array(ApiUsageSchema).exactOptional(),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'list', title: 'Object returned; in this case, list.' }),
  })
  .openapi({ title: 'Api Usage List', required: [] })
  .openapi('ApiUsageList')

const CellLocationSchema = z
  .object({
    colIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the column that contains the detected text.' }),
    rowIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the row that contains the detected text.' }),
  })
  .openapi({ required: [] })
  .openapi('CellLocation')

const BoundingBoxSchema = z
  .object({
    maxX: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'X-coordinate of the left side of the bounding box. The origin of the coordinate system is the top-left of the image. Number of pixels from the left edge of the image.',
      }),
    maxY: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Y-coordinate of the top of the bounding box. Number of pixels from the top edge of the image.',
      }),
    minX: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'X-coordinate of the right side of the bounding box. Number of pixels from the left edge of the image.',
      }),
    minY: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Y-coordinate of the bottom of the bounding box. Number of pixels from the top edge of the image.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BoundingBox')

const EntityObjectSchema = z
  .object({
    boundingBox: BoundingBoxSchema.exactOptional(),
    entity: z.string().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntityObject')

const AttributesSchema = z
  .object({
    cellLocation: CellLocationSchema.exactOptional(),
    language: z.string().exactOptional(),
    pageNumber: z.string().exactOptional(),
    tag: z.string().exactOptional(),
    value: EntityObjectSchema.exactOptional(),
  })
  .openapi({
    description:
      'Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.',
    required: [],
  })
  .openapi('Attributes')

const LabelSchema = z
  .object({
    datasetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'ID of the dataset that the label belongs to.',
        example: 57,
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'ID of the label.', example: 621 }),
    name: z.string().openapi({ description: 'Name of the label.', example: 'Mountain' }),
    numExamples: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of examples that have the label.',
        example: 40,
      }),
  })
  .openapi({
    description: 'Contains information about the label with which the example is associated.',
    required: ['datasetId', 'name'],
  })
  .openapi('Label')

const LabelSummarySchema = z
  .object({ labels: z.array(LabelSchema).exactOptional() })
  .openapi({
    description: 'Contains the labels array that contains all the labels for the dataset.',
    required: [],
  })
  .openapi('LabelSummary')

const DatasetSchema = z
  .object({
    available: z
      .boolean()
      .exactOptional()
      .openapi({ title: 'Specifies whether the dataset is ready to be trained.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the dataset was created.' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 1000014, title: 'Dataset ID.' }),
    labelSummary: LabelSummarySchema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataset language.', example: 'N/A' }),
    name: z.string().openapi({ example: 'weather report', title: 'Name of the dataset.' }),
    numOfDuplicates: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of duplicate images. This number includes duplicates in the .zip file from which the dataset was created plus the number of duplicate images from subsequent PUT calls to add images to the dataset.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object returned; in this case, dataset.', example: 'dataset' }),
    statusMsg: z
      .string()
      .exactOptional()
      .openapi({ example: 'SUCCEEDED', title: 'Status of the dataset creation and data upload.' }),
    totalExamples: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of examples in the dataset.', example: 20 }),
    totalLabels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of labels in the dataset.', example: 2 }),
    type: z.string().exactOptional().openapi({ title: 'Type of dataset data.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ title: 'Date and time that the dataset was last updated.' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Dataset')

const DatasetListSchema = z
  .object({
    data: z.array(DatasetSchema).exactOptional(),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'list', title: 'Object returned; in this case, list.' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetList')

const DeletionResponseSchema = z
  .object({
    deletedObjectId: z
      .string()
      .exactOptional()
      .openapi({
        example: '1003360',
        title:
          'ID of the object deleted. Depending on the object you delete, this contains the dataset ID or the model ID.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ example: 'Z2JTFBF3A7XKIJC5QEJXMO4HSY', title: 'ID of the deletion' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        title:
          'Additional information about the deletion. For example, a message is returned if the deletion fails.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'deletion', title: 'Object returned; in this case, deletion.' }),
    organizationId: z
      .string()
      .exactOptional()
      .openapi({
        example: '2',
        title: 'ID of the org to which the dataset or model being deleted belongs.',
      }),
    progress: z
      .float64()
      .exactOptional()
      .openapi({
        example: 1,
        title: 'How far the deletion has progressed. Values are between 0�1.',
      }),
    status: z
      .enum([
        'QUEUED',
        'RUNNING',
        'SUCCEEDED_WAITING_FOR_CACHE_REMOVAL',
        'SUCCEEDED',
        'KILLED',
        'FAILED',
        'RETRY',
      ])
      .exactOptional()
      .openapi({ title: 'Status of the deletion.' }),
    type: z
      .enum(['DATASET', 'MODEL'])
      .exactOptional()
      .openapi({ title: "Object that's being deleted" }),
  })
  .openapi({ required: [] })
  .openapi('DeletionResponse')

const DetectionResultSchema = z
  .object({
    boundingBox: BoundingBoxSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ description: 'Probability lable for the input. ' }),
    probability: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Probability value for the input. Values are between 0�1.' }),
  })
  .openapi({ description: 'label', required: [] })
  .openapi('DetectionResult')

const ExampleSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the example was created.' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'ID of the example.',
        example: 546,
      }),
    label: LabelSchema.exactOptional(),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the image in the dataset. This is a temporary URL that expires in 30 minutes. This URL can be used to display images that were uploaded to a dataset in a UI.',
        example: 'https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...',
      }),
    name: z.string().openapi({ description: 'Name of the example.', example: '659803277.jpg' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object returned; in this case, example.', example: 'example' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Example')

const ExampleListSchema = z
  .object({
    data: z.array(ExampleSchema).exactOptional(),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'list', title: 'Object returned; in this case, list.' }),
  })
  .openapi({ required: [] })
  .openapi('ExampleList')

const GenerateAccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'SPFPQ5IBLB6DPE6FKPWHMIWW4MCRICX4M4KQXFQMI6THZXIEZ6QGNWNOERD6S7655LJAFWTRIKC4KGYO5G3XROMEOTBSS53CFSB6GIA',
        title: 'Access token for authorization.',
      }),
    expires_in: z
      .string()
      .exactOptional()
      .openapi({
        example: '120',
        title: 'Number of seconds that the token will expire from the time it was generated.',
      }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'FL4GSVQS4W5CKSFRVZBLPIVZZJ2K4VIFPLGZ45SJGUQK4SS56IWPWACZ7V2B7OVLVKZCNK5JZSSW7CIHCNQJAO3TOUE3375108HHTLY',
        title:
          'Refresh token that can be used to generate an access token. Only returned when you pass the scope=offline parameter to the endpoint.',
      }),
    token_type: z
      .string()
      .exactOptional()
      .openapi({ example: 'Bearer', title: 'Type of token returned. Always Bearer.' }),
  })
  .openapi({ required: [] })
  .openapi('GenerateAccessTokenResponse')

const ImageClassificationRequestSchema = z
  .object({
    modelId: z
      .string()
      .openapi({
        description: 'ID of the model that makes the prediction.',
        example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
      }),
    numResults: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Number of probabilities to return.', example: 3 }),
    sampleBase64Content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The image contained in a base64 string.',
        example: 'SomeBase64EncodedImage',
      }),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
      }),
    sampleLocation: z.string().exactOptional().openapi({ description: 'URL of the image file.' }),
  })
  .openapi({ required: ['modelId'] })
  .openapi('ImageClassificationRequest')

const LabelResultSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Probability lable for the input. ' }),
    probability: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Probability value for the input. Values are between 0�1.' }),
  })
  .openapi({ description: 'label', required: [] })
  .openapi('LabelResult')

const ImageClassificationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({
        example: 'predictresponse',
        title: 'Object returned; in this case, predictresponse.',
      }),
    probabilities: z.array(LabelResultSchema).exactOptional(),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.',
        example: 'Sample1',
      }),
  })
  .openapi({ required: [] })
  .openapi('ImageClassificationResponse')

const IntentPredictRequestSchema = z
  .object({
    document: z
      .string()
      .openapi({
        description: 'Text for which you want to return an intent prediction.',
        example: "I can't tell you how much fun it was",
      }),
    modelId: z
      .string()
      .openapi({
        description:
          'ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.',
        example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
      }),
    numResults: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Number of probabilities to return. ', example: 3 }),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
      }),
  })
  .openapi({ required: ['document', 'modelId'] })
  .openapi('IntentPredictRequest')

const IntentPredictResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({
        example: 'predictresponse',
        title: 'Object returned; in this case, predictresponse.',
      }),
    probabilities: z.array(LabelResultSchema).exactOptional(),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.',
        example: 'Sample1',
      }),
  })
  .openapi({ required: [] })
  .openapi('IntentPredictResponse')

const LearningCurveSchema = z
  .object({
    epoch: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Epoch to which the metrics correspond.', example: 1 }),
    epochResults: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Prediction results for the set of data used to test the model during training.',
      }),
    metricsData: z.object({}).exactOptional().openapi({ description: 'Model metrics values.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Object returned; in this case, learningcurve.',
        example: 'learningcurve',
      }),
  })
  .openapi({ required: [] })
  .openapi('LearningCurve')

const LearningCurveListSchema = z
  .object({
    data: z.array(LearningCurveSchema).exactOptional(),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'list', title: 'Object returned; in this case, list.' }),
  })
  .openapi({ required: [] })
  .openapi('LearningCurveList')

const MetricsSchema = z
  .object({
    algorithm: z.string().exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the model was created.' }),
    id: z.string().exactOptional().openapi({ description: 'Model Id' }),
    language: z.string().exactOptional(),
    metricsData: z.object({}).exactOptional().openapi({ description: 'Model metrics values.' }),
    object: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Metrics')

const ModelSchema = z
  .object({
    algorithm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Algorithm used to create the model. Returned only when the modelType is image-detection.',
        example: 'object-detection',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the model was created.' }),
    datasetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'ID of the dataset trained to create the model.',
        example: 57,
      }),
    datasetVersionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Not available yet', example: 0 }),
    failureMsg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason the dataset training failed. Returned only if the training status is FAILED.',
        example:
          'To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.',
        example: 'en_US',
      }),
    modelId: z
      .string()
      .openapi({
        description: 'ID of the model. Contains letters and numbers.',
        example: '2KXJEOM3N562JBT4P7OX7VID2Q',
      }),
    modelType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of data from which the model was created.' }),
    name: z.string().openapi({ description: 'Name of the model.', example: 'My Model - Version1' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object returned; in this case, model.', example: 'model' }),
    progress: z
      .number()
      .openapi({
        description: 'How far the dataset training has progressed. Values are between 0�1.',
      }),
    status: z
      .enum(['QUEUED', 'RUNNING', 'SUCCEEDED', 'FAILED', 'KILLED', 'FAILED_WITH_RETRIES'])
      .openapi({ description: 'Status of the model.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the model was last updated.' }),
  })
  .openapi({ required: ['datasetId', 'datasetVersionId', 'modelId', 'name', 'progress', 'status'] })
  .openapi('Model')

const ModelListSchema = z
  .object({
    data: z.array(ModelSchema).exactOptional(),
    object: z
      .string()
      .exactOptional()
      .openapi({ example: 'list', title: 'Object returned; in this case, list.' }),
  })
  .openapi({ required: [] })
  .openapi('ModelList')

const OCRResultSchema = z
  .object({
    attributes: AttributesSchema.exactOptional(),
    boundingBox: BoundingBoxSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ description: 'Content of the detected text.' }),
    probability: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Probability value for the input. Values are between 0�1.' }),
  })
  .openapi({ description: 'Array of probabilities for the prediction.', required: [] })
  .openapi('OCRResult')

const OCRPredictResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({
        example: 'predictresponse',
        title: 'Object returned; in this case, predictresponse.',
      }),
    probabilities: z.array(OCRResultSchema).exactOptional(),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Same value as request parameter. Returned only if the sampleId request parameter is provided.',
        example: 'Sample1',
      }),
    task: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Same value as request parameter. Returns text if the request parameter isn't supplied.",
        example: 'Task1',
      }),
  })
  .openapi({ required: [] })
  .openapi('OCRPredictResponse')

const ObjectDetectionRequestSchema = z
  .object({
    modelId: z
      .string()
      .openapi({
        description: 'ID of the model that makes the detection.',
        example: 'YCQ4ZACEPJFGXZNRA6ERF3GL5E',
      }),
    sampleBase64Content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The image contained in a base64 string.',
        example: 'SomeBase64EncodedImage',
      }),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
      }),
    sampleLocation: z.string().exactOptional().openapi({ description: 'URL of the image file.' }),
  })
  .openapi({ required: ['modelId'] })
  .openapi('ObjectDetectionRequest')

const ObjectDetectionResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({
        example: 'predictresponse',
        title: 'Object returned; in this case, predictresponse.',
      }),
    probabilities: z.array(DetectionResultSchema).exactOptional(),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.',
        example: 'Sample1',
      }),
  })
  .openapi({ required: [] })
  .openapi('ObjectDetectionResponse')

const PredictionErrorResponseSchema = z
  .object({ message: z.string().exactOptional(), object: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PredictionErrorResponse')

const SentimentPredictRequestSchema = z
  .object({
    document: z
      .string()
      .openapi({
        description: 'Text for which you want to return a sentiment prediction.',
        example: "I can't tell you how much fun it was",
      }),
    modelId: z
      .string()
      .openapi({
        description:
          'ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.',
        example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
      }),
    numResults: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Number of probabilities to return. ', example: 3 }),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
      }),
  })
  .openapi({ required: ['document', 'modelId'] })
  .openapi('SentimentPredictRequest')

const SentimentPredictResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({
        example: 'predictresponse',
        title: 'Object returned; in this case, predictresponse.',
      }),
    probabilities: z.array(LabelResultSchema).exactOptional(),
    sampleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.',
        example: 'Sample1',
      }),
  })
  .openapi({ required: [] })
  .openapi('SentimentPredictResponse')

const TrainResponseSchema = z
  .object({
    algorithm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Algorithm used to create the model. Returned only when the modelType is image-detection.',
        example: 'object-detection',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the model was created.' }),
    datasetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'ID of the dataset trained to create the model.',
        example: 57,
      }),
    datasetVersionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Not available yet', example: 0 }),
    epochs: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of epochs used during training.', example: 20 }),
    failureMsg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason the dataset training failed. Returned only if the training status is FAILED.',
        example:
          'To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set',
      }),
    language: z
      .string()
      .openapi({
        description:
          'Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.',
        example: 'en_US',
      }),
    learningRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Learning rate used during training.', example: 0.0001 }),
    modelId: z
      .string()
      .openapi({
        description: 'ID of the model. Contains letters and numbers.',
        example: '2KXJEOM3N562JBT4P7OX7VID2Q',
      }),
    modelType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of data from which the model was created.' }),
    name: z.string().openapi({ description: 'Name of the model.', example: 'My Model - Version1' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object returned; in this case, training.', example: 'training' }),
    progress: z
      .number()
      .openapi({
        description: 'How far the dataset training has progressed. Values are between 0�1.',
        example: 0.7,
      }),
    queuePosition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Where the training job is in the queue. This field appears in the response only if the status is QUEUED.',
        example: 1,
      }),
    status: z
      .enum(['QUEUED', 'RUNNING', 'SUCCEEDED', 'FAILED', 'KILLED', 'FAILED_WITH_RETRIES'])
      .openapi({ description: 'Status of the model.' }),
    trainParams: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Training parameters passed into the request.',
        example: '{"trainSplitRatio":0.7}',
      }),
    trainStats: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returns null when you train a dataset. Training statistics are returned when the status is SUCCEEDED or FAILED.',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the model was last updated.' }),
  })
  .openapi({
    required: [
      'datasetId',
      'datasetVersionId',
      'language',
      'modelId',
      'name',
      'progress',
      'status',
    ],
  })
  .openapi('TrainResponse')

const V2LanguageTrainParamsSchema = z
  .object({
    trainSplitRatio: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
        example: 0.9,
      }),
    withFeedback: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Lets you specify that feedback examples are included in the data to be trained to create the model.',
      }),
    withGlobalDatasetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
      }),
  })
  .openapi({
    description: 'JSON that contains parameters that specify how the model is created',
    required: [],
  })
  .openapi('V2LanguageTrainParams')

const V2VisionTrainParamsSchema = z
  .object({
    trainSplitRatio: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
        example: 0.9,
      }),
    withFeedback: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Lets you specify that feedback examples are included in the data to be trained to create the model.',
      }),
    withGlobalDatasetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
      }),
  })
  .openapi({
    description: 'JSON that contains parameters that specify how the model is created',
    required: [],
  })
  .openapi('V2VisionTrainParams')

const BearerTokenSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getV2ApiusageRoute = createRoute({
  method: 'get',
  path: '/v2/apiusage',
  tags: ['Check API Usage'],
  summary: 'Get API Isage',
  description:
    'Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.',
  operationId: 'getApiUsagePlansV2',
  responses: {
    200: {
      description: 'api usage',
      content: { 'application/json': { schema: ApiUsageListSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageDatasetsRoute = createRoute({
  method: 'get',
  path: '/v2/language/datasets',
  tags: ['Language Datasets'],
  summary: 'Get All Datasets',
  description:
    'Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.',
  operationId: 'listDatasets',
  request: {
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the dataset from which you want to start paging',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('25')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.',
            in: 'query',
            name: 'count',
            schema: { default: '25', type: 'string' },
            required: false,
          },
        }),
      global: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.',
            in: 'query',
            name: 'global',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DatasetListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageDatasetsUploadRoute = createRoute({
  method: 'post',
  path: '/v2/language/datasets/upload',
  tags: ['Language Datasets'],
  summary: 'Create a Dataset From a File Asynchronously',
  description:
    'Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.',
  operationId: 'uploadDatasetAsync',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Path to the .csv, .tsv, or .json file on the local drive (FilePart).',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the file name.',
                  example: 'weather',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the .csv, .tsv, or .json file.' }),
              type: z
                .enum(['text-intent', 'text-sentiment'])
                .exactOptional()
                .openapi({ description: 'Type of dataset data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload initiated',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageDatasetsUploadSyncRoute = createRoute({
  method: 'post',
  path: '/v2/language/datasets/upload/sync',
  tags: ['Language Datasets'],
  summary: 'Create a Dataset From a File Synchronously',
  description:
    'Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.',
  operationId: 'uploadDatasetSync',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Path to the .csv, .tsv, or .json file on the local drive (FilePart).',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the file name.',
                  example: 'weather',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the .csv, .tsv, or .json file.' }),
              type: z
                .enum(['text-intent', 'text-sentiment'])
                .exactOptional()
                .openapi({ description: 'Type of dataset data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageDatasetsDatasetIdRoute = createRoute({
  method: 'get',
  path: '/v2/language/datasets/{datasetId}',
  tags: ['Language Datasets'],
  summary: 'Get a Dataset',
  description: 'Returns a single dataset.',
  operationId: 'getDataset',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DatasetSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const deleteV2LanguageDatasetsDatasetIdRoute = createRoute({
  method: 'delete',
  path: '/v2/language/datasets/{datasetId}',
  tags: ['Language Datasets'],
  summary: 'Delete a Dataset',
  description: 'Deletes the specified dataset and associated labels and examples.',
  operationId: 'deleteDataset',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageDatasetsDatasetIdExamplesRoute = createRoute({
  method: 'get',
  path: '/v2/language/datasets/{datasetId}/examples',
  tags: ['Language Examples'],
  summary: 'Get All Examples',
  description: 'Returns all the examples for the specified dataset,',
  operationId: 'getExamples',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the example from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of examples to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
      source: z
        .enum(['all', 'feedback', 'upload'])
        .exactOptional()
        .openapi({
          param: {
            description: 'return examples that were created in the dataset as feedback',
            in: 'query',
            name: 'source',
            schema: { enum: ['all', 'feedback', 'upload'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExampleListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageDatasetsDatasetIdModelsRoute = createRoute({
  method: 'get',
  path: '/v2/language/datasets/{datasetId}/models',
  tags: ['Language Models'],
  summary: 'Get All Models',
  description: 'Returns all models for the specified dataset.',
  operationId: 'getTrainedModels',
  request: {
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the model from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of models to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ModelListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const putV2LanguageDatasetsDatasetIdUploadRoute = createRoute({
  method: 'put',
  path: '/v2/language/datasets/{datasetId}/upload',
  tags: ['Language Examples'],
  summary: 'Create Examples From a File',
  description: 'Adds examples from a .csv, .tsv, or .json file to a dataset.',
  operationId: 'updateDatasetAsync',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to the .csv, .tsv, or .json file on a local drive. ',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the .csv, .tsv, or .json file.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageDeletionIdRoute = createRoute({
  method: 'get',
  path: '/v2/language/deletion/{id}',
  tags: ['Language Datasets'],
  summary: 'Get Deletion Status',
  description:
    'Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.',
  operationId: 'get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Deletion Id',
            example: 'Z2JTFBF3A7XKIJC5QEJXMO4HSY',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'deletion status',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageExamplesRoute = createRoute({
  method: 'get',
  path: '/v2/language/examples',
  tags: ['Language Examples'],
  summary: 'Get All Examples for Label',
  description:
    'Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.',
  operationId: 'getExamplesByLabel',
  request: {
    query: z.object({
      labelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Label Id',
            example: 'SomeLabelId',
            in: 'query',
            name: 'labelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the example from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of examples to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExampleListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageFeedbackRoute = createRoute({
  method: 'post',
  path: '/v2/language/feedback',
  tags: ['Language Examples'],
  summary: 'Create a Feedback Example',
  description: 'Adds a feedback example to the dataset associated with the specified model.',
  operationId: 'provideFeedback',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              document: z
                .string()
                .exactOptional()
                .openapi({ description: 'Intent or sentiment string to add to the dataset.' }),
              expectedLabel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Correct label for the example. Must be a label that exists in the dataset.',
                }),
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.',
                }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({
                  description: 'Name of the example. Optional. Maximum length is 180 characters.',
                  example: 'feedback-2',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: ExampleSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageIntentRoute = createRoute({
  method: 'post',
  path: '/v2/language/intent',
  tags: ['Language Prediction'],
  summary: 'Prediction for Intent',
  description: 'Returns an intent prediction for the given string.',
  operationId: 'intentMultipart',
  request: {
    body: {
      content: {
        'application/json': { schema: IntentPredictRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              document: z
                .string()
                .openapi({
                  description: 'Text for which you want to return an intent prediction.',
                  example: "I can't tell you how much fun it was",
                }),
              modelId: z
                .string()
                .openapi({
                  description:
                    'ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.',
                  example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
                }),
              numResults: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({ description: 'Number of probabilities to return. ', example: 3 }),
              sampleId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
                }),
            })
            .openapi({ required: ['document', 'modelId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Prediction Result',
      content: { 'application/json': { schema: IntentPredictResponseSchema } },
    },
    429: {
      description: 'Exceed usage limitation',
      content: { 'application/json': { schema: PredictionErrorResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v2/language/models/{modelId}',
  tags: ['Language Models'],
  summary: 'Get Model Metrics',
  description: 'Returns the metrics for a model',
  operationId: 'getTrainedModelMetrics',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Model Id',
            example: 'SomeModelId',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Model Metrics',
      content: { 'application/json': { schema: MetricsSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const deleteV2LanguageModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/v2/language/models/{modelId}',
  tags: ['Language Models'],
  summary: 'Delete a Model',
  description: 'Deletes the specified model.',
  operationId: 'deleteModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Model Id',
            example: 'SomeModelId',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Deletion submitted',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageModelsModelIdLcRoute = createRoute({
  method: 'get',
  path: '/v2/language/models/{modelId}/lc',
  tags: ['Language Models'],
  summary: 'Get Model Learning Curve',
  description: 'Returns the metrics for each epoch in a model.',
  operationId: 'getTrainedModelLearningCurve',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Model Id',
            example: 'SomeModelId',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the epoch from which you want to start paging',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('25')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of epoch to return. Maximum valid value is 25.',
            in: 'query',
            name: 'count',
            schema: { default: '25', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Learning Curve',
      content: { 'application/json': { schema: LearningCurveListSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageRetrainRoute = createRoute({
  method: 'post',
  path: '/v2/language/retrain',
  tags: ['Language Training'],
  summary: 'Retrain a Dataset',
  description:
    'Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.',
  operationId: 'retrain',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              algorithm: z
                .string()
                .exactOptional()
                .openapi({ description: 'Algorithm used for train', example: 'intent' }),
              epochs: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(1000),
                )
                .exactOptional()
                .openapi({
                  description: 'Number of training iterations for the neural network. Optional.',
                  example: 20,
                }),
              learningRate: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'N/A for intent or sentiment models.', example: 0.0001 }),
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the model to be updated from the training.',
                  example: '7JXCXTRXTMNLJCEF2DR5CJ46QU',
                }),
              trainParams: z
                .object({
                  trainSplitRatio: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
                      example: 0.9,
                    }),
                  withFeedback: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify that feedback examples are included in the data to be trained to create the model.',
                    }),
                  withGlobalDatasetId: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      description:
                        'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'JSON that contains parameters that specify how the model is created',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageSentimentRoute = createRoute({
  method: 'post',
  path: '/v2/language/sentiment',
  tags: ['Language Prediction'],
  summary: 'Prediction for Sentiment',
  description: 'Returns a sentiment prediction for the given string.',
  operationId: 'sentimentMultipart',
  request: {
    body: {
      content: {
        'application/json': { schema: SentimentPredictRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              document: z
                .string()
                .openapi({
                  description: 'Text for which you want to return a sentiment prediction.',
                  example: "I can't tell you how much fun it was",
                }),
              modelId: z
                .string()
                .openapi({
                  description:
                    'ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.',
                  example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
                }),
              numResults: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({ description: 'Number of probabilities to return. ', example: 3 }),
              sampleId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
                }),
            })
            .openapi({ required: ['document', 'modelId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Prediction Result',
      content: { 'application/json': { schema: SentimentPredictResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2LanguageTrainRoute = createRoute({
  method: 'post',
  path: '/v2/language/train',
  tags: ['Language Training'],
  summary: 'Train a Dataset',
  description: 'Trains a dataset and creates a model.',
  operationId: 'train',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              algorithm: z
                .string()
                .exactOptional()
                .openapi({ description: 'Algorithm used for train', example: 'intent' }),
              datasetId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'ID of the dataset to train.',
                  example: 57,
                }),
              epochs: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(1000),
                )
                .exactOptional()
                .openapi({
                  description: 'Number of training iterations for the neural network. Optional.',
                  example: 20,
                }),
              learningRate: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'N/A for intent or sentiment models.' }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({ description: 'Name of the model. Maximum length is 180 characters.' }),
              trainParams: z
                .object({
                  trainSplitRatio: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
                      example: 0.9,
                    }),
                  withFeedback: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify that feedback examples are included in the data to be trained to create the model.',
                    }),
                  withGlobalDatasetId: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      description:
                        'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'JSON that contains parameters that specify how the model is created',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2LanguageTrainModelIdRoute = createRoute({
  method: 'get',
  path: '/v2/language/train/{modelId}',
  tags: ['Language Training'],
  summary: 'Get Training Status',
  description:
    "Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.",
  operationId: 'getTrainStatusAndProgress',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Model Id',
            example: 'SomeModelId',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2Oauth2TokenRoute = createRoute({
  method: 'post',
  path: '/v2/oauth2/token',
  tags: ['Authorization'],
  summary: 'Generate an OAuth Token',
  description:
    'Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.',
  externalDocs: {
    description: 'authentication guid',
    url: 'https://metamind.readme.io/docs/generate-an-oauth-access-token',
  },
  operationId: 'generateTokenV2',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              assertion: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'encrypted payload to identify yourself',
                  example: 'SOME_ASSERTION_STRING',
                }),
              grant_type: z
                .enum(['urn:ietf:params:oauth:grant-type:jwt-bearer', 'refresh_token'])
                .exactOptional()
                .openapi({
                  description: 'specify the authentication method desired',
                  example: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The refresh token you created previously.',
                  example: 'SomeRefreshToken',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'set to `offline` to generate a refresh token',
                  example: 'offline',
                }),
              valid_for: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(60)
                .exactOptional()
                .openapi({
                  description:
                    'Number of seconds until the access token expires. Default is 60 seconds. Maximum value is 30 days',
                  example: 120,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'access token result',
      content: { 'application/json': { schema: GenerateAccessTokenResponseSchema } },
    },
  },
})

export const deleteV2Oauth2TokensTokenRoute = createRoute({
  method: 'delete',
  path: '/v2/oauth2/tokens/{token}',
  tags: ['Authorization'],
  summary: 'Delete a Refresh Token',
  operationId: 'revokeRefreshTokenV2',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'the token to revoke',
            example: 'SOME_REFRESH_TOKEN',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'deleted, with no content returned' },
    400: { description: 'token cannot be removed' },
    404: { description: 'token not found' },
  },
  security: [{ bearer_token: [] }],
})

export const putV2VisionBulkfeedbackRoute = createRoute({
  method: 'put',
  path: '/v2/vision/bulkfeedback',
  tags: ['Vision Examples'],
  summary: 'Create Feedback Examples From a Zip File',
  description:
    'Adds feedback examples to the dataset associated with the specified object detection model.',
  operationId: 'updateDatasetAsync_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Local .zip file to upload. The maximum .zip file size you can upload from a local drive is 50 MB.',
                }),
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the model that misclassified the images. The feedback examples are added to the dataset associated with this model.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionDatasetsRoute = createRoute({
  method: 'get',
  path: '/v2/vision/datasets',
  tags: ['Vision Datasets'],
  summary: 'Get All Datasets',
  description:
    'Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.',
  operationId: 'listDatasets_1',
  request: {
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the dataset from which you want to start paging',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('25')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.',
            in: 'query',
            name: 'count',
            schema: { default: '25', type: 'string' },
            required: false,
          },
        }),
      global: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.',
            in: 'query',
            name: 'global',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DatasetListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionDatasetsRoute = createRoute({
  method: 'post',
  path: '/v2/vision/datasets',
  tags: ['Vision Datasets'],
  summary: 'Create a Dataset',
  description: "Creates a dataset and labels, if they're specified.",
  operationId: 'createDataset',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              labels: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional comma-separated list of labels. If specified, creates the labels in the dataset. Maximum number of labels per dataset is 250.',
                  example: 'beach,mountain',
                }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({
                  description: 'Name of the dataset. Maximum length is 180 characters.',
                  example: 'Beach and Mountain',
                }),
              type: z
                .enum(['image', 'image-multi-label'])
                .exactOptional()
                .openapi({ description: 'Type of dataset data' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Creation success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionDatasetsUploadRoute = createRoute({
  method: 'post',
  path: '/v2/vision/datasets/upload',
  tags: ['Vision Datasets'],
  summary: 'Create a Dataset From a Zip File Asynchronously',
  description:
    'Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.',
  operationId: 'uploadDatasetAsync_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to the .zip file on the local drive (FilePart).' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.',
                  example: 'mountainvsbeach',
                }),
              path: z.string().exactOptional().openapi({ description: 'URL of the .zip file.' }),
              type: z
                .enum(['image', 'image-detection', 'image-multi-label'])
                .exactOptional()
                .openapi({ description: 'Type of dataset data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload initiated',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionDatasetsUploadSyncRoute = createRoute({
  method: 'post',
  path: '/v2/vision/datasets/upload/sync',
  tags: ['Vision Datasets'],
  summary: 'Create a Dataset From a Zip File Synchronously',
  description:
    'Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.',
  operationId: 'uploadDatasetSync_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Path to the .zip file on the local drive (FilePart).' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.',
                  example: 'mountainvsbeach',
                }),
              path: z.string().exactOptional().openapi({ description: 'URL of the .zip file.' }),
              type: z
                .enum(['image', 'image-detection', 'image-multi-label'])
                .exactOptional()
                .openapi({ description: 'Type of dataset data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionDatasetsDatasetIdRoute = createRoute({
  method: 'get',
  path: '/v2/vision/datasets/{datasetId}',
  tags: ['Vision Datasets'],
  summary: 'Get a Dataset',
  description: 'Returns a single dataset.',
  operationId: 'getDataset_1',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DatasetSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const deleteV2VisionDatasetsDatasetIdRoute = createRoute({
  method: 'delete',
  path: '/v2/vision/datasets/{datasetId}',
  tags: ['Vision Datasets'],
  summary: 'Delete a Dataset',
  description: 'Deletes the specified dataset and associated labels and examples.',
  operationId: 'deleteDataset_1',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionDatasetsDatasetIdExamplesRoute = createRoute({
  method: 'get',
  path: '/v2/vision/datasets/{datasetId}/examples',
  tags: ['Vision Examples'],
  summary: 'Get All Examples',
  description:
    'Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.',
  operationId: 'getExamples_1',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the example from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of examples to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
      source: z
        .enum(['all', 'feedback', 'upload'])
        .exactOptional()
        .openapi({
          param: {
            description: 'return examples that were created in the dataset as feedback',
            in: 'query',
            name: 'source',
            schema: { enum: ['all', 'feedback', 'upload'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExampleListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionDatasetsDatasetIdExamplesRoute = createRoute({
  method: 'post',
  path: '/v2/vision/datasets/{datasetId}/examples',
  tags: ['Vision Examples'],
  summary: 'Create an Example',
  description: 'Adds an example with the specified label to a dataset.',
  operationId: 'addExample',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Location of the local image file to upload.' }),
              labelId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'ID of the label to add to the example.',
                  example: 42,
                }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({ description: 'Name of the example. Maximum length is 180 characters.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Example created',
      content: { 'application/json': { schema: ExampleSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionDatasetsDatasetIdModelsRoute = createRoute({
  method: 'get',
  path: '/v2/vision/datasets/{datasetId}/models',
  tags: ['Vision Models'],
  summary: 'Get All Models',
  description: 'Returns all models for the specified dataset.',
  operationId: 'getTrainedModels_1',
  request: {
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the model from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of models to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ModelListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const putV2VisionDatasetsDatasetIdUploadRoute = createRoute({
  method: 'put',
  path: '/v2/vision/datasets/{datasetId}/upload',
  tags: ['Vision Examples'],
  summary: 'Create Examples From a Zip File',
  description:
    'Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.',
  operationId: 'updateDatasetAsync_2',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Dataset Id',
            example: 'SomeDatasetId',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Location of the local image file to upload.' }),
              path: z.string().exactOptional().openapi({ description: 'URL of the .zip file.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionDeletionIdRoute = createRoute({
  method: 'get',
  path: '/v2/vision/deletion/{id}',
  tags: ['Vision Datasets'],
  summary: 'Get Deletion Status',
  description:
    'Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.',
  operationId: 'get_1',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Deletion Id',
            example: 'Z2JTFBF3A7XKIJC5QEJXMO4HSY',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'deletion status',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionDetectRoute = createRoute({
  method: 'post',
  path: '/v2/vision/detect',
  tags: ['Vision Prediction'],
  summary: 'Detection with Image File',
  description:
    'Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.',
  operationId: 'detectMultipart',
  request: {
    body: {
      content: {
        'application/json': { schema: ObjectDetectionRequestSchema },
        'multipart/form-data': { schema: ObjectDetectionRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Detection Result',
      content: { 'application/json': { schema: ObjectDetectionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionExamplesRoute = createRoute({
  method: 'get',
  path: '/v2/vision/examples',
  tags: ['Vision Examples'],
  summary: 'Get All Examples for Label',
  description:
    'Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.',
  operationId: 'getExamplesByLabel_1',
  request: {
    query: z.object({
      labelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Label Id',
            example: 'SomeLabelId',
            in: 'query',
            name: 'labelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the example from which you want to start paging.',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of examples to return.',
            in: 'query',
            name: 'count',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExampleListSchema } } },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionFeedbackRoute = createRoute({
  method: 'post',
  path: '/v2/vision/feedback',
  tags: ['Vision Examples'],
  summary: 'Create a Feedback Example',
  description: 'Adds a feedback example to the dataset associated with the specified model.',
  operationId: 'provideFeedback_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Local image file to upload.' }),
              expectedLabel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Correct label for the example. Must be a label that exists in the dataset.',
                }),
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.',
                }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({
                  description: 'Name of the example. Optional. Maximum length is 180 characters.',
                  example: 'feedback-1',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: { 'application/json': { schema: ExampleSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v2/vision/models/{modelId}',
  tags: ['Vision Models'],
  summary: 'Get Model Metrics',
  description: 'Returns the metrics for a model',
  operationId: 'getTrainedModelMetrics_1',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { description: 'Model Id', example: 'SomeModelId', type: 'string' },
          },
          description: 'Model Id',
          example: 'SomeModelId',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Model Metrics',
      content: { 'application/json': { schema: MetricsSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const deleteV2VisionModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/v2/vision/models/{modelId}',
  tags: ['Vision Models'],
  summary: 'Delete a Model',
  description: 'Deletes the specified model.',
  operationId: 'deleteModel_1',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { description: 'Model Id', example: 'SomeModelId', type: 'string' },
          },
          description: 'Model Id',
          example: 'SomeModelId',
        }),
    }),
  },
  responses: {
    201: {
      description: 'Deletion submitted',
      content: { 'application/json': { schema: DeletionResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionModelsModelIdLcRoute = createRoute({
  method: 'get',
  path: '/v2/vision/models/{modelId}/lc',
  tags: ['Vision Models'],
  summary: 'Get Model Learning Curve',
  description: 'Returns the metrics for each epoch in a model.',
  operationId: 'getTrainedModelLearningCurve_1',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { description: 'Model Id', example: 'SomeModelId', type: 'string' },
          },
          description: 'Model Id',
          example: 'SomeModelId',
        }),
    }),
    query: z.object({
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the epoch from which you want to start paging',
            in: 'query',
            name: 'offset',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .default('25')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of epoch to return. Maximum valid value is 25.',
            in: 'query',
            name: 'count',
            schema: { default: '25', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Learning Curve',
      content: { 'application/json': { schema: LearningCurveListSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionOcrRoute = createRoute({
  method: 'post',
  path: '/v2/vision/ocr',
  tags: ['Vision Prediction'],
  summary: 'Detect Text',
  description:
    'Returns a prediction from an OCR model for the specified image URL or local image file.',
  operationId: 'ocrMultipart',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of the model that makes the prediction. Valid values are OCRModel and tabulatev2.',
                  example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
                }),
              sampleContent: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Binary content of image file uploaded as multipart/form-data. Optional.',
                }),
              sampleId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
                }),
              sampleLocation: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL of the image file. Use this parameter when sending in a file from a web location. Optional.',
                }),
              task: z
                .string()
                .default('text')
                .exactOptional()
                .openapi({
                  description:
                    'Optional. Designates the type of data in the image. Default is text. Valid values: contact, table, and text.',
                  example: 'table',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OCR Result',
      content: { 'application/json': { schema: OCRPredictResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionPredictRoute = createRoute({
  method: 'post',
  path: '/v2/vision/predict',
  tags: ['Vision Prediction'],
  summary: 'Make Prediction',
  description: 'Returns a prediction from an image or multi-label model for the specified image.',
  operationId: 'predictMultipart',
  request: {
    body: {
      content: {
        'application/json': { schema: ImageClassificationRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              modelId: z
                .string()
                .openapi({
                  description: 'ID of the model that makes the prediction.',
                  example: 'WJH4YCA7YX4PCWVNCYNWYHBMY4',
                }),
              numResults: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({ description: 'Number of probabilities to return.', example: 3 }),
              sampleBase64Content: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The image contained in a base64 string.',
                  example: 'SomeBase64EncodedImage',
                }),
              sampleId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.',
                }),
              sampleLocation: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the image file.' }),
            })
            .openapi({ required: ['modelId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Prediction Result',
      content: { 'application/json': { schema: ImageClassificationResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionRetrainRoute = createRoute({
  method: 'post',
  path: '/v2/vision/retrain',
  tags: ['Vision Training'],
  summary: 'Retrain a Dataset',
  description:
    'Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.',
  operationId: 'retrain_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              algorithm: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the algorithm used to train the dataset. Optional. Use this parameter only when training a dataset with a type of image-detection. Valid values are object-detection-v1 and retail-execution.',
                  example: 'object-detection',
                }),
              epochs: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(1000),
                )
                .exactOptional()
                .openapi({
                  description: 'Number of training iterations for the neural network. Optional.',
                  example: 20,
                }),
              learningRate: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Specifies how much the gradient affects the optimization of the model at each time step. Optional.',
                  example: 0.0001,
                }),
              modelId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the model to be updated from the training.',
                  example: '7JXCXTRXTMNLJCEF2DR5CJ46QU',
                }),
              trainParams: z
                .object({
                  trainSplitRatio: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
                      example: 0.9,
                    }),
                  withFeedback: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify that feedback examples are included in the data to be trained to create the model.',
                    }),
                  withGlobalDatasetId: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      description:
                        'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'JSON that contains parameters that specify how the model is created',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const postV2VisionTrainRoute = createRoute({
  method: 'post',
  path: '/v2/vision/train',
  tags: ['Vision Training'],
  summary: 'Train a Dataset',
  description: 'Trains a dataset and creates a model.',
  operationId: 'train_1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              algorithm: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the algorithm used to train the dataset. Optional. Use this parameter only when training a dataset with a type of image-detection. Valid values are object-detection-v1 and retail-execution.',
                  example: 'object-detection',
                }),
              datasetId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'ID of the dataset to train.',
                  example: 57,
                }),
              epochs: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(1000),
                )
                .exactOptional()
                .openapi({
                  description: 'Number of training iterations for the neural network. Optional.',
                  example: 20,
                }),
              learningRate: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Specifies how much the gradient affects the optimization of the model at each time step. Optional.',
                  example: 0.0001,
                }),
              name: z
                .string()
                .max(180)
                .exactOptional()
                .openapi({ description: 'Name of the model. Maximum length is 180 characters.' }),
              trainParams: z
                .object({
                  trainSplitRatio: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify the ratio of data used to train the dataset and the data used to test the model.',
                      example: 0.9,
                    }),
                  withFeedback: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Lets you specify that feedback examples are included in the data to be trained to create the model.',
                    }),
                  withGlobalDatasetId: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      description:
                        'Lets you specify that a global dataset is used in addition to the specified dataset to create the model.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'JSON that contains parameters that specify how the model is created',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})

export const getV2VisionTrainModelIdRoute = createRoute({
  method: 'get',
  path: '/v2/vision/train/{modelId}',
  tags: ['Vision Training'],
  summary: 'Get Training Status',
  description:
    "Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.",
  operationId: 'getTrainStatusAndProgress_1',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { description: 'Model Id', example: 'SomeModelId', type: 'string' },
          },
          description: 'Model Id',
          example: 'SomeModelId',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Training Status',
      content: { 'application/json': { schema: TrainResponseSchema } },
    },
  },
  security: [{ bearer_token: [] }],
})
