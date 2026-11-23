import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReisezentrenKey() {
  return ['reisezentren'] as const
}

export function getReisezentrenQueryKey(args: InferRequestType<typeof client.reisezentren.$get>) {
  return ['reisezentren', '/reisezentren', args] as const
}

export function getReisezentrenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reisezentren.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReisezentrenQueryKey>
  >({
    queryKey: getReisezentrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reisezentren.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReisezentren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reisezentren.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReisezentrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReisezentrenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReisezentrenLocLatLonQueryKey(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon', args] as const
}

export function getReisezentrenLocLatLonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenLocLatLonQueryKey>
  >({
    queryKey: getReisezentrenLocLatLonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reisezentren.loc[':lat'][':lon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReisezentrenLocLatLon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReisezentrenLocLatLonQueryKey>
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
      ...getReisezentrenLocLatLonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReisezentrenLocLatLonDistQueryKey(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon/:dist', args] as const
}

export function getReisezentrenLocLatLonDistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenLocLatLonDistQueryKey>
  >({
    queryKey: getReisezentrenLocLatLonDistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reisezentren.loc[':lat'][':lon'][':dist'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReisezentrenLocLatLonDist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReisezentrenLocLatLonDistQueryKey>
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
      ...getReisezentrenLocLatLonDistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReisezentrenIdQueryKey(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
) {
  return ['reisezentren', '/reisezentren/:id', args] as const
}

export function getReisezentrenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenIdQueryKey>
  >({
    queryKey: getReisezentrenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reisezentren[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReisezentrenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReisezentrenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReisezentrenIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
