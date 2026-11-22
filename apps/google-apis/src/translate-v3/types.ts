type GcsOutputDestination = { outputUriPrefix?: string | undefined }
type DatasetOutputConfig = { gcsDestination?: GcsOutputDestination | undefined }
type ExportDataRequest = { outputConfig?: DatasetOutputConfig | undefined }
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
type GcsInputSource = { inputUri?: string | undefined }
type InputFile = { gcsSource?: GcsInputSource | undefined; usage?: string | undefined }
type DatasetInputConfig = { inputFiles?: InputFile[] | undefined }
type ImportDataRequest = { inputConfig?: DatasetInputConfig | undefined }
type Empty = { [x: string]: unknown }
type GlossaryTerm = { languageCode?: string | undefined; text?: string | undefined }
type GlossaryTermsPair = {
  sourceTerm?: GlossaryTerm | undefined
  targetTerm?: GlossaryTerm | undefined
}
type GlossaryTermsSet = { terms?: GlossaryTerm[] | undefined }
type GlossaryEntry = {
  description?: string | undefined
  name?: string | undefined
  termsPair?: GlossaryTermsPair | undefined
  termsSet?: GlossaryTermsSet | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type WaitOperationRequest = { timeout?: string | undefined }
type AdaptiveMtDataset = {
  createTime?: string | undefined
  displayName?: string | undefined
  exampleCount?: number | undefined
  name?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
  updateTime?: string | undefined
}
type ListAdaptiveMtDatasetsResponse = {
  adaptiveMtDatasets?: AdaptiveMtDataset[] | undefined
  nextPageToken?: string | undefined
}
type AdaptiveMtFile = {
  createTime?: string | undefined
  displayName?: string | undefined
  entryCount?: number | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListAdaptiveMtFilesResponse = {
  adaptiveMtFiles?: AdaptiveMtFile[] | undefined
  nextPageToken?: string | undefined
}
type AdaptiveMtSentence = {
  createTime?: string | undefined
  name?: string | undefined
  sourceSentence?: string | undefined
  targetSentence?: string | undefined
  updateTime?: string | undefined
}
type ListAdaptiveMtSentencesResponse = {
  adaptiveMtSentences?: AdaptiveMtSentence[] | undefined
  nextPageToken?: string | undefined
}
type Dataset = {
  createTime?: string | undefined
  displayName?: string | undefined
  exampleCount?: number | undefined
  name?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
  testExampleCount?: number | undefined
  trainExampleCount?: number | undefined
  updateTime?: string | undefined
  validateExampleCount?: number | undefined
}
type ListDatasetsResponse = { datasets?: Dataset[] | undefined; nextPageToken?: string | undefined }
type Example = {
  name?: string | undefined
  sourceText?: string | undefined
  targetText?: string | undefined
  usage?: string | undefined
}
type ListExamplesResponse = { examples?: Example[] | undefined; nextPageToken?: string | undefined }
type GcsSource = { inputUri?: string | undefined }
type GlossaryInputConfig = { gcsSource?: GcsSource | undefined }
type LanguageCodesSet = { languageCodes?: string[] | undefined }
type LanguageCodePair = {
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
}
type Glossary = {
  displayName?: string | undefined
  endTime?: string | undefined
  entryCount?: number | undefined
  inputConfig?: GlossaryInputConfig | undefined
  languageCodesSet?: LanguageCodesSet | undefined
  languagePair?: LanguageCodePair | undefined
  name?: string | undefined
  submitTime?: string | undefined
}
type ListGlossariesResponse = {
  glossaries?: Glossary[] | undefined
  nextPageToken?: string | undefined
}
type ListGlossaryEntriesResponse = {
  glossaryEntries?: GlossaryEntry[] | undefined
  nextPageToken?: string | undefined
}
type Model = {
  createTime?: string | undefined
  dataset?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
  testExampleCount?: number | undefined
  trainExampleCount?: number | undefined
  updateTime?: string | undefined
  validateExampleCount?: number | undefined
}
type ListModelsResponse = { models?: Model[] | undefined; nextPageToken?: string | undefined }
type SupportedLanguage = {
  displayName?: string | undefined
  languageCode?: string | undefined
  supportSource?: boolean | undefined
  supportTarget?: boolean | undefined
}
type SupportedLanguages = { languages?: SupportedLanguage[] | undefined }
type AdaptiveMtTranslateRequest = { content?: string[] | undefined; dataset?: string | undefined }
type AdaptiveMtTranslation = { translatedText?: string | undefined }
type AdaptiveMtTranslateResponse = {
  languageCode?: string | undefined
  translations?: AdaptiveMtTranslation[] | undefined
}
type TranslateTextGlossaryConfig = {
  glossary?: string | undefined
  ignoreCase?: boolean | undefined
}
type BatchDocumentInputConfig = { gcsSource?: GcsSource | undefined }
type GcsDestination = { outputUriPrefix?: string | undefined }
type BatchDocumentOutputConfig = { gcsDestination?: GcsDestination | undefined }
type BatchTranslateDocumentRequest = {
  customizedAttribution?: string | undefined
  enableRotationCorrection?: boolean | undefined
  enableShadowRemovalNativePdf?: boolean | undefined
  formatConversions?: { [x: string]: string } | undefined
  glossaries?: { [x: string]: TranslateTextGlossaryConfig } | undefined
  inputConfigs?: BatchDocumentInputConfig[] | undefined
  models?: { [x: string]: string } | undefined
  outputConfig?: BatchDocumentOutputConfig | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCodes?: string[] | undefined
}
type InputConfig = { gcsSource?: GcsSource | undefined; mimeType?: string | undefined }
type OutputConfig = { gcsDestination?: GcsDestination | undefined }
type BatchTranslateTextRequest = {
  glossaries?: { [x: string]: TranslateTextGlossaryConfig } | undefined
  inputConfigs?: InputConfig[] | undefined
  labels?: { [x: string]: string } | undefined
  models?: { [x: string]: string } | undefined
  outputConfig?: OutputConfig | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCodes?: string[] | undefined
}
type DetectLanguageRequest = {
  content?: string | undefined
  labels?: { [x: string]: string } | undefined
  mimeType?: string | undefined
  model?: string | undefined
}
type DetectedLanguage = { confidence?: number | undefined; languageCode?: string | undefined }
type DetectLanguageResponse = { languages?: DetectedLanguage[] | undefined }
type FileInputSource = {
  content?: string | undefined
  displayName?: string | undefined
  mimeType?: string | undefined
}
type ImportAdaptiveMtFileRequest = {
  fileInputSource?: FileInputSource | undefined
  gcsInputSource?: GcsInputSource | undefined
}
type ImportAdaptiveMtFileResponse = { adaptiveMtFile?: AdaptiveMtFile | undefined }
type RomanizeTextRequest = {
  contents?: string[] | undefined
  sourceLanguageCode?: string | undefined
}
type Romanization = {
  detectedLanguageCode?: string | undefined
  romanizedText?: string | undefined
}
type RomanizeTextResponse = { romanizations?: Romanization[] | undefined }
type DocumentInputConfig = {
  content?: string | undefined
  gcsSource?: GcsSource | undefined
  mimeType?: string | undefined
}
type DocumentOutputConfig = {
  gcsDestination?: GcsDestination | undefined
  mimeType?: string | undefined
}
type TranslateDocumentRequest = {
  customizedAttribution?: string | undefined
  documentInputConfig?: DocumentInputConfig | undefined
  documentOutputConfig?: DocumentOutputConfig | undefined
  enableRotationCorrection?: boolean | undefined
  enableShadowRemovalNativePdf?: boolean | undefined
  glossaryConfig?: TranslateTextGlossaryConfig | undefined
  isTranslateNativePdfOnly?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  model?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
}
type DocumentTranslation = {
  byteStreamOutputs?: string[] | undefined
  detectedLanguageCode?: string | undefined
  mimeType?: string | undefined
}
type TranslateDocumentResponse = {
  documentTranslation?: DocumentTranslation | undefined
  glossaryConfig?: TranslateTextGlossaryConfig | undefined
  glossaryDocumentTranslation?: DocumentTranslation | undefined
  model?: string | undefined
}
type TransliterationConfig = { enableTransliteration?: boolean | undefined }
type TranslateTextRequest = {
  contents?: string[] | undefined
  glossaryConfig?: TranslateTextGlossaryConfig | undefined
  labels?: { [x: string]: string } | undefined
  mimeType?: string | undefined
  model?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
  transliterationConfig?: TransliterationConfig | undefined
}
type Translation = {
  detectedLanguageCode?: string | undefined
  glossaryConfig?: TranslateTextGlossaryConfig | undefined
  model?: string | undefined
  translatedText?: string | undefined
}
type TranslateTextResponse = {
  glossaryTranslations?: Translation[] | undefined
  translations?: Translation[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/:dataset:exportData': {
      $post: {
        input: { param: { dataset: string } } & {
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
        } & { json: ExportDataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:dataset:importData': {
      $post: {
        input: { param: { dataset: string } } & {
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
        } & { json: ImportDataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        input: { param: { name: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
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
        } & { json: GlossaryEntry }
        output: GlossaryEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name:wait': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: WaitOperationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/adaptiveMtDatasets': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListAdaptiveMtDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: AdaptiveMtDataset }
        output: AdaptiveMtDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/adaptiveMtFiles': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListAdaptiveMtFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/adaptiveMtSentences': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListAdaptiveMtSentencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/datasets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Dataset }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/examples': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListExamplesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/glossaries': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListGlossariesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Glossary }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/glossaryEntries': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListGlossaryEntriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GlossaryEntry }
        output: GlossaryEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/models': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListModelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Model }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/supportedLanguages': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            displayLanguageCode?: string | undefined
            model?: string | undefined
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
        output: SupportedLanguages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:adaptiveMtTranslate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: AdaptiveMtTranslateRequest }
        output: AdaptiveMtTranslateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:batchTranslateDocument': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchTranslateDocumentRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:batchTranslateText': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchTranslateTextRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:detectLanguage': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: DetectLanguageRequest }
        output: DetectLanguageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:importAdaptiveMtFile': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: ImportAdaptiveMtFileRequest }
        output: ImportAdaptiveMtFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:romanizeText': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: RomanizeTextRequest }
        output: RomanizeTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:translateDocument': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: TranslateDocumentRequest }
        output: TranslateDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent:translateText': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: TranslateTextRequest }
        output: TranslateTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
