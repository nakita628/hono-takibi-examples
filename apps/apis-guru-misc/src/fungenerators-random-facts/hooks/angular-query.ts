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

export function getFactKey() {
  return ['fact'] as const
}

export function getFactQueryKey(args: InferRequestType<typeof client.fact.$get>) {
  return ['fact', '/fact', args] as const
}

export function getFactQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactQueryKey>
  >({
    queryKey: getFactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFact<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutFactMutationKey() {
  return ['fact', '/fact', 'PUT'] as const
}

export function getPutFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
    TError,
    InferRequestType<typeof client.fact.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$put>) {
      return parseResponse(client.fact.$put(args, options))
    },
  })
}

export function injectPutFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
        TError,
        InferRequestType<typeof client.fact.$put>,
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
    const mutationDefaults = getPutFactMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFactMutationKey() {
  return ['fact', '/fact', 'DELETE'] as const
}

export function getDeleteFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
    TError,
    InferRequestType<typeof client.fact.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$delete>) {
      return parseResponse(client.fact.$delete(args, options))
    },
  })
}

export function injectDeleteFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
        TError,
        InferRequestType<typeof client.fact.$delete>,
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
    const mutationDefaults = getDeleteFactMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFactCategoriesQueryKey(
  args: InferRequestType<typeof client.fact.categories.$get>,
) {
  return ['fact', '/fact/categories', args] as const
}

export function getFactCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactCategoriesQueryKey>
  >({
    queryKey: getFactCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactFodQueryKey(args: InferRequestType<typeof client.fact.fod.$get>) {
  return ['fact', '/fact/fod', args] as const
}

export function getFactFodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.fod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactFodQueryKey>
  >({
    queryKey: getFactFodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.fod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactFod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.fod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactFodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactFodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactFodCategoriesQueryKey() {
  return ['fact', '/fact/fod/categories'] as const
}

export function getFactFodCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactFodCategoriesQueryKey>
  >({
    queryKey: getFactFodCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.fod.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFactFodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactFodCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactFodCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getFactNumbersQueryKey(args: InferRequestType<typeof client.fact.numbers.$get>) {
  return ['fact', '/fact/numbers', args] as const
}

export function getFactNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactNumbersQueryKey>
  >({
    queryKey: getFactNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.numbers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactOnthisdayBornQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
) {
  return ['fact', '/fact/onthisday/born', args] as const
}

export function getFactOnthisdayBornQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.born.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayBornQueryKey>
  >({
    queryKey: getFactOnthisdayBornQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.born.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactOnthisdayBorn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayBornQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactOnthisdayBornQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactOnthisdayDiedQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
) {
  return ['fact', '/fact/onthisday/died', args] as const
}

export function getFactOnthisdayDiedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.died.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayDiedQueryKey>
  >({
    queryKey: getFactOnthisdayDiedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.died.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactOnthisdayDied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayDiedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactOnthisdayDiedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactOnthisdayEventQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
) {
  return ['fact', '/fact/onthisday/event', args] as const
}

export function getFactOnthisdayEventQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.event.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayEventQueryKey>
  >({
    queryKey: getFactOnthisdayEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.event.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactOnthisdayEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactOnthisdayEventQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactRandomQueryKey(args: InferRequestType<typeof client.fact.random.$get>) {
  return ['fact', '/fact/random', args] as const
}

export function getFactRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactRandomQueryKey>
  >({
    queryKey: getFactRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.random.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactRandomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFactSearchQueryKey(args: InferRequestType<typeof client.fact.search.$get>) {
  return ['fact', '/fact/search', args] as const
}

export function getFactSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactSearchQueryKey>
  >({
    queryKey: getFactSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFactSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fact.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
