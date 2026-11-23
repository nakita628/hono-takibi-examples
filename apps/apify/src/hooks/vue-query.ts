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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2ActorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actors.$get>>,
) {
  return ['v2', '/v2/actors', toValue(args)] as const
}

export function getV2ActorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Actors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
          >,
          ReturnType<typeof getV2ActorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsMutationKey() {
  return ['v2', '/v2/actors', 'POST'] as const
}

export function getPostV2ActorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.actors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.actors.$post>) {
      return parseResponse(client.v2.actors.$post(args, options))
    },
  })
}

export function usePostV2Actors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.actors.$post>,
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
  const mutationDefaults = getPostV2ActorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ActorsActorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>>,
) {
  return ['v2', '/v2/actors/:actorId', toValue(args)] as const
}

export function getV2ActorsActorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ActorsActorIdMutationKey() {
  return ['v2', '/v2/actors/:actorId', 'PUT'] as const
}

export function getPutV2ActorsActorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ActorsActorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>) {
      return parseResponse(client.v2.actors[':actorId'].$put(args, options))
    },
  })
}

export function usePutV2ActorsActorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>,
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
  const mutationDefaults = getPutV2ActorsActorIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ActorsActorIdMutationKey() {
  return ['v2', '/v2/actors/:actorId', 'DELETE'] as const
}

export function getDeleteV2ActorsActorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorsActorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']>) {
      return parseResponse(client.v2.actors[':actorId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ActorsActorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']>,
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
  const mutationDefaults = getDeleteV2ActorsActorIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorsActorIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions', toValue(args)] as const
}

export function getV2ActorsActorIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdVersionsMutationKey() {
  return ['v2', '/v2/actors/:actorId/versions', 'POST'] as const
}

export function getPostV2ActorsActorIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']>,
    ) {
      return parseResponse(client.v2.actors[':actorId'].versions.$post(args, options))
    },
  })
}

export function usePostV2ActorsActorIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']>,
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
  const mutationDefaults = getPostV2ActorsActorIdVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorsActorIdVersionsVersionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber', toValue(args)] as const
}

export function getV2ActorsActorIdVersionsVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdVersionsVersionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdVersionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']>
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberQueryKey>
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
            ReturnType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdVersionsVersionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberMutationKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber', 'DELETE'] as const
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorsActorIdVersionsVersionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ActorsActorIdVersionsVersionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
          >,
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
  const mutationDefaults = getDeleteV2ActorsActorIdVersionsVersionNumberMutationOptions<
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

export function getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushMutationKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/build-on-push', 'PUT'] as const
}

export function getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['build-on-push'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2ActorsActorIdVersionsVersionNumberBuildOnPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
          >,
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
  const mutationDefaults = getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushMutationOptions<
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

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
    >
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars', toValue(args)] as const
}

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdVersionsVersionNumberEnvVars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey>
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
              (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdVersionsVersionNumberEnvVarsMutationKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars', 'POST'] as const
}

export function getPostV2ActorsActorIdVersionsVersionNumberEnvVarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdVersionsVersionNumberEnvVarsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$post(args, options),
      )
    },
  })
}

export function usePostV2ActorsActorIdVersionsVersionNumberEnvVars<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
          >,
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
  const mutationDefaults = getPostV2ActorsActorIdVersionsVersionNumberEnvVarsMutationOptions<
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

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/actors/:actorId/versions/:versionNumber/env-vars/:envVarName',
    toValue(args),
  ] as const
}

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
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
                    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey>
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
              (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameMutationKey() {
  return [
    'v2',
    '/v2/actors/:actorId/versions/:versionNumber/env-vars/:envVarName',
    'DELETE',
  ] as const
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
          >,
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
  const mutationDefaults =
    getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameMutationOptions<
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

export function getV2ActorsActorIdWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/webhooks', toValue(args)] as const
}

export function getV2ActorsActorIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorsActorIdOauthConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/oauth-connections', toValue(args)] as const
}

export function getV2ActorsActorIdOauthConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdOauthConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId']['oauth-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdOauthConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>
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
                  ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdOauthConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdOauthConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdOauthConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId']['oauth-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorsActorIdBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>,
) {
  return ['v2', '/v2/actors/:actorId/builds', toValue(args)] as const
}

export function getV2ActorsActorIdBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdBuildsMutationKey() {
  return ['v2', '/v2/actors/:actorId/builds', 'POST'] as const
}

export function getPostV2ActorsActorIdBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']>,
    ) {
      return parseResponse(client.v2.actors[':actorId'].builds.$post(args, options))
    },
  })
}

export function usePostV2ActorsActorIdBuilds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']>,
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
  const mutationDefaults = getPostV2ActorsActorIdBuildsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorsActorIdBuildsDefaultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/builds/default', toValue(args)] as const
}

export function getV2ActorsActorIdBuildsDefaultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdBuildsDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].builds.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdBuildsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>
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
                  ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdBuildsDefaultQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdBuildsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdBuildsDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].builds.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
    >
  >,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId/openapi.json', toValue(args)] as const
}

export function getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdBuildsBuildIdOpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
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
                    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
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
                    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey>
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
              (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorsActorIdBuildsBuildIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId', toValue(args)] as const
}

export function getV2ActorsActorIdBuildsBuildIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdBuildsBuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].builds[':buildId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>
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
                  ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdBuildsBuildIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdBuildsBuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdBuildsBuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].builds[':buildId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdBuildsBuildIdAbortMutationKey() {
  return ['v2', '/v2/actors/:actorId/builds/:buildId/abort', 'POST'] as const
}

export function getPostV2ActorsActorIdBuildsBuildIdAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdBuildsBuildIdAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId'].builds[':buildId'].abort.$post(args, options),
      )
    },
  })
}

export function usePostV2ActorsActorIdBuildsBuildIdAbort<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
          >,
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
  const mutationDefaults = getPostV2ActorsActorIdBuildsBuildIdAbortMutationOptions<
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

export function getV2ActorsActorIdRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>,
) {
  return ['v2', '/v2/actors/:actorId/runs', toValue(args)] as const
}

export function getV2ActorsActorIdRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdRunsMutationKey() {
  return ['v2', '/v2/actors/:actorId/runs', 'POST'] as const
}

export function getPostV2ActorsActorIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']>,
    ) {
      return parseResponse(client.v2.actors[':actorId'].runs.$post(args, options))
    },
  })
}

export function usePostV2ActorsActorIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']>,
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
  const mutationDefaults = getPostV2ActorsActorIdRunsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorsActorIdRunSyncQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/run-sync', toValue(args)] as const
}

export function getV2ActorsActorIdRunSyncQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdRunSyncQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId']['run-sync'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdRunSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdRunSyncQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdRunSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdRunSyncQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId']['run-sync'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdRunSyncMutationKey() {
  return ['v2', '/v2/actors/:actorId/run-sync', 'POST'] as const
}

export function getPostV2ActorsActorIdRunSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdRunSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>,
    ) {
      return parseResponse(client.v2.actors[':actorId']['run-sync'].$post(args, options))
    },
  })
}

export function usePostV2ActorsActorIdRunSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>,
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
  const mutationDefaults = getPostV2ActorsActorIdRunSyncMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/run-sync-get-dataset-items', toValue(args)] as const
}

export function getV2ActorsActorIdRunSyncGetDatasetItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdRunSyncGetDatasetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']>
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
                    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
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
                    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey>
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
            ReturnType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorsActorIdRunSyncGetDatasetItemsMutationKey() {
  return ['v2', '/v2/actors/:actorId/run-sync-get-dataset-items', 'POST'] as const
}

export function getPostV2ActorsActorIdRunSyncGetDatasetItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdRunSyncGetDatasetItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.actors[':actorId']['run-sync-get-dataset-items'].$post(args, options),
      )
    },
  })
}

export function usePostV2ActorsActorIdRunSyncGetDatasetItems<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']
          >,
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
  const mutationDefaults = getPostV2ActorsActorIdRunSyncGetDatasetItemsMutationOptions<
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

export function getPostV2ActorsActorIdValidateInputMutationKey() {
  return ['v2', '/v2/actors/:actorId/validate-input', 'POST'] as const
}

export function getPostV2ActorsActorIdValidateInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorsActorIdValidateInputMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>,
    ) {
      return parseResponse(client.v2.actors[':actorId']['validate-input'].$post(args, options))
    },
  })
}

export function usePostV2ActorsActorIdValidateInput<
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
                Awaited<
                  ReturnType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>,
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
  const mutationDefaults = getPostV2ActorsActorIdValidateInputMutationOptions<
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

export function getV2ActorsActorIdRunsLastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/runs/last', toValue(args)] as const
}

export function getV2ActorsActorIdRunsLastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdRunsLastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].runs.last.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdRunsLast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdRunsLastQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdRunsLastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdRunsLastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].runs.last.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorsActorIdRunsRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>
  >,
) {
  return ['v2', '/v2/actors/:actorId/runs/:runId', toValue(args)] as const
}

export function getV2ActorsActorIdRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorsActorIdRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actors[':actorId'].runs[':runId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorsActorIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorsActorIdRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorsActorIdRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actors[':actorId'].runs[':runId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-tasks']['$get']>>,
) {
  return ['v2', '/v2/actor-tasks', toValue(args)] as const
}

export function getV2ActorTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
            >
          >,
          ReturnType<typeof getV2ActorTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorTasksMutationKey() {
  return ['v2', '/v2/actor-tasks', 'POST'] as const
}

export function getPostV2ActorTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['actor-tasks']['$post']>) {
      return parseResponse(client.v2['actor-tasks'].$post(args, options))
    },
  })
}

export function usePostV2ActorTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks']['$post']>,
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
  const mutationDefaults = getPostV2ActorTasksMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorTasksActorTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ActorTasksActorTaskIdMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId', 'PUT'] as const
}

export function getPutV2ActorTasksActorTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ActorTasksActorTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>,
    ) {
      return parseResponse(client.v2['actor-tasks'][':actorTaskId'].$put(args, options))
    },
  })
}

export function usePutV2ActorTasksActorTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>,
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
  const mutationDefaults = getPutV2ActorTasksActorTaskIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ActorTasksActorTaskIdMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId', 'DELETE'] as const
}

export function getDeleteV2ActorTasksActorTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorTasksActorTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>,
    ) {
      return parseResponse(client.v2['actor-tasks'][':actorTaskId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ActorTasksActorTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>,
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
  const mutationDefaults = getDeleteV2ActorTasksActorTaskIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorTasksActorTaskIdInputQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/input', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdInputQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdInputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].input.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdInput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdInputQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdInputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdInputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId'].input.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ActorTasksActorTaskIdInputMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/input', 'PUT'] as const
}

export function getPutV2ActorTasksActorTaskIdInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ActorTasksActorTaskIdInputMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>,
    ) {
      return parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$put(args, options))
    },
  })
}

export function usePutV2ActorTasksActorTaskIdInput<
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
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>,
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
  const mutationDefaults = getPutV2ActorTasksActorTaskIdInputMutationOptions<
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

export function getV2ActorTasksActorTaskIdWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/webhooks', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorTasksActorTaskIdRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorTasksActorTaskIdRunsMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs', 'POST'] as const
}

export function getPostV2ActorTasksActorTaskIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorTasksActorTaskIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>,
    ) {
      return parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$post(args, options))
    },
  })
}

export function usePostV2ActorTasksActorTaskIdRuns<
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
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>,
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
  const mutationDefaults = getPostV2ActorTasksActorTaskIdRunsMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunSyncQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdRunSyncQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdRunSyncQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdRunSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdRunSyncQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdRunSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdRunSyncQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorTasksActorTaskIdRunSyncMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync', 'POST'] as const
}

export function getPostV2ActorTasksActorTaskIdRunSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorTasksActorTaskIdRunSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync'].$post(args, options),
      )
    },
  })
}

export function usePostV2ActorTasksActorTaskIdRunSync<
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
                Awaited<
                  ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>,
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
  const mutationDefaults = getPostV2ActorTasksActorTaskIdRunSyncMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
    >
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync-get-dataset-items', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdRunSyncGetDatasetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
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
                    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
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
                    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey>
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
              (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsMutationKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync-get-dataset-items', 'POST'] as const
}

export function getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$post(args, options),
      )
    },
  })
}

export function usePostV2ActorTasksActorTaskIdRunSyncGetDatasetItems<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
          >,
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
  const mutationDefaults = getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunsLastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs/last', toValue(args)] as const
}

export function getV2ActorTasksActorTaskIdRunsLastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorTasksActorTaskIdRunsLastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorTasksActorTaskIdRunsLast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
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
                    (typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']
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
                    (typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorTasksActorTaskIdRunsLastQueryKey>
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
            ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksActorTaskIdRunsLastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorTasksActorTaskIdRunsLastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs']['$get']>>,
) {
  return ['v2', '/v2/actor-runs', toValue(args)] as const
}

export function getV2ActorRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-runs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
            >
          >,
          ReturnType<typeof getV2ActorRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorRunsRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>>,
) {
  return ['v2', '/v2/actor-runs/:runId', toValue(args)] as const
}

export function getV2ActorRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-runs'][':runId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-runs'][':runId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ActorRunsRunIdMutationKey() {
  return ['v2', '/v2/actor-runs/:runId', 'PUT'] as const
}

export function getPutV2ActorRunsRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ActorRunsRunIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']>) {
      return parseResponse(client.v2['actor-runs'][':runId'].$put(args, options))
    },
  })
}

export function usePutV2ActorRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']>,
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
  const mutationDefaults = getPutV2ActorRunsRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ActorRunsRunIdMutationKey() {
  return ['v2', '/v2/actor-runs/:runId', 'DELETE'] as const
}

export function getDeleteV2ActorRunsRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorRunsRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']>,
    ) {
      return parseResponse(client.v2['actor-runs'][':runId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ActorRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']>,
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
  const mutationDefaults = getDeleteV2ActorRunsRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ActorRunsRunIdChargeMutationKey() {
  return ['v2', '/v2/actor-runs/:runId/charge', 'POST'] as const
}

export function getPostV2ActorRunsRunIdChargeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorRunsRunIdChargeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>,
    ) {
      return parseResponse(client.v2['actor-runs'][':runId'].charge.$post(args, options))
    },
  })
}

export function usePostV2ActorRunsRunIdCharge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>,
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
  const mutationDefaults = getPostV2ActorRunsRunIdChargeMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds']['$get']>>,
) {
  return ['v2', '/v2/actor-builds', toValue(args)] as const
}

export function getV2ActorBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-builds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
            >
          >,
          ReturnType<typeof getV2ActorBuildsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-builds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorBuildsBuildIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>,
) {
  return ['v2', '/v2/actor-builds/:buildId', toValue(args)] as const
}

export function getV2ActorBuildsBuildIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorBuildsBuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-builds'][':buildId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActorBuildsBuildIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorBuildsBuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorBuildsBuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-builds'][':buildId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2ActorBuildsBuildIdMutationKey() {
  return ['v2', '/v2/actor-builds/:buildId', 'DELETE'] as const
}

export function getDeleteV2ActorBuildsBuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ActorBuildsBuildIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>,
    ) {
      return parseResponse(client.v2['actor-builds'][':buildId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ActorBuildsBuildId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>,
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
  const mutationDefaults = getDeleteV2ActorBuildsBuildIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ActorBuildsBuildIdAbortMutationKey() {
  return ['v2', '/v2/actor-builds/:buildId/abort', 'POST'] as const
}

export function getPostV2ActorBuildsBuildIdAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActorBuildsBuildIdAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>,
    ) {
      return parseResponse(client.v2['actor-builds'][':buildId'].abort.$post(args, options))
    },
  })
}

export function usePostV2ActorBuildsBuildIdAbort<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>,
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
  const mutationDefaults = getPostV2ActorBuildsBuildIdAbortMutationOptions<TError, TOnMutateResult>(
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

export function getV2ActorBuildsBuildIdOpenapiJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
  >,
) {
  return ['v2', '/v2/actor-builds/:buildId/openapi.json', toValue(args)] as const
}

export function getV2ActorBuildsBuildIdOpenapiJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorBuildsBuildIdOpenapiJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-builds'][':buildId']['openapi.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorBuildsBuildIdOpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorBuildsBuildIdOpenapiJsonQueryKey>
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
            ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorBuildsBuildIdOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorBuildsBuildIdOpenapiJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-builds'][':buildId']['openapi.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorOauthAccountsConnectionIdAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
    >
  >,
) {
  return ['v2', '/v2/actor-oauth-accounts/:connectionId/accounts', toValue(args)] as const
}

export function getV2ActorOauthAccountsConnectionIdAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorOauthAccountsConnectionIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorOauthAccountsConnectionIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
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
                    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
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
                    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorOauthAccountsConnectionIdAccountsQueryKey>
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
              (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorOauthAccountsConnectionIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorOauthAccountsConnectionIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActorOauthAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>
  >,
) {
  return ['v2', '/v2/actor-oauth-accounts/:accountId', toValue(args)] as const
}

export function getV2ActorOauthAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActorOauthAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['actor-oauth-accounts'][':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActorOauthAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>
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
                  ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ActorOauthAccountsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorOauthAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActorOauthAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['actor-oauth-accounts'][':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KeyValueStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['key-value-stores']['$get']>>,
) {
  return ['v2', '/v2/key-value-stores', toValue(args)] as const
}

export function getV2KeyValueStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['key-value-stores']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KeyValueStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['key-value-stores'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KeyValueStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['key-value-stores']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2KeyValueStoresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KeyValueStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KeyValueStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['key-value-stores'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KeyValueStoresMutationKey() {
  return ['v2', '/v2/key-value-stores', 'POST'] as const
}

export function getPostV2KeyValueStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['key-value-stores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KeyValueStoresMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['key-value-stores']['$post']>) {
      return parseResponse(client.v2['key-value-stores'].$post(args, options))
    },
  })
}

export function usePostV2KeyValueStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['key-value-stores']['$post']>,
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
  const mutationDefaults = getPostV2KeyValueStoresMutationOptions<TError, TOnMutateResult>(
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

export function getHeadV2KeyValueStoresStoreIdRecordsRecordKeyMutationKey() {
  return ['v2', '/v2/key-value-stores/:storeId/records/:recordKey', 'HEAD'] as const
}

export function getHeadV2KeyValueStoresStoreIdRecordsRecordKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadV2KeyValueStoresStoreIdRecordsRecordKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
      >,
    ) {
      return parseResponse(
        client.v2['key-value-stores'][':storeId'].records[':recordKey'].$head(args, options),
      )
    },
  })
}

export function useHeadV2KeyValueStoresStoreIdRecordsRecordKey<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
          >,
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
  const mutationDefaults = getHeadV2KeyValueStoresStoreIdRecordsRecordKeyMutationOptions<
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

export function getV2DatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.datasets.$get>>,
) {
  return ['v2', '/v2/datasets', toValue(args)] as const
}

export function getV2DatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
          >,
          ReturnType<typeof getV2DatasetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatasetsMutationKey() {
  return ['v2', '/v2/datasets', 'POST'] as const
}

export function getPostV2DatasetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.datasets.$post>) {
      return parseResponse(client.v2.datasets.$post(args, options))
    },
  })
}

export function usePostV2Datasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.datasets.$post>,
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
  const mutationDefaults = getPostV2DatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHeadV2DatasetsDatasetIdItemsMutationKey() {
  return ['v2', '/v2/datasets/:datasetId/items', 'HEAD'] as const
}

export function getHeadV2DatasetsDatasetIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV2DatasetsDatasetIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>,
    ) {
      return parseResponse(client.v2.datasets[':datasetId'].items.$head(args, options))
    },
  })
}

export function useHeadV2DatasetsDatasetIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>,
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
  const mutationDefaults = getHeadV2DatasetsDatasetIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function getV2RequestQueuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['request-queues']['$get']>>,
) {
  return ['v2', '/v2/request-queues', toValue(args)] as const
}

export function getV2RequestQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['request-queues']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RequestQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['request-queues'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RequestQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['request-queues']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2RequestQueuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RequestQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RequestQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['request-queues'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2RequestQueuesMutationKey() {
  return ['v2', '/v2/request-queues', 'POST'] as const
}

export function getPostV2RequestQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['request-queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RequestQueuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['request-queues']['$post']>) {
      return parseResponse(client.v2['request-queues'].$post(args, options))
    },
  })
}

export function usePostV2RequestQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['request-queues']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['request-queues']['$post']>,
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
  const mutationDefaults = getPostV2RequestQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getV2WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
) {
  return ['v2', '/v2/webhooks', toValue(args)] as const
}

export function getV2WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
          >,
          ReturnType<typeof getV2WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2WebhooksMutationKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function getPostV2WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.webhooks.$post>) {
      return parseResponse(client.v2.webhooks.$post(args, options))
    },
  })
}

export function usePostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.webhooks.$post>,
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
  const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2WebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>>,
) {
  return ['v2', '/v2/webhooks/:webhookId', toValue(args)] as const
}

export function getV2WebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PUT'] as const
}

export function getPutV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$put(args, options))
    },
  })
}

export function usePutV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']>,
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
  const mutationDefaults = getPutV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WebhooksWebhookIdTestMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId/test', 'POST'] as const
}

export function getPostV2WebhooksWebhookIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksWebhookIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>,
    ) {
      return parseResponse(client.v2.webhooks[':webhookId'].test.$post(args, options))
    },
  })
}

export function usePostV2WebhooksWebhookIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>,
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
  const mutationDefaults = getPostV2WebhooksWebhookIdTestMutationOptions<TError, TOnMutateResult>(
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

export function getV2WebhooksWebhookIdDispatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>
  >,
) {
  return ['v2', '/v2/webhooks/:webhookId/dispatches', toValue(args)] as const
}

export function getV2WebhooksWebhookIdDispatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksWebhookIdDispatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].dispatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhooksWebhookIdDispatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhooksWebhookIdDispatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdDispatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksWebhookIdDispatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks[':webhookId'].dispatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WebhookDispatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>>,
) {
  return ['v2', '/v2/webhook-dispatches', toValue(args)] as const
}

export function getV2WebhookDispatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhookDispatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['webhook-dispatches'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhookDispatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhookDispatchesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhookDispatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhookDispatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['webhook-dispatches'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WebhookDispatchesDispatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>
  >,
) {
  return ['v2', '/v2/webhook-dispatches/:dispatchId', toValue(args)] as const
}

export function getV2WebhookDispatchesDispatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhookDispatchesDispatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['webhook-dispatches'][':dispatchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhookDispatchesDispatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhookDispatchesDispatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhookDispatchesDispatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhookDispatchesDispatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['webhook-dispatches'][':dispatchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.schedules.$get>>,
) {
  return ['v2', '/v2/schedules', toValue(args)] as const
}

export function getV2SchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
          >,
          ReturnType<typeof getV2SchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2SchedulesMutationKey() {
  return ['v2', '/v2/schedules', 'POST'] as const
}

export function getPostV2SchedulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.schedules.$post>) {
      return parseResponse(client.v2.schedules.$post(args, options))
    },
  })
}

export function usePostV2Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.schedules.$post>,
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
  const mutationDefaults = getPostV2SchedulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SchedulesScheduleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
) {
  return ['v2', '/v2/schedules/:scheduleId', toValue(args)] as const
}

export function getV2SchedulesScheduleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SchedulesScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SchedulesScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.schedules[':scheduleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2SchedulesScheduleIdMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'PUT'] as const
}

export function getPutV2SchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2SchedulesScheduleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']>) {
      return parseResponse(client.v2.schedules[':scheduleId'].$put(args, options))
    },
  })
}

export function usePutV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']>,
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
  const mutationDefaults = getPutV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2SchedulesScheduleIdMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'DELETE'] as const
}

export function getDeleteV2SchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
    },
  })
}

export function useDeleteV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
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
  const mutationDefaults = getDeleteV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SchedulesScheduleIdInvokeMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId/invoke', 'POST'] as const
}

export function getPostV2SchedulesScheduleIdInvokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesScheduleIdInvokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].invoke.$post(args, options))
    },
  })
}

export function usePostV2SchedulesScheduleIdInvoke<
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
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>,
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
  const mutationDefaults = getPostV2SchedulesScheduleIdInvokeMutationOptions<
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

export function getV2SchedulesScheduleIdLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>
  >,
) {
  return ['v2', '/v2/schedules/:scheduleId/log', toValue(args)] as const
}

export function getV2SchedulesScheduleIdLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SchedulesScheduleIdLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SchedulesScheduleIdLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SchedulesScheduleIdLogQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesScheduleIdLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SchedulesScheduleIdLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.schedules[':scheduleId'].log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StoreQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.store.$get>>,
) {
  return ['v2', '/v2/store', toValue(args)] as const
}

export function getV2StoreQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.store.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.store.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Store<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.store.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>
          >,
          ReturnType<typeof getV2StoreQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2StoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.store.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
) {
  return ['v2', '/v2/users/:userId', toValue(args)] as const
}

export function getV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersMeQueryKey() {
  return ['v2', '/v2/users/me'] as const
}

export function getV2UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
          >,
          ReturnType<typeof getV2UsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersMeUsageMonthlyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.me.usage.monthly.$get>>,
) {
  return ['v2', '/v2/users/me/usage/monthly', toValue(args)] as const
}

export function getV2UsersMeUsageMonthlyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.me.usage.monthly.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersMeUsageMonthlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.me.usage.monthly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersMeUsageMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.me.usage.monthly.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>
              >
            >
          >,
          ReturnType<typeof getV2UsersMeUsageMonthlyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeUsageMonthlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersMeUsageMonthlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.me.usage.monthly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersMeLimitsQueryKey() {
  return ['v2', '/v2/users/me/limits'] as const
}

export function getV2UsersMeLimitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UsersMeLimitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.me.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersMeLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>
            >
          >,
          ReturnType<typeof getV2UsersMeLimitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UsersMeLimitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.me.limits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2UsersMeLimitsMutationKey() {
  return ['v2', '/v2/users/me/limits', 'PUT'] as const
}

export function getPutV2UsersMeLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.users.me.limits.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UsersMeLimitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.me.limits.$put>) {
      return parseResponse(client.v2.users.me.limits.$put(args, options))
    },
  })
}

export function usePutV2UsersMeLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.users.me.limits.$put>,
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
  const mutationDefaults = getPutV2UsersMeLimitsMutationOptions<TError, TOnMutateResult>(
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

export function getV2UsersUserIdUsageMonthlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>
  >,
) {
  return ['v2', '/v2/users/:userId/usage/monthly', toValue(args)] as const
}

export function getV2UsersUserIdUsageMonthlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersUserIdUsageMonthlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users[':userId'].usage.monthly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersUserIdUsageMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2UsersUserIdUsageMonthlyQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdUsageMonthlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersUserIdUsageMonthlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users[':userId'].usage.monthly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersUserIdLimitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>>,
) {
  return ['v2', '/v2/users/:userId/limits', toValue(args)] as const
}

export function getV2UsersUserIdLimitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersUserIdLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users[':userId'].limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersUserIdLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2UsersUserIdLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersUserIdLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users[':userId'].limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2UsersUserIdLimitsMutationKey() {
  return ['v2', '/v2/users/:userId/limits', 'PUT'] as const
}

export function getPutV2UsersUserIdLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UsersUserIdLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']>,
    ) {
      return parseResponse(client.v2.users[':userId'].limits.$put(args, options))
    },
  })
}

export function usePutV2UsersUserIdLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']>,
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
  const mutationDefaults = getPutV2UsersUserIdLimitsMutationOptions<TError, TOnMutateResult>(
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

export function getV2IntegrationsGitQueryKey() {
  return ['v2', '/v2/integrations/git'] as const
}

export function getV2IntegrationsGitQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2IntegrationsGitQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.integrations.git.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2IntegrationsGit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>
            >
          >,
          ReturnType<typeof getV2IntegrationsGitQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2IntegrationsGitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2IntegrationsGitQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.integrations.git.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2IntegrationsGitProviderIdCreateRepoMutationKey() {
  return ['v2', '/v2/integrations/git/:providerId/create-repo', 'POST'] as const
}

export function getPostV2IntegrationsGitProviderIdCreateRepoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2IntegrationsGitProviderIdCreateRepoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.integrations.git[':providerId']['create-repo'].$post(args, options),
      )
    },
  })
}

export function usePostV2IntegrationsGitProviderIdCreateRepo<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']
          >,
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
  const mutationDefaults = getPostV2IntegrationsGitProviderIdCreateRepoMutationOptions<
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

export function getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyMutationKey() {
  return ['v2', '/v2/integrations/git/:providerId/register-deployment-key', 'POST'] as const
}

export function getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.integrations.git[':providerId']['register-deployment-key'].$post(args, options),
      )
    },
  })
}

export function usePostV2IntegrationsGitProviderIdRegisterDeploymentKey<
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
                Awaited<
                  ReturnType<
                    (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
          >,
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
  const mutationDefaults = getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyMutationOptions<
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

export function getPostV2ToolsEncodeAndSignMutationKey() {
  return ['v2', '/v2/tools/encode-and-sign', 'POST'] as const
}

export function getPostV2ToolsEncodeAndSignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tools)['encode-and-sign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ToolsEncodeAndSignMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']>) {
      return parseResponse(client.v2.tools['encode-and-sign'].$post(args, options))
    },
  })
}

export function usePostV2ToolsEncodeAndSign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tools)['encode-and-sign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']>,
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
  const mutationDefaults = getPostV2ToolsEncodeAndSignMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ToolsDecodeAndVerifyMutationKey() {
  return ['v2', '/v2/tools/decode-and-verify', 'POST'] as const
}

export function getPostV2ToolsDecodeAndVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tools)['decode-and-verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ToolsDecodeAndVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']>,
    ) {
      return parseResponse(client.v2.tools['decode-and-verify'].$post(args, options))
    },
  })
}

export function usePostV2ToolsDecodeAndVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tools)['decode-and-verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']>,
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
  const mutationDefaults = getPostV2ToolsDecodeAndVerifyMutationOptions<TError, TOnMutateResult>(
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
