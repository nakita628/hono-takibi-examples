declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/1.0/AdultContentDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/CommercialDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/DocumentSimilarity.json': {
      $post: {
        input: {
          json: { api_key: string; copy?: string | undefined; original?: string | undefined }
        } & { form: { api_key: string; copy?: string | undefined; original?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/EducationalDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/GenderDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/KeywordExtraction.json': {
      $post: {
        input: { json: { api_key: string; n?: number | undefined; text?: string | undefined } } & {
          form: { api_key: string; n?: number | undefined; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/LanguageDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/ReadabilityAssessment.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/SentimentAnalysis.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/SpamDetection.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/SubjectivityAnalysis.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/TextExtraction.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/TopicClassification.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/1.0/TwitterSentimentAnalysis.json': {
      $post: {
        input: { json: { api_key: string; text?: string | undefined } } & {
          form: { api_key: string; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
