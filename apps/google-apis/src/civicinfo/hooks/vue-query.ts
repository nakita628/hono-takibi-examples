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

export function getCivicinfoKey() {
  return ['civicinfo'] as const
}

export function getCivicinfoV2DivisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.divisions.$get>>,
) {
  return ['civicinfo', '/civicinfo/v2/divisions', toValue(args)] as const
}

export function getCivicinfoV2DivisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.divisions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCivicinfoV2DivisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.civicinfo.v2.divisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCivicinfoV2Divisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.divisions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
            >
          >,
          ReturnType<typeof getCivicinfoV2DivisionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2DivisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCivicinfoV2DivisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.civicinfo.v2.divisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCivicinfoV2ElectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.elections.$get>>,
) {
  return ['civicinfo', '/civicinfo/v2/elections', toValue(args)] as const
}

export function getCivicinfoV2ElectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.elections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCivicinfoV2ElectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.civicinfo.v2.elections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCivicinfoV2Elections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.elections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
            >
          >,
          ReturnType<typeof getCivicinfoV2ElectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2ElectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCivicinfoV2ElectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.civicinfo.v2.elections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCivicinfoV2RepresentativesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.representatives.$get>>,
) {
  return ['civicinfo', '/civicinfo/v2/representatives', toValue(args)] as const
}

export function getCivicinfoV2RepresentativesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.representatives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCivicinfoV2RepresentativesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.civicinfo.v2.representatives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCivicinfoV2Representatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.representatives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>
              >
            >
          >,
          ReturnType<typeof getCivicinfoV2RepresentativesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2RepresentativesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCivicinfoV2RepresentativesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.civicinfo.v2.representatives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCivicinfoV2RepresentativesOcdIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>
  >,
) {
  return ['civicinfo', '/civicinfo/v2/representatives/:ocdId', toValue(args)] as const
}

export function getCivicinfoV2RepresentativesOcdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCivicinfoV2RepresentativesOcdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.civicinfo.v2.representatives[':ocdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCivicinfoV2RepresentativesOcdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCivicinfoV2RepresentativesOcdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2RepresentativesOcdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCivicinfoV2RepresentativesOcdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.civicinfo.v2.representatives[':ocdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCivicinfoV2VoterinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>>,
) {
  return ['civicinfo', '/civicinfo/v2/voterinfo', toValue(args)] as const
}

export function getCivicinfoV2VoterinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCivicinfoV2VoterinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.civicinfo.v2.voterinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCivicinfoV2Voterinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
            >
          >,
          ReturnType<typeof getCivicinfoV2VoterinfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2VoterinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCivicinfoV2VoterinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.civicinfo.v2.voterinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
