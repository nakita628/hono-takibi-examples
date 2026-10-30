import { createRoute, z } from '@hono/zod-openapi'

const SchemasCollectionListItemSchema = z
  .object({
    description: z.string().openapi({ description: 'A description of the collection' }),
    name: z.string().openapi({ description: 'The name of the collection' }),
    slug: z.string().openapi({ description: 'The slug of the collection (lowercase with dashes)' }),
  })
  .openapi({ required: ['name', 'slug', 'description'] })
  .openapi('SchemasCollectionListItem')

const SchemasModelResponseSchema = z
  .object({
    cover_image_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ description: "A URL for the model's cover image" }),
    default_example: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: "The model's default example prediction" }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the model' }),
    github_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ description: "A URL for the model's source code on GitHub" }),
    is_official: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean indicating whether the model is officially maintained by Replicate. Official models are always on, have stable API interfaces, and predictable pricing.',
      }),
    latest_version: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: "The model's latest version" }),
    license_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ description: "A URL for the model's license" }),
    name: z.string().exactOptional().openapi({ description: 'The name of the model' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user or organization that owns the model' }),
    paper_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ description: "A URL for the model's paper" }),
    run_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of times the model has been run' }),
    url: z.url().exactOptional().openapi({ description: 'The URL of the model on Replicate' }),
    visibility: z
      .enum(['public', 'private'])
      .exactOptional()
      .openapi({ description: 'Whether the model is public or private' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasModelResponse')

const SchemasCollectionResponseSchema = z
  .object({
    description: z.string().openapi({ description: 'A description of the collection' }),
    full_description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The full description of the collection in markdown format' }),
    models: z
      .array(SchemasModelResponseSchema)
      .openapi({ description: 'The models in this collection' }),
    name: z.string().openapi({ description: 'The name of the collection' }),
    slug: z.string().openapi({ description: 'The slug of the collection (lowercase with dashes)' }),
  })
  .openapi({ required: ['name', 'slug', 'description', 'models'] })
  .openapi('SchemasCollectionResponse')

const SchemasDeploymentResponseSchema = z
  .object({
    current_release: z
      .object({
        configuration: z
          .object({
            hardware: z
              .string()
              .exactOptional()
              .openapi({ description: 'The SKU for the hardware used to run the model.' }),
            max_instances: z
              .int()
              .exactOptional()
              .openapi({ description: 'The maximum number of instances for scaling.' }),
            min_instances: z
              .int()
              .exactOptional()
              .openapi({ description: 'The minimum number of instances for scaling.' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        created_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The time the release was created.' }),
        created_by: z
          .object({
            avatar_url: z
              .url()
              .exactOptional()
              .openapi({ description: 'The avatar URL for the account that created the release.' }),
            github_url: z
              .url()
              .exactOptional()
              .openapi({ description: 'The GitHub URL of the account that created the release.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the account that created the release.' }),
            type: z
              .enum(['organization', 'user'])
              .openapi({
                description: 'The account type of the creator. Can be a user or an organization.',
              }),
            username: z
              .string()
              .openapi({ description: 'The username of the account that created the release.' }),
          })
          .exactOptional()
          .openapi({ required: ['type', 'username'] }),
        model: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The model identifier string in the format of `{model_owner}/{model_name}`.',
          }),
        number: z.int().exactOptional().openapi({ description: 'The release number.' }),
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'The ID of the model version used in the release.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional().openapi({ description: 'The name of the deployment.' }),
    owner: z.string().exactOptional().openapi({ description: 'The owner of the deployment.' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasDeploymentResponse')

const SchemasFileResponseSchema = z
  .object({
    checksums: z
      .object({
        sha256: z
          .string()
          .exactOptional()
          .openapi({
            description: 'SHA256 checksum of the file',
            example: 'f047f8e745f9996c6e386064e06cb2007b8e6bc0a968a334fc0d2b2d64012066',
          }),
      })
      .openapi({
        description: 'A dictionary of checksums for the file keyed by the algorithm name',
        required: [],
      }),
    content_type: z
      .string()
      .openapi({ description: 'The content / MIME type of the file', example: 'application/zip' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the file was created',
        example: '2024-02-21T12:54:18.578761Z',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the file expires', example: '2024-02-21T13:54:18.578761Z' }),
    id: z
      .string()
      .openapi({
        description: 'A unique, randomly-generated identifier for the file resource',
        example: 'cneqzikepnug6xezperrr4z55o',
      }),
    metadata: z
      .object({})
      .openapi({
        description: 'Metadata provided by user when the file was created',
        example: { customer_reference_id: 123 },
      }),
    size: z.int().openapi({ description: 'The length of the file in bytes', example: 69420 }),
    urls: z
      .object({
        get: z
          .url()
          .exactOptional()
          .openapi({
            description: 'A URL to the file resource',
            example: 'https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o',
          }),
      })
      .openapi({
        description: 'A dictionary of URLs associated with the file resource',
        required: [],
      }),
  })
  .openapi({
    description: 'A file resource',
    required: [
      'id',
      'urls',
      'content_type',
      'size',
      'checksums',
      'metadata',
      'created_at',
      'expires_at',
    ],
  })
  .openapi('SchemasFileResponse')

const SchemasPageResponseSchema = z
  .object({
    href: z.string().openapi({ description: 'URL path to the page' }),
    name: z.string().openapi({ description: 'Title of the page' }),
  })
  .openapi({ required: ['name', 'href'] })
  .openapi('SchemasPageResponse')

const SchemasPaginatedCollectionResponseSchema = z
  .object({
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the next page of collection objects, if any' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A URL pointing to the previous page of collection objects, if any',
      }),
    results: z
      .array(SchemasCollectionListItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of collection objects' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasPaginatedCollectionResponse')

const SchemasPaginatedModelResponseSchema = z
  .object({
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the next page of model objects, if any' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the previous page of model objects, if any' }),
    results: z
      .array(SchemasModelResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of model objects' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasPaginatedModelResponse')

const SchemasPredictionResponseSchema = z
  .object({
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time that the model completed the prediction and all outputs were uploaded',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The time that the prediction was created' }),
    data_removed: z
      .boolean()
      .openapi({ description: 'Whether the prediction output has been deleted' }),
    deadline: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The absolute time at which the prediction will be automatically canceled if it has not completed',
      }),
    deployment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the deployment that created the prediction' }),
    error: z
      .string()
      .nullable()
      .openapi({ description: 'An error string if the model status is `"failed"`' }),
    id: z.string(),
    input: z.looseObject({}).openapi({ description: 'The prediction input' }),
    logs: z.string().exactOptional().openapi({ description: 'The log output from the model' }),
    metrics: z
      .looseObject({
        total_time: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The total time, in seconds, that the prediction took to complete',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Additional metrics associated with the prediction', required: [] }),
    model: z.string().openapi({ description: 'The name of the model that created the prediction' }),
    output: z
      .any()
      .openapi({
        description:
          'The prediction output, which can be any JSON-serializable value, depending on the model',
      }),
    source: z
      .enum(['web', 'api'])
      .exactOptional()
      .openapi({ description: 'Indicates how the prediction was created' }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time that the model began the prediction' }),
    status: z
      .enum(['starting', 'processing', 'succeeded', 'failed', 'canceled', 'aborted'])
      .openapi({
        description:
          'The prediction status. `canceled` means the prediction was canceled (either by the user or because it reached its deadline while running). `aborted` means the prediction was terminated before it started running (for example, when a deadline is reached before the prediction starts).\n',
      }),
    urls: z
      .object({
        cancel: z.url().openapi({ description: 'Cancel the prediction via API' }),
        get: z
          .url()
          .openapi({ description: 'Retrieve the latest state of the prediction via API' }),
        stream: z
          .url()
          .exactOptional()
          .openapi({
            description: 'An event source to stream the output of the prediction via API',
          }),
        web: z.url().openapi({ description: 'View the prediction in a browser' }),
      })
      .openapi({
        description: 'URLs for working with the prediction',
        required: ['web', 'get', 'cancel'],
      }),
    version: z.xor([
      z
        .string()
        .openapi({ description: 'The ID of the model version that created the prediction' }),
      z
        .literal('hidden')
        .openapi({ description: 'The model does not support versions, used by official models.' }),
    ]),
  })
  .openapi({
    required: [
      'id',
      'model',
      'version',
      'input',
      'output',
      'data_removed',
      'error',
      'status',
      'created_at',
      'urls',
    ],
  })
  .openapi('SchemasPredictionResponse')

const SchemasPaginatedPredictionResponseSchema = z
  .object({
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the next page of prediction objects, if any' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A URL pointing to the previous page of prediction objects, if any',
      }),
    results: z
      .array(SchemasPredictionResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of prediction objects' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasPaginatedPredictionResponse')

const SchemasVersionResponseSchema = z
  .object({
    cog_version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The version of Cog used to create this version' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the version was created' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the version' }),
    openapi_schema: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: "The OpenAPI schema for the model's inputs and outputs" }),
  })
  .openapi({ required: [] })
  .openapi('SchemasVersionResponse')

const SchemasPaginatedVersionResponseSchema = z
  .object({
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the next page of version objects, if any' }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to the previous page of version objects, if any' }),
    results: z
      .array(SchemasVersionResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of version objects' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasPaginatedVersionResponse')

const SchemasPredictionRequestSchema = z
  .strictObject({
    input: z
      .object({})
      .openapi({
        description:
          "The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the \"API\" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.\n\nFiles should be passed as HTTP URLs or data URLs.\n\nUse an HTTP URL when:\n\n- you have a large file > 256kb\n- you want to be able to use the file multiple times\n- you want your prediction metadata to be associable with your input files\n\nUse a data URL when:\n\n- you have a small file <= 256kb\n- you don't want to upload and host the file somewhere\n- you don't need to use the file again (Replicate will not store it)\n",
        example: { prompt: 'Tell me a joke', system_prompt: 'You are a helpful assistant' },
      }),
    stream: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '**This field is deprecated.**\n\nRequest a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).\n\nThis field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.\n',
      }),
    webhook: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.\n',
        example: 'https://example.com/my-webhook-handler',
      }),
    webhook_events_filter: z
      .array(z.enum(['start', 'output', 'logs', 'completed']))
      .exactOptional()
      .openapi({
        description:
          'By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:\n\n- `start`: immediately on prediction start\n- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)\n- `logs`: each time log output is generated by a prediction\n- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)\n\nFor example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:\n\n```json\n{\n  "input": {\n    "text": "Alice"\n  },\n  "webhook": "https://example.com/my-webhook",\n  "webhook_events_filter": ["start", "completed"]\n}\n```\n\nRequests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they\'ll always be sent regardless of throttling.\n',
        example: ['start', 'completed'],
      }),
  })
  .openapi({ required: ['input'] })
  .openapi('SchemasPredictionRequest')

const SchemasSearchCollectionResponseSchema = z
  .object({
    description: z.string().openapi({ description: 'A description of the collection' }),
    models: z
      .array(z.string().openapi({ description: 'Model name in owner/name format' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of model names in the collection' }),
    name: z.string().openapi({ description: 'The name of the collection' }),
    slug: z.string().openapi({ description: 'The slug of the collection (lowercase with dashes)' }),
  })
  .openapi({ required: ['name', 'slug', 'description'] })
  .openapi('SchemasSearchCollectionResponse')

const SchemasSearchModelMetadataResponseSchema = z
  .object({
    generated_description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'AI-generated detailed description of the model' }),
    score: z.number().nullable().exactOptional().openapi({ description: 'Search relevance score' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of descriptive tags for the model' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasSearchModelMetadataResponse')

const SchemasSearchResponseSchema = z
  .object({
    collections: z
      .array(SchemasSearchCollectionResponseSchema)
      .openapi({ description: 'Array of collections that match the search query' }),
    models: z
      .array(
        z
          .object({
            metadata: SchemasSearchModelMetadataResponseSchema,
            model: SchemasModelResponseSchema,
          })
          .openapi({ required: ['model', 'metadata'] }),
      )
      .openapi({
        description:
          'Array of models that match the search query, each containing model data and extra metadata',
      }),
    pages: z
      .array(SchemasPageResponseSchema)
      .openapi({
        description: 'Array of Replicate documentation pages that match the search query',
      }),
    query: z.string().openapi({ description: 'The search term that was evaluated' }),
  })
  .openapi({ required: ['query', 'models', 'collections', 'pages'] })
  .openapi('SchemasSearchResponse')

const SchemasTrainingRequestSchema = z
  .object({
    destination: z
      .string()
      .openapi({
        description:
          'A string representing the desired model to push to in the format `{destination_model_owner}/{destination_model_name}`. This should be an existing model owned by the user or organization making the API request. If the destination is invalid, the server will return an appropriate 4XX response.\n',
      }),
    input: z
      .object({})
      .openapi({
        description: "An object containing inputs to the Cog model's `train()` function.\n",
      }),
    webhook: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An HTTPS URL for receiving a webhook when the training completes. The webhook will be a POST request where the request body is the same as the response body of the [get training](#trainings.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.',
      }),
    webhook_events_filter: z
      .array(z.enum(['start', 'output', 'logs', 'completed']))
      .exactOptional()
      .openapi({
        description:
          'By default, we will send requests to your webhook URL whenever there are new outputs or the training has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the training request:\n\n- `start`: immediately on training start\n- `output`: each time a training generates an output (note that trainings can generate multiple outputs)\n- `logs`: each time log output is generated by a training\n- `completed`: when the training reaches a terminal state (succeeded/canceled/failed)\n\nFor example, if you only wanted requests to be sent at the start and end of the training, you would provide:\n\n```json\n{\n  "destination": "my-organization/my-model",\n  "input": {\n    "text": "Alice"\n  },\n  "webhook": "https://example.com/my-webhook",\n  "webhook_events_filter": ["start", "completed"]\n}\n```\n\nRequests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they\'ll always be sent regardless of throttling.\n',
      }),
  })
  .openapi({ required: ['destination', 'input'] })
  .openapi('SchemasTrainingRequest')

const SchemasTrainingResponseSchema = z
  .object({
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the training completed' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the training was created' }),
    error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Error message if the training failed' }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of the training' }),
    input: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The input parameters used for the training' }),
    logs: z.string().exactOptional().openapi({ description: 'The logs from the training process' }),
    metrics: z
      .object({
        predict_time: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The amount of CPU or GPU time, in seconds, that the training used while running',
          }),
        total_time: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The total time, in seconds, that the training took to complete',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Metrics about the training process', required: [] }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the model in the format owner/name' }),
    output: z
      .object({
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'The version of the model created by the training' }),
        weights: z
          .string()
          .exactOptional()
          .openapi({ description: 'The weights of the trained model' }),
      })
      .exactOptional()
      .openapi({ description: 'The output of the training process', required: [] }),
    source: z
      .enum(['web', 'api'])
      .exactOptional()
      .openapi({ description: 'How the training was created' }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the training started' }),
    status: z
      .enum(['starting', 'processing', 'succeeded', 'failed', 'canceled', 'aborted'])
      .exactOptional()
      .openapi({
        description:
          'The current status of the training. `canceled` means the training was canceled (either by the user or because it reached its deadline while running). `aborted` means the training was terminated before it started running (for example, when a deadline is reached before the training starts).\n',
      }),
    urls: z
      .object({
        cancel: z.url().exactOptional().openapi({ description: 'URL to cancel the training' }),
        get: z.url().exactOptional().openapi({ description: 'URL to get the training details' }),
      })
      .exactOptional()
      .openapi({ description: 'URLs for interacting with the training', required: [] }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the model version used for training' }),
  })
  .openapi({ required: [] })
  .openapi('SchemasTrainingResponse')

const SchemasVersionPredictionRequestSchema = z
  .strictObject({
    input: z
      .object({})
      .openapi({
        description:
          "The model's input as a JSON object. The input schema depends on what model you are running. To see the available inputs, click the \"API\" tab on the model you are running or [get the model version](#models.versions.get) and look at its `openapi_schema` property. For example, [stability-ai/sdxl](https://replicate.com/stability-ai/sdxl) takes `prompt` as an input.\n\nFiles should be passed as HTTP URLs or data URLs.\n\nUse an HTTP URL when:\n\n- you have a large file > 256kb\n- you want to be able to use the file multiple times\n- you want your prediction metadata to be associable with your input files\n\nUse a data URL when:\n\n- you have a small file <= 256kb\n- you don't want to upload and host the file somewhere\n- you don't need to use the file again (Replicate will not store it)\n",
        example: { text: 'Alice' },
      }),
    stream: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '**This field is deprecated.**\n\nRequest a URL to receive streaming output using [server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).\n\nThis field is no longer needed as the returned prediction will always have a `stream` entry in its `urls` property if the model supports streaming.\n',
      }),
    version: z
      .string()
      .openapi({
        description:
          'The identifier for the model or model version that you want to run. This can be specified in a few different formats:\n\n- `{owner_name}/{model_name}` - Use this format for [official models](https://replicate.com/docs/topics/models/official-models). For example, `black-forest-labs/flux-schnell`. For all other models, the specific version is required.\n- `{owner_name}/{model_name}:{version_id}` - The owner and model name, plus the full 64-character version ID. For example, `replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`.\n- `{version_id}` - Just the 64-character version ID. For example, `9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426`\n',
        example:
          'replicate/hello-world:9dcd6d78e7c6560c340d916fe32e9f24aabfa331e5cce95fe31f77fb03121426',
      }),
    webhook: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An HTTPS URL for receiving a webhook when the prediction has new output. The webhook will be a POST request where the request body is the same as the response body of the [get prediction](#predictions.get) operation. If there are network problems, we will retry the webhook a few times, so make sure it can be safely called more than once. Replicate will not follow redirects when sending webhook requests to your service, so be sure to specify a URL that will resolve without redirecting.\n',
        example: 'https://example.com/my-webhook-handler',
      }),
    webhook_events_filter: z
      .array(z.enum(['start', 'output', 'logs', 'completed']))
      .exactOptional()
      .openapi({
        description:
          'By default, we will send requests to your webhook URL whenever there are new outputs or the prediction has finished. You can change which events trigger webhook requests by specifying `webhook_events_filter` in the prediction request:\n\n- `start`: immediately on prediction start\n- `output`: each time a prediction generates an output (note that predictions can generate multiple outputs)\n- `logs`: each time log output is generated by a prediction\n- `completed`: when the prediction reaches a terminal state (succeeded/canceled/failed)\n\nFor example, if you only wanted requests to be sent at the start and end of the prediction, you would provide:\n\n```json\n{\n  "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",\n  "input": {\n    "text": "Alice"\n  },\n  "webhook": "https://example.com/my-webhook",\n  "webhook_events_filter": ["start", "completed"]\n}\n```\n\nRequests for event types `output` and `logs` will be sent at most once every 500ms. If you request `start` and `completed` webhooks, then they\'ll always be sent regardless of throttling.\n',
        example: ['start', 'completed'],
      }),
  })
  .openapi({ required: ['version', 'input'] })
  .openapi('SchemasVersionPredictionRequest')

const ParametersCancelAfterHeaderParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The maximum time the prediction can run before it is automatically canceled. The lifetime is measured from when the prediction is created.\n\nThe duration can be specified as string with an optional unit suffix:\n- `s` for seconds (e.g., `30s`, `90s`)\n- `m` for minutes (e.g., `5m`, `15m`)\n- `h` for hours (e.g., `1h`, `2h30m`)\n- defaults to seconds if no unit suffix is provided (e.g. `30` is the same as `30s`)\n\nYou can combine units for more precision (e.g., `1h30m45s`).\n\nThe minimum allowed duration is 5 seconds.\n',
      in: 'header',
      name: 'Cancel-After',
      schema: { example: '5m', type: 'string' },
      required: false,
    },
    example: '5m',
  })

const ParametersPreferHeaderParamsSchema = z
  .string()
  .regex(/^wait(=([1-9]|[1-9][0-9]|60))?$/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Leave the request open and wait for the model to finish generating output. Set to `wait=n` where n is a number of seconds between 1 and 60.\n\nSee [sync mode](https://replicate.com/docs/topics/predictions/create-a-prediction#sync-mode) for more information.\n',
      in: 'header',
      name: 'Prefer',
      schema: { example: 'wait=5', pattern: '^wait(=([1-9]|[1-9][0-9]|60))?$', type: 'string' },
      required: false,
    },
    example: 'wait=5',
  })

const BearerAuthSecurityScheme = {
  bearerFormat:
    'All API requests must include a valid API token in the `Authorization` request header. The token must be prefixed by "Bearer", followed by a space and the token value.\nExample: `Authorization: Bearer r8_Hw***********************************`\nFind your tokens at https://replicate.com/account/api-tokens\n',
  scheme: 'bearer',
  type: 'http',
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  summary: 'Get the authenticated account',
  description:
    'Returns information about the user or organization associated with the provided API token.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/account\n```\n\nThe response will be a JSON object describing the account:\n\n```json\n{\n  "type": "organization",\n  "username": "acme",\n  "name": "Acme Corp, Inc.",\n  "github_url": "https://github.com/acme",\n}\n```\n',
  operationId: 'account.get',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              avatar_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'The avatar URL for the account.' }),
              github_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'The GitHub URL of the account.' }),
              name: z.string().exactOptional().openapi({ description: 'The name of the account.' }),
              type: z
                .enum(['organization', 'user'])
                .openapi({ description: 'The account type. Can be a user or an organization.' }),
              username: z.string().openapi({ description: 'The username of the account.' }),
            })
            .openapi({ required: ['type', 'username'] }),
        },
      },
    },
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  summary: 'List collections of models',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/collections\n```\n\nThe response will be a paginated JSON list of collection objects:\n\n```json\n{\n  "next": "null",\n  "previous": null,\n  "results": [\n    {\n      "name": "Super resolution",\n      "slug": "super-resolution",\n      "description": "Upscaling models that create high-quality images from low-quality images."\n    }\n  ]\n}\n```\n',
  operationId: 'collections.list',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPaginatedCollectionResponseSchema } },
    },
  },
})

export const getCollectionsCollectionSlugRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_slug}',
  summary: 'Get a collection of models',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/collections/super-resolution\n```\n\nThe response will be a collection object with a nested list of the models in that collection:\n\n```json\n{\n  "name": "Super resolution",\n  "slug": "super-resolution",\n  "description": "Upscaling models that create high-quality images from low-quality images.",\n  "full_description": "## Overview\\n\\nThese models generate high-quality images from low-quality images. Many of these models are based on **advanced upscaling techniques**.\\n\\n### Key Features\\n\\n- Enhance image resolution\\n- Restore fine details\\n- Improve overall image quality",\n  "models": [...]\n}\n```\n',
  operationId: 'collections.get',
  request: {
    params: z.object({
      collection_slug: z
        .string()
        .openapi({
          param: {
            description:
              'The slug of the collection, like `super-resolution` or `image-restoration`. See [replicate.com/collections](https://replicate.com/collections).\n',
            in: 'path',
            name: 'collection_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasCollectionResponseSchema } },
    },
  },
})

export const getDeploymentsRoute = createRoute({
  method: 'get',
  path: '/deployments',
  summary: 'List deployments',
  description:
    'Get a list of deployments associated with the current account, including the latest release configuration for each deployment.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/deployments\n```\n\nThe response will be a paginated JSON array of deployment objects, sorted with the most recent deployment first:\n\n```json\n{\n  "next": "http://api.replicate.com/v1/deployments?cursor=cD0yMDIzLTA2LTA2KzIzJTNBNDAlM0EwOC45NjMwMDAlMkIwMCUzQTAw",\n  "previous": null,\n  "results": [\n    {\n      "owner": "replicate",\n      "name": "my-app-image-generator",\n      "current_release": {\n        "number": 1,\n        "model": "stability-ai/sdxl",\n        "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n        "created_at": "2024-02-15T16:32:57.018467Z",\n        "created_by": {\n          "type": "organization",\n          "username": "acme",\n          "name": "Acme Corp, Inc.",\n          "avatar_url": "https://cdn.replicate.com/avatars/acme.png",\n          "github_url": "https://github.com/acme"\n        },\n        "configuration": {\n          "hardware": "gpu-t4",\n          "min_instances": 1,\n          "max_instances": 5\n        }\n      }\n    }\n  ]\n}\n```\n',
  operationId: 'deployments.list',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              next: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'A URL pointing to the next page of deployment objects if any',
                }),
              previous: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'A URL pointing to the previous page of deployment objects if any',
                }),
              results: z
                .array(SchemasDeploymentResponseSchema)
                .exactOptional()
                .openapi({ description: 'An array containing a page of deployment objects' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postDeploymentsRoute = createRoute({
  method: 'post',
  path: '/deployments',
  summary: 'Create a deployment',
  description:
    'Create a new deployment:\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -X POST \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "name": "my-app-image-generator",\n        "model": "stability-ai/sdxl",\n        "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n        "hardware": "gpu-t4",\n        "min_instances": 0,\n        "max_instances": 3\n      }\' \\\n  https://api.replicate.com/v1/deployments\n```\n\nThe response will be a JSON object describing the deployment:\n\n```json\n{\n  "owner": "acme",\n  "name": "my-app-image-generator",\n  "current_release": {\n    "number": 1,\n    "model": "stability-ai/sdxl",\n    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n    "created_at": "2024-02-15T16:32:57.018467Z",\n    "created_by": {\n      "type": "organization",\n      "username": "acme",\n      "name": "Acme Corp, Inc.",\n      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",\n      "github_url": "https://github.com/acme"\n    },\n    "configuration": {\n      "hardware": "gpu-t4",\n      "min_instances": 1,\n      "max_instances": 5\n    }\n  }\n}\n```\n',
  operationId: 'deployments.create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hardware: z
                .string()
                .openapi({
                  description:
                    'The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.',
                }),
              max_instances: z
                .int()
                .min(0)
                .max(20)
                .openapi({ description: 'The maximum number of instances for scaling.' }),
              min_instances: z
                .int()
                .min(0)
                .max(5)
                .openapi({ description: 'The minimum number of instances for scaling.' }),
              model: z
                .string()
                .openapi({
                  description:
                    'The full name of the model that you want to deploy e.g. stability-ai/sdxl.',
                }),
              name: z.string().openapi({ description: 'The name of the deployment.' }),
              version: z
                .string()
                .openapi({
                  description:
                    'The 64-character string ID of the model version that you want to deploy.',
                }),
            })
            .openapi({
              required: ['name', 'model', 'version', 'hardware', 'min_instances', 'max_instances'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasDeploymentResponseSchema } },
    },
  },
})

export const getDeploymentsDeploymentOwnerDeploymentNameRoute = createRoute({
  method: 'get',
  path: '/deployments/{deployment_owner}/{deployment_name}',
  summary: 'Get a deployment',
  description:
    'Get information about a deployment by name including the current release.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/deployments/replicate/my-app-image-generator\n```\n\nThe response will be a JSON object describing the deployment:\n\n```json\n{\n  "owner": "acme",\n  "name": "my-app-image-generator",\n  "current_release": {\n    "number": 1,\n    "model": "stability-ai/sdxl",\n    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n    "created_at": "2024-02-15T16:32:57.018467Z",\n    "created_by": {\n      "type": "organization",\n      "username": "acme",\n      "name": "Acme Corp, Inc.",\n      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",\n      "github_url": "https://github.com/acme"\n    },\n    "configuration": {\n      "hardware": "gpu-t4",\n      "min_instances": 1,\n      "max_instances": 5\n    }\n  }\n}\n```\n',
  operationId: 'deployments.get',
  request: {
    params: z.object({
      deployment_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the deployment.\n',
            in: 'path',
            name: 'deployment_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deployment_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the deployment.\n',
            in: 'path',
            name: 'deployment_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasDeploymentResponseSchema } },
    },
  },
})

export const deleteDeploymentsDeploymentOwnerDeploymentNameRoute = createRoute({
  method: 'delete',
  path: '/deployments/{deployment_owner}/{deployment_name}',
  summary: 'Delete a deployment',
  description:
    'Delete a deployment\n\nDeployment deletion has some restrictions:\n\n- You can only delete deployments that have been offline and unused for at least 15 minutes.\n\nExample cURL request:\n\n```command\ncurl -s -X DELETE \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/deployments/acme/my-app-image-generator\n```\n\nThe response will be an empty 204, indicating the deployment has been deleted.\n',
  operationId: 'deployments.delete',
  request: {
    params: z.object({
      deployment_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the deployment.\n',
            in: 'path',
            name: 'deployment_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deployment_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the deployment.\n',
            in: 'path',
            name: 'deployment_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const patchDeploymentsDeploymentOwnerDeploymentNameRoute = createRoute({
  method: 'patch',
  path: '/deployments/{deployment_owner}/{deployment_name}',
  summary: 'Update a deployment',
  description:
    'Update properties of an existing deployment, including hardware, min/max instances, and the deployment\'s underlying model [version](https://replicate.com/docs/how-does-replicate-work#versions).\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -X PATCH \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"min_instances": 3, "max_instances": 10}\' \\\n  https://api.replicate.com/v1/deployments/acme/my-app-image-generator\n```\n\nThe response will be a JSON object describing the deployment:\n\n```json\n{\n  "owner": "acme",\n  "name": "my-app-image-generator",\n  "current_release": {\n    "number": 2,\n    "model": "stability-ai/sdxl",\n    "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n    "created_at": "2024-02-15T16:32:57.018467Z",\n    "created_by": {\n      "type": "organization",\n      "username": "acme",\n      "name": "Acme Corp, Inc.",\n      "avatar_url": "https://cdn.replicate.com/avatars/acme.png",\n      "github_url": "https://github.com/acme"\n    },\n    "configuration": {\n      "hardware": "gpu-t4",\n      "min_instances": 3,\n      "max_instances": 10\n    }\n  }\n}\n```\n\nUpdating any deployment properties will increment the `number` field of the `current_release`.\n',
  operationId: 'deployments.update',
  request: {
    params: z.object({
      deployment_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the deployment.\n',
            in: 'path',
            name: 'deployment_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deployment_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the deployment.\n',
            in: 'path',
            name: 'deployment_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hardware: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.',
                }),
              max_instances: z
                .int()
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({ description: 'The maximum number of instances for scaling.' }),
              min_instances: z
                .int()
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The minimum number of instances for scaling.' }),
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the model version that you want to deploy' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasDeploymentResponseSchema } },
    },
  },
})

export const postDeploymentsDeploymentOwnerDeploymentNamePredictionsRoute = createRoute({
  method: 'post',
  path: '/deployments/{deployment_owner}/{deployment_name}/predictions',
  summary: 'Create a prediction using a deployment',
  description:
    'Create a prediction for the deployment and inputs you provide.\n\nExample cURL request:\n\n```console\ncurl -s -X POST -H \'Prefer: wait\' \\\n  -d \'{"input": {"prompt": "A photo of a bear riding a bicycle over the moon"}}\' \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H \'Content-Type: application/json\' \\\n  https://api.replicate.com/v1/deployments/acme/my-app-image-generator/predictions\n```\n\nThe request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.\n\nFor a complete overview of the `deployments.predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.\n',
  operationId: 'deployments.predictions.create',
  request: {
    params: z.object({
      deployment_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the deployment.\n',
            in: 'path',
            name: 'deployment_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deployment_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the deployment.\n',
            in: 'path',
            name: 'deployment_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Prefer: ParametersPreferHeaderParamsSchema,
      'Cancel-After': ParametersCancelAfterHeaderParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SchemasPredictionRequestSchema } } },
  },
  responses: {
    201: {
      description:
        'Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
    202: {
      description: 'Prediction has been created but does not yet have all outputs',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
  },
})

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/files',
  summary: 'List files',
  description:
    'Get a paginated list of all files created by the user or organization associated with the provided API token.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Token $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/files\n```\n\nThe response will be a paginated JSON array of file objects, sorted with the most recent file first.\n',
  operationId: 'files.list',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(SchemasFileResponseSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  summary: 'Create a file',
  description:
    "Create a file by uploading its content and optional metadata.\n\nExample cURL request:\n\n```console\ncurl -X POST https://api.replicate.com/v1/files \\\n  -H \"Authorization: Token $REPLICATE_API_TOKEN\" \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'content=@/path/to/archive.zip;type=application/zip;filename=example.zip' \\\n  -F 'metadata={\"customer_reference_id\": 123};type=application/json'\n```\n\nThe request must include:\n- `content`: The file content (required)\n- `type`: The content / MIME type for the file (defaults to `application/octet-stream`)\n- `filename`: The filename (required, ≤ 255 bytes, valid UTF-8)\n- `metadata`: User-provided metadata associated with the file (defaults to `{}`, must be valid JSON)\n",
  operationId: 'files.create',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              content: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'The file content' }),
              filename: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'The filename' }),
              metadata: z
                .object({})
                .default({})
                .exactOptional()
                .openapi({ description: 'User-provided metadata associated with the file' }),
              type: z
                .string()
                .default('application/octet-stream')
                .exactOptional()
                .openapi({ description: 'The content / MIME type for the file' }),
            })
            .openapi({ required: ['content'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'File has been created',
      content: { 'application/json': { schema: SchemasFileResponseSchema } },
    },
    413: {
      description: 'Content Too Large',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'Files must be less than 100MB in size' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/files/{file_id}',
  summary: 'Get a file',
  description:
    'Get the details of a file.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Token $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o\n```\n',
  operationId: 'files.get',
  request: {
    params: z.object({
      file_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file to get',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasFileResponseSchema } },
    },
    404: {
      description: 'File not found',
      content: {
        'application/problem+json': {
          schema: z
            .object({ detail: z.string().exactOptional().openapi({ example: 'File not found' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteFilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/files/{file_id}',
  summary: 'Delete a file',
  description:
    'Delete a file. Once a file has been deleted, subsequent requests to the file resource return 404 Not found.\n\nExample cURL request:\n\n```console\ncurl -X DELETE \\\n  -H "Authorization: Token $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o\n```\n',
  operationId: 'files.delete',
  request: {
    params: z.object({
      file_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file to delete',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'File has been deleted' },
    404: {
      description: 'File not found',
      content: {
        'application/problem+json': {
          schema: z
            .object({ detail: z.string().exactOptional().openapi({ example: 'File not found' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getFilesFileIdDownloadRoute = createRoute({
  method: 'get',
  path: '/files/{file_id}/download',
  summary: 'Download a file',
  description:
    'Download a file by providing the file owner, access expiry, and a valid signature.\n\nExample cURL request:\n\n```console\ncurl -X GET "https://api.replicate.com/v1/files/cneqzikepnug6xezperrr4z55o/download?expiry=1708515345&owner=mattt&signature=zuoghqlrcnw8YHywkpaXQlHsVhWen%2FDZ4aal76dLiOo%3D"\n```\n',
  operationId: 'files.download',
  request: {
    params: z.object({
      file_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file to download',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      owner: z
        .string()
        .openapi({
          param: {
            description: 'The username of the user or organization that uploaded the file',
            in: 'query',
            name: 'owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      expiry: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'A Unix timestamp with expiration date of this download URL',
            in: 'query',
            name: 'expiry',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      signature: z
        .string()
        .openapi({
          param: {
            description:
              "A base64-encoded HMAC-SHA256 checksum of the string '{owner} {id} {expiry}' generated with the Files API signing secret",
            in: 'query',
            name: 'signature',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/problem+json': {
          schema: z
            .object({ detail: z.string().exactOptional().openapi({ example: 'File not found' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getHardwareRoute = createRoute({
  method: 'get',
  path: '/hardware',
  summary: 'List available hardware for models',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/hardware\n```\n\nThe response will be a JSON array of hardware objects:\n\n```json\n[\n    {"name": "CPU", "sku": "cpu"},\n    {"name": "Nvidia T4 GPU", "sku": "gpu-t4"},\n    {"name": "Nvidia A40 GPU", "sku": "gpu-a40-small"},\n    {"name": "Nvidia A40 (Large) GPU", "sku": "gpu-a40-large"},\n]\n```\n',
  operationId: 'hardware.list',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the hardware.' }),
                sku: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The SKU of the hardware.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getModelsRoute = createRoute({
  method: 'get',
  path: '/models',
  summary: 'List public models',
  description:
    'Get a paginated list of public models.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models\n```\n\nThe response will be a pagination object containing a list of model objects.\n\nSee the [`models.get`](#models.get) docs for more details about the model object.\n\n## Sorting\n\nYou can sort the results using the `sort_by` and `sort_direction` query parameters.\n\nFor example, to get the most recently created models:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  "https://api.replicate.com/v1/models?sort_by=model_created_at&sort_direction=desc"\n```\n\nAvailable sorting options:\n- `model_created_at`: Sort by when the model was first created\n- `latest_version_created_at`: Sort by when the model\'s latest version was created (default)\n\nSort direction can be `asc` (ascending) or `desc` (descending, default).\n',
  operationId: 'models.list',
  request: {
    query: z.object({
      sort_by: z
        .enum(['model_created_at', 'latest_version_created_at'])
        .default('latest_version_created_at')
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort models by. Defaults to `latest_version_created_at`.\n',
            in: 'query',
            name: 'sort_by',
            schema: {
              default: 'latest_version_created_at',
              enum: ['model_created_at', 'latest_version_created_at'],
              type: 'string',
            },
            required: false,
          },
        }),
      sort_direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction. Defaults to `desc` (descending, newest first).\n',
            in: 'query',
            name: 'sort_direction',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPaginatedModelResponseSchema } },
    },
  },
})

export const postModelsRoute = createRoute({
  method: 'post',
  path: '/models',
  summary: 'Create a model',
  description:
    'Create a model.\n\nExample cURL request:\n\n```console\ncurl -s -X POST \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"owner": "alice", "name": "hot-dog-detector", "description": "Detect hot dogs in images", "visibility": "public", "hardware": "cpu"}\' \\\n  https://api.replicate.com/v1/models\n```\n\nThe response will be a model object in the following format:\n\n```json\n{\n  "url": "https://replicate.com/alice/hot-dog-detector",\n  "owner": "alice",\n  "name": "hot-dog-detector",\n  "description": "Detect hot dogs in images",\n  "visibility": "public",\n  "github_url": null,\n  "paper_url": null,\n  "license_url": null,\n  "run_count": 0,\n  "cover_image_url": null,\n  "default_example": null,\n  "latest_version": null,\n}\n```\n\nNote that there is a limit of 1,000 models per account. For most purposes, we recommend using a single model and pushing new [versions](https://replicate.com/docs/how-does-replicate-work#versions) of the model as you make changes to it.\n',
  operationId: 'models.create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cover_image_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's cover image. This should be an image file.",
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A description of the model.',
                  example: 'Detect hot dogs in images',
                }),
              github_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's source code on GitHub.",
                  example: 'https://github.com/alice/hot-dog-detector',
                }),
              hardware: z
                .string()
                .openapi({
                  description:
                    'The SKU for the hardware used to run the model. Possible values can be retrieved from the `hardware.list` endpoint.',
                  example: 'cpu',
                }),
              license_url: z
                .string()
                .exactOptional()
                .openapi({ description: "A URL for the model's license." }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the model. This must be unique among all models owned by the user or organization.',
                  example: 'hot-dog-detector',
                }),
              owner: z
                .string()
                .openapi({
                  description:
                    'The name of the user or organization that will own the model. This must be the same as the user or organization that is making the API request. In other words, the API token used in the request must belong to this user or organization.',
                  example: 'alice',
                }),
              paper_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's paper.",
                  example: 'https://arxiv.org/abs/2504.17639',
                }),
              visibility: z
                .enum(['public', 'private'])
                .openapi({
                  description:
                    'Whether the model should be public or private. A public model can be viewed and run by anyone, whereas a private model can be viewed and run only by the user or organization members that own the model.',
                  example: 'public',
                }),
            })
            .openapi({ required: ['owner', 'name', 'visibility', 'hardware'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasModelResponseSchema } },
    },
  },
})

export const queryModelsRoute = createRoute({
  method: 'query',
  path: '/models',
  summary: 'Search public models',
  description:
    'Get a list of public models matching a search query.\n\nExample cURL request:\n\n```console\ncurl -s -X QUERY \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H "Content-Type: text/plain" \\\n  -d "hello" \\\n  https://api.replicate.com/v1/models\n```\n\nThe response will be a paginated JSON object containing an array of model objects.\n\nSee the [`models.get`](#models.get) docs for more details about the model object.\n',
  operationId: 'models.search',
  request: {
    body: {
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The search query' }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              next: z
                .string()
                .nullable()
                .openapi({
                  description: 'A URL pointing to the next page of model objects, if any',
                }),
              previous: z
                .string()
                .nullable()
                .openapi({
                  description: 'A URL pointing to the previous page of model objects, if any',
                }),
              results: z
                .array(
                  z
                    .object({
                      cover_image_url: z
                        .url()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "A URL for the model's cover image" }),
                      default_example: z
                        .object({})
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "The model's default example prediction" }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A description of the model' }),
                      github_url: z
                        .url()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "A URL for the model's source code on GitHub" }),
                      latest_version: z
                        .object({})
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "The model's latest version" }),
                      license_url: z
                        .url()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "A URL for the model's license" }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the model' }),
                      owner: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the user or organization that owns the model',
                        }),
                      paper_url: z
                        .url()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "A URL for the model's paper" }),
                      run_count: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'The number of times the model has been run' }),
                      url: z
                        .url()
                        .exactOptional()
                        .openapi({ description: 'The URL of the model on Replicate' }),
                      visibility: z
                        .enum(['public', 'private'])
                        .exactOptional()
                        .openapi({ description: 'Whether the model is public or private' }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'An array of model objects' }),
            })
            .openapi({ required: ['next', 'previous', 'results'] }),
        },
      },
    },
  },
})

export const getModelsModelOwnerModelNameRoute = createRoute({
  method: 'get',
  path: '/models/{model_owner}/{model_name}',
  summary: 'Get a model',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world\n```\n\nThe response will be a model object in the following format:\n\n```json\n{\n  "url": "https://replicate.com/replicate/hello-world",\n  "owner": "replicate",\n  "name": "hello-world",\n  "description": "A tiny model that says hello",\n  "visibility": "public",\n  "github_url": "https://github.com/replicate/cog-examples",\n  "paper_url": null,\n  "license_url": null,\n  "run_count": 5681081,\n  "cover_image_url": "...",\n  "default_example": {...},\n  "latest_version": {...},\n}\n```\n\nThe model object includes the [input and output schema](https://replicate.com/docs/reference/openapi#model-schemas) for the latest version of the model.\n\nHere\'s an example showing how to fetch the model with cURL and display its input schema with [jq](https://stedolan.github.io/jq/):\n\n```console\ncurl -s \\\n    -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n    https://api.replicate.com/v1/models/replicate/hello-world \\\n    | jq ".latest_version.openapi_schema.components.schemas.Input"\n```\n\nThis will return the following JSON object:\n\n```json\n{\n  "type": "object",\n  "title": "Input",\n  "required": [\n    "text"\n  ],\n  "properties": {\n    "text": {\n      "type": "string",\n      "title": "Text",\n      "x-order": 0,\n      "description": "Text to prefix with \'hello \'"\n    }\n  }\n}\n``` \n\nThe `cover_image_url` string is an HTTPS URL for an image file. This can be:\n\n- An image uploaded by the model author.\n- The output file of the example prediction, if the model author has not set a cover image.\n- The input file of the example prediction, if the model author has not set a cover image and the example prediction has no output file.\n- A generic fallback image.\n\nThe `default_example` object is a [prediction](#predictions.get) created with this model.\n\nThe `latest_version` object is the model\'s most recently pushed [version](#models.versions.get).\n',
  operationId: 'models.get',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasModelResponseSchema } },
    },
  },
})

export const deleteModelsModelOwnerModelNameRoute = createRoute({
  method: 'delete',
  path: '/models/{model_owner}/{model_name}',
  summary: 'Delete a model',
  description:
    'Delete a model\n\nModel deletion has some restrictions:\n\n- You can only delete models you own.\n- You can only delete private models.\n- You can only delete models that have no versions associated with them. Currently you\'ll need to [delete the model\'s versions](#models.versions.delete) before you can delete the model itself.\n\nExample cURL request:\n\n```command\ncurl -s -X DELETE \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world\n```\n\nThe response will be an empty 204, indicating the model has been deleted.\n',
  operationId: 'models.delete',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const patchModelsModelOwnerModelNameRoute = createRoute({
  method: 'patch',
  path: '/models/{model_owner}/{model_name}',
  summary: 'Update metadata for a model',
  description:
    'Update select properties of an existing model.\n\nYou can update the following properties:\n\n  - `description` - Model description\n  - `readme` - Model README content\n  - `github_url` - GitHub repository URL\n  - `paper_url` - Research paper URL\n  - `weights_url` - Model weights URL\n  - `license_url` - License URL\n\nExample cURL request:\n\n```console\ncurl -X PATCH \\\n  https://api.replicate.com/v1/models/your-username/your-model-name \\\n  -H "Authorization: Token $REPLICATE_API_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "description": "Detect hot dogs in images",\n    "readme": "# Hot Dog Detector\\n\\n🌭 Ketchup, mustard, and onions...",\n    "github_url": "https://github.com/alice/hot-dog-detector",\n    "paper_url": "https://arxiv.org/abs/2504.17639",\n    "weights_url": "https://huggingface.co/alice/hot-dog-detector",\n    "license_url": "https://choosealicense.com/licenses/mit/"\n  }\'\n```\n\nThe response will be the updated model object with all of its properties.\n',
  operationId: 'models.update',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A description of the model.',
                  example: 'Detect hot dogs in images',
                }),
              github_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's source code on GitHub.",
                  example: 'https://github.com/alice/hot-dog-detector',
                }),
              license_url: z
                .string()
                .exactOptional()
                .openapi({ description: "A URL for the model's license." }),
              paper_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's paper.",
                  example: 'https://arxiv.org/abs/2504.17639',
                }),
              readme: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The README content of the model.',
                  example: '# Updated README\n\nNew content here',
                }),
              weights_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: "A URL for the model's weights.",
                  example: 'https://huggingface.co/alice/hot-dog-detector',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasModelResponseSchema } },
    },
  },
})

export const getModelsModelOwnerModelNameExamplesRoute = createRoute({
  method: 'get',
  path: '/models/{model_owner}/{model_name}/examples',
  summary: 'List examples for a model',
  description:
    'List [example predictions](https://replicate.com/docs/topics/models/publish-a-model#what-are-examples) made using the model.\nThese are predictions that were saved by the model author as illustrative examples of the model\'s capabilities.\n\nIf you want all the examples for a model, use this operation.\n\nIf you just want the model\'s default example, you can use the [`models.get`](#models.get) operation instead, which includes a `default_example` object.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world/examples\n```\n\nThe response will be a pagination object containing a list of example predictions:\n\n```json\n{\n  "next": "https://api.replicate.com/v1/models/replicate/hello-world/examples?cursor=...",\n  "previous": "https://api.replicate.com/v1/models/replicate/hello-world/examples?cursor=...",\n  "results": [...]\n}\n```\n\nEach item in the `results` list is a [prediction object](#predictions.get).\n',
  operationId: 'models.examples.list',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPaginatedPredictionResponseSchema } },
    },
  },
})

export const postModelsModelOwnerModelNamePredictionsRoute = createRoute({
  method: 'post',
  path: '/models/{model_owner}/{model_name}/predictions',
  summary: 'Create a prediction using an official model',
  description:
    'Create a prediction using an [official model](https://replicate.com/changelog/2025-01-29-official-models).\n\nIf you\'re _not_ running an official model, use the [`predictions.create`](#predictions.create) operation instead.\n\nExample cURL request:\n\n```console\ncurl -s -X POST -H \'Prefer: wait\' \\\n  -d \'{"input": {"prompt": "Write a short poem about the weather."}}\' \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H \'Content-Type: application/json\' \\\n  https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions\n```\n\nThe request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.\n\nFor a complete overview of the `deployments.predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.\n',
  operationId: 'models.predictions.create',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Prefer: ParametersPreferHeaderParamsSchema,
      'Cancel-After': ParametersCancelAfterHeaderParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SchemasPredictionRequestSchema } } },
  },
  responses: {
    201: {
      description:
        'Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
    202: {
      description: 'Prediction has been created but does not yet have all outputs',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
  },
})

export const getModelsModelOwnerModelNameReadmeRoute = createRoute({
  method: 'get',
  path: '/models/{model_owner}/{model_name}/readme',
  summary: "Get a model's README",
  description:
    'Get the README content for a model.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world/readme\n```\n\nThe response will be the README content as plain text in Markdown format:\n\n```\n# Hello World Model\n\nThis is an example model that...\n```\n',
  operationId: 'models.readme.get',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'text/plain': {
          schema: z.string().openapi({ description: 'The README content in Markdown format' }),
        },
      },
    },
    404: { description: 'README not found' },
  },
})

export const getModelsModelOwnerModelNameVersionsRoute = createRoute({
  method: 'get',
  path: '/models/{model_owner}/{model_name}/versions',
  summary: 'List model versions',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world/versions\n```\n\nThe response will be a JSON array of model version objects, sorted with the most recent version first:\n\n```json\n{\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",\n      "created_at": "2022-04-26T19:29:04.418669Z",\n      "cog_version": "0.3.0",\n      "openapi_schema": {...}\n    }\n  ]\n}\n```\n',
  operationId: 'models.versions.list',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPaginatedVersionResponseSchema } },
    },
  },
})

export const getModelsModelOwnerModelNameVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/models/{model_owner}/{model_name}/versions/{version_id}',
  summary: 'Get a model version',
  description:
    'Example cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world/versions/5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa\n```\n\nThe response will be the version object:\n\n```json\n{\n  "id": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",\n  "created_at": "2022-04-26T19:29:04.418669Z",\n  "cog_version": "0.3.0",\n  "openapi_schema": {...}\n}\n```\n\nEvery model describes its inputs and outputs with [OpenAPI Schema Objects](https://spec.openapis.org/oas/latest.html#schemaObject) in the `openapi_schema` property.\n\nThe `openapi_schema.components.schemas.Input` property for the [replicate/hello-world](https://replicate.com/replicate/hello-world) model looks like this:\n\n```json\n{\n  "type": "object",\n  "title": "Input",\n  "required": [\n    "text"\n  ],\n  "properties": {\n    "text": {\n      "x-order": 0,\n      "type": "string",\n      "title": "Text",\n      "description": "Text to prefix with \'hello \'"\n    }\n  }\n}\n```\n\nThe `openapi_schema.components.schemas.Output` property for the [replicate/hello-world](https://replicate.com/replicate/hello-world) model looks like this:\n\n```json\n{\n  "type": "string",\n  "title": "Output"\n}\n```\n\nFor more details, see the docs on [Cog\'s supported input and output types](https://github.com/replicate/cog/blob/75b7802219e7cd4cee845e34c4c22139558615d4/docs/python.md#input-and-output-types)\n',
  operationId: 'models.versions.get',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the version.\n',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasVersionResponseSchema } },
    },
  },
})

export const deleteModelsModelOwnerModelNameVersionsVersionIdRoute = createRoute({
  method: 'delete',
  path: '/models/{model_owner}/{model_name}/versions/{version_id}',
  summary: 'Delete a model version',
  description:
    'Delete a model version and all associated predictions, including all output files.\n\nModel version deletion has some restrictions:\n\n- You can only delete versions from models you own.\n- You can only delete versions from private models.\n- You cannot delete a version if someone other than you has run predictions with it.\n- You cannot delete a version if it is being used as the base model for a fine tune/training.\n- You cannot delete a version if it has an associated deployment.\n- You cannot delete a version if another model version is overridden to use it.\n\nExample cURL request:\n\n```command\ncurl -s -X DELETE \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/models/replicate/hello-world/versions/5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa\n```\n\nThe response will be an empty 202, indicating the deletion request has been accepted. It might take a few minutes to be processed.\n',
  operationId: 'models.versions.delete',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the version.\n',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Deletion request has been accepted. It might take a few minutes to be processed.',
    },
  },
})

export const postModelsModelOwnerModelNameVersionsVersionIdTrainingsRoute = createRoute({
  method: 'post',
  path: '/models/{model_owner}/{model_name}/versions/{version_id}/trainings',
  summary: 'Create a training',
  description:
    'Start a new training of the model version you specify.\n\nExample request body:\n\n```json\n{\n  "destination": "{new_owner}/{new_name}",\n  "input": {\n    "train_data": "https://example.com/my-input-images.zip",\n  },\n  "webhook": "https://example.com/my-webhook",\n}\n```\n\nExample cURL request:\n\n```console\ncurl -s -X POST \\\n  -d \'{"destination": "{new_owner}/{new_name}", "input": {"input_images": "https://example.com/my-input-images.zip"}}\' \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H \'Content-Type: application/json\' \\\n  https://api.replicate.com/v1/models/stability-ai/sdxl/versions/da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf/trainings\n```\n\nThe response will be the training object:\n\n```json\n{\n  "id": "zz4ibbonubfz7carwiefibzgga",\n  "model": "stability-ai/sdxl",\n  "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n  "input": {\n    "input_images": "https://example.com/my-input-images.zip"\n  },\n  "logs": "",\n  "error": null,\n  "status": "starting",\n  "created_at": "2023-09-08T16:32:56.990893084Z",\n  "urls": {\n    "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",\n     "get": "https://api.replicate.com/v1/predictions/zz4ibbonubfz7carwiefibzgga",\n     "cancel": "https://api.replicate.com/v1/predictions/zz4ibbonubfz7carwiefibzgga/cancel"\n  }\n}\n```\n\nAs models can take several minutes or more to train, the result will not be available immediately. To get the final result of the training you should either provide a `webhook` HTTPS URL for us to call when the results are ready, or poll the [get a training](#trainings.get) endpoint until it has finished.\n\nWhen a training completes, it creates a new [version](https://replicate.com/docs/how-does-replicate-work#terminology) of the model at the specified destination.\n\nTo find some models to train on, check out the [trainable language models collection](https://replicate.com/collections/trainable-language-models).\n',
  operationId: 'trainings.create',
  request: {
    params: z.object({
      model_owner: z
        .string()
        .openapi({
          param: {
            description: 'The name of the user or organization that owns the model.\n',
            in: 'path',
            name: 'model_owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the model.\n',
            in: 'path',
            name: 'model_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the version.\n',
            in: 'path',
            name: 'version_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SchemasTrainingRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasTrainingResponseSchema } },
    },
  },
})

export const getPredictionsRoute = createRoute({
  method: 'get',
  path: '/predictions',
  summary: 'List predictions',
  description:
    'Get a paginated list of all predictions created by the user or organization associated with the provided API token.\n\nThis will include predictions created from the API and the website. It will return 100 records per page.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/predictions\n```\n\nThe response will be a paginated JSON array of prediction objects, sorted with the most recent prediction first:\n\n```json\n{\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "completed_at": "2023-09-08T16:19:34.791859Z",\n      "created_at": "2023-09-08T16:19:34.907244Z",\n      "data_removed": false,\n      "error": null,\n      "id": "gm3qorzdhgbfurvjtvhg6dckhu",\n      "input": {\n        "text": "Alice"\n      },\n      "metrics": {\n        "predict_time": 0.012683\n      },\n      "output": "hello Alice",\n      "started_at": "2023-09-08T16:19:34.779176Z",\n      "source": "api",\n      "status": "succeeded",\n      "urls": {\n        "web": "https://replicate.com/p/gm3qorzdhgbfurvjtvhg6dckhu",\n        "get": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu",\n        "cancel": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu/cancel"\n      },\n      "model": "replicate/hello-world",\n      "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",\n    }\n  ]\n}\n```\n\n`id` will be the unique ID of the prediction.\n\n`source` will indicate how the prediction was created. Possible values are `web` or `api`.\n\n`status` will be the status of the prediction. Refer to [get a single prediction](#predictions.get) for possible values.\n\n`urls` will be a convenience object that can be used to construct new API requests for the given prediction. If the requested model version supports streaming, this will have a `stream` entry with an HTTPS URL that you can use to construct an [`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).\n\n`model` will be the model identifier string in the format of `{model_owner}/{model_name}`.\n\n`version` will be the unique ID of model version used to create the prediction.\n\n`data_removed` will be `true` if the input and output data has been deleted.\n',
  operationId: 'predictions.list',
  request: {
    query: z.object({
      created_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include only predictions created at or after this date-time, in ISO 8601 format.',
            in: 'query',
            name: 'created_after',
            schema: { example: '2025-01-01T00:00:00Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2025-01-01T00:00:00Z',
        }),
      created_before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include only predictions created before this date-time, in ISO 8601 format.',
            in: 'query',
            name: 'created_before',
            schema: { example: '2025-02-01T00:00:00Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2025-02-01T00:00:00Z',
        }),
      source: z
        .literal('web')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter predictions by how they were created. Currently only `web` is supported.\n\nIf no value is set, the API returns predictions from both API and web sources.\n\nWhen filtering by `source=web`, results are limited to predictions created in the last 14 days.\n',
            in: 'query',
            name: 'source',
            schema: { enum: ['web'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(SchemasPredictionResponseSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postPredictionsRoute = createRoute({
  method: 'post',
  path: '/predictions',
  summary: 'Create a prediction',
  description:
    'Create a prediction for the model version and inputs you provide.\n\nExample cURL request:\n\n```console\ncurl -s -X POST -H \'Prefer: wait\' \\\n  -d \'{"version": "replicate/hello-world:5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa", "input": {"text": "Alice"}}\' \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H \'Content-Type: application/json\' \\\n  https://api.replicate.com/v1/predictions\n```\n\nThe request will wait up to 60 seconds for the model to run. If this time is exceeded the prediction will be returned in a `"starting"` state and need to be retrieved using the `predictions.get` endpoint.\n\nFor a complete overview of the `predictions.create` API check out our documentation on [creating a prediction](https://replicate.com/docs/topics/predictions/create-a-prediction) which covers a variety of use cases.\n',
  operationId: 'predictions.create',
  request: {
    headers: z.object({
      Prefer: ParametersPreferHeaderParamsSchema,
      'Cancel-After': ParametersCancelAfterHeaderParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SchemasVersionPredictionRequestSchema } } },
  },
  responses: {
    201: {
      description:
        'Prediction has been created. If the `Prefer: wait` header is provided it will contain the final output.',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
    202: {
      description: 'Prediction has been created but does not yet have all outputs',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
  },
})

export const getPredictionsPredictionIdRoute = createRoute({
  method: 'get',
  path: '/predictions/{prediction_id}',
  summary: 'Get a prediction',
  description:
    'Get the current state of a prediction.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu\n```\n\nThe response will be the prediction object:\n\n```json\n{\n  "id": "gm3qorzdhgbfurvjtvhg6dckhu",\n  "model": "replicate/hello-world",\n  "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",\n  "input": {\n    "text": "Alice"\n  },\n  "logs": "",\n  "output": "hello Alice",\n  "error": null,\n  "status": "succeeded",\n  "created_at": "2023-09-08T16:19:34.765994Z",\n  "source": "api",\n  "data_removed": false,\n  "started_at": "2023-09-08T16:19:34.779176Z",\n  "completed_at": "2023-09-08T16:19:34.791859Z",\n  "metrics": {\n    "predict_time": 0.012683\n  },\n  "urls": {\n    "web": "https://replicate.com/p/gm3qorzdhgbfurvjtvhg6dckhu",\n    "get": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu",\n    "cancel": "https://api.replicate.com/v1/predictions/gm3qorzdhgbfurvjtvhg6dckhu/cancel"\n  }\n}\n```\n\n`source` will indicate how the prediction was created. Possible values are `web` or `api`.\n\n`status` will be one of:\n\n- `starting`: the prediction is starting up. If this status lasts longer than a few seconds, then it\'s typically because a new worker is being started to run the prediction.\n- `processing`: the `predict()` method of the model is currently running.\n- `succeeded`: the prediction completed successfully.\n- `failed`: the prediction encountered an error during processing.\n- `canceled`: the prediction was canceled by its creator.\n\nIn the case of success, `output` will be an object containing the output of the model. Any files will be represented as HTTPS URLs. You\'ll need to pass the `Authorization` header to request them.\n\nIn the case of failure, `error` will contain the error encountered during the prediction.\n\nTerminated predictions (with a status of `succeeded`, `failed`, or `canceled`) will include a `metrics` object with a `predict_time` property showing the amount of CPU or GPU time, in seconds, that the prediction used while running. It won\'t include time waiting for the prediction to start. The `metrics` object will also include a `total_time` property showing the total time, in seconds, that the prediction took to complete.\n\nAll input parameters, output values, and logs are automatically removed after an hour, by default, for predictions created through the API.\n\nYou must save a copy of any data or files in the output if you\'d like to continue using them. The `output` key will still be present, but it\'s value will be `null` after the output has been removed.\n\nOutput files are served by `replicate.delivery` and its subdomains. If you use an allow list of external domains for your assets, add `replicate.delivery` and `*.replicate.delivery` to it.\n',
  operationId: 'predictions.get',
  request: {
    params: z.object({
      prediction_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the prediction to get.\n',
            in: 'path',
            name: 'prediction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
  },
})

export const postPredictionsPredictionIdCancelRoute = createRoute({
  method: 'post',
  path: '/predictions/{prediction_id}/cancel',
  summary: 'Cancel a prediction',
  description:
    'Cancel a prediction that is currently running.\n\nExample cURL request that creates a prediction and then cancels it:\n\n```console\n# First, create a prediction\nPREDICTION_ID=$(curl -s -X POST \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "input": {\n      "prompt": "a video that may take a while to generate"\n    }\n  }\' \\\n  https://api.replicate.com/v1/models/minimax/video-01/predictions | jq -r \'.id\')\n\n# Echo the prediction ID\necho "Created prediction with ID: $PREDICTION_ID"\n\n# Cancel the prediction\ncurl -s -X POST \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/predictions/$PREDICTION_ID/cancel\n```\n',
  operationId: 'predictions.cancel',
  request: {
    params: z.object({
      prediction_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the prediction to cancel.\n',
            in: 'path',
            name: 'prediction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasPredictionResponseSchema } },
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  summary: 'Search models, collections, and docs (beta)',
  description:
    'Search for public models, collections, and docs using a text query.\n\nFor models, the response includes all model data, plus a new `metadata` object with the following fields:\n\n- `generated_description`: A longer and more detailed AI-generated description of the model\n- `tags`: An array of tags for the model\n- `score`: A score for the model\'s relevance to the search query\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  "https://api.replicate.com/v1/search?query=nano+banana"\n```\n\nNote: This search API is currently in beta and may change in future versions.\n',
  operationId: 'search',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The search query string',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'nano banana', type: 'string' },
          },
          example: 'nano banana',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of model results to return (1-50, defaults to 20)',
            in: 'query',
            name: 'limit',
            schema: { default: 20, example: 10, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SchemasSearchResponseSchema,
          example: {
            collections: [
              {
                description: 'Models for editing and manipulating images',
                models: ['google/nano-banana', 'stability-ai/stable-diffusion'],
                name: 'Image Editing',
                slug: 'image-editing',
              },
            ],
            models: [
              {
                metadata: {
                  generated_description:
                    'Generate and edit images from text prompts and one or more input images. Combine multiple references via multi-image fusion to insert objects into new scenes, restyle environments, or blend visual styles. Apply natural-language edits such as object removal, background blur, pose changes, colorization, and style transfer, while maintaining character, object, and style consistency across a series. Support conversational, iterative workflows that follow multi-step instructions. Embed invisible SynthID watermarking for provenance on all generated or edited images.',
                  score: 1.3847375700706976,
                  tags: ['text-to-image', 'image-to-image', 'image-editing'],
                },
                model: {
                  cover_image_url:
                    'https://tjzk.replicate.delivery/models_models_featured_image/ed879e99-71b5-4689-bed3-e7305e35a28a/this.png',
                  default_example: null,
                  description: "Google's latest image editing model in Gemini 2.5",
                  github_url: null,
                  latest_version: {
                    cog_version: '0.16.7',
                    created_at: '2025-09-12T16:36:33.884779Z',
                    id: '56b8f5f774804fda8ffe63f01d3e2900f97609bd7ae976f50e595854110de200',
                    openapi_schema: {},
                  },
                  license_url: null,
                  name: 'nano-banana',
                  owner: 'google',
                  paper_url: null,
                  run_count: 4304274,
                  url: 'https://replicate.com/google/nano-banana',
                  visibility: 'public',
                },
              },
            ],
            pages: [
              { href: '/docs/guides/image-editing', name: 'Getting started with image editing' },
            ],
            query: 'nano banana',
          },
        },
      },
    },
    400: {
      description: 'Bad Request - Missing or invalid query parameter',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'Query parameter "query" is required' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Server Error - Search service error',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z.string().exactOptional().openapi({ example: 'Search service error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [],
})

export const getTrainingsRoute = createRoute({
  method: 'get',
  path: '/trainings',
  summary: 'List trainings',
  description:
    'Get a paginated list of all trainings created by the user or organization associated with the provided API token.\n\nThis will include trainings created from the API and the website. It will return 100 records per page.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/trainings\n```\n\nThe response will be a paginated JSON array of training objects, sorted with the most recent training first:\n\n```json\n{\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "completed_at": "2023-09-08T16:41:19.826523Z",\n      "created_at": "2023-09-08T16:32:57.018467Z",\n      "error": null,\n      "id": "zz4ibbonubfz7carwiefibzgga",\n      "input": {\n        "input_images": "https://example.com/my-input-images.zip"\n      },\n      "metrics": {\n        "predict_time": 502.713876\n      },\n      "output": {\n        "version": "...",\n        "weights": "..."\n      },\n      "started_at": "2023-09-08T16:32:57.112647Z",\n      "source": "api",\n      "status": "succeeded",\n      "urls": {\n        "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",\n        "get": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga",\n        "cancel": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga/cancel"\n      },\n      "model": "stability-ai/sdxl",\n      "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n    }\n  ]\n}\n```\n\n`id` will be the unique ID of the training.\n\n`source` will indicate how the training was created. Possible values are `web` or `api`.\n\n`status` will be the status of the training. Refer to [get a single training](#trainings.get) for possible values.\n\n`urls` will be a convenience object that can be used to construct new API requests for the given training.\n\n`version` will be the unique ID of model version used to create the training.\n',
  operationId: 'trainings.list',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              next: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'URL to the next page of results' }),
              previous: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'URL to the previous page of results' }),
              results: z.array(SchemasTrainingResponseSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTrainingsTrainingIdRoute = createRoute({
  method: 'get',
  path: '/trainings/{training_id}',
  summary: 'Get a training',
  description:
    'Get the current state of a training.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga\n```\n\nThe response will be the training object:\n\n```json\n{\n  "completed_at": "2023-09-08T16:41:19.826523Z",\n  "created_at": "2023-09-08T16:32:57.018467Z",\n  "error": null,\n  "id": "zz4ibbonubfz7carwiefibzgga",\n  "input": {\n    "input_images": "https://example.com/my-input-images.zip"\n  },\n  "logs": "...",\n  "metrics": {\n    "predict_time": 502.713876\n  },\n  "output": {\n    "version": "...",\n    "weights": "..."\n  },\n  "started_at": "2023-09-08T16:32:57.112647Z",\n  "status": "succeeded",\n  "urls": {\n    "web": "https://replicate.com/p/zz4ibbonubfz7carwiefibzgga",\n    "get": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga",\n    "cancel": "https://api.replicate.com/v1/trainings/zz4ibbonubfz7carwiefibzgga/cancel"\n  },\n  "model": "stability-ai/sdxl",\n  "version": "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",\n}\n```\n\n`status` will be one of:\n\n- `starting`: the training is starting up. If this status lasts longer than a few seconds, then it\'s typically because a new worker is being started to run the training.\n- `processing`: the `train()` method of the model is currently running.\n- `succeeded`: the training completed successfully.\n- `failed`: the training encountered an error during processing.\n- `canceled`: the training was canceled by its creator.\n\nIn the case of success, `output` will be an object containing the output of the model. Any files will be represented as HTTPS URLs. You\'ll need to pass the `Authorization` header to request them.\n\nIn the case of failure, `error` will contain the error encountered during the training.\n\nTerminated trainings (with a status of `succeeded`, `failed`, or `canceled`) will include a `metrics` object with a `predict_time` property showing the amount of CPU or GPU time, in seconds, that the training used while running. It won\'t include time waiting for the training to start. The `metrics` object will also include a `total_time` property showing the total time, in seconds, that the training took to complete.\n',
  operationId: 'trainings.get',
  request: {
    params: z.object({
      training_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the training to get.\n',
            in: 'path',
            name: 'training_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasTrainingResponseSchema } },
    },
  },
})

export const postTrainingsTrainingIdCancelRoute = createRoute({
  method: 'post',
  path: '/trainings/{training_id}/cancel',
  summary: 'Cancel a training',
  operationId: 'trainings.cancel',
  request: {
    params: z.object({
      training_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the training you want to cancel.\n',
            in: 'path',
            name: 'training_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SchemasTrainingResponseSchema } },
    },
  },
})

export const getWebhooksDefaultSecretRoute = createRoute({
  method: 'get',
  path: '/webhooks/default/secret',
  summary: 'Get the signing secret for the default webhook',
  description:
    'Get the signing secret for the default webhook endpoint. This is used to verify that webhook requests are coming from Replicate.\n\nExample cURL request:\n\n```console\ncurl -s \\\n  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\\n  https://api.replicate.com/v1/webhooks/default/secret\n```\n\nThe response will be a JSON object with a `key` property:\n\n```json\n{\n  "key": "..."\n}\n```\n',
  operationId: 'webhooks.default.secret.get',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().exactOptional().openapi({ description: 'The signing secret.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
