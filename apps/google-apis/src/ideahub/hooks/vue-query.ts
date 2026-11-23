import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getV1alphaIdeasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha.ideas.$get>>,
) {
  return ['v1alpha', '/v1alpha/ideas', toValue(args)] as const
}

export function getV1alphaIdeasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha.ideas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaIdeasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha.ideas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaIdeas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha.ideas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
          >,
          ReturnType<typeof getV1alphaIdeasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaIdeasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaIdeasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha.ideas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1alphaNameMutationKey() {
  return ['v1alpha', '/v1alpha/:name', 'PATCH'] as const
}

export function getPatchV1alphaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name']['$patch']>) {
      return parseResponse(client.v1alpha[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1alphaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alphaParentIdeaActivitiesMutationKey() {
  return ['v1alpha', '/v1alpha/:parent/ideaActivities', 'POST'] as const
}

export function getPostV1alphaParentIdeaActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaParentIdeaActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>,
    ) {
      return parseResponse(client.v1alpha[':parent'].ideaActivities.$post(args, options))
    },
  })
}

export function usePostV1alphaParentIdeaActivities<
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
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>,
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
  const mutationDefaults = getPostV1alphaParentIdeaActivitiesMutationOptions<
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

export function getV1alphaParentIdeasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>,
) {
  return ['v1alpha', '/v1alpha/:parent/ideas', toValue(args)] as const
}

export function getV1alphaParentIdeasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaParentIdeasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha[':parent'].ideas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaParentIdeas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alphaParentIdeasQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaParentIdeasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaParentIdeasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha[':parent'].ideas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1alphaParentLocalesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>>,
) {
  return ['v1alpha', '/v1alpha/:parent/locales', toValue(args)] as const
}

export function getV1alphaParentLocalesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaParentLocalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha[':parent'].locales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaParentLocales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alphaParentLocalesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaParentLocalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaParentLocalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha[':parent'].locales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
