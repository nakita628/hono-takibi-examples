import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getV1alphaIdeasQueryKey(args: InferRequestType<typeof client.v1alpha.ideas.$get>) {
  return ['v1alpha', '/v1alpha/ideas', args] as const
}

export function getV1alphaIdeasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1alpha.ideas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaIdeasQueryKey>
  >({
    queryKey: getV1alphaIdeasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha.ideas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1alphaIdeas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1alpha.ideas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1alphaIdeasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alphaIdeasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchV1alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1alphaNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1alphaParentIdeaActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1alphaParentIdeaActivitiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alphaParentIdeasQueryKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/ideas', args] as const
}

export function getV1alphaParentIdeasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1alphaParentIdeasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha[':parent'].ideas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alphaParentIdeas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alphaParentIdeasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1alphaParentLocalesQueryKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/locales', args] as const
}

export function getV1alphaParentLocalesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1alphaParentLocalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha[':parent'].locales.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alphaParentLocales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1alphaParentLocalesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
