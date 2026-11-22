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

export function getDataKey() {
  return ['data'] as const
}

export function getEntityKey() {
  return ['entity'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSuggestKey() {
  return ['suggest'] as const
}

export function getDataV1AvailabilityIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.availability.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/v1/availability/', keyArgs] as const
}

export function getDataV1AvailabilityIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.availability.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataV1AvailabilityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.v1.availability.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataV1AvailabilityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.availability.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDataV1AvailabilityIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1AvailabilityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataV1AvailabilityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.v1.availability.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataV1ConstraintVariableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/v1/constraint/:variable', keyArgs] as const
}

export function getDataV1ConstraintVariableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataV1ConstraintVariableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.v1.constraint[':variable'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataV1ConstraintVariable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataV1ConstraintVariableQueryKey>
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
          Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1ConstraintVariableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataV1ConstraintVariableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.v1.constraint[':variable'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataV1MapNewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.map.new.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/v1/map/new', keyArgs] as const
}

export function getDataV1MapNewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.map.new.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataV1MapNewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.v1.map.new.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataV1MapNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.map.new.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>
            >
          >,
          ReturnType<typeof getDataV1MapNewQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1MapNewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataV1MapNewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.v1.map.new.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataV1ValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.values.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/v1/values', keyArgs] as const
}

export function getDataV1ValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataV1ValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.v1.values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataV1Values<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.v1.values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
          >,
          ReturnType<typeof getDataV1ValuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1ValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataV1ValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.v1.values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntityV1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entity.v1.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entity', '/entity/v1', keyArgs] as const
}

export function getEntityV1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entity.v1.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntityV1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entity.v1.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEntityV1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entity.v1.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
          >,
          ReturnType<typeof getEntityV1QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntityV1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntityV1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entity.v1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntityV1RelationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entity.v1)[':relation']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entity', '/entity/v1/:relation', keyArgs] as const
}

export function getEntityV1RelationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entity.v1)[':relation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntityV1RelationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entity.v1[':relation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntityV1Relation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entity.v1)[':relation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntityV1RelationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntityV1RelationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntityV1RelationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entity.v1[':relation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchV1DatasetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.dataset.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search/v1/dataset', keyArgs] as const
}

export function getSearchV1DatasetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.dataset.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchV1DatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.v1.dataset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchV1Dataset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.dataset.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>
            >
          >,
          ReturnType<typeof getSearchV1DatasetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1DatasetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchV1DatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.v1.dataset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchV1QuestionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.question.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search/v1/question', keyArgs] as const
}

export function getSearchV1QuestionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.question.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchV1QuestionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.v1.question.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchV1Question<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.question.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>
            >
          >,
          ReturnType<typeof getSearchV1QuestionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1QuestionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchV1QuestionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.v1.question.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuggestV1TypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suggest.v1)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suggest', '/suggest/v1/:type', keyArgs] as const
}

export function getSuggestV1TypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suggest.v1)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuggestV1TypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suggest.v1[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuggestV1Type<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suggest.v1)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getSuggestV1TypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestV1TypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuggestV1TypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suggest.v1[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
