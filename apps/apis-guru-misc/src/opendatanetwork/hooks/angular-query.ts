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
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/availability/', keyArgs] as const
}

export function getDataV1AvailabilityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1AvailabilityIndexQueryKey>
  >({
    queryKey: getDataV1AvailabilityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.v1.availability.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDataV1AvailabilityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.data.v1.availability.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataV1AvailabilityIndexQueryKey>
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
      ...getDataV1AvailabilityIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDataV1ConstraintVariableQueryKey(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/constraint/:variable', keyArgs] as const
}

export function getDataV1ConstraintVariableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataV1ConstraintVariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.v1.constraint[':variable'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDataV1ConstraintVariable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDataV1ConstraintVariableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDataV1MapNewQueryKey(
  args: InferRequestType<typeof client.data.v1.map.new.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/map/new', keyArgs] as const
}

export function getDataV1MapNewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.v1.map.new.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1MapNewQueryKey>
  >({
    queryKey: getDataV1MapNewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.v1.map.new.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDataV1MapNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.data.v1.map.new.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataV1MapNewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDataV1MapNewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDataV1ValuesQueryKey(args: InferRequestType<typeof client.data.v1.values.$get>) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/values', keyArgs] as const
}

export function getDataV1ValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.v1.values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataV1ValuesQueryKey>
  >({
    queryKey: getDataV1ValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.v1.values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDataV1Values<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.data.v1.values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataV1ValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDataV1ValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEntityV1QueryKey(args: InferRequestType<typeof client.entity.v1.$get>) {
  const { header: _, ...keyArgs } = args
  return ['entity', '/entity/v1', keyArgs] as const
}

export function getEntityV1QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entity.v1.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntityV1QueryKey>
  >({
    queryKey: getEntityV1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entity.v1.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEntityV1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entity.v1.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEntityV1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntityV1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEntityV1RelationQueryKey(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entity', '/entity/v1/:relation', keyArgs] as const
}

export function getEntityV1RelationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntityV1RelationQueryKey>
  >({
    queryKey: getEntityV1RelationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entity.v1[':relation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEntityV1Relation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntityV1RelationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntityV1RelationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchV1DatasetQueryKey(
  args: InferRequestType<typeof client.search.v1.dataset.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/v1/dataset', keyArgs] as const
}

export function getSearchV1DatasetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.dataset.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1DatasetQueryKey>
  >({
    queryKey: getSearchV1DatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.dataset.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchV1Dataset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.v1.dataset.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1DatasetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchV1DatasetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchV1QuestionQueryKey(
  args: InferRequestType<typeof client.search.v1.question.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/v1/question', keyArgs] as const
}

export function getSearchV1QuestionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.question.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1QuestionQueryKey>
  >({
    queryKey: getSearchV1QuestionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.question.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchV1Question<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.v1.question.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1QuestionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchV1QuestionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSuggestV1TypeQueryKey(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggest', '/suggest/v1/:type', keyArgs] as const
}

export function getSuggestV1TypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestV1TypeQueryKey>
  >({
    queryKey: getSuggestV1TypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suggest.v1[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSuggestV1Type<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestV1TypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuggestV1TypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
