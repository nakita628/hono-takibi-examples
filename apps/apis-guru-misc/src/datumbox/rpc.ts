import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post10AdultContentDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['AdultContentDetection.json'].$post(args, options))
}

export async function post10CommercialDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['CommercialDetection.json'].$post(args, options))
}

export async function post10DocumentSimilarityJson(
  args: InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['DocumentSimilarity.json'].$post(args, options))
}

export async function post10EducationalDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['EducationalDetection.json'].$post(args, options))
}

export async function post10GenderDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['GenderDetection.json'].$post(args, options))
}

export async function post10KeywordExtractionJson(
  args: InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['KeywordExtraction.json'].$post(args, options))
}

export async function post10LanguageDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['LanguageDetection.json'].$post(args, options))
}

export async function post10ReadabilityAssessmentJson(
  args: InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['ReadabilityAssessment.json'].$post(args, options))
}

export async function post10SentimentAnalysisJson(
  args: InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['SentimentAnalysis.json'].$post(args, options))
}

export async function post10SpamDetectionJson(
  args: InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['SpamDetection.json'].$post(args, options))
}

export async function post10SubjectivityAnalysisJson(
  args: InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['SubjectivityAnalysis.json'].$post(args, options))
}

export async function post10TextExtractionJson(
  args: InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['TextExtraction.json'].$post(args, options))
}

export async function post10TopicClassificationJson(
  args: InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['TopicClassification.json'].$post(args, options))
}

export async function post10TwitterSentimentAnalysisJson(
  args: InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1.0']['TwitterSentimentAnalysis.json'].$post(args, options))
}
