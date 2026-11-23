import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701CreateParallelData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701CreateParallelDataKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701DeleteParallelData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701DeleteParallelDataKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701DeleteTerminology<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701DeleteTerminologyKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701GetParallelData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701GetParallelDataKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701GetTerminology<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701GetTerminologyKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ImportTerminology<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ImportTerminologyKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListLanguages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ListLanguagesKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListParallelData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ListParallelDataKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTerminologies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ListTerminologiesKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701TagResourceKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TagResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701TagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701TranslateDocument<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701TranslateDocumentKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701TranslateTextKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701TranslateText<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701TranslateTextKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShineFrontendService20170701UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataKey() {
  return [
    '#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData',
    '/#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShineFrontendService20170701UpdateParallelData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShineFrontendService20170701UpdateParallelDataKey()
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
            (typeof client)['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
