import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeCreateCallAnalyticsCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeCreateCallAnalyticsCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeCreateLanguageModelKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateLanguageModel',
    '/#X-Amz-Target=Transcribe.CreateLanguageModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeCreateLanguageModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeCreateLanguageModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.CreateLanguageModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.CreateLanguageModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeCreateMedicalVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.CreateMedicalVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeCreateMedicalVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeCreateMedicalVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.CreateMedicalVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.CreateMedicalVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeCreateVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateVocabulary',
    '/#X-Amz-Target=Transcribe.CreateVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeCreateVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeCreateVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.CreateVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.CreateVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeCreateVocabularyFilterKey() {
  return [
    '#X-Amz-Target=Transcribe.CreateVocabularyFilter',
    '/#X-Amz-Target=Transcribe.CreateVocabularyFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeCreateVocabularyFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeCreateVocabularyFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.CreateVocabularyFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.CreateVocabularyFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteCallAnalyticsCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteCallAnalyticsCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteCallAnalyticsJobKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteCallAnalyticsJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteCallAnalyticsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteLanguageModelKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteLanguageModel',
    '/#X-Amz-Target=Transcribe.DeleteLanguageModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteLanguageModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteLanguageModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteLanguageModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteLanguageModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteMedicalTranscriptionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteMedicalTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteMedicalVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.DeleteMedicalVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteMedicalVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteMedicalVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteMedicalVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteTranscriptionJob',
    '/#X-Amz-Target=Transcribe.DeleteTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteTranscriptionJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteTranscriptionJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteVocabulary',
    '/#X-Amz-Target=Transcribe.DeleteVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDeleteVocabularyFilterKey() {
  return [
    '#X-Amz-Target=Transcribe.DeleteVocabularyFilter',
    '/#X-Amz-Target=Transcribe.DeleteVocabularyFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDeleteVocabularyFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDeleteVocabularyFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DeleteVocabularyFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DeleteVocabularyFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeDescribeLanguageModelKey() {
  return [
    '#X-Amz-Target=Transcribe.DescribeLanguageModel',
    '/#X-Amz-Target=Transcribe.DescribeLanguageModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeDescribeLanguageModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeDescribeLanguageModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.DescribeLanguageModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.DescribeLanguageModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetCallAnalyticsCategoryKey() {
  return [
    '#X-Amz-Target=Transcribe.GetCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.GetCallAnalyticsCategory',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetCallAnalyticsCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetCallAnalyticsCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetCallAnalyticsCategory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetCallAnalyticsJobKey() {
  return [
    '#X-Amz-Target=Transcribe.GetCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.GetCallAnalyticsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetCallAnalyticsJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetCallAnalyticsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetCallAnalyticsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetCallAnalyticsJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetMedicalTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetMedicalTranscriptionJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetMedicalTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetMedicalVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.GetMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.GetMedicalVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetMedicalVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetMedicalVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetMedicalVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetMedicalVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.GetTranscriptionJob',
    '/#X-Amz-Target=Transcribe.GetTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetTranscriptionJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetTranscriptionJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.GetVocabulary',
    '/#X-Amz-Target=Transcribe.GetVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabulary']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Transcribe.GetVocabulary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeGetVocabularyFilterKey() {
  return [
    '#X-Amz-Target=Transcribe.GetVocabularyFilter',
    '/#X-Amz-Target=Transcribe.GetVocabularyFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeGetVocabularyFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeGetVocabularyFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.GetVocabularyFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.GetVocabularyFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListCallAnalyticsCategoriesKey() {
  return [
    '#X-Amz-Target=Transcribe.ListCallAnalyticsCategories',
    '/#X-Amz-Target=Transcribe.ListCallAnalyticsCategories',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListCallAnalyticsCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListCallAnalyticsCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListCallAnalyticsCategories'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListCallAnalyticsJobsKey() {
  return [
    '#X-Amz-Target=Transcribe.ListCallAnalyticsJobs',
    '/#X-Amz-Target=Transcribe.ListCallAnalyticsJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListCallAnalyticsJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListCallAnalyticsJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListCallAnalyticsJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListLanguageModelsKey() {
  return [
    '#X-Amz-Target=Transcribe.ListLanguageModels',
    '/#X-Amz-Target=Transcribe.ListLanguageModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListLanguageModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListLanguageModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListLanguageModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListLanguageModels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListMedicalTranscriptionJobsKey() {
  return [
    '#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs',
    '/#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListMedicalTranscriptionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListMedicalTranscriptionJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListMedicalVocabulariesKey() {
  return [
    '#X-Amz-Target=Transcribe.ListMedicalVocabularies',
    '/#X-Amz-Target=Transcribe.ListMedicalVocabularies',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListMedicalVocabularies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListMedicalVocabulariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListMedicalVocabularies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListMedicalVocabularies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Transcribe.ListTagsForResource',
    '/#X-Amz-Target=Transcribe.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListTranscriptionJobsKey() {
  return [
    '#X-Amz-Target=Transcribe.ListTranscriptionJobs',
    '/#X-Amz-Target=Transcribe.ListTranscriptionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListTranscriptionJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListTranscriptionJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListTranscriptionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListTranscriptionJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListVocabulariesKey() {
  return [
    '#X-Amz-Target=Transcribe.ListVocabularies',
    '/#X-Amz-Target=Transcribe.ListVocabularies',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListVocabularies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListVocabulariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListVocabularies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListVocabularies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeListVocabularyFiltersKey() {
  return [
    '#X-Amz-Target=Transcribe.ListVocabularyFilters',
    '/#X-Amz-Target=Transcribe.ListVocabularyFilters',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeListVocabularyFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeListVocabularyFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.ListVocabularyFilters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.ListVocabularyFilters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeStartCallAnalyticsJobKey() {
  return [
    '#X-Amz-Target=Transcribe.StartCallAnalyticsJob',
    '/#X-Amz-Target=Transcribe.StartCallAnalyticsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeStartCallAnalyticsJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeStartCallAnalyticsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.StartCallAnalyticsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.StartCallAnalyticsJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeStartMedicalTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob',
    '/#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeStartMedicalTranscriptionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeStartMedicalTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeStartTranscriptionJobKey() {
  return [
    '#X-Amz-Target=Transcribe.StartTranscriptionJob',
    '/#X-Amz-Target=Transcribe.StartTranscriptionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeStartTranscriptionJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeStartTranscriptionJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.StartTranscriptionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.StartTranscriptionJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeTagResourceKey() {
  return [
    '#X-Amz-Target=Transcribe.TagResource',
    '/#X-Amz-Target=Transcribe.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=Transcribe.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeUntagResourceKey() {
  return [
    '#X-Amz-Target=Transcribe.UntagResource',
    '/#X-Amz-Target=Transcribe.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UntagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Transcribe.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory',
    '/#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeUpdateCallAnalyticsCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeUpdateCallAnalyticsCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeUpdateMedicalVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateMedicalVocabulary',
    '/#X-Amz-Target=Transcribe.UpdateMedicalVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeUpdateMedicalVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeUpdateMedicalVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.UpdateMedicalVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeUpdateVocabularyKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateVocabulary',
    '/#X-Amz-Target=Transcribe.UpdateVocabulary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeUpdateVocabulary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeUpdateVocabularyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabulary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.UpdateVocabulary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTranscribeUpdateVocabularyFilterKey() {
  return [
    '#X-Amz-Target=Transcribe.UpdateVocabularyFilter',
    '/#X-Amz-Target=Transcribe.UpdateVocabularyFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetTranscribeUpdateVocabularyFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTranscribeUpdateVocabularyFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Transcribe.UpdateVocabularyFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Transcribe.UpdateVocabularyFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
