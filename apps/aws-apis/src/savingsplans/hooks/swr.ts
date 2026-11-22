import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateSavingsPlanKey() {
  return ['CreateSavingsPlan'] as const
}

export function getDeleteQueuedSavingsPlanKey() {
  return ['DeleteQueuedSavingsPlan'] as const
}

export function getDescribeSavingsPlanRatesKey() {
  return ['DescribeSavingsPlanRates'] as const
}

export function getDescribeSavingsPlansKey() {
  return ['DescribeSavingsPlans'] as const
}

export function getDescribeSavingsPlansOfferingRatesKey() {
  return ['DescribeSavingsPlansOfferingRates'] as const
}

export function getDescribeSavingsPlansOfferingsKey() {
  return ['DescribeSavingsPlansOfferings'] as const
}

export function getListTagsForResourceKey() {
  return ['ListTagsForResource'] as const
}

export function getTagResourceKey() {
  return ['TagResource'] as const
}

export function getUntagResourceKey() {
  return ['UntagResource'] as const
}

export function getPostCreateSavingsPlanKey() {
  return ['CreateSavingsPlan', '/CreateSavingsPlan', 'POST'] as const
}

export function usePostCreateSavingsPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateSavingsPlan.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateSavingsPlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSavingsPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateSavingsPlan.$post> }) =>
        parseResponse(client.CreateSavingsPlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteQueuedSavingsPlanKey() {
  return ['DeleteQueuedSavingsPlan', '/DeleteQueuedSavingsPlan', 'POST'] as const
}

export function usePostDeleteQueuedSavingsPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteQueuedSavingsPlan.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteQueuedSavingsPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post> },
      ) => parseResponse(client.DeleteQueuedSavingsPlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSavingsPlanRatesKey() {
  return ['DescribeSavingsPlanRates', '/DescribeSavingsPlanRates', 'POST'] as const
}

export function usePostDescribeSavingsPlanRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlanRates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeSavingsPlanRates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSavingsPlanRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeSavingsPlanRates.$post> },
      ) => parseResponse(client.DescribeSavingsPlanRates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSavingsPlansKey() {
  return ['DescribeSavingsPlans', '/DescribeSavingsPlans', 'POST'] as const
}

export function usePostDescribeSavingsPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlans.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeSavingsPlans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSavingsPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeSavingsPlans.$post> },
      ) => parseResponse(client.DescribeSavingsPlans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSavingsPlansOfferingRatesKey() {
  return [
    'DescribeSavingsPlansOfferingRates',
    '/DescribeSavingsPlansOfferingRates',
    'POST',
  ] as const
}

export function usePostDescribeSavingsPlansOfferingRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferingRates.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSavingsPlansOfferingRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post> },
      ) => parseResponse(client.DescribeSavingsPlansOfferingRates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSavingsPlansOfferingsKey() {
  return ['DescribeSavingsPlansOfferings', '/DescribeSavingsPlansOfferings', 'POST'] as const
}

export function usePostDescribeSavingsPlansOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSavingsPlansOfferingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post> },
      ) => parseResponse(client.DescribeSavingsPlansOfferings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForResourceKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function usePostListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTagsForResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTagsForResource.$post> }) =>
        parseResponse(client.ListTagsForResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagResourceKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function usePostTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TagResource.$post> }) =>
        parseResponse(client.TagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function usePostUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UntagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UntagResource.$post> }) =>
        parseResponse(client.UntagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
