import { createRoute, z } from '@hono/zod-openapi'

const AdaptiveMtDatasetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this dataset was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.',
      }),
    exampleCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of examples in the dataset.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}`',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP-47 language code of the source language.' }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP-47 language code of the target language.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this dataset was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An Adaptive MT Dataset.', required: [] })
  .openapi('AdaptiveMtDataset')

const AdaptiveMtFileSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this file was created.',
        readOnly: true,
      }),
    displayName: z.string().exactOptional().openapi({ description: "The file's display name." }),
    entryCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of entries that the file contains.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this file was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An AdaptiveMtFile.', required: [] })
  .openapi('AdaptiveMtFile')

const AdaptiveMtSentenceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this sentence was created.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}`',
      }),
    sourceSentence: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The source sentence.' }),
    targetSentence: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The target sentence.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this sentence was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An AdaptiveMt sentence entry.', required: [] })
  .openapi('AdaptiveMtSentence')

const AdaptiveMtTranslateRequestSchema = z
  .object({
    content: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The content of the input in string format. For now only one sentence per request is supported.',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name for the dataset to use for adaptive MT. `projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}`',
      }),
  })
  .openapi({
    description: 'The request for sending an AdaptiveMt translation query.',
    required: [],
  })
  .openapi('AdaptiveMtTranslateRequest')

const AdaptiveMtTranslationSchema = z
  .object({
    translatedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The translated text.', readOnly: true }),
  })
  .openapi({ description: 'An AdaptiveMt translation.', required: [] })
  .openapi('AdaptiveMtTranslation')

const AdaptiveMtTranslateResponseSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The translation's language code.", readOnly: true }),
    translations: z
      .array(AdaptiveMtTranslationSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The translation.', readOnly: true }),
  })
  .openapi({ description: 'An AdaptiveMtTranslate response.', required: [] })
  .openapi('AdaptiveMtTranslateResponse')

const GcsSourceSchema = z
  .object({
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Source data URI. For example, `gs://my_bucket/my_object`.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location for the input content.',
    required: [],
  })
  .openapi('GcsSource')

const BatchDocumentInputConfigSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`). File mime type is determined based on extension. Supported mime type includes: - `pdf`, application/pdf - `docx`, application/vnd.openxmlformats-officedocument.wordprocessingml.document - `pptx`, application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and the max page limit is 1000 pages. The max file size to support for all input documents is 1GB.',
    }),
  })
  .openapi({ description: 'Input configuration for BatchTranslateDocument request.', required: [] })
  .openapi('BatchDocumentInputConfig')

const GcsDestinationSchema = z
  .object({
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with \"/\" and start with \"gs://\". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned.",
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location for the output content.',
    required: [],
  })
  .openapi('GcsDestination')

const BatchDocumentOutputConfigSchema = z
  .object({
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        'Google Cloud Storage destination for output content. For every single input document (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateDocumentRequest). While the input documents are being processed, we write/update an index file `index.csv` under `gcs_destination.output_uri_prefix` (for example, gs://translation_output/index.csv) The index file is generated/updated as new files are being translated. The format is: input_document,target_language_code,translation_output,error_output, glossary_translation_output,glossary_error_output `input_document` is one file we matched using gcs_source.input_uri. `target_language_code` is provided in the request. `translation_output` contains the translations. (details provided below) `error_output` contains the error message during processing of the file. Both translations_file and errors_file could be empty strings if we have no content to output. `glossary_translation_output` and `glossary_error_output` are the translated output/error when we apply glossaries. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The naming format of translation output files follows (for target language code [trg]): `translation_output`: `gs://translation_output/a_b_c_[trg]_translation.[extension]` `glossary_translation_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.[extension]`. The output document will maintain the same file format as the input document. The naming format of error output files follows (for target language code [trg]): `error_output`: `gs://translation_test/a_b_c_[trg]_errors.txt` `glossary_error_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.txt`. The error output is a txt file containing error details.',
    }),
  })
  .openapi({
    description: 'Output configuration for BatchTranslateDocument request.',
    required: [],
  })
  .openapi('BatchDocumentOutputConfig')

const TranslateTextGlossaryConfigSchema = z
  .object({
    glossary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`',
      }),
    ignoreCase: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates match is case insensitive. The default value is `false` if missing.',
      }),
  })
  .openapi({
    description:
      'Configures which glossary is used for a specific target language and defines options for applying that glossary.',
    required: [],
  })
  .openapi('TranslateTextGlossaryConfig')

const BatchTranslateDocumentRequestSchema = z
  .object({
    customizedAttribution: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos',
      }),
    enableRotationCorrection: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. If true, enable auto rotation correction in DVS.' }),
    enableShadowRemovalNativePdf: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false',
      }),
    formatConversions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified, output files will be in the same format as the original file.',
      }),
    glossaries: z
      .record(z.string(), TranslateTextGlossaryConfigSchema)
      .exactOptional()
      .openapi({
        description: "Optional. Glossaries to be applied. It's keyed by target language code.",
      }),
    inputConfigs: z
      .array(BatchDocumentInputConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.',
      }),
    models: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.",
      }),
    outputConfig: BatchDocumentOutputConfigSchema.exactOptional().openapi({
      description:
        "Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.",
    }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).',
      }),
    targetLanguageCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here.',
      }),
  })
  .openapi({ description: 'The BatchTranslateDocument request.', required: [] })
  .openapi('BatchTranslateDocumentRequest')

const InputConfigSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        "Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\\t' your_input_file.tsv The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.",
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty.',
      }),
  })
  .openapi({ description: 'Input configuration for BatchTranslateText request.', required: [] })
  .openapi('InputConfig')

const OutputConfigSchema = z
  .object({
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        "Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\\n' instead of '\\r\\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output_uri_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input_file,target_language_code,translations_file,errors_file, glossary_translations_file,glossary_errors_file input_file is one file we matched using gcs_source.input_uri. target_language_code is provided in the request. translations_file contains the translations. (details provided below) errors_file contains the errors during processing of the file. (details below). Both translations_file and errors_file could be empty strings if we have no content to output. glossary_translations_file and glossary_errors_file are always empty strings if the input_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The format of translations_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary_translations_file has format of `gs://translation_test/a_b_c_'trg'_glossary_translations.[extension]` The format of errors file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_errors.[extension]` If the input file extension is tsv, errors_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary_error_file will be generated that contains error details. glossary_error_file has format of `gs://translation_test/a_b_c_'trg'_glossary_errors.[extension]`",
    }),
  })
  .openapi({ description: 'Output configuration for BatchTranslateText request.', required: [] })
  .openapi('OutputConfig')

const BatchTranslateTextRequestSchema = z
  .object({
    glossaries: z
      .record(z.string(), TranslateTextGlossaryConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Glossaries to be applied for translation. It's keyed by target language code.",
      }),
    inputConfigs: z
      .array(InputConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.',
      }),
    models: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.",
      }),
    outputConfig: OutputConfigSchema.exactOptional().openapi({
      description:
        "Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.",
    }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Source language code.' }),
    targetLanguageCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. Specify up to 10 language codes here.' }),
  })
  .openapi({ description: 'The batch translation request.', required: [] })
  .openapi('BatchTranslateTextRequest')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const DatasetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this dataset was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.',
      }),
    exampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of examples in the dataset.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP-47 language code of the source language.' }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP-47 language code of the target language.' }),
    testExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of test examples (sentence pairs).',
        readOnly: true,
      }),
    trainExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of training examples (sentence pairs).',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this dataset was last updated.',
        readOnly: true,
      }),
    validateExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of validation examples (sentence pairs).',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A dataset that hosts the examples (sentence pairs) used for translation models.',
    required: [],
  })
  .openapi('Dataset')

const GcsInputSourceSchema = z
  .object({
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Source data URI. For example, `gs://my_bucket/my_object`.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location for the input content.',
    required: [],
  })
  .openapi('GcsInputSource')

const InputFileSchema = z
  .object({
    gcsSource: GcsInputSourceSchema.exactOptional().openapi({
      description: 'Google Cloud Storage file source.',
    }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split.',
      }),
  })
  .openapi({ description: 'An input file.', required: [] })
  .openapi('InputFile')

const DatasetInputConfigSchema = z
  .object({
    inputFiles: z
      .array(InputFileSchema)
      .exactOptional()
      .openapi({
        description: 'Files containing the sentence pairs to be imported to the dataset.',
      }),
  })
  .openapi({ description: 'Input configuration for datasets.', required: [] })
  .openapi('DatasetInputConfig')

const GcsOutputDestinationSchema = z
  .object({
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist.",
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location for the output content.',
    required: [],
  })
  .openapi('GcsOutputDestination')

const DatasetOutputConfigSchema = z
  .object({
    gcsDestination: GcsOutputDestinationSchema.exactOptional().openapi({
      description: 'Google Cloud Storage destination to write the output.',
    }),
  })
  .openapi({ description: 'Output configuration for datasets.', required: [] })
  .openapi('DatasetOutputConfig')

const DetectLanguageRequestSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the input stored as a string.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used.',
      }),
  })
  .openapi({ description: 'The request message for language detection.', required: [] })
  .openapi('DetectLanguageRequest')

const DetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The confidence of the detection result for this language.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISO-639 language code of the source content in the request, detected automatically.',
      }),
  })
  .openapi({ description: 'The response message for language detection.', required: [] })
  .openapi('DetectedLanguage')

const DetectLanguageResponseSchema = z
  .object({
    languages: z
      .array(DetectedLanguageSchema)
      .exactOptional()
      .openapi({
        description:
          'The most probable language detected by the Translation API. For each request, the Translation API will always return only one result.',
      }),
  })
  .openapi({ description: 'The response message for language detection.', required: [] })
  .openapi('DetectLanguageResponse')

const DocumentInputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: "Document's content represented as a stream of bytes." }),
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
  })
  .openapi({ description: 'A document translation request input config.', required: [] })
  .openapi('DocumentInputConfig')

const DocumentOutputConfigSchema = z
  .object({
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description:
        "Optional. Google Cloud Storage destination for the translation output, e.g., `gs://my_bucket/my_directory/`. The destination directory provided does not have to be empty, but the bucket must exist. If a file with the same name as the output file already exists in the destination an error will be returned. For a DocumentInputConfig.contents provided document, the output file will have the name \"output_[trg]_translations.[ext]\", where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. For a DocumentInputConfig.gcs_uri provided document, the output file will have a name according to its URI. For example: an input file with URI: `gs://a/b/c.[extension]` stored in a gcs_destination bucket with name \"my_bucket\" will have an output URI: `gs://my_bucket/a_b_c_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If the document was directly provided through the request, then the output document will have the format: `gs://my_bucket/translated_document_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If a glossary was provided, then the output URI for the glossary translation will be equal to the default output URI but have `glossary_translations` instead of `translations`. For the previous example, its glossary URI would be: `gs://my_bucket/a_b_c_[trg]_glossary_translations.[ext]`. Thus the max number of output files will be 2 (Translated document, Glossary translated document). Callers should expect no partial outputs. If there is any error during document translation, no output will be stored in the Cloud Storage bucket.",
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
  })
  .openapi({ description: 'A document translation request output config.', required: [] })
  .openapi('DocumentOutputConfig')

const DocumentTranslationSchema = z
  .object({
    byteStreamOutputs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats.',
      }),
    detectedLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: "The translated document's mime type." }),
  })
  .openapi({ description: 'A translated document message.', required: [] })
  .openapi('DocumentTranslation')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ExampleSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The resource name of the example, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}'",
        readOnly: true,
      }),
    sourceText: z.string().exactOptional().openapi({ description: 'Sentence in source language.' }),
    targetText: z.string().exactOptional().openapi({ description: 'Sentence in target language.' }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A sentence pair.', required: [] })
  .openapi('Example')

const ExportDataRequestSchema = z
  .object({
    outputConfig: DatasetOutputConfigSchema.exactOptional().openapi({
      description: 'Required. The config for the output content.',
    }),
  })
  .openapi({ description: 'Request message for ExportData.', required: [] })
  .openapi('ExportDataRequest')

const FileInputSourceSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The file's byte contents." }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The file's display name." }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The file's mime type." }),
  })
  .openapi({ description: 'An inlined file.', required: [] })
  .openapi('FileInputSource')

const GlossaryInputConfigSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): Two column file, tab- or comma-separated. The first column is source text. The second column is target text. No headers in this file. The first row contains data and not column names. - TMX (`.tmx`): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - [glossaries](https://cloud.google.com/translate/docs/advanced/glossary).',
    }),
  })
  .openapi({ description: 'Input configuration for glossaries.', required: [] })
  .openapi('GlossaryInputConfig')

const LanguageCodesSetSchema = z
  .object({
    languageCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ISO-639 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code.',
      }),
  })
  .openapi({ description: 'Used with equivalent term set glossaries.', required: [] })
  .openapi('LanguageCodesSet')

const LanguageCodePairSchema = z
  .object({
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code.',
      }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code.',
      }),
  })
  .openapi({ description: 'Used with unidirectional glossaries.', required: [] })
  .openapi('LanguageCodePair')

const GlossarySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The display name of the glossary.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. When the glossary creation was finished.',
        readOnly: true,
      }),
    entryCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of entries defined in the glossary.',
        readOnly: true,
      }),
    inputConfig: GlossaryInputConfigSchema.exactOptional().openapi({
      description:
        'Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.',
    }),
    languageCodesSet: LanguageCodesSetSchema.exactOptional().openapi({
      description: 'Used with equivalent term set glossaries.',
    }),
    languagePair: LanguageCodePairSchema.exactOptional().openapi({
      description: 'Used with unidirectional glossaries.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.',
      }),
    submitTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When CreateGlossary was called.', readOnly: true }),
  })
  .openapi({ description: 'Represents a glossary built from user-provided data.', required: [] })
  .openapi('Glossary')

const GlossaryTermSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language for this glossary term.' }),
    text: z.string().exactOptional().openapi({ description: 'The text for the glossary term.' }),
  })
  .openapi({ description: 'Represents a single glossary term', required: [] })
  .openapi('GlossaryTerm')

const GlossaryTermsPairSchema = z
  .object({
    sourceTerm: GlossaryTermSchema.exactOptional().openapi({
      description: 'The source term is the term that will get match in the text,',
    }),
    targetTerm: GlossaryTermSchema.exactOptional().openapi({
      description: 'The term that will replace the match source term.',
    }),
  })
  .openapi({
    description: 'Represents a single entry for an unidirectional glossary.',
    required: [],
  })
  .openapi('GlossaryTermsPair')

const GlossaryTermsSetSchema = z
  .object({
    terms: z
      .array(GlossaryTermSchema)
      .exactOptional()
      .openapi({
        description:
          'Each term in the set represents a term that can be replaced by the other terms.',
      }),
  })
  .openapi({
    description:
      'Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.',
    required: [],
  })
  .openapi('GlossaryTermsSet')

const GlossaryEntrySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes the glossary entry.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the entry. Format: "projects/*/locations/*/glossaries/*/glossaryEntries/*"',
      }),
    termsPair: GlossaryTermsPairSchema.exactOptional().openapi({
      description: 'Used for an unidirectional glossary.',
    }),
    termsSet: GlossaryTermsSetSchema.exactOptional().openapi({
      description: 'Used for an equivalent term sets glossary.',
    }),
  })
  .openapi({ description: 'Represents a single entry in a glossary.', required: [] })
  .openapi('GlossaryEntry')

const ImportAdaptiveMtFileRequestSchema = z
  .object({
    fileInputSource: FileInputSourceSchema.exactOptional().openapi({
      description: 'Inline file source.',
    }),
    gcsInputSource: GcsInputSourceSchema.exactOptional().openapi({
      description: 'Google Cloud Storage file source.',
    }),
  })
  .openapi({
    description: 'The request for importing an AdaptiveMt file along with its sentences.',
    required: [],
  })
  .openapi('ImportAdaptiveMtFileRequest')

const ImportAdaptiveMtFileResponseSchema = z
  .object({
    adaptiveMtFile: AdaptiveMtFileSchema.exactOptional().openapi({
      description: 'Output only. The Adaptive MT file that was imported.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'The response for importing an AdaptiveMtFile', required: [] })
  .openapi('ImportAdaptiveMtFileResponse')

const ImportDataRequestSchema = z
  .object({
    inputConfig: DatasetInputConfigSchema.exactOptional().openapi({
      description: 'Required. The config for the input content.',
    }),
  })
  .openapi({ description: 'Request message for ImportData.', required: [] })
  .openapi('ImportDataRequest')

const ListAdaptiveMtDatasetsResponseSchema = z
  .object({
    adaptiveMtDatasets: z
      .array(AdaptiveMtDatasetSchema)
      .exactOptional()
      .openapi({ description: 'Output only. A list of Adaptive MT datasets.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to `ListAdaptiveMtDatasets` method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'A list of AdaptiveMtDatasets.', required: [] })
  .openapi('ListAdaptiveMtDatasetsResponse')

const ListAdaptiveMtFilesResponseSchema = z
  .object({
    adaptiveMtFiles: z
      .array(AdaptiveMtFileSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The Adaptive MT files.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'The response for listing all AdaptiveMt files under a given dataset.',
    required: [],
  })
  .openapi('ListAdaptiveMtFilesResponse')

const ListAdaptiveMtSentencesResponseSchema = z
  .object({
    adaptiveMtSentences: z
      .array(AdaptiveMtSentenceSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of AdaptiveMtSentences.', readOnly: true }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Optional. ' }),
  })
  .openapi({ description: 'List AdaptiveMt sentences response.', required: [] })
  .openapi('ListAdaptiveMtSentencesResponse')

const ListDatasetsResponseSchema = z
  .object({
    datasets: z.array(DatasetSchema).exactOptional().openapi({ description: 'The datasets read.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page.',
      }),
  })
  .openapi({ description: 'Response message for ListDatasets.', required: [] })
  .openapi('ListDatasetsResponse')

const ListExamplesResponseSchema = z
  .object({
    examples: z
      .array(ExampleSchema)
      .exactOptional()
      .openapi({ description: 'The sentence pairs.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page.',
      }),
  })
  .openapi({ description: 'Response message for ListExamples.', required: [] })
  .openapi('ListExamplesResponse')

const ListGlossariesResponseSchema = z
  .object({
    glossaries: z
      .array(GlossarySchema)
      .exactOptional()
      .openapi({ description: 'The list of glossaries for a project.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for ListGlossaries.', required: [] })
  .openapi('ListGlossariesResponse')

const ListGlossaryEntriesResponseSchema = z
  .object({
    glossaryEntries: z
      .array(GlossaryEntrySchema)
      .exactOptional()
      .openapi({ description: 'Optional. The Glossary Entries' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls.',
      }),
  })
  .openapi({ description: 'Response message for ListGlossaryEntries', required: [] })
  .openapi('ListGlossaryEntriesResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({ description: 'A resource that represents a Google Cloud location.', required: [] })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const ModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp when the model resource was created, which is also when the training started.',
        readOnly: true,
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}`',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The BCP-47 language code of the source language.',
        readOnly: true,
      }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The BCP-47 language code of the target language.',
        readOnly: true,
      }),
    testExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of examples (sentence pairs) used to test the model.',
        readOnly: true,
      }),
    trainExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of examples (sentence pairs) used to train the model.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when this model was last updated.',
        readOnly: true,
      }),
    validateExampleCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of examples (sentence pairs) used to validate the model.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A trained translation model.', required: [] })
  .openapi('Model')

const ListModelsResponseSchema = z
  .object({
    models: z.array(ModelSchema).exactOptional().openapi({ description: 'The models read.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page.',
      }),
  })
  .openapi({ description: 'Response message for ListModels.', required: [] })
  .openapi('ListModelsResponse')

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
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const RomanizationSchema = z
  .object({
    detectedLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.',
      }),
    romanizedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Romanized text. If an error occurs during romanization, this field might be excluded from the response.',
      }),
  })
  .openapi({ description: 'A single romanization response.', required: [] })
  .openapi('Romanization')

const RomanizeTextRequestSchema = z
  .object({
    contents: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The content of the input in string format.' }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". If the source language isn\'t specified, the API attempts to identify the source language automatically and returns the source language for each content in the response.',
      }),
  })
  .openapi({ description: 'The request message for synchronous romanization.', required: [] })
  .openapi('RomanizeTextRequest')

const RomanizeTextResponseSchema = z
  .object({
    romanizations: z
      .array(RomanizationSchema)
      .exactOptional()
      .openapi({
        description: 'Text romanization responses. This field has the same length as `contents`.',
      }),
  })
  .openapi({ description: 'The response message for synchronous romanization.', required: [] })
  .openapi('RomanizeTextResponse')

const SupportedLanguageSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable name of the language localized in the display language specified in the request.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN').",
      }),
    supportSource: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can be used as a source language.' }),
    supportTarget: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can be used as a target language.' }),
  })
  .openapi({
    description:
      'A single supported language response corresponds to information related to one supported language.',
    required: [],
  })
  .openapi('SupportedLanguage')

const SupportedLanguagesSchema = z
  .object({
    languages: z
      .array(SupportedLanguageSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of supported language responses. This list contains an entry for each language the Translation API supports.',
      }),
  })
  .openapi({
    description: 'The response message for discovering supported languages.',
    required: [],
  })
  .openapi('SupportedLanguages')

const TranslateDocumentRequestSchema = z
  .object({
    customizedAttribution: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos',
      }),
    documentInputConfig: DocumentInputConfigSchema.exactOptional().openapi({
      description: 'Required. Input configurations.',
    }),
    documentOutputConfig: DocumentOutputConfigSchema.exactOptional().openapi({
      description:
        "Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type.",
    }),
    enableRotationCorrection: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. If true, enable auto rotation correction in DVS.' }),
    enableShadowRemovalNativePdf: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false',
      }),
    glossaryConfig: TranslateTextGlossaryConfigSchema.exactOptional().openapi({
      description:
        'Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.',
    }),
    isTranslateNativePdfOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation.',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn\'t specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model.',
      }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code to use for translation of the input document, set to one of the language codes listed in Language Support.',
      }),
  })
  .openapi({ description: 'A document translation request.', required: [] })
  .openapi('TranslateDocumentRequest')

const TranslateDocumentResponseSchema = z
  .object({
    documentTranslation: DocumentTranslationSchema.exactOptional().openapi({
      description: 'Translated document.',
    }),
    glossaryConfig: TranslateTextGlossaryConfigSchema.exactOptional().openapi({
      description: 'The `glossary_config` used for this translation.',
    }),
    glossaryDocumentTranslation: DocumentTranslationSchema.exactOptional().openapi({
      description:
        "The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply.",
    }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.",
      }),
  })
  .openapi({ description: 'A translated document response message.', required: [] })
  .openapi('TranslateDocumentResponse')

const TransliterationConfigSchema = z
  .object({
    enableTransliteration: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, source text in romanized form can be translated to the target language.',
      }),
  })
  .openapi({
    description: 'Configures transliteration feature on top of translation.',
    required: [],
  })
  .openapi('TransliterationConfig')

const TranslateTextRequestSchema = z
  .object({
    contents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.',
      }),
    glossaryConfig: TranslateTextGlossaryConfigSchema.exactOptional().openapi({
      description:
        'Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used',
      }),
    sourceLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn\'t specified, the API attempts to identify the source language automatically and returns the source language within the response.',
      }),
    targetLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support.',
      }),
    transliterationConfig: TransliterationConfigSchema.exactOptional().openapi({
      description: 'Optional. Transliteration to be applied.',
    }),
  })
  .openapi({ description: 'The request message for synchronous translation.', required: [] })
  .openapi('TranslateTextRequest')

const TranslationSchema = z
  .object({
    detectedLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.',
      }),
    glossaryConfig: TranslateTextGlossaryConfigSchema.exactOptional().openapi({
      description: 'The `glossary_config` used for this translation.',
    }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.',
      }),
    translatedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text translated into the target language. If an error occurs during translation, this field might be excluded from the response.',
      }),
  })
  .openapi({ description: 'A single translation response.', required: [] })
  .openapi('Translation')

const TranslateTextResponseSchema = z
  .object({
    glossaryTranslations: z
      .array(TranslationSchema)
      .exactOptional()
      .openapi({
        description:
          'Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`.',
      }),
    translations: z
      .array(TranslationSchema)
      .exactOptional()
      .openapi({
        description:
          'Text translation responses with no glossary applied. This field has the same length as `contents`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TranslateTextResponse')

const WaitOperationRequestSchema = z
  .object({
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.',
      }),
  })
  .openapi({ description: 'The request message for Operations.WaitOperation.', required: [] })
  .openapi('WaitOperationRequest')

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
        'https://www.googleapis.com/auth/cloud-translation':
          'Translate text from one language to another using Google Translate',
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
        'https://www.googleapis.com/auth/cloud-translation':
          'Translate text from one language to another using Google Translate',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV3DatasetExportDataRoute = createRoute({
  method: 'post',
  path: '/v3/{dataset}:exportData',
  tags: ['projects'],
  description: "Exports dataset's data to the provided output location.",
  operationId: 'translate.projects.locations.datasets.exportData',
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
      dataset: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`',
            in: 'path',
            name: 'dataset',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3DatasetImportDataRoute = createRoute({
  method: 'post',
  path: '/v3/{dataset}:importData',
  tags: ['projects'],
  description: 'Import sentence pairs into translation Dataset.',
  operationId: 'translate.projects.locations.datasets.importData',
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
      dataset: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`',
            in: 'path',
            name: 'dataset',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3NameRoute = createRoute({
  method: 'get',
  path: '/v3/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'translate.projects.locations.operations.get',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const deleteV3NameRoute = createRoute({
  method: 'delete',
  path: '/v3/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'translate.projects.locations.operations.delete',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const patchV3NameRoute = createRoute({
  method: 'patch',
  path: '/v3/{name}',
  tags: ['projects'],
  description: 'Updates a glossary entry.',
  operationId: 'translate.projects.locations.glossaries.glossaryEntries.patch',
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
              "The list of fields to be updated. Currently only `display_name` and 'input_config'",
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
              'Required. The resource name of the entry. Format: "projects/*/locations/*/glossaries/*/glossaryEntries/*"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GlossaryEntrySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GlossaryEntrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v3/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'translate.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
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
              'The maximum number of results to return. If not set, the service selects a default.',
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
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v3/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'translate.projects.locations.operations.list',
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
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3NameCancelRoute = createRoute({
  method: 'post',
  path: '/v3/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'translate.projects.locations.operations.cancel',
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
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3NameWaitRoute = createRoute({
  method: 'post',
  path: '/v3/{name}:wait',
  tags: ['projects'],
  description:
    'Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.',
  operationId: 'translate.projects.locations.operations.wait',
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
            description: 'The name of the operation resource to wait on.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WaitOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentAdaptiveMtDatasetsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/adaptiveMtDatasets',
  tags: ['projects'],
  description: 'Lists all Adaptive MT datasets for which the caller has read permission.',
  operationId: 'translate.projects.locations.adaptiveMtDatasets.list',
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
              'Optional. An expression for filtering the results of the request. Filter is not supported yet.',
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
              'Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.',
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
              'Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing.',
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
              'Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}`',
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
      content: { 'application/json': { schema: ListAdaptiveMtDatasetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentAdaptiveMtDatasetsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/adaptiveMtDatasets',
  tags: ['projects'],
  description: 'Creates an Adaptive MT dataset.',
  operationId: 'translate.projects.locations.adaptiveMtDatasets.create',
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
              'Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdaptiveMtDatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdaptiveMtDatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentAdaptiveMtFilesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/adaptiveMtFiles',
  tags: ['projects'],
  description: 'Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.',
  operationId: 'translate.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.list',
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
            description: 'Optional. ',
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
              'Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.',
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
              'Required. The resource name of the project from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`',
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
      content: { 'application/json': { schema: ListAdaptiveMtFilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentAdaptiveMtSentencesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/adaptiveMtSentences',
  tags: ['projects'],
  description: 'Lists all AdaptiveMtSentences under a given file/dataset.',
  operationId: 'translate.projects.locations.adaptiveMtDatasets.adaptiveMtSentences.list',
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
          param: { in: 'query', name: 'pageSize', schema: { type: 'integer' }, required: false },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.',
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
              'Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`',
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
      content: { 'application/json': { schema: ListAdaptiveMtSentencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentDatasetsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/datasets',
  tags: ['projects'],
  description: 'Lists datasets.',
  operationId: 'translate.projects.locations.datasets.list',
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
              'Optional. Requested page size. The server can return fewer results than requested.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call.',
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
              'Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`',
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
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentDatasetsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/datasets',
  tags: ['projects'],
  description: 'Creates a Dataset.',
  operationId: 'translate.projects.locations.datasets.create',
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
            description: 'Required. The project name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentExamplesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/examples',
  tags: ['projects'],
  description: 'Lists sentence pairs in the dataset.',
  operationId: 'translate.projects.locations.datasets.examples.list',
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
              'Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN`',
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
              'Optional. Requested page size. The server can return fewer results than requested.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.',
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
              'Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`',
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
      content: { 'application/json': { schema: ListExamplesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentGlossariesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/glossaries',
  tags: ['projects'],
  description: "Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.",
  operationId: 'translate.projects.locations.glossaries.list',
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
              'Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using \'en-US\' and \'en\' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.',
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
              'Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.',
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
              'Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.',
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
              'Required. The name of the project from which to list all of the glossaries.',
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
      content: { 'application/json': { schema: ListGlossariesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentGlossariesRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/glossaries',
  tags: ['projects'],
  description:
    "Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.",
  operationId: 'translate.projects.locations.glossaries.create',
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
            description: 'Required. The project name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GlossarySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV3ParentGlossaryEntriesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/glossaryEntries',
  tags: ['projects'],
  description: 'List the entries for the glossary.',
  operationId: 'translate.projects.locations.glossaries.glossaryEntries.list',
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
              'Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.',
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
              'Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing.',
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
              "Required. The parent glossary resource name for listing the glossary's entries.",
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
      content: { 'application/json': { schema: ListGlossaryEntriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentGlossaryEntriesRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/glossaryEntries',
  tags: ['projects'],
  description: 'Creates a glossary entry.',
  operationId: 'translate.projects.locations.glossaries.glossaryEntries.create',
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
            description: 'Required. The resource name of the glossary to create the entry under.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GlossaryEntrySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GlossaryEntrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentModelsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/models',
  tags: ['projects'],
  description: 'Lists models.',
  operationId: 'translate.projects.locations.models.list',
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
              'Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`',
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
              'Optional. Requested page size. The server can return fewer results than requested.',
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
              'Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.',
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
              'Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`',
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
      content: { 'application/json': { schema: ListModelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentModelsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/models',
  tags: ['projects'],
  description: 'Creates a Model.',
  operationId: 'translate.projects.locations.models.create',
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
              'Required. The project name, in form of `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const getV3ParentSupportedLanguagesRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/supportedLanguages',
  tags: ['projects'],
  description: 'Returns a list of supported languages for translation.',
  operationId: 'translate.projects.locations.getSupportedLanguages',
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
      displayLanguageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.',
            in: 'query',
            name: 'displayLanguageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.',
            in: 'query',
            name: 'model',
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
              "Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.",
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
      content: { 'application/json': { schema: SupportedLanguagesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentAdaptiveMtTranslateRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:adaptiveMtTranslate',
  tags: ['projects'],
  description: 'Translate text using Adaptive MT.',
  operationId: 'translate.projects.locations.adaptiveMtTranslate',
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
              'Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdaptiveMtTranslateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdaptiveMtTranslateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentBatchTranslateDocumentRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:batchTranslateDocument',
  tags: ['projects'],
  description:
    "Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.",
  operationId: 'translate.projects.locations.batchTranslateDocument',
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
              'Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchTranslateDocumentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV3ParentBatchTranslateTextRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:batchTranslateText',
  tags: ['projects'],
  description:
    "Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.",
  operationId: 'translate.projects.locations.batchTranslateText',
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
              "Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchTranslateTextRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV3ParentDetectLanguageRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:detectLanguage',
  tags: ['projects'],
  description: 'Detects the language of text within a request.',
  operationId: 'translate.projects.locations.detectLanguage',
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
              "Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetectLanguageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DetectLanguageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentImportAdaptiveMtFileRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:importAdaptiveMtFile',
  tags: ['projects'],
  description:
    'Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.',
  operationId: 'translate.projects.locations.adaptiveMtDatasets.importAdaptiveMtFile',
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
              'Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportAdaptiveMtFileRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImportAdaptiveMtFileResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentRomanizeTextRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:romanizeText',
  tags: ['projects'],
  description: 'Romanize input text written in non-Latin scripts to Latin text.',
  operationId: 'translate.projects.locations.romanizeText',
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
              "Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RomanizeTextRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RomanizeTextResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentTranslateDocumentRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:translateDocument',
  tags: ['projects'],
  description: 'Translates documents in synchronous mode.',
  operationId: 'translate.projects.locations.translateDocument',
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
              'Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TranslateDocumentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TranslateDocumentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})

export const postV3ParentTranslateTextRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}:translateText',
  tags: ['projects'],
  description: 'Translates input text and returns translated text.',
  operationId: 'translate.projects.locations.translateText',
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
              "Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TranslateTextRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TranslateTextResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-translation'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-translation'],
    },
  ],
})
