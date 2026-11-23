import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostCreateSavingsPlanMutationKey() {
  return ['CreateSavingsPlan', '/CreateSavingsPlan', 'POST'] as const
}

export function getPostCreateSavingsPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateSavingsPlan.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateSavingsPlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSavingsPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateSavingsPlan.$post>) {
      return parseResponse(client.CreateSavingsPlan.$post(args, options))
    },
  })
}

export function usePostCreateSavingsPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.CreateSavingsPlan.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.CreateSavingsPlan.$post>,
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
  const mutationDefaults = getPostCreateSavingsPlanMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteQueuedSavingsPlanMutationKey() {
  return ['DeleteQueuedSavingsPlan', '/DeleteQueuedSavingsPlan', 'POST'] as const
}

export function getPostDeleteQueuedSavingsPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteQueuedSavingsPlan.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteQueuedSavingsPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post>) {
      return parseResponse(client.DeleteQueuedSavingsPlan.$post(args, options))
    },
  })
}

export function usePostDeleteQueuedSavingsPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteQueuedSavingsPlan.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.DeleteQueuedSavingsPlan.$post>,
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
  const mutationDefaults = getPostDeleteQueuedSavingsPlanMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeSavingsPlanRatesMutationKey() {
  return ['DescribeSavingsPlanRates', '/DescribeSavingsPlanRates', 'POST'] as const
}

export function getPostDescribeSavingsPlanRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlanRates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeSavingsPlanRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSavingsPlanRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeSavingsPlanRates.$post>) {
      return parseResponse(client.DescribeSavingsPlanRates.$post(args, options))
    },
  })
}

export function usePostDescribeSavingsPlanRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.DescribeSavingsPlanRates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.DescribeSavingsPlanRates.$post>,
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
  const mutationDefaults = getPostDescribeSavingsPlanRatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeSavingsPlansMutationKey() {
  return ['DescribeSavingsPlans', '/DescribeSavingsPlans', 'POST'] as const
}

export function getPostDescribeSavingsPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlans.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeSavingsPlans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSavingsPlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeSavingsPlans.$post>) {
      return parseResponse(client.DescribeSavingsPlans.$post(args, options))
    },
  })
}

export function usePostDescribeSavingsPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlans.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.DescribeSavingsPlans.$post>,
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
  const mutationDefaults = getPostDescribeSavingsPlansMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeSavingsPlansOfferingRatesMutationKey() {
  return [
    'DescribeSavingsPlansOfferingRates',
    '/DescribeSavingsPlansOfferingRates',
    'POST',
  ] as const
}

export function getPostDescribeSavingsPlansOfferingRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferingRates.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSavingsPlansOfferingRatesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post>,
    ) {
      return parseResponse(client.DescribeSavingsPlansOfferingRates.$post(args, options))
    },
  })
}

export function usePostDescribeSavingsPlansOfferingRates<
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
                Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferingRates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.DescribeSavingsPlansOfferingRates.$post>,
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
  const mutationDefaults = getPostDescribeSavingsPlansOfferingRatesMutationOptions<
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

export function getPostDescribeSavingsPlansOfferingsMutationKey() {
  return ['DescribeSavingsPlansOfferings', '/DescribeSavingsPlansOfferings', 'POST'] as const
}

export function getPostDescribeSavingsPlansOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSavingsPlansOfferingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post>) {
      return parseResponse(client.DescribeSavingsPlansOfferings.$post(args, options))
    },
  })
}

export function usePostDescribeSavingsPlansOfferings<
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
                Awaited<ReturnType<typeof client.DescribeSavingsPlansOfferings.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.DescribeSavingsPlansOfferings.$post>,
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
  const mutationDefaults = getPostDescribeSavingsPlansOfferingsMutationOptions<
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

export function getPostListTagsForResourceMutationKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function getPostListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTagsForResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTagsForResource.$post>) {
      return parseResponse(client.ListTagsForResource.$post(args, options))
    },
  })
}

export function usePostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListTagsForResource.$post>,
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
  const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
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

export function getPostTagResourceMutationKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function getPostTagResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.TagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TagResource.$post>) {
      return parseResponse(client.TagResource.$post(args, options))
    },
  })
}

export function usePostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TagResource.$post>,
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
  const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUntagResourceMutationKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function getPostUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UntagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UntagResource.$post>) {
      return parseResponse(client.UntagResource.$post(args, options))
    },
  })
}

export function usePostUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.UntagResource.$post>,
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
  const mutationDefaults = getPostUntagResourceMutationOptions<TError, TOnMutateResult>(
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
