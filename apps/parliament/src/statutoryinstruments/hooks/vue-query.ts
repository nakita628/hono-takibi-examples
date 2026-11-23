import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1BusinessItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>,
) {
  return ['api', '/api/v1/BusinessItem/:id', toValue(args)] as const
}

export function getApiV1BusinessItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BusinessItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.BusinessItem[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BusinessItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BusinessItemIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BusinessItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BusinessItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.BusinessItem[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LayingBodyQueryKey() {
  return ['api', '/api/v1/LayingBody'] as const
}

export function getApiV1LayingBodyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LayingBodyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.LayingBody.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LayingBody<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LayingBodyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LayingBodyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LayingBodyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.LayingBody.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProcedureQueryKey() {
  return ['api', '/api/v1/Procedure'] as const
}

export function getApiV1ProcedureQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ProcedureQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Procedure.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Procedure<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProcedureQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProcedureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ProcedureQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Procedure.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProcedureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>>,
) {
  return ['api', '/api/v1/Procedure/:id', toValue(args)] as const
}

export function getApiV1ProcedureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProcedureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Procedure[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProcedureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProcedureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProcedureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProcedureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Procedure[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProposedNegativeStatutoryInstrumentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>
  >,
) {
  return ['api', '/api/v1/ProposedNegativeStatutoryInstrument', toValue(args)] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProposedNegativeStatutoryInstrumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProposedNegativeStatutoryInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProposedNegativeStatutoryInstrumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.ProposedNegativeStatutoryInstrument.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/ProposedNegativeStatutoryInstrument/:id', toValue(args)] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProposedNegativeStatutoryInstrumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.ProposedNegativeStatutoryInstrument[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/ProposedNegativeStatutoryInstrument/:id/BusinessItems',
    toValue(args),
  ] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument[':id'].BusinessItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProposedNegativeStatutoryInstrumentIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.ProposedNegativeStatutoryInstrument[':id'].BusinessItems.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatutoryInstrumentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>>,
) {
  return ['api', '/api/v1/StatutoryInstrument', toValue(args)] as const
}

export function getApiV1StatutoryInstrumentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatutoryInstrumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.StatutoryInstrument.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatutoryInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatutoryInstrumentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatutoryInstrumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.StatutoryInstrument.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatutoryInstrumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/StatutoryInstrument/:id', toValue(args)] as const
}

export function getApiV1StatutoryInstrumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatutoryInstrumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.StatutoryInstrument[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatutoryInstrumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatutoryInstrumentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatutoryInstrumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.StatutoryInstrument[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatutoryInstrumentIdBusinessItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
  >,
) {
  return ['api', '/api/v1/StatutoryInstrument/:id/BusinessItems', toValue(args)] as const
}

export function getApiV1StatutoryInstrumentIdBusinessItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatutoryInstrumentIdBusinessItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.StatutoryInstrument[':id'].BusinessItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatutoryInstrumentIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1StatutoryInstrumentIdBusinessItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentIdBusinessItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatutoryInstrumentIdBusinessItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.StatutoryInstrument[':id'].BusinessItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
