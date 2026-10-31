import { createRoute, z } from '@hono/zod-openapi'

const SentimentAnalysisRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          api_key: z.string().openapi({ description: 'Your API Key' }),
          text: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The text that you want to analyze. It should not contain HTML tags.',
            }),
        })
        .openapi({ required: ['api_key'] }),
    },
  },
}

export const post10AdultContentDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/AdultContentDetection.json',
  tags: ['Document-Classification'],
  summary: 'Classifies the Document as adult or noadult',
  description:
    'The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.',
  operationId: 'AdultContentDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10CommercialDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/CommercialDetection.json',
  tags: ['Document-Classification'],
  summary: 'Classifies the Document as commercial or nocommercial',
  description:
    'The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.',
  operationId: 'CommercialDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10DocumentSimilarityJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/DocumentSimilarity.json',
  tags: ['Metrics'],
  summary: 'Estimates the similarity between 2 Documents',
  description:
    'The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.',
  operationId: 'DocumentSimilarity',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              api_key: z.string().openapi({ description: 'Your API Key' }),
              copy: z
                .string()
                .exactOptional()
                .openapi({ description: 'The second text. It should not contain HTML tags.' }),
              original: z
                .string()
                .exactOptional()
                .openapi({ description: 'The first text. It should not contain HTML tags.' }),
            })
            .openapi({ required: ['api_key'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10EducationalDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/EducationalDetection.json',
  tags: ['Document-Classification'],
  summary: 'Classifies the Document as educational or noeducational',
  description:
    'The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.',
  operationId: 'EducationalDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10GenderDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/GenderDetection.json',
  tags: ['Document-Classification'],
  summary: 'Gender Detection Service',
  description:
    'The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.',
  operationId: 'GenderDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10KeywordExtractionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/KeywordExtraction.json',
  tags: ['Information-Retrieval'],
  summary: 'Extracts the Keywords of the Document',
  description:
    'The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.',
  operationId: 'KeywordExtraction',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              api_key: z.string().openapi({ description: 'Your API Key' }),
              n: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(5),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of keyword combinations (n-grams) that you wish to extract.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The text that you want to analyze. It should not contain HTML tags.',
                }),
            })
            .openapi({ required: ['api_key'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10LanguageDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/LanguageDetection.json',
  tags: ['Document-Classification'],
  summary: 'Identifies the Language of the Document',
  description:
    'The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.',
  operationId: 'LanguageDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10ReadabilityAssessmentJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/ReadabilityAssessment.json',
  tags: ['Document-Classification'],
  summary: 'Evaluates the Readability of the Document',
  description:
    'The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.',
  operationId: 'ReadabilityAssessment',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10SentimentAnalysisJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/SentimentAnalysis.json',
  tags: ['Document-Classification'],
  summary: 'Identifies the Sentiment of the Document',
  description:
    'The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.',
  operationId: 'SentimentAnalysis',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10SpamDetectionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/SpamDetection.json',
  tags: ['Document-Classification'],
  summary: 'Classifies the Document as spam or nospam',
  description:
    'The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.',
  operationId: 'SpamDetection',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10SubjectivityAnalysisJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/SubjectivityAnalysis.json',
  tags: ['Document-Classification'],
  summary: 'Classifies Document as Subjective or Objective',
  description:
    'The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.',
  operationId: 'SubjectivityAnalysis',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10TextExtractionJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/TextExtraction.json',
  tags: ['Information-Retrieval'],
  summary: 'Extracts the clear text from Webpage',
  description:
    'The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.',
  operationId: 'TextExtraction',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              api_key: z.string().openapi({ description: 'Your API Key' }),
              text: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTML source of the webpage.' }),
            })
            .openapi({ required: ['api_key'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10TopicClassificationJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/TopicClassification.json',
  tags: ['Document-Classification'],
  summary: 'Identifies the Topic of the Document',
  description:
    'The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.',
  operationId: 'TopicClassification',
  request: { body: SentimentAnalysisRequestBody },
  responses: { 200: { description: 'No response was specified' } },
})

export const post10TwitterSentimentAnalysisJsonRoute = createRoute({
  method: 'post',
  path: '/1.0/TwitterSentimentAnalysis.json',
  tags: ['Document-Classification'],
  summary: 'Identifies the Sentiment of Twitter Messages',
  description:
    'The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.',
  operationId: 'TwitterSentimentAnalysis',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              api_key: z.string().openapi({ description: 'Your API Key' }),
              text: z
                .string()
                .exactOptional()
                .openapi({ description: 'The text of the tweet that we evaluate.' }),
            })
            .openapi({ required: ['api_key'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'No response was specified' } },
})
