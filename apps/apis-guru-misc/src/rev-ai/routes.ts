import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    balance_seconds: z
      .int()
      .exactOptional()
      .openapi({ description: 'Amount of Rev.ai API credits remaining in seconds', example: 150 }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of developer account', example: 'jay@rev.ai' }),
  })
  .openapi({ description: 'Rev.ai Account Model', required: [] })
  .openapi('Account')

const DescriptionlessJobOptionsSchema = z
  .object({
    metadata: z
      .string()
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ example: 'sample metadata' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        callback_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ example: 'https://www.example.com/callback' }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({
        custom_vocabulary_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ example: 'cvgnDwmB6iXevn' }),
        delete_after_seconds: z
          .int()
          .min(0)
          .max(2592000)
          .nullable()
          .exactOptional()
          .openapi({ example: 50 }),
        filter_profanity: z
          .boolean()
          .nullable()
          .default(false)
          .exactOptional()
          .openapi({ example: true }),
        language: z
          .enum([
            'en',
            'ar',
            'bg',
            'ca',
            'cmn',
            'cs',
            'da',
            'de',
            'el',
            'es',
            'fi',
            'fr',
            'hi',
            'hr',
            'hu',
            'it',
            'ja',
            'ko',
            'lt',
            'lv',
            'ms',
            'nl',
            'no',
            'pl',
            'pt',
            'ro',
            'ru',
            'sk',
            'sl',
            'sv',
            'tr',
          ])
          .nullable()
          .default('en')
          .exactOptional()
          .openapi({ example: 'en' }),
        media_url: z
          .string()
          .max(2048)
          .nullable()
          .exactOptional()
          .openapi({ example: 'https://www.rev.ai/FTC_Sample_1.mp3' }),
        remove_disfluencies: z
          .boolean()
          .nullable()
          .default(false)
          .exactOptional()
          .openapi({ example: true }),
        skip_diarization: z
          .boolean()
          .nullable()
          .default(false)
          .exactOptional()
          .openapi({ example: true }),
        skip_punctuation: z
          .boolean()
          .nullable()
          .default(false)
          .exactOptional()
          .openapi({ example: true }),
        speaker_channels_count: z
          .int()
          .min(1)
          .max(8)
          .nullable()
          .exactOptional()
          .openapi({ example: 2 }),
      })
      .openapi({ required: [] }),
  )
  .openapi('DescriptionlessJobOptions')

const JobSchema = z
  .object({
    callback_url: z
      .any()
      .exactOptional()
      .openapi({ description: 'Callback url provided by the user.' }),
    completed_on: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date and time the job was completed, whether successfully or failing, in ISO-8601 UTC form',
        example: '2018-05-05T23:28:22.29Z',
      }),
    created_on: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the job was created in ISO-8601 UTC form',
        example: '2018-05-05T23:23:22.29Z',
      }),
    custom_vocabulary_id: z
      .any()
      .exactOptional()
      .openapi({
        description: 'User-supplied custom vocabulary ID to be used with job for transcription.',
      }),
    delete_after_seconds: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Amount of time after job completion when job is auto-deleted. Present only when preference set in job request.',
      }),
    duration_seconds: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration of the file in seconds. Null if the file could not be retrieved or there was not a valid media file',
        example: 324.36,
      }),
    failure: z
      .enum([
        'internal_processing',
        'download_failure',
        'duration_exceeded',
        'duration_too_short',
        'invalid_media',
        'empty_media',
        'transcription',
        'insufficient_balance',
        'invoicing_limit_exceeded',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Simple reason of why the transcription job failed. Check `failure_detail` for specific details and solutions',
        example: 'download_failure',
      }),
    failure_detail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Human-readable reason why the job failed',
        example: 'Failed to download media file. Please check your url and file type',
      }),
    filter_profanity: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied preference on whether to remove explicit words.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the job', example: 'Umx5c6F7pH7r' }),
    language: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied language to transcribe the audio into.' }),
    media_url: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Media url provided by the job submission. Null if the job was provided using a local file.',
      }),
    metadata: z
      .any()
      .exactOptional()
      .openapi({ description: 'Optional metadata that was provided during job submission' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the file provided. Present when the file name is available',
        example: 'sample_audio.mp3',
      }),
    remove_disfluencies: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied preference on whether to remove disfluencies.' }),
    skip_diarization: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied preference on whether to skip diarization.' }),
    skip_punctuation: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied preference on whether to skip punctuation.' }),
    speaker_channels_count: z
      .any()
      .exactOptional()
      .openapi({ description: 'User-supplied number of speaker channels in the audio.' }),
    status: z
      .enum(['in_progress', 'transcribed', 'failed'])
      .exactOptional()
      .openapi({ description: 'Current status of the job', example: 'transcribed' }),
    type: z
      .literal('async')
      .exactOptional()
      .openapi({
        description:
          "Type of speech recognition performed. Currently the only supported values are 'async' for asynchronous jobs and `stream` for streaming jobs",
        example: 'async',
      }),
  })
  .openapi({
    description:
      'Rev.ai Transcription Job\n***\nNote: properties are not displayed in the returned object if they are null\n',
    required: [],
  })
  .and(DescriptionlessJobOptionsSchema)
  .openapi({
    example: {
      created_on: '2018-05-05T23:23:22.29Z',
      delete_after_seconds: 50,
      id: 'Umx5c6F7pH7r',
      status: 'in_progress',
      type: 'async',
    },
  })
  .openapi('Job')

const SubmitJobOptionsSchema = z
  .object({
    callback_url: z
      .any()
      .exactOptional()
      .openapi({ description: 'Optional callback url to invoke when processing is complete' }),
    custom_vocabulary_id: z
      .any()
      .exactOptional()
      .openapi({
        description:
          '**This feature is in beta.** You can supply the id of a pre-completed custom vocabulary that you submitted through the [Custom Vocabularies API](https://rev.ai/docs/streaming#operation/SubmitCustomVocabulary) instead of uploading the list of phrases using the `custom_vocabularies` parameter. Using `custom_vocabulary_id` or `custom_vocabularies` with the same list of phrases yields the same transcription result, but `custom_vocabulary_id` allows your submission to finish processing faster by 6 seconds on average. \n\nYou cannot use both `custom_vocabulary_id` and `custom_vocabularies` at the same time, and doing so will result in a 400 response. If the supplied id represents an incomplete, deleted, or non-existent custom vocabulary then you will receive a 404 response.\n',
      }),
    delete_after_seconds: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Specify the number of seconds after job completion when job is auto-deleted. It may take up to 2 minutes after the scheduled time for the job to be deleted.\nThe number of seconds provided must range from `0` seconds to `2592000` seconds (30 days).\n',
      }),
    filter_profanity: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Enabling this option will filter for approx. 600 profanities, which cover most use cases. If a transcribed word matches a word on this list, then all the characters of that word will be replaced by asterisks except for the first and last character.\n',
      }),
    language: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'You can provide a language parameter for transcribing audio in one of the following languages:\n\n| Language   | ISO 639 Language Code                                |\n|------------|-----------------------------------------------|\n| Arabic | ar |\n| Bulgarian  | bg |\n| Catalan    | ca |\n| Croatian   | hr |\n| Czech  | cs |\n| Danish | da |\n| Dutch  | nl |\n| English    | en |\n| Finnish    | fi |\n| French | fr |\n| German | de |\n| Greek  | el |\n| Hindi  | hi |\n| Hungarian  | hu |\n| Italian    | it |\n| Japanese   | ja |\n| Korean | ko |\n| Lithuanian | lt |\n| Latvian    | lv |\n| Malay  | ms |\n| Mandarin   | cmn |\n| Norwegian  | no |\n| Polish | pl |\n| Portuguese | pt |\n| Romanian   | ro |\n| Russian    | ru |\n| Slovak | sk |\n| Slovenian  | sl |\n| Spanish    | es |\n| Swedish    | sv |\n| Turkish    | tr |\nLanguage parameter is provided as a [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), with the exception of Mandarin (cmn) which is supplied as an [ISO 639-3 language code](https://en.wikipedia.org/wiki/ISO_639-3).\n\nOnly 1 language can be selected per audio, i.e. no multiple languages in one transcription job. Additionally, the following parameters may **not** be used with non-English languages: `skip_punctuation`, `remove_disfluencies`, `filter_profanity`, `speaker_channels_count`, `custom_vocabulary_id`.\n',
      }),
    metadata: z
      .any()
      .exactOptional()
      .openapi({ description: 'Optional metadata that was provided during submission' }),
    remove_disfluencies: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "Currently we only define disfluencies as 'ums' and 'uhs'. When set to true, disfluencies will be not appear in the transcript.\n",
      }),
    skip_diarization: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Specify if speaker diarization will be skipped by the speech engine',
      }),
    skip_punctuation: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Specify if "punct" type elements will be skipped by the speech engine. For JSON outputs, this includes removing spaces. For text outputs,\nwords will still be delimited by a space\n',
      }),
    speaker_channels_count: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Use to specify the total number of unique speaker channels in the audio.\n\nGiven the number of audio channels provided, each channel will be transcribed\nseparately and the channel id assigned to the `speaker` label. The final output will be a combination of all individual channel outputs. Overlapping `monologues` will have ordering broken\nby the order in which the first spoken `element` of each `monologue` occurs. If `speaker_channels_count` is greater than the actual channels in the audio,\nthe job will fail with `invalid_media`.\n\n**Note:**\n  - The amount charged will be the duration of the file multiplied by the number of channels specified.\n  - When using `speaker_channels_count` each channel will be diarized as one speaker, and the value of `skip_diarization` will be ignored if provided\n',
      }),
  })
  .openapi({ description: 'Rev.ai Job Options Object Model', required: [] })
  .and(
    z
      .object({
        custom_vocabularies: z
          .array(
            z
              .object({
                phrases: z
                  .array(z.string().openapi({ title: 'phrase' }))
                  .min(1)
                  .max(6000)
                  .openapi({
                    description:
                      'Array of phrases not found in normal dictionary. Add technical jargon, proper nouns and uncommon phrases as strings in this array to add them to the lexicon for this job. \n\nA phrase must contain at least 1 alpha character but may contain any non-numeric character from the Basic Latin set. A phrase can contain up to 12 words. Each word can contain up to 34 characters.\n\n**Note**: Only 6000 phrases can be used per transcription job. For more details, check [Custom Vocabularies](https://www.rev.ai/docs/overview#section/Features/Custom-Vocabularies).\n',
                    example: ['Paul McCartney', 'Amelia Earhart', 'Weiss-Bergman', 'BLM'],
                  }),
              })
              .openapi({
                description:
                  'Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).',
                required: ['phrases'],
              }),
          )
          .min(1)
          .max(50)
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .and(DescriptionlessJobOptionsSchema)
  .openapi('SubmitJobOptions')

const SubmitJobMediaUrlOptionsSchema = z
  .object({
    media_url: z
      .string()
      .max(2048)
      .openapi({
        description:
          'Direct download media url. Ignored if submitting job from file. **Note:** Media files longer than 17 hours are not supported for English transcription, and media files longer than 12 hours are not supported for non-English transcription. For non-English jobs, expected turnaround time can be up to 6 hours.',
        example: 'https://www.rev.ai/FTC_Sample_1.mp3',
      }),
  })
  .openapi({ required: ['media_url'] })
  .and(SubmitJobOptionsSchema)
  .openapi('SubmitJobMediaUrlOptions')

const TranscriptSchema = z
  .object({
    monologues: z
      .array(
        z
          .object({
            elements: z
              .array(
                z
                  .object({
                    confidence: z
                      .float64()
                      .min(0)
                      .max(1)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Confidence score of the provided value. If the element `type` is `punct` or `unknown`, confidence will be `null`',
                        example: 0.85,
                      }),
                    ts: z
                      .float64()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The timestamp of the beginning of the element relative to the beginning of the audio in seconds (centisecond precision)',
                        example: 0.75,
                      }),
                    ts_end: z
                      .float64()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The timestamp of the end of the element relative to the beginning of the audio in seconds (centisecond precision)',
                        example: 1.25,
                      }),
                    type: z
                      .enum(['text', 'punct', 'unknown'])
                      .exactOptional()
                      .openapi({
                        description:
                          'Type of transcript element. If Rev.ai was unable to determine the spoken word, the `type` will be `unknown`.',
                        example: 'text',
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Value of the transcript element.',
                        example: 'Hello',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Array of transcript elements' }),
            speaker: z
              .int()
              .exactOptional()
              .openapi({ description: 'Id of the speaker of the monologue', example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({
    description:
      'Rev.ai Transcript Model\n***\nNote: properties are not displayed in the returned object if they are null\n\nJobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.\n',
    required: [],
  })
  .openapi('Transcript')

const CaptionSrtResponse = { description: 'Caption in SubRip Text format' }

const CaptionVttResponse = { description: 'Caption in Web Video Text Tracks format' }

const InvalidCaptionFormatResponse = {
  description: 'Invalid Caption Format',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] })
        .and(
          z
            .object({
              allowed_values: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed values for this request' }),
              current_value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Value passed in given request' }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable explanation specific to this occurrence of the problem',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        allowed_values: ['application/x-subrip', 'text/vtt'],
        current_value: '*/*',
        detail: 'Unsupported value */*',
        status: 406,
        title: 'Output format is not supported',
        type: 'https://www.rev.ai/api/v1/errors/unsupported-output-format',
      },
    },
  },
}

const InvalidDeletionStateResponse = {
  description: 'Invalid Deletion State\n',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] })
        .and(
          z
            .object({
              allowed_values: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed values for this request' }),
              current_value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Value passed in given request' }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable explanation specific to this occurrence of the problem',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        allowed_values: ['transcribed', 'failed'],
        current_value: 'in_progress',
        detail: 'Job is in invalid state to be deleted',
        status: 409,
        title: 'Job is in invalid state',
        type: 'https://rev.ai/api/v1/errors/invalid-job-state',
      },
    },
  },
}

const InvalidJobPropertyCaptionsResponse = {
  description: 'Invalid Job Property',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] })
        .and(
          z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable explanation specific to this occurrence of the problem',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        detail: 'Job with speaker channels provided are not supported for retrieving captions',
        status: 405,
        title: 'Job contains unsupported properties',
        type: 'https://rev.ai/api/v1/errors/invalid-job-properties',
      },
    },
  },
}

const InvalidJobStateResponse = {
  description:
    'Invalid Job State\n***\nIn case of failure, more details can be found at [`GET /jobs/{id}`](#operation/GetJobById)\n',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] })
        .and(
          z
            .object({
              allowed_values: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed values for this request' }),
              current_value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Value passed in given request' }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable explanation specific to this occurrence of the problem',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        allowed_values: ['transcribed'],
        current_value: 'in_progress',
        detail: 'Job is in progress or failed',
        status: 409,
        title: 'Job is in invalid state',
        type: 'https://rev.ai/api/v1/errors/invalid-job-state',
      },
    },
  },
}

const InvalidTranscriptFormatResponse = {
  description: 'Invalid Transcript Format',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] })
        .and(
          z
            .object({
              allowed_values: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Allowed values for this request' }),
              current_value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Value passed in given request' }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable explanation specific to this occurrence of the problem',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        allowed_values: ['text/plain', 'application/vnd.rev.transcript.v1.0+json'],
        current_value: '*/*',
        detail: 'Unsupported value */*',
        status: 406,
        title: 'Output format is not supported',
        type: 'https://www.rev.ai/api/v1/errors/unsupported-output-format',
      },
    },
  },
}

const JobNotFoundResponse = {
  description: 'Job Not Found',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI that identifies the problem' }),
        })
        .openapi({ description: 'Problem details object returned on errors', required: [] }),
      example: {
        status: 404,
        title: 'could not find job',
        type: 'https://www.rev.ai/api/v1/errors/job-not-found',
      },
    },
  },
}

const PayloadTooLargeResponse = {
  description:
    'Payload Too Large\n***\nOnly returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`\nfor files larger than 2GBs\n',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Human-readable explanation specific to this occurrence of the problem',
            }),
          status: z.int().exactOptional().openapi({ description: 'HTTP status code of the error' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Short, human-readable summary of the problem type' }),
        })
        .openapi({ required: [] }),
      example: {
        detail: 'Submitted payload exceeds maximum allowed file size',
        status: 413,
        title: 'Payload Too Large',
      },
    },
  },
}

const TranscriptTextResponse = { description: 'Transcript in plain text format' }

const AcceptCaptionParamsSchema = z
  .enum(['application/x-subrip', 'text/vtt'])
  .exactOptional()
  .openapi({
    param: {
      description: 'MIME type specifying the caption output format',
      in: 'header',
      name: 'Accept',
      required: false,
      schema: { enum: ['application/x-subrip', 'text/vtt'], type: 'string' },
    },
  })

const AcceptTranscriptParamsSchema = z
  .enum(['application/vnd.rev.transcript.v1.0+json', 'text/plain'])
  .exactOptional()
  .openapi({
    param: {
      description: 'MIME type specifying the transcription output format',
      in: 'header',
      name: 'Accept',
      required: false,
      schema: { enum: ['application/vnd.rev.transcript.v1.0+json', 'text/plain'], type: 'string' },
    },
  })

const JobIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Rev.ai API Job Id',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const AccessTokenSecurityScheme = {
  description:
    'All API requests must be authorized with an `Authorization: Bearer` header\n\n> `-H "Authorization: Bearer $REV_ACCESS_TOKEN"`\n\nDevelopers can obtain their access token from their [settings page](https://rev.ai/access_token). This token need only be generated once and never expires.\n',
  scheme: 'bearer',
  type: 'http',
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Get Account',
  description: "Get the developer's account information",
  operationId: 'GetAccount',
  responses: {
    200: {
      description: 'Rev.ai Account',
      content: { 'application/json': { schema: AccountSchema } },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
  },
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['Jobs'],
  summary: 'Get List of Jobs',
  description:
    'Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.',
  operationId: 'GetListOfJobs',
  request: {
    query: z.object({
      limit: z
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
            description: 'Limits the number of jobs returned, default is 100, max is 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, returns transcription jobs submitted before the job with this id, exclusive (job with this id is not included)',
            in: 'query',
            name: 'starting_after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of Rev.ai Transcription Jobs',
      content: { 'application/json': { schema: z.array(JobSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'URI that identifies the problem' }),
            })
            .openapi({ description: 'Problem details object returned on errors', required: [] })
            .and(
              z
                .object({
                  parameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Invalid properties object where each property is the key, mapped to a list of reasons why the property is invalid',
                    }),
                })
                .openapi({ required: [] }),
            ),
          example: {
            parameter: { limit: ['The max value for limit is 1000'] },
            status: 400,
            title: "Your request parameters didn't validate",
            type: 'https://www.rev.ai/api/v1/errors/invalid-parameters',
          },
        },
      },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
  },
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  tags: ['Jobs'],
  summary: 'Submit Transcription Job',
  description:
    'Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.',
  operationId: 'SubmitTranscriptionJob',
  request: {
    body: {
      description: 'Transcription Job Options',
      content: {
        'application/json': { schema: SubmitJobMediaUrlOptionsSchema },
        'multipart/form-data': {
          schema: z
            .object({
              media: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Limited to files less than 2GB in size. If the file is larger than 2GB, submit a transcription job using `media_url`. **Note:** Media files longer than 17 hours are not supported for English transcription, and media files longer than 12 hours are not supported for non-English transcription. For non-English jobs, expected turnaround time can be up to 6 hours.',
                }),
              options: z
                .object({
                  callback_url: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description: 'Optional callback url to invoke when processing is complete',
                    }),
                  custom_vocabulary_id: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        '**This feature is in beta.** You can supply the id of a pre-completed custom vocabulary that you submitted through the [Custom Vocabularies API](https://rev.ai/docs/streaming#operation/SubmitCustomVocabulary) instead of uploading the list of phrases using the `custom_vocabularies` parameter. Using `custom_vocabulary_id` or `custom_vocabularies` with the same list of phrases yields the same transcription result, but `custom_vocabulary_id` allows your submission to finish processing faster by 6 seconds on average. \n\nYou cannot use both `custom_vocabulary_id` and `custom_vocabularies` at the same time, and doing so will result in a 400 response. If the supplied id represents an incomplete, deleted, or non-existent custom vocabulary then you will receive a 404 response.\n',
                    }),
                  delete_after_seconds: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'Specify the number of seconds after job completion when job is auto-deleted. It may take up to 2 minutes after the scheduled time for the job to be deleted.\nThe number of seconds provided must range from `0` seconds to `2592000` seconds (30 days).\n',
                    }),
                  filter_profanity: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'Enabling this option will filter for approx. 600 profanities, which cover most use cases. If a transcribed word matches a word on this list, then all the characters of that word will be replaced by asterisks except for the first and last character.\n',
                    }),
                  language: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'You can provide a language parameter for transcribing audio in one of the following languages:\n\n| Language   | ISO 639 Language Code                                |\n|------------|-----------------------------------------------|\n| Arabic | ar |\n| Bulgarian  | bg |\n| Catalan    | ca |\n| Croatian   | hr |\n| Czech  | cs |\n| Danish | da |\n| Dutch  | nl |\n| English    | en |\n| Finnish    | fi |\n| French | fr |\n| German | de |\n| Greek  | el |\n| Hindi  | hi |\n| Hungarian  | hu |\n| Italian    | it |\n| Japanese   | ja |\n| Korean | ko |\n| Lithuanian | lt |\n| Latvian    | lv |\n| Malay  | ms |\n| Mandarin   | cmn |\n| Norwegian  | no |\n| Polish | pl |\n| Portuguese | pt |\n| Romanian   | ro |\n| Russian    | ru |\n| Slovak | sk |\n| Slovenian  | sl |\n| Spanish    | es |\n| Swedish    | sv |\n| Turkish    | tr |\nLanguage parameter is provided as a [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), with the exception of Mandarin (cmn) which is supplied as an [ISO 639-3 language code](https://en.wikipedia.org/wiki/ISO_639-3).\n\nOnly 1 language can be selected per audio, i.e. no multiple languages in one transcription job. Additionally, the following parameters may **not** be used with non-English languages: `skip_punctuation`, `remove_disfluencies`, `filter_profanity`, `speaker_channels_count`, `custom_vocabulary_id`.\n',
                    }),
                  metadata: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description: 'Optional metadata that was provided during submission',
                    }),
                  remove_disfluencies: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        "Currently we only define disfluencies as 'ums' and 'uhs'. When set to true, disfluencies will be not appear in the transcript.\n",
                    }),
                  skip_diarization: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'Specify if speaker diarization will be skipped by the speech engine',
                    }),
                  skip_punctuation: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'Specify if "punct" type elements will be skipped by the speech engine. For JSON outputs, this includes removing spaces. For text outputs,\nwords will still be delimited by a space\n',
                    }),
                  speaker_channels_count: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use to specify the total number of unique speaker channels in the audio.\n\nGiven the number of audio channels provided, each channel will be transcribed\nseparately and the channel id assigned to the `speaker` label. The final output will be a combination of all individual channel outputs. Overlapping `monologues` will have ordering broken\nby the order in which the first spoken `element` of each `monologue` occurs. If `speaker_channels_count` is greater than the actual channels in the audio,\nthe job will fail with `invalid_media`.\n\n**Note:**\n  - The amount charged will be the duration of the file multiplied by the number of channels specified.\n  - When using `speaker_channels_count` each channel will be diarized as one speaker, and the value of `skip_diarization` will be ignored if provided\n',
                    }),
                })
                .openapi({ description: 'Rev.ai Job Options Object Model', required: [] })
                .and(
                  z
                    .object({
                      custom_vocabularies: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z
                            .array(
                              z
                                .object({
                                  phrases: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z
                                        .array(z.string().openapi({ title: 'phrase' }))
                                        .min(1)
                                        .max(6000),
                                    )
                                    .openapi({
                                      description:
                                        'Array of phrases not found in normal dictionary. Add technical jargon, proper nouns and uncommon phrases as strings in this array to add them to the lexicon for this job. \n\nA phrase must contain at least 1 alpha character but may contain any non-numeric character from the Basic Latin set. A phrase can contain up to 12 words. Each word can contain up to 34 characters.\n\n**Note**: Only 6000 phrases can be used per transcription job. For more details, check [Custom Vocabularies](https://www.rev.ai/docs/overview#section/Features/Custom-Vocabularies).\n',
                                      example: [
                                        'Paul McCartney',
                                        'Amelia Earhart',
                                        'Weiss-Bergman',
                                        'BLM',
                                      ],
                                    }),
                                })
                                .openapi({
                                  description:
                                    'Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).',
                                  required: ['phrases'],
                                }),
                            )
                            .min(1)
                            .max(50),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .and(
                  z
                    .object({
                      metadata: ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(z.string().max(512).nullable())
                        .exactOptional()
                        .openapi({ example: 'sample metadata' }),
                    })
                    .openapi({ required: [] })
                    .and(
                      z
                        .object({
                          callback_url: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ example: 'https://www.example.com/callback' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .and(
                      z
                        .object({
                          custom_vocabulary_id: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({ example: 'cvgnDwmB6iXevn' }),
                          delete_after_seconds: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(0).max(2592000),
                                )
                                .nullable(),
                            )
                            .exactOptional()
                            .openapi({ example: 50 }),
                          filter_profanity: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .nullable(),
                            )
                            .default(false)
                            .exactOptional()
                            .openapi({ example: true }),
                          language: ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(
                            z
                              .enum([
                                'en',
                                'ar',
                                'bg',
                                'ca',
                                'cmn',
                                'cs',
                                'da',
                                'de',
                                'el',
                                'es',
                                'fi',
                                'fr',
                                'hi',
                                'hr',
                                'hu',
                                'it',
                                'ja',
                                'ko',
                                'lt',
                                'lv',
                                'ms',
                                'nl',
                                'no',
                                'pl',
                                'pt',
                                'ro',
                                'ru',
                                'sk',
                                'sl',
                                'sv',
                                'tr',
                              ])
                              .nullable(),
                          )
                            .default('en')
                            .exactOptional()
                            .openapi({ example: 'en' }),
                          media_url: ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(z.string().max(2048).nullable())
                            .exactOptional()
                            .openapi({ example: 'https://www.rev.ai/FTC_Sample_1.mp3' }),
                          remove_disfluencies: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .nullable(),
                            )
                            .default(false)
                            .exactOptional()
                            .openapi({ example: true }),
                          skip_diarization: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .nullable(),
                            )
                            .default(false)
                            .exactOptional()
                            .openapi({ example: true }),
                          skip_punctuation: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .nullable(),
                            )
                            .default(false)
                            .exactOptional()
                            .openapi({ example: true }),
                          speaker_channels_count: z
                            .preprocess(
                              (val) => (val === 'null' ? null : val),
                              z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(1).max(8),
                                )
                                .nullable(),
                            )
                            .exactOptional()
                            .openapi({ example: 2 }),
                        })
                        .openapi({ required: [] }),
                    ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Transcription Job Details',
      content: { 'application/json': { schema: JobSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'URI that identifies the problem' }),
            })
            .openapi({ description: 'Problem details object returned on errors', required: [] })
            .and(
              z
                .object({
                  parameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Invalid properties object where each property is the key, mapped to a list of reasons why the property is invalid',
                    }),
                })
                .openapi({ required: [] }),
            ),
          example: {
            parameter: { media_url: ['The media_url field is required'] },
            status: 400,
            title: "Your request parameters didn't validate",
            type: 'https://www.rev.ai/api/v1/errors/invalid-parameters',
          },
        },
      },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
    413: PayloadTooLargeResponse,
  },
})

export const getJobsIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}',
  tags: ['Jobs'],
  summary: 'Get Job By Id',
  description: 'Returns information about a transcription job',
  operationId: 'GetJobById',
  request: { params: z.object({ id: JobIdParamsSchema }) },
  responses: {
    200: {
      description: 'Transcription Job Details',
      content: {
        'application/json': {
          schema: JobSchema,
          examples: {
            'Failed Job': {
              value: {
                completed_on: '2018-05-05T23:23:24.11Z',
                created_on: '2018-05-05T23:23:22.29Z',
                failure: 'download_failure',
                failure_detail:
                  'Failed to download media file. Please check your url and file type',
                id: 'Umx5c6F7pH7r',
                language: 'en',
                status: 'failed',
              },
            },
            'New Job': {
              value: {
                created_on: '2018-05-05T23:23:22.29Z',
                id: 'Umx5c6F7pH7r',
                language: 'en',
                status: 'in_progress',
              },
            },
            'Transcribed Job': {
              value: {
                callback_url: 'https://www.example.com/callback',
                completed_on: '2018-05-05T23:45:13.41Z',
                created_on: '2018-05-05T23:23:22.29Z',
                duration_seconds: 356.24,
                id: 'Umx5c6F7pH7r',
                language: 'en',
                media_url: 'https://www.rev.ai/FTC_Sample_1.mp3',
                status: 'transcribed',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
    404: JobNotFoundResponse,
  },
})

export const deleteJobsIdRoute = createRoute({
  method: 'delete',
  path: '/jobs/{id}',
  tags: ['Jobs'],
  summary: 'Delete Job by Id',
  description:
    "Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).",
  operationId: 'DeleteJobById',
  request: { params: z.object({ id: JobIdParamsSchema }) },
  responses: {
    204: { description: 'Job was successfully deleted' },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
    404: JobNotFoundResponse,
    409: InvalidDeletionStateResponse,
  },
})

export const getJobsIdCaptionsRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}/captions',
  tags: ['Captions'],
  summary: 'Get Captions',
  description:
    'Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.\nCaption output format can be specified in the `Accept` header. Returns SRT by default.\n***\nNote: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.\n',
  operationId: 'GetCaptions',
  request: {
    params: z.object({ id: JobIdParamsSchema }),
    headers: z.object({ Accept: AcceptCaptionParamsSchema }),
    query: z.object({
      speaker_channel: z
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
              'Identifies which channel of the job output to caption. Default is `null` which works only for jobs with no `speaker_channels_count` provided during job submission.',
            in: 'query',
            name: 'speaker_channel',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Rev.ai API Captions\n***\nNote: Caption output format is required in the Accept header. The supported headers are `application/x-subrip` and `text/vtt`.\n([SRT](https://en.wikipedia.org/wiki/SubRip))\n',
      content: {
        'application/x-subrip': {
          schema: CaptionSrtResponse,
          examples: {
            'SubRip Text (SRT)': {
              value:
                '1\n00:00:01,210 --> 00:00:04,840\nHello there, this is a example captions output\n\n2\n00:00:07,350 --> 00:00:10,970\nEach caption group is in the SubRip Text\nfile format\n',
            },
          },
        },
        'text/vtt': {
          schema: CaptionVttResponse,
          examples: {
            'WebVTT (VTT)': {
              value:
                'WebVTT\n\n1\n00:00:01,210 ==> 00:00:04,840\nHello there,\nthis is an example captions output\n\n2\n00:00:07,350 --> 00:00:10,970\nEach caption group is in the vtt\nfile format\n',
            },
          },
        },
      },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
    404: JobNotFoundResponse,
    405: InvalidJobPropertyCaptionsResponse,
    406: InvalidCaptionFormatResponse,
    409: InvalidJobStateResponse,
  },
})

export const getJobsIdTranscriptRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}/transcript',
  tags: ['Transcript'],
  summary: 'Get Transcript By Id',
  description:
    'Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.\n***\nNote: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.\n',
  operationId: 'GetTranscriptById',
  request: {
    params: z.object({ id: JobIdParamsSchema }),
    headers: z.object({ Accept: AcceptTranscriptParamsSchema }),
  },
  responses: {
    200: {
      description:
        "Rev.ai API Transcript\n***\nNote: Transcript output format is required in the Accept header. Output can either be in Rev's JSON format or plaintext.\n",
      content: {
        'application/vnd.rev.transcript.v1.0+json': {
          schema: TranscriptSchema,
          examples: {
            'skip_diarization false && skip_punctuation false': {
              value: {
                monologues: [
                  {
                    elements: [
                      { confidence: 1, end_ts: 1.5, ts: 0.5, type: 'text', value: 'Hello' },
                      { type: 'punct', value: ' ' },
                      { confidence: 0.8, end_ts: 2.85, ts: 1.75, type: 'text', value: 'World' },
                      { type: 'punct', value: '.' },
                    ],
                    speaker: 1,
                  },
                  {
                    elements: [
                      { confidence: 1, end_ts: 3.5, ts: 3, type: 'text', value: 'monologues' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 3.9, ts: 3.6, type: 'text', value: 'are' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 4.3, ts: 4, type: 'text', value: 'a' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 5.5, ts: 4.5, type: 'text', value: 'block' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 6.14, ts: 5.75, type: 'text', value: 'of' },
                      { type: 'punct', value: ' ' },
                      { type: 'unknown', value: '<inaudible>' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 7.78, ts: 6.5, type: 'text', value: 'text' },
                      { type: 'punct', value: '.' },
                    ],
                    speaker: 2,
                  },
                ],
              },
            },
            'skip_diarization false && skip_punctuation true': {
              value: {
                monologues: [
                  {
                    elements: [
                      { confidence: 1, end_ts: 1.5, ts: 0.5, type: 'text', value: 'Hello' },
                      { confidence: 0.8, end_ts: 2.85, ts: 1.75, type: 'text', value: 'World' },
                    ],
                    speaker: 1,
                  },
                  {
                    elements: [
                      { confidence: 1, end_ts: 3.5, ts: 3, type: 'text', value: 'monologues' },
                      { confidence: 1, end_ts: 3.9, ts: 3.6, type: 'text', value: 'are' },
                      { confidence: 1, end_ts: 4.3, ts: 4, type: 'text', value: 'a' },
                      { confidence: 1, end_ts: 5.5, ts: 4.5, type: 'text', value: 'block' },
                      { confidence: 1, end_ts: 6.14, ts: 5.75, type: 'text', value: 'of' },
                      { type: 'unknown', value: '<inaudible>' },
                      { confidence: 1, end_ts: 7.78, ts: 6.5, type: 'text', value: 'text' },
                    ],
                    speaker: 2,
                  },
                ],
              },
            },
            'skip_diarization true && skip_punctuation false': {
              value: {
                monologues: [
                  {
                    elements: [
                      { confidence: 1, end_ts: 1.5, ts: 0.5, type: 'text', value: 'Hello' },
                      { type: 'punct', value: ' ' },
                      { confidence: 0.8, end_ts: 2.85, ts: 1.75, type: 'text', value: 'World' },
                      { type: 'punct', value: '.' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 3.5, ts: 3, type: 'text', value: 'monologues' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 3.9, ts: 3.6, type: 'text', value: 'are' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 4.3, ts: 4, type: 'text', value: 'a' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 5.5, ts: 4.5, type: 'text', value: 'block' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 6.14, ts: 5.75, type: 'text', value: 'of' },
                      { type: 'punct', value: ' ' },
                      { type: 'unknown', value: '<inaudible>' },
                      { type: 'punct', value: ' ' },
                      { confidence: 1, end_ts: 7.78, ts: 6.5, type: 'text', value: 'text' },
                      { type: 'punct', value: '.' },
                    ],
                    speaker: 1,
                  },
                ],
              },
            },
            'skip_diarization true && skip_punctuation true': {
              value: {
                monologues: [
                  {
                    elements: [
                      { confidence: 1, end_ts: 1.5, ts: 0.5, type: 'text', value: 'Hello' },
                      { confidence: 0.8, end_ts: 2.85, ts: 1.75, type: 'text', value: 'World' },
                      { confidence: 1, end_ts: 3.5, ts: 3, type: 'text', value: 'monologues' },
                      { confidence: 1, end_ts: 3.9, ts: 3.6, type: 'text', value: 'are' },
                      { confidence: 1, end_ts: 4.3, ts: 4, type: 'text', value: 'a' },
                      { confidence: 1, end_ts: 5.5, ts: 4.5, type: 'text', value: 'block' },
                      { confidence: 1, end_ts: 6.14, ts: 5.75, type: 'text', value: 'of' },
                      { type: 'unknown', value: '<inaudible>' },
                      { confidence: 1, end_ts: 7.78, ts: 6.5, type: 'text', value: 'text' },
                    ],
                    speaker: 1,
                  },
                ],
              },
            },
          },
        },
        'text/plain': {
          schema: TranscriptTextResponse,
          examples: {
            'skip_diarization false && skip_punctuation false': {
              value:
                'Speaker 0:    00:00:00    Hello there, this is a sample transcript in plain text.\nSpeaker 1:    00:00:43    Words are returned with spaces between them.\n',
            },
            'skip_diarization false && skip_punctuation true': {
              value:
                'Speaker 0:    00:00:00    Hello there this is a sample transcript in plain text\nSpeaker 1:    00:00:43    Words are returned with spaces between them\n',
            },
            'skip_diarization true && skip_punctuation false': {
              value:
                'Speaker 0:    00:00:01    Hello there, this is a sample transcript in plain text. Words are returned with spaces between them.\n',
            },
            'skip_diarization true && skip_punctuation true': {
              value:
                'Speaker 0:    00:00:01    Hello there this is a sample transcript in plain text Words are returned with spaces between them\n',
            },
          },
        },
      },
    },
    401: {
      description:
        'Request Unauthorized\n***\nCaused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).\n',
      content: {
        'application/problem+json': {
          schema: z
            .object({
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'HTTP status code of the error' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short, human-readable summary of the problem type' }),
            })
            .openapi({ required: [] }),
          example: { status: 401, title: 'Authorization has been denied for this request' },
        },
      },
    },
    404: JobNotFoundResponse,
    406: InvalidTranscriptFormatResponse,
    409: InvalidJobStateResponse,
  },
})
