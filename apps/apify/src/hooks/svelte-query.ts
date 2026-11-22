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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2ActorsQueryKey(args: InferRequestType<typeof client.v2.actors.$get>) {
  return ['v2', '/v2/actors', args] as const
}

export function getV2ActorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.actors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActorsQueryKey>
  >({
    queryKey: getV2ActorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Actors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.actors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Actors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.actors.$post>,
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
    const mutationDefaults = getPostV2ActorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId', args] as const
}

export function getV2ActorsActorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorsActorIdQueryKey>
  >({
    queryKey: getV2ActorsActorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ActorsActorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActorsActorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorsActorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV2ActorsActorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>,
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
    const mutationDefaults = getPutV2ActorsActorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2ActorsActorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ActorsActorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdVersionsQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/versions', args] as const
}

export function getV2ActorsActorIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdVersionsVersionNumberQueryKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber', args] as const
}

export function getV2ActorsActorIdVersionsVersionNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdVersionsVersionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdVersionsVersionNumber<
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
  args: () => InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorsActorIdVersionsVersionNumberQueryKey>
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
      ...getV2ActorsActorIdVersionsVersionNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2ActorsActorIdVersionsVersionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ActorsActorIdVersionsVersionNumberMutationOptions<
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

export function createPutV2ActorsActorIdVersionsVersionNumberBuildOnPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushMutationOptions<
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

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars', args] as const
}

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdVersionsVersionNumberEnvVars<
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
  args: () => InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdVersionsVersionNumberEnvVarsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdVersionsVersionNumberEnvVars<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdVersionsVersionNumberEnvVarsMutationOptions<
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

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars/:envVarName', args] as const
}

export function getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
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
  args: () => InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameMutationOptions<
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

export function getV2ActorsActorIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/webhooks', args] as const
}

export function getV2ActorsActorIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorsActorIdOauthConnectionsQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/oauth-connections', args] as const
}

export function getV2ActorsActorIdOauthConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdOauthConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId']['oauth-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdOauthConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorsActorIdOauthConnectionsQueryKey>
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
      ...getV2ActorsActorIdOauthConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorsActorIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds', args] as const
}

export function getV2ActorsActorIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdBuildsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdBuilds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdBuildsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdBuildsDefaultQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds/default', args] as const
}

export function getV2ActorsActorIdBuildsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdBuildsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].builds.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdBuildsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorsActorIdBuildsDefaultQueryKey>
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
      ...getV2ActorsActorIdBuildsDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId/openapi.json', args] as const
}

export function getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdBuildsBuildIdOpenapiJson<
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
  args: () => InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdBuildsBuildIdOpenapiJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorsActorIdBuildsBuildIdQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId', args] as const
}

export function getV2ActorsActorIdBuildsBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdBuildsBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].builds[':buildId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorsActorIdBuildsBuildIdQueryKey>
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
      ...getV2ActorsActorIdBuildsBuildIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdBuildsBuildIdAbort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdBuildsBuildIdAbortMutationOptions<
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

export function getV2ActorsActorIdRunsQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs', args] as const
}

export function getV2ActorsActorIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorsActorIdRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2ActorsActorIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdRunSyncQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/run-sync', args] as const
}

export function getV2ActorsActorIdRunSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdRunSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId']['run-sync'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdRunSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdRunSyncQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdRunSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdRunSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/run-sync-get-dataset-items', args] as const
}

export function getV2ActorsActorIdRunSyncGetDatasetItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdRunSyncGetDatasetItems<
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
  args: () => InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorsActorIdRunSyncGetDatasetItemsQueryKey>
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
      ...getV2ActorsActorIdRunSyncGetDatasetItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorsActorIdRunSyncGetDatasetItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdRunSyncGetDatasetItemsMutationOptions<
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

export function createPostV2ActorsActorIdValidateInput<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorsActorIdValidateInputMutationOptions<
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

export function getV2ActorsActorIdRunsLastQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs/last', args] as const
}

export function getV2ActorsActorIdRunsLastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdRunsLastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].runs.last.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdRunsLast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdRunsLastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorsActorIdRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs/:runId', args] as const
}

export function getV2ActorsActorIdRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorsActorIdRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actors[':actorId'].runs[':runId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorsActorIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorsActorIdRunsRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorTasksQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
) {
  return ['v2', '/v2/actor-tasks', args] as const
}

export function getV2ActorTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorTasksQueryKey>
  >({
    queryKey: getV2ActorTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ActorTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActorTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2ActorTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['actor-tasks']['$post']>,
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
    const mutationDefaults = getPostV2ActorTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorTasksActorTaskIdQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId', args] as const
}

export function getV2ActorTasksActorTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorTasksActorTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV2ActorTasksActorTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2ActorTasksActorTaskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2ActorTasksActorTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ActorTasksActorTaskIdMutationOptions<
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

export function getV2ActorTasksActorTaskIdInputQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/input', args] as const
}

export function getV2ActorTasksActorTaskIdInputQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdInputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].input.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdInput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorTasksActorTaskIdInputQueryKey>
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
      ...getV2ActorTasksActorTaskIdInputQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV2ActorTasksActorTaskIdInput<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2ActorTasksActorTaskIdInputMutationOptions<
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

export function getV2ActorTasksActorTaskIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/webhooks', args] as const
}

export function getV2ActorTasksActorTaskIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorTasksActorTaskIdWebhooksQueryKey>
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
      ...getV2ActorTasksActorTaskIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorTasksActorTaskIdRunsQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs', args] as const
}

export function getV2ActorTasksActorTaskIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorTasksActorTaskIdRunsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorTasksActorTaskIdRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorTasksActorTaskIdRunsMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunSyncQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync', args] as const
}

export function getV2ActorTasksActorTaskIdRunSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdRunSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdRunSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorTasksActorTaskIdRunSyncQueryKey>
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
      ...getV2ActorTasksActorTaskIdRunSyncQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorTasksActorTaskIdRunSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorTasksActorTaskIdRunSyncMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync-get-dataset-items', args] as const
}

export function getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdRunSyncGetDatasetItems<
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
  args: () => InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ActorTasksActorTaskIdRunSyncGetDatasetItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsMutationOptions<
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

export function getV2ActorTasksActorTaskIdRunsLastQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs/last', args] as const
}

export function getV2ActorTasksActorTaskIdRunsLastQueryOptions<
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
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorTasksActorTaskIdRunsLastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorTasksActorTaskIdRunsLast<
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
  args: () => InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ActorTasksActorTaskIdRunsLastQueryKey>
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
      ...getV2ActorTasksActorTaskIdRunsLastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorRunsQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
) {
  return ['v2', '/v2/actor-runs', args] as const
}

export function getV2ActorRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorRunsQueryKey>
  >({
    queryKey: getV2ActorRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-runs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ActorRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActorRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ActorRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
) {
  return ['v2', '/v2/actor-runs/:runId', args] as const
}

export function getV2ActorRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-runs'][':runId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorRunsRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV2ActorRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2ActorRunsRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2ActorRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ActorRunsRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2ActorRunsRunIdCharge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorRunsRunIdChargeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ActorBuildsQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
) {
  return ['v2', '/v2/actor-builds', args] as const
}

export function getV2ActorBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActorBuildsQueryKey>
  >({
    queryKey: getV2ActorBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-builds'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ActorBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActorBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActorBuildsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ActorBuildsBuildIdQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
) {
  return ['v2', '/v2/actor-builds/:buildId', args] as const
}

export function getV2ActorBuildsBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorBuildsBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-builds'][':buildId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorBuildsBuildIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2ActorBuildsBuildId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ActorBuildsBuildIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2ActorBuildsBuildIdAbort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ActorBuildsBuildIdAbortMutationOptions<
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

export function getV2ActorBuildsBuildIdOpenapiJsonQueryKey() {
  return ['v2', '/v2/actor-builds/:buildId/openapi.json'] as const
}

export function getV2ActorBuildsBuildIdOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorBuildsBuildIdOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-builds'][':buildId']['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorBuildsBuildIdOpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorBuildsBuildIdOpenapiJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorOauthAccountsConnectionIdAccountsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
) {
  return ['v2', '/v2/actor-oauth-accounts/:connectionId/accounts', args] as const
}

export function getV2ActorOauthAccountsConnectionIdAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorOauthAccountsConnectionIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorOauthAccountsConnectionIdAccounts<
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
  args: () => InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorOauthAccountsConnectionIdAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2ActorOauthAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
) {
  return ['v2', '/v2/actor-oauth-accounts/:accountId', args] as const
}

export function getV2ActorOauthAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ActorOauthAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['actor-oauth-accounts'][':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ActorOauthAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2ActorOauthAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2KeyValueStoresQueryKey(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
) {
  return ['v2', '/v2/key-value-stores', args] as const
}

export function getV2KeyValueStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KeyValueStoresQueryKey>
  >({
    queryKey: getV2KeyValueStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['key-value-stores'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2KeyValueStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KeyValueStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2KeyValueStoresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2KeyValueStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2KeyValueStoresMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHeadV2KeyValueStoresStoreIdRecordsRecordKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadV2KeyValueStoresStoreIdRecordsRecordKeyMutationOptions<
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

export function getV2DatasetsQueryKey(args: InferRequestType<typeof client.v2.datasets.$get>) {
  return ['v2', '/v2/datasets', args] as const
}

export function getV2DatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DatasetsQueryKey>
  >({
    queryKey: getV2DatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DatasetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Datasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.datasets.$post>,
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
    const mutationDefaults = getPostV2DatasetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadV2DatasetsDatasetIdItemsMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.datasets[':datasetId'].items.$head(undefined, options))
    },
  })
}

export function createHeadV2DatasetsDatasetIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getHeadV2DatasetsDatasetIdItemsMutationOptions<
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

export function getV2RequestQueuesQueryKey(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
) {
  return ['v2', '/v2/request-queues', args] as const
}

export function getV2RequestQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RequestQueuesQueryKey>
  >({
    queryKey: getV2RequestQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['request-queues'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2RequestQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['request-queues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RequestQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2RequestQueuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2RequestQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['request-queues']['$post']>,
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
    const mutationDefaults = getPostV2RequestQueuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2WebhooksQueryKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  return ['v2', '/v2/webhooks', args] as const
}

export function getV2WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >({
    queryKey: getV2WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.webhooks.$post>,
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
    const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhookId', args] as const
}

export function getV2WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2WebhooksWebhookIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2WebhooksWebhookIdTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2WebhooksWebhookIdDispatchesQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhookId/dispatches', args] as const
}

export function getV2WebhooksWebhookIdDispatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2WebhooksWebhookIdDispatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].dispatches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2WebhooksWebhookIdDispatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2WebhooksWebhookIdDispatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2WebhookDispatchesQueryKey(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
) {
  return ['v2', '/v2/webhook-dispatches', args] as const
}

export function getV2WebhookDispatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhookDispatchesQueryKey>
  >({
    queryKey: getV2WebhookDispatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['webhook-dispatches'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2WebhookDispatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhookDispatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhookDispatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2WebhookDispatchesDispatchIdQueryKey(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
) {
  return ['v2', '/v2/webhook-dispatches/:dispatchId', args] as const
}

export function getV2WebhookDispatchesDispatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2WebhookDispatchesDispatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['webhook-dispatches'][':dispatchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2WebhookDispatchesDispatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2WebhookDispatchesDispatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2SchedulesQueryKey(args: InferRequestType<typeof client.v2.schedules.$get>) {
  return ['v2', '/v2/schedules', args] as const
}

export function getV2SchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesQueryKey>
  >({
    queryKey: getV2SchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.schedules.$post>,
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
    const mutationDefaults = getPostV2SchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SchedulesScheduleIdQueryKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
) {
  return ['v2', '/v2/schedules/:scheduleId', args] as const
}

export function getV2SchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2SchedulesScheduleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2SchedulesScheduleIdInvoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SchedulesScheduleIdInvokeMutationOptions<
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

export function getV2SchedulesScheduleIdLogQueryKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
) {
  return ['v2', '/v2/schedules/:scheduleId/log', args] as const
}

export function getV2SchedulesScheduleIdLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SchedulesScheduleIdLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].log.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SchedulesScheduleIdLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2SchedulesScheduleIdLogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StoreQueryKey(args: InferRequestType<typeof client.v2.store.$get>) {
  return ['v2', '/v2/store', args] as const
}

export function getV2StoreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.store.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2StoreQueryKey>
  >({
    queryKey: getV2StoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.store.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Store<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.store.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2StoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StoreQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function getV2UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >({
    queryKey: getV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2UsersMeQueryKey() {
  return ['v2', '/v2/users/me'] as const
}

export function getV2UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeQueryKey>
  >({
    queryKey: getV2UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2UsersMeUsageMonthlyQueryKey(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
) {
  return ['v2', '/v2/users/me/usage/monthly', args] as const
}

export function getV2UsersMeUsageMonthlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeUsageMonthlyQueryKey>
  >({
    queryKey: getV2UsersMeUsageMonthlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.me.usage.monthly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UsersMeUsageMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersMeUsageMonthlyQueryKey>
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
      ...getV2UsersMeUsageMonthlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2UsersMeLimitsQueryKey() {
  return ['v2', '/v2/users/me/limits'] as const
}

export function getV2UsersMeLimitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersMeLimitsQueryKey>
  >({
    queryKey: getV2UsersMeLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.me.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UsersMeLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersMeLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersMeLimitsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutV2UsersMeLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.users.me.limits.$put>,
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
    const mutationDefaults = getPutV2UsersMeLimitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2UsersUserIdUsageMonthlyQueryKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
) {
  return ['v2', '/v2/users/:userId/usage/monthly', args] as const
}

export function getV2UsersUserIdUsageMonthlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2UsersUserIdUsageMonthlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users[':userId'].usage.monthly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UsersUserIdUsageMonthly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2UsersUserIdUsageMonthlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2UsersUserIdLimitsQueryKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
) {
  return ['v2', '/v2/users/:userId/limits', args] as const
}

export function getV2UsersUserIdLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2UsersUserIdLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users[':userId'].limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UsersUserIdLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersUserIdLimitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV2UsersUserIdLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2UsersUserIdLimitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2IntegrationsGitQueryKey() {
  return ['v2', '/v2/integrations/git'] as const
}

export function getV2IntegrationsGitQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2IntegrationsGitQueryKey>
  >({
    queryKey: getV2IntegrationsGitQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.integrations.git.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2IntegrationsGit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2IntegrationsGitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2IntegrationsGitQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV2IntegrationsGitProviderIdCreateRepo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2IntegrationsGitProviderIdCreateRepoMutationOptions<
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

export function createPostV2IntegrationsGitProviderIdRegisterDeploymentKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyMutationOptions<
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

export function createPostV2ToolsEncodeAndSign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ToolsEncodeAndSignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2ToolsDecodeAndVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ToolsDecodeAndVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
