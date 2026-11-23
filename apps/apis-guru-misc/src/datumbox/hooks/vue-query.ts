import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_1_0Key() {
  return ['1.0'] as const
}

export function getPost10AdultContentDetectionJsonMutationKey() {
  return ['1.0', '/1.0/AdultContentDetection.json', 'POST'] as const
}

export function getPost10AdultContentDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10AdultContentDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['AdultContentDetection.json'].$post(args, options))
    },
  })
}

export function usePost10AdultContentDetectionJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['AdultContentDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10AdultContentDetectionJsonMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10CommercialDetectionJsonMutationKey() {
  return ['1.0', '/1.0/CommercialDetection.json', 'POST'] as const
}

export function getPost10CommercialDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['CommercialDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10CommercialDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['CommercialDetection.json'].$post(args, options))
    },
  })
}

export function usePost10CommercialDetectionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['CommercialDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['CommercialDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10CommercialDetectionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10DocumentSimilarityJsonMutationKey() {
  return ['1.0', '/1.0/DocumentSimilarity.json', 'POST'] as const
}

export function getPost10DocumentSimilarityJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10DocumentSimilarityJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['DocumentSimilarity.json'].$post(args, options))
    },
  })
}

export function usePost10DocumentSimilarityJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['DocumentSimilarity.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10DocumentSimilarityJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10EducationalDetectionJsonMutationKey() {
  return ['1.0', '/1.0/EducationalDetection.json', 'POST'] as const
}

export function getPost10EducationalDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['EducationalDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10EducationalDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['EducationalDetection.json'].$post(args, options))
    },
  })
}

export function usePost10EducationalDetectionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['EducationalDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['EducationalDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10EducationalDetectionJsonMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10GenderDetectionJsonMutationKey() {
  return ['1.0', '/1.0/GenderDetection.json', 'POST'] as const
}

export function getPost10GenderDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['GenderDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10GenderDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['GenderDetection.json'].$post(args, options))
    },
  })
}

export function usePost10GenderDetectionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['GenderDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['GenderDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10GenderDetectionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10KeywordExtractionJsonMutationKey() {
  return ['1.0', '/1.0/KeywordExtraction.json', 'POST'] as const
}

export function getPost10KeywordExtractionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10KeywordExtractionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['KeywordExtraction.json'].$post(args, options))
    },
  })
}

export function usePost10KeywordExtractionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['KeywordExtraction.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10KeywordExtractionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10LanguageDetectionJsonMutationKey() {
  return ['1.0', '/1.0/LanguageDetection.json', 'POST'] as const
}

export function getPost10LanguageDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['LanguageDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10LanguageDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['LanguageDetection.json'].$post(args, options))
    },
  })
}

export function usePost10LanguageDetectionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['LanguageDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['LanguageDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10LanguageDetectionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10ReadabilityAssessmentJsonMutationKey() {
  return ['1.0', '/1.0/ReadabilityAssessment.json', 'POST'] as const
}

export function getPost10ReadabilityAssessmentJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10ReadabilityAssessmentJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['ReadabilityAssessment.json'].$post(args, options))
    },
  })
}

export function usePost10ReadabilityAssessmentJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['ReadabilityAssessment.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10ReadabilityAssessmentJsonMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10SentimentAnalysisJsonMutationKey() {
  return ['1.0', '/1.0/SentimentAnalysis.json', 'POST'] as const
}

export function getPost10SentimentAnalysisJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10SentimentAnalysisJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['SentimentAnalysis.json'].$post(args, options))
    },
  })
}

export function usePost10SentimentAnalysisJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['SentimentAnalysis.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10SentimentAnalysisJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10SpamDetectionJsonMutationKey() {
  return ['1.0', '/1.0/SpamDetection.json', 'POST'] as const
}

export function getPost10SpamDetectionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SpamDetection.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10SpamDetectionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['SpamDetection.json'].$post(args, options))
    },
  })
}

export function usePost10SpamDetectionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['SpamDetection.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['SpamDetection.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10SpamDetectionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10SubjectivityAnalysisJsonMutationKey() {
  return ['1.0', '/1.0/SubjectivityAnalysis.json', 'POST'] as const
}

export function getPost10SubjectivityAnalysisJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10SubjectivityAnalysisJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['SubjectivityAnalysis.json'].$post(args, options))
    },
  })
}

export function usePost10SubjectivityAnalysisJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['SubjectivityAnalysis.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10SubjectivityAnalysisJsonMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10TextExtractionJsonMutationKey() {
  return ['1.0', '/1.0/TextExtraction.json', 'POST'] as const
}

export function getPost10TextExtractionJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TextExtraction.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10TextExtractionJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['TextExtraction.json'].$post(args, options))
    },
  })
}

export function usePost10TextExtractionJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['TextExtraction.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['TextExtraction.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10TextExtractionJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10TopicClassificationJsonMutationKey() {
  return ['1.0', '/1.0/TopicClassification.json', 'POST'] as const
}

export function getPost10TopicClassificationJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TopicClassification.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10TopicClassificationJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['TopicClassification.json'].$post(args, options))
    },
  })
}

export function usePost10TopicClassificationJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1.0']['TopicClassification.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['TopicClassification.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10TopicClassificationJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost10TwitterSentimentAnalysisJsonMutationKey() {
  return ['1.0', '/1.0/TwitterSentimentAnalysis.json', 'POST'] as const
}

export function getPost10TwitterSentimentAnalysisJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost10TwitterSentimentAnalysisJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>,
    ) {
      return parseResponse(client['1.0']['TwitterSentimentAnalysis.json'].$post(args, options))
    },
  })
}

export function usePost10TwitterSentimentAnalysisJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1.0']['TwitterSentimentAnalysis.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost10TwitterSentimentAnalysisJsonMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
