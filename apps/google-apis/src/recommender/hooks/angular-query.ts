import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function getV1beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >({
    queryKey: getV1beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameMarkAcceptedMutationKey() {
  return ['v1beta1', '/v1beta1/:name:markAccepted', 'POST'] as const
}

export function getPostV1beta1NameMarkAcceptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:markAccepted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:markAccepted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMarkAcceptedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:markAccepted']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:markAccepted'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMarkAccepted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:markAccepted']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:markAccepted']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1NameMarkAcceptedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameMarkClaimedMutationKey() {
  return ['v1beta1', '/v1beta1/:name:markClaimed', 'POST'] as const
}

export function getPostV1beta1NameMarkClaimedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:markClaimed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:markClaimed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMarkClaimedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:markClaimed']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:markClaimed'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMarkClaimed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:markClaimed']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:markClaimed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1NameMarkClaimedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameMarkDismissedMutationKey() {
  return ['v1beta1', '/v1beta1/:name:markDismissed', 'POST'] as const
}

export function getPostV1beta1NameMarkDismissedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:markDismissed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:markDismissed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMarkDismissedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:markDismissed']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:markDismissed'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMarkDismissed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:markDismissed']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:markDismissed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1NameMarkDismissedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameMarkFailedMutationKey() {
  return ['v1beta1', '/v1beta1/:name:markFailed', 'POST'] as const
}

export function getPostV1beta1NameMarkFailedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:markFailed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:markFailed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMarkFailedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:markFailed']['$post']>) {
      return parseResponse(client.v1beta1[':name:markFailed'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMarkFailed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:markFailed']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:markFailed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1NameMarkFailedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameMarkSucceededMutationKey() {
  return ['v1beta1', '/v1beta1/:name:markSucceeded', 'POST'] as const
}

export function getPostV1beta1NameMarkSucceededMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMarkSucceededMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:markSucceeded'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMarkSucceeded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1NameMarkSucceededMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1ParentInsightsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['insights']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/insights', args] as const
}

export function getV1beta1ParentInsightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentInsightsQueryKey>
  >({
    queryKey: getV1beta1ParentInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].insights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['insights']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['insights']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1ParentInsightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentRecommendationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/recommendations', args] as const
}

export function getV1beta1ParentRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentRecommendationsQueryKey>
  >({
    queryKey: getV1beta1ParentRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1ParentRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
