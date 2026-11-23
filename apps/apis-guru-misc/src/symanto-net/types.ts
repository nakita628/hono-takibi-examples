type Post = { id?: string | undefined; language: string; text: string }
type PostRequest = Post[]
type Prediction = { prediction: string; probability: number }
type PostPredicted = { id?: string | undefined; predictions: Prediction[] }
type PredictionResults = PostPredicted[]
type ValidationError = { loc: string[]; msg: string; type: string }
type ValidationErrors = { detail?: ValidationError[] | undefined }
type LanguageDetection = { id?: string | undefined; text: string }
type LanguageDetectionRequest = LanguageDetection[]
type LanguagePredicted = { detected_language: string; id?: string | undefined }
type LanguageDetectionResponse = LanguagePredicted[]
type Sentiment = {
  category?: string | undefined
  end?: number | undefined
  negationTerm?: string | undefined
  parentCategory?: string | undefined
  positive?: boolean | undefined
  scale?: number | undefined
  start?: number | undefined
  text?: string | undefined
}
type Topic = {
  category?: string | undefined
  end?: number | undefined
  polarity?: number | undefined
  start?: number | undefined
  text?: string | undefined
  topic?: string | undefined
}
type TopicSentiment = {
  sentence?: string | undefined
  sentiment?: Sentiment | undefined
  topic?: Topic | undefined
}
type TopicSentimentOutput = {
  id?: string | undefined
  language?: string | undefined
  sentiments?: Sentiment[] | undefined
  text?: string | undefined
  topicSentiments?: TopicSentiment[] | undefined
  topics?: Topic[] | undefined
}
type TopicSentimentResponse = TopicSentimentOutput[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/communication': {
      $post:
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: PredictionResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ekman-emotion': {
      $post:
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: PredictionResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/emotion': {
      $post:
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: PredictionResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/language-detection': {
      $post:
        | {
            input: { json: LanguageDetectionRequest }
            output: LanguageDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LanguageDetectionRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/personality': {
      $post:
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: PredictionResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sentiment': {
      $post:
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: PredictionResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { all?: boolean | undefined } } & { json: PostRequest }
            output: ValidationErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/topic-sentiment': {
      $post: {
        input: { query: { domain?: 'Ecom' | 'Employee' | 'Hotel' | 'Restaurant' | undefined } } & {
          json: PostRequest
        }
        output: TopicSentimentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
