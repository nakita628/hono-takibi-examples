import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTranscribeCreateCallAnalyticsCategoryKey() {
  return ['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory'] as const
}

export function getXAmzTargetTranscribeCreateLanguageModelKey() {
  return ['#X-Amz-Target=Transcribe.CreateLanguageModel'] as const
}

export function getXAmzTargetTranscribeCreateMedicalVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.CreateMedicalVocabulary'] as const
}

export function getXAmzTargetTranscribeCreateVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.CreateVocabulary'] as const
}

export function getXAmzTargetTranscribeCreateVocabularyFilterKey() {
  return ['#X-Amz-Target=Transcribe.CreateVocabularyFilter'] as const
}

export function getXAmzTargetTranscribeDeleteCallAnalyticsCategoryKey() {
  return ['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory'] as const
}

export function getXAmzTargetTranscribeDeleteCallAnalyticsJobKey() {
  return ['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob'] as const
}

export function getXAmzTargetTranscribeDeleteLanguageModelKey() {
  return ['#X-Amz-Target=Transcribe.DeleteLanguageModel'] as const
}

export function getXAmzTargetTranscribeDeleteMedicalTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeDeleteMedicalVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary'] as const
}

export function getXAmzTargetTranscribeDeleteTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.DeleteTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeDeleteVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.DeleteVocabulary'] as const
}

export function getXAmzTargetTranscribeDeleteVocabularyFilterKey() {
  return ['#X-Amz-Target=Transcribe.DeleteVocabularyFilter'] as const
}

export function getXAmzTargetTranscribeDescribeLanguageModelKey() {
  return ['#X-Amz-Target=Transcribe.DescribeLanguageModel'] as const
}

export function getXAmzTargetTranscribeGetCallAnalyticsCategoryKey() {
  return ['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory'] as const
}

export function getXAmzTargetTranscribeGetCallAnalyticsJobKey() {
  return ['#X-Amz-Target=Transcribe.GetCallAnalyticsJob'] as const
}

export function getXAmzTargetTranscribeGetMedicalTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeGetMedicalVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.GetMedicalVocabulary'] as const
}

export function getXAmzTargetTranscribeGetTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.GetTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeGetVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.GetVocabulary'] as const
}

export function getXAmzTargetTranscribeGetVocabularyFilterKey() {
  return ['#X-Amz-Target=Transcribe.GetVocabularyFilter'] as const
}

export function getXAmzTargetTranscribeListCallAnalyticsCategoriesKey() {
  return ['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories'] as const
}

export function getXAmzTargetTranscribeListCallAnalyticsJobsKey() {
  return ['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs'] as const
}

export function getXAmzTargetTranscribeListLanguageModelsKey() {
  return ['#X-Amz-Target=Transcribe.ListLanguageModels'] as const
}

export function getXAmzTargetTranscribeListMedicalTranscriptionJobsKey() {
  return ['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs'] as const
}

export function getXAmzTargetTranscribeListMedicalVocabulariesKey() {
  return ['#X-Amz-Target=Transcribe.ListMedicalVocabularies'] as const
}

export function getXAmzTargetTranscribeListTagsForResourceKey() {
  return ['#X-Amz-Target=Transcribe.ListTagsForResource'] as const
}

export function getXAmzTargetTranscribeListTranscriptionJobsKey() {
  return ['#X-Amz-Target=Transcribe.ListTranscriptionJobs'] as const
}

export function getXAmzTargetTranscribeListVocabulariesKey() {
  return ['#X-Amz-Target=Transcribe.ListVocabularies'] as const
}

export function getXAmzTargetTranscribeListVocabularyFiltersKey() {
  return ['#X-Amz-Target=Transcribe.ListVocabularyFilters'] as const
}

export function getXAmzTargetTranscribeStartCallAnalyticsJobKey() {
  return ['#X-Amz-Target=Transcribe.StartCallAnalyticsJob'] as const
}

export function getXAmzTargetTranscribeStartMedicalTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeStartTranscriptionJobKey() {
  return ['#X-Amz-Target=Transcribe.StartTranscriptionJob'] as const
}

export function getXAmzTargetTranscribeTagResourceKey() {
  return ['#X-Amz-Target=Transcribe.TagResource'] as const
}

export function getXAmzTargetTranscribeUntagResourceKey() {
  return ['#X-Amz-Target=Transcribe.UntagResource'] as const
}

export function getXAmzTargetTranscribeUpdateCallAnalyticsCategoryKey() {
  return ['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory'] as const
}

export function getXAmzTargetTranscribeUpdateMedicalVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary'] as const
}

export function getXAmzTargetTranscribeUpdateVocabularyKey() {
  return ['#X-Amz-Target=Transcribe.UpdateVocabulary'] as const
}

export function getXAmzTargetTranscribeUpdateVocabularyFilterKey() {
  return ['#X-Amz-Target=Transcribe.UpdateVocabularyFilter'] as const
}

export function getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeCreateCallAnalyticsCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryMutationOptions<
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

export function getPostXAmzTargetTranscribeCreateLanguageModelMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateLanguageModel',
    '/#X-Amz-Target=Transcribe.CreateLanguageModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeCreateLanguageModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeCreateLanguageModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.CreateLanguageModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeCreateLanguageModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeCreateLanguageModelMutationOptions<
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

export function getPostXAmzTargetTranscribeCreateMedicalVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.CreateMedicalVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeCreateMedicalVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeCreateMedicalVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.CreateMedicalVocabulary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeCreateMedicalVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeCreateMedicalVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeCreateVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateVocabulary',
    '/#X-Amz-Target=Transcribe.CreateVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeCreateVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeCreateVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.CreateVocabulary'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeCreateVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeCreateVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeCreateVocabularyFilterMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateVocabularyFilter',
    '/#X-Amz-Target=Transcribe.CreateVocabularyFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeCreateVocabularyFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeCreateVocabularyFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.CreateVocabularyFilter'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeCreateVocabularyFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeCreateVocabularyFilterMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteCallAnalyticsCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteCallAnalyticsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteCallAnalyticsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteCallAnalyticsJobMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteLanguageModelMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteLanguageModel',
    '/#X-Amz-Target=Transcribe.DeleteLanguageModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteLanguageModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteLanguageModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteLanguageModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteLanguageModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteLanguageModelMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteMedicalTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteMedicalVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.DeleteMedicalVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteMedicalVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteMedicalVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteMedicalVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteMedicalVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteTranscriptionJob',
    '/#X-Amz-Target=Transcribe.DeleteTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteVocabulary',
    '/#X-Amz-Target=Transcribe.DeleteVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.DeleteVocabulary'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeDeleteVocabularyFilterMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteVocabularyFilter',
    '/#X-Amz-Target=Transcribe.DeleteVocabularyFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDeleteVocabularyFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDeleteVocabularyFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DeleteVocabularyFilter'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDeleteVocabularyFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDeleteVocabularyFilterMutationOptions<
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

export function getPostXAmzTargetTranscribeDescribeLanguageModelMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.DescribeLanguageModel',
    '/#X-Amz-Target=Transcribe.DescribeLanguageModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeDescribeLanguageModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeDescribeLanguageModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.DescribeLanguageModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeDescribeLanguageModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeDescribeLanguageModelMutationOptions<
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

export function getPostXAmzTargetTranscribeGetCallAnalyticsCategoryMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.GetCallAnalyticsCategory',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetCallAnalyticsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetCallAnalyticsCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetCallAnalyticsCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetCallAnalyticsCategoryMutationOptions<
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

export function getPostXAmzTargetTranscribeGetCallAnalyticsJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.GetCallAnalyticsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetCallAnalyticsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetCallAnalyticsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetCallAnalyticsJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetCallAnalyticsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetCallAnalyticsJobMutationOptions<
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

export function getPostXAmzTargetTranscribeGetMedicalTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetMedicalTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetMedicalTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetMedicalTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetMedicalTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeGetMedicalVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.GetMedicalVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetMedicalVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetMedicalVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetMedicalVocabulary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetMedicalVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetMedicalVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeGetTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetTranscriptionJob',
    '/#X-Amz-Target=Transcribe.GetTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeGetVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetVocabulary',
    '/#X-Amz-Target=Transcribe.GetVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.GetVocabulary'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeGetVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeGetVocabularyFilterMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.GetVocabularyFilter',
    '/#X-Amz-Target=Transcribe.GetVocabularyFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeGetVocabularyFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeGetVocabularyFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.GetVocabularyFilter'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeGetVocabularyFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeGetVocabularyFilterMutationOptions<
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

export function getPostXAmzTargetTranscribeListCallAnalyticsCategoriesMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListCallAnalyticsCategories',
    '/#X-Amz-Target=Transcribe.ListCallAnalyticsCategories',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListCallAnalyticsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListCallAnalyticsCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListCallAnalyticsCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListCallAnalyticsCategoriesMutationOptions<
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

export function getPostXAmzTargetTranscribeListCallAnalyticsJobsMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListCallAnalyticsJobs',
    '/#X-Amz-Target=Transcribe.ListCallAnalyticsJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListCallAnalyticsJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListCallAnalyticsJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListCallAnalyticsJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListCallAnalyticsJobsMutationOptions<
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

export function getPostXAmzTargetTranscribeListLanguageModelsMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListLanguageModels',
    '/#X-Amz-Target=Transcribe.ListLanguageModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListLanguageModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListLanguageModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListLanguageModels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListLanguageModels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListLanguageModelsMutationOptions<
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

export function getPostXAmzTargetTranscribeListMedicalTranscriptionJobsMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs',
    '/#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListMedicalTranscriptionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListMedicalTranscriptionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListMedicalTranscriptionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListMedicalTranscriptionJobsMutationOptions<
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

export function getPostXAmzTargetTranscribeListMedicalVocabulariesMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListMedicalVocabularies',
    '/#X-Amz-Target=Transcribe.ListMedicalVocabularies',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListMedicalVocabulariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListMedicalVocabulariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListMedicalVocabularies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListMedicalVocabularies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListMedicalVocabulariesMutationOptions<
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

export function getPostXAmzTargetTranscribeListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListTagsForResource',
    '/#X-Amz-Target=Transcribe.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetTranscribeListTranscriptionJobsMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListTranscriptionJobs',
    '/#X-Amz-Target=Transcribe.ListTranscriptionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListTranscriptionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListTranscriptionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListTranscriptionJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListTranscriptionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListTranscriptionJobsMutationOptions<
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

export function getPostXAmzTargetTranscribeListVocabulariesMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListVocabularies',
    '/#X-Amz-Target=Transcribe.ListVocabularies',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListVocabulariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListVocabulariesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.ListVocabularies'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeListVocabularies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListVocabulariesMutationOptions<
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

export function getPostXAmzTargetTranscribeListVocabularyFiltersMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.ListVocabularyFilters',
    '/#X-Amz-Target=Transcribe.ListVocabularyFilters',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeListVocabularyFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeListVocabularyFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.ListVocabularyFilters'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeListVocabularyFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeListVocabularyFiltersMutationOptions<
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

export function getPostXAmzTargetTranscribeStartCallAnalyticsJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.StartCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.StartCallAnalyticsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeStartCallAnalyticsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeStartCallAnalyticsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.StartCallAnalyticsJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeStartCallAnalyticsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeStartCallAnalyticsJobMutationOptions<
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

export function getPostXAmzTargetTranscribeStartMedicalTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeStartMedicalTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeStartMedicalTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeStartMedicalTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeStartMedicalTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeStartTranscriptionJobMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.StartTranscriptionJob',
    '/#X-Amz-Target=Transcribe.StartTranscriptionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeStartTranscriptionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeStartTranscriptionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.StartTranscriptionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeStartTranscriptionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeStartTranscriptionJobMutationOptions<
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

export function getPostXAmzTargetTranscribeTagResourceMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.TagResource',
    '/#X-Amz-Target=Transcribe.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeTagResourceMutationOptions<
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

export function getPostXAmzTargetTranscribeUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.UntagResource',
    '/#X-Amz-Target=Transcribe.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeUntagResourceMutationOptions<
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

export function getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeUpdateCallAnalyticsCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryMutationOptions<
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

export function getPostXAmzTargetTranscribeUpdateMedicalVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.UpdateMedicalVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeUpdateMedicalVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeUpdateMedicalVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeUpdateMedicalVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeUpdateMedicalVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeUpdateVocabularyMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateVocabulary',
    '/#X-Amz-Target=Transcribe.UpdateVocabulary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeUpdateVocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeUpdateVocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Transcribe.UpdateVocabulary'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTranscribeUpdateVocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeUpdateVocabularyMutationOptions<
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

export function getPostXAmzTargetTranscribeUpdateVocabularyFilterMutationKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateVocabularyFilter',
    '/#X-Amz-Target=Transcribe.UpdateVocabularyFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetTranscribeUpdateVocabularyFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTranscribeUpdateVocabularyFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Transcribe.UpdateVocabularyFilter'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTranscribeUpdateVocabularyFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTranscribeUpdateVocabularyFilterMutationOptions<
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
