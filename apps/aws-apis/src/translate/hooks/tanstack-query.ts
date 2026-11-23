import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSShineFrontendService_20170701CreateParallelDataKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701DeleteParallelDataKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701DeleteTerminologyKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701DescribeTextTranslationJobKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701GetParallelDataKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701GetTerminologyKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ImportTerminologyKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ListLanguagesKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ListParallelDataKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ListTerminologiesKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701ListTextTranslationJobsKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701StartTextTranslationJobKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701StopTextTranslationJobKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701TagResourceKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701TranslateDocumentKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701TranslateTextKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701UntagResourceKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource'] as const
}

export function getXAmzTargetAWSShineFrontendService_20170701UpdateParallelDataKey() {
  return ['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData'] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701CreateParallelData<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701DeleteParallelData<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701DeleteTerminology<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJob<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701GetParallelData<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701GetTerminology<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ImportTerminology<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListLanguages<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListParallelData<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTerminologies<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobs<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJob<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJob<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TagResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701TagResource<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701TagResourceMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701TranslateDocument<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateTextMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701TranslateTextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701TranslateText<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701TranslateTextMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701UntagResource<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701UntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataMutationKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShineFrontendService20170701UpdateParallelData<
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
                  (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataMutationOptions<
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
