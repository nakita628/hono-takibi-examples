import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_1_0Key() {
  return ['1.0'] as const
}

export function getPost10AdultContentDetectionJsonKey() {
  return ['1.0', '/1.0/AdultContentDetection.json', 'POST'] as const
}

export function usePost10AdultContentDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10AdultContentDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['AdultContentDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10CommercialDetectionJsonKey() {
  return ['1.0', '/1.0/CommercialDetection.json', 'POST'] as const
}

export function usePost10CommercialDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['CommercialDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10CommercialDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['CommercialDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10DocumentSimilarityJsonKey() {
  return ['1.0', '/1.0/DocumentSimilarity.json', 'POST'] as const
}

export function usePost10DocumentSimilarityJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10DocumentSimilarityJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']> },
      ) => parseResponse(client['1.0']['DocumentSimilarity.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10EducationalDetectionJsonKey() {
  return ['1.0', '/1.0/EducationalDetection.json', 'POST'] as const
}

export function usePost10EducationalDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['EducationalDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10EducationalDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['EducationalDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10GenderDetectionJsonKey() {
  return ['1.0', '/1.0/GenderDetection.json', 'POST'] as const
}

export function usePost10GenderDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['GenderDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10GenderDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['GenderDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10KeywordExtractionJsonKey() {
  return ['1.0', '/1.0/KeywordExtraction.json', 'POST'] as const
}

export function usePost10KeywordExtractionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10KeywordExtractionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']> },
      ) => parseResponse(client['1.0']['KeywordExtraction.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10LanguageDetectionJsonKey() {
  return ['1.0', '/1.0/LanguageDetection.json', 'POST'] as const
}

export function usePost10LanguageDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['LanguageDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10LanguageDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['LanguageDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10ReadabilityAssessmentJsonKey() {
  return ['1.0', '/1.0/ReadabilityAssessment.json', 'POST'] as const
}

export function usePost10ReadabilityAssessmentJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10ReadabilityAssessmentJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']> },
      ) => parseResponse(client['1.0']['ReadabilityAssessment.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10SentimentAnalysisJsonKey() {
  return ['1.0', '/1.0/SentimentAnalysis.json', 'POST'] as const
}

export function usePost10SentimentAnalysisJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10SentimentAnalysisJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']> },
      ) => parseResponse(client['1.0']['SentimentAnalysis.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10SpamDetectionJsonKey() {
  return ['1.0', '/1.0/SpamDetection.json', 'POST'] as const
}

export function usePost10SpamDetectionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SpamDetection.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10SpamDetectionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']> },
      ) => parseResponse(client['1.0']['SpamDetection.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10SubjectivityAnalysisJsonKey() {
  return ['1.0', '/1.0/SubjectivityAnalysis.json', 'POST'] as const
}

export function usePost10SubjectivityAnalysisJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10SubjectivityAnalysisJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']> },
      ) => parseResponse(client['1.0']['SubjectivityAnalysis.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10TextExtractionJsonKey() {
  return ['1.0', '/1.0/TextExtraction.json', 'POST'] as const
}

export function usePost10TextExtractionJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TextExtraction.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10TextExtractionJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']> },
      ) => parseResponse(client['1.0']['TextExtraction.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10TopicClassificationJsonKey() {
  return ['1.0', '/1.0/TopicClassification.json', 'POST'] as const
}

export function usePost10TopicClassificationJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TopicClassification.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10TopicClassificationJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']> },
      ) => parseResponse(client['1.0']['TopicClassification.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost10TwitterSentimentAnalysisJsonKey() {
  return ['1.0', '/1.0/TwitterSentimentAnalysis.json', 'POST'] as const
}

export function usePost10TwitterSentimentAnalysisJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost10TwitterSentimentAnalysisJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>
        },
      ) => parseResponse(client['1.0']['TwitterSentimentAnalysis.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
