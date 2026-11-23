import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetDataV1AvailabilityIndexKey(
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/availability/', keyArgs] as const
}

export function useGetDataV1AvailabilityIndex<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataV1AvailabilityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.availability.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataV1AvailabilityIndex<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.availability.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataV1AvailabilityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.availability.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.availability.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataV1ConstraintVariableKey(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/constraint/:variable', keyArgs] as const
}

export function useGetDataV1ConstraintVariable<TError = unknown>(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataV1ConstraintVariableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.constraint[':variable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataV1ConstraintVariable<TError = unknown>(
  args: InferRequestType<(typeof client.data.v1.constraint)[':variable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataV1ConstraintVariableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.v1.constraint)[':variable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.constraint[':variable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataV1MapNewKey(args: InferRequestType<typeof client.data.v1.map.new.$get>) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/map/new', keyArgs] as const
}

export function useGetDataV1MapNew<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.map.new.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataV1MapNewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.map.new.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataV1MapNew<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.map.new.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataV1MapNewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.map.new.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.map.new.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataV1ValuesKey(args: InferRequestType<typeof client.data.v1.values.$get>) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/v1/values', keyArgs] as const
}

export function useGetDataV1Values<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataV1ValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataV1Values<TError = unknown>(
  args: InferRequestType<typeof client.data.v1.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataV1ValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.v1.values.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.v1.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntityV1Key(args: InferRequestType<typeof client.entity.v1.$get>) {
  const { header: _, ...keyArgs } = args
  return ['entity', '/entity/v1', keyArgs] as const
}

export function useGetEntityV1<TError = unknown>(
  args: InferRequestType<typeof client.entity.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntityV1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entity.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntityV1<TError = unknown>(
  args: InferRequestType<typeof client.entity.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntityV1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entity.v1.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entity.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntityV1RelationKey(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entity', '/entity/v1/:relation', keyArgs] as const
}

export function useGetEntityV1Relation<TError = unknown>(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntityV1RelationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entity.v1[':relation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntityV1Relation<TError = unknown>(
  args: InferRequestType<(typeof client.entity.v1)[':relation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntityV1RelationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entity.v1)[':relation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entity.v1[':relation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchV1DatasetKey(
  args: InferRequestType<typeof client.search.v1.dataset.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/v1/dataset', keyArgs] as const
}

export function useGetSearchV1Dataset<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.dataset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchV1DatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchV1Dataset<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.dataset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchV1DatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.dataset.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchV1QuestionKey(
  args: InferRequestType<typeof client.search.v1.question.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/v1/question', keyArgs] as const
}

export function useGetSearchV1Question<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.question.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchV1QuestionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.question.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchV1Question<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.question.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchV1QuestionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.question.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.question.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuggestV1TypeKey(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggest', '/suggest/v1/:type', keyArgs] as const
}

export function useGetSuggestV1Type<TError = unknown>(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestV1TypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggest.v1[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestV1Type<TError = unknown>(
  args: InferRequestType<(typeof client.suggest.v1)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestV1TypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.suggest.v1)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggest.v1[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
